// /services/ai-development
// AI Development Services page (moved here from /services, which is now the
// hub for all services). Content: ./content.ts. Fully server-rendered.
import Link from "next/link";
import Image from "next/image";
import {
  RiArrowRightLine, RiBankLine, RiBrainLine, RiChatQuoteLine, RiCheckLine, RiCloudLine,
  RiCodeBoxLine, RiEyeLine, RiFileSearchLine, RiFlowChart, RiGraduationCapLine, RiHeartLine, RiHeartPulseLine,
  RiHome4Line, RiInformationLine, RiInstanceLine, RiLightbulbFlashLine, RiLineChartLine, RiLockLine, RiNodeTree,
  RiPlugLine, RiPriceTag3Line, RiPulseLine, RiQuestionAnswerLine, RiRobot2Line, RiScales3Line, RiServerLine,
  RiSettings3Line, RiShieldCheckLine, RiShieldKeyholeLine, RiShoppingCart2Line, RiShuffleLine, RiSparkling2Line,
  RiSparklingFill, RiStackLine, RiTimerFlashLine, RiAlarmWarningLine, RiTruckLine, RiUserSettingsLine,
} from "react-icons/ri";

import JsonLd from "../../Components/JsonLd";
import Breadcrumbs from "../../Components/Breadcrumbs";
import TrustSection from "../../Components/TrustSection";
import { BODY_LINK, IconTile as Tile, SectionHeading, WRAP } from "../../Components/ServicePageUI";
import { FaqSection, FinalCta, RichText, faqPageJsonLd } from "../../Components/ServicePageSections";
import { serviceBySlug } from "../../config/services-catalog";
import { HIRE_AI_DEVELOPERS, TECH_LINKS } from "../../lib/internal-links";
import { detailPageJsonLd, detailPageMetadata } from "../../lib/site";
import {
  ArchitectureDiagram, RagDiagram, RagDiagramVertical, SecurityLayersDiagram,
} from "../ServiceDiagrams";
import {
  COMPARISON, COVER, FINAL_CTA, HERO, INDUSTRIES, PACKAGES, PATH, PROCESS, PROCESS_INTRO, SCHEMA_SERVICE, SECURITY,
  SECURITY_INTRO, SEO, SERVICES, SERVICES_INTRO, SERVICE_FAQS, STACK, STACK_INTRO, WHY,
} from "./content";

export const metadata = detailPageMetadata({ path: PATH, ...SEO });

const CRUMBS = [
  { name: "Services", path: "/services" },
  { name: "AI Development", path: PATH },
];

// All icons are decorative (headings carry the meaning).
const ICONS = {
  custom: RiCodeBoxLine, llm: RiBrainLine, rag: RiFileSearchLine, genai: RiSparkling2Line,
  agent: RiRobot2Line, ml: RiNodeTree, nlp: RiChatQuoteLine, vision: RiEyeLine,
  predict: RiLineChartLine, automation: RiFlowChart, consulting: RiLightbulbFlashLine,
  timer: RiTimerFlashLine, answers: RiQuestionAnswerLine, warning: RiAlarmWarningLine, control: RiShieldCheckLine,
  health: RiHeartPulseLine, finance: RiBankLine, manufacturing: RiSettings3Line, retail: RiShoppingCart2Line,
  logistics: RiTruckLine, edtech: RiGraduationCapLine, realestate: RiHome4Line, saas: RiInstanceLine,
  lock: RiLockLine, access: RiUserSettingsLine, plug: RiPlugLine, server: RiServerLine, pulse: RiPulseLine,
  cloud: RiCloudLine, scales: RiScales3Line, shield: RiShieldKeyholeLine,
  stack: RiStackLine, shuffle: RiShuffleLine, price: RiPriceTag3Line, heart: RiHeartLine,
};

// Map content icon keys to the shared IconTile.
function IconTile({ name, dark = false }) {
  return <Tile icon={ICONS[name]} dark={dark} />;
}

const LABEL = "text-xs font-bold uppercase tracking-[0.14em] text-gray-500";

export default function AiDevelopmentServices() {
  return (
    <>
      <JsonLd
        data={detailPageJsonLd({
          path: PATH,
          name: `${SEO.title} | ClickMasters`,
          description: SEO.description,
          crumbs: CRUMBS,
          service: { ...SCHEMA_SERVICE, catalog: SERVICES.map((s) => s.title) },
        })}
      />
      <JsonLd data={faqPageJsonLd(SERVICE_FAQS)} />

      {/* ───────────── Hero ───────────── */}
      <section aria-labelledby="hero-heading" className="relative overflow-hidden bg-[#faf9f7] border-b border-[#9b1fe0]/15">
        <div aria-hidden="true" className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-[#AF00E8]/10 blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-40 -left-32 h-[420px] w-[420px] rounded-full bg-[#5EEAD4]/15 blur-3xl" />

        <div className={`${WRAP} relative grid items-center gap-12 py-14 lg:grid-cols-[1.05fr_1fr] lg:gap-14 lg:py-20`}>
          <div>
            {/* BreadcrumbList JSON-LD comes from detailPageJsonLd above. */}
            <Breadcrumbs items={CRUMBS.map((c) => ({ name: c.name, href: c.path }))} schema={false} />
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

          {/* The hero visual is an inline SVG (no raster image to preload). */}
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
              If an off-the-shelf system with AI added would serve you better than a bespoke build, our{" "}
              <Link href="/solutions" className={BODY_LINK}>ready-to-deploy business software solutions</Link>{" "}
              cover ERP, CRM, document processing and customer service, and can be customised to your workflows.
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

          <div className="mt-8 grid gap-8 lg:mt-10 lg:grid-cols-[260px_1fr] lg:gap-12">
            {/* ONE jump list: horizontal pills on mobile, sticky sidebar on desktop. */}
            <nav aria-label="AI services on this page" className="-mx-5 overflow-x-auto px-5 lg:mx-0 lg:overflow-visible lg:px-0">
              <ol className="flex w-max gap-2 pb-2 lg:sticky lg:top-[112px] lg:w-auto lg:flex-col lg:gap-1 lg:rounded-2xl lg:border lg:border-gray-100 lg:bg-white lg:p-3 lg:pb-3 lg:shadow-sm">
                {SERVICES.map((s, i) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="group inline-flex min-h-11 items-center gap-3 rounded-full border border-[#AF00E8]/20 bg-white px-4 text-sm text-gray-700 hover:border-[#AF00E8] hover:text-[#AF00E8] lg:flex lg:min-h-0 lg:rounded-lg lg:border-0 lg:px-3 lg:py-2 lg:text-gray-600 lg:hover:bg-[#faf5fd]"
                    >
                      <span aria-hidden="true" className="hidden w-5 text-xs font-semibold text-gray-400 group-hover:text-[#AF00E8] lg:inline">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {s.title.replace(/ \(.*\)/, "").replace(" Development and Fine-Tuning", " Fine-Tuning")}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            <div className="space-y-6">
              {SERVICES.map((s, i) => {
                const page = serviceBySlug(s.page);
                return (
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
                          <span aria-hidden="true" className="text-xs font-semibold text-[#AF00E8]">{String(i + 1).padStart(2, "0")}</span>
                          <h3 id={`${s.id}-h`} className="text-[22px] font-bold leading-snug text-[#1a1a1a] lg:text-[26px]" style={{ fontFamily: "Garamond, serif" }}>
                            {s.title}
                          </h3>
                        </div>
                      </div>
                      <p className="mt-4 text-[15px] leading-relaxed text-gray-600 lg:text-base">{s.intro}</p>
                      <p className="mt-4">
                        <Link href={page.href} className="group inline-flex items-center gap-1.5 text-sm font-semibold text-[#AF00E8] hover:underline underline-offset-4">
                          Learn more about our {page.anchor}
                          <RiArrowRightLine aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                        </Link>
                      </p>
                    </div>

                    <div className="grid gap-px bg-gray-100 md:grid-cols-2">
                      <div className="bg-white p-6 sm:p-8">
                        <h4 className={LABEL}>Problems it solves</h4>
                        <p className="mt-3 text-sm leading-relaxed text-gray-700">{s.problems}</p>
                        {s.extra?.map((e) => (
                          <div key={e.label} className="mt-6">
                            <h4 className={LABEL}>{e.label}</h4>
                            <p className="mt-3 text-sm leading-relaxed text-gray-700"><RichText text={e.text} /></p>
                          </div>
                        ))}
                        <h4 className={`mt-6 ${LABEL}`}>{s.howLabel}</h4>
                        <p className="mt-3 text-sm leading-relaxed text-gray-700">{s.how}</p>
                      </div>
                      <div className="bg-white p-6 sm:p-8">
                        <h4 className={LABEL}>{s.listLabel}</h4>
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
                            <h4 className={`mt-6 ${LABEL}`}>{s.techLabel}</h4>
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
                        <span><RichText text={s.note} /></span>
                      </p>
                    )}
                  </article>
                );
              })}
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
              <li key={ind.title} className="relative flex flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-colors hover:border-[#AF00E8]/50 hover:bg-white/[0.07]">
                <IconTile name={ind.icon} dark />
                <h3 className="mt-4 text-lg font-bold">
                  {/* Stretched link: the whole card opens the industry page. */}
                  <Link href={ind.href} className="after:absolute after:inset-0 after:rounded-2xl hover:text-[#e9c2ff] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#AF00E8]">
                    {ind.title}
                  </Link>
                </h3>
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
          {/* The <ol> numbers the steps for assistive tech; "01" is the only visible number. */}
          <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((step, i) => (
              <li key={step.title} className="relative flex flex-col rounded-2xl border border-gray-100 bg-[#faf9f7] p-6">
                <span aria-hidden="true" className="font-bold text-[40px] leading-none text-transparent [-webkit-text-stroke:1.5px_#AF00E8]" style={{ fontFamily: "Garamond, serif" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-lg font-bold text-[#1a1a1a]">{step.title}</h3>
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
              {/* Below the fold: lazy-loaded, and sized to its column (source is 600px wide). */}
              <Image
                src="/assets/Services/container.webp"
                alt="Data centre corridor with rows of server racks lit in purple, representing cloud AI infrastructure"
                fill
                loading="lazy"
                sizes="(min-width: 1280px) 500px, (min-width: 1024px) 40vw, (min-width: 640px) 90vw, 100vw"
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
                  {g.items.map((t) =>
                    TECH_LINKS[t] ? (
                      <li key={t}>
                        <Link href={TECH_LINKS[t]} className="block rounded-md bg-white/10 px-2.5 py-1 text-xs text-white underline decoration-[#AF00E8] underline-offset-2 hover:bg-white/20">
                          {t}
                        </Link>
                      </li>
                    ) : (
                      <li key={t} className="rounded-md bg-white/10 px-2.5 py-1 text-xs text-gray-100">{t}</li>
                    )
                  )}
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
                <p className="mt-6 flex items-baseline gap-2">
                  <span className="text-5xl font-bold" style={{ fontFamily: "Garamond, serif" }}>{tier.price}</span>
                  <span className="text-xs text-gray-400">{tier.priceNote}</span>
                </p>
                <ul className="mt-6 flex-1 space-y-3">
                  {tier.features.map((f) => (
                    <li key={f} className="flex gap-2.5 text-sm text-gray-200">
                      <RiCheckLine aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[#5EEAD4]" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-col items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#AF00E8] px-6 py-3.5 text-sm font-semibold text-white hover:bg-[#9600c7] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#AF00E8]"
            >
              {PACKAGES.cta}
              <RiArrowRightLine aria-hidden="true" className="h-4 w-4" />
            </Link>
            <p className="text-xs text-gray-400">{PACKAGES.vatNote}</p>
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
            Need engineers inside your own team instead of a managed project? You can{" "}
            <Link href={HIRE_AI_DEVELOPERS} className={BODY_LINK}>hire AI developers</Link>{" "}
            on a dedicated basis. We work with clients remotely nationwide; see{" "}
            <Link href="/locations" className={BODY_LINK}>AI development across UK cities</Link>, or read more about the team and{" "}
            <Link href="/about" className={BODY_LINK}>our mission to make AI practical for every business</Link>.
          </p>
        </div>
      </section>

      {/* TODO: renders nothing until real logos / testimonials / metrics are added in app/config/trust.ts. */}
      <TrustSection title="Proof From AI Projects We Have Delivered" />

      <FaqSection
        title="AI Development Services: Frequently Asked Questions"
        intro="Cost, timelines, data, security and maintenance, answered plainly."
        faqs={SERVICE_FAQS}
      />

      <FinalCta
        title={FINAL_CTA.title}
        body={{ text: FINAL_CTA.text }}
        primaryCta={{ label: "Book an AI discovery call", href: "/contact" }}
        secondaryCta={{ label: "Explore all our services", href: "/services" }}
      />
    </>
  );
}
