/*
 * /industries/ecommerce content, from
 * "ClickMasters E-commerce Industry Page: SEO Content Pack" (27 Nov 2026).
 * Edit copy here; page.jsx only renders it.
 *
 * Inline links use [anchor](/path) and render through <RichText>.
 * VERIFY comments mark items the pack says need owner confirmation.
 * No commerce platform or payment provider is named: none is verified (pack, section I).
 */

export const PATH = "/industries/ecommerce";

export const SEO = {
  title: "AI Solutions for E-commerce & Software UK",
  description:
    "AI solutions for e-commerce and custom software for UK retailers: product search, recommendations, support automation, forecasting and connected systems.",
  ogTitle: "AI Solutions for E-commerce & Software UK | ClickMasters",
  ogDescription:
    "Semantic product search, recommendations, shopping assistants, support automation, demand forecasting and integrations for UK online retailers.",
};

const IMG = "/assets/industries/ecommerce";

/*
 * Photos from Unsplash (Unsplash License, free to use). The pack advises against
 * shopping-trolley stock images and laptops with invented sales graphs.
 */
export const IMAGES = {
  // Photo: V H (unsplash.com/photos/Iywgu-a_eCs)
  phone: {
    src: `${IMG}/ecommerce-shopping-on-phone.webp`, width: 1200, height: 800,
    alt: "Shopper browsing a grid of products in an online store on a smartphone",
  },
  // Photo: Lance Chang (unsplash.com/photos/h3pVxOIpnzk)
  warehouse: {
    src: `${IMG}/ecommerce-warehouse-aisle.webp`, width: 1200, height: 800,
    alt: "Long warehouse aisle lined with tall shelving stacked with boxed stock",
  },
  // Photo: Rohit Choudhari (unsplash.com/photos/qO2ztAz5g7A)
  parcels: {
    src: `${IMG}/ecommerce-parcels-ready-for-dispatch.webp`, width: 1200, height: 675,
    alt: "Pile of plain brown cardboard parcels sealed with blue tape, ready for dispatch",
  },
  // Photo: Jana Belonina (unsplash.com/photos/1DYk9YughgM)
  catalogue: {
    src: `${IMG}/ecommerce-product-catalogue-clothing-rail.webp`, width: 1200, height: 900,
    alt: "Rail of garments on white hangers, representing a product catalogue that needs consistent product data",
  },
  // Photo: Petr Macháček (unsplash.com/photos/BeVGrXEktIk)
  support: {
    src: `${IMG}/ecommerce-customer-support-headset.webp`, width: 1200, height: 800,
    alt: "Support headset resting beside an open laptop on a desk",
  },
} as const;

export const HERO = {
  eyebrow: "E-Commerce & Online Retail",
  title: "AI Solutions for E-commerce",
  titleAccent: "and Custom E-commerce Software Development",
  lead:
    "Online retail has moved well beyond the storefront. Today's e-commerce businesses run on product data, stock positions, customer conversations, fulfilment updates and marketing journeys, and all of it has to stay in step across every channel. ClickMasters designs and builds AI solutions for e-commerce and the custom software that connects them. We help shoppers find the right products, take routine work off your support and operations teams, and give you a clearer view of stock, orders and customers.",
  audience:
    "We start from your business model, catalogue and workflows, not from a fixed product. That might mean semantic product search on top of your existing store, an assistant that answers questions from verified catalogue data, demand forecasting built on your sales history, or integrations that stop your team re-keying orders between systems.",
  // Trust line under the CTAs, shown as the hero's stat strip.
  trust: [
    { label: "Built around", value: "Your catalogue and workflows" },
    { label: "Platform", value: "Works alongside your store" },
    { label: "Control", value: "Human review where it matters" },
    { label: "Data", value: "Verified catalogue answers" },
  ],
  figureAlt:
    "E-commerce system integration diagram connecting storefront, inventory, order management, CRM and ERP systems with AI product search, recommendations and demand forecasting",
};

/** Hero diagram: channels → integration layer (with AI services) → back-office systems. */
export const HERO_FLOW = {
  channels: ["Storefront", "Marketplaces", "Support inbox"],
  ai: ["AI search", "Recommendations", "Forecasting"],
  systems: ["Inventory", "Order management", "CRM", "ERP"],
};

export const OVERVIEW = {
  title: "AI in E-commerce: Beyond the Basic Online Store",
  paragraphs: [
    "Online shopping is now a mainstream part of UK retail. Office for National Statistics figures show that around 29% of Great Britain's retail sales by value were made online in October 2026. As more trade moves online, competition shifts from simply having a store to how well that store works: whether shoppers can find what they want, whether stock information is accurate, whether questions are answered quickly and whether orders flow smoothly from checkout to doorstep.",
    "Standard e-commerce platforms handle the essentials well: product pages, baskets, checkout and payments. The gaps tend to appear as a business grows. Catalogues expand faster than product data can be kept consistent. Keyword search struggles with the way customers actually describe what they want. Support teams answer the same order-status questions all day. Stock is managed across a website, marketplaces and a warehouse that do not share a single view.",
    "Artificial intelligence in e-commerce is most useful when it is aimed at these specific gaps. AI can interpret search intent, suggest relevant products, draft product content and handle routine enquiries. Automation can move information between systems without manual effort. Custom software can fill the gaps that off-the-shelf tools leave. The value comes from combining them sensibly, with accurate data underneath.",
  ],
  // VERIFY: update the ONS figure when publishing (latest release at writing: October 2026).
  stat: { value: "29.2%", label: "of Great Britain's retail sales by value were made online in October 2026", source: "Office for National Statistics" },
};

export const CHALLENGES_INTRO =
  "Every online business is different. A fashion brand with seasonal ranges, a B2B parts supplier with tens of thousands of SKUs and a direct-to-consumer subscription business face very different problems. These are the challenges we see most often.";

export const CHALLENGES = [
  { icon: "search", title: "Product discovery and search", text: "Large catalogues are hard to navigate. Keyword search often fails when a shopper types “waterproof jacket for hiking” and the product data says “rain shell”. Inconsistent product information, such as missing attributes, varied naming and incomplete specifications, weakens both search relevance and filtering. When shoppers cannot find a product quickly, many simply leave." },
  { icon: "user", title: "Customer personalisation", text: "Many stores show every visitor the same experience. Recommendations are often limited to “bestsellers”, and customer information is fragmented across the store, email platform and support inbox. That makes it hard to tailor journeys, surface products that match a customer's interests or recognise a returning customer's preferences. It also has to be done in a way that respects privacy and consent." },
  { icon: "stock", title: "Inventory and stock management", text: "Inventory visibility becomes harder with every new sales channel. Stock figures drift between the website, marketplaces and warehouse, leading to overselling, cancelled orders and frustrated customers. On the other side, cautious ordering leads to overstocking that ties up cash and space. Demand forecasting is difficult when it relies on spreadsheets and instinct, particularly for seasonal or fast-moving lines." },
  { icon: "support", title: "Customer support workloads", text: "A large share of customer contact in e-commerce is repetitive: “Where is my order?”, “When will this be back in stock?”, “Does this come in a larger size?”, “How do I return this?”. Volumes spike around promotions, peak trading and delivery disruption. Each routine enquiry takes time away from the complex, high-value conversations that need a person." },
  { icon: "truck", title: "Order and fulfilment operations", text: "Behind every order sits a sequence of steps: payment confirmation, picking, packing, dispatch, carrier updates, delivery notifications and sometimes returns and refunds. When the e-commerce platform, warehouse process and carrier systems are poorly connected, staff fill the gaps manually. Errors creep in, and customers receive inconsistent delivery information." },
  { icon: "plug", title: "Disconnected business systems", text: "A typical growing online retailer runs an e-commerce platform, a CRM or email marketing tool, accounting or ERP software, an inventory or warehouse system, payment services, shipping integrations and analytics tools. When these do not share data reliably, the same information is entered several times, reports disagree and no one has a complete picture of a customer, an order or a product." },
];

export const AI_INTRO =
  "Each capability below is designed to work with your existing platform and data. Each also has limits that are worth understanding before you invest.";

export type AiCapability = {
  id: string;
  icon: string;
  title: string;
  intro: string;
  items?: { term?: string; text: string }[];
  outro: string[];
  image?: keyof typeof IMAGES;
};

export const AI_CAPABILITIES: AiCapability[] = [
  {
    id: "product-recommendations",
    icon: "recommend",
    title: "AI-powered product recommendations",
    intro: "Recommendation systems use product data and appropriate interaction data, such as products viewed together, bought together or added to baskets, to suggest items a shopper is likely to find relevant. Typical approaches include:",
    items: [
      { term: "Related product recommendations:", text: "similar items in style, specification or category." },
      { term: "Complementary product suggestions:", text: "accessories, refills or items commonly bought together." },
      { term: "Personalised product discovery:", text: "suggestions shaped by a shopper's browsing in the current session or, with appropriate consent and transparency, their purchase history." },
      { term: "Behaviour-informed recommendations:", text: "ranking that reflects how shoppers actually engage with products, not just static rules." },
      { term: "Product catalogue intelligence:", text: "using product attributes and descriptions so new products can be recommended before they have sales history." },
    ],
    outro: [
      "Recommendations are only as good as the data behind them. Incomplete attributes and sparse interaction data limit relevance. Personalisation based on personal data must be lawful, explained in your privacy information and, where cookies or similar technologies are involved, aligned with the consent rules. We usually build and evaluate recommendation models through our [machine learning development](/services/machine-learning) work, testing them against simpler baselines before rollout.",
    ],
  },
  {
    id: "intelligent-search",
    icon: "search",
    title: "Intelligent e-commerce search",
    intro: "Semantic product search uses language models and vector representations to match what a shopper means, not just the words they type. It can support:",
    items: [
      { term: "Natural-language searches", text: "such as “gift for a keen gardener under £30”." },
      { term: "Search intent understanding,", text: "distinguishing a shopper browsing a category from one looking for a specific item." },
      { term: "Product attribute matching,", text: "mapping phrases to colour, size, material, compatibility and other filters." },
      { term: "Semantic product discovery,", text: "finding relevant items even when the wording differs from the product data." },
      { term: "Better relevance and zero-result handling,", text: "so fewer searches end in a dead end." },
    ],
    outro: [
      "The best results usually combine semantic search with traditional keyword matching and business rules, such as stock availability and margin priorities. Search quality is measured on real queries from your site, not on examples chosen to look good.",
    ],
    image: "phone",
  },
  {
    id: "shopping-assistants",
    icon: "assistant",
    title: "AI shopping assistants",
    intro: "An AI shopping assistant is a conversational interface that helps shoppers:",
    items: [
      { text: "discover relevant products from your catalogue;" },
      { text: "understand product features and specifications;" },
      { text: "compare options side by side;" },
      { text: "find answers to product questions;" },
      { text: "navigate large or technical catalogues; and" },
      { text: "get order-related help, such as delivery status, where integrations with your order systems permit." },
    ],
    outro: [
      "Accuracy is essential. Product information must come from verified catalogue data, not from a model's general knowledge. We use retrieval-based techniques, covered in our [RAG development](/services/rag-development) service, so the assistant answers from your own product data, policies and FAQs. It is designed to say “I don't know” rather than invent a specification, price or delivery promise.",
      "Assistants that take actions, such as starting a return or updating an order, are built through our [AI agent development](/services/ai-agent-development) approach, with strict permissions and clear limits.",
    ],
  },
  {
    id: "support-automation",
    icon: "support",
    title: "E-commerce customer support automation",
    intro: "E-commerce customer support automation handles the routine so your team can focus on the conversations that need a person. Typical components include:",
    items: [
      { term: "FAQ automation", text: "for delivery options, sizing, payment methods and policies." },
      { term: "Order-status assistance", text: "that looks up live order and tracking information." },
      { term: "Product information support", text: "drawn from catalogue data." },
      { term: "Returns information workflows", text: "that explain your returns policy and guide customers through the steps." },
      { term: "Enquiry classification", text: "that tags incoming emails and messages by topic, urgency and sentiment, and routes them to the right queue." },
      { term: "Escalation to human support,", text: "with the conversation history and order details already attached." },
    ],
    outro: [
      "Human escalation matters because some situations need judgement and empathy: a damaged gift, a missed delivery for an important date, a complaint or a vulnerable customer. Accurate information matters because an automated answer about refunds, delivery times or statutory rights carries the same weight as one from a member of staff. Our [AI automation services](/services/ai-automation) explain how we combine rules, AI and human review.",
    ],
    image: "support",
  },
  {
    id: "inventory-forecasting",
    icon: "forecast",
    title: "AI-powered inventory forecasting",
    intro: "Demand forecasting models analyse historical sales together with factors such as seasonality, promotions, price changes and lead times. They can provide:",
    items: [
      { text: "historical sales analysis by product, category and channel;" },
      { text: "identification of demand patterns and trends;" },
      { text: "stock planning support for buyers and merchandisers;" },
      { text: "seasonal demand insights ahead of peak periods;" },
      { text: "replenishment recommendations based on forecast demand and lead times; and" },
      { text: "inventory reporting that highlights slow-moving and at-risk stock." },
    ],
    outro: [
      "Forecasts are estimates, not certainties. Their reliability depends on the quality and length of your sales history, and they can be disrupted by events the data has never seen. New products with no history need different methods. We present forecasts with ranges and keep buyers in control of purchasing decisions. For the underlying stock control system, see our [custom inventory management software](/solutions/inventory-management).",
    ],
  },
  {
    id: "marketing-automation",
    icon: "marketing",
    title: "E-commerce marketing automation",
    intro: "AI and automation can support marketing teams with:",
    items: [
      { term: "Customer segmentation", text: "based on purchase behaviour, engagement and lifecycle stage." },
      { term: "Campaign workflow automation", text: "for welcome, post-purchase, replenishment and win-back journeys." },
      { term: "Product recommendation content", text: "in emails and on-site placements." },
      { term: "Customer lifecycle communication", text: "triggered by meaningful events rather than fixed schedules." },
      { term: "Personalised campaign support,", text: "such as drafting copy variations for review." },
      { term: "Reporting and analytics workflows", text: "that bring campaign, order and customer data together." },
    ],
    outro: [
      "These tools support better-targeted marketing, but they do not guarantee higher sales or conversion rates. Results depend on your products, audience, offer and data quality. Electronic marketing must also follow the consent and soft opt-in rules, and customers can object to profiling for direct marketing.",
    ],
  },
  {
    id: "product-content",
    icon: "content",
    title: "Product content intelligence",
    intro: "Product content is one of the most practical uses of [generative AI development](/services/generative-ai-development) in e-commerce. AI can support:",
    items: [
      { term: "Product description drafting", text: "from structured attributes and supplier information, in your brand's tone." },
      { term: "Product attribute extraction", text: "from supplier spreadsheets, PDFs and existing descriptions." },
      { term: "Catalogue classification", text: "into your category structure." },
      { term: "Product information enrichment,", text: "filling gaps in attributes that drive search and filters." },
      { term: "Content consistency checks", text: "that flag missing fields, contradictions and formatting problems." },
      { term: "Multilingual product content workflows", text: "for selling in other markets, with native-speaker review." },
    ],
    outro: [
      "Important product information, such as dimensions, materials, safety warnings, allergens, compatibility and care instructions, must be reviewed by a person before publication. Misleading product claims create consumer law risk whether a person or an AI wrote them. AI should never be used to generate fake or misleading customer reviews, which are banned under UK consumer law.",
    ],
    image: "catalogue",
  },
];

export const SOFTWARE = {
  intro:
    "Hosted e-commerce platforms are often the right choice. They are fast to launch, well supported and cost-effective for standard retail models. Custom e-commerce software becomes worth considering when your business has:",
  when: [
    "complex pricing, such as trade accounts, customer-specific price lists, quotes or bundles",
    "configurable or made-to-order products that standard product models cannot represent",
    "B2B ordering workflows, approvals or account hierarchies",
    "integration requirements that platform apps cannot meet reliably",
    "performance, data ownership or user-experience needs beyond what themes and plugins allow",
    "operational processes that staff currently handle with spreadsheets alongside the store",
  ],
  combination:
    "The answer is often a combination: a proven commerce platform for checkout and payments, with custom applications, integrations and AI services built around it. During discovery we will tell you if an existing product would serve you better.",
  listIntro:
    "Depending on your needs, our [custom software development](/services/custom-software-development) and [web application development](/services/web-application-development) teams can build:",
  items: [
    { icon: "store", title: "Custom e-commerce websites and storefront experiences", text: "including headless front ends connected to an existing commerce back end." },
    { icon: "web", title: "E-commerce web applications", text: "such as trade portals, configurators and customer account areas." },
    { icon: "catalogue", title: "Product catalogue management systems", text: "for creating, enriching and publishing product data across channels." },
    { icon: "orders", title: "Order management applications", text: "that bring orders from every channel into one workflow." },
    { icon: "stock", title: "Inventory management software", text: "with multi-location stock, reservations and replenishment." },
    { icon: "contacts", title: "Customer management integrations", text: "that give support and sales teams a complete customer view, using [custom CRM software](/solutions/crm-software) where a dedicated CRM is needed." },
    { icon: "dashboard", title: "E-commerce administration dashboards", text: "for orders, stock, returns and performance." },
    { icon: "code", title: "Custom API development", text: "for partners, marketplaces, apps and internal systems." },
    { icon: "plug", title: "Third-party platform integrations", text: "with payment, shipping, marketing and accounting services, built to each provider's published interfaces." },
    { icon: "database", title: "Database design and optimisation", text: "for fast catalogue queries, accurate stock and reliable reporting, through our [database design and development](/services/database-design) work." },
    { icon: "cloud", title: "Scalable application architecture", text: "that handles promotional peaks, deployed on monitored cloud infrastructure through our [cloud and DevOps](/services/cloud-devops) practice." },
  ],
  // VERIFY: confirm the stack wording remains accurate (taken from the homepage).
  stack:
    "We typically work with modern technologies such as React, Next.js, Node.js, Python and PostgreSQL, deployed on AWS, Azure or Google Cloud. The final choice depends on your existing systems and the team that will maintain them. We do not claim official partnerships or certifications with any e-commerce platform vendor.",
};

export const INTEGRATION = {
  intro:
    "E-commerce system integration connects the tools you already use so information flows between them automatically. Depending on your stack, integrations can connect:",
  systems: [
    { icon: "store", title: "Online storefronts and marketplaces", text: "as sources of orders and destinations for product and stock data." },
    { icon: "stock", title: "Inventory management systems", text: "for a single, reliable stock position." },
    { icon: "erp", title: "ERP platforms", text: "for finance, purchasing and operations, including [custom ERP software](/solutions/erp-software) where off-the-shelf ERP does not fit." },
    { icon: "contacts", title: "CRM software", text: "so customer history and support context sit in one place." },
    { icon: "payment", title: "Payment providers", text: "for payment status, refunds and reconciliation." },
    { icon: "truck", title: "Shipping and fulfilment services", text: "for labels, tracking and delivery updates." },
    { icon: "marketing", title: "Marketing automation systems", text: "for customer events and segments." },
    { icon: "analytics", title: "Analytics platforms", text: "for consistent reporting across channels." },
  ],
  benefits: [
    ["Better information consistency:", "one source of truth for each product, order and customer."],
    ["Less repetitive data entry:", "orders, stock movements and customer updates move automatically."],
    ["More organised order workflows:", "every order follows a defined route, with exceptions flagged."],
    ["Improved inventory visibility:", "stock levels reflect sales across all channels."],
    ["Connected customer information:", "support, marketing and sales see the same history."],
    ["Easier operational reporting:", "data arrives already joined up."],
  ],
  note:
    "Every integration depends on the interfaces and access each provider offers. We assess each system's APIs, limits and data quality before committing to a design. Integrations are built with validation, retries, error alerts and logging, so a failed sync is noticed rather than silently losing orders. We do not imply that ready-made connectors exist for a specific platform until we have confirmed the route.",
};

export const USE_CASES_NOTE =
  "The scenarios below are illustrative use cases showing how the technology could be applied. They are not descriptions of completed client projects, and real results depend on each business's catalogue, data, systems and customers.";

export const USE_CASE_FIELDS = [
  ["problem", "The business problem"],
  ["approach", "Proposed approach"],
  ["how", "How it could work"],
  ["value", "Potential operational value"],
  ["limits", "Limitations and dependencies"],
] as const;

export const USE_CASES = [
  {
    icon: "search",
    title: "AI-powered product discovery",
    problem: "Shoppers on a large catalogue frequently get irrelevant results or no results, and many abandon the search.",
    approach: "Hybrid semantic and keyword search, with attribute extraction to improve filtering.",
    how: "Product data is enriched and indexed. Queries are interpreted for intent and attributes, and results are ranked by relevance, availability and business rules. Searches with no results are logged for review.",
    value: "More searches end in relevant results, and merchandisers learn what customers look for but cannot find.",
    limits: "Depends on product data quality. Relevance needs tuning against real queries and periodic review.",
  },
  {
    icon: "recommend",
    title: "Personalised product recommendation systems",
    problem: "Recommendations are generic or manually curated and quickly go out of date.",
    approach: "A recommendation model combining product similarity with interaction data, plus business rules.",
    how: "Product pages, baskets and emails show related and complementary items, tailored to session behaviour and, where appropriate consent and transparency are in place, to purchase history.",
    value: "More relevant product discovery and less manual merchandising effort.",
    limits: "Needs sufficient interaction data, and new products start with limited signals. Must respect consent and avoid recommending out-of-stock items. It should be evaluated against simple baselines.",
  },
  {
    icon: "assistant",
    title: "Intelligent shopping assistants",
    problem: "Shoppers on a technical catalogue need help choosing between similar products and often contact support before buying.",
    approach: "A conversational assistant grounded in verified catalogue data and policies using RAG.",
    how: "The shopper describes their needs, and the assistant asks clarifying questions, suggests suitable products, compares specifications and links to product pages. Questions it cannot answer go to staff.",
    value: "Shoppers get help at any time, and the support team receives fewer pre-sale enquiries.",
    limits: "Only as accurate as the catalogue data. It must be tested for invented answers, must not make promises outside policy, and must be clearly identified as automated.",
  },
  {
    icon: "support",
    title: "Automated customer support workflows",
    problem: "The support inbox is dominated by order-status, delivery and returns questions, especially at peak times.",
    approach: "Enquiry classification, order-system integration and automated responses for defined categories, with human escalation.",
    how: "Incoming messages are classified. Order-status and policy questions are answered from live data and approved content, and complaints, damaged items and unclear cases go to agents with context attached.",
    value: "Faster responses to routine questions and more agent time for complex cases.",
    limits: "Requires reliable order and tracking data. Automated replies must reflect your policies and customers' statutory rights, and categories should be expanded gradually as accuracy is proven.",
  },
  {
    icon: "forecast",
    title: "Inventory demand forecasting",
    problem: "Buyers order from spreadsheets, causing stock-outs on popular lines and overstock on others.",
    approach: "A demand forecasting model using sales history, seasonality, promotions and lead times.",
    how: "Forecasts by SKU and location feed a replenishment dashboard that suggests order quantities, which buyers review and approve.",
    value: "Better-informed purchasing decisions and earlier visibility of potential shortages or excess stock.",
    limits: "Forecasts are estimates. Accuracy depends on clean history and stable patterns, unusual events reduce reliability, and new lines need different methods.",
  },
  {
    icon: "content",
    title: "Product catalogue enrichment",
    problem: "Supplier data arrives in inconsistent formats, leaving product pages with missing attributes and thin descriptions.",
    approach: "AI attribute extraction, classification and description drafting, with a review workflow.",
    how: "Supplier files are parsed, attributes are extracted and mapped to your taxonomy, and draft descriptions are generated in your brand style. A content editor reviews and approves each product before it is published.",
    value: "Faster product onboarding, more consistent pages and better data for search and filters.",
    limits: "Safety, legal and technical information must be verified by a person. Output quality depends on source data, and the brand voice needs initial tuning.",
  },
  {
    icon: "orders",
    title: "Order information automation",
    problem: "Staff manually copy order and dispatch details between the store, warehouse and carrier systems, and customers receive inconsistent updates.",
    approach: "Workflow automation and integrations between commerce, warehouse and shipping systems.",
    how: "Paid orders flow automatically to fulfilment, tracking numbers return to the store, and customers receive status updates at each stage. Exceptions such as address problems are flagged to staff.",
    value: "Less manual handling, fewer transcription errors and more consistent customer communication.",
    limits: "Depends on the integration options each provider supports. Requires robust error handling and monitoring.",
  },
  {
    icon: "segment",
    title: "Customer segmentation support",
    problem: "Marketing sends the same campaigns to everyone because customer data is fragmented.",
    approach: "Consolidated customer data with behavioural segmentation models.",
    how: "Purchase and engagement data are combined to identify segments, such as new customers, lapsed buyers and frequent purchasers of a category. These segments are synced to the marketing platform.",
    value: "More relevant communication and better understanding of the customer base.",
    limits: "Must comply with marketing consent and profiling rules. Segments need regular review, and no specific sales uplift should be assumed.",
  },
  {
    icon: "erp",
    title: "Connected e-commerce and ERP systems",
    problem: "Orders, stock and finance data are re-keyed between the e-commerce platform and ERP, causing delays and reconciliation problems.",
    approach: "API-based integration with a middleware layer, mapping, validation and audit logging.",
    how: "Orders, customers and payments flow to the ERP, and stock levels and product updates flow back to the store on an agreed schedule or in near real time.",
    value: "One consistent view of orders and stock, quicker month-end and less manual reconciliation.",
    limits: "Depends on both systems' APIs and data models. Requires agreement on which system owns which data, and a plan for failed syncs.",
  },
  {
    icon: "dashboard",
    title: "Automated operational reporting",
    problem: "Weekly trading reports take hours to compile from several exports, and figures differ by source.",
    approach: "Automated data pipelines into a reporting database, with dashboards and scheduled summaries.",
    how: "Sales, stock, returns, marketing and support data are collected automatically, reconciled and presented in dashboards. Optional AI-written summaries highlight notable changes for review.",
    value: "Timely, consistent reporting and more time spent on decisions than on spreadsheets.",
    limits: "Metric definitions must be agreed. Data quality problems must be fixed at source, and AI summaries should be checked against the figures.",
  },
];

export const SECURITY_INTRO =
  "Customer trust is central to online retail. The considerations below shape how we design and build e-commerce systems.";
export const SECURITY_DISCLAIMER =
  "This section is general information, not legal advice or security certification. Each business remains responsible for its own compliance.";

export const SECURITY = [
  { icon: "privacy", title: "UK GDPR and personal data protection", text: "Customer data must be processed lawfully, fairly and transparently, for clear purposes. Personalisation, profiling and AI features should be explained in your privacy information, and customers have an absolute right to object to profiling for direct marketing. A Data Protection Impact Assessment may be needed where processing, such as large-scale profiling, is likely to be high risk." },
  { icon: "cookie", title: "Cookies and electronic marketing", text: "Tracking for analytics, personalisation and advertising is governed by the Privacy and Electronic Communications Regulations (PECR). The Data (Use and Access) Act 2025 introduced new exceptions to cookie consent, but they are narrow, so check the ICO's current guidance. Marketing emails and texts need consent or must meet the soft opt-in conditions." },
  { icon: "shield", title: "Customer information security", text: "Encryption in transit and at rest, secure hosting, monitoring, backups and timely patching." },
  { icon: "key", title: "Secure authentication", text: "Strong password handling, multi-factor authentication for staff and administrator accounts, and protection against credential-stuffing attacks on customer logins." },
  { icon: "roles", title: "Role-based access controls", text: "Staff see only the customer and order data their role requires, and access is logged." },
  { icon: "payment", title: "Payment provider integration security", text: "Payment card data should be handled by an appropriately selected, PCI DSS-compliant payment provider, typically using hosted payment pages or secure payment fields. This keeps card details out of your own systems as far as possible. Scripts on payment pages also need careful control, and the provider and your acquirer can confirm what your PCI DSS obligations are." },
  { icon: "code", title: "API security", text: "Authentication, authorisation checks on every request, rate limiting, input validation and secrets kept out of code." },
  { icon: "minimise", title: "Data minimisation", text: "Collect and keep only the data each purpose needs, and avoid sending unnecessary personal data to AI services." },
  { icon: "retention", title: "Appropriate data retention", text: "Defined retention periods for orders, accounts, support conversations and marketing data, with secure deletion." },
  { icon: "database", title: "Secure database design", text: "Least-privilege database access, protection against injection attacks, segregated environments and encrypted backups." },
  { icon: "plug", title: "Third-party integration risks", text: "Every plugin, app and integration is a potential route to your data. We review what data each one receives, how it is protected and what happens if it fails or is compromised." },
  { icon: "scales", title: "Honest AI and consumer law", text: "Automated product content, assistants and promotions must not mislead customers. Under the Digital Markets, Competition and Consumers Act 2024, the Competition and Markets Authority can directly fine businesses for consumer law breaches, including fake reviews and drip pricing." },
];

export const SECURITY_STATEMENT =
  "ClickMasters does not claim PCI DSS certification, and we do not guarantee regulatory compliance. We build systems designed to support your compliance obligations and provide the technical documentation you need.";

export const WHY_INTRO =
  "We are an AI and software engineering company. We work with e-commerce businesses on the problems that sit between and around their platforms.";

export const WHY = [
  { icon: "briefcase", title: "Business-focused AI development", text: "We start with the commercial problem, such as lost searches, support backlogs or stock errors, and choose technology to fit." },
  { icon: "automation", title: "Intelligent workflow automation", text: "Rules where they are enough, AI where interpretation is needed, and people for exceptions." },
  { icon: "code", title: "Custom software engineering", text: "Applications built around your catalogue and processes, documented and maintainable." },
  { icon: "store", title: "E-commerce application development", text: "Storefront experiences, portals, dashboards and admin tools." },
  { icon: "plug", title: "System integration", text: "Connections between commerce, inventory, ERP, CRM, payment, shipping and marketing systems." },
  { icon: "database", title: "Database and back-end architecture", text: "Data models that keep stock accurate and reports consistent." },
  { icon: "cloud", title: "Scalable digital solutions", text: "Architecture and cloud infrastructure planned for promotional peaks and growth." },
  { icon: "design", title: "User-focused development", text: "Interfaces designed for shoppers and for the staff who run the business every day." },
];

export const WHY_OUTRO =
  "The right solution depends on your business model, catalogue structure, operational workflows and growth plans. A retailer with 200 products and one warehouse needs something very different from a multi-channel business with 50,000 SKUs. If you are unsure where AI fits, our [AI consulting and strategy](/services/ai-consulting-strategy) service can help you prioritise.";

// VERIFY: confirm the support model behind step 06 ("agreed as part of the engagement").
export const PROCESS = [
  { title: "Understand the business", text: "We learn your business model, product catalogue, customers, channels, systems and the operational challenges that matter most." },
  { title: "Identify opportunities", text: "We assess where AI, automation or custom software would add the most value, and where a simpler fix or an existing tool would be more sensible." },
  { title: "Plan the solution", text: "We define the technical architecture, integrations, data requirements, user experience, success measures and how each part will be tested." },
  { title: "Design and develop", text: "We build in short iterations with regular demonstrations, so you see working software early and can steer priorities." },
  { title: "Test and validate", text: "We test usability, performance under realistic load, security, integrations and reliability. AI features are evaluated against your real products, queries and enquiries." },
  { title: "Improve and scale", text: "After launch we monitor performance and refine models and workflows. We plan improvements as your business, catalogue and operations evolve, with ongoing support agreed as part of the engagement." },
];

export const FAQS = [
  { q: "How is AI used in e-commerce?", a: ["AI is used in e-commerce for product search and discovery, personalised recommendations, shopping assistants, customer support automation, demand forecasting, product content creation, marketing segmentation and operational reporting. The most effective uses target a specific problem and rely on accurate product, order and customer data."] },
  { q: "What are AI solutions for e-commerce businesses?", a: ["They are software systems that apply AI techniques, such as semantic search, machine learning or language models, to e-commerce tasks. A practical solution combines the AI component with integrations to your store and back-office systems, good data, monitoring and human oversight for important decisions."] },
  { q: "Can AI personalise an online shopping experience?", a: ["Yes. AI can tailor product recommendations, search ranking, content and marketing messages to a shopper's behaviour and preferences. Personalisation should be transparent and comply with data protection and cookie rules. It also works best when it helps shoppers find relevant products rather than simply pushing more items."] },
  { q: "How do AI product recommendation systems work?", a: ["They analyse product information and interaction data, such as items viewed, bought together or added to baskets, to predict which products a shopper is likely to find relevant. Common methods include similarity-based approaches, collaborative filtering and hybrid models that also use business rules such as stock levels."] },
  { q: "Can AI automate e-commerce customer support?", a: ["AI can automate a large share of routine enquiries, such as order status, delivery questions, product information and returns guidance, especially when it is connected to live order data. Complaints, unusual cases and sensitive situations should be escalated to people, and automated answers must accurately reflect your policies and customers' rights."] },
  { q: "How can AI help with inventory forecasting?", a: ["Forecasting models analyse historical sales, seasonality, promotions and lead times to estimate future demand by product and location. This supports purchasing and replenishment decisions. Forecasts are estimates whose accuracy depends on data quality, so buyers should remain in control of final orders."] },
  { q: "What is custom e-commerce software development?", a: ["It is the design and build of e-commerce applications around a business's specific needs. Examples include custom storefronts, trade portals, product configurators, order and inventory management tools, admin dashboards and integrations. It suits businesses whose requirements are not well met by standard platforms and plugins."] },
  { q: "Can an e-commerce website integrate with ERP and CRM systems?", a: ["In most cases, yes, if the systems involved provide suitable APIs or integration options. Integration can synchronise orders, customers, stock, products and payments. It needs clear rules on which system owns each piece of data, along with robust error handling and monitoring."] },
  { q: "How can AI improve product discovery?", a: ["AI improves product discovery through semantic search that understands natural-language queries, attribute extraction that strengthens filters, recommendations that surface related and complementary items, and shopping assistants that help shoppers narrow their choices. Clean, consistent product data is the foundation for all of these."] },
  { q: "How should e-commerce businesses protect customer data when using AI?", a: ["Use only the data each AI feature needs and be transparent about how customer data is used. Check what AI and integration providers do with the data they receive, secure access with role-based controls and multi-factor authentication, set retention periods, and carry out a DPIA where processing is likely to be high risk. Keep payment card data with a PCI DSS-compliant payment provider."] },
];

export const FINAL_CTA = {
  title: "Let's Discuss Your",
  titleAccent: "E-commerce Project",
  body: {
    text: "Whether you want to improve product search, automate customer support, forecast demand more confidently, enrich your catalogue or connect your store with ERP, CRM and fulfilment systems, tell us what you are trying to achieve. We will give you an honest view of what is feasible, which data and integrations it depends on, and the most sensible first step.",
  },
  bring: ["Your platform and channels", "Catalogue size and data sources", "Where support time goes", "Systems that need connecting", "What a good outcome looks like"],
};

export const SCHEMA_SERVICE = {
  name: "AI Solutions and Custom Software Development for E-commerce",
  serviceType: ["AI solutions and custom software development for e-commerce", "E-commerce system integration", "E-commerce customer support automation"],
  description:
    "Semantic product search, recommendations, shopping assistants, support automation, demand forecasting, product content workflows, custom e-commerce software and system integration for UK online retailers.",
  catalogName: "E-commerce AI capabilities",
  catalog: AI_CAPABILITIES.map((c) => c.title),
  relatedServicePath: "/solutions/inventory-management",
};
