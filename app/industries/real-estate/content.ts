/*
 * /industries/real-estate content, from
 * "ClickMasters Real Estate Industry Page: SEO Content Pack" (27 Nov 2026).
 * Edit copy here; page.jsx only renders it.
 *
 * Inline links use [anchor](/path) and render through <RichText>.
 * VERIFY comments mark items the pack says need owner confirmation (section G).
 * "Custom CRM software" queries belong to /solutions/crm-software; this page links there.
 */

export const PATH = "/industries/real-estate";

export const SEO = {
  title: "AI Real Estate Solutions & Property Software UK",
  description:
    "AI solutions for real estate and custom property software for UK agencies, property managers and PropTech firms: smarter search, listings, leads and automation.",
  ogTitle: "AI-Powered Real Estate & PropTech Software | ClickMasters",
  ogDescription:
    "Property search, listing workflows, lead management, tenant portals, maintenance automation and integrations for UK property businesses.",
};

const IMG = "/assets/industries/real-estate";

/*
 * Photos from Unsplash (Unsplash License, free to use). The pack advises against
 * key-handover stock images and skylines with "AI" overlays.
 */
export const IMAGES = {
  // Photo: William V (unsplash.com/photos/nFCqDLtLHvU)
  street: {
    src: `${IMG}/real-estate-uk-terraced-street.webp`, width: 1200, height: 900,
    alt: "Long UK street of red-brick terraced houses with parked cars under a clear sky",
  },
  // Photo: SM Rodriguez (unsplash.com/photos/NNZ_u-WKgIo)
  apartments: {
    src: `${IMG}/real-estate-apartment-building.webp`, width: 1200, height: 800,
    alt: "Modern apartment building with balconies and large windows above a brick ground floor",
  },
  // Photo: Clay Banks (unsplash.com/photos/b6Bs19onFtY)
  interior: {
    src: `${IMG}/real-estate-flat-interior.webp`, width: 1200, height: 800,
    alt: "Bright, simply furnished living space with a large window, representing the kind of property a listing describes",
  },
  // Photo: Bermix Studio (unsplash.com/photos/iwz5tmhjl7o)
  maintenance: {
    src: `${IMG}/real-estate-maintenance-tools.webp`, width: 1200, height: 800,
    alt: "Tape measure, spanner, pliers, Allen keys and a drill on a workbench, representing property maintenance jobs",
  },
  // Photo: Amsterdam City Archives (unsplash.com/photos/1hSh1aDG6Mg)
  plans: {
    src: `${IMG}/real-estate-floor-plans-elevations.webp`, width: 1200, height: 914,
    alt: "Architectural drawing of terraced houses showing elevations, a section and floor plans, representing property documents",
  },
  // Photo: Aalo Lens (unsplash.com/photos/b08Pe9MV_eU)
  lobby: {
    src: `${IMG}/real-estate-commercial-lobby.webp`, width: 1200, height: 675,
    alt: "Modern commercial building lobby with lifts, marble walls and a reception desk",
  },
} as const;

export const HERO = {
  eyebrow: "Real Estate & PropTech",
  title: "AI-Powered Real Estate Solutions",
  titleAccent: "and Property Software Development",
  lead:
    "Property businesses run on information: listings, applicant requirements, viewings, offers, tenancy documents, maintenance requests, compliance dates and portfolio figures, often spread across several systems and inboxes. ClickMasters designs and builds AI solutions for real estate and custom property software that bring that information together. We help agencies, property managers, developers, investors and PropTech businesses spend less time on administration and more time with clients.",
  audience:
    "That might be AI property search that understands what buyers and renters actually ask for, or listing workflows that keep property details consistent. It might be an assistant that answers enquiries from approved property information, a tenant and landlord portal, or the integrations that stop your team re-keying data between CRM, property management and accounting systems. We build around your workflows, and we keep property professionals in charge of the decisions that need their judgement.",
  // Supporting line under the CTAs, shown as the hero's stat strip.
  trust: [
    { label: "Built around", value: "Property workflows" },
    { label: "Systems", value: "Works with what you run" },
    { label: "Accuracy", value: "Human review where it matters" },
    { label: "Judgement", value: "Stays with professionals" },
  ],
  figureAlt:
    "Real estate software diagram showing the property lifecycle from search and listings to lettings, maintenance and portfolio reporting, connected by AI and system integrations",
};

/** Hero diagram: lifecycle stages over an AI and integration layer connecting core systems. */
export const HERO_FLOW = {
  stages: ["Search & listings", "Enquiries & viewings", "Offers & lettings", "Tenancy & maintenance", "Portfolio reporting"],
  layer: "AI and integration layer",
  systems: ["CRM", "Property management", "Accounting", "Documents"],
};

export const LANDSCAPE = {
  title: "How Technology Is Reshaping Real Estate and PropTech",
  intro:
    "Property has always been an information business. What is changing is how much of that information is digital, how quickly clients expect answers, and how much depends on systems working together.",
  trends: [
    { icon: "search", title: "Property discovery and search", text: "Buyers and renters search across portals, agency websites and social channels, and increasingly describe what they want in everyday language. “Three bedrooms near a good primary school with a garden” does not map neatly onto a filter list." },
    { icon: "agency", title: "Estate agency operations", text: "Agencies juggle valuations, instructions, marketing, viewings, offers and progression, often across a CRM, spreadsheets and email." },
    { icon: "lead", title: "Property marketing and lead management", text: "Enquiries arrive from portals, websites, phone and social media. Responding quickly and consistently, and recording what happened, is a constant operational challenge." },
    { icon: "handshake", title: "Sales and lettings workflows", text: "Referencing, identity and anti-money laundering checks, tenancy agreements, sales progression and conveyancing updates involve many hand-offs." },
    { icon: "home", title: "Property management", text: "Rent, maintenance, inspections, certificates, renewals and tenant communication generate a steady flow of routine tasks." },
    { icon: "building", title: "Commercial property operations", text: "Leases, service charges, facilities, occupiers and compliance obligations add complexity and documentation." },
    { icon: "analytics", title: "Portfolio reporting and asset analysis", text: "Owners and investors want timely, consistent data on occupancy, income, costs and condition across their assets." },
    { icon: "document", title: "Property data and digital transactions", text: "Transactions are becoming more digital. In England, the government's home buying and selling reform roadmap commits to upfront sales packs, a Code of Practice for property agents and wider use of digital property logbooks." },
  ],
  stats: [
    { value: "98%", text: "of applications to update the register in 2025–26 were made digitally", source: "HM Land Registry (England and Wales)" },
    // VERIFY: the PwC/ULI report says adoption rose from this baseline; add the current figure once checked.
    { value: "51%", text: "of European industry leaders were already using AI or machine learning in real estate the year before a marked increase", source: "PwC and ULI, Emerging Trends in Real Estate: Europe 2026" },
  ],
  outro:
    "What separates useful technology from expensive distraction is the foundation: connected systems, reliable property information and well-designed workflows. AI is an enabler. It can draft, classify, search, summarise and route, but negotiating, valuing, advising and building client relationships remain the work of property professionals.",
};

// VERIFY: confirm you are comfortable targeting commercial property managers and investors (pack, G5).
export const AUDIENCES = [
  { icon: "agency", title: "Estate agencies", text: "Fast, consistent lead response, accurate listings that include material information, viewing and offer management, sales progression and vendor reporting." },
  { icon: "key", title: "Letting agencies", text: "Applicant matching, referencing and right-to-rent workflows, tenancy documents, renewals, compliance reminders and landlord reporting." },
  { icon: "home", title: "Residential property managers", text: "Tenant communication, maintenance and contractor coordination, inspections, certificates and rent tracking." },
  { icon: "building", title: "Commercial property managers", text: "Lease data and events, service charges, occupier communication, facilities management and reporting to owners." },
  { icon: "crane", title: "Developers and housebuilders", text: "Plot and sales tracking, buyer communication, reservation and handover workflows, and customer care after completion." },
  { icon: "analytics", title: "Investment and asset managers", text: "Portfolio dashboards, data consolidation from managing agents, performance and risk reporting, and acquisition analysis support." },
  { icon: "market", title: "Property marketplaces and listing platforms", text: "Search, matching, listing quality, user accounts, data feeds and the ability to scale." },
  { icon: "rocket", title: "PropTech start-ups", text: "A focused first version, a scalable architecture, integration with sector systems and evidence for investors and early customers." },
  { icon: "tools", title: "Facilities and portfolio management organisations", text: "Work orders, asset registers, planned maintenance, supplier management and compliance tracking across many sites." },
];

export const CHALLENGES = [
  { icon: "layers", title: "Fragmented property information across platforms", text: "Property details, photos, floor plans, certificates and history are held in a CRM, a property management system, portals, shared drives and email.", problem: "Staff hunt for information, versions drift apart and mistakes reach clients.", help: "A single, structured property record, with integrations that keep downstream systems in sync." },
  { icon: "listing", title: "Manual property listing creation and updates", text: "Writing descriptions, uploading media, checking details and updating price or status across channels takes time, and every manual step can introduce an error.", problem: "Slow time to market and inconsistent listings.", help: "Listing workflows with AI-assisted drafting, completeness checks and automated publishing to connected channels, with an agent approving every listing." },
  { icon: "lead", title: "Slow lead response and inconsistent qualification", text: "Enquiries arrive out of hours, from several sources and in varying detail.", problem: "Slow replies, leads that are never followed up and inconsistent records.", help: "Instant acknowledgement, structured capture of requirements, categorisation and routing to the right negotiator, all logged in the CRM." },
  { icon: "plug", title: "Disconnected CRM, property management and accounting systems", text: "Data is often re-keyed between the agency CRM, the property management platform and the accounts package.", problem: "Duplicate work, reconciliation errors and no single view of a client or property.", help: "API-based integrations with agreed ownership of each data item." },
  { icon: "chat", title: "Repetitive tenant and landlord communication", text: "Rent reminders, renewal notices, inspection bookings, certificate updates and “any update?” messages consume hours each week.", problem: "Staff time spent on routine messages instead of resolving issues.", help: "Template-based automated communication and self-service portals, with a person handling exceptions and sensitive conversations." },
  { icon: "tools", title: "Maintenance requests and service coordination", text: "Repair requests arrive by phone, email and text, often without the details needed to act.", problem: "Back-and-forth with tenants, delays in instructing contractors and poor visibility of job status.", help: "Structured request capture with photos, triage support, contractor assignment and status tracking. Urgent and safety-related issues always go to staff." },
  { icon: "dashboard", title: "Difficulty monitoring property portfolios", text: "Occupancy, arrears, compliance dates, maintenance and income are tracked in different places.", problem: "Issues surface late and reporting takes days.", help: "Portfolio dashboards fed by integrated data, with alerts for upcoming dates and exceptions." },
  { icon: "analytics", title: "Limited visibility into operational and investment data", text: "Decision-makers rely on spreadsheets assembled from several sources.", problem: "Inconsistent figures and slow decisions.", help: "A governed data model and reporting layer, with analytics that support, but do not replace, professional analysis." },
  { icon: "document", title: "Inefficient document processing and record management", text: "Tenancy agreements, leases, certificates, identity documents and correspondence are filed manually and hard to search.", problem: "Time lost searching, missed dates and compliance risk.", help: "Document classification, data extraction for key dates and terms, and searchable repositories with role-based access." },
  { icon: "shield", title: "Data protection, access control and cybersecurity", text: "Property businesses hold identity documents, financial details and personal information about tenants, landlords, buyers and sellers. They are also attractive targets for fraud.", problem: "A data breach or fraudulent transaction causes serious harm and loss of trust.", help: "Security by design, role-based access, encryption, audit trails and careful control of what data is shared with which system." },
];

export type AiCapability = {
  id: string;
  icon: string;
  title: string;
  paragraphs: string[];
  items?: { term?: string; text: string }[];
  outro?: string[];
  image?: keyof typeof IMAGES;
};

export const AI_CAPABILITIES: AiCapability[] = [
  {
    id: "property-search",
    icon: "search",
    title: "AI property search and discovery",
    paragraphs: [
      "AI property search lets people describe what they are looking for in natural language and get relevant results. Semantic search interprets meaning, so “quiet street, walking distance to the station, room for a home office” can be matched against property attributes, descriptions and location data. Property matching can then compare applicant requirements against new instructions, so the right people hear about a property first.",
      "Good results depend on structured, accurate property data and well-chosen location sources. Intelligent filtering works alongside semantic search, never instead of the hard criteria that matter, such as budget, bedrooms and availability.",
    ],
  },
  {
    id: "listing-intelligence",
    icon: "listing",
    title: "AI-powered property listing intelligence",
    paragraphs: ["AI can support listing work by:"],
    items: [
      { term: "Drafting property descriptions", text: "from structured details, room measurements and agent notes, in your house style;" },
      { term: "Classifying listings", text: "by property type, features and tenure;" },
      { term: "Extracting information", text: "from floor plans, certificates and vendor questionnaires into structured fields;" },
      { term: "Checking content consistency", text: "across descriptions, key facts and portal listings; and" },
      { term: "Supporting listing administration,", text: "such as flagging missing information before a listing goes live." },
    ],
    outro: [
      "Property details, material information and marketing claims must be verified by a person before publication. Agents remain legally responsible for what their listings say: under UK consumer law, listings must not mislead or omit information a buyer or tenant needs to make an informed decision. An AI draft is a starting point, never the final word. Our [generative AI development](/services/generative-ai-development) work covers how we keep drafts accurate and reviewable.",
    ],
    image: "interior",
  },
  {
    id: "real-estate-assistants",
    icon: "assistant",
    title: "AI real estate assistants",
    paragraphs: ["Conversational assistants on your website or messaging channels can:"],
    items: [
      { text: "answer property enquiries using approved listing information;" },
      { text: "explain processes such as viewing bookings, referencing or how to make an offer;" },
      { text: "collect initial requirements, such as budget range, timescales, areas and must-haves; and" },
      { text: "direct enquiries to the right branch, negotiator or property manager, with the conversation attached." },
    ],
    outro: [
      "They answer only from approved information, are clearly identified as automated, and pass anything outside their scope to staff. They do not give legal, mortgage or financial advice. Assistants that act across systems, for example booking a viewing in a diary, are built through our [AI agent development](/services/ai-agent-development) practice, with clear permissions and limits.",
    ],
  },
  {
    id: "lead-management",
    icon: "lead",
    title: "Intelligent lead management and qualification",
    paragraphs: ["AI can help agencies handle enquiries more consistently:"],
    items: [
      { term: "Lead categorisation:", text: "separating buyers, sellers, landlords and tenants, and identifying the property or service enquired about." },
      { term: "Enquiry routing:", text: "sending each lead to the right branch or negotiator." },
      { term: "Follow-up prioritisation:", text: "highlighting enquiries that have not been answered or that mention urgent timescales." },
      { term: "CRM integration:", text: "creating and updating records automatically, using the agency CRM capabilities described on our [custom CRM software](/solutions/crm-software) page." },
      { term: "Workflow automation:", text: "acknowledgements, reminders and next-step tasks." },
    ],
    outro: [
      "AI cannot reliably judge a buyer's financial position, mortgage eligibility or suitability as a tenant, and it should not be used to make those decisions. Financial checks, referencing, identity and anti-money laundering checks, and any decisions that need regulated or professional judgement remain with qualified people and appropriate specialist services.",
    ],
  },
  {
    id: "property-management",
    icon: "tools",
    title: "Property management automation",
    paragraphs: ["Property management automation handles the routine so managers can focus on problems that need attention:"],
    items: [
      { text: "tenant enquiries answered from approved information;" },
      { text: "maintenance requests captured with photos and details, then categorised;" },
      { text: "contractor coordination: job creation, assignment, scheduling and status updates;" },
      { text: "document handling for tenancy agreements, certificates and inspection reports;" },
      { text: "reminders for rent, renewals, inspections and certificate expiry; and" },
      { text: "operational dashboards for open jobs, arrears and upcoming dates." },
    ],
    outro: [
      "Urgent repairs, safety concerns, disputes and vulnerable tenants are always escalated to people. Our [AI automation services](/services/ai-automation) explain how we combine rules, AI and human review.",
    ],
    image: "maintenance",
  },
  {
    id: "property-analytics",
    icon: "analytics",
    title: "Property data analytics and insights",
    paragraphs: [
      "Real estate data analytics turns structured property data into dashboards and reports: portfolio occupancy, lease events, arrears, maintenance costs, response times, letting performance and pipeline. With suitable data, [machine learning development](/services/machine-learning) can add trend analysis and indicators, such as which tenancies are approaching renewal risk or which assets have rising maintenance costs.",
      "Analytics informs decisions; it does not make them. We do not provide valuations, and we do not claim that analytics will guarantee investment returns. Market information depends on the quality and licensing of the data sources used, and professional valuation remains the role of qualified valuers.",
    ],
    image: "lobby",
  },
  {
    id: "document-processing",
    icon: "document",
    title: "AI document processing and knowledge assistants",
    paragraphs: [
      "AI document processing can classify incoming documents, extract key data such as parties, dates, rent, break clauses and certificate expiry, and make large archives searchable. A retrieval-augmented generation (RAG) assistant can then answer questions using only approved sources, including tenancy information, lease summaries, property files, internal policies and operational records, and show where each answer came from.",
      "Access is permission-aware: a property manager sees their portfolio, and a tenant portal shows only that tenant's documents. Extracted data and answers should be checked before they are relied on for legal or financial decisions. Our [RAG development](/services/rag-development) service explains how we build these systems.",
    ],
    image: "plans",
  },
  {
    id: "workflow-automation",
    icon: "automation",
    title: "Real estate workflow automation",
    paragraphs: ["Real estate automation connects the steps between teams and systems:"],
    items: [
      { term: "Enquiries:", text: "acknowledgement, capture, routing and CRM logging." },
      { term: "Viewings:", text: "booking, confirmation, reminders and feedback requests." },
      { term: "Follow-ups:", text: "scheduled nudges and tasks for negotiators." },
      { term: "Document workflows:", text: "collecting, checking and filing documents." },
      { term: "Maintenance:", text: "request intake through to job completion and tenant updates." },
      { term: "Internal administration:", text: "reports, handovers and compliance trackers." },
    ],
    outro: ["Rules handle what is predictable, AI handles unstructured text, and people handle exceptions."],
  },
];

export const SOFTWARE = {
  intro:
    "Off-the-shelf property software works well for many businesses, and we will say so when one fits. Custom property software is worth considering when your model, workflows or integrations are distinctive. Examples include a hybrid sales and lettings agency, a build-to-rent operator, a commercial portfolio with unusual lease structures, or a PropTech product that needs its own platform.",
  note: "The solutions below are **potential custom development projects**, scoped to your requirements. They are not ready-made ClickMasters products.",
  items: [
    { icon: "agency", title: "Estate agency CRM platforms", text: "for applicants, vendors, landlords, viewings, offers and progression." },
    { icon: "home", title: "Property management systems", text: "for tenancies, rent, maintenance, inspections and compliance." },
    { icon: "market", title: "Property listing and marketplace platforms", text: "with search, accounts, enquiries and data feeds." },
    { icon: "portal", title: "Tenant and landlord portals", text: "for documents, payments, requests, statements and messages." },
    { icon: "dashboard", title: "Property investment dashboards", text: "that consolidate portfolio and performance data." },
    { icon: "rocket", title: "Real estate SaaS platforms", text: "for PropTech businesses, built through our [MVP and SaaS development](/services/mvp-saas-development) service." },
    { icon: "map", title: "Property search applications", text: "with semantic search, maps and saved searches." },
    { icon: "building", title: "Commercial property management systems", text: "for leases, service charges and occupier management." },
    { icon: "tools", title: "Maintenance and facilities management platforms", text: "for work orders, assets and planned maintenance." },
    { icon: "document", title: "Document and transaction management systems", text: "for collecting, tracking and sharing documents through a sale or letting." },
    { icon: "code", title: "Custom real estate business applications", text: "that fill the gaps between your existing tools." },
  ],
  teamIntro:
    "Our [custom software development](/services/custom-software-development) and [web application development](/services/web-application-development) teams focus on five things:",
  considerations: [
    ["Usability", "interfaces designed for negotiators on the move, busy property managers, tenants and landlords."],
    ["Scalability", "architecture that grows with branches, portfolios, users and listings."],
    ["Secure architecture", "role-based access, encryption, secure authentication and audit logs."],
    ["Data quality", "structured property records, validation rules and clear ownership of each data item."],
    ["Integration", "fitting into your existing property, finance and communication systems."],
  ],
};

export const USE_CASES_NOTE =
  "The following are illustrative development possibilities showing how the technology could be applied. They are not completed ClickMasters client projects, and real benefits depend on each business's data, systems and workflows.";

export const USE_CASE_FIELDS = [
  ["problem", "Business problem"],
  ["solution", "Proposed solution"],
  ["approach", "Technical approach"],
  ["benefit", "Potential benefit"],
] as const;

export const USE_CASES = [
  { icon: "assistant", title: "AI-powered property enquiry assistant", problem: "Out-of-hours enquiries go unanswered until the next morning, and many ask questions already covered in the listing.", solution: "A website and messaging assistant that answers from approved listing data and captures requirements.", approach: "RAG over listing data and agency FAQs, CRM integration and hand-off to staff.", benefit: "Faster responses and better-structured leads for negotiators." },
  { icon: "search", title: "Intelligent property search platform", problem: "Applicants struggle to find suitable properties using rigid filters.", solution: "Natural-language and semantic property search, combined with hard filters and maps.", approach: "Vector search over descriptions and attributes, location data integration and relevance testing on real queries.", benefit: "More relevant results and better engagement on the agency's own website." },
  { icon: "listing", title: "Automated listing content workflow", problem: "Listings take days to prepare and vary in quality between branches.", solution: "A workflow that drafts descriptions from structured details, checks completeness and routes listings for agent approval.", approach: "Generative AI with house-style prompts, validation rules for key fields and integration with the CRM and publishing feeds.", benefit: "Faster time to market and more consistent listings, with agents verifying every detail." },
  { icon: "lead", title: "Estate agency lead management system", problem: "Leads from portals, the website and phone calls are handled inconsistently, and some are never followed up.", solution: "Centralised lead capture with categorisation, routing, follow-up tasks and reporting.", approach: "Integrations with lead sources, AI classification of free-text enquiries and CRM workflow automation.", benefit: "Consistent follow-up and clear visibility of lead handling." },
  { icon: "portal", title: "Tenant self-service portal", problem: "Tenants phone or email for documents, rent statements and updates.", solution: "A secure portal for documents, statements, maintenance requests and messages.", approach: "A web application with role-based access and integration with property management and accounting systems.", benefit: "Fewer routine contacts and a better tenant experience." },
  { icon: "tools", title: "Automated maintenance request management", problem: "Repair requests arrive incomplete, and contractors are instructed slowly.", solution: "Structured request capture, categorisation support, contractor assignment and tenant status updates.", approach: "Forms and an assistant for intake, AI classification, workflow automation and integration with contractor scheduling.", benefit: "Faster triage and clearer job tracking. Urgent and safety-related issues always go straight to staff." },
  { icon: "dashboard", title: "Property portfolio analytics dashboard", problem: "Portfolio reports are compiled manually from several systems each month.", solution: "A dashboard covering occupancy, income, arrears, lease events, maintenance and compliance dates.", approach: "Automated data pipelines into a reporting database, a role-based dashboard and alerts.", benefit: "Timely, consistent portfolio visibility and earlier warning of issues." },
  { icon: "document", title: "Property document processing solution", problem: "Leases, tenancy agreements and certificates are filed manually, and key dates are missed.", solution: "Document classification and extraction of key terms and dates into the property record.", approach: "Document AI with confidence thresholds, human review queues and a searchable repository.", benefit: "Less manual filing and better tracking of renewals and expiry dates." },
  { icon: "chat", title: "Landlord and tenant communication automation", problem: "Routine reminders and updates take hours of staff time each week.", solution: "Automated, template-based communication triggered by tenancy events and dates.", approach: "Workflow automation integrated with the property management system, with an audit log of messages sent.", benefit: "Consistent, timely communication and more staff time for complex issues." },
  { icon: "market", title: "Property marketplace with intelligent recommendations", problem: "A listing platform needs to help users find relevant properties among thousands.", solution: "A marketplace with semantic search, saved searches and recommendations.", approach: "A scalable web platform, a recommendation model based on search and engagement behaviour, and privacy-aware personalisation.", benefit: "Better discovery for users and richer engagement data for the platform." },
  { icon: "building", title: "Commercial property reporting platform", problem: "Owners receive inconsistent reports from different managing agents.", solution: "A platform that ingests and standardises data and produces consistent owner reports.", approach: "Data ingestion with mapping and validation, a central data model and automated report generation, with optional AI-written summaries reviewed by staff.", benefit: "Comparable reporting across a portfolio and less manual consolidation." },
  { icon: "plug", title: "Real estate CRM and ERP integration", problem: "Agency, property management and finance systems do not share data, so the same details are typed several times.", solution: "Integration between the CRM, property management system and accounting or ERP platform.", approach: "API-based middleware with field mapping, validation, retries and audit logging, built through our [ERP and CRM development](/services/erp-crm-development) service.", benefit: "One consistent view of clients, properties and money, with less reconciliation." },
];

// VERIFY: no portals, property platforms or data providers are named; add only verified integrations (pack, G2–G4).
export const INTEGRATION = {
  intro:
    "Most property businesses already rely on several platforms. Custom applications can integrate with them, where the provider offers suitable APIs, data feeds and permissions:",
  systems: [
    { icon: "contacts", title: "CRM platforms", text: "for applicants, vendors, landlords and pipeline." },
    { icon: "home", title: "Property management software", text: "for tenancies, rent and maintenance." },
    { icon: "finance", title: "Accounting and finance systems", text: "for invoices, client accounts and reporting." },
    { icon: "listing", title: "Listing data sources and portal feeds", text: "for publishing and enquiries." },
    { icon: "document", title: "Document management systems", text: "for leases, certificates and correspondence." },
    { icon: "chat", title: "Email, SMS and messaging services", text: "for communication." },
    { icon: "payment", title: "Payment providers", text: "for rent, deposits and fees, handled through the provider's secure payment services." },
    { icon: "map", title: "Mapping and location services", text: "for search, maps and area information." },
    { icon: "analytics", title: "Analytics and reporting platforms", text: "for portfolio and performance data." },
    { icon: "key", title: "Identity and access management", text: "for single sign-on and role-based access." },
  ],
  note:
    "Integration quality depends on the details. We design a clear API architecture, decide how and how often data synchronises, validate data at every boundary, enforce permissions so each system sees only what it needs, and keep audit trails of changes.",
  access:
    "Not every property platform offers open or unrestricted API access. Some require partner agreements, charge for access or limit what can be read or written. We assess each system's options before committing to a design.",
};

export const PRIVACY_INTRO =
  "Trust underpins every property transaction. These considerations shape how we design and build real estate software.";
export const PRIVACY_DISCLAIMER =
  "This is general information, not legal advice. Software supports compliance but does not make an organisation compliant on its own. What applies depends on your business, your activities and where you operate.";

// VERIFY: the pack asks for this section to be reviewed by someone familiar with agency compliance.
export const PRIVACY = [
  { icon: "privacy", title: "UK GDPR and the Data Protection Act 2018", text: "Personal information about tenants, landlords, buyers and sellers must be processed lawfully, fairly and transparently, for clear purposes. Privacy information should explain any use of AI." },
  { icon: "minimise", title: "Data minimisation and retention", text: "Collect only what each process needs, and keep identity documents, references and financial information only as long as necessary, with defined retention periods and secure deletion." },
  { icon: "roles", title: "Role-based access control", text: "Negotiators, property managers, accounts staff, landlords and tenants each see only what their role requires, enforced on the server." },
  { icon: "lock", title: "Secure document handling", text: "Encrypted storage, controlled sharing links, access logs and protection against tampering with documents such as tenancy agreements and bank details." },
  { icon: "eye", title: "Transparency when AI is used", text: "Clients should know when they are dealing with an automated assistant and how their information is used." },
  { icon: "review", title: "Human review of generated property information", text: "AI-drafted descriptions and extracted data are checked by staff before they are published or relied on." },
  { icon: "provenance", title: "Accuracy and provenance of property data", text: "Know where each piece of property information came from, how current it is and whether you are licensed to use it. This matters more as England moves towards upfront sales packs and digital property logbooks drawn from trusted data sources." },
  { icon: "scales", title: "Bias and fairness in automated workflows", text: "Automated matching, routing and prioritisation should be tested to ensure they do not disadvantage people on the basis of protected characteristics. Lettings decisions must comply with equality law." },
  { icon: "payment", title: "Sensitive financial and identity information", text: "Payment details stay with payment providers. Identity and anti-money laundering checks use appropriate specialist services, and access to this information is tightly restricted." },
  { icon: "alert", title: "Security monitoring and audit trails", text: "Logging, alerting and regular review help detect misuse and fraud attempts. Property fraud remains a real risk: HM Land Registry reports preventing fraudulent applications worth more than £63 million in 2025–26." },
];

export const AGENT_DUTIES = {
  intro: "Agents remain responsible for their professional and legal obligations, whatever tools they use. These include:",
  items: [
    "providing material information and not misleading consumers, under the Digital Markets, Competition and Consumers Act 2024;",
    "anti-money laundering duties under the Money Laundering Regulations, supervised by HMRC for estate agency businesses and qualifying letting agents;",
    "redress scheme membership; and",
    "in England, right-to-rent checks and the changes introduced by the Renters' Rights Act 2025.",
  ],
  outro: "Technology should support these obligations and make them easier to evidence. Appropriate professional review remains essential.",
};

export const PRIVACY_STATEMENT =
  "ClickMasters does not claim certifications, government approvals or regulatory authorisations, and we do not provide legal advice.";

export const WHY_INTRO =
  "We are a software engineering and AI company. For property businesses, that means one team that can build the platform, connect your systems and add AI where it genuinely saves time.";

export const WHY = [
  { icon: "code", title: "Custom software engineering", text: "Property platforms and portals shaped around your workflows." },
  { icon: "ai", title: "AI and machine learning integration", text: "Search, matching, classification and analytics built on your data." },
  { icon: "listing", title: "Generative AI and RAG development", text: "Listing drafts and knowledge assistants grounded in approved property information." },
  { icon: "automation", title: "AI agents and automation", text: "Enquiries, viewings, maintenance and administration workflows with clear limits." },
  { icon: "portal", title: "Web application development", text: "Fast, accessible websites, portals and dashboards." },
  { icon: "rocket", title: "SaaS platform engineering", text: "Multi-tenant PropTech products with subscriptions and onboarding." },
  { icon: "contacts", title: "CRM and ERP development", text: "Agency CRM, property management and finance integration." },
  { icon: "database", title: "Database architecture", text: "Structured property records and reliable reporting." },
  { icon: "plug", title: "API integrations", text: "Connections to portals, property platforms, accounting and communication services." },
  { icon: "cloud", title: "Cloud and DevOps engineering", text: "Secure, monitored infrastructure that scales with your business." },
];

export const WHY_OUTRO =
  "The value is in combining them. AI is only as useful as the property data and workflows around it, and software only delivers value when people use it. We start with your operational problems, recommend the simplest approach that works, and are honest when an existing product would serve you better. If you are deciding where AI fits, our [AI consulting and strategy](/services/ai-consulting-strategy) service can help you prioritise.";

export const PROCESS_INTRO =
  "The actual scope, timeline and deliverables depend on your organisation's requirements. A typical engagement follows these stages.";

// VERIFY: confirm the support model behind stage 8 ("agreed as part of the engagement").
export const PROCESS = [
  { title: "Business and property workflow discovery", text: "We learn how your business operates across sales, lettings, management or portfolio activity, and where time and accuracy are lost." },
  { title: "Requirements and data assessment", text: "We define requirements with your team and assess the quality, structure and ownership of your property and client data." },
  { title: "Technical architecture and integration planning", text: "We design the architecture, data model and integrations, confirming what each third-party system allows." },
  { title: "UX and platform design", text: "We design interfaces with the negotiators, managers, landlords and tenants who will use them." },
  { title: "Software and AI development", text: "We build in short iterations with regular demonstrations." },
  { title: "Data integration and workflow configuration", text: "We migrate and connect data and configure automations and AI behaviour around your processes." },
  { title: "Testing, validation and security review", text: "We test functionality, performance, security and integrations, and evaluate AI features on real listings, enquiries and documents." },
  { title: "Deployment planning and ongoing optimisation", text: "We plan roll-out across branches or portfolios, train users, monitor performance and improve over time, with ongoing support agreed as part of the engagement." },
];

export const FAQS = [
  { q: "What are AI-powered real estate solutions?", a: ["They are software tools that apply AI techniques, such as semantic search, language models, document understanding and machine learning, to property workflows. Examples include property search, listing drafting, enquiry assistants, lead routing, maintenance triage, document extraction and portfolio analytics. They work best when built on accurate property data and integrated with the systems a business already uses."] },
  { q: "How is AI used in the real estate industry?", a: ["Common uses include natural-language property search, drafting and checking listing content, answering routine enquiries, categorising and routing leads, processing tenancy and lease documents, triaging maintenance requests and analysing portfolio data. AI supports property professionals by handling routine information work; valuations, negotiations and advice remain with people."] },
  { q: "Can you develop custom property management software?", a: ["Yes. We can design and build property management software around your tenancies, maintenance workflows, inspections, compliance reminders, portals and reporting, integrated with your accounting and communication systems."] },
  { q: "Can AI automate estate agency operations?", a: ["AI and automation can handle many routine tasks: acknowledging and routing enquiries, drafting listing content, booking and confirming viewings, sending follow-ups and updating the CRM. Agents still need to verify listing details, carry out regulated checks, give advice and manage client relationships."] },
  { q: "Can you build a real estate CRM?", a: ["Yes. We build custom CRM systems for agencies, covering applicants, vendors, landlords, viewings, offers and progression, with integrations to portals, email and property management systems. Our CRM solution page covers the approach in more detail."] },
  { q: "Can you develop a property listing marketplace?", a: ["Yes. We can build listing and marketplace platforms with search, user accounts, enquiries, listing management, data feeds and recommendations, designed to scale as listings and users grow. Data sources and feeds depend on the licences and APIs available."] },
  { q: "How can AI help property management companies?", a: ["AI can capture and categorise maintenance requests, answer routine tenant questions from approved information, extract key dates and terms from documents, draft routine communications and highlight portfolio issues in dashboards. Urgent repairs, disputes and vulnerable tenants should always be handled by people."] },
  { q: "Can you integrate software with existing property systems?", a: ["Usually, yes, where the existing systems provide APIs, data feeds or export options. Access varies by provider: some offer open APIs, while others require partner agreements or limit what can be read and written. We assess each system's options before designing the integration."] },
  { q: "How can AI assist with property enquiries and lead management?", a: ["AI can respond instantly to enquiries using approved property information, collect requirements in a structured way, categorise leads, route them to the right person and create follow-up tasks in the CRM. It should not judge a buyer's finances or a tenant's suitability. Those checks belong with qualified staff and specialist services."] },
  { q: "How do you approach data privacy in real estate software?", a: ["We design for privacy from the start: collecting only necessary data, restricting access by role, encrypting data, keeping audit trails, defining retention periods and keeping payment and identity data with specialist providers. We also document data flows to support your own data protection assessments."] },
];

export const FINAL_CTA = {
  title: "Turn Property Workflows into",
  titleAccent: "Connected, Intelligent Systems",
  body: {
    text: "Whether you are an estate agency looking to respond faster, a property manager drowning in maintenance requests and reminders, a developer improving buyer communication, an investor seeking clearer portfolio data, or a PropTech business building a new platform, we can help you work out what to build and how to build it well. Tell us about your workflows and challenges, and we will give you an honest view of what is feasible, which systems and data it depends on, and the most sensible first step. Running an agency? See how [[link]] can bring applicants, vendors and landlords into one system.",
    link: { anchor: "custom CRM software for estate agencies", href: "/solutions/crm-software" },
  },
  bring: ["How your branches or portfolio work", "The systems you use today", "Where time and accuracy are lost", "Data and integration constraints", "What a good outcome looks like"],
};

export const SCHEMA_SERVICE = {
  name: "AI-Powered Real Estate Solutions and Property Software Development",
  serviceType: ["AI-powered real estate solutions and property software development", "Property management software development", "PropTech software development"],
  description:
    "Property search, listing workflows, lead management, real estate assistants, property management automation, document processing, portfolio analytics and integrations for UK estate agencies, letting agents, property managers, developers, investors and PropTech businesses.",
  catalogName: "Real estate AI capabilities",
  catalog: AI_CAPABILITIES.map((c) => c.title),
  relatedServicePath: "/solutions/crm-software",
};
