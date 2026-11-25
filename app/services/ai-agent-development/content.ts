/*
 * /services/ai-agent-development content, from
 * "ClickMasters AI Agent Development Services: SEO Content Pack" (25 Nov 2026).
 * Edit copy here; ./page.jsx only renders it. (This page no longer uses the
 * shared AiServicePage template: the pack needs extra section types and
 * exactly four body links, so the template's related/industry cards are gone.)
 *
 * Rich strings use [anchor](/path) links (rendered by RichText). Body links:
 * exactly the pack's four. CTAs, breadcrumb, header and footer are template
 * elements and are not counted.
 *
 * VERIFY (pack, owner action 1): confirm tool-using agent capability and any
 * delivered agent work before publishing.
 */

export const PATH = "/services/ai-agent-development";

export const SEO = {
  // Rendered as "AI Agent Development Services UK | ClickMasters" (47 chars). The pack's
  // longer "| Custom AI Agents" variant would exceed 60 characters with the site suffix.
  title: "AI Agent Development Services UK",
  // The pack's wording, shortened to stay within 155 characters.
  description:
    "AI agent development for UK businesses: custom agents that plan tasks and use your systems, with scoped permissions, human approval and audit logs.",
  ogTitle: "AI Agent Development | ClickMasters",
  ogDescription:
    "Custom AI agents that plan tasks and use your systems safely: scoped tools, human approval for high-impact actions and a full audit trail.",
};

const IMG = "/assets/Services/ai-agents";

/**
 * Diagrams drawn for this page (alt text from the pack's image suggestions)
 * and photos from Unsplash (Unsplash License: free for commercial use, no
 * attribution required; credits kept here for reference).
 */
export const IMAGES = {
  flow: {
    src: `${IMG}/ai-agent-task-flow.png`, width: 1080, height: 800,
    alt: "How an AI agent completes a task: a request arrives, the agent plans steps, calls permitted tools such as CRM, order and ticketing APIs, checks results, asks a person to approve a high-impact action and logs every step",
  },
  architecture: {
    src: `${IMG}/ai-agent-architecture.png`, width: 1720, height: 620,
    alt: "AI agent architecture: trigger, context, planning, tool calling through a permissions layer to business systems, validation and approval gates, and logging feeding monitoring and evaluation",
  },
  autonomy: {
    src: `${IMG}/ai-agent-autonomy-levels.png`, width: 1720, height: 520,
    alt: "Three levels of agent autonomy matched to risk: suggest, act with approval and act within limits, with examples for each",
  },
  compare: {
    src: `${IMG}/agents-rag-finetuning-automation.png`, width: 1720, height: 460,
    alt: "Comparison of AI agents, retrieval-augmented generation, LLM fine-tuning and traditional automation by what each does and what it suits",
  },
  guardrails: {
    src: `${IMG}/ai-agent-guardrails.png`, width: 1720, height: 640,
    alt: "Agent guardrails: least-privilege tools, untrusted input handling, output validation, human approval, error handling and audit logging around the language model",
  },
  evaluation: {
    src: `${IMG}/ai-agent-evaluation.png`, width: 1720, height: 470,
    alt: "Agent evaluation: scripted scenarios scored for task success, tool-call accuracy, safe behaviour, escalation and cost before each release, widening scope only when results justify it",
  },
  // Photo: Beatriz Cattel (unsplash.com/photos/LycaA7rWsHc)
  team: {
    src: `${IMG}/ai-agent-team-at-laptops.webp`, width: 1200, height: 800,
    alt: "Overhead view of colleagues working at laptops and keyboards around a shared office desk",
  },
  // Photo: Charanjeet Dhiman (unsplash.com/photos/mHusyBu4bxM)
  support: {
    src: `${IMG}/ai-agent-support-team-headsets.webp`, width: 1200, height: 800,
    alt: "Customer support staff wearing headsets with microphones at their workstations",
  },
  // Photo: Petr Macháček (unsplash.com/photos/BeVGrXEktIk)
  headset: {
    src: `${IMG}/ai-agent-headset-and-laptop.webp`, width: 1200, height: 800,
    alt: "A headset with a boom microphone resting on a desk beside an open laptop",
  },
} as const;

export const HERO = {
  eyebrow: "AI Agent Development UK",
  title: "AI Agent Development Services UK:",
  titleAccent: "Custom AI Agents That Complete Real Tasks Across Your Systems, Within Limits You Control",
  lead:
    "In most organisations, a surprising amount of skilled time goes on being the glue between systems: reading a request, looking something up in one screen, checking it in another, drafting a reply, updating a record and raising a ticket. The work is routine, but it varies too much for a fixed automation to handle reliably.",
  audience:
    "ClickMasters designs and builds AI agents for exactly this kind of work. An agent uses a language model to interpret a request, plan the steps, and call the tools you allow it to use, such as your APIs, databases and knowledge sources. We build agents that start with a narrow, well-defined task, act only within scoped permissions, ask a person before anything consequential happens, and record every step they take.",
  stats: [
    { value: "Scoped tools", label: "Least-privilege permissions on every action" },
    { value: "Human approval", label: "For high-impact or irreversible steps" },
    { value: "Every step logged", label: "Full audit trail of decisions and tool calls" },
    { value: "Scenario-tested", label: "Before an agent's scope is widened" },
  ],
};

export const WHAT_IS = {
  p1: "An **AI agent** is software that combines a language model with a defined set of tools and a goal. Instead of following a fixed script, it decides what to do next: which tool to call, how to interpret the result, and whether the task is finished, needs another step or needs a person.",
  p2: "Tools are ordinary software. They might be a function that looks up a customer, an API that checks an order, a search over approved documents, or a call that creates a ticket. The agent never has more access than the tools you give it.",
  sub: [
    { title: "AI agents vs chatbots", text: "A chatbot answers messages. An agent can also act: it can look up a record, check a status, draft a response and carry out an approved change, as part of one request. Many modern assistants are a mix of the two, conversational on the surface with tool-using capabilities behind it." },
    { title: "AI agents vs traditional workflow automation", text: "Traditional automation follows a predefined path: when this happens, do that. It is predictable, cheap to run and easy to audit, and it is the right choice for stable processes. An agent chooses its path at run time, which lets it handle varied, loosely worded requests, but makes it less predictable. Good systems often combine both: fixed automation for the stable steps, an agent for the steps that need judgement." },
    { title: "When an agent is the wrong answer", text: "If a process is stable and every case follows the same rules, a conventional automation or integration is usually cheaper, faster and safer. If the task needs no actions, only answers from documents, a retrieval-based assistant may be enough. We recommend an agent only where the variability of the work justifies it." },
  ],
};

export const HOW = {
  intro: "A production agent is a loop with guardrails around it. Not every agent needs every component below; a simple agent may use only a few.",
  steps: [
    ["Trigger:", "a user request, an incoming email or ticket, or a scheduled or system event starts the task."],
    ["Context gathering:", "the agent receives the request plus relevant context, such as who is asking, their permissions and the record concerned."],
    ["Planning:", "the language model works out what needs to happen and in what order."],
    ["Tool selection and function calling:", "the model chooses a tool and supplies structured arguments; your code, not the model, actually executes the call."],
    ["System interaction:", "the tool queries or updates an API, database or service, within its permission limits."],
    ["State and memory:", "the agent keeps track of the steps taken and results so far, and, where appropriate, relevant history from earlier interactions."],
    ["Validation and safety checks:", "results and proposed actions are checked against rules, schemas and limits before anything irreversible happens."],
    ["Approval or execution:", "low-risk steps run automatically; high-impact steps wait for a person to approve."],
    ["Response and logging:", "the agent reports the outcome and every step, tool call and decision is recorded for monitoring and evaluation."],
  ],
  principle: "A key design principle: **the model proposes, the system disposes.** The model decides which tool it wants to use, but permissions, validation and approval are enforced by ordinary, testable code around it.",
};

export const AUTONOMY = {
  intro: "The most important decision in agent design is how much the agent may do on its own. We set it per action, not per agent.",
  headers: ["Level", "What the agent does", "Typical examples"],
  rows: [
    ["Suggest", "Prepares a recommendation or draft; a person decides and acts", "Suggested replies, proposed dispatch assignments, draft refunds"],
    ["Act with approval", "Carries out the action only after a person confirms it", "Issuing a refund, changing an order, sending an external email"],
    ["Act within limits", "Acts automatically inside tight, pre-agreed limits", "Looking up records, updating a status, routing a ticket, resetting a password through an approved process"],
  ],
  outro: "Most agents begin at \"suggest\" or \"act with approval\" for anything consequential, and earn more autonomy only when logs and test results show they are reliable.",
};

// VERIFY: multi-agent experience (copy hedges: "assessed per project").
export const SERVICES = [
  { icon: "custom", title: "Custom AI agent development", text: "Agents designed around one of your specific workflows, with tools built on your own systems and success measured on your own scenarios." },
  { icon: "support", title: "Support resolution agents", text: "Agents that resolve routine customer or internal requests end to end, such as order lookups, status checks and account changes, and hand exceptions to a person with the full context gathered." },
  { icon: "route", title: "Triage and routing agents", text: "Agents that read incoming work, classify it, enrich it with information from your systems, and route it to the right queue or person." },
  { icon: "compass", title: "Decision-support copilots", text: "Agents that prepare recommendations for a person to confirm, for example suggested dispatch assignments from live job and fleet data, or proposed next steps on a case." },
  { icon: "desk", title: "Internal service desk agents", text: "Agents that handle common IT and operations requests through approved tools, such as access requests and password resets." },
  { icon: "book", title: "Knowledge-enabled agents", text: "Agents that search approved documents before they answer or act, so their steps are based on your current policies and procedures." },
  { icon: "plug", title: "Agent integration with existing systems", text: "Connecting agents to your CRM, order, ticketing and back-office systems through their APIs, or through secure middleware where no suitable API exists." },
  { icon: "test", title: "Agent testing, evaluation and monitoring", text: "Scenario test suites, adversarial testing, production logging and review, for agents we build and for agents you already run." },
  { icon: "nodes", title: "Multi-agent systems", text: "For some complex workflows, several specialised agents coordinated by an orchestrator can be easier to test and control than one agent with many tools. They also add complexity, cost and new failure modes, so we assess them per project and recommend them only where a single agent with well-designed tools cannot do the job." },
];

export const COMPARE = {
  headers: ["", "What it does", "Best for"],
  rows: [
    ["AI agent", "Reasons through a task and uses tools within defined permissions", "Varied, multi-step tasks that span several systems"],
    ["Retrieval-augmented generation (RAG)", "Retrieves relevant information and grounds the model's answer in it", "Accurate answers from your own documents"],
    ["LLM fine-tuning", "Adapts a model's behaviour through additional training", "Consistent format, tone or terminology on a narrow task"],
    ["Traditional automation", "Executes a predefined workflow without reasoning", "Stable, rule-based processes"],
  ],
  // Body links 1 and 2 of 4.
  outro:
    "These approaches combine well. An agent frequently uses retrieval as one of its tools; a [RAG knowledge base](/services/rag-development) lets it check current policy before it acts. Where an agent must produce output in a strict structure or specialist style that prompting cannot achieve reliably, the underlying model can be adapted through [LLM fine-tuning](/services/llm-development-fine-tuning).",
};

// VERIFY: Model Context Protocol experience (copy hedges: "assessed per project").
export const TECH = {
  intro: "Agents depend on your existing systems as much as on the model, so integration engineering is central to every build.",
  items: [
    { title: "Models", text: "We are model-agnostic, choosing per task on accuracy, cost, latency and data requirements. Options include commercial models such as OpenAI's GPT family and Anthropic's Claude, accessed through their tool-calling APIs, and open-weight models such as Meta Llama and Mistral, which can be hosted in an environment you control." },
    { title: "Orchestration", text: "The agent loop, tool definitions, state handling and guardrails are built in Python, using frameworks such as LangChain where they help and plain, well-tested code where they do not. Open standards for exposing tools to agents, such as the Model Context Protocol, are assessed per project." },
    // Body link 3 of 4.
    { title: "Tools and integration", text: "Tools wrap your REST and GraphQL APIs, database queries and services, often built in Node.js or Python, each with typed inputs and outputs and its own permission limits. Where an older system has no usable API, we build secure middleware so the agent never needs direct database or screen access; our [custom software development](/services/custom-software-development) team handles those integration layers and legacy connections." },
    { title: "Knowledge and memory", text: "Retrieval over approved documents gives agents current knowledge. Task state is held for the duration of each job, and longer-term memory, such as a customer's previous requests, is read from your own systems of record rather than stored inside the model." },
    { title: "Authentication and authorisation", text: "Agents act under least-privilege service accounts or on behalf of the signed-in user, never with blanket access. Each tool checks permissions independently of the model." },
    { title: "Logging, monitoring and evaluation", text: "Every request, model response, tool call, approval and outcome is logged, giving a full audit trail and the data needed to evaluate and improve the agent." },
    { title: "Hosting", text: "Deployment on AWS or Microsoft Azure, in containers, in the region your data requirements need." },
  ],
  stackTitle: "Our agent technology stack",
  stack: [
    ["Models", "OpenAI GPT, Anthropic Claude, Meta Llama, Mistral, via model tool-calling APIs"],
    ["Orchestration", "Python, LangChain"],
    ["Integration", "Your REST and GraphQL APIs, Node.js"],
    ["Observability", "Audit logging and monitoring"],
    ["Hosting", "AWS, Microsoft Azure, Docker"],
  ],
};

export const USE_CASES = {
  note: "Illustrative applications. Each would be scoped with defined tools and approval points and tested on your own scenarios; they are not client case studies.",
  items: [
    { title: "Customer support", problem: "agents copy details between order, billing and ticketing screens to resolve routine requests.", how: "it looks up the customer and order, checks the policy, drafts the resolution and updates the ticket.", oversight: "refunds, exceptions and complaints go to a person with everything already gathered." },
    // Body link 4 of 4 (in "how").
    { title: "Sales and lead qualification", problem: "inbound enquiries wait for someone to research the company and log them.", how: "it enriches the enquiry, scores it against your criteria, creates or updates the record in your CRM and books the next step. Where the CRM itself needs reshaping around your sales process, our [custom CRM software](/solutions/crm-software) covers that system.", oversight: "sales staff own the conversation and any commitment to the customer." },
    { title: "Internal knowledge assistance", problem: "staff interrupt experts with questions whose answers exist somewhere.", how: "it searches approved sources and, where permitted, completes simple follow-up actions such as raising a request.", oversight: "policy owners keep sources current and review flagged answers." },
    { title: "Document processing", problem: "documents arrive in many formats and must be checked, filed and acted on.", how: "it extracts the key details, checks them against your records and prepares the next action.", oversight: "a person reviews mismatches and anything with financial or legal effect." },
    { title: "Business operations and triage", problem: "work sits in shared inboxes until someone reads and routes it.", how: "it classifies, enriches and routes each item, and flags urgent cases.", oversight: "supervisors review routing quality and handle escalations." },
    { title: "E-commerce operations", problem: "order, delivery and returns queries consume support time.", how: "it checks order and carrier status, prepares returns and answers status questions.", oversight: "payments and refunds above agreed limits need approval." },
    { title: "Data retrieval and reporting", problem: "managers wait for analysts to pull routine figures.", how: "it answers defined questions by querying approved data sources through read-only tools.", oversight: "figures used for decisions are traceable to the underlying query." },
    { title: "IT and software workflows", problem: "routine requests and incident triage take engineers away from planned work.", how: "it gathers diagnostic information, handles standard requests and drafts incident summaries.", oversight: "changes to production systems require approval." },
    { title: "CRM and ERP updates", problem: "records fall out of date because updating them is tedious.", how: "it proposes updates from emails, calls or documents for confirmation, or applies low-risk updates within limits.", oversight: "financial and contractual fields stay under human control." },
    { title: "Repetitive administrative tasks", problem: "scheduling, chasing and form-filling fill the day.", how: "it drafts, schedules and follows up within agreed rules.", oversight: "anything sent externally can require approval." },
  ],
};

export const INDUSTRIES = {
  note: "How agents may fit different sectors. Suitability and any regulatory requirements are assessed per project.",
  items: [
    ["Healthcare administration:", "appointment, referral and correspondence tasks, with clinical decisions kept with clinicians and health data handled under strict access controls."],
    ["Financial services:", "case preparation, document checks and customer servicing, with decisions affecting customers subject to human review and audit."],
    ["E-commerce and retail:", "order, delivery and returns handling, with payment actions behind approval limits."],
    ["Professional services:", "matter or engagement administration, research preparation and document assembly, reviewed by qualified staff."],
    ["Education:", "administrative support and learning copilots grounded in approved course content."],
    ["Logistics and supply chain:", "dispatch support, delivery exception handling and customer status updates across fleet and order systems."],
    ["Software and technology:", "support triage, in-product assistants and internal developer workflows."],
    ["Real estate:", "enquiry handling, viewing coordination and maintenance request triage."],
  ],
};

// VERIFY: have a data protection adviser review the automated decision-making paragraph (pack owner action 3).
export const SECURITY = {
  intro: "An agent that can act can also act wrongly, so safety is part of the architecture rather than an add-on.",
  items: [
    { icon: "key", title: "Least-privilege tools", text: "Every tool has the narrowest permissions it needs, defined inputs and outputs, and limits such as maximum values or rate limits. An agent cannot do anything its tools do not allow." },
    { icon: "user", title: "Authentication and access control", text: "Agents act under scoped service accounts or the signed-in user's own permissions, so they cannot reach data the user could not." },
    { icon: "shield", title: "Prompt injection defences", text: "Emails, documents, web pages and user messages can contain instructions designed to manipulate an agent. All such input is treated as untrusted, kept separate from system instructions, and never allowed to grant new permissions. We design against the OWASP Top 10 for LLM Applications, which covers prompt injection and excessive agency." },
    { icon: "approve", title: "Human approval for sensitive actions", text: "Payments, refunds, external communications, deletions and changes to important records can require approval, with the agent presenting its reasoning and the evidence it used." },
    { icon: "check", title: "Output validation", text: "Tool arguments and results are validated against schemas and business rules before they are used." },
    { icon: "error", title: "Error handling and fallbacks", text: "Timeouts, failed tool calls and unexpected results are handled explicitly, with limits on retries and steps, and a clean hand-off to a person when the agent cannot complete the task." },
    { icon: "log", title: "Audit logs and data retention", text: "Every step is recorded for review and investigation, with logs retained only as long as your policy requires and access to them controlled." },
    { icon: "privacy", title: "Data privacy and automated decisions", text: "Agents often process personal data, which remains subject to UK GDPR. Where an agent's output contributes to significant decisions about individuals, UK rules on automated decision-making, as updated by the Data (Use and Access) Act 2025, require safeguards such as meaningful human involvement and the ability to contest decisions. We design agents so people stay in the loop for consequential decisions, and can supply technical detail for a Data Protection Impact Assessment. This is technical support, not legal advice; your data protection adviser should confirm your obligations." },
  ],
};

export const PROCESS = [
  { title: "Feasibility and requirements", text: "Understand the task, the systems involved, the volume and variability of requests, and the cost of mistakes, and decide honestly whether an agent, a simpler automation or a retrieval assistant is the right fit." },
  { title: "Use-case selection and workflow mapping", text: "Choose one narrow task with measurable success, map today's steps, and mark where a person must stay in control." },
  { title: "Solution architecture", text: "Define the agent loop, tools, permissions, approval points, state handling, logging and hosting." },
  { title: "Model and technology selection", text: "Benchmark candidate models on the task's tool-calling and reasoning needs, balancing accuracy, cost, latency and data requirements." },
  { title: "Agent development and integration", text: "Build the tools on your systems, implement the agent loop and guardrails, and add retrieval where knowledge is needed." },
  { title: "Testing and evaluation", text: "Run scripted scenarios, including edge cases and adversarial inputs, and measure task success, tool-call accuracy, escalation behaviour, cost and latency." },
  { title: "Security and governance review", text: "Review permissions, approval flows, prompt injection defences, data handling and logs before release." },
  { title: "Deployment", text: "Release to a small group under supervision, with monitoring and a clear rollback route." },
  { title: "Monitoring and continuous improvement", text: "Review logs and outcomes, fix failure patterns, extend the scenario suite, and widen the agent's scope or add tools only when results justify it." },
];

export const PROCESS_OUTRO =
  "Work is delivered in two-week sprints with weekly demos. We offer fixed-price and time-and-materials engagements, with a scoped estimate and milestones after discovery.";

export const EVALUATION = {
  metrics: [
    ["Task success rate:", "the share of scenarios completed correctly end to end."],
    ["Tool-call accuracy:", "whether the right tools are called with valid arguments."],
    ["Safe behaviour:", "whether approval is requested when required and refused actions stay refused."],
    ["Escalation quality:", "whether the agent hands over at the right moment with useful context."],
    ["Robustness:", "behaviour on ambiguous, incomplete and adversarial inputs."],
    ["Efficiency:", "steps, latency and model cost per completed task."],
  ],
  outro: "The scenario suite is re-run before every change to prompts, tools or models, so improvements are measured rather than assumed. No agent is error-free; the aim is known, acceptable behaviour with people in control where it matters.",
};

export const READY_MADE = {
  intro: "Many business software products now include built-in AI assistants, and general-purpose agent platforms are widely available. For many needs they are sufficient.",
  enough: [
    "The task lives entirely inside one product that already offers an assistant.",
    "Your workflow matches the product's standard process.",
    "Default permissions, logging and data handling meet your requirements.",
  ],
  custom: [
    "The task spans several of your systems, including internal or older ones.",
    "The agent needs your proprietary data and business rules.",
    "You need permissions, approval steps and limits that match your own policies.",
    "You need full logs, evaluation on your own scenarios and control over models and hosting.",
    "The agent is part of your own product or customer experience.",
  ],
};

export const PARTNER = {
  intro: "Questions worth asking any supplier:",
  questions: [
    "Will they tell you when a simple automation would do the job better?",
    "How are tool permissions and approval steps enforced outside the model?",
    "How do they test agents before and after launch?",
    "How do they defend against prompt injection from emails and documents?",
    "What does the audit log record, and who can see it?",
    "Who owns the agent, its tools and the code?",
  ],
  answers: [
    { icon: "target", title: "Narrow first", text: "One well-defined task, proven before scope widens." },
    { icon: "shield", title: "Safety in the architecture", text: "Least-privilege tools, approval for high-impact actions and full audit logs." },
    { icon: "test", title: "Tested against scenarios", text: "Including edge cases and adversarial inputs." },
    { icon: "compass", title: "Model-agnostic", text: "Commercial and open-weight models chosen on evidence." },
    { icon: "plug", title: "AI and software engineering in one team", text: "Integration with your systems, including secure middleware for older ones, with experience across Salesforce, SAP ERP, ServiceNow, HubSpot, Microsoft Dynamics, Oracle Cloud and Jira." },
    { icon: "support", title: "Transparent delivery", text: "Two-week sprints, weekly demos, NDAs on request and support after launch." },
  ],
};

export const FAQS: { q: string; a: string[] }[] = [
  { q: "What is AI agent development?", a: ["AI agent development is the design and engineering of software that uses a language model to interpret a goal, plan the steps and call tools, such as APIs, databases and search, to complete a task, within permissions, approval steps and logging defined by the business."] },
  { q: "What is the difference between an AI agent and a chatbot?", a: ["A chatbot answers messages. An AI agent can also take actions: it plans steps and calls tools such as looking up an order, updating a record or raising a ticket, within the permissions it has been given."] },
  { q: "What is the difference between AI agents and traditional automation?", a: ["Traditional automation follows a fixed, predefined workflow, which is predictable and cheap for stable processes. An agent decides its steps at run time, so it can handle varied requests, but it is less predictable and needs stronger guardrails. Many systems combine both."] },
  { q: "Can AI agents integrate with our existing business software?", a: ["Yes. Agents call your systems through their APIs, such as CRM, order, ticketing and back-office systems. Where no modern API exists, secure middleware can be built so the agent never needs direct database or screen access."] },
  { q: "Can AI agents work with private company data?", a: ["Yes, through tools and retrieval that respect your access controls. Agents act under scoped accounts or the user's own permissions, and models can be hosted in an environment you control where data must not leave it."] },
  { q: "Are AI agents safe for business operations?", a: ["They can be, when designed for it: least-privilege tools, untrusted handling of all input, validation of outputs, human approval for high-impact actions, explicit error handling and full audit logs. No agent is error-free, so autonomy should match the risk of each action."] },
  { q: "What technologies are used to build AI agents?", a: ["A language model with tool-calling support, an orchestration layer that runs the agent loop and guardrails, tools that wrap your APIs and data, retrieval where knowledge is needed, and logging and monitoring. We commonly use Python, LangChain, Node.js and commercial or open-weight models, hosted on AWS or Azure."] },
  { q: "Are AI agents suitable for enterprise businesses?", a: ["Yes, where the task, permissions and approval points are well defined. Enterprises often benefit most because work spans many systems, but they also need the strongest controls, logging and evaluation, which should be designed in from the start."] },
  { q: "How much does custom AI agent development cost?", a: ["Cost depends on the number and complexity of tools and integrations, the condition of your systems' APIs, the autonomy and approval design, evaluation depth, model and hosting choices, and ongoing monitoring. We provide a fixed-price or time-and-materials estimate with milestones once the task is scoped."] },
  { q: "How long does it take to develop an AI agent?", a: ["It depends mainly on how many systems the agent must use, whether suitable APIs exist, how much testing the risk level demands, and how quickly decisions are made. Starting with one narrow task is the fastest route to a reliable first agent."] },
];

export const FINAL_CTA = {
  title: "Pick One Task Your Team Repeats Every Day.",
  titleAccent: "We Will Scope an Agent for It.",
  body: {
    text: "Tell us the steps your people follow today, the systems they use and where a person must stay in control. We will tell you honestly whether an agent, a simpler automation or a retrieval assistant fits best, and propose a narrow first agent with the tools, approval points and test scenarios it would need.",
  },
  bring: ["The task and its steps today", "The systems and APIs involved", "Actions that need approval", "Volume and variability of requests", "Data and hosting requirements"],
};

export const SCHEMA_SERVICE = {
  name: "AI Agent Development",
  alternateName: "AI Assistant Development",
  serviceType: ["AI agent development", "Custom AI agent development", "AI assistant development"],
  description: SEO.description,
  relatedServicePath: "/services/ai-development",
};

type OgTone = "plain" | "purple" | "teal" | "sun";
/** Social sharing image content (used by ./opengraph-image.tsx). */
export const OG: { title: string; accent: string; rows: [string, OgTone][][] } = {
  title: "AI Agent Development",
  accent: "Real tasks, within your limits",
  rows: [
    [["Plan · Act · Check", "purple"]],
    [["CRM", "plain"], ["Orders", "plain"], ["Tickets", "plain"]],
    [["Scoped tools", "teal"], ["Approvals", "teal"]],
    [["Full audit log", "sun"]],
  ],
};
