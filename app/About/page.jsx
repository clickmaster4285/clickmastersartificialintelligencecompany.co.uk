// app/About/page.jsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

import JsonLd from "../Components/JsonLd";
import { jsonLdFor, metadataFor } from "../lib/seo-pages";

export const metadata = metadataFor("about");

const coreValues = [
  {
    title: "Innovation Without Boundaries",
    description:
      "We continuously push the boundaries of LLM fine-tuning, retrieval architectures, and real-time computer vision without relying on generic, off-the-shelf APIs.",
  },
  {
    title: "Ethical AI First",
    description:
      "Every data classification process, compliance sandbox, and training dataset we leverage is fully governed to safeguard user privacy and prioritize compliance pathways.",
  },
  {
    title: "Client-Centric Solutions",
    description:
      "We design software systems as dedicated co-founders. Our architectures adapt specifically to your industry guidelines, converting automation directly into revenue.",
  },
  {
    title: "Continuous Learning",
    description:
      "The AI paradigm moves daily. Our pipeline testing tracks model regression and updates weight parameters continuously to sustain peak operational efficiency.",
  },
];


export default function About() {
  return (
    <>
      <JsonLd data={jsonLdFor("about")} />
      {/* Hero Section */}
      <section className="bg-gray-50 py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            Pioneering The Future Of{" "}
            <span className="text-[#A000DF]">Artificial Intelligence</span>
          </h1>

          <p className="mt-6 text-gray-500 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            ClickMasters designs and deploys custom intelligence platforms,
            converting complex architectural research into
            performance-optimized revenue drivers for fast-growing global
            brands.
          </p>

          <div className="mt-8">
            <Link href="/contact" className="inline-block bg-[#A000DF] hover:bg-[#a000dfdf] text-white text-sm font-medium px-6 py-3  transition-colors">
              Get a free quote
            </Link>
          </div>
        </div>
      </section>

      {/* Founded / Mission Section */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-2xl md:text-2xl font-bold text-gray-900 leading-tight">
              Our Mission Is To{" "}
              <span className="italic text-[#A000DF]">
                Make AI Practical For Every Business.
              </span>
            </h2>

            <p className="mt-5 text-gray-500 text-sm leading-relaxed">
              Our core mission is to transform complex academic AI research
              into highly practical, robust enterprise tools. We operate on
              the blueprint that machine intelligence should solve structural
              challenges, streamline operational logic, and create measurable
              ROI from day one.
            </p>
          </div>

          <div className="w-full flex justify-center">
            <Image
              src="/assets/About/image0.png"
              alt="Abstract geometric AI structure illustration"
              width={500}
              height={400}
              className="w-full max-w-md h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* Core Vision Section */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6 mb-16">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900">
              Our Core Vision And{" "}
              <span className="italic text-[#A000DF]">Foundational Values</span>
            </h2>

            <p className="text-gray-500 text-sm md:text-right max-w-sm">
              The non-negotiable guidelines that instruct how our engineers
              think, build, and deliver.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            {coreValues.map((value, index) => (
              <div key={index}>
                <h3 className="font-serif text-lg font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {value.description}
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
            Let&apos;s Build Your Next{" "}
            <span className="italic text-[#A000DF]">AI Product</span>
          </h2>

          <p className="mt-6 text-gray-500 text-sm md:text-sm leading-relaxed max-w-[550px] mx-auto">
            Tell us about your idea, workflow or legacy system and our team
            will help you map out a practical path to an AI-powered solution.
          </p>

          <div className="mt-8">
            <Link href="/contact" className="inline-block bg-[#A000DF] hover:bg-[#a000dfdf] text-white text-sm font-medium px-6 py-3  transition-colors">
              Get Free Consultation
            </Link>
          </div>
        </div>
      </section>

    </>
  );
}