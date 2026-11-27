/*
 * /services/softwaredevelopment: the Software Development pillar page.
 * Content from "ClickMasters Software Development Pillar SEO Content Pack" (27 Nov 2026).
 * Edit copy here; page.jsx only renders it.
 *
 * This page owns "software development services" and "software development company UK".
 * Child pages keep their own targets (custom software, web apps, mobile apps, MVP and
 * SaaS); here each capability gets one short paragraph and a single onward link.
 * Inline links use [anchor](/path) and render through <RichText>; **bold** is supported.
 * VERIFY comments mark claims the pack says need owner confirmation (section G).
 */

export const PATH = "/services/softwaredevelopment";

export const SEO = {
  title: "Software Development Services UK",
  description:
    "Software development services for UK businesses: custom software, web and mobile apps, MVPs and SaaS, integrations and AI, built around how you work.",
  ogTitle: "Software Development Services UK | ClickMasters",
  ogDescription:
    "Custom software, web and mobile applications, MVPs and SaaS, integrations and secure architecture for UK businesses, built around how you work.",
};

const IMG = "/assets/Services/software-development";

/* Photos from Unsplash (Unsplash License, free to use). No faces or brand logos. */
export const IMAGES = {
  // Photo: Douglas Lopes (unsplash.com/photos/OQT9s7fHeO0)
  workspace: {
    src: `${IMG}/software-development-developer-workspace.webp`, width: 1200, height: 800,
    alt: "Developer workspace with two monitors showing source code, a keyboard and a mouse on a desk",
  },
  // Photo: Compagnons (unsplash.com/photos/4UGmm3WRUoQ)
  wireframe: {
    src: `${IMG}/software-development-wireframe-sketch.webp`, width: 1200, height: 900,
    alt: "Hand-drawn website wireframe on paper with an orange pen, an early step in UX design",
  },
  // Photo: Jo Szczepanska (unsplash.com/photos/5aiRb5f464A)
  planning: {
    src: `${IMG}/software-development-sprint-planning-board.webp`, width: 1200, height: 801,
    alt: "Person adding notes to a wall of colourful sticky notes during sprint planning",
  },
  // Photo: Zulfugar Karimov (Unsplash, photo-1762341119237-98df67c9c3c9)
  mobile: {
    src: `${IMG}/software-development-mobile-app-in-hand.webp`, width: 1200, height: 800,
    alt: "Hand holding a smartphone showing a mobile app interface",
  },
  // Photo: Alvaro Reyes (unsplash.com/photos/qWwpHwip31M)
  journey: {
    src: `${IMG}/software-development-user-journey-mapping.webp`, width: 1200, height: 800,
    alt: "Hand pinning screen designs and connecting lines on a board to map a user journey",
  },
} as const;

export const HERO = {
  eyebrow: "Software Development Services UK",
  title: "Software Development Services",
  titleAccent: "Built Around Your Business",
  lead:
    "Most organisations do not need more software. They need software that fits: one system instead of five spreadsheets, a customer portal that connects to the back office, an app staff actually use, or a product customers will pay for. ClickMasters provides software development services for UK businesses, designing and building custom software, web and mobile applications, SaaS products and the integrations that tie them to the systems you already run.",
  audience:
    "We start with how your business works and what needs to change, then choose the technology. Every project is delivered in short iterations with regular demonstrations. Software is built to be secure, maintainable and ready to grow, and remains yours to own and extend.",
  // VERIFY: "24/7" support was removed until confirmed as a real service level (pack, G1).
  stats: [
    { label: "Delivery", value: "Two-week sprints" },
    { label: "Visibility", value: "Weekly demos" },
    { label: "Under one roof", value: "Software, AI and cloud" },
    { label: "After launch", value: "Ongoing support" },
  ],
  figureAlt:
    "Custom business software architecture connecting a web application, mobile app and staff portal to a central database and third-party services",
};

/** Hero diagram: three front ends → API and business logic → database, with third-party services alongside. */
export const HERO_FLOW = {
  clients: ["Web application", "Mobile app", "Staff portal"],
  core: "API and business logic",
  coreItems: ["Roles and permissions", "Workflows", "Validation"],
  data: "Central database",
  services: ["Accounting", "CRM", "Payments", "Email"],
};

export const INVOLVES = {
  title: "What Professional Software Development Involves",
  intro:
    "Software development is not only writing code. For a business, it is the disciplined process of turning an operational need into a reliable system people can use every day. Done well, it covers seven connected activities:",
  items: [
    { icon: "discover", title: "Requirements discovery", text: "Understanding the problem, the users, the current workflow and what success looks like, in measurable terms where possible." },
    { icon: "architecture", title: "Planning and architecture", text: "Deciding how the system will be structured, where data will live, how it will connect to other systems and how it will grow." },
    { icon: "design", title: "UI/UX and application design", text: "Designing screens and journeys around real tasks, tested with the people who will use them." },
    { icon: "code", title: "Development and integration", text: "Building features in small, reviewable increments and connecting them to existing platforms through APIs." },
    { icon: "test", title: "Testing and quality assurance", text: "Automated and manual testing of functionality, performance, security and accessibility." },
    { icon: "deploy", title: "Deployment", text: "Releasing to secure, monitored environments with a rollback plan." },
    { icon: "maintain", title: "Maintenance and continuous improvement", text: "Fixing issues, applying security updates and adding features as needs change." },
  ],
  outro:
    "The order matters. Choosing a framework or platform before understanding the requirements is one of the most common reasons projects overrun or disappoint. We begin with your processes and constraints, and let those determine the technology.",
};

export const OFFER = {
  title: "Software Development Services We Offer",
  intro:
    "Our software development services cover the full journey from first idea to long-term support. Most projects combine several of the capabilities below.",
  core: [
    {
      icon: "bespoke",
      title: "Bespoke business applications",
      text: "When off-the-shelf tools force your team into workarounds, a bespoke application can model your exact processes, such as job management, approvals, pricing rules or operational dashboards. Our [Custom Software Development Services](/services/custom-software-development) cover discovery, build, integration and legacy modernisation for organisations that need software shaped around how they work.",
      href: "/services/custom-software-development",
      cta: "custom software development",
    },
    {
      icon: "web",
      title: "Web applications and business portals",
      text: "Browser-based platforms work on any device without installation, which makes them the natural choice for customer portals, internal tools, booking systems and SaaS front ends. Our [Web Application Development](/services/web-application-development) team builds fast, secure, accessible web apps with React and Next.js.",
      href: "/services/web-application-development",
      cta: "web application development",
    },
    {
      icon: "mobile",
      title: "Mobile applications",
      text: "Where users need offline access, device features such as the camera, GPS or notifications, or an app-store presence, a mobile app makes sense. Typical users are field teams, drivers, inspectors and customers on the move. Our [Mobile App Development](/services/mobile-app-development) service covers iOS and Android, including cross-platform builds with Flutter or React Native.",
      href: "/services/mobile-app-development",
      cta: "mobile app development",
    },
    {
      icon: "rocket",
      title: "Software products, MVPs and SaaS",
      text: "New products benefit from a focused first version that tests the riskiest assumptions with real users before committing to a full build. From there, SaaS platforms need multi-tenant architecture, subscriptions and onboarding designed for growth.",
      href: "/services/mvp-saas-development",
      cta: "MVP and SaaS development",
    },
  ],
  more: [
    { icon: "enterprise", title: "Enterprise software development", text: "Larger organisations need software that handles complex roles and permissions, integrates with ERP, CRM and identity systems, produces audit trails and evolves without accumulating technical debt. We also build and integrate [ERP and CRM systems](/services/erp-crm-development) where a single source of truth for operations and customers is needed." },
    { icon: "automation", title: "Business process automation", text: "Many processes do not need a new system, just fewer manual steps: data entered once and shared, approvals routed automatically, documents filed and reports generated. Automation can be built into new software or added around existing tools." },
    { icon: "api", title: "API development and third-party integrations", text: "Integration is where much of the value lies. We design APIs and connect software to accounting, CRM, e-commerce, payment, communication and identity services, with validation, error handling and logging, so failures are noticed rather than silently losing data. The level of access always depends on what each third-party provider offers." },
    { icon: "database", title: "Database design and back-end systems", text: "Reliable software depends on a well-modelled data layer and a robust back end. We design relational and document databases for accuracy, performance and growth, as described in our [database design and development](/services/database-design) service." },
  ],
};

export const BUILD_VS_BUY = {
  title: "Bespoke Software or Off-the-Shelf? Choosing the Right Approach",
  intro:
    "Bespoke software is not automatically the best option. Off-the-shelf products are often the faster, cheaper and lower-risk choice. The right answer depends on how distinctive your processes are and how much the gaps cost you.",
  headers: ["Consideration", "Off-the-shelf software", "Bespoke software"],
  rows: [
    ["Flexibility and customisation", "Configurable within the vendor's limits; you adapt your process to the product", "Built around your processes, rules and terminology"],
    ["Ownership and control", "You licence access; the vendor controls the roadmap, pricing and data formats", "You own the code and data (check the contract) and set the roadmap"],
    ["Integration", "Depends on the vendor's APIs and marketplace connectors", "Designed to connect with the systems you use"],
    ["Scalability", "Scales well for standard use; per-user pricing can rise steeply", "Architecture sized for your expected growth"],
    ["Ongoing maintenance", "Handled by the vendor, on their schedule", "Your responsibility, usually through a support agreement"],
    ["Initial investment", "Low: subscription or licence", "Higher: design and development effort"],
    ["Total cost of ownership", "Subscription fees continue for as long as you use it, plus workaround costs", "Build cost plus hosting and maintenance; can be lower over time if it replaces several tools or manual work"],
  ],
  custom: [
    "Your processes are a genuine competitive advantage and generic tools would flatten them",
    "Staff spend significant time on workarounds, re-keying or spreadsheets around existing tools",
    "You need integrations that products cannot provide reliably",
    "Licence costs for many users or several overlapping tools are growing",
    "You are building a product to sell",
  ],
  offTheShelf: [
    "A mature product already covers most of your needs",
    "Your processes are standard for your industry",
    "Speed matters more than fit",
  ],
  outro:
    "Often the best answer is a combination: buy the commodity, such as accounting or email, and build what differentiates you, with integrations in between. Part of our discovery work is checking whether an existing product would serve you better before recommending a build.",
};

export const INDUSTRIES = {
  title: "Software for Different Industries",
  intro:
    "Software requirements change significantly between sectors, in their regulations, data sensitivity, integrations and users. We tailor architecture, security and workflows to the context:",
  items: [
    { icon: "health", title: "Healthcare", href: "/industries/healthcare", text: "Administrative and operational workflows, with special category data and clinical safety considerations." },
    { icon: "finance", title: "Financial services", href: "/industries/finance", text: "Document-heavy operations, audit trails, legacy core systems and operational resilience." },
    { icon: "cart", title: "E-commerce and retail", href: "/industries/ecommerce", text: "Product data, order and inventory integration, and peak-time performance." },
    { icon: "education", title: "Education and EdTech", href: "/industries/edtech", text: "Learning platforms, accessibility and children's data where relevant." },
    { icon: "home", title: "Real estate", href: "/industries/real-estate", text: "Listings, lettings, tenant portals and property data." },
    { icon: "truck", title: "Logistics and transport", href: "/industries/logistics", text: "Planning, visibility, driver apps and carrier integrations." },
    { icon: "factory", title: "Manufacturing", href: "/industries/manufacturing", text: "Shop-floor data, quality, maintenance and ERP integration, with careful OT/IT separation." },
    { icon: "saas", title: "Enterprise SaaS", href: "/industries/enterprise-saas", text: "Multi-tenant architecture, enterprise identity and integration ecosystems." },
  ],
  note: "The industry pages describe the kinds of software we can build for each sector. They are not claims of named client projects.",
};

export const PROCESS = {
  title: "Our Software Development Process",
  intro: "A clear process reduces risk and keeps you in control of priorities and budget. The emphasis changes with each project, but the stages are consistent.",
  steps: [
    { title: "Discovery and requirements analysis", text: "We map how work happens today, who the users are, what must change and how success will be measured. You receive a prioritised scope and an honest view of what to build, buy or leave alone.", why: "It prevents building the wrong thing." },
    { title: "Technical planning and architecture", text: "We choose the architecture, data model, integration approach and hosting, and identify technical risks early.", why: "Foundational decisions are the most expensive to change later." },
    { title: "UX/UI design", text: "We design journeys and screens, then test prototypes with real users before building.", why: "It is far cheaper to change a design than working software." },
    { title: "Development and implementation", text: "We build in short sprints with regular demonstrations, code review and version control, integrating with your systems as we go.", why: "You see progress early and can adjust priorities as you learn." },
    { title: "Testing and quality assurance", text: "Automated tests run on every change, alongside manual, performance, security and accessibility testing before release.", why: "Problems are caught before your users find them." },
    { title: "Deployment and launch", text: "We release to monitored cloud environments with data migration, rollback plans and user onboarding.", why: "A controlled launch protects day-to-day operations." },
    { title: "Maintenance and ongoing improvement", text: "After launch, we monitor, apply security updates, fix issues and develop new features as your needs evolve.", why: "Software that is not maintained becomes a liability." },
  ],
  outro:
    "For a new product, the process often starts smaller: a focused first version to test the idea, then iterations based on real usage. Our [MVP and SaaS Development](/services/mvp-saas-development) service is designed for exactly that path, from validation to a scalable platform.",
};

// VERIFY: confirm the technology list is current (taken from the homepage; pack, G4).
export const TECH = {
  title: "Technologies and Architecture",
  intro:
    "We choose technology to suit the problem, your existing estate and the team that will maintain it, not to follow trends. Our day-to-day toolset includes:",
  groups: [
    { title: "Front end", items: ["React", "Next.js", "TypeScript"] },
    { title: "Mobile", items: ["Flutter", "React Native", "Swift", "Kotlin"] },
    { title: "Back end", items: ["Node.js", "Python & Django"] },
    { title: "Databases", items: ["PostgreSQL", "MongoDB"] },
    { title: "Cloud and delivery", items: ["AWS", "Microsoft Azure", "Google Cloud", "Docker", "Kubernetes"] },
  ],
  details: [
    ["Front end:", "React and Next.js with TypeScript for fast, accessible, maintainable web interfaces."],
    ["Mobile:", "Flutter and React Native for cross-platform apps, and native Swift and Kotlin where a project needs them."],
    ["Back end:", "Node.js and Python for APIs, business logic, background processing and AI integration."],
    ["Databases:", "PostgreSQL for relational data and transactional integrity, and MongoDB where a flexible document model suits the data better. Both are designed with indexing, backups and growth in mind."],
    ["APIs and integrations:", "well-documented REST APIs, webhooks and secure connections to third-party services."],
    ["Cloud infrastructure:", "deployment on AWS, Azure or Google Cloud, using Docker and, where the scale justifies it, Kubernetes. Automated pipelines are covered by our [cloud and DevOps](/services/cloud-devops) practice."],
    ["Authentication and access control:", "secure sign-in, multi-factor authentication, single sign-on where needed and role-based permissions enforced on the server."],
  ],
  architecture:
    "**Architecture should match real complexity.** A well-structured modular application is often faster to build and easier to run than a distributed microservices system, and scales comfortably for most businesses. We split systems into separate services only where independent scaling, deployment or ownership justifies the extra complexity. We do not claim official partnerships or certifications with any technology vendor.",
};

export const SECURITY = {
  title: "Security, Scalability and Maintainability",
  intro: "Security and maintainability are design decisions, not features to add at the end.",
  items: [
    { icon: "key", title: "Secure authentication", text: "Strong password handling, multi-factor authentication for administrative accounts and protection against common attacks." },
    { icon: "roles", title: "Role-based access control", text: "Each user sees and does only what their role requires, with permissions enforced on the server rather than hidden in the interface." },
    { icon: "lock", title: "Data protection", text: "Encryption in transit and at rest, data minimisation and defined retention periods." },
    { icon: "api", title: "API security", text: "Authentication and authorisation on every request, input validation, rate limiting and secrets kept out of code." },
    { icon: "database", title: "Database performance", text: "Sensible indexing, efficient queries and capacity planning as data grows." },
    { icon: "test", title: "Application testing", text: "Automated unit, integration and end-to-end tests, plus security testing before major releases." },
    { icon: "backup", title: "Backup and recovery planning", text: "Regular, tested backups and a documented recovery process." },
    { icon: "monitor", title: "Monitoring and maintenance", text: "Logging, alerting and timely security patching after launch." },
    { icon: "scale", title: "Scalable architecture", text: "Stateless application tiers, background processing and caching where they add value, with load testing before scale is needed." },
  ],
  dataProtection:
    "Where software processes personal data, the UK GDPR and the Data Protection Act 2018 apply, as amended by the Data (Use and Access) Act 2025. That means a lawful basis for processing, transparency with the people whose data you hold, appropriate security, and data protection by design and by default. Some higher-risk processing also requires a Data Protection Impact Assessment. We design with these obligations in mind and provide the technical documentation your data protection lead needs. Compliance itself remains the responsibility of the organisation that controls the data. Our approach also draws on the NCSC's secure development and deployment guidance and the government's voluntary Software Security Code of Practice.",
  statement:
    "ClickMasters does not claim ISO 27001, Cyber Essentials or other certifications, and secure software does not by itself make an organisation compliant with any law or standard.",
};

// VERIFY: confirm code handover and no lock-in match standard contract terms (pack, G5).
export const WHY_BESPOKE = {
  title: "Why Choose a Bespoke Software Development Approach?",
  intro: "When custom development is the right fit, the advantages are practical:",
  items: [
    { icon: "fit", title: "Software aligned with how you work", text: "The system reflects your processes, rules and terminology, so staff stop working around it." },
    { icon: "control", title: "Control over functionality", text: "You decide what is built, in what order, and what is left out." },
    { icon: "api", title: "Integration with existing systems", text: "Data flows between your tools instead of being typed in twice." },
    { icon: "flex", title: "Flexible priorities", text: "Iterative delivery lets you change direction as you learn, without renegotiating a fixed specification." },
    { icon: "growth", title: "Long-term evolution", text: "The software can grow with your business: new features, new users, new markets." },
    { icon: "unlock", title: "Less dependence on unsuitable tools", text: "You are no longer constrained by a vendor's roadmap, pricing changes or data formats." },
  ],
  responsibilities:
    "Bespoke software also brings responsibilities: you own the maintenance, hosting and future development. We are open about those costs from the start, document what we build and hand over the code, so you are never locked in to us.",
};

export const FAQS = [
  { q: "What are software development services?", a: ["Software development services cover the design, building, testing, deployment and maintenance of software for an organisation. That might be a bespoke business application, a web or mobile app, a SaaS product, or integrations between existing systems. A good provider also helps you decide what to build, what to buy and how it fits your operations."] },
  { q: "What is the difference between custom and off-the-shelf software?", a: ["Off-the-shelf software is a ready-made product licensed to many organisations. It is quick to adopt, but you adapt to it. Custom software is built for your specific requirements. It fits your processes and integrations and you control it, but it costs more upfront and needs ongoing maintenance. Many businesses combine both."] },
  { q: "How much does bespoke software development cost in the UK?", a: ["There is no fixed price, because cost depends on scope. The main drivers are the number of features and user roles, the complexity of business rules, the number and difficulty of integrations, data migration, security and compliance requirements, design depth, and the level of support after launch. We provide an estimate after a short discovery conversation, and can phase a project so you start with the highest-value features."] },
  { q: "How long does it take to develop custom software?", a: ["It depends on scope, integrations, data readiness and how quickly decisions can be made. A focused first release is much quicker than a full platform. We recommend starting with a version that delivers value early, then iterating. We give a realistic timeline once we understand the requirements, and show progress through regular demonstrations."] },
  { q: "What types of business software can be developed?", a: ["Common examples include customer and staff portals, job and workflow management systems, booking and scheduling platforms, CRM and ERP systems, inventory and order management, reporting dashboards, mobile apps for field teams, SaaS products, and integrations and automations that connect existing tools."] },
  { q: "Can custom software integrate with existing business systems?", a: ["Usually, yes, where those systems provide APIs, data exports or other supported integration methods. Integration options vary by provider, and some require partner agreements or paid access, so we assess them during discovery and design integrations with validation, error handling and logging."] },
  { q: "Is bespoke software suitable for small businesses?", a: ["It can be, when a specific process costs significant time or money, or when off-the-shelf tools do not fit. Small businesses often benefit most from a focused application or an integration that removes manual work, rather than a large system. If an existing product would do the job, we will say so."] },
  { q: "What technologies are used for software development?", a: ["It depends on the project. We commonly use React and Next.js for web interfaces, Flutter or React Native for mobile apps, Node.js and Python for back ends, PostgreSQL or MongoDB for data, and AWS, Azure or Google Cloud for hosting, chosen to suit your requirements and existing systems."] },
  { q: "How is software secured and maintained after launch?", a: ["Security is designed in from the start, with secure authentication, role-based access, encryption, secure APIs and testing. After launch, ongoing maintenance covers monitoring, security updates, dependency patching, backups, bug fixes and new features, usually under a support agreement agreed at the start."] },
  { q: "How do I get started with a software development project?", a: ["Tell us what you want to achieve, who will use the software and which systems it needs to work with. We will arrange a discovery conversation, give you an honest view of the options, including whether to build at all, and follow up with a proposed scope, approach and estimate."] },
];

export const FINAL_CTA = {
  title: "Let's Build Software Around",
  titleAccent: "the Way Your Business Works",
  body: {
    text: "Whether you need to replace spreadsheets with a proper system, connect tools that do not talk to each other, launch a customer-facing app or build a product of your own, the first step is a conversation about your goals and constraints. Share what you want to build, who it is for and the systems involved. We will come back with a clear scope, a recommended approach and an estimate, and we will tell you if a simpler option would serve you better. Exploring AI as well? See our [[link]].",
    link: { anchor: "AI development services", href: "/services/ai-development" },
  },
  bring: ["Your idea or the problem to solve", "Who will use it", "The systems it must connect to"],
};

export const SCHEMA_SERVICE = {
  name: "Software Development Services",
  serviceType: ["Software development services", "Business application development", "Enterprise software development"],
  description:
    "Design, development, integration and maintenance of custom software, web applications, mobile apps, MVPs and SaaS products for UK businesses.",
  catalogName: "Software development services",
  catalog: ["Custom software development", "Web application development", "Mobile app development", "MVP and SaaS development"],
  relatedServicePath: "/services/custom-software-development",
};
