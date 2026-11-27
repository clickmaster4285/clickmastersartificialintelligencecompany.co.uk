// /industries/manufacturing
// Content: ./content.ts (from the Manufacturing Industry SEO pack). Fully server-rendered.
// Every industry now has a real page, so the old app/industries/[slug] placeholder route was removed.
import Image from "next/image";
import {
  RiAlarmWarningLine, RiArchiveLine, RiArrowDownLine, RiBarChartBoxLine, RiBookOpenLine, RiBuilding2Line,
  RiBuilding3Line, RiCapsuleLine, RiCarLine, RiCheckDoubleLine, RiCheckLine, RiCloudLine, RiCodeSSlashLine,
  RiCopyrightLine, RiCpuLine, RiDashboard3Line, RiDashboardLine, RiDatabase2Line, RiFileChartLine,
  RiFileList3Line, RiFileShield2Line, RiFileTextLine, RiFlowChart, RiFocus3Line, RiGitBranchLine, RiGroupLine,
  RiHammerLine, RiHistoryLine, RiInboxArchiveLine, RiInformationLine, RiKeyLine, RiLayoutLine, RiLineChartLine,
  RiLinksLine, RiListCheck3, RiLockLine, RiNodeTree, RiPencilRuler2Line, RiPlugLine, RiRadarLine, RiRefreshLine,
  RiRemoteControlLine, RiRestaurantLine, RiRobot2Line, RiSave3Line, RiSensorLine, RiServerLine, RiSettings3Line,
  RiSettings5Line, RiShapesLine, RiShieldCheckLine, RiShieldKeyholeLine, RiShieldUserLine, RiStackLine, RiToolsLine,
  RiTruckLine, RiUserFollowLine, RiUserSettingsLine, RiCalendarCheckLine,
} from "../../Components/icons";

import JsonLd from "../../Components/JsonLd";
import ScopingCallBlock from "../../Components/ScopingCallBlock";
import { IconTile, SectionHeading, WRAP } from "../../Components/ServicePageUI";
import {
  FaqSection, FinalCta, IconCardGrid, ProcessGrid, RichText, ServiceHero, faqPageJsonLd,
} from "../../Components/ServicePageSections";
import { detailPageJsonLd, detailPageMetadata } from "../../lib/site";
import {
  AI_CAPABILITIES, AUDIENCES, CHALLENGES, FAQS, FINAL_CTA, HERO, HERO_FLOW, IMAGES, INTEGRATION, LANDSCAPE, OTIT,
  PATH, PROCESS, PROCESS_INTRO, SCHEMA_SERVICE, SECURITY, SECURITY_DISCLAIMER, SECURITY_INTRO, SECURITY_STATEMENT, SEO,
  SOFTWARE, USE_CASES, USE_CASES_NOTE, USE_CASE_FIELDS, WHY, WHY_INTRO, WHY_OUTRO,
} from "./content";

export const metadata = detailPageMetadata({ path: PATH, ...SEO });

const CRUMBS = [
  { name: "Industries", path: "/industries" },
  { name: "Smart Manufacturing", path: PATH },
];

// All icons are decorative (headings carry the meaning).
const ICONS = {
  industry: RiBuilding3Line, connect: RiNodeTree, ai: RiRobot2Line, visibility: RiRadarLine, maintenance: RiToolsLine,
  inspect: RiFocus3Line, plan: RiCalendarCheckLine, mes: RiListCheck3, sensor: RiSensorLine, chain: RiLinksLine,
  twin: RiShapesLine, people: RiGroupLine, factory: RiBuilding3Line, building: RiBuilding2Line,
  advanced: RiSettings3Line, car: RiCarLine, engineering: RiPencilRuler2Line, chip: RiCpuLine, food: RiRestaurantLine,
  pharma: RiCapsuleLine, tools: RiHammerLine, box: RiArchiveLine, equipment: RiSettings5Line, cloud: RiCloudLine,
  alert: RiAlarmWarningLine, plug: RiPlugLine, report: RiFileChartLine, gauge: RiDashboard3Line, legacy: RiRefreshLine,
  data: RiDatabase2Line, shield: RiShieldCheckLine, analytics: RiBarChartBoxLine, knowledge: RiBookOpenLine,
  automation: RiFlowChart, erp: RiStackLine, dashboard: RiDashboardLine, supplier: RiTruckLine,
  workorder: RiFileList3Line, document: RiFileTextLine, trend: RiLineChartLine, stock: RiInboxArchiveLine,
  privacy: RiFileShield2Line, lock: RiLockLine, copyright: RiCopyrightLine, key: RiKeyLine, roles: RiUserSettingsLine,
  code: RiCodeSSlashLine, network: RiShieldKeyholeLine, remote: RiRemoteControlLine, backup: RiSave3Line,
  history: RiHistoryLine, check: RiCheckDoubleLine, safety: RiShieldUserLine, release: RiGitBranchLine,
  portal: RiLayoutLine, server: RiServerLine,
};
const withIcons = (items) => items.map((it) => ({ ...it, icon: ICONS[it.icon] }));

const P = "text-[15px] leading-relaxed text-gray-600 lg:text-base";
const SERIF = { fontFamily: "Garamond, serif" };
const LABEL = "text-[11px] font-bold uppercase tracking-[0.14em] text-gray-500";
const HALF = "(min-width: 1280px) 600px, (min-width: 1024px) 48vw, 100vw";

/** **bold** markers, with [anchor](/path) links in the plain parts. */
function Rich({ text }) {
  return text.split(/(\*\*[^*]+\*\*)/).map((part, i) =>
    part.startsWith("**")
      ? <strong key={i} className="font-semibold text-[#1a1a1a]">{part.slice(2, -2)}</strong>
      : <RichText key={i} text={part} />,
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

function FlowArrow({ label }) {
  return (
    <div aria-hidden="true" className="flex items-center justify-center gap-2 py-1.5 text-[#AF00E8]/60">
      <RiArrowDownLine className="h-5 w-5" />
      {label && <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#AF00E8]">{label}</span>}
    </div>
  );
}

/** Hero diagram: shop floor → segmented OT gateway → one-way data → platform apps → ERP, with human review. */
function ConnectedFactoryDiagram() {
  return (
    <div role="img" aria-label={HERO.figureAlt} className="text-sm">
      <div className="rounded-2xl border border-dashed border-gray-300 p-2.5">
        <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-gray-500">Segmented plant network (OT)</p>
        <ul className="mt-2 grid grid-cols-3 gap-2">
          {HERO_FLOW.shopFloor.map((s, i) => {
            const Icon = [RiSettings5Line, RiSensorLine, RiGroupLine][i];
            return (
              <li key={s} className="flex flex-col items-center gap-1 rounded-xl bg-[#faf9f7] px-2 py-2 text-center text-[12px] font-semibold text-gray-700 ring-1 ring-gray-100">
                <Icon aria-hidden="true" className="h-4 w-4 text-gray-400" />{s}
              </li>
            );
          })}
        </ul>
        <p className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-white px-3 py-2 text-[12px] font-semibold text-gray-700 ring-1 ring-gray-200">
          <RiShieldKeyholeLine aria-hidden="true" className="h-4 w-4 text-[#AF00E8]" />{HERO_FLOW.gateway}
        </p>
      </div>
      <FlowArrow label={HERO_FLOW.oneWay} />
      <div className="rounded-2xl bg-gradient-to-br from-[#2a0b3a] to-[#0d0a12] p-4 text-white">
        <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[#e9c2ff]">
          <RiDatabase2Line aria-hidden="true" className="h-3.5 w-3.5" />Industrial data platform
        </p>
        <ul className="mt-3 grid grid-cols-4 gap-1.5">
          {HERO_FLOW.apps.map((a) => (
            <li key={a} className="rounded-lg bg-white/10 px-1 py-2 text-center text-[11.5px] font-semibold">{a}</li>
          ))}
        </ul>
      </div>
      <FlowArrow />
      <p className="flex items-center justify-center gap-2 rounded-xl bg-[#f1fbf9] px-3 py-2.5 text-[12.5px] font-semibold text-[#0b6f68] ring-1 ring-[#0F9F94]/20">
        <RiStackLine aria-hidden="true" className="h-4 w-4" />{HERO_FLOW.business}
      </p>
      <p className="mt-2 flex items-center justify-center gap-2 rounded-full bg-[#fffaeb] px-4 py-2 text-[12px] font-semibold text-[#8a6400] ring-1 ring-[#E3A600]/40">
        <RiUserFollowLine aria-hidden="true" className="h-4 w-4 shrink-0" />{HERO_FLOW.review}
      </p>
    </div>
  );
}

export default function ManufacturingIndustry() {
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
        primaryCta={{ label: "Discuss Your Manufacturing Project", href: "/contact" }}
        secondaryCta={{ label: "Explore Our Technology Solutions", href: "/solutions" }}
        stats={HERO.trust}
        figureLabel="Factory data in, decisions with people"
        figure={<ConnectedFactoryDiagram />}
        figcaption="Illustrative architecture, not a client project."
      />

      <ScopingCallBlock path={PATH} service="manufacturing software" />

      {/* ───────────── Landscape ───────────── */}
      <section aria-labelledby="landscape-heading" className="bg-white py-16 lg:py-24">
        <div className={WRAP}>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <SectionHeading id="landscape-heading" eyebrow="AI in manufacturing">{LANDSCAPE.title}</SectionHeading>
              <p className={`mt-6 ${P}`}>{LANDSCAPE.intro}</p>
            </div>
            <Photo image={IMAGES.factory} sizes={HALF} className="aspect-[3/2]" />
          </div>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {LANDSCAPE.trends.map((t) => (
              <li key={t.title} className="rounded-2xl border border-gray-100 bg-[#faf9f7] p-5">
                <IconTile icon={ICONS[t.icon]} size="sm" />
                <h3 className="mt-3 font-bold leading-snug text-[#1a1a1a]">{t.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-gray-600">{t.text}</p>
              </li>
            ))}
          </ul>

          <div className="mt-12 rounded-3xl bg-[#faf5fd] p-6 ring-1 ring-[#AF00E8]/15 sm:p-8">
            <p className="text-lg font-bold text-[#1a1a1a]">{LANDSCAPE.adoptionIntro}</p>
            <div className="mt-5 grid gap-4 lg:grid-cols-4">
              <dl className="contents">
                {LANDSCAPE.stats.map((s) => (
                  // Figure shown above its description; DOM order stays dt -> dd.
                  <div key={s.value} className="flex flex-col-reverse justify-end rounded-2xl bg-white px-5 py-4 ring-1 ring-[#AF00E8]/10">
                    <dt className="mt-2 text-sm leading-snug text-gray-700">
                      {s.text}. <span className="text-gray-500">Source: {s.source}.</span>
                    </dt>
                    <dd className="text-[30px] font-bold leading-none text-[#AF00E8]" style={SERIF}>{s.value}</dd>
                  </div>
                ))}
              </dl>
              {LANDSCAPE.evidence.map((e) => (
                <div key={e.title} className="rounded-2xl bg-white px-5 py-4 ring-1 ring-[#AF00E8]/10">
                  <p className="font-bold leading-snug text-[#1a1a1a]">{e.title}</p>
                  <p className="mt-0.5 text-xs text-gray-500">{e.source}</p>
                  <p className="mt-2 text-sm leading-relaxed text-gray-700">{e.text}</p>
                </div>
              ))}
            </div>
          </div>
          <p className={`mt-10 max-w-4xl ${P}`}>{LANDSCAPE.outro}</p>
        </div>
      </section>

      {/* ───────────── Audiences ───────────── */}
      <section aria-labelledby="audiences-heading" className="border-y border-[#9b1fe0]/10 bg-[#faf9f7] py-16 lg:py-24">
        <div className={WRAP}>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <SectionHeading id="audiences-heading" eyebrow="Who we build for">Different Manufacturers, Different Requirements</SectionHeading>
            <Photo image={IMAGES.lathe} sizes={HALF} className="aspect-[16/10]" />
          </div>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {AUDIENCES.map((a) => (
              <li key={a.title} className="flex gap-4 rounded-2xl border border-gray-100 bg-white p-5 transition-colors hover:border-[#AF00E8]/25">
                <IconTile icon={ICONS[a.icon]} size="sm" />
                <div>
                  <h3 className="font-bold leading-snug text-[#1a1a1a]">{a.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-gray-600">{a.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ───────────── Challenges ───────────── */}
      <section aria-labelledby="challenges-heading" className="bg-white py-16 lg:py-24">
        <div className={WRAP}>
          <div className="max-w-3xl">
            <SectionHeading id="challenges-heading" eyebrow="On the shop floor">Manufacturing Challenges We Help Address</SectionHeading>
          </div>
          <ol className="mt-12 grid gap-4 lg:grid-cols-2">
            {CHALLENGES.map((c, i) => (
              <li key={c.title} className="rounded-2xl border border-gray-100 bg-[#faf9f7] p-6">
                <div className="flex items-center gap-4">
                  <IconTile icon={ICONS[c.icon]} />
                  <h3 className="text-lg font-bold leading-snug text-[#1a1a1a]">
                    <span aria-hidden="true" className="mr-1.5 text-[#AF00E8]">{String(i + 1).padStart(2, "0")}</span>{c.title}
                  </h3>
                </div>
                <dl className="mt-4 grid gap-2.5 sm:grid-cols-2">
                  <div className="rounded-xl bg-white px-4 py-3 ring-1 ring-gray-100">
                    <dt className={LABEL}>What it looks like</dt>
                    <dd className="mt-1 text-sm leading-relaxed text-gray-700">{c.looks}</dd>
                  </div>
                  <div className="rounded-xl bg-white px-4 py-3 ring-1 ring-gray-100">
                    <dt className={LABEL}>Why it matters</dt>
                    <dd className="mt-1 text-sm leading-relaxed text-gray-700">{c.matters}</dd>
                  </div>
                  <div className="rounded-xl bg-[#f1fbf9] px-4 py-3 ring-1 ring-[#0F9F94]/20">
                    <dt className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#0F9F94]">How software can help</dt>
                    <dd className="mt-1 text-sm leading-relaxed text-gray-700">{c.help}</dd>
                  </div>
                  <div className="rounded-xl bg-[#fffaeb] px-4 py-3 ring-1 ring-[#E3A600]/25">
                    <dt className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#8a6400]">Where people remain essential</dt>
                    <dd className="mt-1 text-sm leading-relaxed text-gray-700">{c.people}</dd>
                  </div>
                </dl>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ───────────── AI solutions ───────────── */}
      <section id="ai-solutions" aria-labelledby="ai-heading" className="scroll-mt-28 border-y border-[#9b1fe0]/10 bg-[#faf9f7] py-16 lg:py-24">
        <div className={WRAP}>
          <div className="max-w-3xl">
            <SectionHeading id="ai-heading" eyebrow="8 capabilities">AI-Powered Manufacturing Solutions</SectionHeading>
          </div>

          <nav aria-label="AI solutions on this page" className="mt-8">
            <ul className="flex flex-wrap gap-2">
              {AI_CAPABILITIES.map((c) => (
                <li key={c.id}>
                  <a href={`#${c.id}`} className="inline-flex rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:border-[#AF00E8]/40 hover:text-[#AF00E8]">
                    {c.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-10 space-y-6">
            {AI_CAPABILITIES.map((c) => (
              <article
                key={c.id}
                id={c.id}
                aria-labelledby={`${c.id}-heading`}
                className={`scroll-mt-28 rounded-3xl border border-gray-100 bg-white p-6 sm:p-8 ${c.image ? "grid gap-8 lg:grid-cols-[1.25fr_1fr] lg:items-start" : ""}`}
              >
                <div>
                  <div className="flex items-center gap-3">
                    <IconTile icon={ICONS[c.icon]} />
                    <h3 id={`${c.id}-heading`} className="text-[22px] font-bold leading-snug text-[#1a1a1a] lg:text-[26px]" style={SERIF}>{c.title}</h3>
                  </div>
                  <div className="mt-4 space-y-4">
                    {c.paragraphs.map((p) => <p key={p.slice(0, 32)} className={P}><Rich text={p} /></p>)}
                  </div>
                  {c.items && (
                    <ul className={`mt-4 grid gap-2.5 ${c.image ? "" : "md:grid-cols-2"}`}>
                      {c.items.map((it) => (
                        <li key={it.text} className="flex gap-2.5 rounded-xl bg-[#faf9f7] px-4 py-3 text-sm leading-relaxed text-gray-700 ring-1 ring-gray-100">
                          <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#AF00E8]" />
                          <span>{it.term && <strong className="font-semibold text-[#1a1a1a]">{it.term} </strong>}{it.text}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {c.outro && (
                    <div className="mt-5 space-y-4">
                      {c.outro.map((p) => <p key={p.slice(0, 32)} className={P}><Rich text={p} /></p>)}
                    </div>
                  )}
                </div>
                {c.image && <Photo image={IMAGES[c.image]} sizes="(min-width: 1280px) 500px, (min-width: 1024px) 40vw, 100vw" className="aspect-[3/2] lg:sticky lg:top-28" />}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── Custom software ───────────── */}
      <section aria-labelledby="software-heading" className="bg-white py-16 lg:py-24">
        <div className={WRAP}>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <SectionHeading id="software-heading" eyebrow="Built around your plant">Custom Manufacturing Software Development</SectionHeading>
            <div className="space-y-5">
              <p className={P}>{SOFTWARE.intro}</p>
              <p className="flex gap-3 rounded-2xl bg-[#fffaeb] px-5 py-4 text-sm leading-relaxed text-[#5c4300] ring-1 ring-[#E3A600]/30">
                <RiInformationLine aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-[#B58300]" /><span><Rich text={SOFTWARE.note} /></span>
              </p>
            </div>
          </div>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {SOFTWARE.items.map((it) => (
              <li key={it.title} className="flex flex-col rounded-2xl border border-gray-100 bg-[#faf9f7] p-5">
                <IconTile icon={ICONS[it.icon]} size="sm" />
                <h3 className="mt-3 font-bold leading-snug text-[#1a1a1a]">{it.title}</h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-[#AF00E8]">{it.users}</p>
                <p className="mt-2 text-sm leading-relaxed text-gray-600"><RichText text={it.text} /></p>
              </li>
            ))}
          </ul>
          <div className="mt-10 rounded-2xl bg-[#faf5fd] p-6 ring-1 ring-[#AF00E8]/15 sm:p-8">
            <p className={P}><RichText text={SOFTWARE.teamIntro} /></p>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {SOFTWARE.considerations.map(([term, text]) => (
                <li key={term} className="rounded-xl bg-white px-4 py-3 text-sm leading-relaxed text-gray-700 ring-1 ring-[#AF00E8]/10">
                  <strong className="block font-semibold text-[#1a1a1a]">{term}</strong>
                  <span className="mt-1 block">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ───────────── OT/IT integration ───────────── */}
      <section id="ot-it" aria-labelledby="otit-heading" className="scroll-mt-28 border-y border-[#9b1fe0]/10 bg-[#faf9f7] py-16 lg:py-24">
        <div className={WRAP}>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <SectionHeading id="otit-heading" eyebrow="Connected carefully">Industrial Software Architecture and OT/IT Integration</SectionHeading>
              <p className={`mt-5 ${P}`}>{OTIT.intro}</p>
            </div>
            <Photo image={IMAGES.controlCabinet} sizes={HALF} className="aspect-[16/10]" />
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {[OTIT.ot, OTIT.it].map((z, i) => (
              <div key={z.title} className={`rounded-2xl p-6 ring-1 ${i === 0 ? "bg-[#fffaeb] ring-[#E3A600]/30" : "bg-[#f1fbf9] ring-[#0F9F94]/25"}`}>
                <p className="text-lg font-bold text-[#1a1a1a]">{z.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-gray-700">{z.text}</p>
                <p className="mt-3 text-sm text-gray-700"><span className="font-semibold text-[#1a1a1a]">Priorities: </span>{z.priorities}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl bg-white p-6 ring-1 ring-gray-100 sm:p-8">
            <p className={P}>{OTIT.pointsIntro}</p>
            <ul className="mt-4 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
              {OTIT.points.map((pt) => (
                <li key={pt} className="flex gap-2.5 text-sm leading-relaxed text-gray-700">
                  <RiCheckLine aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[#AF00E8]" />{pt}
                </li>
              ))}
            </ul>
            <p className={`mt-6 ${P}`}><Rich text={OTIT.buildingBlocks} /></p>
          </div>

          <div className="mt-8 rounded-3xl bg-[#0d0a12] p-6 text-white sm:p-8">
            <h3 className="flex items-center gap-2 text-xl font-bold lg:text-2xl" style={SERIF}>
              <RiShieldCheckLine aria-hidden="true" className="h-5 w-5 text-[#5EEAD4]" />Safety and security principles we follow
            </h3>
            <ul className="mt-5 grid gap-4 md:grid-cols-2">
              {OTIT.principles.map((pr) => (
                <li key={pr.title} className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-sm leading-relaxed text-gray-300">
                  <RiCheckDoubleLine aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-[#5EEAD4]" />
                  <span><strong className="font-semibold text-white">{pr.title}</strong> {pr.text}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 flex gap-3 rounded-2xl bg-white/[0.08] px-5 py-4 text-sm font-medium leading-relaxed text-gray-200 ring-1 ring-white/15">
              <RiInformationLine aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-[#e9c2ff]" />{OTIT.statement}
            </p>
          </div>
        </div>
      </section>

      {/* ───────────── Use cases ───────────── */}
      <section aria-labelledby="usecases-heading" className="bg-white py-16 lg:py-24">
        <div className={WRAP}>
          <div className="max-w-3xl">
            <SectionHeading id="usecases-heading" eyebrow="15 illustrative scenarios">Practical Manufacturing Use Cases</SectionHeading>
            <p className="mt-5 text-[15px] italic leading-relaxed text-gray-500">{USE_CASES_NOTE}</p>
          </div>
          <ol className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {USE_CASES.map((u, i) => (
              <li key={u.title} className="overflow-hidden rounded-3xl border border-gray-100 bg-[#faf9f7]">
                <div className="flex items-center gap-3 border-b border-gray-100 bg-white p-5">
                  <IconTile icon={ICONS[u.icon]} />
                  <h3 className="font-bold leading-snug text-[#1a1a1a]">
                    <span aria-hidden="true" className="mr-1.5 text-[#AF00E8]">{i + 1}.</span>{u.title}
                  </h3>
                </div>
                <dl className="space-y-3 p-5">
                  {USE_CASE_FIELDS.map(([key, label]) => (
                    <div key={key} className={key === "validation" ? "rounded-xl bg-[#f1fbf9] px-4 py-3 ring-1 ring-[#0F9F94]/20" : ""}>
                      <dt className={key === "validation" ? "text-[11px] font-bold uppercase tracking-[0.14em] text-[#0F9F94]" : LABEL}>{label}</dt>
                      <dd className="mt-1 text-sm leading-relaxed text-gray-700">{u[key]}</dd>
                    </div>
                  ))}
                </dl>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ───────────── Integration ───────────── */}
      <section aria-labelledby="integration-heading" className="border-y border-[#9b1fe0]/10 bg-[#faf9f7] py-16 lg:py-24">
        <div className={WRAP}>
          <div className="max-w-3xl">
            <SectionHeading id="integration-heading" eyebrow="Business and industrial systems">Manufacturing System Integration</SectionHeading>
            <p className={`mt-5 ${P}`}>{INTEGRATION.intro}</p>
          </div>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {INTEGRATION.systems.map((s) => {
              const Icon = ICONS[s.icon];
              return (
                <li key={s.title} className="flex items-center gap-3 rounded-2xl border border-gray-100 bg-white px-4 py-3 text-sm font-semibold leading-snug text-[#1a1a1a]">
                  <Icon aria-hidden="true" className="h-5 w-5 shrink-0 text-[#AF00E8]" />{s.title}
                </li>
              );
            })}
          </ul>
          <div className="mt-8 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
            <div className="rounded-2xl bg-[#f1fbf9] p-6 ring-1 ring-[#0F9F94]/20 sm:p-8">
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#0F9F94]">{INTEGRATION.practicesIntro}</p>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {INTEGRATION.practices.map(([term, text]) => (
                  <li key={term} className="flex gap-2.5 text-sm leading-relaxed text-gray-700">
                    <RiCheckLine aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[#0F9F94]" />
                    <span><strong className="font-semibold text-[#1a1a1a]">{term}</strong> {text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="flex h-fit gap-3 rounded-2xl bg-[#fffaeb] p-6 text-sm leading-relaxed text-[#5c4300] ring-1 ring-[#E3A600]/30 sm:p-8">
              <RiInformationLine aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-[#B58300]" />{INTEGRATION.access}
            </p>
          </div>
        </div>
      </section>

      {/* ───────────── Security, safety and responsible AI ───────────── */}
      <section aria-labelledby="security-heading" className="relative overflow-hidden bg-[#0d0a12] py-16 text-white lg:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-[#AF00E8]/20 blur-3xl" />
        <div className={`${WRAP} relative`}>
          <div className="max-w-3xl">
            <SectionHeading id="security-heading" eyebrow="UK GDPR · OT security · Safety · Validation" dark>Manufacturing Security, Safety and Responsible AI</SectionHeading>
            <p className="mt-5 text-[15px] leading-relaxed text-gray-300 lg:text-base">{SECURITY_INTRO}</p>
            <p className="mt-4 flex gap-3 rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-4 text-sm italic leading-relaxed text-gray-300">
              <RiInformationLine aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-[#5EEAD4]" />{SECURITY_DISCLAIMER}
            </p>
          </div>
          <div className="mt-12">
            <IconCardGrid items={withIcons(SECURITY)} dark columns="md:grid-cols-2 xl:grid-cols-3" compact />
          </div>
          <p className="mt-8 flex max-w-5xl gap-3 rounded-2xl bg-white/[0.08] px-5 py-4 text-sm font-medium leading-relaxed text-gray-200 ring-1 ring-white/15">
            <RiShieldCheckLine aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-[#e9c2ff]" />{SECURITY_STATEMENT}
          </p>
        </div>
      </section>

      {/* ───────────── Why ClickMasters ───────────── */}
      <section aria-labelledby="why-heading" className="border-b border-[#9b1fe0]/10 bg-[#faf9f7] py-16 lg:py-24">
        <div className={WRAP}>
          <div className="max-w-3xl">
            <SectionHeading id="why-heading" eyebrow="Why ClickMasters">Why Manufacturers Choose ClickMasters for Industrial Software</SectionHeading>
            <p className={`mt-5 ${P}`}>{WHY_INTRO}</p>
          </div>
          <div className="mt-12">
            <IconCardGrid items={withIcons(WHY)} columns="sm:grid-cols-2 lg:grid-cols-4" />
          </div>
          <p className={`mt-10 max-w-4xl ${P}`}><RichText text={WHY_OUTRO} /></p>
        </div>
      </section>

      {/* ───────────── Process ───────────── */}
      <ProcessGrid
        eyebrow="Ten stages"
        title="Our Manufacturing Software Development Process"
        intro={PROCESS_INTRO}
        columns="md:grid-cols-2 lg:grid-cols-5"
        steps={PROCESS.map((s) => ({ title: s.title, rows: [{ label: "What happens", text: s.text }] }))}
      />

      <FaqSection
        title="Manufacturing AI and Software: Frequently Asked Questions"
        intro="Industry 4.0, predictive maintenance, quality inspection, MES vs ERP, automation, dashboards and factory security, answered plainly."
        faqs={FAQS}
      />

      <FinalCta
        title={FINAL_CTA.title}
        titleAccent={FINAL_CTA.titleAccent}
        body={FINAL_CTA.body}
        bring={FINAL_CTA.bring}
        primaryCta={{ label: "Discuss Your Manufacturing Project", href: "/contact" }}
        secondaryCta={{ label: "Explore Our Technology Solutions", href: "/solutions" }}
      />
    </>
  );
}
