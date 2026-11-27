// /solutions — problem-led hub: which kind of solution fits which business problem.
// Content: ./content.ts (from the Solutions SEO pack). Fully server-rendered.
import Image from "next/image";
import {
  RiArchiveLine, RiBarChart2Line, RiBuilding2Line, RiBuilding4Line, RiCodeBoxLine, RiContactsBook2Line,
  RiCustomerService2Line, RiErrorWarningLine, RiFocus3Line, RiGitBranchLine, RiGraduationCapLine,
  RiHandCoinLine, RiHeartPulseLine, RiHistoryLine, RiHome4Line, RiAppsLine, RiLayoutGridLine, RiLineChartLine,
  RiLinksLine, RiLoopLeftLine, RiMoneyPoundCircleLine, RiPlugLine, RiRepeatLine, RiRocket2Line, RiRobot2Line,
  RiShieldCheckLine, RiShoppingCart2Line, RiSmartphoneLine, RiStore2Line, RiTruckLine, RiCheckLine,
  RiSettings3Line,
} from "../Components/icons";

import Link from "next/link";
import JsonLd from "../Components/JsonLd";
import { IconTile, SectionHeading, WRAP } from "../Components/ServicePageUI";
import {
  ComparisonTable, FaqSection, FinalCta, IconCardGrid, IndustryGrid, Linked, ProcessGrid, ServiceHero, faqPageJsonLd,
} from "../Components/ServicePageSections";
import { jsonLdFor, metadataFor } from "../lib/seo-pages";
import {
  CATEGORIES, CHALLENGES, CHALLENGES_INTRO, CHOOSE, CHOOSE_INTRO, FAQS, FINAL_CTA, FORMS, FOUNDATIONS,
  FOUNDATIONS_INTRO, HERO, HOW, IMAGES, INDUSTRIES, INDUSTRIES_INTRO, NEEDS, NEEDS_INTRO, OG, PROCESS,
  PROCESS_INTRO, READINESS, WHY,
} from "./content";

const base = metadataFor("solutions");
export const metadata = {
  ...base,
  openGraph: { ...base.openGraph, title: OG.title, description: OG.description },
  twitter: { ...base.twitter, title: OG.title, description: OG.description },
};

// All icons are decorative (headings carry the meaning).
const ICONS = {
  foundation: RiLayoutGridLine, custom: RiCodeBoxLine, ai: RiRobot2Line, manual: RiRepeatLine,
  disconnected: RiLinksLine, workflow: RiGitBranchLine, legacy: RiHistoryLine, experience: RiSmartphoneLine,
  scale: RiLineChartLine, report: RiBarChart2Line, support: RiCustomerService2Line, risk: RiErrorWarningLine,
  integration: RiPlugLine, saas: RiAppsLine, erp: RiBuilding4Line, crm: RiContactsBook2Line,
  lms: RiGraduationCapLine, inventory: RiArchiveLine, fleet: RiTruckLine, rocket: RiRocket2Line,
  store: RiStore2Line, growth: RiLineChartLine, enterprise: RiBuilding2Line, shield: RiShieldCheckLine,
  service: RiHandCoinLine, health: RiHeartPulseLine, finance: RiMoneyPoundCircleLine,
  ecommerce: RiShoppingCart2Line, property: RiHome4Line, factory: RiSettings3Line, target: RiFocus3Line,
  loop: RiLoopLeftLine,
};
const withIcons = (items) => items.map((it) => ({ ...it, icon: ICONS[it.icon] }));

/** Renders **bold** and *italic* markers from the content file. */
function Rich({ text }) {
  return text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/).map((part, i) => {
    if (part.startsWith("**")) return <strong key={i} className="font-semibold text-[#1a1a1a]">{part.slice(2, -2)}</strong>;
    if (part.startsWith("*")) return <em key={i}>{part.slice(1, -1)}</em>;
    return part;
  });
}

/** A content-pack diagram (PNG in /public) in a card, with its descriptive alt text. */
function Diagram({ image, caption, className = "" }) {
  return (
    <figure className={`rounded-3xl border border-gray-100 bg-white p-4 shadow-[0_20px_60px_-30px_rgba(60,0,90,0.35)] sm:p-8 ${className}`}>
      <Image
        src={image.src}
        width={image.width}
        height={image.height}
        alt={image.alt}
        sizes="(min-width: 1280px) 1216px, 100vw"
        className="h-auto w-full"
      />
      {caption && <figcaption className="mt-4 text-center text-xs text-gray-500">{caption}</figcaption>}
    </figure>
  );
}

const P = "text-[15px] leading-relaxed text-gray-600 lg:text-base";
const SERIF = { fontFamily: "Garamond, serif" };

export default function Solutions() {
  return (
    <>
      <JsonLd data={jsonLdFor("solutions")} />
      <JsonLd data={faqPageJsonLd(FAQS)} />

      <ServiceHero
        crumbs={[{ name: "Solutions", href: "/solutions" }]}
        eyebrow={HERO.eyebrow}
        title={HERO.title}
        titleAccent={HERO.titleAccent}
        lead={HERO.lead}
        audience={HERO.audience}
        primaryCta={{ label: "Discuss Your Business Challenge", href: "/contact" }}
        secondaryCta={{ label: "Find the Right Solution", href: "#choose" }}
        stats={HERO.stats}
        figureLabel="From challenge to solution"
        figure={
          <Image
            src={IMAGES.map.src}
            width={IMAGES.map.width}
            height={IMAGES.map.height}
            alt={IMAGES.map.alt}
            sizes="(min-width: 1024px) 560px, 100vw"
            priority
            className="h-auto w-full"
          />
        }
        figcaption="We match the solution to the problem, not the other way round."
      />

      {/* ───────────── How solutions work ───────────── */}
      <section aria-labelledby="how-heading" className="bg-white py-16 lg:py-24">
        <div className={WRAP}>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <SectionHeading id="how-heading" eyebrow="Outcomes, not technologies">How ClickMasters Solutions Work</SectionHeading>
            <div className="space-y-5">
              <p className={P}><Rich text={HOW.p1} /></p>
              <p className={P}><Rich text={HOW.p2} /></p>
            </div>
          </div>
          <ul className="mt-12 grid gap-4 md:grid-cols-3">
            {FORMS.map((f, i) => (
              <li key={f.title} className="rounded-2xl border border-gray-100 bg-[#faf9f7] p-6">
                <div className="flex items-center justify-between">
                  <IconTile icon={ICONS[f.icon]} />
                  <span aria-hidden="true" className="text-[34px] font-bold leading-none text-transparent [-webkit-text-stroke:1.5px_#AF00E8]" style={SERIF}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="mt-4 text-lg font-bold text-[#1a1a1a]">{f.title}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-gray-600">{f.text}</p>
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-4xl rounded-2xl bg-gradient-to-br from-[#faf5fd] to-[#f1fbf9] p-6 text-[15px] leading-relaxed text-gray-700 ring-1 ring-[#AF00E8]/10">
            {HOW.scope}
          </p>
        </div>
      </section>

      {/* ───────────── Challenges ───────────── */}
      <section aria-labelledby="challenges-heading" className="border-y border-[#9b1fe0]/10 bg-[#faf9f7] py-16 lg:py-24">
        <div className={WRAP}>
          <div className="max-w-3xl">
            <SectionHeading id="challenges-heading" eyebrow="Sound familiar?">Business Challenges We Help Solve</SectionHeading>
            <p className={`mt-5 ${P}`}>{CHALLENGES_INTRO}</p>
          </div>
          <ul className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {CHALLENGES.map((c) => (
              <li key={c.title} className="flex flex-col rounded-2xl border border-gray-100 bg-white p-6 transition-colors hover:border-[#AF00E8]/25">
                <IconTile icon={ICONS[c.icon]} />
                <h3 className="mt-4 text-lg font-bold text-[#1a1a1a]">{c.title}</h3>
                <p className="mt-1.5 flex-1 text-sm leading-relaxed text-gray-600">{c.text}</p>
                <p className="mt-4 rounded-lg bg-[#faf5fd] px-3.5 py-2.5 text-sm leading-relaxed text-gray-700 ring-1 ring-[#AF00E8]/10">
                  <span className="font-semibold text-[#AF00E8]">Typical solution: </span>{c.solution}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ───────────── Solution categories + foundations ───────────── */}
      <section aria-labelledby="categories-heading" className="bg-white py-16 lg:py-24">
        <div className={WRAP}>
          <SectionHeading id="categories-heading" eyebrow="Six ways we solve it">Our Business Technology Solution Categories</SectionHeading>
          <ul className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {CATEGORIES.map((cat) => (
              <li key={cat.title} className="flex flex-col rounded-3xl border border-gray-100 bg-[#faf9f7] p-6 sm:p-7">
                <div className="flex items-center justify-between">
                  <IconTile icon={ICONS[cat.icon]} />
                  <span className="rounded-full bg-white px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-[#7a1fa2] ring-1 ring-[#AF00E8]/15">{cat.tag}</span>
                </div>
                <h3 className="mt-5 text-[22px] font-bold leading-snug text-[#1a1a1a]" style={SERIF}>{cat.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600"><Linked value={cat.text} /></p>
                <ul className="mt-5 space-y-2 border-t border-gray-200/70 pt-4">
                  {cat.points.map((pt) => (
                    <li key={pt} className="flex gap-2.5 text-sm leading-relaxed text-gray-700">
                      <RiCheckLine aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[#0F9F94]" />{pt}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>

          <div className="mt-20 rounded-[32px] bg-[#0d0a12] p-6 text-white sm:p-10 lg:p-12">
            <div className="max-w-3xl">
              <h3 className="text-[28px] font-bold leading-tight lg:text-[36px]" style={SERIF}>Ready-to-customise solution foundations</h3>
              <p className="mt-4 text-[15px] leading-relaxed text-gray-300">{FOUNDATIONS_INTRO}</p>
            </div>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {FOUNDATIONS.map((f) => (
                <li key={f.title} className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-colors hover:border-[#AF00E8]/50 hover:bg-white/[0.07]">
                  <IconTile icon={ICONS[f.icon]} dark />
                  <h4 className="mt-4 text-lg font-bold">{f.title}</h4>
                  <p className="mt-1.5 flex-1 text-sm leading-relaxed text-gray-300">{f.text}</p>
                  <p className="mt-4 text-xs leading-relaxed text-[#ecd0ff]"><span className="font-semibold uppercase tracking-wider text-gray-400">For: </span>{f.for}</p>
                  <Link href={f.href} className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-white underline decoration-[#AF00E8] underline-offset-4 hover:text-[#e9c2ff]">
                    Learn more about our {f.anchor}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <Diagram
            image={IMAGES.stack}
            className="mt-10"
            caption="How the pieces fit: experiences on top, AI and business systems in the middle, integration and secure cloud underneath."
          />
        </div>
      </section>

      {/* ───────────── Business needs ───────────── */}
      <section aria-labelledby="needs-heading" className="border-y border-[#9b1fe0]/10 bg-[#faf9f7] py-16 lg:py-24">
        <div className={WRAP}>
          <div className="max-w-3xl">
            <SectionHeading id="needs-heading" eyebrow="By stage and size">Solutions for Different Business Needs</SectionHeading>
            <p className={`mt-5 ${P}`}>{NEEDS_INTRO}</p>
          </div>
          <ul className="mt-12 grid gap-4 md:grid-cols-2">
            {NEEDS.map((n) => (
              <li key={n.title} className="flex gap-4 rounded-2xl border border-gray-100 bg-white p-5 sm:p-6">
                <IconTile icon={ICONS[n.icon]} />
                <div>
                  <h3 className="text-lg font-bold text-[#1a1a1a]">{n.title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{n.text}</p>
                  <p className="mt-3 rounded-lg bg-[#f1fbf9] px-3.5 py-2.5 text-sm leading-relaxed text-gray-700 ring-1 ring-[#0F9F94]/15">
                    <span className="font-semibold text-[#0F9F94]">Usual route: </span>{n.route}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ───────────── Industries ───────────── */}
      <IndustryGrid
        eyebrow="Same building blocks, different rules"
        title="Industry-Specific Solutions"
        intro={<Linked value={INDUSTRIES_INTRO} className="font-medium text-white underline decoration-[#AF00E8] underline-offset-4 hover:text-[#e9c2ff]" />}
        items={withIcons(INDUSTRIES)}
      />

      {/* ───────────── Approach ───────────── */}
      <ProcessGrid
        eyebrow="Six steps, two-week sprints"
        title="How We Approach Business Solutions"
        intro={PROCESS_INTRO}
        checkLabel="Outcome"
        steps={PROCESS.map((s) => ({ title: s.title, rows: [{ label: "What happens", text: s.text }], risk: s.outcome }))}
      />

      {/* ───────────── Choosing the right solution ───────────── */}
      <section id="choose" aria-labelledby="choose-heading" className="scroll-mt-28 border-y border-[#9b1fe0]/10 bg-[#faf9f7] py-16 lg:py-24">
        <div className={WRAP}>
          <div className="max-w-3xl">
            <SectionHeading id="choose-heading" eyebrow="Decision guide">Choosing the Right Solution for Your Business</SectionHeading>
            <p className={`mt-5 ${P}`}>{CHOOSE_INTRO}</p>
          </div>
          <Diagram image={IMAGES.decision} className="mt-10" />
          <div className="mt-8">
            <ComparisonTable
              labelledBy="choose-heading"
              headers={[{ label: CHOOSE.headers[0] }, { label: CHOOSE.headers[1], dot: "#AF00E8" }, { label: CHOOSE.headers[2], dot: "#5EEAD4" }]}
              rows={CHOOSE.rows}
              minWidth="min-w-[720px]"
            />
          </div>

          <div className="mt-12 rounded-3xl bg-white p-6 ring-1 ring-[#AF00E8]/15 sm:p-10">
            <h3 className="text-2xl font-bold text-[#1a1a1a] lg:text-3xl" style={SERIF}>A quick readiness check before you talk to us</h3>
            <dl className="mt-8 grid gap-x-10 gap-y-6 md:grid-cols-2">
              {READINESS.map((r, i) => (
                <div key={r.label} className="flex gap-4">
                  <span aria-hidden="true" className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f7effa] text-sm font-bold text-[#AF00E8]">{i + 1}</span>
                  <div>
                    <dt className="font-semibold text-[#1a1a1a]">{r.label}</dt>
                    <dd className="mt-1 text-sm leading-relaxed text-gray-600">{r.text}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ───────────── Why choose ───────────── */}
      <section aria-labelledby="why-heading" className="relative overflow-hidden bg-[#0d0a12] py-16 text-white lg:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-[#AF00E8]/25 blur-3xl" />
        <div className={`${WRAP} relative`}>
          <div className="max-w-3xl">
            <SectionHeading id="why-heading" eyebrow="Why ClickMasters" dark>Why Choose ClickMasters for Business Solutions?</SectionHeading>
          </div>
          <div className="mt-12">
            <IconCardGrid items={withIcons(WHY)} dark />
          </div>
        </div>
      </section>

      <FaqSection
        title="Business Solutions: Frequently Asked Questions"
        intro="Customise or build, when AI helps, integration, timelines, cost and security, answered plainly."
        faqs={FAQS}
      />

      <FinalCta
        title={FINAL_CTA.title}
        titleAccent={FINAL_CTA.titleAccent}
        body={FINAL_CTA.body}
        bring={FINAL_CTA.bring}
        primaryCta={{ label: "Discuss Your Business Challenge", href: "/contact" }}
        secondaryCta={{ label: "Explore Use Cases", href: "/case-studies" }}
      />
    </>
  );
}
