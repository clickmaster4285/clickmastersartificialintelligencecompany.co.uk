// /services/mvp-saas-development
// Content: ./content.ts (from the MVP & SaaS SEO pack). Fully server-rendered.
// This real folder takes precedence over the app/services/[slug] placeholder route.
import Image from "next/image";
import {
  RiAppsLine, RiApps2Line, RiArrowUpDownLine, RiBankCardLine, RiBarChart2Line, RiBox3Line, RiBriefcase4Line,
  RiBugLine, RiBuilding2Line, RiCalendarLine, RiChat3Line, RiCloseCircleLine, RiCodeBoxLine, RiDashboardLine,
  RiDashboard3Line, RiFileList3Line, RiFileShield2Line, RiGraduationCapLine, RiHeartPulseLine, RiHome4Line,
  RiKeyLine, RiLightbulbLine, RiLineChartLine, RiListCheck2, RiLockLine, RiLoopLeftLine, RiMoneyPoundCircleLine,
  RiNodeTree, RiPaletteLine, RiPlugLine, RiPriceTag3Line, RiPulseLine, RiRefreshLine, RiRestartLine,
  RiRocket2Line, RiSave3Line, RiScales3Line, RiServerLine, RiSettings4Line, RiShieldCheckLine,
  RiShoppingCart2Line, RiSpeedLine, RiTeamLine, RiTimerLine, RiToolsLine, RiTruckLine, RiUserSettingsLine,
} from "react-icons/ri";

import JsonLd from "../../Components/JsonLd";
import TechLogoGroups from "../../Components/TechLogoGroups";
import { IconTile, SectionHeading, WRAP } from "../../Components/ServicePageUI";
import {
  ComparisonTable, FaqSection, FinalCta, IconCardGrid, IndustryGrid, Linked, ProcessGrid, ServiceCards, ServiceHero,
  faqPageJsonLd,
} from "../../Components/ServicePageSections";
import { detailPageJsonLd, detailPageMetadata } from "../../lib/site";
import {
  ARCH_INTRO, ARCH_LAYERS, AVOID, BILLING, BILLING_INTRO, COMPARISON, COMPARISON_INTRO, COST, EVOLUTION, EXAMPLES,
  FAQS, FINAL_CTA, HERO, IMAGES, INDUSTRIES, INDUSTRIES_INTRO, MVP_SERVICES, MVP_SERVICES_INTRO, PATH, PHASES,
  PROCESS, PROCESS_INTRO, SAAS_SERVICES, SAAS_SERVICES_INTRO, SCALE, SCALE_INTRO, SCHEMA_SERVICE, SECURITY,
  SECURITY_INTRO, SEO, STACK, STACK_FIT, STACK_INTRO, TENANCY, WHAT_IS, WHY,
} from "./content";

export const metadata = detailPageMetadata({ path: PATH, ...SEO });

const CRUMBS = [
  { name: "Services", path: "/services" },
  { name: "MVP & SaaS Development", path: PATH },
];

// All icons are decorative (headings carry the meaning).
const ICONS = {
  rocket: RiRocket2Line, code: RiCodeBoxLine, saas: RiAppsLine, discovery: RiLightbulbLine, design: RiPaletteLine,
  backend: RiServerLine, test: RiBugLine, loop: RiLoopLeftLine, apps: RiApps2Line, tenants: RiBuilding2Line,
  server: RiServerLine, refresh: RiRefreshLine, billing: RiBankCardLine, users: RiUserSettingsLine, api: RiPlugLine,
  dashboard: RiDashboardLine, shield: RiShieldCheckLine, scale: RiLineChartLine, plans: RiPriceTag3Line,
  calendar: RiCalendarLine, upgrade: RiArrowUpDownLine, cancel: RiCloseCircleLine, timer: RiTimerLine,
  invoice: RiFileList3Line, retry: RiRestartLine, meter: RiDashboard3Line, key: RiKeyLine, roles: RiUserSettingsLine,
  lock: RiLockLine, backup: RiSave3Line, pulse: RiPulseLine, deps: RiBox3Line, privacy: RiFileShield2Line,
  feedback: RiChat3Line, list: RiListCheck2, debt: RiScales3Line, arch: RiNodeTree, speed: RiSpeedLine,
  chart: RiBarChart2Line, tools: RiToolsLine, health: RiHeartPulseLine, finance: RiMoneyPoundCircleLine,
  ecommerce: RiShoppingCart2Line, education: RiGraduationCapLine, property: RiHome4Line, logistics: RiTruckLine,
  briefcase: RiBriefcase4Line, ops: RiSettings4Line, team: RiTeamLine,
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

/** A content-pack diagram (PNG in /public) inside a card, with its descriptive alt text. */
function Diagram({ image, caption, className = "", sizes = "(min-width: 1280px) 1216px, 100vw", priority = false }) {
  return (
    <figure className={className}>
      <Image
        src={image.src}
        width={image.width}
        height={image.height}
        alt={image.alt}
        sizes={sizes}
        priority={priority}
        className="h-auto w-full"
      />
      {caption && <figcaption className="mt-4 text-center text-xs text-gray-500">{caption}</figcaption>}
    </figure>
  );
}

const P = "text-[15px] leading-relaxed text-gray-600 lg:text-base";
const CARD_FIGURE = "rounded-3xl border border-gray-100 bg-white p-4 shadow-[0_20px_60px_-30px_rgba(60,0,90,0.35)] sm:p-8";

export default function MvpSaasDevelopment() {
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
        primaryCta={{ label: "Discuss Your MVP or SaaS Project", href: "/contact" }}
        secondaryCta={{ label: "Explore Our Development Services", href: "/services" }}
        stats={HERO.stats}
        figureLabel="From idea to scalable SaaS"
        figure={
          <Image
            src={IMAGES.journey.src}
            width={IMAGES.journey.width}
            height={IMAGES.journey.height}
            alt={IMAGES.journey.alt}
            sizes="(min-width: 1024px) 560px, 100vw"
            priority
            className="h-auto w-full"
          />
        }
        figcaption="Each step is driven by evidence from real users."
      />

      {/* ───────────── What MVP and SaaS mean ───────────── */}
      <section aria-labelledby="what-heading" className="bg-white py-16 lg:py-24">
        <div className={WRAP}>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <SectionHeading id="what-heading" eyebrow="The basics">What MVP and SaaS Development Mean, and How They Fit Together</SectionHeading>
            <div className="space-y-5">
              <p className={P}><Rich text={WHAT_IS.p1} /></p>
              <p className={P}><Rich text={WHAT_IS.p2} /></p>
              <p className={P}><Linked value={WHAT_IS.p3} /></p>
            </div>
          </div>

          <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PHASES.map((ph, i) => (
              <li key={ph.title} className="relative rounded-2xl border border-gray-100 bg-[#faf9f7] p-6">
                <span aria-hidden="true" className="text-[34px] font-bold leading-none text-transparent [-webkit-text-stroke:1.5px_#AF00E8]" style={{ fontFamily: "Garamond, serif" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-lg font-bold text-[#1a1a1a]">{ph.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-gray-600">{ph.text}</p>
              </li>
            ))}
          </ol>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {EXAMPLES.map((ex) => (
              <div key={ex.title} className="rounded-2xl bg-gradient-to-br from-[#faf5fd] to-[#f1fbf9] p-6 ring-1 ring-[#AF00E8]/10 sm:p-8">
                <h3 className="text-xl font-bold text-[#1a1a1a]" style={{ fontFamily: "Garamond, serif" }}>{ex.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-700">{ex.text}</p>
                <p className="mt-4 rounded-lg bg-white px-3.5 py-2.5 text-sm leading-relaxed text-gray-700 ring-1 ring-gray-100">
                  <span className="font-semibold text-[#AF00E8]">What it tests: </span>{ex.tests}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── MVP services ───────────── */}
      <ServiceCards
        headingId="mvp-services-heading"
        eyebrow="Idea to evidence"
        title="Our MVP Development Services"
        intro={MVP_SERVICES_INTRO}
        services={withIcons(MVP_SERVICES)}
      />

      {/* ───────────── SaaS services ───────────── */}
      <ServiceCards
        headingId="saas-services-heading"
        eyebrow="Built to scale"
        title="Our SaaS Development Services"
        intro={<Linked value={SAAS_SERVICES_INTRO} />}
        services={withIcons(SAAS_SERVICES)}
      />

      {/* ───────────── Process + prioritisation matrix ───────────── */}
      <ProcessGrid
        eyebrow="10 stages, two-week sprints"
        title="Our MVP Development Process"
        intro={PROCESS_INTRO}
        columns="md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
        checkLabel="Decision"
        steps={PROCESS.map((s) => ({
          title: s.title,
          rows: [{ label: "Activities", text: s.activities }, { label: "Deliverable", text: s.deliverable }],
          risk: s.decision,
        }))}
        after={
          <Diagram
            image={IMAGES.matrix}
            className={`mt-12 ${CARD_FIGURE}`}
            caption="Feature prioritisation (stage 4): value against effort decides what goes on the “now” list."
          />
        }
      />

      {/* ───────────── Architecture ───────────── */}
      <section aria-labelledby="arch-heading" className="border-y border-[#9b1fe0]/10 bg-[#faf9f7] py-16 lg:py-24">
        <div className={WRAP}>
          <div className="max-w-3xl">
            <SectionHeading id="arch-heading" eyebrow="Tenancy, identity, billing">SaaS Product Architecture Explained</SectionHeading>
            <p className={`mt-5 ${P}`}>{ARCH_INTRO}</p>
          </div>
          <Diagram image={IMAGES.tenancy} className={`mt-10 ${CARD_FIGURE}`} />
          <div className="mt-8">
            <ComparisonTable
              labelledBy="arch-heading"
              headers={[
                { label: TENANCY.headers[0] },
                { label: TENANCY.headers[1], dot: "#5EEAD4" },
                { label: TENANCY.headers[2], dot: "#E3A600" },
                { label: TENANCY.headers[3], dot: "#AF00E8" },
              ]}
              rows={TENANCY.rows}
              minWidth="min-w-[860px]"
            />
          </div>

          <h3 className="mt-16 text-2xl font-bold text-[#1a1a1a] lg:text-3xl" style={{ fontFamily: "Garamond, serif" }}>
            A realistic SaaS architecture example
          </h3>
          <Diagram image={IMAGES.architecture} className={`mt-6 ${CARD_FIGURE}`} />

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {ARCH_LAYERS.map((layer) => (
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
        </div>
      </section>

      {/* ───────────── Billing ───────────── */}
      <section aria-labelledby="billing-heading" className="bg-white py-16 lg:py-24">
        <div className={WRAP}>
          <div className="max-w-3xl">
            <SectionHeading id="billing-heading" eyebrow="Revenue, handled">SaaS Subscription and Billing Functionality</SectionHeading>
            <p className={`mt-5 ${P}`}>{BILLING_INTRO}</p>
          </div>
          <Diagram image={IMAGES.billing} className={`mt-10 ${CARD_FIGURE}`} />
          <div className="mt-10">
            <IconCardGrid items={withIcons(BILLING)} compact />
          </div>
        </div>
      </section>

      {/* ───────────── Technology stack ───────────── */}
      <section aria-labelledby="stack-heading" className="border-y border-[#9b1fe0]/10 bg-[#faf9f7] py-16 lg:py-24">
        <div className={WRAP}>
          <div className="max-w-3xl">
            <SectionHeading id="stack-heading" eyebrow="Ship fast, grow safely">Technology Stack for MVP and SaaS Products</SectionHeading>
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
              minWidth="min-w-[760px]"
            />
          </div>
        </div>
      </section>

      {/* ───────────── Security ───────────── */}
      <section aria-labelledby="security-heading" className="relative overflow-hidden bg-[#0d0a12] py-16 text-white lg:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-[#AF00E8]/20 blur-3xl" />
        <div className={`${WRAP} relative`}>
          <div className="max-w-3xl">
            <SectionHeading id="security-heading" eyebrow="OWASP-led, GDPR-aware" dark>SaaS Security and Data Protection</SectionHeading>
            <p className="mt-5 text-[15px] leading-relaxed text-gray-300 lg:text-base">{SECURITY_INTRO}</p>
          </div>
          <div className="mt-12">
            <IconCardGrid items={withIcons(SECURITY)} dark columns="sm:grid-cols-2 lg:grid-cols-3" compact />
          </div>
        </div>
      </section>

      {/* ───────────── MVP to scalable SaaS ───────────── */}
      <section aria-labelledby="scale-heading" className="bg-white py-16 lg:py-24">
        <div className={WRAP}>
          <div className="max-w-3xl">
            <SectionHeading id="scale-heading" eyebrow="Grow on evidence">From MVP to a Scalable SaaS Product</SectionHeading>
            <p className={`mt-5 ${P}`}><Linked value={SCALE_INTRO} /></p>
          </div>
          <div className="mt-12">
            <IconCardGrid items={withIcons(SCALE)} compact />
          </div>

          <ol className="relative mt-12 grid gap-5 lg:grid-cols-3">
            {EVOLUTION.map((ev, i) => (
              <li key={ev.title} className="rounded-2xl border border-gray-100 bg-[#faf9f7] p-6">
                <span className="inline-flex rounded-full bg-[#AF00E8] px-3 py-1 text-xs font-semibold text-white">Stage {i + 1}</span>
                <h3 className="mt-3 text-lg font-bold text-[#1a1a1a]">{ev.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{ev.text}</p>
                <p className="mt-4 rounded-lg bg-white px-3.5 py-2.5 text-sm text-gray-700 ring-1 ring-gray-100">
                  <span className="font-semibold text-[#0F9F94]">{ev.label}: </span>{ev.note}
                </p>
              </li>
            ))}
          </ol>

          <div className="mt-6 rounded-2xl bg-[#fffaeb] p-6 ring-1 ring-[#E3A600]/25 sm:p-8">
            <h3 className="text-lg font-bold text-[#1a1a1a]">{AVOID.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-700">{AVOID.text}</p>
            <p className="mt-2 text-sm leading-relaxed text-gray-700"><span className="font-semibold text-[#B58300]">Why: </span>{AVOID.why}</p>
          </div>
        </div>
      </section>

      {/* ───────────── Industries ───────────── */}
      <IndustryGrid
        eyebrow="Illustrative product ideas"
        title="SaaS Product Opportunities by Industry"
        intro={INDUSTRIES_INTRO}
        items={withIcons(INDUSTRIES)}
      />

      {/* ───────────── MVP vs SaaS vs traditional ───────────── */}
      <section aria-labelledby="compare-heading" className="border-b border-[#9b1fe0]/10 bg-[#faf9f7] py-16 lg:py-24">
        <div className={WRAP}>
          <div className="max-w-3xl">
            <SectionHeading id="compare-heading" eyebrow="Which is which?">MVP vs SaaS vs Traditional Software</SectionHeading>
            <p className={`mt-5 ${P}`}>{COMPARISON_INTRO}</p>
          </div>
          <div className="mt-10">
            <ComparisonTable
              labelledBy="compare-heading"
              headers={[
                { label: COMPARISON.headers[0] },
                { label: COMPARISON.headers[1], dot: "#AF00E8" },
                { label: COMPARISON.headers[2], dot: "#5EEAD4" },
                { label: COMPARISON.headers[3], dot: "#E3A600" },
              ]}
              rows={COMPARISON.rows}
              minWidth="min-w-[860px]"
            />
          </div>
        </div>
      </section>

      {/* ───────────── Why choose ───────────── */}
      <section aria-labelledby="why-heading" className="relative overflow-hidden bg-[#0d0a12] py-16 text-white lg:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-[#AF00E8]/25 blur-3xl" />
        <div className={`${WRAP} relative`}>
          <div className="max-w-3xl">
            <SectionHeading id="why-heading" eyebrow="Why ClickMasters" dark>Why Choose ClickMasters as Your MVP and SaaS Development Company?</SectionHeading>
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
            <SectionHeading id="cost-heading" eyebrow="Pricing, explained">MVP and SaaS Development Cost in the UK</SectionHeading>
            <p className={`mt-5 ${P}`}>{COST.intro}</p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {[
              { title: "What drives MVP cost", items: COST.mvp, tone: "bg-[#faf5fd] ring-[#AF00E8]/15", dot: "bg-[#AF00E8]" },
              { title: "What drives SaaS cost", items: COST.saas, tone: "bg-[#f1fbf9] ring-[#0F9F94]/20", dot: "bg-[#0F9F94]" },
            ].map((card) => (
              <div key={card.title} className={`rounded-2xl p-6 ring-1 sm:p-8 ${card.tone}`}>
                <h3 className="text-xl font-bold text-[#1a1a1a]" style={{ fontFamily: "Garamond, serif" }}>{card.title}</h3>
                <ul className="mt-4 space-y-2.5">
                  {card.items.map(([term, text]) => (
                    <li key={term} className="flex gap-2.5 text-sm leading-relaxed text-gray-700">
                      <span aria-hidden="true" className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${card.dot}`} />
                      <span><strong className="font-semibold text-[#1a1a1a]">{term}</strong> {text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FaqSection
        title="MVP and SaaS Development: Frequently Asked Questions"
        intro="Cost, timelines, features, architecture, billing and security, answered plainly."
        faqs={FAQS}
      />

      <FinalCta
        title={FINAL_CTA.title}
        titleAccent={FINAL_CTA.titleAccent}
        body={FINAL_CTA.body}
        bring={FINAL_CTA.bring}
        primaryCta={{ label: "Discuss Your MVP or SaaS Project", href: "/contact" }}
        secondaryCta={{ label: "Explore Our Development Services", href: "/services" }}
      />
    </>
  );
}
