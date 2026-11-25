/*
 * /services/ai-development content, from "ClickMasters Services SEO Pack"
 * (24 Nov 2026). This was the /services page until /services became the hub
 * for all services. Edit copy here; ./page.jsx only renders it.
 *
 * Items the pack marks "needs human verification before publishing" are
 * flagged with VERIFY comments. Inline links use [anchor](/path) syntax.
 */

import { AI_PACKAGE_PRICES, VAT_NOTE, formatPackagePrice } from "../../config/pricing";
import { FREE_TOOLS, INDUSTRY_PAGES } from "../../lib/internal-links";

export const PATH = "/services/ai-development";

export const SEO = {
  // Rendered as "AI Development Services UK | Custom AI & LLM | ClickMasters" (59 chars).
  title: "AI Development Services UK | Custom AI & LLM",
  description:
    "Custom AI development services for UK businesses: LLM fine-tuning, RAG, machine learning, computer vision and automation, integrated with your systems.",
};

export const SCHEMA_SERVICE = {
  name: "AI Development Services",
  serviceType: ["Artificial intelligence software development"],
  description:
    "Design, development, integration and monitoring of custom AI systems, including LLM fine-tuning, retrieval-augmented generation, machine learning, computer vision and intelligent process automation.",
  catalogName: "AI development services",
};

export type ServiceSection = {
  id: string;
  /** Slug of this capability's own page in app/config/services-catalog.ts. */
  page: string;
  icon: string;
  title: string;
  intro: string;
  problems: string;
  /** "Practical applications" or, for consulting, "Deliverables". */
  listLabel: string;
  list: string[];
  howLabel: string;
  how: string;
  techLabel: string;
  tech: string[];
  /** May contain [anchor](/path) links. */
  note?: string;
  diagram?: "rag";
  extra?: { label: string; text: string }[];
};

export const HERO = {
  eyebrow: "AI Development Services UK",
  h1: "AI Development Services for UK Businesses Ready to Move Beyond the Pilot",
  lead:
    "ClickMasters designs, builds and integrates custom AI systems: fine-tuned language models, retrieval-augmented generation (RAG), machine learning, computer vision and intelligent automation. We connect them to the CRM, ERP and data platforms you already run, and deploy them on cloud infrastructure you control.",
  audience:
    "Built for founders, CTOs, operations leaders and enterprise teams who have a defined business problem and data to work with, and who need an AI system that runs reliably in production rather than a demo.",
  // VERIFY: timelines come from the live site FAQs. "8 sectors" matches the
  // eight industry pages and the INDUSTRIES cards below.
  stats: [
    { value: "6–8 weeks", label: "Typical MVP pilot" },
    { value: "AWS · Azure · GCP", label: "Cloud deployment" },
    { value: "ERP & CRM", label: "Native integrations" },
    { value: "8 sectors", label: "Industries served" },
  ],
};

export const COVER = {
  paragraphs: [
    "Most organisations do not struggle to find an AI idea. They struggle to turn it into a system that staff trust and use every day. The usual blockers are familiar: data spread across disconnected systems, generic chatbots that cannot see internal knowledge, models that test well but drift once real data arrives, and security questions nobody answered before the pilot began.",
    "Our AI development services cover the full lifecycle. We assess whether AI is the right tool for the problem, prepare the data, select or train the model, build the software around it, integrate it with your existing platforms and monitor it after launch. Part of discovery is checking whether an existing product would solve the problem at lower cost, so the custom work goes where it adds value.",
  ],
  outcomes: [
    { icon: "timer", title: "Less manual handling", text: "Documents, data entry and reconciliation handled by models, with exceptions routed to people." },
    { icon: "answers", title: "Faster answers", text: "Staff and customers get grounded answers from your own knowledge, with sources." },
    { icon: "warning", title: "Earlier warning", text: "Forecasts flag risk, churn and demand changes before they reach the P&L." },
    { icon: "control", title: "Models you control", text: "Versioned, monitored and retrainable, running in infrastructure you own." },
  ],
};

export const SERVICES_INTRO =
  "Each service below can be delivered on its own or as part of a larger system. Most production projects combine two or three, for example RAG with an AI agent, or machine learning with process automation.";

const P = "Practical applications";
const H = "How we build it";
const T = "Technologies";

export const SERVICES: ServiceSection[] = [
  {
    id: "custom-ai-development",
    page: "custom-ai-development",
    icon: "custom",
    title: "Custom AI Development",
    intro: "Bespoke AI software built around your process and data: the model, the application logic, the APIs and the interface your team works in, delivered as one product.",
    problems: "Off-the-shelf tools that do not fit your workflow, cannot access proprietary data, or tie you to one vendor's roadmap and pricing.",
    listLabel: P,
    list: [
      "Internal copilots for operations and finance teams",
      "AI features inside an existing SaaS product",
      "Decision-support dashboards with model explanations",
      "AI-enabled customer and partner portals",
    ],
    howLabel: H,
    how: "We define the decision or task the AI supports and the acceptance criteria it must meet, then build the model layer and the software around it together, so integration is designed in from the start rather than added at the end.",
    techLabel: T,
    tech: ["Python", "Django", "Node.js", "React", "Next.js", "PostgreSQL", "Docker"],
  },
  {
    id: "llm-development-fine-tuning",
    page: "llm-development-fine-tuning",
    icon: "llm",
    title: "Large Language Model (LLM) Development and Fine-Tuning",
    intro: "Fine-tuning adapts a pretrained large language model to your terminology, tone, output formats and tasks by training it further on curated examples. Parameter-efficient methods such as LoRA update a small fraction of the model's weights, which keeps training cost far below full retraining.",
    problems: "General-purpose models that misread sector terms, ignore house style, return inconsistent structured output, or cost too much per request at high volume.",
    listLabel: P,
    list: [
      "Classification and extraction from contracts, claims and tickets",
      "Drafting in a consistent, regulated house style",
      "Reliable JSON output for downstream systems",
      "Smaller open-weight models hosted privately for sensitive workloads",
    ],
    howLabel: H,
    how: "We benchmark current models with prompting first. If fine-tuning is justified, we build a labelled training set and a separate held-out evaluation set, train, then compare the tuned model against the baseline on accuracy, latency and cost per request before it is versioned and deployed.",
    techLabel: T,
    tech: ["Hugging Face Transformers", "PyTorch", "Llama & Mistral open-weight models", "Commercial model APIs", "Weights & Biases", "MLflow"],
    note: "Fine-tuning shapes behaviour and format. It is not the best way to keep a model current with facts that change often. That is the job of retrieval-augmented generation, below.",
  },
  {
    id: "rag-development",
    page: "rag-development",
    icon: "rag",
    title: "Retrieval-Augmented Generation (RAG) Development",
    intro: "RAG connects a language model to your own documents at the moment a question is asked. Documents are split into passages, converted into embeddings and stored in a vector index. For each question, the most relevant passages are retrieved and passed to the model, which answers from them and cites its sources.",
    problems: "Staff searching across SharePoint, PDFs, wikis and ticket history; chatbots that invent answers; knowledge that changes too often to retrain a model.",
    listLabel: P,
    list: [
      "Internal assistants for policy, HR and IT questions",
      "Support answers grounded in product documentation",
      "Analysts querying research, reports and filings",
      "Bid teams reusing approved past proposal content",
    ],
    howLabel: H,
    how: "Source audit and permission mapping, ingestion and chunking, embedding and hybrid keyword-plus-vector search, re-ranking, answer generation with citations, then evaluation against a question set for retrieval precision and answer faithfulness. Retrieval respects user permissions, so people only see content they are already allowed to access.",
    techLabel: T,
    tech: ["LangChain", "Embedding models", "PostgreSQL + pgvector", "Elasticsearch", "Cloud model endpoints"],
    diagram: "rag",
  },
  {
    id: "generative-ai-development",
    page: "generative-ai-development",
    icon: "genai",
    title: "Generative AI Development",
    intro: "Generative AI systems produce new content, such as text, images, transcripts and summaries, from instructions and context. The engineering challenge is consistency: getting output that meets your standards every time, not just in a demo.",
    problems: "High-volume writing and documentation that follows predictable patterns, slow first drafts, and manual transcription of calls and meetings.",
    listLabel: P,
    list: [
      "Product descriptions and catalogue content for e-commerce",
      "Report and summary drafting from structured data",
      "Call and meeting transcription with summaries",
      "Image generation and variation for marketing workflows",
      "Learning content and assessment generation",
    ],
    howLabel: H,
    how: "We agree output standards and review rules first, then build prompt templates, retrieval of approved source material and automated checks. Wherever content is published or customer-facing, a human approval step stays in the workflow.",
    techLabel: T,
    tech: ["Commercial LLM APIs", "Open-weight LLMs", "Whisper (speech-to-text)", "Stable Diffusion", "LangChain"],
  },
  {
    // VERIFY: confirm tool-using agent capability before publishing (pack note).
    id: "ai-agent-development",
    page: "ai-agent-development",
    icon: "agent",
    title: "AI Agent and Assistant Development",
    intro: "An AI agent uses a language model to plan steps and call tools, such as APIs, databases, search and internal systems, to complete a task. A chatbot answers a message; an agent can look up a customer, check an order, draft a reply and raise a ticket.",
    problems: "Multi-step tasks that span several systems and currently need a person to copy information between screens.",
    listLabel: P,
    list: [
      "Support assistants that resolve routine requests and hand off exceptions",
      "Operations agents that triage, enrich and route work",
      "Dispatch and routing decision support",
      "Learning copilots for students and staff",
    ],
    howLabel: H,
    how: "We start with a narrow task and a defined set of tools. Every tool has permission limits, high-impact actions require human approval, and every step is logged for audit. Agents are tested against scripted scenarios for task success before their scope is widened.",
    techLabel: T,
    tech: ["LangChain", "Model tool-calling APIs", "Your REST and GraphQL APIs", "Audit logging"],
    note: "Agents are less predictable than fixed workflows. We recommend them where the flexibility is worth that trade-off, and a simple automation where it is not. For customer-facing conversational assistants, see our [AI chatbot development](/services/ai-chatbots).",
  },
  {
    id: "machine-learning-development",
    page: "machine-learning",
    icon: "ml",
    title: "Machine Learning Development",
    intro: "Machine learning models learn patterns from historical, structured data to classify, cluster, recommend or detect anomalies. They suit problems where you have records of past outcomes and want consistent decisions at scale.",
    problems: "Decisions based on rules of thumb, customer segments built by hand, and recommendations that ignore actual behaviour.",
    listLabel: P,
    list: [
      "Customer segmentation and clustering",
      "Recommendation engines for products and content",
      "Anomaly detection in transactions or sensor data",
      "Lead and propensity scoring",
    ],
    howLabel: H,
    how: "Feature engineering from your warehouse or operational data, then a comparison of simple baselines against more complex models. We choose the simplest model that meets the target, and package training and deployment so results are reproducible.",
    techLabel: T,
    tech: ["scikit-learn", "PyTorch", "TensorFlow / Keras", "MLflow", "Kubeflow", "AWS SageMaker"],
  },
  {
    id: "nlp-development",
    page: "nlp-development",
    icon: "nlp",
    title: "Natural Language Processing (NLP)",
    intro: "NLP pipelines let software read and organise large volumes of written language: classifying it, extracting entities, measuring sentiment, redacting personal data and powering semantic search.",
    problems: "Emails, reviews, tickets, case notes and records arriving faster than anyone can read them, so important signals are missed.",
    listLabel: P,
    list: [
      "Routing inbound emails and tickets to the right team",
      "Extracting names, dates, amounts and clauses from documents",
      "Theme and sentiment analysis on reviews and surveys",
      "Redacting personal data before records are shared or analysed",
    ],
    howLabel: H,
    how: "We test task-specific models and LLM-based approaches on a sample of your text, then choose on measured accuracy, cost and latency. High-volume pipelines often use a compact model for the bulk of the work and an LLM for the hard cases.",
    techLabel: T,
    tech: ["Hugging Face", "Named-entity recognition models", "Embedding models", "Elasticsearch"],
  },
  {
    id: "computer-vision-development",
    page: "computer-vision-development",
    icon: "vision",
    title: "Computer Vision Development",
    intro: "Computer vision models interpret images and video: detecting objects, classifying images, reading documents and layouts, and inspecting products for defects.",
    problems: "Manual visual inspection, scanned documents keyed in by hand, and checks that vary between shifts and sites.",
    listLabel: P,
    list: [
      "Quality-control inspection on production lines",
      "Document and layout scanning",
      "Image categorisation for product catalogues",
      "Multispectral crop health monitoring",
      "Decision support for medical imaging review",
    ],
    howLabel: H,
    how: "Image collection and labelling, fine-tuning of pretrained detection or classification models, then testing on images from the real environment, with its lighting, angles and camera quality. Models run in the cloud or at the edge, depending on latency and connectivity.",
    techLabel: T,
    tech: ["PyTorch", "TensorFlow", "Hugging Face vision models", "Docker"],
    note: "Facial recognition uses biometric data, which is special category data under UK GDPR, and clinical imaging tools may be regulated as medical devices by the MHRA. We plan these projects with your data protection and regulatory leads from day one.",
  },
  {
    id: "predictive-analytics",
    page: "predictive-analytics",
    icon: "predict",
    title: "Predictive Analytics",
    intro: "Predictive analytics applies statistical and machine learning models to estimate what is likely to happen next, such as which customers may leave, where demand will rise, or which transactions carry risk, and feeds that estimate into a decision.",
    problems: "Reactive planning, stock-outs and overstock, and churn or risk noticed only after the revenue is lost.",
    listLabel: P,
    list: [
      "Churn prediction and retention targeting",
      "Risk and fraud scoring",
      "Dynamic pricing support",
      "Inventory and seasonal demand forecasts",
      "Energy consumption and peak-load forecasting",
    ],
    howLabel: H,
    how: "We start from the decision the forecast feeds, backtest on past periods, and report ranges and confidence rather than single numbers. Forecasts are delivered into dashboards or directly into your ERP or CRM, with scheduled retraining as patterns shift.",
    techLabel: T,
    tech: ["scikit-learn", "Time-series models", "PostgreSQL", "MLflow", "Grafana"],
  },
  {
    id: "intelligent-process-automation",
    page: "ai-automation",
    icon: "automation",
    title: "Intelligent Process Automation",
    intro: "Intelligent process automation combines rule-based robotic process automation (RPA) with AI for the steps that need judgement, such as reading a document, classifying a request or spotting an exception.",
    problems: "Repetitive back-office work, including document intake, re-keying data between systems and reconciling transactions, that ties up skilled staff.",
    listLabel: P,
    list: [
      "Invoice, claims and form ingestion",
      "Transaction and ledger reconciliation",
      "Onboarding document checks",
      "Records processing for compliance teams",
    ],
    howLabel: H,
    how: "We map the current process and measure volumes and error points, automate the stable steps, use AI for unstructured inputs, and route exceptions to people with the context they need. Throughput and exception rates are visible on a dashboard.",
    techLabel: "Integrations",
    tech: ["Salesforce", "SAP ERP", "ServiceNow", "HubSpot", "Microsoft Dynamics", "Oracle Cloud", "Jira"],
  },
  {
    id: "ai-consulting-strategy",
    page: "ai-consulting-strategy",
    icon: "consulting",
    title: "AI Consulting and Strategy",
    intro: "AI consulting decides where AI fits in your organisation, what it should cost and how to deliver it safely, before significant build budget is committed.",
    problems: "Scattered pilots with no route to production, unclear return on investment, and pressure from the board to \"do something with AI\" without a plan.",
    listLabel: "Deliverables",
    list: [
      "Use-case inventory scored on value and feasibility",
      "Data readiness assessment",
      "Architecture discovery and build-or-buy recommendation",
      "ROI mapping and phased roadmap",
      "Audit of existing ML pipelines",
    ],
    howLabel: "Format",
    how: "Workshops with business and technical stakeholders, followed by a written assessment and roadmap your team can act on with or without us.",
    techLabel: "",
    tech: [],
    extra: [
      { label: "Who it suits", text: "Organisations at the start of their AI programme, and teams with a stalled pilot that need an independent technical view." },
      { label: "Before you book", text: `Get a first estimate of value and readiness with our [AI ROI calculator and readiness quiz](${FREE_TOOLS}).` },
    ],
  },
];

export const COMPARISON = {
  intro:
    "The most common question in discovery is which technique a problem needs. This is how we compare them. Many production systems combine more than one.",
  headers: ["Approach", "Best when", "What you need", "Handles changing information", "Main trade-off"],
  rows: [
    ["Prompting a hosted model", "The task is general and volumes are modest", "Clear instructions and a few examples", "Yes, through the prompt", "Least control over behaviour; cost grows with volume"],
    ["Retrieval-augmented generation", "Answers must come from your own documents", "An organised document collection with access rules", "Yes, by re-indexing", "Answer quality depends on retrieval quality"],
    ["LLM fine-tuning", "You need consistent format, tone or domain behaviour", "Curated, labelled examples and an evaluation set", "No, it needs retraining", "Upfront data work and a retraining process"],
    ["Custom machine learning", "You are predicting or classifying from structured data", "Historical records with known outcomes", "Through scheduled retraining", "Needs data engineering and monitoring for drift"],
  ],
};

// VERIFY: confirm the company has worked in each listed sector (pack note).
// Cards match the eight /industries/* pages in app/config/navigation.ts, so
// every card links to a page that exists.
// TODO: Energy & Utilities and Public Sector were listed here before but have
// no industry page. Their use cases now live on /services/predictive-analytics
// (consumption-spike and outage-risk forecasting) and /services/nlp-development
// (records redaction and searchable case archives). Add /industries/energy and
// /industries/public-sector pages later if those sectors become a focus.
export const INDUSTRIES = [
  { icon: "health", title: "Healthcare & MedTech", href: INDUSTRY_PAGES.healthcare, text: "Clinical note summarisation, secure triage portals and imaging decision support.", considerations: ["UK GDPR health data", "NHS DTAC", "MHRA"] },
  { icon: "finance", title: "Finance & Fintech", href: INDUSTRY_PAGES.finance, text: "Ledger validation, risk models, fraud detection and automated audit preparation.", considerations: ["FCA Consumer Duty", "Model explainability"] },
  { icon: "retail", title: "E-Commerce", href: INDUSTRY_PAGES.ecommerce, text: "Recommendation engines, seasonal demand forecasts and catalogue content generation.", considerations: ["Consumer data consent", "Pricing transparency"] },
  { icon: "edtech", title: "EdTech & E-Learning", href: INDUSTRY_PAGES.edtech, text: "Learning copilots, assessment generation and syllabus building tools.", considerations: ["Children's data", "DfE generative AI guidance"] },
  { icon: "realestate", title: "Real Estate", href: INDUSTRY_PAGES.realEstate, text: "Lease and tenancy document extraction, listing description drafting and enquiry triage.", considerations: ["Tenant and buyer personal data", "Accurate listing information"] },
  { icon: "logistics", title: "Supply Chain & Logistics", href: INDUSTRY_PAGES.logistics, text: "Real-time fleet routing, dispatch decision support and load planning.", considerations: ["Real-time data latency", "Driver data"] },
  { icon: "saas", title: "Enterprise SaaS", href: INDUSTRY_PAGES.enterpriseSaas, text: "AI features inside multi-tenant products: in-app copilots, semantic search and usage insights.", considerations: ["Tenant data isolation", "Model cost per tenant"] },
  { icon: "manufacturing", title: "Smart Manufacturing", href: INDUSTRY_PAGES.manufacturing, text: "Predictive maintenance from equipment data, visual quality inspection and inventory updates.", considerations: ["Edge deployment", "OT network security"] },
];

export const PROCESS_INTRO =
  "Eight stages take a project from first conversation to a monitored production system. Smaller projects move through them faster; ClickMasters typically launches functional MVP pilots within 6–8 weeks, while full enterprise solutions take around 3–6 months.";

export const PROCESS = [
  { title: "Business Discovery", text: "Define the problem, the people affected, the decision the AI supports and how success will be measured.", deliverable: "Problem statement, success metrics, stakeholder map" },
  { title: "Technical Assessment", text: "Review data sources, quality, access, existing systems and security constraints.", deliverable: "Data readiness and integration report" },
  { title: "Strategy & Architecture", text: "Choose the approach (prompting, RAG, fine-tuning or ML), hosting and integration pattern.", deliverable: "Solution architecture, estimate and delivery plan" },
  { title: "Data Preparation", text: "Clean, label and structure data; build the evaluation set the model will be judged against.", deliverable: "Versioned datasets and evaluation benchmark" },
  { title: "Model Development", text: "Build and iterate on models and prompts, comparing each version against the baseline.", deliverable: "Working model with documented evaluation results" },
  { title: "Integration & Testing", text: "Connect to your systems, then test functionally, for security, for load and with real users.", deliverable: "Test reports and user acceptance sign-off" },
  { title: "Deployment", text: "Release to your cloud environment with infrastructure as code, rollback plans and access controls.", deliverable: "Production release and runbook" },
  { title: "Monitoring & Optimisation", text: "Track accuracy, drift, latency and cost; retrain and tune as data and models change.", deliverable: "Monitoring dashboards and optimisation reviews" },
];

// VERIFY: confirm every listed technology and model family is in active use.
export const STACK_INTRO =
  "Model releases move quickly, so we benchmark current model versions at the start of each project rather than committing in advance to a single provider.";

export const STACK = [
  { title: "Frameworks & libraries", items: ["Python", "PyTorch", "TensorFlow", "Keras", "scikit-learn", "Hugging Face", "LangChain"] },
  { title: "Language & foundation models", items: ["OpenAI GPT models", "Anthropic Claude", "Meta Llama", "Mistral", "Whisper", "Stable Diffusion"] },
  { title: "Data & retrieval", items: ["PostgreSQL", "pgvector", "Elasticsearch", "MongoDB", "Redis"] },
  { title: "MLOps", items: ["MLflow", "Kubeflow", "Weights & Biases", "AWS SageMaker", "GitHub Actions"] },
  { title: "Cloud & infrastructure", items: ["AWS", "Microsoft Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform"] },
  { title: "Monitoring & applications", items: ["Prometheus", "Grafana", "React", "Next.js", "Node.js", "Django"] },
];

export const SECURITY_INTRO =
  "AI systems touch sensitive data and make decisions people rely on. Security and governance are designed into the architecture from the first stage, not reviewed at the end.";

// VERIFY: confirm each practice is standard, incl. DPIA support and provider reviews.
export const SECURITY = [
  { icon: "lock", title: "Data protection", text: "Data is encrypted in transit and at rest, and we collect only what the use case needs. We work with your data protection officer and can supply the technical detail needed for a Data Protection Impact Assessment under UK GDPR." },
  { icon: "access", title: "Access control", text: "Role-based access, least-privilege service accounts and permission-aware retrieval, so an AI assistant never shows a user content they could not open themselves." },
  { icon: "plug", title: "Secure integrations", text: "API credentials are held in a secrets manager, connections are scoped to the data each integration needs, and our engineering follows OWASP guidance, including the OWASP Top 10 for LLM Applications." },
  { icon: "server", title: "Model provider data handling", text: "We review each model provider's retention and training terms. Where data must not leave your environment, we host open-weight models inside your own cloud account." },
  { icon: "pulse", title: "Model monitoring", text: "Production models are tracked for accuracy, drift, latency, cost and unusual outputs, with alerts and a defined process for rollback or retraining." },
  { icon: "cloud", title: "Infrastructure security", text: "Deployments run in isolated containers within a dedicated private cloud network (VPC) on AWS or Azure, defined as code so every environment is reviewable and repeatable." },
  { icon: "scales", title: "Responsible AI", text: "We test for bias on relevant groups, document model limitations, keep humans in the loop for consequential decisions and follow the ICO's guidance on AI and data protection." },
  { icon: "shield", title: "Prompt injection defences", text: "RAG systems and agents treat retrieved content and user input as untrusted, with input filtering, tool permission limits and output checks." },
];

// Prices are set in app/config/pricing.ts (GBP, excl. VAT).
// TODO: Confirm final GBP amounts with business owner, and whether they are "from" prices.
export const PACKAGES = {
  intro: "Every project is quoted after discovery. These packages show what each level of engagement typically includes.",
  vatNote: `All prices are in GBP and ${VAT_NOTE}.`,
  // One CTA for the whole section (one link per target per section).
  cta: "Discuss which package fits your project",
  tiers: [
    { name: "Starter MVP", price: formatPackagePrice(AI_PACKAGE_PRICES.starterMvp), priceNote: VAT_NOTE, subtitle: "For rapid prototype validation", features: ["One custom model (fine-tuned where justified)", "Core API integrations", "Standard cloud deployment support", "Two weeks of post-launch QA monitoring"], highlighted: false },
    { name: "Professional", price: formatPackagePrice(AI_PACKAGE_PRICES.professional), priceNote: VAT_NOTE, subtitle: "For scaling operational workloads", features: ["Multiple custom model architectures", "Full ERP and CRM integration", "Dedicated private VPC deployment", "Dedicated support specialist"], highlighted: true },
    { name: "Enterprise Core", price: formatPackagePrice(AI_PACKAGE_PRICES.enterpriseCore), priceNote: "Quoted after discovery", subtitle: "For global operations", features: ["Isolated sandbox environments aligned to your compliance requirements", "High-availability, redundant deployments", "24/7 priority SLA and on-call monitoring"], highlighted: false },
  ],
};

export const WHY = [
  { icon: "stack", title: "AI and software under one roof", text: "Our team also builds web, mobile, cloud and ERP/CRM systems, so the AI arrives inside a working product rather than as a separate prototype someone else has to integrate." },
  { icon: "shuffle", title: "Model-agnostic engineering", text: "We work with commercial and open-weight models and choose on measured accuracy, cost and data requirements, which keeps you free to switch as the market moves." },
  { icon: "plug", title: "Integration first", text: "We connect to the platforms enterprises already run, including Salesforce, SAP, ServiceNow, HubSpot, Microsoft Dynamics and Oracle Cloud." },
  { icon: "server", title: "Private deployment options", text: "Models can run in a dedicated private cloud network on AWS or Azure, for organisations that cannot send data to shared services." },
  { icon: "price", title: "Published starting prices", text: "Our engagement packages are on this page, so budget conversations start from a clear reference point." },
  { icon: "heart", title: "Ethical AI as a working principle", text: "Privacy, human oversight and transparency are part of our core values and are built into how we scope and test every system." },
];

/**
 * FAQs: rendered on the page and used for FAQPage JSON-LD (identical text;
 * [anchor](/path) links are rendered as links and stripped in the JSON-LD).
 */
export const SERVICE_FAQS: { q: string; a: string[] }[] = [
  {
    q: "How much do AI development services cost in the UK?",
    a: [
      "Cost depends mainly on the amount of data preparation needed, the number of systems the AI must integrate with, whether models are fine-tuned or used through an API, hosting requirements (shared cloud or a private VPC) and the level of ongoing support. A focused proof of concept costs far less than a multi-system enterprise deployment.",
      `Our published packages start with the Starter MVP and scale to Professional and custom Enterprise engagements. After discovery we provide a fixed quote for the agreed scope, and running costs such as cloud hosting and model API usage are estimated separately so you can see the total cost of ownership. For a first estimate before you talk to us, try our [AI ROI calculator](${FREE_TOOLS}).`,
    ],
  },
  {
    q: "How long does it take to build a custom AI solution?",
    a: ["Most functional MVP pilots launch within 6–8 weeks. Full enterprise solutions with several integrations, security reviews and staged roll-out typically take 3–6 months. The biggest variables are data readiness, access to internal systems and how quickly stakeholders can review and approve each stage. To get a timeline for your own project, [book an AI discovery call](/contact)."],
  },
  {
    q: "Should we fine-tune an LLM or use retrieval-augmented generation?",
    a: ["Use RAG when the model needs to answer from your documents and that information changes, because updating the index is quicker and cheaper than retraining. Use fine-tuning when you need consistent behaviour, such as a fixed output structure, a house style or specialist terminology. Many systems use both: a fine-tuned model for format and reliability, and RAG for current facts."],
  },
  {
    q: "Can AI integrate with our existing CRM, ERP and internal systems?",
    a: ["Yes. Integration is part of every project rather than an add-on. We connect AI systems to platforms such as Salesforce, SAP ERP, ServiceNow, HubSpot, Microsoft Dynamics, Oracle Cloud and Jira through their APIs, and to internal databases and legacy systems through secure middleware where no modern API exists."],
  },
  {
    q: "How do you keep our data secure during AI development?",
    a: ["Data is encrypted in transit and at rest, access is role-based and logged, and we use only the data the use case needs. For sensitive workloads, systems can be deployed inside a dedicated private cloud network, and open-weight models can be hosted in your own environment so data is not sent to a third-party model provider. We can also provide the technical information your team needs for a UK GDPR Data Protection Impact Assessment."],
  },
  {
    q: "How much data do we need to start an AI project?",
    a: ["Less than many teams expect. Pretrained language and vision models already understand language and images, so RAG projects need your documents rather than a training dataset, and fine-tuning can work from a curated set of examples. Predictive models need historical records with known outcomes. Data quality and consistency matter more than raw volume, and the technical assessment stage tells you whether your data is ready."],
  },
  {
    q: "Can we start with a proof of concept before committing to a full build?",
    a: ["Yes, and for new use cases we recommend it. A proof of concept tests the riskiest assumption, usually whether the model can reach the accuracy the business needs on your real data, before integration and production work begin. If the results are strong, the proof of concept becomes the foundation of the MVP."],
  },
  {
    q: "How do you reduce AI hallucinations and make outputs reliable?",
    a: ["No language model is error-free, so we design for verification. RAG grounds answers in retrieved sources and shows citations. Each system is tested against an evaluation set of real questions with known answers, guardrails check outputs before they reach users, and confidence thresholds route uncertain cases to a person. Accuracy is then tracked in production, not just at launch."],
  },
  {
    q: "Which AI models and platforms do you work with?",
    a: ["We are model-agnostic. Depending on accuracy, cost, latency and data requirements, we use commercial models such as OpenAI's GPT family and Anthropic's Claude, or open-weight models such as Meta Llama and Mistral that can be hosted privately. Machine learning work uses PyTorch, TensorFlow and scikit-learn, deployed on AWS, Azure or Google Cloud."],
  },
  {
    q: "What is the difference between AI automation and traditional RPA?",
    a: ["Traditional RPA follows fixed rules on structured inputs, so it breaks when a document layout changes or a request is worded differently. AI-driven automation adds models that read unstructured documents, classify requests and make judgement calls, while rules still handle the predictable steps. The result covers more of the process and sends only genuine exceptions to people."],
  },
  {
    q: "What ongoing maintenance does an AI system need after launch?",
    a: ["AI systems need more care than conventional software because their inputs change. Maintenance covers monitoring accuracy and drift, retraining or re-indexing as data changes, evaluating new model versions as providers release and retire them, managing cloud and API costs, and security updates. Our Starter MVP includes two weeks of post-launch QA monitoring, and higher tiers include dedicated support and SLA-backed monitoring."],
  },
];

export const FINAL_CTA = {
  title: "Tell Us the Problem. We Will Map the AI System That Solves It.",
  text: "Share the process you want to improve, the data you have and the systems involved. We will tell you which approach fits, what it is likely to involve and how to test it quickly, before you commit to a full build.",
};
