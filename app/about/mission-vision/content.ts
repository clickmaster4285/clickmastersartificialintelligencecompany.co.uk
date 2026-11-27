/*
 * /about/mission-vision content, from "ClickMasters About Us: Mission & Vision
 * Section" (content pack, 26 Nov 2026). Edit copy here; ./page.jsx only renders it.
 *
 * Links: the pack's four (AI automation, machine learning, custom software
 * development, generative AI). "AI agents" stays unlinked, as the pack advises.
 * The /about page cards use the first sentence of each statement plus its
 * highlight (MISSION_SUMMARY / VISION_SUMMARY), as the pack suggests.
 */

export const PATH = "/about/mission-vision";

export const SEO = {
  // Rendered as "Mission and Vision: Practical AI for Business | ClickMasters" (60 chars).
  title: "Mission and Vision: Practical AI for Business",
  description:
    "Our mission and vision at ClickMasters Artificial Intelligence Company: making intelligent technology work for business, today and as it evolves.",
};

const IMG = "/assets/About/mission-vision";

/** HD photos from Unsplash (Unsplash License: free for commercial use, no attribution required). */
export const IMAGES = {
  // images.unsplash.com/photo-1531297484001-80022131f5a1
  hero: { src: `${IMG}/laptop-light-in-dark.webp`, width: 1600, height: 1133, alt: "A laptop opening in a dark room, its screen glowing with colour" },
  // images.unsplash.com/photo-1504384308090-c894fdcc538d
  mission: { src: `${IMG}/team-at-work-open-office.webp`, width: 1600, height: 1067, alt: "People working at rows of desks with laptops in a large open-plan office" },
  // images.unsplash.com/photo-1677442136019-21780ecad995
  vision: { src: `${IMG}/connected-ai-illustration.webp`, width: 1600, height: 900, alt: "Illustration of the letters AI surrounded by connected lines and points" },
} as const;

export const HERO = {
  eyebrow: "Mission & Vision",
  title: "Our Mission and Vision:",
  titleAccent: "Why We Exist, and Where We Are Heading",
  // Summarises the pack's present/future structure (Part 3, section 3).
  lead: "Our mission describes what we do now and how we do it. Our vision describes where we want business technology to go, and the part we intend to play in getting there.",
};

/** Body paragraphs: plain strings, or LinkedText items with several links ("[[0]]", "[[1]]"...). */
export type Para = string | { text: string; links: { anchor: string; href: string }[] };

export const MISSION = {
  label: "Our mission",
  title: "Making Intelligent Technology Work for Business",
  highlight: "Technology earns its place by solving real problems.",
  tense: "Present: what we do now, and how",
  paragraphs: [
    "ClickMasters Artificial Intelligence Company exists to help organisations turn artificial intelligence and modern software into tools that make everyday work easier, faster and more reliable. Too many AI projects stop at an impressive demonstration. Our purpose is to carry ideas all the way into dependable systems that people use every day.",
    {
      text: "We do that by starting with the business, not the technology. Before recommending anything, we learn each client's objectives, the way their work actually flows and the constraints they operate within. Only then do we choose the right tool, whether that is [[0]] to remove repetitive admin, [[1]] to bring evidence to everyday decisions, or [[2]] that connects information scattered across disconnected systems.",
      links: [
        { anchor: "AI automation", href: "/services/ai-automation" },
        { anchor: "machine learning", href: "/services/machine-learning" },
        { anchor: "custom software development", href: "/services/custom-software-development" },
      ],
    },
    "Responsible engineering runs through all of it: secure handling of data, software that is tested and maintainable, interfaces people find easy to use, and honest advice when a simpler solution would serve better.",
  ] as Para[],
  // The three themes of the three paragraphs (pack Part 3, section 3).
  themes: [
    { icon: "target", title: "Purpose", text: "From impressive demonstration to dependable, everyday systems." },
    { icon: "users", title: "Client-centred, practical innovation", text: "Business first: objectives, real workflows and constraints, then the right tool." },
    { icon: "shield", title: "Responsible engineering", text: "Secure data, tested and maintainable software, usable interfaces, honest advice." },
  ],
};

export const VISION = {
  label: "Our vision",
  title: "A More Intelligent and Connected Way of Working",
  highlight: "A future where intelligent technology helps every business move forward.",
  tense: "Future: where we want business technology to go",
  paragraphs: [
    "We see a future in which artificial intelligence is no longer an experiment, but a practical, trusted part of how organisations of every size operate, understood by the people who use it and accountable for the work it does.",
    {
      text: "In that future, a small firm can adopt intelligent tools as confidently as a large enterprise, at a pace and cost that suit it. Applications, data and automation work together as one connected system, so information moves where it is needed and people spend their time on judgement, relationships and ideas rather than repetitive tasks. Capabilities such as [[0]] and AI agents become everyday colleagues rather than novelties.",
      links: [{ anchor: "generative AI", href: "/services/generative-ai-development" }],
    },
    "The technology will keep changing, and so will we. We intend to keep learning, adapting and helping businesses build digital capabilities that last: working more intelligently, serving customers better and growing sustainably.",
  ] as Para[],
  themes: [
    { icon: "brain", title: "The future of AI", text: "Practical, trusted, understood by its users and accountable for its work." },
    { icon: "network", title: "Accessible and connected", text: "Small firms adopt AI as confidently as enterprises; systems work as one." },
    { icon: "growth", title: "Continuous evolution", text: "Learning and adapting to build digital capabilities that last." },
  ],
};

/** Short versions for the cards on /about (first sentence of each statement). */
export const MISSION_SUMMARY =
  "ClickMasters Artificial Intelligence Company exists to help organisations turn artificial intelligence and modern software into tools that make everyday work easier, faster and more reliable.";
export const VISION_SUMMARY =
  "We see a future in which artificial intelligence is no longer an experiment, but a practical, trusted part of how organisations of every size operate, understood by the people who use it and accountable for the work it does.";

export const CTA = {
  title: "Share the Problem You Want",
  titleAccent: "Technology to Solve",
  body: "Our mission starts with your business, not the technology. Tell us what you are trying to achieve and we will give you an honest view of the most sensible first step.",
};

type OgTone = "plain" | "purple" | "teal" | "sun";
export const OG: { title: string; accent: string; rows: [string, OgTone][][] } = {
  title: "Mission & Vision",
  accent: "Making intelligent technology work for business",
  rows: [
    [["Mission", "purple"], ["Solve real problems", "plain"]],
    [["Vision", "teal"], ["Intelligent, connected work", "plain"]],
    [["Practical · Responsible · Lasting", "sun"]],
  ],
};

