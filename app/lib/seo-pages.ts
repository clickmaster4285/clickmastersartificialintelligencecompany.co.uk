import type { Metadata } from "next";
import { pageJsonLd, pageMetadata, type RouteKey } from "./site";

export function metadataFor(route: RouteKey): Metadata {
  const { title, description } = PAGE_SEO[route];
  return pageMetadata({ route, title, description });
}

export function jsonLdFor(route: RouteKey) {
  const { title, description, pageType, service } = PAGE_SEO[route];
  return pageJsonLd({ route, title, description, pageType, service });
}

type PageSeo = {
  title: string;
  description: string;
  pageType?: "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage";
  service?: { name: string; serviceType: string[] };
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
      "ClickMasters delivers AI-powered software development, intelligent automation, custom applications and enterprise solutions for businesses across the UK.",
  },
  solutions: {
    title: "AI Solutions for Complex Business Challenges",
    description:
      "Custom AI solutions from ClickMasters that adapt to live data, automate workflows and remove manual bottlenecks across operations, sales and support.",
    service: {
      name: "Custom AI Solutions",
      serviceType: ["Artificial intelligence solutions", "Business process automation"],
    },
  },
  services: {
    title: "AI Development & Automation Services",
    description:
      "AI development services from ClickMasters: custom machine learning models, intelligent automation, AI integrations and enterprise software built to scale.",
    service: {
      name: "AI Software Development Services",
      serviceType: [
        "AI software development",
        "Machine learning development",
        "Intelligent automation",
        "AI integration",
      ],
    },
  },
  industries: {
    title: "AI Solutions by Industry",
    description:
      "How ClickMasters applies AI and custom software across healthcare, finance, e-commerce, education, real estate, logistics and manufacturing.",
  },
  caseStudies: {
    title: "AI & Software Case Studies",
    description:
      "Explore ClickMasters case studies covering AI pipelines, enterprise automation, cloud migrations and custom web and mobile platforms.",
    pageType: "CollectionPage",
  },
  locations: {
    title: "Where We Work",
    description:
      "ClickMasters works with businesses across the UK and internationally, delivering AI and custom software projects remotely with collaborative workflows.",
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
      "Articles and guides from ClickMasters on AI engineering, software architecture, agile delivery, security and GDPR compliance.",
    pageType: "CollectionPage",
  },
};
