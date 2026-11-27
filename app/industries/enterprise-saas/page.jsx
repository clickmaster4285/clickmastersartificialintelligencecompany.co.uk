// /industries/enterprise-saas
// Content: ./content.ts (from the Enterprise SaaS Industry SEO pack). Fully server-rendered.
// Every industry now has a real page, so the old app/industries/[slug] placeholder route was removed.
import Image from "next/image";
import {
  RiAlarmWarningLine, RiArrowLeftRightLine, RiArrowUpCircleLine, RiBankCardLine, RiBarChartBoxLine, RiBookOpenLine,
  RiBriefcase4Line, RiBuilding2Line, RiChat3Line, RiCheckLine, RiCloudLine, RiCodeBoxLine, RiCodeSSlashLine,
  RiContactsBook2Line, RiCustomerService2Line, RiDashboardLine, RiDatabase2Line, RiDatabaseLine, RiDeleteBinLine,
  RiDeviceLine, RiDownloadCloud2Line, RiExpandUpDownLine, RiFileShield2Line, RiFileTextLine, RiFlowChart,
  RiGitBranchLine, RiGroupLine, RiHistoryLine, RiInformationLine, RiKeyLine, RiLayoutGridLine, RiLayoutLine,
  RiLineChartLine, RiLockLine, RiLockPasswordLine, RiMapPin2Line, RiMoneyPoundCircleLine, RiPlugLine, RiRadarLine,
  RiRefreshLine, RiRobot2Line, RiRobot3Line, RiRocket2Line, RiSave3Line, RiSearchEyeLine, RiServerLine,
  RiSettings3Line, RiShieldCheckLine, RiShieldKeyholeLine, RiSpeedUpLine, RiStackLine, RiToolsLine, RiUserSettingsLine,
} from "../../Components/icons";

import JsonLd from "../../Components/JsonLd";
import ScopingCallBlock from "../../Components/ScopingCallBlock";
import { IconTile, SectionHeading, WRAP } from "../../Components/ServicePageUI";
import {
  FaqSection, FinalCta, IconCardGrid, ProcessGrid, RichText, ServiceHero, faqPageJsonLd,
} from "../../Components/ServicePageSections";
import { detailPageJsonLd, detailPageMetadata } from "../../lib/site";
import {
  AI_CAPABILITIES, ARCH_BLOCKS, ARCH_INTRO, CHALLENGES, CUSTOM, EXIT_PLANNING, FAQS, FINAL_CTA, HERO,
  HERO_INTEGRATIONS, HERO_LAYERS, IMAGES, INTEGRATION, LANDSCAPE, PATH, PROCESS, PROCESS_INTRO, SCHEMA_SERVICE,
  SECURITY, SECURITY_DISCLAIMER, SECURITY_INTRO, SECURITY_STATEMENT, SEO, SHARED_RESPONSIBILITY, STAGES,
  STAGES_INTRO, STAGES_OUTRO, TENANCY, USE_CASES, USE_CASES_NOTE, USE_CASE_FIELDS, WHY, WHY_INTRO, WHY_OUTRO,
} from "./content";

export const metadata = detailPageMetadata({ path: PATH, ...SEO });

const CRUMBS = [
  { name: "Industries", path: "/industries" },
  { name: "Enterprise SaaS", path: PATH },
];

// All icons are decorative (headings carry the meaning).
const ICONS = {
  devices: RiDeviceLine, gateway: RiShieldKeyholeLine, services: RiServerLine, ai: RiRobot2Line, agent: RiRobot3Line,
  database: RiDatabase2Line, cloud: RiCloudLine, api: RiCodeBoxLine, tenants: RiLayoutGridLine, automation: RiFlowChart,
  analytics: RiBarChartBoxLine, plug: RiPlugLine, legacy: RiRefreshLine, layers: RiStackLine, rocket: RiRocket2Line,
  growth: RiArrowUpCircleLine, building: RiBuilding2Line, users: RiGroupLine, scale: RiExpandUpDownLine,
  settings: RiSettings3Line, roles: RiUserSettingsLine, speed: RiSpeedUpLine, debt: RiToolsLine, shield: RiShieldCheckLine,
  knowledge: RiBookOpenLine, search: RiSearchEyeLine, forecast: RiLineChartLine, support: RiCustomerService2Line,
  briefcase: RiBriefcase4Line, billing: RiBankCardLine, dashboard: RiDashboardLine, process: RiGitBranchLine,
  portal: RiLayoutLine, contacts: RiContactsBook2Line, erp: RiStackLine, data: RiDatabaseLine, document: RiFileTextLine,
  location: RiMapPin2Line, finance: RiMoneyPoundCircleLine, chat: RiChat3Line, key: RiKeyLine,
  privacy: RiFileShield2Line, lock: RiLockLine, encrypt: RiLockPasswordLine, history: RiHistoryLine,
  delete: RiDeleteBinLine, backup: RiSave3Line, alert: RiAlarmWarningLine, scan: RiRadarLine, code: RiCodeSSlashLine,
};
const withIcons = (items) => items.map((it) => ({ ...it, icon: ICONS[it.icon] }));

const P = "text-[15px] leading-relaxed text-gray-600 lg:text-base";
const SERIF = { fontFamily: "Garamond, serif" };
const LABEL = "text-[11px] font-bold uppercase tracking-[0.14em] text-gray-500";
const HALF = "(min-width: 1280px) 600px, (min-width: 1024px) 48vw, 100vw";
const TONES = {
  purple: "bg-[#faf5fd] ring-[#AF00E8]/20 text-[#7a1fa2]",
  teal: "bg-[#f1fbf9] ring-[#0F9F94]/25 text-[#0b6f68]",
  sun: "bg-[#fffaeb] ring-[#E3A600]/30 text-[#8a6400]",
};

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

/** Hero diagram: layered SaaS architecture with integrations beside it and monitoring across every layer. */
function ArchitectureDiagram() {
  return (
    <div role="img" aria-label={HERO.figureAlt} className="text-sm">
      <div className="grid grid-cols-[1fr_auto] gap-2">
        <ol className="space-y-1.5">
          {HERO_LAYERS.map((layer) => {
            const Icon = ICONS[layer.icon];
            return (
              <li
                key={layer.label}
                className={`rounded-xl px-3 py-2 ${layer.accent ? "bg-gradient-to-br from-[#2a0b3a] to-[#0d0a12] text-white" : "border border-gray-100 bg-[#faf9f7] text-gray-700"}`}
              >
                <p className={`flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.12em] ${layer.accent ? "text-[#e9c2ff]" : "text-gray-500"}`}>
                  <Icon aria-hidden="true" className="h-3.5 w-3.5" />{layer.label}
                </p>
                <p className="mt-1 flex flex-wrap gap-1">
                  {layer.items.map((it) => (
                    <span key={it} className={`rounded-md px-1.5 py-0.5 text-[11px] font-semibold ${layer.accent ? "bg-white/10" : "bg-white ring-1 ring-gray-100"}`}>{it}</span>
                  ))}
                </p>
              </li>
            );
          })}
        </ol>
        <div className="flex flex-col items-center gap-1.5 rounded-xl bg-[#f1fbf9] px-2 py-2 ring-1 ring-[#0F9F94]/20">
          <RiArrowLeftRightLine aria-hidden="true" className="h-4 w-4 text-[#0F9F94]" />
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#0b6f68] [writing-mode:vertical-rl]">Integrations</span>
          {HERO_INTEGRATIONS.map((i) => (
            <span key={i} className="w-full rounded-md bg-white px-1.5 py-1 text-center text-[11px] font-semibold text-[#0b6f68] ring-1 ring-[#0F9F94]/20">{i}</span>
          ))}
        </div>
      </div>
      <p className="mt-2 flex items-center justify-center gap-2 rounded-lg border border-dashed border-gray-300 px-3 py-2 text-[12px] font-medium text-gray-500">
        <RiRadarLine aria-hidden="true" className="h-4 w-4" />Monitoring and audit logging across every layer
      </p>
    </div>
  );
}

export default function EnterpriseSaasIndustry() {
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
        primaryCta={{ label: "Discuss Your SaaS Project", href: "/contact" }}
        secondaryCta={{ label: "Explore Our Software Solutions", href: "/solutions" }}
        stats={HERO.trust}
        figureLabel="One product, many tenants, every layer secured"
        figure={<ArchitectureDiagram />}
        figcaption="Illustrative architecture, not a client project."
      />

      <ScopingCallBlock path={PATH} service="enterprise SaaS development" />

      {/* ───────────── Landscape ───────────── */}
      <section aria-labelledby="landscape-heading" className="bg-white py-16 lg:py-24">
        <div className={WRAP}>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <SectionHeading id="landscape-heading" eyebrow="The market">{LANDSCAPE.title}</SectionHeading>
              <p className={`mt-6 ${P}`}>{LANDSCAPE.intro}</p>
              <dl className="mt-8 grid gap-3 sm:grid-cols-2">
                {LANDSCAPE.stats.map((s) => (
                  // Figure shown above its description; DOM order stays dt -> dd.
                  <div key={s.value} className="flex flex-col-reverse justify-end rounded-2xl bg-[#faf5fd] px-5 py-4 ring-1 ring-[#AF00E8]/15">
                    <dt className="mt-2 text-sm leading-snug text-gray-700">
                      {s.text}. <span className="text-gray-500">Source: {s.source}.</span>
                    </dt>
                    <dd className="text-[34px] font-bold leading-none text-[#AF00E8]" style={SERIF}>{s.value}</dd>
                  </div>
                ))}
              </dl>
              <p className={`mt-5 ${P}`}>{LANDSCAPE.context}</p>
            </div>
            <Photo image={IMAGES.office} sizes={HALF} className="aspect-[4/3]" />
          </div>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {LANDSCAPE.trends.map((t) => (
              <li key={t.title} className="rounded-2xl border border-gray-100 bg-[#faf9f7] p-5">
                <IconTile icon={ICONS[t.icon]} size="sm" />
                <h3 className="mt-3 font-bold leading-snug text-[#1a1a1a]">{t.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-gray-600">{t.text}</p>
              </li>
            ))}
          </ul>
          <p className={`mt-10 max-w-4xl ${P}`}>{LANDSCAPE.outro}</p>
        </div>
      </section>

      {/* ───────────── Product stages ───────────── */}
      <section aria-labelledby="stages-heading" className="border-y border-[#9b1fe0]/10 bg-[#faf9f7] py-16 lg:py-24">
        <div className={WRAP}>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <SectionHeading id="stages-heading" eyebrow="Where is your product?">Early-Stage SaaS and Mature Enterprise Software Need Different Things</SectionHeading>
              <p className={`mt-5 ${P}`}>{STAGES_INTRO}</p>
            </div>
            <Photo image={IMAGES.code} sizes={HALF} className="aspect-[16/10]" />
          </div>
          <ol className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {STAGES.map((s, i) => (
              <li key={s.title} className="flex flex-col rounded-2xl border border-gray-100 bg-white p-5">
                <div className="flex items-center justify-between">
                  <IconTile icon={ICONS[s.icon]} size="sm" />
                  <span aria-hidden="true" className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#AF00E8]">Stage {i + 1}</span>
                </div>
                <h3 className="mt-3 font-bold leading-snug text-[#1a1a1a]">{s.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-gray-600"><RichText text={s.text} /></p>
              </li>
            ))}
          </ol>
          <p className={`mt-8 ${P}`}>{STAGES_OUTRO}</p>
        </div>
      </section>

      {/* ───────────── Challenges ───────────── */}
      <section aria-labelledby="challenges-heading" className="bg-white py-16 lg:py-24">
        <div className={WRAP}>
          <div className="max-w-3xl">
            <SectionHeading id="challenges-heading" eyebrow="What breaks as you grow">Enterprise SaaS Development Challenges</SectionHeading>
          </div>
          <ol className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {CHALLENGES.map((c, i) => (
              <li key={c.title} className="flex flex-col rounded-2xl border border-gray-100 bg-[#faf9f7] p-6">
                <div className="flex items-start gap-4">
                  <IconTile icon={ICONS[c.icon]} />
                  <h3 className="text-lg font-bold leading-snug text-[#1a1a1a]">
                    <span aria-hidden="true" className="mr-1.5 text-[#AF00E8]">{String(i + 1).padStart(2, "0")}</span>{c.title}
                  </h3>
                </div>
                <dl className="mt-4 flex-1 space-y-2.5">
                  <div>
                    <dt className={LABEL}>Why it occurs</dt>
                    <dd className="mt-1 text-sm leading-relaxed text-gray-700">{c.why}</dd>
                  </div>
                  <div className="rounded-xl bg-white px-4 py-3 ring-1 ring-gray-100">
                    <dt className={LABEL}>Impact</dt>
                    <dd className="mt-1 text-sm leading-relaxed text-gray-700">{c.impact}</dd>
                  </div>
                  <div className="rounded-xl bg-[#f1fbf9] px-4 py-3 ring-1 ring-[#0F9F94]/20">
                    <dt className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#0F9F94]">Approach</dt>
                    <dd className="mt-1 text-sm leading-relaxed text-gray-700">{c.approach}</dd>
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
            <SectionHeading id="ai-heading" eyebrow="7 capabilities">AI-Powered Enterprise SaaS Solutions</SectionHeading>
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

      {/* ───────────── Custom development ───────────── */}
      <section aria-labelledby="custom-heading" className="bg-white py-16 lg:py-24">
        <div className={WRAP}>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <SectionHeading id="custom-heading" eyebrow="What we can build">Custom Enterprise SaaS Development</SectionHeading>
            <p className="flex h-fit gap-3 rounded-2xl bg-[#fffaeb] px-5 py-4 text-sm leading-relaxed text-[#5c4300] ring-1 ring-[#E3A600]/30">
              <RiInformationLine aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-[#B58300]" /><span><Rich text={CUSTOM.note} /></span>
            </p>
          </div>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {CUSTOM.items.map((it) => (
              <li key={it.title} className="rounded-2xl border border-gray-100 bg-[#faf9f7] p-5">
                <IconTile icon={ICONS[it.icon]} size="sm" />
                <h3 className="mt-3 font-bold leading-snug text-[#1a1a1a]">{it.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-gray-600"><RichText text={it.text} /></p>
              </li>
            ))}
          </ul>
          <div className="mt-10 rounded-2xl bg-[#faf5fd] p-6 ring-1 ring-[#AF00E8]/15 sm:p-8">
            <p className={P}><RichText text={CUSTOM.teamIntro} /></p>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {CUSTOM.attention.map((a) => (
                <li key={a} className="flex gap-2.5 rounded-xl bg-white px-4 py-3 text-sm font-medium leading-relaxed text-gray-700 ring-1 ring-[#AF00E8]/10">
                  <RiCheckLine aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[#AF00E8]" />{a}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ───────────── Architecture and engineering ───────────── */}
      <section id="architecture" aria-labelledby="arch-heading" className="scroll-mt-28 border-y border-[#9b1fe0]/10 bg-[#faf9f7] py-16 lg:py-24">
        <div className={WRAP}>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <SectionHeading id="arch-heading" eyebrow="The decisions that matter">Enterprise SaaS Architecture and Engineering</SectionHeading>
              <p className={`mt-5 ${P}`}>{ARCH_INTRO}</p>
            </div>
            <Photo image={IMAGES.whiteboard} sizes={HALF} className="aspect-[16/10]" />
          </div>

          <article aria-labelledby="tenancy-heading" className="mt-12 rounded-3xl border border-gray-100 bg-white p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <IconTile icon={RiLayoutGridLine} />
              <h3 id="tenancy-heading" className="text-[22px] font-bold leading-snug text-[#1a1a1a] lg:text-[26px]" style={SERIF}>{TENANCY.title}</h3>
            </div>
            <ul className="mt-6 grid gap-4 lg:grid-cols-3">
              {TENANCY.models.map((m) => (
                <li key={m.name} className={`flex flex-col rounded-2xl p-5 ring-1 ${TONES[m.tone]}`}>
                  <p className="text-lg font-bold">{m.name}</p>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-700">{m.text}</p>
                  <p className="mt-3 rounded-xl bg-white px-4 py-3 text-sm leading-relaxed text-gray-700">
                    <span className="font-semibold text-[#1a1a1a]">Trade-off: </span>{m.tradeOff}
                  </p>
                </li>
              ))}
            </ul>
            <p className={`mt-6 ${P}`}>{TENANCY.note}</p>
          </article>

          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            {ARCH_BLOCKS.map((b) => (
              <article key={b.id} aria-labelledby={`${b.id}-heading`} className="rounded-3xl border border-gray-100 bg-white p-6 sm:p-8">
                <div className="flex items-center gap-3">
                  <IconTile icon={ICONS[b.icon]} />
                  <h3 id={`${b.id}-heading`} className="text-xl font-bold leading-snug text-[#1a1a1a] lg:text-[22px]" style={SERIF}>{b.title}</h3>
                </div>
                {b.paragraphs.map((p) => <p key={p.slice(0, 32)} className="mt-4 text-[15px] leading-relaxed text-gray-600"><Rich text={p} /></p>)}
                {b.items && (
                  <ul className="mt-3 space-y-2">
                    {b.items.map((it) => (
                      <li key={it} className="flex gap-2.5 text-sm leading-relaxed text-gray-700">
                        <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#AF00E8]" /><span><Rich text={it} /></span>
                      </li>
                    ))}
                  </ul>
                )}
                {b.outro && <p className="mt-4 text-[15px] leading-relaxed text-gray-600"><Rich text={b.outro} /></p>}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── Use cases ───────────── */}
      <section aria-labelledby="usecases-heading" className="bg-white py-16 lg:py-24">
        <div className={WRAP}>
          <div className="max-w-3xl">
            <SectionHeading id="usecases-heading" eyebrow="14 illustrative scenarios">Practical Enterprise SaaS Use Cases</SectionHeading>
            <p className="mt-5 text-[15px] italic leading-relaxed text-gray-500">{USE_CASES_NOTE}</p>
          </div>
          <ol className="mt-12 grid gap-5 md:grid-cols-2">
            {USE_CASES.map((u, i) => (
              <li key={u.title} className="overflow-hidden rounded-3xl border border-gray-100 bg-[#faf9f7]">
                <div className="flex items-center gap-3 border-b border-gray-100 bg-white p-5 sm:px-6">
                  <IconTile icon={ICONS[u.icon]} />
                  <h3 className="text-lg font-bold leading-snug text-[#1a1a1a]">
                    <span aria-hidden="true" className="mr-1.5 text-[#AF00E8]">{i + 1}.</span>{u.title}
                  </h3>
                </div>
                <dl className="grid gap-3 p-5 sm:grid-cols-2 sm:px-6">
                  {USE_CASE_FIELDS.map(([key, label]) => (
                    <div key={key} className={key === "oversight" ? "rounded-xl bg-[#f1fbf9] px-4 py-3 ring-1 ring-[#0F9F94]/20 sm:col-span-2" : ""}>
                      <dt className={key === "oversight" ? "text-[11px] font-bold uppercase tracking-[0.14em] text-[#0F9F94]" : LABEL}>{label}</dt>
                      <dd className="mt-1 text-sm leading-relaxed text-gray-700">{u[key]}</dd>
                    </div>
                  ))}
                </dl>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ───────────── Integration ecosystem ───────────── */}
      <section aria-labelledby="integration-heading" className="border-y border-[#9b1fe0]/10 bg-[#faf9f7] py-16 lg:py-24">
        <div className={WRAP}>
          <div className="max-w-3xl">
            <SectionHeading id="integration-heading" eyebrow="Fit the customer's estate">The Enterprise SaaS Integration Ecosystem</SectionHeading>
            <p className={`mt-5 ${P}`}>{INTEGRATION.intro}</p>
          </div>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
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

      {/* ───────────── Security, privacy and reliability ───────────── */}
      <section aria-labelledby="security-heading" className="relative overflow-hidden bg-[#0d0a12] py-16 text-white lg:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-[#AF00E8]/20 blur-3xl" />
        <div className={`${WRAP} relative`}>
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:gap-14">
            <div>
              <SectionHeading id="security-heading" eyebrow="UK GDPR · Tenant isolation · NCSC principles" dark>Enterprise SaaS Security, Privacy and Reliability</SectionHeading>
              <p className="mt-5 text-[15px] leading-relaxed text-gray-300 lg:text-base">{SECURITY_INTRO}</p>
              <p className="mt-4 flex gap-3 rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-4 text-sm italic leading-relaxed text-gray-300">
                <RiInformationLine aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-[#5EEAD4]" />{SECURITY_DISCLAIMER}
              </p>
            </div>
            <Photo image={IMAGES.servers} sizes={HALF} className="aspect-[16/9] ring-white/10" />
          </div>
          <div className="mt-12">
            <IconCardGrid items={withIcons(SECURITY)} dark columns="md:grid-cols-2 xl:grid-cols-3" compact />
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-8">
              <h3 className="text-xl font-bold text-white lg:text-2xl" style={SERIF}>Shared responsibility</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-300">{SHARED_RESPONSIBILITY.intro}</p>
              <ol className="mt-4 space-y-3">
                {SHARED_RESPONSIBILITY.parties.map((p, i) => (
                  <li key={p.title} className="flex gap-3 text-sm leading-relaxed text-gray-300">
                    <span aria-hidden="true" className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#AF00E8] text-[11px] font-bold text-white">{i + 1}</span>
                    <span><strong className="font-semibold text-white">{p.title}</strong> {p.text}</span>
                  </li>
                ))}
              </ol>
              <p className="mt-4 text-sm leading-relaxed text-gray-300">{SHARED_RESPONSIBILITY.outro}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-8">
              <h3 className="flex items-center gap-2 text-xl font-bold text-white lg:text-2xl" style={SERIF}>
                <RiDownloadCloud2Line aria-hidden="true" className="h-5 w-5 text-[#5EEAD4]" />Data export, migration and exit planning
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-300">{EXIT_PLANNING}</p>
            </div>
          </div>
          <p className="mt-8 flex max-w-4xl gap-3 rounded-2xl bg-white/[0.08] px-5 py-4 text-sm font-medium leading-relaxed text-gray-200 ring-1 ring-white/15">
            <RiShieldCheckLine aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-[#e9c2ff]" />{SECURITY_STATEMENT}
          </p>
        </div>
      </section>

      {/* ───────────── Why ClickMasters ───────────── */}
      <section aria-labelledby="why-heading" className="border-b border-[#9b1fe0]/10 bg-[#faf9f7] py-16 lg:py-24">
        <div className={WRAP}>
          <div className="max-w-3xl">
            <SectionHeading id="why-heading" eyebrow="Why ClickMasters">Why Software Companies and Enterprises Choose ClickMasters</SectionHeading>
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
        title="Our Enterprise SaaS Development Process"
        intro={PROCESS_INTRO}
        columns="md:grid-cols-2 lg:grid-cols-5"
        steps={PROCESS.map((s) => ({ title: s.title, rows: [{ label: "What happens", text: s.text }] }))}
      />

      <FaqSection
        title="Enterprise SaaS Development: Frequently Asked Questions"
        intro="Definitions, multi-tenancy, AI in existing products, modernisation, security, integration and scalability, answered plainly."
        faqs={FAQS}
      />

      <FinalCta
        title={FINAL_CTA.title}
        titleAccent={FINAL_CTA.titleAccent}
        body={FINAL_CTA.body}
        bring={FINAL_CTA.bring}
        primaryCta={{ label: "Discuss Your SaaS Project", href: "/contact" }}
        secondaryCta={{ label: "Explore Our Software Solutions", href: "/solutions" }}
      />
    </>
  );
}
