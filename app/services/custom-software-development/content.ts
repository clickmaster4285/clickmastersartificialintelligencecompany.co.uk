/*
 * /services/custom-software-development content, from
 * "ClickMasters Custom Software Development: SEO Content Pack" (24 Nov 2026).
 * Edit copy here; page.jsx only renders it.
 *
 * VERIFY comments mark business facts the pack says need owner confirmation.
 */

export const PATH = "/services/custom-software-development";

export const SEO = {
  title: "Custom Software Development UK",
  description:
    "Custom software development services for UK businesses: bespoke web apps, SaaS, CRM and ERP systems, integrations and support, built around your processes.",
  ogTitle: "Custom Software Development Services UK | ClickMasters",
  ogDescription:
    "Bespoke web applications, SaaS platforms, CRM and ERP systems and integrations, designed around how your business works and supported after launch.",
};

/** Text with one inline link: the anchor replaces "[[link]]" in `text`. */
export type LinkedText = { text: string; link?: { anchor: string; href: string } };

export const HERO = {
  eyebrow: "Custom Software Development UK",
  h1: "Custom Software Development Services",
  h1Accent: "Built Around How You Work",
  lead:
    "ClickMasters is a custom software development firm that designs, builds and supports bespoke software for UK businesses: web applications, SaaS platforms, CRM and ERP systems, integrations and process automation. As a bespoke software development company, we replace spreadsheets, disconnected tools and manual workarounds with one reliable system that fits how your business works and can grow with it.",
  audience:
    "For founders validating a new product, operations leaders who have outgrown off-the-shelf tools, and CTOs who need an experienced team for complex, integration-heavy builds.",
  // VERIFY: timelines and engagement models come from the live site FAQs.
  stats: [
    { value: "6–8 weeks", label: "Typical MVP delivery" },
    { value: "2-week sprints", label: "With weekly demos" },
    { value: "Fixed price or T&M", label: "Engagement models" },
    { value: "NDA on request", label: "Before you share details" },
  ],
};

export const WHAT_IS = {
  paragraphs: [
    "Custom software development, often called bespoke software development in the UK, is the design, build, deployment and ongoing maintenance of software for one organisation's users, processes and data. Instead of adapting your business to a product built for the average customer, the software is shaped around the way your business already works, or the way it needs to work next.",
    "Off-the-shelf software is the right answer more often than many development companies admit. It stops being the right answer when the workarounds cost more than the licence: staff re-keying the same data into three systems, critical processes living in spreadsheets, per-user fees rising faster than revenue, or a vendor roadmap that will never include the feature your operation depends on.",
  ],
  whenTitle: "When a custom solution makes commercial sense",
  when: [
    "Your process is part of your competitive advantage, and a generic tool would flatten it.",
    "Teams spend hours every week moving data between systems that do not talk to each other.",
    "Licence costs grow with headcount or transactions faster than the value they return.",
    "You depend on legacy or sector-specific systems that SaaS vendors will not integrate with.",
    "Data protection or contractual rules require control over where and how data is stored.",
    "The software is the product you sell, so you need to own and control it.",
  ],
  scenarios: [
    { icon: "box", title: "A wholesale distributor", text: "Orders arrive by email, stock lives in a spreadsheet and invoices are typed into the accounting package. A custom order portal with live stock levels and automatic invoice creation removes the re-keying and the errors that come with it." },
    { icon: "training", title: "A training provider", text: "Their learning platform cannot model accreditation rules, so administrators track them manually. A tailored learning system builds the rules into enrolment, assessment and certification." },
    { icon: "property", title: "A property manager", text: "Leases, maintenance requests and tenant messages sit in separate tools. One tenant and asset system with automated reminders gives the team a single view of every property." },
  ],
};

export const SERVICES_INTRO: LinkedText = {
  text: "Most projects combine several of the capabilities below. A customer portal, for example, usually needs web application development, API integration and database design working as one system. If a proven foundation would get you there faster, start with our [[link]] for ERP, CRM, SaaS and logistics, and we will tailor them rather than build every module from scratch.",
  link: { anchor: "enterprise software solutions you can customise", href: "/solutions" },
};

export type ServiceField = { label: string } & LinkedText;
export type Service = {
  id: string;
  icon: string;
  title: string;
  intro: string;
  fields: ServiceField[];
  note?: string | LinkedText;
  diagram?: "legacy";
};

export const SERVICES: Service[] = [
  {
    id: "enterprise-software-development",
    icon: "enterprise",
    title: "Enterprise Software Development",
    intro: "Multi-user business systems that support core operations across departments, with role-based permissions, audit trails, reporting and connections to the rest of your technology estate.",
    fields: [
      { label: "Problems it addresses", text: "Departments working from separate tools with conflicting numbers, no reliable audit trail, and management reports assembled by hand each month." },
      { label: "Who needs it", text: "Mid-sized and large organisations, multi-site operators and regulated businesses." },
      { label: "Use cases", text: "Operations platforms, multi-stage approval workflows, cross-site reporting, supplier and partner portals." },
      { label: "Technical considerations", text: "Single sign-on with your identity provider, granular role-based access, immutable audit logging, data retention rules and performance under concurrent load." },
      { label: "Our approach", text: "We usually start with a well-structured modular application and split out separate services only where scale or team structure justifies it. This keeps hosting and operational complexity in proportion to the business need." },
    ],
  },
  {
    id: "custom-web-application-development",
    icon: "web",
    title: "Custom Web Application Development",
    intro: "Browser-based applications such as customer portals, booking systems, quoting tools and internal dashboards, available on any device without installation.",
    fields: [
      { label: "Problems it addresses", text: "Desktop software tied to office machines, and customer journeys still running on email attachments and PDFs." },
      { label: "Who needs it", text: "Businesses moving customer-facing or staff processes online." },
      { label: "Use cases", text: "Self-service customer portals, scheduling and booking, configurators and quoting, operational dashboards." },
      { label: "Technical considerations", text: "Server-side rendering for fast, indexable public pages; accessibility against WCAG 2.2; responsive layouts; Core Web Vitals; secure session handling." },
      { label: "Business value", text: "One codebase reaches desktop, tablet and phone, and every update is live for all users the moment it is deployed." },
    ],
    // Contextual link 2 (replaces the earlier /services link, keeping four in total).
    note: {
      text: "For architecture, security and performance detail, see our [[link]].",
      link: { anchor: "web application development services", href: "/services/web-application-development" },
    },
  },
  {
    id: "saas-application-development",
    icon: "saas",
    title: "SaaS and Custom Software Development for Startups",
    intro: "Subscription software that many customers use from a single platform, where each customer's data stays separate and each plan unlocks the right features.",
    fields: [
      { label: "Problems it addresses", text: "Founders who need to validate an idea quickly without building something they will have to throw away when it succeeds." },
      { label: "Who needs it", text: "Start-up founders and established businesses turning an internal tool into a product." },
      { label: "Use cases", text: "B2B platforms, sector-specific SaaS, marketplaces and customer-facing analytics products." },
      { label: "Technical considerations", text: "Choosing a multi-tenancy model (shared tables with tenant keys, separate schemas or separate databases), subscription billing, usage metering, onboarding and automated tests that prove one tenant can never see another's data." },
      { label: "Our approach", text: "An MVP, typically delivered in 6–8 weeks, puts the core workflow in front of real users, on an architecture designed to carry the product beyond launch." },
    ],
  },
  {
    id: "custom-crm-development",
    icon: "crm",
    title: "Custom CRM Development",
    intro: "A customer relationship system modelled on your actual sales, service or membership process, not on a vendor's idea of a typical pipeline.",
    fields: [
      { label: "Problems it addresses", text: "Low adoption because fields and stages do not match reality, expensive customisation of a generic CRM, and per-seat pricing that penalises growth." },
      { label: "Who needs it", text: "Businesses with non-standard cycles: long B2B sales, field teams, brokers, membership organisations." },
      { label: "Use cases", text: "Custom pipelines, quoting and proposals, field visit logging, client portals and commission calculation." },
      { label: "Technical considerations", text: "A data model for accounts, contacts and relationships; email and calendar sync; migration and de-duplication of existing records; UK GDPR features such as consent records, subject access exports and erasure." },
      { label: "Business value", text: "A CRM your team actually uses produces data you can trust for forecasting." },
    ],
    note: "If extending your existing CRM would meet the need at lower cost, we will say so during discovery.",
  },
  {
    id: "erp-software-development",
    icon: "erp",
    title: "ERP Software Development",
    intro: "Systems that bring finance, inventory, purchasing, production and people data into one consistent model, so every department works from the same numbers.",
    fields: [
      { label: "Problems it addresses", text: "Stock figures that disagree with the accounts, purchasing decisions made on stale data, and month-end reconciliation by spreadsheet." },
      { label: "Who needs it", text: "Manufacturers, distributors, wholesalers and multi-site operators." },
      { label: "Use cases", text: "Inventory and warehouse management, procurement, production planning, job costing and multi-location stock control." },
      { label: "Technical considerations", text: "Transactional integrity across modules, integration with your accounting package, and data migration with a period of parallel running to prove the new figures match." },
      { label: "Our approach", text: "We phase delivery by module, starting with the process causing the most cost or risk, instead of a single high-risk go-live." },
    ],
  },
  {
    id: "business-process-automation",
    icon: "automation",
    title: "Business Process Automation",
    intro: "Software that carries out repeatable steps automatically, such as routing approvals, generating documents, syncing records and sending notifications, whenever a defined event happens.",
    fields: [
      { label: "Problems it addresses", text: "Approvals waiting in inboxes, copy-and-paste between systems, and errors that surface only when a customer complains." },
      { label: "Who needs it", text: "Operations, finance and HR teams with high-volume, rule-based work." },
      { label: "Use cases", text: "Invoice approval, employee onboarding, contract and document generation, scheduled reporting." },
      {
        label: "Technical considerations",
        text: "Mapping the current process before automating it; queues with retries so a failed step never disappears; safe re-runs that do not create duplicates; an exception list for people to review. Where a step needs judgement, such as reading an unstructured document, our AI development services for machine learning and document understanding can add that capability to the workflow.",
      },
      { label: "Business value", text: "We measure processing time and error rates before and after, so the benefit is visible rather than assumed." },
    ],
  },
  {
    id: "api-development-integration",
    icon: "api",
    title: "API Development and Integration",
    intro: "Designing the interfaces that let your systems exchange data, and connecting your software to the third-party services your business relies on.",
    fields: [
      { label: "Problems it addresses", text: "Data silos, duplicate entry, and fragile integrations that fail silently until someone notices missing orders." },
      { label: "Who needs it", text: "Any business running more than one core system, and product companies that want to offer an API to customers." },
      { label: "Use cases", text: "Payment gateways, CRM and ERP synchronisation, accounting tools, carriers and partner platforms." },
      { label: "Technical considerations", text: "REST or GraphQL design, OpenAPI documentation, versioning, OAuth 2.0 authentication, rate limiting, webhooks and checks against the OWASP API Security Top 10." },
      { label: "Business value", text: "Integrations are monitored like the rest of the system, so a failed sync raises an alert instead of a customer complaint." },
    ],
  },
  {
    id: "custom-database-development",
    icon: "database",
    title: "Custom Database Development",
    intro: "Designing the data model, storage, queries and reporting structures that every other part of the system depends on.",
    fields: [
      { label: "Problems it addresses", text: "Slow reports, inconsistent records, spreadsheets acting as databases, and systems that slow down as data grows." },
      { label: "Who needs it", text: "Data-heavy applications, and businesses consolidating information from several sources." },
      { label: "Use cases", text: "Schema design, migrations, performance tuning, reporting databases and full-text search." },
      { label: "Technical considerations", text: "Relational databases such as PostgreSQL or MySQL where data is structured and related; MongoDB where documents vary; Redis for caching; Elasticsearch for search; indexing, backups and tested point-in-time recovery." },
      { label: "Business value", text: "A sound data model is the cheapest stage at which to prevent performance and reporting problems." },
    ],
  },
  {
    id: "legacy-software-modernisation",
    icon: "legacy",
    title: "Legacy Software Modernisation",
    intro: "Improving or replacing ageing systems that the business still depends on, without stopping the operations that run on them.",
    fields: [
      { label: "Problems it addresses", text: "Unsupported frameworks that no longer receive security patches, knowledge held by one person, systems that cannot integrate with modern tools, and rising hosting costs for old infrastructure." },
      { label: "Who needs it", text: "Organisations running old desktop applications, shared Access databases or web platforms on end-of-life language versions." },
      { label: "Technical considerations", text: "A code and data audit first; automated tests that capture current behaviour before anything changes; data migration with reconciliation reports; and a choice between rehosting, refactoring, re-platforming or incremental replacement." },
      { label: "Our approach", text: "Where possible we replace a legacy system piece by piece, routing one function at a time to new code while the old system keeps running. Each step is small enough to test and roll back, so risk stays contained." },
    ],
    diagram: "legacy",
  },
  {
    // VERIFY: 24/7 assistance for critical systems, and under which plans.
    id: "software-maintenance-support",
    icon: "maintenance",
    title: "Software Maintenance and Support",
    intro: "Keeping software secure, reliable and improving after launch. Software that is not maintained becomes legacy software faster than most businesses expect.",
    fields: [
      { label: "Problems it addresses", text: "Unpatched dependencies, failures nobody notices until users complain, slow performance as data grows, and no developer available when something breaks." },
      { label: "What is included", text: "Uptime and error monitoring, bug fixes, security updates, dependency and framework upgrades, performance tuning and planned feature development, under flexible support plans with 24/7 assistance available for critical systems." },
      { label: "Technical considerations", text: "Agreed response and resolution targets by severity, monitoring with tools such as Prometheus, Grafana and New Relic, and a release process with automated tests so updates do not introduce regressions." },
      { label: "Business value", text: "Predictable running costs, and a system that keeps pace with your business instead of holding it back." },
    ],
  },
];

export const INDUSTRIES_INTRO: LinkedText = {
  text: "Every sector brings its own rules, integrations and failure points, and those shape the architecture as much as the feature list does. The summaries below cover the requirements we design for; you can also read [[link]] in more depth.",
  link: { anchor: "how we approach software for each industry", href: "/industries" },
};

// VERIFY: the copy describes requirements, not completed projects (pack note).
export const INDUSTRIES = [
  { icon: "health", title: "Custom Software Development for Healthcare & MedTech", text: "Patient portals, appointment workflows and integrations with clinical record systems.", considerations: ["Special category data under UK GDPR", "NHS DSPT where connecting to NHS systems", "HL7 FHIR interoperability"] },
  { icon: "finance", title: "Finance & Fintech", text: "Billing engines, ledgers, client onboarding and compliance reporting.", considerations: ["Full audit trails", "PCI DSS scope reduction", "FCA operational resilience expectations"] },
  { icon: "ecommerce", title: "E-Commerce", text: "Marketplaces, order management and payment gateway integration.", considerations: ["Peak-traffic scaling", "Stock sync across channels", "Hosted payment pages"] },
  { icon: "edtech", title: "EdTech & E-Learning", text: "Learning platforms, assessments and student dashboards.", considerations: ["ICO Children's Code where under-18s use the service", "Accessibility"] },
  { icon: "realestate", title: "Real Estate", text: "Listings, tenant management and lease automation.", considerations: ["Document management", "Renewal and compliance reminders", "Portal feeds"] },
  { icon: "logistics", title: "Supply Chain & Logistics", text: "Fleet tracking, routing, dispatch and warehousing.", considerations: ["Real-time location data", "Carrier APIs", "Offline-capable mobile apps"] },
  { icon: "saasind", title: "Enterprise SaaS", text: "Multi-tenant platforms with subscriptions and billing.", considerations: ["Tenant isolation", "Single sign-on", "Uptime and status reporting"] },
  { icon: "manufacturing", title: "Smart Manufacturing", text: "Production planning and manufacturing execution systems.", considerations: ["Shop-floor and machine data", "Batch traceability", "Plant network security"] },
];

export const PROCESS_INTRO =
  "Nine stages take a project from first conversation to a supported production system. We work in two-week sprints with weekly demos, so you see working software early. Most MVPs are delivered in 6–8 weeks; larger enterprise builds typically take 3–6 months.";

export const PROCESS = [
  { title: "Discovery and Requirement Analysis", what: "Workshops with the people who use the process today, to map goals, users, constraints and edge cases.", deliverables: "Requirements document, user roles, prioritised feature list.", risk: "Building the wrong thing." },
  { title: "Business and Technical Consultation", what: "We test the options: buy, configure, extend or build, and review existing systems and data.", deliverables: "Build-or-buy recommendation, integration inventory, initial estimate.", risk: "Paying for custom work a product already covers." },
  { title: "Software Architecture and Planning", what: "We choose the architecture, technology stack, hosting and security model, then plan releases.", deliverables: "Architecture diagram, data model, delivery roadmap with milestones.", risk: "Costly rewrites when usage grows." },
  { title: "UI/UX Design", what: "Wireframes, then clickable prototypes tested with real users before production code is written.", deliverables: "Prototype, design system, approved screens.", risk: "Low adoption and late design changes." },
  { title: "Development and Engineering", what: "Two-week sprints with code review, automated tests and a demo of working features every week.", deliverables: "Working increments in a staging environment, sprint reports.", risk: "Surprises at the end of the project." },
  { title: "API and Third-Party Integrations", what: "Connections to payment, accounting, CRM, ERP and legacy systems, built against sandbox environments first.", deliverables: "Documented APIs, integration tests, error alerting.", risk: "Silent data loss between systems." },
  { title: "Quality Assurance and Testing", what: "Functional, regression, performance, security and user acceptance testing.", deliverables: "Test reports, resolved defect log, UAT sign-off.", risk: "Defects and vulnerabilities reaching users." },
  { title: "Deployment", what: "Release through CI/CD pipelines to cloud infrastructure, with data migration and a rollback plan.", deliverables: "Production release, runbook, handover documentation.", risk: "Downtime and failed launches." },
  { title: "Maintenance and Continuous Improvement", what: "Monitoring, updates, support and new features based on how people actually use the system.", deliverables: "Support plan, monitoring dashboards, improvement backlog.", risk: "Security drift and declining performance." },
];

export const TECH_INTRO =
  "We choose technology to fit the problem, your team and the long-term cost of ownership, not to follow fashion. These are the stacks we build with most often.";

// VERIFY: remove any stack the team does not actively deliver (pack note).
// Item names must match keys in TECH_LOGOS (page.jsx).
export const TECH = [
  { title: "Front end", items: ["React", "Next.js", "TypeScript", "Angular", "Vue.js", "Tailwind CSS"] },
  { title: "Back end", items: ["Node.js", "Python & Django", "Laravel", "Go", "Java & Spring", "Ruby on Rails"] },
  { title: "Mobile", items: ["Flutter", "React Native", "Swift", "Kotlin"] },
  { title: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Elasticsearch", "Firebase"] },
  { title: "Cloud & infrastructure", items: ["AWS", "Microsoft Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform"] },
  { title: "Delivery & monitoring", items: ["GitHub Actions", "Jenkins", "Prometheus", "Grafana", "New Relic"] },
];

export const STACK_CRITERIA = [
  { icon: "maintain", title: "Maintainability", text: "Can your team, or another supplier, hire people who know this technology in five years?" },
  { icon: "fit", title: "Fit for the workload", text: "A public customer portal benefits from Next.js server rendering; a data-heavy internal tool often suits Python and Django." },
  { icon: "scale", title: "Scalability", text: "Expected users, data volumes and peak loads decide database choice and hosting design." },
  { icon: "security", title: "Security and compliance", text: "Data location, encryption and audit requirements narrow the hosting and service options." },
  { icon: "api", title: "Integration", text: "Mature SDKs for the systems you already run reduce build time and risk." },
  { icon: "cost", title: "Running cost", text: "Hosting, licences and monitoring are estimated before the stack is agreed." },
];

export const COMPARISON = {
  intro:
    "Neither option is always better. The right choice depends on how distinctive your process is, how much integration you need and how long you expect to use the system.",
  rows: [
    ["Initial investment", "Higher upfront build cost", "Low upfront cost; subscription or licence fees start immediately"],
    ["Customisation", "Built around your exact process", "Limited to configuration options and the vendor's roadmap"],
    ["Scalability", "Architected for your expected growth; no per-seat pricing", "Scales easily, but costs often rise with users or usage tiers"],
    ["Integration", "Any system with an API or database, including legacy software", "Pre-built connectors to popular tools; little control beyond them"],
    ["Ownership and control", "You control the roadmap, data and hosting, subject to your contract terms", "The vendor controls features, pricing changes and data location"],
    ["Maintenance", "Your responsibility, usually through a support agreement", "Handled by the vendor and included in the subscription"],
    ["Time to value", "Weeks to months before first release", "Days to weeks to set up"],
    ["Long-term fit", "Evolves with your business", "Fits while your needs match the average customer's"],
  ],
  customWhen: [
    "the process sets you apart from competitors",
    "you would need three or more tools plus manual work to cover it",
    "integration with legacy or sector systems is essential",
    "you are building a product to sell",
    "licence costs over five years exceed a build-and-maintain budget",
  ],
  shelfWhen: [
    "the process is standard, such as payroll or basic accounting",
    "a mature product covers most of your requirements",
    "you need a solution this month, not this quarter",
    "you have no budget for ongoing maintenance",
    "the area is not a competitive differentiator",
  ],
};

export const WHY = [
  { icon: "requirements", title: "Requirement-driven development", text: "Discovery workshops come first, and the build-or-buy question is answered honestly before any code is estimated." },
  { icon: "fullstack", title: "Full-stack capability in one team", text: "Web, mobile, ERP and CRM, cloud, databases and AI under one roof, so there are no gaps between suppliers." },
  { icon: "agile", title: "Transparent agile delivery", text: "Two-week sprints and weekly progress updates mean you see working software early and stay in control at every milestone." },
  { icon: "api", title: "Integration experience", text: "Secure API integrations with CRMs, ERPs, payment gateways, accounting tools and legacy software are part of our standard work." },
  // VERIFY: confirm whether penetration testing is in-house or third party.
  { icon: "security", title: "Security-conscious engineering", text: "We follow OWASP standards and GDPR best practice, use encryption and role-based access, run regular security testing and sign NDAs on request." },
  { icon: "commercial", title: "Flexible commercial models", text: "Fixed-price or time-and-materials engagements, with a clear estimate and milestones after a free consultation." },
];

export const COST = {
  intro:
    "There is no honest single price for custom software, because two projects with the same name, such as \"a CRM\", can differ tenfold in scope. What we can do is explain what drives the estimate, so you can compare quotes on substance rather than on the headline figure.",
  factors: [
    { icon: "complexity", title: "Complexity", text: "Business rules, user roles, workflow branches and edge cases drive most of the effort." },
    { icon: "features", title: "Features", text: "Each feature adds design, build and test time; a tightly prioritised MVP keeps the first release lean." },
    { icon: "api", title: "Integrations", text: "Every external system adds build time, testing against its sandbox and ongoing monitoring." },
    { icon: "design", title: "UI/UX", text: "Public-facing products need more design and usability testing than internal tools." },
    { icon: "architecture", title: "Architecture", text: "Multi-tenancy, high availability and real-time features add engineering and hosting cost." },
    { icon: "database", title: "Data migration", text: "Cleaning, mapping and reconciling legacy data is often underestimated." },
    { icon: "security", title: "Security", text: "Sensitive data, regulated sectors and penetration testing add work, and are not optional." },
    { icon: "testing", title: "Testing", text: "Automated test coverage costs more upfront and saves money on every later release." },
    { icon: "maintenance", title: "Maintenance", text: "Hosting, monitoring, updates and support continue for the life of the system." },
  ],
  tcoTitle: "Judge total cost of ownership, not the build price",
  tco: "The cheapest build is often the most expensive system to own. Over a typical five-year life, hosting, support, security updates and new features add significantly to the original build cost. A well-tested, well-documented system costs less to change, which matters more than the initial quote. Off-the-shelf software has a total cost of ownership too: subscription fees, per-user growth, workaround labour and integration tools all count.",
  models: [
    { icon: "fixed", title: "Fixed price", text: "Best when scope is well defined, for example an MVP after discovery. You know the cost in advance; changes go through an agreed change process." },
    { icon: "tm", title: "Time and materials", text: "Best when requirements will evolve, for example an ongoing product. You pay for the work done each sprint and can re-prioritise freely." },
  ],
};

/** FAQs: rendered on the page and used for FAQPage JSON-LD (identical text). */
export const FAQS: { q: string; a: string[] }[] = [
  { q: "What is custom software development?", a: ["Custom software development is the process of designing, building, deploying and maintaining software for one organisation's specific users, processes and data. It covers everything from a single internal tool to an enterprise platform or a SaaS product sold to customers. The software is shaped around your requirements, rather than your business adapting to a product built for the average customer."] },
  {
    q: "How much does custom software development cost in the UK?",
    a: [
      "There is no honest single figure, because a focused MVP costs far less than a multi-department enterprise system. ClickMasters offers fixed-price and time-and-materials models. After a free consultation and discovery, we provide a clear estimate broken into milestones, along with expected running costs, so you can judge the total cost of ownership rather than the build price alone.",
    ],
  },
  { q: "What drives the cost of custom software development?", a: ["Cost depends on complexity, the number of features and integrations, design requirements, architecture, data migration, security needs and testing depth. Ongoing hosting, monitoring and maintenance also count, because they continue for the life of the system. A tightly prioritised first release is the most reliable way to keep the initial build cost in proportion to the value it delivers."] },
  { q: "What are the benefits of custom software development?", a: ["The main benefits are fit, integration and control. The software follows your process instead of forcing workarounds, it can connect to legacy and sector-specific systems, and there are no per-user licence fees as headcount grows. You control the roadmap and data, subject to your contract terms. The trade-offs are a higher upfront cost and ongoing maintenance, so it suits processes that set you apart."] },
  { q: "How long does bespoke software development take?", a: ["Most MVPs are delivered in 6–8 weeks, and full-scale enterprise solutions typically take 3–6 months. The main variables are scope, the number of integrations, data migration and how quickly decisions and feedback come back from your side. We work in two-week sprints with weekly demos, so usable software arrives well before the final release."] },
  { q: "What is the difference between bespoke and off-the-shelf software?", a: ["Off-the-shelf software is a ready-made product sold to many customers. It is quick to set up and cheaper at the start, but you are limited to its features, integrations and pricing. Bespoke software is built for your organisation, so it fits your process and integrates with your systems, but it needs a larger upfront investment and ongoing maintenance. Many businesses use both: products for standard functions and custom software where their process is distinctive."] },
  { q: "Can custom software integrate with our existing systems?", a: ["Yes. We build secure API integrations with CRMs, ERPs, payment gateways, accounting tools and legacy software. Where an older system has no API, we can integrate through its database, file exchange or a purpose-built middleware layer. Integrations are documented, tested against sandbox environments and monitored, so failures raise alerts instead of going unnoticed."] },
  { q: "Can you develop enterprise business applications?", a: ["Yes. We build multi-user enterprise systems such as ERP and CRM platforms, operations portals and approval workflows, with role-based access, audit trails, reporting and integration with your existing estate. Enterprise builds typically take 3–6 months and are delivered in phases, so each department gets value before the whole programme is complete."] },
  { q: "Is custom software scalable?", a: ["It can be, if scalability is designed in from the start. That means choosing a suitable database and data model, cloud infrastructure that can add capacity as demand grows, caching, background job processing and load testing before launch. Because custom software has no per-user licence fees, growth in users does not automatically increase software costs, although hosting costs rise with usage."] },
  {
    // VERIFY: the pack asks the owner to confirm ClickMasters' standard IP and
    // source-code terms. Replace this general answer with the confirmed
    // position (e.g. "You own the code from the first commit") once agreed.
    q: "Who owns the source code?",
    a: ["Ownership of source code and intellectual property is set out in the contract before work begins, and it is one of the most important terms to check with any supplier. You should also confirm you will receive repository access, technical documentation and deployment credentials, so another team could maintain the system if needed."],
  },
  { q: "How do you protect business data?", a: ["Security is built into every project. We follow OWASP standards and GDPR best practice, encrypt data, apply role-based access so people only see what their role requires, and carry out regular security testing. We sign NDAs on request before you share sensitive details. For regulated data, we agree hosting location, retention and audit requirements during architecture planning."] },
  { q: "Do you provide ongoing software maintenance?", a: ["Yes. After launch we provide monitoring, bug fixes, security updates, dependency upgrades, performance improvements and new feature development, with flexible support plans and 24/7 assistance for critical systems. Regular maintenance keeps the system secure and stops it turning into the next legacy system."] },
  { q: "Can you modernise legacy software?", a: ["Yes. We start with an audit of the code, data and integrations, then recommend whether to rehost, refactor, re-platform or replace the system. Where possible we modernise incrementally, replacing one function at a time while the existing system keeps running, so operations are not disrupted and every step can be tested and rolled back."] },
  { q: "Do you work with businesses in London?", a: ["Yes. We can work with businesses in London and anywhere else in the UK. Projects run remotely: discovery workshops, sprint reviews and weekly demos take place over video call, and you can reach the team on our UK phone line. If you are comparing custom software development London providers, or any bespoke software development company UK-wide, judge each one on process, communication and support terms."] },
  { q: "How do I start a project with a custom software development agency?", a: ["Start with a conversation about the problem rather than a feature list. Tell us what is slowing your team down, which systems are involved, who will use the software and any deadlines or budget constraints. We will arrange a free consultation, recommend the right approach (including whether an existing product would do the job) and follow up with a scoped estimate and milestones. We usually respond within a few hours."] },
];

export const FINAL_CTA = {
  title: "Tell Us What Is Slowing Your Business Down.",
  titleAccent: "We Will Design the Software That Fixes It.",
  body: {
    text: "The best projects start with a clear problem. Bring us the processes that cost your team time, the systems that do not talk to each other and the plans your current software cannot support. When you are ready, [[link]] with our team and we will come back with a practical recommendation, usually within a few hours.",
    link: { anchor: "discuss your software development project", href: "/contact" },
  } as LinkedText,
  bring: [
    "Your operational challenges",
    "Requirements and must-have features",
    "Limits of your current systems",
    "Integrations you depend on",
    "Where the business is heading next",
  ],
};

export const SCHEMA_SERVICE = {
  name: "Custom Software Development",
  alternateName: "Bespoke Software Development",
  serviceType: ["Custom software development", "Bespoke software development"],
  description:
    "Design, development, integration and support of bespoke business software, including enterprise systems, web applications, SaaS platforms, CRM and ERP systems, APIs, legacy modernisation and maintenance.",
  catalogName: "Custom software development services",
  catalog: SERVICES.map((s) => s.title),
};
