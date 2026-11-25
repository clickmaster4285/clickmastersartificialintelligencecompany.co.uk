// /solutions/inventory-management
// Content: ./content.ts (from the Inventory Management SEO pack). Fully server-rendered.
// This real folder takes precedence over the app/solutions/[slug] placeholder route.
import Image from "next/image";
import {
  RiAlarmWarningLine, RiArchiveStackLine, RiBarcodeLine, RiCheckLine, RiCloudLine, RiCustomerService2Line, RiEyeLine,
  RiFileList3Line, RiHandHeartLine, RiHistoryLine, RiLineChartLine, RiListCheck3, RiLockLine, RiMoneyPoundCircleLine,
  RiPlugLine, RiQuestionAnswerLine, RiShieldCheckLine, RiShieldUserLine, RiShoppingCart2Line, RiSpeedLine,
  RiStackLine, RiTeamLine, RiTimerLine, RiTruckLine,
} from "react-icons/ri";

import JsonLd from "../../Components/JsonLd";
import { SectionHeading, WRAP } from "../../Components/ServicePageUI";
import {
  CheckCard, ComparisonTable, FaqSection, FinalCta, IconCardGrid, Linked, ON_DARK_LINK, ProcessGrid, ServiceHero,
  faqPageJsonLd,
} from "../../Components/ServicePageSections";
import { detailPageJsonLd, detailPageMetadata } from "../../lib/site";
import {
  BUSINESS_TYPES, CAPABILITIES, CAPABILITIES_INTRO, ERP, FAQS, FINAL_CTA, FORECASTING, HERO, IMAGES, INTEGRATIONS,
  OUTCOMES, PARTNER, PATH, PRACTICE, PROCESS, PROCESS_OUTRO, ROUTES, SCHEMA_SERVICE, SECURITY, SEO, SIGNS,
  WAREHOUSE, WHAT_IS,
} from "./content";

export const metadata = detailPageMetadata({ path: PATH, ...SEO });

const CRUMBS = [
  { name: "Solutions", path: "/solutions" },
  { name: "Inventory Management", path: PATH },
];

// All icons are decorative (headings carry the meaning).
const ICONS = {
  ledger: RiHistoryLine, barcode: RiBarcodeLine, alert: RiAlarmWarningLine, truck: RiTruckLine, count: RiListCheck3,
  pound: RiMoneyPoundCircleLine, cart: RiShoppingCart2Line, stack: RiStackLine, lock: RiLockLine, audit: RiFileList3Line,
  shield: RiShieldCheckLine, speed: RiSpeedLine, scale: RiLineChartLine, cloud: RiCloudLine, eye: RiEyeLine,
  admin: RiTimerLine, honest: RiHandHeartLine, team: RiTeamLine, plug: RiPlugLine, demo: RiShieldUserLine,
  support: RiCustomerService2Line, archive: RiArchiveStackLine,
};
const withIcons = (items) => items.map((it) => ({ ...it, icon: ICONS[it.icon] }));

/** Renders **bold** markers from the content file. */
function Rich({ text }) {
  return text.split(/(\*\*[^*]+\*\*)/).map((part, i) =>
    part.startsWith("**") ? <strong key={i} className="font-semibold text-[#1a1a1a]">{part.slice(2, -2)}</strong> : part
  );
}

/** A diagram drawn for this page (PNG in /public), in a card with its alt text. */
function Diagram({ image, caption, className = "" }) {
  return (
    <figure className={`rounded-3xl border border-gray-100 bg-white p-4 shadow-[0_20px_60px_-30px_rgba(60,0,90,0.35)] sm:p-8 ${className}`}>
      <Image src={image.src} width={image.width} height={image.height} alt={image.alt} sizes="(min-width: 1280px) 1216px, 100vw" className="h-auto w-full" />
      {caption && <figcaption className="mt-4 text-center text-xs text-gray-500">{caption}</figcaption>}
    </figure>
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

function TermList({ items }) {
  return (
    <ul className="mt-4 space-y-2.5">
      {items.map(([term, text]) => (
        <li key={term} className="flex gap-2.5 text-[15px] leading-relaxed text-gray-700">
          <RiCheckLine aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-[#AF00E8]" />
          <span><strong className="font-semibold text-[#1a1a1a]">{term}</strong> {text}</span>
        </li>
      ))}
    </ul>
  );
}

const TAG = {
  Foundation: "bg-[#f1fbf9] text-[#0F9F94] ring-[#0F9F94]/25",
  "Built to requirement": "bg-[#fffaeb] text-[#8a6400] ring-[#E3A600]/30",
};

const P = "text-[15px] leading-relaxed text-gray-600 lg:text-base";
const SERIF = { fontFamily: "Garamond, serif" };

export default function InventoryManagement() {
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
        primaryCta={{ label: "Discuss Your Inventory Requirements", href: "/contact" }}
        secondaryCta={{ label: "Compare Your Options", href: "#options" }}
        stats={HERO.stats}
        figureLabel="How stock moves"
        figure={
          <Image
            src={IMAGES.flow.src}
            width={IMAGES.flow.width}
            height={IMAGES.flow.height}
            alt={IMAGES.flow.alt}
            sizes="(min-width: 1024px) 560px, 100vw"
            preload
            className="h-auto w-full"
          />
        }
        figcaption="Every movement updates one live stock record that the whole business reads from."
      />

      {/* ───────────── What it does ───────────── */}
      <section aria-labelledby="what-heading" className="bg-white py-16 lg:py-24">
        <div className={WRAP}>
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
            <div>
              <SectionHeading id="what-heading" eyebrow="The basics">What an Inventory Management System Does</SectionHeading>
              <p className={`mt-6 ${P}`}><Rich text={WHAT_IS.p1} /></p>
              <p className={`mt-5 ${P}`}>{WHAT_IS.p2}</p>
              <TermList items={WHAT_IS.statuses} />
              <p className={`mt-5 ${P}`}>{WHAT_IS.p3}</p>
            </div>
            <Photo image={IMAGES.racking} sizes="(min-width: 1280px) 540px, (min-width: 1024px) 42vw, 100vw" className="aspect-[4/3]" />
          </div>
          <Diagram image={IMAGES.statuses} className="mt-12" />

          <div className="mt-16 grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-start">
            <CheckCard title={SIGNS.title} items={SIGNS.items} tone="sun" />
            <p className={`self-center ${P}`}>{SIGNS.outro}</p>
          </div>
        </div>
      </section>

      {/* ───────────── Inventory vs ERP ───────────── */}
      <section aria-labelledby="erp-heading" className="border-y border-[#9b1fe0]/10 bg-[#faf9f7] py-16 lg:py-24">
        <div className={WRAP}>
          <div className="max-w-3xl">
            <SectionHeading id="erp-heading" eyebrow="Know the boundary">Inventory Software or ERP: Which Problem Are You Solving?</SectionHeading>
            <p className={`mt-5 ${P}`}>{ERP.intro}</p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-6 ring-1 ring-[#AF00E8]/15 sm:p-8">
              <p className="text-[15px] leading-relaxed text-gray-700"><Rich text={ERP.inventory} /></p>
            </div>
            <div className="rounded-2xl bg-white p-6 ring-1 ring-[#0F9F94]/20 sm:p-8">
              <p className="text-[15px] leading-relaxed text-gray-700">
                <strong className="font-semibold text-[#1a1a1a]">Choose ERP</strong> <Linked value={ERP.erp} />
              </p>
            </div>
          </div>
          <Diagram image={IMAGES.erp} className="mt-10" />
          <p className={`mt-8 max-w-4xl ${P}`}>{ERP.outro}</p>
        </div>
      </section>

      {/* ───────────── Routes ───────────── */}
      <section id="options" aria-labelledby="options-heading" className="scroll-mt-28 bg-white py-16 lg:py-24">
        <div className={WRAP}>
          <div className="max-w-3xl">
            <SectionHeading id="options-heading" eyebrow="Three honest routes">Ready-Made, Tailored or Custom Inventory Software</SectionHeading>
          </div>
          <div className="mt-10">
            <ComparisonTable
              labelledBy="options-heading"
              headers={[
                { label: "Route" },
                { label: ROUTES.headers[1], dot: "#0F6B5E" },
                { label: ROUTES.headers[2], dot: "#AF00E8" },
                { label: ROUTES.headers[3], dot: "#E3A600" },
              ]}
              rows={ROUTES.rows}
              minWidth="min-w-[900px]"
            />
          </div>
          <p className="mt-8 max-w-4xl rounded-2xl bg-gradient-to-br from-[#faf5fd] to-[#f1fbf9] p-6 text-[15px] leading-relaxed text-gray-700 ring-1 ring-[#AF00E8]/10">
            <Rich text={ROUTES.test} />
          </p>
        </div>
      </section>

      {/* ───────────── Capabilities ───────────── */}
      <section aria-labelledby="capabilities-heading" className="border-y border-[#9b1fe0]/10 bg-[#faf9f7] py-16 lg:py-24">
        <div className={WRAP}>
          <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:items-end">
            <SectionHeading id="capabilities-heading" eyebrow="14 capabilities">Core Inventory Management Capabilities</SectionHeading>
            <div>
              <p className="text-[15px] leading-relaxed text-gray-600">{CAPABILITIES_INTRO}</p>
              <p className="mt-3 flex flex-wrap gap-2 text-xs font-semibold">
                <span className={`rounded-full px-3 py-1 ring-1 ${TAG.Foundation}`}>Foundation</span>
                <span className={`rounded-full px-3 py-1 ring-1 ${TAG["Built to requirement"]}`}>Built to requirement</span>
              </p>
            </div>
          </div>
          <div className="mt-10 overflow-x-auto rounded-2xl border border-gray-100 bg-white shadow-sm" tabIndex={0} role="region" aria-labelledby="capabilities-heading">
            <table className="w-full min-w-[720px] border-collapse text-left text-sm">
              <thead>
                <tr className="bg-[#1a1022] text-white">
                  {["Capability", "What it covers", "Status"].map((h) => (
                    <th key={h} scope="col" className="px-5 py-4 text-xs font-semibold uppercase tracking-wider">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {CAPABILITIES.map(([name, covers, status], i) => (
                  <tr key={name} className={i % 2 ? "bg-[#faf9f7]" : "bg-white"}>
                    <th scope="row" className="px-5 py-4 font-semibold text-[#1a1a1a]">{name}</th>
                    <td className="px-5 py-4 leading-relaxed text-gray-600">{covers}</td>
                    <td className="px-5 py-4">
                      <span className={`inline-block whitespace-nowrap rounded-full px-2.5 py-0.5 text-[11px] font-semibold ring-1 ${TAG[status]}`}>{status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Diagram image={IMAGES.capabilities} className="mt-10" />
        </div>
      </section>

      {/* ───────────── In practice ───────────── */}
      <section aria-labelledby="practice-heading" className="bg-white py-16 lg:py-24">
        <div className={WRAP}>
          <div className="max-w-3xl">
            <SectionHeading id="practice-heading" eyebrow="How it works day to day">Stock Tracking and Inventory Control in Practice</SectionHeading>
          </div>
          <div className="mt-12">
            <IconCardGrid items={withIcons(PRACTICE)} columns="sm:grid-cols-2 lg:grid-cols-3" />
          </div>
          <Diagram image={IMAGES.reorder} className="mt-12" caption="Reorder before stock reaches safety stock, so the delivery lands in time." />
        </div>
      </section>

      {/* ───────────── Warehouse & multi-location ───────────── */}
      <section aria-labelledby="warehouse-heading" className="border-y border-[#9b1fe0]/10 bg-[#faf9f7] py-16 lg:py-24">
        <div className={WRAP}>
          <Photo image={IMAGES.warehouse} sizes="(min-width: 1280px) 1216px, 100vw" className="aspect-[16/7] sm:aspect-[16/6]" />
          <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <div>
              <SectionHeading id="warehouse-heading" eyebrow="More than one place">Warehouse and Multi-Location Inventory Management</SectionHeading>
              <p className={`mt-5 ${P}`}>{WAREHOUSE.intro}</p>
            </div>
            <div>
              <TermList items={WAREHOUSE.points} />
            </div>
          </div>
          <Diagram image={IMAGES.multiLocation} className="mt-12" />
          <p className={`mt-8 max-w-4xl ${P}`}><Linked value={WAREHOUSE.mobile} /></p>
        </div>
      </section>

      {/* ───────────── Business types ───────────── */}
      <section aria-labelledby="types-heading" className="bg-white py-16 lg:py-24">
        <div className={WRAP}>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <SectionHeading id="types-heading" eyebrow="Illustrative, not case studies">Inventory Requirements by Business Type</SectionHeading>
              <p className={`mt-5 ${P}`}><em>{BUSINESS_TYPES.note}</em></p>
            </div>
            <Photo image={IMAGES.shop} sizes="(min-width: 1280px) 600px, (min-width: 1024px) 48vw, 100vw" className="aspect-[16/10]" />
          </div>
          <div className="mt-10">
            <ComparisonTable
              labelledBy="types-heading"
              headers={BUSINESS_TYPES.headers.map((label) => ({ label }))}
              rows={BUSINESS_TYPES.rows}
              minWidth="min-w-[760px]"
            />
          </div>
          <p className={`mt-8 max-w-4xl ${P}`}><Linked value={BUSINESS_TYPES.portal} /></p>
        </div>
      </section>

      {/* ───────────── Integrations + forecasting ───────────── */}
      <section aria-labelledby="integrations-heading" className="relative overflow-hidden bg-[#0d0a12] py-16 text-white lg:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-[#AF00E8]/25 blur-3xl" />
        <div className={`${WRAP} relative`}>
          <div className="max-w-3xl">
            <SectionHeading id="integrations-heading" eyebrow="No re-keying" dark>Inventory Software Integrations</SectionHeading>
            <p className="mt-5 text-[15px] leading-relaxed text-gray-300 lg:text-base">{INTEGRATIONS.intro}</p>
          </div>
          <div className="mt-12">
            <IconCardGrid items={withIcons(INTEGRATIONS.items)} dark columns="sm:grid-cols-2" />
          </div>
          <p className="mt-8 text-sm text-gray-400">{INTEGRATIONS.outro}</p>

          <div className="mt-16 rounded-3xl border border-white/10 bg-white/[0.05] p-6 sm:p-10">
            <h2 className="text-[28px] font-bold leading-tight lg:text-[36px]" style={SERIF}>Smarter Replenishment With Demand Forecasting</h2>
            <p className="mt-4 max-w-4xl text-[15px] leading-relaxed text-gray-300 lg:text-base">
              <Linked value={FORECASTING} className={ON_DARK_LINK} />
            </p>
          </div>
        </div>
      </section>

      {/* ───────────── Process ───────────── */}
      <ProcessGrid
        eyebrow="6 steps, two-week sprints"
        title="How We Develop Your Inventory Management System"
        columns="md:grid-cols-2 lg:grid-cols-3"
        steps={PROCESS.map((s) => ({ title: s.title, rows: [{ label: "What happens", text: s.text }] }))}
        after={<p className={`mt-10 max-w-4xl ${P}`}>{PROCESS_OUTRO}</p>}
      />

      {/* ───────────── Security ───────────── */}
      <section aria-labelledby="security-heading" className="relative overflow-hidden bg-[#0d0a12] py-16 text-white lg:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-[#AF00E8]/20 blur-3xl" />
        <div className={`${WRAP} relative`}>
          <div className="max-w-3xl">
            <SectionHeading id="security-heading" eyebrow="Built for audit and volume" dark>Security, Scalability and Performance</SectionHeading>
          </div>
          <div className="mt-12">
            <IconCardGrid items={withIcons(SECURITY)} dark columns="sm:grid-cols-2 lg:grid-cols-3" compact />
          </div>
        </div>
      </section>

      {/* ───────────── Outcomes ───────────── */}
      <section aria-labelledby="outcomes-heading" className="border-b border-[#9b1fe0]/10 bg-[#faf9f7] py-16 lg:py-24">
        <div className={WRAP}>
          <div className="max-w-3xl">
            <SectionHeading id="outcomes-heading" eyebrow="What changes">What Better Inventory Control Changes for Your Business</SectionHeading>
            <p className={`mt-5 ${P}`}>{OUTCOMES.intro}</p>
          </div>
          <div className="mt-12">
            <IconCardGrid items={withIcons(OUTCOMES.items)} columns="sm:grid-cols-2 lg:grid-cols-3" compact />
          </div>
        </div>
      </section>

      {/* ───────────── Choosing a partner ───────────── */}
      <section aria-labelledby="partner-heading" className="bg-white py-16 lg:py-24">
        <div className={WRAP}>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
            <div>
              <SectionHeading id="partner-heading" eyebrow="Questions worth asking">Choosing an Inventory Software Development Partner</SectionHeading>
              <p className={`mt-5 ${P}`}>{PARTNER.intro}</p>
            </div>
            <ol className="space-y-3">
              {PARTNER.questions.map((q) => (
                <li key={q} className="flex gap-3 rounded-xl border border-gray-100 bg-[#faf9f7] px-4 py-3 text-[15px] leading-relaxed text-gray-700">
                  <RiQuestionAnswerLine aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-[#AF00E8]" />
                  {q}
                </li>
              ))}
            </ol>
          </div>
          <h3 className="mt-16 text-2xl font-bold text-[#1a1a1a] lg:text-3xl" style={SERIF}>How ClickMasters approaches it</h3>
          <div className="mt-8">
            <IconCardGrid items={withIcons(PARTNER.answers)} columns="sm:grid-cols-2 lg:grid-cols-3" compact />
          </div>
        </div>
      </section>

      <FaqSection
        title="Custom Inventory Management Software: Frequently Asked Questions"
        intro="Inventory vs ERP, scanning, locations, integrations, reordering and cost, answered plainly."
        faqs={FAQS}
      />

      <FinalCta
        title={FINAL_CTA.title}
        titleAccent={FINAL_CTA.titleAccent}
        body={FINAL_CTA.body}
        bring={FINAL_CTA.bring}
        primaryCta={{ label: "Discuss Your Inventory Requirements", href: "/contact" }}
        secondaryCta={{ label: "Book an Inventory Consultation", href: "/contact" }}
      />
    </>
  );
}
