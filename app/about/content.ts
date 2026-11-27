/*
 * /about content. Edit copy here; ./page.jsx only renders it.
 *
 * Rules followed: every service listed links to a live service page; no team
 * size, founding year, clients, awards, certifications, partnerships or
 * statistics are stated (none have been confirmed). Industry pages are still
 * placeholders, so industries are described but not linked.
 *
 * VERIFY (owner): founding year, team size and office address can be added to
 * ORG_FACTS in app/lib/site.ts once confirmed; the page shows them then.
 */

export const SEO = {
  // Absolute title (no " | ClickMasters" suffix, the brand is already in it): 50 chars.
  title: "About ClickMasters Artificial Intelligence Company",
  description:
    "Meet ClickMasters Artificial Intelligence Company: AI, automation and custom software built around real business needs for UK organisations.",
};

/** Downloadable company profile, generated from this file: npm run about:pdf */
export const PROFILE_PDF = {
  href: "/assets/About/clickmasters-company-profile.pdf",
  fileName: "ClickMasters-Company-Profile.pdf",
  label: "Download Company Profile (PDF)",
};

export const SECTIONS = [
  { id: "who-we-are", label: "Who We Are" },
  { id: "mission-vision", label: "Our Mission & Vision" },
  { id: "what-we-do", label: "What We Do" },
  { id: "expertise", label: "Our Expertise" },
  { id: "industries", label: "Industries We Serve" },
  { id: "approach", label: "Our Approach" },
  { id: "why-clickmasters", label: "Why Choose ClickMasters" },
  { id: "work-together", label: "Let's Work Together" },
];

export const HERO = {
  eyebrow: "About ClickMasters Artificial Intelligence Company",
  title: "Building Intelligent Technology for a",
  titleAccent: "Smarter Business Future",
  lead:
    "We are a software and artificial intelligence company that builds practical tools for UK businesses: AI that answers, predicts and automates, and the custom software, data and cloud foundations it needs to work reliably every day.",
};

export const WHO = {
  paragraphs: [
    "ClickMasters Artificial Intelligence Company designs and builds AI solutions and custom software for organisations that have outgrown spreadsheets, generic tools and manual workarounds. Our work starts with a business problem rather than a technology: a team spending hours on repetitive admin, customers waiting for answers that already exist in a document somewhere, reports that take days to assemble, or systems that do not talk to each other.",
    "Artificial intelligence is a large part of what we do, but it is rarely the whole answer. A language model is only useful when it can reach the right data safely; an automation is only valuable when it fits the way people actually work; a prediction only matters when it reaches a decision in time. That is why we combine AI with software engineering, data design and cloud infrastructure, so the result is a dependable system rather than a demonstration.",
    "Building technology around real requirements keeps projects honest. We agree what success looks like before we build, test ideas on real examples, and recommend simpler options, including off-the-shelf tools, when they would serve you better.",
  ],
  points: [
    "AI and software engineering in one team",
    "Built around your processes and data",
    "Practical, measurable outcomes over hype",
  ],
};

// Mission and vision copy lives in ./mission-vision/content.ts (MISSION_SUMMARY, VISION_SUMMARY).

export const SERVICE_GROUPS = [
  {
    title: "Artificial intelligence",
    intro: "From a first use case to AI running inside your day-to-day systems.",
    items: [
      { icon: "sparkle", title: "AI Development", text: "Custom AI solutions taken from discovery to production.", href: "/services/ai-development" },
      { icon: "flow", title: "AI Automation", text: "Repetitive, rules-heavy work handled automatically, with people kept in control.", href: "/services/ai-automation" },
      { icon: "robot", title: "AI Agent Development", text: "Agents that complete multi-step tasks across your tools, with clear limits.", href: "/services/ai-agent-development" },
      { icon: "magic", title: "Generative AI Development", text: "Drafts, summaries and content produced on-brand and checked.", href: "/services/generative-ai-development" },
      { icon: "node", title: "Machine Learning", text: "Prediction, scoring and anomaly detection models built on your data.", href: "/services/machine-learning" },
      { icon: "search", title: "RAG Development", text: "Assistants that answer from your own documents and show their sources.", href: "/services/rag-development" },
      { icon: "brain", title: "LLM Development & Fine-Tuning", text: "Language models adapted to your terminology and formats.", href: "/services/llm-development-fine-tuning" },
      { icon: "bulb", title: "AI Consulting & Strategy", text: "Use cases scored for value and feasibility, and a realistic roadmap.", href: "/services/ai-consulting-strategy" },
    ],
  },
  {
    title: "Software, data and cloud",
    intro: "The foundations that make intelligent features reliable.",
    items: [
      { icon: "code", title: "Custom Software Development", text: "Bespoke software built around the way your business works.", href: "/services/custom-software-development" },
      { icon: "web", title: "Web Application Development", text: "Fast, secure web platforms, portals and dashboards.", href: "/services/web-application-development" },
      { icon: "mobile", title: "Mobile App Development", text: "iOS and Android apps for customers and field teams.", href: "/services/mobile-app-development" },
      { icon: "rocket", title: "MVP & SaaS Development", text: "New products launched lean, then scaled with evidence.", href: "/services/mvp-saas-development" },
      { icon: "stack", title: "ERP & CRM Development", text: "One source of truth for customers, operations and finance.", href: "/services/erp-crm-development" },
      { icon: "cloud", title: "Cloud & DevOps", text: "Automated deployment, monitoring and secure cloud infrastructure.", href: "/services/cloud-devops" },
      { icon: "database", title: "Database Design & Development", text: "Well-modelled, fast and secure data foundations.", href: "/services/database-design" },
    ],
  },
];

export const EXPERTISE = {
  intro:
    "Our strength is the combination. Many AI projects stall because the model works but the software around it does not; many software projects miss value because nobody asked where intelligence could help. We bring both disciplines to the same table.",
  items: [
    { icon: "brain", title: "Artificial intelligence", text: "Language models, retrieval, machine learning and computer vision, chosen for the problem and evaluated on real examples before launch." },
    { icon: "code", title: "Software engineering", text: "Clean, tested and documented code, version control, code review and automated deployment as standard." },
    { icon: "target", title: "Business process understanding", text: "We map how work actually flows, where time is lost and where errors creep in, before proposing any technology." },
    { icon: "flow", title: "Intelligent automation", text: "Automations that handle the routine cases, flag exceptions to people and keep a record of what they did." },
    { icon: "stack", title: "Scalable digital solutions", text: "Architecture, data and cloud infrastructure sized for today and planned for growth, without premature complexity." },
    { icon: "web", title: "Modern application development", text: "Web, mobile and API development that gives AI features a usable, accessible interface." },
  ],
};

export const INDUSTRIES_NOTE =
  "Our services apply across sectors. These are areas where AI, automation and custom software commonly solve real problems; they are not claims of named client projects.";

export const INDUSTRIES = [
  { icon: "health", title: "Healthcare", text: "Document processing, scheduling and secure portals designed around sensitive data and strict access." },
  { icon: "bank", title: "Finance", text: "Automated checks, reconciliations and reporting with audit trails for every decision." },
  { icon: "cart", title: "Retail & e-commerce", text: "Product content, customer service assistants and demand forecasting connected to stock and orders." },
  { icon: "education", title: "Education", text: "Learning platforms, assessment tools and assistants that help learners find answers quickly." },
  { icon: "factory", title: "Manufacturing", text: "Quality inspection, production planning and anomaly detection on machine and process data." },
  { icon: "truck", title: "Logistics", text: "Fleet, routing and warehouse systems, with forecasting and automated paperwork." },
  { icon: "briefcase", title: "Professional services", text: "Document drafting, knowledge search and client portals that save fee-earners' time." },
  { icon: "home", title: "Real estate", text: "Listings, tenant communication and lease administration brought into one system." },
];

export const APPROACH = [
  { title: "Understand", text: "We learn how your business works, what is holding it back and what a good outcome would look like, in measurable terms where possible." },
  { title: "Plan", text: "We identify the right technology, which is sometimes a simpler option than AI, and define a practical solution, scope and milestones." },
  { title: "Design", text: "We design clear, user-focused screens and workflows, and agree how people and automation will hand work to each other." },
  { title: "Develop", text: "We build in short iterations with regular demos, using technologies that suit your systems and the team that will maintain them." },
  { title: "Test", text: "We check functionality, performance, security and usability, and evaluate AI features against real examples before launch." },
  { title: "Improve", text: "After launch we monitor, support and improve the solution as your requirements and the technology evolve." },
];

export const WHY = [
  { icon: "target", title: "Business-focused technology", text: "Every recommendation is tied to a business outcome, not to a trend or a tool we want to use." },
  { icon: "sparkle", title: "Practical AI implementation", text: "AI where it earns its place, tested on your data, with humans kept in control of important decisions." },
  { icon: "code", title: "Custom-built solutions", text: "Software shaped around your processes, so your team does not have to work around it." },
  { icon: "chat", title: "Clear communication", text: "Plain-English updates, regular demos and honest advice, including when not to build something." },
  { icon: "users", title: "User-centred development", text: "Designed with the people who will use it every day, so it is adopted rather than avoided." },
  { icon: "stack", title: "Scalable architecture", text: "Foundations that grow with you, planned without paying for complexity you do not yet need." },
  { icon: "shield", title: "Long-term maintainability", text: "Documented, tested and version-controlled, so you are never locked in to us." },
];

export const CTA = {
  title: "Have an Idea?",
  titleAccent: "Let's Build Something Intelligent.",
  text: "Whether you want to automate a time-consuming process, put AI to work on your own data or build a new platform from scratch, tell us what you are trying to achieve. We will give you an honest view of what is possible, what it involves and the most sensible first step.",
};
