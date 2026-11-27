// /services/web-application-development
// Content: ./content.ts (from the Web Application SEO pack). Fully server-rendered.
// This real folder takes precedence over the app/services/[slug] placeholder route.
import {
  RiAppsLine, RiBarChart2Line, RiBox3Line, RiBriefcase4Line, RiBugLine, RiBuilding4Line, RiCalendarCheckLine,
  RiCheckboxCircleLine, RiClipboardLine, RiCodeBoxLine, RiContactsBook2Line, RiDashboardLine, RiDatabase2Line,
  RiFileList3Line, RiFileShield2Line, RiFlashlightLine, RiGitBranchLine, RiKeyLine, RiLayoutLine,
  RiLineChartLine, RiLockLine, RiLoopLeftLine, RiNodeTree, RiPaletteLine, RiPlugLine, RiPulseLine,
  RiRefreshLine, RiRocket2Line, RiSave3Line, RiServerLine, RiSettings4Line, RiShieldCheckLine,
  RiShoppingCart2Line, RiSmartphoneLine, RiSpeedLine, RiStackLine, RiTeamLine, RiTimerLine, RiToolsLine,
  RiUserSettingsLine, RiUserStarLine, RiWindowLine,
} from "../../Components/icons";

import JsonLd from "../../Components/JsonLd";
import ScopingCallBlock from "../../Components/ScopingCallBlock";
import TechLogoGroups from "../../Components/TechLogoGroups";
import { IconTile, SectionHeading, WRAP } from "../../Components/ServicePageUI";
import {
  CheckCard, ComparisonTable, FaqSection, FinalCta, IconCardGrid, Linked, ProcessGrid, ServiceCards, ServiceHero,
  faqPageJsonLd,
} from "../../Components/ServicePageSections";
import { detailPageJsonLd, detailPageMetadata } from "../../lib/site";
import {
  ARCH_ALT, ArchitectureDiagram, CACHE_ALT, CacheLayers, DashboardIllustration, SECURITY_ALT, SPECTRUM_ALT,
  SecurityFlow, SpectrumDiagram,
} from "./Diagrams";
import {
  ARCH, CACHE_LAYERS, COMPARISON, COST, FAQS, FINAL_CTA, HERO, PATH, PERFORMANCE, PERFORMANCE_INTRO,
  PERFORMANCE_OUTRO, PROCESS, PROCESS_INTRO, SCHEMA_SERVICE, SECURITY, SECURITY_FLOW, SECURITY_INTRO, SEO,
  SERVICES, SERVICES_INTRO, SPECTRUM, STACK, STACK_FIT, STACK_INTRO, TYPES, TYPES_INTRO, TYPES_OUTRO, WHAT_IS, WHY,
} from "./content";

export const metadata = detailPageMetadata({ path: PATH, ...SEO });

const CRUMBS = [
  { name: "Services", path: "/services" },
  { name: "Web Application Development", path: PATH },
];

// All icons are decorative (headings carry the meaning).
const ICONS = {
  custom: RiCodeBoxLine, enterprise: RiBuilding4Line, saas: RiAppsLine, business: RiBriefcase4Line,
  portal: RiUserStarLine, pwa: RiSmartphoneLine, api: RiPlugLine, modernise: RiRefreshLine,
  maintenance: RiToolsLine, fullstack: RiStackLine, crm: RiContactsBook2Line, dashboard: RiDashboardLine,
  ecommerce: RiShoppingCart2Line, booking: RiCalendarCheckLine, internal: RiClipboardLine, data: RiDatabase2Line,
  workflow: RiGitBranchLine, frontend: RiLayoutLine, backend: RiServerLine, database: RiDatabase2Line,
  auth: RiKeyLine, rbac: RiUserSettingsLine, validate: RiCheckboxCircleLine, lock: RiLockLine,
  session: RiTimerLine, config: RiSettings4Line, deps: RiBox3Line, backup: RiSave3Line, test: RiBugLine,
  monitor: RiPulseLine, nda: RiFileShield2Line, speed: RiSpeedLine, cache: RiFlashlightLine,
  scale: RiLineChartLine, load: RiBarChart2Line, requirements: RiFileList3Line, shield: RiShieldCheckLine,
  agile: RiLoopLeftLine, complexity: RiNodeTree, roles: RiTeamLine, design: RiPaletteLine, deploy: RiRocket2Line,
  window: RiWindowLine,
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

const P = "text-[15px] leading-relaxed text-gray-600 lg:text-base";

export default function WebApplicationDevelopment() {
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
        primaryCta={{ label: "Discuss Your Web Application Project", href: "/contact" }}
        secondaryCta={{ label: "Explore Our Services", href: "/services" }}
        stats={HERO.stats}
        figureLabel="A business web app, in the browser"
        figure={<DashboardIllustration className="h-auto w-full" />}
        figcaption="Illustrative example with sample data, not a client project."
      />

      <ScopingCallBlock path={PATH} service="web application development" />

      {/* ───────────── What is a web application ───────────── */}
      <section aria-labelledby="what-heading" className="bg-white py-16 lg:py-24">
        <div className={WRAP}>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <SectionHeading id="what-heading" eyebrow="The basics">What Is Web Application Development?</SectionHeading>
            <div className="space-y-5">
              <p className={P}><Rich text={WHAT_IS.p1} /></p>
              <p className={P}><Rich text={WHAT_IS.p2} /></p>
            </div>
          </div>
          <figure aria-label={SPECTRUM_ALT} className="mt-12 rounded-3xl border border-gray-100 bg-[#fcfaff] p-6 sm:p-8">
            <SpectrumDiagram items={SPECTRUM} />
          </figure>
          <p className={`mt-10 max-w-4xl ${P}`}>{WHAT_IS.p3}</p>
        </div>
      </section>

      {/* ───────────── 10 services ───────────── */}
      <ServiceCards
        eyebrow="10 capabilities"
        title="Our Web Application Development Services"
        intro={<Linked value={SERVICES_INTRO} />}
        services={withIcons(SERVICES)}
      />

      {/* ───────────── Types of web applications ───────────── */}
      <section aria-labelledby="types-heading" className="bg-white py-16 lg:py-24">
        <div className={WRAP}>
          <div className="max-w-3xl">
            <SectionHeading id="types-heading" eyebrow="Illustrative examples">Types of Web Applications We Can Build</SectionHeading>
            <p className={`mt-5 ${P}`}><Linked value={TYPES_INTRO} /></p>
          </div>
          <ul className="mt-12 grid gap-4 md:grid-cols-2">
            {TYPES.map((t) => (
              <li key={t.title} className="group flex gap-4 rounded-2xl border border-gray-100 bg-[#faf9f7] p-5 transition-colors hover:border-[#AF00E8]/25 hover:bg-[#faf5fd] sm:p-6">
                <IconTile icon={ICONS[t.icon]} />
                <div>
                  <h3 className="text-lg font-bold text-[#1a1a1a]">{t.title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{t.text}</p>
                  <p className="mt-3 rounded-lg bg-white px-3.5 py-2.5 text-sm leading-relaxed text-gray-700 ring-1 ring-gray-100">
                    <span className="font-semibold text-[#AF00E8]">Scenario: </span>{t.scenario}
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <p className={`mt-10 max-w-4xl ${P}`}><Linked value={TYPES_OUTRO} /></p>
        </div>
      </section>

      {/* ───────────── Architecture ───────────── */}
      <section aria-labelledby="arch-heading" className="border-y border-[#9b1fe0]/10 bg-[#faf9f7] py-16 lg:py-24">
        <div className={WRAP}>
          <div className="max-w-3xl">
            <SectionHeading id="arch-heading" eyebrow="How it fits together">Frontend, Backend and Full-Stack Architecture Explained</SectionHeading>
            <p className={`mt-5 ${P}`}>{ARCH.intro}</p>
          </div>
          <figure aria-label={ARCH_ALT} className="mt-10 rounded-3xl bg-white p-6 shadow-[0_20px_60px_-30px_rgba(60,0,90,0.35)] sm:p-8">
            <ArchitectureDiagram />
          </figure>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {ARCH.layers.map((layer) => (
              <div key={layer.title} className="rounded-2xl border border-gray-100 bg-white p-6">
                <div className="flex items-center gap-3">
                  <IconTile icon={ICONS[layer.icon]} size="sm" />
                  <h3 className="text-xl font-bold text-[#1a1a1a]" style={{ fontFamily: "Garamond, serif" }}>{layer.title}</h3>
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

          <div className="mt-10 rounded-3xl bg-[#0d0a12] p-6 text-white sm:p-10">
            <h3 className="text-2xl font-bold lg:text-3xl" style={{ fontFamily: "Garamond, serif" }}>{ARCH.renderTitle}</h3>
            <dl className="mt-6 grid gap-4 md:grid-cols-3">
              {ARCH.rendering.map((r, i) => (
                <div key={r.title} className="rounded-2xl border border-white/10 bg-white/[0.05] p-5">
                  <dt className="flex items-center gap-2 font-semibold">
                    <span aria-hidden="true" className="flex h-6 w-6 items-center justify-center rounded-full bg-[#AF00E8] text-xs">{i + 1}</span>
                    {r.title}
                  </dt>
                  <dd className="mt-2 text-sm leading-relaxed text-gray-300">{r.text}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 text-sm leading-relaxed text-gray-300">{ARCH.renderOutro}</p>
          </div>
        </div>
      </section>

      {/* ───────────── Technology stack ───────────── */}
      <section aria-labelledby="stack-heading" className="bg-white py-16 lg:py-24">
        <div className={WRAP}>
          <div className="max-w-3xl">
            <SectionHeading id="stack-heading" eyebrow="Proven stacks">Our Web Application Technology Stack</SectionHeading>
            <p className={`mt-5 ${P}`}>{STACK_INTRO}</p>
          </div>
          <div className="mt-12">
            <TechLogoGroups groups={STACK} />
          </div>
          <div className="mt-10">
            <ComparisonTable
              labelledBy="stack-heading"
              headers={STACK_FIT.headers.map((label) => ({ label }))}
              rows={STACK_FIT.rows}
              minWidth="min-w-[640px]"
            />
          </div>
        </div>
      </section>

      {/* ───────────── Process ───────────── */}
      <ProcessGrid
        faint
        eyebrow="10 phases, two-week sprints"
        title="Our Web Application Development Process"
        intro={PROCESS_INTRO}
        columns="md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
        steps={PROCESS.map((s) => ({
          title: s.title,
          rows: [{ label: "Activities", text: s.activities }, { label: "Deliverables", text: s.deliverables }],
          risk: s.risk,
        }))}
      />

      {/* ───────────── Security ───────────── */}
      <section aria-labelledby="security-heading" className="relative overflow-hidden bg-[#0d0a12] py-16 text-white lg:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-[#AF00E8]/20 blur-3xl" />
        <div className={`${WRAP} relative`}>
          <div className="max-w-3xl">
            <SectionHeading id="security-heading" eyebrow="OWASP-led" dark>Web Application Security</SectionHeading>
            <p className="mt-5 text-[15px] leading-relaxed text-gray-300 lg:text-base">{SECURITY_INTRO}</p>
          </div>
          <figure aria-label={SECURITY_ALT} className="mt-10 rounded-3xl bg-white p-6 text-[#1a1a1a] sm:p-8">
            <SecurityFlow steps={SECURITY_FLOW} />
          </figure>
          <div className="mt-10">
            <IconCardGrid items={withIcons(SECURITY)} dark columns="sm:grid-cols-2 lg:grid-cols-3" compact />
          </div>
        </div>
      </section>

      {/* ───────────── Performance ───────────── */}
      <section aria-labelledby="performance-heading" className="bg-white py-16 lg:py-24">
        <div className={WRAP}>
          <div className="max-w-3xl">
            <SectionHeading id="performance-heading" eyebrow="Fast by design">Performance and Scalability</SectionHeading>
            <p className={`mt-5 ${P}`}>{PERFORMANCE_INTRO}</p>
          </div>
          <figure aria-label={CACHE_ALT} className="mt-10 rounded-3xl border border-gray-100 bg-[#fcfaff] p-6 sm:p-8">
            <CacheLayers layers={CACHE_LAYERS} />
          </figure>
          <div className="mt-10">
            <IconCardGrid items={withIcons(PERFORMANCE)} />
          </div>
          <p className={`mt-10 max-w-4xl ${P}`}>{PERFORMANCE_OUTRO}</p>
        </div>
      </section>

      {/* ───────────── Website vs web app vs desktop ───────────── */}
      <section aria-labelledby="compare-heading" className="border-y border-[#9b1fe0]/10 bg-[#faf9f7] py-16 lg:py-24">
        <div className={WRAP}>
          <SectionHeading id="compare-heading" eyebrow="Which fits?">Web Application vs Website vs Desktop Software</SectionHeading>
          <div className="mt-10">
            <ComparisonTable
              labelledBy="compare-heading"
              headers={[
                { label: COMPARISON.headers[0] },
                { label: COMPARISON.headers[1], dot: "#D9CDE3" },
                { label: COMPARISON.headers[2], dot: "#AF00E8" },
                { label: COMPARISON.headers[3], dot: "#E3A600" },
              ]}
              rows={COMPARISON.rows}
              minWidth="min-w-[860px]"
            />
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <CheckCard title="Choose a web application when…" items={COMPARISON.webWhen} tone="purple" />
            <CheckCard title="A website or desktop software may fit better when…" items={COMPARISON.otherWhen} tone="sun" />
          </div>
        </div>
      </section>

      {/* ───────────── Why choose ───────────── */}
      <section aria-labelledby="why-heading" className="relative overflow-hidden bg-[#0d0a12] py-16 text-white lg:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-[#AF00E8]/25 blur-3xl" />
        <div className={`${WRAP} relative`}>
          <div className="max-w-3xl">
            <SectionHeading id="why-heading" eyebrow="Why ClickMasters" dark>Choosing a Web App Development Company UK Businesses Can Rely On</SectionHeading>
          </div>
          <div className="mt-12">
            <IconCardGrid items={withIcons(WHY)} dark />
          </div>
        </div>
      </section>

      {/* ───────────── Cost ───────────── */}
      <section aria-labelledby="cost-heading" className="bg-white py-16 lg:py-24">
        <div className={WRAP}>
          <div className="max-w-3xl">
            <SectionHeading id="cost-heading" eyebrow="Pricing, explained">Web Application Development Cost in the UK</SectionHeading>
            <p className={`mt-5 ${P}`}>{COST.intro}</p>
          </div>
          <div className="mt-12">
            <IconCardGrid items={withIcons(COST.factors)} compact />
          </div>
          <p className="mt-10 max-w-4xl rounded-2xl bg-gradient-to-br from-[#faf5fd] to-[#f1fbf9] p-6 text-[15px] leading-relaxed text-gray-700 ring-1 ring-[#AF00E8]/10">
            {COST.outro}
          </p>
        </div>
      </section>

      <FaqSection
        title="Web Application Development: Frequently Asked Questions"
        intro="Cost, timelines, technology, security and support, answered plainly."
        faqs={FAQS}
      />

      <FinalCta
        title={FINAL_CTA.title}
        titleAccent={FINAL_CTA.titleAccent}
        body={FINAL_CTA.body}
        bring={FINAL_CTA.bring}
        primaryCta={{ label: "Discuss Your Web Application Project", href: "/contact" }}
        secondaryCta={{ label: "Explore Our Services", href: "/services" }}
      />
    </>
  );
}
