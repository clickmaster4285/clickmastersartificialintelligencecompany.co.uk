import type { AiServicePageContent } from "../../lib/ai-service-page";

/*
 * /services/computer-vision-development. Expanded from the "Computer Vision
 * Development" section of /services/ai-development.
 */
export const CONTENT = {
  slug: "computer-vision-development",
  name: "Computer Vision Development",
  seo: {
    title: "Computer Vision Development Services UK",
    description:
      "Computer vision for UK businesses: inspection, document scanning and image categorisation models, deployed in the cloud or at the edge. Get a quote.",
  },
  schema: {
    serviceType: ["Computer vision development"],
    description:
      "Development of computer vision models for object detection, image classification, document and layout reading and visual inspection, deployed in the cloud or on edge devices.",
  },
  hero: {
    eyebrow: "Computer Vision UK",
    title: "Computer Vision Development Services UK",
    titleAccent: "for Inspection, Documents and Images at Scale",
    lead:
      "Computer vision models interpret images and video: detecting objects, classifying images, reading documents and layouts, and inspecting products for defects. We build vision systems that are tested on images from your real environment, with its lighting, angles and camera quality, and deploy them where they need to run.",
    audience:
      "For manufacturing, logistics, retail and healthcare teams that rely on manual visual checks or key in scanned documents by hand.",
    stats: [
      { value: "Real-world tests", label: "Your lighting and cameras" },
      { value: "Cloud or edge", label: "Deployment" },
      { value: "Pretrained models", label: "Fine-tuned on your images" },
      { value: "UK GDPR & MHRA", label: "Planned in from day one" },
    ],
    figureLabel: "From camera to decision",
    flow: [
      { title: "Capture", text: "Images or video from cameras, scanners or phones." },
      { title: "Detect and classify", text: "Find objects, defects, fields or categories." },
      { title: "Apply thresholds", text: "Confident results pass; uncertain ones go to a person." },
      { title: "Act and record", text: "Update systems, trigger alerts and keep an audit trail." },
    ],
    figcaption: "Models are judged on images from the environment they will run in.",
  },
  overview: {
    heading: "What Is Computer Vision Development?",
    paragraphs: [
      "Computer vision development is the building of software that can see well enough to make or support a decision. Most projects start from a pretrained detection or classification model and fine-tune it on labelled images of your products, documents or scenes, which needs far fewer images than training from scratch.",
      "The hardest part is rarely the model; it is the conditions. Lighting changes between shifts, cameras differ between sites and real products vary more than sample photos. We test on images from the real environment and choose cloud or edge deployment according to latency and connectivity. Where outcomes need forecasting rather than seeing, our [machine learning development services](/services/machine-learning) take over.",
      "Computer vision is one of the capabilities in our [AI development services](/services/ai-development), and it often feeds results into ERP, quality or maintenance systems so that a detected defect becomes an action, not just an alert.",
    ],
  },
  problems: {
    heading: "Problems Computer Vision Solves",
    intro: "Vision systems replace repetitive visual checks and manual keying with consistent, measurable results.",
    items: [
      { title: "Manual visual inspection", text: "Defects are missed when people inspect high volumes for long shifts." },
      { title: "Inconsistent checks", text: "Results vary between inspectors, shifts and sites." },
      { title: "Scanned documents keyed by hand", text: "Staff re-type information from scanned forms, labels and delivery notes." },
      { title: "Unsorted image libraries", text: "Product and asset images are categorised manually, slowing catalogues and audits." },
    ],
  },
  applications: {
    heading: "Practical Applications",
    intro: "Illustrative examples. Each model is evaluated on images captured in the real operating environment.",
    items: [
      { title: "Production-line quality control", text: "Detect surface defects, missing parts or mislabelled items at line speed." },
      { title: "Document and layout scanning", text: "Read fields from forms, labels and delivery notes, including layout-aware extraction." },
      { title: "Catalogue image categorisation", text: "Tag and sort product images by category, colour and attributes." },
      { title: "Crop health monitoring", text: "Analyse multispectral imagery to flag areas of stress for agronomists." },
      { title: "Medical imaging decision support", text: "Highlight areas for clinician review, planned with regulatory leads from the start." },
    ],
  },
  process: {
    heading: "How We Build Computer Vision Systems",
    intro: "Every stage is grounded in images from your environment, so results in testing reflect results on the line.",
    steps: [
      { title: "Image collection", text: "Capture representative images across shifts, sites, lighting and product variation.", output: "Image dataset with coverage report" },
      { title: "Labelling", text: "Label defects, objects or fields with your experts, including clear rules for borderline cases.", output: "Labelled dataset and labelling guide" },
      { title: "Model fine-tuning", text: "Fine-tune pretrained detection or classification models and compare them on a held-out set.", output: "Evaluated model with error analysis" },
      { title: "Real-environment testing", text: "Test on live or recently captured images from the actual cameras and conditions.", output: "Field test results and thresholds" },
      { title: "Deployment", text: "Deploy in the cloud or on edge devices, integrated with your quality, ERP or document systems.", output: "Production deployment and runbook" },
      { title: "Monitoring and retraining", text: "Track accuracy and drift as products, cameras or conditions change, and retrain on new images.", output: "Monitoring and retraining plan" },
    ],
  },
  tech: {
    heading: "Technologies for Computer Vision",
    intro: "We choose model families and deployment targets based on accuracy, speed and the hardware available on site.",
    groups: [
      { title: "Models & training", items: ["Python", "PyTorch", "TensorFlow", "Hugging Face vision models"] },
      { title: "Deployment", items: ["Docker", "Edge devices", "AWS"] },
      { title: "Operations", items: ["MLflow", "Grafana"] },
    ],
  },
  compliance: {
    heading: "UK GDPR and MHRA Considerations",
    paragraphs: [
      "Facial recognition uses biometric data, which is special category data under UK GDPR, so it needs a clear lawful basis, a Data Protection Impact Assessment and strong safeguards. We plan these projects with your data protection lead from day one.",
      "Clinical imaging tools may be regulated as medical devices by the MHRA. We identify this early so the system is designed, documented and tested with the right regulatory route in mind.",
    ],
  },
  industries: {
    heading: "Where Computer Vision Helps Most",
    intro: "Vision pays off where visual checks are frequent, repetitive and high-stakes.",
    items: [
      { href: "/industries/manufacturing", title: "Smart Manufacturing", text: "Visual quality inspection at line speed, with results feeding production and maintenance systems." },
      { href: "/industries/healthcare", title: "Healthcare & MedTech", text: "Imaging decision support for clinician review, built with MHRA requirements in view." },
    ],
  },
  related: {
    heading: "Related AI Services",
    intro: "Vision projects commonly connect with these services.",
    items: [
      { href: "/services/ai-development", title: "AI Development Services", text: "The full AI lifecycle, from discovery to monitored production." },
      { href: "/services/machine-learning", title: "Machine Learning Development", text: "Models for structured data, from anomaly detection to scoring." },
      { href: "/services/predictive-analytics", title: "Predictive Analytics", text: "Turn inspection data into maintenance and quality forecasts." },
      { href: "/services/custom-ai-development", title: "Custom AI Development", text: "Wrap vision models in the application your operators use." },
      { href: "/hire/ai-developers", title: "Hire AI Developers", text: "Computer vision and ML engineers for your own team." },
    ],
  },
  faqs: [
    {
      q: "How many images do we need to train a computer vision model?",
      a: ["Fewer than many teams expect, because we fine-tune pretrained models. What matters most is coverage: images that reflect real variation in lighting, angles, products and defects. The collection stage tells you whether you have enough."],
    },
    {
      q: "Can computer vision run on site without an internet connection?",
      a: ["Yes. Models can run on edge devices next to the camera, which suits low-latency inspection or sites with limited connectivity. Results can sync to central systems when a connection is available."],
    },
    {
      q: "Do we need new cameras?",
      a: ["Not always. We test on images from your existing cameras first. If image quality limits accuracy, we recommend specific changes to cameras, positioning or lighting."],
    },
    {
      q: "Is facial recognition allowed under UK GDPR?",
      a: ["It uses biometric special category data, so it needs a clear lawful basis, a Data Protection Impact Assessment and strong safeguards. We assess this with your data protection lead before any build. To discuss a project, [contact our team](/contact)."],
    },
  ],
  cta: {
    title: "Send Us a Few Real Images.",
    titleAccent: "We Will Tell You What a Model Can See.",
    body: {
      text: "Share sample images from your environment and the decision they need to support. We will assess feasibility and outline a pilot. For forecasting from the results, see our [[link]].",
      link: { anchor: "predictive analytics services", href: "/services/predictive-analytics" },
    },
    bring: ["Sample images or video", "The defect or field to detect", "Where results should go"],
  },
  og: {
    title: "Computer Vision Development",
    accent: "Inspection, documents, images",
    rows: [
      [["Detect · Classify · Read", "purple"]],
      [["Defects", "plain"], ["Documents", "plain"], ["Products", "plain"]],
      [["Cloud", "teal"], ["Edge", "teal"]],
      [["Quality · ERP · Alerts", "sun"]],
    ],
  },
} satisfies AiServicePageContent;
