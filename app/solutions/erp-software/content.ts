/*
 * /solutions/erp-software content, from
 * "ClickMasters ERP Software Solutions: SEO Content Pack" (24 Nov 2026).
 * Edit copy here; page.jsx only renders it.
 *
 * VERIFY comments mark business facts the pack says need owner confirmation.
 */

export const PATH = "/solutions/erp-software";

export const SEO = {
  title: "Custom ERP Software Development UK",
  description:
    "Custom ERP software development for UK businesses: bespoke modules for finance, stock, purchasing and operations, integrated with the systems you use.",
  ogTitle: "Custom ERP Software for UK Businesses | ClickMasters",
  ogDescription:
    "One connected system for finance, inventory, purchasing, sales and HR, built around your processes and integrated with the tools you keep.",
};

export type LinkedText = { text: string; link?: { anchor: string; href: string } };

const IMG = "/assets/Solution/erp";

/** Diagrams from the content pack (public/assets/Solution/erp). Alt text from the pack's image table. */
export const IMAGES = {
  hub: {
    src: `${IMG}/custom-erp-software-modules-hub.png`,
    width: 1080,
    height: 800,
    alt: "ERP hub diagram: a central core and shared database linked to business modules and integrations",
  },
  beforeAfter: {
    src: `${IMG}/disconnected-tools-vs-integrated-erp.png`,
    width: 1720,
    height: 460,
    alt: "Before-and-after diagram: separate tools linked by re-keying vs modules sharing one ERP database",
  },
  flows: {
    src: `${IMG}/erp-order-to-cash-procure-to-pay.png`,
    width: 1720,
    height: 400,
    alt: "Diagram of order-to-cash and procure-to-pay flows passing between ERP modules",
  },
  migration: {
    src: `${IMG}/erp-data-migration-phased-rollout.png`,
    width: 1720,
    height: 380,
    alt: "Diagram of ERP data migration from legacy extract to cut-over, beside a phased module roll-out",
  },
} as const;

export const HERO = {
  eyebrow: "ERP Software Solutions UK",
  title: "Custom ERP Software That Connects",
  titleAccent: "Finance, Stock and Operations",
  lead:
    "ClickMasters designs and builds ERP software UK businesses turn to when they have outgrown spreadsheets and disconnected tools: one ERP system UK finance, stock, purchasing and operations teams can all work from. We start from a configurable ERP foundation covering finance, inventory, HR and operations, then shape the modules, workflows, permissions and integrations around how your business actually runs.",
  audience:
    "For growing SMEs, multi-site operators, wholesalers, manufacturers and service businesses whose finance, stock and operations teams are each working from a different version of the truth.",
  stats: [
    { value: "One database", label: "Every department" },
    { value: "Module by module", label: "Phased roll-out" },
    { value: "SAP · Dynamics · Salesforce", label: "Integration experience" },
    { value: "Role-based", label: "Access and audit trails" },
  ],
};

export const WHAT_IS = {
  p1: "What is an ERP system, and what are ERP software products actually for? **Enterprise resource planning (ERP) software** is a single system that records and connects a business's core operations: money, stock, purchasing, sales, people and production. Each department works in its own part of the system, called a module, but every module reads from and writes to one shared database. When the warehouse dispatches an order, stock falls, the invoice is raised and finance sees the revenue, without anyone re-keying it. Well-known ERP system examples include SAP ERP, Microsoft Dynamics and Oracle Cloud; a custom ERP is built for one business instead.",
  p2: "A **custom ERP** system in UK usage is often called **bespoke ERP**: one designed around a particular business's processes rather than a vendor's standard model. Most businesses do not start with ERP. They grow into a patchwork: an accounting package, a stock spreadsheet, a sales tool, emailed purchase orders and a reporting workbook someone rebuilds every month. Each tool works on its own. The cost appears in the gaps: duplicated data, delays, errors and decisions made on numbers that are already out of date.",
};

export const FIT = {
  custom: [
    "Your processes are a competitive advantage, and packaged ERP would force you to change them",
    "You need a few modules done very well, not a suite of fifty",
    "Per-user licence costs would grow faster than the value as you scale",
    "You depend on integrations, or sector-specific rules, that packaged products handle poorly",
  ],
  packaged: [
    "Your processes are standard for your sector",
    "You need a broad suite (payroll, multi-entity consolidation, many statutory reports) quickly",
    "You have no appetite to own and maintain software",
    "An established product already covers most requirements with light configuration",
  ],
  smallTitle: "ERP Software for Small Business and Growing Teams",
  small:
    "Choosing ERP software small business teams can grow into matters more than buying every module up front. An ERP system for small companies rarely needs every module on day one. Smaller businesses usually start with two or three modules from our configurable foundation, such as finance and inventory, and add others as they grow. If a standard product fits with light configuration, that may be the better first step, and we will say so.",
};

export const PROBLEMS_INTRO =
  "ERP is not the answer to every problem, and not every business needs a custom one. These are the signs that a connected system is likely to help.";

export const PROBLEMS = [
  { icon: "silo", title: "Departments working in silos", text: "Sales promises delivery dates that the warehouse cannot meet, and finance finds out last.", approach: "Shared records with live stock, order status and credit limits visible to every role that needs them." },
  { icon: "duplicate", title: "Manual data entry and duplicated records", text: "The same customer, product or order is typed into three systems, and none of them agree.", approach: "One master record per customer, product and supplier, created once and referenced everywhere." },
  { icon: "stock", title: "No reliable view of stock", text: "Stock-outs on fast movers, overstock on slow ones, and counts that do not match the books.", approach: "Real-time inventory by location, reorder points and stock movements posted automatically to finance." },
  { icon: "purchase", title: "Slow, uncontrolled purchasing", text: "Purchase orders raised by email with no approval trail, and supplier invoices checked by hand.", approach: "Requisition-to-payment workflows with approval limits and automatic matching of order, delivery and invoice." },
  { icon: "calendar", title: "Month-end that takes weeks", text: "Finance rebuilds reports from exports and reconciles figures that should already match.", approach: "Transactions posted to the ledger as they happen, so reports draw on the same data." },
  { icon: "eye", title: "Limited management visibility", text: "Leaders ask for margin by product or customer, and nobody can answer quickly.", approach: "Role-based dashboards built on transactional data, with drill-down to the source document." },
  { icon: "customer", title: "Customer and order records out of step", text: "Account managers cannot see invoices, deliveries or disputes.", approach: "Order and account history linked to the CRM, or a customer module inside the ERP." },
  { icon: "scale", title: "Processes that do not scale", text: "Each new site, product line or team adds people to keep the spreadsheets running.", approach: "Workflows and approvals encoded once, then extended to new sites and entities through configuration." },
];

export const DEVELOP_INTRO: LinkedText = {
  text: "A good ERP reflects how your business works today and leaves room for how it will work in three years. We do not start with a blank page. A configurable foundation covers finance, inventory, HR and operations, and the work goes into the parts that make your business different. If your requirements go well beyond ERP, such as a customer portal or an entirely new operational platform, our [[link]] cover the wider build.",
  link: { anchor: "bespoke software development services", href: "/services/custom-software-development" },
};

export const DEVELOP = [
  { icon: "map", title: "Requirement analysis and process mapping", text: "We map how orders, stock, money and approvals actually flow today, including the workarounds, before deciding what the system should do." },
  { icon: "modules", title: "Module selection", text: "We choose the modules that solve the costliest problems first, and plan the others as later phases." },
  { icon: "database", title: "Data model and database design", text: "Customers, products, suppliers, locations and accounts are modelled once, with the relationships every module depends on." },
  { icon: "roles", title: "Roles and permissions", text: "A permission model by role, site and value: who can raise, approve, post and view what." },
  { icon: "workflow", title: "Custom workflows", text: "Approval chains, pricing rules, allocation logic and alerts that match your policies." },
  { icon: "integration", title: "Integrations, testing and scale", text: "Connections to the systems you keep, automated tests on financial logic, and an architecture that supports more users, sites and entities." },
];

// VERIFY: confirm finance, inventory, HR, operations/workflow and reporting exist as the reusable foundation.
export const MODULES_INTRO =
  "Modules marked Foundation are part of our configurable ERP base. Those marked Built to requirement are developed or extended for your business as needed.";

export type Module = {
  id: string;
  icon: string;
  title: string;
  /** Optional visible H3 wording; `title` stays the catalog name. */
  heading?: string;
  foundation: boolean;
  manages: string;
  problem: string;
  usedBy: string;
  connects: string;
};

export const MODULES: Module[] = [
  // VERIFY: MTD hand-over approach and which accounting packages have been connected.
  { id: "finance-accounting", icon: "finance", title: "Finance and accounting", heading: "Finance ERP system and accounting", foundation: true, manages: "Ledgers, receivables, payables, VAT records, bank reconciliation and management accounts.", problem: "Slow month-end and figures that do not match operational data.", usedBy: "Finance, directors and auditors.", connects: "Every module: sales post revenue, purchasing posts costs, inventory posts stock value, and HR provides cost centres. It can also hand over to your accounting package for Making Tax Digital VAT submissions." },
  { id: "inventory-management", icon: "stock", title: "Inventory management", foundation: true, manages: "Stock levels by location, batches and serial numbers, valuation, reorder points and stock movements.", problem: "Stock-outs, overstock and counts that do not match the books.", usedBy: "Operations, warehouse, purchasing and sales.", connects: "Sales (reservations), purchasing (replenishment), warehouse (movements) and finance (valuation)." },
  { id: "human-resource-management", icon: "hr", title: "Human resource management", foundation: true, manages: "Employee records, roles, departments, leave, and approval hierarchies.", problem: "Staff data in scattered files, and approval chains nobody can see.", usedBy: "HR, line managers and employees through self-service.", connects: "Permissions (who approves what), projects (resourcing) and finance (cost centres). Payroll is usually integrated rather than rebuilt." },
  { id: "operations-workflow", icon: "workflow", title: "Operations and workflow", foundation: true, manages: "Approvals, tasks, notifications and status tracking for operational processes.", problem: "Work that stalls between teams and exceptions nobody notices.", usedBy: "All departments.", connects: "Every module, as the layer that moves work between them." },
  { id: "procurement-purchasing", icon: "purchase", title: "Procurement and purchasing", foundation: false, manages: "Requisitions, purchase orders, supplier records, goods received and invoice matching.", problem: "Unapproved spend and supplier invoices checked by hand.", usedBy: "Purchasing, budget holders and finance.", connects: "Inventory (what to buy), finance (commitments and payables) and warehouse (receipts)." },
  { id: "sales-order-management", icon: "sales", title: "Sales and order management", foundation: false, manages: "Quotes, orders, pricing and discount rules, credit limits, despatch and returns.", problem: "Orders keyed from emails and promises the warehouse cannot keep.", usedBy: "Sales, customer service and operations.", connects: "Inventory (availability), warehouse (fulfilment), finance (invoicing) and CRM or e-commerce (order capture)." },
  { id: "customer-management", icon: "customer", title: "Customer management", foundation: false, manages: "Accounts, contacts, terms, order and invoice history.", problem: "Account teams with no view of deliveries, invoices or disputes.", usedBy: "Sales, service and credit control.", connects: "Sales and finance. Where a CRM such as Salesforce or HubSpot already runs sales, we integrate rather than duplicate it." },
  { id: "warehouse-management", icon: "warehouse", title: "Warehouse management", foundation: false, manages: "Bin locations, picking, packing, barcode scanning, transfers and cycle counts.", problem: "Slow picking, mis-shipments and paper-based stock checks.", usedBy: "Warehouse teams, often on handheld scanners or tablets.", connects: "Inventory (movements), sales (despatch) and purchasing (receipts)." },
  { id: "project-management-job-costing", icon: "project", title: "Project management and job costing", foundation: false, manages: "Projects, budgets, time, materials and costs per job.", problem: "Not knowing whether a job made money until long after it finished.", usedBy: "Project managers, operations and finance.", connects: "HR (time), purchasing and inventory (materials), and finance (billing and profitability)." },
  { id: "manufacturing-management", icon: "factory", title: "Manufacturing management", foundation: false, manages: "Bills of materials, works orders, production planning and batch traceability.", problem: "Production plans that ignore stock and capacity, and gaps in traceability.", usedBy: "Production, planning and quality teams.", connects: "Inventory (components), purchasing (shortages), sales (demand) and finance (cost of goods)." },
  { id: "reporting-analytics", icon: "report", title: "Reporting and analytics", foundation: true, manages: "Dashboards, KPIs and operational and financial reports by role, site and period, with drill-down to source transactions.", problem: "Decisions based on last month's spreadsheet.", usedBy: "Directors, managers and finance.", connects: "All modules. Exports to business intelligence tools can be added where needed." },
];

export const INTEGRATION_INTRO =
  "Few businesses replace everything at once. An ERP usually becomes the operational core, connected to the specialist tools you keep. Integration removes re-keying and keeps records consistent. Automation then moves work between people and systems without chasing.";

export const INTEGRATIONS = {
  headers: ["Integration", "What flows", "Why it matters"],
  rows: [
    ["CRM (for example Salesforce, HubSpot, Microsoft Dynamics)", "Accounts, quotes, won orders, invoice and delivery status", "Sales sees fulfilment; operations sees the pipeline"],
    ["Accounting software", "Journals, invoices, payments, VAT data", "Keep a familiar package for statutory accounts and MTD while the ERP runs operations"],
    ["E-commerce platforms", "Orders, stock levels, prices, despatch updates", "No overselling, and online orders flow straight to fulfilment"],
    ["Payment gateways", "Payments, refunds, settlement data", "Faster cash allocation and reconciliation"],
    ["Warehouse and carrier systems", "Picks, shipments, tracking numbers", "Accurate stock and customer updates"],
    ["Existing enterprise platforms (SAP ERP, Oracle Cloud, ServiceNow, Jira)", "Master data, transactions, service tickets", "Extend or sit alongside a corporate system rather than replace it"],
    ["Reporting and BI tools", "Curated datasets and scheduled exports", "Analysis without loading the operational database"],
  ],
};

export const INTEGRATION_OUTRO: LinkedText = {
  text: "Integrations are built against sandbox environments first, monitored once live and designed to retry safely, so a failed sync raises an alert instead of silently losing an order. For work that needs judgement, such as reading supplier invoices or forecasting demand, our [[link]] can add document processing and predictive models to ERP workflows.",
  link: { anchor: "AI development services", href: "/services/ai-development" },
};

export const ARCH_INTRO: LinkedText = {
  text: "An ERP is used all day by people in different roles, often on different devices and sites. Most modern ERPs are browser-based, so staff need nothing installed and every update reaches everyone at once. The design and performance of those screens is covered by our [[link]] practice.",
  link: { anchor: "web application development", href: "/services/web-application-development" },
};

export const ARCH_LAYERS = [
  {
    icon: "frontend",
    title: "Front end",
    items: [
      ["React, Next.js and TypeScript", "interfaces designed for data-heavy daily work: fast tables, keyboard-friendly forms and bulk actions."],
      ["Responsive layouts,", "so warehouse and field staff can use tablets and phones."],
    ],
  },
  {
    icon: "backend",
    title: "Back end and APIs",
    items: [
      ["Node.js, Python with Django, or Laravel", "services holding the business rules for posting, pricing, allocation and approvals."],
      ["Documented REST APIs", "for integrations, and background jobs for imports, reports and scheduled tasks."],
    ],
  },
  {
    icon: "database",
    title: "Data and infrastructure",
    items: [
      ["PostgreSQL or MySQL", "for transactional integrity, so stock and ledger postings either both happen or neither does. Redis handles caching and queues."],
      ["AWS, Azure or Google Cloud", "hosting in containers, with automated backups and point-in-time recovery."],
    ],
  },
] as const;

export const STACK = [
  { title: "Front end", items: ["React", "Next.js", "TypeScript"] },
  { title: "Back end", items: ["Node.js", "Python & Django", "Laravel"] },
  { title: "Data", items: ["PostgreSQL", "MySQL", "Redis"] },
  { title: "Cloud", items: ["AWS", "Azure", "Google Cloud", "Docker"] },
];

// VERIFY: on-premise deployment is offered (not only private cloud).
export const ARCH_NOTES = [
  { title: "Cloud or on-premise?", text: "Cloud hosting suits most businesses, with no servers to maintain and simple remote access. On-premise or private-cloud deployment suits strict data-location or network requirements." },
  { title: "Performance at scale", text: "Indexing based on real query patterns, separate reporting queries and background processing keep daily screens fast as transactions grow." },
  { title: "Multi-site and multi-entity", text: "Locations, warehouses and legal entities modelled from the start, so expansion is configuration rather than redevelopment." },
];

// VERIFY: SSO, MFA and segregation-of-duties rules are delivered capabilities.
export const SECURITY_INTRO =
  "An ERP holds your most sensitive operational and financial data, so access control and traceability are designed in from the first sprint. We follow OWASP standards and GDPR best practice, and can sign an NDA before you share details.";

export const SECURITY = [
  { icon: "roles", title: "Role-based access control", text: "Permissions by role, department, site and value, such as who may approve a purchase order above a set amount." },
  { icon: "split", title: "Segregation of duties", text: "The same person cannot create a supplier and approve its payment, unless your policy allows it." },
  { icon: "key", title: "Authentication", text: "Secure sign-in, multi-factor authentication and single sign-on with your identity provider where required." },
  { icon: "audit", title: "Audit logs", text: "Who changed which record, when and from what value, so finance and auditors can trace any figure." },
  { icon: "check", title: "Data validation", text: "Server-side checks and database constraints that stop invalid postings at the source." },
  { icon: "integration", title: "Secure APIs and integrations", text: "Authenticated, encrypted connections with credentials held in a secrets manager." },
  { icon: "lock", title: "Encryption", text: "Data encrypted in transit and at rest, including backups." },
  { icon: "backup", title: "Backup and recovery", text: "Automated backups with tested restores and point-in-time recovery." },
  { icon: "privacy", title: "Data protection", text: "UK GDPR-aware handling of employee and customer data, with retention rules and access limited by role." },
];

export const PROCESS_INTRO =
  "ERP projects succeed or fail on process understanding, data quality and adoption as much as on code. We deliver in phases, module by module, in two-week sprints with weekly demos. The timeline depends on modules, integrations and data. We agree it after discovery, and larger enterprise builds typically take 3–6 months.";

export const PROCESS = [
  { title: "Business discovery", text: "Goals, pain points and the cost of the current way of working.", expect: "Workshops with each department." },
  { title: "Requirement gathering", text: "What each role needs to do, see and approve.", expect: "A prioritised requirements list." },
  { title: "Process analysis", text: "Current and future process maps, including which workarounds to remove.", expect: "Agreed future-state processes." },
  { title: "Solution architecture", text: "Data model, permissions, hosting and integration design.", expect: "An architecture document and estimate." },
  { title: "ERP module planning", text: "Phase order based on value and dependencies.", expect: "A phased roadmap." },
  { title: "Development and configuration", text: "Foundation configuration plus custom workflows and modules.", expect: "Weekly demos in a test environment." },
  { title: "Data migration planning", text: "Extract, cleanse, map and trial-load master data and opening balances.", expect: "Reconciliation reports you sign off." },
  { title: "Integration development", text: "Connections to CRM, accounting, e-commerce and other systems.", expect: "Tested, monitored integrations." },
  { title: "Testing and quality assurance", text: "Functional, integration and permission testing, plus user acceptance testing with real scenarios.", expect: "UAT sign-off per module." },
  { title: "Deployment", text: "Cut-over plan, final data load and, where needed, a period of parallel running.", expect: "Go-live with support on hand." },
  { title: "Training and support", text: "Role-based training, a named internal champion for each module, guides, then monitoring, fixes and improvements. Adoption is planned, not assumed.", expect: "A support plan, with 24/7 assistance available for critical systems." },
];

export const INDUSTRIES_INTRO =
  "ERP needs differ widely by sector. These are potential use cases for custom ERP, showing typical requirements, not descriptions of completed ClickMasters projects.";

export const INDUSTRIES = [
  { icon: "truck", title: "Wholesale and distribution", text: "Multi-warehouse stock, customer-specific pricing, credit control and fast order-to-despatch.", considerations: ["Pricing rules", "Live availability across locations"] },
  { icon: "factory", title: "Production ERP software for manufacturing", text: "Bills of materials, works orders, capacity planning and batch traceability: an ERP system manufacturing teams can plan production from.", considerations: ["Production linked to stock and purchasing in real time"] },
  { icon: "sales", title: "Retail and e-commerce", text: "Stock synced across shops, marketplaces and the website, with returns and replenishment.", considerations: ["Channel integrations that prevent overselling"] },
  { icon: "route", title: "Logistics and transport", text: "Jobs, vehicles, drivers, costs per shipment and customer billing.", considerations: ["Tracking and dispatch integration"] },
  { icon: "construction", title: "ERP software for construction industry firms and trades", text: "Job costing, materials, subcontractors, timesheets and stage billing, the core of the construction ERP software UK contractors and trades tend to ask for.", considerations: ["Profitability per project, updated as costs arrive"] },
  { icon: "briefcase", title: "Professional services", text: "Time, resources, projects and billing, combined with finance.", considerations: ["Utilisation and margin by client and engagement"] },
  { icon: "health", title: "Healthcare administration", text: "Procurement, stock of consumables, rotas and back-office finance.", considerations: ["Strict access control for staff and patient-related data"] },
  { icon: "education", title: "Education and training", text: "Course costs, resources, staffing and finance for training providers.", considerations: ["Integration with learning management systems"] },
];

export const INDUSTRIES_OUTRO: LinkedText = {
  text: "ERP is one of several ready-to-customise systems in our wider range of [[link]], alongside CRM, inventory, learning management, SaaS and fleet platforms.",
  link: { anchor: "business software and AI solutions", href: "/solutions" },
};

export const COMPARISON_INTRO =
  "Packaged ERP products are sold by software vendors and usually installed by implementation partners. A custom or tailored ERP is built, or adapted from a foundation, around your processes. Both are valid choices. The right one depends on how standard your processes are and how long you will run the system.";

export const COMPARISON = {
  headers: ["Factor", "Custom or tailored ERP", "Ready-made ERP product"],
  rows: [
    ["Customisation", "Built around your processes and rules", "Configuration within the product's options; deeper changes add cost and complicate upgrades"],
    ["Implementation", "Phased by module, starting with your biggest problem", "Often faster for standard processes; a large scope can still take a long time"],
    ["Ownership and control", "You control the roadmap and data, subject to your contract terms", "The vendor controls features, pricing and release schedule"],
    ["Integrations", "Any system with an API or database, including legacy software", "Strong with its own ecosystem and popular connectors"],
    ["Scalability", "Designed for your expected users, sites and entities", "Proven at scale; costs often rise per user or module"],
    ["Maintenance", "Your responsibility, usually under a support agreement", "Vendor updates included in the subscription"],
    ["Upfront investment", "Higher development cost at the start", "Lower at the start; licence and partner fees continue"],
    ["Long-term requirements", "Evolves as your processes change", "Evolves with the vendor's product"],
  ],
};

// VERIFY: the team builds extensions around SAP and Dynamics, not only integrations.
export const HYBRID =
  "**A third option** is to keep an existing ERP such as SAP or Microsoft Dynamics for core finance, and build custom modules, portals or integrations around it for the processes it handles poorly.";

export const COST_INTRO =
  "ERP cost depends almost entirely on scope, so an honest estimate needs discovery first. We offer fixed-price and time-and-materials engagements, provide an estimate with milestones after a free consultation, and phase delivery so investment follows value.";

export const COST = [
  { icon: "modules", title: "Number of modules", text: "Each module adds data, screens, rules and tests." },
  { icon: "roles", title: "User count and roles", text: "More roles mean a more detailed permission model and more training." },
  { icon: "complex", title: "Business complexity", text: "Multi-site, multi-entity, multi-currency and complex pricing." },
  { icon: "integration", title: "Integrations", text: "Each connected system adds build, testing and monitoring." },
  { icon: "migrate", title: "Data migration", text: "Volume and quality of legacy data, plus reconciliation effort." },
  { icon: "workflow", title: "Custom workflows", text: "Approval chains, allocation rules and exceptions." },
  { icon: "shield", title: "Security requirements", text: "Single sign-on, segregation of duties and audit needs." },
  { icon: "report", title: "Reporting", text: "Number and complexity of dashboards and statutory reports." },
  { icon: "cloud", title: "Hosting and infrastructure", text: "Cloud or private hosting, environments and resilience." },
  { icon: "tools", title: "Ongoing maintenance", text: "Support, updates, monitoring and new features after go-live." },
];

export const WHY = [
  { icon: "modules", title: "A foundation, not a blank page", text: "Our configurable ERP base for finance, inventory, HR and operations means the effort goes into what is specific to your business." },
  { icon: "map", title: "Process-first discovery", text: "We map how work really flows, workarounds included, before deciding what the system should do." },
  { icon: "integration", title: "Integration experience", text: "We have built integrations with Salesforce, SAP ERP, ServiceNow, HubSpot, Microsoft Dynamics, Oracle Cloud and Jira, plus payment gateways, accounting tools and legacy software." },
  { icon: "ai", title: "Software and AI in one team", text: "Web, mobile, cloud and AI skills alongside ERP, so warehouse apps, customer portals or invoice automation can be added later without changing supplier." },
  { icon: "shield", title: "Security built in", text: "OWASP standards, GDPR best practice, encryption, role-based access and regular security testing." },
  { icon: "loop", title: "Phased, transparent delivery", text: "Module-by-module releases, weekly demos and fixed-price or time-and-materials options." },
];

export const FAQS = [
  { q: "What is an ERP system?", a: ["An ERP (enterprise resource planning) system is a single piece of software that manages and connects core business operations, such as finance, inventory, purchasing, sales, HR and production, using one shared database. Each department works in its own module, and transactions in one module update the others automatically."] },
  { q: "What does a custom ERP system do differently?", a: ["A custom ERP is designed around your processes, rules and integrations rather than a vendor's standard model. You get the modules you need, workflows that match your approval policies, and connections to the systems you keep, without paying for features you will never use. ClickMasters builds custom ERP from a configurable foundation, so common functions are not rebuilt from scratch."] },
  { q: "How much does custom ERP software development cost in the UK?", a: ["Cost depends on the number of modules, users and roles, business complexity, integrations, data migration, custom workflows, security, reporting, hosting and ongoing support. A focused first phase, such as finance plus inventory, costs far less than a multi-entity system with many integrations. We provide a fixed-price or time-and-materials estimate with milestones after a free consultation."] },
  { q: "How long does ERP development take?", a: ["It depends on scope. We deliver module by module, so the first phase can be in use well before the whole system is complete. Larger enterprise builds typically take 3–6 months, and the timeline is agreed after discovery once modules, integrations and data migration are understood."] },
  { q: "What modules can an ERP system include?", a: ["Common modules include finance and accounting, inventory, procurement and purchasing, sales and order management, customer management, HR, warehouse management, project management and job costing, manufacturing, and reporting and analytics. Most businesses start with a few and add others in later phases."] },
  { q: "Can ERP software integrate with our existing systems?", a: ["Yes. We integrate ERP with CRMs, accounting packages, e-commerce platforms, payment gateways, warehouse systems and enterprise platforms such as SAP ERP, Microsoft Dynamics, Salesforce, HubSpot, ServiceNow, Oracle Cloud and Jira. Legacy systems without an API can be connected through their database, file exchange or middleware."] },
  { q: "ERP system vs CRM: what is the difference?", a: ["A CRM manages relationships before and around the sale: leads, contacts, opportunities and service. An ERP manages the operational and financial side: orders, stock, purchasing, production, invoicing and accounts. Many businesses run both and integrate them, so won deals become ERP orders and account managers can see invoices and deliveries."] },
  { q: "Is a custom ERP system for small business a sensible choice?", a: ["It can be, when the business has outgrown spreadsheets and its processes do not fit packaged products well. Smaller businesses usually start with two or three modules from a configurable foundation and expand later. If a standard product fits with light configuration, that may be the better first step, and we will say so."] },
  { q: "Can an ERP system in construction, manufacturing or wholesale be tailored to the industry?", a: ["Yes. Industry requirements, such as batch traceability in manufacturing, customer-specific pricing in wholesale or job costing in construction, are where custom ERP adds most value, because generic products often handle them through workarounds."] },
  { q: "What should a business consider before the implementation of an ERP system?", a: ["Be clear about the problems you are solving and how you will measure success. Map current processes honestly, decide which systems stay and which go, assess the quality of the data you will migrate, name an internal owner for each module, and plan time for training. Weak data and unclear ownership cause more ERP problems than technology does."] },
  { q: "Is a cloud ERP system different from on-premise ERP?", a: ["Cloud ERP runs on hosted infrastructure, such as AWS, Azure or Google Cloud, and is accessed through a browser, with no servers for you to maintain. On-premise ERP runs on your own servers, which some organisations need for data-location or network reasons. The software can be the same. What changes is who manages the infrastructure, updates and backups."] },
  { q: "How is data migrated into a new ERP system?", a: ["Data is extracted from existing systems, cleansed (de-duplicated and corrected), mapped to the new structure and trial-loaded several times. Each trial is reconciled against the source, for example stock values and customer balances, until the figures match. The final load happens at cut-over, sometimes followed by a short period of parallel running."] },
  { q: "What should ERP software for production and manufacturing handle?", a: ["ERP software manufacturing businesses rely on usually needs bills of materials, works orders, production planning and batch traceability, linked in real time to stock, purchasing and sales demand. In our ERP, manufacturing management is built to requirement rather than part of the standard foundation, so it is shaped around how you plan and track production, and costs flow through to finance."] },
];

export const FINAL_CTA = {
  title: "Let's Map Your Processes",
  titleAccent: "Before Anyone Writes a Line of Code",
  body: {
    text: "Tell us how orders, stock, purchasing and money move through your business today, where it breaks down and which systems you rely on. We will help you decide whether a tailored ERP, an extension to your current system or a packaged product is the right approach, and what a sensible first phase would look like.",
  } as LinkedText,
  bring: ["Processes that cause the most delay", "Systems you use today", "Modules you need first", "Users, sites and entities", "Data you will migrate"],
};

export const SCHEMA_SERVICE = {
  name: "Custom ERP Software Development",
  alternateName: "Bespoke ERP Software",
  serviceType: ["ERP software development", "ERP implementation", "ERP integration"],
  description:
    "Design, development, integration and implementation of custom ERP systems covering finance, inventory, purchasing, sales, HR, warehouse and reporting, built from a configurable foundation.",
  catalogName: "ERP modules",
  catalog: MODULES.map((m) => m.title),
  relatedServicePath: "/services/custom-software-development",
};
