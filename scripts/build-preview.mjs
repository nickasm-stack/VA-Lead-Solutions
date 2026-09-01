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
let logoHits = 0;
html = html.replace(/\/va-logo-web\.png/g, () => (logoHits++, logo));
if (!logoHits) throw new Error("logo reference not found in the markup");
if (/_next\/image/.test(html)) throw new Error("an optimizer URL would 404 here");

// 3. Scripts. Chunk <script src> tags become inline scripts in document order.
// Webpack's chunk format pushes onto a queue the runtime drains when it loads,
// so document order is safe and stricter than the async ordering Next emits.
let inlined = 0;
let dropped = 0;
html = html.replace(
  /<script([^>]*)\ssrc="(\/_next\/static\/[^"]+)"([^>]*)><\/script>/g,
  (_m, pre, src, post) => {
    // Legacy polyfills are nomodule, so no browser that can render this will
    // run them. They also carry a literal U+FFFD that the host rejects.
    if (/\bnoModule\b/i.test(`${pre} ${post}`)) return (dropped++, "");
    inlined++;
    const code = readFileSync(asset(src), "utf8")
      // React's bundle contains the literal string "<script></script>", which
      // would close this inline tag early and silently abort hydration: the
      // page still renders, nothing is interactive.
      .replace(/<\/script/gi, "<\\/script")
      .replace(/\/va-logo-web\.png/g, logo);
    if (/<\/script/i.test(code)) throw new Error(`escape failed for ${src}`);
    return `<script>${code}</script>`;
  },
);
if (inlined < 5) throw new Error(`expected the full chunk set, inlined ${inlined}`);

const headHtml = html.slice(html.indexOf("<head"), html.indexOf("</head>"));
const bodyHtml = html.slice(html.indexOf("<body>") + 6, html.lastIndexOf("</body>"));
const headScripts = [...headHtml.matchAll(/<script[^>]*>[\s\S]*?<\/script>/g)].map((m) => m[0]);

// Preload hints point at /_next URLs that do not exist in a single file.
const body = bodyHtml.replace(/<link[^>]*rel="(?:preload|prefetch|preconnect)"[^>]*>/g, "");

// Check markup only. Script bodies legitimately contain "/_next/": it is
// webpack's publicPath constant, not a resource this page will fetch.
const markupOnly = (s) => s.replace(/<script[\s\S]*?<\/script>/g, "");
for (const [label, frag] of [["body", markupOnly(body)], ["head", markupOnly(headScripts.join(""))]]) {
  const stray = frag.match(/(?:src|href)="\/_next\/[^"]*"/g);
  if (stray) throw new Error(`unresolved /_next reference in ${label}: ${stray.slice(0, 3)}`);
}

const out = `<title>VA Lead Solutions</title>
<style>
${css}
</style>
${headScripts.join("\n")}
${body.trim()}
`;

// The host rejects U+FFFD outright, and it is invisible in a diff.
const fffd = (out.match(/�/g) || []).length;
if (fffd) throw new Error(`${fffd} U+FFFD character(s) in output`);

writeFileSync(OUT, out);
console.log(`fonts inlined:  ${fontCount}`);
console.log(`chunks inlined: ${inlined} (dropped ${dropped} nomodule)`);
console.log(`logo rewrites:  ${logoHits}`);
console.log(`preview.html:   ${(out.length / 1024 / 1024).toFixed(2)} MB`);
