import type { AiServicePageContent } from "../../lib/ai-service-page";

/*
 * /services/rag-development. Expanded from the "Retrieval-Augmented
 * Generation (RAG) Development" section of /services/ai-development.
 */
export const CONTENT = {
  slug: "rag-development",
  name: "RAG Development",
  seo: {
    title: "RAG Development Services UK | Enterprise RAG",
    description:
      "Retrieval-augmented generation for UK businesses: AI answers grounded in your documents, with citations and permission-aware search. Book a free call.",
  },
  schema: {
    alternateName: "Retrieval-Augmented Generation Development",
    serviceType: ["Retrieval-augmented generation development", "Enterprise knowledge assistant development"],
    description:
      "Design and development of retrieval-augmented generation systems that answer questions from an organisation's own documents, with hybrid search, re-ranking, citations, permission-aware retrieval and evaluation.",
  },
  figure: "rag",
  hero: {
    eyebrow: "RAG Development UK",
    title: "RAG Development Services UK",
    titleAccent: "for Grounded Answers From Your Own Documents",
    lead:
      "Retrieval-augmented generation (RAG) connects a language model to your documents at the moment a question is asked. We build RAG systems that search your content, pass the most relevant passages to the model and return answers that cite their sources, while respecting who is allowed to see what.",
    audience:
      "For organisations whose staff search across SharePoint, PDFs, wikis and ticket history, and whose chatbots invent answers instead of quoting policy.",
    stats: [
      { value: "Cited answers", label: "Every response" },
      { value: "Permission-aware", label: "Retrieval" },
      { value: "No retraining", label: "Re-index to update" },
      { value: "6–8 weeks", label: "Typical pilot" },
    ],
    figureLabel: "How a RAG system answers",
    flow: [],
    figcaption: "Ingestion runs when content changes; retrieval runs on every question.",
  },
  overview: {
    heading: "What Is Retrieval-Augmented Generation?",
    paragraphs: [
      "In a RAG system, documents are split into passages, converted into embeddings (numerical representations of meaning) and stored in a vector index. When someone asks a question, the system retrieves the most relevant passages and gives them to a language model, which writes an answer from that material and shows where each point came from.",
      "Because answers come from retrieved content rather than the model's memory, RAG reduces invented answers and stays current: when a policy changes, you re-index the document instead of retraining a model. That makes it the usual first choice for knowledge assistants, and a useful complement to [LLM fine-tuning](/services/llm-development-fine-tuning), which shapes tone and format.",
      "Answer quality depends on retrieval quality, so most of our effort goes into source preparation, search tuning and evaluation. RAG is one of the capabilities within our [AI development services](/services/ai-development), and it often powers the knowledge layer behind AI agents and chatbots.",
    ],
  },
  problems: {
    heading: "Problems RAG Solves",
    intro: "Most organisations already have the answers written down. The problem is finding them quickly and trusting what the AI says.",
    items: [
      { title: "Knowledge scattered across systems", text: "Staff search SharePoint, PDFs, wikis and old tickets one by one to answer a single question." },
      { title: "Chatbots that invent answers", text: "Generic assistants answer confidently without access to your policies, so nobody can rely on them." },
      { title: "Content that changes too often to retrain", text: "Prices, procedures and product details change weekly; retraining a model every time is impractical." },
      { title: "Access rules that must hold", text: "HR, legal and client documents cannot be exposed to people who could not open them directly." },
    ],
  },
  applications: {
    heading: "Practical Applications",
    intro: "Illustrative uses of RAG. Each is evaluated on a question set drawn from real queries before launch.",
    items: [
      { title: "Internal policy assistants", text: "HR, IT and operations questions answered from current policies, with links to the source." },
      { title: "Grounded support answers", text: "Agents and customers get replies drawn from product documentation instead of guesswork." },
      { title: "Research and filings search", text: "Analysts query reports, research and filings in plain English and see the passages behind each answer." },
      { title: "Proposal and bid reuse", text: "Bid teams find and adapt approved content from past proposals in minutes." },
      { title: "Contract and clause lookup", text: "Legal and procurement teams locate terms across large contract libraries." },
    ],
  },
  process: {
    heading: "How We Build RAG Systems",
    intro: "A RAG pipeline has two halves: ingestion, which runs when content changes, and retrieval, which runs on every question. We build and test both.",
    steps: [
      { title: "Source audit and permissions", text: "Inventory the document sources, their formats, owners and access rules, and agree which content is in scope.", output: "Source map and permission model" },
      { title: "Ingestion and chunking", text: "Extract text from each format, split it into passages that keep their context, and attach metadata such as owner and date.", output: "Repeatable ingestion pipeline" },
      { title: "Embedding and hybrid search", text: "Index passages as embeddings and combine vector search with keyword search, then re-rank results for relevance.", output: "Tuned retrieval with measured precision" },
      { title: "Answer generation with citations", text: "Prompt the model to answer only from retrieved passages, cite them, and say when the answer is not in the sources.", output: "Grounded answers with source links" },
      { title: "Evaluation", text: "Test against a question set for retrieval precision and answer faithfulness, then fix the weakest cases.", output: "Evaluation report and baseline scores" },
      { title: "Launch and monitoring", text: "Deploy with feedback capture, re-indexing schedules and alerts for low-confidence or unanswered questions.", output: "Production assistant and monitoring" },
    ],
  },
  tech: {
    heading: "Technologies for RAG Development",
    intro: "We select embedding models, search engines and language models per project, based on measured retrieval quality, latency and data residency needs.",
    groups: [
      { title: "Orchestration", items: ["Python", "LangChain", "Embedding models"] },
      { title: "Search & storage", items: ["PostgreSQL + pgvector", "Elasticsearch", "Redis"] },
      { title: "Models & hosting", items: ["Cloud model endpoints", "Open-weight LLMs", "AWS"] },
    ],
  },
  compliance: {
    heading: "Security and UK GDPR in RAG",
    paragraphs: [
      "Retrieval respects user permissions, so people only see content they are already allowed to access. Personal data in documents stays subject to UK GDPR, and we can supply the technical detail for a Data Protection Impact Assessment.",
      "Retrieved documents and user input are treated as untrusted, with defences against prompt injection in line with the OWASP Top 10 for LLM Applications.",
    ],
  },
  industries: {
    heading: "Where RAG Helps Most",
    intro: "RAG suits any organisation with large, changing document collections. Two common starting points:",
    items: [
      { href: "/industries/enterprise-saas", title: "Enterprise SaaS", text: "In-product help and semantic search grounded in each customer's own data, isolated per tenant." },
      { href: "/industries/healthcare", title: "Healthcare & MedTech", text: "Staff assistants for guidelines and procedures, with health data kept inside a controlled environment." },
    ],
  },
  related: {
    heading: "Related AI Services",
    intro: "RAG is often the knowledge layer inside a larger system.",
    items: [
      { href: "/services/ai-development", title: "AI Development Services", text: "The full AI lifecycle, from discovery to monitored production." },
      { href: "/services/ai-agent-development", title: "AI Agent Development", text: "Agents that use retrieval as one of the tools they call." },
      { href: "/services/ai-chatbots", title: "AI Chatbot Development", text: "Customer-facing assistants grounded in your knowledge base." },
      { href: "/services/llm-development-fine-tuning", title: "LLM Development & Fine-Tuning", text: "Tune tone and format while RAG supplies current facts." },
      { href: "/hire/ai-developers", title: "Hire AI Developers", text: "Engineers who can extend and run your RAG platform." },
    ],
  },
  faqs: [
    {
      q: "How does RAG reduce AI hallucinations?",
      a: ["The model is instructed to answer only from retrieved passages and to cite them, so every claim can be checked. When the sources do not contain the answer, the assistant says so instead of guessing. Accuracy is measured on a question set before and after launch."],
    },
    {
      q: "Which document sources can a RAG system use?",
      a: ["Common sources include SharePoint, Google Drive, Confluence, PDFs, Word files, ticketing systems and databases. The source audit confirms formats and access rules before ingestion is built."],
    },
    {
      q: "Do users only see documents they are allowed to access?",
      a: ["Yes. Permissions are captured during ingestion and applied at retrieval time, so an assistant never surfaces a document a user could not open directly."],
    },
    {
      q: "How long does a RAG pilot take?",
      a: ["A focused pilot on one document collection typically fits within the 6–8 week MVP window. Timelines depend mostly on the number and condition of sources. To scope yours, [book a discovery call](/contact)."],
    },
  ],
  cta: {
    title: "Your Answers Are Already Written Down.",
    titleAccent: "Let's Make Them Findable.",
    body: {
      text: "Tell us which document collections your team searches most and who needs access. We will propose a pilot scope and an evaluation question set. RAG is one capability in our wider [[link]].",
      link: { anchor: "AI development services", href: "/services/ai-development" },
    },
    bring: ["The document sources in scope", "Typical questions people ask", "Access and residency rules"],
  },
  og: {
    title: "RAG Development",
    accent: "Cited answers from your documents",
    rows: [
      [["Answer with citations", "purple"]],
      [["Retrieve", "plain"], ["Re-rank", "plain"], ["Generate", "plain"]],
      [["Vector index", "teal"], ["Keyword search", "teal"]],
      [["SharePoint · PDFs · Wikis", "sun"]],
    ],
  },
} satisfies AiServicePageContent;
