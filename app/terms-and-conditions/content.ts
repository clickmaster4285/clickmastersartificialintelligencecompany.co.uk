/*
 * Terms & Conditions content for /terms-and-conditions.
 *
 * Inline markup used in clause text:
 *   [[anchor text|/path]]  internal link (live pages only; each path used once)
 *   {{KEY}}                business detail from TERMS_BUSINESS below
 *
 * IMPORTANT: every value in TERMS_BUSINESS that is `null` renders as a visible
 * "[To be confirmed: …]" marker. Fill these in with VERIFIED details and have
 * the document reviewed by a qualified UK solicitor before relying on it.
 * Never replace a null with an invented value.
 */

export const TERMS_LAST_UPDATED = "25 November 2026";
export const TERMS_LAST_UPDATED_ISO = "2026-11-25";

type BusinessDetail = { label: string; value: string | null };

export const TERMS_BUSINESS = {
  LEGAL_NAME: { label: "full legal name of the contracting entity (e.g. company name exactly as registered)", value: null },
  ENTITY_TYPE: { label: "type of legal entity and country of registration", value: null },
  COMPANY_NUMBER: { label: "company registration number", value: null },
  REGISTERED_OFFICE: { label: "registered office address", value: null },
  TRADING_ADDRESS: { label: "geographic trading address, if different", value: null },
  VAT_NUMBER: { label: "VAT registration number, or confirmation that the business is not VAT-registered", value: null },
  DEPOSIT: { label: "standard deposit, e.g. a percentage of the project price", value: null },
  PAYMENT_DAYS: { label: "number of days for paying invoices", value: null },
  CONSUMER_LATE_INTEREST: { label: "interest rate on late consumer payments", value: null },
  SUSPENSION_DAYS: { label: "days overdue before work may be suspended", value: null },
  ACCEPTANCE_DAYS: { label: "acceptance testing period in working days", value: null },
  WARRANTY_DAYS: { label: "post-acceptance defect-fixing period", value: null },
  IP_TRANSFER_POINT: { label: "point at which ownership of bespoke deliverables transfers (e.g. on payment in full)", value: null },
  LIABILITY_CAP: { label: "business liability cap (e.g. total fees paid or payable under the relevant Statement of Work in the 12 months before the claim)", value: null },
  TERMINATION_NOTICE: { label: "notice period for terminating ongoing services without cause", value: null },
  COMPLAINT_ACK_DAYS: { label: "working days to acknowledge a complaint", value: null },
  COMPLAINT_RESPONSE_DAYS: { label: "days to give a full response to a complaint", value: null },
  ADR_PROVIDER: { label: "name of an alternative dispute resolution provider, if the business agrees to use one", value: null },
} as const satisfies Record<string, BusinessDetail>;

export type BusinessKey = keyof typeof TERMS_BUSINESS;

export type Clause = { text: string; sub?: string[] };
export type ClauseGroup = { heading?: string; clauses: Clause[] };
export type TermsSection = { id: string; title: string; intro?: string; groups: ClauseGroup[] };

const g = (clauses: Clause[], heading?: string): ClauseGroup => ({ heading, clauses });
const c = (text: string, sub?: string[]): Clause => ({ text, sub });

export const TERMS_SUMMARY = [
  { title: "Business clients", text: "If you buy our services for a business, these Terms apply alongside your Proposal and any Statement of Work. Some limits on liability apply to you that cannot apply to consumers." },
  { title: "Consumers", text: "If you are an individual buying for yourself, you have legal rights under the Consumer Rights Act 2015 and the Consumer Contracts Regulations 2013. Nothing in these Terms takes those rights away." },
  { title: "Website visitors", text: "If you are only browsing, sections 1 to 7, 30, 31 and 37 to 41 apply to your use of the site." },
];

export const TERMS_SECTIONS: TermsSection[] = [
  {
    id: "introduction",
    title: "Introduction and Acceptance of Terms",
    groups: [g([
      c("These Terms and Conditions (the \"Terms\") govern your use of the website at clickmastersartificialintelligencecompany.co.uk (the \"Website\") and the supply of software development, AI development and related digital services by ClickMasters (\"ClickMasters\", \"we\", \"us\" or \"our\")."),
      c("By using the Website you agree to the parts of these Terms that apply to website use. Terms governing paid services apply only once a contract is formed under section 9."),
      c("Please read these Terms carefully. If you do not agree with them, do not use the Website or our services."),
      c("Where you buy services from us, these Terms form part of your contract together with the documents described in section 9. If there is a conflict between documents, the order of priority is: (a) a signed Statement of Work or service agreement, (b) the accepted Proposal, (c) any data processing agreement, and (d) these Terms, unless a document expressly states otherwise. No order of priority can remove the statutory rights of a consumer."),
    ])],
  },
  {
    id: "definitions",
    title: "Definitions and Interpretation",
    groups: [g([
      c("In these Terms:", [
        "\"Business Client\" means a client acting for purposes relating to its trade, business, craft or profession, including companies, partnerships, sole traders acting in that capacity, charities and public bodies.",
        "\"Consumer\" means an individual acting wholly or mainly outside their trade, business, craft or profession, as defined in the Consumer Rights Act 2015.",
        "\"Client\" or \"you\" means the person or organisation that enquires about, orders or receives our services.",
        "\"Proposal\" means a written quotation, estimate or proposal issued by us describing the scope, price and assumptions for proposed work.",
        "\"Statement of Work\" or \"SOW\" means a document agreed in writing by both parties that sets out the specific services, Deliverables, Milestones, fees and timetable for a project.",
        "\"Deliverables\" means the software, code, models, designs, documentation and other outputs that we agree to provide under a Statement of Work.",
        "\"Milestone\" means a defined stage of a project, with its own Deliverables and, where agreed, its own payment.",
        "\"Specification\" means the agreed description of the functional and technical requirements for the Deliverables.",
        "\"Background IP\" means intellectual property owned by or licensed to a party before the start of a project or developed independently of it, including our reusable code, libraries, frameworks, templates, tools and know-how.",
        "\"Bespoke IP\" means intellectual property in the Deliverables created specifically for you under a Statement of Work, excluding Background IP and Third-Party Components.",
        "\"Third-Party Components\" means software, services, models, APIs, data or content owned by someone other than us or you, including open-source software, cloud platforms and AI model providers.",
        "\"Client Materials\" means data, content, documents, credentials, specifications, brand assets and other materials you provide to us.",
        "\"AI Output\" means content, predictions, classifications, recommendations or other results generated by an artificial intelligence or machine learning system.",
        "\"Working Day\" means a day other than a Saturday, Sunday or public holiday in England.",
      ]),
      c("Headings are for convenience only. Words such as \"including\" and \"for example\" do not limit the words that come before them. A reference to legislation includes that legislation as amended or replaced from time to time. \"Writing\" includes email."),
    ])],
  },
  {
    id: "about-clickmasters",
    title: "About ClickMasters and Business Information",
    groups: [g([
      c("ClickMasters is a software and AI development business. The Website is operated by {{LEGAL_NAME}}, a {{ENTITY_TYPE}}, registered under company number {{COMPANY_NUMBER}}, whose registered office is at {{REGISTERED_OFFICE}}."),
      c("Our geographic address for correspondence is {{TRADING_ADDRESS}}. Our VAT number is {{VAT_NUMBER}}."),
      c("You can contact us by email at sales@clickmastersartificialintelligencecompany.co.uk or by telephone on +44 7988 576086 (United Kingdom). We also publish contact lines for the United States and Pakistan on our [[contact page|/contact]]. Contact details for complaints and legal notices are set out in section 41."),
      c("We provide this information in accordance with the Electronic Commerce (EC Directive) Regulations 2002 and, where applicable, the Company, Limited Liability Partnership and Business (Names and Trading Disclosures) Regulations 2015."),
    ])],
  },
  {
    id: "scope",
    title: "Scope of Website and Services",
    groups: [g([
      c("The Website provides information about our services, including custom software, web and mobile applications, MVP and SaaS development, AI development, AI automation, ERP and CRM systems, cloud and DevOps work, integrations and ongoing support. A full list is on our [[software and AI development services|/services]] page."),
      c("Website content is general information about what we can provide. It is not an offer capable of acceptance, and it does not form part of a contract unless it is expressly included in a Proposal or Statement of Work."),
      c("Descriptions of typical timelines, package contents and starting prices on the Website are indicative. Your price, scope and timetable are those set out in your Proposal or Statement of Work. Prices shown on the Website are in pounds sterling and exclude VAT unless stated otherwise."),
      c("Our services are primarily designed for business clients. Where we agree to provide services to a Consumer, the consumer provisions in these Terms, including clauses 19.7 and 21.5 and section 22, apply in addition to, and take priority over, any conflicting provision."),
    ])],
  },
  {
    id: "eligibility",
    title: "Eligibility and Authority to Enter Contracts",
    groups: [g([
      c("You must be at least 18 years old to enter into a contract with us."),
      c("If you enter into a contract on behalf of an organisation, you confirm that you are authorised to bind that organisation, and references to \"you\" include that organisation."),
      c("You confirm that the information you give us during an enquiry or order is accurate, and that you will tell us promptly if it changes."),
      c("We may decline any enquiry or project, for example where the work would be unlawful, would conflict with existing commitments, or falls outside our capabilities."),
    ])],
  },
  {
    id: "acceptable-use",
    title: "Website Access and Acceptable Use",
    groups: [g([
      c("We make the Website available free of charge. We do not guarantee that it will always be available, uninterrupted or error-free, and we may suspend, withdraw or change any part of it for business or operational reasons."),
      c("You must not use the Website:", [
        "in any way that breaches applicable law or regulation, or for fraudulent purposes;",
        "to transmit malware, or to attempt to gain unauthorised access to the Website, its server or any connected system, which may be an offence under the Computer Misuse Act 1990;",
        "to carry out denial-of-service attacks, load testing or vulnerability scanning without our prior written permission;",
        "to scrape, harvest or systematically extract content in breach of these Terms or our intellectual property rights;",
        "to send unsolicited marketing or to impersonate any person or organisation.",
      ]),
      c("Links to third-party websites are provided for information only. We have no control over those websites and are not responsible for their content or practices."),
      c("You may link to our home page in a way that is fair and lawful and does not suggest any association with, approval of or endorsement by us where none exists."),
    ])],
  },
  {
    id: "accounts",
    title: "User Accounts and Account Security",
    groups: [g([
      c("The Website does not currently offer user accounts. This section applies where we give you access to a client portal, project management tool, code repository, staging environment, cloud console or other system in connection with a project."),
      c("You must keep login details confidential, use them only for the purpose they were provided for, and tell us promptly if you believe they have been compromised."),
      c("Where you give us credentials for your own systems, you are responsible for ensuring you are authorised to share them. We will use them only for the agreed services, store them securely, and stop using them when the services end or when you ask us to. We recommend that you create dedicated accounts for us with the minimum permissions required and revoke them at the end of the project."),
      c("We may suspend access to systems we control if we reasonably believe they are being misused or are at risk."),
    ])],
  },
  {
    id: "enquiries-quotations",
    title: "Project Enquiries and Quotations",
    groups: [g([
      c("You can enquire through our contact form, by email or by telephone. Our contact form currently opens a pre-filled email in your own email application; your enquiry is sent only when you send that email."),
      c("Initial consultations are free of charge and do not create any obligation for either party. Any advice given at that stage is preliminary and based on the information available."),
      c("Paid discovery work, such as requirements workshops, technical assessments, data readiness reviews or proofs of concept, will be agreed and priced in writing before it starts."),
      c("A Proposal is valid for 30 days from its date unless it states otherwise. It is based on the information and assumptions stated in it. If those assumptions prove incorrect, we will explain the impact and agree any changes with you under section 18."),
      c("An estimate is our reasonable forecast of cost or time and is not a fixed price, unless the Proposal expressly states that the price is fixed for a defined scope."),
      c("We will sign a reasonable non-disclosure agreement before you share confidential details, if you ask us to."),
    ])],
  },
  {
    id: "contract-formation",
    title: "Service Agreements and Contract Formation",
    groups: [g([
      c("A contract for services is formed when both parties sign a Statement of Work or service agreement, or when you accept a Proposal in writing and we confirm that acceptance in writing, whichever happens first. Payment of an invoice for a deposit is also treated as acceptance of the related Proposal."),
      c("Each contract consists of these Terms, the Proposal or Statement of Work and any other documents expressly incorporated into it. Each new project or phase may have its own Statement of Work under these Terms."),
      c("Contracts are concluded in English. We will keep a copy of each signed or accepted document and will provide a copy on request."),
      c("If you are a Consumer, we will give you the information required by the Consumer Contracts (Information, Cancellation and Additional Charges) Regulations 2013 before you are bound, including the total price, the main characteristics of the services, and information about your right to cancel. That information forms part of your contract."),
      c("Any terms you propose, for example in a purchase order, do not apply unless we expressly agree to them in writing."),
    ])],
  },
  {
    id: "custom-software",
    title: "Custom Software Development Services",
    groups: [g([
      c("Where we provide [[custom software development|/services/custom-software-development]], we will design, build, test and deliver the Deliverables described in the Statement of Work in line with the agreed Specification."),
      c("Unless a Statement of Work states otherwise, we work in iterative sprints with regular demonstrations. You will see working software during the project and can give feedback that is handled under section 18."),
      c("Integration with legacy systems, databases or third-party platforms depends on the availability, documentation and stability of those systems. We will tell you promptly about any limitation we discover that affects the agreed scope."),
      c("Where work involves migrating existing data, you remain responsible for the accuracy and lawfulness of the source data and for keeping a backup before migration begins. We will carry out migration with reasonable care and in line with an agreed migration plan."),
    ])],
  },
  {
    id: "ai-services",
    title: "AI Development and AI Automation Services",
    groups: [g([
      c("Our [[AI development services|/services/ai-development]] may include language model fine-tuning, retrieval-augmented generation, AI agents, generative AI, machine learning, natural language processing, computer vision, predictive analytics, consulting and [[AI automation of business workflows|/services/ai-automation]]."),
      c("AI and machine learning systems are probabilistic. Their performance depends on the quality, quantity and relevance of data, on the models used and on how the system is operated after delivery. Where a Statement of Work includes performance targets, it will set out how they are measured, on what data and under what conditions. Unless expressly stated in a Statement of Work, we do not promise a particular level of accuracy or a particular business result."),
      c("We recommend a proof of concept for new AI use cases so that feasibility can be tested on your real data before a full build. If a proof of concept shows that an agreed target cannot reasonably be achieved, we will discuss options with you, which may include changing the approach, the scope or stopping the project."),
      c("AI systems may rely on third-party model providers, such as commercial model APIs or open-weight models. Section 25 applies to those providers. Model providers may change, deprecate or retire models, and that may require further work, which is chargeable unless included in a support agreement."),
      c("Where an AI system will make or support decisions that have legal or similarly significant effects on individuals, for example in credit, recruitment, insurance, healthcare or access to services, you are responsible as the controller for deciding whether automated decision-making is appropriate and for putting in place the safeguards required by UK data protection law, including meaningful human review and a way for individuals to contest decisions. We will design systems to support those safeguards where the Statement of Work requires it."),
      c("Nothing in this section limits our duty to perform the services with reasonable care and skill or excludes liability that cannot lawfully be excluded."),
    ])],
  },
  {
    id: "erp-crm-saas",
    title: "ERP, CRM and SaaS Development",
    groups: [g([
      c("For business systems such as [[custom ERP software|/solutions/erp-software]], [[custom CRM software|/solutions/crm-software]] and [[MVP and SaaS platforms|/services/mvp-saas-development]], the Statement of Work will identify the modules, user roles, integrations, data migration and reporting in scope."),
      c("You are responsible for confirming that the business processes, approval rules, tax, accounting and regulatory logic configured in the system reflect your requirements. We will implement the rules you specify, but we do not provide accounting, tax, payroll or legal advice."),
      c("Where we build a SaaS product that you will offer to your own customers, you are responsible for your own terms of service, privacy notices, subscription and cancellation arrangements and compliance with consumer law in relation to your customers."),
    ])],
  },
  {
    id: "web-mobile",
    title: "Web and Mobile Application Development",
    groups: [g([
      c("For [[web application development|/services/web-application-development]] and [[mobile app development|/services/mobile-app-development]], the Statement of Work will identify the supported browsers, devices, operating system versions and accessibility standard that the Deliverables will be tested against."),
      c("Publishing a mobile app to the Apple App Store or Google Play is subject to the store operator's review and policies, which we do not control. We will prepare submissions in line with current store guidelines and help address reasonable review feedback, but we cannot guarantee approval or the timing of approval."),
      c("You will normally need to hold the developer accounts, domain names and app store listings in your own name, so that you retain control of them. Where we hold them for you, we will transfer them on request in line with section 27."),
    ])],
  },
  {
    id: "cloud-devops-apis",
    title: "Cloud Solutions, DevOps and API Integrations",
    groups: [g([
      c("Where we set up or manage cloud infrastructure, CI/CD pipelines, databases or API integrations, we will do so in line with the agreed architecture and reasonable industry security practice."),
      c("Cloud hosting, model usage, API calls and similar services are usually billed by the relevant provider according to usage. Unless a Statement of Work states otherwise, these costs are payable by you, either directly to the provider or as a pass-through cost on our invoice. We will give you an estimate of expected running costs where we can, but actual usage costs may vary."),
      c("We recommend that cloud accounts are created in your name, with us given role-based access. You remain responsible for billing on accounts held in your name."),
      c("Integrations depend on third-party APIs that may change, be rate-limited or be withdrawn. Work needed because a third party changes its API is chargeable unless it is covered by a support agreement."),
    ])],
  },
  {
    id: "scope-deliverables",
    title: "Project Scope, Deliverables and Specifications",
    groups: [g([
      c("The scope of each project is limited to the Deliverables, services and assumptions set out in the Statement of Work. Anything not included is out of scope."),
      c("Where a Specification is to be developed during discovery, the Specification approved in writing by you becomes the baseline for build, testing and acceptance."),
      c("We will tell you in writing as soon as reasonably practicable if we believe a request, an assumption or a dependency falls outside the agreed scope."),
      c("Prototypes, designs, wireframes and demonstrations illustrate intended functionality and may not reflect final performance, content or appearance."),
    ])],
  },
  {
    id: "timelines",
    title: "Project Timelines and Delivery",
    groups: [g([
      c("We will use reasonable endeavours to meet the dates in the Statement of Work. Dates are estimates unless the Statement of Work expressly states that a date is fixed and essential."),
      c("Timelines depend on you meeting your responsibilities under section 17. If you delay providing information, access, feedback, approvals or Client Materials, the timetable will be extended by a reasonable period, and we may charge for any reasonable additional costs this causes, as long as we have told you about them."),
      c("We will tell you promptly if we expect a delay that is within our control, explain the reason and propose a revised plan."),
      c("If you are a Consumer, we will provide the services within the time agreed, or, if no time is agreed, within a reasonable time, as required by section 52 of the Consumer Rights Act 2015."),
    ])],
  },
  {
    id: "client-responsibilities",
    title: "Client Responsibilities and Cooperation",
    groups: [g([
      c("You agree to:", [
        "appoint a named contact with authority to make decisions and give approvals;",
        "provide accurate and complete information, Client Materials and access to systems and people within agreed timescales;",
        "review and respond to deliverables, questions and approval requests within the times stated in the Statement of Work or, if none is stated, within a reasonable time;",
        "ensure that you have all rights, licences and consents needed for us to use Client Materials, including any personal data, for the project;",
        "provide test data, or anonymised or synthetic data where real personal data is not needed;",
        "keep your own backups of data and systems that we work on;",
        "comply with the terms of any third-party services used in the project that are held in your name.",
      ]),
      c("You are responsible for the content you publish using the Deliverables, and for decisions you make based on reports, analytics or AI Output."),
      c("We are not responsible for any failure or delay to the extent it is caused by your failure to meet these responsibilities, as long as we have told you about the issue within a reasonable time."),
    ])],
  },
  {
    id: "change-requests",
    title: "Revisions, Change Requests and Additional Work",
    groups: [g([
      c("Reasonable feedback and refinements within the agreed scope are part of the normal sprint process and are not charged separately, unless the Statement of Work limits the number of revision rounds."),
      c("Any request that changes the agreed scope, Specification, Deliverables, timetable or technology is a change request. Either party may propose a change in writing."),
      c("For each change request we will tell you, before carrying out the work, the likely effect on price, timetable and other Deliverables. A change takes effect only when both parties agree it in writing."),
      c("Unless the Statement of Work states otherwise, additional work is charged at the day or hourly rates set out in the Proposal or Statement of Work, or, for fixed-price work, at a price we agree with you in advance."),
      c("We will not charge for additional work that you have not agreed to in advance, except where it is urgent work needed to prevent imminent harm to your systems or data, in which case we will tell you as soon as possible."),
    ])],
  },
  {
    id: "payments",
    title: "Pricing, Deposits, Invoices and Payments",
    groups: [
      g([
        c("Prices are as set out in the Proposal or Statement of Work. We work on fixed-price and time-and-materials bases. For fixed-price work, the price covers the defined scope only. For time-and-materials work, we invoice for time actually spent at the agreed rates and will report time regularly."),
        c("Unless otherwise agreed, prices for Business Clients exclude VAT, which will be added at the applicable rate. Prices quoted to Consumers include VAT where VAT applies."),
        c("We may require a deposit of {{DEPOSIT}} before work starts. The deposit is paid in advance for the work in the first Milestone and is credited against our invoices for the project. A deposit is not a cancellation charge."),
        c("For milestone-based projects, we will invoice each Milestone on its completion, or on the dates set out in the Statement of Work. Support, maintenance and hosting services are normally invoiced in advance for each billing period."),
        c("Invoices are payable within {{PAYMENT_DAYS}} days of the invoice date, by bank transfer or another method we agree, without deduction, except for amounts you are entitled by law to withhold or dispute under section 20."),
        c("Third-party costs, such as cloud hosting, licences, model usage and app store fees, are payable as described in section 14.2."),
      ], "Business Clients"),
      g([
        c("If you are a Consumer, the total price, including VAT, and any additional charges will be made clear to you before you are bound. We will not charge any payment that you have not expressly agreed to, and we will not use pre-ticked boxes to obtain your agreement to extra payments."),
        c("Any deposit is credited against the price. If you cancel during the cancellation period, section 22 explains what we will refund."),
      ], "Consumers"),
    ],
  },
  {
    id: "late-payments",
    title: "Late Payments and Payment Disputes",
    groups: [g([
      c("If a Business Client pays late, we may claim interest and fixed-sum compensation under the Late Payment of Commercial Debts (Interest) Act 1998. Statutory interest runs at 8% per year above the Bank of England base rate. Fixed compensation is £40, £70 or £100, depending on the size of the debt, and we may also claim reasonable recovery costs above that sum."),
      c("If a Consumer pays late, we may charge interest on the overdue amount at {{CONSUMER_LATE_INTEREST}} from the due date until payment. We will not charge any other penalty for late payment."),
      c("If any invoice remains unpaid {{SUSPENSION_DAYS}} days after its due date, we may suspend work under section 36, after giving at least 7 days' written notice. Timelines will be extended by the period of suspension."),
      c("If you dispute an invoice in good faith, you must tell us in writing within 14 days of receiving it, explaining which part you dispute and why. You must pay the undisputed part by the due date. Both parties will try to resolve the dispute promptly under section 37."),
    ])],
  },
  {
    id: "cancellation-termination",
    title: "Cancellations, Termination and Refunds",
    groups: [
      g([
        c("A Business Client may end a project before completion by giving us written notice. You must pay for work done and costs committed up to the date of termination, including a fair proportion of any work in progress for the current Milestone, and any non-cancellable third-party costs we have reasonably incurred for you."),
        c("If fees paid in advance, including a deposit, exceed the value of the work done and costs committed at termination, we will refund the difference within 30 days."),
        c("Either party may end ongoing services, such as support, maintenance or hosting, by giving {{TERMINATION_NOTICE}} written notice, unless the Statement of Work sets a minimum term."),
        c("Either party may terminate a contract immediately by written notice if the other party:", [
          "commits a material breach that cannot be remedied, or fails to remedy a remediable material breach within 30 days of being asked in writing to do so;",
          "becomes insolvent, enters administration, liquidation or any similar arrangement, or ceases to trade, to the extent that termination on these grounds is permitted by law.",
        ]),
      ], "Business Clients"),
      g([
        c("If you are a Consumer, you have the cancellation rights explained in section 22. Outside the cancellation period you may still end the contract at any time by telling us, and you will pay for the services provided up to that point and any costs we cannot recover. We will refund any balance of advance payments without undue delay."),
        c("If our services are not provided with reasonable care and skill, or are not as described, you have the statutory remedies explained in section 32.4, including, where appropriate, a price reduction or refund."),
      ], "Consumers"),
      g([
        c("On termination for any reason:", [
          "we will deliver to you the Deliverables, or work in progress, that have been paid for, in their current state;",
          "each party will return or securely delete the other's Confidential Information, subject to section 29.4;",
          "we will provide reasonable handover assistance on request, chargeable at our standard rates unless included in the Statement of Work;",
          "clauses that by their nature should survive termination, including those on payment, intellectual property, confidentiality, data protection and liability, will continue to apply.",
        ]),
      ], "Effect of termination"),
    ],
  },
  {
    id: "consumer-cancellation",
    title: "Consumer Cancellation Rights and Exceptions",
    intro: "This section applies only if you are a Consumer and the contract was concluded at a distance (for example by email, telephone or online) or away from our business premises.",
    groups: [g([
      c("You have the right to cancel a contract for services within 14 days of the day after the contract is formed, without giving a reason, under the Consumer Contracts (Information, Cancellation and Additional Charges) Regulations 2013."),
      c("To cancel, tell us clearly in writing, for example by email to the address in section 41. You may use the model cancellation form we provide with your Proposal, but you do not have to. It is enough that you send your notice before the cancellation period ends."),
      c("We will not start work during the cancellation period unless you expressly ask us to. If you ask us to start work during the cancellation period and then cancel, you must pay an amount proportionate to the services provided up to the time you tell us you are cancelling, compared with the full contract price."),
      c("If you expressly request that a service is fully performed within the cancellation period, and acknowledge that you will lose your right to cancel once the service has been fully performed, you will lose the right to cancel once that has happened."),
      c("For digital content that is not supplied on a physical medium, such as software made available for download or access, you will lose the right to cancel once supply has begun, but only if you have given your express consent to supply starting during the cancellation period and acknowledged that you will lose your right to cancel. We will confirm this in writing."),
      c("If you cancel, we will refund all payments due to you, less any proportionate amount payable under clause 22.3, without undue delay and in any event within 14 days after the day we are told of your decision. We will use the same payment method you used, unless you agree otherwise, and we will not charge you a fee for the refund."),
      c("Deposits paid by Consumers are refundable on cancellation within the cancellation period, subject only to clause 22.3."),
    ])],
  },
  {
    id: "testing-acceptance",
    title: "Software Testing, Acceptance and Bug Fixes",
    groups: [g([
      c("We will test Deliverables before making them available to you for acceptance testing, in line with the test approach described in the Statement of Work."),
      c("You will have {{ACCEPTANCE_DAYS}} Working Days from delivery of each Milestone to test it against the agreed Specification and acceptance criteria and either accept it or give us written details of any material non-conformities."),
      c("We will correct reported non-conformities within a reasonable time and resubmit the Deliverable for re-testing of the affected functionality."),
      c("A Deliverable is accepted when you confirm acceptance in writing, when the acceptance period ends without you reporting a material non-conformity, or when you use it in live production for business purposes, whichever happens first. Minor issues that do not prevent the Deliverable being used for its purpose will not prevent acceptance, but we will still fix them under clause 23.5."),
      c("For {{WARRANTY_DAYS}} after acceptance, we will fix, at no extra charge, defects that cause the Deliverables not to conform materially to the Specification. This does not cover issues caused by changes made by anyone other than us, by your hardware, software or data, by third-party services, or by use outside the agreed environment."),
      c("Where a package includes a period of post-launch monitoring, such as the two weeks of post-launch QA monitoring included in our Starter MVP AI package, that period runs from launch as described in the Statement of Work."),
      c("Acceptance does not affect a Consumer's statutory rights."),
    ])],
  },
  {
    id: "maintenance-support",
    title: "Maintenance, Hosting and Technical Support",
    groups: [g([
      c("Support, maintenance and hosting are provided only under a separate support agreement or a Statement of Work that describes the service levels, hours of cover, response times, exclusions and fees."),
      c("Where a support plan includes out-of-hours or 24/7 assistance for critical systems, the definitions of \"critical\", the response times and the contact procedure will be set out in that plan. Response times are targets for starting work on an issue, not guarantees of resolution times, unless the plan states otherwise."),
      c("Unless a support agreement states otherwise, maintenance does not include new features, major framework upgrades, redesigns or work required because of changes to third-party services, all of which are charged as additional work under section 18."),
      c("We will apply security updates and dependency upgrades in line with the support plan. Without a support plan, you are responsible for maintaining and updating the Deliverables after acceptance."),
    ])],
  },
  {
    id: "third-party-services",
    title: "Third-Party Services and External Platforms",
    groups: [g([
      c("Projects often use Third-Party Components, such as cloud hosting providers, payment gateways, AI model providers, email and messaging services, app stores, mapping services and open-source software. Their use is subject to the third party's own terms, pricing and privacy policies, which you may be required to accept."),
      c("We will select reputable Third-Party Components using reasonable care and skill, and tell you about any material terms we become aware of that affect your use. We are not responsible for the availability, performance, security, pricing changes or policy changes of Third-Party Components that we do not control, except to the extent that a problem is caused by our own failure to use reasonable care and skill."),
      c("Where a third-party AI provider processes your data, its data retention, training and location policies apply. We will tell you which providers a system uses and help you configure available privacy settings, such as opting out of training on your data where the provider offers that option."),
    ])],
  },
  {
    id: "ai-outputs",
    title: "AI-Generated Outputs and AI Limitations",
    groups: [g([
      c("AI Output may be incomplete, inaccurate, biased or out of date, and may appear confident even when it is wrong. Similar inputs may produce different outputs."),
      c("You should review AI Output before relying on it, particularly where it is used for legal, financial, medical, employment, safety or other important decisions, or where it is published or sent to customers. Systems we build can include human review steps, confidence thresholds, audit logs and source citations, where the Statement of Work includes them."),
      c("You are responsible for how AI Output from systems in your control is used, published or acted on, and for ensuring that its use complies with the law, including data protection, consumer protection, equality and intellectual property law."),
      c("AI Output may not be protected by copyright in all cases, and may in rare cases resemble existing third-party material. We will use reasonable measures available to us, such as using models whose providers offer appropriate commercial terms, but we cannot guarantee that AI Output is original or free from third-party rights."),
      c("This section does not exclude or limit our liability for failing to perform the services with reasonable care and skill, for negligent design or development, or for any liability that cannot be excluded by law."),
    ])],
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property Rights and Ownership",
    groups: [g([
      c("You keep all intellectual property rights in Client Materials. You grant us a non-exclusive licence to use Client Materials only as needed to provide the services."),
      c("We, or our licensors, keep all intellectual property rights in our Background IP. Nothing in these Terms transfers ownership of our Background IP to you."),
      c("Subject to the Statement of Work, ownership of Bespoke IP will transfer to you on {{IP_TRANSFER_POINT}}. To the extent that we need to assign Bespoke IP to you to achieve this, we assign it by these Terms with effect from that point, with full title guarantee, and we will sign any further documents reasonably needed to record the assignment. We will obtain equivalent assignments from any employees or subcontractors who create Bespoke IP."),
      c("Where Background IP is incorporated into the Deliverables, we grant you a non-exclusive, perpetual, worldwide, royalty-free licence to use, copy and modify that Background IP as part of the Deliverables for your business purposes, including through your own developers and contractors. This licence becomes irrevocable when the related fees have been paid."),
      c("Until ownership transfers, we grant you a non-exclusive licence to use the Deliverables for testing and evaluation."),
      c("You agree that we may reuse general skills, knowledge, techniques and non-confidential code patterns developed during a project, and our Background IP, in work for other clients, as long as we do not disclose your Confidential Information or reuse your Bespoke IP."),
      c("We may describe the general nature of our work for you in our marketing only with your prior written consent, which you may refuse or withdraw at any time. We will not name you, use your logo or publish results or testimonials without your written approval."),
      c("Each party will tell the other promptly if it becomes aware of a claim that the Deliverables infringe third-party rights."),
    ])],
  },
  {
    id: "source-code",
    title: "Source Code, Licences and Third-Party Components",
    groups: [g([
      c("Unless the Statement of Work states otherwise, we will make the source code of the Deliverables available to you in a repository you control, together with reasonable technical documentation and deployment instructions, once the related fees have been paid."),
      c("The Deliverables may include open-source software. Open-source components remain subject to their own licences, and those licences take priority over these Terms in relation to those components. On request, we will provide a list of the main open-source components and their licences."),
      c("We will not knowingly include open-source software under licences that would require you to publish your proprietary source code (for example certain \"copyleft\" licences), unless you have agreed to this in writing."),
      c("Commercial Third-Party Components are licensed directly to you by their suppliers, or provided under a licence we hold that allows sublicensing. Their licence terms and fees apply in addition to these Terms."),
      c("Trained model weights, prompts, embeddings and datasets created specifically for you are treated as Deliverables and are covered by section 27, unless the Statement of Work states otherwise. Base models supplied by third parties remain subject to their providers' licences."),
    ])],
  },
  {
    id: "confidentiality",
    title: "Confidentiality and Client Information",
    groups: [g([
      c("\"Confidential Information\" means information that is marked as confidential or that a reasonable person would understand to be confidential, including business plans, source code, data, credentials, pricing, customer information and the contents of Proposals."),
      c("Each party will keep the other's Confidential Information confidential, use it only to perform or receive the services, and disclose it only to employees, subcontractors and professional advisers who need to know it and are bound by equivalent confidentiality obligations."),
      c("These obligations do not apply to information that is or becomes public other than through a breach of these Terms, that the receiving party already lawfully had or independently developed, or that must be disclosed by law, by a court or by a regulator. Where disclosure is required, the disclosing party will, where legally permitted, tell the other party first."),
      c("On termination, or on request, each party will return or securely delete the other's Confidential Information, except where retention is required by law or for legitimate record-keeping, in which case it will remain confidential."),
      c("These obligations continue for 5 years after the contract ends, or indefinitely for source code, credentials, trade secrets and personal data. A separate non-disclosure agreement, where signed, applies in addition to this section."),
    ])],
  },
  {
    id: "data-protection",
    title: "Data Protection and Privacy",
    groups: [g([
      c("Each party will comply with the UK General Data Protection Regulation, the Data Protection Act 2018 and the Privacy and Electronic Communications Regulations 2003, each as amended, including by the Data (Use and Access) Act 2025 (together, \"Data Protection Law\")."),
      c("When you contact us or use the Website, we process your personal data as a controller. Our Privacy Policy, which will be published on this Website, explains how we do this. [To be confirmed: link to the Privacy Policy once it is published.]"),
      c("Where we process personal data on your behalf in the course of a project, for example in your databases, CRM, documents or AI training data, you are the controller and we are your processor. We will enter into a data processing agreement that meets the requirements of Article 28 of the UK GDPR before we process that data, and we will:", [
        "process the data only on your documented instructions;",
        "ensure that people who access it are under a duty of confidentiality;",
        "apply appropriate technical and organisational security measures;",
        "engage sub-processors, such as cloud or AI providers, only with your authorisation, and on terms that provide equivalent protection;",
        "transfer personal data outside the UK only where Data Protection Law permits, for example under an adequacy decision or appropriate safeguards;",
        "assist you with data subject requests, security incidents and data protection impact assessments, as reasonably required;",
        "notify you without undue delay after becoming aware of a personal data breach affecting your data;",
        "delete or return the data at the end of the services, unless the law requires us to keep it.",
      ]),
      c("You are responsible for having a lawful basis to share personal data with us and for providing appropriate privacy information to individuals. Where possible, please provide anonymised, pseudonymised or synthetic data for development and testing."),
      c("Special category data, such as health or biometric data, and data about children require additional safeguards. Please tell us before sharing them so that appropriate measures can be agreed."),
      c("If you have a concern about how we handle personal data, please contact us using the details in section 41. You also have the right to complain to the Information Commissioner's Office (ico.org.uk)."),
    ])],
  },
  {
    id: "website-content",
    title: "Website Content and Copyright",
    groups: [g([
      c("The Website and its content, including text, graphics, diagrams, logos and code, are protected by copyright under the Copyright, Designs and Patents Act 1988 and by other intellectual property rights. They are owned by or licensed to us, except where stated."),
      c("You may view, print and download extracts of Website pages for your own reference or for internal business use in evaluating our services. You must not otherwise copy, republish, sell or create derivative works from Website content without our written permission."),
      c("\"ClickMasters\" and our logo are used by us as trade marks. [To be confirmed: whether these are registered under the Trade Marks Act 1994, and the registration numbers, if so.] Technology names and logos shown on the Website belong to their respective owners and are used only to identify the technologies we work with; their use does not imply endorsement."),
      c("Website content is provided for general information. While we aim to keep it accurate and up to date, it is not professional advice, and you should not rely on it as a substitute for advice specific to your project."),
    ])],
  },
  {
    id: "warranties",
    title: "Warranties and Service Standards",
    groups: [
      g([
        c("We will perform the services with reasonable care and skill, using appropriately qualified personnel, and in accordance with good industry practice."),
        c("We warrant that, to our knowledge, the Bespoke IP will not infringe the intellectual property rights of any third party, excluding infringement caused by Client Materials, Third-Party Components, AI Output or changes made by anyone other than us."),
        c("You warrant that the Client Materials, and our use of them as authorised by you, will not infringe third-party rights or breach any law."),
      ], "Our commitments"),
      g([
        c("If you are a Consumer, the Consumer Rights Act 2015 gives you legal rights that these Terms do not affect. In summary: services must be performed with reasonable care and skill, in line with information we have given you that you relied on, and digital content must be of satisfactory quality, fit for purpose and as described. If they are not, you may be entitled to have the service repeated or the digital content repaired or replaced, or, if that is not possible or not done within a reasonable time, to a price reduction or refund. Advice is available from Citizens Advice (citizensadvice.org.uk)."),
      ], "Consumer statutory rights"),
      g([
        c("For Business Clients, except as expressly stated in these Terms or a Statement of Work, and to the extent permitted by law, all other warranties, conditions and terms implied by statute or common law are excluded, apart from those that cannot lawfully be excluded."),
        c("We do not warrant that the Deliverables will be entirely error-free or will operate without interruption, or that AI systems will achieve any particular business outcome, unless the Statement of Work expressly says so. This does not affect our obligations under clauses 23.5 and 32.1."),
      ], "Business Clients"),
    ],
  },
  {
    id: "liability",
    title: "Limitation of Liability",
    groups: [
      g([
        c("Nothing in these Terms limits or excludes liability for death or personal injury caused by negligence, for fraud or fraudulent misrepresentation, or for any other liability that cannot be limited or excluded by law."),
      ], "Liability that cannot be limited"),
      g([
        c("Subject to clause 33.1, neither party is liable to the other, whether in contract, tort (including negligence), breach of statutory duty or otherwise, for:", [
          "loss of profits, revenue, business or anticipated savings;",
          "loss of goodwill or reputation;",
          "loss or corruption of data, where the loss would have been avoided by the affected party keeping reasonable backups;",
          "any indirect or consequential loss.",
        ]),
        c("Subject to clause 33.1, each party's total aggregate liability arising under or in connection with each Statement of Work is limited to {{LIABILITY_CAP}}."),
        c("The limits in clauses 33.2 and 33.3 do not apply to your obligation to pay fees properly due, to breaches of section 29 (Confidentiality) or to the indemnities in section 34."),
        c("The parties agree that these limits are reasonable for the purposes of the Unfair Contract Terms Act 1977, taking into account the fees, the nature of the services and the availability of insurance."),
      ], "Business Clients"),
      g([
        c("If you are a Consumer, we are responsible for loss or damage you suffer that is a foreseeable result of our breaching these Terms or failing to use reasonable care and skill. Loss is foreseeable if it is obvious that it will happen or if, when the contract was made, both we and you knew it might happen."),
        c("If defective digital content that we have supplied damages a device or other digital content belonging to you, and this is caused by our failure to use reasonable care and skill, we will either repair the damage or pay you compensation."),
        c("We are not liable to Consumers for business losses, such as loss of profit, loss of business or business interruption, where the services are supplied for domestic and private use."),
      ], "Consumers"),
    ],
  },
  {
    id: "indemnities",
    title: "Indemnification, Where Legally Appropriate",
    intro: "This section applies to Business Clients only. It does not apply to Consumers.",
    groups: [g([
      c("We will indemnify you against losses, damages, reasonable legal costs and amounts awarded by a court or agreed in settlement arising from a third-party claim that the Bespoke IP infringes that third party's UK intellectual property rights, except to the extent the claim arises from matters excluded in clause 32.2."),
      c("You will indemnify us against losses, damages, reasonable legal costs and amounts awarded by a court or agreed in settlement arising from a third-party claim that Client Materials, or our use of them in accordance with your instructions, infringe third-party rights or breach the law."),
      c("The indemnified party must notify the other party promptly of a claim, not make any admission without the other party's consent, allow the other party to conduct the defence and settlement of the claim, and give reasonable assistance at the other party's expense. The indemnified party must take reasonable steps to mitigate its losses."),
      c("If an infringement claim is made or likely, we may at our option and expense procure the right for you to continue using the affected Deliverable, modify or replace it so that it no longer infringes without materially reducing its functionality, or, if neither is reasonably possible, refund the fees paid for the affected Deliverable."),
    ])],
  },
  {
    id: "force-majeure",
    title: "Service Interruptions and Force Majeure",
    groups: [g([
      c("Neither party is liable for delay or failure to perform obligations to the extent that this is caused by events beyond its reasonable control, such as natural disasters, epidemics, war, terrorism, civil unrest, government action, failure of public utilities or telecommunications networks, widespread internet outages, or failures of major cloud or AI providers that are not caused by the affected party."),
      c("The affected party must tell the other party promptly, take reasonable steps to limit the effect, and resume performance as soon as reasonably possible. Payment obligations for services already provided are not suspended."),
      c("If the event continues for more than 60 days, either party may terminate the affected Statement of Work by written notice, and clause 21.7 will apply."),
      c("This section does not affect a Consumer's right to a refund for services paid for but not provided."),
    ])],
  },
  {
    id: "suspension",
    title: "Suspension and Termination of Services",
    groups: [g([
      c("We may suspend all or part of the services after giving written notice if:", [
        "an undisputed invoice remains unpaid as described in clause 20.3;",
        "we reasonably believe that continued use of a system we host or manage presents a security risk or is unlawful, in which case suspension may be immediate where necessary to prevent harm, and we will notify you as soon as possible;",
        "you materially breach section 6 or misuse systems we provide.",
      ]),
      c("We will restore the services promptly once the reason for suspension has been resolved. Suspension under this section is in addition to our rights under section 21."),
      c("We will not delete your data or Deliverables during a suspension. If we intend to delete data we host after termination, we will give you reasonable notice and an opportunity to obtain a copy, unless the law requires otherwise."),
    ])],
  },
  {
    id: "complaints-disputes",
    title: "Complaints and Dispute Resolution",
    groups: [g([
      c("If you are unhappy with our services, please contact us using the details in section 41 and give us enough detail to investigate. We will acknowledge your complaint within {{COMPLAINT_ACK_DAYS}} Working Days and aim to give you a full response within {{COMPLAINT_RESPONSE_DAYS}} days."),
      c("For Business Clients, if a dispute is not resolved through the complaints process, each party will refer it to a senior representative, who will meet, in person or online, within 14 days to try to resolve it in good faith. If it is still unresolved, the parties may agree to try mediation before starting court proceedings. Nothing in this section prevents either party from seeking urgent relief from a court."),
      c("If you are a Consumer and we cannot resolve your complaint, we will tell you in writing whether we agree to use an alternative dispute resolution provider. {{ADR_PROVIDER}} You can also get advice from Citizens Advice, and you may bring a claim in the courts."),
    ])],
  },
  {
    id: "governing-law",
    title: "Governing Law and Jurisdiction",
    groups: [g([
      c("These Terms, and any dispute or claim arising out of or in connection with them, including non-contractual disputes, are governed by the law of England and Wales. [To be confirmed: governing law, if the contracting entity is registered outside England and Wales.]"),
      c("For Business Clients, the courts of England and Wales have exclusive jurisdiction."),
      c("If you are a Consumer, you may bring proceedings in the courts of England and Wales. If you live in Scotland, you may also bring proceedings in Scotland, and if you live in Northern Ireland, you may also bring proceedings in Northern Ireland. If you live elsewhere in the UK, you also benefit from any mandatory consumer protection rules of the law of the part of the UK in which you live."),
    ])],
  },
  {
    id: "changes",
    title: "Changes to These Terms",
    groups: [g([
      c("We may update these Terms from time to time, for example to reflect changes in law, in our services or in how we work. The date at the top of this page shows when they were last updated."),
      c("Changes to the website-use parts of these Terms apply from the time they are published. Changes do not affect contracts already in force. The Terms that apply to a project are those in force when the contract was formed, unless both parties agree otherwise in writing."),
      c("For ongoing services such as support or hosting, we will give you at least 30 days' written notice of any material change. If you do not agree with it, you may end the affected service before the change takes effect without penalty."),
    ])],
  },
  {
    id: "general",
    title: "Severability and Entire Agreement",
    groups: [g([
      c("If any provision of these Terms is found by a court or other competent authority to be invalid, unlawful or unenforceable, it will be modified to the minimum extent necessary to make it enforceable, or, if that is not possible, removed, and the remaining provisions will continue in full force."),
      c("For Business Clients, each contract constitutes the entire agreement between the parties on its subject matter and replaces all previous discussions and agreements. Each party confirms that it has not relied on any statement that is not set out in the contract. Nothing in this clause limits liability for fraudulent misrepresentation."),
      c("For Consumers, information that we give you before you are bound and that you take into account when deciding to enter into the contract forms part of the contract, as provided by the Consumer Rights Act 2015."),
      c("A failure or delay in exercising a right does not waive that right. A waiver is effective only if it is in writing."),
      c("Neither party may assign or transfer its rights or obligations without the other's written consent, which will not be unreasonably withheld, except that we may use subcontractors under our supervision, and we remain responsible for their work."),
      c("Nothing in these Terms creates a partnership, joint venture or employment relationship between the parties."),
      c("A person who is not a party to a contract has no right under the Contracts (Rights of Third Parties) Act 1999 to enforce any of its terms."),
      c("Notices must be given in writing to the addresses set out in the relevant Statement of Work, or otherwise to the contact details in section 41. Notices sent by email are treated as received at the time of transmission, or on the next Working Day if sent outside business hours."),
    ])],
  },
  {
    id: "contact",
    title: "Contact Information",
    groups: [g([
      c("For questions about these Terms, complaints, cancellation notices or legal notices, please contact:", [
        "Email: sales@clickmastersartificialintelligencecompany.co.uk",
        "Telephone (UK): +44 7988 576086",
        "Postal address: {{REGISTERED_OFFICE}}",
      ]),
      c("You can also reach us through our [[contact form|/contact]] or learn more [[about ClickMasters|/about]]. We usually respond within a few hours during business days."),
    ])],
  },
];
