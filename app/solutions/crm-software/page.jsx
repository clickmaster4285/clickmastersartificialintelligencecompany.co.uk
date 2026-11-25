// /solutions/crm-software
// Content: ./content.ts (from the CRM Software SEO pack). Fully server-rendered.
// This real folder takes precedence over the app/solutions/[slug] placeholder route.
import Image from "next/image";
import {
  RiAlarmLine, RiArrowLeftRightLine, RiBarChart2Line, RiBriefcase4Line, RiChat3Line, RiCheckDoubleLine,
  RiCloudLine, RiContactsBook2Line, RiCustomerService2Line, RiDashboardLine, RiDatabase2Line, RiDatabaseLine,
  RiFileCopy2Line, RiFileList3Line, RiFileShield2Line, RiFilter3Line, RiFlowChart, RiGitBranchLine,
  RiGraduationCapLine, RiGroupLine, RiHeartPulseLine, RiHome4Line, RiInboxLine, RiKeyLine, RiLayoutGridLine,
  RiLayoutLine, RiLockLine, RiLoopLeftLine, RiMailSendLine, RiMegaphoneLine, RiMoneyPoundCircleLine,
  RiNotification3Line, RiPaletteLine, RiPieChart2Line, RiPlugLine, RiQuestionAnswerLine, RiRefreshLine,
  RiRoadMapLine, RiRobot2Line, RiRocket2Line, RiSave3Line, RiServerLine, RiShakeHandsLine, RiShieldCheckLine,
  RiShoppingCart2Line, RiStackLine, RiTaskLine, RiToolsLine, RiTruckLine, RiUserFollowLine, RiUserSearchLine,
  RiUserSettingsLine, RiUserSharedLine, RiFileUserLine, RiShieldUserLine,
} from "react-icons/ri";

import JsonLd from "../../Components/JsonLd";
import TechLogoGroups from "../../Components/TechLogoGroups";
import { IconTile, SectionHeading, WRAP } from "../../Components/ServicePageUI";
import {
  CheckCard, ComparisonTable, FaqSection, FinalCta, IconCardGrid, Linked, ProcessGrid, ServiceHero, faqPageJsonLd,
} from "../../Components/ServicePageSections";
import { detailPageJsonLd, detailPageMetadata } from "../../lib/site";
import {
  ARCH_INTRO, ARCH_LAYERS, AUTOMATION, AUTOMATION_INTRO, AUTOMATION_OUTRO, COMPARISON, COMPARISON_INTRO, COST,
  COST_INTRO, CRM_VS_ERP, DEVELOP, DEVELOP_INTRO, FAQS, FEATURES, FEATURES_INTRO, FINAL_CTA, FIT, HERO, IMAGES,
  INDUSTRIES, INDUSTRIES_INTRO, INTEGRATIONS, INTEGRATION_INTRO, PATH, PIPELINE, PIPELINE_INTRO, PROBLEMS,
  PROBLEMS_INTRO, PROCESS, PROCESS_INTRO, SCHEMA_SERVICE, SECURITY, SECURITY_INTRO, SEO, STACK, TEAMS, WHAT_IS, WHY,
} from "./content";

export const metadata = detailPageMetadata({ path: PATH, ...SEO });

const CRUMBS = [
  { name: "Solutions", path: "/solutions" },
  { name: "CRM Software", path: PATH },
];

// All icons are decorative (headings carry the meaning).
const ICONS = {
  sales: RiShakeHandsLine, campaign: RiMegaphoneLine, service: RiCustomerService2Line, report: RiBarChart2Line,
  scatter: RiUserSharedLine, inbox: RiInboxLine, alarm: RiAlarmLine, funnel: RiFilter3Line, chat: RiChat3Line,
  duplicate: RiFileCopy2Line, admin: RiFileList3Line, interview: RiQuestionAnswerLine, map: RiRoadMapLine,
  database: RiDatabase2Line, dashboard: RiDashboardLine, roles: RiUserSettingsLine, rocket: RiRocket2Line,
  contacts: RiContactsBook2Line, automation: RiFlowChart, ai: RiRobot2Line, task: RiTaskLine, mail: RiMailSendLine,
  segment: RiPieChart2Line, assign: RiUserFollowLine, bell: RiNotification3Line, refresh: RiRefreshLine,
  handoff: RiArrowLeftRightLine, frontend: RiLayoutLine, backend: RiServerLine, key: RiKeyLine, lock: RiLockLine,
  plug: RiPlugLine, check: RiCheckDoubleLine, audit: RiFileUserLine, consent: RiShieldUserLine,
  privacy: RiFileShield2Line, backup: RiSave3Line, briefcase: RiBriefcase4Line, home: RiHome4Line,
  cart: RiShoppingCart2Line, education: RiGraduationCapLine, health: RiHeartPulseLine,
  finance: RiMoneyPoundCircleLine, recruit: RiUserSearchLine, truck: RiTruckLine, users: RiGroupLine,
  modules: RiLayoutGridLine, workflow: RiGitBranchLine, migrate: RiDatabaseLine, shield: RiShieldCheckLine,
  design: RiPaletteLine, cloud: RiCloudLine, tools: RiToolsLine, stack: RiStackLine, loop: RiLoopLeftLine,
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

export default function CrmSoftware() {
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
        primaryCta={{ label: "Discuss Your CRM Requirements", href: "/contact" }}
        secondaryCta={{ label: "See CRM Features", href: "#features" }}
        stats={HERO.stats}
        figureLabel="Your pipeline, your stages"
        figure={
          <Image
            src={IMAGES.pipeline.src}
            width={IMAGES.pipeline.width}
            height={IMAGES.pipeline.height}
            alt={IMAGES.pipeline.alt}
            sizes="(min-width: 1024px) 560px, 100vw"
            priority
            className="h-auto w-full"
          />
        }
        figcaption="Illustrative pipeline with sample data, not a client project."
      />

      {/* ───────────── What CRM is ───────────── */}
      <section aria-labelledby="what-heading" className="bg-white py-16 lg:py-24">
        <div className={WRAP}>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <SectionHeading id="what-heading" eyebrow="The basics">What CRM Software Is and How Businesses Use It</SectionHeading>
            <div className="space-y-5">
              <p className={P}><Rich text={WHAT_IS.p1} /></p>
              <p className={P}>{WHAT_IS.p2}</p>
              <p className={P}><Rich text={WHAT_IS.p3} /></p>
            </div>
          </div>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {TEAMS.map((t) => (
              <li key={t.title} className="rounded-2xl border border-gray-100 bg-[#faf9f7] p-5">
                <IconTile icon={ICONS[t.icon]} size="sm" />
                <p className="mt-3 font-bold text-[#1a1a1a]">{t.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-gray-600">{t.text}</p>
              </li>
            ))}
          </ul>
          <Diagram image={IMAGES.customerView} className="mt-10" caption="One account record, every interaction: the single customer view." />
        </div>
      </section>

      {/* ───────────── Problems ───────────── */}
      <section aria-labelledby="problems-heading" className="border-y border-[#9b1fe0]/10 bg-[#faf9f7] py-16 lg:py-24">
        <div className={WRAP}>
          <div className="max-w-3xl">
            <SectionHeading id="problems-heading" eyebrow="Sound familiar?">Customer Management Problems a CRM System Can Solve</SectionHeading>
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
                    <span className="font-semibold text-[#AF00E8]">CRM approach: </span>{p.approach}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ───────────── Development step by step ───────────── */}
      <section aria-labelledby="develop-heading" className="bg-white py-16 lg:py-24">
        <div className={WRAP}>
          <div className="max-w-3xl">
            <SectionHeading id="develop-heading" eyebrow="Designed for adoption">Custom CRM Software Development, Step by Step</SectionHeading>
            <p className={`mt-5 ${P}`}><Linked value={DEVELOP_INTRO} /></p>
          </div>
          <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {DEVELOP.map((d, i) => (
              <li key={d.title} className="rounded-2xl border border-gray-100 bg-[#faf9f7] p-6">
                <div className="flex items-center justify-between">
                  <IconTile icon={ICONS[d.icon]} />
                  <span aria-hidden="true" className="text-[34px] font-bold leading-none text-transparent [-webkit-text-stroke:1.5px_#AF00E8]" style={SERIF}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="mt-4 text-lg font-bold text-[#1a1a1a]">{d.title}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-gray-600">{d.text}</p>
              </li>
            ))}
          </ol>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <CheckCard title="Custom CRM tends to fit when…" items={FIT.custom} tone="purple" />
            <CheckCard title="A ready-made CRM may fit better when…" items={FIT.readyMade} tone="sun" />
          </div>
        </div>
      </section>

      {/* ───────────── Features ───────────── */}
      <section id="features" aria-labelledby="features-heading" className="scroll-mt-28 border-y border-[#9b1fe0]/10 bg-[#faf9f7] py-16 lg:py-24">
        <div className={WRAP}>
          <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:items-end">
            <SectionHeading id="features-heading" eyebrow="11 features">CRM Features and Modules</SectionHeading>
            <div>
              <p className="text-[15px] leading-relaxed text-gray-600">{FEATURES_INTRO}</p>
              <p className="mt-3 flex flex-wrap gap-2 text-xs font-semibold">
                <span className="rounded-full bg-[#f1fbf9] px-3 py-1 text-[#0F9F94] ring-1 ring-[#0F9F94]/25">Foundation</span>
                <span className="rounded-full bg-[#fffaeb] px-3 py-1 text-[#8a6400] ring-1 ring-[#E3A600]/30">Built to requirement</span>
              </p>
            </div>
          </div>

          <ul className="mt-12 grid gap-5 lg:grid-cols-2">
            {FEATURES.map((f) => (
              <li key={f.id} id={f.id} className="scroll-mt-28 overflow-hidden rounded-3xl border border-gray-100 bg-white">
                <div className="flex items-start justify-between gap-4 border-b border-gray-100 p-6">
                  <div className="flex items-center gap-3">
                    <IconTile icon={ICONS[f.icon]} />
                    <h3 className="text-[22px] font-bold leading-snug text-[#1a1a1a]" style={SERIF}>{f.title}</h3>
                  </div>
                  <span
                    className={`mt-1 shrink-0 rounded-full px-3 py-1 text-[11px] font-semibold ring-1 ${
                      f.foundation ? "bg-[#f1fbf9] text-[#0F9F94] ring-[#0F9F94]/25" : "bg-[#fffaeb] text-[#8a6400] ring-[#E3A600]/30"
                    }`}
                  >
                    {f.foundation ? "Foundation" : "Built to requirement"}
                  </span>
                </div>
                <dl className="grid gap-px bg-gray-100 sm:grid-cols-2">
                  {[
                    ["What it does", f.does],
                    ["Problem addressed", f.problem],
                    ["Used by", f.usedBy],
                    ["Connects to", f.connects],
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
        </div>
      </section>

      {/* ───────────── Pipeline in practice ───────────── */}
      <section aria-labelledby="pipeline-heading" className="bg-white py-16 lg:py-24">
        <div className={WRAP}>
          <div className="max-w-3xl">
            <SectionHeading id="pipeline-heading" eyebrow="Enquiry to won deal">Sales Pipeline and Lead Management in Practice</SectionHeading>
            <p className={`mt-5 ${P}`}>{PIPELINE_INTRO}</p>
          </div>
          <Diagram image={IMAGES.leadJourney} className="mt-10" />
          <dl className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {PIPELINE.map((s, i) => (
              <div key={s.title} className="rounded-2xl border border-gray-100 bg-[#faf9f7] p-6">
                <dt className="flex items-center gap-3 font-bold text-[#1a1a1a]">
                  <span aria-hidden="true" className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#AF00E8] text-xs text-white">{i + 1}</span>
                  {s.title}
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-gray-600">{s.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ───────────── Automation ───────────── */}
      <section aria-labelledby="automation-heading" className="relative overflow-hidden bg-[#0d0a12] py-16 text-white lg:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-[#AF00E8]/20 blur-3xl" />
        <div className={`${WRAP} relative`}>
          <div className="max-w-3xl">
            <SectionHeading id="automation-heading" eyebrow="Consistency, every time" dark>CRM Workflow Automation</SectionHeading>
            <p className="mt-5 text-[15px] leading-relaxed text-gray-300 lg:text-base">{AUTOMATION_INTRO}</p>
          </div>
          <div className="mt-12">
            <IconCardGrid items={withIcons(AUTOMATION)} dark columns="sm:grid-cols-2 lg:grid-cols-4" compact />
          </div>
          <p className="mt-10 max-w-4xl text-[15px] leading-relaxed text-gray-300">
            <Linked value={AUTOMATION_OUTRO} className="font-medium text-white underline decoration-[#AF00E8] underline-offset-4 hover:text-[#e9c2ff]" />
          </p>
        </div>
      </section>

      {/* ───────────── Integration ───────────── */}
      <section aria-labelledby="integration-heading" className="bg-white py-16 lg:py-24">
        <div className={WRAP}>
          <div className="max-w-3xl">
            <SectionHeading id="integration-heading" eyebrow="Connected, not copied">CRM Integration with Your Other Business Systems</SectionHeading>
            <p className={`mt-5 ${P}`}><Rich text={INTEGRATION_INTRO} /></p>
          </div>
          <div className="mt-10">
            <ComparisonTable
              labelledBy="integration-heading"
              headers={[{ label: INTEGRATIONS.headers[0] }, { label: INTEGRATIONS.headers[1], dot: "#AF00E8" }, { label: INTEGRATIONS.headers[2], dot: "#5EEAD4" }]}
              rows={INTEGRATIONS.rows}
              minWidth="min-w-[760px]"
            />
          </div>
        </div>
      </section>

      {/* ───────────── Architecture ───────────── */}
      <section aria-labelledby="arch-heading" className="border-y border-[#9b1fe0]/10 bg-[#faf9f7] py-16 lg:py-24">
        <div className={WRAP}>
          <div className="max-w-3xl">
            <SectionHeading id="arch-heading" eyebrow="Fast, searchable, any device">CRM Technology and Architecture</SectionHeading>
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
        </div>
      </section>

      {/* ───────────── Security ───────────── */}
      <section aria-labelledby="security-heading" className="relative overflow-hidden bg-[#0d0a12] py-16 text-white lg:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-[#AF00E8]/20 blur-3xl" />
        <div className={`${WRAP} relative`}>
          <div className="max-w-3xl">
            <SectionHeading id="security-heading" eyebrow="UK GDPR, DPA 2018, PECR" dark>CRM Security and Customer Data Protection</SectionHeading>
            <p className="mt-5 text-[15px] leading-relaxed text-gray-300 lg:text-base">{SECURITY_INTRO}</p>
          </div>
          <div className="mt-12">
            <IconCardGrid items={withIcons(SECURITY)} dark columns="sm:grid-cols-2 lg:grid-cols-3" compact />
          </div>
        </div>
      </section>

      {/* ───────────── Implementation process ───────────── */}
      <ProcessGrid
        eyebrow="11 stages, two-week sprints"
        title="Our CRM Implementation Process"
        intro={PROCESS_INTRO}
        columns="md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        steps={PROCESS.map((s) => ({ title: s.title, rows: [{ label: "What happens", text: s.text }] }))}
      />

      {/* ───────────── Industries ───────────── */}
      <section aria-labelledby="industries-heading" className="border-y border-[#9b1fe0]/10 bg-[#faf9f7] py-16 lg:py-24">
        <div className={WRAP}>
          <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
            <SectionHeading id="industries-heading" eyebrow="Potential applications">CRM Requirements by Industry</SectionHeading>
            <p className="text-[15px] leading-relaxed text-gray-600">{INDUSTRIES_INTRO}</p>
          </div>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {INDUSTRIES.map((ind) => (
              <li key={ind.title} className="flex flex-col rounded-2xl border border-gray-100 bg-white p-6 transition-colors hover:border-[#AF00E8]/30">
                <IconTile icon={ICONS[ind.icon]} />
                <h3 className="mt-4 text-lg font-bold text-[#1a1a1a]">{ind.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">{ind.text}</p>
                <p className="mt-4 text-[11px] font-semibold uppercase tracking-wider text-gray-500">Key requirement</p>
                <ul className="mt-2 flex flex-wrap gap-1.5">
                  {ind.considerations.map((c) => (
                    <li key={c} className="rounded-full bg-[#faf5fd] px-2.5 py-1 text-xs text-[#7a1fa2] ring-1 ring-[#AF00E8]/20">{c}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ───────────── Custom vs ready-made ───────────── */}
      <section aria-labelledby="compare-heading" className="bg-white py-16 lg:py-24">
        <div className={WRAP}>
          <div className="max-w-3xl">
            <SectionHeading id="compare-heading" eyebrow="An honest comparison">Custom CRM vs Ready-Made CRM Software</SectionHeading>
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
        </div>
      </section>

      {/* ───────────── CRM vs ERP ───────────── */}
      <section aria-labelledby="erp-heading" className="border-y border-[#9b1fe0]/10 bg-[#faf9f7] py-16 lg:py-24">
        <div className={WRAP}>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <SectionHeading id="erp-heading" eyebrow="Outwards vs inwards">CRM vs ERP: How They Differ and Work Together</SectionHeading>
            <p className={P}><Linked value={CRM_VS_ERP} /></p>
          </div>
          <Diagram image={IMAGES.crmVsErp} className="mt-10" />
        </div>
      </section>

      {/* ───────────── Cost ───────────── */}
      <section aria-labelledby="cost-heading" className="bg-white py-16 lg:py-24">
        <div className={WRAP}>
          <div className="max-w-3xl">
            <SectionHeading id="cost-heading" eyebrow="Pricing, explained">What Affects the Cost of a Custom CRM in the UK?</SectionHeading>
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
            <SectionHeading id="why-heading" eyebrow="Why ClickMasters" dark>Why Consider ClickMasters for Your CRM?</SectionHeading>
          </div>
          <div className="mt-12">
            <IconCardGrid items={withIcons(WHY)} dark />
          </div>
        </div>
      </section>

      <FaqSection
        title="CRM Software: Frequently Asked Questions"
        intro="Cost, timelines, features, integration, migration and CRM vs ERP, answered plainly."
        faqs={FAQS}
      />

      <FinalCta
        title={FINAL_CTA.title}
        titleAccent={FINAL_CTA.titleAccent}
        body={FINAL_CTA.body}
        bring={FINAL_CTA.bring}
        primaryCta={{ label: "Discuss Your CRM Requirements", href: "/contact" }}
        secondaryCta={{ label: "Book a Sales Process Review", href: "/contact" }}
      />
    </>
  );
}
