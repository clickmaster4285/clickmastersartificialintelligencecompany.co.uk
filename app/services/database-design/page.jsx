// /services/database-design
// Content: ./content.ts (from the Database Design SEO pack). Fully server-rendered.
// Same building blocks as /services/cloud-devops. This real folder takes
// precedence over the app/services/[slug] placeholder route.
import Image from "next/image";
import {
  RiAlarmWarningLine, RiArchiveStackLine, RiBankLine, RiBriefcase4Line, RiBugLine, RiBuilding2Line, RiChat3Line,
  RiCheckboxCircleLine, RiCheckLine, RiDashboard3Line, RiDatabase2Line, RiDeleteBin6Line, RiExchangeLine,
  RiFileList3Line, RiFlowChart, RiFocus3Line, RiGlobalLine, RiGraduationCapLine, RiHeartPulseLine, RiHistoryLine,
  RiInformationLine, RiInstanceLine, RiKey2Line, RiLayoutMasonryLine, RiLineChartLine, RiLockLine,
  RiLockPasswordLine, RiNodeTree, RiPlugLine, RiRoadMapLine, RiSearchLine, RiSettings3Line, RiShieldCheckLine,
  RiShoppingCart2Line, RiSpeedUpLine, RiStackLine, RiTable2, RiTeamLine, RiTimerLine, RiTruckLine, RiGitMergeLine,
  RiArrowLeftRightLine,
} from "../../Components/icons";

import JsonLd from "../../Components/JsonLd";
import ScopingCallBlock from "../../Components/ScopingCallBlock";
import { IconTile, SectionHeading, WRAP } from "../../Components/ServicePageUI";
import {
  ComparisonTable, FaqSection, FinalCta, IconCardGrid, Linked, ServiceHero, faqPageJsonLd,
} from "../../Components/ServicePageSections";
import { detailPageJsonLd, detailPageMetadata } from "../../lib/site";
import {
  COMPARE, DESIGN_INTRO, DESIGN_SERVICES, FAQS, FINAL_CTA, GDPR, HERO, IMAGES, INDUSTRIES, INDUSTRIES_NOTE,
  INTEGRATION, MIGRATION, MODELLING, NOSQL, PATH, PERFORMANCE, PROBLEMS, PROCESS, SCALE, SCHEMA_SERVICE, SECURITY,
  SECURITY_INTRO, SECURITY_NOTE, SEO, SQL, TECH, WHY,
} from "./content";

export const metadata = detailPageMetadata({ path: PATH, ...SEO });

const CRUMBS = [
  { name: "Services", path: "/services" },
  { name: "Database Design & Development", path: PATH },
];

const CONTACT_HREF = "/contact?service=database%20design#contact-form";

// All icons are decorative (headings carry the meaning).
const ICONS = {
  design: RiDatabase2Line, table: RiTable2, model: RiNodeTree, normalise: RiStackLine, schema: RiLayoutMasonryLine,
  architecture: RiRoadMapLine, check: RiCheckboxCircleLine, docs: RiFileList3Line, query: RiSearchLine,
  index: RiSpeedUpLine, plan: RiFlowChart, profile: RiLineChartLine, pool: RiGitMergeLine, cache: RiTimerLine,
  monitor: RiDashboard3Line, rw: RiArrowLeftRightLine, slow: RiAlarmWarningLine, workload: RiSettings3Line, key: RiKey2Line,
  users: RiTeamLine, lock: RiLockLine, shield: RiShieldCheckLine, transit: RiExchangeLine, network: RiGlobalLine,
  bug: RiBugLine, history: RiHistoryLine, backup: RiArchiveStackLine, secret: RiLockPasswordLine,
  alert: RiAlarmWarningLine, retention: RiDeleteBin6Line, saas: RiInstanceLine, cart: RiShoppingCart2Line,
  health: RiHeartPulseLine, finance: RiBankLine, truck: RiTruckLine, education: RiGraduationCapLine,
  factory: RiSettings3Line, briefcase: RiBriefcase4Line, building: RiBuilding2Line, target: RiFocus3Line,
  scale: RiStackLine, plug: RiPlugLine, chat: RiChat3Line,
};
const withIcons = (items) => items.map((it) => ({ ...it, icon: ICONS[it.icon] }));

/** Renders **bold** markers from the content file. */
function Rich({ text, dark = false }) {
  return text.split(/(\*\*[^*]+\*\*)/).map((part, i) =>
    part.startsWith("**") ? <strong key={i} className={`font-semibold ${dark ? "text-white" : "text-[#1a1a1a]"}`}>{part.slice(2, -2)}</strong> : part
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

export default function DatabaseDesign() {
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
        primaryCta={{ label: "Discuss Your Database Project", href: CONTACT_HREF }}
        secondaryCta={{ label: "Explore Our Development Services", href: "/services" }}
        stats={HERO.stats}
        figureLabel="Data that stays correct as you grow"
        figure={
          <Image
            src={IMAGES.dataLayer.src}
            width={IMAGES.dataLayer.width}
            height={IMAGES.dataLayer.height}
            alt={IMAGES.dataLayer.alt}
            sizes="(min-width: 1024px) 560px, 100vw"
            preload
            className="h-auto w-full"
          />
        }
        figcaption="Requirements become a model, the model becomes an enforced schema, and the application uses it safely."
      />

      <ScopingCallBlock path={PATH} service="database design and development" />

      {/* ───────────── Problems + three jobs ───────────── */}
      <section aria-labelledby="problems-heading" className="bg-white py-16 lg:py-24">
        <div className={WRAP}>
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div>
              <SectionHeading id="problems-heading" eyebrow="Sound familiar?">When the Database Becomes the Problem</SectionHeading>
              <p className={`mt-6 ${P}`}>{PROBLEMS.intro}</p>
              <h3 className="mt-10 text-xl font-bold text-[#1a1a1a]" style={SERIF}>{PROBLEMS.symptomsTitle}</h3>
              <TermList items={PROBLEMS.symptoms} />
              <p className="mt-6 text-[15px] font-medium leading-relaxed text-[#4b1d63]">{PROBLEMS.outro}</p>
            </div>
            <Photo image={IMAGES.engineer} sizes="(min-width: 1280px) 540px, (min-width: 1024px) 42vw, 100vw" className="aspect-[4/5] self-center" />
          </div>

          <h3 className="mt-16 text-2xl font-bold text-[#1a1a1a] lg:text-3xl" style={SERIF}>{PROBLEMS.jobsTitle}</h3>
          <p className={`mt-4 max-w-3xl ${P}`}>{PROBLEMS.jobsIntro}</p>
          <Diagram image={IMAGES.threeJobs} className="mt-8" />
          <ul className="mt-8 grid gap-5 md:grid-cols-3">
            {PROBLEMS.jobs.map(([t, d], i) => (
              <li key={t} className={`rounded-2xl p-6 ring-1 ${["bg-[#faf5fd] ring-[#AF00E8]/15", "bg-[#fffaeb] ring-[#E3A600]/25", "bg-[#f1fbf9] ring-[#0F9F94]/20"][i]}`}>
                <h4 className="text-lg font-bold text-[#1a1a1a]">{t}</h4>
                <p className="mt-2 text-sm leading-relaxed text-gray-700">{d.charAt(0).toUpperCase() + d.slice(1)}</p>
              </li>
            ))}
          </ul>
          <p className={`mt-6 max-w-4xl ${P}`}>{PROBLEMS.jobsOutro}</p>
        </div>
      </section>

      {/* ───────────── Design services ───────────── */}
      <section aria-labelledby="design-heading" className="border-y border-[#9b1fe0]/10 bg-[#faf9f7] py-16 lg:py-24">
        <div className={WRAP}>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <SectionHeading id="design-heading" eyebrow="8 design services">Custom Database Design Services</SectionHeading>
              <p className={`mt-5 ${P}`}>{DESIGN_INTRO}</p>
            </div>
            <Photo image={IMAGES.review} sizes={HALF} className="aspect-[16/10]" />
          </div>
          <ul className="mt-12 grid gap-5 lg:grid-cols-2">
            {DESIGN_SERVICES.map((s) => (
              <li key={s.title} className="overflow-hidden rounded-3xl border border-gray-100 bg-white">
                <div className="flex items-start gap-4 p-6 sm:p-7">
                  <IconTile icon={ICONS[s.icon]} />
                  <div>
                    <h3 className="text-[21px] font-bold leading-snug text-[#1a1a1a]" style={SERIF}>{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-700">{s.involves}</p>
                  </div>
                </div>
                <dl className="grid gap-px bg-gray-100 sm:grid-cols-2">
                  {[["The problem it solves", s.problem], ["How it works", s.how], ["When businesses need it", s.when], ["Business value", s.value]].map(([label, text]) => (
                    <div key={label} className="bg-[#faf9f7] px-6 py-5">
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

      {/* ───────────── SQL ───────────── */}
      <section aria-labelledby="sql-heading" className="bg-white py-16 lg:py-24">
        <div className={WRAP}>
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div>
              <SectionHeading id="sql-heading" eyebrow="Relational databases">SQL Database Development</SectionHeading>
              <p className={`mt-5 ${P}`}>{SQL.intro}</p>
              <h3 className="mt-8 text-xl font-bold text-[#1a1a1a]" style={SERIF}>{SQL.howTitle}</h3>
              <TermList items={SQL.how} />
            </div>
            <div className="flex flex-col gap-6">
              <Photo image={IMAGES.code} sizes="(min-width: 1280px) 540px, (min-width: 1024px) 42vw, 100vw" className="aspect-[4/3]" />
              <div className="rounded-2xl bg-[#f1fbf9] p-6 ring-1 ring-[#0F9F94]/20">
                <h3 className="text-xl font-bold text-[#1a1a1a]" style={SERIF}>{SQL.platformsTitle}</h3>
                <TermList items={SQL.platforms} />
                <p className="mt-4 text-sm leading-relaxed text-gray-600">{SQL.otherPlatforms}</p>
              </div>
              <div className="rounded-2xl bg-[#faf5fd] p-6 ring-1 ring-[#AF00E8]/15">
                <h3 className="text-xl font-bold text-[#1a1a1a]" style={SERIF}>{SQL.suitsTitle}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-gray-700">{SQL.suits}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── NoSQL ───────────── */}
      <section aria-labelledby="nosql-heading" className="border-y border-[#9b1fe0]/10 bg-[#faf9f7] py-16 lg:py-24">
        <div className={WRAP}>
          <div className="max-w-3xl">
            <SectionHeading id="nosql-heading" eyebrow="Document and key-value">NoSQL Database Development</SectionHeading>
            <p className={`mt-5 ${P}`}>{NOSQL.intro}</p>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            <div className="rounded-2xl bg-white p-6 ring-1 ring-[#AF00E8]/20 sm:p-8">
              <h3 className="text-xl font-bold text-[#1a1a1a]" style={SERIF}>{NOSQL.documentTitle}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-gray-700"><Rich text={NOSQL.document} /></p>
            </div>
            <div className="rounded-2xl bg-white p-6 ring-1 ring-[#E3A600]/30 sm:p-8">
              <h3 className="text-xl font-bold text-[#1a1a1a]" style={SERIF}>{NOSQL.keyValueTitle}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-gray-700"><Rich text={NOSQL.keyValue} /></p>
            </div>
          </div>
          <h3 id="choose-heading" className="mt-14 text-2xl font-bold text-[#1a1a1a] lg:text-3xl" style={SERIF}>{NOSQL.chooseTitle}</h3>
          <Diagram image={IMAGES.sqlNosql} className="mt-8" />
          <div className="mt-8">
            <ComparisonTable
              labelledBy="choose-heading"
              headers={[{ label: "Factor" }, { label: "Relational (SQL)", dot: "#0F6B5C" }, { label: "Document / key-value (NoSQL)", dot: "#AF00E8" }]}
              rows={NOSQL.rows}
            />
          </div>
          <p className={`mt-6 max-w-4xl ${P}`}>{NOSQL.outro}</p>
        </div>
      </section>

      {/* ───────────── Architecture and modelling ───────────── */}
      <section aria-labelledby="modelling-heading" className="bg-white py-16 lg:py-24">
        <div className={WRAP}>
          <div className="max-w-3xl">
            <SectionHeading id="modelling-heading" eyebrow="Decisions, recorded">Database Architecture and Data Modelling</SectionHeading>
            <p className={`mt-5 ${P}`}>{MODELLING.intro}</p>
          </div>
          <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <h3 className="text-2xl font-bold text-[#1a1a1a]" style={SERIF}>{MODELLING.modelsTitle}</h3>
              <TermList items={MODELLING.models} ordered />
              <p className={`mt-5 ${P}`}><Rich text={MODELLING.modelsOutro} /></p>
            </div>
            <div className="space-y-6">
              <div className="rounded-2xl bg-[#faf9f7] p-6 ring-1 ring-gray-100">
                <h3 className="text-xl font-bold text-[#1a1a1a]" style={SERIF}>{MODELLING.accessTitle}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-gray-700">{MODELLING.access}</p>
              </div>
              <div className="rounded-2xl bg-[#faf9f7] p-6 ring-1 ring-gray-100">
                <h3 className="text-xl font-bold text-[#1a1a1a]" style={SERIF}>{MODELLING.evolutionTitle}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-gray-700"><Rich text={MODELLING.evolution} /></p>
              </div>
            </div>
          </div>
          <Diagram image={IMAGES.erd} className="mt-12" caption="An example entity relationship diagram: keys and constraints make the business rules enforceable." />
          <p className={`mt-6 max-w-4xl ${P}`}>{MODELLING.decisions}</p>
        </div>
      </section>

      {/* ───────────── Performance ───────────── */}
      <section aria-labelledby="performance-heading" className="relative overflow-hidden bg-[#0d0a12] py-16 text-white lg:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-[#AF00E8]/25 blur-3xl" />
        <div className={`${WRAP} relative`}>
          <div className="max-w-3xl">
            <SectionHeading id="performance-heading" eyebrow="Diagnosis first" dark>Database Performance Optimisation</SectionHeading>
            <p className="mt-5 text-[15px] leading-relaxed text-gray-300 lg:text-base">{PERFORMANCE.intro}</p>
          </div>
          <figure className="mt-10 rounded-3xl bg-white p-4 sm:p-8">
            <Image src={IMAGES.optimisation.src} width={IMAGES.optimisation.width} height={IMAGES.optimisation.height} alt={IMAGES.optimisation.alt} sizes="(min-width: 1280px) 1216px, 100vw" className="h-auto w-full" />
          </figure>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PERFORMANCE.items.map((it) => (
              <li key={it.title} className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                <IconTile icon={ICONS[it.icon]} dark />
                <h3 className="mt-4 text-lg font-bold">{it.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-300">{it.text}</p>
              </li>
            ))}
          </ul>
          <p className="mt-8 flex max-w-4xl gap-3 rounded-2xl bg-white/[0.06] p-5 text-[15px] leading-relaxed text-gray-200 ring-1 ring-white/10">
            <RiInformationLine aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-[#5EEAD4]" />
            {PERFORMANCE.outro}
          </p>
        </div>
      </section>

      {/* ───────────── Scalability ───────────── */}
      <section aria-labelledby="scale-heading" className="bg-white py-16 lg:py-24">
        <div className={WRAP}>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div>
              <SectionHeading id="scale-heading" eyebrow="Only as complex as needed">Database Scalability and Reliability</SectionHeading>
              <p className={`mt-5 ${P}`}>{SCALE.intro}</p>
              <p className={`mt-5 ${P}`}><Linked value={SCALE.outro} /></p>
            </div>
            <TermList items={SCALE.items} />
          </div>
          <Diagram image={IMAGES.availability} className="mt-12" />
        </div>
      </section>

      {/* ───────────── Migration ───────────── */}
      <section aria-labelledby="migration-heading" className="border-y border-[#9b1fe0]/10 bg-[#faf9f7] py-16 lg:py-24">
        <div className={WRAP}>
          <div className="max-w-3xl">
            <SectionHeading id="migration-heading" eyebrow="Complete, correct, reversible">Database Migration and Modernisation</SectionHeading>
            <p className={`mt-5 ${P}`}>{MIGRATION.intro}</p>
          </div>
          <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div>
              <h3 className="text-xl font-bold text-[#1a1a1a]" style={SERIF}>Our database migration services cover</h3>
              <TermList items={MIGRATION.services} />
            </div>
            <div className="self-start rounded-3xl bg-white p-6 ring-1 ring-[#AF00E8]/15 sm:p-8">
              <h3 className="text-xl font-bold text-[#1a1a1a]" style={SERIF}>{MIGRATION.riskTitle}</h3>
              <TermList items={MIGRATION.steps} ordered />
            </div>
          </div>
          <Diagram image={IMAGES.migration} className="mt-12" />
        </div>
      </section>

      {/* ───────────── Security ───────────── */}
      <section aria-labelledby="security-heading" className="relative overflow-hidden bg-[#0d0a12] py-16 text-white lg:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-[#AF00E8]/20 blur-3xl" />
        <div className={`${WRAP} relative`}>
          <div className="max-w-3xl">
            <SectionHeading id="security-heading" eyebrow="Designed in from the first schema" dark>Database Security and Data Protection</SectionHeading>
            <p className="mt-5 text-[15px] leading-relaxed text-gray-300 lg:text-base">{SECURITY_INTRO}</p>
          </div>
          <div className="mt-12">
            <IconCardGrid items={withIcons(SECURITY)} dark columns="sm:grid-cols-2 lg:grid-cols-3" compact />
          </div>
          <p className="mt-8 max-w-4xl rounded-2xl bg-white/[0.06] p-5 text-[15px] leading-relaxed text-gray-200 ring-1 ring-white/10"><Rich text={GDPR} dark /></p>
          <p className="mt-6 max-w-4xl text-sm leading-relaxed text-gray-400">{SECURITY_NOTE}</p>
        </div>
      </section>

      {/* ───────────── Integration ───────────── */}
      <section aria-labelledby="integration-heading" className="bg-white py-16 lg:py-24">
        <div className={WRAP}>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeading id="integration-heading" eyebrow="One data layer, many systems">Database Integration Services</SectionHeading>
              <p className={`mt-5 ${P}`}>{INTEGRATION.intro}</p>
              <h3 className="mt-8 text-xl font-bold text-[#1a1a1a]" style={SERIF}>{INTEGRATION.connectsTitle}</h3>
              <TermList items={INTEGRATION.connects} />
            </div>
            <div className="flex flex-col gap-6">
              <Photo image={IMAGES.integration} sizes={HALF} className="aspect-[16/10]" />
              <p className="rounded-2xl bg-[#f1fbf9] p-5 text-[15px] leading-relaxed text-gray-700 ring-1 ring-[#0F9F94]/20"><Rich text={INTEGRATION.reliable} /></p>
              <div className="rounded-2xl bg-[#faf5fd] p-5 text-[15px] leading-relaxed text-gray-700 ring-1 ring-[#AF00E8]/15">
                <p><Rich text={INTEGRATION.example} /></p>
                <p className="mt-3"><Linked value={INTEGRATION.web} /> <Linked value={INTEGRATION.erp} /></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── Industries ───────────── */}
      <section aria-labelledby="industries-heading" className="border-y border-[#9b1fe0]/10 bg-[#faf9f7] py-16 lg:py-24">
        <div className={WRAP}>
          <div className="max-w-3xl">
            <SectionHeading id="industries-heading" eyebrow="Typical data challenges">Database Solutions by Industry</SectionHeading>
            <p className={`mt-5 ${P}`}><em>{INDUSTRIES_NOTE}</em></p>
          </div>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {INDUSTRIES.map((ind) => (
              <li key={ind.title} className="flex flex-col rounded-2xl border border-gray-100 bg-white p-6">
                <IconTile icon={ICONS[ind.icon]} />
                <h3 className="mt-4 text-lg font-bold text-[#1a1a1a]">{ind.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600"><span className="font-semibold text-[#1a1a1a]">Challenge: </span>{ind.challenge}</p>
                <p className="mt-2 text-sm leading-relaxed text-gray-600"><span className="font-semibold text-[#0F9F94]">Approach: </span>{ind.approach}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ───────────── Process ───────────── */}
      <section id="process" aria-labelledby="process-heading" className="scroll-mt-28 bg-white py-16 lg:py-24">
        <div className={WRAP}>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <SectionHeading id="process-heading" eyebrow="11 stages">Our Database Design Process</SectionHeading>
            </div>
            <Photo image={IMAGES.team} sizes={HALF} className="aspect-[16/10]" />
          </div>
          <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((step, i) => (
              <li key={step.title} className="flex flex-col rounded-2xl border border-gray-100 bg-[#faf9f7] p-5">
                <div className="flex items-center">
                  <span aria-hidden="true" className="step-num">{String(i + 1).padStart(2, "0")}</span>
                  <span aria-hidden="true" className="step-line" />
                </div>
                <h3 className="mt-4 font-bold text-[#1a1a1a]">{i + 1}. {step.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">{step.what}</p>
                <p className="mt-4 rounded-xl bg-white px-3 py-2.5 text-xs leading-relaxed text-gray-700 ring-1 ring-[#5EEAD4]/60">
                  <span className="font-bold uppercase tracking-wider text-[#0F9F94]">Purpose: </span>{step.purpose}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ───────────── Custom vs off-the-shelf ───────────── */}
      <section aria-labelledby="compare-heading" className="border-y border-[#9b1fe0]/10 bg-[#faf9f7] py-16 lg:py-24">
        <div className={WRAP}>
          <div className="max-w-3xl">
            <SectionHeading id="compare-heading" eyebrow="Build or use a product?">Custom Database Design vs Off-the-Shelf Solutions</SectionHeading>
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
              <h3 className="text-lg font-bold text-[#1a1a1a]">{COMPARE.enoughTitle}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-gray-700">{COMPARE.enough}</p>
            </div>
            <div className="rounded-2xl bg-[#faf5fd] p-6 ring-1 ring-[#AF00E8]/15 sm:p-8">
              <h3 className="text-lg font-bold text-[#1a1a1a]">{COMPARE.customTitle}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-gray-700"><Linked value={COMPARE.custom} /></p>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── Technologies ───────────── */}
      <section aria-labelledby="tech-heading" className="bg-white py-16 lg:py-24">
        <div className={WRAP}>
          <div className="max-w-3xl">
            <SectionHeading id="tech-heading" eyebrow="Chosen for the workload">Technologies and Development Tools</SectionHeading>
            <p className={`mt-5 ${P}`}>{TECH.intro}</p>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {TECH.groups.map((g, i) => (
              <div key={g.title} className={`rounded-3xl p-6 ring-1 sm:p-7 ${["bg-[#f1fbf9] ring-[#0F9F94]/20", "bg-[#faf5fd] ring-[#AF00E8]/15", "bg-[#fffaeb] ring-[#E3A600]/25"][i]}`}>
                <h3 className="text-xl font-bold text-[#1a1a1a]" style={SERIF}>{g.title}</h3>
                <TermList items={g.items} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── Why ───────────── */}
      <section aria-labelledby="why-heading" className="border-y border-[#9b1fe0]/10 bg-[#faf9f7] py-16 lg:py-24">
        <div className={WRAP}>
          <div className="max-w-3xl">
            <SectionHeading id="why-heading" eyebrow="How we work">Why Choose ClickMasters for Database Design and Development?</SectionHeading>
          </div>
          <div className="mt-12">
            <IconCardGrid items={withIcons(WHY)} columns="sm:grid-cols-2 lg:grid-cols-4" />
          </div>
        </div>
      </section>

      <FaqSection
        title="Database Design and Development: Frequently Asked Questions"
        intro="SQL vs NoSQL, normalisation, cost, migration, performance and choosing a database, answered plainly."
        faqs={FAQS}
      />

      <FinalCta
        title={FINAL_CTA.title}
        titleAccent={FINAL_CTA.titleAccent}
        body={FINAL_CTA.body}
        bring={FINAL_CTA.bring}
        primaryCta={{ label: "Discuss Your Database Project", href: CONTACT_HREF }}
        secondaryCta={{ label: "Explore Our Development Services", href: "/services" }}
      />
    </>
  );
}
