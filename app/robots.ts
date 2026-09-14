import type { MetadataRoute } from "next";
import { siteUrl, isIndexable } from "@/lib/site";

// Without this, Next prerenders robots.txt once at build time and freezes
// whatever isIndexable evaluated to then. Attaching the production domain or
// fixing NEXT_PUBLIC_SITE_INDEXABLE in Vercel's dashboard doesn't rebuild the
// site, so a static route would keep serving a stale Disallow: / after both
// were corrected, until the next unrelated deploy happened to regenerate it.
// Forcing this dynamic means every request re-evaluates isIndexable against
// the environment as it is right now.
export const dynamic = "force-dynamic";

export default function robots(): MetadataRoute.Robots {
  if (!isIndexable) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Build output and the icon routes carry nothing worth crawling.
      disallow: ["/_next/"],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
