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

## Security

The site is static: four prerendered routes, no forms, no user input, no
cookies, no analytics, no database. Verified in a browser, it contacts **only
its own origin** — fonts are self-hosted by `next/font`, so there is no
third-party JavaScript and nothing to leak a visitor's referrer to.

Set in `next.config.mjs`, verified against the running server:

| Header | Value |
| --- | --- |
| `Content-Security-Policy` | `default-src 'self'`, no external script/frame/object |
| `Strict-Transport-Security` | `max-age=63072000; includeSubDomains` |
| `X-Frame-Options` | `DENY` (plus `frame-ancestors 'none'`) |
| `X-Content-Type-Options` | `nosniff` |
| `Referrer-Policy` | `strict-origin-when-cross-origin` |
| `Permissions-Policy` | camera/mic/geolocation/payment/usb denied |
| `X-Powered-By` | removed (`poweredByHeader: false`) |

Two caveats that decide whether the above is actually in force:

- **`headers()` only applies when a Next server or Vercel serves the site.**
  Behind a static export on S3, Netlify, or Cloudflare Pages the config is
  ignored and the same headers must be set on the host.
- **`script-src` needs `'unsafe-inline'`** because Next inlines its hydration
  payload. A nonce policy requires middleware, which makes every page dynamic.
  For a page with no user input this is an acceptable trade: it still blocks
  script from any other origin, which is the attack that matters here.

### Before launch

- **Confirm HTTPS works on the real domain before HSTS reaches browsers.** A
  two-year `max-age` is not something a visitor can clear. Do not submit to the
  HSTS preload list until the domain has been stable on HTTPS for a while —
  removal from that list takes months.
- **Set up dependency updates.** Enable Dependabot or Renovate on the repo.
  The remaining `npm audit` advisories are Next 16-only fixes; see below.
- **Restrict who can deploy.** Protect the default branch and require review,
  so a merge is the only route to production.

### Image optimizer: off, deliberately

`images: { unoptimized: true }`. `/_next/image` used to answer arbitrary
`w`/`q` permutations, each one a CPU-bound resize and a cache write — and on
Vercel a *billed* transformation, which makes it a cost-abuse vector as well
as a denial-of-service one. External URLs and path traversal were correctly
rejected, so the exposure was resource exhaustion, not disclosure.

The site has exactly one image: a 40px logo. `public/va-logo-web.png` (160px,
26KB) is what the page serves; `public/va-logo.png` is kept as the 587px
original. With the optimizer off the endpoint 404s, and the site stays
statically exportable.

If real imagery is ever added, re-enable it and pre-size assets, or keep it
off and generate sized variants at build time.

### If a contact or quote form is ever added

The site currently collects nothing, which is why its attack surface is
close to zero. A form changes that category, and these stop being optional:

- Spam and abuse handling, and rate limiting on the endpoint.
- A privacy policy, plus a lawful basis for storing the enquiry.
- Consent capture appropriate to the industry — for mortgage and legal
  enquiries this is TCPA territory, and the consent record matters as much
  as the lead.
- Encrypted transport and storage, and a decision about retention. Consumer
  mortgage and legal enquiries are sensitive personal data; treat a breach of
  them as a reportable event and plan accordingly.
- `form-action` in the CSP will need widening if the form posts off-origin.

## Search indexing

Verified against the running build:

- `robots.txt` and `sitemap.xml` are generated (`app/robots.ts`,
  `app/sitemap.ts`) and reference the canonical origin.
- Canonical URL, Open Graph and Twitter card tags, and a 1200x630 share image
  at `public/opengraph-image.png`.
- JSON-LD for `Organization` and `WebSite`.
- All copy is server-rendered — the page's full text is in the HTML source,
  so it does not depend on JavaScript to be read.

**The scroll reveals do not hide content from crawlers.** They start at
`opacity: 0`, which is a fair thing to worry about, but rendering the page in
a tall crawler-style viewport reveals all 41 elements without any scrolling,
and the rendered text length is identical either way.

### Two things to set before launch

**1. `NEXT_PUBLIC_SITE_URL`.** Everything above derives from it, and it
defaults to `https://valeadsolutions.com`. If the real domain differs, every
canonical tag, Open Graph URL and sitemap entry points at the wrong host —
worse than having none. Set it in the Vercel project's environment variables.

**2. `NEXT_PUBLIC_SITE_INDEXABLE`.** Defaults to indexable. Set it to `false`
to serve `noindex` plus a disallow-all `robots.txt`.

Consider holding indexing until the bracketed placeholders in `data/copy.ts`
are replaced. Whatever Google indexes is what it shows in results, so
launching as-is risks "[Adam: confirm delivery method...]" appearing as your
search snippet, and getting that removed again is slow. Use it for preview
deployments regardless, so staging never competes with production.

### Structured data will not state a placeholder

`components/StructuredData.tsx` omits any field still carrying a bracketed
placeholder. Right now that means the phone number is absent (it is still the
`000-0000` dummy) and no `FAQPage` is emitted at all, because every answer is
a placeholder. Both appear automatically once the copy is real — nothing to
remember.

This matters more than it looks: a `FAQPage` is eligible for rich results, so
placeholder answers could be displayed directly under the search listing, and
structured data that contradicts the page risks a manual action.

### After launch

- Verify the domain in Google Search Console and Bing Webmaster Tools, and
  submit the sitemap.
- Confirm one host answers — `www` and apex should not both serve; redirect
  one to the other so the canonical is unambiguous.
- Add a Google Business Profile if the business has a service address. For a
  regional lead-gen firm that is usually the largest single source of
  qualified search traffic, and it is where `LocalBusiness` schema and an
  address would then be worth adding.

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
