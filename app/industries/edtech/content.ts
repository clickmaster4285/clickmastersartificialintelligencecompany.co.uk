/*
 * /industries/edtech content, from
 * "ClickMasters EdTech Industry Page: SEO Content Pack" (27 Nov 2026).
 * Edit copy here; page.jsx only renders it.
 *
 * Inline links use [anchor](/path) and render through <RichText>.
 * VERIFY comments mark items the pack says need owner confirmation (section G).
 * "LMS development" queries belong to /solutions/lms-development: keep LMS as one
 * platform among several here, with no LMS-focused heading.
 */

export const PATH = "/industries/edtech";

export const SEO = {
  title: "AI EdTech Solutions & Education Software UK",
  description:
    "AI-powered EdTech solutions and education software for UK schools, colleges, universities and training providers: learning platforms, assistants and automation.",
  ogTitle: "AI-Powered EdTech Solutions | ClickMasters",
  ogDescription:
    "Learning platforms, AI learning assistants, assessment support, workflow automation and integrations for UK education and training organisations.",
};

const IMG = "/assets/industries/edtech";

/*
 * Photos from Unsplash (Unsplash License, free to use). The pack advises against
 * children at screens with glowing "AI" graphics.
 */
export const IMAGES = {
  // Photo: Drahomír Hugo Posteby-Mach (unsplash.com/photos/n4y3eiQSIoc)
  library: {
    src: `${IMG}/edtech-modern-library-study-space.webp`, width: 1200, height: 900,
    alt: "Bright modern library with floor-to-ceiling windows, bookshelves and round study tables",
  },
  // Photo: Changbok Ko (unsplash.com/photos/F8t2VGnI47I)
  lectureHall: {
    src: `${IMG}/edtech-university-lecture-hall.webp`, width: 1200, height: 801,
    alt: "Empty university lecture hall with tiered rows of wooden desks",
  },
  // Photo: Maya Maceka (unsplash.com/photos/yW-Qgw_IJXg)
  online: {
    src: `${IMG}/edtech-online-learning-laptop-notes.webp`, width: 1200, height: 800,
    alt: "Laptop beside a lined notepad, pens and earphones, set up for online study",
  },
  // Photo: Scott Graham (unsplash.com/photos/5fNmWej4tAA)
  marking: {
    src: `${IMG}/edtech-assessment-feedback-marking.webp`, width: 1200, height: 801,
    alt: "Hands annotating printed work with a pencil beside a laptop, representing teacher review of assessment feedback",
  },
  // Photo: Zoshua Colah (unsplash.com/photos/JcPr4irSk34)
  readingRoom: {
    src: `${IMG}/edtech-library-reading-room.webp`, width: 1200, height: 801,
    alt: "Traditional university reading room with long tables, lamps and tall bookshelves",
  },
} as const;

export const HERO = {
  eyebrow: "EdTech & E-Learning",
  title: "AI-Powered EdTech Solutions",
  titleAccent: "and Education Software Development",
  lead:
    "ClickMasters designs and builds AI-powered EdTech solutions and custom education software for schools, colleges, universities, training providers and EdTech businesses across the UK. We help education organisations build the learning platforms, learner and staff portals, AI learning assistants, assessment tools and workflow automation they actually need, connected to the systems they already use.",
  audience:
    "We start with the learning or operational problem, not the technology. That might be an online course platform that can grow with demand, an assistant that answers learners' questions from approved course materials, assessment tools that save teachers time while leaving academic judgement with them, or automation that takes routine enrolment and administration off staff. Every AI feature is designed to support educators, not replace them.",
  // Supporting statement under the CTAs, shown as the hero's stat strip.
  trust: [
    { label: "Approach", value: "Practical innovation" },
    { label: "AI", value: "Responsible by design" },
    { label: "Focus", value: "Designed around learning" },
    { label: "Judgement", value: "Stays with educators" },
  ],
  figureAlt:
    "Education software integration diagram showing a learning platform connected to student information, sign-in, content and reporting systems, with an AI assistant using approved course materials and teacher review of feedback",
};

/** Hero diagram: connected systems around a learning platform, AI assistant on approved content, teacher review. */
export const HERO_FLOW = {
  systems: ["Student information", "Single sign-on", "Content library", "Video tools"],
  platform: "Learning platform",
  ai: "AI assistant: approved course materials only",
  review: "Teacher review before feedback is released",
  output: "Reporting dashboard",
};

export const LANDSCAPE = {
  title: "How Education Technology Is Changing, and What Matters Now",
  intro:
    "Education technology has moved from a supplementary tool to everyday infrastructure. Digital and blended learning is now routine in further and higher education, professional training and corporate learning. Schools rely on digital systems for everything from homework to parent communication. Several developments are shaping what education organisations now expect from their software.",
  trends: [
    { icon: "blended", title: "Digital and blended learning", text: "Learners move between face-to-face teaching, live online sessions and self-paced study, and expect a consistent experience across all three." },
    { icon: "adaptive", title: "Personalised and adaptive learning", text: "Platforms can recommend resources and pathways based on progress and assessment results, helping learners spend time where it is most useful." },
    { icon: "ai", title: "AI-supported teaching and learning", text: "Generative AI is being used for planning, resource creation, feedback and administration. The Department for Education's guidance for schools and colleges in England notes the more immediate benefits, and fewer risks, of teacher-facing uses compared with pupil-facing ones." },
    { icon: "analytics", title: "Learning analytics and progress visibility", text: "Dashboards give teachers, tutors and managers earlier sight of engagement and progress, if the data is reliable and used carefully." },
    { icon: "assessment", title: "Digital assessment and feedback", text: "Online quizzes, assignment workflows and AI-assisted feedback can speed up the cycle between learner effort and useful feedback." },
    { icon: "plug", title: "Connected education management systems", text: "Learning platforms increasingly need to exchange data with student information systems, identity services, finance and CRM." },
    { icon: "access", title: "Accessibility and inclusive learning", text: "Accessible design benefits every learner, and for many organisations it is also a legal duty." },
  ],
  // VERIFY: OECD finding confirmed via listings and summaries only (pack, source 7).
  outro:
    "The difference between successful and disappointing EdTech is rarely the technology itself. The OECD's *Digital Education Outlook 2026* finds that generative AI supports learning when it is designed and used with clear educational purpose. When it is used simply to complete tasks for learners, it can improve the work produced without improving learning. Technology adopted for its own sake adds cost and complexity. Technology aimed at a specific problem can genuinely help. That problem might be teacher workload, learners who get stuck between lessons, slow feedback or data that never reaches the people who need it.",
};

export const AUDIENCES_INTRO =
  "A primary school, a university and a corporate academy all deliver learning, but their users, obligations and systems are very different. We start by understanding which of these situations you are in.";

// VERIFY: confirm ClickMasters will build learner-facing products for under-18s (pack, G3).
export const AUDIENCES = [
  { icon: "school", title: "Schools and academy trusts", text: "Learners are children, so safeguarding, filtering and monitoring, age-appropriate design and minimal data collection come first. Systems must work with existing management information systems and be simple for busy staff. Generative AI tends to be most valuable on the teacher-facing side." },
  { icon: "college", title: "Further education colleges", text: "Mixed age groups, including under-18s and adults. Vocational and academic programmes, apprenticeships and funding-related reporting. Strong integration and accessibility needs." },
  { icon: "university", title: "Universities", text: "Large, diverse cohorts, established virtual learning environments, research and teaching data, and complex identity and integration requirements. Academic integrity, accessibility and data governance are major considerations." },
  { icon: "online", title: "Online learning providers", text: "Course platforms, payments and subscriptions, learner experience and the ability to scale. Content quality and learner support drive retention." },
  { icon: "rocket", title: "EdTech start-ups", text: "A focused first version that can be tested with real learners and teachers, an architecture that can grow, and evidence for claims made to schools and buyers." },
  { icon: "briefcase", title: "Corporate training providers and L&D teams", text: "Role-based learning paths, compliance training, certificates and renewals, integration with HR systems and reporting for managers and auditors." },
  { icon: "certificate", title: "Professional education and certification bodies", text: "Secure assessment, identity checks, certification records, continuing professional development (CPD) tracking and member portals." },
  { icon: "tutor", title: "Tutoring and learning-platform businesses", text: "Scheduling, matching, progress tracking, parent communication and practice tools, often for children, which brings safeguarding and Children's Code considerations." },
];

export const CHALLENGES = [
  { icon: "adaptive", title: "Limited personalisation across different learner needs", text: "One course, one pace and one set of resources rarely suit every learner. Teachers know where individuals struggle, but have limited time to prepare differentiated material.", impact: "Some learners disengage while others are held back.", help: "Platforms that recommend resources and practice based on progress, AI-assisted creation of differentiated materials for teacher review, and accessible formats generated from the same source content." },
  { icon: "admin", title: "Time-consuming administrative and academic workflows", text: "Enrolment, timetabling, attendance follow-up, communications, reports and routine queries consume a large share of staff time.", impact: "Less time for teaching, learner support and planning.", help: "Workflow automation, document processing and staff-facing assistants that draft routine communications for review." },
  { icon: "plug", title: "Disconnected LMS, student information and management systems", text: "Learner records, course enrolments, grades and attendance often live in separate systems that do not share data reliably.", impact: "Duplicate data entry, inconsistent records and reports that take days to assemble.", help: "API integrations, single sign-on and a clear decision on which system holds the master record for each type of data." },
  { icon: "analytics", title: "Difficulty monitoring learner engagement and progress", text: "When activity data is scattered across tools, tutors may only notice that a learner is struggling after they have fallen well behind.", impact: "Late intervention and avoidable drop-out, particularly in online and part-time study.", help: "Learning analytics dashboards that bring engagement and progress signals together for staff, who then decide what support is needed." },
  { icon: "assessment", title: "Manual assessment and feedback processes", text: "Marking, moderation and written feedback are among the most time-intensive parts of teaching.", impact: "Feedback arrives too late to be acted on, and staff workload rises.", help: "Automated marking for objective questions, AI-assisted feedback drafts that teachers edit and approve, and streamlined submission and moderation workflows." },
  { icon: "library", title: "Fragmented learning resources and knowledge", text: "Course materials, policies, handbooks and recorded sessions are spread across drives, platforms and inboxes.", impact: "Learners and staff waste time searching or act on out-of-date information.", help: "Organised content repositories, semantic search and knowledge assistants grounded in approved materials." },
  { icon: "scale", title: "Scaling online learning experiences", text: "A platform that works for 200 learners may struggle at 20,000, and manual processes that were manageable become bottlenecks.", impact: "Poor performance at peak times, support backlogs and inconsistent learner experience.", help: "Scalable cloud architecture, automated enrolment and communication, and learner support assistants with clear routes to human help." },
  { icon: "access", title: "Accessibility and inclusive learning requirements", text: "Inaccessible content and interfaces exclude learners with disabilities and can breach legal duties.", impact: "Learners cannot participate fully, and organisations face complaints and reputational risk.", help: "Accessible design to recognised standards (WCAG 2.2 AA is the current benchmark), captions and transcripts, alternative formats and assistive technology testing." },
  { icon: "shield", title: "Data protection, safeguarding and responsible AI adoption", text: "Education organisations hold sensitive information about learners, often including children. AI introduces new questions about accuracy, bias, transparency and where data goes.", impact: "Uncertainty slows adoption, or unmanaged tools are used informally.", help: "Privacy-by-design architecture, controlled AI services that do not train on learner data, filtering and logging where learners interact with AI, and clear documentation of what each system does." },
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
    id: "learning-assistants",
    icon: "assistant",
    title: "AI-powered learning assistants",
    paragraphs: [
      "AI learning assistants give learners conversational support between lessons. They explain concepts in different ways, guide learners through problems, point them to relevant course materials and answer questions about the course itself. For staff, similar assistants can help find policies, schemes of work and procedures.",
      "These tools are designed to **support educators, not replace teachers**. A well-designed assistant draws on approved materials, encourages learners to think rather than simply handing over answers, recognises when a question should go to a tutor, and is clearly identified as AI. Where learners are children, filtering, monitoring, logging and age-appropriate responses are core requirements. Assistants that take actions across systems are built through our [AI agent development](/services/ai-agent-development) practice, with tightly limited permissions.",
    ],
    image: "online",
  },
  {
    id: "adaptive-learning",
    icon: "adaptive",
    title: "Personalised and adaptive learning",
    paragraphs: [
      "Personalised learning software uses information such as progress, assessment results, stated preferences and course structure to recommend relevant resources, practice activities and next steps. Adaptive learning pathways can adjust the order or difficulty of content as a learner progresses.",
      "Personalisation is only as good as the data and the learning design behind it. AI cannot accurately understand every learner automatically. Signals such as quiz scores and time on task are incomplete, and a recommendation is a suggestion, not a diagnosis of a learner's ability. We design adaptive features with educators, make the reasons for recommendations visible, and let teachers and learners override them. We also avoid profiling that would be unfair or inappropriate, particularly for children.",
    ],
  },
  {
    id: "intelligent-tutoring",
    icon: "tutor",
    title: "Intelligent tutoring systems",
    paragraphs: [
      "Intelligent tutoring systems provide guided practice with step-by-step explanations, hints, worked examples and immediate feedback, often within a specific subject such as mathematics, languages or programming. Combining structured content with generative AI can make that guidance more conversational and responsive.",
      "Educational quality depends on subject expertise, sound pedagogy and accurate content. Tutoring logic and content should be designed and reviewed with subject specialists, tested for accuracy, and monitored once in use. Human oversight remains important, and teachers should be able to see how learners are using the tool.",
    ],
  },
  {
    id: "assessment-feedback",
    icon: "assessment",
    title: "AI-powered assessment and feedback",
    paragraphs: ["AI can support automated assessment and feedback in several ways:"],
    items: [
      { term: "Question creation:", text: "drafting question banks and variants for teachers to review." },
      { term: "Objective marking:", text: "automatically marking multiple-choice, numerical and short structured answers." },
      { term: "Feedback generation:", text: "drafting personalised feedback against a rubric for teachers to edit and approve." },
      { term: "Marking assistance:", text: "highlighting rubric criteria, suggesting comments or flagging work for moderation." },
      { term: "Analytics:", text: "identifying common misconceptions across a cohort." },
    ],
    outro: [
      "Automated assistance is not final academic judgement. Grades and feedback that affect learners should be reviewed and owned by qualified staff. Organisations delivering regulated qualifications must also follow the rules of their awarding bodies and regulators on the use of AI in assessment. Our [generative AI development](/services/generative-ai-development) work covers how we keep generated drafts accurate, on-brief and reviewable.",
    ],
    image: "marking",
  },
  {
    id: "knowledge-assistants",
    icon: "library",
    title: "Education knowledge assistants and RAG solutions",
    paragraphs: [
      "Retrieval-augmented generation (RAG) lets an assistant answer questions using only a defined set of approved sources: course materials, module handbooks, institutional policies, student services information and educational resources. Answers can cite the specific document they came from, so learners and staff can check them.",
      "Permissions matter. A learner should only retrieve materials for courses they are enrolled on, and staff guidance should not be visible to students. Content owners need to keep sources current. Our [RAG development](/services/rag-development) service explains how we build these knowledge systems with access controls and source citations.",
    ],
    image: "readingRoom",
  },
  {
    id: "workflow-automation",
    icon: "automation",
    title: "Education workflow automation",
    paragraphs: ["Educational workflow automation handles routine, rules-based administration so staff can focus on learners. Typical candidates include:"],
    items: [
      { text: "enrolment and application workflows, including document checks;" },
      { text: "notifications and reminders about deadlines, sessions and outstanding tasks;" },
      { text: "document processing for forms, evidence and correspondence;" },
      { text: "scheduling of sessions, rooms, assessments and tutors;" },
      { text: "attendance follow-up and escalation; and" },
      { text: "internal support requests routed to the right team." },
    ],
    outro: [
      "AI is used only where interpretation is needed, for example classifying free-text enquiries or extracting details from documents. Exceptions are passed to staff. Our [AI automation services](/services/ai-automation) describe how we combine rules, AI and human review.",
    ],
  },
  {
    id: "learning-analytics",
    icon: "analytics",
    title: "Learning analytics and predictive insights",
    paragraphs: [
      "Learning analytics dashboards bring together engagement, progress, attendance and operational data so institutions can understand patterns across courses and cohorts. With enough good-quality history, [machine learning development](/services/machine-learning) can add indicators that suggest which learners may benefit from early contact.",
      "Predictions are probabilities, not facts, and they can reflect biases in historical data. They should prompt a human conversation, not trigger automatic consequences. We do not claim guaranteed predictions or improved student outcomes. Analytics design should be transparent to learners, tested for fairness across groups, and limited to data that is genuinely needed.",
    ],
  },
];

export const SOFTWARE = {
  intro:
    "Off-the-shelf platforms suit many organisations, and we will say so when one would meet your needs. Custom EdTech software makes sense when your learning model, assessment approach, integrations or commercial model are distinctive, or when existing tools force staff and learners into workarounds.",
  note: "The solutions below are **potential custom development projects**, designed around your requirements. They are not ready-made ClickMasters products.",
  items: [
    { icon: "course", title: "Custom learning management systems", text: "course delivery, learning paths, assessments, certificates and reporting shaped around how you teach. Our dedicated page covers [custom learning management system development](/solutions/lms-development) in detail." },
    { icon: "online", title: "Online learning and course platforms", text: "for selling and delivering courses to individuals or organisations." },
    { icon: "portal", title: "Student and learner portals", text: "that bring timetables, materials, progress, feedback and support into one place." },
    { icon: "dashboard", title: "Teacher and administrator dashboards", text: "for planning, tracking, marking and reporting." },
    { icon: "records", title: "Education management systems", text: "for admissions, enrolment, attendance, scheduling and records." },
    { icon: "assessment", title: "Assessment and examination platforms", text: "with question banks, secure delivery, marking workflows and moderation." },
    { icon: "certificate", title: "Training and certification platforms", text: "with CPD tracking, certificate issue and renewal reminders." },
    { icon: "rocket", title: "Subscription learning platforms and education SaaS", text: "built through our [MVP and SaaS development](/services/mvp-saas-development) service, with multi-tenant architecture, billing and onboarding." },
    { icon: "code", title: "APIs and third-party integrations", text: "that connect your platform with the wider education ecosystem." },
  ],
  teamIntro:
    "Our [web application development](/services/web-application-development) and [custom software development](/services/custom-software-development) teams build these with five considerations in mind:",
  considerations: [
    ["Scalability:", "architecture and cloud infrastructure that handle term-start peaks, exam periods and growth in learner numbers."],
    ["Usability:", "interfaces tested with real teachers and learners, including younger users and people using assistive technology."],
    ["Maintainability:", "documented, tested, version-controlled code that your team or another supplier can support."],
    ["Security:", "role-based access, encryption, secure authentication and audit logging."],
    ["Integration:", "standards-based APIs and careful data mapping, so the new platform fits your existing estate."],
  ],
};

export const USE_CASES_NOTE =
  "The following are illustrative use cases showing how the technology could be applied. They are not completed ClickMasters client projects, and real benefits depend on each organisation's learners, content, data and systems.";

export const USE_CASE_FIELDS = [
  ["problem", "Problem"],
  ["approach", "Approach"],
  ["benefit", "Benefit"],
  ["oversight", "Human oversight"],
] as const;

export const USE_CASES = [
  { icon: "assistant", title: "AI course-content assistant for learners", problem: "Online learners get stuck between tutor sessions and wait days for answers to questions already covered in the course materials.", approach: "A RAG-based assistant limited to approved course content, with citations and escalation to tutors.", benefit: "Learners get timely help, and tutors spend their time on deeper questions.", oversight: "Tutors review flagged conversations and common questions, content owners maintain the sources, and the assistant is clearly labelled as AI." },
  { icon: "adaptive", title: "Personalised learning recommendation platform", problem: "Learners on a large programme do not know which resources to focus on next.", approach: "Recommendations based on assessment results, progress and course structure, designed with educators.", benefit: "More relevant practice and better use of study time.", oversight: "Recommendations explain their reasoning, teachers can adjust rules and override suggestions, and fairness is reviewed across learner groups." },
  { icon: "support", title: "Student support chatbot", problem: "Student services teams answer the same questions about deadlines, fees, IT access and policies throughout the year, with peaks at enrolment.", approach: "An assistant grounded in approved student services content and integrated with the help desk.", benefit: "Faster answers to routine questions and fewer repetitive tickets.", oversight: "Wellbeing, safeguarding and complex queries are routed to trained staff immediately. Answers are regularly reviewed for accuracy." },
  { icon: "enrol", title: "Automated course enrolment workflow", problem: "Enrolment involves manual document checks, data entry into several systems and repeated chasing emails.", approach: "Workflow automation with document processing and integration with the student information system and learning platform.", benefit: "Quicker enrolment, fewer errors and less staff time spent on routine steps.", oversight: "Exceptions, eligibility decisions and incomplete applications go to staff. Automated steps are logged." },
  { icon: "analytics", title: "Learning progress dashboard", problem: "Tutors cannot easily see which learners are disengaging across modules and tools.", approach: "A dashboard combining platform activity, submission and attendance data, with optional early-indicator models.", benefit: "Earlier, better-informed conversations with learners who may need support.", oversight: "Indicators prompt staff judgement, not automatic actions. Learners are told how their data is used." },
  { icon: "assessment", title: "Assessment and feedback support system", problem: "Teachers spend evenings writing similar feedback on large numbers of assignments.", approach: "Rubric-based AI feedback drafts, automated marking for objective items and a moderation workflow.", benefit: "Faster, more consistent feedback and reduced marking workload.", oversight: "Teachers review, edit and approve all feedback and grades. Awarding body rules on AI use are followed for regulated qualifications." },
  { icon: "library", title: "Institutional knowledge assistant for staff", problem: "Staff struggle to find current policies, procedures and guidance across intranets and shared drives.", approach: "A permission-aware staff assistant using RAG over a version-controlled policy library.", benefit: "Quicker access to accurate guidance and fewer interruptions for senior colleagues.", oversight: "Answers cite sources for checking, policy owners keep documents current, and decisions remain with staff." },
  { icon: "certificate", title: "Online training and certification portal", problem: "A professional body manages CPD records, assessments and certificates through spreadsheets and email.", approach: "A custom portal with course delivery, online assessment, CPD logging, certificate issue and renewal reminders.", benefit: "A consistent member experience, accurate records and less administration.", oversight: "Assessment design, standards and certification decisions remain with the organisation's qualified assessors." },
  { icon: "admin", title: "Education administration automation", problem: "Office staff manually send attendance follow-ups, collect consent forms and compile routine reports.", approach: "Rules-based automation with templates and integration with existing management systems.", benefit: "Routine administration handled consistently, with staff time released for learners and families.", oversight: "Message templates are approved by the school or college, and safeguarding-related matters always follow human procedures." },
  { icon: "search", title: "Learning resource search and discovery", problem: "Teachers cannot find suitable resources in a large shared library because files are poorly tagged.", approach: "AI-assisted tagging by subject, topic, level and format, combined with semantic search.", benefit: "Faster resource discovery and better reuse of existing materials.", oversight: "Subject leads review tagging, and resource quality and licensing rights are checked before materials are shared." },
];

// VERIFY: no named MIS, VLE or SIS products are listed; add only verified integrations (pack, G4).
export const INTEGRATION = {
  intro:
    "Education software rarely stands alone. Education software integration connects your platform with the systems around it, so data is entered once and stays consistent. Depending on your estate, a platform may need to connect with:",
  systems: [
    { icon: "course", title: "Existing LMS or virtual learning environments", text: "where a new tool needs to sit alongside or inside the current platform." },
    { icon: "records", title: "Student information and management information systems", text: "the authoritative source for learner records, enrolments and groups." },
    { icon: "stack", title: "CRM and ERP systems", text: "for admissions, recruitment, finance and operations, built or extended through our [ERP and CRM development](/services/erp-crm-development) service where needed." },
    { icon: "payment", title: "Payment and subscription services", text: "for course sales and recurring billing." },
    { icon: "video", title: "Video conferencing and communication tools", text: "for live sessions, messaging and notifications." },
    { icon: "library", title: "Learning content repositories", text: "for courseware, media and third-party content." },
    { icon: "report", title: "Reporting and analytics systems", text: "for institutional and regulatory reporting." },
    { icon: "key", title: "Identity and authentication services", text: "for single sign-on with institutional accounts and role-based access." },
  ],
  note:
    "Good integration is about more than connecting APIs. We agree which system owns each data item and map fields carefully. We pass only the data each system needs, enforce permissions at every step, and use secure, authenticated connections with logging and error alerts. Integration options depend on what each supplier's system supports, so we assess them early, before committing to a design.",
};

export const RESPONSIBLE_INTRO =
  "Trust is essential in education. The considerations below shape how we design and build education software.";
export const RESPONSIBLE_DISCLAIMER =
  "This is general information, not legal advice. What applies depends on your organisation, your users, the product's purpose and where it is deployed. Some guidance applies across the UK; some applies to England only.";

// VERIFY: the pack asks for this section to be reviewed by a data protection or safeguarding adviser.
export const UK_WIDE = [
  { icon: "privacy", title: "UK GDPR and the Data Protection Act 2018", text: "Learner data must be processed lawfully, fairly and transparently, with clear purposes and appropriate security. Privacy information must be understandable by the people it describes, including children. A Data Protection Impact Assessment may be needed for higher-risk processing, such as AI features that profile learners." },
  { icon: "minimise", title: "Data minimisation and retention", text: "Collect only what each feature needs, keep it only as long as necessary, and avoid sending personal data to AI services unless there is a clear purpose and a lawful basis. Use AI services under terms that prevent learner data being used to train models." },
  { icon: "child", title: "Children's privacy and age-appropriate design", text: "Online services likely to be accessed by children must take account of the ICO's Age Appropriate Design Code (the Children's Code). This includes high-privacy default settings, no unnecessary profiling and no design that nudges children to share more data. The Data (Use and Access) Act 2025 also requires providers of such services to consider how children can best be protected and supported when deciding on data protection measures." },
  { icon: "safety", title: "Online safety", text: "Generative AI services that let users share content with each other, or that search the live web, may be in scope of the Online Safety Act 2023, which carries specific duties to protect children." },
  { icon: "eye", title: "Transparency", text: "Learners, parents and staff should know when they are interacting with AI, what it does and what its limits are." },
  { icon: "users", title: "Human oversight of consequential decisions", text: "Decisions about grades, progression, admissions, support needs or conduct should be made by people, with AI outputs as one input at most." },
  { icon: "scales", title: "Bias, accuracy and hallucination", text: "Generative AI can produce content that is inaccurate, biased or out of date, presented confidently as fact. We test with representative content and users, ground answers in approved sources, and monitor in use." },
  { icon: "access", title: "Accessibility and inclusive design", text: "We design to WCAG 2.2 AA. Public sector bodies, including universities and further education colleges, have specific duties under the Public Sector Bodies (Websites and Mobile Applications) Accessibility Regulations 2018. Schools have more limited exemptions, and the Equality Act 2010 applies more widely." },
  { icon: "lock", title: "Secure access controls and permissions", text: "Role-based access for learners, teachers, parents and administrators, enforced on the server. Strong authentication for staff accounts, encryption and audit logging." },
  { icon: "copyright", title: "Intellectual property and content rights", text: "Work created by learners and teachers may be protected by copyright. It should not be used to train or fine-tune AI models without the appropriate permission. Licensed course content must be used within the terms of its licence." },
];

export const ENGLAND = [
  ["DfE generative AI policy paper:", "professional judgement remains essential, AI-produced content must be checked, and technology should not replace the relationship between teachers and pupils."],
  ["DfE generative AI product safety standards:", "these set expectations for EdTech suppliers on stated purpose, filtering, monitoring and reporting, security, privacy, intellectual property, design and testing, and governance. Since January 2026 they also cover cognitive development, emotional and social development, mental health and manipulation."],
  ["Keeping children safe in education:", "statutory safeguarding guidance, and the DfE filtering and monitoring standards for schools and colleges. These apply to how schools manage online safety, including AI tools learners use."],
  ["DfE data protection in schools guidance", "and the digital and technology standards for schools and colleges."],
];

export const NATIONS_NOTE =
  "Scotland, Wales and Northern Ireland have their own education guidance and policies, so suppliers working across the UK should check the relevant frameworks for each nation.";

export const RESPONSIBLE_STATEMENT =
  "ClickMasters does not claim DfE approval, accreditation or certification against any of these standards. We use them as design references and provide the documentation organisations need for their own assessments.";

export const WHY_INTRO =
  "We are a software engineering and AI company. For education organisations, that means one team that can build the platform, integrate it with your systems and add AI where it genuinely helps.";

export const WHY = [
  { icon: "code", title: "Custom software development", text: "Education platforms shaped around your learners, staff and processes." },
  { icon: "ai", title: "AI and machine learning integration", text: "Recommendations, analytics and automation built on your data, with clear limits." },
  { icon: "library", title: "Generative AI and RAG development", text: "Assistants and content tools grounded in approved materials, with citations and review steps." },
  { icon: "portal", title: "Web application development", text: "Fast, accessible portals and dashboards for learners, teachers and administrators." },
  { icon: "rocket", title: "SaaS platform engineering", text: "Multi-tenant architecture, subscriptions and onboarding for EdTech businesses." },
  { icon: "records", title: "API and database architecture", text: "Clean data models and integrations that keep records consistent." },
  { icon: "automation", title: "Automation and system integration", text: "Routine work handled automatically, exceptions handled by people." },
  { icon: "scale", title: "Scalable cloud-oriented engineering", text: "Infrastructure that copes with term-start peaks, exam periods and growth." },
];

export const WHY_OUTRO =
  "The value is in the combination. Many AI pilots in education stall because the AI works but the platform, data and integrations around it do not. Many platforms miss opportunities because nobody asked where AI could reduce workload safely. We bring both disciplines to the same project, and we will be honest about where AI is not the right answer. If you are still deciding where AI fits, our [AI consulting and strategy](/services/ai-consulting-strategy) service can help you prioritise.";

export const PROCESS_INTRO =
  "The exact process, timeline and deliverables depend on the scope of each project. A typical engagement follows these stages.";

// VERIFY: confirm the support model behind stage 8 ("agreed as part of the engagement").
export const PROCESS = [
  { title: "Education and learning requirements discovery", text: "We learn who your learners and staff are, what you need to achieve, and which educational, operational and commercial outcomes matter most." },
  { title: "Workflow and technical assessment", text: "We map current workflows, systems and data, identify where technology can help, and flag where a simpler change or an existing tool would be better." },
  { title: "Solution architecture and product planning", text: "We define features, data flows, integrations, AI components and success measures, and agree a phased plan." },
  { title: "UX and platform design", text: "We design interfaces with teachers, learners and administrators, including accessibility and age-appropriate design where relevant." },
  { title: "Software and AI development", text: "We build in short iterations with regular demonstrations, so you see working software early and can steer priorities." },
  { title: "Integration and testing", text: "We connect the platform to your systems, then test functionality, performance, accessibility and AI behaviour using representative content and users." },
  { title: "Security and privacy review", text: "We review access controls, data flows, retention and supplier terms, and provide documentation to support your DPIA and safeguarding processes." },
  { title: "Deployment planning and ongoing improvement", text: "We plan roll-out around the academic calendar, train key users, monitor performance and improve the platform over time, with ongoing support agreed as part of the engagement." },
];

export const FAQS = [
  { q: "What are AI-powered EdTech solutions?", a: ["They are education software products and features that use AI techniques, such as language models, retrieval or machine learning, to support learning, teaching or administration. Examples include learning assistants, adaptive recommendations, assessment and feedback support, knowledge assistants and workflow automation. They work best when built into reliable platforms with clear educational purposes and human oversight."] },
  { q: "How can AI improve digital learning experiences?", a: ["AI can give learners timely help between sessions, recommend relevant resources, provide practice with immediate feedback, and make content available in accessible formats. It can also free up staff time by drafting feedback and handling routine administration. Research suggests the benefits depend on purposeful design: tools that simply do the work for learners can improve output without improving learning."] },
  { q: "Can you develop a custom learning management system?", a: ["Yes. We design and build learning management systems around your courses, learning paths, assessments, roles, reporting and integrations. Our [LMS development page](/solutions/lms-development) explains the features and options in more detail."] },
  { q: "What is an AI-powered learning assistant?", a: ["It is a conversational tool that helps learners understand concepts, work through problems and find information in course materials. A responsible learning assistant answers from approved content, encourages learners to think for themselves, is clearly labelled as AI, and passes questions it should not handle to a teacher or tutor."] },
  { q: "Can AI personalise learning pathways?", a: ["AI can recommend resources, practice and next steps based on progress and assessment data, and adapt the order or difficulty of content. It cannot fully understand every learner. Recommendations should be explainable, designed with educators and open to teacher and learner override."] },
  { q: "Can you integrate AI into an existing education platform?", a: ["Often, yes. AI features such as assistants, search, feedback support or analytics can be added to existing platforms through APIs, plug-ins or companion applications, depending on what the platform supports. We assess the integration options and data access before recommending an approach."] },
  { q: "How can education organisations use AI responsibly?", a: ["Start with a clear educational or operational purpose. Choose tools that do not use learner data or work for model training without permission. Keep people responsible for consequential decisions, check AI outputs for accuracy and bias, be transparent with learners and parents, and follow relevant guidance. In England, that includes the DfE's generative AI policy and product safety standards."] },
  { q: "How do you approach student data privacy?", a: ["We apply privacy by design. That means collecting only necessary data, enforcing role-based access, encrypting data, defining retention periods and documenting data flows to support your DPIA. Where children may use a service, we take account of the ICO's Children's Code, including high-privacy defaults and avoiding unnecessary profiling."] },
  { q: "Can you build education SaaS platforms?", a: ["Yes. We build subscription and multi-tenant education platforms, including onboarding, billing, role management and the architecture needed to serve many organisations securely from one product. Our MVP and SaaS development service covers launching a focused first version and scaling it."] },
  { q: "What is the difference between an LMS and an education management system?", a: ["An LMS focuses on learning: delivering courses and content, managing assessments and tracking progress. An education management system, often called a student information or management information system, focuses on administration: admissions, enrolment, attendance, timetables and official records. Many organisations need both, connected so learner data stays consistent."] },
];

export const FINAL_CTA = {
  title: "Build Education Technology",
  titleAccent: "That Works for Learners and Staff",
  body: {
    text: "Whether you are planning a new learning platform, adding AI to an existing product, reducing administrative workload or connecting systems that do not talk to each other, we can help you work out what to build and how to build it responsibly. Tell us about your learners, your challenges and your goals, and we will give you an honest view of what is feasible and the most sensible first step. Planning a learning platform? See our approach to [[link]].",
    link: { anchor: "custom LMS development", href: "/solutions/lms-development" },
  },
  bring: ["Who your learners and staff are", "The platforms you use today", "Where time and effort go", "Your safeguarding and data requirements", "What a good outcome looks like"],
};

export const SCHEMA_SERVICE = {
  name: "AI-Powered EdTech Solutions and Education Software Development",
  serviceType: ["AI-powered EdTech solutions and education software development", "Education workflow automation", "Education software integration"],
  description:
    "Learning platforms, AI learning assistants, adaptive learning, assessment and feedback support, knowledge assistants, workflow automation and integrations for UK schools, colleges, universities, training providers and EdTech businesses.",
  catalogName: "EdTech AI capabilities",
  catalog: AI_CAPABILITIES.map((c) => c.title),
  relatedServicePath: "/solutions/lms-development",
};
