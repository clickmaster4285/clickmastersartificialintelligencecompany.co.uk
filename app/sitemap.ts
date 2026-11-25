import type { MetadataRoute } from "next";
import { ROUTES, absoluteUrl } from "./lib/site";
import { livePaths } from "./config/navigation";

const PRIORITY: Partial<Record<keyof typeof ROUTES, number>> = {
  home: 1,
  services: 0.9,
  solutions: 0.9,
  contact: 0.8,
};

// Only canonical, indexable, 200-status URLs belong here.
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const core = (Object.keys(ROUTES) as (keyof typeof ROUTES)[]).map((key) => ({
    url: absoluteUrl(ROUTES[key].path),
    lastModified,
    changeFrequency: (key === "home" || key === "blog" ? "weekly" : "monthly") as "weekly" | "monthly",
    priority: PRIORITY[key] ?? 0.7,
  }));
  // Pages switched to status "live" in app/config/navigation.ts. Placeholder
  // (noindex) and planned pages are never listed.
  const corePaths = new Set<string>(Object.values(ROUTES).map((r) => r.path));
  const extra = [...livePaths()]
    .filter((path) => !corePaths.has(path))
    .map((path) => ({
      url: absoluteUrl(path),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));
  return [...core, ...extra];
}
