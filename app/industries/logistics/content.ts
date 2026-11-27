/*
 * /industries/logistics content, from
 * "ClickMasters Logistics Industry Page: SEO Content Pack" (27 Nov 2026).
 * Edit copy here; page.jsx only renders it.
 *
 * Inline links use [anchor](/path) and render through <RichText>.
 * VERIFY comments mark items the pack says need owner confirmation (section G).
 * "Fleet management software" queries belong to /solutions/fleet-management and
 * "inventory management system" to /solutions/inventory-management; link out to them.
 */

export const PATH = "/industries/logistics";

export const SEO = {
  title: "AI Logistics Solutions & Supply Chain Software UK",
  description:
    "AI solutions for logistics and custom supply chain software for UK carriers, 3PLs and warehouses: route planning, visibility, warehouse workflows and automation.",
  ogTitle: "AI-Powered Logistics & Supply Chain Software | ClickMasters",
  ogDescription:
    "Route planning, shipment visibility, freight document automation, warehouse workflows and system integration for UK logistics businesses.",
};

const IMG = "/assets/industries/logistics";

/*
 * Photos from Unsplash (Unsplash License, free to use). The pack advises against
 * humanoid robots or driverless lorries, which imply products ClickMasters does not supply.
 */
export const IMAGES = {
  // Photo: Timelab (unsplash.com/photos/sWOvgOOFk1g)
  port: {
    src: `${IMG}/logistics-container-port-at-night.webp`, width: 1200, height: 639,
    alt: "Aerial view of a container port at dusk, with stacked containers, cranes and lit roadways",
  },
  // Photo: AFINIS Group (unsplash.com/photos/OnbSOhz0oig)
  warehouse: {
    src: `${IMG}/logistics-warehouse-pallet-racking.webp`, width: 1200, height: 800,
    alt: "Warehouse aisle between tall pallet racks, with a forklift parked on the floor",
  },
  // Photo: Tom Jackson (unsplash.com/photos/fP4OG67TVes)
  docks: {
    src: `${IMG}/logistics-trailers-at-loading-docks.webp`, width: 1200, height: 800,
    alt: "Row of lorry trailers backed up to warehouse loading docks",
  },
  // Photo: Bluestonex (unsplash.com/photos/H8h7OzkV7cY)
  scanner: {
    src: `${IMG}/logistics-wearable-warehouse-scanner.webp`, width: 1200, height: 800,
    alt: "Warehouse worker's forearm wearing a wrist-mounted scanner with a screen, used for directed picking",
  },
  // Photo: Markus Winkler (unsplash.com/photos/3vlGNkDep4E)
  vans: {
    src: `${IMG}/logistics-delivery-van-fleet.webp`, width: 1200, height: 800,
    alt: "Row of white delivery vans parked in a depot yard beside trees",
  },
} as const;

export const HERO = {
  eyebrow: "Supply Chain & Logistics",
  title: "AI-Powered Logistics Solutions",
  titleAccent: "and Supply Chain Software Development",
  lead:
    "Logistics runs on timing and information: orders, bookings, loads, routes, stock positions, proof of delivery, customs paperwork and customer updates, all moving between people, vehicles, warehouses and systems that rarely share a single view. ClickMasters designs and builds AI solutions for logistics and custom supply chain software that connect those pieces. We help carriers, 3PLs, warehouses, freight forwarders and delivery businesses plan more effectively, see more clearly and spend less time on manual work.",
  audience:
    "That might be route planning that respects your real constraints, a shipment visibility portal your customers can rely on, freight document processing that ends re-keying, warehouse workflow tools for your teams, or the integrations that link your TMS, WMS, ERP and telematics data. Planners, transport managers and warehouse supervisors stay in control of the decisions that need operational judgement.",
  // Supporting line under the CTAs, shown as the hero's stat strip.
  trust: [
    { label: "Value", value: "Practical and operational" },
    { label: "Systems", value: "Connected, not copied" },
    { label: "Automation", value: "With human oversight" },
    { label: "Hardware", value: "Software only, no trackers" },
  ],
  figureAlt:
    "Logistics software integration diagram connecting orders, warehouse, transport planning, fleet data and shipment tracking, with AI-assisted planning and an exceptions queue for the operations team",
};

/** Hero diagram: order sources → transport and warehouse layer → tracking and notifications, with an exceptions queue. */
export const HERO_FLOW = {
  sources: ["E-commerce orders", "ERP orders"],
  layer: ["Warehouse", "Route planning", "Fleet data"],
  outputs: ["Shipment tracking", "Customer notifications"],
  exceptions: "Exceptions queue for the operations team",
};

export const LANDSCAPE = {
  title: "How Technology Is Changing Logistics and Supply Chain Operations",
  intro:
    "Logistics has always depended on planning and coordination. What is changing is the volume of operational data available, customers' expectations of visibility, and the ability of software to act on that data.",
  trends: [
    { icon: "connect", title: "Connected supply chain operations", text: "Shippers, carriers, warehouses and customers increasingly expect systems to exchange data automatically rather than by email and spreadsheet." },
    { icon: "visibility", title: "Real-time shipment visibility", text: "Customers expect to know where their goods are and when they will arrive, and operations teams need early warning when things go wrong." },
    { icon: "route", title: "Transport and route planning", text: "Planning tools can weigh delivery windows, vehicle capacity, driver availability and road restrictions far faster than manual planning." },
    { icon: "warehouse", title: "Warehouse management and automation", text: "Software directs receiving, put-away, picking, packing and dispatch, and coordinates with automation equipment where it is used." },
    { icon: "truck", title: "Fleet and vehicle management", text: "Telematics, inspection records and maintenance data give a clearer picture of utilisation and vehicle condition." },
    { icon: "parcel", title: "Last-mile delivery coordination", text: "Allocation, sequencing, customer notifications and proof of delivery all have to work together at the busiest and most expensive stage of the journey." },
    { icon: "freight", title: "Freight and order management", text: "Bookings, rates, documents and exceptions still involve heavy manual handling across many parties." },
    { icon: "forecast", title: "Predictive analytics and operational intelligence", text: "Historical and live data can support demand forecasting, capacity planning and disruption monitoring." },
    // VERIFY: Gartner and DHL items confirmed via search results and trade press (pack, sources 7–8).
    { icon: "ai", title: "AI-assisted planning and decision support", text: "Industry analysts now see AI moving from assistant to actor. Gartner names agentic AI among its top supply chain technology trends for 2026, alongside trust and governance as a defining theme. DHL's Logistics Trend Radar 8.0 (September 2026) describes AI that “takes action” across supply chains while people remain at the centre of logistics." },
    { icon: "plug", title: "Digital integration between logistics systems", text: "APIs increasingly connect TMS, WMS, ERP, e-commerce and carrier platforms." },
  ],
  stats: [
    { value: "77%", text: "of UK domestic freight travelled by road, based on 2022 transport statistics", source: "Department for Transport, Transport AI Action Plan (June 2025)" },
    { value: "40.4", text: "was the UK Logistics Confidence Index score in 2025, the lowest in 14 years", source: "BDO and Barclays, UK Logistics Confidence Index 2025" },
  ],
  context:
    "The Department for Transport identifies intelligent logistics among AI's applications in transport. Appetite to invest is tempered by cost pressure: the BDO and Barclays index found that operators see the efficiency and customer service benefits of AI and automation, but often lack the financial resources to invest.",
  outro:
    "That is why the foundations matter more than the headlines. AI and automation only deliver value on top of reliable operational data and connected workflows: accurate addresses, consistent order data, trustworthy stock positions and systems that talk to each other. We focus on getting those foundations right, then add intelligence where it pays its way.",
};

export const AUDIENCES = [
  { icon: "connect", title: "Logistics and distribution companies", text: "End-to-end order-to-delivery workflows, multi-site coordination and integration with customers' systems." },
  { icon: "warehouse", title: "Third-party logistics providers (3PLs)", text: "Multi-client warehouse and transport operations, client-specific rules, client portals, billing by activity and fast onboarding of new customers." },
  { icon: "control", title: "Fourth-party logistics providers (4PLs)", text: "Orchestration across many carriers and 3PLs, control-tower visibility, performance management and data consolidation." },
  { icon: "freight", title: "Freight forwarders", text: "Quotes, bookings, documentation, customs data, multi-modal shipment tracking and communication across agents and carriers." },
  { icon: "truck", title: "Transport and haulage operators", text: "Load planning, routing, drivers' hours awareness, vehicle utilisation, proof of delivery, compliance records and job costing." },
  { icon: "fleet", title: "Fleet management businesses", text: "Vehicle data, maintenance scheduling, inspections, utilisation reporting and driver administration. Our [custom fleet management software](/solutions/fleet-management) page covers this in detail." },
  { icon: "box", title: "Warehouse and fulfilment operators", text: "Receiving, put-away, picking, packing, replenishment, labour planning and accuracy." },
  { icon: "cart", title: "E-commerce fulfilment businesses", text: "Order spikes, marketplace and storefront integrations, carrier selection, returns handling and client reporting." },
  { icon: "parcel", title: "Last-mile delivery providers", text: "Route sequencing, driver apps, customer notifications, delivery exceptions and proof of delivery." },
  { icon: "chain", title: "Supply chain management organisations", text: "Supplier collaboration, inbound visibility, demand and inventory planning, and risk monitoring." },
  { icon: "rocket", title: "Logistics technology and SaaS start-ups", text: "A focused first product, multi-tenant architecture, integrations with carriers and platforms, and room to scale." },
];

export const CHALLENGES = [
  { icon: "visibility", title: "Limited visibility across shipments and supply chain activities", problem: "Shipment status is scattered across carrier portals, emails, driver calls and spreadsheets.", impact: "Customers chase updates, problems are found late and teams spend hours compiling status reports.", help: "A visibility layer that pulls tracking events from available sources into one view, with customer portals and exception alerts." },
  { icon: "route", title: "Inefficient transport and route planning", problem: "Routes are planned manually or with basic tools that ignore time windows, vehicle capacity and restrictions.", impact: "Unnecessary mileage, missed slots, overtime and underused vehicles.", help: "Route planning tools that account for real constraints, with planners reviewing and adjusting the results." },
  { icon: "document", title: "Manual freight and order processing", problem: "Bookings, orders and freight documents arrive by email, PDF and portal, and are re-keyed into internal systems.", impact: "Slow processing, transcription errors and staff time lost to data entry.", help: "Document extraction, validation rules and automated booking workflows, with human review of exceptions." },
  { icon: "plug", title: "Disconnected warehouse, fleet and transport systems", problem: "WMS, TMS, telematics, ERP and customer systems each hold part of the picture.", impact: "Duplicate data entry, conflicting information and slow hand-offs between warehouse and transport.", help: "API integration with agreed data ownership and event-driven updates." },
  { icon: "box", title: "Inventory inaccuracies and stock visibility issues", problem: "Recorded stock does not match physical stock, or stock in transit is invisible.", impact: "Failed picks, stock-outs, overselling and costly stock checks.", help: "Movement-based stock records, scanning workflows and integration between warehouse and order systems, using our [custom inventory management software](/solutions/inventory-management) where a dedicated stock system is needed." },
  { icon: "parcel", title: "Inefficient last-mile delivery coordination", problem: "Allocation, sequencing and customer communication are handled separately and often manually.", impact: "Failed first-time deliveries, repeat attempts and customer contact.", help: "Delivery management with route sequencing, driver apps, automated notifications and structured exception handling." },
  { icon: "fleet", title: "Vehicle utilisation and fleet administration", problem: "Utilisation, maintenance, inspections and driver records are tracked in different places.", impact: "Vehicles sit idle or miss maintenance, and compliance evidence takes time to gather.", help: "Fleet dashboards and maintenance workflows built on integrated telematics and maintenance data." },
  { icon: "chat", title: "Delayed communication between customers, drivers and operations", problem: "Updates travel by phone and email, and information is lost between shifts.", impact: "Customers are left uninformed, drivers wait for instructions and operations teams firefight.", help: "Shared status data, driver apps, automated customer updates and assistants that answer routine status questions." },
  { icon: "bottleneck", title: "Difficulty identifying operational bottlenecks", problem: "Without joined-up data, it is hard to see where time is lost: at the dock, in picking, at customer sites or in administration.", impact: "Improvement effort goes to the wrong places.", help: "Operational analytics combining warehouse, transport and order events." },
  { icon: "alert", title: "Unexpected delays and supply chain disruptions", problem: "Weather, congestion, supplier delays, port issues and vehicle breakdowns disrupt plans.", impact: "Missed commitments and costly reactive changes.", help: "Disruption monitoring, alerts, scenario tools and dynamic replanning support where reliable data is available." },
  { icon: "report", title: "Manual reporting and document management", problem: "Proof of delivery, delivery notes, CMRs, customs documents and client reports are handled on paper or scattered across folders.", impact: "Slow invoicing, disputes that are hard to resolve and hours spent preparing reports.", help: "Digital proof of delivery, document classification and storage, and automated report generation." },
  { icon: "shield", title: "Data security and system integration concerns", problem: "More connections mean more potential entry points, and many logistics systems were not designed for open integration.", impact: "Cyber incidents can halt operations, and fragile integrations fail silently.", help: "Secure API design, least-privilege access, monitoring, error handling and tested recovery plans." },
];

export type AiCapability = {
  id: string;
  icon: string;
  title: string;
  paragraphs: string[];
  items?: { term?: string; text: string }[];
  outro?: string[];
  image?: keyof typeof IMAGES;
};

export const AI_CAPABILITIES: AiCapability[] = [
  {
    id: "route-planning",
    icon: "route",
    title: "AI-powered route planning and optimisation",
    paragraphs: [
      "Route planning software can analyse delivery requirements, vehicle capacity and type, delivery time windows, driver availability, depot locations, road restrictions and, where available, traffic information. It then proposes efficient routes and load plans. Where reliable live data exists, such as vehicle positions and job status, it can support dynamic replanning when a vehicle is delayed or a new job arrives.",
      "No route is perfect. Results depend on accurate addresses, realistic service times and the quality of map and traffic data, and estimated arrival times are estimates, not guarantees. Plans must also respect legal and operational constraints, such as drivers' hours rules and vehicle height and weight limits. Planners should always be able to review, adjust and override the results.",
    ],
    image: "docks",
  },
  {
    id: "fleet-management",
    icon: "fleet",
    title: "Intelligent fleet management",
    paragraphs: [
      "Fleet management software brings vehicle and driver data into one place. That includes utilisation dashboards, operational alerts such as harsh events, idling or unexpected stops, maintenance and inspection workflows, defect reporting and driver activity information from connected telematics systems. AI-assisted analytics can then identify patterns, such as vehicles with rising fault rates, routes with persistent delays or utilisation gaps, to support fleet decisions.",
      "We build software around telematics data from your existing providers. **We do not supply tracking hardware.** The dedicated [fleet management software](/solutions/fleet-management) page explains the capabilities in detail.",
    ],
  },
  {
    id: "predictive-analytics",
    icon: "forecast",
    title: "Predictive logistics and supply chain analytics",
    paragraphs: ["Historical and operational data can support:"],
    items: [
      { term: "Demand forecasting", text: "for volumes, orders or SKUs, by site and period;" },
      { term: "Capacity planning", text: "for vehicles, drivers, dock slots and warehouse labour;" },
      { term: "Disruption monitoring", text: "that combines internal events with external signals;" },
      { term: "Inventory-related decisions", text: "such as safety stock and replenishment; and" },
      { term: "Delay prediction", text: "for shipments at risk of missing their window." },
    ],
    outro: [
      "Predictions depend on data quality, coverage and model validation. Models are tested against historical outcomes before use, presented with uncertainty, and monitored for drift as patterns change. They support planners; they do not replace them. Our [machine learning development](/services/machine-learning) work explains how we build and validate these models.",
    ],
  },
  {
    id: "warehouse-operations",
    icon: "warehouse",
    title: "AI-powered warehouse operations",
    paragraphs: ["Software can support warehouse operations through:"],
    items: [
      { term: "Warehouse workflow assistance", text: "that directs receiving, put-away, picking and packing tasks;" },
      { term: "Inventory visibility", text: "by location, status and lot, updated as movements are scanned;" },
      { term: "Picking and packing coordination,", text: "including batching, wave planning and pack verification;" },
      { term: "Replenishment insights", text: "that flag pick faces running low;" },
      { term: "Document processing", text: "for delivery notes, advance shipping notices and supplier paperwork; and" },
      { term: "Operational reporting", text: "on throughput, accuracy and backlogs." },
    ],
    outro: [
      "These are software solutions. **We do not manufacture or supply warehouse robots or automation equipment.** Where a warehouse uses robotics or automated handling, our software can integrate with that equipment's control systems through the interfaces its vendor provides.",
    ],
    image: "scanner",
  },
  {
    id: "freight-intelligence",
    icon: "freight",
    title: "Freight and shipment intelligence",
    paragraphs: ["AI can reduce manual work in freight operations:"],
    items: [
      { term: "Document extraction", text: "from bills of lading, airway bills, CMRs, commercial invoices and packing lists." },
      { term: "Shipment information classification,", text: "for example by mode, service level, customer and exception type." },
      { term: "Freight enquiries", text: "answered from rate and service information, with quotes prepared for staff approval." },
      { term: "Exception handling,", text: "flagging missing documents, mismatched data or delays for action." },
      { term: "Shipment updates", text: "compiled from carrier events and shared with customers." },
      { term: "Internal knowledge retrieval", text: "for procedures, customer instructions and carrier requirements." },
    ],
    // VERIFY: confirm comfort working with customs and dangerous goods data (pack, G5).
    outro: ["Extracted data, especially customs and dangerous goods information, must be validated by trained staff before it is relied on."],
  },
  {
    id: "logistics-assistants",
    icon: "assistant",
    title: "AI logistics assistants",
    paragraphs: [
      "Conversational assistants can handle routine enquiries from customers and staff. They can answer “where is my shipment?” from live tracking data, explain services and cut-off times, help staff find procedures, and look up customer-specific instructions. Using retrieval-augmented generation (RAG), the assistant retrieves information only from authorised logistics documents and data sources, such as service guides, SOPs, customer handbooks and tracking systems, and cites where answers came from. Our [RAG development](/services/rag-development) service explains how we build these systems.",
      "Assistants are clearly identified as automated, avoid promising delivery times the data does not support, and hand complaints, claims and unusual cases to staff. Assistants that take actions, such as rebooking a delivery, are built through our [AI agent development](/services/ai-agent-development) practice with defined permissions.",
    ],
  },
  {
    id: "last-mile",
    icon: "parcel",
    title: "Last-mile delivery automation",
    paragraphs: [
      "Last-mile delivery software can automate delivery allocation by area, vehicle and driver. It can send customer notifications with delivery windows, update delivery status from driver apps, and run exception workflows for failed deliveries, access problems or damaged goods. It can also coordinate rebooking, safe-place and collection options. Proof of delivery, photos and signatures flow back to operations and customers automatically.",
    ],
    image: "vans",
  },
  {
    id: "workflow-automation",
    icon: "automation",
    title: "Logistics workflow automation",
    paragraphs: ["Logistics automation removes repetitive steps across:"],
    items: [
      { term: "Order processing:", text: "receiving, validating and releasing orders." },
      { term: "Shipment booking:", text: "creating bookings with carriers or internal fleets." },
      { term: "Delivery updates:", text: "sending status changes to customers and internal teams." },
      { term: "Document handling:", text: "classifying, filing and sharing documents." },
      { term: "Dispatch coordination:", text: "assigning jobs and notifying drivers." },
      { term: "Customer communication:", text: "confirmations, delay notices and requests for information." },
      { term: "Operational reporting:", text: "daily and weekly reports compiled automatically." },
      { term: "Internal task management:", text: "creating and tracking follow-up tasks." },
    ],
    outro: [
      "Rules handle the predictable steps, AI handles unstructured information, and people handle the exceptions. Every automated action is logged. Our [AI automation services](/services/ai-automation) describe the approach.",
    ],
  },
];

export const SOFTWARE = {
  intro:
    "Off-the-shelf logistics software suits many operations, and we will say so when one fits. Custom logistics software makes sense when your operating model, client requirements or integrations are distinctive, when you have outgrown spreadsheets and point solutions, or when you are building a logistics product of your own.",
  note: "The categories below are **potential custom development projects**, scoped to your requirements. They are not existing ClickMasters products.",
  items: [
    { icon: "route", title: "Transport management systems (TMS)", text: "Order intake, load and route planning, carrier or fleet allocation, tracking, proof of delivery and freight costing, giving one place to plan and control transport." },
    { icon: "warehouse", title: "Warehouse management systems (WMS)", text: "Receiving, put-away, picking, packing, dispatch and stock control by location, improving accuracy and throughput visibility." },
    { icon: "fleet", title: "Fleet management systems (FMS)", text: "Vehicle records, telematics data, maintenance, inspections and utilisation, giving clearer fleet decisions and compliance evidence." },
    { icon: "freight", title: "Freight management platforms", text: "Quotes, bookings, documentation, multi-carrier tracking and exceptions, with less manual handling for forwarders and shippers." },
    { icon: "visibility", title: "Shipment tracking applications", text: "Consolidated tracking events and status timelines, giving one version of the truth for staff and customers." },
    { icon: "parcel", title: "Delivery management platforms", text: "Allocation, sequencing, notifications and exceptions, for coordinated delivery operations." },
    { icon: "mobile", title: "Last-mile delivery applications", text: "Driver apps with job lists, navigation hand-off, proof of delivery and offline capability, so drivers have what they need at the door." },
    { icon: "contacts", title: "Logistics CRM systems", text: "Customer accounts, quotes, service agreements and account management, giving a full view of each customer relationship." },
    { icon: "box", title: "Inventory and distribution management software", text: "Stock across sites and in transit, with replenishment and allocation, for better stock visibility." },
    { icon: "dashboard", title: "Supply chain visibility dashboards", text: "Consolidated status, performance and risk indicators, so issues are spotted earlier." },
    { icon: "rocket", title: "Logistics SaaS platforms", text: "Multi-tenant products for logistics technology businesses, built through our [MVP and SaaS development](/services/mvp-saas-development) service." },
    { icon: "portal", title: "Driver and operations portals", text: "Job information, documents, defect reports and messaging, with less phone and radio traffic." },
    { icon: "customer", title: "Customer shipment portals", text: "Bookings, tracking, documents and reports for customers, reducing status enquiries." },
    { icon: "erp", title: "Custom logistics ERP applications", text: "Finance, billing and operations tailored to logistics, extending or connecting to [custom ERP software](/solutions/erp-software) where needed, for joined-up operations and accounts." },
  ],
  teamIntro:
    "Our [custom software development](/services/custom-software-development) and [mobile app development](/services/mobile-app-development) teams design these with:",
  considerations: [
    ["Scalable architecture", "for peak volumes and growth in sites, vehicles and clients."],
    ["Secure databases", "with well-modelled operational data and encrypted storage."],
    ["Role-based access", "for planners, drivers, warehouse staff, customers and administrators."],
    ["Real-time data handling", "where your data sources support it, with sensible fallbacks where they do not."],
    ["API integrations", "with carriers, telematics, ERP, e-commerce and customer systems."],
    ["Reporting and analytics", "built on consistent operational data."],
    ["Mobile-friendly interfaces", "including offline-capable driver and warehouse apps for areas with poor connectivity."],
  ],
};

export const USE_CASES_NOTE =
  "The following are illustrative development opportunities showing how the technology could be applied. They are not completed ClickMasters client projects, and real benefits depend on each operation's data, systems and processes.";

export const USE_CASE_FIELDS = [
  ["problem", "Business problem"],
  ["solution", "Proposed solution"],
  ["tech", "Relevant technology"],
  ["benefit", "Expected benefit"],
  ["oversight", "Oversight"],
] as const;

export const USE_CASES = [
  { icon: "route", title: "AI-assisted delivery route planning", problem: "Planners build daily multi-drop routes manually, taking hours and producing uneven loads.", solution: "A route planning tool that generates draft routes against time windows, capacity and restrictions.", tech: "Optimisation algorithms, map and traffic data, and integration with order and fleet systems.", benefit: "Faster planning and more balanced routes.", oversight: "Planners review and adjust every plan, and drivers' hours and vehicle restrictions are enforced as constraints." },
  { icon: "dashboard", title: "Fleet performance dashboard", problem: "Fleet managers lack a single view of utilisation, faults and maintenance status.", solution: "A dashboard combining telematics, maintenance and job data.", tech: "Data integration, analytics and alerting.", benefit: "Clearer utilisation insight and earlier maintenance action.", oversight: "Managers interpret patterns and make the fleet decisions. Driver data is handled under clear policies." },
  { icon: "visibility", title: "Shipment tracking and customer notification platform", problem: "Customers phone for updates because tracking information is incomplete.", solution: "Consolidated tracking from available carrier and fleet sources, with a customer portal and proactive notifications.", tech: "Carrier API integration, event processing and a notification service.", benefit: "Fewer status enquiries and better-informed customers.", oversight: "Estimated times are labelled as estimates, and delays above a set threshold trigger staff review." },
  { icon: "document", title: "Automated freight document processing", problem: "Staff re-key data from bills of lading, invoices and packing lists.", solution: "AI extraction into structured shipment records, with validation rules.", tech: "Document AI, confidence thresholds and review queues.", benefit: "Less manual data entry and faster processing.", oversight: "Low-confidence fields, customs data and dangerous goods information are always checked by trained staff." },
  { icon: "box", title: "Warehouse inventory visibility system", problem: "Stock records do not match physical locations, causing failed picks.", solution: "Scan-based, movement-level stock tracking by location, with discrepancy reporting.", tech: "Mobile scanning apps, a movement ledger and integration with the order system.", benefit: "More accurate stock positions and fewer failed picks.", oversight: "Adjustments above a threshold need supervisor approval." },
  { icon: "tools", title: "Predictive maintenance support dashboard", problem: "Vehicles break down between scheduled services.", solution: "A dashboard that combines fault codes, mileage, defect reports and service history to flag vehicles for inspection.", tech: "Telematics integration and machine learning risk indicators.", benefit: "Earlier attention to vehicles showing warning signs.", oversight: "Indicators prompt inspection by qualified technicians. Safety inspections and legal maintenance obligations are never replaced by predictions." },
  { icon: "assistant", title: "Logistics customer service assistant", problem: "The customer service team spends much of its day on routine tracking and service questions.", solution: "An assistant on the web and email channels that answers from live tracking data and approved service information.", tech: "RAG, tracking system integration and help desk hand-off.", benefit: "Faster answers to routine questions and more agent time for complex cases.", oversight: "Claims, complaints and unusual requests go to staff, and answers are reviewed regularly." },
  { icon: "dispatch", title: "Automated dispatch coordination", problem: "Dispatchers assign jobs by phone and whiteboard, and changes are poorly communicated.", solution: "A dispatch tool that suggests assignments and pushes jobs to driver apps.", tech: "Workflow automation, a driver mobile app and rules for skills, vehicle type and location.", benefit: "Quicker, clearer dispatch and an audit trail of changes.", oversight: "Dispatchers confirm or override suggestions." },
  { icon: "parcel", title: "Last-mile delivery management application", problem: "Failed deliveries and repeat attempts drive cost and complaints.", solution: "Driver and customer apps with sequencing, delivery windows, notifications, safe-place options and proof of delivery.", tech: "A mobile app with offline support, a notification service and a route sequencing engine.", benefit: "Better-informed customers and structured handling of failed deliveries.", oversight: "Drivers can report access and safety issues, and exceptions go to the operations team." },
  { icon: "forecast", title: "Supply chain analytics dashboard", problem: "Leaders lack a consolidated view of inbound, warehouse and outbound performance.", solution: "A dashboard with lead times, on-time performance, backlogs and risk indicators.", tech: "Data pipelines, a reporting database and optional forecasting models.", benefit: "Earlier identification of bottlenecks and trends.", oversight: "Metric definitions are agreed with the business, and forecasts are shown with their uncertainty." },
  { icon: "freight", title: "Freight enquiry and booking automation", problem: "Quote requests arrive by email in many formats and take time to answer.", solution: "Automated capture of enquiry details, a draft quote from rate tables and booking creation on acceptance.", tech: "AI text extraction, a rules-based pricing engine and workflow automation.", benefit: "Faster responses and more consistent quotes.", oversight: "Staff approve quotes, especially for non-standard or high-value freight." },
  { icon: "knowledge", title: "AI-powered operational knowledge assistant", problem: "Staff struggle to find SOPs, customer-specific instructions and carrier rules.", solution: "A permission-aware internal assistant over approved documents.", tech: "RAG with citations and access control.", benefit: "Faster access to correct procedures and fewer errors from outdated instructions.", oversight: "Answers cite sources for checking, and document owners keep content current." },
  { icon: "warehouse", title: "Warehouse workflow management system", problem: "Picking and packing rely on paper lists and experienced staff's memory.", solution: "Directed workflows on mobile devices for receiving, put-away, picking and packing, with verification scans.", tech: "Mobile apps, task orchestration and integration with WMS or ERP.", benefit: "More consistent processes and faster training of new staff.", oversight: "Supervisors manage priorities and exceptions. Workflows are designed alongside site safety procedures." },
  { icon: "erp", title: "Transport and ERP integration platform", problem: "Jobs, costs and invoices are re-keyed between the TMS and the finance system.", solution: "Integration that passes completed jobs, proof of delivery and charges to the ERP for invoicing.", tech: "API middleware, data mapping, validation and audit logging.", benefit: "Faster invoicing and fewer reconciliation errors.", oversight: "Finance reviews exceptions, and failed transfers raise alerts." },
];

// VERIFY: no telematics providers, carriers, TMS/WMS products or mapping services are named (pack, G3).
export const INTEGRATION = {
  intro:
    "Most logistics businesses already run several platforms. Custom software can connect with existing systems and approved third-party services, where suitable APIs, data feeds and permissions are available:",
  systems: [
    { icon: "erp", title: "ERP systems", text: "for finance, billing and purchasing." },
    { icon: "contacts", title: "CRM platforms", text: "for customer accounts and service agreements, including [custom CRM software](/solutions/crm-software) where needed." },
    { icon: "route", title: "TMS and WMS platforms", text: "whether off-the-shelf or custom." },
    { icon: "fleet", title: "Fleet tracking and telematics services", text: "for vehicle positions and events." },
    { icon: "box", title: "Inventory management systems", text: "for stock positions." },
    { icon: "orders", title: "Order management platforms", text: "for order intake and status." },
    { icon: "cart", title: "E-commerce platforms and marketplaces", text: "for fulfilment orders." },
    { icon: "finance", title: "Accounting and finance software", text: "for invoicing and costs." },
    { icon: "map", title: "Mapping and location services", text: "for geocoding, routing and ETAs." },
    { icon: "chat", title: "Customer communication tools", text: "for email, SMS and messaging." },
    { icon: "report", title: "Reporting and analytics systems", text: "for performance data." },
    { icon: "document", title: "Document management services", text: "for proof of delivery, CMRs and customs paperwork." },
  ],
  practicesIntro: "Good logistics integration covers more than connecting endpoints:",
  practices: [
    ["API integration", "designed around each system's capabilities and limits."],
    ["Data synchronisation", "at the right frequency, event-driven where possible."],
    ["Validation", "of addresses, references and quantities at every boundary."],
    ["Access permissions", "so each system and user sees only what it needs."],
    ["Error handling", "with retries, alerts and queues for failed messages."],
    ["Audit trails", "that show what changed, when and why."],
  ],
  access:
    "Not every carrier, telematics provider or platform offers open or unrestricted API access. Some require partner agreements or fees, or limit what data is available and how often. We assess each integration's options before committing to a design.",
};

export const SECURITY_INTRO =
  "Logistics systems carry customer, shipment and driver data, and outages can stop goods moving. These considerations shape how we design and build logistics software.";
export const SECURITY_DISCLAIMER =
  "This is general information, not legal or safety advice. Software supports compliance but does not guarantee it.";

export const SECURITY = [
  { icon: "privacy", title: "UK GDPR and the Data Protection Act 2018", text: "These apply wherever personal data is processed, including consignee names and addresses, customer contacts and driver records." },
  { icon: "driver", title: "Driver and employee data protection", text: "Vehicle tracking, telematics and in-cab data can reveal a great deal about individuals. Workers should be told what is monitored and why, monitoring should be proportionate to a clear purpose, and private use outside working time needs careful handling. The ICO has published specific guidance on monitoring workers." },
  { icon: "map", title: "Responsible handling of location and tracking data", text: "Collect location data only for defined operational purposes, restrict access, avoid retaining detailed movement histories longer than needed, and be transparent with drivers and customers." },
  { icon: "roles", title: "Appropriate access controls", text: "Role-based access for planners, drivers, warehouse staff, customers and administrators, enforced on the server. Multi-factor authentication for privileged accounts." },
  { icon: "lock", title: "Secure shipment and customer information", text: "Shipment details, addresses and high-value consignment information can be targeted by criminals, so access should be limited and logged." },
  { icon: "minimise", title: "Data minimisation and retention", text: "Defined retention periods for proof of delivery, tracking history, documents and personal data, with secure deletion." },
  { icon: "code", title: "API security", text: "Authentication, authorisation on every request, rate limiting, input validation and secrets kept out of code." },
  { icon: "history", title: "Audit trails and monitoring", text: "Logging of key actions and data changes, with alerting for unusual activity." },
  { icon: "check", title: "AI output validation", text: "Route plans, forecasts, extracted data and assistant answers are tested before go-live and monitored afterwards." },
  { icon: "users", title: "Human oversight of operational decisions", text: "Planners, dispatchers and supervisors can review and override AI suggestions, particularly where safety, legal compliance or significant cost is involved." },
  { icon: "backup", title: "System resilience and recovery planning", text: "Redundancy, backups, tested recovery procedures and graceful degradation, so operations can continue if a component or third-party service fails." },
  { icon: "safety", title: "Physical safety", text: "Transport and warehouse environments carry real physical risks. Software that directs drivers, vehicles, warehouse staff or equipment should be designed and assessed against the operator's workplace transport, work equipment and drivers' hours responsibilities. Route plans and task assignments should never encourage unsafe or non-compliant working. Safety decisions remain with the operator." },
];

export const SECURITY_STATEMENT =
  "ClickMasters does not claim ISO certification, security accreditation, government approval or industry certification. We design to recognised security practices and provide documentation to support your own assessments.";

export const WHY_INTRO =
  "We are a software engineering and AI company. For logistics businesses, that means one team that can build operational software, connect your systems and add AI where the data supports it.";

export const WHY = [
  { icon: "code", title: "Custom software development", text: "TMS, WMS, portals and operational tools shaped around how you work." },
  { icon: "ai", title: "AI and machine learning integration", text: "Route planning support, forecasting, delay prediction and anomaly detection." },
  { icon: "knowledge", title: "Generative AI and RAG development", text: "Document extraction, assistants and knowledge tools grounded in your data." },
  { icon: "automation", title: "AI agents and workflow automation", text: "Bookings, updates, dispatch and reporting automated with clear limits." },
  { icon: "portal", title: "Web application development", text: "Fast, secure portals and dashboards for staff and customers." },
  { icon: "rocket", title: "SaaS platform engineering", text: "Multi-tenant products for logistics technology businesses." },
  { icon: "erp", title: "ERP and CRM development", text: "Finance, billing and customer systems connected to operations." },
  { icon: "database", title: "Database design", text: "Operational data models that keep orders, stock and shipments consistent." },
  { icon: "plug", title: "API and system integration", text: "Carriers, telematics, e-commerce, ERP and customer systems." },
  { icon: "cloud", title: "Cloud and DevOps engineering", text: "Monitored, resilient infrastructure for operations that run around the clock." },
];

export const WHY_OUTRO =
  "The value is in combining them. Many logistics AI ideas stall because the underlying data and integrations are not ready, and many software projects miss easy automation opportunities. We start with your operational problems, recommend the simplest approach that works, and are candid when an existing product would serve you better. If you want help prioritising, our [AI consulting and strategy](/services/ai-consulting-strategy) service is a good starting point.";

export const PROCESS_INTRO =
  "The implementation scope depends on your existing systems, data quality and operational requirements. A typical engagement follows these stages.";

// VERIFY: confirm the support model behind stage 9 ("agreed as part of the engagement").
export const PROCESS = [
  { title: "Logistics business and workflow discovery", text: "We learn how your operation runs across orders, warehouse, transport and customers, including the workarounds." },
  { title: "Operational requirements assessment", text: "We define requirements with planners, supervisors, drivers and managers, and agree what success looks like." },
  { title: "Data and integration analysis", text: "We assess data quality, such as addresses, stock records and event data, and confirm what each system and provider allows." },
  { title: "Technical architecture and solution planning", text: "We design the architecture, data model, integrations and AI components, with a phased plan." },
  { title: "UX and application design", text: "We design interfaces for the office, the warehouse floor and the cab, including offline use where needed." },
  { title: "Software and AI development", text: "We build in short iterations with regular demonstrations." },
  { title: "System integration and validation", text: "We connect systems and validate data flows and AI outputs against real operational scenarios." },
  { title: "Security and operational testing", text: "We test security, performance at peak volumes, failure handling and recovery." },
  { title: "Deployment planning and continuous improvement", text: "We plan roll-out around operational peaks, train users, monitor performance and improve over time, with ongoing support agreed as part of the engagement." },
];

export const FAQS = [
  { q: "What are AI-powered logistics solutions?", a: ["They are software systems that apply AI techniques, such as optimisation, machine learning, document understanding and language models, to logistics tasks. Examples include route planning, demand forecasting, freight document processing, shipment visibility, warehouse workflow support and customer service assistants. They depend on reliable operational data and integration with existing systems."] },
  { q: "How is AI used in logistics and supply chain management?", a: ["Common uses include planning routes and loads, forecasting demand and capacity, predicting delays, extracting data from freight documents, answering tracking enquiries, flagging exceptions, supporting warehouse replenishment and analysing operational performance. AI supports planners and operations teams; it does not remove the need for their judgement."] },
  { q: "Can you develop custom transport management software?", a: ["Yes. We can design and build transport management software covering order intake, planning, allocation, tracking, proof of delivery and costing, integrated with your fleet data, customers and finance systems."] },
  { q: "Can you build a warehouse management system?", a: ["Yes. We can build warehouse management software for receiving, put-away, picking, packing, dispatch and location-level stock control, with mobile scanning apps and integration with your order and ERP systems. Where you use automation equipment, we integrate through the interfaces its vendor provides."] },
  { q: "How can AI help with route planning?", a: ["Route planning tools evaluate delivery locations, time windows, vehicle capacity, driver availability and road restrictions to propose efficient routes, and can support replanning when live data shows changes. Results depend on data quality, arrival times remain estimates, and planners should review the plans."] },
  { q: "Can you develop fleet management software?", a: ["Yes. We build fleet management software for vehicle records, telematics data, maintenance, inspections, utilisation and driver administration, using data from your existing telematics providers. We do not supply tracking hardware. Our fleet management solution page has more detail."] },
  { q: "What is logistics workflow automation?", a: ["It is the use of software to carry out repetitive logistics tasks automatically, such as validating orders, creating bookings, sending delivery updates, filing documents, assigning jobs and compiling reports. Exceptions are routed to people, and every automated step is logged."] },
  { q: "Can you integrate logistics software with an existing ERP?", a: ["Usually, yes, where the ERP provides APIs or other supported integration methods. Typical integrations pass orders, jobs, proof of delivery, charges and stock movements between operational systems and the ERP. We assess the options and agree data ownership first."] },
  { q: "Can AI improve shipment visibility and customer communication?", a: ["AI and automation can consolidate tracking events from available sources, predict which shipments are at risk of delay, send proactive notifications and answer routine status questions. The quality of visibility depends on the tracking data each carrier and system provides."] },
  { q: "How do you approach data security in logistics software?", a: ["We apply role-based access, encryption, secure API design, audit logging, monitoring and tested backup and recovery. We minimise personal and location data, define retention periods and design driver monitoring features to be proportionate and transparent."] },
];

export const FINAL_CTA = {
  title: "Build Connected Logistics Operations",
  titleAccent: "on Software That Fits",
  body: {
    text: "Purpose-built logistics technology gives your planners, warehouse teams, drivers and customers the same reliable information, and takes routine work off people who should be solving problems. Whether you need route planning support, shipment visibility, warehouse workflows, freight automation or integration between systems that do not talk to each other, tell us about your operation. We will give you an honest view of what is feasible, which data and integrations it depends on, and the most sensible first step. Running a fleet? See our approach to [[link]].",
    link: { anchor: "fleet tracking, routing and dispatch software", href: "/solutions/fleet-management" },
  },
  bring: ["How orders, warehouse and transport connect today", "The systems and providers you use", "Where planning and admin time goes", "Data quality and integration limits", "What a good outcome looks like"],
};

export const SCHEMA_SERVICE = {
  name: "AI-Powered Logistics Solutions and Supply Chain Software Development",
  serviceType: ["AI-powered logistics solutions and supply chain software development", "Transport management software development", "Warehouse management software development"],
  description:
    "Route planning, fleet data, predictive analytics, warehouse workflows, freight document processing, logistics assistants, last-mile automation, custom TMS and WMS builds and system integration for UK logistics providers, 3PLs, freight forwarders, hauliers, warehouses and delivery businesses.",
  catalogName: "Logistics AI capabilities",
  catalog: AI_CAPABILITIES.map((c) => c.title),
  relatedServicePath: "/solutions/fleet-management",
};
