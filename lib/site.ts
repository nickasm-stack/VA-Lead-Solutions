import { brand } from "@/data/copy";

/**
 * Canonical origin, no trailing slash. Override per environment with
 * NEXT_PUBLIC_SITE_URL — canonical tags, Open Graph URLs and the sitemap all
 * derive from it, and pointing them at the wrong host is worse for indexing
 * than having none at all.
 */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://valeadsolutions.com"
).replace(/\/$/, "");

/**
 * Set NEXT_PUBLIC_SITE_INDEXABLE=false to serve noindex and a disallow-all
 * robots.txt — for a staging deployment, or to hold indexing until the
 * bracketed placeholders in data/copy.ts are replaced with real copy.
 * Whatever Google indexes is what it shows in results, placeholders included,
 * and removing them again is slow.
 */
export const isIndexable = process.env.NEXT_PUBLIC_SITE_INDEXABLE !== "false";

/** Copy still carrying a bracketed [Adam: ...] / [X] placeholder. */
export const hasPlaceholder = (text: string) => /\[/.test(text);

/** The phone number is a placeholder until it stops being the 000 dummy. */
export const hasRealPhone = !brand.phoneDisplay.includes("000-0000");
