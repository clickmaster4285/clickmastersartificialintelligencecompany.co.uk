/*
 * /services/mobile-app-development content, from
 * "ClickMasters Mobile App Development: SEO Content Pack" (24 Nov 2026).
 * Edit copy here; page.jsx only renders it.
 *
 * VERIFY comments mark business facts the pack says need owner confirmation.
 */

export const PATH = "/services/mobile-app-development";

export const SEO = {
  title: "Mobile App Development UK | iOS & Android Apps",
  description:
    "Mobile app development services for UK businesses: native iOS and Android or cross-platform Flutter and React Native apps, integrated, secure and supported.",
  ogTitle: "Mobile App Development Company UK | ClickMasters",
  ogDescription:
    "Customer, employee and e-commerce apps for iOS and Android, built natively or with Flutter and React Native, and connected to your business systems.",
};

export type LinkedText = { text: string; link?: { anchor: string; href: string } };

export const HERO = {
  eyebrow: "Mobile App Development UK",
  title: "Mobile App Development Services",
  titleAccent: "for iOS, Android and Cross-Platform Apps",
  lead:
    "ClickMasters designs and builds mobile apps that customers keep on their home screen and staff rely on in the field: ordering and booking apps, customer accounts, field-service tools and enterprise workflow apps. We develop natively in Swift and Kotlin or cross-platform with Flutter and React Native, connect each app securely to your business systems, and handle the release to the App Store and Google Play.",
  audience:
    "For founders launching an app-based product, businesses that want a direct channel to their customers, and operations teams whose people work away from a desk.",
  stats: [
    { value: "Swift · Kotlin", label: "Native builds" },
    { value: "Flutter · React Native", label: "Cross-platform" },
    { value: "6–8 weeks", label: "Typical MVP delivery" },
    { value: "App Store & Play", label: "Release handled" },
  ],
};

export const INVOLVES = {
  // **bold** markers are rendered as <strong>.
  p1: "Mobile app development is the design, engineering, testing, store release and ongoing maintenance of software installed on smartphones and tablets. A business app has two halves. The **app** on the device handles the interface, gestures, camera, location, notifications and anything stored locally. The **back end** on a server holds the authoritative data, applies business rules and connects to systems such as your CRM, ERP, payment provider or warehouse platform. The two talk through a secure API, and a well-designed app keeps working sensibly when that connection drops.",
  p2: {
    text: "Mobile apps are often one part of a wider system. A delivery business, for example, may need a customer app, a driver app and a back-office platform that share the same data. Our [[link]] cover how those pieces are scoped and built together.",
    link: { anchor: "custom software development solutions", href: "/services/custom-software-development" },
  } as LinkedText,
  whenTitle: "When an app is the right choice, and when it is not",
  appWhenTitle: "A mobile app makes sense when…",
  appWhen: [
    "people use the service repeatedly, so a home-screen icon and push notifications drive real engagement",
    "the experience depends on the camera, GPS, Bluetooth, biometrics or background location",
    "staff work in places with weak signal and need reliable offline capture",
    "you want a presence in the App Store and Google Play, with in-app payments or subscriptions",
  ],
  webWhenTitle: "A responsive website or web app may be enough when…",
  webWhen: [
    "most visitors arrive once, from search or adverts, and will not install anything",
    "the task is mainly forms, content and dashboards",
    "you need one release to reach every device instantly, without store review",
    "budget only allows one product, and browser access covers the core need",
  ],
  webOutro: {
    text: "If browser access will do, our [[link]], including installable Progressive Web Apps, are often the faster and cheaper route. Many businesses launch on the web first and add a native app once usage justifies it.",
    link: { anchor: "web application development services", href: "/services/web-application-development" },
  } as LinkedText,
};

export const SERVICES_INTRO =
  "Each service below solves a different problem. Most projects combine a delivery approach (native or cross-platform) with an app type and the back end that powers it.";

export type Service = { id: string; icon: string; title: string; intro: string; fields: { label: string; text: string }[]; note?: string };

// VERIFY (pack): native Swift/Kotlin delivery and named features (Live Activities,
// Apple Watch, HealthKit, widgets, NFC); Ionic still offered; MDM and private distribution.
export const SERVICES: Service[] = [
  {
    id: "custom-mobile-app-development",
    icon: "custom",
    title: "Custom Mobile App Development",
    intro: "An app designed around your users, brand and process, rather than a template or white-label product.",
    fields: [
      { label: "Who needs it", text: "Businesses whose customer journey or field process is a competitive advantage, and founders whose app is the product." },
      { label: "Problems solved", text: "Template apps that look generic, cannot integrate with your systems and charge per-feature fees." },
      { label: "Functionality", text: "Accounts and sign-in, personalised content, ordering or booking, notifications, in-app messaging and analytics." },
      { label: "Technical considerations", text: "Choosing native or cross-platform from your feature list, user base and budget before design starts, because that choice is expensive to reverse." },
      { label: "Business value", text: "A direct, branded channel to customers that you own, with data on how they actually use it." },
    ],
  },
  {
    id: "android-app-development",
    icon: "android",
    title: "Android App Development",
    intro: "Native Android apps written in Kotlin with Google's Android SDK and Jetpack libraries, built for the wide range of Android phones, tablets and rugged devices.",
    fields: [
      { label: "Who needs it", text: "Businesses with Android-heavy audiences, and operations using rugged Android scanners or managed company devices." },
      { label: "Problems solved", text: "Inconsistent behaviour across many screen sizes, manufacturers and OS versions." },
      { label: "Functionality", text: "Barcode and NFC scanning, background tasks with WorkManager, home-screen widgets, and kiosk or managed-device modes." },
      { label: "Technical considerations", text: "A defined device and OS support matrix, battery-friendly background work, and Google Play's target API level requirements, which rise every year." },
      { label: "Integrations", text: "Mobile device management, Google sign-in, Firebase Cloud Messaging, Google Pay." },
    ],
  },
  {
    id: "ios-app-development",
    icon: "ios",
    title: "iOS App Development",
    intro: "Native iPhone and iPad apps written in Swift with Apple's SDKs (including SwiftUI), designed to feel at home on Apple devices.",
    fields: [
      { label: "Who needs it", text: "Consumer brands with iPhone-heavy audiences, premium services and apps that depend on Apple-only features." },
      { label: "Problems solved", text: "Apps that feel out of place on iOS, or that are rejected by App Review for guideline issues." },
      { label: "Functionality", text: "Face ID sign-in, Apple Pay, widgets and Live Activities, HealthKit and Apple Watch companions where relevant." },
      { label: "Technical considerations", text: "Apple's Human Interface Guidelines and App Review Guidelines, privacy manifests and App Tracking Transparency, and builds made with current Xcode versions as Apple requires." },
      { label: "Integrations", text: "Sign in with Apple, Apple Push Notification service, StoreKit for in-app purchases and subscriptions." },
    ],
  },
  {
    id: "cross-platform-app-development",
    icon: "cross",
    title: "Cross-Platform App Development",
    intro: "One shared codebase that produces both iOS and Android apps, with native modules where a platform needs something specific.",
    fields: [
      { label: "Who needs it", text: "Start-ups validating a product, and businesses that need both platforms on one budget and one release schedule." },
      { label: "Problems solved", text: "Paying twice for the same features and keeping two apps in step." },
      { label: "Functionality", text: "Most business functionality: accounts, lists, forms, maps, payments, camera and notifications." },
      { label: "Technical considerations", text: "Plan for the work that stays platform-specific, such as permissions, payments and notification behaviour, and test on real devices on both platforms." },
      { label: "Business value", text: "Faster time to market and one team maintaining one codebase." },
    ],
    note: "We also work with Ionic for hybrid apps built on web technologies, which suit content-led apps and teams with strong web skills.",
  },
  {
    id: "react-native-app-development",
    icon: "react",
    title: "React Native App Development",
    intro: "Cross-platform apps written in TypeScript with React, rendering real native components on each platform.",
    fields: [
      { label: "Who needs it", text: "Businesses with React web products or teams, who want to share skills, logic and sometimes code between web and mobile." },
      { label: "Functionality", text: "Native look and feel, over-the-air updates for JavaScript changes within store rules, and access to device features through native modules." },
      { label: "Technical considerations", text: "React Native's New Architecture improves communication between JavaScript and native code. Third-party library quality varies, so we vet dependencies and keep upgrades regular." },
      { label: "Use case", text: "A retailer with a React website adding a loyalty and ordering app that reuses its validation rules and API client." },
    ],
  },
  {
    id: "flutter-app-development",
    icon: "flutter",
    title: "Flutter App Development",
    intro: "Cross-platform apps written in Dart with Google's Flutter framework, which draws its own interface and so looks the same on every device.",
    fields: [
      { label: "Who needs it", text: "Brands that want a highly custom, consistent design on iOS and Android, and products with rich animation." },
      { label: "Functionality", text: "Pixel-consistent UI, smooth animation, and plugins for camera, maps, payments and notifications." },
      { label: "Technical considerations", text: "Because Flutter does not use the platform's own components, we check that platform conventions such as back navigation, text scaling and accessibility labels still behave as users expect." },
      { label: "Use case", text: "A booking app with a distinctive brand identity, where design consistency across platforms matters more than platform-default styling." },
    ],
  },
  {
    id: "enterprise-mobile-app-development",
    icon: "enterprise",
    title: "Enterprise Mobile App Development",
    intro: "Apps for employees and partners that connect to core systems, enforce company security policy and work in the field.",
    fields: [
      { label: "Who needs it", text: "Organisations with field engineers, drivers, inspectors, sales teams or warehouse staff." },
      { label: "Problems solved", text: "Paper forms, photos sent by messaging apps, and data re-keyed back at the office." },
      { label: "Functionality", text: "Single sign-on, offline job lists and forms, photo and signature capture, barcode scanning and GPS-stamped records." },
      { label: "Technical considerations", text: "Deployment through mobile device management, remote wipe, offline sync with conflict rules, and private distribution outside the public stores where appropriate." },
      { label: "Integrations", text: "ERP, CRM, job management and HR systems, plus the company's identity provider." },
    ],
  },
  {
    id: "ecommerce-mobile-app-development",
    icon: "ecommerce",
    title: "E-commerce Mobile App Development",
    intro: "Shopping and ordering apps that turn repeat customers into loyal ones through faster checkout, saved preferences and timely notifications.",
    fields: [
      { label: "Who needs it", text: "Retailers, food and drink brands, wholesalers and marketplaces with returning customers." },
      { label: "Functionality", text: "Catalogue and search, basket and wallet payments, order tracking, loyalty, re-ordering and personalised offers." },
      { label: "Technical considerations", text: "Stock and price sync with your e-commerce platform, payment SDKs that keep card data out of your systems, and app store rules on digital versus physical goods." },
      { label: "Business value", text: "A channel where you can reach customers directly with notifications rather than paying for every visit." },
    ],
  },
  {
    id: "mobile-app-backend-api-development",
    icon: "backend",
    title: "Mobile App Backend and API Development",
    intro: "The server side that every serious app depends on: APIs, databases, authentication, notifications and integrations.",
    fields: [
      { label: "Who needs it", text: "Every app with accounts, shared data or business integrations, and businesses whose existing systems lack a mobile-ready API." },
      { label: "Functionality", text: "REST APIs, token-based authentication, push notification delivery, file and image handling, admin dashboards and analytics." },
      { label: "Technical considerations", text: "API versioning, because old app versions stay installed for months; payloads sized for mobile networks; and idempotent endpoints so retried requests on flaky connections do not create duplicates." },
      { label: "Technologies", text: "Node.js or Python services, PostgreSQL, MongoDB or MySQL, Firebase where it fits, hosted on AWS, Azure or Google Cloud." },
    ],
  },
  {
    // VERIFY: 24/7 assistance for critical systems is current.
    id: "mobile-app-maintenance-support",
    icon: "maintenance",
    title: "Mobile App Maintenance and Support",
    intro: "Keeping an app compatible, secure and improving after launch, as Apple and Google change their platforms every year.",
    fields: [
      { label: "Who needs it", text: "Any business with a live app, including apps originally built by another team." },
      { label: "What is included", text: "Annual OS compatibility updates, store requirement changes, crash monitoring and fixes, dependency and security updates, performance work and new features, with flexible support plans and 24/7 assistance for critical systems." },
      { label: "Technical considerations", text: "Forced-update or minimum-version checks for breaking changes, staged rollouts, and a regression test suite on real devices." },
      { label: "Business value", text: "No sudden removal from the stores, and fewer one-star reviews caused by crashes." },
    ],
  },
];

export const TYPES_INTRO =
  "Each category has its own functionality and requirements. The scenarios are illustrative examples, not descriptions of specific client projects.";

export const TYPES = [
  { icon: "ecommerce", title: "E-commerce apps", text: "Catalogue, wallet payments, order tracking and loyalty.", requirement: "Live stock and pricing from the same platform as the website, so app and web never disagree." },
  { icon: "business", title: "Business management apps", text: "Jobs, approvals, stock checks and dashboards for managers on the move.", requirement: "Role-based views and the same data as the office system." },
  { icon: "customer", title: "Customer-facing apps", text: "Accounts, self-service, support chat and personalised offers.", requirement: "Fast sign-in with biometrics and clear consent for notifications." },
  { icon: "employee", title: "Employee apps", text: "Rotas, timesheets, leave, internal news and training.", requirement: "Single sign-on and access removed automatically when someone leaves." },
  { icon: "booking", title: "Booking and appointment apps", text: "Availability, booking, reminders, rescheduling and deposits.", requirement: "Real-time slot locking so two people cannot book the same time." },
  { icon: "health", title: "Healthcare apps", text: "Appointments, secure messaging, remote monitoring and patient education.", requirement: "Special category data under UK GDPR; NHS DTAC and DSPT where an app connects to NHS services; some clinical apps are regulated as medical devices by the MHRA." },
  { icon: "education", title: "Education apps", text: "Courses, quizzes, progress tracking and offline lessons.", requirement: "The ICO Children's Code where under-18s use the app, and accessibility for all learners." },
  { icon: "logistics", title: "Delivery and logistics apps", text: "Driver job lists, navigation hand-off, proof of delivery and live tracking.", requirement: "Background location that respects battery and privacy rules, and offline capture." },
  { icon: "finance", title: "Finance and payment apps", text: "Balances, payments, invoices and expense capture.", requirement: "Strong customer authentication, device binding and certified payment providers." },
  { icon: "workflow", title: "Enterprise workflow apps", text: "Inspections, checklists, sign-offs and incident reporting.", requirement: "Offline forms, photo evidence and an audit trail that syncs to the back office." },
];

export const TYPES_OUTRO: LinkedText = {
  text: "Many of these apps sit on top of a business platform. If you need the system behind the app too, our [[link]] for ERP, CRM, SaaS and fleet management provide that foundation.",
  link: { anchor: "intelligent business software solutions", href: "/solutions" },
};

export const NATIVE = {
  intro:
    "No approach is right for every app. The decision depends on the features you need, your users' devices, your budget and who will maintain the app afterwards.",
  // **bold** markers are rendered as <strong>.
  columns: [
    {
      title: "Native Android",
      icon: "android",
      points: [
        "**Kotlin** is Google's preferred language for Android, with Jetpack libraries and Jetpack Compose for modern interfaces.",
        "Immediate access to new Android APIs, deep background-processing control, and support for specialist hardware such as rugged scanners.",
        "Best performance and fine control over memory and battery use.",
      ],
    },
    {
      title: "Native iOS",
      icon: "ios",
      points: [
        "**Swift** with SwiftUI and UIKit in Xcode, Apple's own toolchain.",
        "Day-one access to new iOS features: widgets, Live Activities, App Clips, HealthKit and Apple Watch.",
        "The most natural iOS feel and the closest alignment with Apple's guidelines.",
      ],
    },
    {
      title: "Cross-platform",
      icon: "cross",
      points: [
        "**React Native** uses TypeScript and native components; a strong fit for teams with React skills.",
        "**Flutter** uses Dart and its own rendering engine; a strong fit for custom, consistent design.",
        "A shared codebase for most features, with platform-specific modules where needed, such as payments, permissions and background tasks.",
      ],
    },
  ],
  table: {
    headers: ["Factor", "Native (Swift + Kotlin)", "Cross-platform (Flutter / React Native)"],
    rows: [
      ["Performance", "Highest ceiling, especially for graphics, AR and heavy processing", "Comfortably smooth for most business apps; heavy workloads may need native modules"],
      ["Development cost", "Two codebases, so typically higher", "One main codebase, so usually lower for both platforms"],
      ["Time to market", "Longer if both platforms launch together", "Faster for a two-platform launch"],
      ["User experience", "Fully platform-native look and behaviour", "Near-native (React Native) or consistent custom design (Flutter)"],
      ["Device capabilities", "Every API, available immediately", "Most capabilities through plugins; newest APIs may need custom native code"],
      ["Maintenance", "Two apps to update for each OS release", "One codebase, plus framework and plugin upgrades"],
      ["Long-term scalability", "Excellent; needs two specialist skill sets", "Excellent for most products; depends on framework health and plugin quality"],
    ],
  },
  choose: [
    { title: "Choose native when…", text: "the app relies on new platform features, heavy graphics, AR, specialist hardware, or when one platform dominates your audience.", tone: "purple" },
    { title: "Choose cross-platform when…", text: "you need iOS and Android together on one budget, and features are mostly forms, lists, maps, payments and notifications.", tone: "teal" },
    { title: "Choose a hybrid route when…", text: "most of the app can be shared, but one or two features need native code. Cross-platform frameworks support this directly.", tone: "sun" },
  ],
};

export const STACK_INTRO =
  "Each technology has a specific job. We choose them for the app's needs and for how easily it can be maintained, not to fill a list.";

// `logos` are keys understood by TechLogo (app/Components/TechLogoGroups.jsx).
export const STACK = [
  { tech: "Swift", logos: ["Swift"], purpose: "Native iOS and iPadOS apps with Apple's SDKs" },
  { tech: "Kotlin", logos: ["Kotlin"], purpose: "Native Android apps with the Android SDK and Jetpack" },
  { tech: "Flutter (Dart)", logos: ["Flutter"], purpose: "Cross-platform apps with a single, consistent custom interface" },
  { tech: "React Native (TypeScript)", logos: ["React Native"], purpose: "Cross-platform apps using native components and React skills" },
  { tech: "Ionic", logos: ["Ionic"], purpose: "Hybrid apps built with web technologies for content-led use cases" },
  { tech: "Node.js, Python", logos: ["Node.js", "Python & Django"], purpose: "APIs, business logic and integrations behind the app" },
  { tech: "PostgreSQL, MySQL, MongoDB", logos: ["PostgreSQL", "MySQL", "MongoDB"], purpose: "Server-side data, chosen by data shape and reporting needs" },
  { tech: "Firebase", logos: ["Firebase"], purpose: "Push messaging, analytics, crash reporting and, where it fits, a managed back end for simpler apps" },
  { tech: "AWS, Azure, Google Cloud", logos: ["AWS", "Azure", "Google Cloud"], purpose: "Hosting, file storage and scalable back-end infrastructure" },
  { tech: "REST APIs, OAuth 2.0", logos: [], purpose: "Secure communication and sign-in between app and back end" },
  { tech: "APNs and FCM", logos: [], purpose: "Apple and Google push notification services" },
  { tech: "Payment SDKs, Apple Pay, Google Pay", logos: [], purpose: "Secure payments without storing card details in the app" },
];

export const PROCESS_INTRO =
  "Ten stages, delivered in two-week sprints with weekly demos on real devices. Most MVPs are ready in 6–8 weeks, plus time for store review; larger enterprise apps typically take 3–6 months.";

export const PROCESS = [
  { title: "Discovery and Requirement Analysis", activities: "User research, journeys, feature prioritisation, review of existing systems.", deliverables: "Prioritised feature list and success metrics.", check: "Every feature traced to a user need." },
  { title: "Product Strategy and Technical Planning", activities: "Platform choice, native vs cross-platform decision, OS support range, release plan.", deliverables: "Technical approach and estimate with milestones.", check: "Approach validated against the hardest feature first." },
  { title: "Mobile UI/UX Design", activities: "Wireframes and clickable prototypes following iOS and Android conventions, with accessibility built in.", deliverables: "Tested prototype and design system.", check: "Usability tests on real phones." },
  { title: "App Architecture", activities: "App structure, state management, offline and sync strategy, API contracts.", deliverables: "Architecture document and API specification.", check: "Peer review of the approach to offline use, security and scale." },
  { title: "Frontend and Mobile Development", activities: "Screens, navigation, device features and local storage, in sprints.", deliverables: "Test builds every sprint through TestFlight and Play internal testing.", check: "Code review and unit tests." },
  { title: "Backend and API Integration", activities: "APIs, authentication, push notifications, payments and business-system integrations.", deliverables: "Documented, versioned API.", check: "Integration tests against sandbox systems." },
  { title: "Testing and Quality Assurance", activities: "Functional, UI and regression testing across a device and OS matrix, plus beta testing.", deliverables: "Test reports and resolved defect log.", check: "Real-device coverage of your users' most common phones." },
  { title: "Security and Performance Testing", activities: "Checks against OWASP MASVS, startup time, memory, battery, slow-network and offline testing.", deliverables: "Security and performance report.", check: "Issues fixed before submission." },
  { title: "App Store and Google Play Deployment", activities: "Store listings, privacy disclosures, screenshots, submission, review responses and staged rollout.", deliverables: "Live apps on both stores.", check: "Pre-submission review against store guidelines." },
  { title: "Monitoring, Maintenance and Updates", activities: "Crash and performance monitoring, OS updates, store requirement changes, new features.", deliverables: "Support plan and release roadmap.", check: "Crash-free session rate tracked every release." },
];

export const RELEASE_STEPS = [
  { title: "Build & test", sub: "CI pipeline", tone: "purple" },
  { title: "Beta", sub: "TestFlight · Play", tone: "purple" },
  { title: "Store review", sub: "Apple · Google", tone: "sun" },
  { title: "Staged rollout", sub: "e.g. 5% → 100%", tone: "teal" },
  { title: "Monitor", sub: "Crashes · speed", tone: "teal" },
] as const;

export const SECURITY_INTRO =
  "A mobile app runs on devices you do not control, so it must assume it can be inspected, copied or used on a compromised phone. We design against the OWASP Mobile Application Security Verification Standard (MASVS) and test with the OWASP Mobile Application Security Testing Guide (MASTG). No app can be guaranteed unbreachable, but these controls address the most common weaknesses.";

export const SECURITY = [
  { icon: "auth", title: "Secure authentication", text: "OAuth 2.0 with PKCE, short-lived access tokens, and biometric unlock through the platform's secure APIs." },
  { icon: "rbac", title: "Authorisation", text: "Every permission check happens on the server. The app never decides on its own what a user may access." },
  { icon: "api", title: "Secure API communication", text: "TLS for all traffic, certificate validation, and certificate pinning where the risk justifies its maintenance cost." },
  { icon: "lock", title: "Data encryption", text: "Encryption in transit and at rest on the server, plus encrypted local databases for sensitive offline data." },
  { icon: "keystore", title: "Secure local storage", text: "Tokens and secrets in the iOS Keychain or Android Keystore, never in plain preferences or files." },
  { icon: "session", title: "Session management", text: "Token refresh and revocation, sign-out on all devices, and automatic lock after inactivity for sensitive apps." },
  { icon: "permission", title: "Permission management", text: "Ask only for the camera, location or contacts access you need, at the moment you need it, with a clear reason." },
  { icon: "deps", title: "Dependency management", text: "Vetted SDKs and libraries, vulnerability scanning and regular updates." },
  { icon: "payment", title: "Secure payments", text: "Certified payment SDKs, Apple Pay and Google Pay, so card data never touches your app or servers." },
  { icon: "privacy", title: "Privacy", text: "UK GDPR-aware data handling, accurate App Store privacy details and Google Play Data safety declarations, consent before tracking, and in-app account deletion, which both stores require for apps that let users create accounts." },
  { icon: "test", title: "Application testing", text: "Static analysis, MASVS-based checks and testing of release builds, including code obfuscation where appropriate." },
  { icon: "updates", title: "Ongoing updates", text: "Security patches and OS updates as part of maintenance, with NDAs signed on request before sensitive details are shared." },
];

export const PERFORMANCE_INTRO =
  "People judge an app in seconds. Slow launches, janky scrolling, battery drain and crashes lead to uninstalls and poor reviews, and poor ratings reduce how often an app is chosen in the stores. Performance is planned from the architecture stage and measured on real devices.";

export const OFFLINE_STEPS = {
  phone: [
    { title: "User action", sub: "e.g. complete job", tone: "plain" },
    { title: "Local database", sub: "Instant update", tone: "teal" },
    { title: "Outbox queue", sub: "Pending changes", tone: "teal" },
  ],
  online: [
    { title: "Sync API", sub: "Idempotent", tone: "purple" },
    { title: "Conflict rules", sub: "Latest / merge", tone: "sun" },
  ],
} as const;

export const PERFORMANCE = [
  { icon: "speed", title: "Loading performance", text: "Fast cold start by deferring non-essential work, with cached content shown immediately." },
  { icon: "smooth", title: "Smooth navigation", text: "Interfaces that keep up with the screen's refresh rate, with efficient lists and images." },
  { icon: "battery", title: "Battery efficiency", text: "Background work scheduled through the platform (WorkManager, BackgroundTasks) and location used only when needed." },
  { icon: "network", title: "Network optimisation", text: "Pagination, compression, caching and retries designed for mobile connections." },
  { icon: "offline", title: "Offline functionality", text: "Local storage and sync queues where users work without reliable signal." },
  { icon: "push", title: "Push notifications", text: "Targeted, permission-based messages through APNs and FCM, with deep links to the right screen." },
  { icon: "a11y", title: "Accessibility", text: "VoiceOver and TalkBack labels, dynamic text sizes, contrast and touch-target sizing." },
  { icon: "devices", title: "Device compatibility", text: "An agreed OS and device support matrix tested on real hardware." },
  { icon: "monitor", title: "Monitoring and crash reporting", text: "Crash reporting and performance monitoring, for example with Firebase tools, so issues are fixed before reviews mention them." },
];

export const INDUSTRIES = [
  { icon: "health", title: "Healthcare & MedTech", text: "Appointment booking, remote monitoring, secure messaging and patient education.", considerations: ["UK GDPR special category data", "NHS DTAC and DSPT", "MHRA rules for clinical apps"] },
  { icon: "finance", title: "Finance & Fintech", text: "Account overviews, payments, expense capture and onboarding with identity checks.", considerations: ["Strong customer authentication", "Device binding", "FCA expectations"] },
  { icon: "ecommerce", title: "Retail & E-Commerce", text: "Shopping, loyalty, click-and-collect and personalised offers.", considerations: ["Store rules on digital goods", "Payment SDKs", "Stock sync"] },
  { icon: "logistics", title: "Supply Chain & Logistics", text: "Driver apps, proof of delivery, scanning and live tracking.", considerations: ["Background location", "Offline capture", "Rugged devices"] },
  { icon: "education", title: "EdTech & E-Learning", text: "Mobile learning, quizzes, offline lessons and progress tracking.", considerations: ["ICO Children's Code", "Accessibility"] },
  { icon: "realestate", title: "Real Estate", text: "Property search, viewing bookings, tenant maintenance requests and inspections.", considerations: ["Photo capture", "Document signing", "Reminders"] },
  { icon: "manufacturing", title: "Smart Manufacturing", text: "Inspections, maintenance requests and shop-floor data capture on tablets.", considerations: ["Managed devices", "Offline forms", "Traceability"] },
  { icon: "saas", title: "Enterprise SaaS", text: "Mobile companions to web platforms, with notifications and approvals on the go.", considerations: ["Single sign-on", "Tenant-aware APIs"] },
];

export const WHY = [
  { icon: "business", title: "Business-focused app development", text: "We start from the business outcome and the people using the app, then choose features and platforms to match." },
  { icon: "cross", title: "Native and cross-platform skills", text: "Swift, Kotlin, Flutter, React Native and Ionic, so the recommendation follows your needs rather than one favoured tool." },
  { icon: "backend", title: "The back end as well as the app", text: "APIs, databases, cloud hosting and web dashboards built by the same team, so app and system are designed together." },
  { icon: "api", title: "Integration experience", text: "Secure integrations with CRMs, ERPs, payment gateways, accounting tools and legacy software." },
  { icon: "shield", title: "Security-conscious engineering", text: "OWASP-based practice, GDPR best practice, encryption, role-based access and regular security testing." },
  { icon: "updates", title: "Support after launch", text: "Two-week sprints with weekly demos during the build, then maintenance plans that keep apps current with every OS release." },
];

export const COST = {
  intro:
    "Two apps that both \"let customers book appointments\" can differ several times over in cost, depending on platforms, integrations and offline needs. An accurate estimate needs a clear scope. These are the factors that move it most.",
  factors: [
    { icon: "complexity", title: "App complexity", text: "Screens, user journeys, business rules and edge cases." },
    { icon: "devices", title: "Number of platforms", text: "iOS only, Android only, or both, plus tablets or wearables." },
    { icon: "cross", title: "Native vs cross-platform", text: "Two native codebases usually cost more than one shared codebase." },
    { icon: "features", title: "Features", text: "Payments, chat, maps, offline sync and media each add design, build and testing time." },
    { icon: "backend", title: "Backend complexity", text: "A new API, admin dashboard and notification service, or integration with an existing one." },
    { icon: "api", title: "Third-party integrations", text: "CRM, ERP, payment, identity and analytics providers." },
    { icon: "design", title: "UI/UX requirements", text: "Custom animation and design systems versus standard platform components." },
    { icon: "shield", title: "Security", text: "Sensitive data, regulated sectors and security testing depth." },
    { icon: "test", title: "Testing", text: "Size of the device and OS matrix and level of automation." },
    { icon: "deploy", title: "App deployment", text: "Store accounts, listings, privacy declarations and review cycles." },
    { icon: "maintenance", title: "Maintenance", text: "Annual OS updates, store requirement changes, monitoring and new features." },
  ],
  outro:
    "After a free consultation, we provide a clear estimate with milestones on a fixed-price or time-and-materials basis, including expected hosting, store and maintenance costs, so the full cost of owning the app is visible from the start.",
};

export const FAQS: { q: string; a: string[] }[] = [
  { q: "How much does mobile app development cost in the UK?", a: ["The cost depends on complexity, the number of platforms, native or cross-platform development, the number of features, the back end, integrations, design, security, testing, store deployment and ongoing maintenance. A focused single-purpose MVP costs far less than an enterprise app with offline sync and several integrations. ClickMasters offers fixed-price and time-and-materials models and gives a clear estimate with milestones after a free consultation."] },
  { q: "How long does it take to develop a mobile app?", a: ["Most MVPs are delivered in 6–8 weeks, and larger enterprise apps typically take 3–6 months. Allow extra time for App Store and Google Play review, especially for a first submission. Scope, integrations, the number of platforms and how quickly feedback comes back all affect the timeline."] },
  { q: "What is the difference between native and cross-platform apps?", a: ["Native apps are built separately for each platform, in Swift for iOS and Kotlin for Android, with full and immediate access to every device feature. Cross-platform apps share one codebase, written in Flutter or React Native, which produces both apps, usually at lower cost and with a faster launch. Most business apps work very well cross-platform. Apps that depend on cutting-edge platform features, heavy graphics or specialist hardware often benefit from native development."] },
  { q: "Can one app work on both Android and iOS?", a: ["Yes. With Flutter or React Native, one shared codebase produces an iOS app and an Android app that are published separately to each store. A small amount of platform-specific code is usually still needed for things like permissions, payments and notifications, and both versions must be tested on real devices."] },
  { q: "Should I choose React Native or Flutter?", a: ["Both are mature, well-supported choices. React Native uses TypeScript and renders real native components, which suits teams with React web experience and apps that should look platform-standard. Flutter uses Dart and draws its own interface, which suits brands wanting a highly custom, identical design on every device. We recommend one based on your design goals, existing team skills, required plugins and long-term maintenance."] },
  { q: "Can you build custom business applications?", a: ["Yes. We build customer apps, employee and field-service apps, booking systems, e-commerce apps and enterprise workflow apps, along with the APIs and admin dashboards behind them. Each is designed around your process and connected to the systems you already use."] },
  { q: "How do mobile apps connect to backend systems?", a: ["The app talks to a secure back-end API over HTTPS, using tokens to identify the signed-in user. The API applies business rules and connects to your database and systems such as CRM, ERP, payment providers and stock platforms. Push notifications are delivered through Apple's and Google's notification services. Where users work offline, changes are queued on the device and synced when the connection returns."] },
  { q: "How do you secure mobile applications?", a: ["We follow the OWASP Mobile Application Security Verification Standard. That means secure sign-in with short-lived tokens, all authorisation checked on the server, encrypted communication, secrets stored in the iOS Keychain or Android Keystore, minimal device permissions, vetted dependencies, certified payment SDKs and security testing of release builds. Regular updates keep the app protected as platforms and libraries change."] },
  { q: "Can an existing app be upgraded?", a: ["Yes. We audit the code, dependencies, store compliance, crash data and reviews, then recommend whether to update the existing app, refactor it or rebuild. That might mean moving to Flutter or React Native, or to SwiftUI or Jetpack Compose. Where possible we keep the same store listings, so existing users simply receive an update."] },
  { q: "Do you provide app maintenance and support?", a: ["Yes. Apple and Google release major OS updates every year and regularly raise store requirements, so apps need ongoing care. Our maintenance covers compatibility updates, crash monitoring and fixes, security and dependency updates, performance work and new features, with flexible support plans and 24/7 assistance for critical systems."] },
  {
    // VERIFY: client-owned developer accounts are standard practice (pack note).
    q: "Can you publish applications to Google Play and the Apple App Store?",
    a: ["Yes. We prepare store listings, screenshots, privacy disclosures and builds, submit them for review, respond to reviewer feedback and manage staged rollouts. We recommend that apps are published under your own Apple Developer and Google Play developer accounts, so your business owns the listings, reviews and customer relationship."],
  },
  { q: "How do I start a mobile app development project?", a: ["Share your business objective, who the users are, the key features, which platforms matter and the systems the app must connect to. Sketches or examples of apps you like are useful but not required. We will arrange a free consultation, recommend the right platform approach and follow up with a scoped estimate and milestones. We usually respond within a few hours."] },
];

export const FINAL_CTA = {
  title: "Have an App Idea or an Operational Problem?",
  titleAccent: "Let's Plan the Right Mobile App.",
  body: {
    text: "Tell us what the app must achieve for the business, who will use it, the features that matter most, whether you need iOS, Android or both, the systems it must connect to, and how you expect it to grow. When you are ready, [[link]] with our team and we will recommend a practical way forward.",
    link: { anchor: "discuss your mobile application requirements", href: "/contact" },
  } as LinkedText,
  bring: ["Business objectives", "Target users", "Required functionality", "iOS, Android or both", "Integrations", "Scale and long-term maintenance"],
};

export const SCHEMA_SERVICE = {
  name: "Mobile App Development",
  serviceType: ["Mobile app development", "iOS app development", "Android app development", "Cross-platform app development"],
  description:
    "Design, development, store release and maintenance of native iOS and Android and cross-platform Flutter and React Native apps, with secure back-end APIs and business-system integration.",
  catalogName: "Mobile app development services",
  catalog: SERVICES.map((s) => s.title),
  relatedServicePath: "/services/custom-software-development",
};
