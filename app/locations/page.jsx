// app/locations/page.jsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

import JsonLd from "../Components/JsonLd";
import { jsonLdFor, metadataFor } from "../lib/seo-pages";

export const metadata = metadataFor("locations");

const internationalHubs = [
  {
    city: "New York",
    image: "/assets/location/image2.png",
  },
  {
    city: "London",
    image: "/assets/location/image3.png",
  },
  {
    city: "Dubai",
    image: "/assets/location/image4.png",
  },
  {
    city: "Singapore",
    image: "/assets/location/image5.png",
  },
  {
    city: "Toronto",
    image: "/assets/location/image6.png",
  },
  {
    city: "Sydney",
    image: "/assets/location/image7.png",
  },
];

const localizedPoints = [
  "Localized compliance auditing and sandboxes",
  "Private on-premise regional hardware choices",
  "Native API integrations for local banking & logistics hubs",
];

const engineeringCultureImages = [
  "/assets/location/image9.png",
  "/assets/location/image10.png",
  "/assets/location/image11.png",
];


export default function Locations() {
  return (
    <>
      <JsonLd data={jsonLdFor("locations")} />
      {/* Global Presence Hero Section */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl font-bold text-gray-900">
            Where We <span className="italic text-[#A000DF]">Work</span>
          </h1>

          <p className="mt-5 text-gray-500 text-sm md:text-base max-w-2xl leading-relaxed">
            We work with businesses across the UK and internationally,
            delivering AI and custom software projects remotely with clear
            communication and collaborative workflows.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="w-full">
              <Image
                src="/assets/location/image1.png"
                alt="Modern office building at sunset"
                width={700}
                height={450}
                className="w-full h-auto object-contian"
              />
            </div>

            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900">
                Remote-First Delivery
              </h2>

              <p className="mt-4 text-gray-500 text-md leading-relaxed">
                We collaborate with clients through video calls, shared project
                boards and regular sprint reviews, so location is never a
                barrier to planning, building and launching your product.
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

      {/* Markets We Serve Section */}
      <section className="bg-gray-50 py-16 px-6 border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mb-10">
            Markets We Serve
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-14">
            {internationalHubs.map((hub, index) => (
              <div key={index}>
                <Image
                  src={hub.image}
                  alt={`${hub.city} skyline`}
                  width={500}
                  height={280}
                  className="w-full h-[220px] object-contain"
                />
                <h3 className="font-serif text-lg font-bold text-gray-900 mt-4">
                  {hub.city}
                </h3>
                <p className="text-gray-500 text-sm mt-1">Remote project delivery &amp; consultation</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tailored Solutions Section */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-2xl md:text-2xl font-bold text-gray-900">
              Tailored Solutions,{" "}
              <span className="italic text-[#A000DF]">Localized Impact</span>
            </h2>

            <p className="mt-5 text-gray-500 text-sm leading-relaxed">
              Different regions present unique legal, regulatory, and
              technical requirements. Our teams bring localized knowledge on
              HIPAA for US MedTech, GDPR compliance for European pipelines,
              and secure fintech practices across global commerce centers.
            </p>

            <ul className="mt-6 space-y-3">
              {localizedPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-[#A000DF] mt-1">◆</span>
                  <span className="text-gray-600 text-sm">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full">
            <Image
              src="/assets/location/image8.png"
              alt="Global network connectivity map visualization"
              width={700}
              height={450}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* Engineering Culture Section */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mb-10">
            How We Collaborate
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {engineeringCultureImages.map((img, index) => (
              <Image
                key={index}
                src={img}
                alt="Software team collaborating on a project"
                width={500}
                height={350}
                className="w-full h-[220px] object-contain"
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-2xl md:text-4xl font-bold text-gray-900">
            Let&apos;s Talk About <span className="italic text-[#A000DF]">Your Project</span>
          </h2>

          <p className="mt-6 text-gray-500 text-sm md:text-base leading-relaxed">
            Let&apos;s chart out your AI roadmap together, wherever your
            business is based.
          </p>

          <div className="mt-8 flex items-center justify-center gap-6">
            <Link href="/contact" className="inline-block bg-[#A000DF] hover:bg-[#a000dfdf] text-white text-sm font-medium px-6 py-3  transition-colors">
              Get Free Consultation
            </Link>
            
            <a href="mailto:hello@clickmasters.com"
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