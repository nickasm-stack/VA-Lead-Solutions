/**
 * Builds a single self-contained HTML file from the production build, so the
 * site can be reviewed at a shareable URL without a server or a login.
 *
 *   npm run build && npm run preview   ->  preview.html
 *
 * The stylesheet, every font file and the logo ship inline, so the file has no
 * external dependencies at all.
 *
 * What it deliberately does NOT ship is Next's client runtime. Earlier versions
 * inlined it and hydrated the real app. That worked until the first click: with
 * the document served from a blob URL the router's first state update replaced
 * the hydrated tree with an empty one and the page went blank, silently, with
 * no console error to follow. The five behaviours on this site (sticky header,
 * scroll reveals, FAQ accordion, mobile nav, back-to-top) are small and purely
 * presentational, so the preview reimplements them against the prerendered
 * markup in about sixty lines of plain JavaScript. That drops ~1MB from the
 * file and removes the whole class of hydration failure from a document whose
 * only job is to be looked at.
 *
 * The shipped site is unaffected: it still runs React, and its behaviour is
 * verified against the real build, not against this file.
 *
 * Uses only Node builtins, no dependencies.
 */
import { readFileSync, writeFileSync } from "node:fs";
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

// ── 1. Stylesheet, with every font file inlined ───────────────────────────
const cssHref = html.match(/href="(\/_next\/static\/css\/[^"]+)"/)?.[1];
if (!cssHref) throw new Error("no stylesheet link in the prerendered HTML");

let css = readFileSync(asset(cssHref), "utf8");
let fontCount = 0;
css = css.replace(/url\((\/_next\/static\/media\/[^)]+)\)/g, (_, p) => {
  fontCount++;
  return `url(data:font/woff2;base64,${readFileSync(asset(p)).toString("base64")})`;
});
if (!fontCount) throw new Error("no font files found in the stylesheet");

// next/font declares its CSS variables through classes on <html>, but the host
// page owns that tag. Without re-declaring them both faces silently fall back
// to system sans, which looks plausible enough to miss.
const htmlClasses = (html.match(/<html[^>]*class="([^"]+)"/)?.[1] ?? "")
  .split(/\s+/)
  .filter(Boolean);
const fontVars = htmlClasses
  .map((c) => css.match(new RegExp(`\\.${c}\\{([^}]*)\\}`))?.[1])
  .filter(Boolean);
if (!htmlClasses.length || fontVars.length !== htmlClasses.length) {
  throw new Error("could not resolve every <html> class to a stylesheet rule");
}
css += `\n:root{${fontVars.join(";")}}\n`;

// The reveal styles are what makes the shim necessary; if they are gone the
// shim is toggling a class nothing reads.
if (!/\[data-reveal\]\{[^}]*opacity:\s*0/.test(css)) {
  throw new Error("reveal styles missing from the stylesheet");
}

// The hamburger's open state is three Tailwind utilities that only exist in
// the bundle because the component references them. If a refactor drops them
// the menu button stops animating, which is easy to miss in a diff.
for (const cls of ["rotate-45", "-rotate-45", "opacity-0"]) {
  if (!css.includes(`.${cls}{`) && !css.includes(`.${cls},`)) {
    throw new Error(`hamburger utility .${cls} is not in the stylesheet`);
  }
}

// ── 2. Body markup, stripped of Next's runtime and RSC payload ────────────
const bodyMatch = html.match(/<body[^>]*>([\s\S]*)<\/body>/);
if (!bodyMatch) throw new Error("no <body> in the prerendered HTML");
let body = bodyMatch[1].replace(/<script[\s\S]*?<\/script>/g, "");

// ── 3. Logo, inlined ──────────────────────────────────────────────────────
// With React gone the markup's src is authoritative, so this is a plain
// attribute swap rather than a patch to a bundled chunk.
const logo = `data:image/png;base64,${readFileSync(join(ROOT, "public/va-logo-web.png")).toString("base64")}`;
let logoHits = 0;
body = body.replace(/src="\/va-logo-web\.png"/g, () => (logoHits++, `src="${logo}"`));
if (logoHits !== 1) throw new Error(`expected 1 logo reference, found ${logoHits}`);

// Nothing may still point at the dev server's asset paths.
const stray = body.match(/(?:src|href)="\/_next\/[^"]*"/g);
if (stray) throw new Error(`unresolved /_next reference: ${stray.slice(0, 3)}`);

// The markup the shim drives has to actually be there.
const required = {
  "[data-reveal]": /data-reveal/,
  ".faq-trigger": /class="faq-trigger"/,
  "#mobile-nav": /id="mobile-nav"/,
  ".back-to-top": /class="back-to-top"/,
  ".site-header": /class="site-header"/,
};
for (const [name, re] of Object.entries(required)) {
  if (!re.test(body)) throw new Error(`preview shim target missing: ${name}`);
}

// ── 4. Behaviour shim ─────────────────────────────────────────────────────
// One-to-one with the client components: components/Header.tsx,
// components/Reveal.tsx, components/FAQ.tsx, components/MobileNav.tsx and
// components/BackToTop.tsx. The prerendered markup already carries the correct
// initial state, so this only has to handle transitions.
const BAR_BASE = "absolute left-0 block h-px w-full bg-current transition-all duration-200";
const shim = `
(function () {
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Header.tsx: border + shadow once the page moves.
  var header = document.querySelector(".site-header");
  // BackToTop.tsx: appears past 700px, stays in the a11y tree either way.
  var toTop = document.querySelector(".back-to-top");
  function onScroll() {
    var y = window.scrollY;
    header.classList.toggle("is-scrolled", y > 12);
    var show = y > 700;
    toTop.classList.toggle("is-visible", show);
    toTop.setAttribute("aria-hidden", String(!show));
    toTop.tabIndex = show ? 0 : -1;
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
  toTop.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Reveal.tsx: reveal once on intersection, never re-hide.
  var reveals = [].slice.call(document.querySelectorAll("[data-reveal]"));
  if (reduced || typeof IntersectionObserver === "undefined") {
    reveals.forEach(function (el) { el.classList.add("is-visible"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        e.target.classList.add("is-visible");
        io.unobserve(e.target);
      });
    }, { rootMargin: "0px 0px -10% 0px", threshold: 0.1 });
    reveals.forEach(function (el) { io.observe(el); });
  }

  // FAQ.tsx: single-open accordion, opening one closes the other.
  var triggers = [].slice.call(document.querySelectorAll(".faq-trigger"));
  triggers.forEach(function (trigger) {
    trigger.addEventListener("click", function () {
      var wasOpen = trigger.getAttribute("aria-expanded") === "true";
      triggers.forEach(function (t) {
        t.setAttribute("aria-expanded", "false");
        document.getElementById(t.getAttribute("aria-controls"))
          .removeAttribute("data-open");
      });
      if (wasOpen) return;
      trigger.setAttribute("aria-expanded", "true");
      document.getElementById(trigger.getAttribute("aria-controls"))
        .setAttribute("data-open", "");
    });
  });

  // MobileNav.tsx: panel, hamburger animation, Escape, scroll lock.
  var navToggle = document.querySelector('button[aria-controls="mobile-nav"]');
  var navPanel = document.getElementById("mobile-nav");
  var bars = [].slice.call(navToggle.querySelectorAll("span span"));
  var BASE = ${JSON.stringify(BAR_BASE)};
  var CLOSED = ["top-0", "top-1/2", "top-full"];
  var OPEN = ["top-1/2 rotate-45", "top-1/2 opacity-0", "top-1/2 -rotate-45"];
  var navOpen = false;
  var previousOverflow = "";

  function setNav(open) {
    if (open === navOpen) return;
    navOpen = open;
    navPanel.hidden = !open;
    navToggle.setAttribute("aria-expanded", String(open));
    navToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    bars.forEach(function (bar, i) {
      bar.className = BASE + " " + (open ? OPEN[i] : CLOSED[i]);
    });
    if (open) {
      previousOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = previousOverflow;
    }
  }

  navToggle.addEventListener("click", function () { setNav(!navOpen); });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") setNav(false);
  });
  navPanel.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", function () { setNav(false); });
  });
  var wide = window.matchMedia("(min-width: 1024px)");
  function closeIfWide() { if (wide.matches) setNav(false); }
  closeIfWide();
  wide.addEventListener("change", closeIfWide);
})();
`;

// ── 5. Assemble ───────────────────────────────────────────────────────────
// A fragment rather than a full document: the artifact host owns <html> and
// <head>, and without React there is nothing that needs to own them back.
const out = `<title>VA Lead Solutions</title>
<style>${css}</style>
<noscript><style>[data-reveal]{opacity:1!important;transform:none!important}</style></noscript>
${body.trim()}
<script>${shim}</script>
`;

// The artifact service rejects U+FFFD outright, and it is invisible in a diff.
const fffd = (out.match(/�/g) || []).length;
if (fffd) throw new Error(`${fffd} U+FFFD character(s) in output`);

// A stray </script> anywhere inside the shim would close it early.
if (/<\/script/i.test(shim)) throw new Error("shim contains a script close tag");

writeFileSync(OUT, out);
console.log(`fonts inlined: ${fontCount}`);
console.log(`logo inlined:  ${logoHits}`);
console.log(`scripts dropped from markup: yes`);
console.log(`preview.html:  ${(out.length / 1024).toFixed(0)} KB`);
