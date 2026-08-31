import type { MetadataRoute } from "next";
import { siteUrl, isIndexable } from "@/lib/site";

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
