import type { AiServicePageContent } from "../../lib/ai-service-page";

/*
 * /services/generative-ai-development. Expanded from the "Generative AI
 * Development" section of /services/ai-development.
 */
export const CONTENT = {
  slug: "generative-ai-development",
  name: "Generative AI Development",
  seo: {
    title: "Generative AI Development Services UK",
    description:
      "Generative AI for UK businesses: drafts, summaries, transcripts and images produced to your standards, with checks and human approval. Get a quote.",
  },
  schema: {
    serviceType: ["Generative AI development"],
    description:
      "Development of generative AI systems that produce text, summaries, transcripts and images to agreed standards, using prompt templates, retrieval of approved sources, automated checks and human approval steps.",
  },
  hero: {
    eyebrow: "Generative AI Development UK",
    title: "Generative AI Development Services UK",
    titleAccent: "for Consistent Output, Not Just Demos",
    lead:
      "Generative AI produces new content from instructions and context: product copy, report drafts, meeting summaries, transcripts and images. The engineering challenge is consistency. We build generative systems that meet your standards every time, with automated checks and a human approval step wherever content is published.",
    audience:
      "For marketing, operations, content and learning teams producing high volumes of writing or media that follows predictable patterns.",
    stats: [
      { value: "Standards first", label: "Agreed before build" },
      { value: "Human approval", label: "For published content" },
      { value: "Text · Audio · Image", label: "Content types" },
      { value: "Model-agnostic", label: "Commercial or open-weight" },
    ],
    figureLabel: "A controlled generation pipeline",
    flow: [
      { title: "Agree output standards", text: "Tone, structure, length and what must never appear." },
      { title: "Retrieve approved sources", text: "Facts come from your data, not the model's memory." },
      { title: "Generate from templates", text: "Versioned prompts tuned on real examples." },
      { title: "Check and approve", text: "Automated checks, then a person signs off." },
    ],
    figcaption: "Automated checks catch most issues; people approve what is published.",
  },
  overview: {
    heading: "What Is Generative AI Development?",
    paragraphs: [
      "Generative AI development is the work of turning a capable model into a dependable production tool. Rather than an open chat window, the result is a pipeline: structured inputs, prompt templates, approved source material, generation, automated quality checks and a review step, all logged so you can see how each piece of content was produced.",
      "The model choice matters less than the controls around it. We agree output standards first, then build prompts and checks that hold to them, and measure output quality on real examples. Where tone or format must be very consistent, [LLM fine-tuning](/services/llm-development-fine-tuning) can help; where facts must be current, we retrieve them from your own data.",
      "Generative AI is one of the capabilities in our [AI development services](/services/ai-development), and it frequently sits inside larger workflows such as catalogue management, reporting or customer communications.",
    ],
  },
  problems: {
    heading: "Problems Generative AI Solves",
    intro: "The best candidates are tasks that are repetitive, follow a pattern and currently consume skilled people's time.",
    items: [
      { title: "High-volume, patterned writing", text: "Product descriptions, listings and routine reports that follow the same structure every time." },
      { title: "Slow first drafts", text: "Experts spend hours on first drafts that a model could prepare for them to refine." },
      { title: "Manual transcription", text: "Calls and meetings are typed up by hand, or not captured at all." },
      { title: "Creative variations at scale", text: "Marketing teams need many image and copy variants for channels and campaigns." },
    ],
  },
  applications: {
    heading: "Practical Applications",
    intro: "Illustrative examples. Each pipeline is tested on samples of your real content before it goes live.",
    items: [
      { title: "E-commerce catalogue content", text: "Product titles and descriptions drafted from specifications, in your brand voice." },
      { title: "Report and summary drafting", text: "Narrative summaries generated from structured data for managers to review and send." },
      { title: "Call and meeting transcription", text: "Speech-to-text transcripts with summaries and action points." },
      { title: "Marketing image variations", text: "On-brand image variants for campaigns, reviewed before use." },
      { title: "Learning content and assessments", text: "Course material and question banks drafted for educators to edit and approve." },
    ],
  },
  process: {
    heading: "How We Build Generative AI Systems",
    intro: "We treat generation as a controlled process, with standards, checks and review designed in from the first sprint.",
    steps: [
      { title: "Output standards", text: "Define tone, structure, length, mandatory elements and prohibited content with the people who own the output.", output: "Written content standard and examples" },
      { title: "Source material", text: "Connect the approved data the content must draw on, such as specifications, records or reference documents.", output: "Approved source pipeline" },
      { title: "Prompt templates", text: "Build and version prompt templates, tested on a representative sample of real inputs.", output: "Versioned templates with test results" },
      { title: "Automated checks", text: "Add checks for format, banned terms, factual consistency with sources and length before anything reaches a reviewer.", output: "Quality gate with pass/fail reasons" },
      { title: "Human approval", text: "Route customer-facing or published content to a reviewer with edit, approve and reject actions.", output: "Review workflow and audit trail" },
      { title: "Monitoring", text: "Track approval rates, edit distance and cost per item, and refine prompts as standards evolve.", output: "Quality and cost dashboard" },
    ],
  },
  tech: {
    heading: "Technologies for Generative AI",
    intro: "We benchmark current text, speech and image models at the start of each project and choose on quality, cost and data handling.",
    groups: [
      { title: "Models", items: ["Commercial LLM APIs", "Open-weight LLMs", "Whisper (speech-to-text)", "Stable Diffusion"] },
      { title: "Orchestration", items: ["Python", "LangChain", "Node.js"] },
      { title: "Hosting & review tools", items: ["AWS", "Docker", "React"] },
    ],
  },
  compliance: {
    heading: "UK Considerations for Generated Content",
    paragraphs: [
      "Generated marketing copy must still meet the CAP Code, the UK advertising rules, so claims are checked before publication. We also help you confirm you have the rights to the reference material and brand assets the system uses.",
      "Call and meeting transcripts contain personal data under UK GDPR, so recording notices, retention periods and access controls are agreed before transcription goes live.",
    ],
  },
  industries: {
    heading: "Where Generative AI Helps Most",
    intro: "Sectors with large volumes of structured content see the clearest gains.",
    items: [
      { href: "/industries/ecommerce", title: "E-Commerce", text: "Catalogue content and campaign variants produced at the pace new products arrive." },
      { href: "/industries/edtech", title: "EdTech & E-Learning", text: "Course content and assessments drafted for educators to review, in line with DfE guidance on generative AI." },
    ],
  },
  related: {
    heading: "Related AI Services",
    intro: "Generative systems usually draw on, or feed into, these capabilities.",
    items: [
      { href: "/services/ai-development", title: "AI Development Services", text: "The full AI lifecycle, from discovery to monitored production." },
      { href: "/services/llm-development-fine-tuning", title: "LLM Development & Fine-Tuning", text: "Lock in tone and format with a model tuned on your examples." },
      { href: "/services/rag-development", title: "RAG Development", text: "Ground generated content in current, approved source material." },
      { href: "/services/ai-automation", title: "AI Automation Services", text: "Place generation inside an end-to-end automated workflow." },
      { href: "/hire/ai-developers", title: "Hire AI Developers", text: "Generative AI engineers who join your own team." },
    ],
  },
  faqs: [
    {
      q: "How do you keep generated content accurate and on-brand?",
      a: ["We agree written standards first, draw facts from approved sources, test prompt templates on real examples and run automated checks before a person reviews anything customer-facing. Approval rates and edits are tracked so quality can be measured."],
    },
    {
      q: "Will a person always review the output?",
      a: ["Wherever content is published or customer-facing, yes. For internal drafts, such as meeting summaries, teams often choose lighter review once quality has been measured."],
    },
    {
      q: "Can generative AI work with our own data securely?",
      a: ["Yes. Source data stays in your environment, provider retention terms are reviewed, and open-weight models can be hosted in your own cloud account where data must not leave it."],
    },
    {
      q: "What does a generative AI project cost?",
      a: ["It depends on content types, volumes, integrations and review workflow. Our [AI development engagement packages](/services/ai-development#packages) give a starting point, and we quote a fixed scope after discovery."],
    },
  ],
  cta: {
    title: "Show Us the Content You Produce.",
    titleAccent: "We Will Show You What Can Be Generated.",
    body: {
      text: "Send a few examples of the content, the inputs behind it and the standards it must meet. We will test current models on them and outline a controlled pipeline. If you need an in-house team to run it, you can [[link]].",
      link: { anchor: "hire AI developers", href: "/hire/ai-developers" },
    },
    bring: ["Examples of good output", "The inputs each piece starts from", "Who approves content today"],
  },
  og: {
    title: "Generative AI Development",
    accent: "Consistent, reviewed output",
    rows: [
      [["Approved content", "purple"]],
      [["Templates", "plain"], ["Checks", "plain"], ["Review", "plain"]],
      [["Approved sources", "teal"], ["Standards", "teal"]],
      [["Text · Transcripts · Images", "sun"]],
    ],
  },
} satisfies AiServicePageContent;
