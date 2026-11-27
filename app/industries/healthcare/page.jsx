// /industries/healthcare
// Content: ./content.ts (from the Healthcare Industry SEO pack). Fully server-rendered.
// Every industry now has a real page, so the old app/industries/[slug] placeholder route was removed.
import Image from "next/image";
import {
  RiArrowDownLine, RiBarChart2Line, RiBarChartBoxLine, RiBookOpenLine, RiBriefcase4Line, RiCalendarCheckLine,
  RiCodeSSlashLine, RiContactsBook2Line, RiCustomerService2Line, RiDashboardLine, RiDatabase2Line, RiEyeLine,
  RiFileList3Line, RiFileSearchLine, RiFileShield2Line, RiFileTextLine, RiFileUserLine, RiFlowChart, RiGitBranchLine,
  RiGroupLine, RiInformationLine, RiLayoutGridLine, RiLayoutLine, RiLockLine, RiPaletteLine, RiPlugLine,
  RiQuestionAnswerLine, RiRoadMapLine, RiRobot2Line, RiScales3Line, RiSearchEyeLine, RiShieldCheckLine,
  RiSpeedUpLine, RiStackLine, RiTaskLine, RiUserFollowLine,
} from "../../Components/icons";

import JsonLd from "../../Components/JsonLd";
import ScopingCallBlock from "../../Components/ScopingCallBlock";
import { IconTile, SectionHeading, WRAP } from "../../Components/ServicePageUI";
import {
  FaqSection, FinalCta, IconCardGrid, ProcessGrid, RichText, ServiceHero, faqPageJsonLd,
} from "../../Components/ServicePageSections";
import { detailPageJsonLd, detailPageMetadata } from "../../lib/site";
import {
  AI_BOUNDARY, AI_CAPABILITIES, AI_INTRO, CHALLENGES, CHALLENGES_INTRO, FAQS, FINAL_CTA, HERO, HERO_FLOW, IMAGES,
  OVERVIEW, PATH, PRIVACY, PRIVACY_DISCLAIMER, PRIVACY_INTRO, PROCESS, PROCESS_NOTE, SCHEMA_SERVICE, SEO, SOFTWARE,
  USE_CASES, USE_CASES_NOTE, USE_CASE_FIELDS, WHY, WHY_INTRO, WHY_OUTRO,
} from "./content";

export const metadata = detailPageMetadata({ path: PATH, ...SEO });

const CRUMBS = [
  { name: "Industries", path: "/industries" },
  { name: "Healthcare & MedTech", path: PATH },
];

// All icons are decorative (headings carry the meaning).
const ICONS = {
  admin: RiFileList3Line, plug: RiPlugLine, folder: RiFileSearchLine, calendar: RiCalendarCheckLine,
  database: RiDatabase2Line, speed: RiSpeedUpLine, automation: RiFlowChart, assistant: RiQuestionAnswerLine,
  document: RiFileTextLine, knowledge: RiBookOpenLine, analytics: RiBarChartBoxLine, modules: RiLayoutGridLine,
  contacts: RiContactsBook2Line, crm: RiCustomerService2Line, lock: RiLockLine, dashboard: RiDashboardLine,
  report: RiBarChart2Line, web: RiLayoutLine, search: RiSearchEyeLine, task: RiTaskLine, privacy: RiFileShield2Line,
  audit: RiFileUserLine, users: RiGroupLine, eye: RiEyeLine, scales: RiScales3Line, shield: RiShieldCheckLine,
  briefcase: RiBriefcase4Line, ai: RiRobot2Line, code: RiCodeSSlashLine, workflow: RiGitBranchLine,
  stack: RiStackLine, map: RiRoadMapLine, design: RiPaletteLine,
};
const withIcons = (items) => items.map((it) => ({ ...it, icon: ICONS[it.icon] }));

const P = "text-[15px] leading-relaxed text-gray-600 lg:text-base";
const SERIF = { fontFamily: "Garamond, serif" };
const LABEL = "text-[11px] font-bold uppercase tracking-[0.14em] text-gray-500";
const HALF = "(min-width: 1280px) 600px, (min-width: 1024px) 48vw, 100vw";

/** A photo (below the fold, lazy-loaded) with rounded corners. */
function Photo({ image, sizes, className = "" }) {
  return (
    <div className={`relative overflow-hidden rounded-3xl ring-1 ring-black/5 ${className}`}>
      <Image src={image.src} width={image.width} height={image.height} alt={image.alt} sizes={sizes} className="h-full w-full object-cover" />
    </div>
  );
}

/** Down arrow between hero diagram stages. */
function FlowArrow() {
  return (
    <div aria-hidden="true" className="flex justify-center py-1.5 text-[#AF00E8]/60">
      <RiArrowDownLine className="h-5 w-5" />
    </div>
  );
}

/** Hero diagram: documents and requests → secure processing → staff review → systems. */
function WorkflowDiagram() {
  return (
    <div role="img" aria-label={HERO.figureAlt} className="text-sm">
      <ul className="grid grid-cols-2 gap-2">
        {HERO_FLOW.inputs.map((input) => (
          <li key={input} className="flex items-center gap-2 rounded-xl border border-gray-100 bg-[#faf9f7] px-3 py-2.5 text-[13px] font-medium text-gray-700">
            <RiFileTextLine aria-hidden="true" className="h-4 w-4 shrink-0 text-gray-400" />{input}
          </li>
        ))}
      </ul>
      <FlowArrow />
      <div className="rounded-2xl bg-gradient-to-br from-[#2a0b3a] to-[#0d0a12] p-4 text-white">
        <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[#e9c2ff]">
          <RiLockLine aria-hidden="true" className="h-3.5 w-3.5" />Secure AI processing
        </p>
        <ol className="mt-3 grid grid-cols-3 gap-2">
          {HERO_FLOW.processing.map((step, i) => (
            <li key={step} className="rounded-lg bg-white/10 px-2 py-2 text-center text-[13px] font-semibold">
              <span className="mr-1 text-[#5EEAD4]">{i + 1}.</span>{step}
            </li>
          ))}
        </ol>
      </div>
      <FlowArrow />
      <div className="flex items-center justify-center gap-2 rounded-full bg-[#fffaeb] px-4 py-2.5 text-[13px] font-semibold text-[#8a6400] ring-1 ring-[#E3A600]/40">
        <RiUserFollowLine aria-hidden="true" className="h-4 w-4" />Staff review before records are updated
      </div>
      <FlowArrow />
      <ul className="grid grid-cols-3 gap-2">
        {HERO_FLOW.outputs.map((out, i) => {
          const Icon = [RiTaskLine, RiCalendarCheckLine, RiDashboardLine][i];
          return (
            <li key={out} className="flex flex-col items-center gap-1.5 rounded-xl bg-[#f1fbf9] px-2 py-3 text-center text-[12px] font-semibold leading-tight text-[#0b6f68] ring-1 ring-[#0F9F94]/20">
              <Icon aria-hidden="true" className="h-5 w-5" />{out}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default function HealthcareIndustry() {
  return (
    <>
      <JsonLd
        data={detailPageJsonLd({
          path: PATH,
          name: SEO.ogTitle,
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
        primaryCta={{ label: "Discuss Your Healthcare Technology Project", href: "/contact" }}
        secondaryCta={{ label: "Explore Our AI Services", href: "/services" }}
        stats={HERO.trust}
        figureLabel="Documents in, reviewed work out"
        figure={<WorkflowDiagram />}
        figcaption="Illustrative workflow, not a client project."
      />

      <ScopingCallBlock path={PATH} service="healthcare AI and software" />

      {/* ───────────── Overview ───────────── */}
      <section aria-labelledby="overview-heading" className="bg-white py-16 lg:py-24">
        <div className={`${WRAP} grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16`}>
          <div>
            <SectionHeading id="overview-heading" eyebrow="AI in healthcare, in practice">{OVERVIEW.title}</SectionHeading>
            <div className="mt-6 space-y-5">
              {OVERVIEW.paragraphs.map((p) => <p key={p.slice(0, 32)} className={P}>{p}</p>)}
            </div>
            <p className={`mt-8 ${LABEL}`}>Organisations we design for</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {OVERVIEW.organisations.map((o) => (
                <li key={o} className="rounded-full bg-[#faf5fd] px-3 py-1.5 text-xs font-medium text-[#7a1fa2] ring-1 ring-[#AF00E8]/20">{o}</li>
              ))}
            </ul>
          </div>
          <Photo image={IMAGES.corridor} sizes={HALF} className="aspect-[4/3]" />
        </div>
      </section>

      {/* ───────────── Challenges ───────────── */}
      <section aria-labelledby="challenges-heading" className="border-y border-[#9b1fe0]/10 bg-[#faf9f7] py-16 lg:py-24">
        <div className={WRAP}>
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16">
            <div>
              <SectionHeading id="challenges-heading" eyebrow="Sound familiar?">Healthcare Technology Challenges We Help Address</SectionHeading>
              <p className={`mt-5 ${P}`}>{CHALLENGES_INTRO}</p>
            </div>
            <Photo image={IMAGES.waiting} sizes={HALF} className="aspect-[16/9]" />
          </div>
          <ul className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {CHALLENGES.map((c) => (
              <li key={c.title} className="rounded-2xl border border-gray-100 bg-white p-6 transition-colors hover:border-[#AF00E8]/25">
                <IconTile icon={ICONS[c.icon]} />
                <h3 className="mt-4 text-lg font-bold text-[#1a1a1a]">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{c.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ───────────── AI solutions ───────────── */}
      <section id="ai-solutions" aria-labelledby="ai-heading" className="scroll-mt-28 bg-white py-16 lg:py-24">
        <div className={WRAP}>
          <div className="max-w-3xl">
            <SectionHeading id="ai-heading" eyebrow="Administrative and operational AI">AI Solutions for Healthcare Providers</SectionHeading>
            <p className={`mt-5 ${P}`}>{AI_INTRO}</p>
            <p className="mt-5 flex gap-3 rounded-2xl bg-[#fffaeb] px-5 py-4 text-[15px] font-semibold leading-relaxed text-[#5c4300] ring-1 ring-[#E3A600]/30">
              <RiInformationLine aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-[#B58300]" />{AI_BOUNDARY}
            </p>
          </div>

          <nav aria-label="AI solutions on this page" className="mt-10">
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
                className={`scroll-mt-28 rounded-3xl border border-gray-100 bg-[#faf9f7] p-6 sm:p-8 ${c.image ? "grid gap-8 lg:grid-cols-[1.25fr_1fr] lg:items-start" : ""}`}
              >
                <div>
                  <div className="flex items-center gap-3">
                    <IconTile icon={ICONS[c.icon]} />
                    <h3 id={`${c.id}-heading`} className="text-[22px] font-bold leading-snug text-[#1a1a1a] lg:text-[26px]" style={SERIF}>{c.title}</h3>
                  </div>
                  <p className={`mt-4 ${P}`}>{c.intro}</p>
                  {c.items && (
                    <ul className={`mt-4 grid gap-2.5 ${c.image ? "" : "md:grid-cols-2"}`}>
                      {c.items.map((it) => (
                        <li key={it.text} className="flex gap-2.5 rounded-xl bg-white px-4 py-3 text-sm leading-relaxed text-gray-700 ring-1 ring-gray-100">
                          <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#AF00E8]" />
                          <span>{it.term && <strong className="font-semibold text-[#1a1a1a]">{it.term} </strong>}{it.text}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  <div className="mt-5 space-y-4">
                    {c.outro.map((p) => <p key={p.slice(0, 32)} className={P}><RichText text={p} /></p>)}
                  </div>
                </div>
                {c.image && <Photo image={IMAGES[c.image]} sizes="(min-width: 1280px) 500px, (min-width: 1024px) 40vw, 100vw" className="aspect-[3/2] lg:sticky lg:top-28" />}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── Custom software ───────────── */}
      <section aria-labelledby="software-heading" className="border-y border-[#9b1fe0]/10 bg-[#faf9f7] py-16 lg:py-24">
        <div className={WRAP}>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <SectionHeading id="software-heading" eyebrow="Built around your workflows">Custom Healthcare Software Development</SectionHeading>
            <div className="space-y-5">
              {SOFTWARE.paragraphs.map((p) => <p key={p.slice(0, 32)} className={P}>{p}</p>)}
            </div>
          </div>
          <p className={`mt-12 ${P}`}><RichText text={SOFTWARE.listIntro} /></p>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {SOFTWARE.items.map((it) => (
              <li key={it.title} className="rounded-2xl border border-gray-100 bg-white p-5">
                <IconTile icon={ICONS[it.icon]} size="sm" />
                <h3 className="mt-3 font-bold leading-snug text-[#1a1a1a]">{it.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-gray-600"><RichText text={it.text} /></p>
              </li>
            ))}
          </ul>
          <p className={`mt-8 max-w-4xl ${P}`}><RichText text={SOFTWARE.hosting} /></p>
          <p className="mt-6 flex max-w-4xl gap-3 rounded-2xl bg-white px-5 py-4 text-sm leading-relaxed text-gray-700 ring-1 ring-[#AF00E8]/15">
            <RiShieldCheckLine aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-[#AF00E8]" />
            <span><span className="font-semibold text-[#1a1a1a]">Our scope: </span>{SOFTWARE.scope}</span>
          </p>
        </div>
      </section>

      {/* ───────────── Use cases ───────────── */}
      <section aria-labelledby="usecases-heading" className="bg-white py-16 lg:py-24">
        <div className={WRAP}>
          <div className="max-w-3xl">
            <SectionHeading id="usecases-heading" eyebrow="8 illustrative scenarios">Practical Healthcare AI Use Cases</SectionHeading>
            <p className="mt-5 text-[15px] italic leading-relaxed text-gray-500">{USE_CASES_NOTE}</p>
          </div>
          <ol className="mt-12 grid gap-5 lg:grid-cols-2">
            {USE_CASES.map((u, i) => (
              <li key={u.title} className="overflow-hidden rounded-3xl border border-gray-100 bg-[#faf9f7]">
                <div className="flex items-center gap-3 border-b border-gray-100 bg-white p-5 sm:px-6">
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

      {/* ───────────── Privacy, security and responsible AI ───────────── */}
      <section aria-labelledby="privacy-heading" className="relative overflow-hidden bg-[#0d0a12] py-16 text-white lg:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-[#AF00E8]/20 blur-3xl" />
        <div className={`${WRAP} relative`}>
          <div className="max-w-3xl">
            <SectionHeading id="privacy-heading" eyebrow="UK GDPR · DPIA · MHRA · DCB0129/0160" dark>Privacy, Security and Responsible AI in UK Healthcare</SectionHeading>
            <p className="mt-5 text-[15px] leading-relaxed text-gray-300 lg:text-base">{PRIVACY_INTRO}</p>
            <p className="mt-4 flex gap-3 rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-4 text-sm italic leading-relaxed text-gray-300">
              <RiInformationLine aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-[#5EEAD4]" />{PRIVACY_DISCLAIMER}
            </p>
          </div>
          <ul className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {PRIVACY.map((p) => (
              <li key={p.title} className={`rounded-2xl border border-white/10 bg-white/[0.04] p-6 ${p.paragraphs.length > 1 ? "lg:col-span-2" : ""}`}>
                <IconTile icon={ICONS[p.icon]} dark />
                <h3 className="mt-4 text-lg font-bold text-white">{p.title}</h3>
                {p.paragraphs.map((t) => <p key={t.slice(0, 32)} className="mt-2 text-sm leading-relaxed text-gray-300">{t}</p>)}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ───────────── Why ClickMasters ───────────── */}
      <section aria-labelledby="why-heading" className="border-y border-[#9b1fe0]/10 bg-[#faf9f7] py-16 lg:py-24">
        <div className={WRAP}>
          <div className="max-w-3xl">
            <SectionHeading id="why-heading" eyebrow="Why ClickMasters">Why Healthcare Organisations Consider ClickMasters</SectionHeading>
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
        eyebrow="Six steps"
        title="Our Healthcare Technology Development Approach"
        steps={PROCESS.map((s) => ({ title: s.title, rows: [{ label: "What happens", text: s.text }] }))}
        after={
          <p className="mt-8 flex max-w-4xl gap-3 rounded-2xl bg-[#faf9f7] px-5 py-4 text-sm italic leading-relaxed text-gray-600 ring-1 ring-gray-100">
            <RiInformationLine aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-[#AF00E8]" />{PROCESS_NOTE}
          </p>
        }
      />

      <FaqSection
        title="Healthcare AI Solutions: Frequently Asked Questions"
        intro="Uses of AI, administrative automation, assistants, patient data, MHRA and integration, answered plainly."
        faqs={FAQS}
      />

      <FinalCta
        title={FINAL_CTA.title}
        titleAccent={FINAL_CTA.titleAccent}
        body={FINAL_CTA.body}
        bring={FINAL_CTA.bring}
        primaryCta={{ label: "Discuss Your Healthcare Technology Project", href: "/contact" }}
        secondaryCta={{ label: "Explore Our AI and Software Services", href: "/services" }}
      />
    </>
  );
}
