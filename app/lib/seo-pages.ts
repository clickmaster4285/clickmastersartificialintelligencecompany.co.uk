import type { Metadata } from "next";
import { pageJsonLd, pageMetadata, type RouteKey } from "./site";

export function metadataFor(route: RouteKey): Metadata {
  const { title, description } = PAGE_SEO[route];
  return pageMetadata({ route, title, description });
}

export function jsonLdFor(route: RouteKey, extra: { itemList?: { name: string; path: string }[] } = {}) {
  const { title, description, pageType, service } = PAGE_SEO[route];
  return pageJsonLd({ route, title, description, pageType, service, ...extra });
}

/** SEO title/description for a route (used where a page needs them directly). */
export function seoFor(route: RouteKey) {
  return PAGE_SEO[route];
}

type PageSeo = {
  title: string;
  description: string;
  pageType?: "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage";
  service?: { name: string; serviceType: string[]; description?: string; catalog?: string[] };
};

/**
 * Unique title + description for every indexable page.
 * Titles are rendered through the root layout template ("%s | ClickMasters"),
 * except the homepage, which uses an absolute title.
 */
export const PAGE_SEO: Record<RouteKey, PageSeo> = {
  home: {
    title: "AI Software Development Company UK | ClickMasters",
    description:
      "ClickMasters is a UK AI software development company building AI automation, custom software, web and mobile apps, and ERP and CRM systems that grow revenue.",
  },
  solutions: {
    title: "Custom Business Software & AI Solutions UK",
    description:
      "Custom business software and AI solutions for UK organisations: ERP, CRM, automation, integration, portals and SaaS, matched to the problem you need to solve.",
    service: {
      name: "Business Software and AI Solutions",
      serviceType: ["Business software solutions", "Artificial intelligence solutions", "Business process automation", "System integration"],
      description:
        "Ready-to-customise business systems, custom software, AI, automation and integration matched to specific business problems.",
      catalog: [
        "ERP Software Solutions",
        "CRM Software Solutions",
        "SaaS Platform Development",
        "Learning Management Systems",
        "Inventory and Warehouse Management Software",
        "Fleet and Logistics Software",
        "Intelligent Document Processing",
        "AI-Powered Customer Service",
        "Business Process Automation and Integration",
      ],
    },
  },
  // Hub for every service (software, AI, enterprise & cloud). The full AI
  // page now lives at /services/ai-development (see its content.ts).
  services: {
    title: "Software & AI Development Services UK",
    description:
      "Custom software, web, mobile, ERP and AI development for UK businesses. Agile delivery, MVPs in 6-8 weeks. Get a free quote.",
    pageType: "CollectionPage",
  },
  industries: {
    title: "AI Solutions by Industry",
    description:
      "How ClickMasters applies AI and custom software across healthcare, finance, e-commerce, education, real estate, logistics and manufacturing.",
  },
  caseStudies: {
    title: "AI Use Cases & Example Projects",
    description:
      "Example AI projects ClickMasters can design and build: computer vision, fraud detection, demand forecasting, fleet routing, learning copilots and more.",
    pageType: "CollectionPage",
  },
  locations: {
    title: "Where We Work: UK & Remote AI Services",
    description:
      "Remote AI development and automation for UK and international businesses, with ClickMasters contact lines in the UK, US and Pakistan.",
  },
  about: {
    title: "About Our AI Software Company",
    description:
      "Learn about ClickMasters, the team behind custom AI platforms, enterprise automation and software development for growing businesses.",
    pageType: "AboutPage",
  },
  contact: {
    title: "Contact Us – Discuss Your AI Project",
    description:
      "Get in touch with ClickMasters to discuss AI development, automation or custom software. Tell us about your project and our team will respond.",
    pageType: "ContactPage",
  },
  blog: {
    title: "AI & Software Development Blog",
    description:
      "Technical guides and upcoming articles from ClickMasters on AI engineering, software architecture, agile delivery, security and GDPR compliance.",
    pageType: "CollectionPage",
  },
};
