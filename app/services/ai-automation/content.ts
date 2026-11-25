/*
 * /services/ai-automation content, from
 * "ClickMasters AI Automation Services: SEO Content Pack" (25 Nov 2026).
 * Edit copy here; ./page.jsx only renders it.
 *
 * VERIFY comments mark business facts the pack says need owner confirmation.
 * Body links: exactly the pack's four (CTAs, breadcrumb, header and footer
 * are template elements).
 */

export const PATH = "/services/ai-automation";

export const SEO = {
  // Rendered as "AI Automation Services UK | Workflow Automation | ClickMasters" (62 chars).
  title: "AI Automation Services UK | Workflow Automation",
  // The pack's wording, tightened to stay within 155 characters.
  description:
    "AI automation services for UK businesses: workflows that link your systems, read documents and route exceptions to people. Rules first, AI where it helps.",
  ogTitle: "AI Automation Services | ClickMasters",
  ogDescription:
    "Automated workflows across your CRM, ERP, email and documents, with rules first, AI where it helps and people in control of exceptions.",
};

export type LinkedText = { text: string; link?: { anchor: string; href: string } };

const IMG = "/assets/Services/ai-automation";

/**
 * Diagrams drawn for this page (alt text from the pack's image table) and
 * photos from Unsplash (Unsplash License: free for commercial use, no
 * attribution required; credits kept here for reference).
 */
export const IMAGES = {
  hero: {
    src: `${IMG}/ai-automation-invoice-workflow.png`, width: 1200, height: 918,
    alt: "An AI automation workflow: an incoming email with an invoice triggers the workflow, data is extracted and validated, matched against the ERP, approved automatically within limits or sent to a person, then posted and logged",
  },
  approaches: {
    src: `${IMG}/automation-approaches-compared.png`, width: 1720, height: 560,
    alt: "Comparison of rule-based automation, RPA, AI-powered workflow automation, intelligent process automation and AI agents by how they work and what they suit",
  },
  architecture: {
    src: `${IMG}/ai-workflow-architecture.png`, width: 1720, height: 740,
    alt: "AI workflow architecture: a trigger feeds data collection and validation, rule-based processing and an AI step with schema and confidence checks, a decision point that either executes automatically through system APIs or routes to human approval, with logging, retries and an exception queue throughout",
  },
  integration: {
    src: `${IMG}/automation-integration-reliability.png`, width: 1720, height: 600,
    alt: "Integration reliability: scoped credentials, data mapping, validation, retries with back-off and idempotent re-runs between a workflow and connected business systems, with failures sent to an exception list",
  },
  matrix: {
    src: `${IMG}/automation-prioritisation-matrix.png`, width: 1720, height: 760,
    alt: "Workflow prioritisation: candidate processes scored on business value, process stability, risk and technical feasibility, with the best starting candidates highlighted",
  },
  monitoring: {
    src: `${IMG}/automation-monitoring-dashboard.png`, width: 1720, height: 760,
    alt: "Automation monitoring dashboard showing workflow throughput, exception rates, failed steps and items awaiting approval",
  },
  // Photo: Cht Gsml (unsplash.com/photos/QfQW294I8sQ)
  desk: {
    src: `${IMG}/automation-desk-calculator-notebook.webp`, width: 1200, height: 800,
    alt: "A calculator, a squared notebook with a pencil and a folded sheet of paperwork on a white office desk",
  },
  // Photo: Trans Russia (unsplash.com/s/photos/industrial-robots)
  conveyor: {
    src: `${IMG}/automation-conveyor-and-robot-arm.webp`, width: 1200, height: 800,
    alt: "Two people discussing an automated roller conveyor next to a collaborative robot arm and a status light",
  },
  // Photo: Kevin Ache (unsplash.com/s/photos/server-room)
  servers: {
    src: `${IMG}/automation-server-rack-cables.webp`, width: 1200, height: 800,
    alt: "Server and network racks with patch panels and orange network cables",
  },
  // Photo: Luke Chesser (unsplash.com/photos/JKUTrJ4vK00)
  dashboard: {
    src: `${IMG}/automation-analytics-dashboard-laptop.webp`, width: 1200, height: 800,
    alt: "A laptop screen showing analytics charts and summary figures on a dark dashboard",
  },
} as const;

export const HERO = {
  eyebrow: "AI Automation Services UK",
  title: "AI Automation Services UK:",
  titleAccent: "Intelligent Workflows That Connect Your Systems and Handle the Work in Between",
  lead:
    "In most businesses the expensive work is not the big decisions. It is the steady flow of small tasks between systems: reading an email and keying it into the CRM, checking an invoice against a purchase order, copying an order into the ERP, chasing an approval, compiling the same report every Monday. Each task is simple. Together they consume skilled people's time, introduce errors and slow everything down.",
  audience:
    "ClickMasters builds AI automation that takes that work off your team. We map the process as it really runs, automate the stable steps with dependable rules and integrations, use AI only for the steps that need judgement, such as reading a document or classifying a request, and route exceptions to people with the context they need to act.",
  stats: [
    { value: "Rules first", label: "AI only where it beats deterministic logic" },
    { value: "Exceptions to people", label: "With the context already gathered" },
    { value: "Every run logged", label: "Throughput and exception rates visible" },
    { value: "Connected systems", label: "CRM, ERP, email, documents and databases" },
  ],
};

export const WHAT_IS = {
  p1: "**AI automation** is the use of software to carry out business processes automatically, combining conventional workflow automation and system integration with AI models for the steps that involve unstructured information or judgement.",
  p2: "A typical automated process does four things:",
  steps: [
    ["Receives an input:", "an email, a form, a document, a record change, a scheduled time or a message from another system."],
    ["Processes it:", "validates and transforms data with rules, and, where needed, uses AI to classify, extract, summarise, interpret or draft."],
    ["Acts on other systems:", "creates or updates records, sends messages, generates documents or calls APIs."],
    ["Records what happened:", "logs each step, raises exceptions and reports on throughput."],
  ],
  helpsTitle: "Where AI genuinely helps",
  helpsIntro: "AI earns its place where inputs are unstructured or vary in ways rules cannot anticipate:",
  helps: [
    ["Classify:", "what is this email about, how urgent is it, which team should handle it?"],
    ["Extract:", "pull the supplier, amounts and dates from an invoice whatever its layout."],
    ["Summarise:", "condense a long thread or report into the points a person needs."],
    ["Interpret:", "decide whether a customer reply is a complaint, a question or a confirmation."],
    ["Draft:", "prepare a reply or document for a person to check."],
  ],
  notTitle: "Where it does not",
  not: "If the input is already structured and the rule is clear, such as \"when a deal is marked won, create the project and notify finance\", deterministic automation is more reliable, cheaper to run and easier to audit. AI adds cost, latency and the possibility of a wrong answer, so we use it only where it provides a clear advantage.",
  loopTitle: "When people stay in the loop",
  loop: "Approvals are built in wherever an action is high-impact or hard to reverse, such as payments, refunds, external communications, changes to financial records or decisions affecting individuals, and wherever AI confidence is low.",
};

export const COMPARE = {
  headers: ["Approach", "How it works", "Best for", "Limitations"],
  rows: [
    ["Rule-based workflow automation", "Predefined triggers, conditions and actions, usually through APIs", "Stable processes with structured data", "Breaks when inputs vary or need interpretation"],
    ["Robotic process automation (RPA)", "Software that operates existing applications through their user interface, as a person would", "Older systems with no usable API", "Fragile when screens change; harder to maintain"],
    ["AI-powered workflow automation", "Rules and integrations, with AI models for steps involving unstructured input", "Documents, emails and requests that vary in format or wording", "AI steps need validation, monitoring and fallbacks"],
    ["Intelligent process automation (IPA)", "End-to-end processes combining rule-based steps, RPA where unavoidable, AI judgement and human review", "Back-office processes with mixed structured and unstructured work", "Needs careful process design and exception handling"],
    ["AI agent-based automation", "An AI system plans steps and chooses which permitted tools to use", "Varied, multi-step tasks where the path cannot be fixed in advance", "Less predictable; needs strict permissions and approval steps"],
  ],
  // Body link 1 of 4.
  outro: {
    text: "Most effective solutions are hybrids: deterministic rules for the stable backbone of the process, AI for the judgement steps, and people for exceptions and high-impact decisions. Where the work genuinely cannot be scripted in advance, a goal-driven agent may fit better than a fixed workflow; our [[link]] explains how those systems plan tasks and use tools within defined permissions.",
    link: { anchor: "AI agent development", href: "/services/ai-agent-development" },
  } as LinkedText,
};

export const HOW = {
  intro: "A reliable automated workflow is mostly ordinary engineering, with AI applied at specific points.",
  steps: [
    ["Trigger:", "a business event starts the workflow, such as a new email, a submitted form, a record change in the CRM, a file arriving or a schedule."],
    ["Data collection:", "the workflow gathers what it needs from the trigger and from related systems."],
    ["Input validation:", "formats, required fields and duplicates are checked before anything else happens."],
    ["Rule-based processing:", "deterministic rules handle everything that can be decided with certainty."],
    ["AI processing where required:", "a model classifies, extracts or drafts, returning structured output that is validated against a schema and a confidence threshold."],
    ["Business logic and decisions:", "rules decide what happens next based on the combined results, for example match, mismatch or needs review."],
    ["System integration:", "records are created or updated through APIs or database connections, with data mapped between systems."],
    ["Human approval:", "sensitive actions and low-confidence results wait for a person, who sees the evidence and can approve, correct or reject."],
    ["Automated execution:", "approved and low-risk steps run automatically."],
    ["Logging, monitoring and error handling:", "every run is logged; failed steps are retried safely and, if they still fail, appear on an exception list rather than disappearing."],
  ],
};

export const SERVICES = [
  { icon: "search", title: "Process discovery and automation assessment", text: "Mapping how a process actually runs today, including workarounds, measuring volumes and error points, and identifying which steps to automate, which need AI and which should stay with people." },
  { icon: "flow", title: "Custom AI workflow automation", text: "End-to-end automated workflows designed around your process, combining integrations, rules, AI steps, approvals and exception handling." },
  { icon: "file", title: "Intelligent document processing", text: "Reading invoices, claims, forms, contracts and onboarding documents, extracting the data you need, validating it against your records and passing it into your systems, with uncertain extractions sent for review." },
  { icon: "contacts", title: "CRM automation", text: "Capturing and enriching leads, updating records from emails and forms, assigning owners and triggering follow-up tasks, so your CRM reflects what is actually happening." },
  { icon: "finance", title: "ERP and finance workflow automation", text: "Synchronising orders, invoices, stock and master data between systems, matching documents to transactions and supporting reconciliation, with financial postings governed by approval rules." },
  { icon: "support", title: "Customer support automation", text: "Classifying and routing incoming requests, enriching tickets with customer and order data, and drafting suggested replies for agents." },
  { icon: "chart", title: "Data processing and reporting automation", text: "Collecting data from several systems, validating and combining it, and producing scheduled reports and summaries." },
  { icon: "mail", title: "Email and communication workflows", text: "Reading shared inboxes, identifying the intent of each message, attaching it to the right record and triggering the right workflow or response draft." },
  { icon: "plug", title: "API and system integration", text: "Connecting applications through their APIs, or through database, file exchange or middleware where no suitable API exists, as the foundation every automation relies on." },
  { icon: "dashboard", title: "Automation monitoring and optimisation", text: "Dashboards for throughput, exception rates and failures, alerting, and ongoing improvement of rules, AI steps and thresholds." },
];
// VERIFY: sales and lead management, enterprise orchestration and recruitment
// administration as named offerings (pack Part 2, owner action 2).
export const SERVICES_NOTE =
  "Sales and lead management, enterprise orchestration and recruitment administration workflows are delivered within the services above.";

type UseCase = { icon: string; title: string; problem: string; workflow: string; ai: string; systems: LinkedText; oversight: string };

export const PROCESSES: { note: string; items: UseCase[] } = {
  note: "Illustrative workflows. Each would be mapped and measured on your own process; they are not client case studies.",
  items: [
    { icon: "target", title: "Lead capture and qualification", problem: "Enquiries arrive from forms, emails and calls and wait for someone to log and research them.", workflow: "The enquiry is captured, deduplicated, enriched, scored against your criteria and assigned to a salesperson with a follow-up task.", ai: "Interpreting free-text enquiries and extracting company and need.", systems: { text: "Website forms, email, CRM." }, oversight: "Salespeople own contact and qualification decisions." },
    // Body link 2 of 4.
    { icon: "contacts", title: "CRM data updates", problem: "Records fall out of date because updating them is tedious.", workflow: "Emails, meeting notes and form submissions trigger proposed updates to contacts, deals and activities.", ai: "Identifying which record and field a message relates to.", systems: { text: "Email, calendar, CRM. Where the CRM itself needs redesigning around your sales and service process, our [[link]] builds that system.", link: { anchor: "custom CRM software", href: "/solutions/crm-software" } }, oversight: "Confirmation for changes to key fields." },
    { icon: "mail", title: "Sales follow-up workflows", problem: "Follow-ups depend on memory.", workflow: "Stage changes and inactivity trigger tasks, reminders and drafted follow-up emails.", ai: "Drafting context-aware follow-ups.", systems: { text: "CRM, email." }, oversight: "Salespeople review and send." },
    { icon: "support", title: "Customer support ticket classification", problem: "Tickets sit in a general queue until someone reads them.", workflow: "Each ticket is classified, prioritised, enriched with account and order data and routed.", ai: "Understanding the request whatever its wording.", systems: { text: "Help desk, CRM, order system." }, oversight: "Supervisors review routing accuracy; complaints go to people." },
    { icon: "inbox", title: "Email processing", problem: "Shared inboxes mix orders, queries, invoices and spam.", workflow: "Messages are classified, attachments extracted and each item passed to the right workflow.", ai: "Intent detection and attachment handling.", systems: { text: "Email, CRM, ERP, document storage." }, oversight: "Unclear messages go to a review queue." },
    { icon: "file", title: "Invoice and document extraction", problem: "Invoices arrive in many layouts and are keyed in by hand.", workflow: "Data is extracted, validated, matched to purchase orders and goods received, and posted when it matches.", ai: "Reading varied layouts.", systems: { text: "Email, ERP or accounting system." }, oversight: "Mismatches and payments above set limits need approval." },
    { icon: "chart", title: "Report generation", problem: "The same report is assembled by hand every week.", workflow: "Data is collected, checked and combined, and the report is produced and distributed on schedule.", ai: "Optional narrative commentary, with every figure taken from the data.", systems: { text: "Databases, ERP, CRM, spreadsheets." }, oversight: "Owners review commentary before distribution." },
    { icon: "archive", title: "Inventory notifications", problem: "Low stock is noticed too late.", workflow: "Stock levels below reorder points trigger alerts and draft purchase orders.", ai: "Usually not needed; rules are sufficient.", systems: { text: "Inventory or ERP system, email." }, oversight: "Buyers approve orders." },
    // Body link 3 of 4.
    { icon: "refresh", title: "ERP data synchronisation", problem: "Orders, customers and products are re-keyed between systems.", workflow: "Changes in one system are mapped and written to the others, with validation and conflict handling.", ai: "Rarely; this is integration work.", systems: { text: "ERP, CRM, e-commerce, warehouse. Where several systems really need replacing with one, our [[link]] covers that route.", link: { anchor: "custom ERP software", href: "/solutions/erp-software" } }, oversight: "A person resolves conflicts the rules cannot." },
    { icon: "cart", title: "E-commerce order workflows", problem: "Orders, payments, stock and despatch need coordinating across platforms.", workflow: "New orders are validated, stock is reserved, fulfilment is triggered and customers are updated.", ai: "Handling free-text delivery instructions or exceptions.", systems: { text: "E-commerce platform, payment provider, inventory, carriers." }, oversight: "Fraud checks, refunds and exceptions." },
    { icon: "team", title: "Recruitment administration", problem: "Candidates' documents and scheduling consume HR time.", workflow: "Applications are logged, documents checked for completeness and interviews scheduled.", ai: "Extracting details from documents.", systems: { text: "Recruitment platform, email, calendar." }, oversight: "All assessment and hiring decisions stay with people." },
    { icon: "dashboard", title: "Internal business reporting", problem: "Managers ask analysts for the same figures repeatedly.", workflow: "Scheduled data pulls produce dashboards and summaries.", ai: "Optional plain-English summaries.", systems: { text: "Databases and reporting tools." }, oversight: "Figures traceable to source." },
    { icon: "user", title: "Customer onboarding", problem: "Onboarding involves forms, document checks and set-up across several systems.", workflow: "Information is collected, documents checked, accounts created and welcome communications sent.", ai: "Reading and checking submitted documents.", systems: { text: "Forms, CRM, billing, document storage." }, oversight: "A person approves accounts where checks fail or risk rules apply." },
    { icon: "check", title: "Data validation and enrichment", problem: "Incomplete or inconsistent records cause downstream errors.", workflow: "Records are checked against rules and reference data, standardised and enriched.", ai: "Normalising free-text fields.", systems: { text: "CRM, ERP, databases." }, oversight: "Uncertain matches go for review." },
  ],
};

export const INDUSTRIES = {
  note: "Typical opportunities and risks. Suitability and regulatory requirements are assessed per project; building an automation does not make a process compliant on its own.",
  items: [
    { icon: "health", title: "Healthcare administration", text: "Referral and correspondence processing, appointment administration and records filing.", risk: "Health data is special category data, so access and retention must be tightly controlled, and clinical decisions stay with clinicians." },
    { icon: "bank", title: "Financial services", text: "Onboarding document checks, transaction reconciliation and case preparation.", risk: "Decisions affecting customers need human review and a full audit trail." },
    { icon: "cart", title: "E-commerce and retail", text: "Order, returns and catalogue workflows.", risk: "Payment and refund actions need limits and approval." },
    { icon: "truck", title: "Logistics and supply chain", text: "Delivery exception handling, proof-of-delivery processing and customer updates.", risk: "Timing matters, so monitoring and fallbacks are essential." },
    { icon: "education", title: "Education", text: "Admissions administration, enquiry handling and records processing.", risk: "Children's data requires extra care." },
    { icon: "home", title: "Real estate", text: "Enquiry routing, tenancy document processing and maintenance request triage.", risk: "" },
    { icon: "briefcase", title: "Professional services", text: "Matter or engagement set-up, time and billing data checks, and document intake.", risk: "Confidentiality and conflict checks." },
    { icon: "factory", title: "Manufacturing", text: "Purchase order and supplier document processing, quality report handling and production data reporting.", risk: "" },
    { icon: "code", title: "Software and technology", text: "Support triage, customer onboarding and usage-based reporting.", risk: "" },
  ],
};

export const INTEGRATIONS = {
  // VERIFY: named RPA or low-code platforms are not listed (pack owner action 1).
  intro:
    "Automation is only as reliable as its integrations. Common connections include CRM and ERP systems, inventory and e-commerce platforms, accounting software, email, customer support platforms, databases and your own internal applications. We have experience integrating with platforms such as Salesforce, SAP ERP, ServiceNow, HubSpot, Microsoft Dynamics, Oracle Cloud and Jira, plus payment and accounting tools; other products are confirmed per project.",
  platforms: ["Salesforce", "SAP ERP", "ServiceNow", "HubSpot", "Microsoft Dynamics", "Oracle Cloud", "Jira"],
  reliableTitle: "What makes an integration dependable",
  reliable: [
    ["Authentication:", "secure, revocable credentials such as OAuth tokens or scoped API keys, stored in a secrets manager rather than in code."],
    ["Permissions:", "each integration account has only the access the workflow needs."],
    ["Data mapping:", "fields, formats, codes and identifiers mapped explicitly between systems, including what happens when they do not match."],
    ["Validation:", "data checked before it is written, so one bad record does not corrupt another system."],
    ["Retries and idempotency:", "failed calls retried with back-off, and re-runs designed so they never create duplicates."],
    ["Failure handling:", "steps that still fail land on an exception list with the reason, rather than disappearing."],
    ["Rate limits and change:", "respecting each system's limits and monitoring for API changes."],
  ],
  // Body link 4 of 4.
  outro: {
    text: "Where an older system has no usable API, options include database access, file exchange, a middleware layer or, as a last resort, interface-level automation. When the integration layer itself is a substantial piece of software, our [[link]] team builds and maintains it.",
    link: { anchor: "custom software development", href: "/services/custom-software-development" },
  } as LinkedText,
};

export const ENTERPRISE = {
  intro: "Automating one workflow is a project. Automating many is an operating capability, and it needs:",
  items: [
    { icon: "flow", title: "Workflow orchestration", text: "A central way to run, schedule, version and pause workflows." },
    { icon: "team", title: "Role-based permissions", text: "Who can build, change, approve and view each workflow." },
    { icon: "lock", title: "Data access control", text: "Each workflow sees only the data it needs." },
    { icon: "plug", title: "Integration architecture", text: "Shared, maintained connectors rather than one-off scripts." },
    { icon: "history", title: "Audit logs", text: "Every run, decision, AI output and approval recorded." },
    { icon: "dashboard", title: "Monitoring and observability", text: "Throughput, latency, failure and exception dashboards, with alerts." },
    { icon: "alert", title: "Exception management", text: "Queues with clear ownership and service levels." },
    { icon: "check", title: "Human approval", text: "Consistent approval patterns for high-impact actions." },
    { icon: "shield", title: "Security and privacy", text: "Encryption, secrets management and data retention rules." },
    { icon: "stack", title: "Scalability", text: "Queues and background processing that absorb peaks." },
    { icon: "tools", title: "Maintenance and support", text: "Someone accountable when a connected system changes." },
  ],
  chooseTitle: "Choosing which workflows to automate first",
  chooseIntro: "Score candidate processes on four factors:",
  factors: [
    ["Business value:", "volume, time spent, error cost and delay cost."],
    ["Process stability:", "whether the steps are consistent enough to automate."],
    ["Risk:", "the consequence of a wrong action and how easily it can be reversed."],
    ["Technical feasibility:", "whether the systems involved can be integrated and the data is accessible."],
  ],
  chooseOutro: "High-value, stable, lower-risk processes with accessible systems are the best place to start.",
};

export const PROCESS = [
  { title: "Business process discovery", text: "Walk through the process with the people who do it, including the workarounds nobody wrote down." },
  { title: "Automation opportunity assessment", text: "Measure volumes, time and error points, and score candidate processes for value, stability, risk and feasibility." },
  { title: "Workflow mapping", text: "Design the future workflow: what is automated by rules, what uses AI, where people approve and how exceptions are handled." },
  { title: "Technical feasibility analysis", text: "Check API access, data quality and system constraints, and test AI steps on samples of real inputs." },
  { title: "Architecture and integration planning", text: "Define triggers, integrations, data mappings, orchestration, logging, hosting and security." },
  { title: "Automation development", text: "Build the integrations, rules and workflow logic in two-week sprints with weekly demos." },
  { title: "AI model integration where appropriate", text: "Add classification, extraction or drafting steps with structured output, validation and confidence thresholds." },
  { title: "Testing and validation", text: "Test with real and edge-case inputs, including failures in connected systems, and measure accuracy of AI steps and exception rates." },
  { title: "Security and permission review", text: "Review credentials, access scopes, approval rules, data handling and logs." },
  { title: "Deployment and monitoring", text: "Release in stages, often running alongside the manual process at first, with dashboards and alerts." },
  { title: "Continuous improvement", text: "Review exceptions and failures, refine rules and thresholds, and automate further steps when results justify it." },
];

export const PROCESS_OUTRO =
  "We offer fixed-price and time-and-materials engagements, with a scoped estimate and milestones after discovery.";

export const SECURITY = {
  intro: "Reliable automation takes far more than connecting an AI model to an application. The controls below are what keep it safe in production.",
  items: [
    { icon: "key", title: "Authentication and least-privilege access", text: "Each workflow and integration runs under its own credentials with the minimum permissions required, stored securely and rotated." },
    { icon: "plug", title: "Secure API integrations", text: "Encrypted connections, verified webhooks and scoped access tokens for every connected system." },
    { icon: "privacy", title: "Data privacy and sensitive information", text: "Personal data is minimised, access is controlled and retention periods are defined, in line with UK GDPR. Where AI providers are used, their data retention and training terms are reviewed before your data is sent, and open-weight models can be hosted in your own environment where needed." },
    { icon: "check", title: "Input and AI output validation", text: "Inputs are checked before processing, and AI outputs must match a defined structure and pass confidence and business-rule checks before they are used." },
    { icon: "shield", title: "Prompt injection risks", text: "Where language models read emails or documents, that content is treated as untrusted and cannot change what the workflow is permitted to do. We design against the OWASP Top 10 for LLM Applications." },
    // VERIFY: have a data protection adviser review this sentence (pack owner action 3).
    { icon: "user", title: "Human approval for high-impact actions", text: "Payments, refunds, external communications, deletions and decisions affecting individuals can require approval. Where automated processing contributes to significant decisions about people, UK rules on automated decision-making require safeguards such as meaningful human involvement; your data protection adviser should confirm what applies." },
    { icon: "history", title: "Audit trails", text: "Every run records its inputs, decisions, AI outputs, approvals and actions." },
    { icon: "refresh", title: "Error handling, retries and fallbacks", text: "Safe retries, idempotent re-runs, timeouts and a manual fallback route mean a failure becomes a visible exception rather than lost work." },
    { icon: "alert", title: "Monitoring and alerting", text: "Throughput, exception rates and failures are visible on dashboards, with alerts when something stops or behaves unusually." },
    { icon: "archive", title: "Data retention", text: "Logs and processed data are kept only as long as your policy requires." },
  ],
  note: "This is technical guidance, not legal advice; we can supply the technical detail your team needs for a Data Protection Impact Assessment.",
};

export const WHY = {
  intro: "Off-the-shelf automation platforms and the automation features built into many business products are often enough for simple, single-system tasks. If a low-code tool already handles the workflow reliably, use it.",
  whenTitle: "Custom AI automation is worth considering when:",
  when: [
    "The process spans several systems, including internal or older ones.",
    "Steps involve documents, emails or requests that rules cannot interpret.",
    "You need specific approval rules, permissions and audit trails.",
    "Exceptions must be handled consistently and visibly.",
    "Volumes, reliability or data requirements exceed what a general tool can support.",
    "You want control over the logic, the AI models and where data is processed.",
  ],
  answers: [
    { icon: "search", title: "Process first", text: "We map and measure the process before automating it." },
    { icon: "flow", title: "Rules first, AI where it helps", text: "Deterministic steps for certainty, AI for judgement." },
    { icon: "alert", title: "Exceptions designed in", text: "Queues with retries, safe re-runs and a clear exception list." },
    { icon: "plug", title: "Integration experience", text: "Salesforce, SAP ERP, ServiceNow, HubSpot, Microsoft Dynamics, Oracle Cloud and Jira, plus payment and accounting tools." },
    { icon: "brain", title: "AI and software engineering in one team", text: "Document processing, classification and drafting built into the same workflows as the integrations." },
    { icon: "support", title: "Transparent delivery", text: "Two-week sprints, weekly demos, NDAs on request and support after launch." },
  ],
};

export const FAQS: { q: string; a: string[] }[] = [
  { q: "What are AI automation services?", a: ["AI automation services design and build automated business workflows that connect your systems and combine conventional rules and integrations with AI models for steps such as reading documents, classifying requests or drafting responses, with exceptions and high-impact actions routed to people."] },
  { q: "How does AI automation work?", a: ["A trigger, such as an email, form or record change, starts a workflow. Data is collected and validated, rules handle the clear-cut steps, an AI model handles unstructured inputs where needed, and the workflow updates your systems through their APIs, asks a person to approve sensitive actions and logs every step."] },
  { q: "What is the difference between AI automation and traditional automation?", a: ["Traditional automation follows fixed rules on structured data, which is reliable for stable processes. AI automation adds models that can interpret unstructured information, such as varied documents or free-text emails. Most effective solutions combine both, using AI only where rules cannot do the job."] },
  { q: "Can AI automation integrate with existing CRM and ERP systems?", a: ["Yes. Workflows connect to CRM and ERP systems through their APIs, with explicit data mapping, validation, retries and error handling. Where no suitable API exists, database access, file exchange or middleware can be used."] },
  { q: "Which business processes can be automated using AI?", a: ["Common candidates include invoice and document processing, email and ticket triage, lead capture and CRM updates, order and data synchronisation between systems, reporting and customer onboarding. The best candidates are high-volume, reasonably stable and currently manual."] },
  { q: "Is AI automation suitable for small businesses?", a: ["Often, yes, especially for one or two high-volume tasks such as processing invoices or handling a shared inbox. Small businesses should start with the process causing the most cost or delay, and check first whether an existing tool's built-in automation is enough."] },
  { q: "What is the difference between AI automation and AI agents?", a: ["AI automation runs a defined workflow, with AI applied at specific steps. An AI agent decides its own steps at run time and chooses which permitted tools to use, which suits varied tasks but is less predictable. Many systems use automation for the backbone and an agent for the most variable steps."] },
  { q: "How much does AI automation development cost?", a: ["Cost depends on the number of processes and systems involved, the condition of their APIs and data, how many steps need AI, the approval and exception design, testing depth, hosting and ongoing monitoring. We provide a fixed-price or time-and-materials estimate with milestones after discovery."] },
  { q: "How long does it take to implement an AI automation solution?", a: ["It depends mainly on process complexity, the number of integrations, API access, data quality and the level of testing the risk requires. Starting with one well-understood process is the fastest route to a reliable first automation."] },
  { q: "Is AI automation secure for business operations?", a: ["It can be, when designed for it: least-privilege credentials, secure integrations, validation of inputs and AI outputs, human approval for high-impact actions, audit logs, safe retries and monitoring. No automation is error-free, so controls should match the risk of each action."] },
];

export const FINAL_CTA = {
  title: "Tell Us the Process That Takes Too Long.",
  titleAccent: "We Will Show You What Can Be Automated.",
  body: {
    text: "You do not need a specification to start. Describe the process, the systems involved and where things go wrong. We will map it, show you which steps rules can handle, where AI genuinely helps and where people should stay in control, and follow with a scoped estimate.",
  } as LinkedText,
  bring: ["The process and its steps today", "The systems involved", "Volumes and where errors happen", "Actions that need approval", "Data and hosting requirements"],
};

export const SCHEMA_SERVICE = {
  name: "AI Automation Services",
  alternateName: "Intelligent Process Automation",
  serviceType: ["AI workflow automation", "Intelligent process automation", "Intelligent document processing", "Business systems integration"],
  description: SEO.description,
  relatedServicePath: "/services/ai-development",
};

/** Social sharing image content (used by ./opengraph-image.tsx). */
type OgTone = "plain" | "purple" | "teal" | "sun";
export const OG: { title: string; accent: string; rows: [string, OgTone][][] } = {
  title: "AI Automation Services",
  accent: "Rules first, AI where it helps",
  rows: [
    [["Exceptions routed to people", "purple"]],
    [["Trigger", "plain"], ["Validate", "plain"], ["Act", "plain"]],
    [["AI step", "teal"], ["Rules", "teal"]],
    [["CRM · ERP · Email · Documents", "sun"]],
  ],
};
