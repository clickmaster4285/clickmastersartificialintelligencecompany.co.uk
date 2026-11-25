/*
 * /services/web-application-development content, from
 * "ClickMasters Web Application Development: SEO Content Pack" (24 Nov 2026).
 * Edit copy here; page.jsx only renders it.
 *
 * VERIFY comments mark business facts the pack says need owner confirmation.
 */

export const PATH = "/services/web-application-development";

export const SEO = {
  title: "Web Application Development UK | Custom Web Apps",
  description:
    "Web application development services for UK businesses: secure, scalable portals, dashboards and SaaS built with React and Next.js, integrated with your systems.",
  ogTitle: "Web Application Development Company UK | ClickMasters",
  ogDescription:
    "Customer portals, dashboards, SaaS and business web apps, engineered for security, speed and integration with the software you already use.",
};

export type LinkedText = { text: string; link?: { anchor: string; href: string } };

export const HERO = {
  eyebrow: "Web Application Development UK",
  title: "Web Application Development Services",
  titleAccent: "for Secure, Scalable Business Apps",
  lead:
    "ClickMasters builds browser-based applications that run core parts of your business: customer portals, operational dashboards, booking systems, SaaS products and internal tools. We design the interface, engineer the back end and database, connect your existing software, and keep the application fast and secure as usage grows.",
  audience:
    "For businesses replacing spreadsheets or outdated desktop software, founders launching a web-based product, and technology leaders who need a dependable full-stack team.",
  stats: [
    { value: "React · Next.js", label: "Modern front ends" },
    { value: "Node · Python · Laravel", label: "Proven back ends" },
    { value: "6–8 weeks", label: "Typical MVP delivery" },
    { value: "OWASP-led", label: "Security practice" },
  ],
};

export const WHAT_IS = {
  p1: "A web application is software that runs in a web browser and lets people *do* something rather than just read something: place and track orders, manage bookings, approve requests, analyse data or collaborate on records. Web application development is the work of designing, building, securing and maintaining that software, from the interface people see to the servers, databases and integrations behind it.",
  // **bold** markers are rendered as <strong>.
  p2: "When someone uses a web application, three layers work together. The **front end** runs in the browser, drawing the interface and responding to clicks and input. It sends requests to the **back end**, which runs on a server, checks who the user is and what they are allowed to do, applies the business rules and talks to the **database** where records are stored. Most modern applications connect these layers through an API, so the same back end can serve a web app, a mobile app and partner systems at the same time.",
  p3: "Businesses choose custom web applications because they work on any device with a browser, need no installation or manual updates, and can be shaped precisely around a process. A logistics firm can give drivers, dispatchers and customers three different views of the same live job data. An accountancy practice can replace emailed spreadsheets with a secure client portal where documents, tasks and deadlines sit in one place.",
};

export const SPECTRUM = [
  { title: "Informational website", tone: "plain", points: ["Publishes content", "Few or no user accounts", "E.g. company site, blog"] },
  { title: "Web application", tone: "purple", points: ["Users complete tasks", "Roles, data, workflows", "E.g. portal, booking system"] },
  { title: "SaaS platform", tone: "teal", points: ["Many customer organisations", "Tenants, plans, billing", "E.g. subscription product"] },
] as const;

export const SERVICES_INTRO: LinkedText = {
  text: "Web applications are one part of our wider [[link]]. This page focuses on the browser-based layer: how the application is architected, engineered, secured and kept fast.",
  link: { anchor: "custom software development services", href: "/services/custom-software-development" },
};

export type ServiceField = { label: string; text: string };
export type Service = { id: string; icon: string; title: string; intro: string; fields: ServiceField[]; note?: string };

export const SERVICES: Service[] = [
  {
    id: "custom-web-application-development",
    icon: "custom",
    title: "Custom Web Application Development",
    intro: "An application designed from scratch around one business's users, data and rules, rather than a template or a configured product.",
    fields: [
      { label: "Who needs it", text: "Businesses whose process does not fit packaged software, or who are stitching several tools together with manual steps." },
      { label: "Functionality", text: "Role-specific screens, forms with business validation, search and filtering, notifications, document generation and audit history." },
      { label: "Technical considerations", text: "A domain model that mirrors how the business talks about its work, so new rules can be added without restructuring the database." },
      { label: "Use case", text: "A building contractor tracking quotes, site visits, materials and invoices in one application instead of four spreadsheets." },
      { label: "Benefit", text: "Staff work in one place, and managers see live status instead of chasing updates." },
    ],
  },
  {
    // VERIFY: single sign-on (SAML/OIDC) is offered.
    id: "enterprise-web-application-development",
    icon: "enterprise",
    title: "Enterprise Web Application Development",
    intro: "Large, multi-department web applications with many users, strict permissions and integrations across the wider technology estate.",
    fields: [
      { label: "Who needs it", text: "Mid-sized and large organisations, regulated businesses and multi-site operators." },
      { label: "Functionality", text: "Single sign-on, granular permissions, approval chains, audit logs, bulk data operations and scheduled reporting." },
      { label: "Technical considerations", text: "Identity-provider integration (SAML or OpenID Connect), data retention policies, concurrency control when two people edit the same record, and performance under peak load." },
      { label: "Integrations", text: "ERP, CRM, HR, finance and data-warehouse systems, plus directory services for user provisioning." },
      { label: "Benefit", text: "One governed application replaces departmental workarounds, with a full record of who changed what." },
    ],
  },
  {
    id: "saas-web-application-development",
    icon: "saas",
    title: "SaaS Web Application Development",
    intro: "Subscription web products used by many customer organisations from a single, shared platform.",
    fields: [
      { label: "Who needs it", text: "Start-up founders and businesses turning an internal tool into a product they can sell." },
      { label: "Functionality", text: "Self-service sign-up, organisation and team management, plans and feature limits, billing, usage tracking and an admin console." },
      { label: "Technical considerations", text: "Tenant isolation enforced in the data layer, not just the interface; feature flags for staged roll-outs; and per-tenant configuration without code forks." },
      { label: "Use case", text: "A scheduling product for independent clinics, where each clinic has its own staff, calendars and branding." },
      { label: "Benefit", text: "An MVP, typically ready in 6–8 weeks, reaches paying users on foundations built to grow." },
    ],
  },
  {
    id: "business-management-web-applications",
    icon: "business",
    title: "Business Management Web Applications",
    intro: "Operational applications that run day-to-day processes such as jobs, stock, staff, assets and finance in one system.",
    fields: [
      { label: "Who needs it", text: "SMEs and growing businesses that have outgrown spreadsheets and email-based coordination." },
      { label: "Functionality", text: "Job and order management, inventory, scheduling, timesheets, purchase approvals and management dashboards." },
      { label: "Technical considerations", text: "Transactional updates so stock, orders and invoices never fall out of step; import tools for existing data." },
      { label: "Integrations", text: "Accounting packages, payment providers, email and calendar services." },
      { label: "Benefit", text: "Fewer handoffs and re-keying, with one version of every record." },
    ],
  },
  {
    id: "customer-portals-client-dashboards",
    icon: "portal",
    title: "Customer Portals and Client Dashboards",
    intro: "Secure, branded areas where customers or clients log in to see their own data, documents, orders and requests.",
    fields: [
      { label: "Who needs it", text: "Service businesses, B2B suppliers, professional firms and any team answering the same status questions by phone and email." },
      { label: "Functionality", text: "Account and order history, document exchange, support requests, invoices and payments, self-service updates and notifications." },
      { label: "Technical considerations", text: "Strict object-level authorisation, so one customer can never open another customer's record by changing an ID in the address bar." },
      { label: "Use case", text: "A wholesaler's trade portal showing live stock, price lists per account, order tracking and downloadable invoices." },
      { label: "Benefit", text: "Fewer routine enquiries and a more professional customer experience." },
    ],
  },
  {
    // VERIFY: the team builds Progressive Web Apps (pack note); remove if not.
    id: "progressive-web-application-development",
    icon: "pwa",
    title: "Progressive Web Application Development",
    intro: "A Progressive Web App (PWA) is a web application that can be installed on a phone or desktop, opened from the home screen and, with careful design, used with a poor or missing connection.",
    fields: [
      { label: "Who needs it", text: "Field teams, warehouses and customer-facing apps where an app-like experience matters but separate iOS and Android builds are not justified." },
      { label: "Functionality", text: "Home-screen installation, offline data capture with background sync, push notifications and camera access for scanning or photos." },
      { label: "Technical considerations", text: "Service-worker caching strategy, conflict handling when offline edits sync, and platform limits: some device features and notification behaviour differ on iOS, so native apps remain the better choice for certain requirements." },
      { label: "Benefit", text: "One codebase covers desktop and mobile, with no app-store release cycle for updates." },
    ],
  },
  {
    id: "api-development-integrations",
    icon: "api",
    title: "API Development and Third-Party Integrations",
    intro: "The interfaces that connect your web application to other systems, and the integrations that bring their data into it.",
    fields: [
      { label: "Who needs it", text: "Any application that must exchange data with CRMs, ERPs, payment gateways, accounting tools, carriers or legacy software." },
      { label: "Functionality", text: "Documented REST APIs, webhooks for real-time events, scheduled synchronisation and partner access with API keys." },
      { label: "Technical considerations", text: "OpenAPI specifications, versioning, rate limiting, retries with idempotency, and alerting when a third-party service fails." },
      { label: "Use case", text: "Orders placed in a web portal flowing automatically into the warehouse system and the accounting package." },
      { label: "Benefit", text: "Data entered once, available everywhere it is needed." },
    ],
  },
  {
    id: "web-application-modernisation",
    icon: "modernise",
    title: "Web Application Modernisation",
    intro: "Upgrading or rebuilding an existing web application that has become slow, insecure, hard to change or tied to an outdated framework.",
    fields: [
      { label: "Who needs it", text: "Businesses running applications on end-of-life language or framework versions, or with interfaces that do not work on mobile." },
      { label: "Functionality", text: "A rebuilt responsive interface, new APIs around existing business logic, migrated data and modern authentication." },
      { label: "Technical considerations", text: "A code and dependency audit first; tests that record current behaviour; replacing screens or modules in stages behind a shared routing layer, rather than a single risky switchover." },
      { label: "Benefit", text: "Security patches become available again, and new features stop taking months." },
    ],
  },
  {
    // VERIFY: 24/7 assistance for critical systems is current.
    id: "web-application-maintenance-support",
    icon: "maintenance",
    title: "Web Application Maintenance and Support",
    intro: "Keeping a live application secure, available and improving after launch.",
    fields: [
      { label: "Who needs it", text: "Any business whose application is part of daily operations or customer service." },
      { label: "What is included", text: "Uptime and error monitoring, bug fixes, security and dependency updates, browser compatibility, performance tuning and new features, with flexible support plans and 24/7 assistance for critical systems." },
      { label: "Technical considerations", text: "Automated regression tests and a staged release process, so updates reach production safely." },
      { label: "Benefit", text: "Predictable running costs and an application that keeps pace with the business." },
    ],
  },
  {
    id: "full-stack-web-application-development",
    icon: "fullstack",
    title: "Full-Stack Web Application Development",
    intro: "One team responsible for every layer: interface, back end, database, infrastructure and deployment.",
    fields: [
      { label: "Who needs it", text: "Organisations without an in-house engineering team, or teams that need extra capacity across the whole stack." },
      { label: "Functionality", text: "End-to-end delivery from design system to cloud deployment, CI/CD and monitoring." },
      { label: "Technical considerations", text: "Shared TypeScript types or API contracts between front and back end, so a change on one side cannot silently break the other." },
      { label: "Benefit", text: "No gaps between suppliers, and one point of accountability for how the whole application behaves." },
    ],
  },
];

export const TYPES_INTRO: LinkedText = {
  text: "The scenarios below show typical problems each type of application solves. They are illustrative examples, not descriptions of specific client projects. Rules, data and integrations differ by sector, so it is also worth reading about the [[link]].",
  link: { anchor: "software requirements in each industry we serve", href: "/industries" },
};

export const TYPES = [
  { icon: "business", title: "Business management applications", text: "Jobs, stock, staff and finance in one system.", scenario: "A cleaning company schedules crews, records completed visits on mobile and invoices automatically at month end." },
  { icon: "crm", title: "Customer relationship platforms", text: "Pipelines, accounts and service history shaped to your sales process.", scenario: "An equipment hire firm tracks enquiries, quotes, hires and returns against each customer account." },
  { icon: "dashboard", title: "Enterprise dashboards", text: "Live KPIs drawn from several systems, with drill-down by site or team.", scenario: "A multi-site retailer compares daily sales, stock and staffing across branches on one screen." },
  { icon: "saas", title: "SaaS platforms", text: "Subscription products serving many customer organisations.", scenario: "A compliance-tracking product for letting agents, sold on monthly plans." },
  { icon: "ecommerce", title: "E-commerce web applications", text: "Trade ordering, configurators and marketplaces beyond standard shop software.", scenario: "A B2B supplier offers account-specific pricing, bulk ordering and credit terms online." },
  { icon: "booking", title: "Booking and scheduling systems", text: "Availability, resources, reminders and payments.", scenario: "A training centre manages rooms, trainers and delegate bookings with automatic joining instructions." },
  { icon: "internal", title: "Internal operational applications", text: "Tools that replace spreadsheets and paper forms.", scenario: "A manufacturer records quality checks on tablets on the shop floor, with photos attached." },
  { icon: "portal", title: "Customer and employee portals", text: "Secure self-service for external or internal users.", scenario: "Employees book leave, view payslips and complete onboarding tasks in one portal." },
  { icon: "data", title: "Data management platforms", text: "Collection, validation, search and export of business data.", scenario: "A research team gathers survey data from partners, validates it and exports clean datasets." },
  { icon: "workflow", title: "Workflow automation applications", text: "Multi-step approvals and hand-offs with automatic routing.", scenario: "Purchase requests route to the right approver by value and department, then raise the order." },
];

export const TYPES_OUTRO: LinkedText = {
  text: "If a ready-made foundation would get you there faster, compare these with our [[link]] for ERP, CRM, SaaS and logistics, which we customise rather than build from scratch.",
  link: { anchor: "tailored business software solutions", href: "/solutions" },
};

export const ARCH = {
  intro:
    "Architecture decisions made in the first weeks decide how fast, secure and changeable the application will be years later. These are the layers we design and how they fit together.",
  layers: [
    {
      // VERIFY: WCAG 2.2 AA is part of standard QA; MFA is offered.
      title: "Front end",
      icon: "frontend",
      items: [
        ["User interfaces", "built from reusable components, so screens stay consistent and quicker to extend."],
        ["Responsive layouts", "designed for phones, tablets and large monitors from the start."],
        ["State management", "that keeps server data, form input and interface state separate, which prevents stale or conflicting views."],
        ["Accessibility", "to WCAG 2.2 AA: keyboard navigation, screen-reader labels and sufficient colour contrast."],
      ],
    },
    {
      title: "Back end",
      icon: "backend",
      items: [
        ["Business logic", "kept on the server, where it cannot be bypassed from the browser."],
        ["Authentication", "confirms who the user is, with secure sessions or tokens and optional multi-factor sign-in."],
        ["Authorisation", "checks what that user may see and do, on every request."],
        ["API architecture", "that is documented and versioned, with background jobs for slow work such as reports, imports and emails."],
      ],
    },
    {
      title: "Database",
      icon: "database",
      items: [
        ["Data modelling", "that reflects real business entities and their relationships."],
        ["Constraints and validation", "at database level, so bad data cannot get in even if application code has a bug."],
        ["Query performance", "through indexing and query review as data grows."],
        ["Backups", "with point-in-time recovery, and restores that are tested, not assumed."],
      ],
    },
  ],
  renderTitle: "Choosing how pages are rendered",
  rendering: [
    { title: "Server-side rendering", text: "Pages are built on the server for each request. Best for public, search-indexed pages and fast first loads." },
    { title: "Static generation", text: "Pages are built in advance and served from a CDN. Best for content that changes rarely, such as marketing and help pages." },
    { title: "Client-side rendering", text: "The browser builds the interface after login. Best for highly interactive dashboards behind authentication." },
  ],
  renderOutro: "Frameworks such as Next.js let one application mix all three, so public pages stay fast and indexable while logged-in screens stay responsive.",
};

export const STACK_INTRO = "We match the stack to the application's workload, your team and its long-term maintainability.";

// Item names must match keys in TECH_LOGOS (page.jsx); others render as text chips.
export const STACK = [
  { title: "Front end", items: ["React", "Next.js", "TypeScript", "Angular", "Vue.js", "Tailwind CSS"] },
  { title: "Back end", items: ["Node.js", "Python & Django", "Laravel", "Go", "Java & Spring"] },
  { title: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Elasticsearch", "Firebase"] },
  { title: "Cloud & delivery", items: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform"] },
  { title: "CI/CD & monitoring", items: ["GitHub Actions", "Jenkins", "Prometheus", "Grafana", "New Relic"] },
  { title: "Interfaces", items: ["REST APIs", "Webhooks", "OAuth 2.0", "OpenAPI"] },
];

export const STACK_FIT = {
  headers: ["Requirement", "Often a good fit", "Why"],
  rows: [
    ["Public pages that must rank and load fast", "Next.js with server rendering", "HTML arrives ready to display and index"],
    ["Real-time updates and high I/O", "Node.js", "Efficient for many simultaneous connections and event streams"],
    ["Data-heavy admin and reporting tools", "Python and Django", "Mature admin, ORM and data libraries"],
    ["Content-rich business portals on a tight timeline", "Laravel", "Batteries-included framework with fast scaffolding"],
    ["Structured, related business data", "PostgreSQL or MySQL", "Relationships, transactions and constraints"],
    ["Flexible or document-shaped data", "MongoDB", "Schema flexibility for varied records"],
  ],
};

export const PROCESS_INTRO =
  "Ten phases, delivered in two-week sprints with weekly demos. Several phases run in parallel once design is approved. Most MVPs launch in 6–8 weeks; larger enterprise applications typically take 3–6 months.";

export const PROCESS = [
  { title: "Discovery and Requirements Analysis", activities: "User interviews, process mapping, review of current tools and data.", deliverables: "User roles, prioritised requirements, success measures.", risk: "Building features nobody uses." },
  { title: "Solution Architecture and Technical Planning", activities: "Choose rendering approach, stack, hosting, authentication and integration patterns.", deliverables: "Architecture diagram, data model, release plan.", risk: "Rewrites when users or data grow." },
  { title: "UI/UX Design and Prototyping", activities: "Wireframes, clickable prototypes and usability tests with real users.", deliverables: "Approved prototype and component design system.", risk: "Costly interface changes after build." },
  { title: "Frontend Development", activities: "Build components, screens, state handling and accessibility.", deliverables: "Responsive interface in a staging environment.", risk: "Inconsistent, inaccessible screens." },
  { title: "Backend Development", activities: "APIs, business rules, authentication, authorisation and background jobs.", deliverables: "Documented, tested API.", risk: "Rules that can be bypassed from the browser." },
  { title: "Database Engineering", activities: "Schema, constraints, indexes, migrations and data import scripts.", deliverables: "Versioned migrations and seed data.", risk: "Corrupt data and slow queries." },
  { title: "API and Third-Party Integrations", activities: "Connect payment, CRM, ERP and accounting systems against their sandboxes.", deliverables: "Integration tests and failure alerts.", risk: "Silent data loss between systems." },
  { title: "Quality Assurance and Testing", activities: "Unit, integration, end-to-end, cross-browser, accessibility, load and security testing.", deliverables: "Test reports and UAT sign-off.", risk: "Defects reaching customers." },
  { title: "Deployment and Launch", activities: "CI/CD release to cloud hosting, data migration, DNS and SSL, rollback plan.", deliverables: "Live application and runbook.", risk: "Downtime on launch day." },
  { title: "Monitoring, Maintenance and Optimisation", activities: "Error and uptime monitoring, updates, performance tuning, feature backlog.", deliverables: "Monitoring dashboards and support plan.", risk: "Security drift and slowdowns." },
];

export const SECURITY_INTRO =
  "No application can be guaranteed secure, but most real-world breaches exploit well-known weaknesses. We design against them using OWASP guidance, including the OWASP Top 10 and the Application Security Verification Standard (ASVS), and follow GDPR best practice for personal data.";

export const SECURITY_FLOW = [
  { title: "Request", sub: "", tone: "plain" },
  { title: "HTTPS / TLS", sub: "Encrypted", tone: "purple" },
  { title: "Authenticate", sub: "Who are you?", tone: "purple" },
  { title: "Authorise", sub: "Allowed?", tone: "purple" },
  { title: "Validate", sub: "Input safe?", tone: "purple" },
  { title: "Data access", sub: "Least privilege", tone: "teal" },
] as const;

export const SECURITY = [
  { icon: "auth", title: "Authentication", text: "Secure password storage with modern hashing, optional multi-factor sign-in, and single sign-on where your organisation uses it." },
  { icon: "rbac", title: "Authorisation and RBAC", text: "Role-based access control enforced on the server for every request and every record, not just hidden buttons." },
  { icon: "validate", title: "Input validation", text: "Server-side validation and parameterised queries to prevent injection; output encoding to prevent cross-site scripting." },
  { icon: "api", title: "Secure API design", text: "Authenticated endpoints, rate limiting, strict CORS rules and responses that expose only the fields a caller needs." },
  { icon: "lock", title: "Data encryption", text: "TLS for all traffic and encryption at rest for databases and backups." },
  { icon: "session", title: "Session management", text: "HttpOnly, Secure and SameSite cookies, sensible expiry and invalidation on logout or password change." },
  { icon: "config", title: "Secure configuration", text: "Secrets kept out of code, security headers such as Content Security Policy, and separate environments for testing and production." },
  { icon: "deps", title: "Dependency updates", text: "Automated scanning of open-source packages and a regular patch cycle." },
  { icon: "backup", title: "Backup and recovery", text: "Automated backups, defined recovery objectives and periodic restore tests." },
  { icon: "test", title: "Security testing", text: "Code review, automated scanning and regular security testing before and after release." },
  { icon: "monitor", title: "Monitoring and incident response", text: "Alerts on suspicious activity, audit logs and an agreed process for investigating and resolving incidents." },
  { icon: "nda", title: "Confidentiality", text: "We sign NDAs on request before you share sensitive details about your business." },
];

export const PERFORMANCE_INTRO =
  "Slow applications cost time on every task and push customers away. Performance is designed in through architecture and measured continuously. It is not something to add at the end.";

export const CACHE_LAYERS = [
  { title: "Browser cache", sub: "Static assets", tone: "purple" },
  { title: "CDN edge", sub: "Pages, images", tone: "purple" },
  { title: "App cache (Redis)", sub: "Frequent queries", tone: "teal" },
  { title: "Database", sub: "Source of truth", tone: "sun" },
] as const;

export const PERFORMANCE = [
  { icon: "speed", title: "Front-end performance", text: "Code splitting, optimised images and server rendering, measured against Core Web Vitals (LCP, INP and CLS)." },
  { icon: "database", title: "Database optimisation", text: "Indexes based on real query patterns, eliminating N+1 queries, and pagination for large lists." },
  { icon: "cache", title: "Caching", text: "CDN and application caching with clear invalidation rules, so speed never means stale data." },
  { icon: "api", title: "API efficiency", text: "Lean payloads, batching and background jobs for slow tasks such as reports and exports." },
  { icon: "scale", title: "Infrastructure scaling", text: "Stateless application servers in containers that can scale horizontally on AWS, Azure or Google Cloud." },
  { icon: "load", title: "Load testing and monitoring", text: "Load tests before launch at expected peak, then live monitoring of response times and errors." },
];

export const PERFORMANCE_OUTRO =
  "Good architecture also supports changing requirements. Modular code, documented APIs and automated tests mean a new user role, integration or market can be added without destabilising what already works.";

export const COMPARISON = {
  headers: ["Factor", "Website", "Web application", "Desktop software"],
  rows: [
    ["Purpose", "Inform and attract visitors", "Let users complete tasks and manage data", "Heavy local processing or specialist tools"],
    ["Accessibility", "Any browser, public", "Any browser, usually behind a login", "Only on machines where it is installed"],
    ["Installation", "None", "None (optionally installable as a PWA)", "Installed and updated on each device"],
    ["User interaction", "Reading, simple forms", "Rich workflows, roles, real-time updates", "Rich, but tied to one machine"],
    ["Integration", "Limited (forms, analytics)", "Extensive via APIs", "Possible, often harder to maintain"],
    ["Maintenance", "Content updates", "Central deployment; every user is updated at once", "Updates distributed to every device"],
    ["Scalability", "High for read-only traffic", "Scales with cloud infrastructure", "Limited by each user's hardware"],
    ["Typical uses", "Company site, blog, campaigns", "Portals, dashboards, SaaS, booking, operations", "CAD, media editing, offline-only environments"],
  ],
  webWhen: [
    "several people or locations need the same live data",
    "customers or partners need secure self-service",
    "you want to update everyone at once without installations",
    "the system must connect to other business software",
  ],
  otherWhen: [
    "you mainly need to publish information and capture leads (website)",
    "work depends on heavy local processing or specialist hardware (desktop)",
    "users must work fully offline for long periods and a PWA's limits matter (desktop or native)",
  ],
};

export const WHY = [
  { icon: "requirements", title: "Requirement-driven development", text: "Discovery workshops and prototypes come before code, so the application reflects how your users actually work." },
  { icon: "fullstack", title: "Full-stack engineering", text: "Front end, back end, databases, cloud and DevOps in one team, with mobile, ERP/CRM and AI capability available when you need it." },
  { icon: "scale", title: "Architecture built to grow", text: "Proven stacks such as React, Next.js and Node.js on cloud-native infrastructure, so growth does not force a rewrite." },
  { icon: "api", title: "Integration experience", text: "Secure API integrations with CRMs, ERPs, payment gateways, accounting tools and legacy software." },
  { icon: "shield", title: "Security-conscious delivery", text: "OWASP standards, GDPR best practice, encryption, role-based access and regular security testing on every project." },
  { icon: "agile", title: "Transparent, supported delivery", text: "Two-week sprints with weekly demos, fixed-price or time-and-materials options, and ongoing support after launch." },
];

export const COST = {
  intro:
    "A reliable estimate needs an understanding of the requirements. \"A customer portal\" could mean five screens with one integration, or fifty screens with single sign-on, payments and an ERP connection. These are the factors that move the cost most.",
  factors: [
    { icon: "complexity", title: "Application complexity", text: "The number of workflows, business rules and exceptions." },
    { icon: "roles", title: "User roles", text: "Each role adds screens, permissions and tests." },
    { icon: "frontend", title: "Frontend functionality", text: "Real-time updates, drag-and-drop, offline mode and rich data views." },
    { icon: "backend", title: "Backend architecture", text: "Background processing, multi-tenancy and high availability." },
    { icon: "database", title: "Database requirements", text: "Data volume, reporting needs and migration from existing systems." },
    { icon: "api", title: "Third-party integrations", text: "Each external system adds build, testing and monitoring." },
    { icon: "shield", title: "Security requirements", text: "Sensitive data, single sign-on and audit needs." },
    { icon: "design", title: "UI/UX complexity", text: "Custom design systems and public-facing polish." },
    { icon: "test", title: "Testing", text: "Automated coverage, cross-browser and accessibility testing." },
    { icon: "deploy", title: "Deployment", text: "Environments, CI/CD and infrastructure setup." },
    { icon: "maintenance", title: "Ongoing maintenance", text: "Hosting, monitoring, updates and support for the life of the application." },
  ],
  outro:
    "After a free consultation we provide a clear estimate with milestones, on a fixed-price or time-and-materials basis. We include expected hosting and support costs, so you can compare total cost of ownership rather than the build price alone.",
};

export const FAQS: { q: string; a: string[] }[] = [
  { q: "What is web application development?", a: ["Web application development is the design, build, testing, deployment and maintenance of software that runs in a web browser and lets users complete tasks, such as managing orders, bookings, records or workflows. It covers the front end (the interface), the back end (business logic, security and APIs), the database and the hosting infrastructure."] },
  { q: "What is the difference between a website and a web application?", a: ["A website mainly publishes information for visitors to read. A web application lets users do things: log in, enter and change data, follow workflows and see information specific to them. Many businesses have both: a public website to attract customers, and a web application such as a portal or booking system that customers and staff use once they are engaged."] },
  { q: "How much does web application development cost in the UK?", a: ["Cost depends on complexity, the number of user roles, frontend functionality, backend architecture, data and migration needs, integrations, security, design, testing, deployment and ongoing maintenance. A focused MVP costs far less than an enterprise platform with single sign-on and several integrations. ClickMasters offers fixed-price and time-and-materials models and provides a clear estimate with milestones after a free consultation."] },
  { q: "How long does it take to develop a web application?", a: ["Most MVPs are delivered in 6–8 weeks, and full-scale enterprise applications typically take 3–6 months. The timeline depends on scope, integrations, data migration and how quickly feedback and decisions come back. Weekly demos mean you see working software long before launch."] },
  { q: "Which technologies are used to build web applications?", a: ["We commonly use React and Next.js with TypeScript for the front end; Node.js, Python with Django or Laravel for the back end; PostgreSQL, MySQL or MongoDB for data, with Redis for caching; and AWS, Azure or Google Cloud with Docker and CI/CD pipelines for hosting and delivery. The right combination depends on the application's workload, integrations and who will maintain it."] },
  { q: "Can a web application integrate with existing business software?", a: ["Yes. We build secure API integrations with CRMs, ERPs, payment gateways, accounting tools and legacy software. Where an older system has no API, integration can use its database, file exchange or a middleware layer. Integrations are documented, tested against sandbox environments and monitored so failures raise alerts."] },
  { q: "Are web applications accessible on mobile devices?", a: ["Yes. We design responsive interfaces that adapt to phones, tablets and desktops. Where users need an app-like experience, the application can be built as a Progressive Web App that installs to the home screen and supports offline use. If you need deep device features or an app-store presence, a native or cross-platform mobile app may be the better fit."] },
  { q: "Can you build enterprise web applications?", a: ["Yes. We build enterprise web applications with single sign-on, role-based access, audit trails, reporting and integrations across ERP, CRM and finance systems. These projects typically take 3–6 months and are released in phases, so teams benefit before the full scope is complete."] },
  { q: "How do you secure web applications?", a: ["We follow OWASP guidance and GDPR best practice: secure authentication, server-side authorisation on every request, input validation, encrypted data in transit and at rest, hardened session handling, secret management, dependency patching, backups, regular security testing and monitoring. No supplier can honestly guarantee an application is unbreachable, but these controls address the weaknesses most commonly exploited."] },
  { q: "Can an existing web application be upgraded?", a: ["Yes. We start by auditing the code, dependencies, data and integrations, then recommend whether to upgrade in place, refactor, or rebuild in stages. Staged modernisation replaces screens or modules one at a time behind a shared routing layer, so the application keeps running throughout."] },
  { q: "Do you provide application maintenance?", a: ["Yes. Maintenance includes monitoring, bug fixes, security and dependency updates, browser compatibility, performance tuning and new features, with flexible support plans and 24/7 assistance for critical systems."] },
  { q: "How do I start a web application development project?", a: ["Tell us what the application needs to achieve, who will use it, which systems it must connect to and any deadlines or budget constraints. Rough notes or screenshots of your current process are enough to begin. We will arrange a free consultation, suggest the right approach and follow up with a scoped estimate and milestones. We usually respond within a few hours."] },
];

export const FINAL_CTA = {
  title: "Ready to Replace Workarounds",
  titleAccent: "With a Web Application Built for Your Business?",
  body: {
    text: "Tell us about the operational challenges slowing your team down, the limits of the software you use today, the systems your application must connect to and where the business is heading next. You can [[link]] with our team, and we will come back with a practical recommendation and next steps.",
    link: { anchor: "discuss your web application requirements", href: "/contact" },
  } as LinkedText,
  bring: [
    "Operational challenges",
    "Application requirements and user roles",
    "Limits of current software",
    "Integrations you depend on",
    "Future scale and growth",
  ],
};

export const SCHEMA_SERVICE = {
  name: "Web Application Development",
  serviceType: ["Web application development", "Custom web application development"],
  description:
    "Design, development, integration, security and maintenance of browser-based business applications, including customer portals, dashboards, SaaS platforms, progressive web apps and enterprise web applications.",
  catalogName: "Web application development services",
  catalog: SERVICES.map((s) => s.title),
  relatedServicePath: "/services/custom-software-development",
};
