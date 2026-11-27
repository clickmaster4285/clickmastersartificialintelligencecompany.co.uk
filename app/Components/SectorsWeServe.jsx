import React from "react";
import Link from "next/link";
import SmartLink from "./SmartLink";
import { INDUSTRY_LINKS } from "../lib/home-links";
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

// Each icon carries a short alt naming its industry (audit D-10: no image
// reference on the homepage may be left without alt text).
const sectors = [
  { icon: healthcareIcon, href: INDUSTRY_LINKS.healthcare, title: "Healthcare and MedTech Software", desc: "Patient portals, secure data storage, diagnostics tools and EHR integrations.", corner: "bottom" },
  { icon: financeIcon, href: INDUSTRY_LINKS.finance, title: "Finance and Fintech Software", desc: "Automated billing, ledger backends, asset dashboards and compliance layers.", corner: "top" },
  { icon: ecommerceIcon, href: INDUSTRY_LINKS.ecommerce, title: "E-Commerce Development", desc: "Marketplaces, cart logic, payment gateways and real-time inventory.", corner: "bottom" },
  { icon: edutechIcon, href: INDUSTRY_LINKS.edtech, title: "EdTech and E-Learning Software", desc: "Student dashboards, custom LMS platforms, testing engines and analytics.", corner: "top" },
  { icon: realEstateIcon, href: INDUSTRY_LINKS.realEstate, title: "Real Estate Software", desc: "Property portfolios, listing sync, tenant communication and lease automation.", corner: "top" },
  { icon: supplyChainIcon, href: INDUSTRY_LINKS.logistics, title: "Logistics and Supply Chain Software", desc: "Fleet monitoring, routing engines, warehouse management and dispatch workflows.", corner: "bottom" },
  { icon: enterpriseIcon, href: INDUSTRY_LINKS.enterpriseSaas, title: "Enterprise SaaS Platforms", desc: "Multi-tenant systems, modular billing, permissions and API integrations.", corner: "top" },
  { icon: manufacturingIcon, href: INDUSTRY_LINKS.manufacturing, title: "Smart Manufacturing Software", desc: "MES software, machine reporting, production planning and automated supply chains.", corner: "bottom" },
];

/** Section F: Industries. */
export default function SectorsWeServe() {
  return (
    <section
      id="industries"
      aria-labelledby="industries-heading"
      className="w-full max-w-[1728px] mx-auto bg-[#0a0a0a] py-16 lg:py-20 px-6 lg:px-[65px]"
    >
      <div className="flex flex-col lg:flex-row items-start justify-between gap-6 mb-12">
        <h2
          id="industries-heading"
          className="text-2xl lg:text-4xl text-white max-w-xl leading-snug"
          style={{ fontFamily: "Garamond, serif" }}
        >
          <span className="font-bold">Specialised Software for the </span>
          <span className="italic">Industries We Serve</span>
        </h2>
        <p className="text-sm text-gray-300 text-left lg:text-right max-w-md leading-relaxed">
          Deep sector knowledge helps us build software that fits how your
          industry actually works. We pair technical excellence with domain
          insight, so compliance, workflows and integrations are handled from
          day one. View all{" "}
          <Link href="/industries" className="underline text-white hover:text-[#AF00E8]">
            industries we serve
          </Link>
          .
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {sectors.map((s) => (
          <article key={s.title} className="relative overflow-hidden bg-white/5 p-6">
            <div
              aria-hidden="true"
              className={`absolute -right-16 w-35 h-35 rounded-full bg-white/5 ${s.corner === "top" ? "-top-18" : "-bottom-18"}`}
            />
            <img loading="lazy" decoding="async" src={s.icon} alt={`${s.title} icon`} width={56} height={56} className="w-12 h-12 rounded-lg mb-4 relative z-10" />
            <h3
              className="relative z-10 text-white mb-2"
              style={{ fontFamily: "'EB Garamond', serif", fontWeight: 700, fontSize: "22px", lineHeight: "29px" }}
            >
              <SmartLink href={s.href} className="hover:text-[#AF00E8]">
                {s.title}
              </SmartLink>
            </h3>
            <p
              className="relative z-10 text-[#dcdbdb]"
              style={{ fontFamily: "Urbanist, sans-serif", fontWeight: 300, fontSize: "16px", lineHeight: "24px" }}
            >
              {s.desc}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
