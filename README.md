# VA Lead Solutions — Site

A single-page, informational Next.js site. Its only job: look credible when
someone looks the company up mid-call. No marketing funnel, no lead-capture
form (yet), no SEO push.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

Before pushing changes, run the same checks CI would:

```bash
npm run lint   # eslint-config-next, core-web-vitals
npm run build  # type-checks and produces the static build
```

## Everything still needed from Adam

Open **`data/copy.ts`** and search for `[` — every bracketed placeholder is
something to confirm with Adam before this launches:

- **Real phone number** (currently `1-800-000-0000` throughout — one field
  to update: `brand.phoneDisplay` / `brand.phoneHref`).
- **Business address**, if he wants one listed (optional).
- **Lead delivery specifics**: how exclusive real-time leads are delivered
  and how fast; the age range and vetting process for aged leads.
- **Call center specifics**: onshore/offshore locations, hours/timezone
  coverage, any minimum commitments.
- **What makes the "AI Agent Alternative" actually better** — needs one
  real, specific claim (connect rate, escalation path, etc.), not generic
  marketing language.
- **Dialer platform/type**, and any compliance features worth naming
  (TCPA compliance, DNC scrubbing).
- **The "Why VA Lead Solutions" paragraph** — 2–3 real, checkable specifics:
  years in business, volume of leads delivered, number of active clients,
  certifications. No invented stats — leave it as the placeholder until
  Adam gives real numbers.

Nothing else in the codebase needs to change once these are filled in —
it's all centralized in that one file.

## Structure

```
app/            Root layout, page, global styles
app/icon.png    Favicon + apple-icon.png, derived from the logo's VA mark
components/     Header, Hero, Leads, CallCenterSolutions, WhyUs, Contact, Footer
data/copy.ts    All editable copy — start here
public/         va-logo.png (the provided logo)
```

The two icons in `app/` are the logo cropped to just the gradient "VA" block —
the "LEAD SOLUTIONS" wordmark is illegible at 16–32px, so it's dropped and the
gradient is extended in its place. Regenerate them from `public/va-logo.png` if
the logo ever changes.

## Design notes

- **Palette**, sampled directly from the logo's own gradient: near-black
  navy (`#091116`) down to teal-blue (`#3C677F`), plus the wordmark's
  charcoal gray (`#4D4B4B`) for body text.
- **Signature element**: the hero and contact sections use the exact same
  navy-to-teal gradient as the logo itself, so the page and the mark feel
  like one continuous piece rather than a logo dropped onto an unrelated
  template.
- **Type**: Newsreader (serif, echoes the logo's classical "VA" mark) for
  headlines, Public Sans for body — deliberately different faces from any
  other project so this doesn't read as a reskinned template.
- No lead-capture form, no testimonials, no stats — none of that exists
  yet, and per Adam's brief this site isn't trying to convert cold traffic.
  Add a form later only if the site's purpose changes.

## Known warnings

- `Failed to find font override values for font 'Newsreader'` during `npm run
  build` is cosmetic. Next 14 ships fallback metrics for a fixed list of Google
  fonts and Newsreader isn't on it, so it can't compute a `size-adjust` fallback
  to reduce font-swap layout shift. The font itself loads and renders normally.
- `npm audit` reports high-severity Next.js advisories that are only fixed in
  Next 16. They cover middleware, rewrites, Server Actions, and the image
  optimizer — none of which this site uses; it's four static prerendered routes.
  Next is pinned to the latest 14.2.x patch. Revisit if the site ever gains a
  server-side surface (e.g. a lead-capture form).
