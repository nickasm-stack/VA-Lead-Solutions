import { brand } from "@/data/copy";

/**
 * The site's canonical domain, confirmed. `brand.email` in data/copy.ts is on
 * the same domain; change both together if it ever moves.
 *
 * Overridable per environment with NEXT_PUBLIC_SITE_URL.
 */
const DEFAULT_SITE_URL = "https://valeadsolutions.com";

const explicitUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
const vercelHost = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();

/**
 * A *.vercel.app hostname is the deployment's address, not the site's
 * identity, so it is never used as the canonical origin and never indexed.
 * otherwise Google ends up holding a second copy of the site there, competing
 * with the real domain for the same content.
 */
const onVercelHostname = Boolean(vercelHost && /\.vercel\.app$/.test(vercelHost));

/**
 * Canonical origin, no trailing slash. An explicit NEXT_PUBLIC_SITE_URL wins;
 * otherwise a real domain attached in Vercel; otherwise the default above.
 * A preview deployment still canonicalises to the real domain, which is what
 * points search engines at production rather than at the preview.
 */
export const siteUrl = (
  explicitUrl ||
  (onVercelHostname ? DEFAULT_SITE_URL : vercelHost && `https://${vercelHost}`) ||
  DEFAULT_SITE_URL
).replace(/\/$/, "");

/**
 * Set NEXT_PUBLIC_SITE_INDEXABLE=false to serve noindex and a disallow-all
 * robots.txt, for a staging deployment or to hold indexing until the
 * bracketed placeholders in data/copy.ts are replaced with real copy.
 * Whatever Google indexes is what it shows in results, placeholders included,
 * and removing them again is slow.
 */
const indexingDisabled = process.env.NEXT_PUBLIC_SITE_INDEXABLE === "false";
export const isIndexable = !indexingDisabled && !onVercelHostname;

if (onVercelHostname) {
  console.warn(
    `\n[site] Deploying to ${vercelHost}, which is Vercel's own hostname.\n` +
      `       noindex so this copy cannot compete with ${DEFAULT_SITE_URL},\n` +
      "       which the canonical tags point at. Attach the production domain\n" +
      "       in Vercel to make the deployment itself indexable.\n",
  );
}

/** Copy still carrying a bracketed question for Adam. */
export const hasPlaceholder = (text: string) => /\[/.test(text);

/** The phone number is a placeholder until it stops being the 000 dummy. */
export const hasRealPhone = !brand.phoneDisplay.includes("000-0000");
