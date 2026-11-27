/*
 * /industries/finance content, from
 * "ClickMasters Finance Industry Page: SEO Content Pack" (27 Nov 2026).
 * Edit copy here; page.jsx only renders it.
 *
 * Inline links use [anchor](/path) and render through <RichText>.
 * VERIFY comments mark items the pack says need owner confirmation.
 * The regulatory section is general information; the pack asks for it to be
 * reviewed by a compliance or legal adviser before publishing.
 */

export const PATH = "/industries/finance";

export const SEO = {
  title: "AI Solutions for Financial Services UK",
  description:
    "AI solutions and custom software for UK financial services: workflow automation, document intelligence, risk analytics and secure integrations, built with oversight.",
  ogTitle: "AI Solutions for Financial Services UK | ClickMasters",
  ogDescription:
    "Financial workflow automation, document intelligence, risk analysis support, knowledge assistants and secure integrations for UK financial organisations.",
};

const IMG = "/assets/industries/finance";

/*
 * Photos from Unsplash (Unsplash License, free to use). Chosen to avoid stock
 * tickers, cash and bank logos, as the pack recommends.
 */
export const IMAGES = {
  // Photo: Ed Robertson (unsplash.com/photos/ON6Xw8XEUQ8)
  city: {
    src: `${IMG}/finance-city-of-london-skyline.webp`, width: 1200, height: 800,
    alt: "City of London skyline with the Shard and 30 St Mary Axe under a pale sky",
  },
  // Photo: Arlington Research (unsplash.com/photos/kN_kViDchA0)
  office: {
    src: `${IMG}/finance-operations-open-office.webp`, width: 1200, height: 801,
    alt: "Bright open-plan office with staff working at rows of desks and monitors",
  },
  // Photo: Cht Gsml (unsplash.com/photos/FVwy7PBiSUo)
  documents: {
    src: `${IMG}/finance-documents-calculator-reports.webp`, width: 1200, height: 800,
    alt: "Calculator, printed charts, glasses and ring binders on a desk, representing financial documents for processing",
  },
  // Photo: Swello (unsplash.com/photos/fDisDvdiqrQ)
  dashboard: {
    src: `${IMG}/finance-analytics-dashboard-laptop.webp`, width: 1200, height: 800,
    alt: "Laptop showing an analytics dashboard with summary figures and a bar chart, representing financial operations reporting",
  },
  // Photo: Taylor Vick (unsplash.com/photos/aWslrFhs1w4)
  datacentre: {
    src: `${IMG}/finance-secure-data-centre.webp`, width: 1200, height: 675,
    alt: "Data centre with rows of server cabinets and overhead cabling, representing secure infrastructure for financial systems",
  },
} as const;

export const HERO = {
  eyebrow: "Finance & Fintech",
  title: "AI Solutions and Software Development",
  titleAccent: "for Financial Services",
  lead:
    "Financial services run on documents, data and decisions that have to stand up to scrutiny. Statements, invoices, applications, policies, reconciliations, client correspondence and management reports pass between teams and systems every day, and most of that work still depends on people reading, checking and re-keying information. ClickMasters designs and builds AI and custom software that takes the repetitive load out of those workflows: extracting and validating data from financial documents, connecting systems that should share information, making approved knowledge easier to find and giving teams faster, clearer reporting.",
  audience:
    "AI is changing how financial organisations work. The Bank of England and FCA's 2026 survey found that 86% of responding firms now use AI in some form. But in finance, a fast answer is worthless if it cannot be explained, checked or trusted. We build for that reality. Every system we design has a defined purpose, limited access to data, a clear audit trail and people in control of the decisions that matter.",
  // Trust line under the CTAs, shown as the hero's stat strip.
  trust: [
    { label: "Focus", value: "Workflows and operations" },
    { label: "Security", value: "Designed in from the start" },
    { label: "Control", value: "Human oversight on key decisions" },
    { label: "Records", value: "Audit trail by default" },
  ],
  figureAlt:
    "Financial workflow automation diagram showing invoices, statements and forms processed by secure AI, checked by an analyst and passed to finance, case and reporting systems with an audit log",
};

/** Hero diagram: documents → classify/extract/validate → analyst review → systems, with an audit log. */
export const HERO_FLOW = {
  inputs: ["Invoices", "Bank statements", "Client forms", "Policy documents"],
  processing: ["Classify", "Extract", "Validate"],
  outputs: ["Finance system", "Case queue", "Reporting dashboard"],
};

export const OVERVIEW = {
  title: "How AI Is Changing Financial Services, and What Responsible Adoption Looks Like",
  paragraphs: [
    "Financial organisations in the UK range from banks, building societies and insurers to wealth managers, lenders, payment and e-money firms, accountancy practices, brokers and fast-growing FinTech start-ups. Their products differ, but their operational pressures are often similar: rising volumes of documents and data, customers who expect fast digital service, growing reporting obligations, and skilled people spending too much time on work that software could reasonably support.",
    "Discussion of AI in financial services often centres on trading algorithms and credit decisions. In practice, many of the most immediately useful opportunities are operational: reading and classifying documents, extracting figures from statements and invoices, matching records, answering routine enquiries, finding the current version of a policy, flagging unusual patterns for review and producing reports without days of spreadsheet work. These are the areas where we focus.",
    "Doing them well still takes care. Financial data is sensitive, errors can cause real harm to customers, and regulated firms remain accountable for every outcome, whether a person or a model produced it. UK regulators have said they will apply existing frameworks, including the Consumer Duty and the Senior Managers and Certification Regime, to the use of AI rather than write separate AI rules. We treat accountability, explainability and security as design requirements from the first conversation, not checks to run at the end.",
  ],
  organisations: [
    "Banks and building societies", "Insurers", "Wealth managers", "Lenders", "Payment and e-money firms",
    "Accountancy practices", "Brokers", "FinTech start-ups",
  ],
};

export const CHALLENGES_INTRO =
  "No two financial organisations share the same systems, products or obligations. The challenges below come up often, but every project starts by understanding how your own organisation actually works.";

export const CHALLENGES = [
  { icon: "admin", title: "Manual financial operations", text: "Onboarding packs, supplier invoices, bank statements, remittances, claims forms, payment instructions and month-end reconciliations still involve a great deal of manual reading, keying and checking. Each task looks small, but across a finance or operations team it adds up to hours every day, and every manual step is a chance for a transposed figure or a missed exception. Time spent re-keying is time not spent on analysis, client service or the judgement calls that need an experienced professional." },
  { icon: "database", title: "Financial data management", text: "Financial information is often split across core platforms, accounting packages, CRM systems, spreadsheets, shared drives and third-party portals. When the same customer, account or transaction appears differently in each place, teams spend time reconciling rather than using the data. Good data management means clear ownership of each data item, consistent definitions, reliable integration between systems and access limited to the people who need it." },
  { icon: "compliance", title: "Regulatory and compliance workflows", text: "Compliance work generates a heavy load of documentation: policies and procedures, evidence for audits, records of decisions, complaints handling, reporting packs and change logs. Technology can make that work more manageable by organising documents, routing tasks, keeping audit trails and helping staff find the right guidance quickly. It cannot make a firm compliant. Regulatory judgement and accountability stay with the firm and its senior managers, and any tool that supports compliance work needs testing, oversight and clear ownership." },
  { icon: "risk", title: "Fraud and risk monitoring", text: "Fraud and financial crime evolve quickly, and rules-based monitoring alone can generate large volumes of alerts, many of them false positives. Data analytics and machine learning may help by identifying unusual transactions, suspicious patterns and emerging risk indicators, and by prioritising alerts for investigators. Model outputs are signals, not conclusions. They need validation, monitoring for drift and bias, and trained people to investigate and decide." },
  { icon: "service", title: "Customer service and communication", text: "Contact centres and service teams handle a steady flow of repetitive questions about balances, statements, payment dates, document requirements, product features and application progress. Customers expect quick, accurate answers across channels, and firms must ensure communications are clear and support good outcomes. Well-scoped automation can answer routine questions from approved content and hand everything else to the right person." },
  { icon: "legacy", title: "Legacy financial systems", text: "Many financial organisations rely on core systems that are reliable but old, with limited interfaces, batch processing and data formats that modern tools do not expect. Replacing them is costly and risky, so new applications usually have to work alongside them. The 2026 Bank of England and FCA survey found that difficulty integrating AI into existing processes, and constraints imposed by legacy systems, were among the most cited non-regulatory barriers to AI adoption. Careful integration design, using APIs, middleware or controlled data exports, lets firms modernise in stages without disrupting the systems customers depend on." },
  { icon: "shield", title: "Security and operational resilience", text: "Financial systems are attractive targets, and disruption to them can cause immediate harm to customers. Secure architecture, strong authentication, least-privilege access, encryption, monitoring and tested recovery plans are essential. FCA-regulated firms are expected to identify their important business services, set impact tolerances and be able to remain within them during severe but plausible disruption, including disruption at third-party suppliers. Any new software or AI component needs to fit that resilience picture, not weaken it." },
];

export const AI_INTRO =
  "We apply AI where it improves a defined operational task and where its outputs can be checked. Our work supports financial operations, information handling and analysis.";
export const AI_BOUNDARY =
  "It does not provide financial advice, make lending or investment decisions on its own, or replace the judgement and accountability of qualified financial professionals.";

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
    id: "workflow-automation",
    icon: "automation",
    title: "AI-powered financial workflow automation",
    intro: "Financial workflow automation combines dependable rules with AI where some interpretation is needed. Typical applications include:",
    items: [
      { term: "Financial document processing:", text: "receiving documents from email, upload or scanning and preparing them for the right workflow." },
      { term: "Invoice and statement data extraction:", text: "capturing supplier details, amounts, VAT, dates, account references and line items into structured data." },
      { term: "Document classification:", text: "recognising whether an item is an invoice, a statement, an application, a complaint or general correspondence." },
      { term: "Information routing:", text: "sending each item to the right team or queue with key details attached." },
      { term: "Financial reporting preparation:", text: "gathering, reconciling and formatting data for recurring management and operational reports." },
      { term: "Back-office task automation:", text: "updating trackers, creating follow-up tasks, sending standard confirmations and logging each action." },
    ],
    outro: [
      "The value comes from less manual handling, faster processing and more consistent records, though the size of any saving depends on your volumes, document quality and existing systems. Exceptions and low-confidence cases go to people rather than being guessed. Our [AI automation services](/services/ai-automation) explain how we combine rules, AI and human review in more detail.",
    ],
  },
  {
    id: "financial-assistants",
    icon: "assistant",
    title: "Intelligent financial assistants",
    intro: "Conversational assistants can reduce pressure on contact centres, inboxes and internal help channels when they are given a clearly limited role. Suitable applications include:",
    items: [
      { term: "Customer enquiry assistants", text: "that answer routine questions about statements, payment dates, required documents or application steps, using content you have approved." },
      { term: "Financial product information navigation", text: "that helps customers find the right product page, form or contact route, without recommending products." },
      { term: "Internal knowledge assistants", text: "that help staff find policies, procedures and operational guidance quickly." },
      { term: "Document search and retrieval", text: "across large collections of contracts, reports and correspondence." },
      { term: "Staff-facing operational assistants", text: "for onboarding, process questions and system how-tos." },
    ],
    outro: [
      "Assistants have limits. They can be wrong, and in a regulated setting a confident wrong answer can cause harm. We design them to stay within approved content and a defined scope, to identify themselves as automated, to recognise questions that need a qualified person, such as anything that could amount to personalised advice, and to hand conversations to staff.",
      "Assistants that take actions across your systems are covered by our [AI agent development](/services/ai-agent-development) work, always with defined permissions and human approval for significant actions such as moving money or changing customer records. The FCA has noted that as AI moves from providing information to initiating transactions or arranging products, firms need to consider carefully which activities require authorisation.",
    ],
  },
  {
    id: "risk-analysis",
    icon: "risk",
    title: "Machine learning for financial risk analysis",
    intro: "Machine learning can find patterns in large volumes of financial data that are difficult to spot manually. Relevant applications include:",
    items: [
      { term: "Anomaly detection:", text: "highlighting transactions, payments or journal entries that differ from expected patterns." },
      { term: "Transaction-pattern analysis:", text: "identifying sequences or behaviours that may merit further investigation." },
      { term: "Risk indicators:", text: "combining signals into scores that help teams prioritise reviews." },
      { term: "Data classification:", text: "categorising transactions, counterparties or documents consistently." },
      { term: "Predictive analytics:", text: "estimating volumes, arrears trends or operational demand where there is enough good-quality history." },
      { term: "Pattern recognition:", text: "grouping similar cases to make investigation more efficient." },
    ],
    outro: [
      "These models support analysis. They do not guarantee that fraud will be detected, and they should not be treated as making accurate financial decisions on their own. They need representative training data, testing for bias and stability, explainable outputs where people rely on them, and monitoring as behaviour changes over time. Our [machine learning development](/services/machine-learning) and [predictive analytics](/services/predictive-analytics) services describe how we build, validate and monitor these models.",
    ],
  },
  {
    id: "document-intelligence",
    icon: "document",
    title: "Financial document intelligence",
    intro: "Financial document intelligence uses AI to read, classify and organise documents so that staff confirm information rather than type it. It can help with:",
    items: [
      { text: "automated classification of incoming documents by type, product and destination team;" },
      { text: "extraction of names, figures, dates, account references and clauses into structured fields;" },
      { text: "searchable collections of contracts, statements, policies and correspondence;" },
      { text: "validation workflows that check extracted values against source systems and business rules;" },
      { text: "summaries of long documents for review, with links back to the source text; and" },
      { text: "structured processing that turns unstructured paperwork into data your systems can use." },
    ],
    outro: [
      "Accuracy depends on document quality and variety, so we test on representative samples, set confidence thresholds below which a document always goes to a person, and keep a record of what was extracted and who confirmed it. For text-heavy work such as complaint classification, our [NLP development](/services/nlp-development) team covers the language models involved.",
    ],
    image: "documents",
  },
  {
    id: "generative-ai",
    icon: "knowledge",
    title: "Generative AI for financial operations",
    intro: "Generative AI is useful in finance when it works from controlled information and produces drafts for people to check. Appropriate uses include:",
    items: [
      { text: "internal knowledge retrieval over approved policies and procedures;" },
      { text: "first drafts of internal reports, meeting notes and management commentary;" },
      { text: "summaries of long financial documents and correspondence;" },
      { text: "business information assistants for staff; and" },
      { text: "controlled access to approved financial documentation, respecting each user's permissions." },
    ],
    outro: [
      "Retrieval-Augmented Generation (RAG) lets an assistant answer using only an approved set of documents and show which source each answer came from. Our [RAG development](/services/rag-development) work covers how we design these systems, including permission-aware retrieval.",
      "The risks are real: models can produce inaccurate or invented content (often called hallucination), prompts and documents can leak sensitive data if the architecture is careless, and outputs can be inconsistent. We reduce those risks through grounding, access controls, careful choice of model providers and hosting, logging and human review, as described in our [generative AI development](/services/generative-ai-development) approach. Where a model needs to handle specialist financial terminology more reliably, [LLM development and fine-tuning](/services/llm-development-fine-tuning) may help, provided the training data is properly governed.",
    ],
  },
  {
    id: "data-analytics",
    icon: "analytics",
    title: "Financial data analytics",
    intro: "Well-governed data pipelines and analytics help organisations understand operational trends, processing times, volumes, exceptions, customer service performance and business performance, without waiting for manual month-end reports. Dashboards can bring these measures into one view for managers and boards.",
    outro: [
      "Analytics supports operational and management decisions. It does not guarantee investment returns or the accuracy of financial forecasts, and it is not a substitute for professional financial judgement. Wherever possible, reporting uses aggregated or minimised data, with access restricted to the people who need it.",
    ],
    image: "dashboard",
  },
];

export const SOFTWARE = {
  paragraphs: [
    "Off-the-shelf financial software works well when your processes match the way the product was designed. It is usually quicker to start with and is supported by a vendor. The trade-off is that you adapt to the software. Custom software is built around your workflows, data and integrations. It tends to fit when your products or processes are distinctive, when several systems need to work together, when off-the-shelf tools leave gaps that staff fill with spreadsheets, or when you need control over the user experience and the data model.",
    "Often the best answer is a combination: keeping established systems of record, such as a core banking, policy administration or accounting platform, and building custom applications, integrations and dashboards around them. As part of discovery we look at whether an existing product would meet your needs at lower cost and risk.",
  ],
  listIntro: "Depending on your requirements, our [custom software development](/services/custom-software-development) can include:",
  items: [
    { icon: "modules", title: "Financial management applications", text: "for internal workflows, approvals, case tracking and operational control." },
    { icon: "rocket", title: "Custom FinTech platforms", text: "and customer-facing products, from first release to scale, through our [MVP and SaaS development](/services/mvp-saas-development) team." },
    { icon: "dashboard", title: "Financial reporting dashboards", text: "that bring operational, management and performance information into one view." },
    { icon: "lock", title: "Document management systems", text: "with role-based access, version control, retention rules and audit trails." },
    { icon: "contacts", title: "Customer management applications", text: "for enquiries, onboarding, servicing and relationship management, built through our [ERP and CRM development](/services/erp-crm-development) service or as [custom CRM software](/solutions/crm-software)." },
    { icon: "workflow", title: "Internal workflow management", text: "tools that replace email chains and spreadsheets with tracked, auditable processes." },
    { icon: "plug", title: "Financial data integration", text: "between core systems, accounting packages, CRM, payment providers and data platforms, where those systems provide suitable interfaces." },
    { icon: "code", title: "API development", text: "with authentication, validation, rate limiting and audit logging." },
    { icon: "web", title: "Secure web applications and portals", text: "for customers, advisers, brokers or staff, through our [web application development](/services/web-application-development) team." },
    { icon: "database", title: "Custom databases", text: "designed for accuracy, performance and traceability, through our [database design and development](/services/database-design) work." },
    { icon: "automation", title: "Business process automation systems", text: "that orchestrate multi-step processes across teams and systems." },
  ],
  hosting:
    "These applications are deployed on secure, monitored infrastructure, with backups, encryption, environment separation and automated deployment handled through our [cloud and DevOps](/services/cloud-devops) practice.",
  scope:
    "ClickMasters is a software and AI engineering company. We do not provide banking, payment processing, investment management, lending or any other regulated financial service, and we are not authorised by the FCA. Where a product you are building involves a regulated activity, such as handling card payments or holding client money, we design the software to work with appropriately authorised providers and help you identify the questions your compliance team or advisers need to answer.",
};

export const USE_CASES_NOTE =
  "The scenarios below are illustrative examples showing how the technology could be applied. They are not descriptions of completed client projects, and real outcomes depend on each organisation's systems, data and processes.";

export const USE_CASE_FIELDS = [
  ["problem", "Business challenge"],
  ["approach", "Technology approach"],
  ["how", "How it could work"],
  ["value", "Potential operational value"],
  ["oversight", "Limitations and oversight"],
] as const;

export const USE_CASES = [
  {
    icon: "document",
    title: "Automated financial document processing",
    problem: "Supplier invoices, statements and remittances arrive by email and post in many formats, and the finance team keys each one into the accounting system.",
    approach: "Document classification and data extraction, with validation rules and integration into the accounting platform.",
    how: "Each document is classified, key fields are extracted and checked against supplier records and purchase orders, and matched items are queued for approval with mismatches highlighted.",
    value: "Less manual keying, faster processing and a clearer view of exceptions.",
    oversight: "Staff approve items before posting, payment changes such as new bank details always require independent verification, and low-confidence extractions go to a person.",
  },
  {
    icon: "assistant",
    title: "Intelligent financial information assistants",
    problem: "The contact centre spends much of its time answering the same questions about statements, payment dates and document requirements.",
    approach: "A website or app assistant grounded in approved content using RAG, with clear hand-off routes.",
    how: "The assistant answers routine questions from approved pages, links to its sources and transfers anything outside scope, including anything resembling a request for advice, to the right team.",
    value: "Routine questions answered at any time and staff freed for complex or sensitive conversations.",
    oversight: "The assistant does not give financial advice or make account decisions. It is tested against out-of-scope, vulnerable-customer and complaint scenarios, and content owners review its sources regularly.",
  },
  {
    icon: "knowledge",
    title: "Internal compliance-document retrieval",
    problem: "Staff struggle to find the current version of policies, procedures and regulatory guidance spread across intranets and shared drives.",
    approach: "A permission-aware internal knowledge assistant using RAG over an approved, version-controlled document set.",
    how: "Staff ask questions in plain English and receive answers that cite the specific policy, section and version, limited to documents their role may access.",
    value: "Faster access to guidance, fewer interruptions for compliance specialists and more consistent use of current procedures.",
    oversight: "Answers must be checked against the cited source before they inform decisions. A named owner keeps the document set current, and the assistant does not interpret regulation on the firm's behalf.",
  },
  {
    icon: "risk",
    title: "Transaction anomaly analysis support",
    problem: "Rules-based monitoring produces a high volume of alerts, and investigators spend much of their time on low-risk cases.",
    approach: "Machine learning anomaly detection and alert scoring alongside existing rules, with explainable outputs.",
    how: "Each alert receives a risk score and the main factors behind it, so investigators can prioritise their queue. Patterns from closed cases feed regular model reviews.",
    value: "Better prioritisation and more investigator time spent on the cases most likely to matter.",
    oversight: "The model supports investigators and does not replace them. It does not guarantee detection, it is tested for bias and drift, thresholds are agreed with risk owners, and decisions about customers are made by trained staff.",
  },
  {
    icon: "report",
    title: "Financial reporting workflow automation",
    problem: "Monthly management and operational reports are compiled by hand from several exports, so they are late and hard to reconcile.",
    approach: "Automated data pipelines, reconciliation checks and report templates, with generative AI used only to draft commentary for review.",
    how: "Data is collected and reconciled automatically, variances beyond agreed thresholds are flagged, and a draft report with commentary is prepared for the finance team to check and finalise.",
    value: "Faster, more consistent reporting and more time spent on analysis.",
    oversight: "Figures are traced to source data, drafted commentary is always reviewed and edited by a person, and reconciliation failures stop the process rather than being hidden.",
  },
  {
    icon: "service",
    title: "Customer enquiry automation",
    problem: "Emails and web forms are triaged manually, so urgent issues such as suspected fraud or complaints can wait in the same queue as routine requests.",
    approach: "Natural language classification and workflow automation integrated with the case management or CRM system.",
    how: "Each enquiry is classified by topic and urgency, possible complaints and vulnerability indicators are flagged, and the case is routed to the right team with relevant account details attached.",
    value: "Faster routing, quicker handling of urgent cases and more consistent service.",
    oversight: "Classification can be wrong, so uncertain cases go to a general review queue, complaint flags are checked by people, and routing rules are reviewed regularly.",
  },
  {
    icon: "plug",
    title: "Financial application integration",
    problem: "Core, accounting, CRM and payment systems do not share data, so the same customer and transaction details are typed into several places.",
    approach: "API integrations and a middleware layer with validation, error handling, retries and audit logging.",
    how: "When a record is created or changed, the relevant details flow to the systems that need them, and failures raise an alert rather than disappearing silently.",
    value: "Less duplicate entry, fewer mismatched records and a clearer single source of truth.",
    oversight: "Integration depends on the interfaces each supplier provides. Data flows are minimised, documented and reviewed by your security and data protection teams.",
  },
  {
    icon: "dashboard",
    title: "Business intelligence dashboards",
    problem: "Leaders lack a timely, trusted view of volumes, backlogs, processing times and service performance.",
    approach: "A governed reporting data store, automated pipelines and role-based dashboards.",
    how: "Data is refreshed on a schedule, metrics follow agreed definitions, and managers see the views relevant to their role.",
    value: "Timely, consistent information and more time spent acting on it than compiling it.",
    oversight: "Dashboards support operational decisions, not investment or credit decisions. Data quality issues are made visible, and metric definitions are owned by named people.",
  },
  {
    icon: "classify",
    title: "Financial data classification",
    problem: "Transactions and documents are categorised inconsistently, making analysis, retention and reporting unreliable.",
    approach: "Machine learning and rules-based classification against an agreed taxonomy, with a review interface.",
    how: "New items are categorised automatically with a confidence score, low-confidence items go to reviewers, and corrections are used to improve the model.",
    value: "More consistent data, easier reporting and better support for retention policies.",
    oversight: "The taxonomy is owned by the business, accuracy is measured on representative samples, and classification that affects customers or regulatory reporting is checked by people.",
  },
  {
    icon: "task",
    title: "Back-office process automation",
    problem: "Operations teams repeat the same steps every day, such as updating trackers, sending standard letters and creating follow-up tasks.",
    approach: "Rules-based workflow automation, with AI used only where unstructured text needs interpreting.",
    how: "Defined triggers start routine steps automatically, and every action is logged so staff can see what happened and why.",
    value: "Repetitive work reduced and greater consistency across teams and shifts.",
    oversight: "Automation is introduced step by step and monitored, staff can pause or override it, and any step affecting customer money or records keeps a human checkpoint.",
  },
];

export const REG_INTRO =
  "Responsible financial technology starts with the data, the customers affected by it and the accountability of the firm that deploys it. The considerations below shape how we design, build and support financial software.";
export const REG_DISCLAIMER =
  "This section is general information, not legal, regulatory or financial advice. Each organisation remains responsible for its own compliance and should take specialist advice where needed.";

// VERIFY: the pack asks for this section to be reviewed by a compliance or
// legal adviser before publishing (sources checked 27 Nov 2026).
export const REGULATION = [
  {
    id: "uk-gdpr",
    icon: "privacy",
    title: "UK GDPR and the Data Protection Act 2018",
    paragraphs: [
      "Financial organisations process large amounts of personal data, from identity documents and contact details to account histories and transaction records. The UK GDPR and the Data Protection Act 2018 require a lawful basis for processing, transparency about how data is used, data minimisation, accuracy, limits on how long data is kept, appropriate security, and data protection by design and by default. In practice that means collecting only what each purpose needs, restricting access by role, encrypting data in transit and at rest, logging access and setting clear retention rules. Where processing is likely to result in a high risk to individuals, which the ICO says is the case for most uses of AI involving personal data, a Data Protection Impact Assessment (DPIA) is required before processing begins.",
      "The Data (Use and Access) Act 2025 has amended UK data protection law, including the rules on automated decision-making. Significant decisions made solely by automated means now need safeguards such as giving people information about the decision, letting them make representations, providing human intervention and allowing them to contest the decision. The ICO consulted on new automated decision-making guidance in 2026 and has said its existing AI guidance is under review, so current ICO guidance should be checked as part of any project.",
    ],
  },
  {
    id: "fca",
    icon: "scales",
    title: "FCA expectations for firms using AI",
    paragraphs: [
      "The FCA has said it does not plan to introduce AI-specific rules and will rely on its existing framework. For regulated firms using AI, that framework includes:",
    ],
    items: [
      ["Governance and accountability:", "under the Senior Managers and Certification Regime, senior managers remain accountable for outcomes in their areas, including where AI is used. Firms need clear ownership of AI systems and documented governance."],
      ["Fair consumer outcomes:", "the Consumer Duty requires firms to act to deliver good outcomes for retail customers, avoid foreseeable harm and support customers' understanding. AI-driven processes, communications and decisions must meet the same standard as any other."],
      ["Appropriate transparency:", "customers should understand when and how automated tools affect them, and communications should be clear and not misleading."],
      ["Human oversight:", "firms should be able to intervene in, correct and override automated processes, especially where customers may be affected."],
      ["Risk-based testing:", "systems should be tested before deployment in proportion to their potential impact, including for bias and for vulnerable customers."],
      ["Ongoing monitoring:", "model performance, outcomes and complaints should be monitored over time, with clear triggers for review."],
      ["Operational resilience:", "firms must be able to keep important business services within impact tolerances during severe but plausible disruption, including failures at technology and AI suppliers."],
    ],
    after:
      "The FCA has also published material on agentic AI. As AI moves from giving information to initiating transactions, moving money or arranging products, firms must consider which activities need authorisation. Firms regulated by the PRA should also consider its model risk management principles (SS1/23), which cover AI models.",
  },
  {
    id: "ai-risk",
    icon: "risk",
    title: "AI risk management",
    paragraphs: ["Good AI risk management in finance covers:"],
    items: [
      ["Model accuracy and limitations:", "measuring performance on representative data and documenting where a model should not be used."],
      ["Bias and fairness:", "testing for outcomes that disadvantage groups of customers, including those with protected characteristics or characteristics of vulnerability."],
      ["Explainability:", "being able to explain, at an appropriate level, why a model produced an output, particularly where it affects customers."],
      ["Human review:", "designing review points into workflows and making uncertainty visible."],
      ["Third-party AI dependencies:", "understanding where data goes when external models or APIs are used, whether providers retain or reuse it, and what happens if a provider fails or changes its service."],
      ["Secure deployment:", "protecting models, prompts, training data and outputs against misuse, data leakage and manipulation such as prompt injection."],
      ["Monitoring and incident management:", "tracking drift, errors and complaints, with a defined process for pausing or rolling back a system."],
    ],
  },
  {
    id: "security",
    icon: "lock",
    title: "Financial system security",
    paragraphs: ["Financial applications need security designed in from the start, including:"],
    items: [
      ["Role-based access control", "and least-privilege permissions, reviewed regularly."],
      ["Encryption", "of sensitive data in transit and at rest, with sound key management."],
      ["Secure APIs", "with strong authentication, input validation, rate limiting and versioning."],
      ["Audit logging", "of access, changes and automated actions, protected from tampering."],
      ["Authentication", "using multi-factor methods for staff and appropriate strong customer authentication where it applies."],
      ["Data isolation", "between customers, environments and tenants."],
      ["Backup and recovery planning", "with tested restores and recovery objectives aligned to your resilience requirements."],
    ],
    after:
      "Where card payments are involved, the PCI DSS standard applies to whoever stores, processes or transmits cardholder data. A common approach is to use an authorised payment provider so that card data never touches your own systems.",
  },
];

// VERIFY: confirm ClickMasters holds none of these certifications; update if any is obtained.
export const REG_STATEMENT =
  "ClickMasters is not FCA-authorised and does not hold ISO 27001, PCI DSS or SOC 2 certification. Software development supports a firm's compliance work. It is not a substitute for the firm's own legal and regulatory obligations, governance or approvals.";

export const WHY_INTRO =
  "We are an AI and software engineering company, not a financial services firm, and we are clear about that. What we offer financial organisations is the ability to turn operational problems into well-engineered, secure and maintainable systems.";

export const WHY = [
  { icon: "briefcase", title: "Business-focused AI development", text: "We start with the operational problem and its cost, not with a technology we want to use." },
  { icon: "automation", title: "Intelligent workflow automation", text: "Automation, document intelligence, assistants and analytics, used where they earn their place and tested on representative examples." },
  { icon: "code", title: "Custom software engineering", text: "Applications built around your workflows, documented, tested and maintainable." },
  { icon: "plug", title: "Financial application integration", text: "We connect the systems you already run, so information moves reliably without re-keying." },
  { icon: "database", title: "Data-focused software architecture", text: "Clean data models, clear lineage and audit trails, because financial data has to be traceable." },
  { icon: "stack", title: "Scalable digital solutions", text: "Foundations sized for current needs and planned for growth in users, volumes and products." },
  { icon: "design", title: "User-centred application development", text: "Interfaces designed with the staff and customers who will use them, including accessibility needs." },
  { icon: "map", title: "Practical technology planning", text: "Phased delivery, starting with the use case that offers the clearest value and the lowest risk." },
];

export const WHY_OUTRO =
  "Understanding financial workflows comes before choosing any technology. The right answer is sometimes AI, sometimes a better integration, a cleaner process or a well-designed form. If [AI consulting and strategy](/services/ai-consulting-strategy) would help you decide where to start, we can begin there.";

// VERIFY: confirm the support model behind step 06 ("agreed as part of the engagement").
export const PROCESS = [
  { title: "Understand the business", text: "We identify operational requirements, users, existing systems, data and objectives, along with your governance, data protection, security and resilience requirements." },
  { title: "Analyse opportunities", text: "We assess where AI, automation or custom software could help, and where simpler options would be more appropriate, and we flag questions that your compliance or risk teams should consider early." },
  { title: "Design the architecture", text: "We plan data flows, integrations, access controls, audit logging, security requirements, human review points and the technical architecture, with documentation your governance processes can use." },
  { title: "Build the solution", text: "We develop the application, automation or AI-enabled functionality in short iterations with regular demonstrations, using synthetic or appropriately protected test data." },
  { title: "Test and validate", text: "We test functionality, usability, accessibility, security, reliability and expected behaviour, and evaluate AI features against representative real-world examples before go-live." },
  { title: "Improve and maintain", text: "After launch we monitor performance, review AI behaviour, apply updates and plan improvements, with ongoing technical support agreed as part of the engagement." },
];

export const PROCESS_NOTE =
  "Regulated financial organisations remain responsible for their own governance, model approvals, risk assessments and compliance obligations. Our development and testing process supports those activities with technical documentation and evidence. It does not replace them.";

export const FAQS = [
  { q: "How is AI used in financial services?", a: ["AI is used across financial services for tasks such as document processing, customer service assistants, fraud and anomaly detection, credit and risk analysis, compliance support and operational reporting. The Bank of England and FCA's 2026 survey found that 86% of responding firms use AI, with generative AI now the most common type of system reported. Many practical opportunities sit in operations: extracting data from documents, routing work, answering routine questions and helping staff find approved guidance."] },
  { q: "What are AI solutions for finance?", a: ["AI solutions for finance are software systems that apply techniques such as machine learning, document understanding and language models to financial tasks. A useful solution combines the AI component with reliable software, integration with existing systems, access controls, audit trails and human review, so that it works safely within real workflows and regulatory expectations."] },
  { q: "Can AI automate financial workflows?", a: ["Yes, many financial workflows can be partly or largely automated, including document capture, data extraction, matching, routing, report preparation and routine back-office updates. The best results usually come from combining rules-based automation with AI for less structured content, and sending exceptions and uncertain cases to staff. Steps that affect customer money or records should keep a human checkpoint."] },
  { q: "How can AI help identify unusual transaction patterns?", a: ["Machine learning models can learn what normal activity looks like and highlight transactions or behaviours that differ from it, helping investigators prioritise alerts. They do not guarantee that fraud will be detected and can produce false positives and false negatives. Models need representative data, testing for bias, explainable outputs, regular monitoring and trained people to investigate and decide."] },
  { q: "What is FinTech software development?", a: ["FinTech software development is the design and build of digital products and internal systems for financial services, such as customer apps and portals, onboarding platforms, financial management tools, reporting dashboards, integrations and APIs. It requires particular attention to security, data accuracy, audit trails, resilience and the regulatory context of the product."] },
  { q: "How can financial organisations use AI assistants?", a: ["Assistants can answer routine customer questions from approved content, help customers find the right information or form, and help staff search policies and procedures. They should be clearly identified as automated, limited to approved content, tested on out-of-scope, complaint and vulnerable-customer scenarios, and able to hand conversations to people. They should not give personalised financial advice unless the firm has designed, authorised and governed them for that purpose."] },
  { q: "Is AI safe to use in financial services?", a: ["AI can be used safely when it is matched to suitable tasks and governed properly. That means clear ownership and accountability, testing before deployment, controls on data and access, human oversight, monitoring for errors, drift and bias, and plans for supplier failure. Risks such as inaccurate outputs, unfair outcomes and data leakage are real and need to be managed rather than assumed away."] },
  { q: "How can financial businesses protect sensitive data when using AI?", a: ["Start with a DPIA where one is required, collect and process only the data each purpose needs, restrict access by role, encrypt data, keep audit logs and set clear retention rules. Check where data is processed and stored, and whether any supplier, including an AI model provider, may retain or reuse prompts or documents. Be transparent with customers about how AI is used, and take specialist data protection advice for higher-risk processing."] },
  { q: "Can custom financial software integrate with existing systems?", a: ["Usually, yes, provided the existing systems offer suitable access such as APIs, data exports or approved integration routes. Legacy and vendor platforms vary considerably, so integration options should be assessed early. Good integrations include validation, error handling, retries, audit logging and data minimisation."] },
  { q: "Does using AI in financial services require FCA consideration?", a: ["For FCA-regulated firms, yes. The FCA applies its existing rules to AI, including the Consumer Duty, the Senior Managers and Certification Regime, and its expectations on systems, controls and operational resilience. Firms remain accountable for outcomes whether or not AI is involved. If an AI product would carry out a regulated activity, such as giving advice or arranging transactions, authorisation questions arise. Firms should take compliance or legal advice for their specific circumstances."] },
];

export const FINAL_CTA = {
  title: "Let's Discuss Your",
  titleAccent: "Financial Technology Project",
  body: {
    text: "Whether you want to reduce manual processing, connect disconnected systems, make approved knowledge easier to find, strengthen risk analysis or build a new financial application, tell us what you are trying to achieve. We will give you an honest view of what is feasible, which governance and regulatory questions to consider, and the most sensible first step.",
  },
  bring: ["The workflow you want to improve", "Systems you use today", "Where manual effort goes", "Your governance and security requirements", "What a good outcome looks like"],
};

export const SCHEMA_SERVICE = {
  name: "AI Solutions and Software Development for Financial Services",
  serviceType: ["AI solutions and software development for financial services", "Financial workflow automation", "Financial document processing"],
  description:
    "Financial workflow automation, document intelligence, machine learning for risk analysis support, knowledge assistants, integrations and custom software for UK financial organisations, built with security by design and human oversight.",
  catalogName: "Financial services AI capabilities",
  catalog: AI_CAPABILITIES.map((c) => c.title),
  relatedServicePath: "/services/ai-automation",
};
