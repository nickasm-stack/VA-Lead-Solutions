/**
 * Builds a single self-contained HTML file from the production build, so the
 * site can be reviewed at a shareable URL without a server.
 *
 *   npm run build && npm run preview   ->  preview.html
 *
 * Everything ships inline: the stylesheet, the font files, the logo and the
 * Next.js runtime. The runtime matters. The reveals, accordion, mobile nav and
 * back-to-top are client components, so a preview that dropped the JavaScript
 * would not show the behaviour being reviewed.
 *
 * Uses only Node builtins, no dependencies.
 */
import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const ROOT = process.cwd();
const PRERENDERED = join(ROOT, ".next/server/app/index.html");
const OUT = join(ROOT, "preview.html");

let html;
try {
  html = readFileSync(PRERENDERED, "utf8");
} catch {
  console.error("No build found. Run `npm run build` first.");
  process.exit(1);
}

const asset = (url) => join(ROOT, ".next", url.replace("/_next/", ""));

// 1. Stylesheet, with every font file inlined.
const cssHref = html.match(/href="(\/_next\/static\/css\/[^"]+)"/)?.[1];
if (!cssHref) throw new Error("no stylesheet link in the prerendered HTML");
let css = readFileSync(asset(cssHref), "utf8");
let fontCount = 0;
css = css.replace(/url\((\/_next\/static\/media\/[^)]+)\)/g, (_, p) => {
  fontCount++;
  return `url(data:font/woff2;base64,${readFileSync(asset(p)).toString("base64")})`;
});

// next/font declares its CSS variables through classes on <html>, but the host
// page owns that tag. Without re-declaring them both faces silently fall back
// to system sans, which looks plausible enough to miss.
const htmlClasses = (html.match(/<html[^>]*class="([^"]+)"/)?.[1] ?? "")
  .split(/\s+/)
  .filter(Boolean);
const fontVars = htmlClasses
  .map((c) => css.match(new RegExp(`\\.${c}\\{([^}]*)\\}`))?.[1])
  .filter(Boolean);
if (fontVars.length !== htmlClasses.length) {
  throw new Error("could not resolve every <html> class to a stylesheet rule");
}
css += `\n:root{${fontVars.join(";")}}\n`;

if (!/\[data-reveal\]\{[^}]*opacity:\s*0/.test(css)) {
  throw new Error("reveal styles missing from the stylesheet");
}

// 2. Logo. next/image re-derives src from its prop on every render, and that
// prop lives in the page chunk (Header is a client component), so patching the
// rendered attribute alone would break the image the moment React re-renders.
const logo = `data:image/png;base64,${readFileSync(join(ROOT, "public/va-logo-web.png")).toString("base64")}`;
// Only where the path is the whole value, never where it is the tail of an
// absolute URL: the JSON-LD carries https://<domain>/va-logo-web.png, and a
// blind swap spliced a 34KB data URI into the middle of that string.
let logoHits = 0;
html = html.replace(/(?<=")\/va-logo-web\.png/g, () => (logoHits++, logo));
if (!logoHits) throw new Error("logo reference not found in the markup");
if (/_next\/image/.test(html)) throw new Error("an optimizer URL would 404 here");

// 3. Scripts. Chunk <script src> tags become inline scripts, in place.
const chunkScripts = [];
let dropped = 0;
html = html.replace(
  /<script([^>]*)\ssrc="(\/_next\/static\/[^"]+)"([^>]*)><\/script>/g,
  (_m, pre, src, post) => {
    // Legacy polyfills are nomodule, so no browser that can render this will
    // run them. They also carry a literal U+FFFD that the host rejects.
    if (/\bnoModule\b/i.test(`${pre} ${post}`)) {
      dropped++;
      return "";
    }
    const code = readFileSync(asset(src), "utf8")
      // React's bundle contains the literal string "<script></script>", which
      // would close this inline tag early and silently abort hydration: the
      // page still renders, nothing is interactive.
      .replace(/<\/script/gi, "<\\/script")
      .replace(/(?<=")\/va-logo-web\.png/g, () => logo);
    if (/<\/script/i.test(code)) throw new Error(`escape failed for ${src}`);
    chunkScripts.push(`<script>${code}</script>`);
    return "";
  },
);
const inlined = chunkScripts.length;
if (inlined < 5) throw new Error(`expected the full chunk set, inlined ${inlined}`);

// Next loads these with `async`, so they run only once the document is parsed
// and every inline `self.__next_f.push(...)` row of the RSC payload has run.
// An inline script runs synchronously where it sits, so leaving them in place
// starts hydration against a payload that is still half-written: React throws
// and renders an empty root. Where Next splits that payload shifts with the
// copy, so it breaks intermittently and looks like a content bug. Moving them
// to the end of the body restores the ordering `async` gave us.
html = html.replace("</body>", () => `${chunkScripts.join("\n")}</body>`);

// Preload hints point at /_next URLs that do not exist in a single file.
html = html.replace(/<link[^>]*rel="(?:preload|prefetch|preconnect)"[^>]*>/g, "");

// The reveal styles must reach the page, or every animated element renders
// permanently invisible.
if (!/\[data-reveal\]\{[^}]*opacity:\s*0/.test(css)) {
  throw new Error("reveal styles missing from the stylesheet");
}

// Replace the external stylesheet link with the inlined one.
html = html.replace(/<link[^>]*rel="stylesheet"[^>]*>/, () => `<style>${css}</style>`);

const markupOnly = html.replace(/<script[\s\S]*?<\/script>/g, "");
const stray = markupOnly.match(/(?:src|href)="\/_next\/[^"]*"/g);
if (stray) throw new Error(`unresolved /_next reference: ${stray.slice(0, 3)}`);

// 4. Wrap the finished document in an iframe.
//
// Next's App Router renders the whole document, <html> included, and hydrates
// against it. Splicing that into the host page's body meant React was asked to
// hydrate a document it did not own, which mismatches by construction: it
// recovered by client-rendering, and whether that recovery succeeded depended
// on where Next happened to split the RSC payload. A copy change moved those
// boundaries and the recovery started throwing, wiping the page to blank.
//
// In an iframe React gets a complete document that matches exactly, so it
// hydrates cleanly and none of that applies. The document travels as base64
// because it cannot then contain any sequence that closes the script element
// holding it.
const doc = `<!doctype html>${html.trim()}`;
const encoded = Buffer.from(doc, "utf8").toString("base64");

const out = `<title>VA Lead Solutions</title>
<style>
  html, body { margin: 0; padding: 0; height: 100%; background: #fff; }
  #site { display: block; width: 100%; height: 100vh; border: 0; }
</style>
<iframe id="site" title="VA Lead Solutions"></iframe>
<script type="text/plain" id="doc">${encoded}</script>
<script>
  (function () {
    var raw = document.getElementById("doc").textContent.trim();
    var bytes = Uint8Array.from(atob(raw), function (c) { return c.charCodeAt(0); });
    // A blob URL rather than srcdoc: an about:srcdoc document has no valid
    // location, and Next calls new URL() against it during render, which
    // throws "Invalid base URL" and takes the whole page down. A blob gives
    // the frame a real absolute URL, so that resolves and in-page anchors
    // still work (a <base href> would fix the URL but send every #section
    // link off to the live domain).
    var blob = new Blob([bytes], { type: "text/html" });
    document.getElementById("site").src = URL.createObjectURL(blob);
  })();
</script>
`;

// The artifact service rejects U+FFFD outright, and it is invisible in a diff.
const fffd = (out.match(/\uFFFD/g) || []).length;
if (fffd) throw new Error(`${fffd} U+FFFD character(s) in output`);

writeFileSync(OUT, out);
console.log(`fonts inlined:  ${fontCount}`);
console.log(`chunks inlined: ${inlined} (dropped ${dropped} nomodule)`);
console.log(`logo rewrites:  ${logoHits}`);
console.log(`preview.html:   ${(out.length / 1024 / 1024).toFixed(2)} MB`);
