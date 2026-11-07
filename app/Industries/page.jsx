// app/Industries/page.jsx
import React from "react";
import Link from "next/link";
import Image from "next/image";
import CountUp from "../component/countup";

import JsonLd from "../Components/JsonLd";
import { jsonLdFor, metadataFor } from "../lib/seo-pages";

export const metadata = metadataFor("industries");

const industries = [
  {
    title: "Healthcare & MedTech",
    description:
      "Automate reading clinical notes, secure triage coordinate portals, and HIPAA-compliant private cloud deployments.",
  },
  {
    title: "Finance & Investment",
    description:
      "Ledger validation engines, risk index modeling dashboards, automated auditing, and SOC2-secure compliance layers.",
  },
  {
    title: "Manufacturing & Heavy Tech",
    description:
      "Preempt engine wear, optimize local assembly lane volumes, and automate inventory updates via connected IoT lines.",
  },
  {
    title: "Retail & E-Commerce",
    description:
      "Compute dynamic checkout discounts, forecast seasonal warehouse demand, and deploy hyper-targeted recommendation agents.",
  },
  {
    title: "Energy & Utilities",
    description:
      "Analyze grid consumption spikes, preempt spatial weather outages, and allocate resources dynamically across regions.",
  },
  {
    title: "Logistics & Transport",
    description:
      "Real-time fleet route calculations, automated storage packing maps, and dispatch automation engines.",
  },
  {
    title: "EduTech & Corporate Training",
    description:
      "Deploy interactive student progress dashboards, custom testing generators, and automated syllabus builders.",
  },
  {
    title: "Public Sector & Compliance",
    description:
      "Ingest massive legal volumes, automate secure records redactions, and deploy secure localized databases.",
  },
];

const clinicalStats = [
  { value: "Secure", label: "Privacy-First Architecture" },
  { value: "Faster", label: "Clinical Documentation Workflows" },
];

const scaleStats = [
  { value: "8", label: "Sectors Served", sub: "From healthcare to manufacturing" },
  { value: "Cloud", label: "Native Deployments", sub: "AWS, Azure & Google Cloud" },
  { value: "End-to-End", label: "Delivery", sub: "Discovery, build, launch & support" },
  { value: "GDPR", label: "Aware Data Handling", sub: "Privacy built into every build" },
];

const foundations = [
  {
    title: "Universal Security Frameworks",
    description:
      "Every model is deployed inside secure Docker enclosures with TLS encryption  at rest and in transit, strictly satisfying  SOC2, and HIPAA regulations.",
  },
  {
    title: "Continuous Pipeline Tuning",
    description:
      "No model performs forever without tuning. We install automated telemetry tracks that alert developers when data decay threatens accuracy.",
  },
  {
    title: "Decoupled Scalable Architecture",
    description:
      "Using React frontends, Node.js controllers, and scalable serverless compute paths, we build systems that scale smoothly to millions.",
  },
];


export default function Industries() {
  return (
    <>
      <JsonLd data={jsonLdFor("industries")} />
      {/* Hero Section */}
      <main className="min-h-[50vh] bg-gray-50 flex items-center justify-center px-6">
        <section className="max-w-4xl text-center py-24">
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            AI Across <span className="text-[#A000DF]">Industries</span>{" "}
            Shaping the
            <br />
            Future
          </h1>

          <p className="mt-6 text-gray-500 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            No matter your field of play, artificial intelligence offers
            high-impact leverage to remove manual bottlenecks and drive
            margin expansion.
          </p>

          <div className="mt-8">
            <Link href="/contact" className="inline-block bg-[#A000DF] hover:bg-[#a000dfdf] text-white text-sm font-medium px-6 py-3  transition-colors">
              Consult Our Sector Leads
            </Link>
          </div>
        </section>
      </main>

      {/* Deep Specialization Section */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-2xl md:text-4xl font-bold text-gray-900 mb-16">
            We Bring Deep Technological{" "}
            <span className="text-[#A000DF]">Specialization to Every Market</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-10 gap-y-14">
            {industries.map((industry, index) => (
              <div key={index}>
                <h3 className="font-serif text-lg font-semibold text-gray-900 mb-3">
                  {industry.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {industry.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinical Workflow Section */}
      <section className="bg-black py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-white leading-tight">
              Re-engineering <span className="text-[#A000DF]">Clinical Workflow</span>
            </h2>

            <p className="mt-5 text-gray-400 text-sm md:text-base leading-relaxed">
              In partnership with leading medical centers, we deployed a
              custom clinical document reader. It automatically ingests
              intake notes, extracts critical historical symptoms, and
              structures the patient record under HIPAA security baselines —
              saving physicians hours of documentation workload.
            </p>

            <div className="mt-8 flex gap-16">
              {clinicalStats.map((stat, index) => (
                <div key={index}>
                  <p className="text-[#A000DF] font-serif text-2xl font-bold">
                   <CountUp value={stat.value} />
                  </p>
                  <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full">
            <Image
              src="/assets/industries/industry.png"
              alt="Clinical workflow AI network visualization"
              width={700}
              height={450}
              className="w-full h-auto object-contain rounded-md"
            />
          </div>
        </div>
      </section>

      {/* Unmatched Leverage Stats Section */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-serif text-2xl md:text-4xl font-bold text-gray-900 mb-16">
            Built To Deliver{" "}
            <span className="text-[#A000DF]">Sustained at Scale</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-14">
            {scaleStats.map((stat, index) => (
              <div key={index}>
                <p className="text-[#A000DF] font-serif text-4xl font-bold mb-3">
                <CountUp value={stat.value}/>
                </p>
                <h3 className="font-serif text-base font-semibold text-gray-900">
                  {stat.label}
                </h3>
                <p className="text-gray-500 text-xs mt-1">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Robust Foundations Section */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-2xl md:text-4xl font-bold text-gray-900 mb-16">
            Robust Foundations{" "}
            <span className="text-[#A000DF]">Engineered to Adapt</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-14">
            {foundations.map((item, index) => (
              <div key={index}>
                <h3 className="font-serif text-lg font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-[13px] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* See How AI Transforms Section */}
      <section className="bg-gray-50 py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900">
            See How AI Transforms Your{" "}
            <span className="text-[#A000DF]">Industry</span>
          </h2>

          <p className="mt-6 text-gray-500 text-sm md:text-base leading-relaxed">
            Our team is comprised of senior sector engineers with decades of
            experience satisfying unique compliance requirements.
          </p>

          <div className="mt-8">
            <Link href="/contact" className="inline-block bg-[#A000DF] hover:bg-[#a000dfdf] text-white text-sm font-medium px-6 py-3 transition-colors">
              Consult a Specialist
            </Link>
          </div>
        </div>
      </section>

    </>
  );
}