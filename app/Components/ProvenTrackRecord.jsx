import React from "react";
import { trackRecordBg } from "../assets";

/*
 * Trust indicators.
 *
 * These previously showed animated counters (5+ years, 1860+ projects,
 * 75+ awards, 3500+ clients) that rendered as "0+" in the server HTML and
 * were not backed by verified business figures (and contradicted the figures
 * used on other pages). They are replaced with truthful capability markers.
 *
 * To show numbers again, replace an entry with e.g.
 *   { value: "120", suffix: "+", label: "Projects Delivered" }
 * ONLY once the figure has been verified. Values render server-side as-is.
 */
const stats = [
  { value: "AI", suffix: "", label: "Machine Learning & Intelligent Automation" },
  { value: "Web", suffix: "", label: "Web, Mobile & Cloud Applications" },
  { value: "ERP", suffix: "", label: "CRM & Enterprise Systems" },
  { value: "MVP", suffix: "", label: "From Prototype To Full-Scale SaaS" },
];

function StatItem({ stat }) {
  return (
    <div className="flex flex-col">
      <span className="flex items-baseline">
        <span
          className="relative top-[8px] lg:top-[18px] text-[44px] leading-[50px] sm:text-[56px] sm:leading-[64px] lg:text-[72px] lg:leading-[81px] text-[#333333]"
          style={{
            fontFamily: "Garamond, serif",
            fontWeight: 400,
          }}
        >
          {stat.value}
        </span>
        {stat.suffix && (
          <span
            className="text-[26px] leading-[32px] sm:text-[34px] sm:leading-[42px] lg:text-[42px] lg:leading-[50px] text-[#333333]"
            style={{
              fontFamily: "Urbanist, sans-serif",
              fontWeight: 300,
            }}
          >
            {stat.suffix}
          </span>
        )}
      </span>
      <span className="text-xs sm:text-sm text-gray-500 mt-3">{stat.label}</span>
    </div>
  );
}

export default function ProvenTrackRecord() {
  return (
    <section id="proven-track" className="relative w-full max-w-[1728px] mx-auto bg-white overflow-hidden px-6 py-16 lg:py-24">
      {/* Background watermark box */}
      <div
        className="hidden lg:block absolute pointer-events-none select-none"
        style={{
          left: "50%",
          transform: "translateX(-50%)",
          bottom: "78px",
          width: "97.11vw",
          height: "147px",
          zIndex: 0,
        }}
      >
        <img src={trackRecordBg} alt="" loading="lazy" className="w-full h-full object-fit" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Heading */}
        <h2
          className="relative w-full mb-8 lg:mb-15 text-2xl sm:text-3xl font-bold text-[#333333] lg:w-[115%] lg:left-[45%] lg:-translate-x-1/2"
          style={{
            fontFamily: "Garamond, serif",
          }}
        >
          Our Services Cover{" "}
          <span className="italic font-normal text-[#AF00E8]">
            The Full Product Lifecycle.
          </span>
        </h2>

        {/* Divider line */}
        <div className="border-t border-gray-900 mb-8 lg:mb-10 relative w-full lg:w-[125%] lg:left-1/2 lg:-translate-x-1/2" />

        {/* Indicators row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6 sm:gap-x-12 lg:gap-x-36 relative w-full lg:w-[125%] lg:left-1/2 lg:ml-7 lg:-translate-x-1/2">
          {stats.map((stat) => (
            <StatItem key={stat.label} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
