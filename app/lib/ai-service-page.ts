import type { Metadata } from "next";
import { detailPageJsonLd, detailPageMetadata } from "./site";

/*
 * Content shape for the AI service "spoke" pages under /services/<slug>
 * (rendered by app/Components/AiServicePage.jsx). Each page keeps its copy in
 * app/services/<slug>/content.ts.
 *
 * Strings marked "rich" may contain inline links written as [anchor](/path).
 * Only link to pages that exist (live or nav placeholder pages).
 */

export type TitledText = { title: string; text: string };
export type LinkCard = { href: string; title: string; text: string };
export type OgTone = "plain" | "purple" | "teal" | "sun";

export type AiServicePageContent = {
  slug: string;
  /** Breadcrumb and schema name, e.g. "RAG Development". */
  name: string;
  seo: {
    /** Rendered with the " | ClickMasters" suffix; keep the result <= 60 chars. */
    title: string;
    /** <= 155 chars. */
    description: string;
  };
  schema: { serviceType: string[]; description: string; alternateName?: string };
  hero: {
    eyebrow: string;
    /** The H1: contains the target keyword and "UK". */
    title: string;
    titleAccent: string;
    lead: string;
    audience: string;
    stats: { value: string; label: string }[];
    figureLabel: string;
    /** Steps drawn in the hero figure (ignored when `figure` is set). */
    flow: TitledText[];
    figcaption: string;
  };
  /** Use a shared diagram instead of the flow list. */
  figure?: "rag";
  overview: { heading: string; /** rich */ paragraphs: string[] };
  problems: { heading: string; intro: string; items: TitledText[] };
  applications: { heading: string; intro: string; items: TitledText[] };
  process: { heading: string; intro: string; steps: (TitledText & { output: string })[] };
  tech: { heading: string; intro: string; groups: { title: string; items: string[] }[] };
  compliance?: { heading: string; /** rich */ paragraphs: string[] };
  industries: { heading: string; intro: string; items: LinkCard[] };
  related: { heading: string; intro: string; items: LinkCard[] };
  /** Answers are rich text. */
  faqs: { q: string; a: string[] }[];
  cta: {
    title: string;
    titleAccent: string;
    body: { text: string; link?: { anchor: string; href: string } };
    bring: string[];
  };
  og: { title: string; accent: string; rows: [string, OgTone][][] };
};

export const AI_PARENT = { name: "AI Development", path: "/services/ai-development" };

export const pathFor = (c: Pick<AiServicePageContent, "slug">) => `/services/${c.slug}`;

export const crumbsFor = (c: AiServicePageContent) => [
  { name: "Services", path: "/services" },
  { name: c.name, path: pathFor(c) },
];

export function aiServiceMetadata(c: AiServicePageContent): Metadata {
  return detailPageMetadata({ path: pathFor(c), title: c.seo.title, description: c.seo.description });
}

export function aiServiceJsonLd(c: AiServicePageContent) {
  return detailPageJsonLd({
    path: pathFor(c),
    name: `${c.seo.title} | ClickMasters`,
    description: c.seo.description,
    crumbs: crumbsFor(c),
    service: {
      name: c.name,
      ...(c.schema.alternateName && { alternateName: c.schema.alternateName }),
      serviceType: c.schema.serviceType,
      description: c.schema.description,
      relatedServicePath: AI_PARENT.path,
    },
  });
}
