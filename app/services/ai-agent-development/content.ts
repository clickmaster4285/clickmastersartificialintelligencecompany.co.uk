import type { AiServicePageContent } from "../../lib/ai-service-page";

/*
 * /services/ai-agent-development. Expanded from the "AI Agent and Assistant
 * Development" section of /services/ai-development.
 * VERIFY: confirm tool-using agent capability before publishing (pack note).
 */
export const CONTENT = {
  slug: "ai-agent-development",
  name: "AI Agent Development",
  seo: {
    title: "AI Agent Development Services UK",
    description:
      "AI agent development for UK businesses: assistants that plan steps and call your APIs, with permission limits, human approval and audit logs. Get a quote.",
  },
  schema: {
    alternateName: "AI Assistant Development",
    serviceType: ["AI agent development", "AI assistant development"],
    description:
      "Development of AI agents and assistants that use a language model to plan steps and call tools such as APIs, databases and internal systems, with scoped permissions, human approval for high-impact actions and audit logging.",
  },
  hero: {
    eyebrow: "AI Agent Development UK",
    title: "AI Agent Development Services UK",
    titleAccent: "for Multi-Step Tasks Across Your Systems",
    lead:
      "An AI agent uses a language model to plan steps and call tools, such as APIs, databases, search and internal systems, to complete a task. Where a chatbot answers a message, an agent can look up a customer, check an order, draft a reply and raise a ticket. We build agents that do this safely, within limits you set.",
    audience:
      "For operations and support teams whose people copy information between several systems to complete routine, multi-step requests.",
    stats: [
      { value: "Scoped tools", label: "Permission limits" },
      { value: "Human approval", label: "High-impact actions" },
      { value: "Every step logged", label: "Full audit trail" },
      { value: "Scenario-tested", label: "Before scope widens" },
    ],
    figureLabel: "How an agent completes a task",
    flow: [
      { title: "Understand the request", text: "Interpret what the user or ticket is asking for." },
      { title: "Plan the steps", text: "Decide which tools to call and in what order." },
      { title: "Call permitted tools", text: "Look up, check and draft through your APIs." },
      { title: "Approve and log", text: "A person confirms high-impact actions; every step is recorded." },
    ],
    figcaption: "Agents start with a narrow task and a small, defined set of tools.",
  },
  overview: {
    heading: "What Is an AI Agent?",
    paragraphs: [
      "An AI agent combines a language model with a set of tools it is allowed to use. Given a goal, it decides which tool to call, reads the result, and chooses the next step until the task is done or it needs a person. Tools are ordinary software: your REST and GraphQL APIs, database queries, search, or a [RAG knowledge base](/services/rag-development).",
      "Agents are less predictable than fixed workflows, because the model chooses the path. We recommend them where that flexibility is worth the trade-off, such as requests that vary widely, and a simple rules-based automation where it is not. For customer-facing conversation, our [AI chatbot development](/services/ai-chatbots) service may be the better fit.",
      "Agent development is part of our [AI development services](/services/ai-development). Every agent we build starts narrow, is tested against scripted scenarios for task success, and only gains new tools once it has proved reliable with the current ones.",
    ],
  },
  problems: {
    heading: "Problems AI Agents Solve",
    intro: "Agents are most valuable where a person is acting as the glue between systems.",
    items: [
      { title: "Swivel-chair work", text: "Staff copy details between CRM, order, billing and ticketing screens to resolve one request." },
      { title: "Requests too varied for rules", text: "Fixed automations break when requests are worded differently or need a judgement call." },
      { title: "Slow triage", text: "Work waits in queues while someone reads, enriches and routes it." },
      { title: "Routine requests crowding out experts", text: "Skilled staff spend their time on simple lookups and status checks." },
    ],
  },
  applications: {
    heading: "Practical Applications",
    intro: "Illustrative examples of agent use cases, each with defined tools and approval points.",
    items: [
      { title: "Support resolution assistants", text: "Resolve routine requests end to end and hand exceptions to a person with full context." },
      { title: "Operations triage agents", text: "Read, classify, enrich and route incoming work to the right queue." },
      { title: "Dispatch and routing support", text: "Suggest assignments and routes from live job and fleet data for a dispatcher to confirm." },
      { title: "Internal service desk agents", text: "Handle access requests, password resets and common IT tasks through approved tools." },
      { title: "Learning copilots", text: "Guide students and staff through material and tasks using approved course content." },
    ],
  },
  process: {
    heading: "How We Build AI Agents",
    intro: "Safety is part of the design: every tool has limits, every high-impact action has an approval step, and every step is logged.",
    steps: [
      { title: "Choose a narrow task", text: "Pick one well-defined task with measurable success and a clear point where a person takes over.", output: "Task definition and success criteria" },
      { title: "Define the tools", text: "Specify each tool the agent may call, its inputs, outputs and permission limits, using least-privilege service accounts.", output: "Tool catalogue with permissions" },
      { title: "Build and prompt", text: "Implement the agent loop, tool calling and guardrails, with retrieval where knowledge is needed.", output: "Working agent in a sandbox" },
      { title: "Scenario testing", text: "Run scripted scenarios, including edge cases and adversarial inputs, and measure task success.", output: "Scenario test report" },
      { title: "Approval and audit", text: "Add human approval for high-impact actions and log every step, tool call and decision.", output: "Approval flow and audit log" },
      { title: "Supervised roll-out", text: "Release to a small group, review logs, then widen scope or add tools based on results.", output: "Staged roll-out plan" },
    ],
  },
  tech: {
    heading: "Technologies for AI Agents",
    intro: "Agents rely on your existing APIs as much as on the model, so integration engineering is central to every build.",
    groups: [
      { title: "Agent frameworks", items: ["Python", "LangChain", "Model tool-calling APIs"] },
      { title: "Integration", items: ["Your REST and GraphQL APIs", "Node.js", "Audit logging"] },
      { title: "Hosting", items: ["AWS", "Microsoft Azure", "Docker"] },
    ],
  },
  compliance: {
    heading: "Safe Agent Design and UK GDPR",
    paragraphs: [
      "We design against the OWASP Top 10 for LLM Applications, including excessive agency and prompt injection: tools are scoped, retrieved content is treated as untrusted and outputs are checked before actions run.",
      "Where an agent's actions affect individuals, UK GDPR safeguards for automated decision-making apply, so people stay in the loop for consequential decisions and every step is recorded.",
    ],
  },
  industries: {
    heading: "Where AI Agents Help Most",
    intro: "Agents fit operations with many systems and high request volumes.",
    items: [
      { href: "/industries/logistics", title: "Supply Chain & Logistics", text: "Dispatch support, delivery exception handling and customer status updates across fleet and order systems." },
      { href: "/industries/ecommerce", title: "E-Commerce", text: "Order lookups, returns and refund preparation handled end to end, with approval for payments." },
    ],
  },
  related: {
    heading: "Related AI Services",
    intro: "Agents usually combine with these services.",
    items: [
      { href: "/services/ai-development", title: "AI Development Services", text: "The full AI lifecycle, from discovery to monitored production." },
      { href: "/services/ai-chatbots", title: "AI Chatbot Development", text: "Conversational assistants for customer support and sales." },
      { href: "/services/ai-automation", title: "AI Automation Services", text: "Rules-based automation with AI for the steps that need judgement." },
      { href: "/services/rag-development", title: "RAG Development", text: "The knowledge base an agent searches before it acts." },
      { href: "/hire/ai-developers", title: "Hire AI Developers", text: "Engineers to extend and operate your agents in-house." },
    ],
  },
  faqs: [
    {
      q: "What is the difference between an AI agent and a chatbot?",
      a: ["A chatbot answers messages. An agent can also act: it plans steps and calls tools, such as looking up an order, updating a record or raising a ticket, within the permissions it has been given."],
    },
    {
      q: "How do you stop an agent taking the wrong action?",
      a: ["Each tool has strict permission limits, high-impact actions need human approval, inputs and retrieved content are treated as untrusted, and every step is logged. Agents are tested against scripted scenarios before their scope is widened."],
    },
    {
      q: "Can an agent work with our existing systems?",
      a: ["Yes. Agents call your systems through their APIs. Where no modern API exists, we build secure middleware so the agent never needs direct database or screen access."],
    },
    {
      q: "When is a simple automation better than an agent?",
      a: ["When the process is stable and predictable. Fixed workflows are cheaper to run and easier to audit, so we recommend an agent only where requests vary too much for rules. To discuss which fits, [talk to our team](/contact)."],
    },
  ],
  cta: {
    title: "Pick One Task Your Team Repeats Every Day.",
    titleAccent: "We Will Scope an Agent for It.",
    body: {
      text: "Tell us the steps, the systems involved and where a person must stay in control. We will propose a narrow first agent and how to test it. For simpler, rule-based processes, see our [[link]].",
      link: { anchor: "AI automation services", href: "/services/ai-automation" },
    },
    bring: ["The task and its steps today", "The systems and APIs involved", "Actions that need approval"],
  },
  og: {
    title: "AI Agent Development",
    accent: "Multi-step tasks, safely",
    rows: [
      [["Plan · Act · Check", "purple"]],
      [["CRM", "plain"], ["Orders", "plain"], ["Tickets", "plain"]],
      [["Scoped tools", "teal"], ["Approvals", "teal"]],
      [["Full audit log", "sun"]],
    ],
  },
} satisfies AiServicePageContent;
