/*
 * /industries/healthcare content, from
 * "ClickMasters Healthcare Industry Page: SEO Content Pack" (27 Nov 2026).
 * Edit copy here; page.jsx only renders it.
 *
 * Inline links use [anchor](/path) and render through <RichText>.
 * VERIFY comments mark items the pack says need owner confirmation.
 * The regulatory section is general information; the pack asks for it to be
 * reviewed by a data protection or regulatory adviser before publishing.
 */

export const PATH = "/industries/healthcare";

export const SEO = {
  title: "Healthcare AI Solutions & Software UK",
  description:
    "Healthcare AI solutions and custom software for UK providers: admin automation, document processing, knowledge assistants and integrations, built privacy-first.",
  ogTitle: "Healthcare AI Solutions & Software UK | ClickMasters",
  ogDescription:
    "Administrative automation, document processing, knowledge assistants, integrations and reporting for UK healthcare organisations, with human oversight built in.",
};

const IMG = "/assets/industries/healthcare";

/*
 * Photos from Unsplash (Unsplash License, free to use). Chosen to avoid
 * clinical "doctor at a glowing screen" imagery, as the pack recommends.
 */
export const IMAGES = {
  // Photo: Tasha Kostyuk (unsplash.com/photos/Pk-KuizxQv8)
  corridor: {
    src: `${IMG}/healthcare-clinic-corridor.webp`, width: 1200, height: 900,
    alt: "Bright, empty clinic corridor with seating, room signs and closed doors",
  },
  // Photo: Yulaan (unsplash.com/photos/Qin4G_Y_xEE)
  waiting: {
    src: `${IMG}/healthcare-waiting-area.webp`, width: 1200, height: 675,
    alt: "Modern healthcare waiting area with rows of blue chairs and artwork on the wall",
  },
  // Photo: 2H Media (unsplash.com/photos/spScdgWY-_c)
  paperwork: {
    src: `${IMG}/healthcare-administrative-paperwork.webp`, width: 1200, height: 800,
    alt: "Printed forms and a pen on a wooden desk, representing administrative paperwork for document processing",
  },
  // Photo: Luke Chesser (unsplash.com/photos/JKUTrJ4vK00)
  dashboard: {
    src: `${IMG}/healthcare-operational-reporting-dashboard.webp`, width: 1200, height: 800,
    alt: "Laptop showing charts and summary metrics, representing an operational reporting dashboard built on aggregated data",
  },
} as const;

export const HERO = {
  eyebrow: "Healthcare & MedTech",
  title: "Healthcare AI Solutions and Software Development",
  titleAccent: "for UK Organisations",
  lead:
    "Healthcare runs on information: referrals, appointment changes, letters, forms, policies, rotas and reports, all moving between people and systems that were rarely designed to work together. ClickMasters designs and builds practical AI and custom software that helps healthcare organisations handle that information with less manual effort. We automate repetitive administrative work, connect systems that should share data, make approved knowledge easier to find and give teams clearer operational reporting.",
  audience:
    "We build for environments where reliability, privacy and human judgement matter. Our healthcare work focuses on administrative, operational and information workflows. Every system is designed so that people stay in control of decisions, access to personal data is tightly limited, and each AI feature has a clearly defined and documented purpose.",
  // Trust line under the CTAs, shown as the hero's stat strip.
  trust: [
    { label: "Focus", value: "Administrative and operational" },
    { label: "Data", value: "Privacy by design" },
    { label: "Control", value: "Human oversight built in" },
    { label: "Delivery", value: "Phased, lowest risk first" },
  ],
  figureAlt:
    "Healthcare workflow automation diagram showing documents and requests routed through secure AI processing to staff review, scheduling and reporting systems",
};

/** Hero diagram: inputs → secure processing → staff review → destination systems. */
export const HERO_FLOW = {
  inputs: ["Referral letters", "Forms", "Appointment requests", "Policy documents"],
  processing: ["Classify", "Extract", "Route"],
  outputs: ["Staff work queue", "Scheduling system", "Reporting dashboard"],
};

export const OVERVIEW = {
  title: "Technology That Supports Healthcare Teams, Not Another System to Manage",
  paragraphs: [
    "Healthcare organisations in the UK range from GP practices and private clinics to community services, care providers, diagnostic businesses, health-tech start-ups and suppliers to the NHS. Their priorities differ, but many describe the same pressure: skilled staff spend too much of their day on administration that technology could reasonably support.",
    "AI in healthcare is often discussed in terms of diagnosis and clinical breakthroughs. In practice, many of the most immediately useful opportunities are less dramatic: sorting and routing correspondence, pulling details from forms, answering routine enquiries, finding the right version of a policy, and producing reports without days of spreadsheet work. These are the areas where we focus.",
    "Getting them right still takes care. Healthcare data is among the most sensitive information an organisation can hold, many workflows have safety implications, and some software falls under medical device regulation depending on its purpose. We treat those factors as design requirements from the first conversation, not as checks to run at the end.",
  ],
  organisations: [
    "GP practices", "Private clinics", "Community services", "Care providers",
    "Diagnostic businesses", "Health-tech start-ups", "Suppliers to the NHS",
  ],
};

export const CHALLENGES_INTRO =
  "No two healthcare organisations have identical systems, staff structures or obligations. The challenges below come up often, but every project starts by understanding how your own organisation actually works.";

export const CHALLENGES = [
  { icon: "admin", title: "Administrative workload", text: "Referral letters, registration forms, insurance and funding paperwork, correspondence and routine updates still involve a great deal of manual reading, typing and filing. Each task may take only minutes, but across a team they add up to hours every day, and the repetition creates room for error. Time spent re-keying information is time not spent with patients, service users or on work that needs professional judgement." },
  { icon: "plug", title: "Disconnected healthcare systems", text: "Many organisations run a patchwork of applications: a clinical or practice system, a booking tool, a finance package, shared mailboxes, spreadsheets and supplier portals. When these do not share data, staff become the integration layer, copying details between screens and reconciling records by hand. Connecting systems through well-designed APIs and integrations reduces duplication. It also makes clear which system is the authoritative source of each piece of information." },
  { icon: "folder", title: "Patient information management", text: "Information that is hard to find is a practical problem as well as a governance one. Documents saved in the wrong place, inconsistent naming and duplicated records slow teams down and increase the chance that someone acts on out-of-date information. Good information management means records are organised, searchable and available to the right people, and only to them." },
  { icon: "calendar", title: "Appointment and workflow coordination", text: "Scheduling, reminders, cancellations, rebooking, waiting-list communication and hand-offs between teams involve many small coordination steps. When those steps rely on phone calls, emails and memory, things slip: appointments are missed, messages go unanswered and staff spend time chasing rather than resolving." },
  { icon: "database", title: "Healthcare data management", text: "Healthcare organisations collect large volumes of operational and personal information. Keeping it accurate, consistent and properly controlled is demanding. Access permissions, audit trails, retention rules and data quality all need deliberate design, particularly when data moves between systems or is used for reporting." },
  { icon: "speed", title: "Operational efficiency and consistency", text: "When processes depend on individual knowledge or workarounds, quality varies from person to person and day to day. Reducing unnecessary manual steps and standardising routine administrative processes helps teams work more consistently and gives managers a clearer view of where time is going." },
];

export const AI_INTRO =
  "We apply AI where it improves an administrative or operational task and where its outputs can be checked. Our AI work in healthcare supports administration, information handling and operational planning.";
export const AI_BOUNDARY =
  "It does not diagnose conditions, recommend treatment or replace the judgement of qualified healthcare professionals.";

export type AiCapability = {
  id: string;
  icon: string;
  title: string;
  intro: string;
  items?: { term?: string; text: string }[];
  outro: string[];
  image?: keyof typeof IMAGES;
};

export const AI_CAPABILITIES: AiCapability[] = [
  {
    id: "administrative-automation",
    icon: "automation",
    title: "AI-powered administrative automation",
    intro: "Healthcare workflow automation combines dependable rules with AI where some interpretation is needed. Typical applications include:",
    items: [
      { term: "Document classification:", text: "recognising whether an incoming item is a referral, a results letter, a registration form or general correspondence." },
      { term: "Administrative data extraction:", text: "pulling names, dates, reference numbers and other administrative fields from forms and letters into structured data." },
      { term: "Form processing:", text: "checking submitted forms for completeness and flagging missing information before they reach a member of staff." },
      { term: "Workflow routing:", text: "sending each item to the right team or queue, with the relevant details already attached." },
      { term: "Appointment-related communication:", text: "preparing reminders, rebooking messages and routine updates from approved templates." },
      { term: "Back-office task automation:", text: "handling repetitive steps such as updating trackers, creating tasks and logging actions." },
    ],
    outro: [
      "Exceptions and uncertain cases are routed to people rather than guessed. Our [AI automation services](/services/ai-automation) explain how we combine rules, AI and human review in more detail.",
    ],
  },
  {
    id: "healthcare-assistants",
    icon: "assistant",
    title: "Intelligent healthcare assistants",
    intro: "Conversational assistants can take pressure off phone lines, inboxes and internal help channels when they are given a clearly limited role. Suitable applications include:",
    items: [
      { term: "Administrative enquiry assistants", text: "that answer questions about opening times, booking processes, preparation instructions or required documents, using content you have approved." },
      { term: "Healthcare information navigation", text: "that helps people find the right service, form or contact route." },
      { term: "Appointment-related assistance,", text: "such as explaining how to change or cancel a booking, or passing a request to the appropriate team." },
      { term: "Internal knowledge retrieval", text: "that helps staff find policies, procedures and operational guidance quickly." },
      { term: "Staff-facing information assistants", text: "for onboarding, HR and operational questions." },
    ],
    outro: [
      "Administrative assistance is very different from clinical advice. We design assistants that stay within an administrative scope. They recognise questions that need a clinician, signpost people to the appropriate service and hand conversations to staff when needed. An assistant that assesses symptoms, suggests a diagnosis or recommends treatment is a different product: it carries clinical safety and regulatory implications that must be assessed separately. Multi-step assistants that act across your systems are covered by our [AI agent development](/services/ai-agent-development) work, always with defined permissions and human approval for significant actions.",
    ],
  },
  {
    id: "document-processing",
    icon: "document",
    title: "Healthcare document processing",
    intro: "Healthcare document processing uses AI to read, classify and organise documents so that staff do not have to start from scratch. It can help with:",
    items: [
      { text: "extracting relevant administrative information from letters, forms and scanned documents;" },
      { text: "organising records consistently and attaching them to the right case or person;" },
      { text: "classifying documents by type, urgency category or destination team;" },
      { text: "making large document collections searchable; and" },
      { text: "reducing repetitive data entry, so staff confirm extracted details rather than typing them." },
    ],
    outro: [
      "Extraction accuracy depends on document quality and variety, so we test on representative samples. We define confidence thresholds below which a document always goes to a person, and we keep a record of what was extracted and who confirmed it.",
    ],
    image: "paperwork",
  },
  {
    id: "knowledge-management",
    icon: "knowledge",
    title: "Healthcare knowledge management",
    intro: "Policies, procedures, protocols and service information often sit across intranets, shared drives and email attachments. Retrieval-Augmented Generation (RAG) lets an assistant answer questions using only a controlled set of approved documents, and show which source each answer came from.",
    outro: [
      "Our [RAG development](/services/rag-development) work covers how we design these knowledge systems, including permissions, so people only retrieve content they are allowed to see.",
      "RAG reduces the risk of an assistant inventing answers, but it does not remove it. Retrieved information must be reviewed and validated appropriately, documents must be kept current, and a named owner should be responsible for the approved knowledge base. Where generative AI is used to draft summaries or correspondence, the output is a draft for a person to check, as described in our [generative AI development](/services/generative-ai-development) approach.",
    ],
  },
  {
    id: "data-analytics",
    icon: "analytics",
    title: "Healthcare data analytics",
    intro: "Properly governed data analysis can support operational reporting, trend identification and planning: understanding appointment demand, did-not-attend patterns, referral volumes, processing times or staff workload.",
    outro: [
      "[Machine learning development](/services/machine-learning) can add forecasting and anomaly detection where there is enough good-quality historical data.",
      "Analytics of this kind supports operational decisions. It is not a clinical tool, and we do not claim it will improve clinical outcomes or diagnostic accuracy. Wherever possible, reporting uses aggregated or minimised data, with access restricted to the people who need it.",
    ],
    image: "dashboard",
  },
];

export const SOFTWARE = {
  paragraphs: [
    "Off-the-shelf software works well when your processes match the way the product was designed. It is usually quicker to start with and is supported by a vendor. The trade-off is that you adapt to the software. Custom healthcare software is built around your own workflows, data and integrations. It suits organisations whose processes are distinctive, whose systems need to work together, or whose existing tools leave gaps that staff fill manually.",
    "Often the best answer is a combination: keeping established systems of record and building custom applications, integrations and dashboards around them. As part of discovery we look at whether an existing product would meet your needs at lower cost and risk.",
  ],
  listIntro: "Depending on your requirements, our [custom software development](/services/custom-software-development) can include:",
  items: [
    { icon: "modules", title: "Healthcare management applications", text: "for service coordination, case tracking and internal workflows." },
    { icon: "contacts", title: "Patient administration tools", text: "that support registration, correspondence, referrals tracking and administrative records, working alongside your existing clinical systems." },
    { icon: "calendar", title: "Appointment management platforms", text: "with booking, reminders, waiting lists and rebooking workflows." },
    { icon: "crm", title: "Healthcare CRM systems", text: "for managing enquiries, patient or client communication and service relationships, built through our [ERP and CRM development](/services/erp-crm-development) service." },
    { icon: "lock", title: "Secure document management", text: "with role-based access, version control, retention rules and audit trails." },
    { icon: "dashboard", title: "Staff and operational dashboards", text: "that bring activity, capacity and performance information into one view." },
    { icon: "plug", title: "API and third-party system integrations", text: "that connect booking, finance, communication and record systems, where those systems provide suitable interfaces." },
    { icon: "report", title: "Healthcare reporting applications", text: "for operational, management and contractual reporting." },
    { icon: "web", title: "Custom web applications and portals", text: "for patients, clients, referrers or staff, through our [web application development](/services/web-application-development) team." },
    { icon: "database", title: "Database design and data management", text: "that give your information a clean, secure and well-structured foundation, through our [database design and development](/services/database-design) work." },
  ],
  hosting:
    "These applications are deployed on secure, monitored infrastructure, with backups, encryption and automated deployment handled through our [cloud and DevOps](/services/cloud-devops) practice.",
  scope:
    "Our healthcare software focuses on administrative, operational and information workflows. We do not present ourselves as a supplier of certified electronic patient record (EPR), electronic health record (EHR) or clinical decision systems. Where a project touches clinical systems or clinical processes, the applicable clinical safety and regulatory requirements are identified and planned for from the start.",
};

export const USE_CASES_NOTE =
  "The scenarios below are illustrative use cases showing how the technology could be applied. They are not descriptions of completed client projects, and real outcomes depend on each organisation's systems, data and processes.";

export const USE_CASE_FIELDS = [
  ["problem", "The problem"],
  ["approach", "Technology approach"],
  ["how", "How it could work"],
  ["value", "Operational value"],
  ["oversight", "Limitations and oversight"],
] as const;

export const USE_CASES = [
  {
    icon: "document",
    title: "Automating administrative document workflows",
    problem: "Incoming correspondence arrives by email, upload and post, and staff spend hours opening, reading, naming, filing and forwarding each item.",
    approach: "Document classification and data extraction combined with rules-based workflow automation.",
    how: "Each document is classified, key administrative details are extracted, and the item is filed and placed in the right team's queue with a summary of what was found. Low-confidence items go to a general review queue.",
    value: "Less manual sorting and re-keying, faster routing and a consistent filing structure.",
    oversight: "Staff confirm extracted details before records are updated. Clinical content is never acted on automatically, and urgent items follow existing escalation routes.",
  },
  {
    icon: "calendar",
    title: "Improving appointment communication processes",
    problem: "Reminder, cancellation and rebooking messages are handled manually and inconsistently, which contributes to missed appointments and wasted slots.",
    approach: "Integration with the booking system, template-based messaging and workflow automation, with AI used to understand free-text replies.",
    how: "Reminders are sent on a defined schedule, replies such as “can I move this to next week?” are recognised and routed, and freed slots are offered to people on a waiting list according to rules you set.",
    value: "More consistent communication, fewer manual calls and quicker reuse of cancelled slots.",
    oversight: "Message wording is approved by the organisation, replies the system does not understand are passed to staff, and communication preferences and consent are respected.",
  },
  {
    icon: "assistant",
    title: "Building a healthcare information assistant",
    problem: "Phone lines and inboxes are busy with routine questions about opening hours, preparation, parking, forms and booking processes.",
    approach: "A website or messaging assistant grounded in approved content using RAG, with clear hand-off routes.",
    how: "The assistant answers administrative questions from approved pages, links to the relevant source and passes anything outside its scope to the right team or service.",
    value: "Routine questions answered at any time, with staff time freed for complex enquiries.",
    oversight: "The assistant does not give medical advice. It is tested against out-of-scope and urgent queries, content owners review its sources regularly, and users are told they are using an automated assistant.",
  },
  {
    icon: "knowledge",
    title: "Organising internal healthcare knowledge",
    problem: "Staff struggle to find the current version of policies, procedures and operational guidance spread across shared drives and intranet pages.",
    approach: "A permission-aware internal knowledge assistant using RAG over an approved, version-controlled document set.",
    how: "Staff ask questions in plain English and receive answers that cite the specific policy and version, limited to documents their role is allowed to access.",
    value: "Faster access to guidance, fewer interruptions for senior staff and more consistent use of current procedures.",
    oversight: "Answers must be checked against the cited source before they inform decisions. A named owner keeps the document set current, and superseded documents are removed.",
  },
  {
    icon: "plug",
    title: "Connecting healthcare applications through APIs",
    problem: "Booking, finance, communication and record systems do not share data, so the same details are typed into several places.",
    approach: "API integrations and a middleware layer with validation, error handling and audit logging.",
    how: "When a booking is made or changed, the relevant details flow to the other systems that need them, and failures raise an alert rather than disappearing silently.",
    value: "Less duplicate entry, fewer mismatched records and a clearer single source of truth.",
    oversight: "Integration depends on the access and interfaces each supplier provides. Data flows are minimised to what each system needs and documented for governance review.",
  },
  {
    icon: "dashboard",
    title: "Developing operational reporting dashboards",
    problem: "Management reports are assembled by hand from several exports each month, so they are late and difficult to trust.",
    approach: "A governed reporting database with automated data pipelines and a role-based dashboard.",
    how: "Data is collected automatically, cleaned and presented as activity, capacity and turnaround metrics, using aggregated data wherever possible.",
    value: "Timely, consistent reporting and more time spent acting on information than compiling it.",
    oversight: "Dashboards support operational planning, not clinical decisions. Metric definitions are agreed with your team, and data quality issues are made visible rather than hidden.",
  },
  {
    icon: "search",
    title: "Supporting document search and retrieval",
    problem: "Finding a specific letter, form or record among thousands of files takes too long.",
    approach: "Semantic search with document indexing, metadata extraction and access controls.",
    how: "Staff search by meaning as well as keywords, filter by document type and date, and see only documents their permissions allow.",
    value: "Faster retrieval and less time lost to searching and re-requesting information.",
    oversight: "Search results are only as good as the underlying records. Access is logged, and retention rules continue to apply.",
  },
  {
    icon: "task",
    title: "Automating repetitive administrative tasks",
    problem: "Staff repeat the same back-office steps every day, such as updating trackers, sending standard confirmations and creating follow-up tasks.",
    approach: "Rules-based workflow automation, with AI only where unstructured text needs interpreting.",
    how: "Defined triggers start the routine steps automatically, and each action is logged so staff can see what happened and why.",
    value: "Hours of repetitive work reduced, and greater consistency across shifts and teams.",
    oversight: "Automation is introduced step by step and monitored, staff can override it, and any process with safety implications keeps a human checkpoint.",
  },
];

export const PRIVACY_INTRO =
  "Responsible healthcare technology starts with the data and the people affected by it. The considerations below shape how we design, build and support healthcare software.";
export const PRIVACY_DISCLAIMER =
  "This section is general information, not legal or regulatory advice. Each organisation remains responsible for its own compliance, and should take specialist advice where needed.";

// VERIFY: the pack asks for this section to be reviewed by a data protection or
// regulatory adviser before publishing (sources checked 27 Nov 2026).
export const PRIVACY = [
  { icon: "privacy", title: "UK GDPR and the Data Protection Act 2018", paragraphs: ["Health data is special category data under the UK GDPR. Processing it requires a lawful basis and an additional condition under Article 9, supported where relevant by the conditions in the Data Protection Act 2018. The law also requires transparency about how data is used, appropriate security, and data protection by design and by default. In practice, that means privacy is designed into the architecture: minimal data collection, encryption in transit and at rest, role-based access, audit logging and clear retention rules. The Data (Use and Access) Act 2025 has amended parts of UK data protection law, including the rules on automated decision-making, so current ICO guidance should be checked as part of any project."] },
  { icon: "audit", title: "Data Protection Impact Assessments", paragraphs: ["A Data Protection Impact Assessment (DPIA) is required before processing that is likely to result in a high risk to individuals. The ICO lists large-scale processing of special category data among the types of processing that require one. It identifies innovative technology, including AI, as a significant risk factor, and says most uses of AI involving personal data are likely to need a DPIA. The DPIA is the responsibility of the organisation acting as controller. We support it by documenting data flows, system design, security measures and risk mitigations."] },
  { icon: "lock", title: "Patient confidentiality", paragraphs: ["Confidentiality goes beyond data protection compliance. Systems should give each person access only to the information their role requires, use the minimum data necessary for each purpose, keep information no longer than needed and handle it securely at every stage. Organisations in England will also consider the Caldicott Principles and, where they apply, the national data opt-out. Organisations with access to NHS patient data and systems are expected to provide assurance through the Data Security and Protection Toolkit."] },
  { icon: "users", title: "Human oversight", paragraphs: ["AI outputs can be wrong, incomplete or confidently mistaken. They should not automatically replace the judgement of qualified healthcare professionals or trained administrative staff. We design review points into workflows, make uncertainty visible and make it easy for people to correct or override the system. Decisions with legal or similarly significant effects on individuals should not be made solely by automated means without the safeguards the law requires."] },
  { icon: "eye", title: "AI transparency", paragraphs: ["People using or affected by an AI system should understand what it does, what it does not do and where its information comes from. We document each system's intended use, capabilities and known limitations, label automated assistants clearly and show sources for retrieved answers, so staff and patients know when they are interacting with AI."] },
  { icon: "scales", title: "MHRA and medical device considerations", paragraphs: [
    "Software, including AI, can be regulated as a medical device in Great Britain when it is intended for a medical purpose, such as diagnosis, prevention, monitoring, prediction or treatment. Whether software qualifies depends on its intended purpose, as described in its labelling, instructions and promotional material, and on what it actually does, not on whether it uses AI. Many administrative tools, such as booking, document management or general information systems, are unlikely to qualify on their own. However, that must be assessed case by case and should not be assumed. In July 2026 the MHRA published guidance on ambient voice technology. It distinguishes functions such as transcription and summarisation from decision-support functions that may qualify as medical devices.",
    "If a proposed product has a potential medical purpose, its regulatory status should be assessed before development begins. We will raise that question early rather than leave it until launch.",
  ] },
  { icon: "shield", title: "Clinical safety standards", paragraphs: ["In England, health IT used in publicly funded health and adult social care is subject to the clinical risk management standards DCB0129 and DCB0160. DCB0129 applies to manufacturers of health IT systems; DCB0160 applies to the organisations that deploy and use them. NHS organisations also commonly use the Digital Technology Assessment Criteria (DTAC) when assessing digital health technologies. Whether these apply to a particular system depends on what it does and who uses it, and they should be assessed at the planning stage. NHS England has been reviewing DCB0129 and DCB0160, so the current versions should always be checked."] },
];

export const WHY_INTRO =
  "We are an AI and software engineering company, not a clinical provider, and we are clear about that. What we offer healthcare organisations is the ability to turn operational problems into well-engineered, secure and usable systems.";

export const WHY = [
  { icon: "briefcase", title: "Business-focused technology development", text: "We start with the operational problem and its cost, not with a technology we want to use." },
  { icon: "ai", title: "AI and intelligent automation", text: "Automation, document processing, assistants and analytics, used where they earn their place and tested on representative examples." },
  { icon: "code", title: "Custom software engineering", text: "Applications built around your workflows, documented, tested and maintainable." },
  { icon: "workflow", title: "Workflow-focused solution design", text: "We map how work actually flows, including the workarounds, before proposing changes." },
  { icon: "plug", title: "Application integration", text: "We connect the systems you already run, so information moves without re-keying." },
  { icon: "stack", title: "Scalable software architecture", text: "Foundations sized for current needs and planned for growth." },
  { icon: "map", title: "Practical implementation planning", text: "Phased delivery, starting with the use case that offers the clearest value and lowest risk." },
  { icon: "design", title: "User-centred digital experiences", text: "Interfaces designed with the staff and patients who will use them, including accessibility needs." },
];

export const WHY_OUTRO =
  "The right technology for a healthcare organisation is the one that fits its operational requirements, data and obligations. Sometimes that is AI. Sometimes it is a cleaner process, a better integration or a well-designed form. If [AI consulting and strategy](/services/ai-consulting-strategy) would help you decide where to start, we can begin there.";

// VERIFY: confirm the support model behind step 06 ("agreed as part of the engagement").
export const PROCESS = [
  { title: "Understand requirements", text: "We identify the operational challenges, the people involved, current workflows and the outcomes you need, including your governance, data protection and information security requirements." },
  { title: "Assess opportunities", text: "We assess where AI, automation or custom software could help, and where simpler options would be more appropriate. We also flag any potential clinical safety or medical device questions early." },
  { title: "Plan the solution", text: "We define functionality, data requirements, architecture, integrations, access controls and the human review points, along with the documentation your governance processes will need." },
  { title: "Design and develop", text: "We design user-focused interfaces and build in short iterations with regular demonstrations, using representative or appropriately protected test data." },
  { title: "Validate and test", text: "We test functionality, usability, accessibility, security and reliability, and evaluate AI features against representative real-world examples before go-live." },
  { title: "Improve and maintain", text: "After launch we monitor performance, review AI behaviour, apply updates and plan improvements, with ongoing support agreed as part of the engagement." },
];

export const PROCESS_NOTE =
  "Our development and testing process does not replace clinical validation, clinical safety assessment or regulatory assessment, where these are required. Those remain the responsibility of the appropriate organisation and its qualified personnel. We support them with technical documentation and evidence.";

export const FAQS = [
  { q: "How can AI be used in healthcare?", a: ["AI is used in healthcare in many ways, from clinical applications such as imaging analysis to administrative and operational tasks. Many practical opportunities for organisations sit on the administrative side: classifying and extracting information from documents, routing correspondence, answering routine enquiries, helping staff find approved guidance and supporting operational reporting. Clinical uses carry additional safety and regulatory requirements and must be assessed separately."] },
  { q: "What are healthcare AI solutions?", a: ["Healthcare AI solutions are software systems that apply AI techniques, such as language models, document understanding or machine learning, to healthcare tasks. A useful solution combines the AI component with reliable software, integrations with existing systems, access controls and human review, so that it works safely within real workflows."] },
  { q: "Can AI automate healthcare administrative tasks?", a: ["Yes, many administrative tasks can be partly or largely automated, including document sorting, data extraction, form checking, appointment communication and routine back-office updates. The best results usually come from combining rules-based automation with AI for less structured content, and sending exceptions and uncertain cases to staff."] },
  { q: "What is custom healthcare software development?", a: ["Custom healthcare software development is the design and build of applications around an organisation's own workflows, such as appointment platforms, administrative tools, portals, dashboards, document management and integrations. It suits organisations whose needs are not well met by off-the-shelf products or whose systems need to work together more effectively."] },
  { q: "How can healthcare organisations protect patient data when using AI?", a: ["Start with a DPIA where one is required, collect and process only the data each purpose needs, restrict access by role, encrypt data, keep audit logs and set clear retention rules. Check where data is processed and stored, and whether any supplier, including an AI model provider, may retain or reuse it. Be transparent with patients and staff about how AI is used. Specialist data protection advice is recommended for higher-risk processing."] },
  { q: "Can AI assistants support healthcare administration?", a: ["Yes. Assistants can answer routine administrative questions, help people navigate services and forms, support booking changes and help staff find internal guidance. They should be limited to approved content, clearly identified as automated, tested on out-of-scope and urgent queries, and able to hand conversations to people. They should not give medical advice unless they have been developed and assessed for that purpose."] },
  { q: "Does healthcare AI software need MHRA approval?", a: ["It depends on the software's intended purpose and functionality. Software intended for a medical purpose, such as diagnosis, monitoring or treatment decisions, may be regulated as a medical device and must then meet the applicable requirements in Great Britain. Purely administrative software is often outside that scope, but this must be assessed for each product. MHRA guidance and specialist regulatory advice should be used to reach a decision."] },
  { q: "Can custom healthcare software integrate with existing systems?", a: ["Usually, yes, provided the existing systems offer suitable access such as APIs, data exports or approved integration routes. Integration options vary considerably between suppliers, so we assess them early in a project and design integrations with validation, error handling, audit logging and data minimisation."] },
];

export const FINAL_CTA = {
  title: "Let's Discuss Your",
  titleAccent: "Healthcare Technology Project",
  body: {
    text: "Whether you want to reduce administrative workload, connect disconnected systems, make approved knowledge easier to find or build a new healthcare application, tell us what you are trying to achieve. We will give you an honest view of what is feasible, which governance and regulatory questions to consider, and the most sensible first step.",
  },
  bring: ["The workflow you want to improve", "Systems you use today", "Where staff time goes", "Your governance requirements", "What a good outcome looks like"],
};

export const SCHEMA_SERVICE = {
  name: "Healthcare AI Solutions and Software Development",
  serviceType: ["Healthcare AI solutions and software development", "Healthcare workflow automation", "Healthcare document processing"],
  description:
    "AI and custom software for UK healthcare organisations, focused on administrative, operational and information workflows: administrative automation, document processing, knowledge assistants, integrations and operational reporting, built with privacy by design and human oversight.",
  catalogName: "Healthcare AI capabilities",
  catalog: AI_CAPABILITIES.map((c) => c.title),
  relatedServicePath: "/services/ai-automation",
};
