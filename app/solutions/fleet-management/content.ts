/*
 * /solutions/fleet-management content, from
 * "ClickMasters Fleet Management Solutions: SEO Content Pack" (25 Nov 2026).
 * Edit copy here; page.jsx only renders it.
 *
 * VERIFY comments mark business facts the pack says need owner confirmation.
 * Body links: exactly the pack's four (CTAs, breadcrumb, header and footer
 * are template elements).
 */

export const PATH = "/solutions/fleet-management";

export const SEO = {
  // Rendered as "Custom Fleet Management Software UK | ClickMasters" (50 chars).
  title: "Custom Fleet Management Software UK",
  description:
    "Custom fleet management software for UK operators: vehicle tracking, dispatch and routing, maintenance records and driver apps, built around your fleet.",
  ogTitle: "Fleet Management Solutions | ClickMasters",
  ogDescription:
    "Vehicles, drivers, jobs and maintenance in one system, built on top of the tracking provider you already use.",
};

export type LinkedText = { text: string; link?: { anchor: string; href: string } };

const IMG = "/assets/Solution/fleet";

/**
 * Diagrams drawn for this page (alt text from the pack's image table; the two
 * dashboards are illustrative, with sample data) and photos from Unsplash
 * (Unsplash License: free for commercial use, no attribution required;
 * credits kept here for reference).
 */
export const IMAGES = {
  overview: {
    src: `${IMG}/fleet-operations-overview.png`, width: 1080, height: 800,
    alt: "Diagram of vehicles, drivers and jobs feeding one fleet system, linked to telematics, ERP and apps",
  },
  records: {
    src: `${IMG}/fleet-four-records-model.png`, width: 1720, height: 520,
    alt: "Diagram of four linked fleet records: vehicle, driver, job and movement data",
  },
  capabilities: {
    src: `${IMG}/fleet-capability-map.png`, width: 1720, height: 640,
    alt: "Map of fleet capabilities: tracking, dispatch and route planning at the centre, extensions around",
  },
  dispatch: {
    src: `${IMG}/fleet-dispatcher-dashboard.png`, width: 1720, height: 820,
    alt: "Illustrative dispatcher dashboard with today's jobs, a vehicle map, driver timelines and AI hints",
  },
  walkaround: {
    src: `${IMG}/fleet-walkaround-defect-flow.png`, width: 1720, height: 380,
    alt: "Walkaround check flow: app check, defect photo, workshop repair and safe-to-use sign-off",
  },
  reporting: {
    src: `${IMG}/fleet-reporting-dashboard.png`, width: 1720, height: 720,
    alt: "Illustrative fleet reporting dashboard by depot: utilisation, costs, inspections and checks due",
  },
  // Photo: Marcin Jozwiak (unsplash.com/photos/kGoPcmpPT7c)
  depot: {
    src: `${IMG}/fleet-lorries-parked-at-depot.webp`, width: 1080, height: 720,
    alt: "Aerial view of articulated lorries parked in angled bays at a depot beside a road",
  },
  // Photo: Artem Balashevsky (unsplash.com/photos/ZhNYKwjRMh4)
  road: {
    src: `${IMG}/fleet-lorry-on-the-road.webp`, width: 1200, height: 829,
    alt: "A white articulated lorry driving along a road through green countryside at sunset",
  },
  // Photo: Marcin Jozwiak (unsplash.com/photos/oh0DITWoHi4)
  distribution: {
    src: `${IMG}/fleet-distribution-centre-aerial.webp`, width: 1200, height: 800,
    alt: "Aerial view of a distribution centre with trailers at loading docks, a lorry park and a car park",
  },
} as const;

// VERIFY: confirm tracking, routing, dispatch and AI-assisted route planning exist as a reusable foundation.
export const HERO = {
  eyebrow: "Fleet Management Solutions UK",
  title: "Custom Fleet Management Software",
  titleAccent: "Built Around How Your Fleet Runs",
  lead:
    "A fleet management system for UK operators, built around how your vehicles, drivers and jobs actually run. Most fleets are managed from several places at once: a tracking portal, a maintenance spreadsheet, a whiteboard in the transport office, paper defect sheets and a shared inbox for jobs. Each one holds part of the picture. When a vehicle fails its inspection, a driver's licence check lapses or a customer asks where their delivery is, someone has to piece the answer together by hand.",
  audience:
    "ClickMasters builds and tailors fleet management software that brings vehicles, drivers, jobs and maintenance into one operational system. We start from a ready-to-customise foundation for tracking, routing and dispatch, with AI-assisted, demand-aware route planning, then shape the vehicle records, workflows, driver apps and integrations around your operation, whether you run ten vans or several hundred commercial vehicles.",
  stats: [
    { value: "4 connected records", label: "Vehicle · driver · job · movement" },
    { value: "Keep your telematics", label: "Hardware-independent" },
    { value: "AI-assisted planning", label: "Planner confirms" },
    { value: "Two-week sprints", label: "Weekly demos" },
  ],
};

export const WHAT_IS = {
  p1: "**Fleet management software** is the operational system for a business that relies on vehicles. It keeps a record of every vehicle and driver, shows where vehicles are and what they are doing, plans and assigns work, schedules maintenance and inspections, records costs such as fuel and repairs, and reports on how the fleet is performing.",
  p2: "A useful way to think about it is four connected records:",
  records: [
    ["The vehicle:", "registration, type, ownership or lease, documents, inspection and service history, defects and costs."],
    ["The driver:", "licence and qualification details, vehicle assignments, check history and hours where relevant."],
    ["The job:", "what needs to be collected, delivered or serviced, where, when and by whom."],
    ["The movement:", "location and status data from telematics devices or the driver's app."],
  ],
  p3: "Most fleet frustrations come from these four records living in different places. When they are connected, the transport office can answer \"which vehicle, which driver, which job, and is it safe and legal to go?\" from one screen.",
};

export const SIGNS = {
  title: "Signs your fleet has outgrown spreadsheets and separate tools",
  items: [
    "Service, inspection, MOT and tax due dates are tracked in a spreadsheet someone has to remember to check.",
    "Driver defect reports arrive on paper and are re-typed, or lost.",
    "Dispatchers plan the day on a whiteboard and phone drivers with changes.",
    "The tracking portal shows where vehicles are, but not which job they are on.",
    "Fuel and repair costs per vehicle are only known at month end, if at all.",
    "Answering a customer's \"where is my delivery?\" means calling the driver.",
  ],
};

export const ROUTES = {
  intro:
    "Telematics and fleet management software solutions are widely available in the UK, and for many fleets one of them is the right answer. The choice depends on how standard your operation is.",
  headers: ["", "Telematics or fleet software product", "Tailored system on our fleet foundation", "Fully custom fleet platform"],
  rows: [
    ["Best when", "Your main need is tracking and standard reports, with typical workflows", "Tracking and dispatch are standard, but your jobs, vehicles, checks or integrations are not", "Fleet operations are your product or competitive edge, or no product models them"],
    ["Strengths", "Quick to start; hardware, app and reporting bundled", "Core tracking, routing and dispatch already exist; budget goes into your specific workflows", "Complete control of data, workflows and roadmap"],
    ["Trade-offs", "Per-vehicle subscriptions; workflows limited to the product's model; data spread across vendor portals", "Needs clear scope and ongoing support", "Highest upfront investment; you own all maintenance"],
    ["Watch for", "Spreadsheets and whiteboards surviving alongside the product", "Scope drifting into full ERP", "Rebuilding features a foundation already provides"],
  ],
  middle:
    "A common, practical middle route is to **keep your existing telematics provider** for hardware and raw location data, and build the operational layer of jobs, dispatch, maintenance workflows, driver apps and reporting on top of it.",
  test:
    "**A practical test:** list the five fleet tasks that take the most office time or cause the most risk. If a product handles each one without workarounds, choose the product. If the gaps are in how jobs are planned, how vehicles are checked and maintained, or how fleet data connects to the rest of the business, a tailored system usually earns back the difference.",
};

// VERIFY: Foundation labels; capability for telematics integrations, maintenance,
// walkaround checks, driver records, fuel imports and reporting (copy is hedged).
// VERIFY: EV sentence is hedged as built-to-requirement scoping, not an existing feature.
export const CAPABILITIES_INTRO =
  "Capabilities marked Foundation are part of our configurable fleet base. Those marked Built to requirement are developed or extended for your fleet when you need them. If you need electric vehicle fleet management software features, such as recording charging sessions or planning around vehicle range, we scope them with you as built-to-requirement work.";

export const CAPABILITIES: [string, string, "Foundation" | "Built to requirement"][] = [
  ["Vehicle tracking and location visibility", "Live and historical vehicle locations from your telematics provider or driver app, shown against jobs", "Foundation"],
  ["Dispatch", "Assigning jobs to vehicles and drivers, with status updates as work progresses", "Foundation"],
  ["Route planning", "Planning multi-stop routes with time windows and vehicle constraints", "Foundation"],
  ["AI-assisted route planning", "Demand-aware suggestions for assignments and routes, confirmed by a planner", "Foundation"],
  ["Users, roles and permissions", "Access by role, depot and action for directors, transport managers, dispatchers, drivers and workshops", "Foundation"],
  ["Vehicle register and documents", "Vehicle details, ownership or lease, insurance, tax and inspection dates, documents", "Built to requirement"],
  ["Maintenance scheduling and service history", "Safety inspections, services and MOT or annual test dates, work orders and full history", "Built to requirement"],
  ["Driver walkaround checks and defects", "App-based daily checks with photos, defect reporting and rectification sign-off", "Built to requirement"],
  ["Driver records and licence checks", "Licence and qualification details, check dates, assignments and reminders", "Built to requirement"],
  ["Fuel and expense tracking", "Fuel card imports, repair costs and cost per vehicle or per mile", "Built to requirement"],
  ["Compliance reminders", "Due-date alerts for inspections, MOT, tax, insurance and driver checks", "Built to requirement"],
  ["Proof of delivery and job records", "Signatures, photos and timestamps captured by drivers", "Built to requirement"],
  ["Customer tracking links", "Shareable delivery status for your customers", "Built to requirement"],
  ["Fleet reporting and dashboards", "Utilisation, cost, maintenance and job performance by vehicle, driver and depot", "Built to requirement"],
];

// VERIFY: "we do not supply tracking hardware" (matches the site's out-of-scope note).
export const TRACKING = {
  intro: "We do not manufacture or supply tracking hardware. Location data usually comes from one of two sources:",
  sources: [
    ["Your telematics provider:", "most commercial tracking providers offer an API or data feed. We connect to it so live and historical positions appear inside your fleet system alongside jobs, drivers and vehicles, rather than in a separate portal."],
    ["The driver's app:", "for smaller fleets or mixed vehicles, location can be recorded by the app during working time, with GPS-stamped job events such as arrival, completion and proof of delivery."],
  ],
  context:
    "Location on its own is just a dot on a map. Its value comes from context: whether the vehicle is on time for its next job, whether it has been idle at a site for longer than expected, and which nearby vehicle could take an urgent job.",
  privacyTitle: "Tracking and your drivers' privacy",
  // VERIFY: have a compliance adviser review the ICO / DVSA / DVLA paragraphs (pack note).
  privacy:
    "Vehicle tracking data is usually personal data, because it can be linked to an identifiable driver. The Information Commissioner's Office (ICO) guidance on monitoring workers covers vehicle tracking. In general terms it expects employers to have a clear purpose, to tell workers about the monitoring, to use the data only for that purpose, and to consider whether tracking outside working hours is justified. A privacy or private-use mode can be built into the driver app where vehicles are used personally. This is general information, not legal advice; your data protection lead or adviser should confirm what your organisation needs.",
};

export const DISPATCH = {
  intro:
    "Dispatch is where most fleet time is won or lost. A dispatcher needs to see the jobs that must be done today, the vehicles and drivers available, their current positions and constraints such as vehicle size, time windows and driver hours, and then build a plan that survives the first phone call of the morning.",
  steps: [
    ["Job intake:", "jobs created in the system, imported from your order or booking system, or entered by customers through a portal."],
    ["Assignment:", "jobs matched to vehicles and drivers, with checks for vehicle type, capacity and availability."],
    ["Route planning:", "multi-stop routes with time windows, which planners can adjust before sending to drivers."],
    ["Live changes:", "jobs moved between drivers during the day, with the driver's app updated immediately."],
    ["Status updates:", "drivers mark jobs as started, arrived, completed or failed, with reasons and photos."],
  ],
  // Body link 1 of 4.
  ai: {
    text: "For operations with many daily jobs, demand-aware route planning can suggest assignments and routes from your own historical route and demand data, plus live job and fleet data. Planners stay in control: suggestions are reviewed and confirmed rather than applied automatically. Our [[link]] explains how these assistants are designed, tested and kept within clear limits.",
    link: { anchor: "AI agent development for dispatch and routing support", href: "/services/ai-agent-development" },
  } as LinkedText,
};

export const MAINTENANCE = {
  intro: "A vehicle off the road unexpectedly costs more than a planned one. Maintenance software turns due dates and defects into planned work.",
  items: [
    { icon: "calendar", title: "Preventive maintenance scheduling", text: "Services and safety inspections are scheduled by date, mileage or engine hours, depending on the vehicle and your maintenance policy. Upcoming work appears on a planner for the workshop or external garage, with reminders before anything becomes overdue." },
    { icon: "check", title: "Walkaround checks and defect reporting", text: "Drivers complete daily checks in the app, with a checklist for the vehicle type and photos of any defect. Defects go straight to whoever manages repairs, who records the rectification and decides whether the vehicle is safe to use, with the full trail stored against the vehicle." },
    { icon: "history", title: "Service history and documents", text: "Every inspection, repair, tyre change and part is stored against the vehicle, alongside documents such as insurance, lease agreements and inspection reports, so the history of any vehicle is available in seconds." },
  ],
  dvsaTitle: "What UK goods vehicle operators need to evidence",
  dvsa:
    "For operators of goods vehicles that need an operator's licence, DVSA's Guide to Maintaining Roadworthiness sets out expectations for safety inspections, driver walkaround checks, defect reporting and maintenance records, including how long records should be kept. The guide recognises that electronic maintenance systems can provide effective record keeping. Tachograph rules also require regular downloads of driver card and vehicle unit data. A fleet system can organise these records and remind you of due dates; responsibility for compliance stays with the operator and transport manager. Always check the current DVSA and gov.uk guidance for your vehicles.",
};

export const DRIVERS = {
  intro: "Your drivers are the main users of any fleet system, so the driver app often decides whether the whole system is adopted.",
  features: [
    ["Today's jobs:", "in order, with addresses, contacts, notes and navigation hand-off."],
    ["Checks and defects:", "quick walkaround checklists that work in a yard with a weak signal."],
    ["Proof of work:", "signatures, photos and timestamps captured at each job."],
    ["Messages and changes:", "new or moved jobs pushed to the device, without phone calls."],
    ["Offline working:", "records stored on the device and synced when the connection returns."],
  ],
  // Body link 2 of 4.
  mobile: {
    text: "Our [[link]] covers how these apps are built for iOS and Android, including offline job lists, photo and signature capture and GPS-stamped records.",
    link: { anchor: "mobile app development for drivers and field teams", href: "/services/mobile-app-development" },
  } as LinkedText,
  office:
    "On the office side, driver records hold licence and qualification details, check dates and vehicle assignments. Employers commonly check driving licences periodically using DVLA's online licence-checking service, and the system can remind you when each driver's next check is due.",
};

export const INDUSTRIES = {
  note: "Typical requirements by sector. These illustrate fit and are not client case studies.",
  headers: ["Fleet type", "What usually matters most", "Typical extensions"],
  rows: [
    ["Haulage and transport", "Maintenance and inspection evidence, defect reporting, planning around driver hours", "Tachograph data integration, operator licence record keeping"],
    ["Delivery and courier", "Many drops per route, time windows, proof of delivery, customer updates", "Customer tracking links, failed-delivery handling"],
    ["Distribution and wholesale", "Scheduled routes, vehicle capacity, depot loading", "Links to order and stock systems"],
    ["Field service", "Engineer scheduling by skill and location, van stock, job completion records", "Customer appointment booking, job sheets and signatures"],
    ["Construction", "Vans, plant and specialist vehicles across sites, inspection records", "Site allocation, equipment and plant registers"],
    ["Vehicle rental and leasing", "Availability, bookings, check-out and check-in inspections with photos, damage records", "Customer portal, damage and repair workflows"],
    ["Organisations with mobile workforces", "Pool and grey-fleet vehicles, licence checks, mileage and expenses", "Mileage claims, duty-of-care checks"],
  ],
  // Body link 3 of 4.
  portal: {
    text: "For businesses whose customers book work or need to see delivery status, a self-service view often reduces inbound calls. Our [[link]] explains how those portals and dispatcher dashboards are built on the same live data.",
    link: { anchor: "web application development for customer portals and dashboards", href: "/services/web-application-development" },
  } as LinkedText,
};

export const INTEGRATIONS: { intro: string; items: { icon: string; title: string; text: LinkedText }[]; outro: string } = {
  intro: "A fleet system is most useful when it stops being another place to re-type data.",
  items: [
    { icon: "signal", title: "Telematics and tracking providers", text: { text: "Location, mileage, engine and driving-event data imported from your provider's API, so you can change or mix providers without rebuilding your workflows." } },
    { icon: "fuel", title: "Fuel cards and expenses", text: { text: "Fuel card transaction files or feeds matched to vehicles and drivers, with repair invoices and other costs recorded against each vehicle." } },
    { icon: "orders", title: "Orders, bookings and job sources", text: { text: "Jobs created automatically from your order, booking or field-service system, with completion details sent back." } },
    // Body link 4 of 4.
    {
      icon: "finance", title: "Finance and business systems",
      text: {
        text: "Fleet costs passed to your accounting or finance system, and vehicles, customers and jobs shared with your CRM or ERP rather than duplicated. Where fleet costs need to sit inside wider job costing, finance and operations, our [[link]] covers that broader system. We have experience integrating with platforms such as Salesforce, HubSpot, Microsoft Dynamics, SAP ERP and Oracle Cloud.",
        link: { anchor: "custom ERP software", href: "/solutions/erp-software" },
      },
    },
    { icon: "map", title: "Maps and navigation", text: { text: "Mapping and routing services for planning and display, with navigation handed off to the driver's preferred app." } },
  ],
  outro: "The specific providers and formats you use are confirmed and scoped for each project rather than assumed.",
};

export const REPORTING = {
  intro: "Reports should answer the questions the transport office is actually asked:",
  items: [
    ["Utilisation:", "which vehicles are under-used and could be released, and which are over-worked."],
    ["Cost:", "fuel, maintenance and repair cost per vehicle, per mile and per depot."],
    ["Maintenance:", "inspections due and overdue, defect volumes and time to rectify."],
    ["Jobs:", "completed on time, late and failed, by driver, route and customer."],
    ["Compliance records:", "checks completed, licence checks due, documents expiring."],
  ],
  outro: "Dashboards are filtered by role, so a depot manager sees their depot and a director sees the whole fleet, with exports for audits and board reports.",
};

export const PROCESS = [
  { title: "Ride along with the operation", text: "We spend time with the transport office, dispatchers, drivers and workshop, and map how jobs, vehicles and checks are handled today, including the workarounds." },
  { title: "Recommend the route", text: "We compare a product, a tailored foundation and a custom build against your requirements, and say so if your existing telematics product, configured properly, is enough." },
  { title: "Design records, workflows and integrations", text: "Vehicle, driver and job records; roles; dispatch and maintenance workflows; and the integrations with your telematics provider and business systems." },
  { title: "Build in two-week sprints", text: "Weekly demos in a test environment, with dispatchers and drivers trying screens and the app early, while changes are still cheap." },
  { title: "Pilot with one depot or team", text: "Vehicle and driver data imported and checked, functional, integration and security testing completed, then a pilot with real drivers and real jobs." },
  { title: "Roll out and improve", text: "Roll-out depot by depot, training for each role, and improvements prioritised from usage and job data." },
];

export const PROCESS_OUTRO = "We offer fixed-price and time-and-materials engagements, with a scoped estimate and milestones after discovery.";

export const SECURITY = [
  { icon: "lock", title: "Access control", text: "Permissions by role, depot and action, so drivers see their own jobs and only authorised staff can change vehicle records or view location history." },
  { icon: "location", title: "Location data protection", text: "Location history retained only as long as your policy requires, with access logged." },
  { icon: "audit", title: "Audit trail", text: "Checks, defects, rectifications and record changes stored with who, when and what." },
  { icon: "shield", title: "Secure engineering", text: "OWASP-guided development, encryption in transit and at rest, regular security testing, and data handled in line with UK GDPR best practice. No supplier can honestly guarantee a system can never be breached; these controls address the risks that matter most." },
  { icon: "speed", title: "Performance from ten vans to an enterprise fleet management system", text: "Location updates processed in the background and stored efficiently, so maps and dispatch screens stay responsive as the fleet grows." },
  { icon: "cloud", title: "Hosting", text: "Cloud deployment on AWS, Microsoft Azure or Google Cloud in the region you choose." },
];

export const OUTCOMES = {
  intro: "Results depend on your fleet, your starting point and how consistently the system is used, but these are the changes operators typically look for:",
  items: [
    { icon: "eye", title: "One picture of the fleet", text: "Vehicles, drivers, jobs and maintenance in one place." },
    { icon: "calendar", title: "Planned rather than reactive maintenance", text: "Due dates and defects turned into scheduled work." },
    { icon: "admin", title: "Less office administration", text: "Fewer re-typed defect sheets, spreadsheets and phone calls." },
    { icon: "audit", title: "Better-organised records", text: "Inspection, defect and driver records ready when you need to show them." },
    { icon: "finance", title: "Clearer costs", text: "Fuel, repairs and utilisation by vehicle, supporting replace-or-keep decisions." },
    { icon: "speed", title: "Faster answers for customers", text: "Job status and delivery evidence available immediately." },
  ],
};

export const PARTNER = {
  intro: "There is no single best fleet management software UK operators should all choose; the right fit depends on your operation. Questions worth asking any supplier:",
  questions: [
    "Will they tell you if your current telematics product would do the job?",
    "Can they work with your existing tracking provider rather than forcing new hardware?",
    "Have they designed the driver app with drivers, in real yards and cabs?",
    "How do they handle driver privacy and location data retention?",
    "Who maintains the integrations, and who owns the code?",
  ],
  answers: [
    { icon: "honest", title: "Honest route advice", text: "We compare products, a tailored foundation and custom options before recommending a build." },
    { icon: "stack", title: "A foundation, not a blank page", text: "Tracking, routing and dispatch, with AI-assisted, demand-aware route planning, already exist, so your budget goes into your specific workflows." },
    { icon: "signal", title: "Hardware-independent", text: "We integrate with the telematics provider you choose rather than supplying devices." },
    { icon: "team", title: "Web, mobile and AI in one team", text: "Dispatcher dashboards, driver apps and AI-assisted planning built together." },
    { icon: "plug", title: "Integration experience", text: "Salesforce, HubSpot, Microsoft Dynamics, SAP ERP, ServiceNow, Oracle Cloud and Jira, plus payment and accounting tools." },
    { icon: "support", title: "Visible progress and support", text: "Two-week sprints with weekly demos, NDAs on request and 24/7 support for critical issues." },
  ],
};

export const FAQS: { q: string; a: string[] }[] = [
  { q: "What is a fleet management system?", a: ["A fleet management system is the operational software for businesses that run vehicles. It records vehicles and drivers, shows vehicle locations, plans and assigns jobs, schedules maintenance and inspections, tracks costs such as fuel and repairs, and reports on fleet performance."] },
  { q: "How is a vehicle tracking fleet management system different from tracking alone?", a: ["Vehicle tracking on its own shows where vehicles are, using telematics devices or a driver app. A fleet management system uses that location data alongside vehicle records, driver details, jobs, maintenance and costs, so the business can plan work and manage vehicles, not just watch them on a map."] },
  { q: "When does custom fleet management software make sense?", a: ["When products force workarounds in the tasks that matter most, such as how jobs are planned, how vehicles are checked and maintained, or how fleet data connects to your other systems, or when per-vehicle fees are growing faster than the value. If a product handles your key tasks without workarounds, it is usually the better choice."] },
  { q: "Can a GPS fleet management system use our existing tracking devices?", a: ["Usually, yes. Most commercial telematics providers offer an API or data feed, and we connect to it so location data appears inside your fleet system. We confirm your provider's data access during scoping. We do not supply tracking hardware ourselves."] },
  { q: "Do drivers need an app?", a: ["Not always, but most fleets benefit from one. A driver app handles job lists, walkaround checks, defect reports, proof of delivery and messages, and can work offline in areas with poor signal."] },
  { q: "Can the system schedule vehicle maintenance and inspections?", a: ["Yes, as a built-to-requirement capability. Services and safety inspections are scheduled by date, mileage or engine hours, with reminders, work orders and a full service history stored against each vehicle."] },
  { q: "Does it help with DVSA and operator licence requirements?", a: ["A fleet system can organise the records DVSA expects goods vehicle operators to keep, such as inspection reports, walkaround checks and defect rectification, and remind you of due dates. Compliance remains the responsibility of the operator and transport manager, so always check the current DVSA guidance for your vehicles."] },
  { q: "How does AI route planning work?", a: ["AI-assisted planning uses your historical route and demand data, plus live job and fleet data, to suggest which vehicle should take which job and in what order. Planners review and confirm the suggestions, so they stay in control of the final plan."] },
  { q: "Is tracking drivers legal under UK GDPR?", a: ["Tracking work vehicles can be lawful, but tracking data is usually personal data. ICO guidance on monitoring workers expects a clear purpose, transparency with workers and proportionate use, including care over tracking outside working hours. This is general information; confirm your approach with your data protection adviser."] },
  { q: "How much does fleet management software cost?", a: ["Ready-made products are usually priced as per-vehicle subscriptions. For a tailored or custom system, cost depends on how much of the foundation can be reused, the number of workflows and user roles, the telematics and business integrations needed, the driver app, data migration and ongoing support. We provide a fixed-price or time-and-materials estimate with milestones once requirements are understood."] },
  // VERIFY: owner to confirm the IP and code-ownership position (pack note). Only the confirmed part is published.
  { q: "Who owns the system and the data?", a: ["Your vehicle, driver and job data remain yours. Ownership of the system code is set out in the contract and agreed before work starts."] },
];

export const FINAL_CTA = {
  title: "Let's Put Your Whole Fleet",
  titleAccent: "on One Screen",
  body: {
    text: "You do not need a specification to start. Tell us how many vehicles you run, how jobs are planned today, which tracking provider you use and where the time goes. We will recommend the right route, whether that is getting more from a product you already pay for, a tailored system or a custom build, and follow with a scoped estimate.",
  } as LinkedText,
  bring: ["Number and types of vehicles", "Depots and regions", "Current tracking provider", "How jobs are planned", "Biggest fleet headache"],
};

export const SCHEMA_SERVICE = {
  name: "Fleet Management Software Development",
  serviceType: ["Custom fleet management software development", "Fleet tracking and dispatch software", "Fleet maintenance software"],
  description: SEO.description,
};
