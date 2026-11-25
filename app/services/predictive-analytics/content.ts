import type { AiServicePageContent } from "../../lib/ai-service-page";

/*
 * /services/predictive-analytics. Expanded from the "Predictive Analytics"
 * section of /services/ai-development. Also carries the Energy & Utilities
 * use cases previously listed on that page's industry cards.
 */
export const CONTENT = {
  slug: "predictive-analytics",
  name: "Predictive Analytics",
  seo: {
    title: "Predictive Analytics & AI Forecasting UK",
    description:
      "Predictive analytics for UK businesses: churn, demand, risk and fraud forecasts built on your data and delivered into dashboards, ERP or CRM. Get a quote.",
  },
  schema: {
    serviceType: ["Predictive analytics", "AI forecasting"],
    description:
      "Development of statistical and machine learning models that forecast churn, demand, risk and other outcomes from historical data, delivered into dashboards, ERP and CRM systems with scheduled retraining.",
  },
  hero: {
    eyebrow: "Predictive Analytics UK",
    title: "Predictive Analytics Services UK",
    titleAccent: "for Decisions Made Before the Problem Arrives",
    lead:
      "Predictive analytics applies statistical and machine learning models to estimate what is likely to happen next: which customers may leave, where demand will rise, which transactions carry risk. We build forecasts around the decision they feed and deliver them into the dashboards, ERP or CRM your team already uses.",
    audience:
      "For finance, operations, commercial and supply chain leaders who plan reactively and see churn, stock-outs or risk only after the cost has landed.",
    stats: [
      { value: "Decision-first", label: "Built around one choice" },
      { value: "Backtested", label: "On past periods" },
      { value: "Ranges, not guesses", label: "Confidence shown" },
      { value: "ERP & CRM", label: "Delivered in-system" },
    ],
    figureLabel: "How a forecast reaches a decision",
    flow: [
      { title: "Name the decision", text: "Reorder, retain, review or price: one clear choice." },
      { title: "Learn from history", text: "Features built from your warehouse or operational data." },
      { title: "Backtest honestly", text: "Forecasts tested on periods the model has not seen." },
      { title: "Deliver in context", text: "Ranges and drivers shown where the decision is made." },
    ],
    figcaption: "Forecasts are retrained on a schedule as patterns shift.",
  },
  overview: {
    heading: "What Is Predictive Analytics?",
    paragraphs: [
      "Predictive analytics uses historical data to estimate future outcomes and the confidence around them. Methods range from classical time-series forecasting to gradient-boosted models and neural networks; we start with simple, explainable baselines and add complexity only when it measurably improves the forecast.",
      "A forecast only creates value when it changes a decision. So we begin by naming that decision, such as how much stock to order, which customers to contact or which transactions to review, and design the model, its output and its delivery around it. Forecasts are reported as ranges with their main drivers, not as single numbers that hide uncertainty.",
      "Predictive analytics sits alongside our [machine learning development services](/services/machine-learning) within our wider [AI development services](/services/ai-development). It also covers sector forecasts such as energy consumption spikes, peak-load planning and outage-risk modelling linked to weather data.",
    ],
  },
  problems: {
    heading: "Problems Predictive Analytics Solves",
    intro: "Most organisations already hold the history needed to look ahead; it is rarely put to work.",
    items: [
      { title: "Reactive planning", text: "Plans are built from last year's figures and adjusted only after reality diverges." },
      { title: "Stock-outs and overstock", text: "Inventory is too low for peaks and too high in quiet periods, tying up cash." },
      { title: "Churn noticed too late", text: "Customers are identified as at-risk only after they have left." },
      { title: "Risk spotted after the loss", text: "Fraud and credit risk are caught in reconciliation rather than at the point of decision." },
    ],
  },
  applications: {
    heading: "Practical Applications",
    intro: "Illustrative forecasting use cases, each backtested on your own historical data.",
    items: [
      { title: "Churn prediction", text: "Rank customers by likelihood of leaving and the drivers behind it, for targeted retention." },
      { title: "Risk and fraud scoring", text: "Score transactions or applications so reviewers focus on the riskiest cases." },
      { title: "Dynamic pricing support", text: "Estimate demand response to price so commercial teams can set prices with evidence." },
      { title: "Inventory and seasonal demand", text: "Forecast demand by product and location, including seasonal peaks." },
      { title: "Energy and peak-load forecasting", text: "Predict consumption spikes and outage risk using weather and usage data." },
    ],
  },
  process: {
    heading: "How We Build Predictive Models",
    intro: "We measure forecasts the way they will be used: on periods the model has not seen, against the decision they inform.",
    steps: [
      { title: "Decision framing", text: "Agree the decision, the forecast horizon, the granularity and how accuracy will be judged.", output: "Forecast specification" },
      { title: "Data and features", text: "Build features from your warehouse or operational systems, including external drivers such as weather or calendars.", output: "Feature pipeline and data quality report" },
      { title: "Baselines and models", text: "Compare simple baselines with more complex models and keep the simplest that meets the target.", output: "Model comparison report" },
      { title: "Backtesting", text: "Test on historical periods the model has not seen and report ranges and confidence, not single numbers.", output: "Backtest results by period" },
      { title: "Delivery", text: "Publish forecasts into dashboards or directly into your ERP or CRM, with drivers explained.", output: "In-system forecasts and dashboard" },
      { title: "Retraining", text: "Monitor accuracy and drift and retrain on a schedule as patterns shift.", output: "Monitoring and retraining schedule" },
    ],
  },
  tech: {
    heading: "Technologies for Predictive Analytics",
    intro: "We favour explainable, maintainable tooling that your data team can run after handover.",
    groups: [
      { title: "Modelling", items: ["Python", "scikit-learn", "Time-series models", "PyTorch"] },
      { title: "Data", items: ["PostgreSQL", "MLflow", "AWS SageMaker"] },
      { title: "Delivery", items: ["Grafana", "AWS", "ERP and CRM APIs"] },
    ],
  },
  compliance: {
    heading: "Fair and Explainable Forecasts",
    paragraphs: [
      "When scores affect individuals, such as credit or fraud decisions, UK GDPR safeguards for automated decision-making apply, and FCA Consumer Duty expects firms to avoid foreseeable harm. We keep people in the loop, test for bias on relevant groups and explain the drivers behind each score.",
      "Energy and other critical infrastructure forecasts are designed with security in mind, with data access scoped to what the model needs.",
    ],
  },
  industries: {
    heading: "Where Predictive Analytics Helps Most",
    intro: "Forecasting pays off wherever planning decisions are frequent and costly to get wrong.",
    items: [
      { href: "/industries/ecommerce", title: "E-Commerce", text: "Seasonal demand forecasts, churn prediction and pricing support for online retailers." },
      { href: "/industries/logistics", title: "Supply Chain & Logistics", text: "Volume, capacity and inventory forecasts that feed routing and warehouse planning." },
    ],
  },
  related: {
    heading: "Related Services",
    intro: "Forecasts usually connect to these services.",
    items: [
      { href: "/services/ai-development", title: "AI Development Services", text: "The full AI lifecycle, from discovery to monitored production." },
      { href: "/services/machine-learning", title: "Machine Learning Development", text: "Segmentation, recommendation and anomaly detection models." },
      { href: "/services/erp-crm-development", title: "ERP & CRM Development", text: "Put forecasts inside the systems where decisions are made." },
      { href: "/services/computer-vision-development", title: "Computer Vision Development", text: "Add inspection data as an input to quality and maintenance forecasts." },
      { href: "/hire/ai-developers", title: "Hire AI Developers", text: "Data scientists and ML engineers for your own team." },
    ],
  },
  faqs: [
    {
      q: "How much historical data do we need for predictive analytics?",
      a: ["It depends on the cycle you are forecasting. Seasonal demand usually needs at least a couple of years of history; churn and risk models need enough past outcomes to learn from. The data assessment confirms this before modelling starts."],
    },
    {
      q: "How accurate will the forecasts be?",
      a: ["We measure accuracy by backtesting on periods the model has not seen and report it honestly, with ranges and confidence. If a forecast cannot beat a simple baseline, we tell you."],
    },
    {
      q: "Can forecasts appear inside our ERP or CRM?",
      a: ["Yes. Forecasts can be written back into ERP and CRM records through their APIs, or shown in dashboards, so people see them where they make the decision."],
    },
    {
      q: "What does a predictive analytics project cost?",
      a: ["Cost depends on data preparation, the number of forecasts and integrations, and retraining needs. You can get a first estimate with our [AI ROI calculator](/resources/free-tools), and we quote a fixed scope after discovery."],
    },
  ],
  cta: {
    title: "Name the Decision You Want to Make Earlier.",
    titleAccent: "We Will Build the Forecast Behind It.",
    body: {
      text: "Tell us the decision, the data you hold and where the forecast should appear. We will assess feasibility and propose a backtest. To put forecasts inside your core systems, see our [[link]].",
      link: { anchor: "ERP and CRM development services", href: "/services/erp-crm-development" },
    },
    bring: ["The decision to improve", "Historical data you hold", "Where forecasts should appear"],
  },
  og: {
    title: "Predictive Analytics",
    accent: "Forecasts that change decisions",
    rows: [
      [["Forecast + confidence range", "purple"]],
      [["Churn", "plain"], ["Demand", "plain"], ["Risk", "plain"]],
      [["Backtested", "teal"], ["Retrained", "teal"]],
      [["Dashboards · ERP · CRM", "sun"]],
    ],
  },
} satisfies AiServicePageContent;
