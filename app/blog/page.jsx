// app/blog/page.jsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

import JsonLd from "../Components/JsonLd";
import { jsonLdFor, metadataFor } from "../lib/seo-pages";
import { CONTACT } from "../lib/site";

export const metadata = metadataFor("blog");

// No published article pages exist yet, so no article cards are listed (cards
// without a real destination were removed). When an article is written, add a
// route under /blog/[slug] and list it here and in the sitemap.
const upcomingTopics = [
  "Scaling system architecture from MVP to large user bases",
  "Sprint-based agile delivery for on-time releases",
  "Enterprise cyber security and GDPR compliance",
  "How LLMs are reshaping customer experience",
  "Computer vision in smart manufacturing",
  "Edge AI processing for remote telemetry",
];

const whitepapers = [
  {
    tag: "TECHNICAL GUIDE",
    title: "RAG & LLM Integration Playbook",
    description:
      "An in-depth blueprint exploring how to scale data vector search inside private corporate databases.",
  },
  {
    tag: "COMPLIANCE WHITEPAPER",
    title: "HIPAA Compliant AI Frameworks",
    description:
      "A thorough security checklist for medical device developers implementing object recognition.",
  },
  {
    tag: "REFERENCE ARCHITECTURE",
    title: "MLOps Continuous Tuning Pipeline",
    description:
      "Code snippets and cluster setups showing how to deploy live tracking frameworks.",
  },
];

const mailto = (subject) => `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}`;

export default function Blog() {
  return (
    <>
      <JsonLd data={jsonLdFor("blog")} />
      {/* Hero Section */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Latest Articles, Guides And{" "}
            <span className="italic text-[#A000DF]">Developer Resources</span>
          </h1>

          <p className="mt-5 text-gray-500 text-sm md:text-base max-w-2xl leading-relaxed">
            Technical methodologies, scaling practices and architectural
            insights from the ClickMasters engineering team.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="w-full">
              <Image
                src="/assets/Blogs/image0.webp"
                alt="Glowing digital data network stretching towards the horizon"
                width={750}
                height={450}
                preload
                sizes="(min-width: 768px) 50vw, 100vw"
                className="w-full h-auto object-contain"
              />
            </div>

            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                Articles In Preparation
              </h2>

              <p className="mt-4 text-gray-500 text-sm leading-relaxed">
                Our engineers are writing in-depth articles on the topics our
                clients ask about most. Upcoming topics include:
              </p>

              <ul className="mt-4 space-y-2">
                {upcomingTopics.map((topic) => (
                  <li key={topic} className="flex items-start gap-2">
                    <span aria-hidden="true" className="text-[#A000DF] mt-0.5">◆</span>
                    <span className="text-gray-700 text-sm">{topic}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-6 text-gray-500 text-sm leading-relaxed">
                Have a question on one of these topics now?{" "}
                <Link href="/contact" className="text-[#A000DF] font-medium hover:underline">
                  Talk to our team
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="bg-gray-50 py-16 px-6 border-t border-gray-200">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
              Get Notified About{" "}
              <span className="italic text-[#A000DF]">
                New Engineering
                <br /> Insights
              </span>
            </h2>
            <p className="mt-4 text-gray-500 text-sm leading-relaxed max-w-xl">
              Email us to be told when new technical deep-dives on systems
              development, model deployment and AI engineering are published.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={mailto("Notify me about new articles")}
              className="bg-[#A000DF] hover:bg-[#a000dfdf] text-white text-sm font-medium px-6 py-3  transition-colors whitespace-nowrap"
            >
              Notify Me By Email
            </a>
          </div>
        </div>
      </section>

      {/* Featured Whitepapers Section */}
      <section className="bg-black py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-white mb-14">
            Featured Whitepapers &{" "}
            <span className="italic text-[#A000DF]">Technical Blueprints</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-12">
            {whitepapers.map((paper) => (
              <div key={paper.title}>
                <p className="text-[#A000DF] text-xs font-semibold tracking-wide mb-3">
                  {paper.tag}
                </p>
                <h3 className="font-serif text-lg font-bold text-white mb-3">
                  {paper.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {paper.description}
                </p>

                <a
                  href={mailto(`Guide request: ${paper.title}`)}
                  className="text-white text-sm font-medium hover:text-[#A000DF] transition-colors"
                >
                  Request the Free Guide
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-2xl md:text-4xl font-bold text-gray-900">
            Need Answers{" "}
            <span className="italic text-[#A000DF]">Sooner?</span>
          </h2>

          <p className="mt-6 text-gray-500 text-sm md:text-base leading-relaxed">
            Speak with our engineers about architecture, AI models, security
            or delivery. We usually respond {CONTACT.responseTime}.
          </p>

          <div className="mt-8 flex items-center justify-center gap-6">
            <Link
              href="/contact"
              className="bg-[#A000DF] hover:bg-[#a000dfdf] text-white text-sm font-medium px-6 py-3  transition-colors"
            >
              Contact Our Team
            </Link>

            <Link
              href="/services"
              className="text-[#A000DF] text-sm font-medium hover:underline"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>

    </>
  );
}
