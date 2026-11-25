import { ROUTES, absoluteUrl } from "../lib/site";

/**
 * Site navigation config: the single source of truth for the header, footer,
 * SiteNavigationElement JSON-LD, placeholder landing pages and the homepage's
 * "is this page live?" checks. Components only render from this file.
 *
 * Every link has ONE switch, `status`:
 *   - "live"        The real page exists. Linked everywhere, included in the
 *                   sitemap and in SiteNavigationElement schema.
 *   - "placeholder" No real page yet. Shown in the menu and served by the
 *                   shared placeholder template (noindex, follow) so the link
 *                   is never broken. Replace with a real page, then set "live".
 *   - "planned"     Hidden from every menu and no page is generated.
 *
 * To launch a page: create app/<section>/<slug>/page.tsx with real content,
 * then change its status here to "live". (A real page folder takes precedence
 * over the [slug] placeholder route.)
 */
export type NavStatus = "live" | "placeholder" | "planned";

export type NavLink = {
  label: string;
  href: string;
  status: NavStatus;
  /** One short line shown in menus and used as the placeholder page intro. */
  description?: string;
  /** Icon key, mapped to an icon in Navbar.jsx. */
  icon?: string;
  /** Search phrase the page should target (planning / placeholder titles). */
  keyword?: string;
  /**
   * false = the page exists (and is in the sitemap if live) but is not shown
   * in the header menu, to keep a long mega menu column short.
   */
  inMenu?: boolean;
};

export type NavGroup = {
  heading: string;
  items: NavLink[];
  /** Link shown under the column, e.g. "View all AI services". */
  viewAll?: NavLink;
};

export type NavItem = NavLink & {
  /** Short intro shown at the top of a dropdown and on the hub page. */
  intro?: string;
  /** Simple dropdown (max 8). */
  children?: NavLink[];
  /** Mega menu columns (max 3). */
  groups?: NavGroup[];
  /** Links in the panel footer, e.g. "View All Services". */
  footerLinks?: NavLink[];
  /** Other paths that should highlight this item as the active parent. */
  activePaths?: string[];
  /** Highlight card beside the mega menu (desktop). */
  featured?: { eyebrow: string; title: string; text: string; points: string[]; cta: { label: string; href: string } };
};

const L = (label: string, href: string, status: NavStatus, extra: Partial<NavLink> = {}): NavLink => ({
  label,
  href,
  status,
  ...extra,
});

export const NAV_ITEMS: NavItem[] = [
  {
    ...L("Services", "/services", "live", { keyword: "AI software development services UK" }),
    groups: [
      {
        heading: "Software Development",
        items: [
          L("Custom Software Development", "/services/custom-software-development", "live", { icon: "code", description: "Bespoke software built around your workflows", keyword: "custom software development UK" }),
          L("Web Application Development", "/services/web-application-development", "live", { icon: "web", description: "Fast, secure React and Next.js platforms", keyword: "web application development UK" }),
          L("Mobile App Development", "/services/mobile-app-development", "live", { icon: "mobile", description: "iOS, Android, Flutter and React Native", keyword: "mobile app development UK" }),
          L("MVP & SaaS Development", "/services/mvp-saas-development", "live", { icon: "rocket", description: "Launch and validate your product in weeks", keyword: "MVP development company UK" }),
        ],
      },
      {
        heading: "AI Services",
        // The menu shows the parent page plus the top six; every AI page is
        // listed on the /services hub (#ai-services) and in the sitemap.
        items: [
          L("AI Development Services", "/services/ai-development", "live", { icon: "sparkle", description: "Custom AI, from discovery to production", keyword: "AI development services UK" }),
          L("RAG Development", "/services/rag-development", "live", { icon: "search", description: "Cited answers from your own documents", keyword: "RAG development services UK" }),
          L("LLM Development & Fine-Tuning", "/services/llm-development-fine-tuning", "live", { icon: "brain", description: "Models tuned to your terms and formats", keyword: "LLM fine-tuning services UK" }),
          L("AI Agent Development", "/services/ai-agent-development", "live", { icon: "robot", description: "Agents that complete multi-step tasks", keyword: "AI agent development UK" }),
          L("Generative AI Development", "/services/generative-ai-development", "live", { icon: "magic", description: "Drafts, summaries and images on-brand", keyword: "generative AI development UK" }),
          L("AI Automation Services", "/services/ai-automation", "live", { icon: "flow", description: "Automate repetitive work and cut costs", keyword: "AI automation services UK" }),
          L("Machine Learning Development", "/services/machine-learning", "placeholder", { icon: "node", description: "Predictive models and data pipelines", keyword: "machine learning development company UK" }),
          L("AI Chatbot Development", "/services/ai-chatbots", "placeholder", { icon: "chat", description: "24/7 assistants for support and sales", keyword: "AI chatbot development UK", inMenu: false }),
          L("Custom AI Development", "/services/custom-ai-development", "live", { icon: "code", description: "Bespoke AI software around your data", keyword: "custom AI development UK", inMenu: false }),
          L("NLP Development", "/services/nlp-development", "live", { icon: "chat", description: "Classify, extract and redact text", keyword: "NLP development services UK", inMenu: false }),
          L("Computer Vision Development", "/services/computer-vision-development", "live", { icon: "eye", description: "Inspection and document scanning", keyword: "computer vision development UK", inMenu: false }),
          L("Predictive Analytics", "/services/predictive-analytics", "live", { icon: "chart", description: "Forecast demand, churn and risk", keyword: "predictive analytics services UK", inMenu: false }),
          L("AI Consulting & Strategy", "/services/ai-consulting-strategy", "live", { icon: "bulb", description: "Use-case scoring and AI roadmaps", keyword: "AI consulting UK", inMenu: false }),
        ],
        viewAll: L("View all AI services", "/services#ai-services", "live"),
      },
      {
        heading: "Enterprise & Cloud",
        items: [
          L("ERP & CRM Development", "/services/erp-crm-development", "placeholder", { icon: "stack", description: "One source of truth for your operations", keyword: "ERP and CRM development UK" }),
          L("Cloud Solutions & DevOps", "/services/cloud-devops", "placeholder", { icon: "cloud", description: "CI/CD on AWS, Azure and Google Cloud", keyword: "cloud DevOps services UK" }),
          L("Database Design & Management", "/services/database-design", "placeholder", { icon: "database", description: "PostgreSQL, MongoDB, MySQL and Redis", keyword: "database design services UK" }),
        ],
      },
    ],
    footerLinks: [L("View All Services", "/services", "live")],
    featured: {
      eyebrow: "Free consultation",
      title: "Not sure where to start?",
      text: "Tell us your idea and get a clear scope, timeline and estimate.",
      points: ["MVPs in 6 to 8 weeks", "Agile sprints, weekly demos", "24/7 support after launch"],
      cta: { label: "Get a Free Quote", href: "/contact" },
    },
  },
  {
    ...L("Solutions", "/solutions", "live", { keyword: "AI software solutions UK" }),
    intro: "Ready-to-deploy systems you can customise and launch faster.",
    children: [
      L("ERP Software", "/solutions/erp-software", "live", { icon: "building", description: "Finance, inventory and HR in one place", keyword: "ERP software UK" }),
      L("CRM Software", "/solutions/crm-software", "live", { icon: "contacts", description: "Pipelines, contacts and automation", keyword: "custom CRM software UK" }),
      L("SaaS Platform Development", "/solutions/saas-platform", "placeholder", { icon: "apps", description: "Multi-tenant platforms with billing built in", keyword: "SaaS platform development UK" }),
      L("Learning Management System (LMS)", "/solutions/lms-development", "live", { icon: "graduation", description: "Courses, assessments and reporting", keyword: "LMS development UK" }),
      L("Inventory & Warehouse Management", "/solutions/inventory-management", "live", { icon: "archive", description: "Real-time stock across locations", keyword: "custom inventory management software UK" }),
      L("Fleet Management Software", "/solutions/fleet-management", "live", { icon: "truck", description: "Tracking, routing and dispatch", keyword: "custom fleet management software UK" }),
    ],
    footerLinks: [L("All Solutions", "/solutions", "live")],
  },
  {
    ...L("Industries", "/industries", "live", { keyword: "industry software development UK" }),
    intro: "Software shaped around how your sector actually works.",
    activePaths: ["/locations"],
    children: [
      L("Healthcare & MedTech", "/industries/healthcare", "placeholder", { icon: "health", description: "Patient portals and EHR integrations", keyword: "healthcare software development UK" }),
      L("Finance & Fintech", "/industries/finance", "placeholder", { icon: "bank", description: "Billing, ledgers and compliance", keyword: "fintech software development UK" }),
      L("E-Commerce", "/industries/ecommerce", "placeholder", { icon: "cart", description: "Marketplaces and payment gateways", keyword: "ecommerce development company UK" }),
      L("EdTech & E-Learning", "/industries/edtech", "placeholder", { icon: "book", description: "LMS platforms and student dashboards", keyword: "edtech software development UK" }),
      L("Real Estate", "/industries/real-estate", "placeholder", { icon: "home", description: "Listings, tenants and lease automation", keyword: "real estate software development UK" }),
      L("Supply Chain & Logistics", "/industries/logistics", "placeholder", { icon: "route", description: "Fleet, routing and warehousing", keyword: "logistics software development UK" }),
      L("Enterprise SaaS", "/industries/enterprise-saas", "placeholder", { icon: "instance", description: "Multi-tenant platforms and billing", keyword: "enterprise SaaS development UK" }),
      L("Smart Manufacturing", "/industries/manufacturing", "placeholder", { icon: "settings", description: "MES and production planning", keyword: "manufacturing software development UK" }),
    ],
    footerLinks: [L("UK Locations", "/locations", "live")],
  },
  {
    ...L("Technologies", "/technologies", "placeholder", { keyword: "software development technologies", description: "The proven stacks we use to build secure, scalable software." }),
    intro: "Proven, modern stacks chosen for performance and scale.",
    children: [
      L("React Development", "/technologies/react", "placeholder", { icon: "react", description: "Interactive, component-based front ends", keyword: "React development company UK" }),
      L("Next.js Development", "/technologies/nextjs", "placeholder", { icon: "nextjs", description: "Fast, SEO-friendly web applications", keyword: "Next.js development agency UK" }),
      L("Node.js Development", "/technologies/nodejs", "placeholder", { icon: "node", description: "Scalable APIs and real-time back ends", keyword: "Node.js development company UK" }),
      L("Python & AI Development", "/technologies/python-ai", "placeholder", { icon: "python", description: "Machine learning, data and automation", keyword: "Python AI development UK" }),
      L("Laravel Development", "/technologies/laravel", "placeholder", { icon: "laravel", description: "Robust PHP platforms and portals", keyword: "Laravel development company UK" }),
      L("Flutter App Development", "/technologies/flutter", "placeholder", { icon: "flutter", description: "One codebase for iOS and Android", keyword: "Flutter app development UK" }),
      L("AWS & Cloud Development", "/technologies/aws-cloud", "placeholder", { icon: "aws", description: "Secure, scalable cloud infrastructure", keyword: "AWS development services UK" }),
    ],
    footerLinks: [L("All Technologies", "/technologies", "placeholder")],
  },
  {
    ...L("Hire", "/hire", "placeholder", { keyword: "hire software developers UK", description: "Flexible ways to add experienced developers to your team." }),
    intro: "Vetted developers who join your team in days, not months.",
    children: [
      L("Hire AI Developers", "/hire/ai-developers", "placeholder", { icon: "cpu", description: "ML, LLM and automation specialists", keyword: "hire AI developers UK" }),
      L("Hire a Dedicated Software Team", "/hire/dedicated-team", "placeholder", { icon: "team", description: "A full squad focused on your product", keyword: "dedicated software development team UK" }),
      L("Hire React Developers", "/hire/react-developers", "placeholder", { icon: "react", description: "Front-end engineers for modern UIs", keyword: "hire React developers UK" }),
      L("Hire Node.js Developers", "/hire/nodejs-developers", "placeholder", { icon: "node", description: "Back-end engineers for APIs at scale", keyword: "hire Node.js developers UK" }),
      L("Hire Flutter Developers", "/hire/flutter-developers", "placeholder", { icon: "flutter", description: "Cross-platform mobile specialists", keyword: "hire Flutter developers UK" }),
      L("IT Staff Augmentation", "/hire/staff-augmentation", "placeholder", { icon: "useradd", description: "Scale your team up or down on demand", keyword: "IT staff augmentation UK" }),
    ],
    footerLinks: [L("All Hiring Models", "/hire", "placeholder")],
  },
  L("Case Studies", "/case-studies", "live", { keyword: "software development case studies" }),
  {
    ...L("Resources", "/resources", "placeholder", { keyword: "AI software development resources", description: "Guides, tools and templates for planning your software project." }),
    intro: "Guides, tools and templates to plan your next build.",
    activePaths: ["/blog"],
    children: [
      L("Blog", "/blog", "live", { icon: "article", description: "AI and software development insights", keyword: "AI software development blog" }),
      L("Guides & Whitepapers", "/resources/guides", "placeholder", { icon: "guide", description: "In-depth playbooks and reference architectures", keyword: "AI implementation guide" }),
      L("Free Tools & Calculators", "/resources/free-tools", "placeholder", { icon: "tools", description: "Cost calculator, AI ROI calculator, readiness quiz", keyword: "software development cost calculator UK" }),
      L("Free Templates & UI Kits", "/resources/templates", "placeholder", { icon: "template", description: "Figma dashboard kit, SRS templates, MVP checklist", keyword: "software requirements template" }),
      L("Software & AI Glossary", "/resources/glossary", "placeholder", { icon: "glossary", description: "Plain-English definitions of key terms", keyword: "AI glossary" }),
      L("FAQs", "/#faq", "live", { icon: "faq", description: "Timelines, pricing, security and support", keyword: "software development FAQs" }),
    ],
    footerLinks: [L("All Resources", "/resources", "placeholder")],
  },
  L("About", "/about", "live", { keyword: "about ClickMasters" }),
];

export const NAV_CTA = { label: "Get a Free Quote", href: "/contact" } as const;

/** Links that only appear in the footer. */
export const FOOTER_LINKS = {
  aiDevelopment: L("AI Development", "/services/ai-development", "live"),
  locations: L("Locations", "/locations", "live"),
  contact: L("Contact", "/contact", "live"),
  caseStudies: L("Case Studies", "/case-studies", "live"),
  about: L("About Us", "/about", "live"),
  blog: L("Blog", "/blog", "live"),
  // TODO: add real policy text, then set to "live" (a placeholder legal page would hurt trust).
  privacy: L("Privacy Policy", "/privacy-policy", "planned"),
  terms: L("Terms & Conditions", "/terms", "planned"),
} as const;

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

export const isVisible = (link: NavLink) => link.status !== "planned";

/** Visible dropdown / mega menu links of an item. */
export function childrenOf(item: NavItem): NavLink[] {
  const all = item.groups ? item.groups.flatMap((g) => g.items) : item.children ?? [];
  return all.filter(isVisible);
}

/** Shown in the header menu: not planned, and not opted out with inMenu: false. */
export const isInMenu = (link: NavLink) => isVisible(link) && link.inMenu !== false;

/** Mega menu groups as rendered in the header (empty groups dropped). */
export function visibleGroups(item: NavItem): NavGroup[] {
  return (item.groups ?? [])
    .map((g) => ({ ...g, items: g.items.filter(isInMenu) }))
    .filter((g) => g.items.length > 0);
}

/** Links an item shows in its header panel (mega menu or simple dropdown). */
export function menuChildrenOf(item: NavItem): NavLink[] {
  return item.groups ? visibleGroups(item).flatMap((g) => g.items) : childrenOf(item).filter(isInMenu);
}

/** Header items to render (planned top-level items are hidden). */
export const visibleNavItems = () => NAV_ITEMS.filter(isVisible);

/** Every link in the config, with its parent (top-level items have none). */
function allLinks(): { link: NavLink; parent?: NavItem }[] {
  const out: { link: NavLink; parent?: NavItem }[] = [];
  for (const item of NAV_ITEMS) {
    out.push({ link: item });
    const kids = item.groups ? item.groups.flatMap((g) => g.items) : item.children ?? [];
    for (const k of kids) out.push({ link: k, parent: item });
  }
  for (const link of Object.values(FOOTER_LINKS)) out.push({ link });
  return out;
}

/** Find the config entry for a path (first match wins). */
export function findNavPage(href: string): { link: NavLink; parent?: NavItem } | undefined {
  return allLinks().find(({ link }) => link.href === href);
}

/** Paths whose real page exists (status "live"), plus all core routes. */
export function livePaths(): Set<string> {
  const set = new Set<string>(Object.values(ROUTES).map((r) => r.path));
  for (const { link } of allLinks()) if (link.status === "live") set.add(link.href.split("#")[0] || "/");
  return set;
}

/** Slugs to pre-render with the placeholder template for a section, e.g. "/services". */
export function placeholderParams(section: string): { slug: string }[] {
  const prefix = `${section}/`;
  const slugs = new Set<string>();
  for (const { link } of allLinks()) {
    if (link.status !== "placeholder" || !link.href.startsWith(prefix)) continue;
    const slug = link.href.slice(prefix.length);
    if (slug && !slug.includes("/")) slugs.add(slug);
  }
  return [...slugs].map((slug) => ({ slug }));
}

/** Footer navigation columns, generated from the config. */
export function footerColumns(): { heading: string; links: NavLink[] }[] {
  const explore: NavLink[] = NAV_ITEMS.filter((i) => isVisible(i) && (i.groups || i.children)).flatMap((i) => {
    const link = { ...i, label: i.href === "/hire" ? "Hire Developers" : i.label };
    // "AI Development" sits directly under "Services".
    return i.href === "/services" ? [link, FOOTER_LINKS.aiDevelopment] : [link];
  });
  return [
    { heading: "Explore", links: explore },
    {
      heading: "Company",
      links: [FOOTER_LINKS.about, FOOTER_LINKS.caseStudies, FOOTER_LINKS.locations, FOOTER_LINKS.blog, FOOTER_LINKS.contact].filter(isVisible),
    },
    { heading: "Legal", links: [FOOTER_LINKS.privacy, FOOTER_LINKS.terms].filter(isVisible) },
  ].filter((c) => c.links.length > 0);
}

/**
 * SiteNavigationElement JSON-LD for the main menu. Only "live" URLs are
 * included (placeholder pages are noindex).
 */
export function siteNavigationJsonLd() {
  const entries: { name: string; url: string }[] = [];
  const seen = new Set<string>();
  const add = (link: NavLink) => {
    if (link.status !== "live" || seen.has(link.href)) return;
    seen.add(link.href);
    entries.push({ name: link.label, url: absoluteUrl(link.href) });
  };
  for (const item of NAV_ITEMS) {
    add(item);
    for (const child of menuChildrenOf(item)) add(child);
  }
  add(L(NAV_CTA.label, NAV_CTA.href, "live"));

  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Main navigation",
    itemListElement: entries.map((e, i) => ({
      "@type": "SiteNavigationElement",
      position: i + 1,
      name: e.name,
      url: e.url,
    })),
  };
}
