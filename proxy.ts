import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { SITE } from "./app/lib/site";

/**
 * Canonical URL enforcement (single 301 hop, no chains):
 *  1. www.<domain>  ->  <domain>  (preferred apex host)
 *  2. Legacy mixed-case routes (/About, /Blogs, /Casestudy, /Location, ...)
 *     and any case variant of a page  ->  its lowercase canonical path.
 */
const CANONICAL_PATHS: Record<string, string> = {
  about: "/about",
  blog: "/blog",
  blogs: "/blog",
  "case-studies": "/case-studies",
  casestudy: "/case-studies",
  contact: "/contact",
  industries: "/industries",
  locations: "/locations",
  location: "/locations",
  services: "/services",
  solutions: "/solutions",
};

export function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  let target = pathname;
  const match = /^\/([^/.]+)\/?$/.exec(pathname);
  if (match) {
    const mapped = CANONICAL_PATHS[match[1].toLowerCase()];
    if (mapped) target = mapped;
  }

  const host = (request.headers.get("x-forwarded-host") ?? request.headers.get("host") ?? "")
    .split(",")[0]
    .trim()
    .toLowerCase();

  // Redirect straight to the canonical origin (one hop, regardless of which
  // Host header the reverse proxy forwards).
  if (host.startsWith("www.") || target !== pathname) {
    return NextResponse.redirect(`${SITE.url}${target}${search}`, 301);
  }

  return NextResponse.next();
}

export const config = {
  // Skip build assets; everything else (pages, robots, sitemap) is covered.
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
