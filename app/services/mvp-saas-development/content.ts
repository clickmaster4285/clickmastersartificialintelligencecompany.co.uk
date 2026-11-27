/*
 * /services/mvp-saas-development content, from
 * "ClickMasters MVP & SaaS Development: SEO Content Pack" (24 Nov 2026).
 * Edit copy here; page.jsx only renders it.
 *
 * VERIFY comments mark business facts the pack says need owner confirmation.
 */

export const PATH = "/services/mvp-saas-development";

export const SEO = {
  title: "MVP & SaaS Development Services UK | Startups",
  description:
    "MVP and SaaS development services for UK founders and businesses: validate fast, launch in weeks, then scale with multi-tenancy and subscription billing.",
  ogTitle: "MVP & SaaS Development Company UK | ClickMasters",
  ogDescription:
    "Turn a product idea into a validated MVP, then a secure, subscription-based SaaS platform, with structured scope, multi-tenancy and billing built in.",
};

export type LinkedText = { text: string; link?: { anchor: string; href: string } };

const IMG = "/assets/Services/mvp-saas";

/** Diagrams from the content pack (public/assets/Services/mvp-saas). Alt text from pack section L. */
export const IMAGES = {
  journey: {
    src: `${IMG}/mvp-to-saas-product-journey.png`,
    width: 1080,
    height: 760,
    alt: "Illustration of a product journey from discovery and MVP launch through iteration to SaaS",
  },
  matrix: {
    src: `${IMG}/mvp-feature-prioritisation-matrix.png`,
    width: 1720,
    height: 600,
    alt: "Matrix of example MVP features by user value and build effort, sorted into now, later and drop",
  },
  tenancy: {
    src: `${IMG}/saas-multi-tenant-vs-single-tenant.png`,
    width: 1720,
    height: 460,
    alt: "Diagram comparing SaaS tenancy models: shared database, schema per tenant, database per tenant",
  },
  architecture: {
    src: `${IMG}/saas-architecture-example.png`,
    width: 1720,
    height: 560,
    alt: "SaaS architecture diagram: web app, tenant-aware API, PostgreSQL, cache, queue, billing webhooks",
  },
  billing: {
    src: `${IMG}/saas-subscription-billing-lifecycle.png`,
    width: 1720,
    height: 424,
    alt: "Subscription lifecycle diagram: trial, active, past due with retries, then recovered or cancelled",
  },
} as const;

export const HERO = {
  eyebrow: "MVP & SaaS Development UK",
  title: "MVP Development and SaaS Development Services",
  // Rendered H1: title + " " + titleAccent (65 chars).
  titleAccent: "to Launch and Scale",
  lead:
    "ClickMasters is an MVP development company for UK founders and businesses, and a SaaS development company for the products that prove themselves. Our MVP development services turn a product idea into a working MVP in front of real users, so you can validate it, then grow it into a secure, subscription-based SaaS platform. Minimum viable product development starts with the smallest product that tests your riskiest assumption: we build it on architecture that will not need replacing when it works, and add multi-tenancy, billing and scale when the evidence says it is time.",
  audience:
    "For start-up founders, product owners and established companies launching a new digital product, and for SaaS businesses whose platform has outgrown its first version.",
  stats: [
    { value: "6–8 weeks", label: "Typical MVP delivery" },
    { value: "Weekly demos", label: "In two-week sprints" },
    { value: "Multi-tenant", label: "SaaS foundations" },
    { value: "Billing built in", label: "Plans and subscriptions" },
  ],
};

export const WHAT_IS = {
  p1: "A **minimum viable product (MVP)** is the smallest working version of a product that real users can adopt, so you can learn whether it solves a problem they care about. That is the plain meaning of minimum viable product: it is not a prototype or a demo. A prototype tests whether people understand the idea, and a proof of concept tests whether something is technically possible. An MVP tests whether people will actually use and value the product, and because they use it for real, the feedback is trustworthy.",
  p2: "**Software as a Service (SaaS)** is a delivery and business model: software hosted in the cloud, used through a browser or app, and paid for on a recurring subscription. SaaS development adds the parts that model needs, such as customer accounts, plans and billing, tenant isolation, onboarding, admin tools and the ability to serve many customers from one platform.",
  p3: {
    text: "The two are not alternatives. Many SaaS products start life as an MVP: a focused first release that proves demand before the full subscription platform is built. Validating first protects your budget. A founder who learns in week eight that customers want a different workflow has spent a fraction of what a full build would have cost. If what you need is software for your own organisation rather than a product to sell, our [[link]] are the better fit.",
    link: { anchor: "custom software development services", href: "/services/custom-software-development" },
  } as LinkedText,
};

export const PHASES = [
  { title: "Product discovery", text: "Clarify the problem, the users and the riskiest assumption. Output: a testable scope, not a wish list." },
  { title: "MVP development", text: "Build only the features needed to test that assumption, to production quality." },
  { title: "Product launch", text: "Put the MVP in front of target users or pilot customers, with analytics in place from day one." },
  { title: "Post-launch iteration", text: "Measure, talk to users, and decide what to build, change or remove next." },
];

export const EXAMPLES = [
  {
    title: "Example: a B2B scheduling tool",
    text: "A founder believes clinics will pay to stop double-booking rooms. The MVP is a booking calendar for a single clinic, with conflict detection and email confirmations. There is no billing yet: three pilot clinics use it free for eight weeks.",
    tests: "Whether staff actually switch from their current spreadsheet.",
  },
  {
    title: "Example: an internal tool becoming SaaS",
    text: "A logistics firm built a proof-of-delivery tool for its own drivers. Before selling it, the next release adds tenant separation, self-service sign-up and subscription plans, so other carriers can use it securely.",
    tests: "Whether other businesses will pay, and on which plan.",
  },
];

export type ServiceField = { label: string; text: string };
export type Service = { id: string; icon: string; title: string; intro: string; fields: ServiceField[] };

export const MVP_SERVICES_INTRO =
  "These services take you from idea to evidence. We will not promise product-market fit, because no developer can. What we can promise is a disciplined process that gets you reliable answers quickly.";

export const MVP_SERVICES: Service[] = [
  {
    id: "startup-mvp-development",
    icon: "rocket",
    title: "MVP Development for Startup Founders",
    intro: "An end-to-end MVP engagement for founders: discovery, design, build, launch and the first round of iteration.",
    fields: [
      { label: "Who needs it", text: "Pre-seed and seed founders, often non-technical, who need a credible product to test with users or show investors." },
      { label: "Deliverables", text: "Prioritised scope, clickable prototype, production MVP, analytics set-up, launch support and a post-launch roadmap." },
      { label: "Technical considerations", text: "A single, well-structured codebase rather than microservices, and managed cloud services instead of custom infrastructure, to keep running costs and complexity low." },
      { label: "Business value", text: "Evidence from real users before raising or spending a larger budget." },
    ],
  },
  {
    id: "custom-mvp-software-development",
    icon: "code",
    title: "Custom MVP Development for Established Businesses",
    intro: "Working as a bespoke MVP development company alongside your team, we build MVPs for established businesses testing a new product, service line or internal tool alongside existing operations.",
    fields: [
      { label: "Who needs it", text: "SMEs and corporate innovation teams with existing customers, data and systems." },
      { label: "Problems solved", text: "Committing a full project budget to an untested idea, or a pilot that cannot connect to the systems it depends on." },
      { label: "Deliverables", text: "An MVP integrated with one or two key systems (for example CRM or stock data), plus a pilot plan with success criteria agreed upfront." },
      { label: "Business value", text: "A go or no-go decision based on usage data from your own customers or staff." },
    ],
  },
  {
    id: "saas-mvp-development",
    icon: "saas",
    title: "SaaS MVP Development",
    intro: "An MVP designed from day one to become a subscription product, with the SaaS foundations that are expensive to add later.",
    fields: [
      { label: "Who needs it", text: "Founders whose business model is recurring revenue from many customer organisations." },
      { label: "What is included early", text: "Organisation accounts and a tenant identifier on every record, role-based access, and a simple plan structure, even if billing starts manually." },
      { label: "What waits", text: "Usage-based billing, single sign-on, complex permission models and advanced analytics, until customers ask for them." },
      { label: "Business value", text: "You can onboard paying customers early without rebuilding the data model later." },
    ],
  },
  {
    id: "mvp-prototyping-product-discovery",
    icon: "discovery",
    title: "MVP Prototyping and Product Discovery",
    intro: "Structured workshops and prototypes that turn an idea into a testable scope before development starts.",
    fields: [
      { label: "Activities", text: "Problem and user interviews, assumption mapping, competitor review, user journeys, feature prioritisation and clickable prototypes tested with target users." },
      { label: "Deliverables", text: "Product brief, prioritised backlog, prototype, technical approach and a scoped estimate." },
      { label: "Technical considerations", text: "Identifying technical unknowns, such as a third-party API's limits, and testing them with a quick spike before the plan depends on them." },
      { label: "Business value", text: "The cheapest point at which to change direction." },
    ],
  },
  {
    id: "mvp-ui-ux-design",
    icon: "design",
    title: "MVP UI/UX Design",
    intro: "Interface design focused on the one journey that must work well, rather than polishing every screen.",
    fields: [
      { label: "Deliverables", text: "Wireframes, a tested prototype and a lightweight design system that later releases can build on." },
      { label: "Technical considerations", text: "Using an established component library to speed up delivery, while keeping branding and the core journey distinctive." },
      { label: "Example", text: "For a quoting tool, the design effort goes into creating and sending a quote in under a minute. Settings pages stay simple." },
      { label: "Business value", text: "Users reach the product's value quickly, which is what an MVP needs to measure." },
    ],
  },
  {
    id: "mvp-backend-api-development",
    icon: "backend",
    title: "MVP Backend and API Development",
    intro: "The server, database and APIs behind the MVP, built to production standards even when the feature set is small.",
    fields: [
      { label: "Deliverables", text: "Documented API, authentication, database schema with migrations, background jobs and the essential integrations." },
      { label: "Technical considerations", text: "A data model shaped for where the product is going (for example, organisations and users from day one), automated tests on core logic and infrastructure defined as code." },
      { label: "Business value", text: "When the MVP works, you grow it rather than rewrite it." },
    ],
  },
  {
    id: "mvp-testing-launch",
    icon: "test",
    title: "MVP Testing and Launch",
    intro: "Quality assurance and launch preparation proportionate to an MVP: rigorous on the core journey and on security, lighter elsewhere.",
    fields: [
      { label: "Activities", text: "Functional and regression tests on the core journey, security checks, cross-device checks, production set-up, monitoring and a launch checklist." },
      { label: "Deliverables", text: "Live MVP, error monitoring, analytics events for the success metrics and an onboarding flow." },
      { label: "Business value", text: "Early users' first impression is not undermined by avoidable bugs." },
    ],
  },
  {
    id: "mvp-validation-iterative-improvement",
    icon: "loop",
    title: "MVP Validation and Iterative Improvement",
    intro: "Post-launch cycles that turn usage data and user conversations into the next set of decisions.",
    fields: [
      { label: "Activities", text: "Reviewing activation, retention and conversion against the agreed success criteria; user interviews; and prioritising fixes, new features and removals." },
      { label: "Deliverables", text: "Fortnightly releases, a metrics review and an updated roadmap." },
      { label: "Business value", text: "Clear signals on whether to scale, change direction or stop, before larger budgets are committed." },
    ],
  },
];

export const SAAS_SERVICES_INTRO: LinkedText = {
  text: "As a SaaS application development company, we pick up when a product has traction, or when a business is building a subscription platform from the start. These services provide the architecture and functionality SaaS customers expect. Most SaaS products are used in the browser, so they also rely on the front-end architecture, rendering and performance work covered by our [[link]].",
  link: { anchor: "web application development solutions", href: "/services/web-application-development" },
};

export const SAAS_SERVICES: Service[] = [
  {
    id: "custom-saas-application-development",
    icon: "apps",
    title: "Custom SaaS Application Development",
    intro: "Working as your SaaS product development company, we build full SaaS products around your market, from tenant model to billing, admin console and customer-facing application.",
    fields: [
      { label: "Functionality", text: "Organisation sign-up, team invitations, plans, core product features, notifications, an admin console and audit logs." },
      { label: "Architecture", text: "A modular application with clear boundaries between product features, billing and identity, so each can evolve independently." },
      { label: "Business benefit", text: "A product you own, priced and packaged the way your market buys." },
    ],
  },
  {
    // VERIFY: row-level security is a delivered capability.
    id: "multi-tenant-saas-development",
    icon: "tenants",
    title: "Multi-Tenant SaaS Development",
    intro: "One application and infrastructure serving many customer organisations, with each organisation's data kept separate.",
    fields: [
      { label: "Architecture", text: "Usually a shared database with a tenant identifier on every row, enforced in the data-access layer and, in PostgreSQL, optionally by row-level security." },
      { label: "Technical requirements", text: "Tenant-aware queries, caching and file storage, plus automated tests proving one tenant cannot read another's data." },
      { label: "Business benefit", text: "The lowest cost per customer and one release for everyone." },
    ],
  },
  {
    // VERIFY: single-tenant deployments are offered.
    id: "single-tenant-saas-architecture",
    icon: "server",
    title: "Single-Tenant SaaS Architecture",
    intro: "A separate database, or a separate deployment, for each customer, for enterprise buyers with strict isolation or data residency demands.",
    fields: [
      { label: "When it fits", text: "Regulated customers, contracts requiring dedicated environments, or very large customers whose load would affect others." },
      { label: "Trade-offs", text: "Higher hosting cost and more operational work: every update must roll out to every environment, which needs strong automation." },
      { label: "Business benefit", text: "Wins enterprise deals that a shared platform could not. A hybrid model can offer it only on a premium tier." },
    ],
  },
  {
    id: "saas-platform-modernisation",
    icon: "refresh",
    title: "SaaS Platform Modernisation",
    intro: "Re-engineering an existing SaaS product that has become slow, costly to run or hard to change.",
    fields: [
      { label: "Typical issues", text: "Copy-per-customer codebases, manual billing, no tenant isolation tests, ageing frameworks and slow releases." },
      { label: "Approach", text: "An architecture audit, then staged improvements that keep the product running, such as consolidating forks, adding a billing provider or migrating tenants in batches." },
      { label: "Business benefit", text: "Lower running costs and faster feature delivery." },
    ],
  },
  {
    id: "saas-subscription-billing-integration",
    icon: "billing",
    title: "SaaS Subscription and Billing Integration",
    intro: "Plans, trials, recurring payments, upgrades, invoices and failed-payment handling, connected to a specialist billing provider.",
    fields: [
      { label: "Architecture", text: "The billing provider is the source of truth for payments, and webhooks update your application's subscription state. Card data never touches your servers." },
      { label: "Technical requirements", text: "Idempotent webhook handling, entitlement checks that control feature access by plan, and reconciliation reports." },
      { label: "Business benefit", text: "Revenue collected reliably, with less manual chasing." },
    ],
  },
  {
    // VERIFY: SSO (SAML/OIDC) is a delivered capability.
    id: "saas-user-account-management",
    icon: "users",
    title: "SaaS User and Account Management",
    intro: "Everything customers use to manage their own organisation: users, roles, invitations, profiles and security settings.",
    fields: [
      { label: "Functionality", text: "Invitations, roles and permissions, ownership transfer, multi-factor authentication, session management and account deletion." },
      { label: "Integrations", text: "Single sign-on with customers' identity providers (SAML or OpenID Connect) for enterprise plans." },
      { label: "Business benefit", text: "Customers manage themselves, so your support team does not have to." },
    ],
  },
  {
    id: "saas-api-development-integrations",
    icon: "api",
    title: "SaaS API Development and Integrations",
    intro: "Public APIs and webhooks that let customers connect your product to their own systems, plus integrations with the tools your market already uses.",
    fields: [
      { label: "Technical requirements", text: "Per-tenant API keys or OAuth, rate limits by plan, versioning, OpenAPI documentation and webhook retries." },
      { label: "Integration examples", text: "CRMs, accounting packages, payment gateways, email and calendar services, and data export to BI tools." },
      { label: "Business benefit", text: "Integrations make a product harder to replace, which reduces churn." },
    ],
  },
  {
    id: "saas-dashboard-analytics",
    icon: "dashboard",
    title: "SaaS Dashboard and Analytics",
    intro: "Customer-facing reporting inside the product, and internal analytics on how the product itself is used.",
    fields: [
      { label: "Functionality", text: "Usage and outcome dashboards for customers; for you, activation, retention, feature adoption and revenue metrics." },
      { label: "Architecture", text: "Reporting queries kept off the main transactional database, using read replicas or a separate analytics store as volume grows." },
      { label: "Business benefit", text: "Customers can see the value they get, and you can see where the product needs work." },
    ],
  },
  {
    id: "saas-security-access-management",
    icon: "shield",
    title: "SaaS Security and Access Management",
    intro: "Controls that protect every tenant's data and satisfy the security questionnaires enterprise buyers send.",
    fields: [
      { label: "Functionality", text: "Role-based access, audit logs, MFA, SSO, IP restrictions on higher tiers, and data export and deletion on request." },
      { label: "Technical requirements", text: "Tenant isolation tests, OWASP Top 10 controls, secrets management and regular security testing." },
      { label: "Business benefit", text: "Shorter enterprise sales cycles, because security answers are ready." },
    ],
  },
  {
    id: "saas-maintenance-scaling",
    icon: "scale",
    title: "SaaS Maintenance and Scaling",
    intro: "Keeping a live SaaS platform fast, secure and affordable to run as customers and data grow.",
    fields: [
      { label: "Activities", text: "Monitoring, performance tuning, database scaling, dependency and security updates, cost reviews and feature development, with 24/7 assistance for critical systems." },
      { label: "Architecture", text: "Stateless application servers that scale horizontally, background job queues, caching and, only where load justifies it, splitting out services." },
      { label: "Business benefit", text: "Predictable performance and hosting costs that grow more slowly than revenue." },
    ],
  },
];

// VERIFY: "6–8 weeks of development after a short discovery" — confirm how discovery time is counted.
export const PROCESS_INTRO =
  "Ten stages, delivered in two-week sprints with weekly demos. Most MVPs launch in 6–8 weeks from the start of development. The main reason MVPs run late is scope growth, so most of this process is about deciding what not to build yet.";

export const PROCESS = [
  { title: "Idea Discovery and Business Requirements", activities: "Workshops on the idea, business model, users and constraints.", deliverable: "Product brief and success criteria.", decision: "What must be true for this product to succeed?" },
  { title: "Market and User Problem Assessment", activities: "User interviews, competitor and alternative review.", deliverable: "Problem statement and the riskiest assumption.", decision: "Is the problem painful enough that people will pay to solve it?" },
  { title: "Product Scope Definition", activities: "Map the core user journey from first visit to first value.", deliverable: "Journey map and scope boundary.", decision: "Which single journey must work brilliantly?" },
  { title: "MVP Feature Prioritisation", activities: "Score features on value and effort and sort them with MoSCoW (Must, Should, Could, Won't yet).", deliverable: "A \"now\" list and a \"later\" list, both written down.", decision: "Anything not needed to test the assumption moves to later." },
  { title: "Product Architecture and Technology Planning", activities: "Choose stack, hosting, tenancy model and integrations.", deliverable: "Architecture outline and estimate with milestones.", decision: "What is built properly now, and what is deliberately simple?" },
  { title: "UI/UX Design and Prototyping", activities: "Wireframes and a clickable prototype tested with target users.", deliverable: "Approved prototype.", decision: "Can users complete the core journey without help?" },
  { title: "MVP Development", activities: "Sprints with weekly demos; scope changes go through the \"later\" list.", deliverable: "Working software in staging every sprint.", decision: "Swap features in and out without growing the total scope." },
  { title: "Quality Assurance and Testing", activities: "Automated tests on core logic, journey testing and security checks.", deliverable: "Test report and launch readiness checklist.", decision: "Is the core journey reliable enough for real users?" },
  { title: "MVP Launch", activities: "Production release, analytics, monitoring and onboarding for pilot users.", deliverable: "Live MVP and a metrics dashboard.", decision: "Who are the first users, and how will we reach them?" },
  { title: "User Feedback and Iterative Improvements", activities: "Review metrics against success criteria and interview users.", deliverable: "Prioritised next release and roadmap.", decision: "Scale, change direction or stop." },
];

export const ARCH_INTRO =
  "SaaS architecture decides your cost per customer, how quickly you can ship, and whether enterprise buyers will trust you with their data. The most important early choice is the tenancy model.";

// VERIFY: schema-per-tenant and single-tenant deployments are offered.
export const TENANCY = {
  headers: ["Model", "Advantages", "Trade-offs", "Typical fit"],
  rows: [
    ["Multi-tenant, shared tables", "Lowest cost per customer; one migration and one release for everyone", "Isolation depends on disciplined code and tests; one noisy tenant can affect others", "Most B2B SaaS products, especially early on"],
    ["Multi-tenant, schema per tenant", "Stronger logical separation; easier per-tenant export and restore", "Migrations run across many schemas; harder to scale to thousands of tenants", "Dozens to hundreds of mid-sized customers"],
    ["Single-tenant (database or deployment per tenant)", "Strongest isolation; per-customer data residency and maintenance windows", "Highest hosting and operations cost; needs automated provisioning and roll-outs", "Enterprise and regulated customers, or a premium tier"],
  ],
};

export const ARCH_LAYERS = [
  {
    title: "Identity and access",
    icon: "users",
    items: [
      ["User management:", "users belong to one or more organisations, each with its own roles."],
      ["RBAC:", "roles such as owner, admin and member, checked on the server for every request."],
      ["Tenant isolation:", "the tenant is resolved from the session, never from a value the browser can change."],
    ],
  },
  {
    title: "Commercial layer",
    icon: "billing",
    items: [
      ["Subscription management:", "plan, seats, trial and status stored per tenant."],
      ["Billing architecture:", "the provider is the source of truth, synced through webhooks."],
      ["Entitlements:", "one service answers \"may this tenant use this feature?\""],
    ],
  },
  {
    title: "Platform",
    icon: "server",
    items: [
      ["API architecture:", "versioned, documented and rate-limited by plan."],
      ["Database design:", "tenant ID indexed on every table, plus migrations in CI."],
      ["Cloud, logging and monitoring:", "containers on AWS, Azure or Google Cloud, structured logs with tenant context, and alerts."],
      ["Scalability:", "stateless servers, queues and caching before microservices."],
    ],
  },
] as const;

// VERIFY: no billing provider is named on the site; Direct Debit and SCA handling to be confirmed.
export const BILLING_INTRO =
  "Billing is where many SaaS products lose revenue quietly, through failed payments that are never retried, upgrades that are not charged and cancelled customers who keep access. We integrate a specialist subscription billing provider, chosen with you, so payment data stays with a PCI DSS-compliant processor. We then build the logic that connects billing to your product.";

export const BILLING = [
  { icon: "plans", title: "Free and paid plans", text: "A free plan or a free trial, plus paid tiers defined by features, seats or usage limits." },
  { icon: "calendar", title: "Monthly and annual billing", text: "Both intervals, with an annual discount if you choose, and price changes handled without breaking existing contracts." },
  { icon: "billing", title: "Recurring payments", text: "Card and Direct Debit collection through the provider, with Strong Customer Authentication where UK rules require it." },
  { icon: "upgrade", title: "Upgrades and downgrades", text: "Immediate upgrades with proration; downgrades usually applied at the end of the period." },
  { icon: "cancel", title: "Cancellation", text: "Self-service cancellation with access until the period ends, an exit survey and data export." },
  { icon: "timer", title: "Trial periods", text: "Card-required or card-free trials, with reminder emails and a clear conversion moment." },
  { icon: "invoice", title: "Invoices", text: "Automatic invoices and receipts with your business details and VAT shown where it applies." },
  { icon: "retry", title: "Payment failure handling", text: "Automatic retries, reminder emails and a grace period before access is restricted, often called dunning." },
  { icon: "meter", title: "Usage-based billing", text: "Metering events such as API calls, messages or active users, recorded reliably and reported to the billing provider." },
];

export const STACK_INTRO =
  "For an MVP, the best stack is one that ships quickly and can grow without a rewrite. For SaaS, maintainability, security and running cost matter more each year.";

export const STACK = [
  { title: "Front end", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { title: "Back end", items: ["Node.js", "Python & Django", "Laravel"] },
  { title: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Firebase"] },
  { title: "Mobile", items: ["Flutter", "React Native"] },
  { title: "Cloud & infrastructure", items: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform"] },
  { title: "Delivery & monitoring", items: ["GitHub Actions", "Jenkins", "Prometheus", "Grafana", "New Relic"] },
];

export const STACK_FIT = {
  headers: ["Layer", "Technologies we use", "Why it suits MVP and SaaS"],
  rows: [
    ["Front end", "React, Next.js, TypeScript, Tailwind CSS", "Fast to build, strong component ecosystems, and server rendering for marketing and app pages"],
    ["Back end", "Node.js, Python with Django, Laravel", "Mature frameworks with authentication, ORM and admin tooling that speed up an MVP"],
    ["Database", "PostgreSQL, MySQL, MongoDB, Redis", "PostgreSQL's row-level security and transactions suit multi-tenant SaaS; Redis for caching and queues"],
    ["Managed services", "Firebase where it fits", "Authentication, notifications and simple data for very early MVPs"],
    ["Mobile", "Flutter, React Native", "When the product needs a companion app"],
    ["Infrastructure", "AWS, Azure, Google Cloud, Docker, Kubernetes, Terraform", "Containers and infrastructure as code from day one; Kubernetes only when scale needs it"],
    ["Delivery and monitoring", "GitHub Actions, Jenkins, Prometheus, Grafana, New Relic", "Automated releases and visibility of errors and performance per tenant"],
    ["SaaS services", "Authentication, billing, email and storage providers", "Chosen per project on cost, UK data handling and integration quality"],
  ],
};

export const SECURITY_INTRO =
  "In SaaS, one security failure can expose every customer at once. We design against the OWASP Top 10 and follow GDPR best practice. No supplier can guarantee an application is unbreachable, but these controls address the risks that matter most in a multi-tenant product.";

export const SECURITY = [
  { icon: "tenants", title: "Tenant data isolation", text: "The tenant is enforced in the data layer, optionally with PostgreSQL row-level security, and proven by automated cross-tenant tests." },
  { icon: "key", title: "Secure authentication", text: "Strong password hashing, MFA, and SSO for enterprise tenants." },
  { icon: "roles", title: "Role-based permissions", text: "Server-side checks for every action, with roles managed by each customer's own admins." },
  { icon: "lock", title: "Data encryption", text: "TLS in transit, and encryption at rest for databases, files and backups." },
  { icon: "api", title: "Secure API communication", text: "Scoped API keys or OAuth tokens per tenant, rate limiting and signed webhooks." },
  { icon: "billing", title: "Payment security", text: "Hosted payment pages or provider SDKs, so card data never touches your servers and PCI DSS scope stays minimal." },
  { icon: "timer", title: "Session management", text: "Secure, HttpOnly cookies, expiry, revocation and sign-out across devices." },
  { icon: "backup", title: "Backup and recovery", text: "Automated, encrypted backups with point-in-time recovery and tested restores, including for a single tenant." },
  { icon: "pulse", title: "Monitoring", text: "Audit logs per tenant, alerts on suspicious activity and an incident response process." },
  { icon: "deps", title: "Dependency management", text: "Automated vulnerability scanning and a regular patch cycle." },
  { icon: "test", title: "Security testing", text: "Code review, automated scanning and regular security testing before major releases." },
  { icon: "privacy", title: "Data privacy", text: "UK GDPR-aware design: data minimisation, retention rules, data processing terms for customers and an NDA on request." },
];

export const SCALE_INTRO: LinkedText = {
  text: "A successful MVP creates new pressures: more users, more feature requests and shortcuts that start to slow you down. The aim is to add complexity only when evidence justifies it. The same applies to new channels: when customers start asking to use the product on the move, our [[link]] can add an iOS and Android companion app on the same back end.",
  link: { anchor: "mobile application development services", href: "/services/mobile-app-development" },
};

export const SCALE = [
  { icon: "feedback", title: "User feedback analysis", text: "Combine usage data with regular user interviews. Data shows what is happening; conversations explain why." },
  { icon: "list", title: "Feature prioritisation", text: "Rank requests by how many paying customers need them and how they affect retention, not by who asks loudest." },
  { icon: "loop", title: "Product iteration", text: "Ship small changes often behind feature flags, measure them, and remove what does not help." },
  { icon: "debt", title: "Technical debt management", text: "Keep a written list of deliberate MVP shortcuts and set aside part of each sprint to pay them down." },
  { icon: "arch", title: "Architecture improvements", text: "Strengthen tenant isolation, split out slow work into background jobs, and add caching where measurements show a need." },
  { icon: "billing", title: "Subscription implementation", text: "Move from manual invoices to self-service billing once pricing has been tested with real customers." },
  { icon: "speed", title: "Performance optimisation", text: "Use profiling to find slow queries and pages, then fix the ones customers actually feel." },
  { icon: "scale", title: "Infrastructure scaling", text: "Scale horizontally and add read replicas before considering a microservices rewrite." },
  { icon: "chart", title: "Analytics and monitoring", text: "Track activation, retention, expansion and churn, and break down errors and performance by tenant." },
  { icon: "tools", title: "Long-term maintenance", text: "Framework upgrades, security patches and cost reviews on a planned schedule." },
];

export const EVOLUTION = [
  { title: "Example evolution, months 0–3", text: "An MVP for one customer segment, with manual onboarding and invoices, and a tenant ID on every record from the start.", label: "Goal", note: "Prove people use it weekly." },
  { title: "Example evolution, months 4–9", text: "Self-service sign-up, two paid plans with card billing, an admin console and the first integration customers asked for.", label: "Goal", note: "Prove people pay without hand-holding." },
  { title: "Example evolution, months 10–18", text: "SSO and audit logs for larger customers, usage analytics, a public API, read replicas and staged releases with feature flags.", label: "Goal", note: "Win bigger customers and reduce churn." },
];

export const AVOID = {
  title: "What we avoid",
  text: "Microservices, Kubernetes, multi-region hosting or custom billing engines before the product has the customers to justify their cost.",
  why: "Premature complexity slows learning and raises running costs.",
};

export const INDUSTRIES_INTRO =
  "These are illustrative product ideas showing the kind of MVP and SaaS products these markets buy, not descriptions of completed ClickMasters projects.";

export const INDUSTRIES = [
  { icon: "health", title: "Healthcare", text: "A clinic booking and patient-communication platform sold per practice.", considerations: ["Special category data (UK GDPR)", "NHS DTAC or DSPT if connected to NHS services"] },
  { icon: "finance", title: "Finance", text: "An expense and invoice-approval tool for small finance teams.", considerations: ["Audit trails", "Accounting integrations", "Strong authentication"] },
  { icon: "ecommerce", title: "E-commerce", text: "A subscription-box or wholesale ordering platform for independent brands.", considerations: ["Payment integration", "Stock sync", "Peak-traffic handling"] },
  { icon: "education", title: "Education", text: "A course and assessment platform for training providers.", considerations: ["Accessibility", "ICO Children's Code for under-18s"] },
  { icon: "property", title: "Real estate", text: "A lettings compliance and maintenance tracker for agents.", considerations: ["Document storage", "Reminders", "Multi-property permissions"] },
  { icon: "logistics", title: "Logistics", text: "A proof-of-delivery and dispatch platform for small carriers.", considerations: ["Driver mobile app", "Offline capture", "Customer tracking links"] },
  { icon: "briefcase", title: "Professional services", text: "A client portal and practice management tool for accountants or consultants.", considerations: ["Secure document exchange", "Task deadlines", "Per-client permissions"] },
  { icon: "ops", title: "Business operations", text: "CRM, lightweight ERP, project management or analytics dashboards for a specific niche.", considerations: ["Integrations with the tools that niche already uses"] },
];

export const COMPARISON_INTRO =
  "MVP describes a product's stage. SaaS describes how it is delivered and paid for. Traditional software here means software licensed and installed per customer, or built for one organisation's internal use. An MVP can be, and often is, the first release of a SaaS product.";

export const COMPARISON = {
  headers: ["Factor", "MVP", "SaaS product", "Traditional software"],
  rows: [
    ["Purpose", "Test a core assumption with real users", "Serve many customers on a subscription", "Serve one organisation, or customers through licences and installs"],
    ["Product maturity", "First release", "Ongoing, continuously updated", "Versioned releases"],
    ["Feature scope", "Deliberately minimal", "Broad, packaged into plans", "Defined by contract or specification"],
    ["Development approach", "Short sprints and fast learning", "Continuous delivery and feature flags", "Project-based, with periodic upgrades"],
    ["User management", "Simple sign-in; organisations if SaaS is planned", "Organisations, roles, SSO and self-service", "Per installation or internal directory"],
    ["Subscription model", "Often none, or manual invoicing", "Recurring plans, trials and automated billing", "One-off licence, or internal budget"],
    ["Scalability", "Enough for pilot users, on scalable foundations", "Designed for many tenants and growth", "Scaled per customer or installation"],
    ["Typical requirement", "\"Will anyone use and pay for this?\"", "\"How do we serve and grow many customers efficiently?\"", "\"We need software that fits our organisation.\""],
  ],
};

export const WHY_INTRO =
  "Choosing an MVP development agency or a SaaS development agency is a long-term decision, because the team that builds your first release usually shapes the platform for years. This is how we work.";

export const WHY = [
  { icon: "list", title: "Structured MVP planning", text: "Discovery, written \"now\" and \"later\" lists, and success criteria agreed before development begins." },
  { icon: "briefcase", title: "Business-focused product thinking", text: "We design around your business model, whether that is per-seat, per-usage or tiered plans, not only around features." },
  { icon: "tenants", title: "SaaS foundations from the start", text: "Multi-tenant SaaS foundations with subscriptions, billing, permissions and analytics, applied when your product is ready for them." },
  { icon: "team", title: "Full product team", text: "Web, mobile, back end, cloud, DevOps and AI in one team, so your product can grow across channels without changing supplier." },
  { icon: "shield", title: "Security-conscious engineering", text: "OWASP and GDPR best practice, encryption, role-based access, regular security testing and NDAs on request." },
  { icon: "loop", title: "Transparent delivery and support", text: "Two-week sprints with weekly demos, fixed-price or time-and-materials options, and ongoing support after launch." },
];

export const COST = {
  intro:
    "Scope sets both cost and timeline. Every feature added to an MVP delays the moment you learn whether it works, so a tight scope saves money twice. We provide a fixed-price or time-and-materials estimate with milestones after a free consultation, and we never quote a full SaaS platform without first understanding the product.",
  mvp: [
    ["Feature scope:", "the number of journeys in the first release"],
    ["UI/UX complexity:", "custom design versus a component library"],
    ["User roles:", "each role adds screens, permissions and tests"],
    ["Back-end functionality:", "business rules, background jobs, notifications"],
    ["Integrations:", "payments, CRM, data sources"],
    ["Testing:", "depth of automation on core logic"],
    ["Deployment:", "environments, monitoring and analytics set-up"],
  ],
  saas: [
    ["Tenancy model:", "shared, schema-based or single-tenant"],
    ["Subscriptions and billing:", "plans, trials, proration, usage metering"],
    ["Security:", "SSO, audit logs and enterprise questionnaires"],
    ["Database architecture:", "data volume, reporting and retention"],
    ["Analytics:", "customer-facing dashboards and product metrics"],
    ["Scalability:", "expected tenants, users and peak load"],
    ["Maintenance:", "hosting, monitoring, updates and support"],
  ],
};

export const FAQS = [
  {
    q: "What is a minimum viable product (MVP)?",
    a: ["A minimum viable product (MVP) is the smallest working version of a product that real users can adopt, so you can test whether it solves a problem they value before investing in a full build. MVP development covers discovery, ruthless feature prioritisation, design, development, launch and learning from real usage. An MVP is production software, not a mock-up, but its scope is deliberately limited."],
  },
  {
    q: "What is SaaS development?",
    a: ["SaaS development is building software that customers use online and pay for by subscription, with one platform serving many customer organisations. Beyond the product features themselves, it includes the infrastructure for organisation accounts, tenant data isolation, roles and permissions, plans and billing, onboarding, admin tools, APIs, monitoring and continuous updates."],
  },
  {
    q: "How much does MVP development cost in the UK?",
    a: ["The cost depends mainly on feature scope, design complexity, the number of user roles, back-end logic, integrations, testing and deployment. The biggest saving comes from cutting the first release to the one journey that tests your key assumption. ClickMasters offers fixed-price and time-and-materials models and provides a clear estimate with milestones after a free consultation."],
  },
  {
    q: "How long does it take to build an MVP?",
    a: ["Most MVPs are delivered in 6–8 weeks of development, after a short discovery and prototyping phase. Timelines grow when scope grows, when integrations depend on third-party access, or when decisions are slow. Weekly demos mean you see progress, and can adjust priorities, throughout."],
  },
  {
    q: "What features should an MVP include?",
    a: [
      "Only what is needed for a target user to reach the product's core value and for you to measure whether they did. That typically means sign-in, the core workflow, essential notifications and analytics on the success metric.",
      "Billing, extensive settings, multi-language support, advanced reporting and integrations nobody has asked for can usually wait. If you plan to become a SaaS business, include organisation accounts in the data model from day one, because adding them later is expensive.",
    ],
  },
  {
    q: "What is the difference between MVP and SaaS?",
    a: ["They describe different things. An MVP is a stage: the first, minimal release used to validate a product. SaaS is a delivery and pricing model: hosted software sold by subscription. An MVP can be the first release of a SaaS product, and many SaaS companies start exactly that way, adding multi-tenancy features, billing and scale as they grow."],
  },
  {
    q: "How much does custom SaaS development cost?",
    a: ["SaaS cost is driven by the tenancy model, subscription and billing complexity, security requirements such as SSO and audit logs, database and reporting needs, analytics, expected scale and ongoing maintenance. Running costs matter as much as build cost, so our estimates include expected hosting and support. A phased roadmap, starting with an MVP, spreads investment as revenue grows."],
  },
  {
    q: "What is multi-tenant SaaS architecture?",
    a: ["Multi-tenant architecture means one application and infrastructure serve many customer organisations (tenants), with each tenant's data kept separate. The most common approach is a shared database with a tenant identifier on every record, enforced in code and optionally by database row-level security. Alternatives give each tenant its own schema or its own database, which increases isolation but also cost and operational work."],
  },
  {
    q: "Can an MVP be expanded into a full SaaS platform?",
    a: ["Yes, if it is built with that path in mind. That means a sensible data model with organisations and users, clean code with tests on core logic, infrastructure defined as code, and a written list of deliberate shortcuts. Expansion then means adding self-service billing, roles, integrations, analytics and scaling in stages, rather than a rewrite."],
  },
  {
    q: "What does the SaaS development life cycle look like?",
    a: ["It usually runs from discovery and scope definition to an MVP, a launch to early users and iteration on their feedback. Once demand is proven, the SaaS foundations follow in stages: self-service sign-up and billing, roles and permissions, integrations and analytics. After that the work becomes continuous, with monitoring, security updates, performance tuning and scaling as customers and data grow."],
  },
  {
    q: "How do SaaS subscription and billing systems work?",
    a: ["A specialist billing provider stores payment methods, charges customers on schedule, issues invoices and retries failed payments. Your application keeps a copy of each tenant's plan and status, updated through secure webhooks from the provider, and uses it to decide which features each tenant can access. Upgrades are usually prorated immediately, downgrades take effect at the end of the period, and failed payments trigger retries and reminders before access is limited."],
  },
  {
    q: "How do you protect SaaS customer data?",
    a: ["We enforce tenant isolation in the data layer and prove it with automated cross-tenant tests. We use strong authentication with MFA and SSO options, role-based permissions checked on the server, and encryption in transit and at rest. Card data stays with the payment provider, and we add audit logs, monitoring, tested backups, dependency patching and regular security testing, following OWASP guidance and GDPR best practice."],
  },
  {
    q: "Should we consider outsourcing SaaS development?",
    a: ["It can make sense when you need a full product team quickly, or skills you do not have in-house, such as multi-tenant architecture, billing integration or DevOps. Keep product ownership, priorities and user research inside your business, and make sure you own the code, infrastructure accounts and documentation. Weekly demos, a written scope and a clear handover plan reduce the usual outsourcing risks."],
  },
  {
    q: "How do I start an MVP or SaaS development project?",
    a: ["Tell us about the problem you are solving, who it is for, the assumption you most need to test, how you plan to charge, and any deadlines or budget limits. A one-page summary or a few sketches is enough. We will arrange a free consultation, suggest a discovery approach and provide a scoped estimate with milestones. We usually respond within a few hours."],
  },
];

export const FINAL_CTA = {
  title: "Have a Product Idea or a SaaS Platform to Grow?",
  titleAccent: "Let's Plan the Next Release.",
  body: {
    text: "Tell us about your idea, your target users, the core functionality your MVP must prove, your business and subscription model, and where you see the product in two years. You can [[link]] with our team, and we will suggest a practical way forward and the smallest sensible first step.",
    link: { anchor: "discuss your SaaS product requirements", href: "/contact" },
  } as LinkedText,
  bring: [
    "Your product idea",
    "Target users",
    "Core MVP functionality",
    "SaaS business model",
    "Subscription requirements",
    "Technical architecture",
    "Product roadmap",
  ],
};

export const SCHEMA_SERVICE = {
  name: "MVP & SaaS Development",
  serviceType: ["MVP development", "SaaS development", "SaaS application development"],
  description:
    "Product discovery, minimum viable product development and SaaS engineering, including multi-tenant architecture, subscription billing integration, account management, security and scaling.",
  catalogName: "MVP and SaaS development services",
  catalog: [...MVP_SERVICES, ...SAAS_SERVICES].map((s) => s.title),
  relatedServicePath: "/services/web-application-development",
};
