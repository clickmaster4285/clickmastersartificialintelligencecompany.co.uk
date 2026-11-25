/*
 * /solutions/lms-development content, from
 * "ClickMasters LMS Development Solutions: SEO Content Pack" (25 Nov 2026).
 * Edit copy here; page.jsx only renders it.
 *
 * VERIFY comments mark business facts the pack says need owner confirmation.
 * Body links: exactly the pack's four (CTAs, breadcrumb, header and footer
 * are template elements). The AI link points to /services/ai-development,
 * because /services is now the hub for all services.
 */

export const PATH = "/solutions/lms-development";

export const SEO = {
  // Rendered as "LMS Development UK: Custom Learning Platforms | ClickMasters" (59 chars).
  title: "LMS Development UK: Custom Learning Platforms",
  description:
    "Custom LMS development for UK organisations: course delivery, assessments, learner dashboards and reporting, tailored to how your people learn.",
  ogTitle: "LMS Development Solutions | ClickMasters",
  ogDescription:
    "Learning management systems built around your learners, training rules and reporting, from a tailored foundation to a fully custom platform.",
};

export type LinkedText = { text: string; link?: { anchor: string; href: string } };

const IMG = "/assets/Solution/lms";

/**
 * Diagrams drawn for this page (alt text from the pack's image table) and
 * photos from Unsplash (Unsplash License: free for commercial use, no
 * attribution required; credits kept here for reference).
 */
export const IMAGES = {
  roles: {
    src: `${IMG}/lms-roles-and-dashboards.png`, width: 1080, height: 800,
    alt: "An LMS at a glance: learners, tutors, managers and administrators each with their own dashboard over shared courses, assessments and reporting, connected to HR, CRM, single sign-on and payment systems",
  },
  routes: {
    src: `${IMG}/lms-build-vs-buy-routes.png`, width: 1720, height: 560,
    alt: "Three LMS routes compared: ready-made platform, tailored LMS foundation and fully custom build, by speed to start, flexibility and ongoing ownership",
  },
  features: {
    src: `${IMG}/lms-features-by-organisation.png`, width: 1720, height: 640,
    alt: "Matrix of LMS features needed by employers, training providers, schools, course businesses and customer-training teams, marking each feature as usually essential, often useful or rarely needed at first",
  },
  architecture: {
    src: `${IMG}/lms-architecture.png`, width: 1720, height: 600,
    alt: "LMS architecture: web and mobile front end, API layer for roles, enrolment rules, assessments and reporting, database, file and video storage and reporting store, with HR, CRM, single sign-on, payment and video integrations",
  },
  process: {
    src: `${IMG}/lms-development-process.png`, width: 1720, height: 340,
    alt: "Six-step LMS development process: discovery, route recommendation, experience and architecture design, build in sprints, migration and testing, launch and continuous improvement",
  },
  // Photo: Christina @ wocintechchat.com (unsplash.com/photos/Q80LYxv_Tbs)
  workplace: {
    src: `${IMG}/lms-workplace-training-session.webp`, width: 1200, height: 801,
    alt: "Colleagues around a long meeting table with laptops, watching a trainer write on a whiteboard during a workplace training session",
  },
  // Photo: Quilia (unsplash.com/photos/1-aA2Fadydc)
  classroom: {
    src: `${IMG}/lms-training-provider-classroom.webp`, width: 1200, height: 800,
    alt: "Adult learners in a training room following a presenter and a projected slide, some taking notes on tablets and notebooks",
  },
  // Photo: The Climate Reality Project (unsplash.com/photos/Hb6uWq0i4MI)
  notes: {
    src: `${IMG}/lms-learner-taking-notes.webp`, width: 1200, height: 800,
    alt: "Close-up of a learner writing notes in a notebook while seated in a row of course attendees",
  },
} as const;

export const HERO = {
  eyebrow: "LMS Development UK",
  title: "LMS Development Solutions:",
  titleAccent: "Custom Learning Management Systems for UK Organisations",
  lead:
    "Most organisations looking for a new learning platform already have one. It is just an LMS nobody enjoys using, a shared drive of PDFs, or completion records kept in spreadsheets. Courses exist, but learners cannot find them, managers cannot see who is overdue, and reporting for an audit takes days.",
  // VERIFY: confirm course delivery, assessments, learner dashboards and reporting exist as a reusable LMS foundation.
  audience:
    "ClickMasters designs, builds and tailors learning management systems around how your organisation actually trains people. We start from a ready-to-customise LMS foundation for course delivery, assessments, learner dashboards and reporting, then shape the learning paths, roles, branding and integrations around your learners, whether they are employees, students, customers or paying course members.",
  stats: [
    { value: "4 roles", label: "Learner · tutor · manager · admin" },
    { value: "3 routes", label: "Ready-made, tailored or custom" },
    { value: "WCAG · UK GDPR", label: "Designed in from the start" },
    { value: "Two-week sprints", label: "Weekly demos" },
  ],
};

export const WHAT_IS = {
  p1: "A **learning management system (LMS)** is software for delivering, organising and tracking learning. It decides who should learn what and by when, presents the course content, checks understanding through assessments, and records progress so learners, managers and administrators can see where things stand.",
  p2: "Every LMS does those basics. Where they differ is how well they fit the way your organisation runs:",
  fit: [
    ["Who your learners are:", "staff, students, customers, members, or a mix."],
    ["How training is assigned:", "by role, site, cohort, certification renewal date or purchase."],
    ["What evidence you need:", "completion records, scores, signed declarations or CPD hours."],
    ["Which systems hold the truth:", "an HR system, a student record system, a CRM or a payment platform."],
  ],
  p3: "When a standard platform fits those answers, use it. When the answers create workarounds, such as manual enrolments, exported spreadsheets or a second system for reporting, a custom or tailored LMS is worth considering.",
};

export const COMPARISON_INTRO = "There are three realistic routes, and we will tell you plainly if the first one is enough.";

export const COMPARISON = {
  headers: ["", "Ready-made LMS (open-source or commercial)", "Tailored LMS on our foundation", "Fully custom LMS"],
  rows: [
    ["Examples", "Moodle, Totara or a subscription LMS", "Our LMS foundation, customised", "Built from a blank page"],
    ["Best when", "Your training is fairly standard and its features cover most needs", "Core LMS needs are standard but roles, workflows, branding or integrations are not", "The learning platform is the product, or the learning model is unusual"],
    ["Strengths", "Quickest to start; large feature sets; mature content-standard support", "Core features already exist; budget goes into what makes you different", "Complete control of data model, experience and roadmap"],
    ["Trade-offs", "Limited by the product's data model and roadmap; per-user fees or hosting and plugin upkeep", "Needs a clear scope and ongoing support", "Highest upfront investment; you own all maintenance"],
    ["Watch for", "Workarounds piling up around the system", "Scope creep into a full custom build", "Rebuilding features a foundation already provides"],
  ],
};

export const COMPARISON_TEST =
  "**A useful test:** list your top ten training requirements and mark which a standard platform handles without workarounds. If most are covered, configure a ready-made product. If the gaps are in how learning is assigned, evidenced or connected to other systems, a tailored LMS usually pays back the difference.";

// Body link 1 of 4.
export const SAAS_NOTE: LinkedText = {
  text: "If you plan to sell your platform to many separate organisations, each with its own workspace, users and billing, you are building a learning product as well as an LMS. Our [[link]] cover how those multi-tenant, subscription-based products are validated and scaled.",
  link: { anchor: "MVP and SaaS development services", href: "/services/mvp-saas-development" },
};

export const FEATURES_INTRO =
  "Features marked Foundation are part of our configurable LMS base. Those marked Built to requirement are developed for your platform when your learners need them.";

// VERIFY: Foundation labels, and capability for certificates/renewals, course sales and SSO.
export const FEATURES: { icon: string; title: string; tag: "Foundation" | "Built to requirement" | "Foundation and built to requirement"; text: LinkedText }[] = [
  { icon: "course", title: "Course and content management", tag: "Foundation", text: { text: "Courses made of modules and lessons, with video, documents, interactive content and downloadable resources, organised in a catalogue learners can search and filter." } },
  { icon: "path", title: "Learning paths and enrolment rules", tag: "Built to requirement", text: { text: "Automatic assignment by job role, department, site, cohort or start date, with prerequisites that unlock the next course when the previous one is complete." } },
  { icon: "quiz", title: "Assessments and quizzes", tag: "Foundation", text: { text: "Question banks, randomised quizzes, pass marks, retake rules and tutor-marked assignments, with feedback learners can act on." } },
  { icon: "dashboard", title: "Learner dashboards", tag: "Foundation", text: { text: "One place for learners to see what is assigned, what is overdue, what they have completed and what comes next." } },
  { icon: "roles", title: "Administrator, tutor and manager views", tag: "Foundation and built to requirement", text: { text: "Administrators manage courses and users; tutors mark work and follow their cohorts; line managers see their team's progress without seeing anyone else's." } },
  { icon: "report", title: "Reporting and analytics", tag: "Foundation", text: { text: "Completion, scores, overdue training and course engagement, filtered by team, site or cohort, and exportable for audits and management reports." } },
  { icon: "certificate", title: "Certificates and renewals", tag: "Built to requirement", text: { text: "Certificates issued on completion, with expiry dates and automatic reassignment when mandatory training is due again." } },
  { icon: "lock", title: "Roles and access control", tag: "Foundation", text: { text: "Role-based access so each person sees only the courses, learners and reports their role requires, enforced on the server rather than hidden in the interface." } },
  { icon: "cart", title: "Selling courses", tag: "Built to requirement", text: { text: "Course purchase, bundles or subscriptions through a payment provider, for training businesses that sell to the public or to client organisations." } },
  // Body link 2 of 4.
  {
    icon: "mobile", title: "Mobile and offline learning", tag: "Built to requirement",
    text: {
      text: "Every LMS we build is responsive in the browser. Where learners work on site, in the field or with poor connectivity, our [[link]] adds iOS and Android apps with offline lessons, quizzes and progress that syncs when they reconnect.",
      link: { anchor: "mobile learning app development", href: "/services/mobile-app-development" },
    },
  },
];

export const AUDIENCE = {
  intro: "Which features you need depends on who you train:",
  headers: ["Organisation", "Usually essential", "Often unnecessary at first"],
  rows: [
    ["Employer (onboarding and compliance)", "Role-based learning paths, renewals, manager views, HR integration", "Course sales, public catalogue"],
    ["Training provider", "Cohorts, tutor marking, learner evidence, enrolment from CRM", "Gamification"],
    ["School, college or trust", "Classes, teacher views, accessibility, safeguarding-aware data handling", "Payments"],
    ["Online course business", "Catalogue, payments, learner onboarding, engagement analytics", "Complex approval hierarchies"],
    ["Customer or partner training", "Self-registration, product-based paths, certificates", "Line-manager reporting"],
  ],
};

export const AI = {
  intro: "AI is useful in an LMS where it saves tutors and course designers real time, and where people still check the output:",
  items: [
    { icon: "draft", title: "Assessment and content drafting", text: "Generating question banks and summaries from your approved material, reviewed before publication." },
    { icon: "copilot", title: "Learning copilots", text: "An assistant that answers learners' questions using your course content, and refers them to a tutor when it cannot." },
    { icon: "insight", title: "Insight", text: "Spotting learners who are falling behind before a deadline is missed." },
  ],
  // Body link 3 of 4.
  outro: {
    text: "These features are built by the same team through our [[link]], with human approval kept in any workflow where content is published to learners. In education settings we take account of the Department for Education's guidance on generative AI.",
    link: { anchor: "AI development services", href: "/services/ai-development" },
  } as LinkedText,
};

export const INTEGRATIONS_INTRO = "An LMS rarely works alone. The integrations decide how much manual administration it removes.";

export const INTEGRATIONS: { icon: string; title: string; text: LinkedText }[] = [
  { icon: "people", title: "People and sign-in", text: { text: "New starters enrolled automatically from your HR system, and leavers removed. Single sign-on through your existing identity provider, so learners have one less password (built to requirement)." } },
  // Body link 4 of 4.
  {
    icon: "crm", title: "Enquiries, enrolments and sales",
    text: {
      text: "For training providers, the journey starts before the LMS: enquiries, employer contacts and enrolment decisions. Pairing your LMS with [[link]] means an enrolled learner arrives in the LMS with the right course already assigned, and progress can flow back to the account team.",
      link: { anchor: "custom CRM software for enquiries and enrolments", href: "/solutions/crm-software" },
    },
  },
  // VERIFY: SCORM / xAPI support (copy is hedged: confirmed per project).
  { icon: "standards", title: "Learning content standards", text: { text: "If you already own e-learning packages, the platform needs to play and track them. We confirm the formats you use, such as SCORM or xAPI, during scoping and plan support for them (confirmed per project)." } },
  { icon: "plug", title: "Other connections", text: { text: "Video hosting, calendars and virtual classrooms, payment providers and reporting tools, connected through documented APIs." } },
];

export const STACK_NOTE =
  "Our learning platforms are built as modern web applications using React and Next.js, with Node.js, Python or Laravel back ends, PostgreSQL or MySQL databases, and hosting on AWS, Microsoft Azure or Google Cloud in the region you choose.";

export const SECURITY_INTRO =
  "Learning platforms hold personal data, assessment results and sometimes information about children, so these considerations shape the build from the start:";

export const SECURITY = [
  { icon: "privacy", title: "Data protection", text: "Design based on UK GDPR principles, with clear retention periods for learner records and the ability to export or delete personal data on request." },
  { icon: "child", title: "Children's data", text: "Where under-18s use the platform, we take account of the ICO's Age Appropriate Design Code (the Children's Code), including privacy-protective defaults." },
  { icon: "access", title: "Accessibility", text: "Interfaces designed to the Web Content Accessibility Guidelines (WCAG), important for every learner and a legal duty for public sector bodies." },
  { icon: "shield", title: "Secure engineering", text: "OWASP-guided development, encryption in transit and at rest, server-side permission checks and regular security testing. No supplier can honestly guarantee a system can never be breached; these controls address the risks that matter most." },
  { icon: "speed", title: "Performance under peaks", text: "Caching, efficient video delivery and background processing keep the platform responsive when hundreds of learners log in for the same deadline or start date." },
];

export const PROCESS = [
  { title: "Learning and operational discovery", text: "We talk to the people who learn, teach and administer, map how training is assigned and evidenced today, and agree what success looks like." },
  { title: "Route recommendation", text: "We compare a ready-made platform, a tailored foundation and a custom build against your requirements, and recommend one with its trade-offs." },
  { title: "Experience and architecture design", text: "Learner, tutor and administrator journeys; roles, integrations, data migration and hosting; and a release plan." },
  { title: "Build in two-week sprints", text: "Weekly demos in a test environment, so your L&D or academic team reviews real screens while there is still time to change them." },
  { title: "Content migration and testing", text: "Existing courses and learner records moved across, then functional, integration, accessibility and security testing, followed by acceptance testing with real users." },
  { title: "Launch and continuous improvement", text: "A pilot group first, then wider roll-out with administrator training, followed by improvements prioritised from usage and completion data." },
];

export const PROCESS_OUTRO = "We offer fixed-price and time-and-materials engagements, with a scoped estimate and milestones after discovery.";

export const USE_CASES_NOTE = "Typical ways organisations use a learning management system. These illustrate fit and are not client case studies.";

export const USE_CASES = [
  { icon: "onboarding", title: "Employee onboarding", text: "New starters receive a role-specific learning path on day one, managers see progress, and HR stops chasing completion by email." },
  { icon: "compliance", title: "Compliance and mandatory training", text: "Health and safety, data protection and sector-specific training assigned by role, renewed automatically, and reported in a form ready for audit." },
  { icon: "cpd", title: "Professional development and CPD", text: "Members or staff record structured and self-directed learning hours, with certificates and an exportable CPD record." },
  { icon: "provider", title: "Training providers", text: "Cohorts, tutor marking and learner evidence in one place. Providers delivering apprenticeships should also scope funding-related reporting requirements early, as these can decide whether a specialist product or a custom build is the better fit." },
  { icon: "school", title: "Schools, colleges and academy trusts", text: "Class-based courses, teacher dashboards and accessible content, with data handling designed for younger learners." },
  { icon: "cart", title: "Online course businesses", text: "A branded catalogue, course sales and learner engagement analytics, without platform fees that grow with every student." },
  { icon: "partner", title: "Customer and partner training", text: "Product training for customers, resellers or installers, reducing support demand and helping partners sell and support your products correctly." },
];

export const PARTNER = {
  intro: "Whoever you choose, these questions reveal whether a supplier understands learning platforms as well as code:",
  questions: [
    "Will they tell you if a ready-made LMS would serve you better?",
    "How will they migrate your existing courses and learner history?",
    "How do they handle accessibility and, where relevant, children's data?",
    "Which of your systems will they integrate with, and who maintains those integrations?",
    "What does support look like after launch, and who owns the code?",
  ],
  answers: [
    { icon: "honest", title: "Honest route advice", text: "We compare ready-made, tailored and custom options before recommending a build." },
    { icon: "course", title: "A foundation, not a blank page", text: "Course delivery, assessments, learner dashboards and reporting already exist, so your investment goes into what is specific to you." },
    { icon: "copilot", title: "AI and software in one team", text: "Learning copilots and assessment generation built alongside the platform, not bolted on." },
    { icon: "plug", title: "Integration experience", text: "Salesforce, HubSpot, Microsoft Dynamics, SAP ERP, ServiceNow, Oracle Cloud and Jira, plus payment and accounting tools." },
    { icon: "demo", title: "Visible progress", text: "Two-week sprints with weekly demos." },
    { icon: "shield", title: "Security and confidentiality", text: "OWASP-guided engineering, UK GDPR best practice and NDAs on request." },
    { icon: "support", title: "Support after launch", text: "Including 24/7 support for critical issues." },
  ],
};

export const FAQS: { q: string; a: string[] }[] = [
  { q: "What is LMS development?", a: ["LMS development is the design and building of a learning management system: software that delivers courses, assigns training, runs assessments and tracks progress. It can mean building a platform from scratch, tailoring an existing foundation, or extending a ready-made LMS with custom features and integrations."] },
  { q: "Should we build a custom LMS or use an off-the-shelf platform?", a: ["Use an off-the-shelf platform if it covers most of your requirements without workarounds. Consider a tailored or custom LMS when training is assigned or evidenced in ways standard tools handle poorly, when you need integrations they do not support, when per-user fees are growing faster than the value, or when the platform is part of a product you sell."] },
  { q: "Can you replace our existing LMS, such as Moodle?", a: ["Yes. We review your current platform, courses and learner records, then plan a migration that preserves completion history where it is needed for compliance or certification. Sometimes improving or extending the current platform is the better answer, and we will say so."] },
  { q: "Which features should our LMS include?", a: ["That depends on who you train. Employers usually need role-based learning paths, renewals and manager reporting; training providers need cohorts, tutor marking and evidence; course businesses need a catalogue and payments. We prioritise features in discovery so the first release solves the most important problems."] },
  { q: "Can the LMS integrate with our HR, CRM or sign-in systems?", a: ["Yes. Common integrations include HR systems for automatic enrolment, CRMs for enquiries and enrolments, single sign-on through your identity provider, and payment providers. The integrations needed are agreed and scoped for each project."] },
  { q: "Will our existing SCORM or xAPI courses work?", a: ["Tell us which formats your content uses during discovery. We will confirm support and include it in the scope and estimate, rather than assuming every package will import as is."] },
  { q: "Can learners use the LMS on mobile devices?", a: ["Yes. Platforms are responsive in any modern browser, and where learners need offline access or app features such as notifications, we can build companion iOS and Android apps."] },
  { q: "Can you add AI features to an LMS?", a: ["Yes. Typical examples are assessment and question-bank drafting from approved material, and learning assistants that answer learners' questions from your course content. A human review step stays in place wherever content reaches learners."] },
  { q: "How do you handle learner data and accessibility?", a: ["We design to UK GDPR principles with defined retention, role-based access and encryption; take account of the ICO Children's Code where under-18s use the platform; and design interfaces to WCAG so learners with disabilities can use them. Your own legal obligations should be confirmed with your advisers."] },
  { q: "How much does custom LMS development cost?", a: ["Cost depends on how much of the foundation can be used as is, the custom features required, the number and complexity of integrations, content and data migration, mobile apps, and ongoing support. We provide a fixed-price or time-and-materials estimate with milestones once requirements are understood."] },
  // VERIFY: owner to confirm the IP and code-ownership position (pack note). Only the confirmed part is published.
  { q: "Who owns the platform and the content?", a: ["Your courses and learner data remain yours. Ownership of the platform code is set out in the contract and agreed before work starts."] },
];

export const FINAL_CTA = {
  title: "Tell Us How Your",
  titleAccent: "Organisation Learns",
  body: {
    text: "You do not need a specification to start. Tell us who you train, how training is assigned and evidenced today, and what is not working. We will recommend the right route, whether that is a ready-made platform, a tailored LMS or a custom build, and follow with a scoped estimate.",
  } as LinkedText,
  bring: ["Who your learners are", "Current platform or process", "Systems to connect", "Reporting and compliance needs", "Timescale and budget"],
};

export const SCHEMA_SERVICE = {
  name: "LMS Development",
  serviceType: ["Learning management system development", "Custom LMS development", "eLearning platform development"],
  description: SEO.description,
};
