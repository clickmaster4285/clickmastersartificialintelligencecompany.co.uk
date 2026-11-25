// /solutions/erp-software
// Content: ./content.ts (from the ERP Software SEO pack). Fully server-rendered.
// This real folder takes precedence over the app/solutions/[slug] placeholder route.
import Image from "next/image";
import {
  RiArchiveLine, RiBarChart2Line, RiBriefcase4Line, RiCalendarCheckLine, RiCheckDoubleLine, RiCloudLine,
  RiCodeSSlashLine, RiContactsBook2Line, RiDatabase2Line, RiEyeLine, RiFileCopy2Line, RiFileList3Line,
  RiFileShield2Line, RiGitBranchLine, RiGraduationCapLine, RiHeartPulseLine, RiHomeGearLine, RiKeyLine,
  RiLayoutLine, RiLayoutGridLine, RiLineChartLine, RiLockLine, RiLoopLeftLine, RiMoneyPoundCircleLine,
  RiNodeTree, RiPlugLine, RiRobot2Line, RiRoadMapLine, RiRouteLine, RiSave3Line, RiServerLine, RiSettings3Line,
  RiShieldCheckLine, RiShoppingCart2Line, RiSplitCellsHorizontal, RiStackLine, RiStore3Line, RiTeamLine,
  RiToolsLine, RiTruckLine, RiUserSettingsLine, RiDatabaseLine, RiInboxArchiveLine,
} from "react-icons/ri";

import JsonLd from "../../Components/JsonLd";
import TechLogoGroups from "../../Components/TechLogoGroups";
import { IconTile, SectionHeading, WRAP } from "../../Components/ServicePageUI";
import {
  CheckCard, ComparisonTable, FaqSection, FinalCta, IconCardGrid, Linked, ON_DARK_LINK, ProcessGrid, ServiceHero,
  faqPageJsonLd,
} from "../../Components/ServicePageSections";
import { detailPageJsonLd, detailPageMetadata } from "../../lib/site";
import {
  ARCH_INTRO, ARCH_LAYERS, ARCH_NOTES, COMPARISON, COMPARISON_INTRO, COST, COST_INTRO, DEVELOP, DEVELOP_INTRO, FAQS,
  FINAL_CTA, FIT, HERO, HYBRID, IMAGES, INDUSTRIES, INDUSTRIES_INTRO, INDUSTRIES_OUTRO, INTEGRATIONS,
  INTEGRATION_INTRO, INTEGRATION_OUTRO, MODULES, MODULES_INTRO, PATH, PROBLEMS, PROBLEMS_INTRO, PROCESS,
  PROCESS_INTRO, SCHEMA_SERVICE, SECURITY, SECURITY_INTRO, SEO, STACK, WHAT_IS, WHY,
} from "./content";

export const metadata = detailPageMetadata({ path: PATH, ...SEO });

const CRUMBS = [
  { name: "Solutions", path: "/solutions" },
  { name: "ERP Software", path: PATH },
];

// All icons are decorative (headings carry the meaning).
const ICONS = {
  silo: RiSplitCellsHorizontal, duplicate: RiFileCopy2Line, stock: RiArchiveLine, purchase: RiShoppingCart2Line,
  calendar: RiCalendarCheckLine, eye: RiEyeLine, customer: RiContactsBook2Line, scale: RiLineChartLine,
  map: RiRoadMapLine, modules: RiLayoutGridLine, database: RiDatabase2Line, roles: RiUserSettingsLine,
  workflow: RiGitBranchLine, integration: RiPlugLine, finance: RiMoneyPoundCircleLine, hr: RiTeamLine,
  sales: RiStore3Line, warehouse: RiInboxArchiveLine, project: RiBriefcase4Line, factory: RiSettings3Line,
  report: RiBarChart2Line, frontend: RiLayoutLine, backend: RiServerLine, split: RiNodeTree, key: RiKeyLine,
  audit: RiFileList3Line, check: RiCheckDoubleLine, lock: RiLockLine, backup: RiSave3Line,
  privacy: RiFileShield2Line, truck: RiTruckLine, route: RiRouteLine, construction: RiHomeGearLine,
  briefcase: RiBriefcase4Line, health: RiHeartPulseLine, education: RiGraduationCapLine, complex: RiStackLine,
  migrate: RiDatabaseLine, shield: RiShieldCheckLine, cloud: RiCloudLine, tools: RiToolsLine, ai: RiRobot2Line,
  loop: RiLoopLeftLine, code: RiCodeSSlashLine,
};
const withIcons = (items) => items.map((it) => ({ ...it, icon: ICONS[it.icon] }));

/** Renders **bold** and *italic* markers from the content file. */
function Rich({ text }) {
  return text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/).map((part, i) => {
    if (part.startsWith("**")) return <strong key={i} className="font-semibold text-[#1a1a1a]">{part.slice(2, -2)}</strong>;
    if (part.startsWith("*")) return <em key={i}>{part.slice(1, -1)}</em>;
    return part;
  });
}

/** A content-pack diagram (PNG in /public) in a card, with its descriptive alt text. */
function Diagram({ image, caption, className = "" }) {
  return (
    <figure className={`rounded-3xl border border-gray-100 bg-white p-4 shadow-[0_20px_60px_-30px_rgba(60,0,90,0.35)] sm:p-8 ${className}`}>
      <Image src={image.src} width={image.width} height={image.height} alt={image.alt} sizes="(min-width: 1280px) 1216px, 100vw" className="h-auto w-full" />
      {caption && <figcaption className="mt-4 text-center text-xs text-gray-500">{caption}</figcaption>}
    </figure>
  );
}

const P = "text-[15px] leading-relaxed text-gray-600 lg:text-base";
const SERIF = { fontFamily: "Garamond, serif" };
const LABEL = "text-[11px] font-bold uppercase tracking-[0.14em] text-gray-500";

export default function ErpSoftware() {
  return (
    <>
      <JsonLd
        data={detailPageJsonLd({
          path: PATH,
          name: `${SEO.title} | ClickMasters`,
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
        primaryCta={{ label: "Discuss Your ERP Requirements", href: "/contact" }}
        secondaryCta={{ label: "See ERP Modules", href: "#modules" }}
        stats={HERO.stats}
        figureLabel="One core, every department"
        figure={
          <Image
            src={IMAGES.hub.src}
            width={IMAGES.hub.width}
            height={IMAGES.hub.height}
            alt={IMAGES.hub.alt}
            sizes="(min-width: 1024px) 560px, 100vw"
            priority
            className="h-auto w-full"
          />
        }
        figcaption="Every module reads from and writes to one shared database."
      />

      {/* ───────────── What ERP does ───────────── */}
      <section aria-labelledby="what-heading" className="bg-white py-16 lg:py-24">
        <div className={WRAP}>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <SectionHeading id="what-heading" eyebrow="The basics">What ERP Software Does and Why Businesses Adopt It</SectionHeading>
            <div className="space-y-5">
              <p className={P}><Rich text={WHAT_IS.p1} /></p>
              <p className={P}><Rich text={WHAT_IS.p2} /></p>
            </div>
          </div>
          <Diagram image={IMAGES.beforeAfter} className="mt-12" caption="Before: re-keying and email between tools. After: modules sharing one database." />

          <h3 className="mt-16 text-2xl font-bold text-[#1a1a1a] lg:text-3xl" style={SERIF}>When a custom ERP is the right choice</h3>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <CheckCard title="Custom or tailored ERP fits when…" items={FIT.custom} tone="purple" />
            <CheckCard title="Packaged ERP may fit better when…" items={FIT.packaged} tone="sun" />
          </div>
        </div>
      </section>

      {/* ───────────── Problems ───────────── */}
      <section aria-labelledby="problems-heading" className="border-y border-[#9b1fe0]/10 bg-[#faf9f7] py-16 lg:py-24">
        <div className={WRAP}>
          <div className="max-w-3xl">
            <SectionHeading id="problems-heading" eyebrow="Signs you need one">Operational Problems an ERP System Can Address</SectionHeading>
            <p className={`mt-5 ${P}`}>{PROBLEMS_INTRO}</p>
          </div>
          <ul className="mt-12 grid gap-4 md:grid-cols-2">
            {PROBLEMS.map((p) => (
              <li key={p.title} className="flex gap-4 rounded-2xl border border-gray-100 bg-white p-5 transition-colors hover:border-[#AF00E8]/25 sm:p-6">
                <IconTile icon={ICONS[p.icon]} />
                <div>
                  <h3 className="text-lg font-bold text-[#1a1a1a]">{p.title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{p.text}</p>
                  <p className="mt-3 rounded-lg bg-[#faf5fd] px-3.5 py-2.5 text-sm leading-relaxed text-gray-700 ring-1 ring-[#AF00E8]/10">
                    <span className="font-semibold text-[#AF00E8]">ERP approach: </span>{p.approach}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ───────────── How we develop ───────────── */}
      <section aria-labelledby="develop-heading" className="bg-white py-16 lg:py-24">
        <div className={WRAP}>
          <div className="max-w-3xl">
            <SectionHeading id="develop-heading" eyebrow="Foundation plus your rules">How We Develop Custom ERP Software</SectionHeading>
            <p className={`mt-5 ${P}`}><Linked value={DEVELOP_INTRO} /></p>
          </div>
          <div className="mt-12">
            <IconCardGrid items={withIcons(DEVELOP)} />
          </div>
        </div>
      </section>

      {/* ───────────── Modules ───────────── */}
      <section id="modules" aria-labelledby="modules-heading" className="scroll-mt-28 border-y border-[#9b1fe0]/10 bg-[#faf9f7] py-16 lg:py-24">
        <div className={WRAP}>
          <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:items-end">
            <SectionHeading id="modules-heading" eyebrow="11 modules">ERP Modules and What Each One Manages</SectionHeading>
            <div>
              <p className="text-[15px] leading-relaxed text-gray-600">{MODULES_INTRO}</p>
              <p className="mt-3 flex flex-wrap gap-2 text-xs font-semibold">
                <span className="rounded-full bg-[#f1fbf9] px-3 py-1 text-[#0F9F94] ring-1 ring-[#0F9F94]/25">Foundation</span>
                <span className="rounded-full bg-[#fffaeb] px-3 py-1 text-[#8a6400] ring-1 ring-[#E3A600]/30">Built to requirement</span>
              </p>
            </div>
          </div>

          <ul className="mt-12 grid gap-5 lg:grid-cols-2">
            {MODULES.map((m) => (
              <li key={m.id} id={m.id} className="scroll-mt-28 overflow-hidden rounded-3xl border border-gray-100 bg-white">
                <div className="flex items-start justify-between gap-4 border-b border-gray-100 p-6">
                  <div className="flex items-center gap-3">
                    <IconTile icon={ICONS[m.icon]} />
                    <h3 className="text-[22px] font-bold leading-snug text-[#1a1a1a]" style={SERIF}>{m.title}</h3>
                  </div>
                  <span
                    className={`mt-1 shrink-0 rounded-full px-3 py-1 text-[11px] font-semibold ring-1 ${
                      m.foundation ? "bg-[#f1fbf9] text-[#0F9F94] ring-[#0F9F94]/25" : "bg-[#fffaeb] text-[#8a6400] ring-[#E3A600]/30"
                    }`}
                  >
                    {m.foundation ? "Foundation" : "Built to requirement"}
                  </span>
                </div>
                <dl className="grid gap-px bg-gray-100 sm:grid-cols-2">
                  {[
                    ["Manages", m.manages],
                    ["Problem addressed", m.problem],
                    ["Used by", m.usedBy],
                    ["Connects with", m.connects],
                  ].map(([label, text]) => (
                    <div key={label} className="bg-white p-5 sm:px-6">
                      <dt className={LABEL}>{label}</dt>
                      <dd className="mt-2 text-sm leading-relaxed text-gray-700">{text}</dd>
                    </div>
                  ))}
                </dl>
              </li>
            ))}
          </ul>

          <Diagram image={IMAGES.flows} className="mt-12" caption="How modules hand work to each other: order-to-cash (top) and procure-to-pay (bottom)." />
        </div>
      </section>

      {/* ───────────── Integration ───────────── */}
      <section aria-labelledby="integration-heading" className="bg-white py-16 lg:py-24">
        <div className={WRAP}>
          <div className="max-w-3xl">
            <SectionHeading id="integration-heading" eyebrow="Keep the tools that work">ERP Integration and Workflow Automation</SectionHeading>
            <p className={`mt-5 ${P}`}>{INTEGRATION_INTRO}</p>
          </div>
          <div className="mt-10">
            <ComparisonTable
              labelledBy="integration-heading"
              headers={[{ label: INTEGRATIONS.headers[0] }, { label: INTEGRATIONS.headers[1], dot: "#AF00E8" }, { label: INTEGRATIONS.headers[2], dot: "#5EEAD4" }]}
              rows={INTEGRATIONS.rows}
              minWidth="min-w-[760px]"
            />
          </div>
          <p className={`mt-8 max-w-4xl ${P}`}><Linked value={INTEGRATION_OUTRO} /></p>
        </div>
      </section>

      {/* ───────────── Architecture ───────────── */}
      <section aria-labelledby="arch-heading" className="border-y border-[#9b1fe0]/10 bg-[#faf9f7] py-16 lg:py-24">
        <div className={WRAP}>
          <div className="max-w-3xl">
            <SectionHeading id="arch-heading" eyebrow="Browser-based, built to last">ERP Architecture and Technology</SectionHeading>
            <p className={`mt-5 ${P}`}><Linked value={ARCH_INTRO} /></p>
          </div>
          <div className="mt-12">
            <TechLogoGroups groups={STACK} />
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {ARCH_LAYERS.map((layer) => (
              <div key={layer.title} className="rounded-2xl border border-gray-100 bg-white p-6">
                <div className="flex items-center gap-3">
                  <IconTile icon={ICONS[layer.icon]} size="sm" />
                  <h3 className="text-xl font-bold text-[#1a1a1a]" style={SERIF}>{layer.title}</h3>
                </div>
                <ul className="mt-4 space-y-3">
                  {layer.items.map(([term, text]) => (
                    <li key={term} className="text-sm leading-relaxed text-gray-600">
                      <strong className="font-semibold text-[#1a1a1a]">{term}</strong> {text}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <dl className="mt-10 grid gap-4 rounded-3xl bg-[#0d0a12] p-6 text-white sm:p-10 md:grid-cols-3">
            {ARCH_NOTES.map((n, i) => (
              <div key={n.title} className="rounded-2xl border border-white/10 bg-white/[0.05] p-5">
                <dt className="flex items-center gap-2 font-semibold">
                  <span aria-hidden="true" className="flex h-6 w-6 items-center justify-center rounded-full bg-[#AF00E8] text-xs">{i + 1}</span>
                  {n.title}
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-gray-300">{n.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ───────────── Security ───────────── */}
      <section aria-labelledby="security-heading" className="relative overflow-hidden bg-[#0d0a12] py-16 text-white lg:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-[#AF00E8]/20 blur-3xl" />
        <div className={`${WRAP} relative`}>
          <div className="max-w-3xl">
            <SectionHeading id="security-heading" eyebrow="Controls auditors expect" dark>ERP Security and Access Management</SectionHeading>
            <p className="mt-5 text-[15px] leading-relaxed text-gray-300 lg:text-base">{SECURITY_INTRO}</p>
          </div>
          <div className="mt-12">
            <IconCardGrid items={withIcons(SECURITY)} dark columns="sm:grid-cols-2 lg:grid-cols-3" compact />
          </div>
        </div>
      </section>

      {/* ───────────── Implementation process ───────────── */}
      <ProcessGrid
        eyebrow="11 stages, module by module"
        title="Our ERP Implementation Process"
        intro={PROCESS_INTRO}
        columns="md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        checkLabel="Expect"
        steps={PROCESS.map((s) => ({ title: s.title, rows: [{ label: "What happens", text: s.text }], risk: s.expect }))}
        after={<Diagram image={IMAGES.migration} className="mt-12" caption="Data is trial-loaded and reconciled until the figures match; modules go live in phases." />}
      />

      {/* ───────────── Industries ───────────── */}
      <section aria-labelledby="industries-heading" className="bg-[#0d0a12] py-16 text-white lg:py-24">
        <div className={WRAP}>
          <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
            <SectionHeading id="industries-heading" eyebrow="Potential use cases" dark>ERP Requirements in Different Industries</SectionHeading>
            <p className="text-[15px] leading-relaxed text-gray-300">{INDUSTRIES_INTRO}</p>
          </div>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {INDUSTRIES.map((ind) => (
              <li key={ind.title} className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-colors hover:border-[#AF00E8]/50 hover:bg-white/[0.07]">
                <IconTile icon={ICONS[ind.icon]} dark />
                <h3 className="mt-4 text-lg font-bold">{ind.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-300">{ind.text}</p>
                <p className="mt-4 text-[11px] font-semibold uppercase tracking-wider text-gray-400">Key requirement</p>
                <ul className="mt-2 flex flex-wrap gap-1.5">
                  {ind.considerations.map((c) => (
                    <li key={c} className="rounded-full bg-[#AF00E8]/15 px-2.5 py-1 text-xs text-[#ecd0ff] ring-1 ring-[#AF00E8]/30">{c}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
          <p className="mt-10 max-w-4xl text-[15px] leading-relaxed text-gray-300"><Linked value={INDUSTRIES_OUTRO} className={ON_DARK_LINK} /></p>
        </div>
      </section>

      {/* ───────────── Custom vs ready-made ───────────── */}
      <section aria-labelledby="compare-heading" className="border-b border-[#9b1fe0]/10 bg-[#faf9f7] py-16 lg:py-24">
        <div className={WRAP}>
          <div className="max-w-3xl">
            <SectionHeading id="compare-heading" eyebrow="An honest comparison">Custom ERP vs Ready-Made ERP Software</SectionHeading>
            <p className={`mt-5 ${P}`}>{COMPARISON_INTRO}</p>
          </div>
          <div className="mt-10">
            <ComparisonTable
              labelledBy="compare-heading"
              headers={[{ label: COMPARISON.headers[0] }, { label: COMPARISON.headers[1], dot: "#AF00E8" }, { label: COMPARISON.headers[2], dot: "#E3A600" }]}
              rows={COMPARISON.rows}
              minWidth="min-w-[760px]"
            />
          </div>
          <p className="mt-8 max-w-4xl rounded-2xl bg-gradient-to-br from-[#faf5fd] to-[#f1fbf9] p-6 text-[15px] leading-relaxed text-gray-700 ring-1 ring-[#AF00E8]/10">
            <Rich text={HYBRID} />
          </p>
        </div>
      </section>

      {/* ───────────── Cost ───────────── */}
      <section aria-labelledby="cost-heading" className="bg-white py-16 lg:py-24">
        <div className={WRAP}>
          <div className="max-w-3xl">
            <SectionHeading id="cost-heading" eyebrow="Pricing, explained">What Affects the Cost of ERP Software in the UK?</SectionHeading>
            <p className={`mt-5 ${P}`}>{COST_INTRO}</p>
          </div>
          <div className="mt-12">
            <IconCardGrid items={withIcons(COST)} columns="sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5" />
          </div>
        </div>
      </section>

      {/* ───────────── Why ───────────── */}
      <section aria-labelledby="why-heading" className="relative overflow-hidden bg-[#0d0a12] py-16 text-white lg:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-[#AF00E8]/25 blur-3xl" />
        <div className={`${WRAP} relative`}>
          <div className="max-w-3xl">
            <SectionHeading id="why-heading" eyebrow="Why ClickMasters" dark>Why Consider ClickMasters for Your ERP Project?</SectionHeading>
          </div>
          <div className="mt-12">
            <IconCardGrid items={withIcons(WHY)} dark />
          </div>
        </div>
      </section>

      <FaqSection
        title="ERP Software: Frequently Asked Questions"
        intro="Cost, timelines, modules, integration, migration and ERP vs CRM, answered plainly."
        faqs={FAQS}
      />

      <FinalCta
        title={FINAL_CTA.title}
        titleAccent={FINAL_CTA.titleAccent}
        body={FINAL_CTA.body}
        bring={FINAL_CTA.bring}
        primaryCta={{ label: "Discuss Your ERP Requirements", href: "/contact" }}
        secondaryCta={{ label: "Book a Process Review", href: "/contact" }}
      />
    </>
  );
}
