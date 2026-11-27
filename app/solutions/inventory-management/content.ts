/*
 * /solutions/inventory-management content, from
 * "ClickMasters Inventory Management Solutions: SEO Content Pack" (25 Nov 2026).
 * Edit copy here; page.jsx only renders it.
 *
 * VERIFY comments mark business facts the pack says need owner confirmation.
 * Body links: exactly the pack's four (CTAs, breadcrumb, header and footer
 * are template elements).
 */

export const PATH = "/solutions/inventory-management";

export const SEO = {
  // Rendered as "Custom Inventory Management System UK | ClickMasters" (52 chars).
  title: "Custom Inventory Management System UK",
  description:
    "Custom inventory management software for UK businesses: real-time stock tracking, barcode workflows, purchasing and multi-location control.",
  ogTitle: "Inventory Management Solutions | ClickMasters",
  ogDescription:
    "Stock figures you can trust: inventory systems built around your locations, workflows and sales channels.",
};

export type LinkedText = { text: string; link?: { anchor: string; href: string } };

const IMG = "/assets/Solution/inventory";

/**
 * Diagrams drawn for this page (alt text from the pack's image table) and
 * photos from Unsplash (Unsplash License: free for commercial use, no
 * attribution required; credits kept here for reference).
 */
export const IMAGES = {
  flow: {
    src: `${IMG}/inventory-stock-flow.png`, width: 1080, height: 800,
    alt: "Diagram of stock moving from delivery through receiving, putaway, picking and despatch to one record",
  },
  statuses: {
    src: `${IMG}/inventory-stock-statuses.png`, width: 1720, height: 420,
    alt: "Diagram splitting one product's 120 units on hand into allocated, available and quarantined stock",
  },
  erp: {
    src: `${IMG}/inventory-vs-erp.png`, width: 1720, height: 560,
    alt: "Diagram comparing an inventory system linked to accounting with an ERP covering all departments",
  },
  capabilities: {
    src: `${IMG}/inventory-capability-map.png`, width: 1720, height: 640,
    alt: "Map of foundation inventory features in the centre with built-to-requirement extensions around them",
  },
  multiLocation: {
    src: `${IMG}/multi-location-stock-view.png`, width: 1720, height: 560,
    alt: "Two warehouses and a shop showing on-hand, allocated and available stock and a transfer in transit",
  },
  reorder: {
    src: `${IMG}/reorder-point-calculation.png`, width: 1720, height: 620,
    alt: "Graph of stock falling to a reorder point, with delivery arriving after lead time above safety stock",
  },
  // Photo: CHUTTERSNAP (unsplash.com/photos/BNBA1h-NgdY)
  racking: {
    src: `${IMG}/inventory-warehouse-pallet-racking.webp`, width: 1080, height: 719,
    alt: "Tall warehouse pallet racking stacked with shrink-wrapped, barcode-labelled cardboard boxes",
  },
  // Photo: Jacques Dillies (unsplash.com/photos/jcav1COVvOc)
  warehouse: {
    src: `${IMG}/inventory-warehouse-loading-bays.webp`, width: 1600, height: 557,
    alt: "Wide view of a warehouse with rows of pallet racking beside a line of loading bay doors",
  },
  // Photo: Tianlei Wu (unsplash.com/photos/sf6YUxvCoro)
  shop: {
    src: `${IMG}/inventory-shop-stock-aisle.webp`, width: 1200, height: 750,
    alt: "Shoppers in a narrow shop aisle lined with tightly stocked shelves of hardware and household goods",
  },
} as const;

// VERIFY: confirm the four foundation capabilities exist as a reusable base.
export const HERO = {
  eyebrow: "Inventory Management Solutions UK",
  title: "Custom Inventory Management Software",
  titleAccent: "for UK Businesses",
  lead:
    "Built for UK businesses that need to trust their stock figures. If your stock count says twelve and the shelf says three, every decision built on that number is a guess: what to buy, what to promise customers, what to move between sites. Spreadsheets, a basic stock module in the accounting package or a system bolted on years ago all fail the same way. Stock moves faster than the records do.",
  audience:
    "ClickMasters builds and tailors inventory management systems around how stock actually moves through your business. We start from a ready-to-customise foundation for real-time stock tracking, barcode workflows, purchasing and multi-location warehouse control, then shape the locations, workflows, rules and integrations around your products, your sites and your sales channels.",
  stats: [
    { value: "One stock record", label: "Every movement logged" },
    { value: "Barcode & QR", label: "Scan-confirmed workflows" },
    { value: "Multi-location", label: "Sites, warehouses, bins" },
    { value: "Two-week sprints", label: "Weekly demos" },
  ],
};

export const WHAT_IS = {
  p1: "An **inventory management system** records every product you hold, where it is, how much of it is available, and every movement in and out: deliveries, transfers between sites, sales, returns, write-offs and count adjustments. Because every movement is recorded as it happens, the stock figure is always the result of real transactions rather than someone's latest edit to a spreadsheet.",
  p2: "Good inventory software separates stock into the states that matter for decisions:",
  statuses: [
    ["On hand:", "physically in a location."],
    ["Allocated:", "reserved for an order not yet despatched."],
    ["Available:", "what you can actually promise to the next customer."],
    ["On order:", "raised with a supplier and expected in."],
    ["Quarantined or damaged:", "held, but not for sale."],
  ],
  p3: "That single distinction between on hand and available is often the difference between promising stock you have and promising stock you have already sold.",
};

export const SIGNS = {
  title: "Signs your business has outgrown its current stock inventory management system",
  items: [
    "Stock counts regularly disagree with the system, and nobody trusts either.",
    "Customers are told an item is available, then it is not.",
    "Reordering depends on one person's memory or a weekly spreadsheet check.",
    "Each site or sales channel has its own stock figure.",
    "Finding a product in the warehouse depends on knowing where someone put it.",
    "Month-end stock valuation takes days of reconciliation.",
  ],
  outro:
    "If several of these sound familiar, the problem is usually not effort. It is that the system cannot keep up with the volume and number of places your stock moves through.",
};

export const ERP = {
  intro: "Inventory management and ERP overlap, but they solve different problems.",
  inventory:
    "**Choose an inventory-focused system** when the pain sits in stock itself: receiving, locations, picking, counting, replenishment and keeping channels in step. Finance can stay in your accounting package, connected by integration.",
  // Body link 1 of 4.
  erp: {
    // Rendered after a bold "Choose ERP".
    text: "when the problem is wider: stock, finance, purchasing, HR and operations all disagree with each other and need to run from one set of records. Our [[link]] page explains that route, including inventory as one module of a unified system.",
    link: { anchor: "custom ERP software", href: "/solutions/erp-software" },
  } as LinkedText,
  outro:
    "Many businesses start with inventory, because that is where errors cost money every day, and extend into wider ERP later. We design the data model so that step does not mean starting again.",
};

export const ROUTES = {
  headers: ["", "Accounting add-on or SaaS inventory product", "Tailored system on our inventory foundation", "Fully custom inventory system"],
  rows: [
    ["Best when", "Simple product range, one or two locations, standard processes", "Core stock control is standard, but locations, workflows, rules or integrations are not", "Stock handling is your competitive edge, or no product models it properly"],
    ["Strengths", "Quickest to start; predictable subscription", "Core stock features already exist; investment goes into your specific processes", "Complete control of data model, workflows and roadmap"],
    ["Trade-offs", "Workarounds when processes do not fit; fees that grow with users, orders or channels", "Needs clear scope and ongoing support", "Highest upfront investment; you own all maintenance"],
    ["Watch for", "Spreadsheets reappearing alongside the system", "Scope drifting into a full ERP", "Rebuilding features a foundation already provides"],
  ],
  smallTitle: "Small business inventory management software: when a product is enough",
  test:
    "**A practical test:** write down the five stock processes that cause the most errors or delay, and check whether a product handles each one without a workaround. If it does, buy the product. If the gaps are in how your stock is located, picked, traced or synchronised, a tailored system usually earns back the difference.",
};

// VERIFY: Foundation labels (incl. product/SKU management, marked "verify" in the pack)
// and capability for batch/serial/expiry, bin picking, cycle counting, kits and integrations.
export const CAPABILITIES_INTRO =
  "Capabilities marked Foundation are part of our configurable inventory base. Those marked Built to requirement are developed or extended for your business when you need them.";

export const CAPABILITIES: [string, string, "Foundation" | "Built to requirement"][] = [
  ["Real-time stock tracking", "Stock levels by product and location, updated by every movement", "Foundation"],
  ["Barcode workflows", "Scanning for goods in, transfers, picking and counts", "Foundation"],
  ["Purchasing", "Purchase orders, expected deliveries and goods received against the order", "Foundation"],
  ["Multi-location control", "Stock by site, warehouse and location, with transfers between them", "Foundation"],
  ["Product and SKU management", "Products, variants, units of measure, supplier codes and barcodes", "Foundation"],
  ["Users, roles and permissions", "Who can receive, adjust, transfer, approve and view, by role and site", "Foundation"],
  ["Bin locations, picking and packing", "Putaway rules, pick lists, pick routes and packing checks", "Built to requirement"],
  ["Batch, serial and expiry tracking", "Traceability by lot or serial number, with first-expiry-first-out picking", "Built to requirement"],
  ["Cycle counting", "Scheduled counts by location or product class instead of one annual stocktake", "Built to requirement"],
  ["Kits, bundles and simple assembly", "Selling or building products made of other stock items", "Built to requirement"],
  ["Supplier management", "Supplier records, lead times, prices and performance", "Built to requirement"],
  ["Stock valuation and reporting", "Valuation by method and location, ageing and movement history", "Built to requirement"],
  ["Channel and system integrations", "E-commerce, marketplaces, accounting and carriers", "Built to requirement"],
  ["Demand forecasting", "Forecasts by product and location to guide replenishment", "Built to requirement"],
];

export const PRACTICE = [
  { icon: "ledger", title: "A movement-based stock record", text: "Every change to stock is recorded as a movement, with who made it, when, where and why. Stock levels are calculated from those movements, so any figure can be traced back to its source, and adjustments leave an audit trail rather than overwriting the past." },
  { icon: "barcode", title: "Barcode and QR code scanning", text: "Scanning at goods in, putaway, picking and counting replaces manual keying, which is where many stock errors begin. Scanning runs on handheld devices or phones used by warehouse staff, using the barcodes already on your products, such as GS1 barcodes, or labels and QR codes we generate for locations and items." },
  { icon: "alert", title: "Replenishment and low-stock alerts", text: "Each product can carry a reorder point: the stock level at which you reorder so new stock arrives before you run out. A common starting calculation is average daily usage × supplier lead time in days, plus safety stock. The system flags items at or below that level, suggests order quantities and can raise draft purchase orders for approval. Reorder points are best reviewed regularly, as demand and lead times change." },
  { icon: "truck", title: "Purchasing and goods received", text: "Purchase orders are raised from the system, deliveries are checked against them, and part-deliveries, over-deliveries and damaged goods are recorded at the dock rather than discovered weeks later." },
  { icon: "count", title: "Counting without closing the warehouse", text: "Cycle counting spreads counts through the year. A common approach counts high-value or fast-moving items, often called \"A\" items in ABC analysis, more frequently than slow movers, so discrepancies are investigated while the cause is still recent." },
  { icon: "pound", title: "Stock valuation", text: "Inventory systems can value stock using first-in, first-out (FIFO) or weighted average cost, the approaches commonly used by UK businesses. Last-in, first-out (LIFO) is not permitted under UK accounting standards (FRS 102 and IAS 2). Confirm the method with your accountant; we build the system to apply it consistently." },
];

export const WAREHOUSE = {
  intro:
    "As soon as stock lives in more than one place, whether two warehouses, a warehouse and a shop, or several stores with a back room, \"how much do we have?\" becomes \"how much do we have, where, and can we get it to the customer in time?\"",
  pointsTitle: "Inventory management software warehouse teams can rely on",
  points: [
    ["Location hierarchy:", "site, zone, aisle, shelf and bin, defined as finely as your operation needs."],
    ["Transfers:", "stock in transit between sites is tracked as a movement, not left in limbo."],
    ["Location-aware availability:", "sales channels can see stock by location, so orders are fulfilled from the right site."],
    ["Guided picking:", "pick lists in a sensible walking order, scan-confirmed to reduce mis-picks."],
    ["Role-based views:", "warehouse teams see tasks, managers see exceptions, directors see the whole position."],
  ],
  // Body link 2 of 4.
  mobile: {
    text: "Where warehouse staff work on handheld devices, our [[link]] delivers scanning apps with offline task lists that sync when the connection returns, which matters in large buildings with patchy Wi-Fi.",
    link: { anchor: "mobile app development for warehouse and field teams", href: "/services/mobile-app-development" },
  } as LinkedText,
};

export const BUSINESS_TYPES = {
  note: "Typical requirements by sector. These illustrate fit and are not client case studies.",
  headers: ["Business type", "What usually matters most", "Typical extensions"],
  rows: [
    ["Retail (multi-store)", "Stock by store, transfers, replenishment from a central warehouse", "Store apps for counts and receiving"],
    ["E-commerce", "Live availability across channels to prevent overselling; fast pick and pack", "Channel and carrier integrations, returns handling"],
    ["Wholesale and distribution", "Purchasing, bulk units of measure, trade customer allocation, accurate despatch", "Customer ordering portal, price lists"],
    ["Manufacturing", "Raw materials vs finished goods, component availability, batch traceability", "Kits and assembly, links to production planning"],
    ["Warehousing and 3PL", "Stock owned by several clients in one building, location accuracy, scan-confirmed movements", "Client stock reporting and portals"],
    ["Food, health and regulated products", "Batch and expiry tracking, first-expiry-first-out, recall readiness", "Quarantine statuses, traceability reports"],
    ["Multi-location service businesses", "Parts held in vans, sites and stores", "Mobile apps for engineers, van stock replenishment"],
  ],
  // Body link 3 of 4.
  portal: {
    text: "For wholesalers and distributors in particular, trade customers increasingly expect to check stock and place orders themselves. Our [[link]] covers how those self-service portals are built on the same live stock data your team uses.",
    link: { anchor: "web application development for customer portals", href: "/services/web-application-development" },
  } as LinkedText,
};

// VERIFY: named integrations are experience claims from the site; specific platforms confirmed per project.
export const INTEGRATIONS = {
  intro: "An inventory system is only as accurate as its connections. If orders, deliveries and invoices are re-keyed between systems, errors come straight back.",
  items: [
    { icon: "cart", title: "Sales channels for ecommerce inventory management software", text: "Your website and any marketplaces you sell through read available stock from one source and send orders back, which is the main defence against overselling." },
    { icon: "pound", title: "Accounting", text: "Stock valuation, purchase invoices and cost of sales are passed to your accounting package, so finance does not rebuild stock figures from exports." },
    { icon: "stack", title: "Business systems", text: "Where you already run CRM or ERP software, the inventory system shares products, customers and orders rather than duplicating them. We have experience integrating with platforms such as Salesforce, HubSpot, Microsoft Dynamics, SAP ERP and Oracle Cloud." },
    { icon: "truck", title: "Carriers and suppliers", text: "Despatch details, tracking references and supplier deliveries exchanged through documented APIs, file exchange or webhooks, depending on what each partner supports." },
  ],
  outro: "The specific platforms you use are confirmed and scoped for each project rather than assumed.",
};

// Body link 4 of 4.
export const FORECASTING: LinkedText = {
  text: "Reorder points react to stock you have already sold. Forecasting looks ahead: estimating demand by product and location, including seasonal peaks, so purchasing can buy ahead of a busy period rather than react to it. Where your sales history supports it, our [[link]] can feed forecasts directly into replenishment suggestions, with your buyers still in control of the final order.",
  link: { anchor: "predictive analytics for inventory and seasonal demand", href: "/services/predictive-analytics" },
};

export const PROCESS = [
  { title: "Walk the floor", text: "We follow stock through your business, from delivery to despatch and returns, and record where it is re-keyed, lost or counted twice." },
  { title: "Recommend the route", text: "We compare a product, a tailored foundation and a custom build against your requirements, and say so if a product will do the job." },
  { title: "Design the data model and workflows", text: "Products, units, locations, stock statuses, roles and integrations, plus the agreed first release." },
  { title: "Build in two-week sprints", text: "Weekly demos in a test environment, with warehouse and purchasing staff trying the scanning screens early, while changes are still cheap." },
  { title: "Migrate, count and test", text: "Product and supplier data cleaned and imported, opening stock loaded from a physical count, then functional, integration, security and acceptance testing on real workflows." },
  { title: "Go live and improve", text: "Go-live by site where that reduces risk, training for each team, then improvements based on movement and exception data." },
];

export const PROCESS_OUTRO = "We offer fixed-price and time-and-materials engagements, with a scoped estimate and milestones after discovery.";

export const SECURITY = [
  { icon: "lock", title: "Access control", text: "Permissions by role, site and action, so only authorised people can adjust stock, approve write-offs or change costs." },
  { icon: "audit", title: "Audit trail", text: "Every movement and adjustment records who, when and why, supporting investigations, audits and stock reconciliation." },
  { icon: "shield", title: "Secure engineering", text: "OWASP-guided development, encryption in transit and at rest, regular security testing, and data handled in line with UK GDPR best practice. No supplier can honestly guarantee a system can never be breached; these controls address the risks that matter most." },
  { icon: "speed", title: "Performance at volume", text: "Indexing based on real query patterns, background processing for heavy reports and integration jobs, and caching keep scanning screens fast during peak periods." },
  { icon: "scale", title: "Scalability", text: "New sites, warehouses and channels added as configuration, because locations are modelled from the start." },
  { icon: "cloud", title: "Inventory management software cloud hosting", text: "Cloud deployment on AWS, Microsoft Azure or Google Cloud in the region you choose." },
];

export const OUTCOMES = {
  intro: "Results depend on your starting point and how consistently the system is used, but these are the operational changes businesses typically look for:",
  items: [
    { icon: "eye", title: "Visibility", text: "One stock figure per product and location, trusted by sales, warehouse and finance." },
    { icon: "admin", title: "Less administration", text: "Fewer re-keyed orders, spreadsheet checks and reconciliation sessions." },
    { icon: "cart", title: "Better purchasing", text: "Reorders triggered by data, not by someone noticing an empty shelf." },
    { icon: "alert", title: "Earlier warnings", text: "Shortages, slow movers and expiring stock flagged before they cost money." },
    { icon: "barcode", title: "Fewer fulfilment errors", text: "Scan-confirmed picking and despatch." },
    { icon: "speed", title: "Faster answers", text: "Where stock is, what it is worth and how it is moving, without waiting for month end." },
  ],
};

export const PARTNER = {
  intro: "Questions worth asking any supplier:",
  questions: [
    "Will they tell you if a ready-made product would serve you better?",
    "Have they walked through your actual warehouse process, or only read a feature list?",
    "How will opening stock be loaded and verified?",
    "Which of your systems will they integrate with, and who maintains those integrations?",
    "What happens after go-live, and who owns the code?",
  ],
  answers: [
    { icon: "honest", title: "Honest route advice", text: "We compare product, foundation and custom options before recommending a build." },
    { icon: "stack", title: "A foundation, not a blank page", text: "Real-time stock tracking, barcode workflows, purchasing and multi-location control already exist, so your budget goes into your specific processes." },
    { icon: "team", title: "Web, mobile and AI in one team", text: "Scanning apps, customer portals and demand forecasting built alongside the core system." },
    { icon: "plug", title: "Integration experience", text: "Salesforce, HubSpot, Microsoft Dynamics, SAP ERP, ServiceNow, Oracle Cloud and Jira, plus payment and accounting tools." },
    { icon: "demo", title: "Visible progress", text: "Two-week sprints with weekly demos." },
    { icon: "support", title: "Confidentiality and support", text: "NDAs on request and 24/7 support for critical issues." },
  ],
};

export const FAQS: { q: string; a: string[] }[] = [
  { q: "What is inventory management system software?", a: ["Inventory management software records the products a business holds, where they are and every movement in and out, from deliveries and transfers to sales, returns and adjustments. It shows what is on hand and available, triggers reordering, and reports on stock value and movement."] },
  { q: "What is the difference between inventory management software and ERP?", a: ["Inventory management software focuses on stock: locations, movements, purchasing, picking and counts. ERP unifies stock with finance, sales, HR and operations in one system. If your main problem is stock accuracy and control, an inventory-focused system connected to your accounting package is often enough. If departments across the business work from conflicting records, ERP may be the better fit."] },
  { q: "When does custom inventory software make sense?", a: ["When standard products force workarounds in the processes that matter most, such as how stock is located, picked, traced or synchronised across channels, or when per-user or per-order fees are growing faster than the value. If a product handles your key processes without workarounds, it is usually the better choice."] },
  { q: "Do you build an inventory management system for small business teams?", a: ["Yes, where it pays back. For a small business with a simple product range, one or two locations and standard processes, an accounting add-on or subscription product is often the better choice, and we will say so. A tailored system on our foundation makes sense when workarounds, overselling or manual counts are already costing time across channels or sites."] },
  { q: "Can it act as warehouse management software UK-wide, across several warehouses and shops?", a: ["Yes, for many businesses. Multi-location control is part of the foundation: stock is tracked by site and location, transfers are recorded in transit, and channels can see availability by location. Warehouse functions such as bin locations, guided picking and packing checks are built to requirement, so the system can cover day-to-day warehouse work from one site to several."] },
  { q: "Does the system support barcode scanning?", a: ["Yes. Barcode workflows for goods in, transfers, picking and counting are part of the foundation, using handheld devices or phones. We can use your existing product barcodes or generate labels and QR codes for items and locations."] },
  { q: "Which inventory management system ecommerce and accounting integrations can you build?", a: ["Integrations with sales channels, accounting packages, carriers and existing business systems are built to requirement. Connecting your website and marketplaces to one live stock figure is the main defence against overselling. We confirm the specific platforms you use during scoping and include them in the estimate."] },
  { q: "Can it track batches, serial numbers and expiry dates?", a: ["Yes, as built-to-requirement features. Batch and serial tracking supports traceability and recalls, and expiry dates support first-expiry-first-out picking for food, health and other date-sensitive products."] },
  { q: "How do you calculate when to reorder stock?", a: ["A common method sets a reorder point equal to average daily usage multiplied by supplier lead time in days, plus safety stock for variation. The system flags products at or below that level and can suggest order quantities. Forecasting can add seasonal demand where sales history supports it."] },
  { q: "Can you replace our spreadsheets or existing stock system?", a: ["Yes. We review your current data and processes, clean and import products and suppliers, and load opening stock from a physical count, so the new system starts from verified figures rather than inherited errors."] },
  { q: "How much does custom inventory management software cost?", a: ["Cost depends on how much of the foundation can be used as is, the number of locations and workflows, the integrations needed, mobile scanning apps, data migration and ongoing support. We provide a fixed-price or time-and-materials estimate with milestones once requirements are understood."] },
  // VERIFY: owner to confirm the IP and code-ownership position (pack note). Only the confirmed part is published.
  { q: "Who owns the system and the data?", a: ["Your product, stock and supplier data remain yours. Ownership of the system code is set out in the contract and agreed before work starts."] },
];

export const FINAL_CTA = {
  title: "Let's Get Your",
  titleAccent: "Stock Figures Right",
  body: {
    text: "You do not need a specification to start. Tell us how stock moves through your business today, where the numbers go wrong and which systems are involved. We will recommend the right route, whether that is a product, a tailored system or a custom build, and follow with a scoped estimate.",
  } as LinkedText,
  bring: ["Products and SKU count", "Sites and locations", "Sales channels", "Current systems", "Biggest stock problem"],
};

export const SCHEMA_SERVICE = {
  name: "Inventory Management Software Development",
  serviceType: ["Custom inventory management software development", "Stock control system development", "Warehouse inventory management"],
  description: SEO.description,
};
