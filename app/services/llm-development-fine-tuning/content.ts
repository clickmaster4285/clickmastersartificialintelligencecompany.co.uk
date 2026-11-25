import type { AiServicePageContent } from "../../lib/ai-service-page";

/*
 * /services/llm-development-fine-tuning. Expanded from the "Large Language
 * Model (LLM) Development and Fine-Tuning" section of /services/ai-development.
 */
export const CONTENT = {
  slug: "llm-development-fine-tuning",
  name: "LLM Development & Fine-Tuning",
  seo: {
    title: "LLM Fine-Tuning & Development Services UK",
    description:
      "LLM development and fine-tuning for UK businesses: LoRA training, evaluation and private hosting so models follow your terminology and format. Get a quote.",
  },
  schema: {
    alternateName: "Large Language Model Fine-Tuning",
    serviceType: ["Large language model development", "LLM fine-tuning"],
    description:
      "Benchmarking, fine-tuning, evaluation and deployment of large language models adapted to an organisation's terminology, tone, tasks and output formats, including privately hosted open-weight models.",
  },
  hero: {
    eyebrow: "LLM Fine-Tuning UK",
    title: "LLM Development and Fine-Tuning Services UK",
    titleAccent: "for Consistent, Domain-Aware Output",
    lead:
      "We adapt large language models to your terminology, tone, output formats and tasks. Where prompting alone is not enough, we fine-tune with parameter-efficient methods such as LoRA, prove the gain against a held-out evaluation set, and deploy the tuned model where your data rules allow.",
    audience:
      "For teams whose general-purpose model misreads sector terms, ignores house style, returns inconsistent structured output or costs too much per request at volume.",
    stats: [
      { value: "Prompt first", label: "Fine-tune only if justified" },
      { value: "LoRA", label: "Parameter-efficient training" },
      { value: "Held-out tests", label: "Measured against baseline" },
      { value: "Private hosting", label: "Open-weight options" },
    ],
    figureLabel: "From baseline to tuned model",
    flow: [
      { title: "Benchmark the baseline", text: "Current models with good prompts, on your real tasks." },
      { title: "Curate training data", text: "Labelled examples plus a separate evaluation set." },
      { title: "Fine-tune efficiently", text: "LoRA adapters instead of full retraining." },
      { title: "Compare and deploy", text: "Accuracy, latency and cost per request, then version and ship." },
    ],
    figcaption: "A tuned model ships only if it beats the baseline on your evaluation set.",
  },
  overview: {
    heading: "What Is LLM Fine-Tuning?",
    paragraphs: [
      "Fine-tuning takes a pretrained large language model and trains it further on curated examples of the task you need, so it learns your terminology, tone and output structure. Parameter-efficient methods such as LoRA (low-rank adaptation) update a small set of additional weights rather than the whole model, which keeps training cost and time far below full retraining.",
      "Fine-tuning shapes behaviour and format. It is not the best way to keep a model current with facts that change often; that is the job of [retrieval-augmented generation](/services/rag-development), which looks information up at question time. Many production systems combine the two: a tuned model for reliable format and tone, and retrieval for up-to-date facts.",
      "LLM work is one part of our wider [AI development services](/services/ai-development). It often starts as a prompting exercise and only becomes a fine-tuning project when the evidence shows prompting cannot reach the accuracy, consistency or cost you need.",
    ],
  },
  problems: {
    heading: "Problems LLM Fine-Tuning Solves",
    intro: "General-purpose models are impressive, but they are trained for everyone. These are the gaps that usually justify adapting one.",
    items: [
      { title: "Misread domain terminology", text: "Sector terms, product codes and internal abbreviations are misunderstood or used inconsistently." },
      { title: "Ignored house style", text: "Drafts need heavy editing to match a regulated or brand-specific tone of voice." },
      { title: "Unreliable structured output", text: "JSON or field formats vary between requests, breaking the downstream systems that consume them." },
      { title: "High cost per request", text: "Large hosted models are expensive at volume when a smaller tuned model could do the same narrow task." },
    ],
  },
  applications: {
    heading: "Practical Applications",
    intro: "Fine-tuning suits narrow, repeated tasks with a clear definition of correct output.",
    items: [
      { title: "Classification and extraction", text: "Reading contracts, claims and tickets and returning the right category and fields every time." },
      { title: "Drafting in a house style", text: "Letters, summaries and responses written in a consistent, approved tone for regulated sectors." },
      { title: "Reliable JSON for systems", text: "Output that always matches the schema your CRM, ERP or workflow engine expects." },
      { title: "Private, smaller models", text: "Compact open-weight models hosted in your own cloud account for sensitive workloads." },
      { title: "Lower-cost high-volume tasks", text: "A tuned smaller model replacing a large general model on one repetitive task." },
    ],
  },
  process: {
    heading: "How We Develop and Fine-Tune LLMs",
    intro: "Every step is measured, so the decision to fine-tune, and the decision to ship the result, rests on evidence from your own data.",
    steps: [
      { title: "Baseline benchmark", text: "Test current commercial and open-weight models with careful prompting on a sample of your real tasks.", output: "Baseline scores for accuracy, latency and cost" },
      { title: "Dataset curation", text: "Build a labelled training set and a separate held-out evaluation set, reviewed by your subject experts.", output: "Versioned training and evaluation datasets" },
      { title: "Training", text: "Fine-tune with LoRA or similar methods, tracking every run and its settings for reproducibility.", output: "Candidate models with experiment logs" },
      { title: "Evaluation", text: "Compare tuned models against the baseline on accuracy, format compliance, latency and cost per request.", output: "Evaluation report and go/no-go decision" },
      { title: "Deployment", text: "Version the chosen model and serve it through a managed endpoint or inside your own cloud network.", output: "Production endpoint and rollback plan" },
      { title: "Retraining cycle", text: "Monitor output quality and drift, then retrain on new examples as tasks and terminology change.", output: "Monitoring and retraining schedule" },
    ],
  },
  tech: {
    heading: "Technologies for LLM Development",
    intro: "We work with commercial model APIs and open-weight models, and benchmark current versions at the start of each project because releases move quickly.",
    groups: [
      { title: "Training", items: ["Python", "PyTorch", "Hugging Face Transformers", "LoRA / PEFT"] },
      { title: "Models", items: ["Llama & Mistral open-weight models", "Commercial model APIs"] },
      { title: "MLOps & hosting", items: ["Weights & Biases", "MLflow", "AWS", "Docker"] },
    ],
  },
  compliance: {
    heading: "UK Data Protection for Training Data",
    paragraphs: [
      "Training examples often contain personal data. Under UK GDPR we minimise and, where possible, pseudonymise it before training, and document the lawful basis with your data protection officer.",
      "We review each model provider's retention and training terms. Where data must not leave your environment, we fine-tune and host open-weight models inside your own cloud account.",
    ],
  },
  industries: {
    heading: "Where Fine-Tuned Models Help Most",
    intro: "Sectors with specialist language and strict output requirements gain the most from a tuned model.",
    items: [
      { href: "/industries/finance", title: "Finance & Fintech", text: "Consistent extraction from statements and agreements, and drafting that follows approved wording." },
      { href: "/industries/healthcare", title: "Healthcare & MedTech", text: "Clinical terminology handled correctly in summarisation and coding support, with privately hosted models." },
    ],
  },
  related: {
    heading: "Related AI Services",
    intro: "Fine-tuned models rarely work alone. These services are the most common companions.",
    items: [
      { href: "/services/ai-development", title: "AI Development Services", text: "The full AI lifecycle, from discovery to monitored production." },
      { href: "/services/rag-development", title: "RAG Development", text: "Keep answers current by retrieving facts instead of retraining." },
      { href: "/services/nlp-development", title: "NLP Development", text: "Classification, extraction and redaction pipelines at volume." },
      { href: "/services/custom-ai-development", title: "Custom AI Development", text: "Wrap the tuned model in a complete, integrated application." },
      { href: "/hire/ai-developers", title: "Hire AI Developers", text: "LLM and ML specialists who join your own team." },
    ],
  },
  faqs: [
    {
      q: "Should we fine-tune an LLM or use retrieval-augmented generation?",
      a: ["Use RAG when the model must answer from documents that change, because updating an index is quicker and cheaper than retraining. Use fine-tuning when you need consistent behaviour: a fixed output structure, a house style or specialist terminology. Many systems use both."],
    },
    {
      q: "How much training data does fine-tuning need?",
      a: ["Less than many teams expect. Parameter-efficient fine-tuning can work from a curated set of high-quality examples; quality and consistency matter more than volume. The baseline benchmark shows whether your data is enough before training starts."],
    },
    {
      q: "Can a fine-tuned model run privately in our own cloud?",
      a: ["Yes. Open-weight models such as Llama and Mistral can be fine-tuned and served inside your own AWS or Azure account, so prompts and data never leave your environment."],
    },
    {
      q: "How do you prove fine-tuning was worth it?",
      a: ["Every tuned model is compared with the prompted baseline on a held-out evaluation set for accuracy, format compliance, latency and cost per request. If it does not win, we do not ship it. To discuss your use case, [talk to our team](/contact)."],
    },
  ],
  cta: {
    title: "Not Sure Whether to Fine-Tune?",
    titleAccent: "We Will Benchmark It First.",
    body: {
      text: "Send us a sample of the task and the output you expect. We will test current models with prompting and tell you whether fine-tuning, [[link]] or both will get you there.",
      link: { anchor: "RAG development", href: "/services/rag-development" },
    },
    bring: ["20–50 examples of the task", "The output format you need", "Any hosting or data restrictions"],
  },
  og: {
    title: "LLM Fine-Tuning",
    accent: "Domain-aware language models",
    rows: [
      [["Tuned model (LoRA)", "purple"]],
      [["Baseline", "plain"], ["Train", "plain"], ["Evaluate", "plain"]],
      [["Curated examples", "teal"], ["Held-out tests", "teal"]],
      [["Private cloud hosting", "sun"]],
    ],
  },
} satisfies AiServicePageContent;
