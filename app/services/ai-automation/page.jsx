// /services/ai-automation
// Content: ./content.ts (from the AI Automation Services SEO pack). Fully server-rendered.
// A dedicated page (same building blocks as /services/rag-development): the pack
// needs a comparison table, architecture walkthrough, 14 use cases and exactly
// four contextual links. Takes precedence over app/services/[slug].
import Image from "next/image";
import {
  RiAlarmWarningLine, RiArchiveLine, RiBankLine, RiBarChartBoxLine, RiBrainLine, RiBriefcaseLine, RiBuilding2Line,
  RiCheckLine, RiCheckboxCircleLine, RiCodeSSlashLine, RiContactsLine, RiCustomerService2Line, RiDashboard3Line,
  RiFileShield2Line, RiFileTextLine, RiFlowChart, RiFocus3Line, RiGraduationCapLine, RiHistoryLine, RiHome4Line,
  RiHospitalLine, RiInboxLine, RiInformationLine, RiKeyLine, RiLockLine, RiMailLine, RiMoneyPoundCircleLine,
  RiPlugLine, RiRefreshLine, RiSearchEyeLine, RiShieldCheckLine, RiShoppingCartLine, RiStackLine, RiTeamLine,
  RiToolsLine, RiTruckLine, RiUserLine,
} from "react-icons/ri";

import JsonLd from "../../Components/JsonLd";
import { IconTile, SectionHeading, WRAP } from "../../Components/ServicePageUI";
import {
  ComparisonTable, FaqSection, FinalCta, IconCardGrid, Linked, ProcessGrid, ServiceHero, faqPageJsonLd,
} from "../../Components/ServicePageSections";
import { detailPageJsonLd, detailPageMetadata } from "../../lib/site";
import {
  COMPARE, ENTERPRISE, FAQS, FINAL_CTA, HERO, HOW, IMAGES, INDUSTRIES, INTEGRATIONS, PATH, PROCESS, PROCESS_OUTRO,
  PROCESSES, SCHEMA_SERVICE, SECURITY, SEO, SERVICES, SERVICES_NOTE, WHAT_IS, WHY,
} from "./content";

export const metadata = detailPageMetadata({ path: PATH, ...SEO });

const CRUMBS = [
  { name: "Services", path: "/services" },
  { name: "AI Automation", path: PATH },
];

// All icons are decorative (headings carry the meaning).
const ICONS = {
  search: RiSearchEyeLine, flow: RiFlowChart, file: RiFileTextLine, contacts: RiContactsLine, finance: RiMoneyPoundCircleLine,
  support: RiCustomerService2Line, chart: RiBarChartBoxLine, mail: RiMailLine, plug: RiPlugLine, dashboard: RiDashboard3Line,
  target: RiFocus3Line, inbox: RiInboxLine, archive: RiArchiveLine, refresh: RiRefreshLine, cart: RiShoppingCartLine,
  team: RiTeamLine, user: RiUserLine, check: RiCheckboxCircleLine, health: RiHospitalLine, bank: RiBankLine,
  truck: RiTruckLine, education: RiGraduationCapLine, home: RiHome4Line, briefcase: RiBriefcaseLine, factory: RiBuilding2Line,
  code: RiCodeSSlashLine, lock: RiLockLine, history: RiHistoryLine, alert: RiAlarmWarningLine, shield: RiShieldCheckLine,
  stack: RiStackLine, tools: RiToolsLine, key: RiKeyLine, privacy: RiFileShield2Line, brain: RiBrainLine,
};
const withIcons = (items) => items.map((it) => ({ ...it, icon: ICONS[it.icon] }));

/** Renders **bold** markers from the content file. */
function Rich({ text }) {
  return text.split(/(\*\*[^*]+\*\*)/).map((part, i) =>
    part.startsWith("**") ? <strong key={i} className="font-semibold text-[#1a1a1a]">{part.slice(2, -2)}</strong> : part
  );
}

/** A diagram drawn for this page (PNG in /public), in a card. */
function Diagram({ image, className = "", dark = false }) {
  return (
    <figure className={`rounded-3xl bg-white p-4 sm:p-8 ${dark ? "" : "border border-gray-100 shadow-[0_20px_60px_-30px_rgba(60,0,90,0.35)]"} ${className}`}>
      <Image src={image.src} width={image.width} height={image.height} alt={image.alt} sizes="(min-width: 1280px) 1216px, 100vw" className="h-auto w-full" />
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

function TermList({ items, ordered = false }) {
  const Tag = ordered ? "ol" : "ul";
  return (
    <Tag className="mt-4 space-y-2.5">
      {items.map(([term, text], i) => (
        <li key={term} className="flex gap-3 text-[15px] leading-relaxed text-gray-700">
          {ordered ? (
            <span aria-hidden="true" className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#AF00E8] text-xs font-bold text-white">{i + 1}</span>
          ) : (
            <RiCheckLine aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-[#AF00E8]" />
          )}
          <span><strong className="font-semibold text-[#1a1a1a]">{term}</strong> {text}</span>
        </li>
      ))}
    </Tag>
  );
}

const P = "text-[15px] leading-relaxed text-gray-600 lg:text-base";
const SERIF = { fontFamily: "Garamond, serif" };
const HALF = "(min-width: 1280px) 600px, (min-width: 1024px) 48vw, 100vw";

export default function AiAutomation() {
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
        primaryCta={{ label: "Discuss a Process to Automate", href: "/contact" }}
        secondaryCta={{ label: "See What Can Be Automated", href: "#processes" }}
        stats={HERO.stats}
        figureLabel="An automated invoice workflow"
        figure={
          <Image
            src={IMAGES.hero.src} width={IMAGES.hero.width} height={IMAGES.hero.height} alt={IMAGES.hero.alt}
            sizes="(min-width: 1280px) 560px, (min-width: 1024px) 44vw, 100vw" className="h-auto w-full" priority
          />
        }
        figcaption="Rules handle what is certain, AI reads the document, and a person approves anything outside the limits."
      />

      {/* ───────────── What AI automation is ───────────── */}
      <section aria-labelledby="what-heading" className="bg-white py-16 lg:py-24">
        <div className={WRAP}>
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
            <div>
              <SectionHeading id="what-heading" eyebrow="The basics">What AI Automation Is</SectionHeading>
              <p className={`mt-6 ${P}`}><Rich text={WHAT_IS.p1} /></p>
              <p className={`mt-5 ${P}`}>{WHAT_IS.p2}</p>
              <TermList items={WHAT_IS.steps} ordered />
            </div>
            <Photo image={IMAGES.desk} sizes="(min-width: 1280px) 540px, (min-width: 1024px) 42vw, 100vw" className="aspect-[4/3]" />
          </div>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            <div className="rounded-3xl bg-gradient-to-br from-[#faf5fd] to-[#f1fbf9] p-6 ring-1 ring-[#AF00E8]/10 sm:p-8">
              <h3 className="text-2xl font-bold text-[#1a1a1a]" style={SERIF}>{WHAT_IS.helpsTitle}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-gray-700">{WHAT_IS.helpsIntro}</p>
              <TermList items={WHAT_IS.helps} />
            </div>
            <div className="rounded-3xl bg-[#faf9f7] p-6 ring-1 ring-gray-100 sm:p-8">
              <h3 className="text-2xl font-bold text-[#1a1a1a]" style={SERIF}>{WHAT_IS.notTitle}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-gray-700">{WHAT_IS.not}</p>
            </div>
            <div className="rounded-3xl bg-[#fff8ec] p-6 ring-1 ring-[#E3A600]/25 sm:p-8">
              <h3 className="text-2xl font-bold text-[#1a1a1a]" style={SERIF}>{WHAT_IS.loopTitle}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-gray-700">{WHAT_IS.loop}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── Approaches compared ───────────── */}
      <section aria-labelledby="compare-heading" className="border-y border-[#9b1fe0]/10 bg-[#faf9f7] py-16 lg:py-24">
        <div className={WRAP}>
          <div className="max-w-3xl">
            <SectionHeading id="compare-heading" eyebrow="AI automation vs RPA">Rule-Based Automation, RPA, AI Automation and Agents Compared</SectionHeading>
          </div>
          <Diagram image={IMAGES.approaches} className="mt-10" />
          <div className="mt-10">
            <ComparisonTable
              labelledBy="compare-heading"
              headers={COMPARE.headers.map((label) => ({ label }))}
              rows={COMPARE.rows}
              minWidth="min-w-[900px]"
            />
          </div>
          <p className={`mt-8 max-w-4xl ${P}`}><Linked value={COMPARE.outro} /></p>
        </div>
      </section>

      {/* ───────────── How it works ───────────── */}
      <section id="how-it-works" aria-labelledby="how-heading" className="scroll-mt-28 bg-white py-16 lg:py-24">
        <div className={WRAP}>
          <div className="max-w-3xl">
            <SectionHeading id="how-heading" eyebrow="Ten steps, AI at two of them">How AI Workflow Automation Works</SectionHeading>
            <p className={`mt-5 ${P}`}>{HOW.intro}</p>
          </div>
          <Diagram image={IMAGES.architecture} className="mt-10" />
          <ol className="mt-12 grid gap-4 md:grid-cols-2">
            {HOW.steps.map(([term, text], i) => (
              <li key={term} className="flex gap-4 rounded-2xl border border-gray-100 bg-[#faf9f7] p-5">
                <span aria-hidden="true" className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#AF00E8] text-sm font-bold text-white">{i + 1}</span>
                <p className="text-[15px] leading-relaxed text-gray-700"><strong className="font-semibold text-[#1a1a1a]">{term}</strong> {text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ───────────── Services ───────────── */}
      <section aria-labelledby="services-heading" className="relative overflow-hidden bg-[#0d0a12] py-16 text-white lg:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-[#AF00E8]/25 blur-3xl" />
        <div className={`${WRAP} relative`}>
          <div className="max-w-3xl">
            <SectionHeading id="services-heading" eyebrow="AI automation development" dark>Our AI Automation Services</SectionHeading>
          </div>
          <div className="mt-12">
            <IconCardGrid items={withIcons(SERVICES)} dark columns="sm:grid-cols-2 lg:grid-cols-3" />
          </div>
          <p className="mt-8 max-w-4xl text-sm italic leading-relaxed text-gray-400">{SERVICES_NOTE}</p>
        </div>
      </section>

      {/* ───────────── Processes we can automate ───────────── */}
      <section id="processes" aria-labelledby="processes-heading" className="scroll-mt-28 border-b border-[#9b1fe0]/10 bg-[#faf9f7] py-16 lg:py-24">
        <div className={WRAP}>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <SectionHeading id="processes-heading" eyebrow="Automated business workflows">Business Processes We Can Automate</SectionHeading>
              <p className={`mt-5 ${P}`}><em>{PROCESSES.note}</em></p>
            </div>
            <Photo image={IMAGES.conveyor} sizes={HALF} className="aspect-[16/10]" />
          </div>
          <ul className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {PROCESSES.items.map((u) => (
              <li key={u.title} className="flex flex-col rounded-2xl border border-gray-100 bg-white p-6">
                <div className="flex items-center gap-3">
                  <IconTile icon={ICONS[u.icon]} size="sm" />
                  <h3 className="text-lg font-bold text-[#1a1a1a]">{u.title}</h3>
                </div>
                <dl className="mt-4 space-y-2 text-sm leading-relaxed text-gray-600">
                  <div><dt className="inline font-semibold text-gray-800">Problem: </dt><dd className="inline">{u.problem}</dd></div>
                  <div><dt className="inline font-semibold text-gray-800">Workflow: </dt><dd className="inline">{u.workflow}</dd></div>
                  <div><dt className="inline font-semibold text-[#7a1fa2]">Where AI helps: </dt><dd className="inline">{u.ai}</dd></div>
                  <div><dt className="inline font-semibold text-gray-800">Systems: </dt><dd className="inline"><Linked value={u.systems} /></dd></div>
                </dl>
                <p className="mt-auto flex gap-2 pt-4 text-xs leading-relaxed text-gray-700">
                  <span className="flex gap-2 rounded-xl bg-[#f1fbf9] px-3 py-2 ring-1 ring-[#5EEAD4]/60">
                    <RiUserLine aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[#0F9F94]" />
                    <span><span className="font-bold uppercase tracking-wider text-[#0F9F94]">Human oversight: </span>{u.oversight}</span>
                  </span>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ───────────── Industries ───────────── */}
      <section aria-labelledby="industries-heading" className="bg-[#0d0a12] py-16 text-white lg:py-24">
        <div className={WRAP}>
          <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
            <SectionHeading id="industries-heading" eyebrow="Opportunities and risks" dark>AI Automation Across Industries</SectionHeading>
            <p className="text-[15px] italic leading-relaxed text-gray-300">{INDUSTRIES.note}</p>
          </div>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {INDUSTRIES.items.map((ind) => (
              <li key={ind.title} className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-colors hover:border-[#AF00E8]/50 hover:bg-white/[0.07]">
                <IconTile icon={ICONS[ind.icon]} dark />
                <h3 className="mt-4 text-lg font-bold">{ind.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-300">{ind.text}</p>
                {ind.risk && (
                  <p className="mt-4 rounded-xl bg-[#AF00E8]/15 px-3 py-2 text-xs leading-relaxed text-[#ecd0ff] ring-1 ring-[#AF00E8]/30">
                    <span className="font-bold uppercase tracking-wider">Risk: </span>{ind.risk}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ───────────── Integrations ───────────── */}
      <section aria-labelledby="integrations-heading" className="bg-white py-16 lg:py-24">
        <div className={WRAP}>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <SectionHeading id="integrations-heading" eyebrow="AI integration services">Business Software and API Integrations</SectionHeading>
              <p className={`mt-5 ${P}`}>{INTEGRATIONS.intro}</p>
              <ul className="mt-6 flex flex-wrap gap-2" aria-label="Platforms we have integrated with">
                {INTEGRATIONS.platforms.map((p) => (
                  <li key={p} className="rounded-full bg-[#faf5fd] px-3 py-1.5 text-xs font-semibold text-[#7a1fa2] ring-1 ring-[#AF00E8]/15">{p}</li>
                ))}
              </ul>
            </div>
            <Photo image={IMAGES.servers} sizes={HALF} className="aspect-[4/3]" />
          </div>
          <Diagram image={IMAGES.integration} className="mt-14" />
          <div className="mt-12 grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
            <div>
              <h3 className="text-2xl font-bold text-[#1a1a1a] lg:text-3xl" style={SERIF}>{INTEGRATIONS.reliableTitle}</h3>
              <TermList items={INTEGRATIONS.reliable} />
            </div>
            <p className={`self-end rounded-3xl bg-[#faf9f7] p-6 ring-1 ring-gray-100 sm:p-8 ${P}`}><Linked value={INTEGRATIONS.outro} /></p>
          </div>
        </div>
      </section>

      {/* ───────────── Enterprise ───────────── */}
      <section aria-labelledby="enterprise-heading" className="border-y border-[#9b1fe0]/10 bg-[#faf9f7] py-16 lg:py-24">
        <div className={WRAP}>
          <div className="max-w-3xl">
            <SectionHeading id="enterprise-heading" eyebrow="From one workflow to many">Enterprise AI Automation</SectionHeading>
            <p className={`mt-5 ${P}`}>{ENTERPRISE.intro}</p>
          </div>
          <div className="mt-12">
            <IconCardGrid items={withIcons(ENTERPRISE.items)} columns="sm:grid-cols-2 lg:grid-cols-3" compact />
          </div>
          <div className="mt-16 rounded-3xl bg-white p-6 ring-1 ring-gray-100 sm:p-10">
            <h3 className="text-2xl font-bold text-[#1a1a1a] lg:text-3xl" style={SERIF}>{ENTERPRISE.chooseTitle}</h3>
            <div className="mt-6 grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:items-center">
              <div>
                <p className={P}>{ENTERPRISE.chooseIntro}</p>
                <TermList items={ENTERPRISE.factors} ordered />
                <p className={`mt-5 ${P}`}>{ENTERPRISE.chooseOutro}</p>
              </div>
              <Image src={IMAGES.matrix.src} width={IMAGES.matrix.width} height={IMAGES.matrix.height} alt={IMAGES.matrix.alt} sizes="(min-width: 1280px) 720px, (min-width: 1024px) 58vw, 100vw" className="h-auto w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── Process ───────────── */}
      <ProcessGrid
        eyebrow="11 steps, two-week sprints"
        title="Our AI Automation Development Process"
        columns="md:grid-cols-2 lg:grid-cols-3"
        steps={PROCESS.map((s) => ({ title: s.title, rows: [{ label: "What happens", text: s.text }] }))}
        after={<p className={`mt-10 max-w-4xl ${P}`}>{PROCESS_OUTRO}</p>}
      />

      {/* ───────────── Security ───────────── */}
      <section aria-labelledby="security-heading" className="relative overflow-hidden bg-[#0d0a12] py-16 text-white lg:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-[#AF00E8]/20 blur-3xl" />
        <div className={`${WRAP} relative`}>
          <div className="max-w-3xl">
            <SectionHeading id="security-heading" eyebrow="Safe in production" dark>Enterprise Security and Reliability</SectionHeading>
            <p className="mt-5 text-[15px] leading-relaxed text-gray-300 lg:text-base">{SECURITY.intro}</p>
          </div>
          <Diagram image={IMAGES.monitoring} className="mt-10" dark />
          <ul className="mt-10 grid gap-4 md:grid-cols-2">
            {SECURITY.items.map((it) => (
              <li key={it.title} className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                <IconTile icon={ICONS[it.icon]} dark />
                <div>
                  <h3 className="text-lg font-bold">{it.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-300">{it.text}</p>
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-8 flex max-w-4xl gap-3 rounded-2xl bg-white/[0.06] p-5 text-[15px] leading-relaxed text-gray-200 ring-1 ring-white/10">
            <RiInformationLine aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-[#e9c2ff]" />
            {SECURITY.note}
          </p>
        </div>
      </section>

      {/* ───────────── Why custom ───────────── */}
      <section aria-labelledby="why-heading" className="bg-white py-16 lg:py-24">
        <div className={WRAP}>
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <div>
              <SectionHeading id="why-heading" eyebrow="AI automation company">Why Consider Custom AI Automation?</SectionHeading>
              <p className={`mt-5 ${P}`}>{WHY.intro}</p>
              <p className="mt-6 font-semibold text-[#1a1a1a]">{WHY.whenTitle}</p>
              <ul className="mt-3 space-y-2.5">
                {WHY.when.map((w) => (
                  <li key={w} className="flex gap-3 text-[15px] leading-relaxed text-gray-700">
                    <RiCheckLine aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-[#AF00E8]" />{w}
                  </li>
                ))}
              </ul>
            </div>
            <Photo image={IMAGES.dashboard} sizes={HALF} className="aspect-[4/3] lg:self-center" />
          </div>
          <h3 className="mt-16 text-2xl font-bold text-[#1a1a1a] lg:text-3xl" style={SERIF}>How ClickMasters approaches it</h3>
          <div className="mt-8">
            <IconCardGrid items={withIcons(WHY.answers)} columns="sm:grid-cols-2 lg:grid-cols-3" compact />
          </div>
        </div>
      </section>

      <FaqSection
        title="AI Automation Services: Frequently Asked Questions"
        intro="AI automation vs traditional automation and agents, CRM and ERP integration, small businesses, cost, timelines and security, answered plainly."
        faqs={FAQS}
      />

      <FinalCta
        title={FINAL_CTA.title}
        titleAccent={FINAL_CTA.titleAccent}
        body={FINAL_CTA.body}
        bring={FINAL_CTA.bring}
        primaryCta={{ label: "Discuss a Process to Automate", href: "/contact" }}
        secondaryCta={{ label: "Talk to an Automation Engineer", href: "/contact" }}
      />
    </>
  );
}
