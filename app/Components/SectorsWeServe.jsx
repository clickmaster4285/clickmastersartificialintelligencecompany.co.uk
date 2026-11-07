import React from "react";
import {
  healthcareIcon,
  financeIcon,
  ecommerceIcon,
  edutechIcon,
  realEstateIcon,
  supplyChainIcon,
  enterpriseIcon,
  manufacturingIcon,
} from "../assets";

const sectors = [
  { icon: healthcareIcon, title: "Healthcare & MedTech", desc: "Patient portals, HIPAA-compliant storage, medical diagnostics tools, and custom EHR integrations.", corner: "bottom" },
  { icon: financeIcon, title: "Finance & Fintech", desc: "Automated billing systems, ledger backends, asset tracking dashboards, and secure compliance layers.", corner: "top" },
  { icon: ecommerceIcon, title: "E-Commerce Systems", desc: "Scalable marketplace software, cart logic, payment gateway architectures, and real-time inventory tools.", corner: "bottom" },
  { icon: edutechIcon, title: "EduTech & Learning", desc: "Interactive student dashboards, custom LMS development, testing engines, and analytics pipelines.", corner: "top" },
  { icon: realEstateIcon, title: "Real Estate Tech", desc: "Property portfolios, MLS sync systems, tenant communication platforms, and automated lease managers.", corner: "top" },
  { icon: supplyChainIcon, title: "Supply Chain & Logistics", desc: "Fleet monitors, real-time routing engines, warehouse management software, and dispatch workflows.", corner: "bottom" },
  { icon: enterpriseIcon, title: "Enterprise SaaS Platforms", desc: "Multi-tenant cloud systems, modular billing, robust user permissions pipelines, and API integrations.", corner: "top" },
  { icon: manufacturingIcon, title: "Smart Manufacturing", desc: "Custom MES software, machine reporting pipelines, production planners, and automated supply chains.", corner: "bottom" },
];

export default function SectorsWeServe() {
  return (
    <section className="w-full max-w-[1728px] mx-auto bg-[#0a0a0a] py-16 lg:py-20 px-6 lg:px-[65px]">
      <div className="flex flex-col lg:flex-row items-start justify-between gap-6 mb-12">
        <h2 className="text-2xl lg:text-4xl text-white max-w-xl leading-snug" style={{ fontFamily: "Garamond, serif" }}>
          <span className="font-bold">Sectors And Industries We </span>
          <span className="italic">Serve With Distinction</span>
        </h2>
        <p className="text-xs lg:text-sm text-gray-400 text-left lg:text-right max-w-xs leading-relaxed">
          We couple deep technological excellence with industry-specific
          insight to build high-performance products.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {sectors.map((s) => (
          <div key={s.title} className="relative overflow-hidden bg-white/5 p-6">
            <div
              className={`absolute -right-16 w-35 h-35 rounded-full bg-white/5 ${s.corner === "top" ? "-top-18" : "-bottom-18"
                }`}
            />
            <img loading="lazy" decoding="async" src={s.icon} alt={s.title} className="w-12 h-12 rounded-lg mb-4 relative z-10" />
            <h3
              className="relative z-10 w-[285px] text-white mb-2"
              style={{ fontFamily: "'EB Garamond', serif", fontWeight: 700, fontSize: "24px", lineHeight: "31px" }}
            >
              {s.title}
            </h3>
            <p
              className="relative z-10 w-[285px] text-[#dcdbdb]"
              style={{ fontFamily: "Urbanist, sans-serif", fontWeight: 100, fontSize: "16px", lineHeight: "24px" }}
            >
              {s.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}