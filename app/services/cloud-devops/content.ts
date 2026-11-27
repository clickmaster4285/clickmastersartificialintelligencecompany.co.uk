/*
 * /services/cloud-devops content, from
 * "ClickMasters Cloud and DevOps Development Services: SEO Content Pack"
 * (26 Nov 2026). Edit copy here; ./page.jsx only renders it.
 *
 * Body links: exactly the pack's four (custom software development, web
 * application development, AI automation services, MVP and SaaS
 * development). /solutions/saas-platform is not published, so the pack
 * substitutes /services/mvp-saas-development. /technologies/aws-cloud is a
 * noindex placeholder and is deliberately not linked.
 *
 * VERIFY (owner): confirm whether Ansible, Helm, GitLab CI or Argo CD are
 * used (not named until confirmed), and whether ongoing managed support with
 * response times is offered as a defined service. No cloud-provider
 * partnership or certification is claimed.
 */

export const PATH = "/services/cloud-devops";

export const SEO = {
  // Rendered as "Cloud and DevOps Development Services UK | ClickMasters" (55 chars).
  title: "Cloud and DevOps Development Services UK",
  // The pack's description (160 chars), trimmed to 155.
  description:
    "Cloud and DevOps services for UK businesses: cloud architecture, migration, CI/CD, Docker, Kubernetes and infrastructure as code on AWS, Azure and GCP.",
  ogTitle: "Cloud and DevOps Development Services UK | ClickMasters",
  ogDescription:
    "Cloud architecture, migration and automated software delivery for UK businesses: CI/CD, containers and infrastructure as code, sized to what you actually need.",
};

export type LinkedText = { text: string; link?: { anchor: string; href: string } };

const IMG = "/assets/Services/cloud-devops";

/**
 * Diagrams drawn for this page (alt text from the pack's image table) and HD
 * photos from Unsplash (Unsplash License: free for commercial use, no
 * attribution required; source IDs kept below). No provider logos are used,
 * so nothing implies a partnership.
 */
export const IMAGES = {
  workflow: {
    src: `${IMG}/cloud-devops-delivery-workflow.webp`, width: 2160, height: 1640,
    alt: "Cloud and DevOps workflow: changes pass a CI/CD pipeline to staging and production, with monitoring",
  },
  tiers: {
    src: `${IMG}/right-sized-cloud-infrastructure-tiers.webp`, width: 2400, height: 781,
    alt: "Three levels of cloud infrastructure: managed hosting, managed containers and Kubernetes",
  },
  pipeline: {
    src: `${IMG}/ci-cd-pipeline-steps-rollback.webp`, width: 2400, height: 530,
    alt: "Eight-step CI/CD pipeline: commit, review, build, test, security, deploy, monitor and rollback",
  },
  containers: {
    src: `${IMG}/docker-vs-kubernetes-orchestration.webp`, width: 2400, height: 837,
    alt: "Docker running one image everywhere, and Kubernetes scheduling containers across cluster nodes",
  },
  terraform: {
    src: `${IMG}/terraform-infrastructure-as-code-workflow.webp`, width: 2400, height: 670,
    alt: "Terraform workflow: a change is reviewed, planned and applied to staging and production",
  },
  security: {
    src: `${IMG}/cloud-security-layers.webp`, width: 2400, height: 837,
    alt: "Cloud security layers: identity, network controls, data protection, monitoring and recovery",
  },
  // Photo: Unsplash (images.unsplash.com/photo-1451187580459-43490279c0fa)
  earth: {
    src: `${IMG}/cloud-earth-network-lights.webp`, width: 1600, height: 1065,
    alt: "Earth from space at night, with city lights showing connected regions",
  },
  // Photo: Unsplash (images.unsplash.com/photo-1518432031352-d6fc5c10da5a)
  terminal: {
    src: `${IMG}/devops-terminal-build-passed.webp`, width: 1600, height: 1200,
    alt: "A terminal window showing an automated build installing packages and checks passing",
  },
  // Photo: Unsplash (images.unsplash.com/photo-1544197150-b99a580bb7a8)
  network: {
    src: `${IMG}/cloud-network-patch-panel.webp`, width: 1600, height: 1067,
    alt: "Network cables plugged into a numbered patch panel in a server rack",
  },
  // Photo: Unsplash (images.unsplash.com/photo-1531482615713-2afd69097998)
  team: {
    src: `${IMG}/devops-engineers-pairing.webp`, width: 1600, height: 1067,
    alt: "Two engineers working together at a laptop in an open office",
  },
  // Photo: Unsplash (images.unsplash.com/photo-1607799279861-4dd421887fb3)
  code: {
    src: `${IMG}/iac-code-on-laptop.webp`, width: 1600, height: 1067,
    alt: "Code in an editor on a laptop screen lit in blue and purple",
  },
} as const;

export const HERO = {
  eyebrow: "Cloud Solutions & DevOps",
  title: "Cloud and DevOps Development Services",
  titleAccent: "for UK Businesses",
  lead:
    "Every business application eventually runs into the same questions: will it stay up when demand spikes, can we release changes without holding our breath, and why does the hosting bill keep climbing? ClickMasters designs, builds and automates cloud infrastructure on AWS, Microsoft Azure and Google Cloud, and sets up the DevOps practices, including CI/CD pipelines, containers, infrastructure as code and monitoring, that turn releases from risky events into routine ones.",
  audience:
    "We work with UK businesses on everything from moving a single application off an ageing server to building scalable environments for growing software products, sized to what you need now and ready for what comes next.",
  stats: [
    { value: "Automated releases", label: "Build, test, deploy, with a rollback plan" },
    { value: "Infrastructure as code", label: "Environments you can recreate and audit" },
    { value: "Right-sized", label: "Kubernetes only when it earns its place" },
    { value: "Security built in", label: "Least privilege, encryption, backups" },
  ],
};

export const BOTTLENECK = {
  intro:
    "Most applications start life on whatever hosting was quickest to set up. That works until the application, the team and the customer base grow, and then infrastructure and releases start to hold the business back.",
  problemsTitle: "The problems we are usually asked to fix",
  problems: [
    ["Unreliable deployments:", "releases are done by hand, late at night, by the one person who knows the steps, and something occasionally breaks."],
    ["Manual infrastructure management:", "servers configured by clicking through consoles, with no record of what was changed or why."],
    ["Limited scalability:", "the application slows down or fails during peaks such as a campaign, month-end or a new customer going live."],
    ["Slow release cycles:", "finished features wait days or weeks for a release window."],
    ["Inconsistent environments:", "code that works on a developer's laptop fails in testing, and testing does not match production."],
    ["Poor system visibility:", "problems are reported by customers before the team knows about them."],
    ["Rising infrastructure costs:", "resources sized for a peak that never came, test environments running all weekend, nobody sure what each item on the bill is for."],
    ["Security and configuration risks:", "shared admin accounts, open ports, credentials in code and unpatched systems."],
    ["Growing complexity:", "more services, more integrations and more data, with no consistent way to deploy and operate them."],
  ] as [string, string][],
  outro:
    "The right cloud architecture and DevOps practices address these problems directly: automated, repeatable releases; infrastructure defined in code; environments that scale with demand; and monitoring that tells you about problems first.",
  relatedTitle: "Cloud and DevOps: related, but not the same",
  cloud: "**Cloud development and infrastructure** is about where and how your software runs: the architecture of your hosting environment, networks, databases, storage, scaling, security and cost.",
  devops: "**DevOps engineering** is about how software gets from a developer's change to a running system, and how it is operated once there: version control, automated builds and tests, deployment pipelines, infrastructure as code, containers, monitoring and release management, plus the collaboration between the people who build software and the people who run it.",
  together: "They work together. The cloud provides an environment that can be created, changed and scaled on demand through APIs; DevOps practices make use of that by defining the environment in code and automating every step of delivery. For example, when a developer merges a change, a pipeline can build it, run the tests, create a fresh copy of the infrastructure for testing, deploy to staging, and, once checks pass, release to production with the option of rolling back in minutes. Neither half delivers that on its own.",
  needTitle: "How much do you actually need?",
  needIntro: "Not every application needs the same level of infrastructure. We recommend the simplest set-up that meets your reliability, security and growth requirements:",
  needRows: [
    ["One web application, modest traffic, small team", "Managed application hosting or a platform service, a managed database, automated deployments from a CI/CD pipeline, backups and monitoring", "Traffic becomes spiky, or you need several environments"],
    ["A product with several services, regular releases and growth", "Docker containers on a managed container service, infrastructure as code, staging and production environments, automated tests in the pipeline", "You run many services that need independent scaling and deployment"],
    ["Many services, multiple teams, high availability requirements", "Kubernetes (usually a managed cluster), infrastructure as code with modules, full observability, progressive releases", "Regulatory, multi-region or very high-availability requirements"],
  ],
  needOutro: "Moving to a more complex tier adds operational work, so each step has to be justified by a real need.",
};

export type CloudService = { icon: string; title: string; involves: string; problem: string; how: LinkedText; applications: string; value: string };

export const CLOUD_SERVICES: CloudService[] = [
  // Body link 1 of 4.
  { icon: "cloud", title: "Cloud application development", involves: "Building new applications, or new parts of existing ones, designed from the start to run well in the cloud, using managed databases, object storage, queues and autoscaling rather than fixed servers.", problem: "Applications that cannot scale, recover from failure or be deployed automatically because they were designed for a single server.", how: { text: "Application code keeps configuration outside the codebase, stores files in object storage rather than on local disks, and handles slow work in background jobs, so instances can be added, removed or replaced at any time. For broader bespoke builds, our [[link]] team designs the full application and we provide the cloud foundations underneath it.", link: { anchor: "custom software development", href: "/services/custom-software-development" } }, applications: "Customer portals, internal business systems, APIs and data services.", value: "Software that copes with growth and failure without being re-architected later." },
  { icon: "architecture", title: "Cloud infrastructure architecture", involves: "Designing the overall shape of your cloud environment, including accounts or subscriptions, networks, security boundaries, compute, databases, storage and connectivity.", problem: "Environments that grew one resource at a time, with no clear separation between production and testing and no consistent security model.", how: { text: "We document requirements for availability, recovery, security, data location and budget, then design a target architecture with diagrams and decisions recorded, before anything is built." }, applications: "A first move to cloud, a new product launch, or tidying up an environment that has grown organically.", value: "A foundation that is secure, understandable and ready to grow." },
  // Body link 2 of 4.
  { icon: "native", title: "Cloud-native application development", involves: "Building applications as sets of loosely connected services, containers or serverless functions, using managed cloud services for messaging, storage and identity.", problem: "Large applications where one change requires redeploying everything, and one busy feature slows the whole system.", how: { text: "Components communicate through APIs and queues, scale independently and are deployed separately through their own pipelines. We start with a well-structured application and split out services only where scale or team structure justifies it. Where the work is primarily a browser-based product, our [[link]] service covers the interface and application design.", link: { anchor: "web application development", href: "/services/web-application-development" } }, applications: "SaaS products, high-traffic platforms, event-driven processing.", value: "Faster, safer changes to individual parts of the system." },
  { icon: "migrate", title: "Cloud migration and modernisation", involves: "Moving applications, databases and files from on-premises servers or traditional hosting into the cloud, and modernising them where it is worthwhile.", problem: "Ageing hardware, ending hosting contracts, poor resilience and the inability to scale.", how: { text: "We assess each application and choose an approach: rehost it largely as it is, replatform it onto managed services (such as a managed database), or refactor it where the benefits justify the work. Migrations are rehearsed, data is synchronised and verified, and cut-over is planned with a rollback route." }, applications: "Line-of-business systems, websites, databases, file stores.", value: "A controlled move that reduces risk, rather than a single high-stakes weekend." },
  { icon: "database", title: "Cloud database and storage solutions", involves: "Selecting, designing and running managed relational databases, document stores, caches and object storage.", problem: "Self-managed databases with manual backups, no failover and performance problems nobody can diagnose.", how: { text: "Managed database services with automated backups, point-in-time recovery, replicas where needed, encryption, and monitoring of slow queries; object storage with lifecycle rules for files and archives." }, applications: "Transactional business data, product catalogues, documents, media and logs.", value: "Data that is protected, recoverable and fast to access." },
  { icon: "plug", title: "Cloud API and system integration", involves: "Connecting cloud-hosted applications with each other and with third-party and on-premises systems through APIs, queues and secure network links.", problem: "Fragile point-to-point connections and data copied by hand between systems.", how: { text: "API gateways, message queues and event-driven integration, with authentication, retries and monitoring, and secure connectivity to systems that remain on-site." }, applications: "Linking business systems, payment and e-commerce platforms, partner APIs.", value: "Integrations that keep working when one side is slow or briefly unavailable." },
  { icon: "scale", title: "Scalable cloud environments", involves: "Designing environments that add and remove capacity automatically as demand changes, across more than one data centre (availability zone) where resilience requires it.", problem: "Slowdowns or outages at peak times, and paying for peak capacity all year.", how: { text: "Load balancers, autoscaling rules based on real metrics, stateless application instances and databases sized and replicated for the workload." }, applications: "Seasonal retail, campaign launches, month-end processing, growing SaaS products.", value: "Consistent performance at busy times without permanently paying for the busiest hour." },
  { icon: "optimise", title: "Cloud infrastructure optimisation", involves: "Reviewing an existing environment for performance, reliability, security and cost, then making targeted improvements.", problem: "Environments that work but are slow, expensive, fragile or hard to understand.", how: { text: "We review architecture, configuration, utilisation, monitoring and spend, produce a prioritised list of findings, and implement the changes you approve." }, applications: "Any environment that has grown without regular review.", value: "Clear, evidence-based improvements rather than a rebuild." },
  { icon: "backup", title: "Cloud backup and disaster recovery", involves: "Defining how much data you can afford to lose (recovery point objective, RPO) and how quickly you need to be running again (recovery time objective, RTO), then designing backups and recovery to meet them.", problem: "Backups that exist but have never been restored, and no plan for losing a region, an account or a database.", how: { text: "Automated, encrypted backups stored separately from production, infrastructure as code so environments can be rebuilt, documented recovery runbooks and scheduled restore tests." }, applications: "Every production system, particularly those holding customer or financial data.", value: "Confidence, backed by tested evidence, that you can recover." },
  { icon: "support", title: "Cloud application maintenance", involves: "Keeping applications and infrastructure healthy after launch: patching, dependency and runtime upgrades, monitoring, incident response and small improvements.", problem: "Systems that drift out of date, accumulate vulnerabilities and become harder to change.", how: { text: "Agreed support arrangements, scheduled maintenance windows, automated dependency checks and a backlog of improvements reviewed with you." }, applications: "Any live system your business depends on.", value: "A platform that stays secure and supported instead of slowly becoming legacy." },
];

export const DEVOPS_SERVICES: { icon: string; title: string; text: LinkedText; value: string }[] = [
  { icon: "compass", title: "DevOps consulting", text: { text: "An assessment of how your team builds, tests, releases and operates software today, followed by a practical improvement plan: what to automate first, which tools fit your stack, and how responsibilities should be shared." }, value: "A realistic roadmap based on where you are, not a generic maturity model." },
  { icon: "pipeline", title: "CI/CD pipeline development", text: { text: "Design and build of continuous integration and continuous delivery pipelines that run on every change: build, test, scan, package and deploy, with approvals where you need them." }, value: "Every release follows the same tested path, so quality no longer depends on who deploys." },
  { icon: "rocket", title: "Build and deployment automation", text: { text: "Scripts and pipeline stages that replace manual steps such as compiling, bundling, database migrations, configuration changes and cache clearing, together with deployment strategies such as rolling, blue-green or canary releases." }, value: "Deployments become routine and can happen during working hours." },
  { icon: "code", title: "Infrastructure as code", text: { text: "Defining networks, servers, databases, permissions and monitoring in version-controlled code, usually with Terraform, so environments are created and changed through reviewed pull requests." }, value: "No undocumented changes, and the ability to recreate an environment from scratch." },
  { icon: "box", title: "Docker containerisation", text: { text: "Packaging applications and their dependencies into container images that run identically on a laptop, in testing and in production." }, value: "An end to \"it works on my machine\", and a consistent unit for deploying and scaling." },
  { icon: "cluster", title: "Kubernetes orchestration", text: { text: "Setting up and operating Kubernetes clusters, usually managed services from the cloud provider, to schedule containers, scale them, restart failures and roll out updates." }, value: "Reliable operation of many services, applied only where the scale justifies the added complexity." },
  { icon: "test", title: "Automated testing integration", text: { text: "Bringing unit, integration, end-to-end and performance tests into the pipeline, with clear rules on what must pass before a change can progress." }, value: "Defects are caught minutes after they are written, not after customers find them." },
  { icon: "release", title: "Release management", text: { text: "Versioning, release notes, environment promotion (development → staging → production), feature flags to separate deployment from release, and documented rollback procedures." }, value: "Stakeholders know what is changing and when, and a bad release can be reversed quickly." },
  { icon: "monitor", title: "Monitoring and observability", text: { text: "Metrics, centralised logs, health checks, dashboards and alerts, using tools such as Prometheus and Grafana or a hosted service such as New Relic, with alerts tied to what users experience." }, value: "You see problems before customers report them, and can find the cause quickly." },
  // Body link 3 of 4.
  { icon: "flow", title: "DevOps workflow optimisation", text: { text: "Improving the day-to-day flow of work, including branching strategy, code review, environment provisioning, pipeline speed and on-call practices, so the team spends less time waiting and firefighting. Automating business processes (orders, documents, approvals) is a different discipline, covered by our [[link]].", link: { anchor: "AI automation services", href: "/services/ai-automation" } }, value: "Shorter feedback loops and more time spent building features." },
];

export const PLATFORMS = {
  intro: "We work across the three major public clouds and recommend a platform based on your existing technology, skills, licensing, data-location needs and budget. ClickMasters does not claim official partner status or certifications with any cloud provider.",
  items: [
    { title: "Amazon Web Services (AWS)", text: "The broadest catalogue of services, with mature options for compute (virtual machines, containers and serverless functions), object storage, managed relational and NoSQL databases, private networking, identity and access management, monitoring and deployment tooling.", fit: "SaaS products and web platforms that want a wide choice of managed services and a large ecosystem of tools and engineers." },
    { title: "Microsoft Azure", text: "Strong integration with Microsoft 365, Entra ID (formerly Azure Active Directory) and Windows and .NET workloads, alongside compute, storage, managed databases, networking, monitoring and container services.", fit: "Organisations already standardised on Microsoft, with existing licensing and identity they want to reuse." },
    { title: "Google Cloud", text: "Well regarded for data, analytics and machine learning services and for its managed Kubernetes offering, with the full range of compute, storage, databases, networking, identity and monitoring.", fit: "Data-intensive and container-first applications." },
  ],
  outro: "On all three platforms we cover the same foundations: compute and application hosting, storage, networking, managed databases, identity and access management, monitoring and automated deployment. Platform choice matters less than how well the environment is designed, automated and run.",
};

export const PIPELINE = {
  intro: "A CI/CD pipeline is an automated route from a code change to running software. Here is how a typical pipeline works, for example with GitHub Actions or Jenkins:",
  stepsTitle: "How a pipeline works, step by step",
  steps: [
    ["Code commit:", "a developer commits a change on a branch and opens a pull request."],
    ["Source control:", "the repository enforces rules such as required reviews and passing checks before anything can be merged into the main branch."],
    ["Automated build:", "the pipeline compiles the code and builds a versioned artefact, usually a container image, so exactly the same build is promoted through every environment."],
    ["Automated testing:", "unit and integration tests run on every change; slower end-to-end tests run before production releases."],
    ["Security and quality checks:", "dependency vulnerability scanning, container image scanning, code-quality checks and a scan for credentials accidentally committed to the repository."],
    ["Deployment:", "the artefact is deployed automatically to a test or staging environment, then to production after checks or an approval, using a strategy that avoids downtime, such as a rolling or blue-green deployment."],
    ["Monitoring:", "health checks and dashboards confirm that the new version is behaving correctly, error rates and response times are compared with the previous version, and alerts fire if they worsen."],
    ["Rollback and recovery:", "if a problem appears, the previous version is redeployed through the same pipeline, and database changes are designed so they can be reversed or are backwards-compatible."],
  ] as [string, string][],
  example: "**Example:** a team that previously deployed once a fortnight over FTP, with a checklist and a late evening, moves to a pipeline in which every merged change is built, tested and deployed to staging automatically, and production releases are a reviewed button press during the day. The benefit is not a headline figure; it is that releases become smaller, more frequent and far easier to reverse.",
};

export const CONTAINERS = {
  dockerTitle: "Containers and Docker",
  docker: "A **container** packages an application with everything it needs to run, including its runtime, libraries and configuration defaults, into a single image. **Docker** is the most widely used tool for building and running containers. Because the same image runs on a developer's machine, in the pipeline and in production, environments stay consistent, deployments become predictable, and several applications can share a server without interfering with each other.",
  k8sTitle: "What Kubernetes adds",
  k8s: "**Kubernetes** is a container orchestration platform. Where Docker runs containers, Kubernetes manages many of them across a cluster of machines: it schedules containers onto servers, restarts failed ones, scales services up and down with demand, rolls out new versions gradually and rolls them back if health checks fail, and routes traffic between services. It is powerful, and it is also a significant platform to operate, secure and upgrade.",
  monitoring: "**Monitoring containers** means watching both the application (errors, response times) and the platform (resource use, restarts, pending workloads), typically with Prometheus metrics, Grafana dashboards and centralised logs.",
  notTitle: "When you do not need Kubernetes",
  not: "Kubernetes is not necessary for every application. For one or a few services with steady traffic, a managed application platform or a managed container service gives you containers, scaling and zero-downtime deployments with far less to manage. We recommend Kubernetes when you run many services that must be scaled and deployed independently, need fine-grained control over networking and scheduling, or have several teams sharing a platform, and usually as a managed service from the cloud provider rather than a self-built cluster.",
};

export const IAC = {
  intro: "**Infrastructure as code (IaC)** means describing your infrastructure, including networks, servers, databases, load balancers, permissions, DNS and monitoring, in text files that are stored in version control and applied by a tool, rather than created by hand in a web console.",
  lead: "We typically use **Terraform**, which works across AWS, Azure and Google Cloud. In practice that means:",
  items: [
    ["Version-controlled infrastructure:", "every change is a pull request that colleagues review, with a written plan of exactly what will be created, changed or destroyed before it is applied."],
    ["Automated environment provisioning:", "a new test environment, or a copy of production for a customer pilot, can be created from the same code in a predictable way."],
    ["Repeatable deployments:", "staging and production are built from the same modules with different settings, so they genuinely match."],
    ["Configuration consistency:", "drift detection shows when someone has changed something by hand, so it can be corrected or captured in code."],
    ["Reusable modules:", "standard building blocks, such as a secure network or a monitored database, are written once and reused."],
    ["Recovery:", "if an environment is lost, the code is the blueprint for rebuilding it."],
  ] as [string, string][],
  outro: "Application configuration (environment variables, feature flags and secrets references) is managed alongside the infrastructure and injected at deployment time rather than edited on servers. The result is more operational control and fewer configuration errors, because the record of how everything is set up is the thing that sets it up.",
};

export const SECURITY_INTRO = "Cloud providers secure the underlying platform; securing what you build on it is your responsibility, and ours when we build it. We design security and reliability in from the architecture stage, informed by the NCSC's cloud security guidance.";

export const SECURITY = [
  { icon: "key", title: "Identity and access management", text: "Individual named accounts, single sign-on and multi-factor authentication; no shared administrator logins." },
  { icon: "lock", title: "Least-privilege access", text: "People and services receive only the permissions they need, with production access limited and logged." },
  { icon: "network", title: "Network security", text: "Private subnets for databases and internal services, security groups and firewalls that allow only required traffic, and secure connections for administration." },
  { icon: "shield", title: "Encryption", text: "TLS for data in transit; encryption at rest for databases, storage and backups, with managed keys." },
  { icon: "settings", title: "Secure configuration", text: "Hardened baselines defined in code, logging enabled by default and public access blocked unless deliberately required." },
  { icon: "secret", title: "Secrets management", text: "Credentials and API keys held in a managed secrets store, rotated, and never committed to code." },
  { icon: "backup", title: "Backup and recovery", text: "Automated, encrypted backups held separately from production, with scheduled restore tests." },
  { icon: "monitor", title: "Monitoring and alerting", text: "Security and audit logs centralised, with alerts for suspicious activity and configuration changes." },
  { icon: "bug", title: "Vulnerability management", text: "Dependency and container image scanning in the pipeline, and regular patching of operating systems and runtimes." },
  { icon: "history", title: "Disaster recovery planning", text: "Agreed recovery objectives, documented runbooks and periodic recovery exercises." },
  { icon: "pulse", title: "Availability and reliability", text: "Multiple availability zones for critical components, health checks and automatic replacement of failed instances." },
  { icon: "scales", title: "Data protection", text: "Where systems process personal data, we help you choose hosting regions that suit your UK GDPR obligations, including UK or other appropriate regions, minimise and protect personal data, define retention, and document the technical measures for your records and any data protection impact assessment. Your organisation remains the data controller and responsible for compliance. We provide technical design and documentation, not legal advice." },
];

export const SECURITY_NOTE = "No system can be made perfectly secure, and ClickMasters does not claim formal security certifications for this work. We aim to reduce risk in proportion to what is at stake, and to make security visible and reviewable.";

export const COST = {
  intro: "Cloud costs are flexible, which also means they can grow quietly. We help you manage spending responsibly without weakening reliability:",
  items: [
    ["Cost visibility:", "consistent tagging by environment, product and team, budgets and alerts, and regular reviews, so every line of the bill has an owner."],
    ["Resource utilisation:", "identifying idle, oversized or forgotten resources such as unattached disks, old snapshots and unused load balancers."],
    ["Compute sizing:", "rightsizing instances and containers from real utilisation data rather than estimates."],
    ["Environment scheduling:", "shutting down development and test environments outside working hours where they are not needed."],
    ["Storage management:", "lifecycle rules that move old data to cheaper storage tiers and delete what no longer needs keeping."],
    ["Workload monitoring:", "autoscaling to follow demand, so you are not paying for peak capacity at quiet times."],
    ["Capacity planning:", "committing to longer-term discounted pricing (reserved capacity or savings plans) only for steady, predictable workloads."],
    ["Avoiding unnecessary resources:", "choosing managed services where they reduce operational effort, and avoiding complex platforms you do not need yet."],
  ] as [string, string][],
  outro: "Savings depend entirely on your starting point, so we do not promise a percentage. We show you where the money goes, which changes we recommend, and what each one trades off.",
};

export const INDUSTRIES_NOTE = "The examples below describe common challenges and suitable approaches in each sector. They are not claims of completed ClickMasters projects in these industries.";

export const INDUSTRIES: { icon: string; title: string; challenge: string; help: LinkedText }[] = [
  // Body link 4 of 4.
  { icon: "saas", title: "SaaS companies", challenge: "Frequent releases to many customers without downtime, and per-customer environments for larger clients.", help: { text: "Automated pipelines, infrastructure as code that can create isolated customer environments, and monitoring by tenant. For product strategy, tenancy models and launching a new platform, see our [[link]] service.", link: { anchor: "MVP and SaaS development", href: "/services/mvp-saas-development" } } },
  { icon: "finance", title: "FinTech", challenge: "Strict audit, access-control and resilience expectations alongside the need to ship quickly.", help: { text: "Approvals and audit trails built into pipelines, least-privilege access, encryption everywhere and tested recovery plans." } },
  { icon: "cart", title: "E-commerce", challenge: "Traffic spikes during promotions and seasonal peaks.", help: { text: "Autoscaling, caching and load testing before major campaigns, with releases frozen or carefully controlled around peak periods." } },
  { icon: "health", title: "Healthcare technology", challenge: "Protecting special category data and keeping services available.", help: { text: "Careful region selection, segregated networks, encryption, detailed access logging and documented recovery, designed alongside your data protection impact assessment." } },
  { icon: "education", title: "Education technology", challenge: "Demand concentrated around term starts, deadlines and exams.", help: { text: "Scheduled and automatic scaling ahead of known peaks, and scaling down during holidays to control cost." } },
  { icon: "truck", title: "Logistics", challenge: "Continuous data from vehicles, scanners and partner systems, and integrations that must not lose messages.", help: { text: "Queue-based, event-driven processing that absorbs bursts and retries failures, with monitoring of message backlogs." } },
  { icon: "factory", title: "Manufacturing", challenge: "Connecting on-site systems with cloud applications reliably and securely.", help: { text: "Secure network links, edge-to-cloud data pipelines and hybrid architectures where some systems must stay on-premises." } },
  { icon: "building", title: "Enterprise software", challenge: "Many teams and services, with inconsistent ways of deploying them.", help: { text: "Shared pipeline templates, reusable infrastructure modules and a common observability stack." } },
  { icon: "briefcase", title: "Professional services", challenge: "Client-facing portals and document systems that must be secure and available, run by small IT teams.", help: { text: "Managed services that reduce the operational load, automated patching and backups, and simple, documented deployment." } },
];

export const NATIVE_VS = {
  headers: ["Factor", "Traditional infrastructure (on-premises or fixed servers)", "Cloud-native infrastructure"],
  rows: [
    ["Infrastructure flexibility", "Capacity bought in advance; changes take procurement time", "Resources created and changed in minutes through code"],
    ["Deployment methods", "Often manual, server by server", "Automated pipelines, containers and immutable releases"],
    ["Scalability", "Limited by installed hardware", "Automatic scaling within the limits you set"],
    ["Resource management", "Servers often under-used to allow for peaks", "Pay for what runs; idle resources must be actively managed"],
    ["Maintenance", "Your team maintains hardware, operating systems and middleware", "Provider maintains the platform; you maintain configuration and applications"],
    ["Reliability", "Depends on your own redundancy and facilities", "Multiple zones and managed failover available; must be designed in"],
    ["Security", "Full physical control; all layers your responsibility", "Shared responsibility; strong tooling, but misconfiguration is the main risk"],
    ["Operational complexity", "Familiar to traditional IT teams", "New skills needed: IaC, pipelines, cloud security and cost management"],
    ["Cost considerations", "Large upfront investment; predictable afterwards", "Low upfront; ongoing costs vary with usage and need active management"],
  ],
  outro: "**Cloud-native is not automatically the right choice.** A stable application with predictable load and an existing, well-run server estate may be cheaper and simpler to leave where it is, perhaps with automated deployments added. A hybrid approach, keeping some systems on-premises and moving others, is often sensible. Cloud-native architecture pays off when you need to scale, release frequently, improve resilience or stop maintaining hardware. We help you decide on evidence, application by application.",
};

export const PROCESS = [
  { title: "Discovery and infrastructure assessment", what: "We review your current hosting, applications, release process, monitoring, security and costs, and talk to the people who build and support the systems.", purpose: "An honest baseline of what works, what is fragile and what is costing too much." },
  { title: "Business and technical requirements", what: "We agree availability targets, recovery objectives, security and data-location requirements, expected growth, release frequency and budget.", purpose: "Clear criteria for every design decision that follows." },
  { title: "Cloud architecture planning", what: "We choose the platform and level of complexity, decide what to rehost, replatform or refactor, and document the target architecture and its trade-offs.", purpose: "Right-sized decisions made before money is spent." },
  { title: "Infrastructure design", what: "Detailed design of accounts or subscriptions, networks, identity, compute, data, backup, monitoring and cost controls, written as infrastructure as code.", purpose: "A reviewed, reproducible blueprint." },
  { title: "Environment setup", what: "Environments are created from code: typically development, staging and production, with access controls, logging and monitoring in place from day one.", purpose: "Consistent environments that match each other." },
  { title: "CI/CD implementation", what: "Pipelines for building, testing, scanning and deploying each application, with approvals and rollback built in.", purpose: "Repeatable, low-risk releases." },
  { title: "Security and testing", what: "Security configuration review, vulnerability scanning, load and failover testing, and a restore test of backups before go-live.", purpose: "Evidence that the environment behaves as designed under stress and failure." },
  { title: "Deployment and integration", what: "Applications are deployed or migrated, integrations are connected, data is synchronised and verified, and cut-over follows a rehearsed plan with a rollback route.", purpose: "A controlled launch with minimal disruption." },
  { title: "Monitoring and optimisation", what: "After launch we watch performance, errors, capacity and cost closely and tune scaling, sizing and alerts using real data.", purpose: "Turning a working environment into an efficient one." },
  { title: "Ongoing maintenance", what: "Patching, upgrades, incident support, cost reviews and improvements under an agreed support arrangement, or a structured handover to your own team with documentation and runbooks.", purpose: "An environment that stays secure, current and understood." },
];

export const WHY = [
  { icon: "target", title: "Business-focused technical planning", text: "We start from your availability, security, growth and budget requirements, not from a favourite tool." },
  { icon: "scale", title: "Practical, right-sized architecture", text: "Managed services and simple hosting where they are enough; containers and Kubernetes where they earn their place." },
  { icon: "pipeline", title: "Reliable deployment workflows", text: "Every release goes through a tested pipeline with a rollback plan." },
  { icon: "code", title: "Application and infrastructure in one team", text: "As a software development company, we understand the applications we deploy, which makes migrations, performance work and troubleshooting faster." },
  { icon: "shield", title: "Security-conscious engineering", text: "Least privilege, encryption, secrets management and tested backups as standard." },
  { icon: "plug", title: "System integration", text: "Cloud applications connected reliably to your existing business systems." },
  { icon: "release", title: "Maintainable infrastructure", text: "Everything in code, documented and handed over, so you are not dependent on us." },
  { icon: "chat", title: "Clear communication", text: "Written recommendations, architecture diagrams and regular updates in language your stakeholders can follow." },
];

export const SCENARIOS_NOTE = "The scenarios below are illustrative examples of how we would approach common cloud and DevOps projects. They are not descriptions of completed ClickMasters client projects and include no client names or results.";

export const SCENARIOS = [
  { title: "Example 1: Moving a business application off an ageing server", situation: "A company's core web application and database run on a single server nearing the end of its hosting contract, with manual deployments and nightly backups that have never been restored.", approach: "Replatform onto a managed application service and managed database, define everything in Terraform, add a CI/CD pipeline with automated tests, set up monitoring and run a restore test before cut-over.", outcome: "The same application, with automated releases, tested recovery and no hardware to maintain." },
  { title: "Example 2: Introducing CI/CD and containers for a growing product team", situation: "A software product with several services is deployed by hand, and staging rarely matches production.", approach: "Containerise each service with Docker, build pipelines in GitHub Actions that test, scan and deploy to staging on every merge, define both environments from the same Terraform modules, and add Prometheus and Grafana dashboards.", outcome: "Consistent environments, smaller and more frequent releases and faster diagnosis of problems." },
  { title: "Example 3: Bringing a growing cloud bill under control", situation: "A business's monthly cloud spend has grown steadily and nobody can explain it.", approach: "Tagging and cost reports by environment and product, rightsizing based on utilisation, scheduling non-production environments, storage lifecycle rules and a review of committed-use pricing for steady workloads.", outcome: "A bill that is understood, owned and reviewed, with savings applied where they do not reduce reliability." },
];

/** FAQs: rendered on the page and used for FAQPage JSON-LD (identical text). */
export const FAQS: { q: string; a: string[] }[] = [
  { q: "What are cloud and DevOps development services?", a: ["They combine designing, building and running cloud infrastructure (hosting, networks, databases, scaling, security and cost) with DevOps engineering: automating how software is built, tested, deployed and monitored. Together they make applications more reliable and releases faster and safer."] },
  { q: "What is the difference between cloud computing and DevOps?", a: ["Cloud computing is a way of obtaining infrastructure, such as servers, storage, databases and networking, on demand from a provider. DevOps is a set of practices and tools for delivering and operating software, including CI/CD, infrastructure as code, containers and monitoring. You can practise DevOps on-premises, and you can use the cloud without DevOps, but each works best with the other."] },
  { q: "What does a DevOps development company do?", a: ["A DevOps development company assesses how your software is built and released, then builds the automation and infrastructure to improve it: CI/CD pipelines, infrastructure as code, containerisation, monitoring and alerting, and release processes. A good one also leaves your team with documentation and the ability to run and change what was built."] },
  { q: "How much do cloud development services cost in the UK?", a: ["Cost depends on the number and complexity of applications, whether you are migrating existing systems or building new ones, availability and security requirements, the number of environments, how much automation is needed, and whether ongoing support is included. Cloud hosting fees are separate and depend on usage. We provide a fixed-price or time-and-materials estimate with milestones after an assessment, and give you an estimate of running costs as part of the design."] },
  { q: "What is CI/CD pipeline development?", a: ["It is building an automated process that takes each code change through build, tests, security checks and deployment. Continuous integration means every change is built and tested automatically; continuous delivery means a tested version is always ready to release, and deploying it is automated and repeatable, often with a rollback option."] },
  { q: "What is the difference between Docker and Kubernetes?", a: ["Docker builds and runs containers, packaging an application with everything it needs so it runs the same everywhere. Kubernetes orchestrates many containers across a cluster: scheduling, scaling, restarting failures and rolling out updates. Many applications need Docker but not Kubernetes; Kubernetes is worthwhile when you run many services at scale."] },
  { q: "Can an existing application be migrated to the cloud?", a: ["Usually, yes. Applications can be rehosted largely as they are, moved onto managed services such as a managed database, or refactored where the benefits justify it. Some applications, such as those tied to specialist hardware or with licensing restrictions, are better left on-premises or handled in a hybrid set-up. We assess each application before recommending an approach."] },
  { q: "Which cloud platform is best for a business?", a: ["There is no single best platform. AWS offers the widest range of services, Azure fits organisations already invested in Microsoft identity and licensing, and Google Cloud is strong for data and container workloads. The right choice depends on your existing technology, skills, data-location needs, licensing and budget, and a well-designed environment matters more than the provider."] },
  { q: "How can DevOps improve software deployment?", a: ["By replacing manual steps with automated, tested pipelines, keeping environments consistent through containers and infrastructure as code, catching defects with automated tests, and making rollback quick. Releases become smaller, more frequent, more predictable and easier to reverse if something goes wrong."] },
  { q: "How can businesses manage cloud infrastructure costs?", a: ["Make spending visible with tagging, budgets and alerts; rightsize resources based on real usage; switch off non-production environments when they are not needed; apply storage lifecycle rules; use autoscaling; commit to discounted pricing only for steady workloads; and review the bill regularly. Avoid adopting complex platforms before you need them."] },
];

export const FINAL_CTA = {
  title: "Build More Reliable Cloud Infrastructure",
  titleAccent: "With Cloud and DevOps Engineering",
  body: {
    text: "Whether you are planning a migration, struggling with manual releases, worried about resilience or trying to understand a growing cloud bill, tell us where you are today. We will review your current set-up, recommend a right-sized approach and explain the next step, with no obligation.",
  } as LinkedText,
  bring: [
    "Where your applications are hosted today, and how they are deployed",
    "The problems you want to solve: reliability, release speed, security, scale or cost",
    "Any deadlines, such as a hosting contract ending or a product launch",
  ],
};

export const SCHEMA_SERVICE = {
  name: "Cloud and DevOps Development",
  alternateName: "Cloud Solutions & DevOps",
  serviceType: ["Cloud development", "DevOps engineering", "CI/CD pipeline development", "Infrastructure as code", "Cloud migration"],
  description: SEO.description,
  relatedServicePath: "/services/custom-software-development",
  catalogName: "Cloud and DevOps services",
  catalog: [...CLOUD_SERVICES.map((s) => s.title), ...DEVOPS_SERVICES.map((s) => s.title)],
};

type OgTone = "plain" | "purple" | "teal" | "sun";
/** Social sharing image content (used by ./opengraph-image.tsx). */
export const OG: { title: string; accent: string; rows: [string, OgTone][][] } = {
  title: "Cloud & DevOps",
  accent: "Releases you can repeat, infrastructure you can rebuild",
  rows: [
    [["Commit", "plain"], ["Build", "purple"], ["Test", "purple"], ["Deploy", "teal"]],
    [["Terraform · Docker · Kubernetes", "sun"]],
    [["AWS · Azure · Google Cloud", "teal"]],
  ],
};
