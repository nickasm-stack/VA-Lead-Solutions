# VA Lead Solutions: Site

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

Open **`data/copy.ts`** and search for `[`. Every bracketed placeholder is
something to confirm with Adam before this launches:

- **Real phone number** (currently `1-800-000-0000` throughout, though one field
  to update: `brand.phoneDisplay` / `brand.phoneHref`).
- **Business address**, if he wants one listed (optional).
- **Lead delivery specifics**: how exclusive real-time leads are delivered
  and how fast; the age range and vetting process for aged leads.
- **Call center specifics**: onshore/offshore locations, hours/timezone
  coverage, any minimum commitments.
- **What makes the "AI Agent Alternative" actually better**, which needs one
  real, specific claim (connect rate, escalation path, etc.), not generic
  marketing language.
- **Dialer platform/type**, and any compliance features worth naming
  (TCPA compliance, DNC scrubbing).
- **The "Why VA Lead Solutions" paragraph**: 2–3 specifics:
  years in business, volume of leads delivered, number of active clients,
  certifications. Leave it as the question until
  Adam gives real numbers.

Nothing else in the codebase needs to change once these are filled in;
it's all centralized in that one file.

## Structure

```
app/            Root layout, page, global styles
app/icon.png    Favicon + apple-icon.png, derived from the logo's VA mark
components/     Header, Hero, Leads, CallCenterSolutions, WhyUs, Contact, Footer
data/copy.ts    All editable copy, start here
public/         va-logo.png (the provided logo)
```

The two icons in `app/` are the logo cropped to just the gradient "VA" block.
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
  headlines, Public Sans for body, deliberately different faces from any
  other project so this doesn't read as a reskinned template.
- No lead-capture form, no testimonials, no stats. None of that exists
  yet, and per Adam's brief this site isn't trying to convert cold traffic.
  Add a form later only if the site's purpose changes.

## Security

The site is static: four prerendered routes, no forms, no user input, no
cookies, no analytics, no database. Verified in a browser, it contacts **only
its own origin**. Fonts are self-hosted by `next/font`, so there is no
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
  HSTS preload list until the domain has been stable on HTTPS for a while;
  removal from that list takes months.
- **Set up dependency updates.** Enable Dependabot or Renovate on the repo.
  The remaining `npm audit` advisories are Next 16-only fixes; see below.
- **Restrict who can deploy.** Protect the default branch and require review,
  so a merge is the only route to production.

### Image optimizer: off, deliberately

`images: { unoptimized: true }`. `/_next/image` used to answer arbitrary
`w`/`q` permutations, each one a CPU-bound resize and a cache write, and on
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
- Consent capture appropriate to the industry. For mortgage and legal
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
- All copy is server-rendered, so the page's full text is in the HTML source and
  so it does not depend on JavaScript to be read.

**The scroll reveals do not hide content from crawlers.** They start at
`opacity: 0`, which is a fair thing to worry about, but rendering the page in
a tall crawler-style viewport reveals all 41 elements without any scrolling,
and the rendered text length is identical either way.

### Domain

The canonical domain is **`valeadsolutions.com`** (confirmed), set as
`DEFAULT_SITE_URL` in `lib/site.ts`. `brand.email` in `data/copy.ts` is on the
same domain, so change both together if it ever moves.

Resolution order for the canonical origin:

1. `NEXT_PUBLIC_SITE_URL`, if set. Overrides everything.
2. The production domain attached in Vercel (`VERCEL_PROJECT_PRODUCTION_URL`).
3. `DEFAULT_SITE_URL`.

Behaviour per deployment, all verified:

| Deployment | robots | Canonical |
| --- | --- | --- |
| Production, domain attached | `index, follow` | that domain |
| Production, no domain yet | `index, follow` | `valeadsolutions.com` |
| Preview on `*.vercel.app` | `noindex, nofollow` | `valeadsolutions.com` |
| `NEXT_PUBLIC_SITE_INDEXABLE=false` | `noindex, nofollow` | unchanged |

A `*.vercel.app` deployment is never indexed, because Google would otherwise hold a
second copy of the site on that hostname, competing with the real domain for
the same content. It still canonicalises to the real domain, which is what
points search engines at production rather than at the preview.

To confirm what a live build decided:

```bash
curl -s https://<domain>/robots.txt
curl -s https://<domain> | grep -o 'name="robots" content="[^"]*"'
curl -s https://<domain> | grep -o '<link rel="canonical"[^>]*>'
```

`NEXT_PUBLIC_SITE_INDEXABLE=false` forces `noindex` everywhere. Consider using
it until the bracketed placeholders in `data/copy.ts` are replaced. Whatever
Google indexes is what it shows in results, and getting that removed again is
slow.

### Pending copy is marked in red (temporary)

Anything Adam still has to supply renders in red, tagged `ADAM:`, so the site
can be sent over as the questionnaire itself. That covers the bracketed
questions, the placeholder phone number, and the empty stat tiles.

**It clears itself.** The marking keys off the placeholders rather than a
switch: a bracketed question loses its highlight the moment it is answered,
and the phone number stops being flagged as soon as it is not the `000-0000`
dummy. There is nothing to remember to turn off, and no way to ship the red
by accident.

Two reds are needed, because one cannot carry both grounds: `#B91C1C` clears
AA on paper and mist, and `#FFA3A3` does the same on the navy sections where
the dark red would disappear. Two cases needed their own handling: the hero's
primary button is white inside the gradient section, so specificity has to
win the dark-section rule back; and the header CTA's entire label is the
placeholder number, where no red text clears AA against the teal, so the
button itself turns red instead.

To remove once the copy is final: delete `components/ui/AdamPrompt.tsx`, the
"Pending copy" block in `app/globals.css`, and `isPending()` in
`lib/site.ts`, then unwrap the `<AdamPrompt>` tags.

### Showing the site before launch

Two ways to put it in front of someone without it reaching search engines.

**A Vercel preview deployment** is the accurate one: the real site, real
behaviour, on a `*.vercel.app` URL.

First-time setup:

1. At vercel.com, **Add New → Project**, and import `nickasm-stack/VA-Lead-Solutions`.
2. Leave every build setting alone. Next.js is detected automatically; the
   defaults (`npm ci`, `npm run build`, `.next`) are what this repo expects,
   and a clean `npm ci && npm run build` from a fresh checkout is verified to
   work. `engines.node` in package.json pins the runtime.
3. Set **no environment variables**; see below.
4. Deploy. Every later push to any branch builds its own preview URL; pushes
   to the default branch go to production.

**No environment variables are needed for a preview.** `NEXT_PUBLIC_SITE_URL`
already defaults to the canonical domain, and previews are kept out of the
index automatically, twice over. Vercel sends `X-Robots-Tag: noindex` on
preview deployments itself, and this repo detects the `*.vercel.app` hostname
and serves `noindex` plus a disallow-all `robots.txt` (see the table above).
The preview still canonicalises to `valeadsolutions.com`, so nothing points
search engines at it.

Attaching `valeadsolutions.com` to the project later turns production
indexable on its own. That is the only difference between the two, and it
needs no code change.

**Production with indexing held off** is the other: deploy to the real domain
with `NEXT_PUBLIC_SITE_INDEXABLE=false`. The site is live at its proper
address and reads exactly as it will on launch day, but serves `noindex` and
a disallow-all `robots.txt`. Removing that variable at launch is the only
change needed.

`noindex` keeps a page out of search results; it does not restrict access.
Anyone with the URL can open it. For a client review that is usually the
point, but if the link must not be opened by anyone else use Vercel's
Deployment Protection, which requires a login rather than relying on the URL
being unguessable.

One caveat either way: `tel:` and `mailto:` links behave normally on a real
deployment, but not in an embedded preview pane.

### Structured data waits for real answers

`components/StructuredData.tsx` omits any field still carrying a bracketed
question. Right now that means the phone number is absent (it is still the
`000-0000` dummy) and no `FAQPage` is emitted, because the answers are still
questions. Both appear automatically once the copy is filled in, with nothing
to remember.

It matters because a `FAQPage` is eligible for rich results, so an unanswered
question could be displayed directly under the search listing.

### After launch

- Verify the domain in Google Search Console and Bing Webmaster Tools, and
  submit the sitemap.
- Confirm one host answers: `www` and apex should not both serve, so redirect
  one to the other so the canonical is unambiguous.
- Add a Google Business Profile if the business has a service address. For a
  regional lead-gen firm that is usually the largest single source of
  qualified search traffic, and it is where `LocalBusiness` schema and an
  address would then be worth adding.

## Accessibility

Audited with axe-core (WCAG 2.1 A/AA plus best practices) at 1440px and
390px: **0 violations, 43 passes**. Re-run it after visual changes; the two
things it caught here were both invisible by eye.

- **Contrast.** Secondary text sat at `text-charcoal/75`, which is 4.39:1 on
  white and 4.18:1 on mist, just under the 4.5:1 AA threshold. 80% is the
  floor on both backgrounds, so anything below it was raised. Hierarchy is
  carried by size and weight rather than by fading text toward the
  background.
- **List semantics.** The `Reveal` wrapper rendered a `div`, so `ol` and `dl`
  contained `div`s instead of `li`/`dt`/`dd`. That is invalid markup and drops
  the list semantics a screen reader announces ("step 2 of 4"). `Reveal` now
  takes an `as` prop.

When auditing, force the settled state first, because reveals start at `opacity: 0`
and sampling mid-transition reports contrast failures that do not exist:

```js
await page.addStyleTag({ content:
  '*{transition:none!important} [data-reveal]{opacity:1!important;transform:none!important}' });
```

## Continuous integration

`.github/workflows/ci.yml` runs lint, typecheck and build on every push and
pull request, plus a guard for the `next/font` hash desync described under
Known warnings. It fails the build if a class on `<html>` resolves to no rule
in the stylesheet, which is how body text silently loses its typeface.

## Known warnings

- `Failed to find font override values for font 'Newsreader'` during `npm run
  build` is cosmetic. Next 14 ships fallback metrics for a fixed list of Google
  fonts and Newsreader isn't on it, so it can't compute a `size-adjust` fallback
  to reduce font-swap layout shift. The font itself loads and renders normally.
- `npm audit` reports high-severity Next.js advisories that are only fixed in
  Next 16. They cover middleware, rewrites, Server Actions, and the image
  optimizer, none of which this site uses; it's four static prerendered routes.
  Next is pinned to the latest 14.2.x patch. Revisit if the site ever gains a
  server-side surface (e.g. a lead-capture form).
