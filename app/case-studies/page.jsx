// app/case-studies/page.jsx
import React from "react";
import Link from "next/link";
import Image from "next/image";
import CountUp from "../component/countup";

import JsonLd from "../Components/JsonLd";
import { jsonLdFor, metadataFor } from "../lib/seo-pages";

export const metadata = metadataFor("caseStudies");

// Example project types. These describe work ClickMasters can deliver; they
// are NOT presented as named client results. Client names, testimonials and
// performance figures were removed because no evidence or publication
// permission could be found. Re-add a real case study only with written
// client approval and verifiable figures.
const useCaseCards = [
  {
    tag: "HEALTHCARE",
    title: "Radiology Diagnostics Support with Computer Vision",
    description:
      "Vision models that help clinicians review medical imagery and prioritise cases for triage, built with privacy and compliance in mind.",
    image: "/assets/Studies/Case6.webp",
    alt: "Clinicians reviewing an MRI scanner display in a modern hospital room",
  },
  {
    tag: "FINANCE",
    title: "Automated Financial Fraud Detection & Compliance",
    description:
      "Anomaly detection models that flag unusual transactions in real time, deployable on private, isolated infrastructure.",
    image: "/assets/Studies/Case1.webp",
    alt: "Digital vault surrounded by streams of encrypted data",
  },
  {
    tag: "RETAIL",
    title: "Demand Prediction & Inventory Sync",
    description:
      "Forecasting that combines sales history and market signals so supply-chain planners can reduce stock-outs and over-production.",
    image: "/assets/Studies/Case2.webp",
    alt: "Automated retail warehouse with robotic arms and clothing racks",
  },
  {
    tag: "LOGISTICS",
    title: "Real-Time Fleet Routing Automation",
    description:
      "Fleet monitoring, routing engines and automated dispatch maps driven by historical and live traffic data.",
    image: "/assets/Studies/Case3.webp",
    alt: "World map dashboard showing global logistics routes",
  },
  {
    tag: "EDUCATION",
    title: "Custom LLM Learning Copilots",
    description:
      "Interactive learner dashboards, adaptive practice content and progress analytics powered by large language models.",
    image: "/assets/Studies/Case4.webp",
    alt: "Student using a VR headset and tablet at a study desk",
  },
  {
    tag: "AGRICULTURE",
    title: "Multispectral Crop Health Monitoring",
    description:
      "Computer vision that classifies crop stress and disease from drone and satellite imagery.",
    image: "/assets/Studies/Case5.webp",
    alt: "Drones flying over green crop fields with highlighted analysis overlays",
  },
];

const impactStats = [
  { value: "AI", label: "Pipelines & Intelligent Automation" },
  { value: "Cloud", label: "Migrations & Microservices" },
  { value: "Web", label: "& Mobile Platforms" },
  { value: "8", label: "Sectors Served" },
];

const deliverySteps = [
  {
    title: "Discovery",
    description:
      "We map your data, systems and goals, and agree what success looks like before any code is written.",
  },
  {
    title: "Proof of Concept",
    description:
      "A focused prototype lets you validate accuracy and value on your own data before committing to a full build.",
  },
  {
    title: "Build & Integrate",
    description:
      "Sprint-based delivery with regular demos, integrated with the tools and platforms your team already uses.",
  },
];


export default function CaseStudies() {
  return (
    <>
      <JsonLd data={jsonLdFor("caseStudies")} />
      {/* Hero Section */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            AI Use Cases &{" "}
            <span className="italic text-[#A000DF]">
              Example Projects
            </span>
          </h1>

          <p className="mt-5 text-gray-500 text-sm md:text-base max-w-2xl leading-relaxed">
            Explore the kinds of AI pipelines and enterprise automation
            projects ClickMasters designs and builds, from computer vision
            and fraud detection to routing engines and learning copilots.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="w-full">
              <Image
                src="/assets/Studies/case0.webp"
                alt="Operations centre with wall screens showing a global logistics network"
                width={750}
                height={450}
                preload
                sizes="(min-width: 768px) 50vw, 100vw"
                className="w-full h-auto object-contain"
              />
            </div>

            <div>
              <p className="text-[#A000DF] text-xs font-semibold tracking-wide mb-3">
                FEATURED USE CASE
              </p>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                AI-Powered Dispatch Routing for Logistics
              </h2>

              <p className="mt-4 text-gray-500 text-sm leading-relaxed">
                Replace static scheduling with a real-time dispatch routing
                framework. Custom machine learning models trained on your own
                route and demand data help planners assign vehicles and
                delivery windows more efficiently.
              </p>

              <div className="mt-6 flex items-center gap-6">
                <Link href="/contact" className="inline-block bg-[#A000DF] hover:bg-[#a000dfdf] text-white text-sm font-medium px-6 py-3  transition-colors">
                  Discuss a Similar Project
                </Link>

                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter + Studies Grid Section */}
      <section className="bg-gray-50 py-16 px-6 border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mb-12">
            Example Projects{" "}
            <span className="italic text-[#A000DF]">We Can Build</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-14">
            {useCaseCards.map((card) => (
              <div key={card.title}>
                <Image
                  src={card.image}
                  alt={card.alt}
                  width={468}
                  height={240}
                  className="w-full h-[220px] object-contain"
                />
                <p className="text-[#A000DF] text-xs font-semibold tracking-wide mt-2">
                  {card.tag}
                </p>
                <h3 className="font-serif text-lg font-bold text-gray-900 mt-3 leading-snug">
                  {card.title}
                </h3>
                <p className="text-gray-500 text-sm mt-3 leading-relaxed">
                  {card.description}
                </p>

                
                <Link
                  href="/contact"
                  className="inline-block mt-3 text-[#A000DF] text-sm font-medium hover:underline"
                >
                  Discuss a Similar Project
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quantifiable Impact Section — with scroll count-up effect */}
      <section className="bg-black py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-2xl md:text-4xl font-bold text-white">
            Built For Impact.{" "}
            <span className="italic text-[#A000DF]">Designed To Scale.</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 mt-14">
            {impactStats.map((stat, index) => (
              <div key={index}>
                <p className="text-[#A000DF] font-serif text-3xl md:text-4xl font-bold mb-2">
                  <CountUp value={stat.value} />
                </p>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Deliver Section */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-2xl md:text-4xl font-bold text-gray-900 mb-16">
            How We Take A Use Case{" "}
            <span className="italic text-[#A000DF]">From Idea To Launch</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-12">
            {deliverySteps.map((step) => (
              <div key={step.title}>
                <h3 className="font-serif text-lg font-semibold text-[#A000DF]">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mt-3">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-2xl md:text-4xl font-bold text-gray-900">
            Start Your AI{" "}
            <span className="italic text-[#A000DF]">Success Story</span>
          </h2>

          <p className="mt-6 text-gray-500 text-sm md:text-base leading-relaxed">
            Let&apos;s identify the scaling bottlenecks in your systems and
            build the automated systems to remove them.
          </p>

          <div className="mt-8 flex items-center justify-center gap-6">
            <Link href="/contact" className="inline-block bg-[#A000DF] hover:bg-[#a000dfdf] text-white text-sm font-medium px-6 py-3  transition-colors">
              Discuss Your Project
            </Link>

            
            <Link
              href="/services/ai-development#packages"
              className="text-[#A000DF] text-sm font-medium hover:underline"
            >
              View Pricing Packages
            </Link>
          </div>
        </div>
      </section>

    </>
  );
}