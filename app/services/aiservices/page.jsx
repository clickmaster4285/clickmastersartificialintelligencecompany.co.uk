// /services/aiservices: AI Services pillar page.
// Content: ./content.ts (from the AI Services Pillar SEO pack). Fully server-rendered.
// Linked from the "AI Services" heading in the Services mega menu.
// This real folder takes precedence over the app/services/[slug] placeholder route.
import Image from "next/image";
import Link from "next/link";
import {
  RiAlarmWarningLine, RiArrowDownLine, RiArrowLeftRightLine, RiArrowRightLine, RiBookOpenLine, RiBrainLine,
  RiBugLine, RiBuilding3Line, RiChatSmile3Line, RiCloudLine, RiCodeSSlashLine, RiCompass3Line, RiDatabase2Line,
  RiExpandUpDownLine, RiEyeLine, RiFileShield2Line, RiFlowChart, RiGraduationCapLine, RiGroupLine, RiHeartPulseLine,
  RiHistoryLine, RiHome4Line, RiInformationLine, RiLayoutGridLine, RiLayoutLine, RiLineChartLine, RiLockLine,
  RiMoneyPoundCircleLine, RiNodeTree, RiPlugLine, RiPuzzle2Line, RiQuillPenLine, RiRadarLine, RiRobot2Line,
  RiScales3Line, RiServerLine, RiShieldCheckLine, RiShoppingCart2Line, RiSparkling2Line, RiTimerLine, RiTruckLine,
  RiUserFollowLine, RiUserSettingsLine,
} from "../../Components/icons";

import JsonLd from "../../Components/JsonLd";
import ScopingCallBlock from "../../Components/ScopingCallBlock";
import { IconTile, SectionHeading, WRAP } from "../../Components/ServicePageUI";
import {
  ComparisonTable, FaqSection, FinalCta, IconCardGrid, ProcessGrid, RichText, ServiceHero, faqPageJsonLd,
} from "../../Components/ServicePageSections";
import { detailPageJsonLd, detailPageMetadata } from "../../lib/site";
import {
  COMPARISON, FAQS, FINAL_CTA, GOVERNANCE, HERO, HERO_FLOW, IMAGES, INDUSTRIES, PATH, PROCESS, REQUIREMENTS,
  SCHEMA_SERVICE, SEO, SERVICES, TECH, WHAT_ARE, WHY,
} from "./content";

export const metadata = detailPageMetadata({ path: PATH, ...SEO });

const CRUMBS = [
  { name: "Services", path: "/services" },
  { name: "AI Services", path: PATH },
];

// All icons are decorative (headings carry the meaning).
const ICONS = {
  strategy: RiCompass3Line, app: RiLayoutLine, generative: RiQuillPenLine, ml: RiNodeTree, automation: RiFlowChart,
  agent: RiRobot2Line, data: RiDatabase2Line, monitor: RiRadarLine, rag: RiBookOpenLine, llm: RiBrainLine,
  custom: RiPuzzle2Line, nlp: RiChatSmile3Line, vision: RiEyeLine, forecast: RiLineChartLine, health: RiHeartPulseLine,
  finance: RiMoneyPoundCircleLine, cart: RiShoppingCart2Line, education: RiGraduationCapLine, home: RiHome4Line,
  truck: RiTruckLine, factory: RiBuilding3Line, saas: RiLayoutGridLine, code: RiCodeSSlashLine, plug: RiPlugLine,
  cloud: RiCloudLine, privacy: RiLockLine, law: RiFileShield2Line, server: RiServerLine, roles: RiUserSettingsLine,
  shield: RiShieldCheckLine, retention: RiTimerLine, test: RiBugLine, alert: RiAlarmWarningLine, scales: RiScales3Line,
  users: RiGroupLine, history: RiHistoryLine, escalate: RiUserFollowLine, compare: RiArrowLeftRightLine,
  scale: RiExpandUpDownLine,
};
const withIcons = (items) => items.map((it) => ({ ...it, icon: ICONS[it.icon] }));

const P = "text-[15px] leading-relaxed text-gray-600 lg:text-base";
const SERIF = { fontFamily: "Garamond, serif" };
const HALF = "(min-width: 1280px) 600px, (min-width: 1024px) 48vw, 100vw";

/** **bold** markers, with [anchor](/path) links in the plain parts. */
function Rich({ text }) {
  return text.split(/(\*\*[^*]+\*\*)/).map((part, i) =>
    part.startsWith("**")
      ? <strong key={i} className="font-semibold text-[#1a1a1a]">{part.slice(2, -2)}</strong>
      : <RichText key={i} text={part} />,
  );
}

/** A photo (below the fold, lazy-loaded) with rounded corners. */
function Photo({ image, sizes, className = "" }) {
  return (
    <div className={`relative overflow-hidden rounded-3xl ring-1 ring-black/5 ${className}`}>
      <Image src={image.src} width={image.width} height={image.height} alt={image.alt} sizes={sizes} className="h-full w-full object-cover" />
    </div>
  );
}

/** Hero diagram: discover → build → integrate → monitor, the six core services, and the systems AI connects to. */
function LifecycleDiagram() {
  return (
    <div role="img" aria-label={HERO.figureAlt} className="text-sm">
      <ol className="grid grid-cols-4 gap-1.5">
        {HERO_FLOW.stages.map((s, i) => (
          <li key={s} className="rounded-xl border border-gray-100 bg-[#faf9f7] px-1 py-2.5 text-center">
            <span aria-hidden="true" className="mx-auto flex h-6 w-6 items-center justify-center rounded-full bg-[#AF00E8] text-[11px] font-bold text-white">{i + 1}</span>
            <span className="mt-1 block text-[12px] font-semibold text-gray-700">{s}</span>
          </li>
        ))}
      </ol>
      <div aria-hidden="true" className="flex justify-center py-1.5 text-[#AF00E8]/60"><RiArrowDownLine className="h-5 w-5" /></div>
      <div className="rounded-2xl bg-gradient-to-br from-[#2a0b3a] to-[#0d0a12] p-4 text-white">
        <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[#e9c2ff]">
          <RiSparkling2Line aria-hidden="true" className="h-3.5 w-3.5" />AI services
        </p>
        <ul className="mt-3 grid grid-cols-3 gap-1.5">
          {HERO_FLOW.services.map((s) => (
            <li key={s} className="rounded-lg bg-white/10 px-1.5 py-2 text-center text-[11.5px] font-semibold">{s}</li>
          ))}
        </ul>
      </div>
      <div aria-hidden="true" className="flex justify-center py-1.5 text-[#AF00E8]/60"><RiArrowDownLine className="h-5 w-5" /></div>
      <ul className="grid grid-cols-4 gap-1.5">
        {HERO_FLOW.systems.map((s) => (
          <li key={s} className="flex items-center justify-center gap-1 rounded-xl bg-[#f1fbf9] px-1 py-2.5 text-center text-[11.5px] font-semibold text-[#0b6f68] ring-1 ring-[#0F9F94]/20">
            <RiPlugLine aria-hidden="true" className="h-3.5 w-3.5 shrink-0" />{s}
          </li>
        ))}
      </ul>
      <p className="mt-2 flex items-center justify-center gap-2 rounded-full bg-[#fffaeb] px-4 py-2 text-[12px] font-semibold text-[#8a6400] ring-1 ring-[#E3A600]/40">
        <RiUserFollowLine aria-hidden="true" className="h-4 w-4" />Human review where it matters
      </p>
    </div>
  );
}

export default function AiServicesPillar() {
  return (
    <>
      <JsonLd
        data={detailPageJsonLd({
          path: PATH,
          name: SEO.ogTitle,
          description: SEO.description,
          crumbs: CRUMBS,
          service: SCHEMA_SERVICE,
        })}
      />
      <JsonLd data={faqPageJsonLd(FAQS)} />

      <ServiceHero
        crumbs={CRUMBS.map((c) => ({ name: c.name, href: c.path }))}
        eyebrow={HERO.eyebrow}
        title={HERO.title}
        titleAccent={HERO.titleAccent}
        lead={HERO.lead}
        audience={HERO.audience}
        primaryCta={{ label: "Discuss Your AI Project", href: "/contact" }}
        secondaryCta={{ label: "Explore AI Development Services", href: "#services" }}
        stats={HERO.stats}
        figureLabel="From use case to production"
        figure={<LifecycleDiagram />}
        figcaption="Illustrative lifecycle, not a client project."
      />

      <ScopingCallBlock path={PATH} service="AI services" />

      {/* ───────────── What are AI services ───────────── */}
      <section aria-labelledby="what-heading" className="bg-white py-16 lg:py-24">
        <div className={WRAP}>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <SectionHeading id="what-heading" eyebrow="The basics">{WHAT_ARE.title}</SectionHeading>
              <p className={`mt-6 ${P}`}>{WHAT_ARE.intro}</p>
            </div>
            <Photo image={IMAGES.assistant} sizes={HALF} className="aspect-[3/2]" />
          </div>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {WHAT_ARE.items.map((it) => (
              <li key={it.title} className="rounded-2xl border border-gray-100 bg-[#faf9f7] p-5">
                <IconTile icon={ICONS[it.icon]} size="sm" />
                <h3 className="mt-3 font-bold leading-snug text-[#1a1a1a]">{it.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-gray-600">{it.text}</p>
              </li>
            ))}
          </ul>
          <p className="mt-8 rounded-2xl bg-[#faf5fd] px-6 py-5 text-[15px] leading-relaxed text-gray-700 ring-1 ring-[#AF00E8]/15"><Rich text={WHAT_ARE.buyOrBuild} /></p>

          <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1.3fr] lg:items-center">
            <dl className="grid gap-3 sm:grid-cols-2">
              {WHAT_ARE.stats.map((s) => (
                // Figure shown above its description; DOM order stays dt -> dd.
                <div key={s.value} className="flex flex-col-reverse justify-end rounded-2xl bg-white px-5 py-4 ring-1 ring-[#AF00E8]/15">
                  <dt className="mt-2 text-sm leading-snug text-gray-700">
                    {s.text}. <span className="text-gray-500">Source: {s.source}.</span>
                  </dt>
                  <dd className="text-[34px] font-bold leading-none text-[#AF00E8]" style={SERIF}>{s.value}</dd>
                </div>
              ))}
            </dl>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#AF00E8]">UK context</p>
              <p className={`mt-2 ${P}`}>{WHAT_ARE.ukContext}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── Our AI services ───────────── */}
      <section id="services" aria-labelledby="services-heading" className="scroll-mt-28 border-y border-[#9b1fe0]/10 bg-[#faf9f7] py-16 lg:py-24">
        <div className={WRAP}>
          <div className="max-w-3xl">
            <SectionHeading id="services-heading" eyebrow="Six core services">{SERVICES.title}</SectionHeading>
            <p className={`mt-5 ${P}`}>{SERVICES.intro}</p>
          </div>
          <ul className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {SERVICES.core.map((s) => (
              <li key={s.id} id={s.id} className="flex scroll-mt-28 flex-col rounded-3xl border border-gray-100 bg-white p-6">
                <div className="flex items-center gap-3">
                  <IconTile icon={ICONS[s.icon]} />
                  <h3 className="text-[21px] font-bold leading-snug text-[#1a1a1a]" style={SERIF}>{s.title}</h3>
                </div>
                <p className="mt-4 rounded-xl bg-[#fffaeb] px-4 py-3 text-sm leading-relaxed text-gray-700 ring-1 ring-[#E3A600]/25">
                  <span className="font-semibold text-[#8a6400]">The problem it addresses: </span>{s.problem}
                </p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-gray-600"><RichText text={s.text} /></p>
                <Link href={s.href} className="group mt-5 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-[#AF00E8] hover:underline">
                  Learn more about our {s.cta}
                  <RiArrowRightLine aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </li>
            ))}
          </ul>

          <h3 className="mt-14 text-xl font-bold text-[#1a1a1a] lg:text-2xl" style={SERIF}>{SERVICES.specialistTitle}</h3>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {SERVICES.specialist.map((s) => {
              const Icon = ICONS[s.icon];
              return (
                <li key={s.title}>
                  <Link href={s.href} className="group flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-4 transition-colors hover:border-[#AF00E8]/40">
                    <Icon aria-hidden="true" className="h-5 w-5 text-[#AF00E8]" />
                    <span className="mt-2 flex items-center gap-1 text-sm font-bold text-[#1a1a1a] group-hover:text-[#AF00E8]">
                      {s.title}<RiArrowRightLine aria-hidden="true" className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </span>
                    <span className="mt-1 text-xs leading-relaxed text-gray-600">{s.text}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* ───────────── Business requirements ───────────── */}
      <section aria-labelledby="requirements-heading" className="bg-white py-16 lg:py-24">
        <div className={WRAP}>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <SectionHeading id="requirements-heading" eyebrow="Problem → data → human review">{REQUIREMENTS.title}</SectionHeading>
              <p className="mt-5 text-[15px] italic leading-relaxed text-gray-500">{REQUIREMENTS.note}</p>
            </div>
            <Photo image={IMAGES.documents} sizes={HALF} className="aspect-[16/9]" />
          </div>
          <div className="mt-10">
            <ComparisonTable
              labelledBy="requirements-heading"
              headers={REQUIREMENTS.headers.map((label, i) => ({ label, dot: i === 4 ? "#E3A600" : i === 2 ? "#AF00E8" : undefined }))}
              rows={REQUIREMENTS.rows}
              minWidth="min-w-[1080px]"
            />
          </div>
        </div>
      </section>

      {/* ───────────── Industries ───────────── */}
      <section aria-labelledby="industries-heading" className="border-y border-[#9b1fe0]/10 bg-[#faf9f7] py-16 lg:py-24">
        <div className={WRAP}>
          <div className="max-w-3xl">
            <SectionHeading id="industries-heading" eyebrow="Sector context">{INDUSTRIES.title}</SectionHeading>
            <p className={`mt-5 ${P}`}>{INDUSTRIES.intro}</p>
          </div>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {INDUSTRIES.items.map((ind) => {
              const Icon = ICONS[ind.icon];
              return (
                <li key={ind.title}>
                  <Link href={ind.href} className="group flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-5 transition-colors hover:border-[#AF00E8]/40">
                    <span aria-hidden="true" className="icon-tile icon-tile--sm"><Icon className="h-4 w-4" /></span>
                    <span className="mt-3 flex items-center gap-1.5 font-bold text-[#1a1a1a] group-hover:text-[#AF00E8]">
                      {ind.title}<RiArrowRightLine aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                    <span className="mt-1.5 text-sm leading-relaxed text-gray-600">{ind.text}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* ───────────── Custom vs ready-made ───────────── */}
      <section aria-labelledby="compare-heading" className="bg-white py-16 lg:py-24">
        <div className={WRAP}>
          <div className="max-w-3xl">
            <SectionHeading id="compare-heading" eyebrow="An honest comparison">{COMPARISON.title}</SectionHeading>
            <p className={`mt-5 ${P}`}>{COMPARISON.intro}</p>
          </div>
          <div className="mt-10">
            <ComparisonTable
              labelledBy="compare-heading"
              headers={COMPARISON.headers.map((label) => ({ label }))}
              rows={COMPARISON.rows}
              minWidth="min-w-[1080px]"
            />
          </div>
          <p className="mt-8 max-w-4xl rounded-2xl bg-[#faf5fd] px-6 py-5 text-[15px] leading-relaxed text-gray-700 ring-1 ring-[#AF00E8]/15"><Rich text={COMPARISON.path} /></p>
        </div>
      </section>

      {/* ───────────── Process ───────────── */}
      <ProcessGrid
        eyebrow="Eight stages, evidence before scale"
        title={PROCESS.title}
        intro={PROCESS.intro}
        faint
        columns="md:grid-cols-2 lg:grid-cols-4"
        steps={PROCESS.steps.map((s) => ({ title: s.title, rows: [{ label: "What happens", text: s.text }] }))}
        after={
          <div className="mt-10 grid gap-6 lg:grid-cols-2 lg:items-center">
            <Photo image={IMAGES.workshop} sizes={HALF} className="aspect-[16/10]" />
            <p className="flex gap-3 rounded-2xl bg-white px-5 py-4 text-[15px] leading-relaxed text-gray-700 ring-1 ring-gray-100">
              <RiInformationLine aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-[#AF00E8]" />{PROCESS.outro}
            </p>
          </div>
        }
      />

      {/* ───────────── Technologies ───────────── */}
      <section aria-labelledby="tech-heading" className="bg-white py-16 lg:py-24">
        <div className={WRAP}>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <SectionHeading id="tech-heading" eyebrow="Model-agnostic">{TECH.title}</SectionHeading>
              <p className={`mt-5 ${P}`}>{TECH.intro}</p>
            </div>
            <Photo image={IMAGES.chip} sizes={HALF} className="aspect-[16/10]" />
          </div>
          <div className="mt-12">
            <IconCardGrid items={withIcons(TECH.items)} columns="sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5" />
          </div>
          <p className="mt-6 text-sm italic text-gray-500">{TECH.note}</p>
        </div>
      </section>

      {/* ───────────── Governance ───────────── */}
      <section aria-labelledby="governance-heading" className="relative overflow-hidden bg-[#0d0a12] py-16 text-white lg:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-[#AF00E8]/20 blur-3xl" />
        <div className={`${WRAP} relative`}>
          <div className="max-w-3xl">
            <SectionHeading id="governance-heading" eyebrow="UK GDPR · DPIA · Human oversight" dark>{GOVERNANCE.title}</SectionHeading>
            <p className="mt-5 text-[15px] leading-relaxed text-gray-300 lg:text-base">{GOVERNANCE.intro}</p>
          </div>
          <div className="mt-12">
            <IconCardGrid items={withIcons(GOVERNANCE.items)} dark columns="md:grid-cols-2 xl:grid-cols-3" compact />
          </div>
          <p className="mt-8 flex max-w-5xl gap-3 rounded-2xl bg-white/[0.08] px-5 py-4 text-sm font-medium leading-relaxed text-gray-200 ring-1 ring-white/15">
            <RiShieldCheckLine aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-[#e9c2ff]" />{GOVERNANCE.statement}
          </p>
        </div>
      </section>

      {/* ───────────── Why ───────────── */}
      <section aria-labelledby="why-heading" className="border-b border-[#9b1fe0]/10 bg-[#faf9f7] py-16 lg:py-24">
        <div className={WRAP}>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <SectionHeading id="why-heading" eyebrow="Why ClickMasters">{WHY.title}</SectionHeading>
            <Photo image={IMAGES.analytics} sizes={HALF} className="aspect-[16/9]" />
          </div>
          <div className="mt-12">
            <IconCardGrid items={withIcons(WHY.items)} columns="sm:grid-cols-2 lg:grid-cols-4" />
          </div>
        </div>
      </section>

      <FaqSection
        title="AI Services: Frequently Asked Questions"
        intro="What AI services are, agents, automation, generative AI, machine learning, integration, cost, timelines and data protection, answered plainly."
        faqs={FAQS}
      />

      <FinalCta
        title={FINAL_CTA.title}
        titleAccent={FINAL_CTA.titleAccent}
        body={FINAL_CTA.body}
        bring={FINAL_CTA.bring}
        primaryCta={{ label: "Discuss Your AI Project", href: "/contact" }}
        secondaryCta={{ label: "View All Services", href: "/services" }}
      />
    </>
  );
}
