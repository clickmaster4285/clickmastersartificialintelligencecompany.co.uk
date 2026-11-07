// app/CaseStudies/page.jsx
import React from "react";
import Link from "next/link";
import Image from "next/image";
import CountUp from "../component/countup";

import JsonLd from "../Components/JsonLd";
import { jsonLdFor, metadataFor } from "../lib/seo-pages";

export const metadata = metadataFor("caseStudies");

const filters = ["All Studies", "Healthcare", "Finance", "Retail", "Manufacturing"];

const caseStudyCards = [
  {
    tag: "MEDVISION AI",
    title: "Radiology Diagnostics Engine with Computer Vision",
    description:
      "A state-of-the-art vision model that scans medical imagery, reducing human classification error and expediting patient triage.",
    image: "/assets/Studies/Case6.png",
  },
  {
    tag: "FINGUARD",
    title: "Automated Financial Fraud Detection & Compliance",
    description:
      "Custom fine-tuned anomaly models running on private isolated servers, validating millions of real-time transactions.",
    image: "/assets/Studies/Case1.png",
  },
  {
    tag: "RETAILMIND",
    title: "UGC-Driven Demand Prediction & Inventory Sync",
    description:
      "Syncing real-time social media trends directly with supply chain planners to prevent inventory blockages and over-manufacturing.",
    image: "/assets/Studies/Case2.png",
  },
  {
    tag: "AUTODRIVE",
    title: "Real-Time Fleet Routing Automation Systems",
    description:
      "Fleet monitors, real-time routing engines, and automated dispatch maps powered by historical regional traffic data sets.",
    image: "/assets/Studies/Case3.png",
  },
  {
    tag: "EDUAI",
    title: "Custom LLM Learning Copilots for Education",
    description:
      "Interactive pupil dashboards, adaptive automated training scripts, and robust analytical progress trackers.",
    image: "/assets/Studies/Case4.png",
  },
  {
    tag: "AGRISENSE",
    title: "Multispectral Crop Health Monitoring Models",
    description:
      "Custom computer vision software executing real-time object classification of crop illnesses across global agricultural infrastructure.",
    image: "/assets/Studies/Case5.png",
  },
];

const impactStats = [
  { value: "AI", label: "Pipelines & Intelligent Automation" },
  { value: "Cloud", label: "Migrations & Microservices" },
  { value: "Web", label: "& Mobile Platforms" },
  { value: "8", label: "Sectors Served" },
];

const testimonials = [
  {
    quote:
      "ClickMasters operated as a true technical partner. Their predictive pricing model saved our marketplace division millions in our very first year.",
    name: "Sarah Jenkins",
    role: "VP of Product, FinGuard",
  },
  {
    quote:
      "The delivery timeline was mind-blowing. We went from raw operational logs to a fully deployed routing engine in under eight weeks.",
    name: "Dave K.",
    role: "Director of Fleet, AutoDrive",
  },
  {
    quote:
      "HIPAA compliance is normally a blocker, but the ClickMasters team isolated our sandbox infrastructure and delivered a perfectly compliant portal.",
    name: "Dr. Amanda Roy",
    role: "Founder, MedVision AI",
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
            Proven Performance &{" "}
            <span className="italic text-[#A000DF]">
              Measurable Real-World ROI
            </span>
          </h1>

          <p className="mt-5 text-gray-500 text-sm md:text-base max-w-2xl leading-relaxed">
            Discover how ClickMasters&apos; custom AI pipelines and enterprise
            automation integrations scale business revenue, reduce operating
            friction, and optimize workflows.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="w-full">
              <Image
                src="/assets/Studies/case0.png"
                alt="Global logistics network real-time operations center"
                width={700}
                height={450}
                className="w-full h-auto object-contain"
              />
            </div>

            <div>
              <p className="text-[#A000DF] text-xs font-semibold tracking-wide mb-3">
                FEATURED CLIENT SUCCESS
              </p>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                Optimizing Depot Logistics with AI Custom Backends
              </h2>

              <p className="mt-4 text-gray-500 text-sm leading-relaxed">
                For LogiFlow Solutions, we designed and integrated a
                real-time dispatch routing framework that boosted overall
                operational planning efficiency. Powered by custom machine
                learning models trained on proprietary route data.
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
          <div className="flex flex-wrap gap-4 mb-12 border-b border-gray-200 pb-6">
            {filters.map((filter, index) => (
              <button
                key={index}
                className={`text-sm px-4 py-2 transition-colors ${
                  index === 0
                    ? "bg-[#A000DF] text-white"
                    : "text-gray-600 hover:text-[#A000DF]"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-14">
            {caseStudyCards.map((card, index) => (
              <div key={index}>
                <Image
                  src={card.image}
                  alt={card.title}
                  width={500}
                  height={280}
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

                
                <a  href="/contact"
                  className="inline-block mt-3 text-[#A000DF] text-sm font-medium hover:underline"
                >
                  Discuss a Similar Project
                </a>
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

      {/* Testimonials Section */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-2xl md:text-4xl font-bold text-gray-900 mb-16">
            What Clients Say After{" "}
            <span className="italic text-[#A000DF]">Rapid Integration</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-12">
            {testimonials.map((testimonial, index) => (
              <div key={index}>
                <p className="text-gray-600 text-sm leading-relaxed italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <p className="text-[#A000DF] text-sm font-semibold mt-5">
                  {testimonial.name}
                </p>
                <p className="text-gray-400 text-xs mt-1">{testimonial.role}</p>
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
            build the automated systems to eliminate them forever.
          </p>

          <div className="mt-8 flex items-center justify-center gap-6">
            <Link href="/contact" className="inline-block bg-[#A000DF] hover:bg-[#a000dfdf] text-white text-sm font-medium px-6 py-3  transition-colors">
              Discuss Your Project
            </Link>

            
            <a  href="/services"
              className="text-[#A000DF] text-sm font-medium hover:underline"
            >
              View Pricing Packages
            </a>
          </div>
        </div>
      </section>

    </>
  );
}