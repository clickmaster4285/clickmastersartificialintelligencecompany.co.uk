// /services/erp-crm-development
// Content: ./content.ts (from the ERP & CRM Development SEO pack). Fully server-rendered.
// Same building blocks as /services/machine-learning. This real folder takes
// precedence over the app/services/[slug] placeholder route.
import Image from "next/image";
import {
  RiAlarmWarningLine, RiArchiveStackLine, RiBriefcase4Line, RiBuilding2Line, RiChat3Line, RiCheckboxCircleLine,
  RiCheckLine, RiCodeSSlashLine, RiContactsBook2Line, RiDashboard3Line, RiDatabase2Line, RiExchangeLine, RiFlowChart,
  RiFocus3Line, RiGraduationCapLine, RiHeartPulseLine, RiHistoryLine, RiHammerLine, RiInformationLine, RiInstanceLine,
  RiKey2Line, RiLayoutGridLine, RiLineChartLine, RiLockLine, RiPlugLine, RiRefreshLine, RiRouteLine, RiScales3Line,
  RiSettings3Line, RiShieldCheckLine, RiShoppingCart2Line, RiStackLine, RiTeamLine, RiToolsLine, RiTruckLine,
  RiUserLine, RiCustomerService2Line,
} from "../../Components/icons";

import JsonLd from "../../Components/JsonLd";
import ScopingCallBlock from "../../Components/ScopingCallBlock";
import { IconTile, SectionHeading, WRAP } from "../../Components/ServicePageUI";
import {
  ComparisonTable, FaqSection, FinalCta, IconCardGrid, Linked, ServiceHero, faqPageJsonLd,
} from "../../Components/ServicePageSections";
import { detailPageJsonLd, detailPageMetadata } from "../../lib/site";
import {
  COMPARE, CRM_INTRO, CRM_SERVICES, DIFFERENCE, ERP_INTRO, ERP_SERVICES, FAQS, FEATURES, FINAL_CTA, HERO, IMAGES,
  INDUSTRIES, INDUSTRIES_NOTE, INTEGRATION, PATH, PROBLEMS, PROCESS, PROCESS_INTRO, SCENARIOS, SCENARIOS_NOTE,
  SCHEMA_SERVICE, SECURITY, SECURITY_INTRO, SECURITY_NOTE, SEO, TECH, WHY,
} from "./content";

export const metadata = detailPageMetadata({ path: PATH, ...SEO });

const CRUMBS = [
  { name: "Services", path: "/services" },
  { name: "ERP & CRM Development", path: PATH },
];

const CONTACT_HREF = "/contact?service=ERP%20and%20CRM%20development#contact-form";

// All icons are decorative (headings carry the meaning).
const ICONS = {
  build: RiHammerLine, module: RiLayoutGridLine, plug: RiPlugLine, flow: RiFlowChart, migrate: RiExchangeLine,
  dashboard: RiDashboard3Line, modernise: RiRefreshLine, support: RiCustomerService2Line, contacts: RiContactsBook2Line,
  settings: RiSettings3Line, pipeline: RiRouteLine, user: RiUserLine, chart: RiLineChartLine, factory: RiSettings3Line,
  box: RiArchiveStackLine, cart: RiShoppingCart2Line, truck: RiTruckLine, health: RiHeartPulseLine,
  building: RiBuilding2Line, briefcase: RiBriefcase4Line, education: RiGraduationCapLine, saas: RiInstanceLine,
  key: RiKey2Line, users: RiTeamLine, lock: RiLockLine, history: RiHistoryLine, backup: RiDatabase2Line,
  check: RiCheckboxCircleLine, alert: RiAlarmWarningLine, scales: RiScales3Line, target: RiFocus3Line,
  tool: RiToolsLine, scale: RiStackLine, code: RiCodeSSlashLine, shield: RiShieldCheckLine, chat: RiChat3Line,
};
const withIcons = (items) => items.map((it) => ({ ...it, icon: ICONS[it.icon] }));

/** Renders **bold** markers from the content file. */
function Rich({ text }) {
  return text.split(/(\*\*[^*]+\*\*)/).map((part, i) =>
    part.startsWith("**") ? <strong key={i} className="font-semibold text-[#1a1a1a]">{part.slice(2, -2)}</strong> : part
  );
}

function Diagram({ image, caption, className = "" }) {
  return (
    <figure className={`rounded-3xl border border-gray-100 bg-white p-4 shadow-[0_20px_60px_-30px_rgba(60,0,90,0.35)] sm:p-8 ${className}`}>
      <Image src={image.src} width={image.width} height={image.height} alt={image.alt} sizes="(min-width: 1280px) 1216px, 100vw" className="h-auto w-full" />
      {caption && <figcaption className="mt-4 text-center text-xs text-gray-500">{caption}</figcaption>}
    </figure>
  );
}

function Photo({ image, sizes, className = "" }) {
  return (
    <div className={`relative overflow-hidden rounded-3xl ring-1 ring-black/5 ${className}`}>
      <Image src={image.src} width={image.width} height={image.height} alt={image.alt} sizes={sizes} className="h-full w-full object-cover" />
    </div>
  );
}

function TermList({ items, dark = false, ordered = false }) {
  const Tag = ordered ? "ol" : "ul";
  return (
    <Tag className="mt-4 space-y-2.5">
      {items.map(([term, text], i) => (
        <li key={term} className={`flex gap-2.5 text-[15px] leading-relaxed ${dark ? "text-gray-300" : "text-gray-700"}`}>
          {ordered ? (
            <span aria-hidden="true" className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#AF00E8] text-xs font-bold text-white">{i + 1}</span>
          ) : (
            <RiCheckLine aria-hidden="true" className={`mt-1 h-4 w-4 shrink-0 ${dark ? "text-[#5EEAD4]" : "text-[#AF00E8]"}`} />
          )}
          <span><strong className={`font-semibold ${dark ? "text-white" : "text-[#1a1a1a]"}`}>{term}</strong> {text}</span>
        </li>
      ))}
    </Tag>
  );
}

const P = "text-[15px] leading-relaxed text-gray-600 lg:text-base";
const SERIF = { fontFamily: "Garamond, serif" };
const HALF = "(min-width: 1280px) 600px, (min-width: 1024px) 48vw, 100vw";
const FIELD = "text-xs font-bold uppercase tracking-[0.14em] text-gray-500";

export default function ErpCrmDevelopment() {
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
        primaryCta={{ label: "Discuss Your ERP or CRM Project", href: CONTACT_HREF }}
        secondaryCta={{ label: "Explore Our Solutions", href: "/solutions" }}
        stats={HERO.stats}
        figureLabel="One record from first enquiry to final invoice"
        figure={
          <Image
            src={IMAGES.quoteToCash.src}
            width={IMAGES.quoteToCash.width}
            height={IMAGES.quoteToCash.height}
            alt={IMAGES.quoteToCash.alt}
            sizes="(min-width: 1024px) 560px, 100vw"
            preload
            className="h-auto w-full"
          />
        }
        figcaption="A won deal becomes an order, a delivery and an invoice, with status flowing back to sales."
      />

      <ScopingCallBlock path={PATH} service="ERP and CRM development" />

      {/* ───────────── Problems + routes ───────────── */}
      <section aria-labelledby="problems-heading" className="bg-white py-16 lg:py-24">
        <div className={WRAP}>
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div>
              <SectionHeading id="problems-heading" eyebrow="Sound familiar?">When Your Systems Stop Keeping Up With Your Business</SectionHeading>
              <p className={`mt-6 ${P}`}>{PROBLEMS.intro}</p>
              <h3 className="mt-10 text-xl font-bold text-[#1a1a1a]" style={SERIF}>{PROBLEMS.symptomsTitle}</h3>
              <TermList items={PROBLEMS.symptoms} />
              <p className="mt-6 text-[15px] font-medium leading-relaxed text-[#4b1d63]">{PROBLEMS.outro}</p>
            </div>
            <Photo image={IMAGES.warehouse} sizes="(min-width: 1280px) 540px, (min-width: 1024px) 42vw, 100vw" className="aspect-[4/5] self-center" />
          </div>

          <h3 id="routes-heading" className="mt-16 text-2xl font-bold text-[#1a1a1a] lg:text-3xl" style={SERIF}>{PROBLEMS.routesTitle}</h3>
          <p className={`mt-4 max-w-3xl ${P}`}>{PROBLEMS.routesIntro}</p>
          <Diagram image={IMAGES.routes} className="mt-8" />
          <div className="mt-8">
            <ComparisonTable labelledBy="routes-heading" headers={[{ label: "Your situation" }, { label: "Usually the right route" }]} rows={PROBLEMS.routes} minWidth="min-w-[640px]" />
          </div>
          <p className={`mt-6 max-w-3xl ${P}`}>{PROBLEMS.routesOutro}</p>
        </div>
      </section>

      {/* ───────────── ERP vs CRM + system of record ───────────── */}
      <section aria-labelledby="difference-heading" className="border-y border-[#9b1fe0]/10 bg-[#faf9f7] py-16 lg:py-24">
        <div className={WRAP}>
          <div className="max-w-3xl">
            <SectionHeading id="difference-heading" eyebrow="The boundary that matters">ERP and CRM: Different Jobs, One Set of Data</SectionHeading>
            <p className={`mt-5 ${P}`}>{DIFFERENCE.intro}</p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-6 ring-1 ring-[#0F6B5C]/20 sm:p-8">
              <h3 className="text-xl font-bold text-[#1a1a1a]" style={SERIF}>{DIFFERENCE.erpTitle}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-gray-700"><Rich text={DIFFERENCE.erp} /></p>
            </div>
            <div className="rounded-2xl bg-white p-6 ring-1 ring-[#AF00E8]/20 sm:p-8">
              <h3 className="text-xl font-bold text-[#1a1a1a]" style={SERIF}>{DIFFERENCE.crmTitle}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-gray-700"><Rich text={DIFFERENCE.crm} /></p>
            </div>
          </div>
          <h3 id="owner-heading" className="mt-14 text-2xl font-bold text-[#1a1a1a] lg:text-3xl" style={SERIF}>{DIFFERENCE.ownerTitle}</h3>
          <p className={`mt-4 max-w-3xl ${P}`}><Rich text={DIFFERENCE.ownerIntro} /></p>
          <Diagram image={IMAGES.ownership} className="mt-8" />
          <div className="mt-8">
            <ComparisonTable
              labelledBy="owner-heading"
              headers={[{ label: "Data" }, { label: "Usually owned by" }, { label: "Shared with" }, { label: "Why" }]}
              rows={DIFFERENCE.ownerRows}
              minWidth="min-w-[860px]"
            />
          </div>
          <p className={`mt-6 max-w-3xl ${P}`}>{DIFFERENCE.ownerOutro}</p>
        </div>
      </section>

      {/* ───────────── ERP services ───────────── */}
      <section aria-labelledby="erp-heading" className="bg-white py-16 lg:py-24">
        <div className={WRAP}>
          <div className="max-w-3xl">
            <SectionHeading id="erp-heading" eyebrow="8 ERP services">Custom ERP Software Development Services</SectionHeading>
            <p className={`mt-5 ${P}`}><Linked value={ERP_INTRO} /></p>
          </div>
          <ul className="mt-12 grid gap-5 lg:grid-cols-2">
            {ERP_SERVICES.map((s) => (
              <li key={s.title} className="overflow-hidden rounded-3xl border border-gray-100 bg-[#faf9f7]">
                <div className="flex items-start gap-4 p-6 sm:p-7">
                  <IconTile icon={ICONS[s.icon]} />
                  <div>
                    <h3 className="text-[21px] font-bold leading-snug text-[#1a1a1a]" style={SERIF}>{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-700">{s.involves}</p>
                  </div>
                </div>
                <dl className="grid gap-px bg-gray-100 sm:grid-cols-3">
                  {[["The problem", s.problem], ["Typical functionality", s.functionality], ["When you may need it", s.when]].map(([label, text]) => (
                    <div key={label} className="bg-white px-6 py-5">
                      <dt className={FIELD}>{label}</dt>
                      <dd className="mt-2 text-sm leading-relaxed text-gray-700">{text}</dd>
                    </div>
                  ))}
                </dl>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ───────────── CRM services ───────────── */}
      <section aria-labelledby="crm-heading" className="border-y border-[#9b1fe0]/10 bg-[#faf9f7] py-16 lg:py-24">
        <div className={WRAP}>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <SectionHeading id="crm-heading" eyebrow="10 CRM services">Custom CRM Software Development Services</SectionHeading>
              <p className={`mt-5 ${P}`}><Linked value={CRM_INTRO} /></p>
            </div>
            <Photo image={IMAGES.sales} sizes={HALF} className="aspect-[16/10]" />
          </div>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {CRM_SERVICES.map((s) => (
              <li key={s.title} className="flex flex-col rounded-2xl border border-gray-100 bg-white p-6">
                <IconTile icon={ICONS[s.icon]} />
                <h3 className="mt-4 text-lg font-bold text-[#1a1a1a]">{s.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600"><Linked value={s.text} /></p>
                <p className="mt-4 rounded-xl bg-[#faf5fd] px-4 py-3 text-xs leading-relaxed text-gray-700 ring-1 ring-[#AF00E8]/15">
                  <span className="font-bold uppercase tracking-wider text-[#7a1fa2]">Practical value: </span>{s.value}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ───────────── Integration ───────────── */}
      <section aria-labelledby="integration-heading" className="relative overflow-hidden bg-[#0d0a12] py-16 text-white lg:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-[#AF00E8]/25 blur-3xl" />
        <div className={`${WRAP} relative`}>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <SectionHeading id="integration-heading" eyebrow="Where the value is" dark>ERP and CRM Integration Solutions</SectionHeading>
              <p className="mt-5 text-[15px] leading-relaxed text-gray-300 lg:text-base">{INTEGRATION.intro}</p>
            </div>
            <Photo image={IMAGES.devices} sizes={HALF} className="aspect-[16/10] ring-white/10" />
          </div>
          <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <h3 className="text-2xl font-bold" style={SERIF}>{INTEGRATION.flowTitle}</h3>
              <TermList items={INTEGRATION.flow} dark ordered />
              <p className="mt-5 text-[15px] leading-relaxed text-gray-300">
                {INTEGRATION.flowOutro.split(/(\*\*[^*]+\*\*)/).map((p, i) => (p.startsWith("**") ? <strong key={i} className="text-white">{p.slice(2, -2)}</strong> : p))}
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold" style={SERIF}>{INTEGRATION.systemsTitle}</h3>
              <p className="mt-3 text-[15px] text-gray-300">{INTEGRATION.systemsIntro}</p>
              <TermList items={INTEGRATION.systems} dark />
              <p className="mt-5 flex gap-3 rounded-2xl bg-white/[0.06] p-4 text-sm leading-relaxed text-gray-300 ring-1 ring-white/10">
                <RiInformationLine aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-[#5EEAD4]" />
                {INTEGRATION.systemsNote}
              </p>
            </div>
          </div>
          <h3 className="mt-16 text-2xl font-bold lg:text-3xl" style={SERIF}>{INTEGRATION.reliableTitle}</h3>
          <figure className="mt-8 rounded-3xl bg-white p-4 sm:p-8">
            <Image src={IMAGES.reliability.src} width={IMAGES.reliability.width} height={IMAGES.reliability.height} alt={IMAGES.reliability.alt} sizes="(min-width: 1280px) 1216px, 100vw" className="h-auto w-full" />
          </figure>
          <ul className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {INTEGRATION.reliable.map(([t, d]) => (
              <li key={t} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                <h4 className="font-bold">{t.replace(/:$/, "")}</h4>
                <p className="mt-2 text-sm leading-relaxed text-gray-300">{d.charAt(0).toUpperCase() + d.slice(1)}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ───────────── Features ───────────── */}
      <section aria-labelledby="features-heading" className="bg-white py-16 lg:py-24">
        <div className={WRAP}>
          <div className="max-w-3xl">
            <SectionHeading id="features-heading" eyebrow="What each feature does for you">Essential ERP and CRM Features</SectionHeading>
            <p className={`mt-5 ${P}`}>{FEATURES.intro}</p>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            <div className="rounded-3xl bg-[#f1fbf9] p-6 ring-1 ring-[#0F9F94]/20 sm:p-8">
              <h3 className="text-2xl font-bold text-[#1a1a1a]" style={SERIF}>{FEATURES.erpTitle}</h3>
              <TermList items={FEATURES.erp} />
            </div>
            <div className="rounded-3xl bg-[#faf5fd] p-6 ring-1 ring-[#AF00E8]/15 sm:p-8">
              <h3 className="text-2xl font-bold text-[#1a1a1a]" style={SERIF}>{FEATURES.crmTitle}</h3>
              <TermList items={FEATURES.crm} />
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── Industries ───────────── */}
      <section aria-labelledby="industries-heading" className="relative overflow-hidden bg-[#0d0a12] py-16 text-white lg:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-[#AF00E8]/20 blur-3xl" />
        <div className={`${WRAP} relative`}>
          <div className="max-w-3xl">
            <SectionHeading id="industries-heading" eyebrow="Typical workflows by sector" dark>ERP and CRM Applications by Industry</SectionHeading>
            <p className="mt-5 text-[15px] italic leading-relaxed text-gray-300">{INDUSTRIES_NOTE}</p>
          </div>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {INDUSTRIES.map((ind) => (
              <li key={ind.title} className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-colors hover:border-[#AF00E8]/50">
                <IconTile icon={ICONS[ind.icon]} dark />
                <h3 className="mt-4 text-lg font-bold">{ind.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-300">{ind.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ───────────── Custom vs off-the-shelf ───────────── */}
      <section aria-labelledby="compare-heading" className="bg-white py-16 lg:py-24">
        <div className={WRAP}>
          <div className="max-w-3xl">
            <SectionHeading id="compare-heading" eyebrow="Build or buy?">Custom ERP and CRM vs Off-the-Shelf Software</SectionHeading>
            <p className={`mt-5 ${P}`}>{COMPARE.intro}</p>
          </div>
          <div className="mt-10">
            <ComparisonTable
              labelledBy="compare-heading"
              headers={[{ label: COMPARE.headers[0] }, { label: COMPARE.headers[1], dot: "#E3A600" }, { label: COMPARE.headers[2], dot: "#AF00E8" }]}
              rows={COMPARE.rows}
            />
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl bg-[#fffaeb] p-6 ring-1 ring-[#E3A600]/25 sm:p-8">
              <h3 className="text-lg font-bold text-[#1a1a1a]">{COMPARE.shelfTitle}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-gray-700">{COMPARE.shelf}</p>
            </div>
            <div className="rounded-2xl bg-[#faf5fd] p-6 ring-1 ring-[#AF00E8]/15 sm:p-8">
              <h3 className="text-lg font-bold text-[#1a1a1a]">{COMPARE.customTitle}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-gray-700"><Linked value={COMPARE.custom} /></p>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── Process ───────────── */}
      <section id="process" aria-labelledby="process-heading" className="scroll-mt-28 border-y border-[#9b1fe0]/10 bg-[#faf9f7] py-16 lg:py-24">
        <div className={WRAP}>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <SectionHeading id="process-heading" eyebrow="10 stages, a review at each">Our ERP and CRM Development Process</SectionHeading>
              <p className={`mt-5 ${P}`}>{PROCESS_INTRO}</p>
            </div>
            <Photo image={IMAGES.workshop} sizes={HALF} className="aspect-[16/10]" />
          </div>
          <Diagram image={IMAGES.process} className="mt-10" />
          <ol className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {PROCESS.map((step, i) => (
              <li key={step.title} className="flex flex-col rounded-2xl border border-gray-100 bg-white p-5">
                <div className="flex items-center">
                  <span aria-hidden="true" className="step-num">{String(i + 1).padStart(2, "0")}</span>
                  <span aria-hidden="true" className="step-line" />
                </div>
                <h3 className="mt-4 font-bold text-[#1a1a1a]">{i + 1}. {step.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">{step.what}</p>
                <p className="mt-4 rounded-xl bg-[#f1fbf9] px-3 py-2.5 text-xs leading-relaxed text-gray-700 ring-1 ring-[#5EEAD4]/60">
                  <span className="font-bold uppercase tracking-wider text-[#0F9F94]">Risk reduced: </span>{step.risk}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ───────────── Security ───────────── */}
      <section aria-labelledby="security-heading" className="relative overflow-hidden bg-[#0d0a12] py-16 text-white lg:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute -right-32 top-10 h-96 w-96 rounded-full bg-[#AF00E8]/20 blur-3xl" />
        <div className={`${WRAP} relative`}>
          <div className="max-w-3xl">
            <SectionHeading id="security-heading" eyebrow="Designed in, not added on" dark>Security, Data Protection and Access Management</SectionHeading>
            <p className="mt-5 text-[15px] leading-relaxed text-gray-300 lg:text-base">{SECURITY_INTRO}</p>
          </div>
          <div className="mt-12">
            <IconCardGrid items={withIcons(SECURITY)} dark columns="sm:grid-cols-2" compact />
          </div>
          <p className="mt-8 max-w-4xl text-sm leading-relaxed text-gray-400">{SECURITY_NOTE}</p>
        </div>
      </section>

      {/* ───────────── Technologies ───────────── */}
      <section aria-labelledby="tech-heading" className="bg-white py-16 lg:py-24">
        <div className={WRAP}>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeading id="tech-heading" eyebrow="Chosen per project">Technologies and Development Architecture</SectionHeading>
              <p className={`mt-5 ${P}`}>{TECH.intro}</p>
              <TermList items={TECH.items} />
            </div>
            <div className="self-center rounded-3xl bg-[#faf9f7] p-6 ring-1 ring-gray-100 sm:p-8">
              <h3 className="text-xl font-bold text-[#1a1a1a]" style={SERIF}>{TECH.layersTitle}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-gray-700"><Rich text={TECH.layers} /></p>
            </div>
          </div>
          <Diagram image={IMAGES.architecture} className="mt-12" />
        </div>
      </section>

      {/* ───────────── Why ClickMasters ───────────── */}
      <section aria-labelledby="why-heading" className="border-y border-[#9b1fe0]/10 bg-[#faf9f7] py-16 lg:py-24">
        <div className={WRAP}>
          <div className="max-w-3xl">
            <SectionHeading id="why-heading" eyebrow="How we work">Why Choose ClickMasters for ERP and CRM Development?</SectionHeading>
          </div>
          <div className="mt-12">
            <IconCardGrid items={withIcons(WHY)} columns="sm:grid-cols-2 lg:grid-cols-4" />
          </div>
        </div>
      </section>

      {/* ───────────── Example scenarios ───────────── */}
      <section aria-labelledby="scenarios-heading" className="bg-white py-16 lg:py-24">
        <div className={WRAP}>
          <div className="max-w-3xl">
            <SectionHeading id="scenarios-heading" eyebrow="Illustrative, not case studies">Example Scenarios: Connected ERP and CRM in Practice</SectionHeading>
            <p className={`mt-5 ${P}`}><em>{SCENARIOS_NOTE}</em></p>
          </div>
          <ul className="mt-12 grid gap-5 lg:grid-cols-3">
            {SCENARIOS.map((sc) => (
              <li key={sc.title} className="flex flex-col rounded-3xl border border-gray-100 bg-[#faf9f7] p-6 sm:p-7">
                <h3 className="text-xl font-bold leading-snug text-[#1a1a1a]" style={SERIF}>{sc.title}</h3>
                <dl className="mt-4 space-y-4 text-sm leading-relaxed text-gray-700">
                  <div><dt className={FIELD}>Situation</dt><dd className="mt-1.5">{sc.situation}</dd></div>
                  <div><dt className={FIELD}>Approach</dt><dd className="mt-1.5">{sc.approach}</dd></div>
                  <div><dt className={FIELD}>Outcome sought</dt><dd className="mt-1.5">{sc.outcome}</dd></div>
                </dl>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FaqSection
        title="ERP and CRM Development: Frequently Asked Questions"
        intro="Differences, integration, cost drivers, timelines, customisation and choosing a provider, answered plainly."
        faqs={FAQS}
      />

      <FinalCta
        title={FINAL_CTA.title}
        titleAccent={FINAL_CTA.titleAccent}
        body={FINAL_CTA.body}
        bring={FINAL_CTA.bring}
        primaryCta={{ label: "Discuss Your ERP or CRM Project", href: CONTACT_HREF }}
        secondaryCta={{ label: "Explore Our Solutions", href: "/solutions" }}
      />
    </>
  );
}
