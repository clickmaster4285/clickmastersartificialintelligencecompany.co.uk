// app/Services/page.jsx
import React from "react";
import Link from "next/link";
import Image from "next/image";
import CountUp from "../component/countup";


import JsonLd from "../Components/JsonLd";
import { jsonLdFor, metadataFor } from "../lib/seo-pages";

export const metadata = metadataFor("services");

const llmPoints = [
  "Secure data ingestion frameworks",
  "Private infrastructure isolation (AWS/Azure)",
  "Up to 90% reduction in response latency",
];

const enterpriseFeatures = [
  {
    title: "Machine Learning Development",
    description:
      "Supervised and unsupervised models tailored for core forecasting, smart custom clustering, and automated recommendation pipelines that drive conversion.",
  },
  {
    title: "Natural Language Processing",
    description:
      "Advanced LLM fine-tuning, retrieval-augmented generation (RAG), sentiment analysis engines, and semantic search configurations for unstructured data.",
  },
  {
    title: "Computer Vision Systems",
    description:
      "Real-time object detection, quality control automation, facial validation, spatial layout scanning, and precision image categorization for modern infrastructure.",
  },
  {
    title: "Predictive Analytics Engines",
    description:
      "Deploy risk assessment pipelines, user churn estimation matrices, dynamic price models, and inventory consumption forecasts to preempt market shifts.",
  },
  {
    title: "AI Consulting & Strategy",
    description:
      "Architecture discovery, ROI mapping, pipeline auditing, design of enterprise automation blueprints, and compliance path definition.",
  },
  {
    title: "Robotic Process Automation",
    description:
      "Automate manual business tasks, system synchronization processes, document ingestion pipelines, and multi-tier transaction reconciliations.",
  },
];

const pipelineSteps = [
  {
    number: "01",
    title: "Discovery & Audit",
    description:
      "We evaluate your current technical setup and map strategic automation vectors to establish real business metrics and timelines.",
  },
  {
    number: "02",
    title: "Architect & Design",
    description:
      "Our teams map the exact pipeline architecture, choosing the optimal models and defining security protocols.",
  },
  {
    number: "03",
    title: "Model Development",
    description:
      "Our engineers build, train, and fine-tune models inside clean sandboxes, rigorously testing data precision.",
  },
  {
    number: "04",
    title: "Deploy & Optimize",
    description:
      "We launch components securely, integrating native APIs and initializing continuous tracking pipelines.",
  },
];

const techStacks = [
  {
    title: "Frameworks & Libraries",
    items: ["PyTorch", "TensorFlow", "Keras", "Scikit-Learn", "Hugging Face", "LangChain"],
  },
  {
    title: "LLMs & Foundational Models",
    items: [
      "OpenAI GPT-4",
      "Claude 3.5 Sonnet",
      "Llama 3",
      "Mixtral 8x7B",
      "Stable Diffusion",
      "Whisper",
    ],
  },
  {
    title: "Infrastructure & MLOps",
    items: ["Kubeflow", "MLflow", "AWS SageMaker", "Docker", "Kubernetes", "Weights & Biases"],
  },
];

const pricingPlans = [
  {
    name: "Starter MVP",
    subtitle: "For rapid prototype validation",
    price: "$15k",
    features: [
      "1 Custom Fine-Tuned Model",
      "Core API Integrations",
      "Standard Cloud Deployment Support",
      "2 Weeks Post-Launch QA Monitoring",
    ],
    highlighted: false,
  },
  {
    name: "Professional",
    subtitle: "For scaling operational workloads",
    price: "$45k",
    features: [
      "Multiple Custom Model Architectures",
      "Full ERP/CRM Integration Sync",
      "Dedicated Private VPC Deployment",
      "Dedicated Support Specialist Availability",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise Core",
    subtitle: "For global operations",
    price: "Custom",
    features: [
      "Complete Multi-Tier Model Engineering",
      "HIPAA/SOC2 Compliant Sandboxing",
      "High-Availability Redundant Deployments",
      "24/7 Priority SLA & Active On-Call Monitoring",
    ],
    highlighted: false,
  },
];


export default function Services() {
  return (
    <>
      <JsonLd data={jsonLdFor("services")} />
      {/* Hero Section */}
      <main className="min-h-[50vh] bg-gray-50 flex items-center justify-center px-6">
        <section className="max-w-4xl text-center py-24">
          <h1 className="font-serif text-3xl md:text-6xl font-bold text-gray-900 leading-tight">
            Comprehensive AI <span className="text-[#A000DF]">Services</span>
            <br />
            Engineered for Rapid Scale
          </h1>

          <p className="mt-6 text-gray-500 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            We design, develop, and integrate custom artificial intelligence
            pipelines that remove operational limits, automate decision
            trees, and generate new revenue models.
          </p>

          <div className="mt-8">
            <Link href="/contact" className="inline-block bg-[#A000DF] hover:bg-[#a000dfdf] text-white text-sm font-medium px-6 py-3 transition-colors">
              Get a free quote
            </Link>
          </div>
        </section>
      </main>

      {/* LLM Fine-Tuning Section */}
      <section className="bg-black py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-white leading-tight">
              Large Language Model (LLM){" "}
              <span className="text-[#A000DF]">Fine-Tuning</span>
            </h2>

            <p className="mt-5 text-gray-400 text-sm md:text-base leading-relaxed">
              Standard models lack your proprietary operational context. We
              fine-tune models using your unique internal datasets inside
              isolated cloud environments, creating precise custom
              intelligence agents that perform specific business tasks at a
              fraction of generic API call rates.
            </p>

            <ul className="mt-6 space-y-3">
              {llmPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-[#A000DF] mt-1">◆</span>
                  <span className="text-gray-300 text-sm md:text-base">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full">
            <Image
              src="/assets/Services/container.png"
              alt="LLM fine-tuning data pipeline visualization"
              width={700}
              height={450}
              className="w-full h-auto object-contain rounded-md"
            />
          </div>
        </div>
      </section>

      {/* Enterprise AI Solutions Section */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-16">
            Enterprise AI Solutions{" "}
            <span className="text-[#A000DF]">Without Complexity.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-14">
            {enterpriseFeatures.map((feature, index) => (
              <div key={index}>
                <h3 className="font-serif text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Pipeline Section */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-16">
            Our Step-by-Step{" "}
            <span className="text-[#A000DF]">Development Pipeline</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-10 gap-y-14">
            {pipelineSteps.map((step, index) => (
              <div key={index}>
                <p className="text-[#A000DF] font-serif text-4xl font-bold mb-4">
                 <CountUp value= {step.number}/>
                </p>
                <h3 className="font-serif text-lg font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stacks Section */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-16">
            The Tech Stacks we{" "}
            <span className="text-[#A000DF]">Leverage with Excellence</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-12">
            {techStacks.map((stack, index) => (
              <div key={index}>
                <h3 className="font-serif text-base font-semibold text-gray-900 underline underline-offset-4 mb-6">
                  {stack.title}
                </h3>
                <div className="grid grid-cols-3 gap-x-1 gap-y-3">
                  {stack.items.map((item, i) => (
                    <span key={i} className="text-gray-600 text-sm">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Plans Section */}
      <section className="bg-black py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-white text-center mb-16">
            Clear, Actionable{" "}
            <span className="text-[#A000DF]">Investment Plans</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`p-8 rounded-lg border ${
                  plan.highlighted
                    ? "border-[#A000DF] bg-[#1a0d24]"
                    : "border-gray-700 bg-[#111111]"
                }`}
              >
                <h3 className="font-serif text-xl font-bold text-white">
                  {plan.name}
                </h3>
                <p className="text-gray-400 text-xs mt-1">{plan.subtitle}</p>

                <p className="font-serif text-4xl font-bold text-white mt-6">
                  {plan.price}
                </p>

                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#A000DF] mt-1 text-xs">◆</span>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/contact"
                  className={`mt-8 w-full py-3  text-sm font-medium transition-colors ${
                    plan.highlighted
                      ? "bg-[#A000DF] hover:bg-[#a000dfdf] text-white"
                      : "border border-gray-500 text-white hover:bg-gray-800"
                  }`}
                >
                  Select Blueprint
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-2xl md:text-4xl font-bold text-gray-900 leading-tight">
            Ready to Transform Your Business?{" "}
            <span className="text-[#A000DF]">Let&apos;s Build It.</span>
          </h2>

          <p className="mt-6 text-gray-500 text-sm md:text-base leading-relaxed">
            Consult directly with our head of technology. Learn how custom
            models can remove scale limitations in your pipelines.
          </p>

          <div className="mt-8">
            <Link href="/contact" className="inline-block bg-[#A000DF] hover:bg-[#a000dfdf] text-white text-sm font-medium px-6 py-3  transition-colors">
              Get Started Today
            </Link>
          </div>
        </div>
      </section>

    </>
  );
}