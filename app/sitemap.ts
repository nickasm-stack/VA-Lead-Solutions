import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

/**
 * One page. The nav targets are in-page anchors, not routes, so listing them
 * would just be duplicate URLs pointing at the same document.
 */
// Same reasoning as app/robots.ts: siteUrl depends on env vars Vercel can
// change without a rebuild (attaching the production domain), so a static
// route would freeze the wrong origin into the sitemap until the next
// unrelated deploy regenerated it.
export const dynamic = "force-dynamic";

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
