import { brand } from "@/data/copy";

/**
 * Canonical origin.
 *
 * Resolution order:
 *   1. NEXT_PUBLIC_SITE_URL — set this explicitly once the domain is known.
 *   2. VERCEL_PROJECT_PRODUCTION_URL — Vercel injects the project's production
 *      domain at build time, so a correctly attached custom domain is picked
 *      up with no configuration at all.
 *
 * There is deliberately no fallback to a guessed domain. A canonical tag
 * naming the wrong host tells search engines the real page lives somewhere
 * else, which is worse than publishing no canonical: it can suppress the
 * actual site. When neither source is set the site builds, but serves
 * noindex — see isIndexable below.
 *
 * Server-only: read at build time during static generation. Do not import
 * this into a client component.
 */
const explicitUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
const vercelProductionUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();

const resolvedUrl =
  explicitUrl || (vercelProductionUrl ? `https://${vercelProductionUrl}` : undefined);

/**
 * Vercel's own preview/production hostname is not the site's identity. If it
 * were indexed, Google would hold a *.vercel.app copy of every page, which
 * then competes with the real domain for the same content once it is
 * attached. Treated as "not configured" so it serves noindex.
 */
const isVercelHostname = /\.vercel\.app$/.test(
  resolvedUrl ? new URL(resolvedUrl).hostname : "",
);

/** False when the domain is unknown or is Vercel's own — both force noindex. */
export const siteUrlIsConfigured = Boolean(resolvedUrl) && !isVercelHostname;

/**
 * Falls back to localhost rather than a plausible-looking domain, so an
 * unconfigured build is obviously unconfigured instead of quietly wrong.
 */
export const siteUrl = (resolvedUrl ?? "http://localhost:3000").replace(/\/$/, "");

/**
 * Indexable only when the domain is known and indexing has not been turned
 * off. Set NEXT_PUBLIC_SITE_INDEXABLE=false for preview deployments, or to
 * hold indexing until the bracketed placeholders in data/copy.ts are replaced
 * — whatever Google indexes is what it shows in results.
 */
const indexingDisabled = process.env.NEXT_PUBLIC_SITE_INDEXABLE === "false";
export const isIndexable = !indexingDisabled && siteUrlIsConfigured;

if (!siteUrlIsConfigured) {
  // Surfaces in the build log rather than failing the build, so a first
  // deploy still works — it just will not be indexed.
  console.warn(
    isVercelHostname
      ? `\n[site] Building on ${resolvedUrl} — Vercel's own hostname, not the\n` +
        "       site's real domain. Serving noindex so this copy cannot be\n" +
        "       indexed and compete with the real domain later.\n" +
        "       Attach the production domain in Vercel, or set\n" +
        "       NEXT_PUBLIC_SITE_URL, and the site becomes indexable.\n"
      : "\n[site] No domain configured: set NEXT_PUBLIC_SITE_URL (or attach the\n" +
        "       production domain in Vercel). Building with noindex and\n" +
        "       localhost URLs so nothing wrong gets published.\n",
  );
}

/** Copy still carrying a bracketed [Adam: ...] / [X] placeholder. */
export const hasPlaceholder = (text: string) => /\[/.test(text);

/** The phone number is a placeholder until it stops being the 000 dummy. */
export const hasRealPhone = !brand.phoneDisplay.includes("000-0000");
