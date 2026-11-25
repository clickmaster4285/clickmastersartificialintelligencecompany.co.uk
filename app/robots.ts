import type { MetadataRoute } from "next";
import { SITE } from "./lib/site";

/**
 * Served at /robots.txt:
 *
 *   User-Agent: *
 *   Disallow: /api/
 *
 *   Sitemap: https://clickmastersartificialintelligencecompany.co.uk/sitemap.xml
 *
 * Everything else (pages, /_next/static CSS/JS, /_next/image) stays crawlable
 * so Google can render pages fully. Edit here, not in a public/robots.txt file.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      disallow: "/api/",
    },
    sitemap: `${SITE.url}/sitemap.xml`,
  };
}
