/*
 * /services/machine-learning content, from
 * "ClickMasters Machine Learning Development Services: SEO Content Pack"
 * (26 Nov 2026). Edit copy here; ./page.jsx only renders it.
 *
 * Body links: exactly the pack's four (generative AI, AI agents, custom
 * software, AI automation). CTAs, breadcrumb, header and footer are template
 * elements. The predictive analytics, NLP and computer vision pages are named
 * in plain text (the pack's cannibalisation plan) and linked from the
 * "Related services" strip outside the main content.
 *
 * VERIFY (owner): the pack asks you to confirm whether XGBoost, LightGBM,
 * pandas and NumPy should be named in the technology list. They are not
 * listed until confirmed.
 */

export const PATH = "/services/machine-learning";

export const SEO = {
  // Rendered as "Machine Learning Development Services UK | ClickMasters" (55 chars).
  title: "Machine Learning Development Services UK",
  // The pack's description, trimmed to 155 characters.
  description:
    "Machine learning development for UK businesses: custom prediction, classification and anomaly detection models built on your data, deployed and monitored.",
  ogTitle: "Machine Learning Development Services UK | ClickMasters",
  ogDescription:
    "Custom machine learning models built on your business data, tested against the right metrics and run in production with monitoring. For UK businesses.",
};

export type LinkedText = { text: string; link?: { anchor: string; href: string } };

const IMG = "/assets/Services/machine-learning";

/**
 * Diagrams drawn for this page (alt text from the pack's image table; the
 * drift chart is illustrative) and HD photos from Unsplash (Unsplash License:
 * free for commercial use, no attribution required; source IDs kept below).
 */
export const IMAGES = {
  pipeline: {
    src: `${IMG}/machine-learning-development-pipeline.webp`, width: 2160, height: 1600,
    alt: "Diagram: business data flows through a feature pipeline into a model; scores return to CRM/ERP",
  },
  compare: {
    src: `${IMG}/ml-vs-generative-ai-agents-automation-rag.webp`, width: 2400, height: 781,
    alt: "Comparison of machine learning, generative AI, AI agents, AI automation and RAG inputs and outputs",
  },
  process: {
    src: `${IMG}/machine-learning-development-process.webp`, width: 2400, height: 726,
    alt: "Eight-stage machine learning development process from business discovery to monitoring",
  },
  matrix: {
    src: `${IMG}/precision-recall-confusion-matrix.webp`, width: 2400, height: 893,
    alt: "Confusion matrix explaining precision and recall for a fraud detection model",
  },
  drift: {
    src: `${IMG}/ml-model-drift-monitoring.webp`, width: 2400, height: 781,
    alt: "Illustrative chart: model accuracy slips with data drift until retraining restores it",
  },
  // Photo: Unsplash (images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3)
  charts: {
    src: `${IMG}/ml-model-charts-screen.webp`, width: 1600, height: 1059,
    alt: "Laptop on a sofa displaying a business analytics dashboard with charts and a map",
  },
  // Photo: Unsplash (images.unsplash.com/photo-1460925895917-afdab827c52f)
  laptop: {
    src: `${IMG}/ml-analytics-laptop.webp`, width: 1600, height: 1139,
    alt: "Laptop on a glossy desk showing an analytics dashboard with area charts",
  },
  // Photo: Unsplash (images.unsplash.com/photo-1522071820081-009f0129c71c)
  team: {
    src: `${IMG}/ml-team-collaborating.webp`, width: 1600, height: 1067,
    alt: "A team working together on laptops around a wooden table",
  },
  // Photo: Unsplash (images.unsplash.com/photo-1526374965328-7f61d4dc18c5)
  code: {
    src: `${IMG}/ml-code-data-stream.webp`, width: 1600, height: 1067,
    alt: "Streams of green code characters on a dark background",
  },
} as const;

export const HERO = {
  eyebrow: "Machine Learning Development",
  title: "Machine Learning Development Services",
  titleAccent: "for UK Businesses",
  lead:
    "Most organisations already hold the data to answer questions they currently answer by instinct: which customers are about to leave, which transactions look wrong, which orders will arrive late, which leads are worth a call today. ClickMasters builds custom machine learning models that learn those patterns from your own records, prove their accuracy against the measures that matter to your business, and run inside the systems your team already uses.",
  audience:
    "We work with UK businesses from the first question (\"is this even a machine learning problem?\") through data preparation, model development and validation to deployment, monitoring and retraining, so the model keeps performing after launch rather than quietly degrading.",
  stats: [
    { value: "Your data, your model", label: "Trained on your records, owned by you" },
    { value: "Measured properly", label: "Metrics chosen for the decision" },
    { value: "Built for production", label: "APIs, integration and monitoring" },
    { value: "Honest feasibility", label: "We say when rules or a tool will do" },
  ],
};

export const WHAT_IS = {
  p1: "**Machine learning development** is the work of building software that learns patterns from historical data and uses them to make predictions, classifications or decisions about new cases. Instead of a developer writing every rule by hand (\"flag any order over £5,000 from a new account\"), the model learns from thousands of past examples which combinations of factors actually preceded the outcome you care about.",
  learnsTitle: "What a model actually learns",
  learnsIntro: "In practical terms, a machine learning model can:",
  learns: [
    ["Predict a number:", "next month's demand for a product, the likely value of a new customer, the days until a machine needs servicing."],
    ["Predict a category:", "whether a customer will renew, whether a claim is likely to be fraudulent, which team a request belongs to."],
    ["Rank options:", "which leads, products or cases deserve attention first."],
    ["Spot what is unusual:", "transactions, sensor readings or log entries that do not fit the normal pattern."],
    ["Find structure nobody defined:", "groups of customers who behave alike, even though no one labelled them in advance."],
  ] as [string, string][],
  data:
    "Most of this work uses **structured data**, the rows and columns in your CRM, ERP, finance system, e-commerce platform or data warehouse. Models can also learn from **unstructured data** such as free text, images and sensor signals, which usually need an extra step to turn them into features a model can use.",
  fitsTitle: "Where it fits in your existing systems",
  fits:
    "A model on its own is just a file. Its value comes from where its output lands: a risk score shown next to an application in your back office, a churn flag that creates a task in the CRM, a reorder suggestion in the purchasing screen, an alert when a machine's readings drift. We design that integration point at the start, because it decides what the model must predict, how quickly, and how its output will be checked by the people who act on it.",
  whenTitle: "When custom machine learning is worth building",
  whenIntro: "Off-the-shelf tools with built-in \"AI\" handle common problems well, and we will recommend one when it fits. Custom machine learning makes sense when:",
  when: [
    "the prediction depends on data only you hold, such as your own customer history, product range or operational records;",
    "the decision is specific to how your business works, so a generic model misses the signals that matter;",
    "you need control over how the model behaves, how it is evaluated and where the data is processed;",
    "the prediction has to sit inside your own software or workflow rather than in a separate platform;",
    "the value of a better decision is large enough to justify building and maintaining a model.",
  ],
  whenNote: "If a few clear rules would do the job just as well, we will say so. Rules are cheaper to run, easier to audit and do not drift.",
};

export const COMPARE = {
  intro:
    "These terms are often used interchangeably, but they solve different problems, and choosing the wrong one is the most common reason AI projects disappoint.",
  headers: ["Approach", "What it does", "Typical output", "Best suited to"],
  rows: [
    ["Machine learning", "Learns patterns from historical data to predict, classify, rank or detect anomalies", "A score, a label, a forecast or a ranked list", "Repeated decisions with measurable outcomes and a history of examples"],
    ["Generative AI", "Produces new content such as text, images or code from a prompt", "A draft, a summary, an image", "Writing, summarising and content creation"],
    ["AI agents", "Plan and carry out multi-step tasks using tools and defined workflows", "Completed actions across systems", "Tasks that need several steps and judgement along the way"],
    ["AI automation", "Runs business processes automatically, using AI only where a step needs it", "A finished process with exceptions routed to people", "High-volume, repeatable workflows"],
    ["RAG (retrieval-augmented generation)", "Finds relevant passages in your documents and uses them to ground a language model's answer", "An answer with citations", "Questions answered from policies, manuals and knowledge bases"],
  ],
  // Body links 1 and 2 of 4.
  outro1: {
    text: "They also combine. A churn model can score every customer overnight, and an automated workflow can then create tasks for the account managers responsible for the highest-risk accounts. If your goal is drafting content or answering questions in natural language, our [[link]] service is the better starting point.",
    link: { anchor: "generative AI development", href: "/services/generative-ai-development" },
  } as LinkedText,
  outro2: {
    text: "Where the work involves an assistant completing a sequence of tasks across tools, see [[link]]. This page focuses on machine learning: models that learn from your data to make better predictions and decisions.",
    link: { anchor: "AI agent development", href: "/services/ai-agent-development" },
  } as LinkedText,
};

export const SERVICES_INTRO =
  "Each service below can be delivered on its own or as part of a wider build. All of them start from a business decision you want to improve, not from a technique we want to use.";

export type MlService = { id: string; icon: string; title: string; involves: string; problem: string; how: string; where: string; value: string };

export const SERVICES: MlService[] = [
  {
    id: "custom-model", icon: "model", title: "Custom machine learning model development",
    involves: "Designing, training and validating a model for one specific prediction, using your data, from problem definition to a documented, tested model ready for deployment.",
    problem: "Important decisions are being made on gut feel or crude rules because no one has had the time to learn from the history sitting in your systems.",
    how: "We turn the business question into a precise prediction target, assemble a training dataset from your sources, compare simple baselines with stronger models, and keep only the complexity that measurably improves results.",
    where: "Credit and risk scoring, lead scoring, pricing support, claims triage, maintenance prediction.",
    value: "A repeatable, measurable decision that improves as more data arrives, with clear documentation of what the model does and does not know.",
  },
  {
    id: "forecasting", icon: "forecast", title: "Predictive models and forecasting",
    involves: "Models that estimate future values or events, such as demand by product and location, cash collection timing, staffing needs or the likelihood that an order arrives late.",
    problem: "Planning that relies on last year's numbers plus a percentage, leading to overstock, shortages or idle capacity.",
    how: "Time-series and regression models learn from historical patterns, seasonality, promotions and external factors, and report a range rather than a single number, so planners can see the uncertainty.",
    where: "Inventory planning, workforce scheduling, revenue and cash forecasting.",
    value: "Plans built on evidence, with the uncertainty visible. For forecasting-led projects, our dedicated predictive analytics service covers this area in more depth.",
  },
  {
    id: "supervised", icon: "supervised", title: "Supervised learning",
    involves: "Training a model on historical examples where the outcome is already known, for example past customers labelled \"renewed\" or \"cancelled\".",
    problem: "You know what happened in the past but cannot see which current cases are heading the same way.",
    how: "The model learns the relationship between the inputs (account age, usage, support tickets, payment history) and the known outcome, then applies it to new cases. Common methods include regularised regression, decision-tree ensembles and gradient-boosted trees, which often perform very well on tabular business data.",
    where: "Churn prediction, propensity to buy, default risk, delivery delay prediction.",
    value: "An early warning for each individual case, early enough to act on.",
  },
  {
    id: "unsupervised", icon: "cluster", title: "Unsupervised learning",
    involves: "Finding structure in data that has no labels: natural customer segments, groups of similar products, unusual patterns.",
    problem: "Your segments were defined years ago by intuition, and you suspect your customers or products no longer fall into them neatly.",
    how: "Clustering and dimensionality-reduction techniques group records by similarity across many variables at once. We then profile each group in plain business language, because a cluster is only useful if people understand it.",
    where: "Customer segmentation, product grouping, exploring a new dataset before deciding what to predict.",
    value: "Segments based on behaviour rather than assumptions, which marketing, pricing and service teams can actually use.",
  },
  {
    id: "deep-learning", icon: "brain", title: "Deep learning solutions",
    involves: "Neural-network models for problems where simpler methods struggle, typically images, audio, long sequences, complex text or very large datasets with intricate patterns.",
    problem: "The signal you need sits in unstructured data that traditional models cannot read directly.",
    how: "We usually start from a pre-trained network and fine-tune it on your examples, which needs far less data and compute than training from scratch. For ordinary tabular data, deep learning is often not the best choice, and we will tell you when a simpler model is more accurate, cheaper and easier to explain.",
    where: "Image classification, defect detection, document understanding, complex sequence data.",
    value: "Access to information that was previously locked in images, signals or text.",
  },
  {
    id: "classification", icon: "sort", title: "Classification and recommendation systems",
    involves: "Classifiers that assign each case to a category, and recommenders that suggest the most relevant products, content or next actions for each user.",
    problem: "Manual sorting that does not scale, and one-size-fits-all product or content suggestions.",
    how: "Classification models learn from labelled examples. Recommenders learn from behaviour (what similar customers viewed, bought or ignored), combined with product attributes so that new items without history can still be suggested.",
    where: "Routing cases to the right team, prioritising leads, \"customers also bought\" suggestions, next-best-action prompts for staff.",
    value: "Faster handling of high volumes and more relevant suggestions for each customer, measured through controlled tests rather than assumed.",
  },
  {
    id: "anomaly", icon: "alert", title: "Anomaly and fraud detection",
    involves: "Models that learn what normal looks like and flag transactions, accounts, claims or sensor readings that do not fit.",
    problem: "Fixed rules catch yesterday's fraud and generate large numbers of false alarms, while new patterns slip through.",
    how: "Depending on the data, we combine unsupervised anomaly detection (no labelled fraud needed) with supervised models trained on confirmed cases, and tune the alert threshold against the cost of a missed case versus the cost of investigating a false alarm.",
    where: "Payment and refund fraud, expense claims, account takeover signals, equipment faults, data quality monitoring.",
    value: "Investigators spend their time on the cases most likely to matter, and the system adapts as patterns change. People remain responsible for the final decision.",
  },
  {
    id: "nlp", icon: "text", title: "Natural language processing",
    involves: "Turning free text such as emails, tickets, reviews, notes and documents into features or labels that a model can use.",
    problem: "Valuable signals, such as complaint themes or cancellation intent, are buried in text that nobody has time to read at scale.",
    how: "Text classification, entity extraction and sentiment models, from classical methods to transformer-based models, chosen according to accuracy needs, volume and cost.",
    where: "Ticket routing, review analysis, adding text signals to churn or risk models.",
    value: "Text becomes measurable data. Our dedicated NLP development service covers text-heavy projects in more depth.",
  },
  {
    id: "vision", icon: "eye", title: "Computer vision and image recognition",
    involves: "Models that classify images, detect and locate objects, or read information from photographs and scanned documents.",
    problem: "Visual checks that are slow, inconsistent or impossible to carry out on every item.",
    how: "Pre-trained vision models fine-tuned on labelled examples of your products, defects or documents, with careful attention to lighting, camera position and the rare cases that matter most.",
    where: "Quality inspection, stock and shelf checks, document capture, condition assessment from photographs.",
    value: "Consistent visual checks at full volume. Our dedicated computer vision service covers image-led projects in more depth.",
  },
  {
    id: "integration", icon: "plug", title: "Machine learning model integration",
    involves: "Connecting a model to the software where decisions are made, such as your CRM, ERP, e-commerce platform, internal tools or customer-facing app.",
    problem: "A model that works in a notebook but never reaches the people who need its predictions.",
    how: "We expose the model through a secure API for real-time predictions, or run batch scoring on a schedule and write results back to your database. Then we design how the output appears: a score, a reason and a recommended action, in the screen your team already uses.",
    where: "Any project where the prediction must change what someone does.",
    value: "Predictions arrive at the moment of decision, in context, with no extra system to log into.",
  },
  {
    id: "mlops", icon: "monitor", title: "MLOps, model deployment and monitoring",
    involves: "The engineering that keeps models reliable after launch: versioned data and models, automated training pipelines, deployment, monitoring and retraining.",
    problem: "Models degrade silently as customer behaviour, prices and processes change, and nobody notices until decisions go wrong.",
    how: "Experiments, models and their training data are tracked and versioned. Models are packaged in containers and deployed with automated checks. Live predictions are monitored for data drift (inputs changing), concept drift (the relationship changing) and, once outcomes are known, actual accuracy. Alerts and retraining are triggered when performance falls below agreed thresholds.",
    where: "Every model that will be relied on for more than a few weeks.",
    value: "A model you can trust over time, with an audit trail of what was deployed, when and why.",
  },
];

export const INDUSTRIES_NOTE =
  "The examples below show where machine learning commonly adds value in each sector. They describe typical problems and suitable approaches; they are not claims of completed ClickMasters projects in these industries.";

export const INDUSTRIES = [
  { icon: "finance", title: "Finance and FinTech", problem: "Fixed fraud rules raise too many false alarms and miss new patterns; manual affordability and risk reviews are slow.", ml: "Transaction anomaly detection combined with supervised fraud scoring, and risk models that support, rather than replace, underwriters. Explainability and human review are essential where decisions affect customers." },
  { icon: "health", title: "Healthcare technology", problem: "Missed appointments waste clinical capacity, and operational demand is hard to plan.", ml: "No-show likelihood models that prompt reminders or rebooking, and demand forecasting for staffing. Health data is special category data, so these projects require a data protection impact assessment and strict access controls from the start." },
  { icon: "cart", title: "Retail and e-commerce", problem: "Generic product suggestions, unpredictable demand and rising returns.", ml: "Recommendation systems, demand forecasting by product and channel, and return-risk prediction that flags orders likely to come back." },
  { icon: "factory", title: "Manufacturing", problem: "Unplanned downtime and inspection that relies on sampling.", ml: "Predictive maintenance models trained on sensor and maintenance history, and vision-based defect detection on the production line." },
  { icon: "truck", title: "Logistics and supply chain", problem: "Late deliveries discovered only when customers complain, and inaccurate arrival estimates.", ml: "Delay-risk prediction for each shipment, arrival-time estimation that learns from actual route performance, and demand forecasting for depot capacity." },
  { icon: "home", title: "Real estate", problem: "Valuations and rent estimates rely on manual comparables; maintenance requests are triaged by hand.", ml: "Price and rent estimation models used as decision support for agents, and classification of maintenance requests by urgency and trade." },
  { icon: "briefcase", title: "Professional services", problem: "Partners cannot easily see which matters will overrun or which clients are at risk of leaving.", ml: "Overrun prediction from time-recording data, client attrition signals and automated classification of incoming work." },
  { icon: "education", title: "Education", problem: "Learners who are struggling are identified too late to help.", ml: "Early-warning models based on engagement and assessment patterns that prompt a tutor to get in touch. Decisions about individual learners stay with staff." },
  { icon: "saas", title: "SaaS and technology businesses", problem: "Churn becomes visible only at renewal, and expansion opportunities are missed.", ml: "Product-usage-based churn and expansion models, lead scoring from trial behaviour, and anomaly detection on platform metrics." },
];

export const READINESS = {
  intro:
    "Most failed machine learning projects fail before any model is trained, because the problem, the data or the route to production was never checked. We work through these questions with you during discovery, and you can use them to judge any provider's proposal.",
  items: [
    ["Is there a repeated decision?", "Machine learning pays off when the same kind of decision is made many times. A one-off strategic choice is rarely a modelling problem."],
    ["Can success be measured?", "You need a defined outcome, such as \"cancelled within 90 days\" or \"fraud confirmed\", and a way to tell whether the model's predictions were right."],
    ["Is there enough relevant history?", "You need enough examples of the outcome, particularly the rare ones. Fifty past fraud cases is a very different starting point from five thousand."],
    ["Will the data exist at prediction time?", "A model can only use information that is available at the moment of decision. Using information that is only known later is the most common cause of results that look excellent in testing and fail in use (known as data leakage)."],
    ["Who will act on the output, and how?", "If nobody changes what they do when the score is high, the model has no value, however accurate it is."],
    ["What does a wrong prediction cost?", "Missing a fraudulent payment and wrongly blocking a genuine customer have different costs. That balance determines how the model is tuned and how much human review it needs."],
    ["Would simple rules do?", "If a handful of clear rules captures most of the value, start there. A model is justified when the patterns are too numerous or subtle for rules."],
  ] as [string, string][],
  outro:
    "Where the answers are not yet clear, a short discovery and feasibility phase, in which we test the data and build a simple baseline, is a far cheaper way to find out than committing to a full build.",
};

export const PROCESS_INTRO =
  "Every stage has a clear output and a decision point, so you can see progress, and stop or change direction, before large costs are committed.";

export const PROCESS = [
  { title: "Business discovery and requirements", what: "We define the decision to be improved, who makes it, what a good outcome looks like and how success will be measured in business terms.", why: "A model optimised for the wrong target is accurate and useless." },
  { title: "Data assessment and preparation", what: "We map the available sources, check volume, completeness, consistency and how far back the history goes, and agree how data will be accessed securely. Data is cleaned, joined and documented.", why: "Data quality sets the ceiling on model quality, and problems found here cost far less than problems found after launch." },
  { title: "Data exploration and feature engineering", what: "We explore patterns, check for bias and imbalance, and create features: the measurable signals the model learns from, such as \"days since last order\" or \"support tickets in the last 30 days\". Each feature is checked to make sure it would genuinely be available at prediction time.", why: "Good features, built with business knowledge, usually improve results more than a more complex algorithm." },
  { title: "Model selection and architecture", what: "We start with a simple baseline, then test stronger candidates such as regularised regression, tree ensembles, gradient boosting or neural networks, and design how the model will be served (real-time API or batch).", why: "The baseline shows whether added complexity is earning its keep, and early architecture decisions avoid a rebuild later." },
  { title: "Model training and validation", what: "Models are trained on one portion of the data and tested on data they have never seen. We use cross-validation to check that performance is stable, and time-based splits where the order of events matters, so the model is always tested on the \"future\" relative to its training data.", why: "This is where overfitting and data leakage are caught, before they reach production." },
  { title: "Performance evaluation", what: "We report results using metrics agreed in discovery, compare them with the baseline and current practice, and examine where the model goes wrong: which customers, products or regions it handles badly, and whether any group is treated unfairly.", why: "An overall score can hide serious weaknesses in exactly the cases you care about most." },
  { title: "Deployment and system integration", what: "The model is packaged, deployed behind a secure API or batch pipeline, and connected to your systems, with input validation, logging and fallback behaviour if the model is unavailable. Where the risk justifies it, we run it in \"shadow mode\" alongside the current process before it influences real decisions.", why: "A prototype answers \"can this work?\"; production has to answer \"will this work reliably, securely and at volume, every day?\"" },
  { title: "Monitoring, maintenance and improvement", what: "We monitor input data, prediction distributions and, once outcomes are known, real accuracy. Drift alerts trigger investigation and retraining, and every model version is recorded.", why: "The world changes after launch. Without monitoring, performance degrades silently." },
];

export const METRICS = {
  title: "Choosing the right evaluation metric",
  intro: "There is no single \"accuracy\" figure that suits every project. We agree metrics in discovery according to the decision the model supports:",
  rows: [
    ["Accuracy", "The share of all predictions that are correct", "Only when outcomes are reasonably balanced. On rare events it misleads: a fraud model that never flags anything can be 99% accurate."],
    ["Precision", "Of the cases the model flagged, how many were genuinely positive", "When false alarms are expensive, such as blocking a genuine customer"],
    ["Recall", "Of all genuine positive cases, how many the model caught", "When misses are expensive, such as undetected fraud or a missed fault"],
    ["F1 score", "A single balance of precision and recall", "When both errors matter and positive cases are relatively rare"],
    ["ROC-AUC", "How well the model ranks positive cases above negative ones across all thresholds", "Comparing models before choosing an operating threshold"],
    ["MAE (mean absolute error)", "The average size of a forecasting error, in the units you plan in", "Forecasts where every unit of error costs roughly the same"],
    ["RMSE (root mean squared error)", "Like MAE, but penalises large errors more heavily", "Forecasts where occasional large misses are especially costly"],
  ],
  outro:
    "Alongside these, we check **cross-validation** stability (does performance hold across different slices of data?), guard against **data leakage**, and, once live, monitor for **model drift**. The right threshold is ultimately a business decision: we show you the trade-off so you can choose it.",
};

export const TECH = {
  intro: "We choose tools for the problem, your existing infrastructure and the team that will maintain the system, not for novelty. These are the main tools we work with:",
  items: [
    ["Python", "the standard language for machine learning, data preparation and model serving."],
    ["scikit-learn", "reliable implementations of classical models (regression, tree ensembles, clustering) and the pre-processing and validation tools that most business models are built on."],
    ["PyTorch and TensorFlow", "deep learning frameworks for neural networks, used when images, audio, complex text or very large datasets justify them, typically by fine-tuning pre-trained models."],
    ["MLflow", "experiment tracking and a model registry, so every trained model can be traced to its data, code and results."],
    ["Docker", "packages models and their dependencies so they run identically in testing and production."],
    ["Kubernetes", "runs and scales containerised model services where volume or availability requirements need it."],
    ["Cloud platforms such as AWS, including Amazon SageMaker", "managed training and hosting where cloud deployment suits your organisation. We can also deploy into your existing environment."],
    ["APIs and database integration", "REST APIs for real-time predictions, and scheduled pipelines that read from and write back to SQL databases such as PostgreSQL and your business applications."],
  ] as [string, string][],
  outro: "The final stack is agreed with you in the architecture stage and documented at handover.",
};

export const CUSTOM_VS = {
  headers: ["Factor", "Off-the-shelf ML features and platforms", "Custom machine learning development"],
  rows: [
    ["Customisation", "Built for common use cases; limited control over what the model learns", "Built around your specific decision, data and workflow"],
    ["Data requirements", "Often work with less of your own data because they rely on generic patterns", "Need sufficient relevant history of your own; learn signals unique to your business"],
    ["Integration", "Work best inside the vendor's own product; connecting elsewhere can be limited", "Designed to fit your systems and the screens your team already uses"],
    ["Scalability", "Scales within the vendor's pricing and limits", "Scales on infrastructure you choose"],
    ["Ownership and control", "The vendor owns the model; behaviour can change with their updates", "You own the model, code and documentation; you decide when it changes"],
    ["Maintenance", "Handled by the vendor", "Requires monitoring and periodic retraining (we provide this, or hand over to your team)"],
    ["Cost", "Lower upfront cost; ongoing subscription that usually grows with usage", "Higher upfront investment; running costs depend on hosting and support needs"],
  ],
  platform:
    "your need is common (basic product recommendations in an e-commerce platform, standard email spam filtering), the vendor's model performs well on your data, and the decision is not a source of competitive advantage.",
  // Body link 3 of 4.
  custom: {
    text: "the decision depends on data only you hold, accuracy on your own cases matters commercially, you need the prediction inside your own software, or you need full control over evaluation, explainability and where data is processed. Where the model needs a new application or a substantial integration layer around it, our [[link]] team builds the surrounding system as part of the same project.",
    link: { anchor: "custom software development", href: "/services/custom-software-development" },
  } as LinkedText,
};

export const SECURITY_INTRO =
  "Machine learning models are built from your data and influence real decisions, so governance is designed in from the first stage rather than added at the end.";

export const SECURITY = [
  { icon: "privacy", title: "Data protection by design", text: "We use only the data a model genuinely needs, pseudonymise or remove direct identifiers where possible, and agree where data is stored and processed before work begins." },
  { icon: "scales", title: "UK GDPR and the Data (Use and Access) Act 2025", text: "Where a model uses personal data, we help you document the lawful basis and complete a data protection impact assessment where one is needed. Where a model contributes to decisions with legal or similarly significant effects on individuals, the UK GDPR's automated decision-making safeguards apply, including the right to human intervention and to contest the decision. We design human review into those workflows. Your organisation remains the controller and is responsible for its compliance; we provide the technical design and documentation that support it, not legal advice." },
  { icon: "lock", title: "Secure data handling and access control", text: "Encrypted storage and transfer, role-based access to training data and model services, separate environments for development and production, and secrets kept out of code." },
  { icon: "check", title: "Data quality", text: "Validation checks on incoming data, so that missing fields, changed formats or out-of-range values are caught before they reach the model." },
  { icon: "eye", title: "Model transparency", text: "Feature-importance analysis and per-prediction explanations where decisions need to be justified, and plain-English documentation of what each model does, what data it uses and its known limitations." },
  { icon: "balance", title: "Bias assessment", text: "We test performance across relevant groups and look for features that could act as proxies for protected characteristics, then agree mitigations with you." },
  { icon: "user", title: "Human oversight", text: "For high-impact decisions, the model recommends and a person decides. Thresholds and review queues are designed with the people who will use them." },
  { icon: "history", title: "Monitoring and audit trail", text: "Every model version, its training data and its evaluation results are recorded, and live performance is monitored so problems are visible early." },
];

export const SECURITY_NOTE =
  "ClickMasters does not claim formal certifications for this work. If your organisation requires specific security standards or supplier assessments, we will work through your requirements during discovery.";

export const WHY = [
  { icon: "target", title: "We start with the decision, not the algorithm.", text: "Every engagement begins by defining the business decision to be improved and how success will be measured. Sometimes the honest answer is that rules or an existing tool will do, and we will tell you." },
  { icon: "tool", title: "Practical engineering over research projects.", text: "We prefer the simplest model that meets the target, because it is cheaper to run, easier to explain and easier to maintain. Complexity has to earn its place in the evaluation results." },
  { icon: "plug", title: "Built to integrate.", text: "As a software development company as well as an AI developer, we build the APIs, pipelines and interface changes that put predictions where your team works." },
  { icon: "monitor", title: "Production-ready from the start.", text: "Versioning, monitoring and retraining are planned in the first architecture discussion, not bolted on after launch." },
  { icon: "key", title: "You own what we build.", text: "Models, code, pipelines and documentation are handed over, so you are not locked in to us." },
  { icon: "chat", title: "Clear communication.", text: "Each stage ends with a written summary of what we found, what it means and what we recommend next, in business language your stakeholders can follow." },
  { icon: "history", title: "Long-term thinking.", text: "We document data dependencies, retraining needs and running costs, so you know what owning the model involves after go-live." },
];

export const SCENARIOS_NOTE =
  "The scenarios below are illustrative examples of how we would approach common machine learning projects. They are not descriptions of completed ClickMasters client projects, and they include no client names or results.";

export const SCENARIOS: { title: string; situation: string; approach: string; delivery: LinkedText }[] = [
  {
    title: "Example 1: Customer churn prediction for a subscription business",
    situation: "A UK subscription business sees cancellations only when they happen.",
    approach: "Combine billing, product-usage and support data; define churn as \"cancelled within 60 days\"; build a gradient-boosted classifier with a time-based validation split; evaluate on precision among the top-ranked customers, because the retention team can only contact a limited number each week.",
    delivery: { text: "A nightly score with the top three reasons for each customer, written into the CRM as a prioritised task list, with monitoring for drift as pricing and the product change." },
  },
  {
    title: "Example 2: Anomaly detection for expense and payment controls",
    situation: "A finance team samples transactions by hand and relies on fixed limits.",
    approach: "An unsupervised anomaly model learns normal spending patterns by supplier, cost centre and time, and a supervised layer is added as confirmed cases accumulate. The threshold is tuned with the finance team against investigation capacity.",
    delivery: { text: "A ranked review queue with an explanation for each flag; no payment is blocked automatically." },
  },
  {
    title: "Example 3: Delivery delay prediction for a logistics operator",
    situation: "Customers learn about late deliveries before the operations team does.",
    approach: "A model trained on historical shipments, routes, carriers, time of day and seasonal patterns predicts the risk of each shipment missing its window, evaluated on recall for late deliveries at an agreed false-alarm rate.",
    // Body link 4 of 4.
    delivery: {
      text: "Risk flags on the operations dashboard early in the day, with a feed into [[link]] that alerts the account manager and drafts a proactive customer update for review.",
      link: { anchor: "AI automation", href: "/services/ai-automation" },
    },
  },
];

export const SCENARIOS_OUTRO =
  "When you are ready to discuss a real project, we can talk through which of these patterns is closest to your situation and what a discovery phase would test first.";

/** FAQs: rendered on the page and used for FAQPage JSON-LD (identical text). */
export const FAQS: { q: string; a: string[] }[] = [
  { q: "What is machine learning development?", a: ["Machine learning development is the process of building software that learns patterns from historical data and uses them to predict, classify, rank or detect anomalies in new data. It covers defining the problem, preparing data, engineering features, training and validating models, deploying them into business systems and monitoring them over time."] },
  { q: "What does a machine learning development company do?", a: ["A machine learning development company turns a business question into a working model and the software around it. That includes assessing whether the problem suits machine learning, preparing your data, selecting and training models, evaluating them against business-relevant metrics, integrating predictions into your systems, and maintaining performance after launch. A good provider will also tell you when machine learning is not the right answer."] },
  { q: "How much does custom machine learning development cost in the UK?", a: ["Cost depends mainly on the condition and accessibility of your data, how complex the prediction is, whether the model needs real-time or batch serving, the integration work required, the level of explainability and review the decision needs, and ongoing hosting and monitoring. We recommend starting with a short discovery and feasibility phase, after which we provide a fixed-price or time-and-materials estimate for the build, broken into milestones, so you can decide with evidence rather than guesswork."] },
  { q: "How long does it take to develop a machine learning model?", a: ["Timelines depend on data readiness more than anything else. If the data is accessible and reasonably clean, a feasibility baseline can be produced relatively quickly; if sources need joining, cleaning or labelling, that preparation usually takes longer than the modelling itself. Production deployment, integration and a shadow-running period add further time. We give a timeline for your project after the data assessment, not before."] },
  { q: "What data is required to build a machine learning solution?", a: ["You need historical records that describe the situation at the time a decision was made, and, for supervised learning, the outcome that followed. That means enough examples of the outcome, particularly rare ones such as fraud or failures; consistent identifiers to join sources; and data that will also be available when the model is used live. We assess what you have during discovery and recommend the most practical route if it falls short."] },
  { q: "What is the difference between AI and machine learning?", a: ["Artificial intelligence is the broad field of making software perform tasks that normally require human intelligence. Machine learning is the part of AI in which systems learn from data rather than following hand-written rules. Today's generative AI tools are built using machine learning, but a predictive business model, such as a churn score or a fraud detector, is a different kind of system with different data needs and evaluation methods."] },
  { q: "What is the difference between machine learning and deep learning?", a: ["Deep learning is a subset of machine learning that uses multi-layered neural networks. It excels with images, audio, complex text and very large datasets. For structured business data in rows and columns, classical methods such as gradient-boosted trees often match or beat deep learning while being faster to train, cheaper to run and easier to explain. We choose according to the data and the problem."] },
  { q: "Can machine learning integrate with existing business software?", a: ["Yes. Models can be exposed through an API that your CRM, ERP, e-commerce platform or internal tools call in real time, or they can run as scheduled batch jobs that write scores back to your database. The integration design, including where the prediction appears and what the user does with it, is planned at the start of the project."] },
  { q: "How are machine learning models deployed and maintained?", a: ["Models are packaged with their dependencies, deployed behind secure APIs or batch pipelines, and versioned so any prediction can be traced to the model that made it. After launch, input data, prediction patterns and real accuracy are monitored. When drift or a drop in performance is detected, the model is investigated and retrained on recent data, then tested again before replacing the live version."] },
  { q: "How do you measure machine learning model performance?", a: ["We agree metrics with you according to the decision the model supports: precision, recall, F1 score and ROC-AUC for classification; MAE and RMSE for forecasting. We validate on data the model has not seen, using time-based splits where order matters, compare against a simple baseline and current practice, and check performance across different customer or product groups. Once live, we keep measuring against real outcomes."] },
];

export const FINAL_CTA = {
  title: "Have a Prediction Problem and Some Data?",
  titleAccent: "Let's Find Out What a Model Can Do.",
  body: {
    text: "Tell us the decision you want to improve and the data you hold. We will discuss whether machine learning is the right approach, what a feasibility phase would test, and how a model could fit into the systems your team already uses. There is no obligation, and if a simpler solution would serve you better, we will say so.",
  } as LinkedText,
  bring: [
    "The decision or question you want the model to help with",
    "A rough description of the data you hold and where it lives",
    "How you measure success for that decision today",
  ],
};

/** Related services strip (outside the main content; pack section B). */
export const RELATED = [
  { label: "Predictive analytics", href: "/services/predictive-analytics" },
  { label: "NLP development", href: "/services/nlp-development" },
  { label: "Computer vision development", href: "/services/computer-vision-development" },
];

export const SCHEMA_SERVICE = {
  name: "Machine Learning Development",
  alternateName: "Machine Learning Development Services",
  serviceType: ["Machine learning development", "Custom machine learning model development", "MLOps", "Machine learning integration"],
  description: SEO.description,
  relatedServicePath: "/services/ai-development",
  catalogName: "Machine learning development services",
  catalog: SERVICES.map((s) => s.title.charAt(0).toUpperCase() + s.title.slice(1)),
};

type OgTone = "plain" | "purple" | "teal" | "sun";
/** Social sharing image content (used by ./opengraph-image.tsx). */
export const OG: { title: string; accent: string; rows: [string, OgTone][][] } = {
  title: "Machine Learning Development",
  accent: "Models that earn their place in production",
  rows: [
    [["Your data", "plain"], ["Features", "plain"], ["Model", "purple"]],
    [["Validated", "teal"], ["Deployed", "teal"], ["Monitored", "teal"]],
    [["Python · scikit-learn · PyTorch · MLflow", "sun"]],
  ],
};
