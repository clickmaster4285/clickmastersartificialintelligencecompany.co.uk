import type { AiServicePageContent } from "../../lib/ai-service-page";

/*
 * /services/custom-ai-development. Expanded from the "Custom AI Development"
 * section of /services/ai-development. Rich strings use [anchor](/path).
 */
export const CONTENT = {
  slug: "custom-ai-development",
  name: "Custom AI Development",
  seo: {
    title: "Custom AI Development UK | Bespoke AI",
    description:
      "Bespoke AI software for UK businesses: the model, application logic, APIs and interface built around your process and data. Book a free consultation.",
  },
  schema: {
    serviceType: ["Custom artificial intelligence software development"],
    description:
      "Design and development of bespoke AI software, delivering the model layer, application logic, APIs and user interface as one product integrated with existing business systems.",
  },
  hero: {
    eyebrow: "Custom AI Development UK",
    title: "Custom AI Development Services in the UK",
    titleAccent: "Built Around Your Process and Data",
    lead:
      "ClickMasters builds bespoke AI software where off-the-shelf tools fall short. We deliver the model, the application logic, the APIs and the interface your team works in as one product, designed to fit the way your business already operates and the systems it already runs.",
    audience:
      "For operations, finance and product leaders who have a specific decision or task to improve, data to work with, and no packaged tool that fits.",
    stats: [
      { value: "6–8 weeks", label: "Typical MVP pilot" },
      { value: "One product", label: "Model, app and APIs" },
      { value: "AWS · Azure · GCP", label: "Cloud deployment" },
      { value: "Model-agnostic", label: "No vendor lock-in" },
    ],
    figureLabel: "How a custom AI product comes together",
    flow: [
      { title: "Define the decision", text: "The task the AI supports and the acceptance criteria it must meet." },
      { title: "Build the model layer", text: "Prompting, retrieval, fine-tuning or classic ML, chosen on evidence." },
      { title: "Wrap it in software", text: "Interface, business rules, permissions and audit trail." },
      { title: "Integrate and monitor", text: "Connected to your systems and tracked after launch." },
    ],
    figcaption: "Integration is designed in from the start, not added at the end.",
  },
  overview: {
    heading: "What Is Custom AI Development?",
    paragraphs: [
      "Custom AI development means building AI software around one organisation's process and data rather than adapting a generic product. The result is usually a working application, such as an internal copilot, an AI feature inside an existing SaaS product, or a decision-support dashboard, rather than a standalone model that someone else must integrate.",
      "The model is only one part. Most of the engineering effort goes into the software around it: the screens people use, the business rules that decide what happens with a model's output, access control, logging, and connections to the CRM, ERP and data platforms you already run. Treating these as one product is what moves a pilot into daily use.",
      "Custom AI is one of the capabilities covered by our [AI development services](/services/ai-development). When the bulk of the work is application engineering rather than AI, our [custom software development services](/services/custom-software-development) team leads the build and we add the AI components where they earn their place.",
    ],
  },
  problems: {
    heading: "Problems Custom AI Solves",
    intro: "Teams usually come to us after a packaged tool has hit its limits, or when a pilot works in a demo but cannot reach the data or workflows it needs.",
    items: [
      { title: "Tools that do not fit the workflow", text: "Generic AI products force staff to copy information between screens because they cannot see your records or follow your rules." },
      { title: "No access to proprietary data", text: "The knowledge that makes your business different sits in internal systems a third-party tool cannot reach safely." },
      { title: "Vendor roadmap and pricing risk", text: "Building on one provider's product ties your costs and features to their decisions; a custom layer keeps you free to switch models." },
      { title: "Pilots that never reach production", text: "Prototypes built without integration, security or monitoring stall when the time comes to roll them out." },
    ],
  },
  applications: {
    heading: "Practical Applications",
    intro: "Illustrative examples of what custom AI software can look like. Each one is scoped to a defined task and measured against agreed acceptance criteria.",
    items: [
      { title: "Internal copilots", text: "Assistants for operations and finance teams that draft, check and summarise using your own records and policies." },
      { title: "AI features in a SaaS product", text: "Search, summarisation, classification or recommendations added to an existing product, with per-customer data isolation." },
      { title: "Decision-support dashboards", text: "Model outputs shown alongside the reasons behind them, so managers can see why a case was flagged." },
      { title: "Customer and partner portals", text: "Self-service portals where AI answers questions, pre-fills forms or triages requests before a person picks them up." },
      { title: "Document-heavy back-office tools", text: "Applications that read incoming documents, extract the fields that matter and route exceptions to the right person." },
      { title: "Quality and compliance checks", text: "Automated first-pass reviews of records against your rules, with every decision logged for audit." },
    ],
  },
  process: {
    heading: "How We Build Custom AI Software",
    intro: "We define the decision or task first, then build the model layer and the software around it together, so the result can be tested end to end from the first sprint.",
    steps: [
      { title: "Discovery and acceptance criteria", text: "Agree the task, the users, the systems involved and what good output looks like, including a check on whether an existing product would do the job.", output: "Problem statement, success metrics and scope" },
      { title: "Data and integration review", text: "Map the data sources, access rules and APIs the application needs, and the security constraints around them.", output: "Data readiness and integration plan" },
      { title: "Model approach", text: "Benchmark prompting, retrieval, fine-tuning or classic machine learning against a test set drawn from your real data.", output: "Evaluated model choice with cost per request" },
      { title: "Application build", text: "Interface, business rules, permissions and audit logging built in two-week sprints with working demos.", output: "Working application in a test environment" },
      { title: "Testing and roll-out", text: "Functional, security and user acceptance testing, then a staged release to your cloud environment.", output: "Production release and runbook" },
      { title: "Monitoring and iteration", text: "Accuracy, latency, cost and usage tracked after launch, with retraining or prompt changes as needs evolve.", output: "Monitoring dashboard and review cycle" },
    ],
  },
  tech: {
    heading: "Technologies We Use for Custom AI",
    intro: "We choose components on measured accuracy, cost and data requirements for each project rather than committing to one provider in advance.",
    groups: [
      { title: "AI & data", items: ["Python", "PyTorch", "Hugging Face", "LangChain", "scikit-learn"] },
      { title: "Applications", items: ["React", "Next.js", "Node.js", "Django"] },
      { title: "Data & infrastructure", items: ["PostgreSQL", "Docker", "AWS", "Microsoft Azure"] },
    ],
  },
  compliance: {
    heading: "UK Compliance Considerations",
    paragraphs: [
      "Custom AI often processes personal data, so we design with UK GDPR in mind from the start: data minimisation, role-based access and the technical detail your team needs for a Data Protection Impact Assessment.",
      "Where an AI output contributes to decisions with legal or similarly significant effects on people, UK GDPR sets specific safeguards, so we keep a person in the loop and log the reasons behind each recommendation. We also follow the ICO's guidance on AI and data protection.",
    ],
  },
  industries: {
    heading: "Where Custom AI Helps Most",
    intro: "Custom builds pay off where data and workflows are specific to the business. Two sectors where that is common:",
    items: [
      { href: "/industries/enterprise-saas", title: "Enterprise SaaS", text: "AI features inside multi-tenant products, with tenant data isolation and model costs tracked per customer." },
      { href: "/industries/finance", title: "Finance & Fintech", text: "Decision-support tools for reconciliation, risk review and audit preparation, with explainable outputs." },
    ],
  },
  related: {
    heading: "Related AI Services",
    intro: "Custom AI products usually combine several capabilities. These are the ones most often paired with it.",
    items: [
      { href: "/services/ai-development", title: "AI Development Services", text: "The full AI lifecycle, from discovery to monitored production systems." },
      { href: "/services/llm-development-fine-tuning", title: "LLM Development & Fine-Tuning", text: "Adapt a language model to your terminology, tone and output formats." },
      { href: "/services/rag-development", title: "RAG Development", text: "Ground answers in your own documents, with citations and permissions." },
      { href: "/services/web-application-development", title: "Web Application Development", text: "The secure, scalable web application layer around your AI features." },
      { href: "/hire/ai-developers", title: "Hire AI Developers", text: "Add ML, LLM and automation engineers to your own team." },
    ],
  },
  faqs: [
    {
      q: "When is custom AI development better than an off-the-shelf tool?",
      a: ["When the task depends on your own data or rules, needs to sit inside existing workflows, or must run in infrastructure you control. If a packaged product covers the need at lower cost, we will say so during discovery."],
    },
    {
      q: "How long does a custom AI project take?",
      a: ["Most functional MVP pilots launch within 6–8 weeks. Full enterprise solutions with several integrations and a staged roll-out typically take 3–6 months, depending mainly on data readiness and access to internal systems."],
    },
    {
      q: "How much does custom AI development cost in the UK?",
      a: ["Cost depends on data preparation, the number of integrations, hosting requirements and the level of ongoing support. Our [AI development engagement packages](/services/ai-development#packages) give a starting reference, and we provide a fixed quote after discovery."],
    },
    {
      q: "Will we own the code and the models?",
      a: ["Ownership terms are agreed in the contract before work starts. Systems are deployed into cloud accounts you control, and we document models, prompts and data pipelines so your team can maintain them."],
    },
  ],
  cta: {
    title: "Tell Us the Task.",
    titleAccent: "We Will Design the AI Product Around It.",
    body: {
      text: "Share the process you want to improve, the data you have and the systems involved. If you would rather grow your own team, you can also [[link]].",
      link: { anchor: "hire AI developers", href: "/hire/ai-developers" },
    },
    bring: ["The task or decision to improve", "Where the data lives today", "The systems it must connect to"],
  },
  og: {
    title: "Custom AI Development",
    accent: "Bespoke AI software for UK teams",
    rows: [
      [["Interface · Business rules", "purple"]],
      [["Model", "plain"], ["APIs", "plain"], ["Audit", "plain"]],
      [["Your data", "teal"], ["Your cloud", "teal"]],
      [["CRM · ERP · Data platforms", "sun"]],
    ],
  },
} satisfies AiServicePageContent;
