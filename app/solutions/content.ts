/*
 * /solutions hub content, from
 * "ClickMasters Solutions Hub: SEO Content Pack" (24 Nov 2026).
 * Edit copy here; page.jsx only renders it. Title/description live in
 * app/lib/seo-pages.ts (PAGE_SEO.solutions).
 *
 * VERIFY comments mark business facts the pack says need owner confirmation.
 */

export type LinkedText = { text: string; link?: { anchor: string; href: string } };

export const OG = {
  title: "Business Software & AI Solutions | ClickMasters",
  description:
    "From manual processes to disconnected systems: find the right mix of ready-to-customise systems, custom software, AI and automation for your business.",
};

const IMG = "/assets/Solution/hub";

/** Diagrams from the content pack (public/assets/Solution/hub). Alt text from the pack's image table. */
export const IMAGES = {
  map: {
    src: `${IMG}/business-challenges-to-solutions-map.png`,
    width: 1080,
    height: 760,
    alt: "Map linking common business problems, such as manual work and disconnected systems, to solutions",
  },
  stack: {
    src: `${IMG}/business-solution-technology-stack.png`,
    width: 1720,
    height: 500,
    alt: "Layered stack: user experiences, AI and automation, ERP/CRM/LMS systems, integration and cloud",
  },
  decision: {
    src: `${IMG}/choosing-the-right-business-solution.png`,
    width: 1720,
    height: 600,
    alt: "Flowchart for choosing between a customised foundation, AI, automation, mobile, SaaS or custom",
  },
} as const;

export const HERO = {
  eyebrow: "Business Software & AI Solutions UK",
  title: "Custom Business Software and AI Solutions",
  titleAccent: "Built Around Your Problems",
  lead:
    "Every business reaches a point where spreadsheets, disconnected tools and manual workarounds start costing more than they save. ClickMasters helps UK organisations fix that with the right mix of ready-to-customise business systems, custom software, AI and automation, chosen for the problem rather than the technology.",
  audience:
    "Start with the challenge you recognise below. We will show you which kind of solution fits, what it involves and how quickly it can be in use.",
  // VERIFY: "7+ platforms" counts the integrations named on the page; confirm each has been delivered.
  stats: [
    { value: "6 foundations", label: "ERP, CRM, SaaS, LMS and more" },
    { value: "AI + software", label: "In one team" },
    { value: "7+ platforms", label: "Salesforce, SAP and others" },
    { value: "6–8 weeks", label: "Typical first release" },
  ],
};

export const HOW = {
  p1: "This page is organised around outcomes, not technologies. Our service pages explain how we engineer software. Here you can see what that engineering is *for*: removing manual work, connecting systems, replacing tools you have outgrown, and giving customers and staff a better experience.",
  p2: "Our solutions come in three forms. Many problems are best solved with a **ready-to-customise foundation**, such as ERP, CRM, a SaaS platform, a learning management system, inventory management or fleet software, adapted to your processes so you launch sooner. Others need a **purpose-built system** because the process itself is what sets you apart. Increasingly, both benefit from an **intelligent layer** of AI and automation that reads documents, routes work and spots problems early.",
  // VERIFY: out-of-scope statement (no IT support, hardware or licence resale).
  scope:
    "To set expectations clearly: these are software solutions that we design, build, customise and integrate. Day-to-day IT support, hardware supply and software licence resale are outside what we offer.",
};

export const FORMS = [
  { icon: "foundation", title: "Ready-to-customise foundation", text: "ERP, CRM, SaaS, LMS, inventory or fleet, adapted to your processes so you launch sooner." },
  { icon: "custom", title: "Purpose-built system", text: "Engineered from scratch when the process itself is what sets you apart." },
  { icon: "ai", title: "Intelligent layer", text: "AI and automation that read documents, route work and spot problems early." },
];

export const CHALLENGES_INTRO =
  "If more than one of these sounds familiar, the cause is usually the same: your systems have not kept pace with how the business works now.";

export const CHALLENGES = [
  { icon: "manual", title: "Manual, repetitive processes", text: "Staff re-key data, chase approvals by email and copy information between screens.", solution: "Workflow automation, with AI document processing for invoices, forms and records." },
  { icon: "disconnected", title: "Disconnected business systems", text: "Sales, finance, stock and service each have their own tool and their own version of the truth.", solution: "System integration, or a unified ERP or CRM." },
  { icon: "workflow", title: "Inefficient workflows", text: "Work stalls between teams, nobody can see status, and exceptions go unnoticed.", solution: "Workflow applications with role-based dashboards and alerts." },
  { icon: "legacy", title: "Outdated software", text: "Unsupported systems, security risks and features that cannot be changed.", solution: "Phased modernisation, or replacement with a modern foundation." },
  { icon: "experience", title: "Poor digital experiences", text: "Customers phone or email for information they should be able to see themselves.", solution: "Customer portals, mobile apps and AI-assisted support." },
  { icon: "scale", title: "Limited scalability", text: "Growth adds headcount and licence costs faster than revenue.", solution: "Cloud-based systems and automation that absorb more volume." },
  { icon: "report", title: "Slow reporting and decisions", text: "Management reports are assembled by hand at month end.", solution: "Live dashboards and predictive models built on connected data." },
  { icon: "support", title: "Routine support overload", text: "Teams answer the same questions every day.", solution: "AI assistants trained on your own documentation, with escalation to people." },
  { icon: "risk", title: "Risk hidden in transactions", text: "Errors and irregular activity are spotted too late.", solution: "Anomaly detection that flags unusual transactions for review." },
];

export type Category = { icon: string; tag: string; title: string; text: LinkedText; points: string[] };

export const CATEGORIES: Category[] = [
  {
    icon: "foundation",
    tag: "Operations",
    title: "Business management systems",
    text: { text: "Ready-to-customise ERP, CRM, inventory and learning platforms that unify data and processes." },
    points: ["Finance, stock, purchasing and HR", "Pipelines, contacts and service", "Courses, assessments and reporting"],
  },
  {
    icon: "custom",
    tag: "Bespoke",
    title: "Custom business software",
    text: {
      text: "Systems built from scratch where your process is distinctive, or no product fits. Our [[link]] explain how these are scoped, built and supported.",
      link: { anchor: "custom software development services", href: "/services/custom-software-development" },
    },
    points: ["Operations platforms", "Approval workflows", "Legacy replacement"],
  },
  {
    icon: "ai",
    tag: "Intelligence",
    title: "AI-powered solutions",
    text: {
      text: "AI applied to specific business tasks: reading documents, answering questions, forecasting and flagging risk. The engineering behind them is covered by our [[link]].",
      link: { anchor: "AI development services", href: "/services/ai-development" },
    },
    points: ["Intelligent document processing", "AI customer service assistants", "Forecasting and anomaly detection"],
  },
  {
    icon: "integration",
    tag: "Efficiency",
    title: "Automation and system integration",
    text: { text: "Connecting the tools you already use and automating the work between them." },
    points: [
      "Salesforce, SAP ERP, ServiceNow, HubSpot, Microsoft Dynamics, Oracle Cloud, Jira",
      "Payment and accounting integrations",
      "Rule-based and AI-assisted workflows",
    ],
  },
  {
    icon: "experience",
    tag: "Experience",
    title: "Web and mobile applications",
    text: { text: "Portals, dashboards and apps that give customers and staff self-service access on any device." },
    points: ["Customer and partner portals", "Booking and ordering", "Field and employee apps"],
  },
  {
    icon: "saas",
    tag: "Products",
    title: "SaaS and digital products",
    text: { text: "Subscription platforms and new digital products, from first validated release to scale." },
    points: ["Multi-tenant foundations", "Subscriptions and billing", "Permissions and analytics"],
  },
];

export const FOUNDATIONS_INTRO =
  "Building every system from a blank page is rarely the best use of budget. These foundations cover common needs out of the box and are then tailored to your processes, branding and integrations.";

// VERIFY: each foundation exists as a reusable base.
// `href` + `anchor`: each card links to its page with a Primary target keyword
// as the anchor text (url audit D-05). The SaaS platform page is not published
// yet, so that card points at the MVP & SaaS development service.
export const FOUNDATIONS = [
  { icon: "erp", title: "ERP software", text: "Finance, inventory, HR and operations in one system, configured to your processes.", for: "Growing firms with stock, staff and finance spread across tools", href: "/solutions/erp-software", anchor: "custom ERP software development" },
  { icon: "crm", title: "CRM software", text: "Pipelines, contacts and customer service with built-in automation and AI insights.", for: "Sales and service teams with non-standard processes", href: "/solutions/crm-software", anchor: "custom CRM development" },
  { icon: "saas", title: "SaaS platform", text: "Multi-tenant foundations with subscriptions, billing, permissions and analytics.", for: "Businesses launching a subscription product", href: "/services/mvp-saas-development", anchor: "SaaS development services" },
  { icon: "lms", title: "Learning management system", text: "Course delivery, assessments, learner dashboards and reporting.", for: "Schools, training providers, corporate academies", href: "/solutions/lms-development", anchor: "LMS development services" },
  { icon: "inventory", title: "Inventory & warehouse", text: "Real-time stock, barcode workflows, purchasing and multi-location control.", for: "Wholesalers, retailers, distributors", href: "/solutions/inventory-management", anchor: "inventory management software" },
  { icon: "fleet", title: "Fleet & logistics", text: "Tracking, routing and dispatch, with AI-assisted, demand-aware route planning.", for: "Carriers, delivery and field-service firms", href: "/solutions/fleet-management", anchor: "fleet management software UK" },
];

export const NEEDS_INTRO =
  "The right approach depends less on your sector than on your stage, budget and how distinctive your processes are. These are typical starting points, not fixed packages.";

export const NEEDS = [
  { icon: "rocket", title: "Start-ups and new products", text: "Validate demand before committing a large budget.", route: "A focused first release on a SaaS foundation, then iterate on real usage." },
  { icon: "store", title: "Small businesses outgrowing spreadsheets", text: "Bring scattered data and manual steps into one system without enterprise cost.", route: "A customised ERP, CRM or inventory foundation with a few key integrations." },
  { icon: "growth", title: "Growing mid-sized companies", text: "Remove bottlenecks that grow with headcount: approvals, reporting, customer queries.", route: "Integration plus automation, then AI for document-heavy or support-heavy work." },
  { icon: "enterprise", title: "Enterprises with complex estates", text: "Connect and modernise many systems without disrupting operations.", route: "Phased modernisation, integration across ERP and CRM, and targeted custom platforms." },
  { icon: "shield", title: "Regulated organisations", text: "Improve processes while meeting strict data protection and audit requirements.", route: "Private cloud deployment, role-based access and audit trails designed in from the start." },
  { icon: "service", title: "Service businesses", text: "Give clients self-service and cut routine enquiries.", route: "A client portal or app, with an AI assistant for common questions." },
];

export const INDUSTRIES_INTRO: LinkedText = {
  text: "The same building blocks are applied differently in each sector, because rules, data and integrations differ. The examples below show where each solution type typically fits; you can explore [[link]] in more detail.",
  link: { anchor: "industry-specific software and AI solutions", href: "/industries" },
};

export const INDUSTRIES = [
  { icon: "health", title: "Healthcare & MedTech", text: "Patient portals, triage and appointment workflows, clinical document processing.", considerations: ["Special category data", "NHS integration standards"] },
  { icon: "finance", title: "Finance & Fintech", text: "Ledger and reconciliation automation, billing, fraud and anomaly detection.", considerations: ["Audit trails", "Strong authentication"] },
  { icon: "ecommerce", title: "E-Commerce", text: "Order and inventory systems, marketplaces, demand forecasting, support assistants.", considerations: ["Peak scaling", "Payment integration"] },
  { icon: "lms", title: "EdTech & E-Learning", text: "Learning management systems, assessments, learner dashboards.", considerations: ["Accessibility", "Children's data"] },
  { icon: "property", title: "Real Estate", text: "Listings, tenant management, lease automation, maintenance requests.", considerations: ["Document management", "Reminders"] },
  { icon: "fleet", title: "Supply Chain & Logistics", text: "Fleet tracking, dispatch, predictive routing, warehouse management.", considerations: ["Real-time data", "Driver apps"] },
  { icon: "saas", title: "Enterprise SaaS", text: "Multi-tenant platforms, subscriptions, billing and usage analytics.", considerations: ["Tenant isolation", "SSO"] },
  { icon: "factory", title: "Smart Manufacturing", text: "Production planning, inventory, quality inspection and maintenance prediction.", considerations: ["Shop-floor data", "Traceability"] },
];

export const PROCESS_INTRO =
  "Six steps take a challenge to a working solution. Work is delivered in two-week sprints with weekly demos, so you see progress early. Most first releases are live in 6–8 weeks, and larger enterprise solutions typically take 3–6 months.";

export const PROCESS = [
  { title: "Understand the business problem", text: "Workshops with the people affected, mapping today's process, systems and costs.", outcome: "A clear problem statement and success measures." },
  { title: "Identify the right solution", text: "Compare a ready foundation, a custom build, AI, automation or integration, and say plainly when an existing product will do.", outcome: "A recommended approach with its trade-offs." },
  { title: "Plan architecture and technology", text: "Data, integrations, hosting, security and the release plan.", outcome: "A scoped estimate with milestones." },
  { title: "Develop and integrate", text: "Configure or build, then connect to your existing systems, in sprints with weekly demos.", outcome: "A working solution in a test environment." },
  { title: "Test and assure quality", text: "Functional, integration, security and user acceptance testing with your team.", outcome: "Sign-off for launch." },
  { title: "Deploy and keep improving", text: "Launch, training, monitoring and ongoing improvements based on real use.", outcome: "A supported solution that evolves with the business." },
];

export const CHOOSE_INTRO = "Use these questions to see which route fits. Many projects combine more than one.";

export const CHOOSE = {
  headers: ["If your main need is…", "Consider", "Why"],
  rows: [
    ["One system for finance, stock, sales or learning", "A customised solution foundation", "Fastest route for common processes, tailored rather than generic"],
    ["A process no product supports", "Custom business software", "Built around what makes your operation different"],
    ["Less time spent on documents, queries or forecasting", "AI-powered solutions", "Handles judgement-based work that rules alone cannot"],
    ["Fewer manual hand-offs between existing tools", "Automation and integration", "Improves what you have without replacing it"],
    ["Self-service for customers, partners or staff", "Web portals and mobile apps", "Access anywhere, on any device"],
    ["A product to sell on subscription", "SaaS and digital products", "Built for many customers, plans and billing"],
  ],
};

export const READINESS = [
  { label: "The problem", text: "Can you describe what goes wrong today, and roughly what it costs in time, errors or lost sales?" },
  { label: "The people", text: "Do you know who uses the process now, and who will own the new solution?" },
  { label: "The systems and data", text: "Can you list the tools involved and where the important data lives?" },
  { label: "The outcome", text: "Do you know what \"better\" looks like, such as faster turnaround, fewer errors or self-service?" },
  { label: "The constraints", text: "Are there deadlines, budget ranges or compliance rules we should know about?" },
  { label: "Not sure yet?", text: "That is fine. Answering these questions together is the first part of discovery." },
];

export const WHY = [
  { icon: "target", title: "Problem first, technology second", text: "We recommend the simplest solution that solves the problem, including configuring what you already own when that is enough." },
  { icon: "foundation", title: "Foundations plus custom engineering", text: "Ready-to-customise ERP, CRM, SaaS, LMS, inventory and fleet foundations shorten time to launch, with custom development where your process is distinctive." },
  { icon: "ai", title: "AI and software in one team", text: "AI, automation, web, mobile, cloud and integration skills together, so the intelligent layer fits the systems it depends on." },
  { icon: "integration", title: "Connects to what you already run", text: "Integrations with Salesforce, SAP ERP, ServiceNow, HubSpot, Microsoft Dynamics, Oracle Cloud and Jira, plus payment and accounting tools." },
  { icon: "shield", title: "Security and GDPR best practice", text: "OWASP-based engineering, encryption, role-based access, regular security testing and NDAs on request." },
  { icon: "loop", title: "Transparent delivery", text: "Weekly demos in two-week sprints, fixed-price or time-and-materials options, and support after launch." },
];

export const FAQS = [
  {
    q: "What business solutions does ClickMasters offer?",
    a: ["We provide ready-to-customise business systems (ERP, CRM, SaaS platform, learning management, inventory and warehouse, and fleet and logistics), custom business software, AI-powered solutions such as document processing and customer service assistants, automation and system integration, web and mobile applications, and SaaS products. Most projects combine two or three of these around a specific business problem."],
  },
  {
    q: "What is the difference between your solutions and your services?",
    a: ["Solutions describe the business problem being solved and the type of system that solves it, for example a CRM for a field sales team or AI that processes supplier invoices. Services describe the engineering we use to deliver it, such as custom software, web application, mobile app or AI development. Start with this page if you know the problem; start with a service page if you already know what needs building."],
  },
  {
    q: "Should we customise an existing system or build custom software?",
    a: ["Customise when your process is broadly standard and a foundation covers most requirements, because it is usually faster and cheaper. Build custom when the process is a competitive advantage, the gaps are large, or you need integrations no product supports. Many businesses combine the two: a customised core system with custom modules where they need to be different."],
  },
  {
    q: "How do I know whether my business needs AI?",
    a: ["AI helps when work involves judgement on unstructured information: reading documents, answering varied questions, forecasting or spotting unusual patterns. If a task follows clear, fixed rules, standard automation is often cheaper and more predictable. We assess this during discovery and recommend AI only where it adds clear value."],
  },
  {
    q: "Can your solutions integrate with our existing systems?",
    a: ["Yes. We integrate with platforms such as Salesforce, SAP ERP, ServiceNow, HubSpot, Microsoft Dynamics, Oracle Cloud and Jira, as well as payment gateways, accounting tools and legacy software. Where an older system has no API, we can use its database, file exchange or a middleware layer."],
  },
  {
    q: "What does business process automation involve?",
    a: ["We map the current process, measure where time and errors occur, then automate the repeatable steps, such as routing approvals, syncing records, generating documents and sending notifications. AI handles steps that need judgement, and exceptions go to people with the context they need."],
  },
  {
    q: "Do you offer solutions for small businesses?",
    a: ["Yes. Small businesses often benefit most from a customised foundation, such as a CRM or inventory system, or from automating a few high-volume tasks. These approaches avoid enterprise-scale cost. We start with the problem causing the most cost or frustration and build from there."],
  },
  {
    q: "Can you modernise outdated business software?",
    a: ["Yes. We audit the existing system and its data, then recommend whether to improve it, replace it with a modern foundation, or rebuild it in stages while it keeps running. Phased approaches keep operations stable and let each step be tested before the next."],
  },
  {
    q: "How long does it take to implement a solution?",
    a: ["Most first releases are live in 6–8 weeks, and larger enterprise solutions typically take 3–6 months. Customising a foundation is usually quicker than a custom build. Integrations, data migration and decision speed are the main factors in the timeline."],
  },
  {
    q: "How much do business software and AI solutions cost?",
    a: ["Cost depends on the solution type, how much customisation is needed, the number of users and integrations, data migration, security requirements and ongoing support. We offer fixed-price and time-and-materials engagements and provide a clear estimate with milestones after a free consultation."],
  },
  {
    q: "How do you keep our business data secure?",
    a: ["We follow OWASP standards and GDPR best practice. We encrypt data, apply role-based access so people only see what their role requires, carry out regular security testing and can deploy into private cloud environments. We sign NDAs on request before you share sensitive information."],
  },
  {
    q: "How do we get started?",
    a: ["Tell us about the challenge, the systems involved and what a good outcome looks like. We will arrange a free consultation, recommend the most suitable solution type and follow up with a scoped estimate and next steps. We usually respond within a few hours."],
  },
];

export const FINAL_CTA = {
  title: "Tell Us the Challenge.",
  titleAccent: "We Will Recommend the Right Solution.",
  body: {
    text: "You do not need a specification to start. Bring the problem: the process that takes too long, the systems that do not talk to each other, the customer experience you want to improve. When you are ready, [[link]], and we will come back with a practical recommendation, including when the answer is a smaller change than you expected.",
    link: { anchor: "talk to our team about your business challenge", href: "/contact" },
  } as LinkedText,
  bring: ["The problem and its cost", "Systems involved", "Users affected", "Timescale and budget", "What success looks like"],
};
