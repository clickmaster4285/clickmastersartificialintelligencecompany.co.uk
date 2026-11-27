/*
 * /services/aiservices: the AI Services pillar page.
 * Content from "ClickMasters AI Services Pillar SEO Content Pack" (27 Nov 2026).
 * Edit copy here; page.jsx only renders it.
 *
 * This page owns the broad terms "AI services" and "artificial intelligence services".
 * Each child page keeps its own target (AI agent development, generative AI, AI
 * automation, machine learning, RAG, LLM fine-tuning, custom AI); here each gets one
 * "problem it addresses" paragraph and a single onward link.
 * Inline links use [anchor](/path) and render through <RichText>; **bold** is supported.
 * VERIFY comments mark claims the pack says need owner confirmation (section F).
 */

export const PATH = "/services/aiservices";

export const SEO = {
  title: "AI Services UK | AI Development & Integration",
  description:
    "AI services for UK businesses: generative AI, AI agents, automation, machine learning and RAG, designed around your data and integrated with your systems.",
  ogTitle: "AI Services UK | AI Development & Integration | ClickMasters",
  ogDescription:
    "Use-case discovery, generative AI, AI agents, automation, machine learning and RAG, built around your data and connected to the software you already run.",
};

const IMG = "/assets/Services/ai-services";

/* Photos from Unsplash (Unsplash License, free to use). No robots, glowing "AI brain" graphics, faces or logos. */
export const IMAGES = {
  // Photo: Swello (unsplash.com/photos/4Ya_nyKge5k)
  assistant: {
    src: `${IMG}/ai-services-assistant-on-laptop.webp`, width: 1200, height: 800,
    alt: "Person typing a question into an AI assistant on a laptop at a desk",
  },
  // Photo: Mario Badilla (unsplash.com/photos/Pl5Yhg_5URo)
  documents: {
    src: `${IMG}/ai-services-document-processing.webp`, width: 1200, height: 800,
    alt: "Hand feeding a sheet of paper into a machine, representing document processing",
  },
  // Photo: Ngital (unsplash.com/photos/8OYcY9CRP_0)
  analytics: {
    src: `${IMG}/ai-services-analytics-laptop.webp`, width: 1200, height: 675,
    alt: "Laptop showing charts on a sunlit desk, representing predictive analytics and reporting",
  },
  // Photo: Jakub Żerdzicki (unsplash.com/photos/fQOyF0D0cDU)
  workshop: {
    src: `${IMG}/ai-services-use-case-workshop.webp`, width: 1200, height: 800,
    alt: "Whiteboard covered in coloured sticky notes from a use-case discovery workshop",
  },
  // Photo: He Junhui (unsplash.com/photos/cMoE2tU_BbM)
  chip: {
    src: `${IMG}/ai-services-processor-chip.webp`, width: 1200, height: 900,
    alt: "Close-up of a processor chip on a green circuit board",
  },
} as const;

export const HERO = {
  eyebrow: "AI Services UK",
  title: "AI Services and AI Development",
  titleAccent: "for UK Businesses",
  lead:
    "Most organisations are already using AI in some form, through a chatbot, a writing assistant or a feature inside existing software. The harder step is turning AI into something that works reliably inside real processes: answering from your own information, handling routine work, supporting decisions and becoming part of the products your customers use. ClickMasters provides AI services that cover that step, from identifying the right use case to building, integrating and monitoring AI systems in production.",
  audience:
    "We design generative AI applications, AI agents, intelligent automation, machine learning models and retrieval-based knowledge systems around your workflows and data, and connect them to the software you already run. Where an existing AI tool would do the job, we will tell you.",
  // VERIFY: "6–8 weeks" removed until confirmed (pack, F1).
  stats: [
    { label: "Start", value: "Use-case discovery first" },
    { label: "Models", value: "Model-agnostic" },
    { label: "Cloud", value: "AWS · Azure · GCP" },
    { label: "Delivery", value: "Integrated with your systems" },
  ],
  figureAlt:
    "AI services lifecycle from use-case discovery and development to integration with business systems and production monitoring",
};

/** Hero diagram: the lifecycle with the six core services around it. */
export const HERO_FLOW = {
  stages: ["Discover", "Build", "Integrate", "Monitor"],
  services: ["Generative AI", "AI agents", "AI automation", "Machine learning", "RAG", "LLM fine-tuning"],
  systems: ["CRM", "ERP", "Help desk", "Documents"],
};

export const WHAT_ARE = {
  title: "What Are AI Services?",
  intro:
    "AI services help an organisation decide where artificial intelligence can add value, then build and run it properly. In practice that covers:",
  items: [
    { icon: "strategy", title: "AI strategy and use-case discovery", text: "Finding the problems where AI is genuinely the right tool, and scoring them for value, feasibility and risk." },
    { icon: "app", title: "AI application development", text: "Building the software around a model, meaning the interface, logic, permissions and integrations." },
    { icon: "generative", title: "Generative AI implementation", text: "Language models that draft, summarise, converse and reason over content." },
    { icon: "ml", title: "Machine learning", text: "Models that predict, classify and detect patterns in structured data." },
    { icon: "automation", title: "Intelligent automation", text: "Workflows where rules handle the predictable steps and AI handles the unstructured ones." },
    { icon: "agent", title: "AI assistants and agents", text: "Conversational tools and task-oriented agents that act through approved systems." },
    { icon: "data", title: "Data and knowledge integration", text: "Connecting AI to your documents, databases and business applications, securely." },
    { icon: "monitor", title: "Deployment, monitoring and improvement", text: "Running AI in production, measuring accuracy and cost, and improving it over time." },
  ],
  buyOrBuild:
    "**Buying an AI tool or building around your own workflows?** Ready-made tools, such as general chat assistants or AI features in your existing software, are quick and inexpensive, and often the right starting point. They work generically, though, and usually cannot see your internal data, follow your business rules or act within your systems. AI built around your own workflows and data can do those things, at the cost of design, integration and ongoing care. Good AI services help you choose between the two, case by case.",
  stats: [
    { value: "32%", text: "of UK businesses were using at least one AI technology in 2026, double the 16% of 2025", source: "AI adoption survey 2026 (UK government, October 2026)" },
    { value: "81%", text: "of UK businesses using AI apply human oversight to AI outputs", source: "AI adoption survey 2026" },
  ],
  ukContext:
    "Most use was still in accessible, low-complexity tools, and most businesses remained at an early or exploratory stage. The most significant barriers were skills, unclear business cases, and concerns about accuracy, bias, privacy and security. Those findings shape how we work: practical use cases, evidence before scale, and human oversight where it matters.",
};

export const SERVICES = {
  title: "Our Artificial Intelligence Services",
  intro:
    "Each service below starts from a business problem. Most projects combine two or three of them, for example retrieval and generation behind an assistant, or machine learning inside an automated workflow.",
  core: [
    {
      id: "generative-ai",
      icon: "generative",
      title: "Generative AI development",
      problem: "Skilled people spend hours drafting, summarising, answering and reformatting content, and knowledge is locked in documents nobody has time to read.",
      text: "Generative AI applications use large language models to draft documents and correspondence, summarise long material, power conversational interfaces and build business knowledge assistants. They are wired into your workflows, with review steps where accuracy matters. Our [Generative AI Development](/services/generative-ai-development) service covers model integration, on-brand output and the guardrails that keep generated content reliable.",
      href: "/services/generative-ai-development",
      cta: "generative AI development",
    },
    {
      id: "ai-agents",
      icon: "agent",
      title: "AI agent development",
      problem: "Many tasks span several systems: look something up, check a rule, update a record, notify someone. Assistants that can only talk cannot complete them.",
      text: "AI agents are task-oriented systems that plan multi-step work and act through approved tools and APIs, with human approval for consequential actions and escalation when they are unsure. Where several agents need to work together, orchestration keeps responsibilities and permissions clear. See our [AI Agent Development Services](/services/ai-agent-development) for how we scope, constrain and monitor agents.",
      href: "/services/ai-agent-development",
      cta: "AI agent development",
    },
    {
      id: "ai-automation",
      icon: "automation",
      title: "AI automation",
      problem: "Repetitive, rules-heavy work such as reading emails and forms, re-keying data, chasing approvals and answering the same queries consumes time and introduces errors.",
      text: "AI automation combines reliable rules with AI that reads documents, classifies requests and extracts information, integrated with your existing systems, so routine cases flow through and exceptions reach the right person. Our [AI Automation Services](/services/ai-automation) explain how we combine automation, AI and human review across business workflows and customer support.",
      href: "/services/ai-automation",
      cta: "AI automation services",
    },
    {
      id: "machine-learning",
      icon: "ml",
      title: "Machine learning development",
      problem: "Decisions about demand, risk, churn, quality or prioritisation are often made on instinct, even though historical data holds useful signals.",
      text: "Machine learning builds predictive and classification models, forecasting, pattern recognition and recommendation systems from your structured data, with results delivered to the people who make the decisions. Our [Machine Learning Development](/services/machine-learning) service covers data preparation, model validation and monitoring for drift.",
      href: "/services/machine-learning",
      cta: "machine learning development",
    },
    {
      id: "rag",
      icon: "rag",
      title: "RAG development",
      problem: "General AI assistants do not know your policies, products or procedures, and they may invent answers.",
      text: "Retrieval-augmented generation retrieves relevant passages from your approved documents and data, and uses them to generate context-aware answers with citations. It powers enterprise knowledge search and internal document assistants, with permission-aware retrieval so people only see what they are entitled to. More detail is on our [RAG development](/services/rag-development) page.",
      href: "/services/rag-development",
      cta: "RAG development",
    },
    {
      id: "llm",
      icon: "llm",
      title: "LLM development and fine-tuning",
      problem: "An off-the-shelf model may not follow your formats, terminology or tone consistently, or the right model choice may not be obvious.",
      text: "This service covers model selection and benchmarking, prompt engineering, fine-tuning where it is justified (often it is not), evaluation and deployment, including private hosting of open-weight models when data must stay in your environment. See [LLM development and fine-tuning](/services/llm-development-fine-tuning).",
      href: "/services/llm-development-fine-tuning",
      cta: "LLM development and fine-tuning",
    },
  ],
  specialistTitle: "Further specialist services",
  specialist: [
    { icon: "custom", title: "Custom AI development", text: "Bespoke AI products.", href: "/services/custom-ai-development" },
    { icon: "nlp", title: "Natural language processing", text: "Classify, extract and redact text.", href: "/services/nlp-development" },
    { icon: "vision", title: "Computer vision", text: "Inspection and document scanning.", href: "/services/computer-vision-development" },
    { icon: "forecast", title: "Predictive analytics", text: "Forecasting demand, churn and risk.", href: "/services/predictive-analytics" },
    { icon: "strategy", title: "AI consulting and strategy", text: "Use-case scoring and roadmaps.", href: "/services/ai-consulting-strategy" },
  ],
};

export const REQUIREMENTS = {
  title: "AI Solutions for Different Business Requirements",
  note: "These are potential use cases showing where AI may help. They are not descriptions of completed client projects.",
  headers: ["Requirement", "The business problem", "How AI may help", "Data and integrations needed", "Where human review matters"],
  rows: [
    ["Intelligent document processing", "Invoices, forms and contracts re-keyed by hand", "Classify documents and extract fields into systems", "Sample documents; target system APIs", "Low-confidence fields; high-value items"],
    ["Enterprise knowledge assistants", "Staff cannot find current policies and procedures", "Cited answers from approved documents (RAG)", "Document repositories; access permissions", "Decisions based on answers; content ownership"],
    ["AI-powered customer support", "Queues full of routine questions", "Classify, answer routine queries and draft replies", "Help desk, knowledge base and order data", "Complaints, vulnerable customers, refunds"],
    ["Internal business assistants", "HR, IT and operations requests clog inboxes", "Answer and route requests and pre-fill forms", "Intranet content; HR and IT systems", "Personal and sensitive matters"],
    ["Predictive analytics", "Planning relies on spreadsheets and instinct", "Forecast demand, risk or churn with ranges", "Historical outcomes; operational data", "Final planning and commercial decisions"],
    ["Workflow optimisation", "Approvals and hand-offs stall", "Route, prioritise and flag stuck items", "Workflow and ticketing systems", "Exceptions; policy changes"],
    ["Recommendation systems", "Users struggle to find relevant products or content", "Suggest items based on behaviour and attributes", "Catalogue and interaction data; consent", "Fairness checks; business rules"],
    ["Semantic search", "Keyword search misses relevant results", "Search by meaning across records and documents", "Content index; metadata; permissions", "Index scope approved by data owners"],
    ["Data extraction and classification", "Unstructured text cannot be analysed", "Tag, categorise and extract entities at scale", "Text sources; a labelled sample for evaluation", "Sampling and quality checks"],
    ["AI-enabled software applications", "Products lack intelligent features customers expect", "Embed assistants, search or insights in the product", "Product data; tenant isolation", "User-facing limits; output monitoring"],
    ["Business process intelligence", "No clear view of where time is lost", "Analyse event logs to reveal bottlenecks", "System logs and timestamps", "Interpreting causes before acting"],
    ["AI-powered reporting and insights", "Reports take days to assemble", "Automated reporting with AI-drafted summaries", "Data pipelines; agreed metrics", "Summaries checked against the figures"],
  ],
};

export const INDUSTRIES = {
  title: "AI for Different Industries",
  intro: "AI requirements change with each sector's data, regulation and risk. Each industry page explains the opportunities and safeguards in more detail:",
  items: [
    { icon: "health", title: "Healthcare", href: "/industries/healthcare", text: "Administrative automation and knowledge assistants, with special category data and medical device rules considered." },
    { icon: "finance", title: "Financial services", href: "/industries/finance", text: "Document workflows, risk analytics and audit-ready automation." },
    { icon: "cart", title: "E-commerce and retail", href: "/industries/ecommerce", text: "Semantic product search, recommendations and support automation." },
    { icon: "education", title: "Education and EdTech", href: "/industries/edtech", text: "Learning assistants and assessment support, with children's data and DfE guidance in mind." },
    { icon: "home", title: "Real estate", href: "/industries/real-estate", text: "Listing intelligence, enquiry assistants and document processing." },
    { icon: "truck", title: "Logistics and supply chain", href: "/industries/logistics", text: "Route planning support, freight documents and visibility." },
    { icon: "factory", title: "Manufacturing", href: "/industries/manufacturing", text: "Predictive maintenance support, quality inspection and production analytics." },
    { icon: "saas", title: "Enterprise SaaS", href: "/industries/enterprise-saas", text: "AI features in multi-tenant products, with tenant-scoped data." },
  ],
};

export const COMPARISON = {
  title: "Custom AI Development or Ready-Made AI Tools?",
  intro: "Custom AI is not always necessary. The right approach depends on how specific the task is, which data it needs and how much control you require.",
  headers: ["Approach", "Best when", "Customisation", "Data access", "Control and security", "Implementation and maintenance"],
  rows: [
    ["Ready-made AI tools", "The task is general (drafting, meeting notes, coding help)", "Low: settings only", "Limited to what you paste in or the vendor connects", "Vendor-controlled; check data terms", "Minimal setup; the vendor maintains it"],
    ["AI APIs and model integration", "You need AI inside an existing workflow or product", "Moderate: prompts and logic", "Whatever your integration passes in", "Your app controls access; provider terms apply", "Integration work; prompt and cost monitoring"],
    ["RAG-based systems", "Answers must come from your own, changing documents", "High: retrieval and permissions", "Your approved documents", "Permission-aware retrieval; citations", "Indexing, evaluation and content upkeep"],
    ["Fine-tuned models", "You need consistent format, tone or domain behaviour", "High: model behaviour", "Curated training examples", "Can be hosted privately", "Data preparation; retraining when needs change"],
    ["Custom AI applications", "The AI must fit unique processes, data and interfaces", "Full", "Designed around your systems", "Designed to your security requirements", "The largest build effort; ongoing ownership"],
    ["AI agents and orchestration", "Multi-step tasks across tools need completing", "High: tools, rules and approvals", "Through scoped tool permissions", "Approvals, logging and limits essential", "Careful design, testing and monitoring"],
  ],
  path:
    "**A sensible path:** start with ready-made tools for general productivity, use APIs or RAG where AI needs your context, and reserve fine-tuning and fully custom builds for cases where the evidence shows they are worth it. If you want an independent view first, our [AI consulting and strategy](/services/ai-consulting-strategy) service scores use cases before any build. For bespoke AI products, see [custom AI development](/services/custom-ai-development).",
};

export const PROCESS = {
  title: "Our AI Development and Implementation Process",
  intro:
    "AI projects carry a risk that traditional software does not: you cannot be certain a model will perform well enough on your real data until you test it. That is why we validate a use case on a small scale before investing in a full implementation.",
  steps: [
    { title: "Business discovery and AI opportunity assessment", text: "The problem, the people affected, the decision or task AI supports, and how success will be measured." },
    { title: "Requirements and data readiness analysis", text: "Data sources, quality, access, permissions and integration constraints." },
    { title: "Solution architecture and model selection", text: "Prompting, RAG, fine-tuning, machine learning or a combination; hosting and integration patterns; models benchmarked for accuracy, cost and latency." },
    { title: "Proof of concept or pilot", text: "Tests the riskiest assumption on real data against an agreed evaluation set, before committing to production work." },
    { title: "Application development and integration", text: "Builds the software around the model and connects it to your systems, with permissions and audit trails." },
    { title: "Testing, evaluation and security review", text: "Functional, security and load testing; accuracy and bias evaluation; prompt-injection testing; user acceptance." },
    { title: "Deployment and monitoring", text: "Controlled release, with dashboards for accuracy, drift, latency and cost." },
    { title: "Continuous optimisation and maintenance", text: "Re-indexing, retraining, new model evaluations and improvements as data and needs change." },
  ],
  outro: "Timelines depend on scope, data readiness and integrations. We give a realistic plan after discovery rather than a fixed number in advance.",
};

// VERIFY: keep only tools in active use (pack, F4).
export const TECH = {
  title: "AI Technologies and Technical Capabilities",
  intro: "We describe technology in terms of what it does for you, and choose it per project rather than committing in advance to one provider.",
  items: [
    { icon: "llm", title: "Large language models and generative AI APIs", text: "Commercial and open-weight models, used through APIs or hosted privately, chosen on measured accuracy, cost, latency and data requirements." },
    { icon: "rag", title: "Retrieval, embeddings and vector search", text: "Text is converted into embeddings and stored in vector-capable databases such as PostgreSQL with pgvector, so systems can find relevant information by meaning." },
    { icon: "ml", title: "Machine learning frameworks", text: "Python-based tools such as scikit-learn, PyTorch and TensorFlow for prediction, classification and forecasting." },
    { icon: "nlp", title: "Natural language processing", text: "Classification, entity extraction and redaction for text-heavy processes." },
    { icon: "code", title: "Python and Node.js integration", text: "Back-end services that connect models to business logic, APIs and data." },
    { icon: "app", title: "React-based AI interfaces", text: "Chat, search and review screens in React and Next.js, designed so users can see sources and correct outputs." },
    { icon: "data", title: "Databases and data pipelines", text: "Reliable ingestion, cleaning and versioning of the data models depend on." },
    { icon: "plug", title: "API integrations", text: "Secure connections to CRM, ERP, help desk, document and communication systems, through the access each provider offers." },
    { icon: "cloud", title: "Cloud deployment", text: "AWS, Azure or Google Cloud, in containers and, where required, inside a private network." },
    { icon: "monitor", title: "Evaluation and monitoring", text: "Evaluation sets, guardrails, and tracking of accuracy, drift, latency and cost in production." },
  ],
  note: "We use these vendors' products; we do not claim official partnerships with them.",
};

export const GOVERNANCE = {
  title: "Responsible AI, Security and Governance",
  intro: "AI systems handle sensitive information and influence decisions, so trust has to be designed in.",
  items: [
    { icon: "privacy", title: "Data privacy and protection", text: "Collect and send only what each use case needs; encrypt data in transit and at rest; review each model provider's retention and training terms." },
    { icon: "law", title: "UK GDPR and the Data Protection Act 2018", text: "Where personal data is processed, these apply, as amended by the Data (Use and Access) Act 2025, including the updated rules on automated decision-making. Most AI processing of personal data warrants a Data Protection Impact Assessment, and we supply the technical detail for it." },
    { icon: "server", title: "Sensitive business information", text: "Private hosting of open-weight models where data must not leave your environment." },
    { icon: "roles", title: "Access control and authentication", text: "Role-based access and permission-aware retrieval, so AI never shows people content they could not otherwise open." },
    { icon: "shield", title: "API and integration security", text: "Scoped credentials, secrets management, and defences against prompt injection in RAG systems and agents." },
    { icon: "retention", title: "Data retention and processing", text: "Defined retention for prompts, outputs and logs." },
    { icon: "test", title: "Model evaluation", text: "Test sets of real questions and cases, run before launch and after every significant change." },
    { icon: "alert", title: "Hallucination and accuracy risks", text: "Grounding in sources, citations, confidence thresholds and human review. No language model is error-free." },
    { icon: "scales", title: "Bias and fairness", text: "Testing across relevant groups and documenting limitations." },
    { icon: "users", title: "Human oversight", text: "People approve consequential actions and decisions. The government's 2026 survey found 81% of UK businesses using AI apply human oversight to AI outputs, and trust remains lowest for high-stakes and autonomous uses." },
    { icon: "history", title: "Monitoring and accountability", text: "Logging, alerting, named owners and a defined rollback process." },
    { icon: "escalate", title: "Escalation for high-impact decisions", text: "Clear routes to people for anything affecting individuals' rights, money, safety or wellbeing." },
  ],
  statement:
    "Our approach is informed by the ICO's guidance on AI and data protection and the government's AI Risk Management Toolkit (September 2026), which sets out practical steps for identifying, assessing and treating AI risks. AI systems need evaluation and monitoring after deployment, not just before. We do not promise zero errors, guaranteed security or automatic legal compliance.",
};

export const WHY = {
  title: "Why Businesses Choose a Practical AI Development Partner",
  items: [
    { icon: "strategy", title: "Business-first AI planning", text: "We start with the problem and how success will be measured, not with a model." },
    { icon: "compare", title: "The right approach for each use case", text: "Ready-made tool, API, RAG, fine-tuning, machine learning or agent, chosen on evidence." },
    { icon: "plug", title: "Integration with your existing software", text: "AI delivered inside working systems, by a team that also builds web, mobile, cloud and enterprise software." },
    { icon: "custom", title: "Custom development where it is necessary", text: "And honest advice when it is not." },
    { icon: "scale", title: "Scalable architecture", text: "Designed for growing users, data and model costs." },
    { icon: "shield", title: "Security-conscious implementation", text: "Private deployment options, access control and prompt-injection defences." },
    { icon: "users", title: "Human-centred workflows", text: "Review points, clear limits and easy correction." },
    { icon: "monitor", title: "Long-term maintainability", text: "Documented, monitored and model-agnostic, so you can switch models as the market moves." },
  ],
};

export const FAQS = [
  { q: "What are AI services?", a: ["AI services help organisations identify, build and run AI solutions. They range from use-case discovery and strategy, through developing generative AI applications, agents, automation and machine learning models, to integrating them with existing systems and monitoring them in production."] },
  { q: "What AI services can a software development company provide?", a: ["A software development company with AI expertise can build the complete system: the AI component and the application around it. That includes the interface, data pipelines, integrations, security and hosting, so AI works inside real workflows rather than as a standalone demo."] },
  { q: "How can AI help a small or medium-sized business?", a: ["Usually by removing routine work and improving access to information. Typical examples are drafting and summarising, answering common customer questions, extracting data from documents, and finding information in internal files. Many SMEs start with ready-made tools, then invest in custom AI only where a specific process justifies it."] },
  { q: "What is the difference between AI development and AI automation?", a: ["AI development is the broader discipline of designing and building AI systems: models, applications and integrations. AI automation is one application of it, using AI within workflows to carry out repetitive tasks, typically combined with rules and human review of exceptions."] },
  { q: "What is generative AI development?", a: ["It is building applications on large language models and other generative models that create text, summaries, answers or other content. Examples include knowledge assistants, drafting tools and conversational interfaces, connected to your data and workflows, with safeguards for accuracy."] },
  { q: "What are AI agents and how do businesses use them?", a: ["AI agents are systems that can plan and complete multi-step tasks by using approved tools, such as searching records, updating systems or preparing documents. Businesses use them for operations, support and back-office workflows, with permissions, logging and human approval for consequential actions."] },
  { q: "What is the difference between machine learning and generative AI?", a: ["Machine learning usually learns from historical, often structured, data to predict or classify, for example forecasting demand or detecting anomalies. Generative AI creates new content, such as text or images, using models trained on very large datasets. Many solutions use both."] },
  { q: "Can AI integrate with existing business software?", a: ["Usually, yes, where the software provides APIs or other supported integration methods. AI can read from and write to CRM, ERP, help desk, document and communication systems within defined permissions. Integration options vary by provider, so we assess them during discovery."] },
  { q: "How much do AI development services cost in the UK?", a: ["Cost depends on the use case, data preparation, number of integrations, whether models are used through APIs, fine-tuned or hosted privately, security requirements and ongoing support. Running costs, such as model usage and hosting, are separate from build costs. We provide a fixed quote for the agreed scope after discovery, rather than publishing fixed prices."] },
  { q: "How long does it take to develop a custom AI solution?", a: ["It depends on scope, data readiness, integrations and how quickly decisions are made. A proof of concept that tests whether AI performs well enough on your data comes first, and is much quicker than a full production rollout. We provide a realistic timeline once we understand the requirements."] },
  { q: "How can businesses protect sensitive data when using AI?", a: ["Send only the data each task needs. Check model providers' retention and training terms, and use private hosting for highly sensitive workloads. Enforce role-based access and permission-aware retrieval, keep logs, carry out a DPIA where personal data is involved, and train staff on what not to paste into public tools."] },
  { q: "Does every business need a custom AI solution?", a: ["No. Many needs are met by ready-made tools or AI features in existing software. Custom AI makes sense when the task depends on your own data, needs to work inside your systems, requires specific controls, or is central to your product or competitive advantage."] },
];

export const FINAL_CTA = {
  title: "Ready to Explore What AI",
  titleAccent: "Can Do for Your Business?",
  body: {
    text: "The most successful AI projects start small and specific. Pick one challenge, such as a process that takes too long, information that is hard to find, or a decision that needs better evidence. Tell us about it, the data involved and the systems it touches. We will help you evaluate the realistic options, from an existing tool to a custom solution, test the most promising one on your data, and plan an implementation that fits your risk, budget and timescales. Not sure where to start? Our [[link]] service begins with a use-case assessment.",
    link: { anchor: "AI consulting and strategy", href: "/services/ai-consulting-strategy" },
  },
  bring: ["One specific challenge", "The data involved", "The systems it touches"],
};

export const SCHEMA_SERVICE = {
  name: "AI Services and AI Development",
  serviceType: ["AI services", "Artificial intelligence software development", "AI integration services"],
  description:
    "Use-case discovery, generative AI, AI agents, AI automation, machine learning, RAG and LLM fine-tuning for UK businesses, designed around their data and integrated with existing systems.",
  catalogName: "AI services",
  catalog: SERVICES.core.map((s) => s.title),
  relatedServicePath: "/services/ai-development",
};
