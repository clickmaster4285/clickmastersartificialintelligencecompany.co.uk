// app/Blogs/page.jsx
import React from "react";
import Image from "next/image";

import JsonLd from "../Components/JsonLd";
import { jsonLdFor, metadataFor } from "../lib/seo-pages";

export const metadata = metadataFor("blog");

const filters = [
  "All Resources",
  "AI Research",
  "Machine Learning",
  "Industry Insights",
  "Tutorials",
  "News",
];

const articles = [
  {
    date: "Oct 19, 2026",
    title: "How LLMs are Reshaping Customer Experience",
    image: "/assets/Blogs/image1.png",
  },
  {
    date: "Oct 15, 2026",
    title: "Deep Computer Vision in Automated Smart Manufacturing",
    image: "/assets/Blogs/image2.png",
  },
  {
    date: "Oct 11, 2026",
    title: "Building Ethical and Compliant Enterprise AI",
    image: "/assets/Blogs/image3.png",
  },
  {
    date: "Oct 04, 2026",
    title: "Designing Edge AI Processing for Remote Telemetry",
    image: "/assets/Blogs/image4.png",
  },
  {
    date: "Sep 28, 2026",
    title: "The Data-to-Decisions Pipeline for Growing Startups",
    image: "/assets/Blogs/image5.png",
  },
  {
    date: "Sep 20, 2026",
    title: "HIPAA Secure Telemedicine Medical App Infrastructure",
    image: "/assets/Blogs/image6.png",
  },
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
      "A exhaustive security checklist for medical device developers implementing object recognition.",
  },
  {
    tag: "REFERENCE ARCHITECTURE",
    title: "MLOps Continuous Tuning Pipeline",
    description:
      "Code snippets and cluster setups showing how to deploy live tracking frameworks.",
  },
];


export default function Blogs() {
  return (
    <>
      <JsonLd data={jsonLdFor("blog")} />
      {/* Hero / Featured Article Section */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Latest Articles, Guides And{" "}
            <span className="italic text-[#A000DF]">Developer Resources</span>
          </h1>

          <p className="mt-5 text-gray-500 text-sm md:text-base max-w-2xl leading-relaxed">
            Stay up to date with core technical methodologies, scaling
            practices, and architectural insights curated by ClickMasters.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="w-full">
              <Image
                src="/assets/Blogs/image0.png"
                alt="Digital network city visualization"
                width={700}
                height={450}
                className="w-full h-auto object-contain"
              />
            </div>

            <div>
              <p className="text-gray-400 text-xs mb-3">October 24, 2026</p>

              <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                System Architecture Scaling from MVP to Million-User Baselines
              </h2>

              <p className="mt-4 text-gray-500 text-sm leading-relaxed">
                Building backend pipelines requires foresight. Discover key
                architectural choices that safeguard performance during rapid
                enterprise scaling without costly rewrites.
              </p>

              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div />
                   <Image
                src="/assets/Blogs/image7.png"
                alt="Digital network city visualization"
                width={700}
                height={450}
                className="w-[40px] h-[40px] object-contain "
              />
                  <div>
                    <p className="text-gray-900 text-sm font-semibold">
                      Alex Rivera
                    </p>
                    <p className="text-gray-400 text-xs">Principal Architect</p>
                  </div>
                </div>
                <p className="text-gray-400 text-xs">8 min read</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter + Articles Grid Section */}
      <section className="bg-gray-50 py-16 px-6 border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-4 mb-12 border-b border-gray-200 pb-6">
            {filters.map((filter, index) => (
              <button
                key={index}
                className={`text-sm px-4 py-2  transition-colors ${
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
            {articles.map((article, index) => (
              <div key={index}>
                <Image
                  src={article.image}
                  alt={article.title}
                  width={500}
                  height={280}
                  className="w-full h-[200px] object-cover"
                />
                <p className="text-gray-400 text-xs mt-4">{article.date}</p>
                <h3 className="font-serif text-xs font-bold text-gray-900 mt-1 leading-snug flex justify-center">
                  {article.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe + Whitepapers Section */}
      <section className="bg-gray-50 py-16 px-6 border-t border-gray-200">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
              Subscribe for{" "}
              <span className="italic text-[#A000DF]">
                Weekly Engineering
                <br></br> Insights
              </span>
            </h2>
            <p className="mt-4 text-gray-500 text-sm leading-relaxed max-w-xl">
              Get technical deep-dives on systems development, custom model
              deployment checklists, and performance case studies sent
              directly to your inbox.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <input
              type="email"
              placeholder="Enter your business email"
              className="border-b border-gray-300 focus:border-[#A000DF] outline-none py-2 text-sm text-gray-700 bg-transparent w-56"
            />
            <button className="bg-[#A000DF] hover:bg-[#a000dfdf] text-white text-sm font-medium px-6 py-3  transition-colors whitespace-nowrap">
              Subscribe Now
            </button>
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
            {whitepapers.map((paper, index) => (
              <div key={index}>
                <p className="text-[#A000DF] text-xs font-semibold tracking-wide mb-3">
                  {paper.tag}
                </p>
                <h3 className="font-serif text-lg font-bold text-white mb-3">
                  {paper.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {paper.description}
                </p>
                
                 <a href="mailto:hello@clickmasters.com?subject=Guide%20request"
                  className="text-white text-sm font-medium hover:text-[#A000DF] transition-colors"
                >
                  Request the Free Guide
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA Section */}
      <section className="bg-gray-50 py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-2xl md:text-4xl font-bold text-gray-900">
            Subscribe to Our AI{" "}
            <span className="italic text-[#A000DF]">Newsletter</span>
          </h2>

          <p className="mt-6 text-gray-500 text-sm md:text-base leading-relaxed">
            Stay ahead of the technology curve. Join 20k+ other enterprise
            leaders who read our system engineering briefings.
          </p>

          <div className="mt-8 flex items-center justify-center gap-6">
            <button className="bg-[#A000DF] hover:bg-[#a000dfdf] text-white text-sm font-medium px-6 py-3  transition-colors">
              Subscribe Now
            </button>
            
            <a  href="/blog"
              className="text-[#A000DF] text-sm font-medium hover:underline"
            >
              Browse Archive
            </a>
          </div>
        </div>
      </section>

    </>
  );
}