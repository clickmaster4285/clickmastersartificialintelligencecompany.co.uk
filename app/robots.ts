import type { MetadataRoute } from "next";
import { SITE } from "./lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Next.js internals that are not pages. /_next/static (CSS/JS) and
      // /_next/image stay crawlable so pages render correctly for Google.
      disallow: ["/api/", "/_next/data/"],
    },
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
