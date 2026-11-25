import type { AiServicePageContent } from "../../lib/ai-service-page";

/*
 * /services/nlp-development. Expanded from the "Natural Language Processing
 * (NLP)" section of /services/ai-development. Also carries the public-sector
 * records use cases previously listed on that page's industry cards.
 */
export const CONTENT = {
  slug: "nlp-development",
  name: "NLP Development",
  seo: {
    title: "NLP Development Services UK | Text AI",
    description:
      "NLP development for UK businesses: classify, extract, redact and search emails, tickets, contracts and case notes at volume. Book a free consultation.",
  },
  schema: {
    alternateName: "Natural Language Processing Development",
    serviceType: ["Natural language processing development"],
    description:
      "Development of natural language processing pipelines for text classification, entity extraction, sentiment and theme analysis, personal data redaction and semantic search.",
  },
  hero: {
    eyebrow: "NLP Development UK",
    title: "NLP Development Services UK",
    titleAccent: "for Text That Arrives Faster Than People Can Read It",
    lead:
      "Natural language processing (NLP) lets software read and organise large volumes of written language. We build NLP pipelines that classify and route messages, extract names, dates, amounts and clauses, measure sentiment and themes, redact personal data and power semantic search across your records.",
    audience:
      "For teams handling high volumes of emails, tickets, reviews, case notes or documents, where important signals are being missed.",
    stats: [
      { value: "Classify · Extract", label: "Core tasks" },
      { value: "Redaction", label: "Before data is shared" },
      { value: "Measured accuracy", label: "On your own text" },
      { value: "Compact + LLM", label: "Cost-aware design" },
    ],
    figureLabel: "An NLP pipeline in production",
    flow: [
      { title: "Ingest text", text: "Emails, tickets, documents and records as they arrive." },
      { title: "Classify and extract", text: "Category, priority, entities and key fields." },
      { title: "Redact and enrich", text: "Remove personal data; add sentiment and themes." },
      { title: "Route and index", text: "Send to the right team and make it searchable." },
    ],
    figcaption: "High-volume work runs on compact models; hard cases go to an LLM.",
  },
  overview: {
    heading: "What Is NLP Development?",
    paragraphs: [
      "NLP development is the engineering of software that understands text well enough to act on it. Typical tasks include text classification (what is this about, how urgent is it), named-entity recognition (who, what, when, how much), sentiment and theme analysis, redaction of personal data and semantic search based on meaning rather than exact keywords.",
      "Modern NLP offers two broad approaches: compact task-specific models, which are fast and cheap at volume, and large language models, which handle varied or ambiguous text with little training. We test both on a sample of your text and choose on measured accuracy, cost and latency. High-volume pipelines often combine them, with an LLM reserved for the hard cases, sometimes after [LLM fine-tuning](/services/llm-development-fine-tuning) for consistency.",
      "NLP is one of the capabilities in our [AI development services](/services/ai-development), and it underpins document automation, search and analytics across many sectors, including public sector work such as high-volume records ingestion and searchable case archives.",
    ],
  },
  problems: {
    heading: "Problems NLP Solves",
    intro: "Most organisations hold far more text than anyone can read. NLP turns it into structured, searchable information.",
    items: [
      { title: "Inboxes and queues that overflow", text: "Emails and tickets wait for someone to read and route them, so urgent items are found late." },
      { title: "Key details buried in documents", text: "Names, dates, amounts and clauses are re-keyed by hand from contracts and forms." },
      { title: "Feedback nobody has time to analyse", text: "Reviews and survey comments pile up without themes or trends being identified." },
      { title: "Personal data blocking reuse", text: "Records cannot be shared or analysed until personal details are removed." },
    ],
  },
  applications: {
    heading: "Practical Applications",
    intro: "Illustrative NLP use cases. Each is measured on a labelled sample of your own text.",
    items: [
      { title: "Email and ticket routing", text: "Classify inbound messages by topic and urgency and send them to the right team." },
      { title: "Entity and clause extraction", text: "Pull names, dates, amounts and clauses from contracts, invoices and forms." },
      { title: "Theme and sentiment analysis", text: "Group reviews and survey responses into themes and track sentiment over time." },
      { title: "Personal data redaction", text: "Find and remove personal details before records are shared or analysed." },
      { title: "Searchable case archives", text: "Index large record collections for semantic search, including public sector case files." },
    ],
  },
  process: {
    heading: "How We Build NLP Pipelines",
    intro: "We start from a labelled sample of your real text, so every design decision is backed by measured results.",
    steps: [
      { title: "Sample and label", text: "Collect a representative sample of your text and label it with your subject experts.", output: "Labelled evaluation dataset" },
      { title: "Compare approaches", text: "Test compact task-specific models and LLM-based approaches on the same sample.", output: "Accuracy, cost and latency comparison" },
      { title: "Build the pipeline", text: "Combine the chosen models with pre-processing, business rules and confidence thresholds.", output: "Working pipeline in a test environment" },
      { title: "Integrate", text: "Connect to your inboxes, ticketing, document stores and search, with low-confidence cases routed to people.", output: "Integrated pipeline with review queue" },
      { title: "Launch and monitor", text: "Release in stages and track accuracy, volumes and drift as language and topics change.", output: "Monitoring dashboard and retraining plan" },
    ],
  },
  tech: {
    heading: "Technologies for NLP",
    intro: "We choose between compact models and LLMs on evidence, and often use both in one pipeline.",
    groups: [
      { title: "Models", items: ["Hugging Face", "Named-entity recognition models", "Embedding models", "Commercial LLM APIs"] },
      { title: "Pipelines", items: ["Python", "scikit-learn", "MLflow"] },
      { title: "Search & hosting", items: ["Elasticsearch", "PostgreSQL + pgvector", "AWS"] },
    ],
  },
  compliance: {
    heading: "UK GDPR and Sensitive Text",
    paragraphs: [
      "Text often contains personal and special category data. We design NLP pipelines under UK GDPR, with redaction before analysis where possible, role-based access and documented retention.",
      "Public sector projects can be documented in line with the Algorithmic Transparency Recording Standard, and clinical text tools are assessed early in case they fall under MHRA medical device rules.",
    ],
  },
  industries: {
    heading: "Where NLP Helps Most",
    intro: "Text-heavy, regulated sectors gain the most from reliable NLP.",
    items: [
      { href: "/industries/healthcare", title: "Healthcare & MedTech", text: "Clinical note summarisation, referral triage and coding support, with health data protected." },
      { href: "/industries/finance", title: "Finance & Fintech", text: "Complaint classification, document extraction and communications monitoring support." },
    ],
  },
  related: {
    heading: "Related AI Services",
    intro: "NLP pipelines often feed, or are fed by, these services.",
    items: [
      { href: "/services/ai-development", title: "AI Development Services", text: "The full AI lifecycle, from discovery to monitored production." },
      { href: "/services/rag-development", title: "RAG Development", text: "Question answering over the documents your pipeline indexes." },
      { href: "/services/ai-automation", title: "AI Automation Services", text: "Turn extracted data into automated back-office workflows." },
      { href: "/services/llm-development-fine-tuning", title: "LLM Development & Fine-Tuning", text: "Tune an LLM for the hard cases your pipeline escalates." },
      { href: "/hire/ai-developers", title: "Hire AI Developers", text: "NLP and ML engineers who join your team." },
    ],
  },
  faqs: [
    {
      q: "Should we use an LLM or a smaller NLP model?",
      a: ["It depends on volume, variety and cost. Compact models are fast and cheap for well-defined tasks at scale; LLMs handle varied text with little training. We test both on your text and often combine them."],
    },
    {
      q: "How accurate is NLP on our documents?",
      a: ["Accuracy is measured, not assumed: we label a sample of your real text and report results per category or field. Low-confidence cases are routed to people rather than guessed."],
    },
    {
      q: "Can NLP redact personal data automatically?",
      a: ["Yes. Entity recognition finds names, addresses, identifiers and other personal details so they can be removed or masked. For high-risk records we keep a human check on a sample of redactions."],
    },
    {
      q: "How long does an NLP project take?",
      a: ["A pilot on one text source typically fits within the 6–8 week MVP window, depending on labelling effort and integrations. To scope yours, [book a discovery call](/contact)."],
    },
  ],
  cta: {
    title: "Drowning in Text?",
    titleAccent: "Let's Turn It Into Structured Data.",
    body: {
      text: "Share a sample of the emails, tickets or documents you handle and what you need from them. We will test approaches and recommend a pipeline. NLP is part of our wider [[link]].",
      link: { anchor: "AI development services", href: "/services/ai-development" },
    },
    bring: ["A sample of your text", "The fields or categories you need", "Where results should go"],
  },
  og: {
    title: "NLP Development",
    accent: "Classify, extract, redact, search",
    rows: [
      [["Structured, searchable data", "purple"]],
      [["Classify", "plain"], ["Extract", "plain"], ["Redact", "plain"]],
      [["Compact models", "teal"], ["LLMs", "teal"]],
      [["Emails · Tickets · Documents", "sun"]],
    ],
  },
} satisfies AiServicePageContent;
