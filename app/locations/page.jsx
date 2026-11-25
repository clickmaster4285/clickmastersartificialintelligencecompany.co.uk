// app/locations/page.jsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

import JsonLd from "../Components/JsonLd";
import { jsonLdFor, metadataFor } from "../lib/seo-pages";
import { CONTACT } from "../lib/site";

export const metadata = metadataFor("locations");

// Only verified facts: projects are delivered remotely, and the owner has
// supplied contact lines in the UK, US and Pakistan. No office addresses are
// published because none have been confirmed.
const phoneFor = (countryCode) => CONTACT.phones.find((p) => p.countryCode === countryCode);

const coverage = [
  {
    region: "United Kingdom",
    image: "/assets/location/image3.webp",
    alt: "London skyline with The Shard and Tower Bridge on a clear day",
    text: "We work with UK businesses on AI development and automation projects, with a dedicated UK contact line.",
    phone: phoneFor("GB"),
  },
  {
    region: "United States",
    image: "/assets/location/image2.webp",
    alt: "New York skyline and Brooklyn Bridge at sunset",
    text: "US clients can reach us on our US contact line and work with our team remotely across time zones.",
    phone: phoneFor("US"),
  },
  {
    region: "International",
    image: "/assets/location/image8.webp",
    alt: "Digital world map with glowing connection points",
    text: "Wherever your business is based, we can plan, build and support your project remotely. Our team can also be reached on our Pakistan line.",
    phone: phoneFor("PK"),
  },
];

const remoteServices = [
  "Custom AI and machine learning model development",
  "Business process automation and robotic process automation",
  "LLM fine-tuning, chatbots and AI assistants",
  "AI integrations with CRMs, ERPs and existing APIs",
  "Web, mobile and cloud applications with AI features",
];

const industryUseCases = [
  "Healthcare: clinical document processing and triage support",
  "Finance: fraud detection and ledger reconciliation",
  "Retail & e-commerce: demand forecasting and recommendations",
  "Logistics: route optimisation and dispatch automation",
  "Manufacturing: predictive maintenance and production planning",
];

const workingSteps = [
  {
    title: "1. Free Consultation",
    description:
      "Tell us about your goals, data and existing systems. We will discuss whether AI is the right fit and outline the options.",
  },
  {
    title: "2. Scope & Proposal",
    description:
      "We agree the scope, timeline and budget, starting with a proof of concept where it makes sense.",
  },
  {
    title: "3. Remote Delivery",
    description:
      "Sprint-based development with video calls, shared project boards and regular sprint reviews so you always see progress.",
  },
  {
    title: "4. Launch & Support",
    description:
      "We deploy to your chosen cloud or infrastructure and stay on hand for monitoring, updates and improvements.",
  },
];

export default function Locations() {
  return (
    <>
      <JsonLd data={jsonLdFor("locations")} />
      {/* Hero Section */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl font-bold text-gray-900">
            Where We <span className="italic text-[#A000DF]">Work</span>
          </h1>

          <p className="mt-5 text-gray-500 text-sm md:text-base max-w-2xl leading-relaxed">
            ClickMasters works with businesses across the UK and
            internationally, delivering AI development, automation and custom
            software projects remotely with clear communication and
            collaborative workflows.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="w-full">
              <Image
                src="/assets/location/image11.webp"
                alt="Bright modern workspace with monitors showing data dashboards"
                width={474}
                height={300}
                preload
                sizes="(min-width: 768px) 50vw, 100vw"
                className="w-full h-auto object-contain"
              />
            </div>

            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900">
                Remote-First Delivery
              </h2>

              <p className="mt-4 text-gray-500 text-md leading-relaxed">
                We collaborate with clients through video calls, shared project
                boards and regular sprint reviews, so location is never a
                barrier to planning, building and launching your product. You
                get direct access to the engineers working on your project,
                not a chain of account managers.
              </p>

              <div className="mt-6">
                <Link href="/contact" className="inline-block bg-[#A000DF] hover:bg-[#a000dfdf] text-white text-sm font-medium px-6 py-3  transition-colors">
                  Book a Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Coverage Section */}
      <section className="bg-gray-50 py-16 px-6 border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mb-10">
            Service Coverage
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-14">
            {coverage.map((area) => (
              <div key={area.region}>
                <Image
                  src={area.image}
                  alt={area.alt}
                  width={area.region === "International" ? 600 : 468}
                  height={area.region === "International" ? 400 : 200}
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="w-full h-[220px] object-contain"
                />
                <h3 className="font-serif text-lg font-bold text-gray-900 mt-4">
                  {area.region}
                </h3>
                <p className="text-gray-500 text-sm mt-1 leading-relaxed">{area.text}</p>
                {area.phone && (
                  <p className="text-sm mt-2">
                    <span className="text-gray-500">{area.phone.country}:</span>{" "}
                    <a href={`tel:${area.phone.e164}`} className="text-[#A000DF] font-medium hover:underline">
                      {area.phone.display}
                    </a>
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services & Industries Section */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-2xl md:text-2xl font-bold text-gray-900">
              Tailored Solutions,{" "}
              <span className="italic text-[#A000DF]">Delivered Remotely</span>
            </h2>

            <p className="mt-5 text-gray-500 text-sm leading-relaxed">
              Different regions bring different legal and technical
              requirements. We design with the rules that apply to you in
              mind, such as UK GDPR for British businesses and HIPAA for US
              healthcare data.
            </p>

            <h3 className="mt-6 font-serif text-lg font-semibold text-gray-900">
              What we deliver remotely
            </h3>
            <ul className="mt-3 space-y-3">
              {remoteServices.map((point) => (
                <li key={point} className="flex items-start gap-2">
                  <span aria-hidden="true" className="text-[#A000DF] mt-1">◆</span>
                  <span className="text-gray-600 text-sm">{point}</span>
                </li>
              ))}
            </ul>

            <h3 className="mt-6 font-serif text-lg font-semibold text-gray-900">
              Industries and use cases
            </h3>
            <ul className="mt-3 space-y-3">
              {industryUseCases.map((point) => (
                <li key={point} className="flex items-start gap-2">
                  <span aria-hidden="true" className="text-[#A000DF] mt-1">◆</span>
                  <span className="text-gray-600 text-sm">{point}</span>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-sm">
              <Link href="/services/ai-development" className="text-[#A000DF] font-medium hover:underline">
                Explore our AI services
              </Link>
              <span className="text-gray-400"> · </span>
              <Link href="/industries" className="text-[#A000DF] font-medium hover:underline">
                See industries we support
              </Link>
            </p>
          </div>

          <div className="w-full">
            <Image
              src="/assets/location/image10.webp"
              alt="Team of developers planning a system diagram on a whiteboard"
              width={474}
              height={300}
              sizes="(min-width: 768px) 50vw, 100vw"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* How To Work With Us Section */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mb-10">
            How To Work With Us
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {workingSteps.map((step) => (
              <div key={step.title}>
                <h3 className="font-serif text-lg font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Contact Section */}
      <section className="bg-gray-50 py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-2xl md:text-4xl font-bold text-gray-900">
            Let&apos;s Talk About <span className="italic text-[#A000DF]">Your Project</span>
          </h2>

          <p className="mt-6 text-gray-500 text-sm md:text-base leading-relaxed">
            Let&apos;s chart out your AI roadmap together, wherever your
            business is based. Call us, email us or send an enquiry through
            our contact page. We usually respond {CONTACT.responseTime}.
          </p>

          <ul className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            {CONTACT.phones.map((phone) => (
              <li key={phone.e164}>
                <span className="text-gray-500">{phone.country}:</span>{" "}
                <a href={`tel:${phone.e164}`} className="text-gray-900 hover:text-[#A000DF]">
                  {phone.display}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex items-center justify-center gap-6">
            <Link href="/contact" className="inline-block bg-[#A000DF] hover:bg-[#a000dfdf] text-white text-sm font-medium px-6 py-3  transition-colors">
              Get Free Consultation
            </Link>

            <a href={`mailto:${CONTACT.email}`}
              className="text-[#A000DF] text-sm font-medium hover:underline"
            >
              Email Our Team
            </a>
          </div>
        </div>
      </section>

    </>
  );
}
