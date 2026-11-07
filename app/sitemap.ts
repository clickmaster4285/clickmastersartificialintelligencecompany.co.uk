import type { MetadataRoute } from "next";
import { ROUTES, absoluteUrl } from "./lib/site";

const PRIORITY: Partial<Record<keyof typeof ROUTES, number>> = {
  home: 1,
  services: 0.9,
  solutions: 0.9,
  contact: 0.8,
};

// Only canonical, indexable, 200-status URLs belong here.
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return (Object.keys(ROUTES) as (keyof typeof ROUTES)[]).map((key) => ({
    url: absoluteUrl(ROUTES[key].path),
    lastModified,
    changeFrequency: key === "home" || key === "blog" ? "weekly" : "monthly",
    priority: PRIORITY[key] ?? 0.7,
  }));
}
