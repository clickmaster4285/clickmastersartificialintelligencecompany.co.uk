// app/services/page.jsx
// AI Development Services page. Content: app/services/services-content.ts
// (from the ClickMasters Services SEO Pack). Fully server-rendered: no client JS.
import Link from "next/link";
import Image from "next/image";
import {
  RiAddLine, RiAlarmWarningLine, RiArrowRightLine, RiArrowRightUpLine, RiBankLine, RiBrainLine,
  RiChatQuoteLine, RiCheckLine, RiCloudLine, RiCodeBoxLine, RiEyeLine, RiFileSearchLine, RiFlashlightLine,
  RiFlowChart, RiGovernmentLine, RiGraduationCapLine, RiHeartLine, RiHeartPulseLine, RiInformationLine,
  RiLightbulbFlashLine, RiLineChartLine, RiLockLine, RiMailLine, RiNodeTree, RiPhoneLine, RiPlugLine,
  RiPriceTag3Line, RiPulseLine, RiQuestionAnswerLine, RiRobot2Line, RiScales3Line, RiServerLine,
  RiSettings3Line, RiShieldCheckLine, RiShieldKeyholeLine, RiShoppingCart2Line, RiShuffleLine,
  RiSparkling2Line, RiSparklingFill, RiStackLine, RiTimerFlashLine, RiTruckLine, RiUserSettingsLine,
} from "react-icons/ri";

import JsonLd from "../Components/JsonLd";
import Breadcrumbs from "../Components/Breadcrumbs";
import { BODY_LINK, IconTile as Tile, SectionHeading, WRAP } from "../Components/ServicePageUI";
import { jsonLdFor, metadataFor } from "../lib/seo-pages";
import { CONTACT } from "../lib/site";
import {
  ArchitectureDiagram, RagDiagram, RagDiagramVertical, SecurityLayersDiagram,
} from "./ServiceDiagrams";
import {
  COMPARISON, COVER, FINAL_CTA, HERO, INDUSTRIES, PACKAGES, PROCESS, PROCESS_INTRO, SECURITY,
  SECURITY_INTRO, SERVICES, SERVICES_INTRO, SERVICE_FAQS, STACK, STACK_INTRO, WHY, servicesFaqJsonLd,
} from "./services-content";

export const metadata = metadataFor("services");

// All icons are decorative (headings carry the meaning).
const ICONS = {
  custom: RiCodeBoxLine, llm: RiBrainLine, rag: RiFileSearchLine, genai: RiSparkling2Line,
  agent: RiRobot2Line, ml: RiNodeTree, nlp: RiChatQuoteLine, vision: RiEyeLine,
  predict: RiLineChartLine, automation: RiFlowChart, consulting: RiLightbulbFlashLine,
  timer: RiTimerFlashLine, answers: RiQuestionAnswerLine, warning: RiAlarmWarningLine, control: RiShieldCheckLine,
  health: RiHeartPulseLine, finance: RiBankLine, manufacturing: RiSettings3Line, retail: RiShoppingCart2Line,
  energy: RiFlashlightLine, logistics: RiTruckLine, edtech: RiGraduationCapLine, public: RiGovernmentLine,
  lock: RiLockLine, access: RiUserSettingsLine, plug: RiPlugLine, server: RiServerLine, pulse: RiPulseLine,
  cloud: RiCloudLine, scales: RiScales3Line, shield: RiShieldKeyholeLine,
  stack: RiStackLine, shuffle: RiShuffleLine, price: RiPriceTag3Line, heart: RiHeartLine,
};

// Map content icon keys to the shared IconTile.
function IconTile({ name, dark = false }) {
  return <Tile icon={ICONS[name]} dark={dark} />;
}

const ukPhone = CONTACT.phones[0];

export default function Services() {
  return (
    <>
      <JsonLd data={jsonLdFor("services")} />
      <JsonLd data={servicesFaqJsonLd()} />

      {/* ───────────── Hero ───────────── */}
      <section aria-labelledby="hero-heading" className="relative overflow-hidden bg-[#faf9f7] border-b border-[#9b1fe0]/15">
        <div aria-hidden="true" className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-[#AF00E8]/10 blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-40 -left-32 h-[420px] w-[420px] rounded-full bg-[#5EEAD4]/15 blur-3xl" />

        <div className={`${WRAP} relative grid items-center gap-12 py-14 lg:grid-cols-[1.05fr_1fr] lg:gap-14 lg:py-20`}>
          <div>
            <Breadcrumbs items={[{ name: "Services", href: "/services" }]} schema={false} />
            <p className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-xs font-semibold text-[#7a1fa2] shadow-sm ring-1 ring-[#AF00E8]/15">
              <RiSparklingFill aria-hidden="true" className="h-3.5 w-3.5 text-[#AF00E8]" />
              {HERO.eyebrow}
            </p>
            <h1
              id="hero-heading"
              className="mt-5 font-bold text-[36px] leading-[42px] sm:text-[44px] sm:leading-[50px] xl:text-[54px] xl:leading-[60px] text-[#1a1a1a]"
              style={{ fontFamily: "Garamond, serif" }}
            >
              AI Development Services for UK Businesses{" "}
              <span className="italic font-normal text-[#AF00E8]">Ready to Move Beyond the Pilot</span>
            </h1>
            <p className="mt-6 text-base leading-relaxed text-gray-700 lg:text-[17px]">{HERO.lead}</p>
            <p className="mt-4 text-[15px] leading-relaxed text-gray-500">{HERO.audience}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-lg bg-[#AF00E8] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_10px_30px_-8px_rgba(175,0,232,0.6)] hover:bg-[#9600c7] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#AF00E8]"
              >
                Book an AI discovery call
                <RiArrowRightLine aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <a
                href="#packages"
                className="inline-flex items-center gap-2 rounded-lg border border-[#AF00E8]/40 bg-white px-6 py-3.5 text-sm font-semibold text-[#AF00E8] hover:border-[#AF00E8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#AF00E8]"
              >
                Compare engagement packages
              </a>
            </div>

            <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-[#AF00E8]/10 ring-1 ring-[#AF00E8]/10 sm:grid-cols-4">
              {HERO.stats.map((s) => (
                <div key={s.label} className="bg-white/90 px-4 py-4">
                  <dt className="text-xs text-gray-500">{s.label}</dt>
                  <dd className="mt-1 text-[15px] font-bold leading-snug text-[#1a1a1a]">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <figure className="relative">
            <div aria-hidden="true" className="absolute -inset-3 rounded-[28px] bg-gradient-to-br from-[#AF00E8]/20 via-transparent to-[#5EEAD4]/25 blur-xl" />
            <div className="relative rounded-3xl border border-white bg-white/90 p-5 shadow-[0_30px_80px_-24px_rgba(60,0,90,0.35)] sm:p-7">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-gray-500">How a custom AI system fits</span>
                <span aria-hidden="true" className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#AF00E8]/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#5EEAD4]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-gray-200" />
                </span>
              </div>
              <ArchitectureDiagram className="h-auto w-full" />
            </div>
            <figcaption className="mt-4 text-center text-xs text-gray-500">
              Your systems feed a custom model layer that powers copilots, forecasts and automations.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ───────────── What our services cover ───────────── */}
      <section aria-labelledby="cover-heading" className="bg-white py-16 lg:py-24">
        <div className={`${WRAP} grid gap-12 lg:grid-cols-2 lg:gap-16`}>
          <div>
            <SectionHeading id="cover-heading" eyebrow="The full lifecycle">
              What Our AI Development Services Cover
            </SectionHeading>
            {COVER.paragraphs.map((p) => (
              <p key={p.slice(0, 20)} className="mt-5 text-[15px] leading-relaxed text-gray-600 lg:text-base">{p}</p>
            ))}
            <p className="mt-5 text-[15px] leading-relaxed text-gray-600 lg:text-base">
              If you are starting from a business problem rather than a technology, our{" "}
              <Link href="/solutions" className={BODY_LINK}>AI solutions for complex business workflows</Link>{" "}
              show how these capabilities combine into document processing, customer service, fraud detection and supply chain systems.
            </p>
          </div>
          <ul className="grid content-start gap-4 sm:grid-cols-2">
            {COVER.outcomes.map((o) => (
              <li key={o.title} className="rounded-2xl border border-gray-100 bg-[#faf9f7] p-6 transition-shadow hover:shadow-lg hover:shadow-[#AF00E8]/5">
                <IconTile name={o.icon} />
                <h3 className="mt-4 text-lg font-bold text-[#1a1a1a]">{o.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{o.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ───────────── 11 services ───────────── */}
      <section aria-labelledby="services-heading" className="bg-[#faf9f7] py-16 lg:py-24 border-y border-[#9b1fe0]/10">
        <div className={WRAP}>
          <div className="max-w-3xl">
            <SectionHeading id="services-heading" eyebrow="11 capabilities">
              Enterprise AI Development Services
            </SectionHeading>
            <p className="mt-5 text-[15px] leading-relaxed text-gray-600 lg:text-base">{SERVICES_INTRO}</p>
          </div>

          {/* Mobile / tablet: horizontal jump links */}
          <nav aria-label="Jump to a service" className="-mx-5 mt-8 overflow-x-auto px-5 lg:hidden">
            <ul className="flex w-max gap-2 pb-2">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="inline-flex min-h-11 items-center rounded-full border border-[#AF00E8]/20 bg-white px-4 text-sm text-gray-700 hover:border-[#AF00E8] hover:text-[#AF00E8]">
                    {s.title.replace(/ \(.*\)/, "")}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-10 grid gap-10 lg:grid-cols-[260px_1fr] lg:gap-12">
            {/* Desktop: sticky jump links */}
            <nav aria-label="Services on this page" className="hidden lg:block">
              <ol className="sticky top-[112px] space-y-1 rounded-2xl border border-gray-100 bg-white p-3 shadow-sm">
                {SERVICES.map((s, i) => (
                  <li key={s.id}>
                    <a href={`#${s.id}`} className="group flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-[#faf5fd] hover:text-[#AF00E8]">
                      <span className="w-5 text-xs font-semibold text-gray-400 group-hover:text-[#AF00E8]">{String(i + 1).padStart(2, "0")}</span>
                      {s.title.replace(/ \(.*\)/, "").replace(" Development and Fine-Tuning", " Fine-Tuning")}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            <div className="space-y-6">
              {SERVICES.map((s, i) => (
                <article
                  key={s.id}
                  id={s.id}
                  aria-labelledby={`${s.id}-h`}
                  className="scroll-mt-28 overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.03)]"
                >
                  <div className="border-b border-gray-100 p-6 sm:p-8">
                    <div className="flex items-start gap-4">
                      <IconTile name={s.icon} />
                      <div>
                        <span className="text-xs font-semibold text-[#AF00E8]">{String(i + 1).padStart(2, "0")}</span>
                        <h3 id={`${s.id}-h`} className="text-[22px] font-bold leading-snug text-[#1a1a1a] lg:text-[26px]" style={{ fontFamily: "Garamond, serif" }}>
                          {s.title}
                        </h3>
                      </div>
                    </div>
                    <p className="mt-4 text-[15px] leading-relaxed text-gray-600 lg:text-base">{s.intro}</p>
                  </div>

                  <div className="grid gap-px bg-gray-100 md:grid-cols-2">
                    <div className="bg-white p-6 sm:p-8">
                      <h4 className="text-xs font-bold uppercase tracking-[0.14em] text-gray-500">Problems it solves</h4>
                      <p className="mt-3 text-sm leading-relaxed text-gray-700">{s.problems}</p>
                      {s.extra?.map((e) => (
                        <div key={e.label} className="mt-6">
                          <h4 className="text-xs font-bold uppercase tracking-[0.14em] text-gray-500">{e.label}</h4>
                          <p className="mt-3 text-sm leading-relaxed text-gray-700">{e.text}</p>
                        </div>
                      ))}
                      <h4 className="mt-6 text-xs font-bold uppercase tracking-[0.14em] text-gray-500">{s.howLabel}</h4>
                      <p className="mt-3 text-sm leading-relaxed text-gray-700">{s.how}</p>
                    </div>
                    <div className="bg-white p-6 sm:p-8">
                      <h4 className="text-xs font-bold uppercase tracking-[0.14em] text-gray-500">{s.listLabel}</h4>
                      <ul className="mt-3 space-y-2.5">
                        {s.list.map((item) => (
                          <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-gray-700">
                            <span aria-hidden="true" className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#f7effa] text-[#AF00E8]">
                              <RiCheckLine className="h-3.5 w-3.5" />
                            </span>
                            {item}
                          </li>
                        ))}
                      </ul>
                      {s.tech.length > 0 && (
                        <>
                          <h4 className="mt-6 text-xs font-bold uppercase tracking-[0.14em] text-gray-500">{s.techLabel}</h4>
                          <ul className="mt-3 flex flex-wrap gap-2">
                            {s.tech.map((t) => (
                              <li key={t} className="rounded-full border border-gray-200 bg-[#faf9f7] px-3 py-1 text-xs font-medium text-gray-700">{t}</li>
                            ))}
                          </ul>
                        </>
                      )}
                    </div>
                  </div>

                  {s.diagram === "rag" && (
                    <figure className="border-t border-gray-100 bg-[#fcfaff] p-6 sm:p-8">
                      <RagDiagram className="hidden h-auto w-full sm:block" />
                      <RagDiagramVertical className="mx-auto h-auto w-full max-w-[340px] sm:hidden" />
                      <figcaption className="mt-4 text-xs text-gray-500">
                        Ingestion runs when content changes; retrieval runs on every question, so answers stay current without retraining.
                      </figcaption>
                    </figure>
                  )}

                  {s.note && (
                    <p className="flex gap-3 border-t border-[#AF00E8]/10 bg-[#faf5fd] px-6 py-4 text-sm leading-relaxed text-[#4b1d63] sm:px-8">
                      <RiInformationLine aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-[#AF00E8]" />
                      {s.note}
                    </p>
                  )}
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── Comparison table ───────────── */}
      <section aria-labelledby="compare-heading" className="bg-white py-16 lg:py-24">
        <div className={WRAP}>
          <div className="max-w-3xl">
            <SectionHeading id="compare-heading" eyebrow="Choosing the right approach">
              Prompting, RAG, Fine-Tuning or Custom Machine Learning?
            </SectionHeading>
            <p className="mt-5 text-[15px] leading-relaxed text-gray-600 lg:text-base">{COMPARISON.intro}</p>
          </div>

          <div className="mt-10 overflow-x-auto rounded-2xl border border-gray-100 shadow-sm" tabIndex={0} role="region" aria-labelledby="compare-heading">
            <table className="w-full min-w-[860px] border-collapse text-left text-sm">
              <thead>
                <tr className="bg-[#1a1022] text-white">
                  {COMPARISON.headers.map((h) => (
                    <th key={h} scope="col" className="px-5 py-4 text-xs font-semibold uppercase tracking-wider first:sticky first:left-0 first:bg-[#1a1022]">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARISON.rows.map((row, ri) => (
                  <tr key={row[0]} className={ri % 2 ? "bg-[#faf9f7]" : "bg-white"}>
                    {row.map((cell, ci) =>
                      ci === 0 ? (
                        <th key={cell} scope="row" className={`sticky left-0 px-5 py-4 font-semibold text-[#1a1a1a] ${ri % 2 ? "bg-[#faf9f7]" : "bg-white"}`}>
                          <span className="flex items-center gap-2">
                            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-[#AF00E8]" />
                            {cell}
                          </span>
                        </th>
                      ) : (
                        <td key={ci} className="px-5 py-4 leading-relaxed text-gray-600">{cell}</td>
                      )
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ───────────── Industries ───────────── */}
      <section aria-labelledby="industries-heading" className="bg-[#0d0a12] py-16 text-white lg:py-24">
        <div className={WRAP}>
          <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
            <SectionHeading id="industries-heading" eyebrow="Sector-aware delivery" dark>
              AI Applications for the Industries We Serve
            </SectionHeading>
            <p className="text-[15px] leading-relaxed text-gray-300">
              AI behaves differently in each sector because the data, the risk and the regulation differ. The summaries below show typical starting points; for sector detail, see{" "}
              <Link href="/industries" className="font-medium text-white underline decoration-[#AF00E8] underline-offset-4 hover:text-[#e9c2ff]">
                how we apply AI across eight industry sectors
              </Link>.
            </p>
          </div>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {INDUSTRIES.map((ind) => (
              <li key={ind.title} className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-colors hover:border-[#AF00E8]/50 hover:bg-white/[0.07]">
                <IconTile name={ind.icon} dark />
                <h3 className="mt-4 text-lg font-bold">{ind.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-300">{ind.text}</p>
                <p className="mt-4 text-[11px] font-semibold uppercase tracking-wider text-gray-400">Key considerations</p>
                <ul className="mt-2 flex flex-wrap gap-1.5">
                  {ind.considerations.map((c) => (
                    <li key={c} className="rounded-full bg-[#AF00E8]/15 px-2.5 py-1 text-xs text-[#ecd0ff] ring-1 ring-[#AF00E8]/30">{c}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ───────────── Process ───────────── */}
      <section aria-labelledby="process-heading" className="bg-white py-16 lg:py-24">
        <div className={WRAP}>
          <div className="max-w-3xl">
            <SectionHeading id="process-heading" eyebrow="8 stages, 8 deliverables">
              Our AI Development Process
            </SectionHeading>
            <p className="mt-5 text-[15px] leading-relaxed text-gray-600 lg:text-base">{PROCESS_INTRO}</p>
          </div>
          <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((step, i) => (
              <li key={step.title} className="relative flex flex-col rounded-2xl border border-gray-100 bg-[#faf9f7] p-6">
                <span aria-hidden="true" className="font-bold text-[40px] leading-none text-transparent [-webkit-text-stroke:1.5px_#AF00E8]" style={{ fontFamily: "Garamond, serif" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-lg font-bold text-[#1a1a1a]">
                  <span className="sr-only">{i + 1}. </span>{step.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">{step.text}</p>
                <p className="mt-5 rounded-xl bg-white px-4 py-3 text-xs leading-relaxed text-gray-700 ring-1 ring-[#AF00E8]/15">
                  <span className="block font-bold uppercase tracking-wider text-[#AF00E8]">Deliverable</span>
                  {step.deliverable}
                </p>
              </li>
            ))}
          </ol>
          <p className="mt-10 text-[15px] leading-relaxed text-gray-600">
            To see how this process applies to specific scenarios, from radiology support to fleet routing automation, browse our{" "}
            <Link href="/case-studies" className={BODY_LINK}>example AI projects and use cases</Link>.
          </p>
        </div>
      </section>

      {/* ───────────── Technology stack ───────────── */}
      <section aria-labelledby="stack-heading" className="relative overflow-hidden bg-[#0d0a12] py-16 text-white lg:py-24">
        <div className={`${WRAP} grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center`}>
          <div>
            <SectionHeading id="stack-heading" eyebrow="Model-agnostic" dark>
              Our AI Technology Stack
            </SectionHeading>
            <p className="mt-5 text-[15px] leading-relaxed text-gray-300">{STACK_INTRO}</p>
            <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-white/10">
              <Image
                src="/assets/Services/container.webp"
                alt="Data centre corridor of server racks lit with purple light"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover scale-[1.35]"
              />
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#0d0a12]/70 to-transparent" />
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {STACK.map((g) => (
              <div key={g.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#e9c2ff]">{g.title}</h3>
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {g.items.map((t) => (
                    <li key={t} className="rounded-md bg-white/10 px-2.5 py-1 text-xs text-gray-100">{t}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── Security ───────────── */}
      <section aria-labelledby="security-heading" className="bg-[#faf9f7] py-16 lg:py-24">
        <div className={WRAP}>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div className="lg:sticky lg:top-[112px]">
              <SectionHeading id="security-heading" eyebrow="Security by design">
                Security, Privacy and Responsible AI
              </SectionHeading>
              <p className="mt-5 text-[15px] leading-relaxed text-gray-600">{SECURITY_INTRO}</p>
              <figure className="mt-8 rounded-3xl bg-white p-6 shadow-[0_20px_60px_-24px_rgba(60,0,90,0.25)]">
                <SecurityLayersDiagram className="mx-auto h-auto w-full max-w-[400px]" />
              </figure>
            </div>
            <ul className="grid gap-4 sm:grid-cols-2">
              {SECURITY.map((item) => (
                <li key={item.title} className="rounded-2xl border border-gray-100 bg-white p-6">
                  <IconTile name={item.icon} />
                  <h3 className="mt-4 text-lg font-bold text-[#1a1a1a]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ───────────── Packages ───────────── */}
      <section id="packages" aria-labelledby="packages-heading" className="scroll-mt-24 bg-[#0d0a12] py-16 text-white lg:py-24">
        <div className={WRAP}>
          <div className="mx-auto max-w-2xl text-center">
            <SectionHeading id="packages-heading" eyebrow="Engagement packages" dark>
              Clear Starting Points for AI Investment
            </SectionHeading>
            <p className="mt-5 text-[15px] leading-relaxed text-gray-300">{PACKAGES.intro}</p>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3 lg:items-stretch">
            {PACKAGES.tiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative flex flex-col rounded-3xl p-8 ${
                  tier.highlighted
                    ? "bg-gradient-to-b from-[#2a0b3a] to-[#160a1f] ring-2 ring-[#AF00E8] shadow-[0_30px_80px_-20px_rgba(175,0,232,0.55)]"
                    : "bg-white/[0.04] ring-1 ring-white/10"
                }`}
              >
                <h3 className="text-xl font-bold" style={{ fontFamily: "Garamond, serif" }}>{tier.name}</h3>
                <p className="mt-1 text-xs text-gray-400">{tier.subtitle}</p>
                <p className="mt-6 text-5xl font-bold" style={{ fontFamily: "Garamond, serif" }}>{tier.price}</p>
                <ul className="mt-6 flex-1 space-y-3">
                  {tier.features.map((f) => (
                    <li key={f} className="flex gap-2.5 text-sm text-gray-200">
                      <RiCheckLine aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[#5EEAD4]" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`mt-8 inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold ${
                    tier.highlighted ? "bg-[#AF00E8] text-white hover:bg-[#9600c7]" : "bg-white text-[#1a1a1a] hover:bg-[#f7effa]"
                  }`}
                >
                  {tier.cta}
                  <RiArrowRightLine aria-hidden="true" className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── Why choose ───────────── */}
      <section aria-labelledby="why-heading" className="bg-white py-16 lg:py-24">
        <div className={WRAP}>
          <div className="max-w-3xl">
            <SectionHeading id="why-heading" eyebrow="Why ClickMasters">
              Why Choose ClickMasters for AI Development?
            </SectionHeading>
          </div>
          <ul className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {WHY.map((w) => (
              <li key={w.title} className="flex gap-4">
                <IconTile name={w.icon} />
                <div>
                  <h3 className="text-lg font-bold text-[#1a1a1a]">{w.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{w.text}</p>
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-12 text-[15px] leading-relaxed text-gray-600">
            Read more about the team and{" "}
            <Link href="/about" className={BODY_LINK}>our mission to make AI practical for every business</Link>.
          </p>
        </div>
      </section>

      {/* ───────────── FAQ ───────────── */}
      <section aria-labelledby="faq-heading" className="bg-[#faf9f7] py-16 lg:py-24 border-t border-[#9b1fe0]/10">
        <div className={`${WRAP} grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16`}>
          <div>
            <SectionHeading id="faq-heading" eyebrow="FAQ">
              AI Development Services: Frequently Asked Questions
            </SectionHeading>
            <p className="mt-5 text-[15px] leading-relaxed text-gray-600">
              Cost, timelines, data, security and maintenance, answered plainly. Still have a question?{" "}
              <Link href="/contact" className={BODY_LINK}>Ask our team</Link>.
            </p>
          </div>
          {/* Native <details>: every answer is in the server HTML, no JavaScript needed. */}
          <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 bg-white">
            {SERVICE_FAQS.map((f, i) => (
              <details key={f.q} className="group p-5 sm:p-6" open={i === 0}>
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#AF00E8] [&::-webkit-details-marker]:hidden">
                  <h3 className="text-base font-semibold leading-snug text-[#1a1a1a] group-open:text-[#AF00E8] lg:text-[17px]">{f.q}</h3>
                  <span aria-hidden="true" className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#f7effa] text-[#AF00E8] transition-transform group-open:rotate-45">
                    <RiAddLine className="h-4 w-4" />
                  </span>
                </summary>
                <div className="mt-3 space-y-3 pr-10 text-sm leading-relaxed text-gray-600">
                  {f.a.map((p) => <p key={p.slice(0, 24)}>{p}</p>)}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── Final CTA ───────────── */}
      <section aria-labelledby="cta-heading" className="bg-white px-5 py-16 sm:px-8 lg:py-24">
        <div className="relative mx-auto max-w-[1280px] overflow-hidden rounded-[32px] bg-gradient-to-br from-[#2a0b3a] via-[#1a0d24] to-[#0d0a12] px-6 py-14 text-white sm:px-12 lg:px-16 lg:py-20">
          <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#AF00E8]/40 blur-3xl" />
          <div aria-hidden="true" className="pointer-events-none absolute -bottom-24 left-10 h-64 w-64 rounded-full bg-[#5EEAD4]/15 blur-3xl" />
          <div className="relative grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <div>
              <h2 id="cta-heading" className="font-bold text-[30px] leading-[38px] lg:text-[44px] lg:leading-[52px]" style={{ fontFamily: "Garamond, serif" }}>
                {FINAL_CTA.title}
              </h2>
              <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-gray-300 lg:text-base">{FINAL_CTA.text}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact" className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-[#AF00E8] hover:bg-[#f7effa]">
                  Book an AI discovery call
                  <RiArrowRightUpLine aria-hidden="true" className="h-4 w-4" />
                </Link>
                <Link href="/contact" className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/10">
                  Request a project estimate
                </Link>
              </div>
            </div>
            <address className="not-italic space-y-3 rounded-2xl border border-white/10 bg-white/[0.06] p-6 text-sm backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">Talk to us directly</p>
              <a href={`tel:${ukPhone.e164}`} className="flex items-center gap-3 hover:text-[#e9c2ff]">
                <RiPhoneLine aria-hidden="true" className="h-5 w-5 text-[#5EEAD4]" />
                UK {ukPhone.display}
              </a>
              <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-3 break-all hover:text-[#e9c2ff]">
                <RiMailLine aria-hidden="true" className="h-5 w-5 shrink-0 text-[#5EEAD4]" />
                {CONTACT.email}
              </a>
              <p className="text-xs text-gray-400">We usually respond {CONTACT.responseTime}.</p>
            </address>
          </div>
        </div>
      </section>
    </>
  );
}
