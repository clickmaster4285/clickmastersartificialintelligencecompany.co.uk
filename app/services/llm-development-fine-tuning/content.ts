/*
 * /services/llm-development-fine-tuning content, from
 * "ClickMasters LLM Development & Fine-Tuning Services: SEO Content Pack"
 * (25 Nov 2026). Edit copy here; ./page.jsx only renders it. (This page no
 * longer uses the shared AiServicePage template: the pack needs extra section
 * types and exactly four body links, so the template's cards are gone.)
 *
 * VERIFY comments mark business facts the pack says need owner confirmation.
 * Body links: exactly the pack's four (CTAs, breadcrumb, header and footer
 * are template elements).
 */

export const PATH = "/services/llm-development-fine-tuning";

export const SEO = {
  // Rendered as "LLM Fine-Tuning & Development Services UK | ClickMasters" (56 chars).
  title: "LLM Fine-Tuning & Development Services UK",
  // The pack's wording, shortened to stay within 155 characters.
  description:
    "LLM fine-tuning and development for UK organisations: models adapted to your terminology, tasks and output formats, proven against a baseline.",
  ogTitle: "LLM Fine-Tuning | ClickMasters",
  ogDescription:
    "Language models adapted to your tasks, terminology and formats, benchmarked against a baseline and deployed where your data rules allow.",
};

export type LinkedText = { text: string; link?: { anchor: string; href: string } };

const IMG = "/assets/Services/llm";

/**
 * Diagrams drawn for this page (alt text from the pack's image table; the
 * scorecard is illustrative) and photos from Unsplash (Unsplash License: free
 * for commercial use, no attribution required; credits kept for reference).
 */
export const IMAGES = {
  hero: {
    src: `${IMG}/llm-baseline-to-tuned-model.png`, width: 1080, height: 800,
    alt: "Diagram: baseline benchmark, curated data, LoRA fine-tuning and evaluation leading to a tuned model",
  },
  compare: {
    src: `${IMG}/prompting-rag-fine-tuning-comparison.png`, width: 1720, height: 560,
    alt: "Diagram comparing prompt engineering, RAG and fine-tuning by what each one changes",
  },
  lora: {
    src: `${IMG}/lora-adapter-diagram.png`, width: 1720, height: 600,
    alt: "Diagram of a frozen base model with small trainable LoRA adapter matrices added to selected layers",
  },
  data: {
    src: `${IMG}/llm-training-data-pipeline.png`, width: 1720, height: 420,
    alt: "Diagram of a training data pipeline: collect, label, clean, format, split and version examples",
  },
  scorecard: {
    src: `${IMG}/llm-evaluation-scorecard.png`, width: 1720, height: 640,
    alt: "Illustrative scorecard comparing a prompted baseline with a fine-tuned model on four metrics",
  },
  deployment: {
    src: `${IMG}/llm-private-deployment.png`, width: 1720, height: 560,
    alt: "Diagram of a fine-tuned open-weight model served in a private cloud network via an authenticated API",
  },
  // Photo: Brecht Corbeel (unsplash.com/photos/28jfmTAiLdI)
  board: {
    src: `${IMG}/llm-motherboard-processor.webp`, width: 960, height: 640,
    alt: "Close-up render of a computer motherboard with a central processor and illuminated circuit traces",
  },
  // Photo: Winston Chen (unsplash.com/photos/iZe21DzHnUg)
  fans: {
    src: `${IMG}/llm-server-cooling-fans.webp`, width: 960, height: 640,
    alt: "Rows of server cooling fans and coolant pipes in a data centre lit in purple and blue",
  },
  // Photo: Taylor Vick (unsplash.com/photos/aWslrFhs1w4)
  datacentre: {
    src: `${IMG}/llm-data-centre-hall.webp`, width: 1080, height: 607,
    alt: "A data centre hall with server cabinets beneath overhead cable trays carrying blue network cables",
  },
} as const;

export const HERO = {
  eyebrow: "LLM Fine-Tuning UK",
  title: "LLM Fine-Tuning Services UK:",
  titleAccent: "Models Built Around Your Tasks",
  lead:
    "Our LLM fine-tuning and development services give UK businesses language models that behave the way the business needs. General-purpose language models are trained to be good at everything for everyone. That is exactly why they fall short on the narrow, repeated tasks businesses depend on: they misread sector terminology, drift from your house style, return structured output that changes shape between requests, or cost more per request than a narrow task justifies.",
  audience:
    "ClickMasters adapts large language models to your tasks. We benchmark what existing models can already do with good prompting, fine-tune only when the evidence says it will help, prove the result against a held-out test set, and deploy the model where your data rules allow, including privately hosted open-weight models.",
  stats: [
    { value: "Prompt first", label: "Fine-tune only when it is justified" },
    { value: "Parameter-efficient", label: "LoRA and related methods" },
    { value: "Proven against a baseline", label: "On your held-out examples" },
    { value: "Private hosting", label: "Open-weight models in your cloud" },
  ],
};

// Body link 1 of 4 (in p2).
export const WHAT_IS = {
  p1: "A **large language model (LLM)** is a neural network, usually based on the transformer architecture, trained on very large amounts of text to predict the next piece of text in a sequence. Through that training it learns grammar, facts, reasoning patterns and styles of writing. Most models businesses use have then been further trained to follow instructions and hold conversations.",
  p2: {
    text: "LLM development is the work of turning one of those models into a dependable part of a business process. It covers choosing the model, designing prompts and output formats, adapting the model through fine-tuning where needed, evaluating it against real tasks, and deploying, securing and monitoring it. It is one specialist strand of our wider [[link]], focused on the model itself: how it behaves, how well it performs a defined task and where it runs.",
    link: { anchor: "AI development services", href: "/services/ai-development" },
  } as LinkedText,
  sub: [
    { title: "Using a model API vs building a custom LLM application", text: "Calling a commercial model through an API with a well-written prompt is often the fastest route, and for many tasks it is enough. A custom LLM application adds what the API alone does not provide: task-specific evaluation, structured output validation, integration with your systems, cost and latency control, and, where justified, a model adapted to your own examples." },
    { title: "Adapting an existing model vs pre-training from scratch", text: "Pre-training a foundation model from scratch requires vast datasets, specialist infrastructure and a research-scale budget. For almost every business need it is unnecessary. Adapting a capable existing model, commercial or open-weight, through prompting and fine-tuning achieves the task-specific behaviour organisations need at a fraction of the cost and risk, and that is the work we do." },
  ],
};

export const WHEN = {
  intro: "Fine-tuning changes how a model behaves. It is worth considering when, after careful prompting, a model still:",
  signs: [
    ["Misreads domain language:", "sector terms, product codes or internal abbreviations are misunderstood or used inconsistently."],
    ["Drifts from a required style:", "drafts need heavy editing to match a regulated or brand-specific tone."],
    ["Produces unreliable structure:", "JSON or field formats vary between requests and break downstream systems."],
    ["Costs too much at volume:", "a large hosted model handles a narrow task that a smaller tuned model could do more cheaply."],
    ["Must run privately:", "the task needs a model hosted inside your own environment, and a smaller open-weight model needs adapting to match the quality of a larger one."],
  ],
  not: "Fine-tuning is usually the wrong first step when the problem is missing or changing knowledge, when the task is poorly defined, or when there are no good examples of correct output yet. In those cases, better prompts, retrieval or clearer requirements come first.",
};

export const COMPARE = {
  headers: ["", "Prompt engineering", "Retrieval-augmented generation (RAG)", "Fine-tuning"],
  rows: [
    ["What it changes", "The instructions and examples sent with each request", "The information supplied to the model at response time", "The model's weights, through additional training"],
    ["Best for", "Well-defined tasks a capable model can already do", "Answering from your documents and data, especially when they change", "Consistent behaviour, style, terminology, format or narrow task performance"],
    ["What you need", "Clear instructions and a few good examples", "An organised, permissioned content collection", "A curated set of representative input-output examples"],
    ["Updating it", "Edit the prompt", "Re-index changed content", "Retrain on new examples"],
    ["Typical trade-off", "Longer prompts add cost and latency per request", "Answer quality depends on retrieval quality", "Upfront data and training effort; not a way to add changing facts"],
  ],
  // Body link 2 of 4.
  outro: {
    text: "The three are complementary rather than competing. A common production pattern is a fine-tuned model for reliable format and tone, retrieval for current facts, and prompts that tie the two together. If your challenge is grounding answers in your own documents, our [[link]] cover retrieval, document ingestion and citations in depth.",
    link: { anchor: "RAG development services", href: "/services/rag-development" },
  } as LinkedText,
};

// VERIFY: whether provider-hosted fine-tuning on commercial platforms is offered (see TECHNIQUES).
export const SERVICES = [
  { icon: "benchmark", title: "Model selection and benchmarking", text: "We test current commercial and open-weight models on a sample of your real tasks, with careful prompting, and score them for accuracy, consistency, latency and cost per request. This baseline decides whether fine-tuning is needed at all." },
  { icon: "target", title: "Fine-tuning for task performance and consistency", text: "Supervised fine-tuning on curated examples so the model follows your terminology, tone and output structure on a defined task." },
  { icon: "compress", title: "Smaller, cheaper task-specific models", text: "Adapting a compact open-weight model so a narrow, high-volume task no longer needs a large general model, measured on accuracy as well as cost." },
  { icon: "lock", title: "Private and self-hosted models", text: "Fine-tuning and serving open-weight models such as Llama and Mistral inside your own AWS or Azure account, for workloads where data must not leave your environment." },
  { icon: "chart", title: "Evaluation and improvement of existing models", text: "Building evaluation sets and regression tests for models you already use, and diagnosing why outputs are inconsistent or degrading." },
  { icon: "plug", title: "Integration into applications and workflows", text: "Wrapping the model in validation, logging and APIs so it can be used safely by your CRM, workflow engine, product or internal tools." },
];

// VERIFY: hands-on experience with QLoRA, preference optimisation, domain adaptation (copy hedges them).
export const TECHNIQUES = {
  intro: "No single method suits every model, task or budget. We choose based on the task, the data available, the base model's licence and where the model must run.",
  items: [
    { title: "Supervised fine-tuning (SFT)", text: "The model is trained on pairs of inputs and the outputs you want. Instruction fine-tuning is SFT in which the inputs are instructions or questions and the outputs are ideal responses. SFT is the core technique for teaching a model a task, format or style. Its results depend directly on the quality and consistency of the examples." },
    { title: "Parameter-efficient fine-tuning (PEFT)", text: "Rather than updating all of the model's weights, PEFT methods keep the original model frozen and train a small number of additional parameters. This sharply reduces the compute and memory needed, and lowers the risk of the model losing general abilities it already had." },
    { title: "LoRA (low-rank adaptation)", text: "LoRA, the PEFT method we use most often, adds small low-rank matrices to selected layers of the model and trains only those. The result is a compact adapter that sits alongside the unchanged base model. Adapters are small to store, quick to train, and several can be maintained for different tasks on the same base model." },
    { title: "QLoRA (quantised LoRA)", text: "QLoRA combines LoRA with a base model loaded in a compressed, lower-precision (quantised) form during training, which further reduces memory requirements and makes larger models trainable on more modest hardware. It adds some configuration complexity, and results should be checked against a standard LoRA run where quality is critical. We assess it per project." },
    { title: "Full fine-tuning", text: "Updating every weight in the model can extract more performance on some tasks, but it needs far more compute, produces a full-sized copy of the model, and carries a higher risk of degrading general capabilities. It is rarely our first choice." },
    { title: "Domain adaptation", text: "Continued training on large amounts of unlabelled text from your domain can help a model absorb very specialised vocabulary. It is heavier than task fine-tuning and only justified when prompting and SFT cannot cope with the language involved." },
    { title: "Preference optimisation", text: "Methods such as direct preference optimisation train a model on pairs of preferred and rejected responses, which can refine qualities that are hard to specify with single examples, such as tone or helpfulness. They need carefully collected comparison data and are assessed per project rather than used by default." },
    { title: "Hosted fine-tuning on commercial models", text: "Some commercial model providers offer fine-tuning of selected models through their own platforms. This avoids managing infrastructure, but the model stays on the provider's platform and the provider's data and retention terms apply, so we review them with you first." },
  ],
};

export const DATA = {
  intro: "In fine-tuning, the training data is the specification. A model trained on inconsistent examples learns inconsistency.",
  steps: [
    ["Collection:", "representative examples of real inputs and correct outputs, drawn from your historical work, reviewed by subject experts, or written for the purpose."],
    ["Labelling guidelines:", "written rules for what a correct output looks like, so different reviewers label consistently."],
    ["Cleaning and deduplication:", "removing errors, near-duplicates and examples that contradict each other."],
    ["Coverage:", "including edge cases, difficult inputs and examples where the right answer is \"unknown\" or \"not applicable\"."],
    ["Formatting:", "converting examples into the conversation or instruction format the chosen model expects."],
    ["Splits:", "separate training, validation and held-out test sets, with care that near-identical examples do not leak between them."],
    ["Sensitive data:", "minimising and, where possible, pseudonymising personal data before training, with the lawful basis documented with your data protection officer."],
    ["Versioning:", "every dataset version recorded, so any model can be traced back to the exact data it was trained on."],
  ],
  note: "How much data is needed depends on the task, its complexity and the base model. Parameter-efficient methods can work from a modest set of high-quality examples, but there is no universal number; the baseline benchmark and early training runs show whether your data is sufficient before significant effort is spent.",
};

export const EVALUATION = {
  intro: "A fine-tuned model is only better if it is measurably better on your task than the prompted baseline it replaces.",
  measureTitle: "What we measure",
  measure: [
    ["Task accuracy:", "using metrics suited to the task, such as accuracy for classification or field-level precision and recall for extraction."],
    ["Format compliance:", "the share of outputs that validate against your required schema."],
    ["Consistency:", "whether similar inputs produce similarly correct outputs."],
    ["Instruction following and output quality:", "scored against a written rubric."],
    ["Retained general ability:", "checks that the model has not lost capabilities your workflow still relies on."],
    ["Latency and cost per request:", "at expected production volumes."],
  ],
  howTitle: "How we measure it",
  how: "Every candidate model is run on the same held-out test set as the baseline. Automated metrics are combined with human review by your subject experts on a sample, and where automated model-based scoring is used, it is calibrated against those human judgements. The results form a go or no-go decision: if the tuned model does not beat the baseline on what matters to you, it does not ship.",
  afterTitle: "After deployment",
  after: "The test set becomes a regression suite, re-run before every model, prompt or data change. Production monitoring watches output quality, format failures and drift as your tasks and terminology evolve.",
  honest: "No method guarantees a particular improvement. The point of evaluation is to know, rather than assume, what the model can do.",
};

export const USE_CASES: { note: string; items: { icon: string; title: string; text: LinkedText }[] } = {
  note: "Illustrative applications. Each would be evaluated on your own examples; they are not client case studies.",
  items: [
    // Body link 3 of 4.
    {
      icon: "route", title: "Classification and routing",
      text: {
        text: "Assigning categories, priorities or risk levels to tickets, claims, applications or messages consistently. For some high-volume classification tasks a smaller dedicated language-processing model can be more efficient than an LLM; our [[link]] work covers those pipelines, and we compare both approaches on your data.",
        link: { anchor: "NLP development", href: "/services/nlp-development" },
      },
    },
    { icon: "extract", title: "Structured data extraction", text: { text: "Pulling defined fields from contracts, invoices, statements or forms and returning output that always matches the schema your systems expect." } },
    { icon: "scales", title: "Financial and legal document processing", text: { text: "Reading agreements and financial documents with correct handling of specialist terms, with outputs checked by qualified people where decisions depend on them." } },
    { icon: "edit", title: "Drafting in an approved style", text: { text: "Letters, summaries and responses written in a consistent tone and structure for regulated or brand-sensitive communication, with human approval before anything is sent." } },
    { icon: "chat", title: "Domain-specific assistants", text: { text: "Assistants that use your sector's language correctly and respond in your organisation's format, often combined with retrieval for current facts." } },
    { icon: "support", title: "Customer support responses", text: { text: "Suggested replies that follow your support policies and tone, for agents to review and send." } },
    { icon: "flow", title: "Internal workflow automation", text: { text: "Narrow language tasks inside larger workflows, such as summarising case notes, normalising free-text entries or generating structured handover notes." } },
  ],
};

// VERIFY: quantised serving and multi-adapter serving (copy hedges them: "where quality allows" / "where the serving setup supports it").
export const DEPLOYMENT = {
  options: [
    ["Managed model endpoints:", "the simplest route for commercial models or provider-hosted fine-tunes."],
    ["Self-hosted open-weight models:", "served in containers inside a dedicated private cloud network on AWS or Azure, so prompts and outputs stay within your environment."],
    ["Adapters on a shared base model:", "several LoRA adapters for different tasks served on one base model where the serving setup supports it."],
  ],
  blocks: [
    { title: "Optimisation", text: { text: "Serving choices affect cost and speed as much as the model does. Smaller tuned models, efficient batching and, where quality allows, lower-precision (quantised) serving can reduce cost per request and latency. Every optimisation is re-tested against the evaluation set before release." } as LinkedText },
    { title: "Versioning, monitoring and retraining", text: { text: "Each model version is recorded with its training data, settings and evaluation results, with a rollback plan for every release. Monitoring tracks quality, format failures, latency and cost, and a retraining cycle incorporates new examples as tasks change." } as LinkedText },
    // Body link 4 of 4.
    {
      title: "Integration",
      text: {
        text: "A model is only useful inside a process. We add input validation, output schema checks, logging and fallbacks, and connect the model to your applications through APIs. Where the model needs a complete product around it, our [[link]] covers the full application, from interface to integrations.",
        link: { anchor: "custom AI application development", href: "/services/custom-ai-development" },
      } as LinkedText,
    },
  ],
  stackTitle: "Our LLM technology stack",
  stack: [
    ["Training", "Python, PyTorch, Hugging Face Transformers, LoRA and PEFT"],
    ["Models", "Open-weight models such as Llama and Mistral; commercial models such as OpenAI's GPT family and Anthropic's Claude"],
    ["Experiment tracking and MLOps", "Weights & Biases, MLflow"],
    ["Hosting", "AWS, Microsoft Azure, Docker"],
  ],
  stackNote: "We benchmark current model versions at the start of each project, because releases change quickly.",
};

export const SECURITY = [
  { icon: "privacy", title: "Training data protection", text: "Personal data minimised and pseudonymised where possible before training. Under UK GDPR, the lawful basis and purpose are documented with your data protection officer, and we can supply technical detail for a Data Protection Impact Assessment. This is technical support, not legal advice." },
  { icon: "file", title: "Provider terms", text: "Each commercial provider's data retention and training terms are reviewed before any of your data is sent." },
  { icon: "server", title: "Private hosting", text: "Where data must not leave your environment, open-weight models are fine-tuned and hosted inside your own cloud account." },
  { icon: "licence", title: "Model licences", text: "Open-weight models come with their own licence terms, including acceptable-use conditions; we confirm a model's licence suits your intended use before training on it." },
  { icon: "lock", title: "Access control", text: "Model endpoints protected by authentication and role-based access, with requests logged." },
  { icon: "shield", title: "LLM-specific risks", text: "Systems designed against the OWASP Top 10 for LLM Applications, including prompt injection and insecure handling of model output." },
  { icon: "history", title: "Traceability", text: "Documentation of each model's base model, training data version, settings and evaluation results, so decisions can be explained and audited." },
];

export const PARTNER = {
  intro: "Questions worth asking any LLM development company before you commit:",
  questions: [
    "Will they benchmark prompting first and tell you if fine-tuning is unnecessary?",
    "How will they prove the tuned model beats the baseline on your task?",
    "Who reviews the training data, and how are labelling rules agreed?",
    "Where will the model run, and what happens to your data with each provider?",
    "How are models versioned, monitored and rolled back?",
    "Who owns the training data, adapters and code?",
  ],
  answers: [
    { icon: "benchmark", title: "Evidence before training", text: "A prompted baseline on your real tasks decides whether fine-tuning is worth doing." },
    { icon: "compress", title: "Parameter-efficient by default", text: "LoRA and related methods keep training cost and risk proportionate." },
    { icon: "chart", title: "Model-agnostic", text: "Commercial and open-weight models compared on accuracy, cost, latency and data requirements." },
    { icon: "server", title: "Private deployment options", text: "Open-weight models hosted in a dedicated private cloud network on AWS or Azure." },
    { icon: "plug", title: "AI and software engineering in one team", text: "Tuned models integrated into the applications and workflows that use them." },
    { icon: "support", title: "Transparent delivery", text: "Two-week sprints, weekly demos, NDAs on request and support after launch." },
  ],
};

export const FAQS: { q: string; a: string[] }[] = [
  { q: "What is LLM fine-tuning?", a: ["LLM fine-tuning is the process of training a pretrained language model further on curated examples of a specific task, so it learns your terminology, tone and output structure. Parameter-efficient methods such as LoRA train a small set of additional weights instead of the whole model."] },
  { q: "Can you explain how LLM fine-tuning works in practice?", a: ["We benchmark a prompted baseline on your real tasks, curate and label representative input-output examples, and split them into training, validation and held-out test sets. We then train, usually with a parameter-efficient method such as LoRA, compare the tuned model with the baseline on the held-out set, and deploy it only if it performs better on what matters to you."] },
  { q: "When should we fine-tune instead of improving our prompts?", a: ["When careful prompting still leaves the model inconsistent, misreading domain language, failing to follow a required format, or too expensive for a high-volume task. We benchmark the prompted baseline first, so the decision is based on measured results."] },
  { q: "Should we fine-tune an LLM or use RAG?", a: ["Use retrieval-augmented generation when the model must answer from documents or data that change. Use fine-tuning when you need consistent behaviour, style, terminology or format. Many systems combine both: retrieval for facts and a tuned model for reliable output."] },
  { q: "What is the difference between LoRA and QLoRA?", a: ["LoRA trains small adapter matrices added to a frozen base model. QLoRA does the same while holding the base model in a compressed, lower-precision form during training, which reduces memory needs and makes larger models trainable on smaller hardware, at the cost of extra configuration and a need to verify quality."] },
  { q: "How much training data does fine-tuning need?", a: ["There is no universal figure. It depends on the task, its difficulty and the base model. Parameter-efficient fine-tuning can work from a modest set of high-quality, consistent examples, and quality matters more than volume. The baseline benchmark and early runs show whether your data is enough."] },
  { q: "Do we need to train our own model from scratch?", a: ["Almost certainly not. Pre-training a foundation model requires vast data and compute. Adapting an existing commercial or open-weight model through prompting and fine-tuning meets nearly all business needs at far lower cost and risk."] },
  { q: "Can a fine-tuned model run privately in our own cloud?", a: ["Yes. Open-weight models such as Llama and Mistral can be fine-tuned and served inside your own AWS or Azure account, so prompts and data remain within your environment, subject to each model's licence terms."] },
  { q: "Will fine-tuning make the model more accurate?", a: ["Not automatically. Fine-tuning can improve task performance and consistency when the examples are good and the task is well defined, but it can also make little difference or degrade other abilities. That is why every tuned model is compared with the baseline on a held-out test set before it is used."] },
  { q: "Can a fine-tuned model learn our company's knowledge?", a: ["Fine-tuning can teach terminology and patterns, but it is not a reliable way to store facts that change, such as prices or policies, and it cannot cite sources. For factual knowledge, retrieval is the better approach, and the two can be combined."] },
  { q: "How do you keep a fine-tuned model performing over time?", a: ["The held-out test set becomes a regression suite, production outputs are monitored for quality and format failures, and the model is retrained on new examples as tasks and terminology change, with every version recorded and reversible."] },
  { q: "What affects LLM fine-tuning cost?", a: ["Cost depends on the task, the amount of data preparation and labelling, the base model and training method, the number of evaluation cycles, hosting choices and ongoing monitoring. We provide a fixed-price or time-and-materials estimate with milestones once the task and data are understood."] },
];

export const FINAL_CTA = {
  title: "Not Sure Whether to Fine-Tune?",
  titleAccent: "We Will Benchmark It First.",
  body: {
    text: "Send us a description of the task, some real examples and the output you expect. We will test current models with careful prompting and tell you whether prompting, retrieval, fine-tuning or a combination is the right route, before any training budget is committed.",
  } as LinkedText,
  bring: ["A description of the task", "Real examples of inputs and correct outputs", "The output format you need", "Volume and latency expectations", "Hosting or data restrictions"],
};

export const SCHEMA_SERVICE = {
  name: "LLM Development & Fine-Tuning",
  alternateName: "Large Language Model Fine-Tuning",
  serviceType: ["Large language model development", "LLM fine-tuning", "LoRA fine-tuning"],
  description: SEO.description,
  relatedServicePath: "/services/ai-development",
};

type OgTone = "plain" | "purple" | "teal" | "sun";
/** Social sharing image content (used by ./opengraph-image.tsx). */
export const OG: { title: string; accent: string; rows: [string, OgTone][][] } = {
  title: "LLM Fine-Tuning",
  accent: "Models that behave as you need",
  rows: [
    [["Tuned model (LoRA)", "purple"]],
    [["Baseline", "plain"], ["Train", "plain"], ["Evaluate", "plain"]],
    [["Curated examples", "teal"], ["Held-out tests", "teal"]],
    [["Private cloud hosting", "sun"]],
  ],
};
