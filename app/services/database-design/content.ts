/*
 * /services/database-design content, from
 * "ClickMasters Database Design and Development Services: SEO Content Pack"
 * (26 Nov 2026). Edit copy here; ./page.jsx only renders it.
 *
 * Body links: exactly the pack's four (cloud and DevOps services, web
 * application development, ERP and CRM development, custom software
 * development).
 *
 * VERIFY (owner): Microsoft SQL Server, MariaDB, Express.js and any specific
 * ORM or migration tool are NOT named as supported until confirmed. Confirm
 * whether a fixed-scope database health check or design workshop is offered.
 */

export const PATH = "/services/database-design";

export const SEO = {
  // Rendered as "Database Design and Development Services UK | ClickMasters" (58 chars).
  title: "Database Design and Development Services UK",
  description:
    "Database design and development for UK businesses: data modelling, SQL and NoSQL schemas, performance tuning, migration and integration, built to scale.",
  ogTitle: "Database Design and Development Services UK | ClickMasters",
  ogDescription:
    "Well-modelled, fast and secure databases for UK businesses: SQL and NoSQL design, performance tuning, migration and integration with your applications.",
};

export type LinkedText = { text: string; link?: { anchor: string; href: string } };

const IMG = "/assets/Services/database-design";

/**
 * Diagrams drawn for this page (alt text from the pack's image table) and HD
 * photos from Unsplash (Unsplash License: free for commercial use, no
 * attribution required; source IDs kept below).
 */
export const IMAGES = {
  dataLayer: {
    src: `${IMG}/database-design-data-layer.webp`, width: 2160, height: 1640,
    alt: "Data layer diagram: requirements become a model and schema, used through validated queries",
  },
  threeJobs: {
    src: `${IMG}/database-design-architecture-development.webp`, width: 2400, height: 781,
    alt: "How database design, database architecture and database development differ and fit together",
  },
  erd: {
    src: `${IMG}/entity-relationship-diagram-example.webp`, width: 2400, height: 809,
    alt: "Entity relationship diagram showing customers, orders, order lines and products with keys",
  },
  sqlNosql: {
    src: `${IMG}/sql-vs-nosql-data-structures.webp`, width: 2400, height: 809,
    alt: "Related tables in a relational database compared with a single document in a document database",
  },
  optimisation: {
    src: `${IMG}/database-query-optimisation-workflow.webp`, width: 2400, height: 614,
    alt: "Performance workflow: measure a slow query, read its execution plan, add an index, measure again",
  },
  availability: {
    src: `${IMG}/database-high-availability-architecture.webp`, width: 2400, height: 837,
    alt: "Primary database with a failover standby, a read replica for reports, a cache and backups",
  },
  migration: {
    src: `${IMG}/database-migration-process.webp`, width: 2400, height: 642,
    alt: "Six-step database migration process with validation and a rollback route at every stage",
  },
  // Photo: Unsplash (images.unsplash.com/photo-1516321318423-f06f85e504b3)
  review: {
    src: `${IMG}/db-design-review-laptop.webp`, width: 1600, height: 1067,
    alt: "Two people pointing at a laptop screen while reviewing a design together",
  },
  // Photo: Unsplash (images.unsplash.com/photo-1555066931-4365d14bab8c)
  code: {
    src: `${IMG}/db-sql-code-laptop.webp`, width: 1600, height: 1067,
    alt: "Code in a dark editor on a laptop screen",
  },
  // Photo: Unsplash (images.unsplash.com/photo-1580894908361-967195033215)
  engineer: {
    src: `${IMG}/db-engineer-monitors.webp`, width: 1600, height: 1067,
    alt: "An engineer working at a desk with several monitors showing code",
  },
  // Photo: Unsplash (images.unsplash.com/photo-1551434678-e076c223a692)
  team: {
    src: `${IMG}/db-developers-at-desks.webp`, width: 1600, height: 1067,
    alt: "Developers working at desks with laptops and monitors in a bright office",
  },
  // Photo: Unsplash (images.unsplash.com/photo-1600267175161-cfaa711b4a81)
  integration: {
    src: `${IMG}/db-integration-colleagues.webp`, width: 1600, height: 1067,
    alt: "Two colleagues looking at a screen together in an office",
  },
} as const;

export const HERO = {
  eyebrow: "Database Design & Development",
  title: "Database Design and Development Services",
  titleAccent: "for UK Businesses",
  lead:
    "Every business system is only as reliable as the data underneath it. When the database is well designed, screens load quickly, reports agree with each other and new features are straightforward to add. When it is not, the same problems keep returning: duplicate customers, figures that do not reconcile, pages that slow down as records grow, and changes that nobody dares to make. ClickMasters designs, builds and improves databases for UK businesses, from the first data model for a new application to optimising, securing and migrating databases that are already in use.",
  audience:
    "We work with PostgreSQL, MySQL, MongoDB and Redis, choosing the right tool for each workload, and we design every database around how your organisation actually uses its information, so it stays consistent, fast and manageable as you grow.",
  stats: [
    { value: "Modelled before it is built", label: "Entities and rules agreed first" },
    { value: "Right tool for the workload", label: "Relational, document or key-value" },
    { value: "Performance by design", label: "Indexes planned around real usage" },
    { value: "Protected and recoverable", label: "Least privilege, encryption, tested backups" },
  ],
};

export const PROBLEMS = {
  intro:
    "Most databases are not designed badly on purpose. They grow one feature at a time: a table added for a new screen, a column reused for something it was never meant for, a spreadsheet import that created duplicates. For a while it works. Then the business grows, and the database starts to set limits on what the software can do.",
  symptomsTitle: "Common symptoms of a poorly designed database",
  symptoms: [
    ["Poorly structured data:", "the same information stored in several places, or several kinds of information crammed into one field, so nobody is sure which value is correct."],
    ["Duplicate records:", "customers, products or suppliers entered more than once because nothing in the database prevents it."],
    ["Slow database queries:", "pages and reports that were fast with a few thousand records now take seconds, or time out, with a few million."],
    ["Data inconsistency:", "an order that refers to a customer who no longer exists, or a total that does not match its line items."],
    ["Difficult reporting:", "simple management questions require complex queries, manual exports or a developer's time."],
    ["Scaling limitations:", "the database struggles at busy periods, and adding hardware only delays the problem."],
    ["Weak access control:", "everyone and every service connects with the same powerful account, and nobody can say who changed what."],
    ["Integration difficulties:", "other systems cannot exchange data reliably because identifiers, formats and rules are inconsistent."],
    ["Legacy database limitations:", "an ageing platform, version or design that is expensive to support and risky to change."],
    ["Unplanned database growth:", "logs, history and files accumulate in the main database with no retention plan, slowing everything down and raising storage costs."],
  ] as [string, string][],
  outro:
    "Professional database design addresses these problems at the source. Clear entities and relationships remove duplication. Keys and constraints make invalid data impossible to store rather than something to clean up later. Indexes and queries are designed around real usage. Access is controlled by role. And the structure is documented, so the next change is a decision rather than a gamble.",
  jobsTitle: "Design, architecture and development: three different jobs",
  jobsIntro: "These terms are often used interchangeably, but they describe different work, and a good database project needs all three.",
  jobs: [
    ["Database design", "decides what the data is and how it fits together: the entities your business deals with (customers, orders, products, appointments), their attributes, the relationships between them, and the rules that keep them valid. Its output is a data model and a schema."],
    ["Database architecture", "decides how the data is stored, served and protected at scale: which database technology suits each workload, how reads and writes are handled, whether replicas, partitioning or caching are needed, and how the system stays available and recoverable."],
    ["Database development", "turns the design and architecture into working software: creating the schema, writing and testing queries, building the data access layer and APIs, handling transactions, and deploying changes safely over time."],
  ] as [string, string][],
  jobsOutro:
    "A database that is designed but not architected may be correct but slow under load. One that is architected but poorly designed may scale, but it scales its inconsistencies too. We treat the three as one piece of work.",
};

export const DESIGN_INTRO = "Our database design services cover new systems and the redesign of existing ones. Each service below can be delivered on its own or as part of a wider build.";

export const DESIGN_SERVICES = [
  { icon: "design", title: "Custom database design", involves: "Designing a database for one organisation's processes and data, from requirements through to a reviewed, documented schema.", problem: "Generic or improvised structures that force the application and its users to work around the data.", how: "We interview the people who create and use the data, list the business rules that must always hold, and model the entities and relationships before choosing tables, types and constraints.", when: "A new application, a replacement for spreadsheets or an Access database, or a system whose structure no longer reflects how the business works.", value: "A foundation that matches your operations, so the software built on it is simpler, faster and easier to change." },
  { icon: "table", title: "Relational database design", involves: "Structuring data into related tables with primary keys, foreign keys and constraints, designed for transactional accuracy.", problem: "Data that drifts out of step because relationships are implied by convention rather than enforced by the database.", how: "Each entity becomes a table with a stable key, relationships are expressed as foreign keys with defined behaviour on update and delete, and rules such as \"an order must have at least one line\" are enforced through constraints and transactions.", when: "Orders, invoices, bookings, stock, accounts and any data where totals must always add up.", value: "Figures that can be trusted, because the database itself refuses data that breaks the rules." },
  { icon: "model", title: "Data modelling and ERD development", involves: "Producing a data model and an entity relationship diagram (ERD) that shows every entity, its key attributes and how entities relate, including cardinality (one-to-one, one-to-many, many-to-many).", problem: "Structure that exists only in a developer's head, and stakeholders who cannot check whether the system matches their business.", how: "We start with a conceptual model in business language, refine it into a logical model with attributes and keys, then derive the physical design for the chosen database. The ERD is reviewed with your team at each stage.", when: "At the start of any new system, before a major change, or when an existing database needs to be understood before it can be improved.", value: "A shared picture of your data that business and technical people can agree on before money is spent building it." },
  { icon: "normalise", title: "Database normalisation", involves: "Organising data so each fact is stored once, in the right place, usually to third normal form, and then deliberately denormalising only where measured performance needs justify it.", problem: "Update anomalies, where changing a customer's address in one place leaves an old copy elsewhere, and insert or delete anomalies that lose or corrupt information.", how: "We separate repeating groups, remove partial and transitive dependencies, and give each table a single clear purpose. Where reporting or read-heavy screens need pre-joined data, we add controlled copies (such as summary tables or materialised views) with a defined refresh process.", when: "Whenever duplicates and inconsistencies keep reappearing despite clean-ups.", value: "Fewer data errors, smaller storage and simpler maintenance, without sacrificing performance where it matters." },
  { icon: "schema", title: "Database schema design", involves: "The detailed physical design: tables, columns, data types, keys, indexes, constraints, default values, naming conventions and, where appropriate, views.", problem: "Inconsistent naming, wrong data types (dates stored as text, money stored as floating-point numbers) and missing rules that cause subtle bugs.", how: "We choose types that match the data precisely, apply consistent naming, define nullability deliberately, and plan the indexes needed for known queries from the outset.", when: "For every new database, and when an existing schema has become inconsistent through years of piecemeal change.", value: "A schema that developers can understand quickly and extend safely." },
  { icon: "architecture", title: "Database architecture planning", involves: "Deciding how the database will be hosted, accessed, scaled, backed up and recovered, and whether more than one type of database is needed.", problem: "Architecture chosen by default, leading to either an overloaded single server or an over-engineered setup the team cannot maintain.", how: "We estimate data volumes, growth, read and write patterns, availability needs and recovery objectives, then recommend the simplest architecture that meets them, with a documented path to scale later.", when: "Before launch of a new product, before a significant growth phase, or when the current setup is struggling.", value: "Capacity and resilience in proportion to real need, without paying for complexity you do not yet require." },
  { icon: "check", title: "Data integrity and validation", involves: "Defining the rules that keep data correct and enforcing them at the right layers: database constraints, transactions and application validation.", problem: "Invalid or partial data entering the system through forms, imports or integrations.", how: "Non-negotiable rules (uniqueness, required relationships, valid ranges) are enforced by the database; user-friendly checks are repeated in the application; multi-step changes run inside transactions so they complete fully or not at all; imports are validated before they are committed.", when: "Any system where data comes from several sources or where errors are costly to correct.", value: "Data that is right the first time, rather than fixed in expensive clean-up exercises." },
  { icon: "docs", title: "Database documentation", involves: "Producing and maintaining an ERD, a data dictionary describing every table and column, business rules, access roles, backup and recovery procedures, and a change history.", problem: "Knowledge that leaves with a developer, and a database that nobody wants to change because nobody fully understands it.", how: "Documentation is produced alongside the design and kept in version control with the schema, so it changes when the database changes.", when: "Always, and particularly before handing a system to a new team or supplier.", value: "Lower support costs, faster onboarding and freedom to change suppliers." },
];

export const SQL = {
  intro: "Relational (SQL) databases store data in tables of rows and columns, connected through keys. They remain the right choice for most business applications because they protect accuracy: they enforce relationships and constraints, and they process changes in transactions that either complete fully or are rolled back.",
  howTitle: "How relational databases work",
  how: [
    ["Tables and relationships:", "each table holds one kind of entity, and relationships between tables are expressed through keys rather than duplicated data."],
    ["Primary and foreign keys:", "a primary key identifies each row uniquely; a foreign key links a row to another table and prevents references to records that do not exist."],
    ["SQL queries and joins:", "SQL retrieves and combines data across tables in a single request, for example orders with their customers and line items, without storing that information twice."],
    ["Indexing:", "indexes let the database find rows without reading the whole table. Good indexes match the filters, joins and sort orders that the application actually uses."],
    ["Transactions:", "a group of changes, such as creating an invoice and reducing stock, is applied as one unit, so a failure part-way through leaves no half-finished data."],
    ["Constraints:", "unique, not-null, check and foreign-key constraints stop invalid data at the point of entry."],
    ["Query execution:", "the database's query planner decides how to run each query. Reading its execution plans shows where a query is scanning far more data than it needs."],
    ["Relational data integrity:", "together, keys, constraints and transactions guarantee that the data obeys your business rules even when several users or systems change it at once."],
  ] as [string, string][],
  platformsTitle: "Relational platforms we work with",
  platforms: [
    ["PostgreSQL:", "our usual recommendation for new transactional systems. It offers strong standards compliance, rich data types (including JSON for semi-structured fields), powerful indexing options, mature replication and a large ecosystem of managed hosting."],
    ["MySQL:", "widely used, well supported by hosting providers and many existing applications and content platforms. A sensible choice where an application or team is already built around it."],
  ] as [string, string][],
  otherPlatforms: "If your existing systems run on another relational platform, we will assess integration or migration requirements during discovery and confirm the right approach before work begins.",
  suitsTitle: "Applications that suit a relational database",
  suits: "Order and invoicing systems, bookings and scheduling, stock and inventory, accounting and financial records, customer portals, ERP and CRM back ends, SaaS products with accounts and subscriptions, and any system where reporting must reconcile to the penny.",
};

export const NOSQL = {
  intro: "NoSQL is a family of databases that store data in forms other than relational tables. They are useful for specific workloads, but they are not automatically faster or better than SQL. Each type makes deliberate trade-offs.",
  documentTitle: "Document databases",
  document: "**MongoDB** stores data as flexible documents, similar to JSON, where related information can be kept together in a single record. This suits data that varies in shape from one record to the next, such as product catalogues with different attributes per category, content, user-generated data or event payloads from external systems. Good document design starts from the application's access patterns: data that is read together is stored together, and the cost is that some information may be duplicated across documents and must be kept consistent by the application.",
  keyValueTitle: "Key-value stores and caching",
  keyValue: "**Redis** holds data in memory as keys and values, which makes it very fast for small, frequently accessed items. We typically use it for caching the results of expensive queries, user sessions, rate limiting, counters, short-lived tokens and background job queues. It is used alongside a primary database, not as a replacement for one, and cached data is designed to expire or be refreshed so users never see stale information for longer than the business allows.",
  chooseTitle: "SQL or NoSQL? Choosing on evidence",
  rows: [
    ["Data structure", "Fixed, well-defined schema with enforced relationships", "Flexible or varying structures; relationships handled by the application"],
    ["Consistency", "Strong consistency and multi-row transactions as standard", "Varies by product and configuration; often designed around single-record updates"],
    ["Querying", "Ad-hoc queries, joins and reporting across many tables", "Fast for known access patterns; ad-hoc reporting is harder"],
    ["Scaling", "Scales up well, and out through replicas and partitioning", "Many products are designed for horizontal scaling from the start"],
    ["Best suited to", "Transactions, finance, orders, stock, reporting", "Variable content, high-volume events, caching, sessions"],
  ],
  outro: "Many well-designed systems use both: a relational database as the system of record, with Redis for caching and MongoDB or PostgreSQL's JSON support for genuinely variable data. We recommend NoSQL where its strengths match a real requirement, not because it is fashionable.",
};

export const MODELLING = {
  intro: "Good database architecture is a series of deliberate decisions, recorded so that the next person understands why the database looks the way it does.",
  modelsTitle: "Conceptual, logical and physical models",
  models: [
    ["Conceptual model:", "the business view. It names the main entities (customer, order, product, supplier) and how they relate, in language the whole team understands. No technology decisions are made at this stage."],
    ["Logical model:", "the detailed design. Each entity gains attributes, keys and cardinality; many-to-many relationships are resolved; normalisation is applied. It is still independent of any particular database product."],
    ["Physical model:", "the implementation for the chosen database: tables, data types, indexes, constraints, partitions and storage settings."],
  ] as [string, string][],
  modelsOutro: "Moving through these stages, and reviewing each one with your team, catches misunderstandings while they are still cheap to fix. The **entity relationship diagram** produced along the way becomes the map of your data for everyone who works on the system.",
  accessTitle: "Designing for access patterns",
  access: "A design that is correct on paper can still be slow if it ignores how data is used. We list the most important reads and writes, such as \"show a customer's last 20 orders\" or \"post 5,000 transactions overnight\", estimate their frequency and volume, and design indexes, relationships and, where justified, summary tables around them. Read-heavy and write-heavy workloads are often served differently: the first may benefit from replicas and caching, the second from careful indexing, batching and partitioning.",
  evolutionTitle: "Schema evolution and the data lifecycle",
  evolution: "Databases change as businesses change. We manage every change as a versioned **schema migration**, tested before deployment and designed to be backwards-compatible where systems must stay online: add the new column, backfill it, switch the application, then remove the old one. We also plan the **data lifecycle** from the start: how long each type of record is kept, when history is archived, and how data is deleted when it is no longer needed, which keeps the database fast and supports your data protection obligations.",
  decisions: "Architecture decisions such as relational versus document storage, single versus replicated databases, or a separate reporting database are written down with the reasons and alternatives considered. This is what makes a database maintainable years later.",
};

export const PERFORMANCE = {
  intro: "Slow applications are often blamed on servers or code, but the cause is frequently a few inefficient queries or missing indexes. Every query that reads far more data than it needs consumes memory, disk and processor time, and under load those queries queue behind each other until the whole application slows down. We treat performance as diagnosis first: measure, find the real cause, fix it, then measure again.",
  items: [
    { icon: "query", title: "Query optimisation", text: "Rewriting queries that fetch unnecessary columns or rows, avoid usable indexes, or run once per item in a loop (the \"N+1\" problem) instead of once per page. Often the largest gains come from changing how the application asks for data rather than from the database itself." },
    { icon: "index", title: "Indexing strategies", text: "Designing indexes around real filters, joins and sort orders, including composite indexes in the right column order, partial indexes for common subsets and covering indexes for frequent reads, while removing unused indexes that slow down every write." },
    { icon: "plan", title: "Query execution plans", text: "Reading the database's execution plans to see exactly how each slow query runs: which indexes are used, where full table scans occur, and where estimates are badly wrong because statistics are out of date." },
    { icon: "profile", title: "Database profiling", text: "Using the database's own statistics to rank queries by total time consumed, not just individual slowness, so effort goes where it has the most effect." },
    { icon: "pool", title: "Connection pooling", text: "Reusing a managed pool of database connections instead of opening a new one for every request, which prevents connection storms during busy periods and is essential for serverless and highly concurrent applications." },
    { icon: "cache", title: "Caching strategies", text: "Serving frequently read, rarely changed data from a cache such as Redis, with clear rules for expiry and invalidation, so the database handles fewer repetitive requests." },
    { icon: "monitor", title: "Database monitoring", text: "Continuous tracking of query latency, connections, locks, replication lag, storage growth and resource use, with alerts before users notice a problem." },
    { icon: "rw", title: "Read/write optimisation", text: "Batching bulk writes, keeping transactions short to reduce locking, and directing read-heavy reporting to replicas or summary tables so it does not compete with day-to-day transactions." },
    { icon: "slow", title: "Slow query analysis", text: "Logging queries that exceed an agreed threshold and reviewing them regularly, so new performance problems introduced by new features are caught early." },
    { icon: "workload", title: "Workload management", text: "Separating competing workloads, such as scheduling heavy reports and imports outside peak hours or moving analytics to a reporting copy, so critical transactions are never starved of resources." },
  ],
  outro: "Improvements depend entirely on the starting point, so we do not promise a percentage. We measure before and after each change and report what actually improved.",
};

export const SCALE = {
  intro: "Most business databases do not need complex distributed architecture. A well-designed, well-indexed relational database on appropriately sized managed hosting can serve a great deal of traffic. We add complexity only when measurements show it is needed, because every step adds operational work.",
  items: [
    ["Vertical scaling:", "moving to a larger server with more memory and processing power. Simple and often the right first step, but it has an upper limit and a cost curve."],
    ["Horizontal scaling:", "spreading load across several servers. Powerful, but it introduces coordination and consistency challenges."],
    ["Read replicas:", "copies of the database that serve read-only queries such as reports and dashboards, reducing load on the primary. Replicas can lag slightly behind, so screens that must show the very latest data still read from the primary."],
    ["Replication:", "continuously copying changes to one or more standby databases, which supports both read scaling and failover."],
    ["Partitioning:", "splitting a very large table into smaller parts, for example by month, so queries and maintenance touch only the relevant part and old data can be archived cleanly."],
    ["Sharding (where appropriate):", "distributing data across separate databases, usually by customer or region. It allows very large scale, but complicates queries, transactions and operations, so we recommend it only when other options have been exhausted."],
    ["Database clustering:", "a group of database servers managed together to provide automatic failover and, for some products, shared workload."],
    ["High availability:", "a standby in a separate data centre (availability zone) that can take over automatically if the primary fails."],
    ["Backup and recovery:", "automated backups with point-in-time recovery, stored separately from the database, and restored regularly to prove they work."],
    ["Disaster recovery:", "agreed recovery point (how much data could be lost) and recovery time (how long until service resumes) objectives, with a documented and rehearsed recovery plan."],
  ] as [string, string][],
  // Body link 1 of 4.
  outro: {
    text: "Where the wider hosting environment, networks or deployment pipelines also need attention, our [[link]] cover the infrastructure around the database.",
    link: { anchor: "cloud and DevOps services", href: "/services/cloud-devops" },
  } as LinkedText,
};

export const MIGRATION = {
  intro: "Moving a database, upgrading it or changing its structure is one of the riskiest changes a business system goes through, because the data must arrive complete and correct, and the business usually cannot stop trading while it happens. We plan migrations as engineering projects, not file copies.",
  services: [
    ["Legacy database migration:", "moving from ageing platforms, unsupported versions, desktop databases or spreadsheets to a modern, supported database."],
    ["SQL to SQL migration:", "moving between relational platforms or hosting environments, including translating data types, functions and behaviours that differ between products."],
    ["SQL to NoSQL migration (where appropriate):", "moving specific workloads to a document or key-value store only where analysis shows a clear benefit, and usually alongside, not instead of, the relational system of record."],
    ["Database version upgrades:", "upgrading to a supported major version, with compatibility testing of queries and application behaviour."],
    ["Schema migration:", "restructuring an existing database, such as splitting tables, normalising duplicated data or introducing constraints, without losing information."],
    ["Data transformation:", "cleansing, deduplicating, reformatting and mapping data so it fits the new structure and rules."],
    ["Data validation:", "comparing record counts, totals, checksums and samples between source and target, and checking that business rules hold in the new database."],
    ["Migration testing:", "rehearsing the full migration against a realistic copy of production data, timing each step and fixing issues before the real cut-over."],
    ["Downtime planning:", "choosing between a short planned maintenance window and a near-zero-downtime approach using replication or change data capture, based on what the business can tolerate."],
    ["Rollback strategies:", "a tested route back to the original database at every stage, with clear decision points for whether to proceed or reverse."],
  ] as [string, string][],
  riskTitle: "How we reduce migration risk",
  steps: [
    ["Assess:", "profile the source data, its quality, volumes, dependencies and the applications that use it."],
    ["Design:", "define the target structure and a field-by-field mapping, agreed with your team."],
    ["Rehearse:", "run trial migrations repeatedly, fixing data and scripts each time."],
    ["Validate:", "reconcile counts, balances and samples, and have the business sign off the results."],
    ["Cut over:", "follow a written runbook during an agreed window, with go/no-go checkpoints."],
    ["Support:", "monitor closely after go-live and keep the rollback route available until the new database is proven."],
  ] as [string, string][],
};

export const SECURITY_INTRO = "A database often holds an organisation's most sensitive information: customer details, financial records, health or employee data. Security is designed in from the first schema, not added at the end.";

export const SECURITY = [
  { icon: "key", title: "Authentication", text: "Individual named accounts for people, separate service accounts for applications, strong passwords or key-based authentication, and single sign-on or multi-factor authentication for administrative access where the platform supports it." },
  { icon: "users", title: "Role-based access control", text: "Permissions granted to roles, such as reporting, application and administrator, rather than to individuals one by one." },
  { icon: "lock", title: "Least-privilege permissions", text: "Each person and service receives only the access it needs. An application that only reads data cannot delete it." },
  { icon: "shield", title: "Encryption at rest", text: "Database storage, backups and snapshots encrypted with managed keys." },
  { icon: "transit", title: "Encryption in transit", text: "TLS for every connection between applications and the database." },
  { icon: "network", title: "Secure database connections", text: "Databases placed on private networks and never exposed directly to the internet, with administrative access through secure, logged routes." },
  { icon: "bug", title: "SQL injection prevention", text: "Parameterised queries and safe data access libraries throughout, so user input is never executed as SQL." },
  { icon: "check", title: "Input validation", text: "Checks on type, length, format and allowed values in the application and API, backed by constraints in the database." },
  { icon: "history", title: "Audit logging", text: "Records of who accessed or changed sensitive data and administrative settings, and when." },
  { icon: "backup", title: "Backup security", text: "Backups encrypted, access-controlled, stored separately from production and tested by restoring them." },
  { icon: "secret", title: "Secrets management", text: "Database credentials held in a managed secrets store, rotated, and never written into code or configuration files." },
  { icon: "alert", title: "Access monitoring", text: "Alerts for unusual activity such as bulk exports, repeated failed logins or access outside normal patterns." },
  { icon: "retention", title: "Data retention", text: "Defined retention periods for each type of personal data, with automated archiving or deletion." },
];

export const GDPR = "**UK GDPR:** where a database holds personal data, we design for data minimisation, appropriate retention, and the ability to find, export and delete an individual's data in response to their rights. We support data protection impact assessments where processing is high-risk, and can host data in UK or other appropriate regions. Your organisation remains the data controller and is responsible for its compliance; we provide technical design and documentation, not legal advice.";

export const SECURITY_NOTE = "No system can be made perfectly secure, and ClickMasters does not claim formal security certifications for this work. We aim to reduce risk in proportion to what is at stake and to make security controls visible and reviewable.";

export const INTEGRATION = {
  intro: "A database rarely serves a single application. Our database integration services make sure every system that reads or writes your data does so reliably and safely.",
  connectsTitle: "Databases we design commonly connect with",
  connects: [
    ["Web applications and mobile applications,", "usually through an API rather than direct database access, so rules and permissions are enforced in one place."],
    ["ERP and CRM systems,", "exchanging customers, products, orders and invoices with clear ownership of each type of record."],
    ["E-commerce platforms,", "synchronising orders, stock levels and customer accounts."],
    ["SaaS applications", "that need to share data with your own systems."],
    ["REST APIs,", "both those we build to expose your data and third-party APIs we consume."],
    ["Business intelligence tools,", "ideally connected to a reporting replica or summary tables rather than the live transactional database."],
    ["Cloud services,", "such as object storage for files, message queues and managed analytics."],
    ["Third-party software,", "including accounting, payment and logistics systems."],
  ] as [string, string][],
  reliable: "**How we make integrations reliable:** data is validated at the boundary before it is written; changes that span several records run in transactions; synchronisation uses stable identifiers so the same record is never created twice; failed messages are retried safely and held in an error queue with the reason if they still fail; and reconciliation checks confirm that systems agree.",
  example: "**Example:** when a web shop takes an order, an API writes the order and its lines to the database in a single transaction, reserves stock and records the payment reference. A background process then sends the order to the ERP; if the ERP is briefly unavailable, the message is retried rather than lost, and a nightly reconciliation report confirms that every order exists in both systems.",
  // Body link 2 of 4.
  web: {
    text: "Where a project also needs a new browser-based front end, our [[link]] team builds it on the same data layer.",
    link: { anchor: "web application development", href: "/services/web-application-development" },
  } as LinkedText,
  // Body link 3 of 4.
  erp: {
    text: "For operational systems such as ordering, stock and finance, see our [[link]] service.",
    link: { anchor: "ERP and CRM development", href: "/services/erp-crm-development" },
  } as LinkedText,
};

export const INDUSTRIES_NOTE = "The examples below describe common data challenges in each sector and suitable database approaches. They are not claims of completed ClickMasters projects in these industries.";

export const INDUSTRIES = [
  { icon: "saas", title: "SaaS and technology businesses", challenge: "Many customers sharing one platform, with strict separation of each customer's data.", approach: "A tenant identifier on every relevant table, enforced through constraints and row-level security, with indexing and partitioning planned for growth, and a clear route to dedicated databases for the largest customers." },
  { icon: "cart", title: "E-commerce and retail", challenge: "Product catalogues with varying attributes, stock that must never oversell, and peaks during promotions.", approach: "Relational tables for orders, stock and payments with transactional stock reservation; flexible attributes in JSON fields or a document store; Redis caching for catalogue pages." },
  { icon: "health", title: "Healthcare technology", challenge: "Special category data, strict access needs and long retention requirements.", approach: "Minimal data collection, field-level access control, encryption, detailed audit logs, defined retention, and design alongside a data protection impact assessment." },
  { icon: "finance", title: "Financial technology", challenge: "Balances and ledgers that must always reconcile, with a full audit history.", approach: "An append-only, double-entry ledger structure in a relational database, strict transactions and constraints, and immutable history tables for audit." },
  { icon: "truck", title: "Logistics and supply chain", challenge: "High volumes of tracking events alongside the shipments and customers they relate to.", approach: "Relational core data for shipments and accounts, time-partitioned event tables that can be archived, and indexes designed for \"latest status\" queries." },
  { icon: "education", title: "Education technology", challenge: "Learner records, assessments and progress data shared across courses and institutions, with personal data protection for young people.", approach: "A clear model of learners, enrolments and assessments, role-based access by institution, and retention rules agreed with each organisation." },
  { icon: "factory", title: "Manufacturing", challenge: "Bills of materials, production orders and machine data at very different volumes.", approach: "A relational model for products, bills of materials and orders; separate, partitioned storage for high-frequency sensor readings, with summaries fed back to the operational system." },
  { icon: "briefcase", title: "Professional services", challenge: "Clients, matters, time entries and documents that must be accurate for billing and confidential by client.", approach: "A relational model with strict client-level access control, constraints that keep time and billing consistent, and audit trails." },
  { icon: "building", title: "Enterprise applications", challenge: "Many systems and teams depending on shared data, with inconsistent definitions.", approach: "Agreed master data definitions, a documented data model, controlled integration through APIs, and a separate reporting store so analytics do not affect operations." },
];

export const PROCESS = [
  { title: "Business and technical requirements", what: "We define what the database must support: the processes, users, systems, data volumes, growth, availability, security and reporting needs.", purpose: "Every later decision is judged against agreed criteria." },
  { title: "Data discovery and analysis", what: "We examine existing data sources, spreadsheets and databases, profile data quality and identify duplicates, gaps and inconsistent definitions.", purpose: "An honest picture of the data you actually have, not the data you assume you have." },
  { title: "Conceptual data modelling", what: "We map the main business entities and their relationships in plain language and review them with your team.", purpose: "Business and technical people agree on what the system is about before any detail is designed." },
  { title: "Logical database design", what: "We add attributes, keys, cardinality and business rules, resolve many-to-many relationships and normalise the model.", purpose: "A complete, technology-independent design that can be checked for correctness." },
  { title: "Physical database design", what: "We translate the logical model into tables, data types, indexes, constraints and partitions for the chosen database.", purpose: "A design that is correct and fast for real access patterns." },
  { title: "Technology selection", what: "We confirm the database platforms, hosting model and supporting tools, such as a relational database for core data and a cache for frequent reads, with the reasoning documented.", purpose: "Tools chosen for the workload, not by habit." },
  { title: "Schema development", what: "We implement the schema as versioned migration scripts, with seed and test data, under version control.", purpose: "A database that can be recreated and changed safely and repeatably." },
  { title: "Query and performance testing", what: "We write and test the key queries, review execution plans and load-test with realistic data volumes.", purpose: "Performance problems found before users find them." },
  { title: "Security and validation", what: "We configure roles, permissions, encryption, auditing and backups, and test constraints, validation and restore procedures.", purpose: "Evidence that the database protects and recovers data as designed." },
  { title: "Deployment and integration", what: "We deploy the database, migrate or load data, connect applications and integrations, and verify the results.", purpose: "A controlled launch with data that has been reconciled and signed off." },
  { title: "Monitoring and maintenance", what: "We monitor performance, growth and errors, review slow queries, apply updates and manage schema changes as the business evolves.", purpose: "A database that stays fast, secure and understood over time." },
];

export const COMPARE = {
  intro: "\"Off-the-shelf\" covers two different things: packaged software that comes with its own fixed database, and managed database platforms that provide the engine but leave the design to you. Both have their place.",
  headers: ["Factor", "Packaged software with a fixed database", "Custom-designed database (on a managed or self-hosted platform)"],
  rows: [
    ["Flexibility", "Limited to the vendor's data model", "Structured around your processes and rules"],
    ["Customisation", "Custom fields and configuration within limits", "Any entity, relationship or rule your business needs"],
    ["Integration", "Through the vendor's APIs and export options", "Designed for your integration requirements from the start"],
    ["Performance requirements", "Tuned for typical customers, not your specific workload", "Indexed and structured for your actual access patterns"],
    ["Scalability", "Within the vendor's plans and limits", "Scales with the architecture and hosting you choose"],
    ["Data ownership", "Your data, held under the vendor's terms and formats", "Your data, in a structure and location you control"],
    ["Maintenance", "Vendor maintains the database and upgrades", "You (or we) maintain the schema; a managed platform handles patching and backups"],
    ["Operational complexity", "Low; the vendor carries most of it", "Moderate; reduced significantly by managed database hosting"],
    ["Total cost of ownership", "Lower upfront; licences and limitations over time", "Higher upfront design and build; no per-user licence for the database design itself"],
  ],
  enoughTitle: "When an existing product or managed platform is enough",
  enough: "Your process is standard, a packaged system covers it well, and you do not need unusual integrations or reporting. Even when building custom software, a managed database service (managed PostgreSQL, MySQL, MongoDB or Redis) is usually better than running database servers yourself, because it handles patching, backups and failover.",
  customTitle: "When custom database design makes sense",
  // Body link 4 of 4.
  custom: {
    text: "Your data and rules are specific to how you operate, you are building your own application or product, reporting must combine data in ways a package does not support, or you need full control over structure, performance, location and access. Where the database is part of a wider bespoke system, our [[link]] team builds the application around it as one project.",
    link: { anchor: "custom software development", href: "/services/custom-software-development" },
  } as LinkedText,
};

export const TECH = {
  intro: "We choose tools for the workload, your existing systems and the team that will maintain the database. The technologies below are already part of ClickMasters' development capability; the stack for each project is agreed in the technology selection stage.",
  groups: [
    { title: "Databases", items: [
      ["PostgreSQL:", "our default for new transactional systems, for its integrity features, indexing options, JSON support and mature replication."],
      ["MySQL:", "for applications and teams already built around it, and where hosting or platform requirements favour it."],
      ["MongoDB:", "for genuinely variable, document-shaped data and high-volume event storage."],
      ["Redis:", "for caching, sessions, counters, rate limiting and background job queues."],
      ["Elasticsearch:", "for full-text search across large volumes of records, kept in sync with the primary database rather than used as the system of record."],
      ["Firebase:", "for mobile and real-time applications where its managed, synchronised data model is a good fit."],
    ] as [string, string][] },
    { title: "Backend and integration", items: [
      ["Node.js and Laravel (PHP):", "application layers and APIs that read and write the database through parameterised queries and data access libraries."],
      ["REST APIs and webhooks:", "controlled access to data for web, mobile and third-party systems."],
    ] as [string, string][] },
    { title: "Development and infrastructure", items: [
      ["Docker:", "consistent local and test databases that match production."],
      ["Managed cloud databases on AWS, Microsoft Azure or Google Cloud:", "automated backups, patching, replicas and failover."],
      ["Version-controlled schema migrations:", "every database change scripted, reviewed and repeatable."],
      ["Monitoring:", "Prometheus and Grafana dashboards, or the cloud provider's monitoring, for query latency, connections, replication and growth."],
    ] as [string, string][] },
  ],
};

export const WHY = [
  { icon: "target", title: "Business-focused database planning", text: "We start with your processes, users and reporting needs, and model the data around them before choosing technology." },
  { icon: "model", title: "Structured data architecture", text: "Clear entities, keys and constraints, so data stays correct as more people and systems use it." },
  { icon: "scale", title: "Scalable software foundations", text: "Designs that handle growth through indexing, sensible architecture and a documented path to scale, without premature complexity." },
  { icon: "plug", title: "Practical system integration", text: "As a software development company, we build the APIs and integrations that connect your database to the applications around it." },
  { icon: "query", title: "Performance-conscious development", text: "Queries and indexes designed for real access patterns, and performance measured rather than assumed." },
  { icon: "shield", title: "Security-aware engineering", text: "Least-privilege access, encryption, auditing and tested backups as standard parts of the design." },
  { icon: "docs", title: "Maintainable database solutions", text: "Versioned schema changes, a data dictionary and an ERD handed over with the code, so you are not dependent on us." },
  { icon: "chat", title: "Clear technical communication", text: "Models, decisions and recommendations explained in language your stakeholders can follow." },
];

/** FAQs: rendered on the page and used for FAQPage JSON-LD (identical text). */
export const FAQS: { q: string; a: string[] }[] = [
  { q: "What are database design services?", a: ["Database design services cover planning how an organisation's data is structured, related, stored and protected. That includes gathering requirements, creating a data model and entity relationship diagram, normalising the design, defining tables, keys, constraints and indexes, and documenting it all, so the database stays accurate and fast as the business grows."] },
  { q: "What does a database development company do?", a: ["A database development company designs and builds the data layer of business software: it models the data, implements the schema, writes and optimises queries, builds the APIs and integrations that use the database, migrates data from older systems, and secures, monitors and maintains the database after launch. A good one also improves existing databases rather than only building new ones."] },
  { q: "What is the difference between SQL and NoSQL databases?", a: ["SQL (relational) databases store data in related tables with a defined structure, enforce relationships and rules, and process changes in transactions, which makes them ideal for orders, finance and reporting. NoSQL databases, such as document or key-value stores, use more flexible structures and suit variable data, caching and some high-volume workloads. Neither is automatically better; many systems use both."] },
  { q: "How much does custom database development cost in the UK?", a: ["Cost depends on the number of entities and business rules, the volume and quality of existing data to migrate, performance and availability requirements, the number of systems to integrate, security and reporting needs, and whether ongoing support is included. Hosting costs are separate. We provide a fixed-price or time-and-materials estimate with milestones after a short discovery stage, rather than quoting before we understand your data."] },
  { q: "What is database architecture?", a: ["Database architecture is the set of decisions about how data is stored, served and protected: which database technologies to use, how reads and writes are handled, whether replicas, partitioning or caching are needed, how the database is backed up and recovered, and how it stays available. It sits between the data model and the infrastructure that runs it."] },
  { q: "Why is database normalisation important?", a: ["Normalisation organises data so each fact is stored once, in the right place. This prevents duplicates and contradictions, such as two different addresses for the same customer, reduces storage and makes changes safer. Where reporting needs pre-joined data, controlled denormalisation can be added deliberately, but starting from a normalised design keeps the core data trustworthy."] },
  { q: "Can an existing database be redesigned or optimised?", a: ["Yes. We start by reviewing the current schema, data quality, slow queries and how applications use the database. Many problems can be fixed with better indexes, rewritten queries and added constraints. Where the structure itself is the problem, we redesign it in stages using versioned migrations, keeping systems running while the data is moved to the improved design."] },
  { q: "What is involved in database migration?", a: ["A migration involves profiling the source data, designing the target structure and field mapping, cleansing and transforming data, rehearsing the migration on realistic copies, validating counts, totals and business rules, planning downtime or a near-zero-downtime cut-over, and keeping a tested rollback route. The aim is for the new database to be complete, correct and signed off before the old one is retired."] },
  { q: "How can database performance be improved?", a: ["Start by measuring: identify which queries consume the most time and read their execution plans. Common fixes include adding or correcting indexes, rewriting inefficient queries, removing repeated queries made in loops, using connection pooling, caching frequently read data, moving reporting to a replica, and archiving old data. Results depend on the starting point, so improvements should be measured before and after each change."] },
  { q: "Which database is best for a business application?", a: ["For most business applications, a relational database such as PostgreSQL or MySQL is the best starting point because it protects data accuracy and supports reporting. Document databases such as MongoDB suit variable data, and Redis suits caching and sessions. The right choice depends on your data, workload, team skills and existing systems, which is why we decide during discovery rather than by default."] },
];

export const FINAL_CTA = {
  title: "Build a Database That Supports",
  titleAccent: "Your Business Growth",
  body: {
    text: "Whether you are designing the data model for a new system, struggling with slow queries and unreliable reports, planning a migration or connecting several applications to the same data, tell us where you are today. We will review your requirements or your existing database, explain what we would change and why, and recommend a sensible next step, with no obligation.",
  } as LinkedText,
  bring: [
    "A short description of the system and the data it holds",
    "The problems you see today: speed, duplicates, reporting, scaling or security",
    "Any deadlines, such as a launch, a growth phase or a platform being retired",
  ],
};

export const SCHEMA_SERVICE = {
  name: "Database Design and Development",
  alternateName: "Database Design Services",
  serviceType: ["Database design", "Database development", "Database architecture", "Database performance optimisation", "Database migration"],
  description: SEO.description,
  relatedServicePath: "/services/custom-software-development",
  catalogName: "Database design and development services",
  catalog: [
    ...DESIGN_SERVICES.map((s) => s.title.charAt(0).toUpperCase() + s.title.slice(1)),
    "SQL database development", "NoSQL database development", "Database performance optimisation",
    "Database migration and modernisation", "Database security and data protection", "Database integration services",
  ],
};

type OgTone = "plain" | "purple" | "teal" | "sun";
/** Social sharing image content (used by ./opengraph-image.tsx). */
export const OG: { title: string; accent: string; rows: [string, OgTone][][] } = {
  title: "Database Design & Development",
  accent: "Data that stays correct as you grow",
  rows: [
    [["Model", "purple"], ["Schema", "purple"], ["Queries", "teal"]],
    [["PostgreSQL · MySQL · MongoDB · Redis", "sun"]],
    [["Indexed", "teal"], ["Secured", "teal"], ["Backed up", "teal"]],
  ],
};
