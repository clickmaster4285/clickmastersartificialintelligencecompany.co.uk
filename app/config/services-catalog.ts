/*
 * Every service page, grouped the same way as the Services mega menu.
 * Used by the /services hub (cards + ItemList JSON-LD) and by the
 * /services/ai-development page ("Learn more" links per capability).
 *
 * Only list pages that exist (live pages or nav placeholders), so no card
 * ever links to a 404.
 */

export type CatalogService = {
  slug: string;
  href: string;
  name: string;
  /** Two-line card description. */
  summary: string;
  /** Descriptive anchor used in "Learn more about our …" links. */
  anchor: string;
  /** Parent page of a category (rendered as a wider, highlighted card). */
  parent?: boolean;
};

export type ServiceCategory = {
  id: string;
  heading: string;
  intro: string;
  services: CatalogService[];
};

const s = (slug: string, name: string, summary: string, anchor: string, extra: Partial<CatalogService> = {}): CatalogService => ({
  slug,
  href: `/services/${slug}`,
  name,
  summary,
  anchor,
  ...extra,
});

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "software-development",
    heading: "Software Development Services",
    intro:
      "Custom software, web platforms and mobile apps engineered around how your business works, from a first MVP to a product used every day.",
    services: [
      s("custom-software-development", "Custom Software Development", "Bespoke business software designed around your workflows, data and integrations, from discovery through to long-term support.", "custom software development services"),
      s("web-application-development", "Web Application Development", "Secure, scalable portals, dashboards and SaaS products built with React and Next.js and connected to the systems you already use.", "web application development services"),
      s("mobile-app-development", "Mobile App Development", "Native and cross-platform iOS and Android apps with Flutter and React Native, from MVP to App Store and Google Play launch.", "mobile app development services"),
      s("mvp-saas-development", "MVP & SaaS Development", "Validate a product idea quickly with a focused MVP, then grow it into a multi-tenant SaaS platform with billing built in.", "MVP development services"),
    ],
  },
  {
    id: "ai-services",
    heading: "AI Development Services",
    intro:
      "Custom AI systems that run in production: language models, retrieval, machine learning, computer vision and automation, integrated with your existing platforms.",
    services: [
      s("ai-development", "AI Development Services", "The full lifecycle of custom AI in one programme: discovery, data preparation, model development, integration, deployment and monitoring.", "AI development services", { parent: true }),
      s("custom-ai-development", "Custom AI Development", "Bespoke AI software built around your process and data, delivering the model, application logic, APIs and interface as one product.", "custom AI development services"),
      s("llm-development-fine-tuning", "LLM Development & Fine-Tuning", "Adapt large language models to your terminology, tone and output formats with LoRA and other parameter-efficient fine-tuning.", "LLM development and fine-tuning services"),
      s("rag-development", "RAG Development", "Connect language models to your own documents so answers are grounded in your content, permission-aware and cite their sources.", "RAG development services"),
      s("generative-ai-development", "Generative AI Development", "Drafts, summaries, transcripts and images generated to your standards, with automated checks and human approval built in.", "generative AI development services"),
      s("ai-agent-development", "AI Agent Development", "Agents that plan steps and call your APIs to finish multi-step tasks, with permission limits, approvals and full audit logs.", "AI agent development services"),
      s("nlp-development", "NLP Development", "Classify, extract, redact and search large volumes of text such as emails, tickets, contracts, reviews and case notes.", "NLP development services"),
      s("computer-vision-development", "Computer Vision Development", "Image and video models for inspection, document scanning and categorisation, deployed in the cloud or at the edge.", "computer vision development services"),
      s("predictive-analytics", "Predictive Analytics", "Forecast demand, churn and risk from your historical data and feed the results into dashboards, ERP or CRM workflows.", "predictive analytics services"),
      s("machine-learning", "Machine Learning Development", "Segmentation, recommendation, anomaly detection and scoring models trained on your structured business data.", "machine learning development services"),
      s("ai-automation", "AI Automation Services", "Intelligent process automation that combines rule-based RPA with AI for documents, reconciliation and exception handling.", "AI automation services"),
      s("ai-chatbots", "AI Chatbot Development", "Conversational assistants for customer support and sales, grounded in your own knowledge base and available around the clock.", "AI chatbot development"),
      s("ai-consulting-strategy", "AI Consulting & Strategy", "Use-case scoring, data readiness, build-or-buy advice and a phased roadmap before significant build budget is committed.", "AI consulting and strategy services"),
    ],
  },
  {
    id: "enterprise-cloud",
    heading: "Enterprise & Cloud Services",
    intro:
      "The systems of record and infrastructure behind everything else: ERP and CRM platforms, cloud environments, delivery pipelines and databases.",
    services: [
      s("erp-crm-development", "ERP & CRM Development", "Custom and customised ERP and CRM systems that give finance, sales and operations teams one reliable source of truth.", "ERP and CRM development services"),
      s("cloud-devops", "Cloud Solutions & DevOps", "Infrastructure as code, CI/CD pipelines and well-run environments on AWS, Microsoft Azure and Google Cloud.", "cloud and DevOps services"),
      s("database-design", "Database Design & Development", "Data modelling, schema design, performance tuning, migration and integration for PostgreSQL, MySQL, MongoDB and Redis.", "database design services"),
    ],
  },
];

export const ALL_SERVICES: CatalogService[] = SERVICE_CATEGORIES.flatMap((c) => c.services);

/** Look up a catalog entry by slug (throws at build time if the slug is wrong). */
export function serviceBySlug(slug: string): CatalogService {
  const found = ALL_SERVICES.find((x) => x.slug === slug);
  if (!found) throw new Error(`Unknown service slug: ${slug}`);
  return found;
}
