/*
 * /industries/enterprise-saas content, from
 * "ClickMasters Enterprise SaaS Industry Page: SEO Content Pack" (27 Nov 2026).
 * Edit copy here; page.jsx only renders it.
 *
 * Inline links use [anchor](/path) and render through <RichText>; **bold** is supported.
 * VERIFY comments mark items the pack says need owner confirmation (section G).
 * Do not link /solutions/saas-platform (planned, redirects to /services/mvp-saas-development).
 * Keep "SaaS platform development UK" and "MVP development company" off this page's headings.
 */

export const PATH = "/industries/enterprise-saas";

export const SEO = {
  title: "Enterprise SaaS Development & AI Software UK",
  description:
    "Enterprise SaaS development for UK software companies and organisations: multi-tenant architecture, AI integration, enterprise integrations and modernisation.",
  ogTitle: "Enterprise SaaS Development & AI-Powered Software | ClickMasters",
  ogDescription:
    "Multi-tenant architecture, enterprise identity, AI integration, integrations and legacy modernisation for UK SaaS companies and enterprise software teams.",
};

const IMG = "/assets/industries/enterprise-saas";

/* Photos from Unsplash (Unsplash License, free to use). No faces, no "AI brain" graphics. */
export const IMAGES = {
  // Photo: Bernd Dittrich (unsplash.com/photos/pYlBAu3de0w)
  office: {
    src: `${IMG}/enterprise-saas-open-plan-tech-office.webp`, width: 1200, height: 645,
    alt: "Empty open-plan technology office with rows of desks, monitors on arms and acoustic booths",
  },
  // Photo: Fotis Fotopoulos (unsplash.com/photos/DuHKoV44prg)
  code: {
    src: `${IMG}/enterprise-saas-code-on-monitors.webp`, width: 1200, height: 800,
    alt: "Two monitors showing application source code above a keyboard in a dimly lit workspace",
  },
  // Photo: Shamin Haky (unsplash.com/photos/Uhx-gHPpCDg)
  typing: {
    src: `${IMG}/enterprise-saas-developer-typing-code.webp`, width: 1200, height: 675,
    alt: "Developer's hands typing on a laptop beside monitors showing code, representing AI features built into a product",
  },
  // Photo: Beatriz Cattel (unsplash.com/photos/ajTN690FnUg)
  whiteboard: {
    src: `${IMG}/enterprise-saas-architecture-whiteboard.webp`, width: 1200, height: 800,
    alt: "Hand drawing a system diagram with boxes and arrows on a whiteboard, representing architecture planning",
  },
  // Photo: İsmail Enes Ayhan (unsplash.com/photos/lVZjvw-u9V8)
  servers: {
    src: `${IMG}/enterprise-saas-server-room-aisle.webp`, width: 1200, height: 690,
    alt: "Long server room aisle lined with metal equipment racks under a steel roof",
  },
} as const;

export const HERO = {
  eyebrow: "Enterprise SaaS & Software Platforms",
  title: "Enterprise SaaS Development",
  titleAccent: "and AI-Powered Enterprise Software",
  lead:
    "Enterprise software has to do more than work. It has to scale with customers and workloads, keep each customer's data separate, fit into complex identity and integration landscapes, pass security reviews, and keep evolving without collapsing under its own technical debt. ClickMasters designs, builds, extends and modernises SaaS products and enterprise applications for software companies and organisations across the UK.",
  audience:
    "We work with B2B SaaS businesses adding enterprise capabilities, software vendors modernising established products, and organisations building internal platforms or replacing legacy systems. Our focus is scalable, maintainable architecture, secure development, practical AI integration and software shaped around real business processes, not a template.",
  // Supporting line under the CTAs, shown as the hero's stat strip.
  trust: [
    { label: "Architecture", value: "Scalable and maintainable" },
    { label: "AI", value: "Practical integration" },
    { label: "Security", value: "Designed in from day one" },
    { label: "Fit", value: "Built around your product" },
  ],
  figureAlt:
    "Enterprise SaaS architecture diagram showing clients, API gateway with single sign-on, application services, AI layer, tenant-separated data stores and integrations with CRM, ERP and billing systems",
};

/** Hero diagram: layered architecture, top to bottom. */
export const HERO_LAYERS = [
  { icon: "devices", label: "Clients", items: ["Web", "Mobile", "Admin"] },
  { icon: "gateway", label: "API gateway", items: ["SSO", "Role-based access", "Rate limits"] },
  { icon: "services", label: "Application services", items: ["Domain modules", "Background jobs"] },
  { icon: "ai", label: "AI layer", items: ["Search", "Assistants", "Agents"], accent: true },
  { icon: "database", label: "Tenant-separated data", items: ["Tenant A", "Tenant B", "Tenant C"] },
];
export const HERO_INTEGRATIONS = ["CRM", "ERP", "Billing", "Identity"];

export const LANDSCAPE = {
  title: "How Enterprise SaaS Is Evolving",
  intro:
    "Enterprise software has shifted decisively towards cloud delivery, and expectations have risen with it. Several developments are shaping what enterprise buyers and product teams now expect.",
  trends: [
    { icon: "cloud", title: "Cloud-based software delivery", text: "Customers expect continuous updates, high availability and no on-premises maintenance, but enterprise buyers still ask detailed questions about hosting location, resilience and data handling." },
    { icon: "ai", title: "AI-enabled enterprise applications", text: "Products are moving from bolting on AI features to designing around them. Deloitte's 2026 Global Software Industry Outlook (February 2026) describes a shift towards AI-first engineering and product design. It also notes that LLM costs, investment in agentic products and hybrid pricing models may pressure revenues and margins." },
    { icon: "agent", title: "AI agents and intelligent workflows", text: "Agents that retrieve information, take actions through approved tools and coordinate multi-step tasks are becoming part of enterprise products, which raises new questions about permissions, monitoring and approval." },
    { icon: "api", title: "API-first software ecosystems", text: "Enterprise customers expect products to integrate with their CRM, ERP, identity, data and communication tools, and to expose well-documented APIs and webhooks." },
    { icon: "tenants", title: "Multi-tenant and configurable platforms", text: "One product must serve many customers with different settings, workflows, branding and permissions without fragmenting into custom forks." },
    { icon: "automation", title: "Enterprise automation", text: "Customers expect software to remove manual steps, not just digitise them." },
    { icon: "analytics", title: "Data-driven decision support", text: "Built-in reporting, analytics and forecasting are increasingly expected rather than optional extras." },
    { icon: "plug", title: "Integration between business applications", text: "Value often comes from how well a product fits the wider estate, not from features in isolation." },
    { icon: "legacy", title: "Modernisation of legacy enterprise systems", text: "Many organisations depend on older applications that still work but are costly to change, difficult to secure and hard to integrate." },
    { icon: "layers", title: "Scalable, maintainable architecture", text: "Products that grow quickly without architectural discipline accumulate technical debt that slows every future release." },
  ],
  stats: [
    { value: "62,339", text: "software companies identified in the UK", source: "UK software market analysis (Plexal, November 2026)" },
    { value: "97%", text: "of those UK software companies are SMEs", source: "UK software market analysis (Plexal, November 2026)" },
  ],
  context:
    "The UK software sector is large and highly fragmented. In a crowded market, product quality, security and integration are real differentiators.",
  outro:
    "Businesses need more than a collection of disconnected tools. Good enterprise software is built around actual business processes, user roles and a long-term product strategy, so each release adds value without adding fragility.",
};

export const STAGES_INTRO = "The right engineering approach depends heavily on where a product is in its life:";
export const STAGES = [
  { icon: "rocket", title: "Early-stage SaaS product", text: "The priority is learning quickly. That means a focused feature set, a simple but sound architecture, a sensible tenancy model from day one, basic security hygiene and room to change direction. Over-engineering is a bigger risk than under-scaling. Our [MVP and SaaS development](/services/mvp-saas-development) service is designed for this stage." },
  { icon: "growth", title: "Growing B2B SaaS business", text: "Enterprise customers start to appear and bring new requirements: single sign-on, granular permissions, audit logs, security questionnaires, data residency questions, customer-specific configuration, SLAs and integrations." },
  { icon: "building", title: "Mature enterprise application", text: "The priorities become reliability, performance at scale, controlled releases, backwards-compatible APIs, observability, tenant isolation under heavy load and managing technical debt across a large codebase." },
  { icon: "users", title: "Internal enterprise platform", text: "Users are employees rather than paying customers, but the requirements are similar: identity integration, role-based access, integration with core systems, auditability and maintainability." },
  { icon: "legacy", title: "Legacy replacement or modernisation", text: "Continuity matters most. Data migration, parallel running, integration with systems that remain, and phased cut-over protect the business while it changes." },
];
export const STAGES_OUTRO = "We tailor architecture and process to the stage you are at, rather than applying one blueprint to every product.";

export const CHALLENGES = [
  { icon: "scale", title: "Scaling applications as customers and workloads grow", why: "An architecture that suits ten customers often hides assumptions, such as synchronous processing, unindexed queries and shared resources, that break at a thousand.", impact: "Slow pages, timeouts, noisy-neighbour effects between tenants and urgent firefighting.", approach: "Load testing against realistic growth, background processing for heavy work, caching, efficient data access and infrastructure that can scale the components under pressure." },
  { icon: "tenants", title: "Designing secure multi-tenant architecture", why: "Multi-tenancy saves cost and simplifies operations, but every query, file, cache entry and background job must respect tenant boundaries.", impact: "A single isolation bug can expose one customer's data to another, which is among the most serious failures a SaaS company can suffer.", approach: "Tenant context enforced centrally rather than left to each developer, database-level safeguards where appropriate, automated isolation tests and a tenancy model chosen to match customer risk." },
  { icon: "settings", title: "Managing customer-specific configurations", why: "Enterprise customers want their own workflows, fields, rules and branding.", impact: "If each request becomes custom code, the product fragments into variants that are expensive to test and upgrade.", approach: "A configuration model, feature flags, extensible data models and workflow settings, so customers get flexibility within one maintainable codebase." },
  { icon: "plug", title: "Integrating disconnected enterprise systems", why: "Customers run their own CRM, ERP, identity, finance and data platforms, and expect your product to fit in.", impact: "Integration gaps block sales and create manual workarounds.", approach: "API-first design, webhooks, connectors for common systems and an integration layer with monitoring and error handling." },
  { icon: "roles", title: "Handling complex user roles and permissions", why: "Enterprise organisations have departments, regions, delegated administrators and approval chains.", impact: "A simplistic role model either blocks legitimate work or grants too much access.", approach: "Role-based access control with scoped permissions, server-side enforcement, delegated administration and integration with enterprise identity providers." },
  { icon: "database", title: "Managing increasing database complexity", why: "Data volumes grow, reporting needs expand and schemas evolve with each feature.", impact: "Slow queries, risky migrations and inconsistent data.", approach: "Deliberate data modelling, indexing strategy, controlled schema migrations, archiving and, where justified, separate reporting stores." },
  { icon: "speed", title: "Maintaining application performance", why: "Features accumulate, front-end bundles grow and third-party calls multiply.", impact: "Users experience a slower product even when infrastructure scales.", approach: "Performance budgets, monitoring of real user experience, profiling, caching and asynchronous processing." },
  { icon: "ai", title: "Introducing AI without compromising reliability", why: "AI outputs are probabilistic, model behaviour can change, and costs scale with usage.", impact: "Inaccurate answers, unpredictable costs per tenant, latency and new data-handling risks.", approach: "Grounding AI in approved data, evaluation suites, fallbacks, usage limits and cost tracking per tenant, tenant-isolated retrieval and clear user-facing boundaries." },
  { icon: "legacy", title: "Modernising legacy software", why: "Older applications contain years of business logic but rely on outdated frameworks, monolithic deployment or unsupported infrastructure.", impact: "Slow change, security exposure and difficulty recruiting developers.", approach: "Incremental modernisation, such as wrapping legacy functions with APIs, replacing components in stages and migrating data carefully, rather than a risky big-bang rewrite." },
  { icon: "debt", title: "Managing product updates and technical debt", why: "Deadlines encourage shortcuts that compound over time.", impact: "Each release becomes slower and riskier.", approach: "Automated testing, code review, continuous integration and delivery, refactoring time in every roadmap, and visible tracking of technical debt." },
  { icon: "analytics", title: "Supporting enterprise reporting and analytics", why: "Enterprise customers want detailed reporting, exports and dashboards, often across large datasets.", impact: "Heavy reporting queries slow the transactional system.", approach: "Reporting models or read replicas, pre-aggregation, tenant-scoped analytics and secure data export." },
  { icon: "shield", title: "Protecting customer data and maintaining operational resilience", why: "SaaS products concentrate many customers' data in one service.", impact: "A breach or outage affects every customer at once.", approach: "Security by design, least-privilege access, encryption, monitoring, tested backups and recovery, and a practised incident response plan." },
];

export type AiCapability = {
  id: string;
  icon: string;
  title: string;
  paragraphs: string[];
  items?: { term?: string; text: string }[];
  outro?: string[];
  image?: keyof typeof IMAGES;
};

export const AI_CAPABILITIES: AiCapability[] = [
  {
    id: "ai-enterprise-applications",
    icon: "ai",
    title: "AI-powered enterprise applications",
    paragraphs: [
      "AI capabilities can be embedded into new or existing enterprise applications. Examples include contextual assistance that helps users complete tasks inside the product, intelligent search across records and documents, document processing that extracts structured data, content generation for drafts and summaries, and workflow support that suggests next steps. The goal is to remove friction from real tasks, not to add a chatbot for its own sake. Our [generative AI development](/services/generative-ai-development) work covers drafting, summarisation and content features.",
    ],
    image: "typing",
  },
  {
    id: "enterprise-ai-agents",
    icon: "agent",
    title: "Enterprise AI agents",
    paragraphs: ["AI agents can carry out specific business tasks: retrieving authorised information, coordinating approved workflows and interacting with enterprise tools through controlled integrations. Safeguards are essential:"],
    items: [
      { text: "agents act only with the permissions of the user or service account they represent;" },
      { text: "tool access is limited to defined, audited operations;" },
      { text: "consequential actions, such as payments, deletions, external communications or changes to records, require human approval;" },
      { text: "every action is logged and monitored; and" },
      { text: "usage limits and kill switches contain unexpected behaviour." },
    ],
    outro: ["Our [AI agent development](/services/ai-agent-development) practice builds agents within these controls."],
  },
  {
    id: "ai-workflow-automation",
    icon: "automation",
    title: "AI-powered workflow automation",
    paragraphs: ["Combining traditional rules-based automation with AI can support:"],
    items: [
      { text: "document processing, such as classifying, extracting and validating content;" },
      { text: "internal requests, routed and pre-filled automatically;" },
      { text: "data entry and validation against business rules;" },
      { text: "business notifications triggered by meaningful events;" },
      { text: "customer support workflows, from triage to resolution;" },
      { text: "approval processes with clear audit trails;" },
      { text: "operational reporting, compiled and distributed automatically; and" },
      { text: "repetitive administrative tasks across departments." },
    ],
    outro: ["Rules handle the predictable steps, AI handles unstructured inputs, and people handle exceptions. Our [AI automation services](/services/ai-automation) describe the approach."],
  },
  {
    id: "rag-knowledge-systems",
    icon: "knowledge",
    title: "Retrieval-augmented generation and enterprise knowledge systems",
    paragraphs: ["Retrieval-augmented generation (RAG) lets an application answer questions using approved internal sources, such as enterprise documentation, product manuals, knowledge bases, internal policies, customer support resources and business records, and cite where each answer came from. For enterprise use, several things matter:"],
    items: [
      { term: "Source permissions:", text: "users only retrieve what they are authorised to see, and in multi-tenant products, retrieval is strictly tenant-scoped." },
      { term: "Retrieval quality:", text: "chunking, indexing and ranking tuned on real questions." },
      { term: "Access restrictions", text: "on sensitive collections." },
      { term: "Answer validation:", text: "evaluation sets, citation checks and feedback loops." },
    ],
    outro: ["Our [RAG development](/services/rag-development) service explains how we build these systems."],
  },
  {
    id: "enterprise-search",
    icon: "search",
    title: "Intelligent enterprise search",
    paragraphs: [
      "Semantic search lets users find information by meaning as well as keywords, using natural-language queries such as “contracts renewing next quarter with non-standard terms”. Combined with filters, permissions and metadata, it supports knowledge discovery and contextual retrieval across approved data sources, within the product or across connected systems.",
    ],
  },
  {
    id: "predictive-analytics",
    icon: "forecast",
    title: "Predictive analytics and decision support",
    paragraphs: [
      "Historical and operational data can help identify patterns, support forecasting of demand, usage, churn risk or capacity, and improve management visibility through dashboards and alerts. Predictions depend on data quality and are presented with appropriate uncertainty. They support decisions; they do not guarantee commercial outcomes. Our [machine learning development](/services/machine-learning) work covers model building and validation.",
    ],
  },
  {
    id: "ai-support",
    icon: "support",
    title: "AI-powered customer and employee support",
    paragraphs: [
      "AI can support internal help desks and customer support. Examples include internal assistants for IT, HR and operations questions; customer support automation for routine queries; ticket classification and routing; knowledge retrieval for agents; and suggested responses. Complex, sensitive or high-impact requests, such as complaints, security issues, billing disputes or personal matters, should be routed to the appropriate human team, with the context already gathered.",
    ],
  },
];

export const CUSTOM = {
  note: "The categories below are **potential custom development projects**, designed around your requirements. They are not existing ClickMasters products.",
  items: [
    { icon: "briefcase", title: "B2B SaaS platforms", text: "Multi-customer products serving a specific business function or industry." },
    { icon: "building", title: "Enterprise management applications", text: "Systems that run core operational processes for large organisations." },
    { icon: "tenants", title: "Multi-tenant SaaS products", text: "One codebase and infrastructure serving many customers securely, with per-tenant configuration." },
    { icon: "billing", title: "Subscription-based software platforms", text: "Plans, billing integration, usage tracking, trials and account management." },
    { icon: "dashboard", title: "Enterprise dashboards", text: "Consolidated operational and performance information for managers and executives." },
    { icon: "process", title: "Business process management applications", text: "Modelling, running and monitoring multi-step processes across teams." },
    { icon: "automation", title: "Workflow automation platforms", text: "Configurable automation that customers or internal teams can adapt." },
    { icon: "ai", title: "AI-powered SaaS products", text: "Products where AI capabilities such as search, assistants, extraction or prediction are central to the value." },
    { icon: "knowledge", title: "Enterprise knowledge management systems", text: "Structured, searchable, permission-aware knowledge with AI retrieval." },
    { icon: "portal", title: "Customer and employee portals", text: "Self-service access to information, requests, documents and transactions." },
    { icon: "contacts", title: "Custom CRM applications", text: "Customer data and processes shaped around your sales and service model, using our [custom CRM software](/solutions/crm-software) approach." },
    { icon: "erp", title: "Enterprise ERP applications", text: "Finance, operations and resource planning tailored to how you work, using our [custom ERP software](/solutions/erp-software) approach." },
    { icon: "data", title: "Data management platforms", text: "Ingestion, quality, governance and access for enterprise data." },
    { icon: "api", title: "API-driven business applications", text: "Services designed from the start to be consumed by other systems and partners." },
  ],
  teamIntro:
    "Our [custom software development](/services/custom-software-development) and [web application development](/services/web-application-development) teams give each of these engineering attention across:",
  attention: [
    "Application architecture and multi-tenancy",
    "Database design and authentication and authorisation",
    "Role-based access control and API design",
    "Front-end and back-end architecture",
    "Performance, scalability and maintainability",
    "Testing and deployment",
  ],
};

export const ARCH_INTRO =
  "There is no single correct architecture for SaaS. The right design depends on your customers, data sensitivity, scale, team and roadmap. These are the decisions that matter most.";

export const TENANCY = {
  id: "tenancy",
  title: "Multi-tenant vs single-tenant architecture",
  models: [
    { name: "Multi-tenant", tone: "purple", text: "Customers share application infrastructure, and sometimes databases, with logical separation. It is cost-efficient, simpler to update (one deployment serves everyone) and easier to operate at scale.", tradeOff: "Isolation must be engineered carefully, and per-customer customisation is constrained." },
    { name: "Single-tenant", tone: "teal", text: "Each customer gets a dedicated instance or environment. It offers stronger isolation, more freedom for customer-specific configuration and deployment timing, and can satisfy strict data residency requirements.", tradeOff: "Higher infrastructure and maintenance cost and the operational burden of upgrading many instances." },
    { name: "Hybrid", tone: "sun", text: "Shared multi-tenancy for most customers, with dedicated databases or environments for those with stricter requirements.", tradeOff: "Two operating models to run, so the boundary between them needs to be clear." },
  ],
  note:
    "The NCSC's cloud security principles stress that providers should be able to explain how separation between customers is implemented across compute, storage, data flows and networking. Enterprise buyers increasingly ask exactly that.",
};

export const ARCH_BLOCKS = [
  {
    id: "database",
    icon: "database",
    title: "Database architecture",
    paragraphs: ["Tenant data can be separated in three main ways: shared tables with a tenant key, a separate schema per tenant, or a separate database per tenant. Each offers different isolation, cost and operational characteristics. Good database architecture also covers:"],
    items: [
      "indexing strategy and query performance as data grows;",
      "data consistency and transaction design;",
      "safe schema migrations across many tenants;",
      "backups and point-in-time recovery, tested regularly; and",
      "archiving and growth planning.",
    ],
    outro: "Our [database design and development](/services/database-design) work covers these choices.",
  },
  {
    // VERIFY: confirm the team has implemented SAML / OpenID Connect SSO and user provisioning (pack, G3).
    id: "identity",
    icon: "key",
    title: "Authentication and access control",
    paragraphs: ["Enterprise customers expect:"],
    items: [
      "secure authentication with multi-factor options;",
      "**enterprise identity integration**: single sign-on through SAML or OpenID Connect, and, where needed, automated user provisioning;",
      "**role-based access control** with fine-grained, server-enforced permissions;",
      "secure session management, including expiry, revocation and device controls; and",
      "delegated administration, so customer admins manage their own users.",
    ],
  },
  {
    id: "api-first",
    icon: "api",
    title: "API-first architecture",
    paragraphs: ["Designing APIs as first-class products, with consistent conventions, versioning, documentation, authentication, rate limits and webhooks, makes it far easier to integrate with enterprise systems and partners. It also supports your own web and mobile front ends, and lets customers automate their use of your product."],
  },
  {
    id: "scalability",
    icon: "scale",
    title: "Scalable application architecture",
    paragraphs: ["Scalability comes from sound fundamentals more often than fashionable patterns:"],
    items: [
      "modular design with clear boundaries;",
      "background processing and queues for heavy or slow work;",
      "caching where data allows;",
      "stateless application tiers that can scale horizontally; and",
      "infrastructure matched to the workload.",
    ],
    outro: "**We do not recommend microservices for every project.** A well-structured modular monolith is often faster to build, easier to operate and perfectly scalable for many products. Services are split out where independent scaling, deployment or ownership genuinely justifies the added complexity. Our [cloud and DevOps](/services/cloud-devops) practice handles infrastructure, deployment pipelines and observability.",
  },
  {
    id: "integrations",
    icon: "plug",
    title: "Enterprise integrations",
    paragraphs: ["Integration architecture determines how reliably your product connects with ERP, CRM, finance, analytics, communication and document systems. That covers connectors, webhooks, event handling, retries, idempotency, data mapping and monitoring. It is covered in more detail in the integration section below."],
  },
  {
    id: "maintainability",
    icon: "debt",
    title: "Maintainability and product evolution",
    paragraphs: ["Products that last are built for change:"],
    items: [
      "consistent code quality standards and code review;",
      "automated unit, integration and end-to-end testing;",
      "documentation for developers, administrators and API consumers;",
      "versioning for APIs and data contracts;",
      "monitoring and alerting in production; and",
      "a roadmap that reserves capacity for improvement and technical debt reduction.",
    ],
  },
];

export const USE_CASES_NOTE =
  "The following are illustrative development opportunities showing how the technology could be applied. They are not completed ClickMasters client projects, and real benefits depend on each organisation's product, data and systems.";

export const USE_CASE_FIELDS = [
  ["problem", "Business problem"],
  ["proposal", "Proposed platform or feature"],
  ["tech", "Technologies"],
  ["fit", "Workflow fit"],
  ["benefits", "Benefits"],
  ["oversight", "Oversight"],
] as const;

export const USE_CASES = [
  { icon: "tenants", title: "Multi-tenant B2B SaaS management platform", problem: "A software company runs a separate instance per customer and struggles to upgrade them all.", proposal: "Consolidation onto a multi-tenant architecture with per-tenant configuration and optional dedicated databases for larger customers.", tech: "A tenant-aware application layer, central tenant context, automated isolation tests and infrastructure as code.", fit: "Customers keep their settings, while the vendor releases once for everyone.", benefits: "Simpler operations and faster, more consistent releases.", oversight: "Migration is staged with rollback plans. Isolation is tested before and after each cut-over." },
  { icon: "knowledge", title: "AI-powered enterprise knowledge assistant", problem: "Staff waste time searching policies, product documentation and past cases.", proposal: "A permission-aware assistant that answers from approved sources, with citations.", tech: "RAG, vector search, identity integration and evaluation suites.", fit: "Available inside existing tools, such as the intranet, the product UI or chat.", benefits: "Faster access to accurate information.", oversight: "Answers cite sources, content owners maintain the corpus, and sensitive collections are restricted." },
  { icon: "document", title: "Automated document processing application", problem: "Teams manually key data from contracts, invoices and forms.", proposal: "AI extraction with validation rules and human review queues.", tech: "Document AI, confidence thresholds and workflow automation.", fit: "Extracted data flows into existing systems through APIs.", benefits: "Less manual entry and faster processing.", oversight: "Low-confidence and high-value items are reviewed by staff." },
  { icon: "process", title: "Enterprise workflow automation platform", problem: "Approvals and requests run on email and spreadsheets.", proposal: "Configurable workflows with forms, routing, approvals, SLAs and audit trails.", tech: "A workflow engine, role-based access and integrations.", fit: "Replaces informal processes with defined ones that connect to existing systems.", benefits: "Visibility of status, consistency and auditability.", oversight: "Workflow owners control rules, and changes are versioned." },
  { icon: "billing", title: "Subscription and customer management system", problem: "Plans, entitlements, usage and invoicing are handled manually across tools.", proposal: "Account and subscription management integrated with a billing provider.", tech: "Entitlement services, billing provider APIs, webhooks and usage metering.", fit: "Sales, finance and support share one view of each customer.", benefits: "Accurate entitlements and less manual reconciliation.", oversight: "Payment data stays with the billing provider, and pricing changes are approved by finance." },
  { icon: "analytics", title: "Enterprise reporting and analytics dashboard", problem: "Customers demand richer reporting, but heavy queries slow the product.", proposal: "Tenant-scoped analytics backed by a separate reporting store.", tech: "Data pipelines, pre-aggregation and an embedded dashboard.", fit: "Reports live inside the product, with secure exports.", benefits: "Better insight without degrading transactional performance.", oversight: "Metric definitions are documented, and tenant scoping is tested." },
  { icon: "support", title: "AI-powered customer support application", problem: "The support queue grows faster than the team.", proposal: "Ticket classification, suggested answers from the knowledge base and automated responses for defined categories.", tech: "Classification models, RAG and help desk integration.", fit: "It works inside the existing help desk.", benefits: "Faster triage and responses.", oversight: "Complaints, security issues and billing disputes go to people. Automated categories expand only as accuracy is proven." },
  { icon: "contacts", title: "Custom enterprise CRM", problem: "An off-the-shelf CRM forces workarounds for a complex sales and service model.", proposal: "A custom CRM with the data model, workflows and integrations the business needs.", tech: "A web application, workflow engine, integrations and reporting.", fit: "Mirrors how teams actually sell and serve customers.", benefits: "Better adoption and data quality.", oversight: "A data migration plan, with validation and parallel running." },
  { icon: "building", title: "Business operations management platform", problem: "Operations data is spread across departmental tools.", proposal: "A unified operations application with role-specific views.", tech: "A modular web application, integrations and dashboards.", fit: "Replaces several spreadsheets and point tools.", benefits: "A single source of truth and less duplicate entry.", oversight: "Phased roll-out by department." },
  { icon: "api", title: "Enterprise API integration layer", problem: "Point-to-point integrations are brittle and undocumented.", proposal: "A central integration layer with standard APIs, webhooks, mapping and monitoring.", tech: "API gateway, message queues, retries and logging.", fit: "Existing systems connect through one governed layer.", benefits: "Fewer silent failures and easier onboarding of new systems.", oversight: "Integration owners monitor alerts, and data access is least-privilege." },
  { icon: "portal", title: "Internal employee self-service portal", problem: "HR, IT and facilities requests clog inboxes.", proposal: "A portal with request forms, a knowledge assistant and workflow routing.", tech: "A web application, SSO, RAG and workflow automation.", fit: "Integrates with HR and IT systems.", benefits: "Faster resolution and better visibility of requests.", oversight: "Personal and sensitive matters are routed to people, with strict access controls." },
  { icon: "search", title: "AI-assisted enterprise search", problem: "Information is spread across documents, tickets, wikis and records.", proposal: "Unified semantic search with permission filtering.", tech: "Connectors, vector and keyword hybrid search, and access control lists.", fit: "Accessible from existing tools.", benefits: "Quicker discovery of existing knowledge.", oversight: "Results respect source permissions, and indexing scope is approved by data owners." },
  { icon: "legacy", title: "Legacy enterprise application modernisation", problem: "A critical application runs on an unsupported framework and is hard to change.", proposal: "Incremental modernisation: expose APIs, replace modules in stages and migrate data with validation.", tech: "API wrappers, a modern web front end, cloud infrastructure and automated tests.", fit: "Users move to new modules gradually, without a disruptive big-bang cut-over.", benefits: "Lower risk, faster change and improved security.", oversight: "Each stage has acceptance criteria and a rollback plan." },
  { icon: "location", title: "Multi-location business management SaaS", problem: "A multi-site business needs consistent processes with local flexibility.", proposal: "A multi-tenant or multi-site application with central control and location-level configuration.", tech: "Hierarchical tenancy, role-based access, reporting and offline-tolerant interfaces where needed.", fit: "Head office sees everything, and sites see their own data.", benefits: "Consistency, visibility and easier roll-out to new locations.", oversight: "Permissions are reviewed regularly, and cross-site data access is audited." },
];

export const INTEGRATION = {
  intro: "Enterprise SaaS platforms rarely stand alone. Depending on the product and its customers, integrations may include:",
  systems: [
    { icon: "contacts", title: "CRM systems and ERP platforms" },
    { icon: "finance", title: "Accounting software" },
    { icon: "users", title: "HR and workforce systems" },
    { icon: "billing", title: "Payment providers and subscription billing platforms" },
    { icon: "chat", title: "Email and communication services" },
    { icon: "key", title: "Identity providers and SSO systems" },
    { icon: "document", title: "Document management platforms" },
    { icon: "analytics", title: "Analytics and business intelligence tools" },
    { icon: "cloud", title: "Cloud storage services" },
    { icon: "building", title: "Existing internal applications" },
  ],
  practicesIntro: "Reliable integration depends on:",
  practices: [
    ["API integration", "designed around each system's capabilities, limits and terms."],
    ["Webhooks", "for timely, event-driven updates."],
    ["Data synchronisation", "with clear ownership of each data item and conflict handling."],
    ["Authentication between systems", "using scoped credentials, OAuth where supported and secret rotation."],
    ["Error handling", "with retries, idempotency and dead-letter queues."],
    ["Data validation", "at every boundary."],
    ["Permissions,", "so each integration accesses only what it needs."],
    ["Audit trails", "of data exchanged and changes made."],
    ["Integration monitoring", "with alerts when syncs fail or slow down."],
  ],
  access:
    "Third-party APIs vary widely. Some require partner agreements, paid tiers or customer-side configuration, and many impose rate limits or restrict the data available. We assess these constraints early, and never assume unrestricted access.",
};

export const SECURITY_INTRO = "Enterprise customers will scrutinise how your product protects their data. These are the areas we design for.";
export const SECURITY_DISCLAIMER =
  "This is general information, not legal or certification advice. Implementing security features does not by itself make a product compliant with any law or standard.";

export const SECURITY = [
  { icon: "privacy", title: "UK GDPR and the Data Protection Act 2018", text: "These apply where personal data is processed. A SaaS provider usually acts as a processor for its customers' data and as a controller for its own account and usage data. That requires appropriate contracts, records, sub-processor management and attention to where data is hosted and transferred." },
  { icon: "tenants", title: "Customer data isolation and tenant boundaries", text: "Tenant context is enforced centrally, there are database-level safeguards where appropriate, isolation is tested automatically, and retrieval for AI features is scoped by tenant." },
  { icon: "lock", title: "Authentication and authorisation", text: "Secure login flows, server-side authorisation on every request, and protection against common web vulnerabilities." },
  { icon: "roles", title: "Role-based access control", text: "Least-privilege roles for customer users, customer administrators and internal staff. Internal access to customer data is restricted and logged." },
  { icon: "key", title: "Multi-factor authentication", text: "Available to users and required for administrative and internal accounts." },
  { icon: "encrypt", title: "Encryption in transit and at rest", text: "Where implemented for the specific deployment, with sound key management." },
  { icon: "api", title: "Secure API design", text: "Authentication, scoped tokens, rate limiting, input validation and versioning." },
  { icon: "history", title: "Audit logging", text: "Records of security-relevant actions, available to customers where appropriate." },
  { icon: "delete", title: "Data retention and deletion", text: "Configurable retention, secure deletion and confirmation of deletion when a customer leaves." },
  { icon: "backup", title: "Backup and recovery planning", text: "Regular, tested backups, documented recovery objectives and restore procedures." },
  { icon: "alert", title: "Incident response", text: "A defined process for detection, containment, customer notification and lessons learned." },
  // VERIFY: confirm whether ClickMasters arranges penetration testing or recommends third-party testers (pack, G6).
  { icon: "scan", title: "Monitoring and vulnerability management", text: "Logging and alerting, dependency scanning, patching and periodic penetration testing." },
  { icon: "code", title: "Secure software development practices", text: "Code review, automated security testing and secrets management. The government's voluntary Software Security Code of Practice is a useful reference for software vendors." },
  // VERIFY: confirm UK-region hosting and dedicated single-tenant deployments can be offered (pack, G5).
  { icon: "cloud", title: "Appropriate data processing and hosting", text: "Hosting region and provider chosen to suit customer requirements, with sub-processors documented." },
];

export const SHARED_RESPONSIBILITY = {
  intro: "Security in SaaS is shared:",
  parties: [
    { title: "Infrastructure providers", text: "secure the underlying cloud platform." },
    { title: "The SaaS provider", text: "secures the application, its configuration, tenant separation and operations." },
    { title: "Customers", text: "remain responsible for configuring their own use: managing users, permissions, authentication settings and the data they put in. NCSC guidance on using SaaS securely makes the same point." },
  ],
  outro: "Good products make secure configuration easy for customers.",
};

export const EXIT_PLANNING =
  "Enterprise customers need to know how they can retrieve their data, in what formats, and what happens to it when they leave. Government guidance on securing SaaS tools highlights the need to migrate information out and have the supplier securely delete data and confirm deletion. We design export functions, documented data formats and deletion processes from the start, which also helps you win enterprise deals.";

export const SECURITY_STATEMENT =
  "ClickMasters does not claim ISO 27001, SOC 2, Cyber Essentials or any other certification. Many enterprise buyers require such certifications from SaaS vendors, so we design products and processes that support your own certification efforts and provide technical documentation for security reviews.";

export const WHY_INTRO =
  "We bring software engineering, AI integration and business workflow understanding together, so your product is built to work, scale and evolve.";

export const WHY = [
  { icon: "code", title: "Custom software development", text: "Enterprise applications shaped around your processes and product strategy." },
  { icon: "portal", title: "Web application development", text: "Fast, accessible, well-architected front ends and back ends." },
  { icon: "forecast", title: "AI and machine learning integration", text: "Prediction, classification and analytics built into the product." },
  { icon: "ai", title: "Generative AI development", text: "Drafting, summarisation and content features with review steps." },
  { icon: "knowledge", title: "RAG development", text: "Permission-aware, tenant-scoped knowledge and search features." },
  { icon: "agent", title: "AI agents and workflow automation", text: "Agents and automations with controlled permissions and approvals." },
  { icon: "tenants", title: "SaaS platform engineering", text: "Multi-tenancy, configuration, subscriptions and enterprise identity." },
  { icon: "erp", title: "ERP and CRM development", text: "Core business systems, custom-built or integrated." },
  { icon: "database", title: "Database architecture", text: "Tenant separation, performance and safe evolution." },
  { icon: "plug", title: "API integration", text: "API-first design and robust connections to enterprise ecosystems." },
  { icon: "cloud", title: "Cloud and DevOps engineering", text: "Automated pipelines, observability and resilient infrastructure." },
];

export const WHY_OUTRO =
  "We focus on maintainable, scalable, purpose-built software. We choose architecture to match real complexity, recommend simpler options when they will do, and design for the security reviews and integration requirements enterprise customers bring. If you are still deciding where AI fits in your product, our [AI consulting and strategy](/services/ai-consulting-strategy) service can help.";

export const PROCESS_INTRO =
  "The actual process depends on project scope and your existing systems. A new product, a major extension and a legacy modernisation each need a different emphasis. A typical engagement covers:";

// VERIFY: confirm the support model behind stage 10 ("agreed as part of the engagement").
export const PROCESS = [
  { title: "Product and business requirements discovery", text: "Goals, customers, commercial model, constraints and success measures." },
  { title: "User roles and workflow analysis", text: "Who uses the product, what they need to do and how permissions should work." },
  { title: "Technical feasibility and architecture planning", text: "Tenancy model, architecture style, technology choices and risks." },
  { title: "Database and integration design", text: "Data model, tenant separation, APIs and integration patterns." },
  { title: "UX and application design", text: "Interfaces for end users, administrators and internal teams." },
  { title: "Software development", text: "Short iterations with regular demonstrations and continuous integration." },
  { title: "AI integration where appropriate", text: "AI features with evaluation, guardrails, cost controls and tenant isolation." },
  { title: "Testing and security validation", text: "Automated tests, performance and load testing, security testing and isolation checks." },
  { title: "Deployment and release planning", text: "Environments, release strategy, migration and rollback plans." },
  { title: "Monitoring and continuous improvement", text: "Observability, incident response, a feedback loop and a roadmap for ongoing development, with support agreed as part of the engagement." },
];

export const FAQS = [
  { q: "What is enterprise SaaS development?", a: ["It is the design and engineering of cloud-delivered software products that meet the requirements of larger organisations. Those requirements include scalability, secure multi-tenant architecture, enterprise identity and permissions, integrations, audit logging, reporting, reliability and controlled product evolution."] },
  { q: "What is the difference between SaaS and enterprise software?", a: ["SaaS describes how software is delivered: hosted centrally and accessed over the internet, usually on subscription. Enterprise software describes who it is for: large organisations with complex processes, security and integration needs. Enterprise SaaS is both: subscription software built to enterprise standards. Enterprise software can also be installed on-premises or built for internal use."] },
  { q: "Can you develop a custom enterprise SaaS platform?", a: ["Yes. We design and build custom SaaS platforms, from architecture and multi-tenancy through to integrations, AI features, security and deployment, shaped around your product strategy and customers."] },
  { q: "What is multi-tenant SaaS architecture?", a: ["It is an architecture in which one application serves many customers (“tenants”) from shared infrastructure, with each tenant's data and configuration kept logically separate. It is efficient to operate and update, but tenant isolation must be engineered and tested carefully. Some products combine shared tenancy with dedicated resources for customers with stricter needs."] },
  { q: "Can AI be integrated into an existing SaaS product?", a: ["Usually, yes. AI features such as intelligent search, assistants, document processing, summarisation and predictive insights can be added to existing products through new services and APIs. Key considerations are tenant-scoped data access, accuracy evaluation, latency, cost per tenant and clear user-facing boundaries."] },
  { q: "What are AI-powered enterprise applications?", a: ["They are business applications that use AI to help users complete work, for example by finding information, drafting content, extracting data from documents, suggesting next steps, automating routine steps or highlighting patterns in data, with permissions, logging and human oversight built in."] },
  { q: "Can you modernise an existing enterprise application?", a: ["Yes. We usually recommend incremental modernisation: exposing existing functions through APIs, rebuilding modules in stages, moving to modern infrastructure and migrating data with validation. This reduces risk compared with a complete rewrite and keeps the business running throughout."] },
  { q: "How do you approach SaaS application security?", a: ["Security is designed in from the start. That covers tenant isolation, server-side authorisation, role-based access, multi-factor authentication, encryption, secure APIs, audit logging, monitoring, vulnerability management, tested backups and an incident response plan. We also document the controls to support your customers' security reviews and any certification you pursue."] },
  { q: "Can enterprise SaaS software integrate with ERP and CRM systems?", a: ["Yes, where those systems provide APIs or other supported integration methods. Typical integrations synchronise customers, orders, invoices, users and activity through APIs and webhooks, with validation, error handling, monitoring and audit trails."] },
  { q: "How do you design SaaS applications for scalability?", a: ["We start from realistic growth assumptions, then use modular design, efficient data access and indexing, caching, background processing, stateless application tiers and infrastructure that can scale under load. We load-test before scale is needed, and only introduce more complex patterns, such as separate services, where the workload justifies them."] },
  { q: "Can you build a B2B subscription-based software platform?", a: ["Yes. We build subscription platforms with plans, entitlements, trials, usage tracking, account management and integration with established billing providers, alongside the multi-tenant architecture and administration tools B2B customers expect."] },
  { q: "What is the difference between custom SaaS development and off-the-shelf software?", a: ["Off-the-shelf software is quicker to adopt and shares development costs across many customers, but you adapt to it. Custom SaaS development builds software around your processes or product vision. That gives you control over features, data, integrations and roadmap, in exchange for investment in development and ongoing ownership. Many organisations combine both."] },
];

export const FINAL_CTA = {
  title: "Build Enterprise Software",
  titleAccent: "That Scales, Integrates and Lasts",
  body: {
    text: "Whether you are adding enterprise capabilities to a growing SaaS product, integrating AI into an established platform, building an internal enterprise application or modernising a legacy system, we can help you plan and build it properly. Tell us about your product, users and constraints, and we will give you an honest view of the architecture, effort and most sensible next step. Launching a new product? Start with our [[link]].",
    link: { anchor: "MVP and SaaS development services", href: "/services/mvp-saas-development" },
  },
  bring: ["Your product and its customers", "Current architecture and stack", "Enterprise requirements you are hearing", "Where AI might fit", "What a good outcome looks like"],
};

export const SCHEMA_SERVICE = {
  name: "Enterprise SaaS Development and AI-Powered Enterprise Software",
  serviceType: ["Enterprise SaaS development and AI-powered enterprise software", "Multi-tenant SaaS architecture", "Legacy application modernisation"],
  description:
    "Design, engineering, extension and modernisation of SaaS products and enterprise applications for UK software companies and organisations: multi-tenant architecture, enterprise identity, integrations, AI features, security and scalable infrastructure.",
  catalogName: "Enterprise SaaS AI capabilities",
  catalog: AI_CAPABILITIES.map((c) => c.title),
  relatedServicePath: "/services/mvp-saas-development",
};
