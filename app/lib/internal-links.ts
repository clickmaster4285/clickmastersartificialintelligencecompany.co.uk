/*
 * Internal link targets shared by the AI service pages. Every path here
 * exists (a live page or a nav placeholder page); add a path only once the
 * page is created.
 */

/** Technology names (as written in stack lists) that have a /technologies page. */
export const TECH_LINKS: Record<string, string> = {
  Python: "/technologies/python-ai",
  React: "/technologies/react",
  "Next.js": "/technologies/nextjs",
  "Node.js": "/technologies/nodejs",
  AWS: "/technologies/aws-cloud",
};

/** Industry pages that exist (see app/config/navigation.ts). */
export const INDUSTRY_PAGES = {
  healthcare: "/industries/healthcare",
  finance: "/industries/finance",
  ecommerce: "/industries/ecommerce",
  edtech: "/industries/edtech",
  realEstate: "/industries/real-estate",
  logistics: "/industries/logistics",
  enterpriseSaas: "/industries/enterprise-saas",
  manufacturing: "/industries/manufacturing",
} as const;

export const HIRE_AI_DEVELOPERS = "/hire/ai-developers";
export const FREE_TOOLS = "/resources/free-tools";

// TODO: /resources/glossary is still a placeholder with no entries or anchors.
// Once it has entries (e.g. #rag, #lora, #embeddings, #model-drift), link the
// first mention of each term on the AI pages to it.
