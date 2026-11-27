/*
 * /industries/manufacturing content, from
 * "ClickMasters Manufacturing Industry Page: SEO Content Pack" (27 Nov 2026).
 * Edit copy here; page.jsx only renders it.
 *
 * Inline links use [anchor](/path) and render through <RichText>; **bold** is supported.
 * VERIFY comments mark items the pack says need owner confirmation (section G).
 * No industrial protocols (OPC UA, MQTT, Modbus) or control hardware are claimed:
 * none is verified in the repository. Monitoring and decision support are kept
 * separate from machine control throughout.
 */

export const PATH = "/industries/manufacturing";

export const SEO = {
  title: "AI Manufacturing Solutions & Industrial Software UK",
  description:
    "AI solutions for manufacturing and custom industrial software for UK manufacturers: predictive maintenance, quality inspection, production planning and MES.",
  ogTitle: "AI-Powered Manufacturing & Industrial Software | ClickMasters",
  ogDescription:
    "Predictive maintenance support, AI-assisted quality inspection, production planning, shop-floor dashboards and safe OT/IT integration for UK manufacturers.",
};

const IMG = "/assets/industries/manufacturing";

/*
 * Photos from Unsplash (Unsplash License, free to use). The pack advises against
 * humanoid robots, glowing "AI brain" factories and people near machinery without PPE.
 */
export const IMAGES = {
  // Photo: Homa Appliances (unsplash.com/photos/pWUyHVJgLhg)
  factory: {
    src: `${IMG}/manufacturing-factory-production-line.webp`, width: 1200, height: 801,
    alt: "Clean, bright factory hall with a long automated production line and marked walkways",
  },
  // Photo: aluminum Zheng ji (unsplash.com/photos/sxtClAGwRck)
  milling: {
    src: `${IMG}/manufacturing-cnc-milling-machine.webp`, width: 1200, height: 801,
    alt: "CNC milling machine cutting an aluminium part with coolant spraying onto the tool",
  },
  // Photo: Sven Daniel (unsplash.com/photos/eaanLTG7TCU)
  lathe: {
    src: `${IMG}/manufacturing-lathe-machining.webp`, width: 1200, height: 800,
    alt: "Metal bar held in a lathe chuck being machined by a cutting tool",
  },
  // Photo: Hans Westbeek (unsplash.com/photos/_luiFaaZU6k)
  inspection: {
    src: `${IMG}/manufacturing-caliper-quality-inspection.webp`, width: 1200, height: 800,
    alt: "Hands measuring a machined metal part with a digital caliper during quality inspection",
  },
  // Photo: Raymond Sime (unsplash.com/photos/NAchd3UmxXo)
  controlCabinet: {
    src: `${IMG}/manufacturing-plc-control-cabinet.webp`, width: 1200, height: 800,
    alt: "Open industrial control cabinet with PLC modules, terminals and neatly routed wiring",
  },
} as const;

export const HERO = {
  eyebrow: "Smart Manufacturing & Industrial Software",
  title: "AI-Powered Manufacturing Solutions",
  titleAccent: "and Industrial Software Development",
  lead:
    "Manufacturing runs on data that is often hard to use: machine signals, work orders, inspection results, batch records, stock movements, maintenance logs and production reports, spread across shop-floor equipment, spreadsheets and business systems. ClickMasters designs and builds AI solutions for manufacturing and custom industrial software that turn that data into something teams can act on.",
  audience:
    "We help manufacturers see what is happening on the line, plan production more confidently, catch quality issues earlier, focus maintenance where it is needed and take routine paperwork off engineers and supervisors. Our work spans predictive maintenance support, AI-assisted quality inspection, production planning tools, shop-floor dashboards, knowledge assistants and the integrations that connect factory data with ERP and other business systems. It is always built around how your plant actually runs, with people in charge of operational and safety decisions.",
  // Supporting line under the CTAs, shown as the hero's stat strip.
  trust: [
    { label: "AI", value: "Practical and industrial" },
    { label: "Operations", value: "Connected, not siloed" },
    { label: "Engineering", value: "Manufacturing-specific" },
    { label: "Control", value: "Human oversight built in" },
  ],
  figureAlt:
    "Smart manufacturing software architecture showing shop-floor machines and sensors connected through a segmented OT network and secure gateway to production, quality, maintenance, analytics and ERP systems",
};

/** Hero diagram: shop floor → OT gateway (segmented) → one-way data → platform and apps → ERP, with human review. */
export const HERO_FLOW = {
  shopFloor: ["Machines", "Sensors", "Operator input"],
  gateway: "OT data gateway in a segmented plant network",
  oneWay: "One-way data path",
  apps: ["MES", "Quality", "Maintenance", "Analytics"],
  business: "ERP and supply chain systems",
  review: "Engineers and supervisors review AI insights before acting",
};

export const LANDSCAPE = {
  title: "How Digital Technology Is Changing Modern Manufacturing",
  intro:
    "Manufacturing has used automation for decades. What is changing is how much data production generates, how cheaply it can be collected and analysed, and how closely factory operations can be connected with the rest of the business.",
  trends: [
    { icon: "industry", title: "Industry 4.0 and smart manufacturing", text: "Machines, systems and people share data so decisions can be based on what is actually happening, not on yesterday's spreadsheet." },
    { icon: "connect", title: "Connected factory operations", text: "Production, quality, maintenance, stores and planning work from a common picture rather than separate records." },
    { icon: "ai", title: "Industrial AI and machine learning", text: "Models can detect anomalies in equipment data, classify defects in images, forecast demand and support scheduling." },
    { icon: "visibility", title: "Production data and real-time visibility", text: "Output, downtime, scrap and work in progress can be visible as they happen, where data sources allow." },
    { icon: "maintenance", title: "Predictive maintenance", text: "Condition data and maintenance history help teams decide when to intervene before failures disrupt production." },
    { icon: "inspect", title: "Automated quality inspection", text: "Computer vision can assist inspectors with consistent, repeatable checks at the speed of the line." },
    { icon: "plan", title: "Digital production planning", text: "Planning tools can weigh orders, capacity, materials and constraints faster than manual methods." },
    { icon: "mes", title: "Manufacturing execution systems", text: "MES software manages and records production on the shop floor: work orders, routings, operator instructions, traceability and performance." },
    { icon: "sensor", title: "Industrial IoT and sensor data", text: "Retrofitted sensors and connected equipment provide data from assets that were never designed to share it." },
    { icon: "chain", title: "Supply chain integration", text: "Supplier, inventory and production data connect to reduce surprises." },
    { icon: "twin", title: "Digital twins and simulation", text: "Digital representations of assets or processes support monitoring and “what if” analysis, where good data and models exist." },
    { icon: "people", title: "Human-centred automation", text: "Technology supports operators, engineers and technicians, rather than designing them out of the process." },
  ],
  adoptionIntro: "UK adoption is uneven and still largely at an early stage:",
  stats: [
    { value: "2%", text: "of UK manufacturers say AI is widely embedded across their operations; more than half cite skills shortages as the main barrier", source: "Make UK, AI, Skills and the Future of the UK Manufacturing Sector (June 2026)" },
    { value: "83% vs 11%", text: "use AI in back-office functions (HR, finance and admin) compared with production; 7% use it in supply chain and 6% in quality control", source: "Make UK (June 2026)" },
  ],
  evidence: [
    { title: "AI Adoption Plan for Advanced Manufacturing", source: "UK government, June 2026 (updated November 2026)", text: "Many projects remain “trapped in pilot phases”. It identifies legacy operational systems, fragmented industrial data, return-on-investment uncertainty and concerns about integration, safety and assurance as the main barriers." },
    { title: "Investment Monitor 2026", source: "Make UK and RSM", text: "For the first time, AI sits alongside plant and machinery, and labour and skills, as a leading investment priority for manufacturers." },
  ],
  outro:
    "The lesson is that digital transformation is not a matter of installing isolated tools. It means connecting people, processes, machines and business systems through a suitable architecture, starting with problems that matter on the factory floor, and scaling what proves its value.",
};

// VERIFY: confirm willingness to work under GxP-style validation for pharma/medical devices (pack, G5).
export const AUDIENCES = [
  { icon: "factory", title: "Small and medium-sized manufacturers", text: "Practical, affordable first steps, such as digital work orders, production reporting, quality records and simple dashboards, often replacing paper and spreadsheets. Phased investment and minimal disruption matter most." },
  { icon: "building", title: "Large manufacturing enterprises", text: "Multi-site data, integration with established ERP and MES, governance, standardisation across plants and enterprise-grade security." },
  { icon: "advanced", title: "Advanced manufacturing businesses", text: "Complex products, tight tolerances, extensive test data and close links between engineering and production." },
  { icon: "car", title: "Automotive manufacturers and suppliers", text: "Demanding customer quality requirements, traceability, just-in-time supply and tight delivery schedules." },
  { icon: "engineering", title: "Industrial engineering companies", text: "Project-based or engineer-to-order work, where documentation, configuration and resource planning dominate." },
  { icon: "chip", title: "Electronics manufacturers", text: "High-mix production, component traceability, automated test data and visual inspection of assemblies." },
  { icon: "food", title: "Food and beverage manufacturers", text: "Batch and lot traceability, allergen controls, hygiene, shelf life and fast-moving demand." },
  { icon: "pharma", title: "Pharmaceutical and medical equipment manufacturers", text: "Strict regulatory expectations for computerised systems, data integrity, validation and change control. Software in these environments needs a validation approach agreed with the manufacturer's quality function." },
  { icon: "tools", title: "Metal fabrication and precision engineering", text: "Job routing, machine utilisation, quoting accuracy, inspection records and skilled-labour scheduling." },
  { icon: "box", title: "Packaging and processing companies", text: "High-speed lines, changeover management, waste and overall equipment effectiveness (OEE)." },
  { icon: "equipment", title: "Industrial equipment manufacturers", text: "Product configuration, service and spare parts, and connected-product data from equipment in the field." },
  { icon: "cloud", title: "Manufacturing technology and industrial SaaS providers", text: "Multi-tenant platforms, connectors to many customers' systems and scalable data ingestion." },
];

export const CHALLENGES = [
  { icon: "alert", title: "Unplanned equipment downtime", looks: "A critical machine stops without warning, the line waits for parts or an engineer, and the schedule unravels.", matters: "Lost output, overtime, late deliveries and knock-on effects on downstream processes.", help: "Condition monitoring, anomaly alerts and maintenance dashboards that surface early warning signs, connected to maintenance workflows.", people: "Engineers interpret alerts, diagnose causes and decide on interventions. Planned and statutory maintenance continues regardless of what a model predicts." },
  { icon: "plan", title: "Inefficient production scheduling and planning", looks: "Schedules built in spreadsheets, constantly reworked as orders, materials and machine availability change.", matters: "Idle capacity, excessive changeovers, missed dates and stressed planners.", help: "Planning tools that model orders, routings, capacity, materials and constraints, and propose feasible schedules.", people: "Planners and production managers review and approve plans, especially when priorities conflict." },
  { icon: "inspect", title: "Inconsistent product quality and inspection workflows", looks: "Manual visual checks that vary between inspectors and shifts, with results recorded on paper.", matters: "Escapes to customers, scrap, rework and weak evidence for root-cause analysis.", help: "Digital inspection records, AI-assisted visual inspection and quality trend analysis.", people: "Quality engineers own acceptance criteria, release decisions and required quality-control procedures." },
  { icon: "plug", title: "Disconnected factory and business systems", looks: "ERP holds orders and stock, machines hold production data, quality lives in spreadsheets, and nobody has one view.", matters: "Re-keying, conflicting figures and slow decisions.", help: "Integration through APIs, middleware and data pipelines, with clear ownership of each data item.", people: "Process owners agree data definitions and validate integrated data." },
  { icon: "visibility", title: "Limited real-time production visibility", looks: "Supervisors learn about yesterday's problems in today's meeting.", matters: "Issues persist longer than necessary and improvement work lacks evidence.", help: "Shop-floor dashboards showing output, downtime reasons, scrap and work in progress as they happen, where machine or operator data is available.", people: "Teams must capture accurate downtime reasons and act on what dashboards show." },
  { icon: "box", title: "Inventory inaccuracies and material availability", looks: "The system says materials are available, but they are not, or they are in the wrong place.", matters: "Line stoppages, expediting costs and excess safety stock.", help: "Movement-based stock records, scanning at key points, material consumption reporting and integration with planning.", people: "Stores teams maintain discipline in recording movements and checking counts." },
  { icon: "report", title: "Manual production reporting and documentation", looks: "Supervisors spend hours compiling shift reports, batch records and KPIs.", matters: "Lost management time, late information and transcription errors.", help: "Automated data capture and report generation, with digital sign-offs.", people: "Supervisors review and approve records, especially where they form quality or regulatory evidence." },
  { icon: "chain", title: "Supply chain disruptions and limited visibility", looks: "Late supplier deliveries discovered only when materials are needed.", matters: "Schedule changes, premium freight and missed customer commitments.", help: "Supplier portals, inbound visibility, purchase order tracking and alerts on at-risk deliveries.", people: "Buyers manage supplier relationships and decide on alternatives." },
  { icon: "maintenance", title: "Difficulty managing maintenance activities", looks: "Maintenance requests arrive by word of mouth, history sits in notebooks, and spare parts are hard to track.", matters: "Repeat failures, wasted engineer time and weak evidence for compliance.", help: "Digital work orders, asset histories, planned maintenance schedules and spare-parts tracking.", people: "Engineers prioritise work and sign off completed jobs." },
  { icon: "gauge", title: "Inefficient resource and equipment utilisation", looks: "Some machines are overloaded while others sit idle, and changeovers consume capacity.", matters: "Hidden capacity is lost and investment decisions are made without evidence.", help: "Utilisation analytics, OEE-style reporting and scheduling that accounts for changeovers.", people: "Operations leaders interpret the data in the context of product mix and customer priorities." },
  { icon: "legacy", title: "Legacy manufacturing systems and technical limitations", looks: "Long-serving machines and software that work but cannot easily share data.", matters: "Modernisation feels risky and expensive, so data stays locked away.", help: "Retrofitted sensors, gateways and incremental integration that leave existing control systems in place.", people: "OT engineers assess what can be connected safely, and how." },
  { icon: "data", title: "Industrial data fragmentation", looks: "Data in historians, PLC-connected systems, spreadsheets, quality databases and ERP, each with different formats and timestamps.", matters: "Analysis is slow and unreliable, and AI projects stall.", help: "A structured data platform with consistent asset and product identifiers, context and quality checks.", people: "Engineers provide the process context that gives data meaning." },
  { icon: "people", title: "Skills and technology adoption challenges", looks: "Pilots succeed technically but are not adopted, because tools do not fit shift patterns or teams lack time to learn.", matters: "Investment does not translate into results. Skills England reports that adoption remains uneven, with large firms progressing faster than SMEs.", help: "Simple, role-specific interfaces designed with operators, plus phased roll-out and training.", people: "Leadership, change management and frontline involvement decide whether technology sticks." },
  { icon: "shield", title: "Cyber security and operational technology risks", looks: "More connected equipment, remote access and IT/OT integration expand the attack surface.", matters: "A cyber incident can halt production, damage equipment or create safety risks.", help: "Secure architecture, network segmentation, controlled data flows, least-privilege access and monitoring.", people: "OT and IT security owners govern connectivity and accept risk." },
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
    id: "predictive-maintenance",
    icon: "maintenance",
    title: "Predictive maintenance and equipment intelligence",
    paragraphs: ["Predictive maintenance software uses machine learning on equipment and operational data to support maintenance planning. Typical components include:"],
    items: [
      { term: "Sensor and operational data analysis,", text: "such as vibration, temperature, current, pressure, cycle counts and run hours, where available;" },
      { term: "Equipment condition monitoring", text: "against expected operating ranges;" },
      { term: "Anomaly detection", text: "that flags unusual behaviour compared with normal patterns;" },
      { term: "Maintenance alerts", text: "prioritised by asset criticality;" },
      { term: "Historical failure-pattern analysis", text: "using maintenance records and fault codes;" },
      { term: "Maintenance dashboards", text: "for engineers and planners; and" },
      { term: "Integration with maintenance management workflows,", text: "so an alert can become a work order." },
    ],
    outro: [
      "Predictive performance depends on the data available: the quality and placement of sensors, the length of operating history, how many failures have been recorded, and how stable operating conditions are. Models are validated against historical events before use and monitored afterwards. **AI cannot predict every equipment failure.** It helps engineers focus attention, and does not replace inspection or planned maintenance. Our [predictive analytics](/services/predictive-analytics) and [machine learning development](/services/machine-learning) services cover model building and validation.",
    ],
    image: "milling",
  },
  {
    id: "quality-inspection",
    icon: "inspect",
    title: "AI-powered quality inspection",
    paragraphs: ["Computer vision and machine learning can assist quality workflows through:"],
    items: [
      { term: "Visual defect detection", text: "of scratches, voids, misalignment, missing components or contamination;" },
      { term: "Image-based inspection assistance", text: "that highlights suspect areas for an inspector;" },
      { term: "Product classification", text: "by type, variant or grade;" },
      { term: "Quality trend analysis", text: "linking defects to lines, shifts, materials or settings;" },
      { term: "Inspection reporting", text: "with images stored against batch or serial numbers;" },
      { term: "Anomaly identification", text: "for defects not seen during training; and" },
      { term: "Human review and escalation", text: "for uncertain or borderline results." },
    ],
    // VERIFY: confirm the edge hardware and platforms supported for on-site models (pack, G4).
    outro: [
      "Inspection systems need representative training images, including real defects, under real lighting and camera conditions. They also need calibration, validation against agreed acceptance criteria, and monitoring as products and conditions change. **No inspection system guarantees that every defect will be detected**, and AI assistance does not replace required quality-control procedures. Our [computer vision development](/services/computer-vision-development) service explains how we build, test and deploy these models, in the cloud or at the edge.",
    ],
    image: "inspection",
  },
  {
    id: "production-planning",
    icon: "plan",
    title: "Intelligent production planning and scheduling",
    paragraphs: ["Data-driven planning applications can help manufacturers organise:"],
    items: [
      { text: "production orders and their due dates;" },
      { text: "machine availability, including planned maintenance;" },
      { text: "material requirements and availability;" },
      { text: "capacity planning across lines, cells and shifts;" },
      { text: "production priorities;" },
      { text: "work-in-progress visibility; and" },
      { text: "scheduling constraints such as changeovers, tooling, skills and sequence dependencies." },
    ],
    outro: ["AI-assisted planning can propose schedules, highlight conflicts and evaluate the effect of a rush order or a machine outage. Production managers review and approve significant changes. The tool supports planners' judgement rather than replacing it."],
  },
  {
    id: "industrial-analytics",
    icon: "analytics",
    title: "Smart manufacturing and industrial data analytics",
    paragraphs: ["Connected data platforms help manufacturers understand:"],
    items: [
      { text: "production performance against plan;" },
      { text: "machine utilisation and availability;" },
      { text: "operational bottlenecks;" },
      { text: "quality trends;" },
      { text: "production delays and their causes;" },
      { text: "resource usage, including energy and materials, where measured; and" },
      { text: "historical performance patterns." },
    ],
    outro: ["The architecture behind this typically includes data collection from machines, gateways and business systems; pipelines that clean, contextualise and timestamp data; a store suited to time-series and relational data; and dashboards and analytics designed for each audience, from operators to the board. Data quality checks are built in, so teams can trust what they see."],
  },
  {
    id: "manufacturing-assistants",
    icon: "knowledge",
    title: "AI-powered manufacturing assistants",
    paragraphs: ["AI assistants help engineering and operations teams retrieve approved technical information quickly:"],
    items: [
      { text: "equipment manuals;" },
      { text: "standard operating procedures and work instructions;" },
      { text: "maintenance documentation and fault-finding guides;" },
      { text: "technical specifications and drawings metadata;" },
      { text: "internal manufacturing policies; and" },
      { text: "approved production knowledge, such as lessons learned and known issues." },
    ],
    outro: ["Retrieval-augmented generation (RAG) systems answer questions using only authorised knowledge sources. They show which document and section each answer came from, so engineers can verify it. Permissions keep restricted information, such as customer-confidential specifications, limited to authorised users. Answers support people; they are not instructions to bypass approved procedures. Our [RAG development](/services/rag-development) service covers how we build these assistants."],
  },
  {
    id: "workflow-automation",
    icon: "automation",
    title: "Manufacturing workflow automation",
    paragraphs: ["Practical automation opportunities include:"],
    items: [
      { term: "Production reporting:", text: "shift and daily reports compiled automatically." },
      { term: "Work-order processing:", text: "creation, release and status updates." },
      { term: "Maintenance requests:", text: "captured digitally and routed by asset and priority." },
      { term: "Document classification:", text: "certificates of conformity, supplier documents and drawings filed correctly." },
      { term: "Purchase-order workflows:", text: "requisition, approval and supplier communication." },
      { term: "Internal approvals:", text: "deviations, concessions and change requests." },
      { term: "Quality documentation:", text: "non-conformance reports and corrective actions." },
      { term: "Operational notifications:", text: "alerts to the right people when thresholds are crossed." },
      { term: "Administrative processes", text: "across production support functions." },
    ],
    outro: ["**Rule-based automation** follows fixed logic. It is reliable and predictable for structured, repeatable steps. **AI-assisted workflows** add the ability to interpret unstructured inputs, such as free-text fault descriptions, scanned documents or emails, and to classify or extract information from them. Most effective solutions combine both, with exceptions routed to people. Our [AI automation services](/services/ai-automation) describe the approach."],
  },
  {
    id: "inventory-materials",
    icon: "box",
    title: "Inventory and material management intelligence",
    paragraphs: ["Connected inventory systems can support:"],
    items: [
      { text: "material availability checks against planned production;" },
      { text: "stock visibility by location, batch and status;" },
      { text: "replenishment workflows triggered by consumption and reorder points;" },
      { text: "material consumption reporting against bills of materials;" },
      { text: "purchase planning informed by demand and lead times;" },
      { text: "warehouse coordination between stores and production; and" },
      { text: "demand analysis using order history." },
    ],
    outro: ["Forecasting and replenishment tools improve visibility and planning, but they cannot guarantee perfect demand forecasts or eliminate shortages, especially when supply is disrupted. For dedicated stock control, see our [custom inventory management software](/solutions/inventory-management)."],
  },
  {
    // VERIFY: confirm prior simulation or twin-style software before promoting this more strongly (pack, G6).
    id: "digital-twins",
    icon: "twin",
    title: "Digital twins and manufacturing simulation",
    paragraphs: ["A digital twin is a digital representation of a physical asset, line or process that is kept up to date with data from its real counterpart. Depending on its fidelity, it can support:"],
    items: [
      { text: "monitoring of current state;" },
      { text: "scenario analysis, such as the effect of a schedule change or a new product;" },
      { text: "process improvement through experimentation without disrupting production; and" },
      { text: "training and planning." },
    ],
    outro: ["A digital twin is only as useful as its data, its models and its integration with physical systems. Many manufacturers get more value from a well-structured data platform and simple simulation than from a high-fidelity twin. We help decide what level is justified. **ClickMasters builds software. We do not manufacture industrial machinery or supply physical robotics.**"],
  },
];

export const SOFTWARE = {
  note: "The categories below are **potential custom development projects**, scoped to your requirements. They are not existing ClickMasters products.",
  intro: "Off-the-shelf manufacturing software suits many operations, and we will say so when it fits. Custom software makes sense where your processes, products or integrations are distinctive, or where you need to fill gaps around existing systems.",
  items: [
    { icon: "erp", title: "Manufacturing ERP systems", users: "Finance, purchasing, planning and sales", text: "Manages orders, bills of materials, purchasing, stock and costing in one system, and connects to MES, warehouse and quality systems. See our [custom ERP software](/solutions/erp-software)." },
    { icon: "mes", title: "Manufacturing execution systems (MES)", users: "Operators, supervisors and production engineers", text: "Manages and records production on the shop floor, including work orders, routings, instructions, traceability and performance. Receives orders from ERP and data from machines, and feeds quality and analytics." },
    { icon: "plan", title: "Production planning applications", users: "Planners and production managers", text: "Turns demand and capacity into feasible schedules, using ERP orders, MES status and maintenance plans." },
    { icon: "dashboard", title: "Production monitoring dashboards", users: "Supervisors and managers", text: "Real-time visibility of output, downtime and scrap from machine data and operator input." },
    { icon: "inspect", title: "Quality management systems (QMS)", users: "Quality teams", text: "Covers inspections, non-conformances, corrective actions, audits and documents, linked to MES, inspection systems and supplier records." },
    { icon: "maintenance", title: "Maintenance management systems (CMMS)", users: "Maintenance teams", text: "Covers work orders, asset histories, planned maintenance and spares, linked to condition monitoring, stores and purchasing." },
    { icon: "box", title: "Inventory and warehouse management software", users: "Stores and logistics teams", text: "Accurate stock and material movements, linked to ERP, MES and purchasing." },
    { icon: "supplier", title: "Supplier and procurement management platforms", users: "Buyers and suppliers", text: "Covers purchase orders, confirmations, delivery tracking and supplier quality, linked to ERP and QMS." },
    { icon: "analytics", title: "Manufacturing analytics applications", users: "Engineers, CI teams and leadership", text: "Performance analysis across sources, drawing on all operational systems." },
    { icon: "automation", title: "Industrial workflow automation systems", users: "Used across functions", text: "Covers approvals, notifications, documents and reporting, connected to business and production systems." },
    { icon: "gauge", title: "Equipment monitoring dashboards", users: "Maintenance and engineering", text: "Shows asset condition and alerts, using sensors, gateways and CMMS." },
    { icon: "cloud", title: "Manufacturing SaaS platforms", users: "Industrial technology businesses", text: "Multi-tenant products serving many manufacturers, built through our [MVP and SaaS development](/services/mvp-saas-development) service." },
    { icon: "factory", title: "Custom factory management applications", users: "Site leadership", text: "Plant-specific processes in one place, connected to the systems the site already runs." },
    { icon: "knowledge", title: "AI-enabled industrial knowledge platforms", users: "Engineers and technicians", text: "Searchable, cited access to procedures and technical knowledge, linked to document management and CMMS." },
  ],
  teamIntro:
    "Our [custom software development](/services/custom-software-development) and [web application development](/services/web-application-development) teams design these with attention to:",
  considerations: [
    ["Scalable architecture", "for growing data volumes, users and sites."],
    ["Database design", "suited to production, traceability and time-series data."],
    ["User roles and permissions", "for operators, supervisors, engineers, quality, management and suppliers."],
    ["Production data management", "including identifiers, timestamps, context and retention."],
    ["API integrations", "with business and industrial systems."],
    ["Reporting and analytics", "built on consistent definitions."],
    ["Application performance", "for shop-floor use, including tablets and rugged devices."],
    ["Maintainability", "through documentation, testing and version control."],
    ["Secure system access", "including authentication, least privilege and audit trails."],
  ],
};

export const OTIT = {
  intro: "Manufacturing software sits between two worlds that must be connected carefully.",
  ot: { title: "Operational technology (OT)", text: "The hardware and software that monitors or controls physical processes: PLCs, drives, robots, sensors, HMIs, SCADA and the networks that connect them.", priorities: "Safety, availability and deterministic behaviour." },
  it: { title: "Information technology (IT)", text: "Enterprise applications, business systems, databases, reporting and digital services.", priorities: "Data, integration and flexibility." },
  pointsIntro: "Useful manufacturing software usually needs data from OT and systems in IT. Typical integration points include:",
  points: [
    "ERP systems for orders, materials and costs",
    "Manufacturing execution systems",
    "Quality management systems",
    "Warehouse management systems",
    "Maintenance platforms",
    "Industrial sensors and IoT devices",
    "Machine data sources, through the interfaces equipment vendors and existing control systems provide",
    "SCADA and PLC-connected environments, accessed through appropriate, approved interfaces rather than directly",
    "Production databases and historians",
    "Reporting and analytics platforms",
    "Supplier and procurement systems",
  ],
  buildingBlocks:
    "Common building blocks include **edge gateways** that collect machine data inside the plant network, **middleware and message brokers** that move data reliably, **data pipelines** that add context and validate data, and **APIs** that expose information to applications. Recognised reference models, such as layered architectures that separate control, operations and business levels, help keep responsibilities clear.",
  principles: [
    { title: "Industrial control systems are never exposed directly to the public internet.", text: "Remote and cloud connectivity is brokered through controlled, monitored paths." },
    { title: "OT network segmentation and controlled access.", text: "Plant networks are separated from business networks, with defined, minimal data flows between zones, often outbound-only from OT. The NCSC's guidance on secure connectivity for operational technology recommends limiting exposure, brokering external connections and maintaining a definitive record of OT architecture and connectivity." },
    { title: "Monitoring and decision support are kept separate from control.", text: "The applications on this page read data and support people's decisions. Writing setpoints or commands to machinery is a different class of system." },
    { title: "Safety-critical control decisions remain within appropriately engineered and validated systems:", text: "PLCs, safety systems and control engineering designed and validated by qualified control and safety engineers under the applicable standards. Ordinary web application development is not sufficient for safety-critical industrial control." },
    { title: "Changes to OT are made with the plant.", text: "Any connection to industrial equipment is agreed with the manufacturer's OT, engineering and safety owners, and often with equipment vendors." },
  ],
  // VERIFY: no industrial protocols or historian products are named (pack, G2).
  statement:
    "ClickMasters builds monitoring, analytics, workflow and decision-support software. We do not claim expertise in specific industrial protocols or control hardware. Where direct control-system engineering is required, it should be carried out by qualified control-system integrators, with our software connecting through the interfaces they provide.",
};

export const USE_CASES_NOTE =
  "The following are illustrative development opportunities showing how the technology could be applied. They are not completed ClickMasters client projects, and real benefits depend on each manufacturer's equipment, data, processes and people.";

export const USE_CASE_FIELDS = [
  ["problem", "Problem"],
  ["solution", "Solution"],
  ["tech", "Technologies"],
  ["fit", "Fit with operations"],
  ["benefit", "Potential benefit"],
  ["validation", "Validation and safety"],
] as const;

// VERIFY: confirm sensor and hardware partners, or that the client always sources hardware (pack, G3).
export const USE_CASES = [
  { icon: "maintenance", title: "Predictive maintenance monitoring dashboard", problem: "Critical assets fail between scheduled services, halting production.", solution: "A dashboard combining condition data, fault codes and maintenance history, with anomaly alerts.", tech: "Edge data collection, time-series storage, anomaly detection models and CMMS integration.", fit: "Alerts create draft work orders for maintenance planners to review.", benefit: "Earlier warning of developing issues and better-targeted maintenance effort.", validation: "Engineers verify alerts before acting. Planned and statutory maintenance continues unchanged." },
  { icon: "inspect", title: "AI-assisted product quality inspection", problem: "Manual visual inspection varies between inspectors and shifts.", solution: "Camera-based inspection that flags suspect parts for an inspector's decision.", tech: "Computer vision models, edge deployment and integration with quality records.", fit: "Sits at an existing inspection point. Inspectors review flagged items.", benefit: "More consistent inspection and image evidence for root-cause analysis.", validation: "Validated against agreed acceptance criteria and monitored for drift. Release decisions remain with quality staff." },
  { icon: "plan", title: "Production planning and scheduling platform", problem: "Weekly schedules take a planner days and break whenever priorities change.", solution: "A planning tool that models capacity, routings, materials and changeovers, and proposes schedules.", tech: "Optimisation and heuristic scheduling, plus ERP and MES integration.", fit: "Planners adjust and publish schedules to the shop floor.", benefit: "Faster replanning and clearer visibility of the effect of changes.", validation: "Planners and production managers approve schedules." },
  { icon: "analytics", title: "Manufacturing performance analytics dashboard", problem: "Leadership sees performance weeks late, from inconsistent spreadsheets.", solution: "A dashboard showing output, availability, scrap and downtime reasons by line and shift.", tech: "Data pipelines, a reporting database and role-based dashboards.", fit: "Used in daily production meetings.", benefit: "Faster, evidence-based conversations about performance.", validation: "Metric definitions are agreed with operations, and data quality issues are made visible." },
  { icon: "workorder", title: "Digital work-order management system", problem: "Work orders, routings and instructions are printed and handwritten.", solution: "Digital work orders on shop-floor terminals or tablets, with step sign-off.", tech: "A web or mobile application, ERP integration and barcode scanning.", fit: "Replaces paper travellers step by step.", benefit: "Accurate status, better traceability and less transcription.", validation: "Supervisors approve changes to routings and instructions." },
  { icon: "document", title: "Automated quality documentation workflow", problem: "Non-conformances, concessions and corrective actions are tracked in spreadsheets and emails.", solution: "A digital quality workflow with routing, approvals and an audit trail.", tech: "Workflow automation, document management and notifications.", fit: "Follows the existing quality procedure.", benefit: "Faster closure and audit-ready records.", validation: "Quality managers own approvals. In regulated sectors, the workflow is validated as required." },
  { icon: "knowledge", title: "Industrial knowledge assistant using RAG", problem: "Engineers spend time searching manuals, SOPs and past fault records.", solution: "A permission-aware assistant over approved technical documents, with citations.", tech: "RAG, document indexing and access control.", fit: "Available on shop-floor devices and in the office.", benefit: "Faster access to the right procedure or fault-finding guide.", validation: "Answers cite their source. Engineers follow approved procedures, and the assistant never overrides lockout or safety instructions." },
  { icon: "box", title: "Inventory and raw material management platform", problem: "Material shortages are discovered at the point of use.", solution: "Movement-based stock control with material availability checks against the production plan.", tech: "Mobile scanning, ERP integration and replenishment rules.", fit: "Stores and planning share one view.", benefit: "Earlier warning of shortages and more accurate stock.", validation: "Stock adjustments above a threshold need supervisor approval." },
  { icon: "supplier", title: "Supplier and procurement workflow automation", problem: "Purchase orders, confirmations and delivery updates are chased by email.", solution: "A supplier portal with automated confirmations, delivery tracking and exception alerts.", tech: "A web portal, ERP integration and AI extraction from supplier documents.", fit: "Buyers manage exceptions rather than routine chasing.", benefit: "Better inbound visibility and less administration.", validation: "Buyers approve changes to orders. Supplier documents are verified." },
  { icon: "sensor", title: "Equipment condition monitoring application", problem: "Older machines provide no data on their condition.", solution: "Retrofitted sensors feeding a monitoring application with thresholds and trends.", tech: "Industrial IoT sensors (supplied and installed by appropriate partners), an edge gateway, a time-series database and dashboards.", fit: "Read-only monitoring that does not interfere with machine control.", benefit: "Visibility of asset condition without replacing equipment.", validation: "Installation is agreed with engineering and safety owners, and OT network rules are followed." },
  { icon: "erp", title: "Manufacturing ERP integration platform", problem: "Production completions and material consumption are re-keyed into ERP.", solution: "Integration between MES or shop-floor apps and ERP for orders, completions, scrap and consumption.", tech: "API middleware, data mapping, validation and audit logging.", fit: "Removes double entry between production and finance.", benefit: "Timely, accurate stock and costing.", validation: "Failed transfers raise alerts, and finance and production reconcile exceptions." },
  { icon: "report", title: "Production reporting automation", problem: "Supervisors spend hours each shift compiling reports.", solution: "Automated shift reports drawn from production, downtime and quality data, with optional AI-written summaries.", tech: "Data pipelines, report generation and generative AI summaries.", fit: "Reports are ready at shift handover.", benefit: "More supervisor time on the floor.", validation: "Supervisors review and approve reports, and AI summaries are checked against the figures." },
  { icon: "trend", title: "AI-assisted defect trend analysis", problem: "Quality teams struggle to link defects to their causes.", solution: "Analytics correlating defects with materials, machines, settings, shifts and suppliers.", tech: "Data integration, statistical analysis and machine learning.", fit: "Feeds problem-solving and corrective action processes.", benefit: "Faster identification of likely contributing factors.", validation: "Correlations are hypotheses for engineers to test, not proven causes." },
  { icon: "dashboard", title: "Factory operations management dashboard", problem: "Site leaders lack one view of safety, quality, delivery, cost and people metrics.", solution: "A site dashboard aligned with daily management routines.", tech: "Data integration, a reporting layer and role-based access.", fit: "Supports tiered daily meetings.", benefit: "Consistent information and quicker escalation.", validation: "Safety incidents follow formal reporting procedures. The dashboard reflects them, but does not replace them." },
  { icon: "cloud", title: "Manufacturing SaaS platform for multiple facilities", problem: "A group with several plants, or an industrial software business, needs one platform across many sites.", solution: "A multi-tenant or multi-site platform with site-level configuration and group reporting.", tech: "Multi-tenant architecture, data ingestion from many sources and role-based access.", fit: "Each site keeps local processes within common standards.", benefit: "Comparable data across sites and easier roll-out.", validation: "Site data separation is tested, and OT connectivity follows each site's rules." },
];

export const INTEGRATION = {
  intro: "Custom manufacturing applications can connect with existing business and industrial systems, where suitable interfaces, licences and permissions are available:",
  systems: [
    { icon: "erp", title: "ERP platforms and CRM systems" },
    { icon: "mes", title: "MES platforms" },
    { icon: "box", title: "WMS applications" },
    { icon: "inspect", title: "QMS platforms" },
    { icon: "maintenance", title: "CMMS and maintenance systems" },
    { icon: "stock", title: "Inventory management software" },
    { icon: "supplier", title: "Procurement and supplier platforms" },
    { icon: "sensor", title: "Industrial IoT data sources" },
    { icon: "gauge", title: "Approved machine and sensor data interfaces" },
    { icon: "analytics", title: "Analytics and business intelligence platforms" },
    { icon: "document", title: "Document management systems" },
  ],
  practicesIntro: "Reliable integration depends on:",
  practices: [
    ["API integration", "designed around each system's capabilities and limits."],
    ["Data synchronisation", "at the right frequency, from near real time to scheduled batches."],
    ["Data validation", "of identifiers, units, timestamps and quantities."],
    ["Event-driven workflows,", "so a machine stoppage or a quality failure can trigger the right action."],
    ["Access permissions,", "so each system and user sees only what it needs."],
    ["Integration monitoring", "and alerting."],
    ["Error handling", "with retries and queues for failed messages."],
    ["Audit trails", "of data exchanged and changes made."],
    ["Secure communication", "between systems, with authentication and encryption, and with OT-to-IT flows controlled at network boundaries."],
  ],
  access:
    "Not every ERP, MES or equipment vendor offers open or unrestricted API access. Some require licences, partner agreements or vendor involvement, and older equipment may expose very limited data. We assess each interface early and plan accordingly.",
};

export const SECURITY_INTRO =
  "Manufacturing systems can affect physical operations, product quality and people's safety. These considerations shape how we design and build industrial software.";
export const SECURITY_DISCLAIMER =
  "This is general information, not legal, safety or certification advice. Implementing security features does not by itself make an organisation compliant.";

// VERIFY: the pack asks for the OT/IT and safety content to be reviewed by someone with industrial cyber security experience.
export const SECURITY = [
  { icon: "privacy", title: "UK GDPR and the Data Protection Act 2018", text: "These apply where personal data is processed, for example operator records, training and competence data, or monitoring that identifies individuals." },
  { icon: "lock", title: "Commercially sensitive manufacturing data", text: "Recipes, process parameters, costs and customer specifications are protected with strict access control and logging." },
  { icon: "copyright", title: "Intellectual property and technical documentation", text: "Drawings, specifications and know-how are handled under clear permissions, and AI services are configured so that your data is not used to train third-party models." },
  { icon: "key", title: "Secure application authentication", text: "Strong authentication, with multi-factor authentication for privileged and remote access." },
  { icon: "roles", title: "Role-based access control", text: "Least-privilege roles for operators, supervisors, engineers, quality, management, suppliers and administrators." },
  { icon: "code", title: "API security", text: "Authentication, authorisation, rate limiting, input validation and secrets management." },
  { icon: "network", title: "OT and IT network separation", text: "Segmented networks, minimal and controlled data flows, and no direct internet exposure of industrial control systems." },
  { icon: "remote", title: "Industrial system access restrictions", text: "Remote access only through approved, monitored and time-limited routes, agreed with OT owners." },
  { icon: "backup", title: "Backup and recovery planning", text: "Tested backups and recovery procedures for applications and data, coordinated with OT recovery plans." },
  { icon: "history", title: "Monitoring and audit logs", text: "Logging of key actions and data changes, with alerting on unusual activity." },
  { icon: "check", title: "AI output validation", text: "Models for maintenance, quality and planning are validated before use and monitored for drift." },
  { icon: "people", title: "Human oversight of operational decisions", text: "People review and approve AI suggestions that affect production, quality release or maintenance." },
  { icon: "safety", title: "Safety assessment for systems that may affect physical operations", text: "Any software that could influence how equipment runs, or how people work around it, should be assessed by the manufacturer's safety and engineering functions under the applicable machinery, work equipment and functional safety requirements." },
  { icon: "release", title: "Software reliability and change management", text: "Controlled releases, testing in representative environments and change control. In regulated sectors such as pharmaceuticals and medical devices, computerised systems may need formal validation and data integrity controls." },
];

export const SECURITY_STATEMENT =
  "Recognised guidance includes the NCSC's operational technology collection, including its secure connectivity principles and its guidance on maintaining a definitive record of OT architecture, and the IEC 62443 series of standards for industrial automation and control systems security. ClickMasters does not hold, and does not claim, ISO 27001, IEC 62443, Cyber Essentials or any other certification, and we do not promise regulatory compliance. We design software to fit within your security and safety framework and provide documentation to support your assessments.";

export const WHY_INTRO =
  "We are a software engineering and AI company. For manufacturers, that means one team that can build shop-floor and business applications, connect your data and add AI where the evidence supports it.";

export const WHY = [
  { icon: "code", title: "Custom software development", text: "MES-style applications, planning tools, quality and maintenance systems shaped around your plant." },
  { icon: "portal", title: "Web application development", text: "Fast, accessible interfaces for the office and the shop floor." },
  { icon: "ai", title: "AI and machine learning integration", text: "Predictive maintenance support, demand forecasting, defect analysis and anomaly detection." },
  { icon: "inspect", title: "Computer vision", text: "Inspection assistance tested in real lighting and camera conditions." },
  { icon: "document", title: "Generative AI development", text: "Report drafting, document classification and summarisation." },
  { icon: "knowledge", title: "RAG development", text: "Cited knowledge assistants over approved technical documents." },
  { icon: "automation", title: "AI agents and workflow automation", text: "Work orders, approvals, notifications and reporting." },
  { icon: "erp", title: "ERP and CRM development", text: "Manufacturing ERP and customer systems, custom or integrated." },
  { icon: "cloud", title: "SaaS platform engineering", text: "Multi-site and multi-tenant industrial platforms." },
  { icon: "data", title: "Database design", text: "Production, traceability and time-series data models." },
  { icon: "plug", title: "API and system integration", text: "Connecting ERP, MES, QMS, CMMS, WMS and approved machine data sources." },
  { icon: "server", title: "Cloud and DevOps engineering", text: "Secure, monitored infrastructure, plus edge deployment where needed." },
];

export const WHY_OUTRO =
  "We start by understanding your operations and requirements before choosing technology, beginning with a focused, high-value problem. That is consistent with the government's “scan, pilot, scale” approach to industrial AI adoption. If you need help deciding where to begin, our [AI consulting and strategy](/services/ai-consulting-strategy) service can help prioritise opportunities.";

export const PROCESS_INTRO =
  "The actual scope depends on your plant, systems and data. Industrial deployments often need additional testing, integration planning and operational approvals, and roll-outs are planned to minimise disruption to production. Not every change can be made without any production impact. A typical engagement covers:";

// VERIFY: confirm the support model behind stage 10 ("agreed as part of the engagement").
export const PROCESS = [
  { title: "Manufacturing workflow and operational discovery", text: "Time on the shop floor and with planners, quality, maintenance and stores to understand how work really flows." },
  { title: "Requirements and stakeholder assessment", text: "Priorities, success measures and constraints agreed with operations, engineering, quality, IT and OT." },
  { title: "Existing systems and data assessment", text: "What data exists, where it lives, how reliable it is and what each system allows." },
  { title: "Technical feasibility and integration planning", text: "Feasibility of AI use cases, the OT/IT integration approach and network boundaries, agreed with OT owners." },
  { title: "Software architecture and database design", text: "Architecture, data models, identifiers and security design." },
  { title: "UX and application development", text: "Interfaces designed with operators and engineers, built in short iterations." },
  { title: "AI and analytics integration where appropriate", text: "Models trained and validated on representative data, with clear limits." },
  { title: "Testing and operational validation", text: "Functional, performance and integration testing, then validation on the line or in parallel running. In regulated environments, formal validation is carried out as required." },
  { title: "Security and access-control review", text: "Review of access, data flows, network boundaries and logging." },
  { title: "Deployment planning and continuous improvement", text: "Phased roll-out around production schedules, training by role, monitoring and improvement, with ongoing support agreed as part of the engagement." },
];

export const FAQS = [
  { q: "What are AI-powered manufacturing solutions?", a: ["They are software systems that apply AI techniques, such as machine learning, computer vision and language models, to manufacturing tasks. Examples include predictive maintenance support, visual quality inspection, production planning, defect analysis, knowledge assistants and workflow automation. They depend on reliable industrial data and integration with existing systems."] },
  { q: "How is AI used in manufacturing?", a: ["Common uses include anomaly detection on equipment data, computer vision for inspection, demand forecasting, scheduling support, analysis of quality and production data, document processing, and assistants that retrieve technical information. In the UK, most current use is in back-office functions, and adoption in production and quality is still at an early stage."] },
  { q: "What is Industry 4.0?", a: ["Industry 4.0 describes the use of connected machines, data, analytics, automation and AI to make manufacturing more responsive and better informed, linking the shop floor with engineering, supply chain and business systems."] },
  { q: "Can AI help predict machine maintenance requirements?", a: ["Yes, where suitable data exists. Models can flag unusual equipment behaviour and patterns linked to past failures, helping engineers plan interventions. Accuracy depends on sensor data, operating history and validation, and AI cannot predict every failure. It complements planned maintenance rather than replacing it."] },
  { q: "Can you develop custom manufacturing software?", a: ["Yes. We build custom applications such as production planning tools, MES-style shop-floor systems, quality and maintenance management, dashboards, supplier portals and knowledge assistants, integrated with your ERP and other systems."] },
  { q: "What is a manufacturing execution system (MES)?", a: ["An MES manages and records production on the shop floor. It typically covers releasing work orders, guiding operators through routings and instructions, recording materials and results for traceability, and tracking performance. It sits between business systems such as ERP and the equipment on the line."] },
  { q: "Can AI assist with manufacturing quality inspection?", a: ["Yes. Computer vision can highlight suspect defects, classify products and record inspection images, helping inspectors work more consistently. Systems need representative training data, calibration and validation, and they do not replace required quality-control procedures or release decisions."] },
  { q: "Can manufacturing software integrate with an existing ERP?", a: ["Usually, yes, where the ERP offers APIs or other supported integration methods. Typical integrations exchange production orders, completions, material consumption, scrap and stock. Some ERP vendors require licences or partner involvement, which we assess early."] },
  { q: "What is the difference between ERP and MES?", a: ["ERP manages the business: orders, purchasing, stock, finance and planning at a company level. MES manages production on the shop floor: executing and recording work orders in detail and in real time. ERP decides what to make and when, while MES manages how it is made and records what happened."] },
  { q: "How can manufacturers automate production workflows?", a: ["Start with repetitive, well-defined processes such as production reporting, work-order release, maintenance requests, quality documentation and purchase approvals. Rules-based automation handles structured steps, AI handles unstructured inputs such as documents and free text, and exceptions go to people."] },
  { q: "Can you build manufacturing dashboards and analytics platforms?", a: ["Yes. We build dashboards and analytics platforms that combine machine, production, quality, maintenance and ERP data, with agreed metric definitions, data quality checks and role-based views from the shop floor to the board."] },
  { q: "How do you approach security when connecting factory systems?", a: ["We never expose industrial control systems to the internet. We keep OT and IT networks segmented, use controlled, minimal data flows, often outbound-only from the plant, and restrict and monitor remote access. Monitoring software is kept separate from machine control. Connectivity is agreed with your OT and safety owners, with reference to NCSC operational technology guidance."] },
];

export const FINAL_CTA = {
  title: "Turn Factory Data into",
  titleAccent: "Better Decisions on the Shop Floor",
  body: {
    text: "Connected industrial software helps the people who run your plant see more, plan better and spend less time on paperwork, from maintenance and quality to planning and stores. Whether you want to start with a focused pilot or connect systems across several sites, tell us about your operations, equipment, systems and priorities. We will give you an honest view of what is feasible, which data it depends on, and the most sensible first step. Exploring AI-assisted quality inspection? See our [[link]].",
    link: { anchor: "computer vision development services", href: "/services/computer-vision-development" },
  },
  bring: ["The problem on the shop floor", "Equipment and data you have today", "ERP, MES and other systems", "OT, safety and IT constraints", "What a good pilot would prove"],
};

export const SCHEMA_SERVICE = {
  name: "AI-Powered Manufacturing Solutions and Industrial Software Development",
  serviceType: ["AI-powered manufacturing solutions and industrial software development", "Manufacturing execution system development", "Predictive maintenance software"],
  description:
    "Predictive maintenance support, AI-assisted quality inspection, production planning, shop-floor dashboards, industrial knowledge assistants, workflow automation and safe OT/IT integration for UK manufacturers and manufacturing technology providers.",
  catalogName: "Manufacturing AI capabilities",
  catalog: AI_CAPABILITIES.map((c) => c.title),
  relatedServicePath: "/services/computer-vision-development",
};
