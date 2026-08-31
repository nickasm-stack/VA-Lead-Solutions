import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

/**
 * One page. The nav targets are in-page anchors, not routes, so listing them
 * would just be duplicate URLs pointing at the same document.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl, // matches the canonical exactly, no trailing slash
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
