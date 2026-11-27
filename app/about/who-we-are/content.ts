/*
 * /about/who-we-are content, from "ClickMasters About Us: Who We Are Section"
 * (content pack, 26 Nov 2026). Edit copy here; ./page.jsx only renders it.
 *
 * Links: the pack's seven (AI automation, AI agent development, generative AI
 * development, machine learning development, custom software development,
 * /services, /contact). Chatbots are described but not linked (no live page).
 *
 * VERIFY (owner): "UK-focused" wording (vs "UK-based"); founding year, team
 * size and address are not stated until confirmed.
 */
import type { LinkedText } from "../../services/database-design/content";

export const PATH = "/about/who-we-are";

export const SEO = {
  // Rendered as "Who We Are: AI and Software Engineering Team | ClickMasters" (59 chars).
  title: "Who We Are: AI and Software Engineering Team",
  description:
    "Who we are at ClickMasters Artificial Intelligence Company: a UK-focused team building AI and custom software around how businesses really work.",
};

const IMG = "/assets/About/who-we-are";

/** HD photos from Unsplash (Unsplash License: free for commercial use, no attribution required). */
export const IMAGES = {
  // images.unsplash.com/photo-1521737604893-d14cc237f11d
  hero: { src: `${IMG}/team-working-session.webp`, width: 1600, height: 1050, alt: "A small team working together at a table with laptops" },
  // images.unsplash.com/photo-1551836022-d5d88e9218df
  philosophy: { src: `${IMG}/requirements-conversation.webp`, width: 1600, height: 1067, alt: "Two colleagues discussing requirements beside a laptop" },
  // images.unsplash.com/photo-1573164713988-8665fc963095
  expertise: { src: `${IMG}/cloud-infrastructure-review.webp`, width: 1600, height: 1068, alt: "Two engineers reviewing systems on tablets beside server racks" },
  // images.unsplash.com/photo-1556761175-b413da4baf72
  clients: { src: `${IMG}/developers-open-office.webp`, width: 1600, height: 1200, alt: "Developers talking through a problem at desks in an open-plan office" },
} as const;

export const HERO = {
  eyebrow: "Who We Are",
  title: "Engineering Intelligent Solutions for",
  titleAccent: "How Businesses Really Work",
  lead:
    "ClickMasters Artificial Intelligence Company is a UK-focused technology business working where artificial intelligence, software engineering and business operations meet. We design and build AI solutions and custom software for organisations that want technology to take real work off their teams' plates: answering questions faster, processing information more accurately, connecting systems that should never have been separate, and giving people better information when decisions are made.",
};

export const PROBLEM = {
  text:
    "Most of the businesses we speak to are not short of ideas or software. They are short of time, joined-up information and confidence that a new technology will actually help. Customer queries wait for answers that already sit in a policy document. Skilled staff spend hours re-keying data from emails into spreadsheets. Reports take days to assemble because the figures live in five different places. Artificial intelligence can help with all of these, but only when it is built into reliable software, connected to the right data and designed around the people who will use it. That combination is what we do.",
  // Short labels for the three examples in the paragraph above (visual summary only).
  examples: [
    { icon: "chat", title: "Queries waiting", text: "Answers already sit in a policy document." },
    { icon: "copy", title: "Data re-keyed by hand", text: "Hours moving details from emails to spreadsheets." },
    { icon: "report", title: "Reports that take days", text: "Figures spread across five different places." },
  ],
};

export const PHILOSOPHY = {
  title: "Technology Should Remove Complexity, Not Add It",
  lead: "We believe the measure of good technology is simple: does it make a meaningful job easier, faster or more reliable? If it does not, it is complexity your business has to carry.",
  paragraphs: [
    "That belief shapes how we work. We start by understanding your business requirements and how the work really flows today, including the workarounds, before we recommend any technology. We build around real operational needs rather than fashionable tools. Sometimes the right answer is a language model; sometimes it is a well-designed database, a clear set of rules or a straightforward integration between two systems you already own. We will tell you which, even when the simpler option means a smaller project.",
    "We also believe AI should be useful and accessible, not mysterious. The people who rely on a system should understand what it does, where its answers come from and when a person needs to step in. Innovation matters, but so do usability, reliability and the ability to grow without being rebuilt. We aim for all four.",
  ],
  // The four qualities named in the last sentence above.
  pillars: ["Innovation", "Usability", "Reliability", "Room to grow"],
};

export type ExpertiseItem = { icon: string; title: string; text: LinkedText };

export const EXPERTISE = {
  title: "Where AI and Software Engineering Work Together",
  intro: "Our services cover the full journey from an intelligent idea to a dependable system running inside your business:",
  items: [
    { icon: "flow", title: "AI automation", text: { text: "Many organisations lose hours every week to repetitive, rules-heavy tasks: reading emails, extracting details from documents, updating records and chasing approvals. Our [[link]] handle the routine steps automatically, use AI only where judgement is needed, and route exceptions to the right person with the context already gathered.", link: { anchor: "AI automation services", href: "/services/ai-automation" } } },
    { icon: "robot", title: "AI agents", text: { text: "Where a task involves several steps across different tools, such as checking a status, looking up a record and drafting a response, our [[link]] creates assistants that complete the work within clearly defined limits, with human approval for anything high-impact.", link: { anchor: "AI agent development", href: "/services/ai-agent-development" } } },
    { icon: "magic", title: "Generative AI", text: { text: "Drafting, summarising and producing content takes skilled people away from higher-value work. Our [[link]] produces on-brand drafts, summaries and documents that people review, rather than starting from a blank page.", link: { anchor: "generative AI development", href: "/services/generative-ai-development" } } },
    { icon: "chatbot", title: "Intelligent assistants and chatbots", text: { text: "Conversational assistants for customers and staff work best when they answer from your own knowledge rather than guessing. We ground them in your documents and data, so answers are accurate, current and show their sources." } },
    { icon: "node", title: "Machine learning", text: { text: "Your historical data often holds the answer to questions currently answered by instinct: which customers are likely to leave, which orders will arrive late, which transactions look unusual. Our [[link]] turns that history into prediction, scoring and anomaly detection that reaches people at the moment of decision.", link: { anchor: "machine learning development", href: "/services/machine-learning" } } },
    { icon: "code", title: "Custom software and web applications", text: { text: "AI only delivers value inside software people actually use. Our [[link]] and web application work builds the portals, dashboards, business systems and integrations that turn intelligent features into everyday tools.", link: { anchor: "custom software development", href: "/services/custom-software-development" } } },
    { icon: "cloud", title: "Cloud and modern infrastructure", text: { text: "Automated deployment, monitoring and secure cloud environments keep everything running reliably, and allow it to scale as your business grows." } },
  ] as ExpertiseItem[],
  outro: "Together, these capabilities help businesses improve workflows, launch new digital products, manage information more effectively and give customers faster, more consistent experiences.",
};

export const APPROACH = {
  title: "A Business-First Approach to Every Project",
  intro: "Every engagement follows the same disciplined thinking, whatever its size:",
  steps: [
    { title: "Understand the objective.", text: "We start with what you are trying to achieve and how you will know it has worked, in measurable terms wherever possible." },
    { title: "Find the real opportunity.", text: "We map how the work happens today and where time, money or accuracy is being lost." },
    { title: "Choose the right approach.", text: "We evaluate options honestly, including off-the-shelf tools, simple automation and AI, and recommend the one that fits your goals, data and budget." },
    { title: "Design around people.", text: "Screens, workflows and the hand-offs between people and automation are designed with the users who will rely on them every day." },
    { title: "Build and validate.", text: "We develop in short iterations with regular demonstrations, and test AI features against real examples from your business before they go live." },
    { title: "Plan for the future.", text: "Documentation, testing, security and sensible architecture keep the solution maintainable, scalable and yours to own." },
  ],
};

export const CLIENTS = {
  title: "Who We Work With",
  intro: "We work with organisations at very different stages.",
  // The three stages described in the pack's first paragraph.
  stages: [
    { icon: "rocket", title: "Start-ups", text: "Often need a focused first version of a product to test an idea with real users." },
    { icon: "growth", title: "Growing businesses", text: "Typically need to remove manual work that no longer scales and to connect the tools they adopted along the way." },
    { icon: "building", title: "Established organisations", text: "Often want to introduce AI into existing systems safely, with proper governance and without disrupting day-to-day operations." },
  ],
  outro: "Each of these situations calls for a different answer. A start-up does not need enterprise infrastructure on day one, and an established business should not trust its operations to a prototype. We select technology according to each organisation's objectives, risks, budget and the team that will run it after launch.",
};

export const COMMITMENT = {
  title: "Our Commitment",
  text: "We are committed to thoughtful engineering, practical innovation and clear, honest communication. That means plain-English updates instead of jargon, realistic advice instead of inflated promises, and solutions measured by the difference they make to your business rather than by how advanced they sound. When we finish a project, we want you to have a system your team trusts, understands and can build on.",
  // Contrasts taken from the paragraph above.
  pairs: [
    ["Plain-English updates", "instead of jargon"],
    ["Realistic advice", "instead of inflated promises"],
    ["Measured by the difference made", "not by how advanced it sounds"],
  ],
};

export const CTA = {
  // The pack's transition line (with both anchors) is rendered under this heading in page.jsx.
  title: "Turn Your Next Technology Idea Into",
  titleAccent: "a Practical Solution",
};

/** Other parts of the About Us page (shown at the end of this page). */
export const MORE_ABOUT = [
  { label: "Our Mission & Vision", href: "/about/mission-vision" },
  { label: "What We Do", href: "/about#what-we-do" },
  { label: "Industries We Serve", href: "/about#industries" },
  { label: "Our Approach", href: "/about#approach" },
  { label: "Why Choose ClickMasters", href: "/about#why-clickmasters" },
];

type OgTone = "plain" | "purple" | "teal" | "sun";
export const OG: { title: string; accent: string; rows: [string, OgTone][][] } = {
  title: "Who We Are",
  accent: "Intelligent solutions for how businesses really work",
  rows: [
    [["AI", "purple"], ["Software engineering", "purple"], ["Operations", "teal"]],
    [["Remove complexity, not add it", "sun"]],
    [["Start-ups", "plain"], ["Growing", "plain"], ["Established", "plain"]],
  ],
};
