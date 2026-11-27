/*
 * /portfolio content, from the owner's "ClickMasters Digital Marketing Agency"
 * portfolio deck (Nov 2026), rewritten for a UK audience.
 * Edit copy here; page.jsx and PortfolioExplorer.jsx only render it.
 * After editing, run `npm run portfolio:pdf` to rebuild the downloadable PDF.
 *
 * Rules for this file (see CONTENT-CLAIMS-REPORT.md):
 * - Only work evidenced in the deck is listed. No client results, testimonials
 *   or technologies are added unless the owner can evidence them.
 * - `brief` and `solution` restate what the deck shows (screenshots, pages and
 *   features). They describe the build, not outcomes. Add results only with
 *   figures the client has approved for publication.
 * - Per-project technology stacks are not recorded in the deck, so none are
 *   shown. Add a `stack` field once confirmed.
 * - Only the UK phone line is shown (CONTACT.phones[0] in lib/site.ts).
 * - `url` is linked only while the site is live (`live: true`). Live status
 *   was checked on 26 Nov 2026; the other domains did not resolve or returned
 *   errors. Re-check and set `live: true` when a client's site is back up.
 * - A theme demo in the deck (ubit.3akis.eu "fashion" demo) was left out:
 *   it is a template preview, not a client website.
 */

export const PATH = "/portfolio";

/** Downloadable PDF, generated from this file by scripts/build-portfolio-pdf.mjs. */
export const PDF = {
  href: "/assets/portfolio/clickmasters-portfolio.pdf",
  fileName: "ClickMasters-Portfolio.pdf",
  label: "Download Portfolio (PDF)",
};

export const SEO = {
  title: "Portfolio: Web, E-commerce & Digital Projects",
  description:
    "Websites, online stores and web platforms delivered by ClickMasters, with what each client needed, what we built and real Search Console results. Download the PDF.",
};

export const HERO = {
  eyebrow: "Portfolio",
  title: "Our Portfolio:",
  titleAccent: "Digital Products Built Around Real Business Needs",
  lead:
    "A selection of websites, online stores and web platforms delivered by the ClickMasters team for clients in the UAE, Pakistan and the United States. For each project you can see what the client needed and what we built, and, where the site is still live, visit it yourself.",
};

/*
 * VERIFY (owner): the two totals below come from the portfolio deck. Keep them
 * only if you can evidence them on request (client list, project records).
 */
export const STATS: { value: string; label: string }[] = [
  { value: "11", label: "Projects on this page" },
  { value: "1,500+", label: "Clients served" },
  { value: "1,230+", label: "Projects delivered" },
  { value: "3", label: "Countries in this selection" },
];

export type ProjectCategory = "Company websites" | "E-commerce" | "Professional services" | "Property & education";

export const CATEGORIES: ProjectCategory[] = ["Company websites", "E-commerce", "Professional services", "Property & education"];

export type ServiceLink = { label: string; href: string };

/* Only routes with status "live" in app/config/navigation.ts. */
const S = {
  web: { label: "Web application development", href: "/services/web-application-development" },
  mvp: { label: "MVP and SaaS development", href: "/services/mvp-saas-development" },
  crm: { label: "CRM software", href: "/solutions/crm-software" },
  inventory: { label: "Inventory management software", href: "/solutions/inventory-management" },
  lms: { label: "Learning management systems", href: "/solutions/lms-development" },
} satisfies Record<string, ServiceLink>;

export type Project = {
  slug: string;
  client: string;
  category: ProjectCategory;
  type: string;
  location: string;
  summary: string;
  /** What the client needed the site to do (as shown in the delivered work). */
  brief: string;
  /** What we built to meet it. */
  solution: string;
  deliverables: string[];
  related: ServiceLink[];
  featured?: boolean;
  domain: string;
  url: string;
  live: boolean;
  image: { src: string; width: number; height: number; alt: string };
};

const IMG = "/assets/portfolio/projects";

export const PROJECTS: Project[] = [
  {
    slug: "top-sarzameen",
    client: "Top Sarzameen",
    category: "Property & education",
    type: "Property portal",
    location: "Pakistan",
    featured: true,
    summary: "A property portal where visitors search homes to buy or rent by city, type and price, and owners can add their own listings.",
    brief:
      "The client wanted a property marketplace rather than a brochure site. Buyers and tenants needed to narrow down listings quickly, and property owners needed a way to publish homes themselves without going through the client's team.",
    solution:
      "We built a two-sided portal. Visitors filter listings by city, property type, purpose and price, while registered owners create accounts and submit their own listings, which makes the site a working web application rather than a set of pages.",
    deliverables: ["Property search", "Listing submission", "User accounts"],
    related: [S.web, S.mvp],
    domain: "topsarzameen.com",
    url: "https://www.topsarzameen.com/",
    live: false,
    image: { src: `${IMG}/topsarzameen-hd.webp`, width: 1600, height: 933, alt: "Top Sarzameen property search portal on a laptop and a phone" },
  },
  {
    slug: "practice-quran",
    client: "Practice Quran",
    category: "Property & education",
    type: "Online learning website",
    location: "Pakistan",
    featured: true,
    summary: "An online learning website for one-to-one Quran classes, with course packages and a free-trial registration form on the home page.",
    brief:
      "An online tutoring provider needed families to understand the courses on offer and book a first lesson without a phone call, on whatever device they happened to be using.",
    solution:
      "We structured the site around course packages and put a free-trial registration form on the home page, so a visitor can go from interest to a booked trial in one step. The layout was designed for phones first.",
    deliverables: ["Course pages", "Trial sign-up form", "Mobile layout"],
    related: [S.lms, S.web],
    domain: "practicequran.com",
    url: "https://www.practicequran.com/",
    live: true,
    image: { src: `${IMG}/practice-quran-hd.webp`, width: 1600, height: 933, alt: "Practice Quran online learning website on a laptop and a phone" },
  },
  {
    slug: "acss-electronics-shop",
    client: "Alpha Capital Security Systems: Online Shop",
    category: "E-commerce",
    type: "E-commerce store",
    location: "Dubai, UAE",
    featured: true,
    summary: "An online electronics shop for security cameras and smart-home devices, with product categories, search, sale badges and a mobile-first checkout.",
    brief:
      "Alongside its corporate site, the security company wanted to sell cameras and smart-home devices online, with a catalogue large enough that customers needed help finding the right product.",
    solution:
      "We built a separate shop with a categorised catalogue, product search, sale badges for promotions and a checkout designed for phones first, linked to the company's main website.",
    deliverables: ["Product catalogue", "Search and filters", "Mobile checkout"],
    related: [S.web, S.inventory],
    domain: "shop.acssllc.ae",
    url: "https://shop.acssllc.ae/",
    live: false,
    image: { src: `${IMG}/acss-shop-hd.webp`, width: 1600, height: 933, alt: "Electronics shop with security camera products, on a laptop and phone" },
  },
  {
    slug: "alpha-capital-security-systems",
    client: "Alpha Capital Security Systems LLC",
    category: "Company websites",
    type: "Corporate website",
    location: "Dubai, UAE",
    summary: "A corporate website for an IT, CCTV and access-control company, presenting its services and capturing enquiries through a quote form on every key page.",
    brief: "An IT, CCTV and access-control company needed its range of services explained clearly and a quick way for visitors to ask for a quote.",
    solution: "We organised the site by service and placed a quote form on every key page, so an enquiry is never more than one step away.",
    deliverables: ["Responsive design", "Service pages", "Enquiry form"],
    related: [S.web, S.crm],
    domain: "acssllc.ae",
    url: "https://acssllc.ae/",
    live: false,
    image: { src: `${IMG}/acss-company-hd.webp`, width: 1600, height: 933, alt: "Alpha Capital Security Systems website on a laptop and a phone" },
  },
  {
    slug: "access-control-system-dubai",
    client: "Access Control System Dubai",
    category: "Company websites",
    type: "Product and services website",
    location: "Dubai, UAE",
    summary: "A website explaining access-control options for homes, offices and government buildings, with clear product types and a direct contact route.",
    brief: "Buyers of access-control systems range from homeowners to government buildings, and each needed to find the options relevant to them.",
    solution: "We grouped products by type and setting, and added a direct WhatsApp contact route so visitors can ask questions straight away.",
    deliverables: ["Information architecture", "Product pages", "WhatsApp contact"],
    related: [S.web],
    domain: "accesscontrolsystemdubai.com",
    url: "https://www.accesscontrolsystemdubai.com/",
    live: false,
    image: { src: `${IMG}/access-control-dubai-hd.webp`, width: 1600, height: 933, alt: "Access Control System Dubai website shown on a laptop and a phone" },
  },
  {
    slug: "itehaad-solar-system",
    client: "Itehaad Solar System",
    category: "E-commerce",
    type: "Solar products website",
    location: "Pakistan",
    summary: "A website for a solar panel supplier and installer, combining product information, a solar calculator page and quick-quote calls to action.",
    brief: "A solar supplier and installer needed to inform customers comparing systems and turn that research into quote requests.",
    solution: "We combined product content with a solar calculator page and quick-quote calls to action placed throughout the site.",
    deliverables: ["Responsive design", "Product content", "Lead capture"],
    related: [S.web, S.crm],
    domain: "itehaadsolarsystem.com",
    url: "https://itehaadsolarsystem.com/",
    live: true,
    image: { src: `${IMG}/itehaad-solar-hd.webp`, width: 1600, height: 933, alt: "Itehaad Solar System website with solar panels, on a laptop and phone" },
  },
  {
    slug: "binfazal-solar",
    client: "Binfazal Solar",
    category: "E-commerce",
    type: "Online shop",
    location: "Pakistan",
    summary: "An online shop for solar systems and components, with product categories, tags and a get-a-quote route for larger installations.",
    brief: "The client sells both individual components and complete installations, and the two need different buying routes.",
    solution: "We set up a shop with categories and tags for components, and a get-a-quote route for larger installations.",
    deliverables: ["Shop set-up", "Product categories", "Quote requests"],
    related: [S.web, S.inventory],
    domain: "binfazalsolar.com",
    url: "https://binfazalsolar.com/",
    live: true,
    image: { src: `${IMG}/binfazal-solar-hd.webp`, width: 1600, height: 933, alt: "Binfazal Solar online shop listing solar systems, on a laptop and phone" },
  },
  {
    slug: "western-furniture",
    client: "Western Furniture",
    category: "E-commerce",
    type: "Furniture retail website",
    location: "UAE",
    summary: "A showroom-style website for a furniture retailer, built around large product imagery, seasonal sale banners and a mobile product browser.",
    brief: "Furniture is bought on looks, so the retailer needed its website to feel closer to walking through the showroom.",
    solution: "We designed around large product imagery and seasonal sale banners, with a product browser that works comfortably on a phone.",
    deliverables: ["Visual design", "Product showcase", "Campaign banners"],
    related: [S.web],
    domain: "westernfurniture.ae",
    url: "https://westernfurniture.ae/",
    live: false,
    image: { src: `${IMG}/western-furniture-hd.webp`, width: 1600, height: 933, alt: "Western Furniture website with a sofa sale banner, on a laptop and phone" },
  },
  {
    slug: "outlook-consultancy",
    client: "Outlook Consultancy",
    category: "Professional services",
    type: "Immigration consultancy website",
    location: "Pakistan",
    summary: "A website for an immigration and study-visa consultancy, with a clear visa process, country pages and enquiry prompts throughout.",
    brief: "Visa applicants arrive with very different destinations in mind and need to understand the process before they get in touch.",
    solution: "We explained the visa process step by step, created a page for each destination country and placed enquiry prompts throughout.",
    deliverables: ["Service structure", "Country pages", "Lead forms"],
    related: [S.web, S.crm],
    domain: "outlook-consultancy.com",
    url: "https://www.outlook-consultancy.com/",
    live: false,
    image: { src: `${IMG}/outlook-consultancy-hd.webp`, width: 1600, height: 933, alt: "Outlook Consultancy study visa website shown on a laptop and a phone" },
  },
  {
    slug: "tanoli-law-associates",
    client: "Tanoli Law Associates",
    category: "Professional services",
    type: "Law firm website",
    location: "Islamabad, Pakistan",
    summary: "A website for a family-law practice, written to reassure clients, with practice areas, a free-review offer and direct phone and WhatsApp contact.",
    brief: "People looking for a family lawyer are often anxious, so the practice needed a site that felt reassuring and made contact easy.",
    solution: "We set out the practice areas plainly, led with a free case-review offer and gave visitors direct phone and WhatsApp routes.",
    deliverables: ["Brand-led design", "Practice area pages", "Contact routes"],
    related: [S.web],
    domain: "tanolilawaccossiates.com",
    url: "https://www.tanolilawaccossiates.com/",
    live: false,
    image: { src: `${IMG}/tanoli-law-hd.webp`, width: 1600, height: 933, alt: "Tanoli Law Associates law firm website on a laptop and a phone" },
  },
  {
    slug: "alpha-capital-marketing-agency",
    client: "Alpha Capital Marketing Agency",
    category: "Professional services",
    type: "Digital marketing agency website",
    location: "United States",
    summary: "A website for a US digital marketing agency, presenting its services and positioning with a bold, single-colour brand style.",
    brief: "A US marketing agency needed its own website to reflect a distinctive brand and lead prospects to book an appointment.",
    solution: "We carried its bold single-colour identity across the site, built a page for each service and added an appointment call to action.",
    deliverables: ["Visual identity on web", "Service pages", "Appointment CTA"],
    related: [S.web],
    domain: "alphacapitalmarketingagency.com",
    url: "https://www.alphacapitalmarketingagency.com/",
    live: false,
    image: { src: `${IMG}/alpha-capital-marketing-hd.webp`, width: 1600, height: 933, alt: "Alpha Capital Marketing Agency website on a laptop and a phone" },
  },
];

/*
 * Figures read from the owner's Google Search Console / Merchant Center /
 * Business Profile screenshots (portfolio deck). Client names withheld.
 * Rendered as cards (no screenshots) so they stay sharp on every screen.
 */
export type ResultMetric = { label: string; value: string; tone: "clicks" | "impressions" | "ctr" | "position" | "growth" };

export const RESULTS: {
  intro: string;
  items: { title: string; period: string; metrics: ResultMetric[]; note?: string; wide?: boolean }[];
} = {
  intro:
    "Figures from Google Search Console, Merchant Center and Business Profile for SEO campaigns run by our team. Client names are withheld; every number is as reported by Google for that property and period. Results depend on the market and the site, so they are evidence of past work, not a forecast for yours.",
  items: [
    {
      title: "Online store: clicks from Google",
      period: "Apr – Aug 2024, vs previous period",
      wide: true,
      metrics: [
        { label: "Clicks to website", value: "2.01K", tone: "clicks" },
        { label: "Change vs previous period", value: "+172.7%", tone: "growth" },
        { label: "Product listing clicks", value: "389 (+313.8%)", tone: "impressions" },
        { label: "Online store clicks", value: "1.62K (+152.1%)", tone: "ctr" },
      ],
    },
    {
      title: "Client website A: Search Console",
      period: "Full duration",
      metrics: [
        { label: "Total clicks", value: "26.6K", tone: "clicks" },
        { label: "Total impressions", value: "665M", tone: "impressions" },
        { label: "Average CTR", value: "4%", tone: "ctr" },
        { label: "Average position", value: "7.4", tone: "position" },
      ],
    },
    {
      title: "Client website B: Search Console",
      period: "Apr 2023 – Jul 2024",
      metrics: [
        { label: "Total clicks", value: "2.89K", tone: "clicks" },
        { label: "Total impressions", value: "524K", tone: "impressions" },
        { label: "Average CTR", value: "0.6%", tone: "ctr" },
        { label: "Average position", value: "43.2", tone: "position" },
      ],
    },
    {
      title: "Client website C: Search Console",
      period: "Mar – Aug 2024",
      metrics: [
        { label: "Total clicks", value: "1.6K", tone: "clicks" },
        { label: "Total impressions", value: "53.3K", tone: "impressions" },
        { label: "Average CTR", value: "3%", tone: "ctr" },
        { label: "Average position", value: "15.2", tone: "position" },
      ],
    },
    {
      title: "Client website D: Search Console",
      period: "May – Aug 2019",
      metrics: [
        { label: "Total clicks", value: "3.55K", tone: "clicks" },
        { label: "Total impressions", value: "1.7M", tone: "impressions" },
        { label: "Average CTR", value: "0.2%", tone: "ctr" },
        { label: "Average position", value: "54.7", tone: "position" },
      ],
    },
    {
      title: "Google Business Profile",
      period: "Business Profile insights",
      metrics: [{ label: "Calls made from the Business Profile", value: "120", tone: "clicks" }],
      note: "Phone calls placed straight from the client's Google listing.",
    },
  ],
};

/** How we deliver (Section E). */
export const PROCESS = [
  { title: "Discovery and requirements", text: "We learn how your business works, who your customers are and what is not working today, and agree what success looks like." },
  { title: "Strategy and planning", text: "You receive a written plan covering pages or features, content, integrations, timeline and cost, so the scope is clear before work starts." },
  { title: "UI and UX design", text: "We design the key screens around what your customers need to find and do, and agree them with you before we build." },
  { title: "Development and integration", text: "We build in stages and connect the tools you already use, such as forms, email, payments or your CRM, with regular progress updates." },
  { title: "Testing and quality assurance", text: "Every build is checked on phones, tablets and desktops for speed, accessibility, broken links and form handling before launch." },
  { title: "Launch and ongoing support", text: "We deploy, watch the first weeks closely and stay on hand for updates, fixes, search optimisation and the next phase." },
];

/**
 * Capabilities beyond the projects shown (Section F). These are services the
 * company offers (live service pages), not further portfolio claims.
 */
export const CAPABILITIES: { title: string; text: string; href: string; anchor: string }[] = [
  { title: "Web applications", text: "Portals, dashboards and customer platforms, like the property portal above, built as fast and secure web apps.", href: "/services/web-application-development", anchor: "Web application development" },
  { title: "Custom software", text: "Business systems built around your workflows when off-the-shelf tools no longer fit how you work.", href: "/services/custom-software-development", anchor: "Custom software development" },
  { title: "AI development", text: "Custom AI from use-case discovery to production, including document understanding and assistants that answer from your own data.", href: "/services/ai-development", anchor: "AI development services" },
  { title: "AI automation", text: "Workflows that connect your systems, read documents and route exceptions to people, with rules first and AI where it helps.", href: "/services/ai-automation", anchor: "AI automation services" },
  { title: "Mobile apps", text: "iOS and Android apps, native or cross-platform, connected to the same back end as your website.", href: "/services/mobile-app-development", anchor: "Mobile app development" },
  { title: "MVPs and SaaS products", text: "A focused first version to test a product idea, designed so it can grow into a subscription platform.", href: "/services/mvp-saas-development", anchor: "MVP and SaaS development" },
];

/** Named on the live service pages; not a per-project stack. */
export const TECHNOLOGIES = ["React", "Next.js", "Node.js", "Python", "Laravel", "PostgreSQL", "Flutter", "React Native", "Swift", "Kotlin", "AWS", "LangChain"];

/* Team section: names, roles and photos from the portfolio deck. */
const TEAM_IMG = "/assets/portfolio/team";

export const LEADER = {
  name: "Amjad Khan",
  role: "CEO, ClickMasters",
  photo: `${TEAM_IMG}/amjad-khan.webp`,
  quote:
    "Our aim is to deliver digital work that drives real business growth. We stay ahead of a fast-moving industry so we can meet our clients' needs today and anticipate the changes coming next.",
};

export const TEAM = [
  { name: "Israr Khan", role: "SEO Team Lead", photo: `${TEAM_IMG}/israr-khan.webp`, bio: "Leads the SEO team, with a strong track record of improving search visibility and organic growth." },
  { name: "Awais Alam", role: "SEO Specialist", photo: `${TEAM_IMG}/awais-alam.webp`, bio: "Focuses on raising search rankings and online visibility for client websites." },
  { name: "Sarmad Ali", role: "SEO & Social Media Specialist", photo: `${TEAM_IMG}/sarmad-ali.webp`, bio: "Combines SEO and social media work, and builds user-friendly websites." },
  { name: "Rana Furqaan", role: "SEO Specialist", photo: `${TEAM_IMG}/rana-furqaan.webp`, bio: "Plans and runs search strategies that improve rankings and online performance." },
];
