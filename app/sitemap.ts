import type { MetadataRoute } from "next";
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import { ROUTES, absoluteUrl } from "./lib/site";
import { allLinks, livePaths } from "./config/navigation";
import { LAST_REVIEWED } from "./config/editorial";

/**
 * Served at /sitemap.xml (and linked from /robots.txt). Submit this URL in
 * Google Search Console:
 *
 *   https://clickmastersartificialintelligencecompany.co.uk/sitemap.xml
 *
 * The list builds itself. Every page folder under app/ is discovered
 * automatically, so a new page appears here as soon as it exists: there is
 * nothing to register. A page is left out only when it should not be indexed:
 *
 *   • it uses the placeholder template or sets robots noindex (index: false);
 *   • its navigation item (app/config/navigation.ts) is "placeholder" or "planned";
 *   • it is listed in HIDDEN below;
 *   • it is a dynamic route ([slug]) or lives in a private (_x), parallel (@x)
 *     or api folder. Dynamic pages that are real and indexable can still be
 *     listed by marking them "live" in navigation.ts.
 *
 * Next.js builds the sitemap once per deploy (it is cached), so production
 * picks up new pages on the next build; `next dev` regenerates it per request.
 */

const APP_DIR = join(process.cwd(), "app");
const PAGE_FILE = /^page\.(tsx|ts|jsx|js|mdx)$/;

/** Routes that exist but are deliberately kept out of search for now. */
const HIDDEN = new Set<string>([ROUTES.portfolio.path]);

/** Signs in a page's source that it is not meant to be indexed. */
const NOINDEX = [/placeholderMetadata\s*\(/, /index\s*:\s*false/, /["']noindex/];

const PRIORITY: Record<string, number> = {
  "/": 1,
  "/services": 0.9,
  "/solutions": 0.9,
  "/industries": 0.8,
  "/contact": 0.8,
};

type Found = { path: string; dir: string; source: string };

/** Walks app/ and returns every statically addressable page with its folder and source. */
function discoverPages(dir = APP_DIR, segments: string[] = []): Found[] {
  const found: Found[] = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isFile() && PAGE_FILE.test(entry.name)) {
      found.push({ path: "/" + segments.join("/"), dir, source: readFileSync(full, "utf8") });
      continue;
    }
    if (!entry.isDirectory()) continue;
    const name = entry.name;
    // Private (_x), parallel (@x), intercepted ((.)x), dynamic ([x]) and api folders are not plain URLs.
    if (name.startsWith("_") || name.startsWith("@") || name.startsWith("(.") || name.startsWith("[") || name === "api") continue;
    // Route groups "(group)" do not add a URL segment.
    const isGroup = name.startsWith("(") && name.endsWith(")");
    found.push(...discoverPages(full, isGroup ? segments : [...segments, name]));
  }
  return found;
}

/** Most recent change among the files that make up this page (not its sub-pages). */
function folderModified(dir: string): Date {
  let latest = 0;
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.isFile()) latest = Math.max(latest, statSync(join(dir, entry.name)).mtimeMs);
  }
  return new Date(latest || Date.now());
}

export default function sitemap(): MetadataRoute.Sitemap {
  // Navigation statuses: anything not live there is excluded even if a folder exists.
  const notLive = new Set<string>();
  for (const { link } of allLinks()) {
    if (link.status !== "live") notLive.add(link.href.split("#")[0] || "/");
  }
  const live = livePaths();

  const entries = new Map<string, MetadataRoute.Sitemap[number]>();
  const add = (path: string, lastModified: Date) => {
    if (entries.has(path) || HIDDEN.has(path)) return;
    entries.set(path, {
      url: absoluteUrl(path),
      lastModified,
      changeFrequency: path === "/" || path === "/blog" ? "weekly" : "monthly",
      priority: PRIORITY[path] ?? 0.7,
    });
  };
  const reviewed = (path: string, fallback: Date) => (LAST_REVIEWED[path] ? new Date(LAST_REVIEWED[path]) : fallback);

  // 1. Every page folder on disk that is indexable.
  const onDisk = new Set<string>();
  for (const page of discoverPages()) {
    onDisk.add(page.path);
    if (NOINDEX.some((re) => re.test(page.source))) continue;
    if (notLive.has(page.path) && !live.has(page.path)) continue;
    add(page.path, reviewed(page.path, folderModified(page.dir)));
  }

  // 2. Pages marked "live" in navigation that have no folder of their own
  //    (served by a dynamic route). Folders already judged above are not re-added.
  for (const path of live) {
    if (!onDisk.has(path)) add(path, reviewed(path, new Date()));
  }

  return [...entries.values()].sort((a, b) => a.url.localeCompare(b.url));
}
