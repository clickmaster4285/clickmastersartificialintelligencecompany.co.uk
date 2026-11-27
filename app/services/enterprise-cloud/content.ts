/*
 * /services/enterprise-cloud: the Enterprise Cloud pillar page.
 * Content from "ClickMasters Enterprise Cloud Services Pillar SEO Content Pack" (27 Nov 2026).
 * Edit copy here; page.jsx only renders it.
 *
 * Route: lowercase and hyphenated like every other service page. /services/EnterpriseCloud
 * and /services/enterprisecloud redirect here (next.config.ts).
 *
 * This page sits one level above /services/cloud-devops: strategy, deployment models,
 * portfolio migration, governance, data residency and cost. Engineering detail (CI/CD,
 * IaC, containers, platform comparison) stays on cloud-devops, linked from here.
 * Inline links use [anchor](/path) and render through <RichText>; **bold** is supported.
 * VERIFY comments mark items the pack says need owner confirmation (section I).
 */

export const PATH = "/services/enterprise-cloud";

export const SEO = {
  title: "Enterprise Cloud Solutions & Services UK",
  description:
    "Enterprise cloud services for UK organisations: cloud strategy, architecture, migration and modernisation, cloud-native development, security and cost control.",
  ogTitle: "Enterprise Cloud Solutions & Services UK | ClickMasters",
  ogDescription:
    "Cloud strategy, enterprise cloud architecture, migration and modernisation, cloud-native development, security and cost governance for UK organisations.",
};

const IMG = "/assets/Services/enterprise-cloud";

/* Photos from Unsplash (Unsplash License, free to use). No faces, vendor logos or "cloud" graphics. */
export const IMAGES = {
  // Photo: Kirill Sh (unsplash.com/photos/eVWWr6nmDf8)
  fibre: {
    src: `${IMG}/enterprise-cloud-fibre-network-rack.webp`, width: 1200, height: 803,
    alt: "Fibre optic cables connected to network switches in a server rack",
  },
  // Photo: Franck V. (unsplash.com/photos/uWaRsN-CqY0)
  cabling: {
    src: `${IMG}/enterprise-cloud-network-cabling.webp`, width: 1200, height: 921,
    alt: "Bundle of labelled network cables connected to a patch panel",
  },
  // Photo: Winston Chen (unsplash.com/photos/iZe21DzHnUg)
  cooling: {
    src: `${IMG}/enterprise-cloud-server-cooling.webp`, width: 1200, height: 800,
    alt: "Close-up of server cooling fans and pipework in a data centre",
  },
  // Photo: Trương Tuyết Ly (unsplash.com/photos/bsdB46nHtHw)
  skyline: {
    src: `${IMG}/enterprise-cloud-city-skyline-dusk.webp`, width: 1200, height: 800,
    alt: "City skyline at dusk with office buildings and lit windows",
  },
  // Photo: Jake Walker (unsplash.com/photos/MPKQiDpMyqU)
  terminal: {
    src: `${IMG}/enterprise-cloud-terminal-deployment.webp`, width: 1200, height: 800,
    alt: "Terminal output scrolling on a dark screen during an automated software deployment",
  },
} as const;

export const HERO = {
  eyebrow: "Enterprise Cloud Services UK",
  title: "Enterprise Cloud Services",
  titleAccent: "for Scalable, Secure and Modern Business Systems",
  lead:
    "For most organisations, the question is no longer whether to use the cloud, but how to use it well. Too many estates grow through a series of unconnected decisions: one application moved here, a SaaS tool adopted there, a legacy server that never quite got migrated. The result is cost, complexity and risk that nobody planned.",
  audience:
    "ClickMasters provides enterprise cloud services that bring structure to those decisions. We help organisations plan a cloud strategy around real business requirements, design enterprise cloud architecture, migrate and modernise legacy applications, build cloud-native systems, and connect them securely to the applications they already rely on. We are a software and technology development partner, working across AWS, Microsoft Azure and Google Cloud, and we choose the approach that fits your needs rather than a provider's catalogue.",
  // VERIFY: no 24/7 managed cloud support is claimed; confirm the post-launch support model (pack, I4).
  stats: [
    { label: "Start", value: "Strategy before platform" },
    { label: "Platforms", value: "AWS · Azure · Google Cloud" },
    { label: "Migration", value: "A route per application" },
    { label: "Cost", value: "Governed, not guessed" },
  ],
  figureAlt:
    "Enterprise cloud architecture showing secure environments, identity, applications, databases and integrations with on-premises business systems",
};

/** Hero diagram: identity → environments with apps and data → integrations to on-premises systems. */
export const HERO_FLOW = {
  identity: "Identity, SSO and least-privilege access",
  environments: ["Development", "Test", "Production"],
  workloads: ["Applications", "Databases", "Storage"],
  onPrem: ["ERP", "CRM", "Finance", "On-premises"],
  controls: ["Monitoring", "Backups", "Cost budgets"],
};

export const WHAT_ARE = {
  title: "What Are Enterprise Cloud Services?",
  intro:
    "Enterprise cloud services cover the planning, building, migration, integration and ongoing management of an organisation's applications and infrastructure in the cloud. They typically include:",
  items: [
    { icon: "server", title: "Cloud infrastructure", text: "Compute, networking and environments for development, testing and production." },
    { icon: "app", title: "Cloud-based application development", text: "Software designed to run well on cloud platforms." },
    { icon: "database", title: "Cloud storage and databases", text: "Managed relational and document databases, caches and object storage." },
    { icon: "hosting", title: "Application hosting", text: "From managed platforms to containers and serverless functions." },
    { icon: "network", title: "Cloud networking", text: "Private networks, secure connections to offices and data centres, and traffic management." },
    { icon: "shield", title: "Cloud security", text: "Identity, access, encryption, monitoring and secure configuration." },
    { icon: "plug", title: "Integration and automation", text: "Connecting cloud applications with each other and with existing systems, and automating deployments." },
    { icon: "monitor", title: "Monitoring and maintenance", text: "Keeping performance, reliability, security and cost under control after launch." },
  ],
  notHosting:
    "**Enterprise cloud is not just online hosting.** Moving files or a server onto a hosted machine changes where software runs, not how well it runs. Enterprise cloud architecture is designed around business requirements: how available each service must be, how quickly it must recover, where data may legally be held, how it connects to other systems, who may access it, and what it should cost as usage grows. Getting those decisions right at the start is far cheaper than correcting an estate that grew by accident.",
};

export const CAPABILITIES = {
  title: "Our Enterprise Cloud Capabilities",
  items: [
    { id: "architecture", icon: "architecture", title: "Enterprise cloud architecture", text: "We plan the overall shape of your cloud estate: account or subscription structure, networks and environments, application and data architecture, and scalability, resilience and availability targets matched to the importance of each service. The result is a documented target architecture, with trade-offs explained, that your teams and suppliers can build against." },
    { id: "migration", icon: "migrate", title: "Cloud migration and modernisation", text: "We assess existing applications and legacy systems, map their dependencies, plan data migration, and recommend the right route for each application, from moving it largely as it is to rebuilding it. Testing and post-migration validation confirm that it works before old systems are retired." },
    { id: "cloud-native", icon: "app", title: "Cloud-native application development", text: "New applications can be designed from the start to use cloud capabilities: API-driven, built on managed services, containerised where it helps, and able to scale with demand. Business applications and portals are built by our [Web Application Development](/services/web-application-development) team, which designs browser-based platforms to run reliably in cloud environments." },
    { id: "integration", icon: "plug", title: "Cloud infrastructure and integration", text: "Cloud systems rarely stand alone. We build the back-end infrastructure, database connectivity, cloud storage, APIs and secure communication links that connect cloud applications with ERP, CRM, finance and on-premises systems, through the interfaces each system supports." },
    { id: "devops", icon: "pipeline", title: "DevOps and deployment automation", text: "Reliable cloud estates depend on automated, repeatable delivery: CI/CD pipelines, infrastructure defined as code, consistent environments, monitoring, and release and rollback plans. Our [Cloud and DevOps Services](/services/cloud-devops) cover this engineering in detail, from pipelines and Terraform to Docker and, where it earns its place, Kubernetes." },
  ],
};

// VERIFY: confirm the team's experience with private cloud, on-premises and hybrid networking (pack, I2).
export const DEPLOYMENT = {
  title: "Cloud Deployment Models: Public, Private, Hybrid and Multi-Cloud",
  intro:
    "There is no universally best model. The right choice depends on your requirements, risks, existing estate and the skills you have to run it. UK government guidance on cloud hosting strategy makes the same point: start with your needs and problems, choose the simplest option that meets them, and avoid picking a label first and designing the strategy to fit.",
  models: [
    { icon: "public", title: "Public cloud", text: "Shared infrastructure operated by a provider such as AWS, Azure or Google Cloud, with consumption-based pricing and a wide range of managed services. It offers great flexibility and speed for most workloads." },
    { icon: "private", title: "Private cloud", text: "A dedicated environment for one organisation, hosted on-premises or by a provider. It gives greater control over configuration and isolation, typically for specific regulatory, performance or legacy requirements." },
    { icon: "hybrid", title: "Hybrid cloud", text: "Public cloud combined with private cloud or on-premises infrastructure, deliberately designed to work together. Common during long migrations, or where some systems must stay on-site. It is only a strategy if the parts are coordinated, not just co-existing." },
    { icon: "multi", title: "Multi-cloud", text: "Using more than one public cloud provider, for specific capabilities, resilience or to manage concentration risk. It adds management, security and integration complexity, so it should be a conscious choice." },
  ],
  headers: ["", "Public cloud", "Private cloud", "Hybrid cloud", "Multi-cloud"],
  rows: [
    ["Ownership and management", "Provider owns the infrastructure; you manage your configuration", "You or a provider operate dedicated infrastructure", "Split between provider and you", "Several providers; you coordinate across them"],
    ["Flexibility", "High: scale on demand", "Lower: capacity planned in advance", "Medium: depends on integration", "High, but uneven across providers"],
    ["Control", "Lower over the underlying platform", "High", "High for retained systems", "Distributed"],
    ["Operational complexity", "Lowest", "Medium to high", "High", "Highest"],
    ["Common use cases", "New applications, variable workloads, most business systems", "Specialist compliance, legacy platforms, predictable heavy workloads", "Phased migration, systems tied to sites or equipment", "Specific best-of-breed services, concentration-risk management"],
    ["Important considerations", "Configuration security, cost governance, data location", "Upfront cost, capacity planning, maintenance", "Secure connectivity, consistent identity and monitoring", "Skills, duplicated tooling, security consistency, data transfer costs"],
  ],
  outro:
    "For many organisations, a single primary provider, used well, meets their needs with the least complexity. Multi-cloud makes sense when there is a clear reason, such as a specific capability, a regulatory requirement or a deliberate response to concentration risk.",
};

export const MIGRATION = {
  title: "Cloud Migration and Legacy Modernisation",
  intro:
    "Legacy modernisation is a national challenge, not just a private-sector one. The government's Cloud Challenge Book 2026 identifies legacy modernisation, secure and resilient cloud, and cloud skills among the key challenges for UK digital infrastructure. The same issues apply in most organisations' estates.",
  assessmentTitle: "A structured migration starts with assessment",
  assessment: [
    ["Legacy application assessment:", "what each system does, who depends on it, how critical it is, and its condition."],
    ["Infrastructure dependency analysis:", "databases, file shares, integrations, scheduled jobs and network links that must move with it, or be replaced."],
    ["Data migration planning:", "volumes, quality, transformation, synchronisation and cut-over."],
    ["Application compatibility:", "operating systems, runtimes, licences and vendor support in the cloud."],
  ],
  routesTitle: "Then each application gets the right route",
  routesHeaders: ["Route", "What it means", "When it fits"],
  routes: [
    ["Rehost", "Move largely as it is onto cloud infrastructure", "Quick exits from a data centre; stable applications"],
    ["Replatform", "Small changes to use managed services, such as a managed database", "Reducing operational burden without a rewrite"],
    ["Refactor", "Re-architect parts of the application for cloud-native capabilities", "Applications that need to scale, change often or integrate widely"],
    ["Replace", "Retire the system and adopt SaaS or a new build", "Unsupported or unsuitable legacy systems"],
  ],
  modernising:
    "**Moving is not modernising.** Rehosting an application changes where it runs, not how it works. It can bring legacy problems, and their costs, into a new environment. Genuine modernisation improves the architecture, data and delivery process. It is often done incrementally, replacing parts of a legacy system step by step while it stays in service. Our [Custom Software Development](/services/custom-software-development) service rebuilds or replaces business applications where a legacy system cannot be modernised in place.",
  testing:
    "**Every migration ends with testing and validation:** functional, performance and security testing, data reconciliation, and a rehearsed cut-over with rollback and recovery plans.",
  challengesTitle: "Common challenges to plan for",
  challenges: [
    "Legacy dependencies nobody documented",
    "Poor documentation and lost knowledge",
    "Data quality problems that surface during migration",
    "Application downtime during cut-over",
    "Integration complexity",
    "Insecure default configurations",
    "Unexpected cloud costs",
    "Teams not yet ready to operate the new environment",
  ],
  note: "No migration is risk-free, and some downtime may be unavoidable. Good planning reduces both, and makes them predictable.",
};

// VERIFY: confirm you are comfortable offering serverless (pack, I3).
export const CLOUD_NATIVE = {
  title: "Cloud-Native Applications and Scalable Architecture",
  intro: "Cloud-native applications are designed to use what cloud platforms do well. Depending on the system, that can involve:",
  items: [
    ["Modular architecture,", "with clear boundaries between parts of the system."],
    ["Microservices or a modular monolith:", "separate services only where independent scaling, deployment or team ownership justifies them."],
    ["Containerisation", "for consistent environments."],
    ["Serverless computing", "for event-driven or intermittent workloads."],
    ["Managed services", "for databases, queues and storage, reducing operational overhead."],
    ["API-first design,", "so systems integrate cleanly."],
    ["Load balancing and caching", "for performance under demand."],
    ["Database scaling", "through read replicas, partitioning or archiving as data grows, supported by our [Database Design and Development](/services/database-design) service."],
    ["Asynchronous processing", "with queues for heavy or slow tasks."],
    ["Infrastructure as code,", "so environments are reviewable and repeatable."],
  ],
  note:
    "**Not every enterprise application needs microservices or Kubernetes.** For many systems, a well-structured application on a managed platform is faster to build, cheaper to run and easier to support. We choose architecture based on actual complexity, scale, operational requirements and the skills of the team who will run it.",
};

export const INDUSTRIES = {
  title: "Enterprise Cloud Across Industries",
  intro: "Cloud requirements vary with each sector's data, regulation and demand patterns. These are illustrative examples, not completed client projects:",
  items: [
    { icon: "health", title: "Healthcare", href: "/industries/healthcare", text: "Secure applications, document systems and data integration, with careful hosting-region choices for special category data." },
    { icon: "finance", title: "Financial services", href: "/industries/finance", text: "Resilient business applications and data processing, with audit trails and operational resilience." },
    { icon: "cart", title: "E-commerce", href: "/industries/ecommerce", text: "Platforms that scale for promotions, with connected inventory and order systems." },
    { icon: "education", title: "Education", href: "/industries/edtech", text: "Learning platforms that handle term-start and exam peaks." },
    { icon: "home", title: "Real estate", href: "/industries/real-estate", text: "Property management platforms and tenant and landlord portals." },
    { icon: "truck", title: "Logistics", href: "/industries/logistics", text: "Fleet and tracking applications and operational dashboards fed by continuous data." },
    { icon: "factory", title: "Manufacturing", href: "/industries/manufacturing", text: "Connected business systems, with secure, controlled links from plant networks." },
    { icon: "saas", title: "Enterprise SaaS", href: "/industries/enterprise-saas", text: "Multi-tenant, cloud-native software products." },
  ],
};

export const SECURITY = {
  title: "Cloud Security, Resilience and Data Protection",
  shared: [
    { title: "The cloud provider", text: "secures the underlying infrastructure." },
    { title: "Your organisation, and the teams that build on it,", text: "are responsible for configuration, identity, data, applications and how services are used." },
  ],
  sharedNote:
    "The NCSC's cloud security guidance is built around this principle. Most cloud security incidents stem from the customer side of the line, such as misconfiguration, weak identity controls or exposed credentials, rather than the provider's.",
  controls: [
    { icon: "identity", title: "Identity and access management", text: "Individual named accounts and single sign-on." },
    { icon: "key", title: "Multi-factor authentication", text: "Especially for administrative access." },
    { icon: "roles", title: "Least-privilege access", text: "Role-based permissions scoped to what each person and service needs." },
    { icon: "lock", title: "Encryption", text: "Data encrypted in transit and at rest." },
    { icon: "network", title: "Network security", text: "Private subnets, firewalls and secure connections." },
    { icon: "plug", title: "Secure API access", text: "Authentication, authorisation and rate limits." },
    { icon: "secret", title: "Secrets and key management", text: "In managed stores, never in code." },
    { icon: "monitor", title: "Logging and monitoring", text: "Alerts on suspicious activity and configuration changes." },
    { icon: "backup", title: "Backup and disaster recovery", text: "Agreed recovery objectives and tested restores." },
    { icon: "alert", title: "Incident response planning", text: "Defined roles, runbooks and communication paths." },
    { icon: "patch", title: "Vulnerability and patch management", text: "Regular scanning and timely updates." },
    { icon: "layers", title: "Infrastructure separation", text: "Between environments, workloads and, for SaaS, customers." },
  ],
  ukTitle: "UK data protection",
  ukIntro:
    "Where personal data is processed, the UK GDPR and the Data Protection Act 2018 apply, as amended by the Data (Use and Access) Act 2025. In practice, that means:",
  uk: [
    ["Data processing agreements", "with cloud providers and other processors."],
    ["Deliberate decisions on data residency and international transfers,", "with appropriate safeguards where data leaves the UK."],
    ["Defined data retention and deletion."],
    ["Security assessments,", "including a Data Protection Impact Assessment where processing is high-risk."],
  ],
  multiRegion:
    "Government guidance on multi-region cloud recognises that using regions outside the UK can be appropriate, for resilience, capacity or access to services, provided legal, data protection and security requirements are satisfied. It stresses that this should be a considered decision.",
  statement:
    "Cloud hosting does not make an organisation GDPR compliant by itself, and ClickMasters does not claim ISO 27001, SOC 2, Cyber Essentials or other certifications. We design and document cloud environments to support your own compliance and assurance work.",
};

export const COST = {
  title: "Cloud Cost Management and Infrastructure Efficiency",
  intro:
    "Cloud costs are flexible in both directions. They can fall when an estate is well managed, and rise quickly when it is not. Good cost management balances cost against performance, reliability and security:",
  items: [
    { icon: "size", title: "Resource sizing", text: "Matching compute and database capacity to real usage, not the peak someone guessed." },
    { icon: "monitor", title: "Usage monitoring", text: "Dashboards and budgets with alerts, so surprises are caught early." },
    { icon: "storage", title: "Storage management", text: "Lifecycle rules for logs, backups and old data." },
    { icon: "scale", title: "Scaling policies", text: "Scaling with demand, and scheduling non-production environments to switch off when unused." },
    { icon: "idle", title: "Idle resource identification", text: "Finding forgotten instances, disks, IP addresses and test environments." },
    { icon: "database", title: "Database optimisation", text: "Query tuning and indexing often reduce the need for larger instances." },
    { icon: "transfer", title: "Data transfer costs", text: "Designing to avoid unnecessary movement between regions, providers and the internet." },
    { icon: "commit", title: "Reserved capacity and commitment options", text: "For steady, predictable workloads, where they are available." },
    { icon: "tag", title: "Cost allocation and reporting", text: "Tagging resources by team, product or customer, so spending is visible and owned." },
    { icon: "review", title: "Cloud architecture reviews", text: "Periodic reviews of the estate against current needs." },
  ],
  note: "Savings depend on the starting point, so we do not promise specific percentages. A review will show where the realistic opportunities are.",
};

export const PROCESS = {
  title: "Our Enterprise Cloud Development Process",
  steps: [
    { title: "Discovery and business requirements", text: "We agree goals, constraints, critical services, availability and recovery needs, data rules and budget.", expect: "Workshops with business and technical stakeholders, and a clear problem statement." },
    { title: "Existing infrastructure assessment", text: "We inventory applications, dependencies, hosting, costs, security and skills.", expect: "A current-state assessment and a list of risks and quick wins." },
    { title: "Cloud architecture planning", text: "We decide the deployment model, target architecture and the migration or build route for each application.", expect: "A documented architecture with trade-offs and a phased roadmap." },
    { title: "Security and data considerations", text: "Identity, network design, encryption, data residency, retention and compliance requirements are built into the design.", expect: "Security design documentation to support your DPIA and assurance." },
    { title: "Development or migration implementation", text: "Environments are built as code, applications are developed or migrated in phases, and data is moved with validation.", expect: "Regular demonstrations and progress against the roadmap." },
    { title: "Integration and testing", text: "We connect to existing systems, then run functional, performance, security and failover testing.", expect: "Test evidence before any go-live." },
    { title: "Deployment and validation", text: "Rehearsed cut-over, rollback plans, data reconciliation and user acceptance.", expect: "A controlled launch, with old systems retired only once the new ones are proven." },
    { title: "Monitoring and continuous improvement", text: "We monitor performance, reliability, security and cost, then tune and improve.", expect: "Ongoing reviews and support agreed as part of the engagement." },
  ],
  outro: "Timelines depend on the number and condition of applications, data volumes and integration complexity. We provide a realistic plan after assessment.",
};

export const WHY = {
  title: "Why Choose a Cloud-Focused Development Approach?",
  items: [
    { icon: "architecture", title: "Designed around business requirements", text: "Infrastructure shaped by your needs, not by a provider's default settings." },
    { icon: "app", title: "Applications and infrastructure designed together", text: "So software uses the cloud well instead of being moved onto it unchanged." },
    { icon: "plug", title: "Integration with existing systems", text: "So cloud adoption does not create new silos." },
    { icon: "scale", title: "Scalable architecture", text: "That grows with demand, without paying for complexity you do not need." },
    { icon: "shield", title: "Security-conscious development", text: "With controls built in from the first environment." },
    { icon: "code", title: "Maintainability", text: "Infrastructure as code, documentation and repeatable environments your team can own." },
    { icon: "migrate", title: "Practical modernisation", text: "Incremental, prioritised by value and risk." },
    { icon: "flex", title: "Long-term flexibility", text: "Deliberate decisions on portability and vendor dependency, so you understand the trade-offs of every platform choice." },
  ],
};

export const FAQS = [
  { q: "What are enterprise cloud services?", a: ["They cover the planning, architecture, migration, development, integration, security and management of an organisation's applications and infrastructure in the cloud, designed around business requirements, resilience, data protection and long-term cost."] },
  { q: "What is the difference between enterprise cloud and traditional hosting?", a: ["Traditional hosting provides a server or space to run software. Enterprise cloud provides on-demand infrastructure and managed services, designed as a whole: scalable environments, automated deployment, resilience across locations, identity and security controls, and integration with other systems."] },
  { q: "What is enterprise cloud architecture?", a: ["It is the overall design of an organisation's cloud estate. That covers account structure, networks, environments, application and data architecture, security, resilience and cost controls, documented so every team builds in a consistent, secure way."] },
  { q: "What is the difference between public, private and hybrid cloud?", a: ["Public cloud runs on a provider's shared infrastructure, with on-demand resources. Private cloud is dedicated to one organisation, for greater control. Hybrid cloud deliberately combines public cloud with private or on-premises infrastructure. Multi-cloud uses more than one public provider."] },
  { q: "How does cloud migration work?", a: ["It starts with assessing applications, dependencies and data. Each application then gets a route (rehost, replatform, refactor or replace), followed by phased migration, data validation, testing and a rehearsed cut-over with a rollback plan."] },
  { q: "Can legacy business applications be moved to the cloud?", a: ["Often, yes, although some need changes first, and a few are better replaced. Compatibility, licensing, vendor support and dependencies determine the right route. Moving a legacy application without modernising it can carry its problems, and costs, into the cloud."] },
  { q: "What is cloud-native application development?", a: ["It is building applications designed to use cloud capabilities: managed services, automatic scaling, APIs, containers or serverless functions where appropriate, and infrastructure as code. The aim is software that is resilient, scalable and easy to change."] },
  { q: "How can enterprise cloud infrastructure be secured?", a: ["Through strong identity and access management with multi-factor authentication, least-privilege permissions, encryption, private networking, secrets management, logging and monitoring, patching, tested backups and an incident response plan, all under a clear shared-responsibility model with your provider."] },
  { q: "How much do enterprise cloud services cost in the UK?", a: ["There are two parts: the project cost (assessment, architecture, migration or development) and the ongoing cloud running cost. Both depend on the number of applications, data volumes, resilience requirements, integrations and support needs. We provide estimates after assessment rather than fixed prices."] },
  { q: "How long does cloud migration take?", a: ["It depends on how many applications are involved, their condition and dependencies, data volumes and the chosen migration routes. Simple rehosts are much quicker than refactoring complex systems. A phased roadmap after assessment gives a realistic timeline."] },
  { q: "Can cloud applications integrate with existing ERP and CRM systems?", a: ["Usually, yes, through APIs, secure middleware or supported integration methods, depending on what each system offers. Hybrid connectivity can also link cloud applications to systems that remain on-premises."] },
  { q: "How can businesses manage cloud infrastructure costs?", a: ["By right-sizing resources, monitoring usage with budgets and alerts, switching off idle environments, managing storage lifecycles, minimising data transfer, using commitment options for steady workloads, tagging costs by owner, and reviewing the architecture regularly."] },
];

export const FINAL_CTA = {
  title: "Build Your Next Generation of Business Applications",
  titleAccent: "on a Stronger Cloud Foundation",
  body: {
    text: "Whether you are planning your first major migration, untangling an estate that grew by accident, or designing cloud-native systems for growth, the first step is understanding where you are now. Tell us about your applications, infrastructure, constraints and goals. We will assess your current position, identify the cloud opportunities that matter, and recommend a practical, phased plan. Looking for hands-on pipeline and infrastructure engineering? See our [[link]].",
    link: { anchor: "cloud and DevOps services", href: "/services/cloud-devops" },
  },
  bring: ["Your applications and where they run", "Data, residency and recovery needs", "Integrations with existing systems", "Current cloud spend, if any"],
};

export const SCHEMA_SERVICE = {
  name: "Enterprise Cloud Services",
  serviceType: ["Enterprise cloud services", "Cloud architecture and migration", "Cloud modernisation services"],
  description:
    "Cloud strategy, enterprise cloud architecture, migration and legacy modernisation, cloud-native development, security, data protection and cost governance for UK organisations across AWS, Microsoft Azure and Google Cloud.",
  catalogName: "Enterprise cloud capabilities",
  catalog: CAPABILITIES.items.map((c) => c.title),
  relatedServicePath: "/services/cloud-devops",
};
