// /services: hub for every ClickMasters service (software, AI, enterprise &
// cloud), grouped like the Services mega menu. Cards come from
// app/config/services-catalog.ts; copy from ./hub-content.ts.
// The former AI page now lives at /services/ai-development.
import Link from "next/link";
import { RiArrowRightLine, RiSparklingFill } from "react-icons/ri";

import JsonLd from "../Components/JsonLd";
import Breadcrumbs from "../Components/Breadcrumbs";
import TrustSection from "../Components/TrustSection";
import { SectionHeading, WRAP } from "../Components/ServicePageUI";
import { FaqSection, FinalCta, RichText, faqPageJsonLd } from "../Components/ServicePageSections";
import { ALL_SERVICES, SERVICE_CATEGORIES } from "../config/services-catalog";
import { jsonLdFor, metadataFor } from "../lib/seo-pages";
import { HUB_CTA, HUB_FAQS, HUB_HERO } from "./hub-content";

export const metadata = metadataFor("services");

function ServiceCard({ service }) {
  return (
    <li
      className={`group relative flex flex-col rounded-2xl border p-6 transition-colors ${
        service.parent
          ? "border-[#AF00E8]/30 bg-gradient-to-br from-[#faf5fd] to-white sm:col-span-2 hover:border-[#AF00E8]"
          : "border-gray-100 bg-white hover:border-[#AF00E8]/30 hover:bg-[#faf5fd]"
      }`}
    >
      <h3 className="text-lg font-bold text-[#1a1a1a] group-hover:text-[#AF00E8]">{service.name}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">{service.summary}</p>
      <Link
        href={service.href}
        className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#AF00E8] after:absolute after:inset-0 after:rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#AF00E8]"
      >
        Learn more<span className="sr-only"> about {service.name}</span>
        <RiArrowRightLine aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </li>
  );
}

export default function ServicesHub() {
  return (
    <>
      <JsonLd data={jsonLdFor("services", { itemList: ALL_SERVICES.map((s) => ({ name: s.name, path: s.href })) })} />
      <JsonLd data={faqPageJsonLd(HUB_FAQS)} />

      {/* ───────────── Hero ───────────── */}
      <section aria-labelledby="hero-heading" className="relative overflow-hidden border-b border-[#9b1fe0]/15 bg-[#faf9f7]">
        <div aria-hidden="true" className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-[#AF00E8]/10 blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-40 -left-32 h-[420px] w-[420px] rounded-full bg-[#5EEAD4]/15 blur-3xl" />
        <div className={`${WRAP} relative py-14 lg:py-20`}>
          {/* BreadcrumbList JSON-LD comes from jsonLdFor("services"). */}
          <Breadcrumbs items={[{ name: "Services", href: "/services" }]} schema={false} />
          <div className="mt-6 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-16">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-xs font-semibold text-[#7a1fa2] shadow-sm ring-1 ring-[#AF00E8]/15">
                <RiSparklingFill aria-hidden="true" className="h-3.5 w-3.5 text-[#AF00E8]" />
                {HUB_HERO.eyebrow}
              </p>
              <h1
                id="hero-heading"
                className="mt-5 text-[36px] font-bold leading-[42px] text-[#1a1a1a] sm:text-[44px] sm:leading-[50px] xl:text-[54px] xl:leading-[60px]"
                style={{ fontFamily: "Garamond, serif" }}
              >
                {HUB_HERO.title}{" "}
                <span className="font-normal italic text-[#AF00E8]">{HUB_HERO.titleAccent}</span>
              </h1>
              <p className="mt-6 text-base leading-relaxed text-gray-700 lg:text-[17px]">
                <RichText text={HUB_HERO.intro} />
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-lg bg-[#AF00E8] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_10px_30px_-8px_rgba(175,0,232,0.6)] hover:bg-[#9600c7] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#AF00E8]"
                >
                  Get a free quote
                  <RiArrowRightLine aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <a
                  href="#ai-services"
                  className="inline-flex items-center gap-2 rounded-lg border border-[#AF00E8]/40 bg-white px-6 py-3.5 text-sm font-semibold text-[#AF00E8] hover:border-[#AF00E8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#AF00E8]"
                >
                  Browse AI services
                </a>
              </div>
            </div>

            <div>
              <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-[#AF00E8]/10 ring-1 ring-[#AF00E8]/10">
                {HUB_HERO.stats.map((s) => (
                  <div key={s.label} className="flex flex-col-reverse justify-end bg-white/90 px-4 py-4">
                    <dt className="mt-1 text-xs text-gray-500">{s.label}</dt>
                    <dd className="text-[15px] font-bold leading-snug text-[#1a1a1a]">{s.value}</dd>
                  </div>
                ))}
              </dl>
              {/* One jump list for the three categories. */}
              <nav aria-label="Service categories" className="mt-6">
                <ul className="flex flex-wrap gap-2">
                  {SERVICE_CATEGORIES.map((c) => (
                    <li key={c.id}>
                      <a href={`#${c.id}`} className="inline-flex min-h-11 items-center rounded-full border border-[#AF00E8]/20 bg-white px-4 text-sm text-gray-700 hover:border-[#AF00E8] hover:text-[#AF00E8]">
                        {c.heading.replace(" Services", "")}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── Service categories ───────────── */}
      {SERVICE_CATEGORIES.map((cat, i) => (
        <section
          key={cat.id}
          id={cat.id}
          aria-labelledby={`${cat.id}-heading`}
          className={`scroll-mt-24 py-16 lg:py-24 ${i % 2 ? "border-y border-[#9b1fe0]/10 bg-[#faf9f7]" : "bg-white"}`}
        >
          <div className={WRAP}>
            <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
              <SectionHeading id={`${cat.id}-heading`} eyebrow={`${cat.services.length} services`}>{cat.heading}</SectionHeading>
              <p className="text-[15px] leading-relaxed text-gray-600 lg:text-base">{cat.intro}</p>
            </div>
            <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {cat.services.map((svc) => (
                <ServiceCard key={svc.href} service={svc} />
              ))}
            </ul>
          </div>
        </section>
      ))}

      {/* TODO: renders nothing until real logos / testimonials / metrics are added in app/config/trust.ts. */}
      <TrustSection />

      <FaqSection
        title="Software & AI Development Services: FAQs"
        intro="Services, timelines, cost, integration and support, answered plainly."
        faqs={HUB_FAQS}
      />

      <FinalCta
        title={HUB_CTA.title}
        titleAccent={HUB_CTA.titleAccent}
        body={HUB_CTA.body}
        bring={HUB_CTA.bring}
        primaryCta={{ label: "Get a free quote", href: "/contact" }}
      />
    </>
  );
}
