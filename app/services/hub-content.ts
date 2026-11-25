/*
 * /services hub content. Service cards come from app/config/services-catalog.ts;
 * this file holds the hub's own copy. Rich strings use [anchor](/path).
 */

export const HUB_HERO = {
  eyebrow: "Software & AI Development Services UK",
  title: "Software & AI Development Services",
  titleAccent: "for UK Businesses",
  // ~100 words, linking to the main sections of the site.
  intro:
    "ClickMasters designs, builds and supports custom software, web and mobile applications, AI systems and enterprise platforms for UK organisations. Every service below can run on its own or as part of one programme, delivered in agile sprints with weekly demos. If you would rather start from a ready-made system, browse our [business software solutions](/solutions); to see how we work in your sector, explore the [industries we serve](/industries). You can also review the [technologies we build with](/technologies), [hire dedicated developers](/hire), read our [example projects and use cases](/case-studies) or see [where we work across the UK](/locations).",
  // Existing site claims (nav "Free consultation" card and FAQs).
  stats: [
    { value: "6–8 weeks", label: "Typical MVP delivery" },
    { value: "Two-week sprints", label: "Weekly demos" },
    { value: "3 service areas", label: "Software · AI · Cloud" },
    { value: "24/7", label: "Support after launch" },
  ],
};

export const HUB_FAQS: { q: string; a: string[] }[] = [
  {
    q: "What software and AI development services does ClickMasters offer?",
    a: [
      "We cover three areas: software development (custom software, web applications, mobile apps and MVP or SaaS products), AI development (custom AI, LLM fine-tuning, RAG, generative AI, AI agents, NLP, computer vision, predictive analytics, machine learning, automation, chatbots and consulting) and enterprise and cloud services (ERP and CRM, cloud and DevOps, and database design).",
    ],
  },
  {
    q: "How long does it take to build an MVP?",
    a: [
      "Most MVPs and AI pilots launch within 6–8 weeks. Full enterprise solutions with several integrations and a staged roll-out typically take 3–6 months, depending on scope, data readiness and how quickly decisions can be made. For a timeline for your own project, [request a free quote](/contact).",
    ],
  },
  {
    q: "How much does software or AI development cost in the UK?",
    a: [
      "Cost depends on scope, integrations, hosting and the level of support after launch. We provide a fixed quote after discovery, and our [AI development engagement packages](/services/ai-development#packages) show typical starting points for AI work.",
    ],
  },
  {
    q: "Can you work with our existing systems?",
    a: [
      "Yes. Integration is part of every project. We connect new software and AI to platforms such as Salesforce, SAP, Microsoft Dynamics, HubSpot and ServiceNow through their APIs, and to internal databases and legacy systems through secure middleware where no modern API exists.",
    ],
  },
  {
    q: "Do you provide support after launch?",
    a: [
      "Yes. We offer ongoing maintenance, monitoring and improvement after launch, including security updates and, for AI systems, accuracy monitoring and retraining as your data changes.",
    ],
  },
];

export const HUB_CTA = {
  title: "Tell Us What You Want to Build.",
  titleAccent: "We Will Scope It With You.",
  body: {
    text: "Share your idea, the problem it solves and the systems involved. We will come back with a clear scope, timeline and estimate. Starting with AI? See our [[link]].",
    link: { anchor: "AI development services", href: "/services/ai-development" },
  },
  bring: ["Your idea or the problem to solve", "Who will use it", "The systems it must connect to"],
};
