/*
 * /services/erp-crm-development content, from
 * "ClickMasters ERP and CRM Development Services: SEO Content Pack"
 * (26 Nov 2026). Edit copy here; ./page.jsx only renders it.
 *
 * Positioning: the combined ERP + CRM development, customisation,
 * integration, migration and support service. /solutions/erp-software and
 * /solutions/crm-software keep "custom ERP software" and "custom CRM
 * software"; this page links to them instead of competing.
 *
 * Body links: exactly the pack's four (custom ERP software, custom CRM
 * software, AI automation services, custom software development).
 *
 * VERIFY (owner): confirm whether a free prototype or paid discovery phase is
 * offered, and whether Express.js should be named. Platforms such as
 * Microsoft Dynamics, Salesforce and HubSpot are named only as examples of
 * systems to connect to — no partnership or certification is claimed.
 */

export const PATH = "/services/erp-crm-development";

export const SEO = {
  // Rendered as "ERP and CRM Development Services UK | ClickMasters" (50 chars).
  title: "ERP and CRM Development Services UK",
  // The pack's description, trimmed to 155 characters.
  description:
    "ERP and CRM development for UK businesses: bespoke systems, modules for existing platforms and integrations connecting sales, finance and operations data.",
  ogTitle: "ERP and CRM Development Services UK | ClickMasters",
  ogDescription:
    "Bespoke ERP and CRM systems, modules for platforms you already use, and integrations that keep sales, finance and operations working from the same data.",
};

export type LinkedText = { text: string; link?: { anchor: string; href: string } };

const IMG = "/assets/Services/erp-crm";

/**
 * Diagrams drawn for this page (alt text from the pack's image table) and HD
 * photos from Unsplash (Unsplash License: free for commercial use, no
 * attribution required; source IDs kept below).
 */
export const IMAGES = {
  quoteToCash: {
    src: `${IMG}/erp-crm-connected-quote-to-cash.webp`, width: 2160, height: 1640,
    alt: "Connected ERP and CRM: a won deal becomes an order, delivery and invoice, with status sent back",
  },
  routes: {
    src: `${IMG}/erp-crm-build-extend-integrate.webp`, width: 2400, height: 781,
    alt: "Decision guide: integrate existing systems, extend a packaged platform or build a bespoke ERP or CRM",
  },
  ownership: {
    src: `${IMG}/erp-crm-system-of-record.webp`, width: 2400, height: 893,
    alt: "Which data the CRM and ERP each own and share: accounts, products, prices, orders and invoices",
  },
  reliability: {
    src: `${IMG}/erp-crm-integration-reliability.webp`, width: 2400, height: 837,
    alt: "Integration layer with validation, safe retries, logging, an error queue and reconciliation",
  },
  process: {
    src: `${IMG}/erp-crm-development-process.webp`, width: 2400, height: 781,
    alt: "Ten-stage ERP and CRM development process from discovery to data migration, launch and support",
  },
  architecture: {
    src: `${IMG}/erp-crm-architecture-layers.webp`, width: 2400, height: 949,
    alt: "ERP and CRM architecture: interface, application layer, database, integration layer and workers",
  },
  // Photo: Unsplash (images.unsplash.com/photo-1586528116311-ad8dd3c8310d)
  warehouse: {
    src: `${IMG}/erp-warehouse-operations.webp`, width: 1600, height: 1067,
    alt: "A large warehouse with racking, yellow storage bins and parcels ready for despatch",
  },
  // Photo: Unsplash (images.unsplash.com/photo-1600880292203-757bb62b4baf)
  sales: {
    src: `${IMG}/crm-sales-team-success.webp`, width: 1600, height: 1067,
    alt: "Two colleagues at a desk with a laptop giving each other a high five",
  },
  // Photo: Unsplash (images.unsplash.com/photo-1552664730-d307ca884978)
  workshop: {
    src: `${IMG}/erp-crm-process-mapping-workshop.webp`, width: 1600, height: 1067,
    alt: "A team mapping a process with sticky notes on a whiteboard during a workshop",
  },
  // Photo: Unsplash (images.unsplash.com/photo-1563986768609-322da13575f3)
  devices: {
    src: `${IMG}/erp-crm-connected-devices.webp`, width: 1600, height: 1067,
    alt: "A person using a laptop and a smartphone together at a desk",
  },
} as const;

export const HERO = {
  eyebrow: "ERP & CRM Development",
  title: "ERP and CRM Development Services",
  titleAccent: "for UK Businesses",
  lead:
    "When sales works in one system, finance in another and operations in a spreadsheet, the same customer, order and price get typed in three times, and nobody quite trusts the figures. ClickMasters designs, builds and connects ERP and CRM software around the way your organisation actually works: bespoke systems where packaged software does not fit, modules and extensions for platforms you already use, and integrations that let a won deal become an order, a delivery and an invoice without anyone re-keying it.",
  audience:
    "We work with UK businesses from process mapping and data migration through development, integration and testing to launch and ongoing support, so the system keeps pace as your business changes.",
  stats: [
    { value: "Build, extend or integrate", label: "The route that fits, not the biggest project" },
    { value: "One version of the truth", label: "Each type of data has an owning system" },
    { value: "Safe data migration", label: "Cleansed, reconciled, signed off" },
    { value: "Supported after launch", label: "Changes and new modules as you grow" },
  ],
};

export const PROBLEMS = {
  intro:
    "Most organisations do not set out to run on disconnected software. It happens gradually: an accounting package, then a CRM, then an e-commerce platform, then spreadsheets to fill the gaps between them. Eventually the gaps cost more than the systems.",
  symptomsTitle: "The symptoms of disconnected systems",
  symptoms: [
    ["Disconnected tools:", "customer details, orders, stock and invoices live in separate systems that do not talk to each other."],
    ["Repetitive data entry:", "the same order is typed into the CRM, the order system and the accounts, and each copy is a chance for an error."],
    ["Scattered customer information:", "a salesperson cannot see whether an invoice is overdue; finance cannot see what was promised in the deal."],
    ["Manual administrative work:", "approvals chased by email, purchase orders raised from spreadsheets, month-end reports assembled by hand."],
    ["Limited reporting:", "management figures arrive late, and different departments quote different numbers for the same thing."],
    ["Inefficient workflows:", "processes bend to fit the software rather than the other way round."],
    ["Integration challenges:", "off-the-shelf connectors cover the basics but break on your pricing rules, product structure or approval steps."],
    ["Difficulty scaling:", "a new site, product line, currency or team exposes the limits of tools chosen when the business was smaller."],
  ] as [string, string][],
  outro:
    "Custom ERP and CRM development addresses these problems by giving each type of information one reliable home, connecting the systems that need to share it, and building workflows that match how your teams work.",
  routesTitle: "Build, extend or integrate? Choosing the right route",
  routesIntro: "There is more than one way to fix disconnected systems, and the right answer depends on what you already have:",
  routes: [
    ["Your existing ERP or CRM works well, but the two do not share data", "Integrate them: connect the systems you have with a reliable integration layer"],
    ["A packaged platform covers most needs but handles a few key processes badly", "Extend it: build custom modules, portals or workflows around the platform"],
    ["Your processes are distinctive, packaged products need heavy workarounds, or licence costs no longer make sense", "Build a bespoke ERP, CRM or both, designed around your processes"],
    ["You are on spreadsheets and early-stage tools", "Start with the smallest system that removes the most re-keying, designed to grow"],
  ],
  routesOutro: "We assess this with you in discovery. Sometimes the best recommendation is a well-built integration rather than a new system.",
};

export const DIFFERENCE = {
  intro: "ERP and CRM are often discussed together, but they do different jobs. Getting the boundary right is what makes them work as one.",
  erpTitle: "What ERP does",
  erp: "**Enterprise resource planning (ERP) software** runs the internal operations of a business through connected modules that share one database: finance and accounting, inventory, purchasing, order management, warehousing, projects, HR and reporting. Its value is operational visibility. When stock, orders, costs and invoices sit in one system, departments stop working from different numbers, and managers can see the effect of a decision across the business.",
  crmTitle: "What CRM does",
  crm: "**Customer relationship management (CRM) software** manages everything that happens with customers and prospects: leads, contacts, accounts, opportunities, pipeline stages, communication history, follow-ups and support cases. Its value is organisation and consistency in how a business finds, wins and keeps customers. Everyone who speaks to a customer sees the same history, and no lead or follow-up depends on someone's memory.",
  ownerTitle: "Which system owns which data",
  ownerIntro: "The most common cause of integration problems is two systems both believing they own the same record. We agree a clear **system of record** for each type of data at the start of every project:",
  ownerRows: [
    ["Leads, contacts, opportunities, activities", "CRM", "ERP receives the account when a deal is won", "Sales owns the relationship before there is an order"],
    ["Customer account, billing details, credit limit, payment terms", "ERP", "CRM shows them read-only", "Finance controls credit and invoicing"],
    ["Products, price lists, stock levels", "ERP", "CRM reads them for quotes", "Quotes must use current prices and real availability"],
    ["Sales orders, deliveries, invoices, payments", "ERP", "CRM shows status on the customer record", "Sales can answer \"where is my order?\" without asking operations"],
    ["Support cases and customer communications", "CRM", "ERP may receive returns or credit requests", "Service teams work in the CRM"],
  ],
  ownerOutro: "The exact split varies by business. What matters is that it is decided deliberately and enforced by the integration.",
};

// Body link 1 of 4.
export const ERP_INTRO: LinkedText = {
  text: "Our ERP services cover the full lifecycle, from a new system to modules for a platform you already run. For a detailed look at the modules and business outcomes of a bespoke system, see our [[link]] solution.",
  link: { anchor: "custom ERP software", href: "/solutions/erp-software" },
};

export const ERP_SERVICES = [
  { icon: "build", title: "Custom ERP software development", involves: "Designing and building an ERP system around your operations, usually starting with the modules that remove the most manual work and adding others in phases.", problem: "Packaged ERP that needs so many workarounds and spreadsheets that it no longer provides one version of the truth.", functionality: "Shared customer, product and supplier records; orders; stock; purchasing; invoicing; approvals; reporting.", when: "Your processes are a source of competitive advantage, or licensing and customisation costs for a packaged product have outgrown the value it delivers." },
  { icon: "module", title: "ERP module development", involves: "Adding a specific module, such as production planning, job costing, rental management, field service or a customer portal, to an existing ERP or bespoke system.", problem: "A core system that handles finance well but has no good answer for one critical process.", functionality: "Module screens, rules and reports that read and write the core system's data rather than creating a separate silo.", when: "One process is still run on spreadsheets beside an otherwise adequate ERP." },
  { icon: "plug", title: "ERP system integration", involves: "Connecting the ERP to the CRM, e-commerce, warehouse, payroll, banking and reporting systems around it.", problem: "Orders, stock and invoices re-keyed between systems, with errors and delays at each hand-off.", functionality: "APIs, scheduled synchronisation, field mapping, validation, error queues and reconciliation reports.", when: "The systems are individually fine but the business runs on copying data between them." },
  { icon: "flow", title: "ERP workflow automation", involves: "Turning manual, email-driven steps into system workflows with rules, approvals and notifications.", problem: "Purchase approvals chased by email, credit checks done by memory, month-end tasks dependent on one person.", functionality: "Approval chains by value and department, automatic reorder suggestions, scheduled reports, exception alerts.", when: "The same sequence of steps happens many times a week and depends on someone remembering it." },
  { icon: "migrate", title: "ERP data migration", involves: "Moving customers, suppliers, products, open orders, stock balances and financial history from old systems into the new one.", problem: "A new system that starts with duplicated, incomplete or wrong data and loses users' trust in its first week.", functionality: "Data profiling, cleansing, deduplication, field mapping, trial migrations, reconciliation reports and a planned cut-over.", when: "Any replacement or consolidation of an existing system." },
  { icon: "dashboard", title: "ERP dashboards and reporting", involves: "Operational dashboards and management reports built on live ERP data.", problem: "Figures assembled by hand in spreadsheets, arriving late and disagreeing with each other.", functionality: "Role-specific dashboards (stock, orders, cash, margins), drill-down from totals to transactions, scheduled reports, data exports.", when: "Managers spend days each month producing reports the system should provide." },
  { icon: "modernise", title: "ERP modernisation and customisation", involves: "Replacing or re-platforming an ageing ERP, often in stages, or reshaping an existing system to fit changed processes.", problem: "Legacy software that is slow, hard to change, unsupported or available only on-site.", functionality: "A modern web interface, new APIs around old data, phased module-by-module replacement.", when: "The system still holds essential data but changing it has become risky or expensive." },
  { icon: "support", title: "ERP maintenance and support", involves: "Monitoring, fixes, security updates, small changes and new features after launch.", problem: "Systems that degrade without attention as processes, regulations and connected software change.", functionality: "Agreed response times, release management, backups and recovery testing, a backlog of improvements.", when: "From launch onwards. An ERP is part of daily operations and needs ongoing care." },
];

// Body link 2 of 4.
export const CRM_INTRO: LinkedText = {
  text: "Our CRM services focus on how your team finds, wins and looks after customers. For a closer look at what a bespoke CRM can include, see our [[link]] solution.",
  link: { anchor: "custom CRM software", href: "/solutions/crm-software" },
};

export const CRM_SERVICES: { icon: string; title: string; text: LinkedText; value: string }[] = [
  { icon: "contacts", title: "Custom CRM development", text: { text: "A CRM designed around your sales and service process rather than a generic template: your stages, your qualification criteria, your account structure and your terminology." }, value: "Salespeople use a system that matches how they sell, so the data in it is complete enough to rely on." },
  { icon: "settings", title: "CRM software customisation", text: { text: "Configuration and custom development on top of an existing CRM, for example new objects, fields, screens, rules or portal pages, where the platform is right but the out-of-the-box set-up is not." }, value: "You keep the platform your team knows while closing the gaps that send people back to spreadsheets." },
  { icon: "pipeline", title: "CRM pipeline management", text: { text: "Pipelines with stages, entry and exit criteria, probabilities and required information that reflect how deals really progress, including separate pipelines for different products or channels where needed." }, value: "A forecast based on evidence, and visibility of where deals stall." },
  { icon: "user", title: "Lead and contact management", text: { text: "Capture from web forms, email, events and imports; deduplication; enrichment; assignment rules by territory, product or capacity; and complete contact and account hierarchies." }, value: "No lead is lost or contacted twice, and every enquiry reaches the right person quickly." },
  // Body link 3 of 4.
  { icon: "flow", title: "Sales workflow automation", text: { text: "Automatic tasks, reminders, follow-up sequences, quote generation and approval steps triggered by stage changes or inactivity. Where workflows need to read documents, classify messages or draft replies, our [[link]] add those steps with human review.", link: { anchor: "AI automation services", href: "/services/ai-automation" } }, value: "Consistent follow-up without relying on memory, and more selling time." },
  { icon: "plug", title: "CRM integration", text: { text: "Connecting the CRM to email and calendars, telephony, website forms, marketing tools, e-commerce, support desks and, most importantly, the ERP or accounts system." }, value: "A complete customer record, with activity, orders and invoices visible in one place." },
  { icon: "migrate", title: "CRM data migration", text: { text: "Moving contacts, accounts, deals, activities and attachments from spreadsheets or another CRM, with deduplication, ownership mapping and validation." }, value: "The new CRM opens with clean, trusted data and full history, which is critical for adoption." },
  { icon: "chart", title: "Customer reporting and analytics", text: { text: "Reports on pipeline health, conversion between stages, win rates, sales cycle length, activity, customer value and retention." }, value: "Managers coach and plan from facts, and the business understands which customers and channels are most valuable." },
  { icon: "dashboard", title: "CRM dashboard development", text: { text: "Role-based dashboards for salespeople (my tasks, my pipeline), managers (team performance, forecast) and directors (revenue, retention)." }, value: "Each person sees what they need to act on today, without building reports." },
  { icon: "support", title: "CRM maintenance and support", text: { text: "Fixes, user support, new fields and processes, integration monitoring and periodic data-quality clean-ups." }, value: "The CRM keeps matching how the team sells as products, markets and people change." },
];

export const INTEGRATION = {
  intro: "Integration is where most of the value of a connected ERP and CRM comes from, and where most projects run into trouble. We treat it as engineering, not configuration.",
  flowTitle: "How a connected quote-to-cash process works",
  flow: [
    ["Lead to opportunity (CRM):", "an enquiry is captured, qualified and worked as a deal."],
    ["Quote (CRM, using ERP data):", "the salesperson builds a quote with current prices, discounts and stock availability read from the ERP."],
    ["Won deal to sales order (CRM → ERP):", "when the deal is marked won, the customer account and order are created in the ERP automatically, after validation of credit limit, VAT details and mandatory fields."],
    ["Fulfilment (ERP):", "stock is reserved, picked and despatched; purchasing is triggered if stock is short."],
    ["Invoice and payment (ERP):", "the invoice is raised and payment recorded."],
    ["Status back to sales (ERP → CRM):", "order, delivery, invoice and payment status appear on the customer record, so account managers can answer questions and spot overdue accounts before their next call."],
  ] as [string, string][],
  flowOutro: "The same approach applies to returns, credit notes, renewals and repeat orders. The result is **no duplicate data entry**, one customer record across departments and a clear audit trail from enquiry to cash.",
  systemsTitle: "Systems we connect ERP and CRM to",
  systemsIntro: "Depending on what you use and what their interfaces allow, we connect ERP and CRM systems with:",
  systems: [
    ["Accounting software:", "ledgers, invoices, payments and VAT."],
    ["E-commerce platforms:", "orders, customers, products and stock levels."],
    ["Payment gateways:", "payment status, refunds and reconciliation."],
    ["Inventory and warehouse systems:", "stock, picking, despatch and goods received."],
    ["HR and payroll systems:", "employees, departments, time and expenses."],
    ["Websites and web applications:", "enquiry forms, customer portals and self-service."],
    ["Email and marketing platforms:", "contacts, consent, campaigns and engagement."],
    ["Third-party APIs:", "carriers, credit checks, address lookup and industry services."],
    ["Reporting and analytics tools:", "data warehouses and business intelligence dashboards."],
  ] as [string, string][],
  systemsNote: "Packaged platforms such as Microsoft Dynamics, Salesforce and HubSpot are examples of systems a custom module or integration might connect to. We do not claim vendor partnerships or platform certifications; the feasibility of each integration depends on the platform's APIs and your licence, and is confirmed during discovery.",
  reliableTitle: "How we keep integrations reliable",
  reliable: [
    ["Clear integration architecture:", "direct API calls where real-time accuracy matters (stock checks, credit limits), event-driven updates through webhooks or a message queue where volume is high, and scheduled batch synchronisation where timing is less critical."],
    ["Data validation at the boundary:", "every record is checked for required fields, formats and business rules before it is written to the other system."],
    ["Safe retries:", "failed calls are retried with increasing delays, and updates are designed so a repeated message does not create a duplicate order or invoice (idempotency)."],
    ["Error queues, not silent failures:", "records that cannot be processed are held in a queue with the reason, and the right person is alerted."],
    ["Reconciliation reports:", "regular checks confirm that totals and record counts match between systems."],
    ["Permission management:", "integrations use dedicated service accounts with only the access they need, and every change they make is logged."],
  ] as [string, string][],
};

export const FEATURES = {
  intro: "Feature lists are easy to write. What matters is what each feature does for the business.",
  erpTitle: "ERP features and why they matter",
  erp: [
    ["Centralised business data:", "customers, products, suppliers and transactions held once, so every department works from the same figures."],
    ["Role-based access control:", "each person sees and changes only what their role requires, protecting sensitive financial and HR data and reducing mistakes."],
    ["Finance and accounting workflows:", "invoices, credit control, purchase ledger and period-end steps built into the system, reducing manual reconciliation."],
    ["Inventory and procurement:", "real-time stock across locations, reorder points and purchase orders matched to deliveries and invoices, so stock-outs and overpayments are caught early."],
    ["Operational dashboards:", "live views of orders, stock, production or projects, so problems are visible the day they occur."],
    ["Reporting and analytics:", "consistent management reporting with drill-down to individual transactions, so figures can be trusted and explained."],
    ["Approval workflows:", "spending, discounts and exceptions routed to the right approver by rule, with a record of who approved what."],
    ["Multi-department management:", "sales, operations, purchasing, finance and HR working in one system with shared processes, removing the hand-offs where work gets lost."],
  ] as [string, string][],
  crmTitle: "CRM features and why they matter",
  crm: [
    ["Customer and contact records:", "a complete profile for every customer and contact, so anyone can pick up a relationship where a colleague left it."],
    ["Lead tracking:", "every enquiry logged with its source and status, so marketing spend can be judged on results."],
    ["Sales pipeline:", "deals moving through defined stages, giving reliable forecasts and showing where deals stall."],
    ["Task management:", "next steps assigned with due dates, so promises to customers are kept."],
    ["Communication history:", "emails, calls, meetings and notes on the customer record, so nobody asks a customer to repeat themselves."],
    ["Automated follow-ups:", "reminders and sequences triggered by events or inactivity, so no lead goes cold through oversight."],
    ["Sales dashboards:", "each salesperson and manager sees their priorities and performance at a glance."],
    ["Customer activity reporting:", "engagement, purchasing and support patterns that highlight upsell opportunities and accounts at risk."],
  ] as [string, string][],
};

export const INDUSTRIES_NOTE =
  "The examples below show typical workflows in each sector. They describe common needs and suitable system designs; they are not claims of completed ClickMasters projects in these industries.";

export const INDUSTRIES = [
  { icon: "factory", title: "Manufacturing", text: "Bills of materials, production orders and works-in-progress in the ERP, linked to CRM quotes so salespeople can promise realistic lead times. Material shortages trigger purchase orders, and finished goods flow into despatch and invoicing." },
  { icon: "box", title: "Wholesale and distribution", text: "Customer-specific price lists and credit limits held in the ERP and visible in the CRM at quote stage. Orders from sales reps, the trade portal and EDI land in one order book with stock reserved across warehouses." },
  { icon: "cart", title: "Retail and e-commerce", text: "Web orders, stock and customers synchronised between the online shop and the ERP, with the CRM holding customer history across online, phone and in-store purchases for service and marketing." },
  { icon: "truck", title: "Logistics and supply chain", text: "Customer accounts, rate agreements and enquiries in the CRM; jobs, vehicles, proof of delivery and invoicing in the ERP. Customers see job status through a portal rather than by phoning the office." },
  { icon: "health", title: "Healthcare administration", text: "Administrative processes such as referrals from partner organisations, contracts, scheduling, supplies and invoicing, with strict role-based access and audit logs. Health data is special category data, so design starts with a data protection impact assessment and minimal access." },
  { icon: "building", title: "Construction", text: "Tenders and client relationships in the CRM; projects, subcontractor orders, materials, variations and applications for payment in the ERP, giving project managers live cost-to-complete figures." },
  { icon: "briefcase", title: "Professional services", text: "Client relationships and opportunities in the CRM; engagements, time recording, resourcing and billing in the ERP, so partners see utilisation, work in progress and unbilled time in one place." },
  { icon: "education", title: "Education", text: "Enquiries, applications and communications with prospective students or parents in the CRM; enrolments, fees, staff and resources in the operational system, with clear separation of personal data by role." },
  { icon: "saas", title: "Technology and SaaS businesses", text: "Trials, deals and renewals in the CRM; subscriptions, usage-based billing, revenue recognition and support entitlements in the ERP or billing system, with product usage data shared to flag expansion opportunities and churn risk." },
];

export const COMPARE = {
  intro: "Established ERP and CRM products are mature, well supported and the right choice for many organisations. Custom development is not automatically better; it is better when it fits your situation.",
  headers: ["Factor", "Off-the-shelf ERP/CRM", "Custom ERP/CRM development"],
  rows: [
    ["Customisation", "Configurable within the product's design; deep changes can be complex and affect upgrades", "Built around your processes; changes are made to your own codebase"],
    ["Business process fit", "Strong for standard processes; distinctive processes may need workarounds", "Designed for your processes, including the unusual ones"],
    ["Integration flexibility", "Good connectors to popular tools; limited by the vendor's APIs and pricing", "Integrations designed to your requirements; still dependent on the other systems' APIs"],
    ["Data ownership and access", "Your data, held on the vendor's platform under its terms and export options", "Your data, in a database and hosting environment you control"],
    ["Licensing", "Per-user or per-module subscriptions that grow with headcount", "No per-user licence from us; you pay for development, hosting and support"],
    ["Scalability", "Scales within the vendor's tiers and limits", "Scales with the architecture and infrastructure chosen"],
    ["Maintenance", "Vendor maintains the core product and releases updates", "You (or we) maintain the code, security updates and hosting"],
    ["Implementation complexity", "Faster to start for standard needs; configuration and data migration still required", "Longer initial build; phased delivery reduces risk and gets value earlier"],
    ["Total cost of ownership", "Lower upfront; ongoing licences, add-ons and customisation over time", "Higher upfront; lower licence costs; ongoing support and hosting"],
  ],
  shelfTitle: "When an off-the-shelf platform is the better choice",
  shelf: "Your processes are standard for your sector, a leading product fits them with configuration alone, you want the vendor to handle updates and infrastructure, and you have no need for unusual integrations. In that case we will say so, and may recommend extending or integrating the platform rather than replacing it.",
  customTitle: "When custom development makes sense",
  // Body link 4 of 4.
  custom: {
    text: "Your processes are distinctive or a source of advantage, packaged products need heavy workarounds, per-user licence costs have outgrown the value delivered, you need to combine ERP and CRM functions in a way products do not support, or you need full control over data, hosting and integrations. Where the requirement extends beyond ERP and CRM into portals, mobile apps or wider business platforms, our [[link]] team builds those as part of the same programme.",
    link: { anchor: "custom software development", href: "/services/custom-software-development" },
  } as LinkedText,
};

export const PROCESS_INTRO = "Ten stages, each with a defined output and a review point, so risks are surfaced early and you can see progress throughout.";

export const PROCESS = [
  { title: "Business discovery and requirements analysis", what: "We meet the people who will use the system, from sales and finance to warehouse and management, to understand goals, pain points, constraints and what success looks like.", risk: "Building the wrong thing, or building for one department at the expense of another." },
  { title: "Workflow and process mapping", what: "Current processes are mapped as they really run, including the workarounds, and agreed future processes are designed. We decide which system owns each type of data.", risk: "Automating a broken process, and integration conflicts over data ownership." },
  { title: "Software architecture and database planning", what: "We design the data model, module boundaries, integration approach, hosting and security model, and decide what to build, extend or integrate.", risk: "A structure that cannot grow, and expensive rework later." },
  { title: "UI/UX design", what: "Key screens are designed and tested with real users: order entry, pipeline views, approvals, dashboards. Speed of everyday tasks is prioritised over visual decoration.", risk: "Low adoption because the system is slower than the spreadsheet it replaces." },
  { title: "ERP/CRM module development", what: "Development happens in short iterations, module by module, with regular demonstrations so feedback shapes the product as it is built.", risk: "Surprises at the end of the project." },
  { title: "API and third-party integrations", what: "Integrations are built with validation, retries, error queues and logging, and tested against realistic data volumes and failure scenarios.", risk: "Silent data errors between systems." },
  { title: "Testing and quality assurance", what: "Automated tests, functional testing, integration testing, performance checks, security testing and user acceptance testing (UAT) with your team.", risk: "Defects reaching day-to-day operations." },
  { title: "Data migration and validation", what: "Trial migrations run early and repeatedly. Data is cleansed and deduplicated, and reconciliation reports compare record counts and financial balances with the source systems before you sign off.", risk: "Launching on data nobody trusts." },
  { title: "Deployment and handover", what: "A planned cut-over, sometimes with a period of parallel running, followed by training, user guides, administrator documentation and handover of code and credentials.", risk: "Disruption to trading on launch day, and dependence on a single supplier." },
  { title: "Maintenance and continuous improvement", what: "Monitoring, support, security updates and a prioritised roadmap of improvements and new modules.", risk: "A system that slowly falls behind the business it serves." },
];

export const SECURITY_INTRO = "ERP and CRM systems hold some of your most sensitive information: customer details, prices, margins, payroll and financial records. Security is designed in from the architecture stage.";

export const SECURITY = [
  { icon: "key", title: "Secure authentication", text: "Strong password policies, multi-factor authentication and single sign-on with your existing identity provider where available." },
  { icon: "users", title: "Role-based permissions", text: "Access defined by role and, where needed, by record (for example, a salesperson seeing only their own accounts), with sensitive fields restricted separately." },
  { icon: "lock", title: "Data encryption", text: "Encryption in transit (TLS) and at rest for databases and backups." },
  { icon: "history", title: "Audit logs", text: "A record of who viewed, created, changed or deleted key records and when, supporting internal control and investigations." },
  { icon: "backup", title: "Backup and recovery", text: "Automated backups with defined retention, and restore procedures that are tested, not just assumed." },
  { icon: "plug", title: "Secure API integrations", text: "Dedicated service accounts with least-privilege access, credentials held in a secrets store rather than in code, and rate limiting." },
  { icon: "check", title: "Data validation", text: "Input checks in the interface, the API and the integration layer, so bad data is stopped at the point of entry." },
  { icon: "alert", title: "Access monitoring", text: "Alerts for unusual activity such as bulk exports, repeated failed logins or access outside normal patterns." },
  { icon: "migrate", title: "Data migration safeguards", text: "Migration in secure environments, minimal use of live personal data in testing, and reconciliation before old systems are retired." },
  { icon: "scales", title: "UK GDPR considerations", text: "We design for data minimisation, retention rules, subject access and deletion requests, and consent records where marketing is involved, and we support data protection impact assessments where processing is high-risk. Your organisation remains the data controller and is responsible for its compliance; we provide technical design and documentation, not legal advice." },
];

export const SECURITY_NOTE = "ClickMasters does not claim formal security certifications for this work. If your organisation requires particular standards or a supplier security assessment, we will work through those requirements during discovery.";

export const TECH = {
  intro: "We choose technology to suit your requirements, existing systems and the team that will maintain the software. The technologies below are part of our wider development capability; the stack for each project is agreed in the architecture stage.",
  items: [
    ["Frontend:", "React and Next.js for fast, responsive interfaces that work in the browser on desktop, tablet and phone."],
    ["Backend:", "Node.js or Laravel (PHP) for business logic, workflows and APIs."],
    ["Databases:", "PostgreSQL or MySQL for transactional ERP and CRM data, where relational integrity matters; MongoDB where a flexible document model suits part of the system; Redis for caching and background job queues."],
    ["Integration:", "REST APIs and webhooks, with message queues for high-volume or asynchronous processing."],
    ["Infrastructure:", "Docker containers deployed to cloud platforms such as AWS or Microsoft Azure, or to your own environment."],
  ] as [string, string][],
  layersTitle: "How the layers fit together",
  layers: "The **interface** is where users work: order entry, pipeline boards, approvals and dashboards. It talks only to the **application layer**, which enforces business rules (pricing, credit limits, approval thresholds) and permissions in one place, so the same rules apply whether a change comes from a screen, an import or an integration. The application layer reads and writes a **relational database** designed around your entities (customers, products, orders, invoices) with constraints that protect data integrity. An **integration layer** of APIs, webhooks and queues connects the system to accounting, e-commerce and other software, validating every message and recording every exchange. **Background workers** handle scheduled tasks such as synchronisation, reports and notifications, so the interface stays fast.",
};

export const WHY = [
  { icon: "target", title: "Business-focused planning", text: "We start with your processes and the decisions your teams make, not with a list of modules." },
  { icon: "tool", title: "Tailored functionality", text: "We build what your operations need, extend what already works, and recommend a packaged platform when that is the better fit." },
  { icon: "scale", title: "Scalable architecture", text: "Data models and module boundaries designed for new sites, products, currencies and teams." },
  { icon: "plug", title: "Practical integrations", text: "Clear data ownership, validation, retries and reconciliation, so connected systems stay in step." },
  { icon: "code", title: "Maintainable code", text: "Documented, tested and handed over, so you are not locked in to us." },
  { icon: "shield", title: "Security-conscious development", text: "Role-based access, audit logs, encryption and tested backups as standard parts of the design." },
  { icon: "chat", title: "Clear communication", text: "Regular demonstrations and written updates in business language, with decisions recorded." },
  { icon: "flow", title: "Aligned with operations", text: "Phased delivery that keeps the business trading while systems change." },
];

export const SCENARIOS_NOTE = "The scenarios below are illustrative examples of how we would approach common ERP and CRM projects. They are not descriptions of completed ClickMasters client projects and include no client names or results.";

export const SCENARIOS = [
  { title: "Example 1: Integrating an existing CRM with the accounts system", situation: "A services business uses a packaged CRM for sales and a separate accounting package, and re-keys every won deal as a customer and invoice.", approach: "Keep both systems; build an integration that creates the customer and draft invoice when a deal is won, validates VAT and billing details first, and writes payment status back to the CRM.", outcome: "No double entry and account managers who can see overdue invoices before calling a client." },
  { title: "Example 2: A custom order and stock module around a packaged ERP", situation: "A distributor's ERP handles finance well but cannot manage its customer-specific pricing and multi-warehouse allocation, which are run in spreadsheets.", approach: "Build a custom pricing and allocation module that reads and writes the ERP through its APIs, with a sales-facing quote screen.", outcome: "Quotes with correct prices and real availability, without replacing the finance system." },
  { title: "Example 3: A phased bespoke ERP and CRM for a growing business", situation: "A fast-growing company runs sales, orders, stock and invoicing across spreadsheets and several small tools.", approach: "Phase one replaces order entry, stock and invoicing with a bespoke system, migrating clean data and connecting the existing accounting package; phase two adds a CRM module sharing the same customer records.", outcome: "One customer record and one order book, delivered in stages so the business keeps trading throughout." },
];

/** FAQs: rendered on the page and used for FAQPage JSON-LD (identical text). */
export const FAQS: { q: string; a: string[] }[] = [
  { q: "What is ERP and CRM software development?", a: ["ERP and CRM software development is the design, building, customisation and integration of the systems a business uses to run its operations (ERP) and manage its customers and sales (CRM). It can mean a fully bespoke system, custom modules for an existing platform, or integrations that connect the systems you already use."] },
  { q: "What is the difference between ERP and CRM systems?", a: ["ERP manages internal operations such as finance, inventory, purchasing, orders and HR. CRM manages the customer side: leads, contacts, sales pipelines, communications and service. They overlap around customer accounts and orders, which is why connecting them, with a clear owner for each type of data, removes so much duplicate work."] },
  { q: "Can ERP and CRM systems be integrated?", a: ["Yes, provided both systems offer suitable APIs or data access. A typical integration creates customers and orders in the ERP when deals are won in the CRM, and sends order, invoice and payment status back to the CRM. Reliable integrations include validation, retries, error queues and reconciliation, so the two systems stay consistent."] },
  { q: "How much does custom ERP software development cost in the UK?", a: ["Cost depends on the number of modules and users, the complexity of your processes, the number and quality of integrations, the volume and condition of data to migrate, security and reporting requirements, and ongoing hosting and support. Phasing the build, starting with the modules that remove the most manual work, spreads cost and delivers value earlier. We provide a fixed-price or time-and-materials estimate with milestones after discovery."] },
  { q: "How much does custom CRM development cost?", a: ["CRM cost is driven by the complexity of your sales and service process, the number of pipelines and user roles, automation and reporting requirements, the integrations needed (email, telephony, marketing, ERP or accounts) and the data to migrate. Customising or integrating an existing CRM is usually less costly than building one from scratch, and we will advise which route suits you before quoting."] },
  { q: "How long does it take to develop an ERP system?", a: ["It depends on scope, the number of integrations, data quality and how quickly decisions can be made. A phased approach puts the first module into use well before the full system is complete. We set out a timeline with milestones after discovery and process mapping, rather than estimating before we understand your operations."] },
  { q: "Can an ERP system be customised for a specific business?", a: ["Yes. A bespoke ERP is designed around your processes from the start, and many packaged ERP platforms can be extended with custom modules, workflows and integrations. The right approach depends on how distinctive your processes are and how well your current platform supports extension."] },
  { q: "Can CRM software integrate with existing business applications?", a: ["Yes. CRMs are commonly connected to email and calendars, website forms, telephony, marketing platforms, e-commerce, support desks and ERP or accounting systems. Feasibility depends on each application's APIs and licence terms, which we confirm during discovery."] },
  { q: "Is custom ERP software better than off-the-shelf ERP?", a: ["Not always. Off-the-shelf ERP is often the better choice for standard processes and organisations that want the vendor to handle updates. Custom ERP is better when your processes are distinctive, workarounds and licence costs are growing, or you need full control of data and integrations. Extending a packaged platform with custom modules is often a sensible middle route."] },
  { q: "What should a business consider before choosing an ERP or CRM development company?", a: ["Ask how they will understand your processes before proposing a solution; whether they will recommend integrating or extending what you already have when that is the better option; how they handle data migration and reconciliation; how integrations are monitored and errors handled; what security controls are standard; who owns the code and data at the end; and what support looks like after launch. Ask to see a sample of their project documentation."] },
];

export const FINAL_CTA = {
  title: "Ready to Build an ERP or CRM System",
  titleAccent: "Around Your Business?",
  body: {
    text: "Tell us where your systems slow your teams down: the re-keying, the spreadsheets, the reports nobody trusts. We will talk through your processes, the systems you already use and the data you hold, and recommend whether to build, extend or integrate, with a clear next step and no obligation.",
  } as LinkedText,
  bring: [
    "A short description of the processes that cause the most manual work",
    "The systems and spreadsheets you use today",
    "What you would like to see in one place that you cannot see now",
  ],
};

export const SCHEMA_SERVICE = {
  name: "ERP and CRM Development",
  alternateName: "ERP and CRM Development Services",
  serviceType: ["ERP development", "CRM development", "ERP and CRM integration", "Data migration"],
  description: SEO.description,
  relatedServicePath: "/services/custom-software-development",
  catalogName: "ERP and CRM development services",
  catalog: [...ERP_SERVICES.map((s) => s.title), ...CRM_SERVICES.map((s) => s.title)],
};

type OgTone = "plain" | "purple" | "teal" | "sun";
/** Social sharing image content (used by ./opengraph-image.tsx). */
export const OG: { title: string; accent: string; rows: [string, OgTone][][] } = {
  title: "ERP & CRM Development",
  accent: "One record from first enquiry to final invoice",
  rows: [
    [["CRM: leads · deals", "purple"], ["ERP: orders · stock · invoices", "teal"]],
    [["APIs", "plain"], ["Validation", "plain"], ["Audit", "plain"]],
    [["Build · Extend · Integrate", "sun"]],
  ],
};
