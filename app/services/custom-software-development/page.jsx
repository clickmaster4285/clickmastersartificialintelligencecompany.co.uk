// /services/custom-software-development
// Content: ./content.ts (from the Custom Software SEO pack). Fully server-rendered.
// This real folder takes precedence over the app/services/[slug] placeholder route.
import {
  RiAppsLine, RiArchiveStackLine, RiBankLine, RiBookOpenLine, RiBuilding2Line, RiBuilding4Line, RiBugLine,
  RiCheckLine, RiCodeSSlashLine, RiContactsBook2Line, RiDatabase2Line, RiFileList3Line, RiFlowChart,
  RiGlobalLine, RiGraduationCapLine, RiHeartPulseLine, RiHistoryLine, RiHome4Line, RiInstanceLine,
  RiLineChartLine, RiListCheck, RiLoopLeftLine, RiMoneyPoundCircleLine, RiNodeTree, RiPaletteLine, RiPlugLine,
  RiPriceTag3Line, RiSettings3Line, RiShieldKeyholeLine, RiShoppingCart2Line, RiStackLine, RiTimeLine,
  RiToolsLine, RiTruckLine, RiUserSearchLine,
} from "../../Components/icons";

import JsonLd from "../../Components/JsonLd";
import ScopingCallBlock from "../../Components/ScopingCallBlock";
import TechLogoGroups from "../../Components/TechLogoGroups";
import { IconTile, SectionHeading, WRAP } from "../../Components/ServicePageUI";
import {
  CheckCard, ComparisonTable, FaqSection, FinalCta, IconCardGrid, IndustryGrid, Linked, ON_DARK_LINK, ProcessGrid,
  ServiceCards, ServiceHero, faqPageJsonLd,
} from "../../Components/ServicePageSections";
import { detailPageJsonLd, detailPageMetadata } from "../../lib/site";
import {
  CustomArchitectureDiagram, DecisionDiagram, DecisionDiagramVertical, LegacyPhasesDiagram,
  LegacyPhasesDiagramVertical, TcoChart, TCO_COLORS,
} from "./Diagrams";
import {
  COMPARISON, COST, FAQS, FINAL_CTA, HERO, INDUSTRIES, INDUSTRIES_INTRO, PATH, PROCESS, PROCESS_INTRO,
  SCHEMA_SERVICE, SEO, SERVICES, SERVICES_INTRO, STACK_CRITERIA, TECH, TECH_INTRO, WHAT_IS, WHY,
} from "./content";

export const metadata = detailPageMetadata({ path: PATH, ...SEO });

const CRUMBS = [
  { name: "Services", path: "/services" },
  { name: "Custom Software Development", path: PATH },
];

// All icons are decorative (headings carry the meaning).
const ICONS = {
  enterprise: RiBuilding4Line, web: RiGlobalLine, saas: RiAppsLine, crm: RiContactsBook2Line,
  erp: RiStackLine, automation: RiFlowChart, api: RiPlugLine, database: RiDatabase2Line,
  legacy: RiHistoryLine, maintenance: RiToolsLine,
  box: RiArchiveStackLine, training: RiGraduationCapLine, property: RiHome4Line,
  health: RiHeartPulseLine, finance: RiBankLine, ecommerce: RiShoppingCart2Line, edtech: RiBookOpenLine,
  realestate: RiBuilding2Line, logistics: RiTruckLine, saasind: RiInstanceLine, manufacturing: RiSettings3Line,
  maintain: RiUserSearchLine, fit: RiCodeSSlashLine, scale: RiLineChartLine, security: RiShieldKeyholeLine,
  cost: RiMoneyPoundCircleLine, requirements: RiFileList3Line, fullstack: RiStackLine, agile: RiLoopLeftLine,
  commercial: RiPriceTag3Line, complexity: RiNodeTree, features: RiListCheck, design: RiPaletteLine,
  architecture: RiBuilding2Line, testing: RiBugLine, fixed: RiPriceTag3Line, tm: RiTimeLine,
};
const withIcons = (items) => items.map((it) => ({ ...it, icon: ICONS[it.icon] }));

const LEGACY_FIGURE = (
  <figure className="border-t border-gray-100 bg-[#fcfaff] p-6 sm:p-8">
    <LegacyPhasesDiagram className="hidden h-auto w-full sm:block" />
    <LegacyPhasesDiagramVertical className="mx-auto h-auto w-full max-w-[340px] sm:hidden" />
    <figcaption className="mt-4 text-xs text-gray-500">
      A routing layer lets new modules take over one function at a time while the legacy system keeps running.
    </figcaption>
  </figure>
);

const P = "text-[15px] leading-relaxed text-gray-600 lg:text-base";

export default function CustomSoftwareDevelopment() {
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
        title={HERO.h1}
        titleAccent={HERO.h1Accent}
        lead={HERO.lead}
        audience={HERO.audience}
        primaryCta={{ label: "Discuss Your Project", href: "/contact" }}
        secondaryCta={{ label: "Explore Our Solutions", href: "/solutions" }}
        stats={HERO.stats}
        figureLabel="One system, built around you"
        figure={<CustomArchitectureDiagram className="h-auto w-full" />}
        figcaption="Every channel talks to one secure API layer, shared business modules and a single source of truth."
      />

      <ScopingCallBlock path={PATH} service="custom software development" />

      {/* ───────────── What is custom software ───────────── */}
      <section aria-labelledby="what-heading" className="bg-white py-16 lg:py-24">
        <div className={WRAP}>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeading id="what-heading" eyebrow="The basics">What Is Custom Software Development?</SectionHeading>
              {WHAT_IS.paragraphs.map((p) => <p key={p.slice(0, 24)} className={`mt-5 ${P}`}>{p}</p>)}
            </div>
            <div className="rounded-3xl bg-gradient-to-br from-[#faf5fd] to-[#f2fbf9] p-6 ring-1 ring-[#AF00E8]/10 sm:p-8">
              <h3 className="text-xl font-bold text-[#1a1a1a] lg:text-2xl" style={{ fontFamily: "Garamond, serif" }}>{WHAT_IS.whenTitle}</h3>
              <ul className="mt-5 space-y-3">
                {WHAT_IS.when.map((w) => (
                  <li key={w} className="flex gap-3 text-[15px] leading-relaxed text-gray-700">
                    <span aria-hidden="true" className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#AF00E8] text-white">
                      <RiCheckLine className="h-4 w-4" />
                    </span>
                    {w}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="mt-14 text-xs font-bold uppercase tracking-[0.16em] text-[#7a1fa2]">Example scenarios</p>
          <ul className="mt-5 grid gap-5 md:grid-cols-3">
            {WHAT_IS.scenarios.map((s) => (
              <li key={s.title} className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-[#faf9f7] p-6 transition-shadow hover:shadow-lg hover:shadow-[#AF00E8]/5">
                <div aria-hidden="true" className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#AF00E8]/5 transition-transform group-hover:scale-125" />
                <IconTile icon={ICONS[s.icon]} />
                <p className="mt-4 text-lg font-bold text-[#1a1a1a]">{s.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{s.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ServiceCards
        eyebrow="10 capabilities"
        title="Our Custom and Bespoke Software Development Services"
        intro={<Linked value={SERVICES_INTRO} />}
        services={SERVICES.map((s) => ({ ...s, icon: ICONS[s.icon], figure: s.diagram === "legacy" ? LEGACY_FIGURE : null }))}
      />

      <IndustryGrid
        eyebrow="Sector-aware architecture"
        title="Bespoke Software Development UK: The Industries We Support"
        intro={<Linked value={INDUSTRIES_INTRO} className={ON_DARK_LINK} />}
        items={withIcons(INDUSTRIES)}
      />

      <ProcessGrid
        eyebrow="9 stages, risk reduced at each"
        title="Our Software Development Process"
        intro={PROCESS_INTRO}
        steps={PROCESS.map((s) => ({
          title: s.title,
          rows: [{ label: "What happens", text: s.what }, { label: "Deliverables", text: s.deliverables }],
          risk: s.risk,
        }))}
      />

      {/* ───────────── Technologies ───────────── */}
      <section aria-labelledby="tech-heading" className="border-y border-[#9b1fe0]/10 bg-[#faf9f7] py-16 lg:py-24">
        <div className={WRAP}>
          <div className="max-w-3xl">
            <SectionHeading id="tech-heading" eyebrow="Proven stacks">Technologies and Development Expertise</SectionHeading>
            <p className={`mt-5 ${P}`}>{TECH_INTRO}</p>
          </div>
          <div className="mt-12"><TechLogoGroups groups={TECH} /></div>
          <div className="mt-14 rounded-3xl bg-[#0d0a12] p-6 text-white sm:p-10">
            <h3 className="text-2xl font-bold lg:text-3xl" style={{ fontFamily: "Garamond, serif" }}>How we choose a stack</h3>
            <dl className="mt-8 grid gap-x-10 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
              {STACK_CRITERIA.map((c) => (
                <div key={c.title} className="flex gap-4">
                  <IconTile icon={ICONS[c.icon]} dark size="sm" />
                  <div>
                    <dt className="font-semibold">{c.title}</dt>
                    <dd className="mt-1.5 text-sm leading-relaxed text-gray-300">{c.text}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ───────────── Custom vs off-the-shelf ───────────── */}
      <section aria-labelledby="compare-heading" className="bg-white py-16 lg:py-24">
        <div className={WRAP}>
          <div className="max-w-3xl">
            <SectionHeading id="compare-heading" eyebrow="Build or buy?">Custom Software vs Off-the-Shelf Software</SectionHeading>
            <p className={`mt-5 ${P}`}>{COMPARISON.intro}</p>
          </div>
          <div className="mt-10">
            <ComparisonTable
              labelledBy="compare-heading"
              headers={[{ label: "Factor" }, { label: "Custom software", dot: "#AF00E8" }, { label: "Off-the-shelf software", dot: "#E3A600" }]}
              rows={COMPARISON.rows}
            />
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <CheckCard title="Custom software makes sense when…" items={COMPARISON.customWhen} tone="purple" />
            <CheckCard title="Off-the-shelf makes sense when…" items={COMPARISON.shelfWhen} tone="sun" />
          </div>
          <figure className="mt-10 rounded-3xl border border-gray-100 bg-[#fcfaff] p-6 sm:p-8">
            <DecisionDiagram className="hidden h-auto w-full md:block" />
            <DecisionDiagramVertical className="mx-auto h-auto w-full max-w-[340px] md:hidden" />
            <figcaption className="mt-4 text-xs text-gray-500">
              The hybrid route keeps a proven product for standard functions and builds only the part that makes your process different.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ───────────── Why choose ───────────── */}
      <section aria-labelledby="why-heading" className="relative overflow-hidden bg-[#0d0a12] py-16 text-white lg:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-[#AF00E8]/25 blur-3xl" />
        <div className={`${WRAP} relative`}>
          <div className="max-w-3xl">
            <SectionHeading id="why-heading" eyebrow="Why ClickMasters" dark>Choosing a Custom Software Development Company UK Businesses Can Rely On</SectionHeading>
          </div>
          <div className="mt-12"><IconCardGrid items={withIcons(WHY)} dark /></div>
        </div>
      </section>

      {/* ───────────── Cost ───────────── */}
      <section aria-labelledby="cost-heading" className="bg-white py-16 lg:py-24">
        <div className={WRAP}>
          <div className="max-w-3xl">
            <SectionHeading id="cost-heading" eyebrow="Pricing, explained">How Much Does Custom Software Development Cost?</SectionHeading>
            <p className={`mt-5 ${P}`}>{COST.intro}</p>
          </div>
          <div className="mt-12"><IconCardGrid items={withIcons(COST.factors)} compact /></div>

          <div className="mt-12 grid gap-8 rounded-3xl bg-gradient-to-br from-[#faf5fd] to-[#fffaeb] p-6 ring-1 ring-[#AF00E8]/10 sm:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <h3 className="text-2xl font-bold text-[#1a1a1a] lg:text-3xl" style={{ fontFamily: "Garamond, serif" }}>{COST.tcoTitle}</h3>
              <p className="mt-4 text-[15px] leading-relaxed text-gray-700">{COST.tco}</p>
            </div>
            <figure className="rounded-2xl bg-white p-5 shadow-sm">
              <figcaption className="flex flex-wrap items-center justify-between gap-3">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-500">Illustrative cost profile · not to scale</span>
                <span className="flex flex-wrap gap-4 text-xs text-gray-700">
                  <span className="inline-flex items-center gap-1.5"><span aria-hidden="true" className="h-3 w-3 rounded" style={{ background: TCO_COLORS.custom }} />Custom: build, then support</span>
                  <span className="inline-flex items-center gap-1.5"><span aria-hidden="true" className="h-3 w-3 rounded" style={{ background: TCO_COLORS.shelf }} />Off-the-shelf: licences + workarounds</span>
                </span>
              </figcaption>
              <TcoChart className="mt-3 h-auto w-full" />
            </figure>
          </div>

          <div className="mt-8"><IconCardGrid items={withIcons(COST.models)} columns="md:grid-cols-2" compact /></div>
        </div>
      </section>

      <FaqSection
        title="Custom Software Development: Frequently Asked Questions"
        intro="Cost, timelines, ownership, integration and support, answered plainly."
        faqs={FAQS}
      />

      <FinalCta
        title={FINAL_CTA.title}
        titleAccent={FINAL_CTA.titleAccent}
        body={FINAL_CTA.body}
        bring={FINAL_CTA.bring}
        primaryCta={{ label: "Discuss Your Project", href: "/contact" }}
        secondaryCta={{ label: "Explore Our Solutions", href: "/solutions" }}
      />
    </>
  );
}
