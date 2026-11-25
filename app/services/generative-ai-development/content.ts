/*
 * /services/generative-ai-development content, from
 * "ClickMasters Generative AI Development Services: SEO Content Pack" (25 Nov 2026).
 * Edit copy here; ./page.jsx only renders it. (This page no longer uses the
 * shared AiServicePage template: the pack needs solution-type blocks, comparison
 * tables and exactly four body links, so the template's related/industry cards
 * and placeholder links are gone.)
 *
 * Rich strings use [anchor](/path) links (rendered by RichText). Body links:
 * exactly the pack's four (web application development, RAG, LLM fine-tuning,
 * AI agent development), each once. CTAs, breadcrumb, header and footer are
 * template elements and are not counted.
 *
 * VERIFY (pack, owner actions 1 and 3): confirm code-assistance tooling,
 * standalone conversational applications and broader multimodal input before
 * presenting them as established services; confirm the IP / code-ownership
 * position and whether ClickMasters advises on rights in generated content or
 * only flags it.
 */

export const PATH = "/services/generative-ai-development";

export const SEO = {
  // Rendered as "Generative AI Development Services UK | ClickMasters" (52 chars). The pack's
  // "| Custom GenAI" variant would exceed 60 characters with the site suffix.
  title: "Generative AI Development Services UK",
  // The pack's wording, shortened to stay within 155 characters.
  description:
    "Generative AI development for UK businesses: applications that draft, summarise, transform and generate content to your standards, with checks and review.",
  ogTitle: "Generative AI Development | ClickMasters",
  ogDescription:
    "Generative AI applications that produce consistent, reviewed content from your own data, with automated checks and human approval.",
};

const IMG = "/assets/Services/generative-ai";

/**
 * Diagrams drawn for this page (alt text from the pack's image suggestions)
 * and photos from Unsplash (Unsplash License: free for commercial use, no
 * attribution required; credits kept here for reference).
 */
export const IMAGES = {
  pipeline: {
    src: `${IMG}/generative-ai-controlled-pipeline.png`, width: 1080, height: 800,
    alt: "A controlled generative AI pipeline: structured inputs and approved source material feed versioned prompt templates and a model, automated checks filter the output, and a reviewer approves content before it is published",
  },
  solutions: {
    src: `${IMG}/generative-ai-solution-types.png`, width: 1720, height: 560,
    alt: "Generative AI solution types: content from structured data, summarisation, transcription, content transformation, image variation, knowledge assistants, learning content and in-application drafting, each with a human review step",
  },
  architecture: {
    src: `${IMG}/generative-ai-architecture.png`, width: 1720, height: 620,
    alt: "Generative AI application architecture: a business application sends inputs to an orchestration layer that applies templates, retrieves approved data and calls a model, with schema validation and quality checks before a review screen",
  },
  compare: {
    src: `${IMG}/genai-agents-rag-finetuning.png`, width: 1720, height: 460,
    alt: "Comparison of generative AI development, AI agents, retrieval-augmented generation and LLM fine-tuning by focus and the question each answers",
  },
  review: {
    src: `${IMG}/generative-ai-review-workflow.png`, width: 1720, height: 560,
    alt: "Review workflow: generated drafts queue for a reviewer with edit, approve and reject actions, while approval rate, edits, failure reasons and cost per item are tracked on a dashboard",
  },
  readyMade: {
    src: `${IMG}/custom-vs-ready-made-genai.png`, width: 1720, height: 470,
    alt: "Comparison of ready-made AI assistants, simple API integrations and custom generative AI applications by what each suits and what to watch for",
  },
  // Photo: Jakub Żerdzicki (unsplash.com/photos/1q8vISKELBU)
  drafting: {
    src: `${IMG}/generative-ai-stylus-drafting.webp`, width: 1200, height: 800,
    alt: "A hand drawing with a stylus on a tablet screen at a creative workstation",
  },
  // Photo: Tanja Tepavac (unsplash.com/photos/81ikZZG7_AA)
  documents: {
    src: `${IMG}/generative-ai-tabbed-documents.webp`, width: 1200, height: 800,
    alt: "A tall stack of printed documents marked with colourful sticky tabs, waiting to be read and summarised",
  },
  // Photo: Klim Musalimov (unsplash.com/photos/fxHq67K11-E)
  microphone: {
    src: `${IMG}/generative-ai-podcast-microphone.webp`, width: 900, height: 1350,
    alt: "A condenser microphone in a shock mount on an adjustable boom arm, ready to record speech for transcription",
  },
} as const;

export const HERO = {
  eyebrow: "Generative AI Development UK",
  title: "Generative AI Development Services UK:",
  titleAccent: "Applications That Create, Summarise and Transform Content to Your Standards",
  lead:
    "Most organisations have already tried generative AI in a chat window. The results are impressive in a demo and inconsistent in practice: drafts in the wrong tone, summaries that miss the point, facts that sound right but are not, and no record of how anything was produced. The gap between an experiment and a dependable business tool is engineering.",
  audience:
    "ClickMasters builds generative AI applications and pipelines that produce text, summaries, transcripts and images as part of real workflows. We agree the standards the output must meet before we build, connect the approved data it should draw on, add automated checks, and keep a person in control wherever content is published or acted upon.",
  stats: [
    { value: "Standards first", label: "Tone, structure and rules agreed before build" },
    { value: "Human approval", label: "For published and customer-facing content" },
    { value: "Text, audio and image", label: "Model choice based on the task" },
    { value: "Model-agnostic", label: "Commercial or open-weight models" },
  ],
};

export const WHAT_IS = {
  p1: "**Generative AI** refers to models that produce new content, such as text, images or audio, based on patterns learned from very large training datasets, in response to an instruction and some context.",
  how: [
    ["Large language models (LLMs)", "generate text one small unit (a token) at a time, each time predicting a likely next token given the instruction and everything written so far. Settings that control randomness make output more varied or more predictable."],
    ["Image generation models,", "such as diffusion models, start from random noise and refine it step by step into an image that matches a text description."],
    ["Speech models", "convert audio into text, which can then be summarised or structured by a language model."],
    ["Foundation models", "are large, general-purpose models trained on broad data and then adapted for many tasks. Multimodal models can accept or produce more than one type of content, such as text and images together."],
  ] as [string, string][],
  p2: "**Generative AI development** is the work of turning those capabilities into dependable software: structured inputs instead of a blank chat box, prompt templates that are versioned and tested, approved source material, output validation, review steps, integration with your systems and monitoring of quality and cost.",
  sub: [
    { title: "Using an AI tool vs building a generative AI application", text: "A general AI assistant is useful for individuals drafting and brainstorming. A generative AI application is built around a specific job, such as producing product descriptions from specifications or summaries from case notes, so it can apply your standards every time, draw on your data, slot into your systems and show how each output was produced." },
    { title: "Where generative AI adds value, and where it does not", text: "Generative AI is strongest on tasks that involve language or media, follow recognisable patterns, and currently consume skilled time: first drafts, summaries, rewrites, transcripts and variations. It is weak where answers must be exactly right without checking, where rules are fixed and simple, or where a calculation or database query would give a certain answer. In those cases conventional software is usually more reliable, cheaper and easier to audit, and we will say so." },
  ],
};

// VERIFY: "knowledge assistants and conversational interfaces" is proposed (the
// /services/ai-chatbots page is a placeholder) – confirm before publishing.
export const SOLUTIONS = [
  { title: "Content generation from structured data", problem: "product listings, property descriptions or routine reports follow the same pattern but are written by hand.", how: "the system drafts each piece from specifications or records in your house style.", example: "a new product's attributes arrive from your catalogue system, a draft title and description are generated, checked for banned terms and length, and queued for approval.", limits: "facts are only as good as the source data.", review: "required before publication." },
  { title: "Document summarisation", problem: "long reports, case files or correspondence take time to read and condense.", how: "summaries are produced to a fixed structure, such as key points, decisions and actions.", example: "a document is uploaded, summarised, and the summary is linked to the passages it came from.", limits: "summaries can omit or misstate detail.", review: "essential where decisions depend on the summary." },
  { title: "Transcription and meeting intelligence", problem: "calls and meetings are typed up by hand, or not captured at all.", how: "speech-to-text produces a transcript, and a language model extracts a summary and action points.", example: "a recording is transcribed, summarised and filed against the relevant record.", limits: "accents, crosstalk and poor audio reduce accuracy.", review: "participants confirm actions; recording and retention rules must be agreed in advance." },
  { title: "Content transformation", problem: "the same content must be rewritten for different audiences, channels, formats or reading levels.", how: "approved source content is transformed to each target format.", example: "a technical update becomes a customer email, a short internal note and a social post, each checked against its own rules.", limits: "meaning can drift in rewrites.", review: "for anything external." },
  { title: "Image generation and variation", problem: "campaigns need many on-brand image variants for channels and formats.", how: "image models produce variations from a brief and approved brand references.", example: "a campaign brief generates a set of variants for a designer to select, edit and approve.", limits: "fine details, text in images and brand accuracy need checking; rights in reference material must be confirmed.", review: "always, before use." },
  { title: "Knowledge assistants and conversational interfaces", problem: "staff or customers ask the same questions in many different ways.", how: "a conversational interface answers from approved content, in your tone.", example: "a question is matched with relevant approved material, and the answer is generated with links to sources.", limits: "answers must be grounded in approved material to be trustworthy.", review: "escalation routes for anything the assistant cannot answer." },
  { title: "Learning content and assessments", problem: "educators and trainers spend time drafting course material and question banks.", how: "drafts are generated from approved syllabus material.", example: "a module outline produces draft lessons and questions for an educator to edit and approve.", limits: "quality varies with the source material.", review: "always; in education settings we take account of Department for Education guidance on generative AI." },
  { title: "Generative AI inside business applications", problem: "generative features are needed inside existing products and internal tools, not in a separate chat window.", how: "drafting, summarising or rewriting is built into the screens people already use.", example: "a \"draft reply\" button in a case management system prepares a response from the case history for the user to edit.", limits: "depends on clean data access and good interface design.", review: "the user remains the author." },
];

export const SERVICES = [
  { icon: "assess", title: "Use-case assessment and feasibility", text: "Testing current models on samples of your real content to show what is achievable, what it would cost per item and where the risks are, before committing to a build." },
  { icon: "build", title: "Custom generative AI application development", text: "Complete applications built around a specific content task, with inputs, templates, checks, review workflow and reporting." },
  { icon: "plug", title: "Generative AI integration services", text: "Adding generative features to your existing products, portals and internal tools through APIs, with the user interface and back-end changes needed. Where the feature sits inside a browser-based product or portal, our [web application development](/services/web-application-development) team builds the interface and review screens around it." },
  { icon: "flow", title: "Content pipelines and review workflows", text: "Controlled generation pipelines for high-volume content, with automated quality gates and approve, edit and reject actions for reviewers." },
  { icon: "doc", title: "Document intelligence and summarisation", text: "Summarisation, structuring and transcription systems for documents, calls and meetings." },
  { icon: "ground", title: "Grounded generation", text: "Generated content that draws its facts from your approved sources rather than the model's memory, using [retrieval-augmented generation (RAG)](/services/rag-development) to find the right material and link outputs back to it." },
  { icon: "tune", title: "Model customisation", text: "Where prompting cannot hold tone, structure or terminology consistently enough, the underlying model can be adapted on your own examples through [LLM fine-tuning](/services/llm-development-fine-tuning), with the gain measured against the prompted baseline." },
  { icon: "chart", title: "Deployment, monitoring and optimisation", text: "Production deployment with monitoring of approval rates, edit levels, failures and cost per item, and ongoing refinement of prompts, checks and model choices." },
];

export const COMPARE = {
  intro: "These services often work together, but they solve different problems.",
  headers: ["", "Focus", "Typical question it answers"],
  rows: [
    ["Generative AI development", "Applications that create, transform and summarise content", "\"Can we produce this content reliably, to our standards?\""],
    ["AI agent development", "Goal-oriented systems that plan tasks and use tools within permissions", "\"Can software complete this multi-step task across our systems?\""],
    ["Retrieval-augmented generation", "Finding relevant source material and grounding responses in it", "\"Can answers come from our own documents, with sources?\""],
    ["LLM fine-tuning", "Adapting a model's behaviour through additional training", "\"Can the model itself follow our format and terminology more consistently?\""],
  ],
  outro: "When generated content needs to trigger actions, such as updating a record or sending a message after approval, the system becomes an agent; our [AI agent development](/services/ai-agent-development) covers how those tool-using systems are designed with permissions and approval steps.",
};

export const TECH = {
  intro: "The model is one component. Reliability comes from the system around it.",
  items: [
    { title: "Models", text: "We are model-agnostic and benchmark current models at the start of each project. Options include commercial language models through provider APIs, open-weight language models that can be hosted in your own environment, speech-to-text models such as Whisper, and image generation models such as Stable Diffusion. Choice depends on output quality for your task, cost per item, speed and data handling." },
    { title: "Prompt engineering and templates", text: "Prompts are written as versioned templates with clear instructions, examples of good output and explicit rules, then tested on representative real inputs. A template change is treated like a code change: tested before release." },
    { title: "Structured outputs", text: "Where output feeds another system, the model is asked for a defined structure, such as JSON matching a schema, and every response is validated before use rather than trusted." },
    { title: "Approved source material and retrieval", text: "Facts come from your data, such as specifications, records or reference documents, supplied to the model at generation time. For larger collections, embeddings and a vector index find the relevant passages." },
    { title: "Function calling and tool integration", text: "Models can request data lookups or calculations through defined functions, so figures come from your systems rather than being generated." },
    { title: "Orchestration and back end", text: "Pipelines are built in Python or Node.js, using orchestration libraries such as LangChain where they help, with your databases and APIs behind them and review interfaces built in React." },
    { title: "Evaluation and monitoring", text: "Automated checks for format, length, banned terms and consistency with source material run on every output. Quality is tracked through approval rates, the amount reviewers edit, failure reasons and cost per item." },
    { title: "Hosting", text: "Cloud deployment on AWS in containers, with open-weight models hosted in your own cloud account where data must not leave your environment." },
  ],
  stackTitle: "Our generative AI technology stack",
  stack: [
    ["Models", "Commercial LLM APIs, open-weight LLMs, Whisper (speech-to-text), Stable Diffusion"],
    ["Orchestration", "Python, LangChain, Node.js"],
    ["Interfaces", "React"],
    ["Hosting", "AWS, Docker"],
  ],
};

// VERIFY: code-assistance tooling is proposed ("assessed per project").
export const USE_CASES = {
  note: "Illustrative applications. Each would be tested on samples of your real content before going live; they are not client case studies.",
  items: [
    ["Customer support:", "suggested replies drafted from the case history and your policies, edited and sent by agents."],
    ["Marketing and content operations:", "campaign copy and image variants drafted to brand rules, checked against the UK advertising codes before publication."],
    ["Sales enablement:", "first drafts of proposals and follow-up emails assembled from approved material, owned and sent by the salesperson."],
    ["Document processing:", "summaries and structured extracts of incoming documents for teams to review and act on."],
    ["Internal knowledge management:", "policy and procedure answers in plain English, linked to the source documents."],
    ["E-commerce:", "product titles, descriptions and attribute enrichment produced as new products arrive."],
    ["Business intelligence:", "narrative commentary on reports drafted from structured data, with every figure taken from the data rather than generated."],
    ["Software development workflows:", "drafting documentation, release notes and test descriptions for engineers to review. (Code-assistance tooling is assessed per project.)"],
    ["HR and recruitment administration:", "drafting job descriptions and standard correspondence, with no automated decisions about candidates."],
    ["Customer experience:", "personalised communications generated from approved templates and customer data, with consent and preference rules applied."],
    ["Enterprise operations:", "handover notes, incident summaries and meeting actions produced from existing records."],
  ] as [string, string][],
};

export const INDUSTRIES = {
  note: "Typical applications and considerations. Suitability and regulatory requirements are assessed per project; no AI system makes an organisation compliant on its own.",
  items: [
    ["Healthcare:", "correspondence drafting and summarisation of administrative records, with clinical judgement kept with clinicians and health data handled under strict controls."],
    ["Financial services:", "document summaries and customer communication drafts, reviewed for accuracy and fair treatment before sending."],
    ["E-commerce and retail:", "catalogue content and campaign variants produced at the pace products arrive."],
    ["Education:", "course content and assessments drafted for educators, in line with Department for Education guidance on generative AI."],
    ["Logistics:", "exception summaries and customer delivery updates generated from operational data."],
    ["Real estate:", "property descriptions from listing data and summaries of tenancy documents."],
    ["Professional services:", "first drafts and document summaries for qualified staff to review and sign off."],
    ["Software and technology:", "in-product drafting and summarisation features, plus documentation support."],
    ["Manufacturing:", "summaries of inspection and maintenance reports, and drafting of standard operating procedures from existing material."],
  ] as [string, string][],
};

export const READY_MADE = {
  headers: ["Option", "Suits", "Watch for"],
  rows: [
    ["Ready-made AI assistant or built-in AI features", "Individuals drafting, brainstorming and summarising; tasks inside one product that already offers AI", "Inconsistent output, no audit trail, data handling set by the vendor"],
    ["Simple API integration", "One well-defined feature with low risk, such as a rewrite button", "Grows messy as more features, checks and data sources are added"],
    ["Custom generative AI application", "High-volume or important content, proprietary data, several systems, custom review and permissions", "Needs evaluation, monitoring and maintenance over time"],
  ],
  outro: "Custom development is justified when the content matters enough to need agreed standards, consistent checks, integration with your data and systems, role-based permissions, a record of how each output was produced, and control over models and hosting. If a ready-made tool already does the job well enough for your risk level, it is usually the better choice.",
};

export const PROCESS = [
  { title: "Discovery and requirements", text: "Understand the content, who produces and approves it today, the volume and what \"good\" looks like." },
  { title: "Use-case validation and feasibility", text: "Test current models on real samples to check quality, cost per item and risks, and decide whether to proceed." },
  { title: "Content standards and data strategy", text: "Write the output standard: tone, structure, length, mandatory elements and prohibited content. Identify the approved source data and its rights and access rules." },
  { title: "Solution architecture", text: "Design inputs, templates, retrieval, checks, review workflow, integrations, logging and hosting." },
  { title: "Model selection and integration", text: "Benchmark candidate models and choose on quality, cost, speed and data handling." },
  { title: "Application and back-end development", text: "Build the pipeline, review interface and integrations in two-week sprints with weekly demos." },
  { title: "Testing and evaluation", text: "Measure output against the standard on a representative test set, using automated checks and reviewer scoring." },
  { title: "Security and governance review", text: "Review access controls, data handling, provider terms, prompt injection defences and approval rules." },
  { title: "Production deployment", text: "Release to a limited group, monitor closely, then widen use." },
  { title: "Monitoring and continuous improvement", text: "Track approval rates, edits, failures and cost per item, and refine templates, checks and models as standards evolve." },
];
export const PROCESS_OUTRO = "We offer fixed-price and time-and-materials engagements, with a scoped estimate and milestones after discovery.";

// VERIFY (owner action 3): whether ClickMasters advises on rights in generated
// content or only flags it; a data protection adviser should review this section.
export const SECURITY = [
  { icon: "alert", title: "Hallucination and accuracy", text: "Language models can produce fluent statements that are false. We reduce the risk by drawing facts from approved sources, using functions for figures, checking outputs against source material and keeping human review where accuracy matters. No generative system is error-free, so the review level should match the consequence of an error." },
  { icon: "privacy", title: "Data privacy", text: "Inputs, outputs and logs can contain personal data, which remains subject to UK GDPR. Data is minimised, access is controlled, and each model provider's retention and training terms are reviewed before your data is sent. Open-weight models can be hosted in your own cloud account where data must not leave it. Call and meeting transcripts need recording notices, retention periods and access controls agreed before go-live." },
  { icon: "key", title: "Access controls and authentication", text: "Users and services authenticate, and role-based permissions decide who can generate, review, approve and see which content and data." },
  { icon: "shield", title: "Prompt injection", text: "Documents, emails and user input can contain instructions designed to manipulate a model. Such input is treated as untrusted, kept separate from system instructions and never allowed to change what the system is permitted to do. We design against the OWASP Top 10 for LLM Applications." },
  { icon: "check", title: "Output validation", text: "Outputs are checked for structure, length, prohibited content and consistency with sources before anyone sees them." },
  { icon: "user", title: "Human oversight", text: "Customer-facing and published content goes to a reviewer with edit, approve and reject actions. Generative AI is not used to make significant decisions about individuals without meaningful human involvement." },
  { icon: "log", title: "Logging, monitoring and retention", text: "Each output is logged with its inputs, template version, model and review outcome, so you can see how any piece of content was produced, with logs kept only as long as your policy requires." },
  { icon: "scales", title: "Advertising, rights and responsible use", text: "Generated marketing copy must still meet the UK advertising codes (the CAP Code), so claims are checked before publication. We help you confirm you have the rights to the reference material and brand assets the system uses; the legal position on AI-generated content and training data is still developing, so take legal advice on important uses." },
  { icon: "target", title: "Assessing risk before deployment", text: "Before generative AI is used in an important workflow, we recommend assessing the consequence of a wrong output, who reviews it, what data it touches, and whether a Data Protection Impact Assessment is needed; we can supply the technical detail for one. This is technical support, not legal advice." },
];

export const WHY = {
  reasons: [
    ["Consistency:", "standards agreed in writing and enforced by checks, not left to individual prompts."],
    ["Your data, your context:", "outputs drawn from your approved sources and systems."],
    ["Built into your workflow:", "generation where your people already work, with review and approval steps."],
    ["Traceability:", "a record of how every output was produced."],
    ["Control over models and cost:", "model choice based on measured quality and cost per item, with private hosting options."],
  ] as [string, string][],
  approach: [
    { icon: "doc", title: "Standards before code", text: "Output standards agreed with the people who own the content." },
    { icon: "test", title: "Measured on your content", text: "Prompts and models tested on samples of your real inputs." },
    { icon: "user", title: "Human approval designed in", text: "For published and customer-facing content." },
    { icon: "layers", title: "Model-agnostic", text: "Commercial and open-weight text, speech and image models." },
    { icon: "team", title: "AI and software engineering in one team", text: "Pipelines, review interfaces and integrations built together, with integration experience across Salesforce, SAP ERP, ServiceNow, HubSpot, Microsoft Dynamics, Oracle Cloud and Jira." },
    { icon: "calendar", title: "Transparent delivery", text: "Two-week sprints, weekly demos, NDAs on request and support after launch." },
  ],
};

export const FAQS: { q: string; a: string[] }[] = [
  { q: "What is generative AI development?", a: ["Generative AI development is the design and engineering of software that uses generative models to create, summarise, transform and structure content, such as text, transcripts and images, as part of a business workflow, with prompt templates, approved data, quality checks, review steps and monitoring."] },
  { q: "What do generative AI development services include?", a: ["Typically use-case assessment, output standards, model selection, prompt and pipeline development, integration with your data and systems, review workflows, evaluation, security review, deployment and ongoing monitoring of quality and cost."] },
  { q: "How can businesses use generative AI?", a: ["Common uses include drafting product and marketing content, summarising documents and meetings, transforming content for different audiences, generating image variants, suggesting customer replies and adding drafting features to existing software, usually with a person reviewing anything important."] },
  { q: "What is the difference between generative AI and traditional AI?", a: ["Traditional, or predictive, AI typically classifies, scores or forecasts, for example predicting demand or detecting fraud. Generative AI produces new content, such as text or images. Many systems use both."] },
  { q: "What is the difference between generative AI and AI agents?", a: ["Generative AI produces content. An AI agent pursues a goal by planning steps and using tools, such as looking up records or updating systems, within defined permissions. An agent usually uses a generative model to reason and write, but adds actions and the controls they require."] },
  { q: "Can generative AI be integrated with existing business software?", a: ["Yes. Generative features can be added to existing applications, portals and internal tools through APIs, with access to your data controlled by the same permissions your users already have."] },
  { q: "What is the difference between RAG and fine-tuning?", a: ["RAG supplies relevant information from your sources to the model at the moment it generates, which keeps facts current and traceable. Fine-tuning adapts the model through additional training, which helps with consistent tone, format and terminology. Many systems combine both."] },
  { q: "Is generative AI suitable for enterprise applications?", a: ["Yes, where outputs are checked, data access is controlled, provider terms are understood and people stay accountable for important content. Enterprises need the strongest governance, logging and evaluation, designed in from the start."] },
  { q: "How much does custom generative AI development cost?", a: ["Cost depends on the content types, volumes, number of integrations, data preparation, the review workflow, evaluation depth, model and hosting choices, and ongoing monitoring. We provide a fixed-price or time-and-materials estimate with milestones once the use case is scoped."] },
  { q: "How long does it take to build a generative AI application?", a: ["It depends mainly on how well defined the content standard is, the condition of the source data, the number of systems involved and the level of review and testing the risk requires. Starting with one well-defined content task is the fastest route to a reliable first release."] },
];

export const FINAL_CTA = {
  title: "Show Us the Content You Produce.",
  titleAccent: "We Will Show You What Can Be Generated.",
  body: {
    text: "Send a few examples of the content you produce, the inputs behind each piece and the standards it must meet. We will test current models on them, show you the quality and cost per item you could expect, and outline a controlled pipeline with the checks and review steps it would need. We usually respond within a few hours.",
  },
  bring: ["Examples of good output", "The inputs each piece starts from", "Who reviews and approves content today", "Volumes and systems involved", "Data and hosting requirements"],
};

export const SCHEMA_SERVICE = {
  name: "Generative AI Development",
  alternateName: "Custom Generative AI Application Development",
  serviceType: ["Generative AI development", "Generative AI application development", "Generative AI integration services"],
  description:
    "Design and engineering of generative AI applications and pipelines that draft, summarise, transform and generate text, transcripts and images to agreed standards, using approved data, versioned prompt templates, automated checks and human review.",
  relatedServicePath: "/services/ai-development",
};

type OgTone = "plain" | "purple" | "teal" | "sun";
/** Social sharing image content (used by ./opengraph-image.tsx). */
export const OG: { title: string; accent: string; rows: [string, OgTone][][] } = {
  title: "Generative AI Development",
  accent: "Consistent output, not just demos",
  rows: [
    [["Inputs", "plain"], ["Approved data", "teal"]],
    [["Template → Model", "purple"]],
    [["Automated checks", "teal"]],
    [["Human approval", "sun"]],
  ],
};
