// app/solutions/page.jsx
import React from "react";
import Link from "next/link";
import Image from "next/image";
import CountUp from "../component/countup";

import JsonLd from "../Components/JsonLd";
import { jsonLdFor, metadataFor } from "../lib/seo-pages";

export const metadata = metadataFor("solutions");

const features = [
  {
    title: "Intelligent Document Processing",
    description:
      "Automate reading and validation of legacy PDF forms, invoice pipelines, medical charts, and compliance documentation with automated validation checks.",
  },
  {
    title: "AI-Powered Customer Service",
    description:
      "Deploy natural contextual support models trained on your core internal product docs to deflect routine, repetitive support tickets.",
  },
  {
    title: "Smart Supply Chain Optimization",
    description:
      "Preempt transport delays, automate storage allocation parameters, and optimize regional delivery routes in real-time.",
  },
  {
    title: "Automated Fraud Detection",
    description:
      "Analyze transactional logs instantly, flagging irregular payment velocity or login vectors to safeguard customer security.",
  },
  {
    title: "Healthcare Diagnostics AI",
    description:
      "Accelerate chart triage pipelines, clinical documentation indexing, and patient routing via certified secure compliance portals.",
  },
  {
    title: "Financial Ledger Automation",
    description:
      "Automate accounting reconciliations, currency risk calculations, and balance sheets validations with secure AWS execution.",
  },
];

const stats = [
  {
    value: "Precise",
    title: "Accuracy Focused",
    description:
      "Automate reading unstructured documents with consistent validation that reduces manual review errors.",
  },
  {
    value: "Lean",
    title: "Operational Deflection",
    description:
      "Lower overall support and data entry costs by automating routine pipelines.",
  },
  {
    value: "Fast",
    title: "Pipeline Acceleration",
    description:
      "Ingest records, update system databases, and deploy payloads in seconds.",
  },
  {
    value: "24/7",
    title: "Continuous Autopilot",
    description:
      "Automated routing pipelines designed for continuous, monitored operation.",
  },
];

const integrations = [
  "Salesforce",
  "SAP ERP",
  "ServiceNow",
  "HubSpot",
  "Microsoft Dynamics",
  "Oracle Cloud",
  "Atlassian Jira",
];


export default function Solutions() {
  return (
    <>
      <JsonLd data={jsonLdFor("solutions")} />
      {/* Hero Section */}
      <div className="min-h-[50vh] bg-gray-50 flex items-center justify-center px-6">
        <section className="max-w-4xl text-center py-24">
          <h1 className="font-serif text-3xl md:text-6xl font-bold text-gray-900 leading-tight">
            AI <span className="text-[#A000DF]">Solutions</span> For Complex
            <br />
            Industrial Challenges
          </h1>

          <p className="mt-6 text-gray-500 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Standard software is static. Our customized artificial
            intelligence solutions continuously adapt to live transactions,
            optimizing workflows without human
            <br />
            downtime.
          </p>

          <div className="mt-8">
            <Link href="/case-studies" className="inline-block bg-[#A000DF] hover:bg-[#a000dfdf] text-white text-sm font-medium px-6 py-3 transition-colors">
              Explore Use Cases
            </Link>
          </div>
        </section>
      </div>

      {/* Features Section */}
      <section className="bg-gray-50 py-20 px-6 min-h-[60vh]">
        <div className="max-w-[76rem] mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-16">
            Turn Complex Workflows{" "}
            <span className="text-[#A000DF]">Into Seamless Autopilot</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-14 pl-10">
            {features.map((feature, index) => (
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

      {/* Dispatch Routing Section */}
      <section className="bg-black py-20 px-6">
        <div className="max-w-8xl mx-auto flex justify-center items-center md:grid-cols-2 gap-12">
          <div className="w-[347px] h-[150px] flex items-center justify-center">
            <Image
              src="/assets/Solution/visual.webp"
              alt="Holographic city map with glowing delivery routes on a control table"
              width={900}
              height={600}
              sizes="347px"
              className="object-contain"
            />
          </div>

          <div className="max-w-3xl">
            <h2 className="font-serif text-3xl md:text-3xl font-bold text-white leading-tight">
              Intelligent Dispatch{" "}
              <span className="text-[#A000DF]">Routing Logic</span>
            </h2>

            <p className="mt-3 text-gray-400 text-xs md:text-base leading-relaxed">
              We replace legacy static scheduling scripts with a real-time
              predictive routing model. It can take into account regional
              freight volumes, live road and weather conditions, and local
              storage limits to calculate dynamic delivery lanes.
            </p>

            <div className="mt-5 flex gap-16">
              <div>
                <p className="text-[#A000DF] text-2xl font-bold">Real-Time</p>
                <p className="text-gray-400 text-xs mt-1">Route Recalculation</p>
              </div>
              <div>
                <p className="text-[#A000DF] text-2xl font-bold">Predictive</p>
                <p className="text-gray-400 text-xs mt-1">Demand-Aware Planning</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-16">
            Measurable Operational{" "}
            <span className="text-[#A000DF]">Improvements</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-14">
            {stats.map((stat, index) => (
              <div key={index}>
                <p className="text-[#A000DF] font-serif text-4xl font-bold mb-3">
                  <CountUp value={stat.value}/>
                </p>
                <h3 className="font-serif text-lg font-semibold text-gray-900 mb-2">
                  {stat.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-24 text-center">
            <p className="text-xs tracking-wide text-gray-500 uppercase mb-8">
              Connects Natively With Your Existing Systems
            </p>

            <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
              {integrations.map((name, index) => (
                <span
                  key={index}
                  className="font-serif text-gray-700 text-base md:text-lg"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-14">
            Example Solution{" "}
            <span className="text-[#A000DF]">Blueprints</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div>
              <Image
                src="/assets/Solution/Rectangle.webp"
                alt="Dark dashboard with glowing data line charts"
                width={772}
                height={240}
                className="w-full h-auto object-contain"
              />
              <p className="text-[#A000DF] text-xs font-semibold mt-4">
                Finance
              </p>
              <h3 className="font-serif text-xl font-bold text-gray-900 mt-1">
                Cloud-Native Microservice Redesign
              </h3>
              <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                Migrating legacy platform architectures to isolated,
                cloud-native microservices on a secure AWS stack.
              </p>
            </div>

            {/* Card 2 */}
            <div>
              <Image
                src="/assets/Solution/Rectangle1.webp"
                alt="Burst of blue light from a glowing digital network"
                width={772}
                height={240}
                className="w-full h-auto object-contain"
              />
              <p className="text-[#A000DF] text-xs font-semibold mt-4">
                Healthcare
              </p>
              <h3 className="font-serif text-xl font-bold text-gray-900 mt-1">
                Medical Portal Triage Automation
              </h3>
              <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                Patient coordination workflows that help doctors triage
                sensitive files securely.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900">
            Discover Your AI <span className="text-[#A000DF]">Solution</span>
          </h2>

          <p className="mt-6 text-gray-500 text-sm md:text-base leading-relaxed">
            Don&apos;t buy generic off-the-shelf software. Build a customized
            engine focused <br></br>purely on your specific industry rules.
          </p>

          <div className="mt-8">
            <Link href="/contact" className="inline-block bg-[#A000DF] hover:bg-[#a000dfdf] text-white text-sm font-medium px-6 py-3  transition-colors">
              Schedule Design Workshop
            </Link>
          </div>
        </div>
      </section>

    </>
  );
}