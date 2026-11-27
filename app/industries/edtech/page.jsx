// /industries/edtech
// Content: ./content.ts (from the EdTech Industry SEO pack). Fully server-rendered.
// Every industry now has a real page, so the old app/industries/[slug] placeholder route was removed.
import Image from "next/image";
import {
  RiArrowDownLine, RiAwardLine, RiBankCardLine, RiBarChart2Line, RiBarChartBoxLine, RiBook2Line, RiBookOpenLine,
  RiBriefcase4Line, RiBuilding2Line, RiCheckLine, RiCodeSSlashLine, RiComputerLine, RiCopyrightLine,
  RiCustomerService2Line, RiDashboardLine, RiDatabase2Line, RiEyeLine, RiFileEditLine, RiFileList3Line,
  RiFileShield2Line, RiFilter3Line, RiFlowChart, RiGraduationCapLine, RiGroupLine, RiInformationLine, RiKeyLine,
  RiLayoutLine, RiLineChartLine, RiLockLine, RiMapPinLine, RiParentLine, RiPlugLine, RiQuestionAnswerLine,
  RiRobot2Line, RiRocket2Line, RiRouteLine, RiScales3Line, RiSchoolLine, RiSearchEyeLine, RiShieldCheckLine,
  RiShieldUserLine, RiSparkling2Line, RiStackLine, RiUserAddLine, RiUserFollowLine, RiUserStarLine, RiVideoChatLine,
  RiWheelchairLine,
} from "../../Components/icons";

import JsonLd from "../../Components/JsonLd";
import ScopingCallBlock from "../../Components/ScopingCallBlock";
import { IconTile, SectionHeading, WRAP } from "../../Components/ServicePageUI";
import {
  FaqSection, FinalCta, IconCardGrid, ProcessGrid, RichText, ServiceHero, faqPageJsonLd,
} from "../../Components/ServicePageSections";
import { detailPageJsonLd, detailPageMetadata } from "../../lib/site";
import {
  AI_CAPABILITIES, AUDIENCES, AUDIENCES_INTRO, CHALLENGES, ENGLAND, FAQS, FINAL_CTA, HERO, HERO_FLOW, IMAGES,
  INTEGRATION, LANDSCAPE, NATIONS_NOTE, PATH, PROCESS, PROCESS_INTRO, RESPONSIBLE_DISCLAIMER, RESPONSIBLE_INTRO,
  RESPONSIBLE_STATEMENT, SCHEMA_SERVICE, SEO, SOFTWARE, UK_WIDE, USE_CASES, USE_CASES_NOTE, USE_CASE_FIELDS, WHY,
  WHY_INTRO, WHY_OUTRO,
} from "./content";

export const metadata = detailPageMetadata({ path: PATH, ...SEO });

const CRUMBS = [
  { name: "Industries", path: "/industries" },
  { name: "EdTech & E-Learning", path: PATH },
];

// All icons are decorative (headings carry the meaning).
const ICONS = {
  blended: RiComputerLine, adaptive: RiRouteLine, ai: RiRobot2Line, analytics: RiBarChartBoxLine,
  assessment: RiFileEditLine, plug: RiPlugLine, access: RiWheelchairLine, school: RiSchoolLine,
  college: RiBuilding2Line, university: RiGraduationCapLine, online: RiComputerLine, rocket: RiRocket2Line,
  briefcase: RiBriefcase4Line, certificate: RiAwardLine, tutor: RiUserStarLine, admin: RiFileList3Line,
  library: RiBookOpenLine, scale: RiLineChartLine, shield: RiShieldCheckLine, assistant: RiQuestionAnswerLine,
  automation: RiFlowChart, course: RiBook2Line, portal: RiLayoutLine, dashboard: RiDashboardLine,
  records: RiDatabase2Line, code: RiCodeSSlashLine, support: RiCustomerService2Line, enrol: RiUserAddLine,
  search: RiSearchEyeLine, stack: RiStackLine, payment: RiBankCardLine, video: RiVideoChatLine, report: RiBarChart2Line,
  key: RiKeyLine, privacy: RiFileShield2Line, minimise: RiFilter3Line, child: RiParentLine, safety: RiShieldUserLine,
  eye: RiEyeLine, users: RiGroupLine, scales: RiScales3Line, lock: RiLockLine, copyright: RiCopyrightLine,
};
const withIcons = (items) => items.map((it) => ({ ...it, icon: ICONS[it.icon] }));

const P = "text-[15px] leading-relaxed text-gray-600 lg:text-base";
const SERIF = { fontFamily: "Garamond, serif" };
const LABEL = "text-[11px] font-bold uppercase tracking-[0.14em] text-gray-500";
const HALF = "(min-width: 1280px) 600px, (min-width: 1024px) 48vw, 100vw";

/** **bold** and *italic* markers, with [anchor](/path) links in the plain parts. */
function Rich({ text }) {
  return text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/).map((part, i) => {
    if (part.startsWith("**")) return <strong key={i} className="font-semibold text-[#1a1a1a]">{part.slice(2, -2)}</strong>;
    if (part.startsWith("*") && part.length > 2) return <em key={i}>{part.slice(1, -1)}</em>;
    return <RichText key={i} text={part} />;
  });
}

/** A photo (below the fold, lazy-loaded) with rounded corners. */
function Photo({ image, sizes, className = "" }) {
  return (
    <div className={`relative overflow-hidden rounded-3xl ring-1 ring-black/5 ${className}`}>
      <Image src={image.src} width={image.width} height={image.height} alt={image.alt} sizes={sizes} className="h-full w-full object-cover" />
    </div>
  );
}

function FlowArrow() {
  return (
    <div aria-hidden="true" className="flex justify-center py-1.5 text-[#AF00E8]/60">
      <RiArrowDownLine className="h-5 w-5" />
    </div>
  );
}

/** Hero diagram: connected systems → learning platform with AI assistant → teacher review → reporting. */
function EcosystemDiagram() {
  return (
    <div role="img" aria-label={HERO.figureAlt} className="text-sm">
      <ul className="grid grid-cols-2 gap-2">
        {HERO_FLOW.systems.map((s, i) => {
          const Icon = [RiDatabase2Line, RiKeyLine, RiBookOpenLine, RiVideoChatLine][i];
          return (
            <li key={s} className="flex items-center gap-2 rounded-xl border border-gray-100 bg-[#faf9f7] px-3 py-2.5 text-[13px] font-medium text-gray-700">
              <Icon aria-hidden="true" className="h-4 w-4 shrink-0 text-gray-400" />{s}
            </li>
          );
        })}
      </ul>
      <FlowArrow />
      <div className="rounded-2xl bg-gradient-to-br from-[#2a0b3a] to-[#0d0a12] p-4 text-white">
        <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[#e9c2ff]">
          <RiGraduationCapLine aria-hidden="true" className="h-3.5 w-3.5" />{HERO_FLOW.platform}
        </p>
        <p className="mt-3 flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 text-[12.5px] font-semibold">
          <RiSparkling2Line aria-hidden="true" className="h-4 w-4 shrink-0 text-[#5EEAD4]" />{HERO_FLOW.ai}
        </p>
      </div>
      <FlowArrow />
      <div className="flex items-center justify-center gap-2 rounded-full bg-[#fffaeb] px-4 py-2.5 text-[13px] font-semibold text-[#8a6400] ring-1 ring-[#E3A600]/40">
        <RiUserFollowLine aria-hidden="true" className="h-4 w-4" />{HERO_FLOW.review}
      </div>
      <FlowArrow />
      <p className="flex items-center justify-center gap-2 rounded-xl bg-[#f1fbf9] px-3 py-3 text-[13px] font-semibold text-[#0b6f68] ring-1 ring-[#0F9F94]/20">
        <RiDashboardLine aria-hidden="true" className="h-5 w-5" />{HERO_FLOW.output}
      </p>
    </div>
  );
}

export default function EdTechIndustry() {
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
        primaryCta={{ label: "Discuss Your EdTech Project", href: "/contact" }}
        secondaryCta={{ label: "Explore Our AI Services", href: "/services" }}
        stats={HERO.trust}
        figureLabel="One platform, connected and reviewed"
        figure={<EcosystemDiagram />}
        figcaption="Illustrative architecture, not a client project."
      />

      <ScopingCallBlock path={PATH} service="EdTech and education software" />

      {/* ───────────── Landscape ───────────── */}
      <section aria-labelledby="landscape-heading" className="bg-white py-16 lg:py-24">
        <div className={WRAP}>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <SectionHeading id="landscape-heading" eyebrow="AI in education">{LANDSCAPE.title}</SectionHeading>
              <p className={`mt-6 ${P}`}>{LANDSCAPE.intro}</p>
            </div>
            <Photo image={IMAGES.library} sizes={HALF} className="aspect-[4/3]" />
          </div>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {LANDSCAPE.trends.map((t) => (
              <li key={t.title} className="rounded-2xl border border-gray-100 bg-[#faf9f7] p-5">
                <IconTile icon={ICONS[t.icon]} size="sm" />
                <h3 className="mt-3 font-bold leading-snug text-[#1a1a1a]">{t.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-gray-600">{t.text}</p>
              </li>
            ))}
            <li className="rounded-2xl bg-[#faf5fd] p-5 ring-1 ring-[#AF00E8]/15 sm:col-span-2 xl:col-span-1">
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#AF00E8]">What makes the difference</p>
              <p className="mt-2 text-sm leading-relaxed text-gray-700"><Rich text={LANDSCAPE.outro} /></p>
            </li>
          </ul>
        </div>
      </section>

      {/* ───────────── Who we build for ───────────── */}
      <section aria-labelledby="audiences-heading" className="border-y border-[#9b1fe0]/10 bg-[#faf9f7] py-16 lg:py-24">
        <div className={WRAP}>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <SectionHeading id="audiences-heading" eyebrow="Who we build for">Who We Build For: Different Education Organisations, Different Requirements</SectionHeading>
              <p className={`mt-5 ${P}`}>{AUDIENCES_INTRO}</p>
            </div>
            <Photo image={IMAGES.lectureHall} sizes={HALF} className="aspect-[16/10]" />
          </div>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {AUDIENCES.map((a) => (
              <li key={a.title} className="rounded-2xl border border-gray-100 bg-white p-5 transition-colors hover:border-[#AF00E8]/25">
                <IconTile icon={ICONS[a.icon]} size="sm" />
                <h3 className="mt-3 font-bold leading-snug text-[#1a1a1a]">{a.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-gray-600">{a.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ───────────── Challenges ───────────── */}
      <section aria-labelledby="challenges-heading" className="bg-white py-16 lg:py-24">
        <div className={WRAP}>
          <div className="max-w-3xl">
            <SectionHeading id="challenges-heading" eyebrow="Sound familiar?">Education Challenges We Help Address</SectionHeading>
          </div>
          <ol className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {CHALLENGES.map((c, i) => (
              <li key={c.title} className="flex flex-col rounded-2xl border border-gray-100 bg-[#faf9f7] p-6">
                <div className="flex items-center justify-between">
                  <IconTile icon={ICONS[c.icon]} />
                  <span aria-hidden="true" className="text-[28px] font-bold leading-none text-transparent [-webkit-text-stroke:1.2px_#AF00E8]" style={SERIF}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-bold leading-snug text-[#1a1a1a]">{c.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">{c.text}</p>
                <dl className="mt-4 space-y-2.5">
                  <div className="rounded-xl bg-white px-4 py-3 ring-1 ring-gray-100">
                    <dt className={LABEL}>Impact</dt>
                    <dd className="mt-1 text-sm leading-relaxed text-gray-700">{c.impact}</dd>
                  </div>
                  <div className="rounded-xl bg-[#f1fbf9] px-4 py-3 ring-1 ring-[#0F9F94]/20">
                    <dt className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#0F9F94]">Technology that may help</dt>
                    <dd className="mt-1 text-sm leading-relaxed text-gray-700">{c.help}</dd>
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
            <SectionHeading id="ai-heading" eyebrow="7 capabilities">AI Solutions for Education</SectionHeading>
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
            <SectionHeading id="software-heading" eyebrow="Built around how you teach">Custom EdTech Software Development</SectionHeading>
            <div className="space-y-5">
              <p className={P}>{SOFTWARE.intro}</p>
              <p className="flex gap-3 rounded-2xl bg-[#fffaeb] px-5 py-4 text-sm leading-relaxed text-[#5c4300] ring-1 ring-[#E3A600]/30">
                <RiInformationLine aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-[#B58300]" /><span><Rich text={SOFTWARE.note} /></span>
              </p>
            </div>
          </div>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SOFTWARE.items.map((it) => (
              <li key={it.title} className="rounded-2xl border border-gray-100 bg-[#faf9f7] p-5">
                <IconTile icon={ICONS[it.icon]} size="sm" />
                <h3 className="mt-3 font-bold leading-snug text-[#1a1a1a]">{it.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-gray-600"><RichText text={it.text} /></p>
              </li>
            ))}
          </ul>
          <div className="mt-10 rounded-2xl bg-[#faf5fd] p-6 ring-1 ring-[#AF00E8]/15 sm:p-8">
            <p className={P}><RichText text={SOFTWARE.teamIntro} /></p>
            <ul className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-5">
              {SOFTWARE.considerations.map(([term, text]) => (
                <li key={term} className="rounded-xl bg-white px-4 py-3 text-sm leading-relaxed text-gray-700 ring-1 ring-[#AF00E8]/10">
                  <strong className="block font-semibold text-[#1a1a1a]">{term.replace(":", "")}</strong>
                  <span className="mt-1 block">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ───────────── Use cases ───────────── */}
      <section aria-labelledby="usecases-heading" className="border-y border-[#9b1fe0]/10 bg-[#faf9f7] py-16 lg:py-24">
        <div className={WRAP}>
          <div className="max-w-3xl">
            <SectionHeading id="usecases-heading" eyebrow="10 illustrative scenarios">Practical EdTech Use Cases</SectionHeading>
            <p className="mt-5 text-[15px] italic leading-relaxed text-gray-500">{USE_CASES_NOTE}</p>
          </div>
          <ol className="mt-12 grid gap-5 lg:grid-cols-2">
            {USE_CASES.map((u, i) => (
              <li key={u.title} className="overflow-hidden rounded-3xl border border-gray-100 bg-white">
                <div className="flex items-center gap-3 border-b border-gray-100 p-5 sm:px-6">
                  <IconTile icon={ICONS[u.icon]} />
                  <h3 className="text-lg font-bold leading-snug text-[#1a1a1a]">
                    <span aria-hidden="true" className="mr-1.5 text-[#AF00E8]">{i + 1}.</span>{u.title}
                  </h3>
                </div>
                <dl className="space-y-3 p-5 sm:px-6">
                  {USE_CASE_FIELDS.map(([key, label]) => (
                    <div key={key} className={key === "oversight" ? "rounded-xl bg-[#f1fbf9] px-4 py-3 ring-1 ring-[#0F9F94]/20" : ""}>
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

      {/* ───────────── Integration ───────────── */}
      <section aria-labelledby="integration-heading" className="bg-white py-16 lg:py-24">
        <div className={WRAP}>
          <div className="max-w-3xl">
            <SectionHeading id="integration-heading" eyebrow="Enter data once">Integrating the Education Technology Ecosystem</SectionHeading>
            <p className={`mt-5 ${P}`}>{INTEGRATION.intro}</p>
          </div>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {INTEGRATION.systems.map((s) => (
              <li key={s.title} className="rounded-2xl border border-gray-100 bg-[#faf9f7] p-5">
                <IconTile icon={ICONS[s.icon]} size="sm" />
                <h3 className="mt-3 font-bold leading-snug text-[#1a1a1a]">{s.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-gray-600"><RichText text={s.text} /></p>
              </li>
            ))}
          </ul>
          <p className="mt-8 flex max-w-4xl gap-3 rounded-2xl bg-[#f1fbf9] px-5 py-4 text-sm leading-relaxed text-gray-700 ring-1 ring-[#0F9F94]/20">
            <RiCheckLine aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-[#0F9F94]" />{INTEGRATION.note}
          </p>
        </div>
      </section>

      {/* ───────────── Responsible AI, privacy and safeguarding ───────────── */}
      <section aria-labelledby="responsible-heading" className="relative overflow-hidden bg-[#0d0a12] py-16 text-white lg:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-[#AF00E8]/20 blur-3xl" />
        <div className={`${WRAP} relative`}>
          <div className="max-w-3xl">
            <SectionHeading id="responsible-heading" eyebrow="UK GDPR · Children's Code · DfE · WCAG 2.2" dark>Responsible AI, Privacy and Safeguarding in Education</SectionHeading>
            <p className="mt-5 text-[15px] leading-relaxed text-gray-300 lg:text-base">{RESPONSIBLE_INTRO}</p>
            <p className="mt-4 flex gap-3 rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-4 text-sm italic leading-relaxed text-gray-300">
              <RiInformationLine aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-[#5EEAD4]" />{RESPONSIBLE_DISCLAIMER}
            </p>
          </div>

          <h3 className="mt-12 text-xl font-bold text-white lg:text-2xl" style={SERIF}>UK-wide considerations</h3>
          <div className="mt-6">
            <IconCardGrid items={withIcons(UK_WIDE)} dark columns="md:grid-cols-2" compact />
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-8">
              <h3 className="flex items-center gap-2 text-xl font-bold text-white lg:text-2xl" style={SERIF}>
                <RiMapPinLine aria-hidden="true" className="h-5 w-5 text-[#5EEAD4]" />England-specific guidance for schools and colleges
              </h3>
              <ul className="mt-5 space-y-3">
                {ENGLAND.map(([term, text]) => (
                  <li key={term} className="flex gap-2.5 text-sm leading-relaxed text-gray-300">
                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#5EEAD4]" />
                    <span><strong className="font-semibold text-white">{term}</strong> {text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <p className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-sm leading-relaxed text-gray-300">{NATIONS_NOTE}</p>
              <p className="flex gap-3 rounded-2xl bg-white/[0.08] p-6 text-sm font-medium leading-relaxed text-gray-200 ring-1 ring-white/15">
                <RiShieldCheckLine aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-[#e9c2ff]" />{RESPONSIBLE_STATEMENT}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── Why ClickMasters ───────────── */}
      <section aria-labelledby="why-heading" className="border-b border-[#9b1fe0]/10 bg-[#faf9f7] py-16 lg:py-24">
        <div className={WRAP}>
          <div className="max-w-3xl">
            <SectionHeading id="why-heading" eyebrow="Why ClickMasters">Why Education Organisations Choose ClickMasters for EdTech Development</SectionHeading>
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
        eyebrow="Eight stages"
        title="Our EdTech Development Approach"
        intro={PROCESS_INTRO}
        columns="md:grid-cols-2 lg:grid-cols-4"
        steps={PROCESS.map((s) => ({ title: s.title, rows: [{ label: "What happens", text: s.text }] }))}
      />

      <FaqSection
        title="AI EdTech Solutions: Frequently Asked Questions"
        intro="Learning assistants, personalisation, LMS builds, integration, responsible AI and student data privacy, answered plainly."
        faqs={FAQS}
      />

      <FinalCta
        title={FINAL_CTA.title}
        titleAccent={FINAL_CTA.titleAccent}
        body={FINAL_CTA.body}
        bring={FINAL_CTA.bring}
        primaryCta={{ label: "Discuss Your EdTech Project", href: "/contact" }}
        secondaryCta={{ label: "Explore Our AI Services", href: "/services" }}
      />
    </>
  );
}
