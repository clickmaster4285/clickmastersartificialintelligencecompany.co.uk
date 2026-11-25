/*
 * /services/rag-development content, from
 * "ClickMasters RAG Development Services: SEO Content Pack" (25 Nov 2026).
 * Edit copy here; ./page.jsx only renders it. (This page no longer uses the
 * shared AiServicePage template: the pack needs extra section types and
 * exactly four body links, so the template's related/industry cards are gone.)
 *
 * VERIFY comments mark business facts the pack says need owner confirmation.
 * Body links: exactly the pack's four (CTAs, breadcrumb, header and footer
 * are template elements).
 */

export const PATH = "/services/rag-development";

export const SEO = {
  // Rendered as "RAG Development Services UK | Enterprise RAG | ClickMasters" (59 chars).
  title: "RAG Development Services UK | Enterprise RAG",
  // The pack's wording, shortened to stay within 155 characters.
  description:
    "RAG development services for UK organisations: AI answers grounded in your own documents, with hybrid search, citations and permission-aware retrieval.",
  ogTitle: "RAG Development | ClickMasters",
  ogDescription:
    "Cited answers from your own documents: retrieval-augmented generation with hybrid search, permission-aware retrieval and measured accuracy.",
};

export type LinkedText = { text: string; link?: { anchor: string; href: string } };

const IMG = "/assets/Services/rag";

/**
 * Diagrams drawn for this page (alt text from the pack's image table; the hero
 * keeps the existing inline RAG architecture diagram) and photos from Unsplash
 * (Unsplash License: free for commercial use, no attribution required;
 * credits kept here for reference).
 */
export const IMAGES = {
  heroAlt:
    "RAG architecture diagram: documents are parsed, chunked, embedded and indexed; a user question triggers retrieval and re-ranking, and a language model returns an answer with citations",
  pipelines: {
    src: `${IMG}/rag-two-pipelines.png`, width: 1720, height: 640,
    alt: "Two-pipeline diagram: an ingestion pipeline (connect, parse, clean, chunk, enrich, embed and index) feeds a shared index used by a query pipeline (rewrite, filter, hybrid search, re-rank, generate with citations, log)",
  },
  hybrid: {
    src: `${IMG}/rag-hybrid-search.png`, width: 1720, height: 520,
    alt: "Hybrid search: a question runs through vector search and keyword search in parallel, results are merged with reciprocal rank fusion and re-ranked before reaching the language model",
  },
  compare: {
    src: `${IMG}/rag-vs-fine-tuning.png`, width: 1720, height: 560,
    alt: "Comparison of a standard LLM integration, retrieval-augmented generation and fine-tuning by knowledge source, update method and traceability",
  },
  permissions: {
    src: `${IMG}/rag-permission-aware-retrieval.png`, width: 1720, height: 600,
    alt: "Permission-aware retrieval: a staff member and an HR manager ask the same question and receive answers drawn only from the documents each is allowed to open",
  },
  evaluation: {
    src: `${IMG}/rag-evaluation-loop.png`, width: 1720, height: 560,
    alt: "RAG evaluation loop: a question set is run through the system, retrieval and answer metrics are scored, weak cases are fixed in ingestion or retrieval, and the set is re-run before each release",
  },
  // Photo: Sear Greyson (unsplash.com/photos/K-ZsC7YdJ6Y)
  papers: {
    src: `${IMG}/rag-piles-of-paper-files.webp`, width: 1200, height: 900,
    alt: "Overflowing stacks of paper documents in folders tied with black ribbon",
  },
  // Photo: Luke Caunt (unsplash.com/photos/5utYi64hnJ0)
  archive: {
    src: `${IMG}/rag-archive-boxes-on-shelves.webp`, width: 1200, height: 675,
    alt: "Rows of white archive boxes on wooden shelves lining both sides of a wood-panelled records room",
  },
  // Photo: Maksym Kaharlytskyi (unsplash.com/photos/Q9y3LRuuxmg)
  catalogue: {
    src: `${IMG}/rag-card-catalogue-drawer.webp`, width: 1200, height: 799,
    alt: "An open card-catalogue drawer packed with index cards and tabbed dividers in a metal filing cabinet",
  },
} as const;

export const HERO = {
  eyebrow: "RAG Development UK",
  title: "RAG Development Services UK:",
  titleAccent: "AI That Answers From Your Own Documents, and Shows Its Sources",
  lead:
    "Your organisation already has the answers written down: in policies, contracts, product manuals, support tickets and years of reports. The problem is that they are spread across SharePoint sites, shared drives, wikis and databases, and a general-purpose AI model has never seen any of them. Ask it about your returns policy or a clause in a supplier contract and it will either refuse or, worse, produce a confident answer that is wrong.",
  audience:
    "ClickMasters builds retrieval-augmented generation (RAG) systems that close that gap. We connect a large language model to your own content at the moment a question is asked, so answers are written from your documents, cite the passages they came from, and respect who is allowed to see what.",
  stats: [
    { value: "Grounded answers", label: "Written from retrieved passages, with citations" },
    { value: "Permission-aware", label: "Users only see content they could already open" },
    { value: "Model-agnostic", label: "Commercial or open-weight, chosen on evidence" },
    { value: "Measured", label: "Evaluated on real questions before and after launch" },
  ],
};

export const WHAT_IS = {
  p1: "**Retrieval-augmented generation (RAG)** is a way of building AI applications in which a language model answers questions using information retrieved from a separate, controlled knowledge source rather than relying only on what it learned during training.",
  p2: "It has two distinct halves:",
  halves: [
    ["Retrieval", "finds the most relevant passages in your content for a specific question. This is a search problem."],
    ["Generation", "gives those passages to a language model, which writes an answer based on them, cites them, and says when they do not contain the answer."],
  ],
  p3: "The distinction matters because most failures in RAG systems are retrieval failures. If the right passage is never found, even the best model cannot answer correctly. That is why most of the engineering effort in a good RAG project goes into preparing content and tuning search, not into the prompt.",
  diffTitle: "How RAG differs from a standard LLM application",
  diff: [
    "A standard LLM integration sends a user's question, plus instructions, straight to a model. It works well for drafting, summarising text the user provides, or general reasoning. It cannot know your internal policies, prices or customer history, and anything it says about them may be invented.",
    "A RAG application adds a search step first. The model receives your relevant content alongside the question, so its answer can be checked against real sources. RAG reduces invented answers substantially, but it does not eliminate them; that is why citations, refusal behaviour and evaluation are part of every system we build.",
  ],
};

export const HOW = {
  intro: "A production RAG system is two pipelines that share an index.",
  ingestionTitle: "The ingestion pipeline (runs when content changes)",
  ingestion: [
    ["Connect:", "pull content from its sources, such as document libraries, wikis, ticketing systems or databases."],
    ["Parse:", "extract text, headings, tables and metadata from each format, including scanned documents where text recognition is needed."],
    ["Clean:", "remove duplicates, boilerplate and outdated versions."],
    ["Chunk:", "split documents into passages small enough to search precisely but large enough to keep their meaning, usually following the document's own structure."],
    ["Enrich:", "attach metadata such as source, owner, date, document type and access permissions."],
    ["Embed and index:", "convert each passage into an embedding, a numerical representation of its meaning, and store it in a vector index alongside a keyword index."],
  ],
  queryTitle: "The retrieval and answer pipeline (runs on every question)",
  query: [
    ["Understand the question:", "optionally rewrite or expand it, for example to resolve \"what about for contractors?\" in a conversation."],
    ["Filter:", "apply the user's permissions and any metadata filters, such as department or date."],
    ["Search:", "run vector and keyword search together and merge the results."],
    ["Re-rank:", "score the candidate passages for relevance to this exact question and keep the best."],
    ["Build the context:", "assemble the selected passages within the model's context budget, with their source references."],
    ["Generate:", "the model answers only from that context, cites it, and says clearly when the answer is not there."],
    ["Log and learn:", "record the question, sources used and user feedback for evaluation and improvement."],
  ],
};

// Body link 1 of 4.
export const COVER = {
  intro: {
    text: "RAG is one specialised capability within our wider [[link]], which also cover machine learning, computer vision and automation. This page is about one specific job: connecting your business knowledge to language models so people get accurate, traceable answers. That work typically includes:",
    link: { anchor: "AI development services", href: "/services/ai-development" },
  } as LinkedText,
  items: [
    { icon: "chat", title: "Knowledge assistants", text: "Chat-style assistants for staff or customers, grounded in your content." },
    { icon: "search", title: "AI-powered document search", text: "Semantic search that understands meaning, not just keywords, with an optional summarised answer above the results." },
    { icon: "plug", title: "RAG inside existing applications", text: "A retrieval layer and API that your intranet, portal, CRM or product can call." },
    { icon: "book", title: "Knowledge base preparation", text: "Auditing, restructuring and enriching content so it can be retrieved reliably." },
    { icon: "tools", title: "Improving an existing RAG system", text: "Diagnosing poor answers, measuring retrieval quality and fixing the pipeline." },
  ],
};

// VERIFY: graph-based and multimodal retrieval experience (pack: hedge as "assessed per project").
export const TECHNIQUES: { intro: string; items: { title: string; text: LinkedText }[] } = {
  intro:
    "We start with the simplest pipeline that could work, measure it on your real questions, and add techniques only where the evaluation shows they help. Each addition has a cost in latency, complexity or running cost.",
  items: [
    { title: "Hybrid search", text: { text: "Vector search finds passages with similar meaning even when the wording differs. Keyword search, such as BM25, is better at exact terms: product codes, clause numbers, names and acronyms. Running both and merging the results, for example with reciprocal rank fusion, covers the weaknesses of each. For most business content, hybrid search is our default." } },
    { title: "Re-ranking", text: { text: "The first search returns a broad set of candidates. A re-ranking model then scores each candidate against the exact question and reorders them. It usually improves the passages the model receives, at the cost of some added latency." } },
    { title: "Structure-aware chunking and contextual passages", text: { text: "Passages split mid-sentence or stripped of their heading lose meaning. We chunk along document structure, and where it helps we add short context to each passage before indexing, such as the document title and section, so that \"the notice period is one month\" is still findable when the question mentions the specific contract." } },
    { title: "Metadata filtering", text: { text: "Filters on department, document type, date, region or product narrow the search before ranking. They are also how permission rules are enforced." } },
    { title: "Query rewriting and multi-query retrieval", text: { text: "Conversational follow-ups are rewritten into standalone questions, and complex questions can be broken into several searches whose results are combined." } },
    // Body link 2 of 4.
    {
      title: "Agentic RAG",
      text: {
        text: "In agentic RAG, an AI agent decides when to search, what to search for and whether it needs another search before answering, sometimes across several knowledge sources or tools. It suits multi-step research tasks, but it is less predictable than a fixed pipeline. Where retrieval needs to be combined with actions, such as looking up a record and then updating it, our [[link]] covers how agents use retrieval as one of their tools, with permission limits and approval steps.",
        link: { anchor: "AI agent development", href: "/services/ai-agent-development" },
      },
    },
    { title: "Graph-based and multimodal retrieval", text: { text: "Some questions depend on relationships, such as which suppliers are linked to which contracts and sites, and some answers live in tables, diagrams or scanned images. Graph-based retrieval and multimodal processing can help in these cases. We assess them per project and recommend them only when your content and questions genuinely need them." } },
  ],
};

export const CONNECT = {
  items: [
    { icon: "folder", title: "Common content sources", text: "Document libraries such as SharePoint and Google Drive, wikis such as Confluence, PDFs and Word files, ticketing systems and databases are typical starting points. The source audit confirms which of your sources are in scope, their formats, owners and access rules, before any ingestion is built." },
    { icon: "database", title: "Structured data and business systems", text: "Not every question is answered by a document. Order status, account details or stock levels live in databases and business systems. A RAG system can combine retrieved documents with structured lookups through APIs, so an assistant can answer \"what is our policy, and what does it mean for this customer?\"" },
    { icon: "refresh", title: "Keeping the index current", text: "Content changes, so ingestion runs on a schedule or when sources change. Updated documents are re-indexed, and deleted or superseded documents are removed so the assistant does not quote old policy." },
    { icon: "brain", title: "Language models", text: "We are model-agnostic. Depending on accuracy, cost, latency and data requirements, we use commercial models such as OpenAI's GPT family and Anthropic's Claude, or open-weight models such as Meta Llama and Mistral, which can be hosted in an environment you control." },
  ],
  stackTitle: "Our RAG technology stack",
  stack: [
    ["Orchestration", "Python, LangChain"],
    ["Embeddings", "Embedding models selected by measured retrieval quality"],
    ["Search and storage", "PostgreSQL with pgvector, Elasticsearch, Redis"],
    ["Language models", "Cloud model endpoints; commercial and open-weight LLMs"],
    ["Hosting", "AWS and other cloud environments chosen for data residency"],
  ],
};

export const COMPARE = {
  headers: ["", "Standard LLM integration", "Retrieval-augmented generation", "Fine-tuning"],
  rows: [
    ["Best for", "Drafting, summarising text the user supplies, general reasoning", "Answering from your own documents and data that change", "Consistent tone, format, classification or specialised behaviour"],
    ["Knows your content?", "No", "Yes, at question time", "Only what was in the training data, frozen at training time"],
    ["Updating knowledge", "Not applicable", "Re-index changed content", "Retrain the model"],
    ["Traceability", "Low", "High: answers cite sources", "Low"],
    ["Main dependency", "Good prompts", "Good content and retrieval", "Good training examples"],
  ],
  // Body link 3 of 4.
  outro: {
    text: "These approaches are complementary. A common pattern is RAG for facts plus a fine-tuned or carefully prompted model for tone and output format. If you need consistent behaviour rather than current knowledge, our [[link]] explain when training a model is the better investment.",
    link: { anchor: "LLM fine-tuning services", href: "/services/llm-development-fine-tuning" },
  } as LinkedText,
};

export const SECURITY: { intro: string; items: { icon: string; title: string; text: LinkedText }[] } = {
  intro: "A RAG system can see a great deal of your organisation's knowledge, so its security model matters as much as its answer quality.",
  items: [
    { icon: "lock", title: "Permission-aware retrieval", text: { text: "Access rights are captured from each source during ingestion and applied as filters at query time, so the assistant never retrieves a passage the user could not open directly. When permissions change at the source, the index is updated." } },
    // Body link 4 of 4.
    {
      icon: "privacy", title: "Sensitive and personal data",
      text: {
        text: "Documents often contain personal data, which remains subject to UK GDPR when it is processed by an AI system. Where content does not need personal details to be useful, they can be removed before indexing; our [[link]] find and remove names, contact details and other identifiers at volume. We can supply the technical detail your team needs for a Data Protection Impact Assessment. This is technical support, not legal advice; your data protection lead should confirm your obligations.",
        link: { anchor: "NLP pipelines for personal data redaction", href: "/services/nlp-development" },
      },
    },
    { icon: "shield", title: "Untrusted content and prompt injection", text: { text: "Retrieved documents and user input are treated as untrusted. A document can contain instructions designed to manipulate the model, known as indirect prompt injection. We design against the OWASP Top 10 for LLM Applications, which covers prompt injection and weaknesses in vector and embedding systems, with input filtering, strict separation of instructions from retrieved content, and output checks." } },
    { icon: "server", title: "Isolation, retention and hosting", text: { text: "Where several clients or departments share one platform, indexes and queries are isolated so one cannot retrieve another's content. Question logs are retained only as long as your policy requires. Model endpoints and hosting regions are chosen to match your data residency needs, including self-hosted open-weight models where data must not leave your environment." } },
  ],
};

export const EVALUATION = {
  intro: "\"It seems to work\" is not a test. Every RAG system we build is measured before launch and monitored after it.",
  setTitle: "Building the evaluation set",
  set: "We collect real questions from the people who will use the system, with reference answers and the source passages that support them, including questions the content cannot answer.",
  metricsTitle: "What we measure",
  metrics: [
    ["Retrieval quality:", "whether the passages needed to answer each question are retrieved (context recall) and how much of what is retrieved is relevant (context precision)."],
    ["Faithfulness:", "whether every claim in the answer is supported by the retrieved passages."],
    ["Answer relevance and correctness:", "whether the answer addresses the question and matches the reference."],
    ["Refusal behaviour:", "whether the system says \"I don't know\" when the answer is not in the sources."],
    ["Latency and cost:", "response time and cost per question at expected volumes."],
  ],
  method: "Automated scoring is combined with human review of a sample, because automated metrics can mislead on their own. Every change to chunking, models or prompts is re-tested against the same set, so improvements are proven rather than assumed.",
  afterTitle: "After launch",
  after: "Monitoring tracks unanswered and low-confidence questions, user feedback, latency and cost. Questions the system cannot answer often reveal gaps in the content itself, which is useful information for content owners.",
  honest: "No RAG system answers every question correctly. The aim is measurable, improving accuracy with answers people can check.",
};

export const USE_CASES = {
  note: "Illustrative applications. Each would be scoped and evaluated on your own content and questions; they are not client case studies.",
  items: [
    { icon: "policy", title: "Internal knowledge and policy assistants", text: "HR, IT, finance and operations questions answered from current policies, with a link to the exact section." },
    { icon: "support", title: "Customer support knowledge", text: "Support agents, or customers directly, get answers drawn from product documentation and resolved tickets, with escalation when the sources do not cover the question." },
    { icon: "tools", title: "Technical and product documentation", text: "Engineers and field teams query manuals, specifications and procedures in plain English and see the passage behind each answer." },
    { icon: "scales", title: "Legal and contract research", text: "Legal and procurement teams locate clauses and obligations across large contract libraries. Answers support review by qualified people; they do not replace it." },
    { icon: "chart", title: "Financial and research documents", text: "Analysts query reports, filings and research and see which passages each statement came from." },
    { icon: "file", title: "Bids and proposals", text: "Bid teams find and adapt approved content from past proposals rather than rewriting it." },
    { icon: "book", title: "Industry knowledge platforms", text: "Organisations that publish specialist knowledge, such as standards, guidance or training material, can offer members a searchable, cited assistant over that content." },
  ],
};

export const PROCESS = [
  { title: "Discovery and source audit", text: "Agree the use case, users and success measures; inventory content sources, formats, owners and access rules; and collect the first evaluation questions." },
  { title: "Ingestion pipeline", text: "Build connectors, parsing, cleaning, chunking and metadata enrichment, with permissions captured from each source." },
  { title: "Retrieval tuning", text: "Index content, configure hybrid search and re-ranking, and measure retrieval quality against the question set." },
  { title: "Answer generation", text: "Design prompts and context construction so the model answers only from retrieved passages, cites them and refuses when they are insufficient." },
  { title: "Evaluation and hardening", text: "Score retrieval and answers, fix the weakest cases, and test security controls including permission filtering and prompt injection defences." },
  { title: "Launch and monitoring", text: "Deploy into your chosen interface or application, schedule re-indexing, and monitor quality, feedback, latency and cost, with improvements prioritised from real use." },
];

export const PROCESS_OUTRO =
  "Work is delivered in two-week sprints with weekly demos. We offer fixed-price and time-and-materials engagements, with a scoped estimate and milestones after discovery.";

export const PARTNER = {
  intro: "Questions worth asking any supplier:",
  questions: [
    "How will they measure retrieval quality and answer faithfulness on your content?",
    "How are document permissions enforced at query time?",
    "What happens when the answer is not in your documents?",
    "How do they defend against prompt injection from retrieved content?",
    "Which models will they use, and can you change models later?",
    "Who owns the pipeline, the index and the code?",
  ],
  answers: [
    { icon: "chart", title: "Evaluation first", text: "A question set built from your real queries, re-run on every change." },
    { icon: "lock", title: "Permission-aware by design", text: "Access rules captured at ingestion and enforced at retrieval." },
    { icon: "brain", title: "Model-agnostic", text: "OpenAI GPT, Anthropic Claude, Meta Llama, Mistral or others, chosen on measured accuracy, cost and data needs." },
    { icon: "shield", title: "Security against LLM-specific risks", text: "Designed against the OWASP Top 10 for LLM Applications." },
    { icon: "plug", title: "AI and software engineering in one team", text: "RAG built into the web, mobile and business applications your people already use, with integration experience across Salesforce, SAP ERP, ServiceNow, HubSpot, Microsoft Dynamics, Oracle Cloud and Jira." },
    { icon: "support", title: "Transparent delivery", text: "Two-week sprints, weekly demos, NDAs on request and support after launch." },
  ],
};

export const FAQS: { q: string; a: string[] }[] = [
  { q: "What is RAG development?", a: ["RAG development is the design and engineering of retrieval-augmented generation systems: AI applications that search an organisation's own content for relevant passages and give them to a language model, which writes an answer based on those passages and cites them."] },
  { q: "How does RAG reduce AI hallucinations?", a: ["The model is instructed to answer only from retrieved passages and to cite them, so claims can be checked, and it is designed to say when the sources do not contain the answer. RAG reduces invented answers but does not eliminate them, so we measure faithfulness on a question set before and after launch."] },
  { q: "Should we use RAG or fine-tune a model?", a: ["Use RAG when the model needs to answer from your documents or data, especially if they change, because updating an index is quicker than retraining. Use fine-tuning for consistent behaviour, tone or output format. Many systems combine both."] },
  { q: "What is a vector database, and do we need a new one?", a: ["A vector database stores embeddings so passages can be found by meaning. Often a new product is not needed: PostgreSQL with the pgvector extension, or Elasticsearch, can provide vector and keyword search together. We choose based on your volume, existing infrastructure and measured retrieval quality."] },
  { q: "What is hybrid search?", a: ["Hybrid search combines vector search, which matches meaning, with keyword search, which matches exact terms such as product codes, names and clause numbers. Merging the two usually retrieves better passages for business content than either alone."] },
  { q: "Which content sources can a RAG system use?", a: ["Common sources include SharePoint, Google Drive, Confluence, PDFs, Word files, ticketing systems and databases. A source audit confirms formats, owners and access rules before ingestion is built."] },
  { q: "Do users only see documents they are allowed to access?", a: ["Yes, when the system is designed for it. Permissions are captured from each source during ingestion and applied at query time, so the assistant never retrieves content a user could not open directly."] },
  { q: "Can RAG work with our data kept in the UK or on our own infrastructure?", a: ["Hosting regions and model endpoints are chosen to match your data residency requirements, and open-weight models can be hosted in an environment you control where data must not leave it."] },
  { q: "How do you measure whether a RAG system is accurate?", a: ["We build a question set with reference answers and supporting passages, then measure retrieval quality, faithfulness, answer relevance and refusal behaviour, combining automated scoring with human review. The same set is re-run after every change."] },
  { q: "Can you improve an existing RAG system or chatbot that gives poor answers?", a: ["Yes. We measure where it fails, usually in parsing, chunking or retrieval rather than the model, and fix those stages, re-testing against a question set so the improvement is measurable."] },
  { q: "How much does RAG development cost?", a: ["Cost depends on the number and condition of content sources, permission complexity, the retrieval techniques needed, the interface or integrations required, model and hosting choices, and ongoing monitoring. We provide a fixed-price or time-and-materials estimate with milestones once the scope is understood."] },
];

export const FINAL_CTA = {
  title: "Your Answers Are Already Written Down.",
  titleAccent: "Let's Make Them Findable.",
  body: {
    text: "Tell us which content your people search most, the questions they ask and who needs access to what. We will propose a scoped first use case and an evaluation approach, so you can judge results on your own questions before committing further.",
  } as LinkedText,
  bring: ["The content sources in scope", "Typical questions people ask", "Who should see what", "Data residency or hosting requirements", "Where the answers should appear"],
};

export const SCHEMA_SERVICE = {
  name: "RAG Development",
  alternateName: "Retrieval-Augmented Generation Development",
  serviceType: ["Retrieval-augmented generation development", "Enterprise knowledge assistant development", "AI-powered document search"],
  description: SEO.description,
  relatedServicePath: "/services/ai-development",
};

/** Social sharing image content (used by ./opengraph-image.tsx). */
type OgTone = "plain" | "purple" | "teal" | "sun";
export const OG: { title: string; accent: string; rows: [string, OgTone][][] } = {
  title: "RAG Development",
  accent: "Cited answers from your documents",
  rows: [
    [["Answer with citations", "purple"]],
    [["Retrieve", "plain"], ["Re-rank", "plain"], ["Generate", "plain"]],
    [["Vector index", "teal"], ["Keyword search", "teal"]],
    [["SharePoint · PDFs · Wikis", "sun"]],
  ],
};
