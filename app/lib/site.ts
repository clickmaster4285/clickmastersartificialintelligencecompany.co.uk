import type { Metadata } from "next";

/**
 * Single source of truth for site-wide SEO configuration.
 *
 * Only put VERIFIED business facts in here. Anything left as `null` is
 * intentionally omitted from structured data and the UI until the business
 * confirms the real value (no invented addresses, phone numbers or ratings).
 */
export const SITE = {
  name: "ClickMasters",
  // Preferred, canonical origin: HTTPS, apex host (no www), no trailing slash.
  url: "https://clickmastersartificialintelligencecompany.co.uk",
  locale: "en_GB",
  logo: "/assets/logo.png",
  defaultTitle: "AI Software Development Company UK | ClickMasters",
  defaultDescription:
    "ClickMasters delivers AI-powered software development, intelligent automation, custom applications and enterprise solutions for businesses across the UK.",
  // Unverified contact details are deliberately null — fill in once confirmed.
  email: "hello@clickmasters.com" as string | null,
  telephone: null as string | null,
} as const;

/** Every indexable route. Used by the sitemap, canonicals and breadcrumbs. */
export const ROUTES = {
  home: { path: "/", name: "Home" },
  solutions: { path: "/solutions", name: "AI Solutions" },
  services: { path: "/services", name: "AI Services" },
  industries: { path: "/industries", name: "Industries" },
  caseStudies: { path: "/case-studies", name: "Case Studies" },
  locations: { path: "/locations", name: "Locations" },
  about: { path: "/about", name: "About Us" },
  contact: { path: "/contact", name: "Contact" },
  blog: { path: "/blog", name: "Blog" },
} as const;

export type RouteKey = keyof typeof ROUTES;

export function absoluteUrl(path = "/"): string {
  return path === "/" ? SITE.url : `${SITE.url}${path}`;
}

/** Builds complete, page-specific metadata (canonical, OG, Twitter). */
export function pageMetadata({
  route,
  title,
  description,
}: {
  route: RouteKey;
  title: string;
  description: string;
}): Metadata {
  const { path } = ROUTES[route];
  return {
    title: route === "home" ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      type: "website",
      siteName: SITE.name,
      locale: SITE.locale,
      url: path,
      title,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

const ORG_ID = `${SITE.url}/#organization`;
const WEBSITE_ID = `${SITE.url}/#website`;

/** Organization + WebSite graph, rendered once in the root layout. */
export function siteJsonLd() {
  const organization: Record<string, unknown> = {
    "@type": "Organization",
    "@id": ORG_ID,
    name: SITE.name,
    url: absoluteUrl("/"),
    logo: { "@type": "ImageObject", url: `${SITE.url}${SITE.logo}` },
    description: SITE.defaultDescription,
  };
  if (SITE.email) organization.email = SITE.email;
  if (SITE.telephone) organization.telephone = SITE.telephone;

  return {
    "@context": "https://schema.org",
    "@graph": [
      organization,
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        name: SITE.name,
        url: absoluteUrl("/"),
        inLanguage: "en-GB",
        publisher: { "@id": ORG_ID },
      },
    ],
  };
}

/** WebPage (+ optional Service) and BreadcrumbList for an individual page. */
export function pageJsonLd({
  route,
  title,
  description,
  pageType = "WebPage",
  service,
}: {
  route: RouteKey;
  title: string;
  description: string;
  pageType?: "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage";
  service?: { name: string; serviceType: string[] };
}) {
  const url = absoluteUrl(ROUTES[route].path);
  const graph: Record<string, unknown>[] = [
    {
      "@type": pageType,
      "@id": `${route === "home" ? `${url}/` : url}#webpage`,
      url,
      name: title,
      description,
      inLanguage: "en-GB",
      isPartOf: { "@id": WEBSITE_ID },
      about: { "@id": ORG_ID },
      ...(route !== "home" && { breadcrumb: { "@id": `${url}#breadcrumb` } }),
    },
  ];

  if (route !== "home") {
    graph.push({
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: ROUTES.home.name, item: absoluteUrl("/") },
        { "@type": "ListItem", position: 2, name: ROUTES[route].name, item: url },
      ],
    });
  }

  if (service) {
    graph.push({
      "@type": "Service",
      "@id": `${url}#service`,
      name: service.name,
      serviceType: service.serviceType,
      description,
      url,
      provider: { "@id": ORG_ID },
      areaServed: { "@type": "Country", name: "United Kingdom" },
    });
  }

  return { "@context": "https://schema.org", "@graph": graph };
}
