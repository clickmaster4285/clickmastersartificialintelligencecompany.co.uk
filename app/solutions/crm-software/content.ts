/*
 * /solutions/crm-software content, from
 * "ClickMasters CRM Software Solutions: SEO Content Pack" (24 Nov 2026).
 * Edit copy here; page.jsx only renders it.
 *
 * VERIFY comments mark business facts the pack says need owner confirmation.
 */

export const PATH = "/solutions/crm-software";

export const SEO = {
  title: "Custom CRM Software Development UK | Bespoke CRM",
  description:
    "Custom CRM software development for UK businesses: bespoke pipelines, lead management, automation and integrations, built around how your team sells and serves.",
  ogTitle: "Custom CRM Software for UK Businesses | ClickMasters",
  ogDescription:
    "Leads, contacts, pipelines, service and automation in one CRM built around your sales process, and connected to your website, email and ERP.",
};

export type LinkedText = { text: string; link?: { anchor: string; href: string } };

const IMG = "/assets/Solution/crm";

/** Diagrams from the content pack (public/assets/Solution/crm). Alt text from the pack's image table. */
export const IMAGES = {
  pipeline: {
    src: `${IMG}/custom-crm-sales-pipeline.png`,
    width: 1080,
    height: 760,
    alt: "Illustration of a custom CRM sales pipeline: deal cards move across stages from new lead to qualified, proposal, negotiation and won, with a contact timeline and an automated follow-up reminder",
  },
  customerView: {
    src: `${IMG}/crm-single-customer-view.png`,
    width: 1720,
    height: 440,
    alt: "Single customer view diagram: one CRM account record in the centre linked to contacts, emails, calls, meetings, quotes, support tickets, website enquiries, consent records and invoice status from the ERP",
  },
  leadJourney: {
    src: `${IMG}/crm-lead-journey-assignment-follow-up.png`,
    width: 1720,
    height: 440,
    alt: "Illustrative CRM lead journey: a website enquiry becomes a lead, is checked for duplicates and assigned by rule, qualified, moved through proposal and negotiation stages with automatic follow-up reminders, and on winning is handed to delivery and finance",
  },
  crmVsErp: {
    src: `${IMG}/crm-vs-erp-integration.png`,
    width: 1720,
    height: 400,
    alt: "CRM and ERP comparison: CRM manages leads, contacts, pipeline, campaigns and service; ERP manages orders, stock, purchasing, invoicing and finance; shared customer accounts, won deals and invoice status flow between them",
  },
} as const;

export const HERO = {
  eyebrow: "CRM Software Solutions UK",
  title: "Custom CRM Software That Fits",
  titleAccent: "the Way Your Team Sells and Serves",
  lead:
    "ClickMasters builds CRM systems for UK businesses whose customer information is scattered across inboxes, spreadsheets and tools that do not talk to each other. We start from a CRM foundation covering contacts, sales pipelines, customer service and automation, then shape the stages, fields, rules and integrations around how your team actually wins and keeps customers.",
  audience:
    "For sales-led SMEs, B2B teams with long or unusual sales cycles, service businesses and growing companies that have outgrown a generic CRM, or never adopted one properly.",
  // VERIFY: integrations or migrations delivered for Salesforce, HubSpot and Dynamics specifically.
  stats: [
    { value: "Your stages", label: "Your pipeline, your rules" },
    { value: "Automated follow-ups", label: "Nothing slips" },
    { value: "Salesforce · HubSpot · Dynamics", label: "Integration experience" },
    { value: "UK GDPR-aware", label: "Consent and data rights" },
  ],
};

export const WHAT_IS = {
  p1: "**Customer relationship management (CRM) software** is the system where a business keeps everything it knows about its customers and prospects: who they are, how they found you, every conversation, what they have been quoted, what they bought and what they need next. Instead of that knowledge living in individual inboxes and memories, it sits in shared records the whole team can see.",
  p2: "Sales teams use a CRM to track leads and deals through a pipeline. Marketing uses it to segment contacts and see which campaigns produce real enquiries. Customer service uses it to log requests and see the full history before replying. Managers use it to see what is happening across all three, without asking each person for an update.",
  p3: "Most businesses start with a ready-made CRM, and many should. A **custom CRM**, often called a **bespoke CRM** in the UK, makes sense when the way you sell does not fit a standard pipeline: long B2B cycles with many stakeholders, field visits, broker or partner channels, memberships, or service-led relationships where the \"deal\" never really closes.",
};

export const TEAMS = [
  { icon: "sales", title: "Sales", text: "Track leads and deals through a pipeline." },
  { icon: "campaign", title: "Marketing", text: "Segment contacts and see which campaigns produce real enquiries." },
  { icon: "service", title: "Customer service", text: "Log requests and see the full history before replying." },
  { icon: "report", title: "Managers", text: "See what is happening across all three, without asking for updates." },
];

export const PROBLEMS_INTRO =
  "A CRM will not fix a weak sales process on its own, but it makes problems visible and removes the admin that causes many of them.";

export const PROBLEMS = [
  { icon: "scatter", title: "Customer data scattered everywhere", text: "Contacts sit in personal inboxes, phones and spreadsheets, and leave when people leave.", approach: "Shared contact and account records owned by the business, not by individuals." },
  { icon: "inbox", title: "Leads lost between enquiry and first call", text: "Website forms land in a shared inbox, and nobody is sure who picked them up.", approach: "Leads created automatically from forms and assigned by rule, with an alert if untouched." },
  { icon: "alarm", title: "Missed follow-ups", text: "Proposals go quiet because nobody set a reminder.", approach: "Follow-up tasks generated by stage, with overdue lists for each salesperson and manager." },
  { icon: "funnel", title: "No real view of the pipeline", text: "Forecasts come from optimism and a Friday spreadsheet.", approach: "Defined stages with entry criteria, so pipeline value and stage conversion reflect reality." },
  { icon: "chat", title: "Disorganised customer communication", text: "A customer emails two people and gets two different answers.", approach: "One timeline of emails, calls, meetings and tickets on every account." },
  { icon: "duplicate", title: "Duplicate and inconsistent records", text: "The same company appears three times with different spellings and owners.", approach: "Duplicate detection when records are created, and merge tools for clean-up." },
  { icon: "report", title: "Reports nobody trusts", text: "Each manager calculates win rates differently.", approach: "Standard definitions and dashboards built on the same underlying data." },
  { icon: "admin", title: "Manual sales administration", text: "Salespeople spend hours updating sheets and writing status emails.", approach: "Automatic activity logging, templated quotes and status updates triggered by stage changes." },
];

export const DEVELOP_INTRO: LinkedText = {
  text: "A CRM succeeds or fails on adoption. If it does not match how salespeople and service teams already work, they go back to their spreadsheets. So we design the data model, stages and screens around your real customer journey, starting from a foundation that already handles contacts, pipelines, service and automation. Where a CRM is one part of a larger bespoke platform, our [[link]] cover the wider architecture.",
  link: { anchor: "custom software development services", href: "/services/custom-software-development" },
};

export const DEVELOP = [
  { icon: "interview", title: "Requirement analysis", text: "Interviews with sales, marketing, service and management about what each needs to see and do." },
  { icon: "map", title: "Workflow planning", text: "Your customer journey mapped from first touch to renewal, with the decision points at each step." },
  { icon: "database", title: "Custom data model", text: "Accounts, contacts, sites, partners, products and your own record types, with the relationships between them." },
  { icon: "dashboard", title: "Pipelines and dashboards", text: "Stages with entry criteria, required fields per stage and role-specific dashboards." },
  { icon: "roles", title: "Roles, permissions and automation", text: "Who sees which accounts, territories and fields, and which tasks and alerts fire automatically." },
  { icon: "rocket", title: "Integrations, testing and launch", text: "Connections to your website, email and other systems, tested with real scenarios, then rolled out team by team." },
];

export const FIT = {
  custom: [
    "Your sales or service process has stages, record types or rules that standard CRMs handle only with workarounds",
    "Per-user licences across a large or seasonal team are expensive for the features actually used",
    "You need the CRM inside a wider system, such as a portal, an ERP or a field app",
    "You want full control over customer data, hosting and roadmap",
  ],
  readyMade: [
    "Your process is close to a standard B2B or B2C pipeline",
    "You rely heavily on a platform's marketing tools or app marketplace",
    "You need to be up and running within days",
    "You prefer a subscription that includes hosting and updates",
  ],
};

// VERIFY: the CRM foundation exists as a reusable base, and what "AI insights" includes in practice.
export const FEATURES_INTRO =
  "Features marked Foundation are part of our CRM base: pipeline, contact and customer-service management with built-in automation and AI insights. Those marked Built to requirement are developed or extended for your process.";

export type Feature = {
  id: string;
  icon: string;
  title: string;
  foundation: boolean;
  does: string;
  problem: string;
  usedBy: string;
  connects: string;
};

export const FEATURES: Feature[] = [
  { id: "contact-account-management", icon: "contacts", title: "Contact and account management", foundation: true, does: "Stores people and organisations, their relationships, roles, preferences and history.", problem: "Customer knowledge locked in individual inboxes.", usedBy: "Everyone who deals with customers.", connects: "Every other feature: leads become contacts, and deals and tickets belong to accounts." },
  { id: "lead-management", icon: "inbox", title: "Lead management", foundation: true, does: "Captures, de-duplicates, qualifies and assigns new enquiries.", problem: "Enquiries lost or picked up late.", usedBy: "Sales development, sales and marketing.", connects: "Web forms and campaigns upstream; contacts and opportunities downstream." },
  { id: "sales-pipeline", icon: "funnel", title: "Sales pipeline and opportunity tracking", foundation: true, does: "Moves deals through your stages, with values, probabilities, close dates and next steps.", problem: "No reliable view of what will close, and when.", usedBy: "Salespeople and sales managers.", connects: "Tasks, quotes, forecasting and, once a deal is won, ERP orders." },
  { id: "customer-support-tracking", icon: "service", title: "Customer support and service tracking", foundation: true, does: "Logs requests and issues against the account, with status, ownership and response targets.", problem: "Service problems invisible to the people selling to the same customer.", usedBy: "Service and account management.", connects: "The account timeline, renewal risk and reporting." },
  { id: "workflow-automation", icon: "automation", title: "Notifications and workflow automation", foundation: true, does: "Creates tasks, sends alerts and updates records when defined events happen.", problem: "Repetitive admin and inconsistent follow-up.", usedBy: "Configured by administrators; benefits every user.", connects: "Leads, pipeline, service and integrations." },
  { id: "dashboards-ai-insights", icon: "ai", title: "Dashboards, reporting and AI insights", foundation: true, does: "Pipeline value, stage conversion, activity levels, service metrics and AI-assisted insights such as highlighting deals at risk.", problem: "Reports assembled by hand and numbers nobody trusts.", usedBy: "Managers and directors.", connects: "All CRM data, plus ERP figures where integrated." },
  { id: "task-follow-up", icon: "task", title: "Task and follow-up management", foundation: false, does: "Personal and team task lists, call lists and reminders linked to records.", problem: "Follow-ups that depend on memory.", usedBy: "Sales and service teams.", connects: "Automation rules and calendar sync." },
  // VERIFY: two-way email and calendar sync is offered, and with which platforms.
  { id: "communication-history", icon: "mail", title: "Communication history and email sync", foundation: false, does: "Logs emails, calls and meetings against contacts automatically, including two-way email and calendar sync where needed.", problem: "Context lost between colleagues.", usedBy: "Everyone who deals with customers.", connects: "Email and calendar platforms." },
  { id: "customer-segmentation", icon: "segment", title: "Customer segmentation", foundation: false, does: "Groups contacts by sector, size, behaviour, value or lifecycle stage.", problem: "The same message sent to everyone.", usedBy: "Marketing and account management.", connects: "Campaigns, reporting and marketing tools." },
  { id: "campaign-management", icon: "campaign", title: "Marketing campaign management", foundation: false, does: "Tracks campaigns, attributes leads to sources and records consent for electronic marketing.", problem: "Not knowing which activity produces real pipeline.", usedBy: "Marketing.", connects: "Segments, lead capture and email marketing platforms." },
  // VERIFY: field-level permissions are a delivered capability.
  { id: "roles-territories-permissions", icon: "roles", title: "User roles, territories and permissions", foundation: false, does: "Controls which accounts, fields and actions each user can see or change, by role, team or territory.", problem: "Everyone seeing everything, or nobody able to see what they need.", usedBy: "Configured by administrators for all users.", connects: "Every feature, plus audit logging." },
];

export const PIPELINE_INTRO =
  "The value of a CRM shows most clearly in what happens between an enquiry arriving and a deal closing. Here is an illustrative lead journey for a B2B services business. It is an example of how a CRM can be configured, not a description of a specific client.";

export const PIPELINE = [
  { title: "Lead capture", text: "Website forms, email, phone, events and imports create leads automatically, with the source recorded for reporting." },
  { title: "Lead qualification", text: "Agreed criteria, such as need, budget, authority and timing, or your own scoring rules, decide whether a lead becomes an opportunity." },
  { title: "Lead assignment", text: "Rules by territory, sector, product, rotation or team capacity decide the owner, with a response-time alert, so no lead waits in a shared inbox." },
  { title: "Sales stages", text: "Each stage has entry criteria and required information, so \"proposal\" means the same thing to everyone." },
  { title: "Opportunity and activity tracking", text: "Value, probability, close date, next step and every call, email and meeting on one record." },
  { title: "Conversion reporting and visibility", text: "Stage-to-stage conversion, sales cycle length and pipeline coverage show where deals stall." },
];

export const AUTOMATION_INTRO =
  "Automation in a CRM is about consistency: the right next step happens every time, without relying on someone remembering. Typical rules include:";

export const AUTOMATION = [
  { icon: "alarm", title: "Follow-up reminders", text: "Tasks created when a quote is sent, a meeting ends or a deal sits too long in a stage." },
  { icon: "assign", title: "Lead assignment rules", text: "Automatic owner allocation, with an escalation if the lead is untouched." },
  { icon: "bell", title: "Activity notifications", text: "Alerts when a key account opens a proposal, raises a ticket or replies." },
  { icon: "task", title: "Task creation", text: "Onboarding checklists created when a deal is won." },
  { icon: "refresh", title: "Status updates", text: "Lead and deal statuses that update from actions, such as a signed quote." },
  { icon: "mail", title: "Customer communication", text: "Templated, logged emails for confirmations, renewals and reminders, always respecting consent." },
  { icon: "report", title: "Reporting workflows", text: "Scheduled pipeline and activity reports sent to managers." },
  { icon: "handoff", title: "Internal notifications", text: "Hand-off alerts to delivery, finance or service when a deal closes." },
];

export const AUTOMATION_OUTRO: LinkedText = {
  text: "Where automation needs judgement, such as summarising call notes, drafting replies or scoring which deals are at risk, our [[link]] can add those capabilities to the CRM, with people reviewing the output.",
  link: { anchor: "AI development services", href: "/services" },
};

export const INTEGRATION_INTRO =
  "An **integration** moves data between systems, for example copying a web enquiry into the CRM or sending a won deal to finance. A **CRM feature** decides what happens to that data once it arrives: who owns the lead, which stage it enters, which task is created. Good CRM projects design both together.";

export const INTEGRATIONS = {
  headers: ["Connected system", "What typically flows", "Benefit"],
  rows: [
    ["Website enquiry forms", "New leads with source and consent", "No manual copying from a shared inbox"],
    ["Email and calendar", "Emails, meetings and invitations", "Activity logged without extra admin"],
    ["Marketing tools", "Segments, campaign responses, unsubscribes", "Campaigns linked to real pipeline; preferences respected"],
    ["E-commerce and payments", "Orders, customers, payment status", "A full picture of online customers"],
    ["Customer support platforms", "Tickets and satisfaction", "Service context visible to sales"],
    ["ERP and accounting", "Won deals to orders; invoices and payment status back", "Sales sees what customers owe and receive"],
    ["Existing CRMs (Salesforce, HubSpot, Microsoft Dynamics)", "Records and activities", "Extend or migrate rather than start from zero"],
    ["Reporting tools and third-party APIs", "Curated datasets", "Analysis alongside other business data"],
  ],
};

export const ARCH_INTRO: LinkedText = {
  text: "Most modern CRMs are browser-based applications used all day, so speed, usability on every device and reliable search matter as much as features. Our [[link]] practice covers how those interfaces are engineered.",
  link: { anchor: "web application development", href: "/services/web-application-development" },
};

export const STACK = [
  { title: "Front end", items: ["React", "Next.js", "TypeScript"] },
  { title: "Back end", items: ["Node.js", "Python & Django", "Laravel"] },
  { title: "Data & search", items: ["PostgreSQL", "MySQL", "Elasticsearch", "Redis"] },
  { title: "Cloud", items: ["AWS", "Azure", "Google Cloud"] },
];

// VERIFY: UK-region hosting is offered (a common CRM buyer question).
export const ARCH_LAYERS = [
  {
    icon: "frontend",
    title: "Front end",
    items: [
      ["React, Next.js and TypeScript", "for fast pipeline boards, searchable lists and forms that work on desktop, tablet and phone."],
      ["Accessible, keyboard-friendly screens", "for people who use the CRM all day."],
    ],
  },
  {
    icon: "backend",
    title: "Back end and APIs",
    items: [
      ["Node.js, Python with Django, or Laravel", "services holding assignment, permission and automation rules."],
      ["Documented REST APIs", "for integrations, and background jobs for imports, email sync and scheduled reports."],
    ],
  },
  {
    icon: "database",
    title: "Data and infrastructure",
    items: [
      ["PostgreSQL or MySQL", "for related customer data; Elasticsearch where fast full-text search is needed; Redis for caching and queues."],
      ["AWS, Azure or Google Cloud", "hosting, with automated backups and point-in-time recovery."],
    ],
  },
] as const;

// VERIFY: SSO and MFA are delivered capabilities.
export const SECURITY_INTRO =
  "A CRM holds personal data about your customers and prospects, so security and data protection are part of the design, not an add-on. We follow OWASP standards and GDPR best practice and sign NDAs on request. Each organisation remains responsible for assessing its own legal obligations under UK GDPR, the Data Protection Act 2018 and, for electronic marketing, PECR. The CRM should make meeting those obligations easier.";

export const SECURITY = [
  { icon: "key", title: "Secure authentication", text: "Strong sign-in, multi-factor authentication and single sign-on where required." },
  { icon: "roles", title: "Role-based permissions", text: "Access by role, team and territory, down to individual fields where needed." },
  { icon: "lock", title: "Encryption", text: "Data encrypted in transit and at rest, including backups." },
  { icon: "plug", title: "Secure APIs", text: "Authenticated integrations with credentials held in a secrets manager." },
  { icon: "check", title: "Input validation", text: "Server-side checks and constraints that keep records clean and safe." },
  { icon: "audit", title: "Audit logging", text: "A record of who viewed, exported or changed customer data." },
  { icon: "consent", title: "Consent and lawful basis", text: "Fields recording why you hold data and what marketing each contact has agreed to, plus suppression lists so opted-out contacts stay opted out after imports." },
  { icon: "privacy", title: "Data subject requests", text: "Tools to find, export or erase an individual's data when they ask." },
  { icon: "backup", title: "Retention and backups", text: "Retention rules for inactive records, plus tested backups and recovery." },
];

export const PROCESS_INTRO =
  "Eleven stages, delivered in two-week sprints with weekly demos. Timelines depend on features, integrations and data, and are agreed after discovery.";

export const PROCESS = [
  { title: "Business discovery", text: "Goals, team structure and what is not working today." },
  { title: "Customer workflow analysis", text: "Your journey from first touch to renewal, mapped stage by stage." },
  { title: "CRM requirements gathering", text: "What each role must see, record and do, prioritised." },
  { title: "Database and architecture planning", text: "Record types, relationships, permissions and hosting." },
  { title: "Feature and module planning", text: "Which features launch first, and which follow." },
  { title: "Development and configuration", text: "The foundation configured and custom features built, demonstrated weekly." },
  { title: "API and third-party integrations", text: "Website, email, marketing, support and ERP connections." },
  { title: "Data migration planning", text: "Exports from spreadsheets or your old CRM, matched on email, domain or company number, merged by an agreed rule for which value wins, mapped and trial-loaded, with a reconciliation report you sign off." },
  { title: "Testing and quality assurance", text: "Real sales scenarios, permission checks and integration tests." },
  { title: "Deployment", text: "Launch, often team by team, with support on hand." },
  { title: "User onboarding and improvements", text: "Role-based training, then refinements based on how people actually use it." },
];

export const INDUSTRIES_INTRO =
  "CRM needs vary by sector. These are potential applications of a custom CRM, not descriptions of completed ClickMasters projects.";

export const INDUSTRIES = [
  { icon: "briefcase", title: "Professional services", text: "Client relationships, matters or engagements, referrals and cross-selling.", considerations: ["Conflict checks", "Per-client confidentiality"] },
  { icon: "home", title: "Real estate", text: "Applicants, landlords, vendors, viewings and offers across properties.", considerations: ["Contacts matched to properties", "Multiple relationship types"] },
  { icon: "cart", title: "Retail and e-commerce", text: "Customer profiles, order history, loyalty and service.", considerations: ["Shop platform integration", "Marketing consent"] },
  { icon: "education", title: "Education and training", text: "Prospective learners, enrolments, employers and sponsors.", considerations: ["Long enquiry-to-enrolment cycles", "Multiple stakeholders"] },
  { icon: "health", title: "Healthcare administration", text: "Referrers, partner organisations and private patient enquiries.", considerations: ["Special category data kept separate", "Strict access"] },
  { icon: "finance", title: "Financial and business services", text: "Prospects, clients, products held and review dates.", considerations: ["Audit trails", "Recorded advice interactions"] },
  { icon: "recruit", title: "Recruitment", text: "Clients, vacancies, candidates and placements in one system.", considerations: ["Two-sided relationships", "Candidate data rights"] },
  { icon: "truck", title: "B2B sales and logistics", text: "Accounts with many sites and contacts, quotes, contracts and renewals.", considerations: ["Account hierarchies", "Quote-to-order hand-off"] },
];

export const COMPARISON_INTRO =
  "Ready-made CRM platforms are mature products that suit many businesses well. A custom CRM is built, or adapted from a foundation, around your process. A third route extends an existing platform such as Salesforce, HubSpot or Microsoft Dynamics with custom integrations or modules.";

export const COMPARISON = {
  headers: ["Factor", "Custom CRM", "Ready-made CRM"],
  rows: [
    ["Customisation", "Built around your record types, stages and rules", "Configurable within the platform; deep changes need specialist work"],
    ["Workflow fit", "Designed for your journey", "Best for standard pipelines"],
    ["Implementation", "Weeks to months, phased", "Days to weeks for standard set-ups"],
    ["Integrations", "Any system with an API or database", "Large marketplaces of ready connectors"],
    ["Data ownership and access", "Your database, your hosting, subject to contract", "Your data on the vendor's platform, under its terms"],
    ["Scalability", "Designed for your users and volumes", "Proven at scale; cost grows by seat and tier"],
    ["Maintenance", "Through a support agreement", "Included in the subscription"],
    ["Costs", "Higher development cost up front; no per-seat licences", "Low start-up cost; ongoing per-user subscriptions and add-ons"],
    ["Long-term flexibility", "Evolves with your process", "Evolves with the vendor's roadmap"],
  ],
};

export const CRM_VS_ERP: LinkedText = {
  text: "A CRM looks outwards. It manages leads, contacts, deals, campaigns and service: everything up to and around the sale. An ERP looks inwards. It manages the operations that follow the sale: orders, stock, purchasing, invoicing and finance. Many businesses need both, connected so that a won deal becomes an order without re-keying, and account managers can see invoices and deliveries. Our [[link]] page explains the operational side in detail.",
  link: { anchor: "custom ERP software", href: "/solutions/erp-software" },
};

export const COST_INTRO =
  "CRM cost depends on scope, so a reliable estimate follows discovery. We offer fixed-price and time-and-materials engagements, with a clear estimate and milestones after a free consultation. Remember to compare against a ready-made CRM's total subscription cost over several years, not just year one.";

export const COST = [
  { icon: "users", title: "Number of users", text: "Affects permissions, training and infrastructure, though not licence fees." },
  { icon: "modules", title: "Number of modules", text: "Pipeline only, or pipeline plus service, campaigns and portals." },
  { icon: "workflow", title: "Workflow complexity", text: "Stages, record types, approval and assignment rules." },
  { icon: "migrate", title: "Data migration", text: "Volume, duplicates and quality of existing data." },
  { icon: "plug", title: "Integrations", text: "Website, email, marketing, support, ERP and accounting." },
  { icon: "report", title: "Reporting", text: "The number and complexity of dashboards and forecasts." },
  { icon: "shield", title: "Security requirements", text: "SSO, field-level permissions and audit needs." },
  { icon: "design", title: "UI/UX", text: "Mobile use, custom screens and portals for customers." },
  { icon: "cloud", title: "Hosting", text: "Cloud environments, resilience and data location." },
  { icon: "tools", title: "Ongoing maintenance", text: "Support, updates and new features after launch." },
];

export const WHY = [
  { icon: "modules", title: "A CRM foundation to build on", text: "Pipeline, contact and customer-service management with built-in automation and AI insights, ready to extend for your sales team." },
  { icon: "map", title: "Workflow-first design", text: "We map how your team actually sells and serves before configuring stages, fields or rules." },
  { icon: "plug", title: "Integration experience", text: "We have built integrations with Salesforce, HubSpot and Microsoft Dynamics, plus ERPs, payment gateways, accounting tools and legacy software." },
  { icon: "stack", title: "Part of a wider system", text: "CRM, ERP, customer portals, mobile apps and AI from one team, so the CRM connects with the rest of the business." },
  { icon: "shield", title: "Security and GDPR best practice", text: "OWASP standards, encryption, role-based access, regular security testing and NDAs on request." },
  { icon: "loop", title: "Transparent delivery", text: "Two-week sprints with weekly demos, fixed-price or time-and-materials options, and support after launch." },
];

export const FAQS = [
  { q: "What is CRM software?", a: ["CRM (customer relationship management) software is a shared system for recording and managing a business's relationships with customers and prospects. That includes contacts, leads, deals, communication history, campaigns and service requests, so sales, marketing and service teams work from the same information."] },
  { q: "What does a custom CRM system do differently?", a: ["A custom CRM is designed around your own record types, sales stages, rules and integrations, rather than adapting your process to a standard product. You get the features your teams use, laid out the way they work, without per-user licence fees. ClickMasters builds from a CRM foundation, so common features such as contacts, pipelines, service and automation are not rebuilt from scratch."] },
  { q: "How much does custom CRM software development cost in the UK?", a: ["Cost depends on the number of users and modules, workflow complexity, data migration, integrations, reporting, security, design, hosting and ongoing support. A focused pipeline-and-contacts CRM costs far less than a multi-team system with service, campaigns and ERP integration. We provide a fixed-price or time-and-materials estimate with milestones after a free consultation."] },
  { q: "How long does it take to develop a CRM system?", a: ["It depends on scope. Starting from a foundation and launching core features first, such as contacts, leads and pipeline, gets teams using the CRM sooner, with further features added in later phases. We agree a timeline after discovery, once integrations and data migration are understood."] },
  { q: "What features should a CRM system include?", a: ["Most businesses need contact and account management, lead capture and assignment, a sales pipeline with clear stages, tasks and follow-ups, communication history, and dashboards. Depending on the business, add customer service tracking, segmentation and campaigns, quotes, territories and permissions, and integrations with your website, email and ERP."] },
  { q: "Is custom CRM software suitable for small businesses?", a: ["Sometimes. If a small business has a standard sales process, a ready-made CRM is usually the quickest, most affordable start. Custom CRM suits small businesses with unusual processes, a need to combine CRM with other operations, or growing per-user costs. Starting from a foundation keeps the cost proportionate."] },
  { q: "What is the difference between CRM and ERP?", a: ["CRM manages customer-facing activity: leads, contacts, deals, marketing and service. ERP manages internal operations: orders, stock, purchasing, invoicing and finance. Integrated, a won deal in the CRM becomes an order in the ERP, and invoice and payment status flows back so account managers have the full picture."] },
  { q: "Can a CRM system integrate with an existing website?", a: ["Yes. Website enquiry, quote and sign-up forms can create leads in the CRM automatically, with the source page, campaign and marketing consent recorded. The lead is then assigned and followed up according to your rules."] },
  { q: "Can CRM software automate sales follow-ups?", a: ["Yes. Rules can create follow-up tasks when quotes are sent or deals stall, assign new leads, alert owners to customer activity, and send templated, logged emails that respect each contact's preferences. Automation keeps follow-up consistent, while salespeople keep control of the conversation."] },
  { q: "Can customer data be migrated into a new CRM?", a: ["Yes. Data from spreadsheets or an existing CRM such as Salesforce, HubSpot or Microsoft Dynamics is exported, de-duplicated, cleaned and mapped to the new structure, then trial-loaded and checked before go-live. Migration is also a good moment to remove records you no longer have a reason to keep."] },
  { q: "What is the difference between custom CRM and ready-made CRM software?", a: ["Ready-made CRM is a subscription product you configure. It is quick to start and has broad features, but it is shaped around a standard process, with costs that grow per user. Custom CRM is built around your process and owned and hosted under your control, with a higher upfront cost and ongoing support. Extending an existing platform is a middle route."] },
  { q: "How can a business choose the right CRM solution?", a: ["Start with your customer journey and what each team needs, not with a feature list. Check how closely ready-made products fit without workarounds, what they will cost over several years at your expected headcount, which systems the CRM must connect to, and who will own and maintain it. If the fit is poor or the integrations are complex, a custom or extended CRM is worth considering."] },
];

export const FINAL_CTA = {
  title: "Show Us How You Win and Keep Customers.",
  titleAccent: "We Will Design the CRM Around It.",
  body: {
    text: "Tell us how enquiries arrive, how your team qualifies and follows them up, where deals stall and which systems hold customer information today. We will help you decide whether a custom CRM, an extension of your current platform or a ready-made product is the right fit, and what a sensible first release would include.",
  } as LinkedText,
  bring: ["How leads arrive today", "Your sales stages", "Where follow-ups slip", "Systems holding customer data", "Reports managers need"],
};

export const SCHEMA_SERVICE = {
  name: "Custom CRM Software Development",
  alternateName: "Bespoke CRM Software",
  serviceType: ["CRM software development", "CRM integration", "CRM data migration"],
  description:
    "Design, development, integration and implementation of custom CRM systems covering contacts, leads, sales pipelines, customer service, workflow automation and reporting, built from a CRM foundation.",
  catalogName: "CRM features and modules",
  catalog: FEATURES.map((f) => f.title),
  relatedServicePath: "/solutions/erp-software",
};
