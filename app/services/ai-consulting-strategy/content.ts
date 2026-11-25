import type { AiServicePageContent } from "../../lib/ai-service-page";

/*
 * /services/ai-consulting-strategy. Expanded from the "AI Consulting and
 * Strategy" section of /services/ai-development.
 */
export const CONTENT = {
  slug: "ai-consulting-strategy",
  name: "AI Consulting & Strategy",
  seo: {
    title: "AI Consulting & Strategy Services UK",
    description:
      "AI consulting for UK businesses: use-case scoring, data readiness, build-or-buy advice and a phased AI roadmap before you commit budget. Book a free call.",
  },
  schema: {
    alternateName: "AI Strategy Consulting",
    serviceType: ["Artificial intelligence consulting", "AI strategy"],
    description:
      "AI consulting that identifies where AI fits in an organisation, assesses data readiness and architecture, recommends build or buy, maps return on investment and produces a phased roadmap.",
  },
  hero: {
    eyebrow: "AI Consulting UK",
    title: "AI Consulting and Strategy Services UK",
    titleAccent: "Before Significant Budget Is Committed",
    lead:
      "AI consulting decides where AI fits in your organisation, what it should cost and how to deliver it safely. We score your candidate use cases on value and feasibility, assess your data and architecture, and give you a written roadmap your team can act on with or without us.",
    audience:
      "For organisations at the start of their AI programme, and for teams with a stalled pilot that need an independent technical view.",
    stats: [
      { value: "Written roadmap", label: "Yours to keep" },
      { value: "Build or buy", label: "Independent advice" },
      { value: "Value × feasibility", label: "Use-case scoring" },
      { value: "With or without us", label: "Act on it your way" },
    ],
    figureLabel: "From ideas to a phased plan",
    flow: [
      { title: "Collect use cases", text: "Ideas from every team, in one inventory." },
      { title: "Score them", text: "Value, feasibility, data readiness and risk." },
      { title: "Check the foundations", text: "Data, architecture and existing pipelines." },
      { title: "Plan the phases", text: "ROI mapping and a sequenced roadmap." },
    ],
    figcaption: "Every recommendation includes the evidence behind it.",
  },
  overview: {
    heading: "What Does AI Consulting Involve?",
    paragraphs: [
      "AI consulting turns a broad ambition, often a board asking the organisation to \"do something with AI\", into a short list of use cases worth funding and a realistic plan to deliver them. It combines business analysis, data assessment and architecture review, so the recommendations are both valuable and buildable.",
      "Our consultants are the same engineers who deliver our [AI development services](/services/ai-development), which keeps advice grounded in what systems actually cost to build and run. Part of every engagement is checking whether an existing product would solve the problem more cheaply than a custom build; when it would, we say so.",
      "If you want an early sense of value and readiness before speaking to us, try our [AI ROI calculator and readiness quiz](/resources/free-tools).",
    ],
  },
  problems: {
    heading: "Problems AI Consulting Solves",
    intro: "Most stalled AI programmes share the same handful of causes.",
    items: [
      { title: "Scattered pilots", text: "Several experiments across teams, none with a route to production or an owner." },
      { title: "Unclear return on investment", text: "No agreed way to compare the value of one use case against another." },
      { title: "Pressure without a plan", text: "Leadership wants progress on AI but there is no shared roadmap or budget logic." },
      { title: "Unknown data readiness", text: "Nobody is sure whether the data needed is available, clean or allowed to be used." },
    ],
  },
  applications: {
    heading: "What You Receive",
    intro: "Deliverables are written for both business and technical readers, so they can be used to secure budget and to brief a delivery team.",
    items: [
      { title: "Use-case inventory", text: "Every candidate use case, scored on value and feasibility, with a recommended shortlist." },
      { title: "Data readiness assessment", text: "Which data exists, its quality and access, and what must change before build." },
      { title: "Architecture discovery", text: "How AI would fit your current systems, with a build-or-buy recommendation." },
      { title: "ROI mapping and roadmap", text: "Expected benefits, costs and risks per use case, sequenced into phases." },
      { title: "Audit of existing ML pipelines", text: "An independent review of models and pipelines already in place." },
    ],
  },
  process: {
    heading: "How an AI Strategy Engagement Runs",
    intro: "Engagements combine workshops with business and technical stakeholders and a written assessment you keep.",
    steps: [
      { title: "Stakeholder workshops", text: "Gather goals, pain points and ideas from business and technical teams.", output: "Use-case long list" },
      { title: "Scoring", text: "Score each use case on value, feasibility, data readiness and risk with the people who own it.", output: "Scored inventory and shortlist" },
      { title: "Data and architecture review", text: "Assess data sources, quality and access, plus the systems AI would need to connect to.", output: "Readiness and architecture findings" },
      { title: "Build-or-buy analysis", text: "Compare custom builds with existing products for each shortlisted use case.", output: "Build-or-buy recommendation" },
      { title: "Roadmap", text: "Sequence use cases into phases with costs, benefits, dependencies and governance needs.", output: "Phased roadmap and ROI map" },
    ],
  },
  tech: {
    heading: "Platforms We Assess",
    intro: "Our reviews cover the commercial and open-source platforms organisations most often run or consider.",
    groups: [
      { title: "AI & data", items: ["Python", "Commercial model APIs", "Open-weight models", "MLflow"] },
      { title: "Cloud", items: ["AWS", "Microsoft Azure", "Google Cloud"] },
      { title: "Business systems", items: ["Salesforce", "SAP ERP", "Microsoft Dynamics", "ServiceNow"] },
    ],
  },
  compliance: {
    heading: "Governance and UK Regulation",
    paragraphs: [
      "Roadmaps include the governance each use case needs: UK GDPR and Data Protection Impact Assessments, the ICO's guidance on AI and data protection, and sector rules such as FCA Consumer Duty or MHRA medical device regulation where relevant.",
      "We also recommend practical controls, such as human oversight for consequential decisions, model documentation and monitoring, so responsible AI is built into delivery rather than reviewed at the end.",
    ],
  },
  industries: {
    heading: "Where AI Strategy Helps Most",
    intro: "Consulting is most valuable where AI choices carry significant cost or regulatory weight.",
    items: [
      { href: "/industries/finance", title: "Finance & Fintech", text: "Prioritising AI use cases against FCA expectations, model risk and explainability needs." },
      { href: "/industries/enterprise-saas", title: "Enterprise SaaS", text: "Deciding which AI features to build into a product and how to price and host them." },
    ],
  },
  related: {
    heading: "Related AI Services",
    intro: "Once the roadmap is agreed, these services deliver it.",
    items: [
      { href: "/services/ai-development", title: "AI Development Services", text: "The full AI lifecycle, from discovery to monitored production." },
      { href: "/services/custom-ai-development", title: "Custom AI Development", text: "Build the shortlisted use cases as integrated products." },
      { href: "/services/mvp-saas-development", title: "MVP & SaaS Development", text: "Test the highest-value idea quickly as a focused MVP." },
      { href: "/services/machine-learning", title: "Machine Learning Development", text: "Deliver forecasting and scoring use cases from the roadmap." },
      { href: "/hire/ai-developers", title: "Hire AI Developers", text: "Add AI engineers to deliver the roadmap in-house." },
    ],
  },
  faqs: [
    {
      q: "What do we get at the end of an AI consulting engagement?",
      a: ["A written assessment and roadmap: a scored use-case inventory, data readiness findings, architecture and build-or-buy recommendations, ROI mapping and a phased plan your team can act on with or without us."],
    },
    {
      q: "Is AI consulting independent if you also build AI?",
      a: ["Our recommendations include buying existing products where they solve the problem at lower cost, and the roadmap is yours to deliver with any partner. Being engineers keeps our estimates realistic."],
    },
    {
      q: "Can you review an AI pilot that has stalled?",
      a: ["Yes. We assess the use case, data, model, architecture and the gap to production, then recommend whether to fix, re-scope or stop it."],
    },
    {
      q: "How do we get started?",
      a: ["Start with a short discovery call to agree the scope of workshops and who should attend. [Book a free consultation](/contact) and we will propose a format."],
    },
  ],
  cta: {
    title: "Turn AI Ideas Into a Plan",
    titleAccent: "Your Board Can Fund.",
    body: {
      text: "Tell us where you are: early ideas, scattered pilots or a stalled project. We will propose the right consulting format. When you are ready to build, our [[link]] can deliver it.",
      link: { anchor: "custom AI development services", href: "/services/custom-ai-development" },
    },
    bring: ["Use cases under discussion", "Any pilots already running", "Key stakeholders and timelines"],
  },
  og: {
    title: "AI Consulting & Strategy",
    accent: "A roadmap you can fund",
    rows: [
      [["Phased AI roadmap", "purple"]],
      [["Use cases", "plain"], ["Data", "plain"], ["ROI", "plain"]],
      [["Build", "teal"], ["Buy", "teal"]],
      [["Governance · UK GDPR", "sun"]],
    ],
  },
} satisfies AiServicePageContent;
