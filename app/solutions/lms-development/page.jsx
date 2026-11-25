// /solutions/lms-development
// Content: ./content.ts (from the LMS Development SEO pack). Fully server-rendered.
// This real folder takes precedence over the app/solutions/[slug] placeholder route.
import Image from "next/image";
import {
  RiAccountCircleLine, RiBarChart2Line, RiBookOpenLine, RiCheckLine, RiContactsBook2Line, RiCustomerService2Line,
  RiDashboardLine, RiEyeLine, RiFileEditLine, RiFileShield2Line, RiGraduationCapLine, RiHandHeartLine,
  RiLineChartLine, RiLockLine, RiMedalLine, RiPlugLine, RiPresentationLine, RiQuestionAnswerLine, RiRobot2Line,
  RiRouteLine, RiShieldCheckLine, RiShieldUserLine, RiShoppingCart2Line, RiSmartphoneLine, RiSpeedLine,
  RiStackLine, RiTeamLine, RiUserSettingsLine, RiUserStarLine, RiFileList3Line, RiParentLine, RiGroupLine,
} from "react-icons/ri";

import JsonLd from "../../Components/JsonLd";
import { IconTile, SectionHeading, WRAP } from "../../Components/ServicePageUI";
import {
  ComparisonTable, FaqSection, FinalCta, IconCardGrid, Linked, ON_DARK_LINK, ProcessGrid, ServiceHero, faqPageJsonLd,
} from "../../Components/ServicePageSections";
import { detailPageJsonLd, detailPageMetadata } from "../../lib/site";
import {
  AI, AUDIENCE, COMPARISON, COMPARISON_INTRO, COMPARISON_TEST, FAQS, FEATURES, FEATURES_INTRO, FINAL_CTA, HERO,
  IMAGES, INTEGRATIONS, INTEGRATIONS_INTRO, PARTNER, PATH, PROCESS, PROCESS_OUTRO, SAAS_NOTE, SCHEMA_SERVICE,
  SECURITY, SECURITY_INTRO, SEO, STACK_NOTE, USE_CASES, USE_CASES_NOTE, WHAT_IS,
} from "./content";

export const metadata = detailPageMetadata({ path: PATH, ...SEO });

const CRUMBS = [
  { name: "Solutions", path: "/solutions" },
  { name: "LMS Development", path: PATH },
];

// All icons are decorative (headings carry the meaning).
const ICONS = {
  course: RiBookOpenLine, path: RiRouteLine, quiz: RiQuestionAnswerLine, dashboard: RiDashboardLine,
  roles: RiUserSettingsLine, report: RiBarChart2Line, certificate: RiMedalLine, lock: RiLockLine,
  cart: RiShoppingCart2Line, mobile: RiSmartphoneLine, draft: RiFileEditLine, copilot: RiRobot2Line,
  insight: RiLineChartLine, people: RiAccountCircleLine, crm: RiContactsBook2Line, standards: RiStackLine,
  plug: RiPlugLine, privacy: RiFileShield2Line, child: RiParentLine, access: RiEyeLine, shield: RiShieldCheckLine,
  speed: RiSpeedLine, onboarding: RiUserStarLine, compliance: RiFileList3Line, cpd: RiGraduationCapLine,
  provider: RiPresentationLine, school: RiTeamLine, partner: RiGroupLine, honest: RiHandHeartLine,
  demo: RiShieldUserLine, support: RiCustomerService2Line,
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

const TAG = {
  Foundation: "bg-[#f1fbf9] text-[#0F9F94] ring-[#0F9F94]/25",
  "Built to requirement": "bg-[#fffaeb] text-[#8a6400] ring-[#E3A600]/30",
  "Foundation and built to requirement": "bg-[#faf5fd] text-[#7a1fa2] ring-[#AF00E8]/25",
};

const P = "text-[15px] leading-relaxed text-gray-600 lg:text-base";
const SERIF = { fontFamily: "Garamond, serif" };

export default function LmsDevelopment() {
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
        primaryCta={{ label: "Discuss Your LMS Requirements", href: "/contact" }}
        secondaryCta={{ label: "Compare LMS Options", href: "#compare" }}
        stats={HERO.stats}
        figureLabel="An LMS at a glance"
        figure={
          <Image
            src={IMAGES.roles.src}
            width={IMAGES.roles.width}
            height={IMAGES.roles.height}
            alt={IMAGES.roles.alt}
            sizes="(min-width: 1024px) 560px, 100vw"
            preload
            className="h-auto w-full"
          />
        }
        figcaption="Each role sees its own dashboard over shared courses, assessments and reporting."
      />

      {/* ───────────── What an LMS does ───────────── */}
      <section aria-labelledby="what-heading" className="bg-white py-16 lg:py-24">
        <div className={`${WRAP} grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16`}>
          <div>
            <SectionHeading id="what-heading" eyebrow="The basics">What an LMS Does, and When It Needs to Be Built Around You</SectionHeading>
            <p className={`mt-6 ${P}`}><Rich text={WHAT_IS.p1} /></p>
            <p className={`mt-5 ${P}`}>{WHAT_IS.p2}</p>
            <ul className="mt-4 space-y-2.5">
              {WHAT_IS.fit.map(([term, text]) => (
                <li key={term} className="flex gap-2.5 text-[15px] leading-relaxed text-gray-700">
                  <RiCheckLine aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-[#AF00E8]" />
                  <span><strong className="font-semibold text-[#1a1a1a]">{term}</strong> {text}</span>
                </li>
              ))}
            </ul>
            <p className={`mt-5 ${P}`}>{WHAT_IS.p3}</p>
          </div>
          <Photo image={IMAGES.workplace} sizes="(min-width: 1280px) 540px, (min-width: 1024px) 42vw, 100vw" className="aspect-[4/3]" />
        </div>
      </section>

      {/* ───────────── Custom vs ready-made ───────────── */}
      <section id="compare" aria-labelledby="compare-heading" className="scroll-mt-28 border-y border-[#9b1fe0]/10 bg-[#faf9f7] py-16 lg:py-24">
        <div className={WRAP}>
          <div className="max-w-3xl">
            <SectionHeading id="compare-heading" eyebrow="Three honest routes">Custom LMS vs Ready-Made LMS Platforms</SectionHeading>
            <p className={`mt-5 ${P}`}>{COMPARISON_INTRO}</p>
          </div>
          <Diagram image={IMAGES.routes} className="mt-10" />
          <div className="mt-10">
            <ComparisonTable
              labelledBy="compare-heading"
              headers={[
                { label: "Route" },
                { label: COMPARISON.headers[1], dot: "#0F6B5E" },
                { label: COMPARISON.headers[2], dot: "#AF00E8" },
                { label: COMPARISON.headers[3], dot: "#E3A600" },
              ]}
              rows={COMPARISON.rows}
              minWidth="min-w-[900px]"
            />
          </div>
          <p className="mt-8 max-w-4xl rounded-2xl bg-gradient-to-br from-[#faf5fd] to-[#f1fbf9] p-6 text-[15px] leading-relaxed text-gray-700 ring-1 ring-[#AF00E8]/10">
            <Rich text={COMPARISON_TEST} />
          </p>
          <p className={`mt-8 max-w-4xl ${P}`}><Linked value={SAAS_NOTE} /></p>
        </div>
      </section>

      {/* ───────────── Features ───────────── */}
      <section aria-labelledby="features-heading" className="bg-white py-16 lg:py-24">
        <div className={WRAP}>
          <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:items-end">
            <SectionHeading id="features-heading" eyebrow="10 features">Essential LMS Features, and Which Ones You Actually Need</SectionHeading>
            <div>
              <p className="text-[15px] leading-relaxed text-gray-600">{FEATURES_INTRO}</p>
              <p className="mt-3 flex flex-wrap gap-2 text-xs font-semibold">
                <span className={`rounded-full px-3 py-1 ring-1 ${TAG.Foundation}`}>Foundation</span>
                <span className={`rounded-full px-3 py-1 ring-1 ${TAG["Built to requirement"]}`}>Built to requirement</span>
              </p>
            </div>
          </div>

          <ul className="mt-12 grid gap-4 md:grid-cols-2">
            {FEATURES.map((f) => (
              <li key={f.title} className="flex gap-4 rounded-2xl border border-gray-100 bg-[#faf9f7] p-5 sm:p-6">
                <IconTile icon={ICONS[f.icon]} />
                <div>
                  <h3 className="text-lg font-bold text-[#1a1a1a]">{f.title}</h3>
                  <p className="mt-1.5">
                    <span className={`inline-block rounded-full px-2.5 py-0.5 text-[11px] font-semibold ring-1 ${TAG[f.tag]}`}>{f.tag}</span>
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600"><Linked value={f.text} /></p>
                </div>
              </li>
            ))}
          </ul>

          <h3 className="mt-16 text-2xl font-bold text-[#1a1a1a] lg:text-3xl" style={SERIF}>{AUDIENCE.intro}</h3>
          <Diagram image={IMAGES.features} className="mt-6" />
          <div className="mt-8">
            <ComparisonTable
              labelledBy="features-heading"
              headers={AUDIENCE.headers.map((label) => ({ label }))}
              rows={AUDIENCE.rows}
              minWidth="min-w-[720px]"
            />
          </div>
        </div>
      </section>

      {/* ───────────── AI ───────────── */}
      <section aria-labelledby="ai-heading" className="relative overflow-hidden bg-[#0d0a12] py-16 text-white lg:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-[#AF00E8]/25 blur-3xl" />
        <div className={`${WRAP} relative`}>
          <div className="max-w-3xl">
            <SectionHeading id="ai-heading" eyebrow="Human-reviewed AI" dark>AI in Your Learning Platform</SectionHeading>
            <p className="mt-5 text-[15px] leading-relaxed text-gray-300 lg:text-base">{AI.intro}</p>
          </div>
          <div className="mt-12">
            <IconCardGrid items={withIcons(AI.items)} dark />
          </div>
          <p className="mt-10 max-w-4xl text-[15px] leading-relaxed text-gray-300"><Linked value={AI.outro} className={ON_DARK_LINK} /></p>
        </div>
      </section>

      {/* ───────────── Integrations & architecture ───────────── */}
      <section aria-labelledby="integration-heading" className="border-b border-[#9b1fe0]/10 bg-[#faf9f7] py-16 lg:py-24">
        <div className={WRAP}>
          <div className="max-w-3xl">
            <SectionHeading id="integration-heading" eyebrow="Less manual admin">LMS Integrations and Technical Architecture</SectionHeading>
            <p className={`mt-5 ${P}`}>{INTEGRATIONS_INTRO}</p>
          </div>
          <ul className="mt-12 grid gap-4 md:grid-cols-2">
            {INTEGRATIONS.map((it) => (
              <li key={it.title} className="flex gap-4 rounded-2xl border border-gray-100 bg-white p-5 sm:p-6">
                <IconTile icon={ICONS[it.icon]} />
                <div>
                  <h3 className="text-lg font-bold text-[#1a1a1a]">{it.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600"><Linked value={it.text} /></p>
                </div>
              </li>
            ))}
          </ul>
          <h3 className="mt-16 text-2xl font-bold text-[#1a1a1a] lg:text-3xl" style={SERIF}>The technical foundation</h3>
          <p className={`mt-4 max-w-4xl ${P}`}>{STACK_NOTE}</p>
          <Diagram image={IMAGES.architecture} className="mt-8" />
        </div>
      </section>

      {/* ───────────── Security ───────────── */}
      <section aria-labelledby="security-heading" className="relative overflow-hidden bg-[#0d0a12] py-16 text-white lg:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-[#AF00E8]/20 blur-3xl" />
        <div className={`${WRAP} relative`}>
          <div className="max-w-3xl">
            <SectionHeading id="security-heading" eyebrow="Designed in, not added later" dark>Security, Accessibility and Performance</SectionHeading>
            <p className="mt-5 text-[15px] leading-relaxed text-gray-300 lg:text-base">{SECURITY_INTRO}</p>
          </div>
          <div className="mt-12">
            <IconCardGrid items={withIcons(SECURITY)} dark columns="sm:grid-cols-2 lg:grid-cols-3" compact />
          </div>
        </div>
      </section>

      {/* ───────────── Process ───────────── */}
      <ProcessGrid
        eyebrow="6 steps, two-week sprints"
        title="How We Develop Your LMS"
        columns="md:grid-cols-2 lg:grid-cols-3"
        steps={PROCESS.map((s) => ({ title: s.title, rows: [{ label: "What happens", text: s.text }] }))}
        after={
          <>
            <Diagram image={IMAGES.process} className="mt-12" />
            <p className={`mt-8 max-w-4xl ${P}`}>{PROCESS_OUTRO}</p>
          </>
        }
      />

      {/* ───────────── Use cases ───────────── */}
      <section aria-labelledby="usecases-heading" className="border-y border-[#9b1fe0]/10 bg-[#faf9f7] py-16 lg:py-24">
        <div className={WRAP}>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <SectionHeading id="usecases-heading" eyebrow="Illustrative, not case studies">Practical LMS Use Cases</SectionHeading>
              <p className={`mt-5 ${P}`}><em>{USE_CASES_NOTE}</em></p>
            </div>
            <Photo image={IMAGES.classroom} sizes="(min-width: 1280px) 600px, (min-width: 1024px) 48vw, 100vw" className="aspect-[16/10]" />
          </div>
          <div className="mt-12">
            <IconCardGrid items={withIcons(USE_CASES)} columns="sm:grid-cols-2 lg:grid-cols-3" />
          </div>
        </div>
      </section>

      {/* ───────────── Choosing a partner ───────────── */}
      <section aria-labelledby="partner-heading" className="bg-white py-16 lg:py-24">
        <div className={WRAP}>
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <div>
              <SectionHeading id="partner-heading" eyebrow="Questions worth asking">Choosing an LMS Development Partner: What to Ask</SectionHeading>
              <p className={`mt-5 ${P}`}>{PARTNER.intro}</p>
              <ol className="mt-6 space-y-3">
                {PARTNER.questions.map((q) => (
                  <li key={q} className="flex gap-3 rounded-xl border border-gray-100 bg-[#faf9f7] px-4 py-3 text-[15px] leading-relaxed text-gray-700">
                    <RiQuestionAnswerLine aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-[#AF00E8]" />
                    {q}
                  </li>
                ))}
              </ol>
            </div>
            <Photo image={IMAGES.notes} sizes="(min-width: 1280px) 600px, (min-width: 1024px) 48vw, 100vw" className="aspect-[4/3] lg:aspect-auto" />
          </div>
          <h3 className="mt-16 text-2xl font-bold text-[#1a1a1a] lg:text-3xl" style={SERIF}>How ClickMasters answers them</h3>
          <div className="mt-8">
            <IconCardGrid items={withIcons(PARTNER.answers)} columns="sm:grid-cols-2 lg:grid-cols-4" compact />
          </div>
        </div>
      </section>

      <FaqSection
        title="LMS Development: Frequently Asked Questions"
        intro="Build or buy, features, integrations, data, accessibility and cost, answered plainly."
        faqs={FAQS}
      />

      <FinalCta
        title={FINAL_CTA.title}
        titleAccent={FINAL_CTA.titleAccent}
        body={FINAL_CTA.body}
        bring={FINAL_CTA.bring}
        primaryCta={{ label: "Discuss Your LMS Requirements", href: "/contact" }}
        secondaryCta={{ label: "Request an LMS Consultation", href: "/contact" }}
      />
    </>
  );
}
