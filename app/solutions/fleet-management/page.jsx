// /solutions/fleet-management
// Content: ./content.ts (from the Fleet Management SEO pack). Fully server-rendered.
// This real folder takes precedence over the app/solutions/[slug] placeholder route.
import Image from "next/image";
import {
  RiCalendarCheckLine, RiCheckboxCircleLine, RiCheckLine, RiCloudLine, RiCustomerService2Line, RiEyeLine,
  RiFileList2Line, RiFileList3Line, RiGasStationLine, RiHandHeartLine, RiHistoryLine, RiLockLine, RiMap2Line,
  RiMapPinLine, RiMoneyPoundCircleLine, RiPlugLine, RiQuestionAnswerLine, RiScales3Line, RiShieldCheckLine,
  RiSignalTowerLine, RiSpeedLine, RiStackLine, RiTeamLine, RiTimerLine,
} from "react-icons/ri";

import JsonLd from "../../Components/JsonLd";
import { IconTile, SectionHeading, WRAP } from "../../Components/ServicePageUI";
import {
  CheckCard, ComparisonTable, FaqSection, FinalCta, IconCardGrid, Linked, ON_DARK_LINK, ProcessGrid, ServiceHero,
  faqPageJsonLd,
} from "../../Components/ServicePageSections";
import { detailPageJsonLd, detailPageMetadata } from "../../lib/site";
import {
  CAPABILITIES, CAPABILITIES_INTRO, DISPATCH, DRIVERS, FAQS, FINAL_CTA, HERO, IMAGES, INDUSTRIES, INTEGRATIONS,
  MAINTENANCE, OUTCOMES, PARTNER, PATH, PROCESS, PROCESS_OUTRO, REPORTING, ROUTES, SCHEMA_SERVICE, SECURITY, SEO,
  SIGNS, TRACKING, WHAT_IS,
} from "./content";

export const metadata = detailPageMetadata({ path: PATH, ...SEO });

const CRUMBS = [
  { name: "Solutions", path: "/solutions" },
  { name: "Fleet Management", path: PATH },
];

// All icons are decorative (headings carry the meaning).
const ICONS = {
  calendar: RiCalendarCheckLine, check: RiCheckboxCircleLine, history: RiHistoryLine, signal: RiSignalTowerLine,
  fuel: RiGasStationLine, orders: RiFileList2Line, finance: RiMoneyPoundCircleLine, map: RiMap2Line,
  location: RiMapPinLine, admin: RiTimerLine, honest: RiHandHeartLine, stack: RiStackLine, team: RiTeamLine,
  plug: RiPlugLine, support: RiCustomerService2Line, lock: RiLockLine, audit: RiFileList3Line,
  shield: RiShieldCheckLine, speed: RiSpeedLine, cloud: RiCloudLine, eye: RiEyeLine,
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

function TermList({ items, dark = false }) {
  return (
    <ul className="mt-4 space-y-2.5">
      {items.map(([term, text]) => (
        <li key={term} className={`flex gap-2.5 text-[15px] leading-relaxed ${dark ? "text-gray-300" : "text-gray-700"}`}>
          <RiCheckLine aria-hidden="true" className={`mt-1 h-4 w-4 shrink-0 ${dark ? "text-[#5EEAD4]" : "text-[#AF00E8]"}`} />
          <span><strong className={`font-semibold ${dark ? "text-white" : "text-[#1a1a1a]"}`}>{term}</strong> {text}</span>
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
const HALF = "(min-width: 1280px) 600px, (min-width: 1024px) 48vw, 100vw";

export default function FleetManagement() {
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
        primaryCta={{ label: "Discuss Your Fleet Requirements", href: "/contact" }}
        secondaryCta={{ label: "Compare Your Options", href: "#options" }}
        stats={HERO.stats}
        figureLabel="One operational system"
        figure={
          <Image
            src={IMAGES.overview.src}
            width={IMAGES.overview.width}
            height={IMAGES.overview.height}
            alt={IMAGES.overview.alt}
            sizes="(min-width: 1024px) 560px, 100vw"
            preload
            className="h-auto w-full"
          />
        }
        figcaption="Vehicles, drivers and jobs in one system, with telematics, apps and records around it."
      />

      {/* ───────────── What it does ───────────── */}
      <section aria-labelledby="what-heading" className="bg-white py-16 lg:py-24">
        <div className={WRAP}>
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
            <div>
              <SectionHeading id="what-heading" eyebrow="The basics">What Fleet Management Software Does</SectionHeading>
              <p className={`mt-6 ${P}`}><Rich text={WHAT_IS.p1} /></p>
              <p className={`mt-5 ${P}`}>{WHAT_IS.p2}</p>
              <TermList items={WHAT_IS.records} />
              <p className={`mt-5 ${P}`}>{WHAT_IS.p3}</p>
            </div>
            <Photo image={IMAGES.depot} sizes="(min-width: 1280px) 540px, (min-width: 1024px) 42vw, 100vw" className="aspect-[4/3]" />
          </div>
          <Diagram image={IMAGES.records} className="mt-12" />
          <div className="mt-12 max-w-4xl">
            <CheckCard title={SIGNS.title} items={SIGNS.items} tone="sun" />
          </div>
        </div>
      </section>

      {/* ───────────── Routes ───────────── */}
      <section id="options" aria-labelledby="options-heading" className="scroll-mt-28 border-y border-[#9b1fe0]/10 bg-[#faf9f7] py-16 lg:py-24">
        <div className={WRAP}>
          <div className="max-w-3xl">
            <SectionHeading id="options-heading" eyebrow="Three honest routes">Ready-Made Fleet Software, Tailored or Fully Custom</SectionHeading>
            <p className={`mt-5 ${P}`}>{ROUTES.intro}</p>
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
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <p className="rounded-2xl bg-white p-6 text-[15px] leading-relaxed text-gray-700 ring-1 ring-[#0F9F94]/20"><Rich text={ROUTES.middle} /></p>
            <p className="rounded-2xl bg-gradient-to-br from-[#faf5fd] to-[#f1fbf9] p-6 text-[15px] leading-relaxed text-gray-700 ring-1 ring-[#AF00E8]/10"><Rich text={ROUTES.test} /></p>
          </div>
        </div>
      </section>

      {/* ───────────── Capabilities ───────────── */}
      <section aria-labelledby="capabilities-heading" className="bg-white py-16 lg:py-24">
        <div className={WRAP}>
          <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:items-end">
            <SectionHeading id="capabilities-heading" eyebrow="14 capabilities">Fleet Management Capabilities</SectionHeading>
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

      {/* ───────────── Tracking ───────────── */}
      <section aria-labelledby="tracking-heading" className="border-y border-[#9b1fe0]/10 bg-[#faf9f7] py-16 lg:py-24">
        <div className={WRAP}>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <SectionHeading id="tracking-heading" eyebrow="Your telematics, in context">Vehicle Tracking and Fleet Visibility</SectionHeading>
              <p className={`mt-5 ${P}`}>{TRACKING.intro}</p>
              <TermList items={TRACKING.sources} />
              <p className={`mt-5 ${P}`}>{TRACKING.context}</p>
            </div>
            <Photo image={IMAGES.road} sizes={HALF} className="aspect-[4/3]" />
          </div>
          <div className="mt-12 flex gap-4 rounded-3xl bg-white p-6 ring-1 ring-[#AF00E8]/15 sm:p-8">
            <IconTile icon={RiScales3Line} />
            <div>
              <h3 className="text-xl font-bold text-[#1a1a1a] lg:text-2xl" style={SERIF}>{TRACKING.privacyTitle}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-gray-700">{TRACKING.privacy}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── Dispatch ───────────── */}
      <section aria-labelledby="dispatch-heading" className="bg-white py-16 lg:py-24">
        <div className={WRAP}>
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <div>
              <SectionHeading id="dispatch-heading" eyebrow="Where fleet time is won">Dispatch, Routing and Driver Coordination</SectionHeading>
              <p className={`mt-5 ${P}`}>{DISPATCH.intro}</p>
            </div>
            <TermList items={DISPATCH.steps} />
          </div>
          <Diagram image={IMAGES.dispatch} className="mt-12" caption="Illustrative layout with sample data: the AI suggests, the planner decides." />
          <p className={`mt-8 max-w-4xl ${P}`}><Linked value={DISPATCH.ai} /></p>
        </div>
      </section>

      {/* ───────────── Maintenance ───────────── */}
      <section aria-labelledby="maintenance-heading" className="border-y border-[#9b1fe0]/10 bg-[#faf9f7] py-16 lg:py-24">
        <div className={WRAP}>
          <div className="max-w-3xl">
            <SectionHeading id="maintenance-heading" eyebrow="Planned, not reactive">Maintenance, Inspections and Vehicle Records</SectionHeading>
            <p className={`mt-5 ${P}`}>{MAINTENANCE.intro}</p>
          </div>
          <div className="mt-12">
            <IconCardGrid items={withIcons(MAINTENANCE.items)} columns="md:grid-cols-3" />
          </div>
          <Diagram image={IMAGES.walkaround} className="mt-12" />
          <div className="mt-12 rounded-3xl bg-[#0d0a12] p-6 text-white sm:p-10">
            <h3 className="text-2xl font-bold lg:text-3xl" style={SERIF}>{MAINTENANCE.dvsaTitle}</h3>
            <p className="mt-4 text-[15px] leading-relaxed text-gray-300">{MAINTENANCE.dvsa}</p>
          </div>
        </div>
      </section>

      {/* ───────────── Drivers ───────────── */}
      <section aria-labelledby="drivers-heading" className="relative overflow-hidden bg-[#0d0a12] py-16 text-white lg:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-[#AF00E8]/25 blur-3xl" />
        <div className={`${WRAP} relative grid gap-10 lg:grid-cols-2 lg:gap-16`}>
          <div>
            <SectionHeading id="drivers-heading" eyebrow="Adoption starts in the cab" dark>Drivers and Mobile Workforces</SectionHeading>
            <p className="mt-5 text-[15px] leading-relaxed text-gray-300 lg:text-base">{DRIVERS.intro}</p>
            <p className="mt-6 text-[15px] leading-relaxed text-gray-300"><Linked value={DRIVERS.mobile} className={ON_DARK_LINK} /></p>
            <p className="mt-6 text-[15px] leading-relaxed text-gray-300">{DRIVERS.office}</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 sm:p-8">
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#e9c2ff]">The driver app</p>
            <TermList items={DRIVERS.features} dark />
          </div>
        </div>
      </section>

      {/* ───────────── Industries ───────────── */}
      <section aria-labelledby="industries-heading" className="bg-white py-16 lg:py-24">
        <div className={WRAP}>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <SectionHeading id="industries-heading" eyebrow="Illustrative, not case studies">Fleet Requirements by Industry</SectionHeading>
              <p className={`mt-5 ${P}`}><em>{INDUSTRIES.note}</em></p>
            </div>
            <Photo image={IMAGES.distribution} sizes={HALF} className="aspect-[16/10]" />
          </div>
          <div className="mt-10">
            <ComparisonTable
              labelledBy="industries-heading"
              headers={INDUSTRIES.headers.map((label) => ({ label }))}
              rows={INDUSTRIES.rows}
              minWidth="min-w-[760px]"
            />
          </div>
          <p className={`mt-8 max-w-4xl ${P}`}><Linked value={INDUSTRIES.portal} /></p>
        </div>
      </section>

      {/* ───────────── Integrations ───────────── */}
      <section aria-labelledby="integrations-heading" className="border-y border-[#9b1fe0]/10 bg-[#faf9f7] py-16 lg:py-24">
        <div className={WRAP}>
          <div className="max-w-3xl">
            <SectionHeading id="integrations-heading" eyebrow="No re-typing">Fleet Software Integrations</SectionHeading>
            <p className={`mt-5 ${P}`}>{INTEGRATIONS.intro}</p>
          </div>
          <ul className="mt-12 grid gap-4 md:grid-cols-2">
            {INTEGRATIONS.items.map((it) => (
              <li key={it.title} className="flex gap-4 rounded-2xl border border-gray-100 bg-white p-5 sm:p-6">
                <IconTile icon={ICONS[it.icon]} />
                <div>
                  <h3 className="text-lg font-bold text-[#1a1a1a]">{it.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600"><Linked value={it.text} /></p>
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-gray-500">{INTEGRATIONS.outro}</p>
        </div>
      </section>

      {/* ───────────── Reporting ───────────── */}
      <section aria-labelledby="reporting-heading" className="bg-white py-16 lg:py-24">
        <div className={WRAP}>
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <div>
              <SectionHeading id="reporting-heading" eyebrow="Answers, not exports">Fleet Reporting and Operational Analytics</SectionHeading>
              <p className={`mt-5 ${P}`}>{REPORTING.intro}</p>
              <p className={`mt-5 ${P}`}>{REPORTING.outro}</p>
            </div>
            <TermList items={REPORTING.items} />
          </div>
          <Diagram image={IMAGES.reporting} className="mt-12" caption="Illustrative layout with sample data, filtered by depot." />
        </div>
      </section>

      {/* ───────────── Process ───────────── */}
      <ProcessGrid
        faint
        eyebrow="6 steps, two-week sprints"
        title="How We Develop Your Fleet Management System"
        columns="md:grid-cols-2 lg:grid-cols-3"
        steps={PROCESS.map((s) => ({ title: s.title, rows: [{ label: "What happens", text: s.text }] }))}
        after={<p className={`mt-10 max-w-4xl ${P}`}>{PROCESS_OUTRO}</p>}
      />

      {/* ───────────── Security ───────────── */}
      <section aria-labelledby="security-heading" className="relative overflow-hidden bg-[#0d0a12] py-16 text-white lg:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-[#AF00E8]/20 blur-3xl" />
        <div className={`${WRAP} relative`}>
          <div className="max-w-3xl">
            <SectionHeading id="security-heading" eyebrow="Live data, handled carefully" dark>Security, Scalability and Performance</SectionHeading>
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
            <SectionHeading id="outcomes-heading" eyebrow="What changes">What Connected Fleet Management Changes</SectionHeading>
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
              <SectionHeading id="partner-heading" eyebrow="Questions worth asking">Choosing a Fleet Software Development Partner</SectionHeading>
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
        title="Custom Fleet Management Software: Frequently Asked Questions"
        intro="Tracking vs fleet software, telematics, driver apps, maintenance, DVSA, privacy and cost, answered plainly."
        faqs={FAQS}
      />

      <FinalCta
        title={FINAL_CTA.title}
        titleAccent={FINAL_CTA.titleAccent}
        body={FINAL_CTA.body}
        bring={FINAL_CTA.bring}
        primaryCta={{ label: "Discuss Your Fleet Requirements", href: "/contact" }}
        secondaryCta={{ label: "Book a Fleet Software Consultation", href: "/contact" }}
      />
    </>
  );
}
