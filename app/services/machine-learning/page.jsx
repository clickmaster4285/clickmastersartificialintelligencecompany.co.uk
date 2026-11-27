// /services/machine-learning
// Content: ./content.ts (from the Machine Learning SEO pack). Fully server-rendered.
// A dedicated page in the same style as /services/llm-development-fine-tuning.
// This real folder takes precedence over the app/services/[slug] placeholder route.
import Image from "next/image";
import Link from "next/link";
import {
  RiAlarmWarningLine, RiArrowRightLine, RiBankLine, RiBrainLine, RiBriefcase4Line, RiBubbleChartLine, RiChat3Line,
  RiCheckboxCircleLine, RiCheckLine, RiCodeBoxLine, RiEyeLine, RiFileShield2Line, RiFileTextLine, RiFocus3Line,
  RiGraduationCapLine, RiHeartPulseLine, RiHistoryLine, RiHome4Line, RiInformationLine, RiInstanceLine, RiKey2Line,
  RiLineChartLine, RiListOrdered, RiLockLine, RiPlugLine, RiPriceTag3Line, RiPulseLine,
  RiScales3Line, RiScalesLine, RiSettings3Line, RiShoppingCart2Line, RiToolsLine, RiTruckLine, RiUserLine,
} from "../../Components/icons";

import JsonLd from "../../Components/JsonLd";
import ScopingCallBlock from "../../Components/ScopingCallBlock";
import { IconTile, SectionHeading, WRAP } from "../../Components/ServicePageUI";
import {
  ComparisonTable, FaqSection, FinalCta, IconCardGrid, Linked, ServiceHero, faqPageJsonLd,
} from "../../Components/ServicePageSections";
import { detailPageJsonLd, detailPageMetadata } from "../../lib/site";
import {
  COMPARE, CUSTOM_VS, FAQS, FINAL_CTA, HERO, IMAGES, INDUSTRIES, INDUSTRIES_NOTE, METRICS, PATH, PROCESS, PROCESS_INTRO,
  READINESS, RELATED, SCENARIOS, SCENARIOS_NOTE, SCENARIOS_OUTRO, SCHEMA_SERVICE, SECURITY, SECURITY_INTRO, SECURITY_NOTE,
  SEO, SERVICES, SERVICES_INTRO, TECH, WHAT_IS, WHY,
} from "./content";

export const metadata = detailPageMetadata({ path: PATH, ...SEO });

const CRUMBS = [
  { name: "Services", path: "/services" },
  { name: "Machine Learning Development", path: PATH },
];

const CONTACT_HREF = "/contact?service=machine%20learning%20development#contact-form";

// All icons are decorative (headings carry the meaning).
const ICONS = {
  model: RiCodeBoxLine, forecast: RiLineChartLine, supervised: RiPriceTag3Line, cluster: RiBubbleChartLine,
  brain: RiBrainLine, sort: RiListOrdered, alert: RiAlarmWarningLine, text: RiFileTextLine, eye: RiEyeLine,
  plug: RiPlugLine, monitor: RiPulseLine, finance: RiBankLine, health: RiHeartPulseLine, cart: RiShoppingCart2Line,
  factory: RiSettings3Line, truck: RiTruckLine, home: RiHome4Line, briefcase: RiBriefcase4Line,
  education: RiGraduationCapLine, saas: RiInstanceLine, privacy: RiFileShield2Line, scales: RiScales3Line,
  lock: RiLockLine, check: RiCheckboxCircleLine, balance: RiScalesLine, user: RiUserLine, target: RiFocus3Line,
  tool: RiToolsLine, key: RiKey2Line, chat: RiChat3Line, history: RiHistoryLine,
};
const withIcons = (items) => items.map((it) => ({ ...it, icon: ICONS[it.icon] }));

/** Renders **bold** markers from the content file. */
function Rich({ text }) {
  return text.split(/(\*\*[^*]+\*\*)/).map((part, i) =>
    part.startsWith("**") ? <strong key={i} className="font-semibold text-[#1a1a1a]">{part.slice(2, -2)}</strong> : part
  );
}

/** A diagram drawn for this page, in a card. */
function Diagram({ image, caption, className = "" }) {
  return (
    <figure className={`rounded-3xl border border-gray-100 bg-white p-4 shadow-[0_20px_60px_-30px_rgba(60,0,90,0.35)] sm:p-8 ${className}`}>
      <Image src={image.src} width={image.width} height={image.height} alt={image.alt} sizes="(min-width: 1280px) 1216px, 100vw" className="h-auto w-full" />
      {caption && <figcaption className="mt-4 text-center text-xs text-gray-500">{caption}</figcaption>}
    </figure>
  );
}

/** An HD photo (below the fold, lazy-loaded) with rounded corners. */
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

const P = "text-[15px] leading-relaxed text-gray-600 lg:text-base";
const SERIF = { fontFamily: "Garamond, serif" };
const HALF = "(min-width: 1280px) 600px, (min-width: 1024px) 48vw, 100vw";
const FIELD = "text-xs font-bold uppercase tracking-[0.14em] text-gray-500";

export default function MachineLearningDevelopment() {
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
        primaryCta={{ label: "Discuss Your Machine Learning Project", href: CONTACT_HREF }}
        secondaryCta={{ label: "See How We Build and Validate Models", href: "#process" }}
        stats={HERO.stats}
        figureLabel="Models that earn their place in production"
        figure={
          <Image
            src={IMAGES.pipeline.src}
            width={IMAGES.pipeline.width}
            height={IMAGES.pipeline.height}
            alt={IMAGES.pipeline.alt}
            sizes="(min-width: 1024px) 560px, 100vw"
            preload
            className="h-auto w-full"
          />
        }
        figcaption="Predictions land where your team decides, and a monitoring loop triggers retraining."
      />

      <ScopingCallBlock path={PATH} service="machine learning development" />

      {/* ───────────── What ML development means ───────────── */}
      <section aria-labelledby="what-heading" className="bg-white py-16 lg:py-24">
        <div className={WRAP}>
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
            <div>
              <SectionHeading id="what-heading" eyebrow="The basics">What Machine Learning Development Means for a Business</SectionHeading>
              <p className={`mt-6 ${P}`}><Rich text={WHAT_IS.p1} /></p>
            </div>
            <Photo image={IMAGES.charts} sizes="(min-width: 1280px) 540px, (min-width: 1024px) 42vw, 100vw" className="aspect-[4/3]" />
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            <div className="rounded-2xl bg-[#faf9f7] p-6 ring-1 ring-gray-100 sm:p-8">
              <h3 className="text-xl font-bold text-[#1a1a1a]" style={SERIF}>{WHAT_IS.learnsTitle}</h3>
              <p className="mt-3 text-[15px] text-gray-700">{WHAT_IS.learnsIntro}</p>
              <TermList items={WHAT_IS.learns} />
              <p className="mt-5 text-[15px] leading-relaxed text-gray-700"><Rich text={WHAT_IS.data} /></p>
            </div>
            <div className="grid gap-5">
              <div className="rounded-2xl bg-[#faf9f7] p-6 ring-1 ring-gray-100 sm:p-8">
                <h3 className="text-xl font-bold text-[#1a1a1a]" style={SERIF}>{WHAT_IS.fitsTitle}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-gray-700">{WHAT_IS.fits}</p>
              </div>
              <div className="rounded-2xl bg-gradient-to-br from-[#faf5fd] to-[#f2fbf9] p-6 ring-1 ring-[#AF00E8]/10 sm:p-8">
                <h3 className="text-xl font-bold text-[#1a1a1a]" style={SERIF}>{WHAT_IS.whenTitle}</h3>
                <p className="mt-3 text-[15px] text-gray-700">{WHAT_IS.whenIntro}</p>
                <ul className="mt-4 space-y-2.5">
                  {WHAT_IS.when.map((w) => (
                    <li key={w} className="flex gap-2.5 text-[15px] leading-relaxed text-gray-700">
                      <RiCheckLine aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-[#AF00E8]" />{w}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-[15px] font-medium text-[#4b1d63]">{WHAT_IS.whenNote}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── ML vs generative AI, agents, automation, RAG ───────────── */}
      <section id="compare" aria-labelledby="compare-heading" className="scroll-mt-28 border-y border-[#9b1fe0]/10 bg-[#faf9f7] py-16 lg:py-24">
        <div className={WRAP}>
          <div className="max-w-3xl">
            <SectionHeading id="compare-heading" eyebrow="Pick the right tool">Machine Learning, Generative AI, AI Agents, Automation and RAG: Which Do You Need?</SectionHeading>
            <p className={`mt-5 ${P}`}>{COMPARE.intro}</p>
          </div>
          <Diagram image={IMAGES.compare} className="mt-10" />
          <div className="mt-10">
            <ComparisonTable
              labelledBy="compare-heading"
              headers={COMPARE.headers.map((label) => ({ label }))}
              rows={COMPARE.rows}
              minWidth="min-w-[860px]"
            />
          </div>
          <p className={`mt-8 max-w-4xl ${P}`}><Linked value={COMPARE.outro1} /></p>
          <p className={`mt-4 max-w-4xl ${P}`}><Linked value={COMPARE.outro2} /></p>
        </div>
      </section>

      {/* ───────────── Services ───────────── */}
      <section aria-labelledby="services-heading" className="bg-white py-16 lg:py-24">
        <div className={WRAP}>
          <div className="max-w-3xl">
            <SectionHeading id="services-heading" eyebrow="11 capabilities">Our Machine Learning Development Services</SectionHeading>
            <p className={`mt-5 ${P}`}>{SERVICES_INTRO}</p>
          </div>
          <ul className="mt-12 grid gap-5 lg:grid-cols-2">
            {SERVICES.map((s) => (
              <li key={s.id} id={s.id} className="scroll-mt-28 overflow-hidden rounded-3xl border border-gray-100 bg-[#faf9f7]">
                <div className="flex items-start gap-4 p-6 sm:p-7">
                  <IconTile icon={ICONS[s.icon]} />
                  <div>
                    <h3 className="text-[21px] font-bold leading-snug text-[#1a1a1a]" style={SERIF}>{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-700">{s.involves}</p>
                  </div>
                </div>
                <dl className="grid gap-px bg-gray-100 sm:grid-cols-2">
                  {[["The problem", s.problem], ["How it works", s.how], ["Where it helps", s.where], ["Value", s.value]].map(([label, text]) => (
                    <div key={label} className="bg-white px-6 py-5 sm:px-7">
                      <dt className={FIELD}>{label}</dt>
                      <dd className="mt-2 text-sm leading-relaxed text-gray-700">{text}</dd>
                    </div>
                  ))}
                </dl>
                {s.id === "mlops" && (
                  <figure className="border-t border-gray-100 bg-white p-5">
                    <Image src={IMAGES.drift.src} width={IMAGES.drift.width} height={IMAGES.drift.height} alt={IMAGES.drift.alt} sizes="(min-width: 1024px) 600px, 100vw" className="h-auto w-full" />
                    <figcaption className="mt-2 text-center text-xs text-gray-500">Illustrative: accuracy slips as inputs drift, until an alert triggers retraining.</figcaption>
                  </figure>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ───────────── Industries ───────────── */}
      <section aria-labelledby="industries-heading" className="relative overflow-hidden bg-[#0d0a12] py-16 text-white lg:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-[#AF00E8]/25 blur-3xl" />
        <div className={`${WRAP} relative`}>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <SectionHeading id="industries-heading" eyebrow="Typical problems, suitable approaches" dark>Machine Learning Use Cases Across UK Industries</SectionHeading>
              <p className="mt-5 text-[15px] italic leading-relaxed text-gray-300">{INDUSTRIES_NOTE}</p>
            </div>
            <Photo image={IMAGES.laptop} sizes={HALF} className="aspect-[16/10] ring-white/10" />
          </div>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {INDUSTRIES.map((ind) => (
              <li key={ind.title} className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-colors hover:border-[#AF00E8]/50">
                <IconTile icon={ICONS[ind.icon]} dark />
                <h3 className="mt-4 text-lg font-bold">{ind.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-300"><span className="font-semibold text-white">Problem: </span>{ind.problem}</p>
                <p className="mt-2 text-sm leading-relaxed text-gray-300"><span className="font-semibold text-[#5EEAD4]">ML application: </span>{ind.ml}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ───────────── Readiness ───────────── */}
      <section aria-labelledby="ready-heading" className="bg-white py-16 lg:py-24">
        <div className={WRAP}>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div>
              <SectionHeading id="ready-heading" eyebrow="Seven questions">Before You Build: Is Your Problem Ready for Machine Learning?</SectionHeading>
              <p className={`mt-5 ${P}`}>{READINESS.intro}</p>
              <p className="mt-6 flex gap-3 rounded-2xl bg-[#faf5fd] p-5 text-[15px] leading-relaxed text-[#4b1d63] ring-1 ring-[#AF00E8]/10">
                <RiInformationLine aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-[#AF00E8]" />
                {READINESS.outro}
              </p>
            </div>
            <ol className="space-y-3">
              {READINESS.items.map(([q, a], i) => (
                <li key={q} className="flex gap-4 rounded-2xl border border-gray-100 bg-[#faf9f7] p-5">
                  <span aria-hidden="true" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#AF00E8] text-sm font-bold text-white">{i + 1}</span>
                  <div>
                    <h3 className="font-bold text-[#1a1a1a]">{q}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-gray-600">{a}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ───────────── Process ───────────── */}
      <section id="process" aria-labelledby="process-heading" className="scroll-mt-28 border-y border-[#9b1fe0]/10 bg-[#faf9f7] py-16 lg:py-24">
        <div className={WRAP}>
          <div className="max-w-3xl">
            <SectionHeading id="process-heading" eyebrow="8 stages, a decision at each">Our Machine Learning Development Process</SectionHeading>
            <p className={`mt-5 ${P}`}>{PROCESS_INTRO}</p>
          </div>
          <Diagram image={IMAGES.process} className="mt-10" />
          <ol className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((step, i) => (
              <li key={step.title} className="flex flex-col rounded-2xl border border-gray-100 bg-white p-6">
                <div className="flex items-center">
                  <span aria-hidden="true" className="step-num">{String(i + 1).padStart(2, "0")}</span>
                  <span aria-hidden="true" className="step-line" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-[#1a1a1a]">{i + 1}. {step.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">{step.what}</p>
                <p className="mt-4 rounded-xl bg-[#f1fbf9] px-4 py-3 text-xs leading-relaxed text-gray-700 ring-1 ring-[#5EEAD4]/60">
                  <span className="font-bold uppercase tracking-wider text-[#0F9F94]">Why it matters: </span>{step.why}
                </p>
              </li>
            ))}
          </ol>

          <h3 id="metrics-heading" className="mt-16 text-2xl font-bold text-[#1a1a1a] lg:text-3xl" style={SERIF}>{METRICS.title}</h3>
          <p className={`mt-4 max-w-3xl ${P}`}>{METRICS.intro}</p>
          <div className="mt-8">
            <ComparisonTable
              labelledBy="metrics-heading"
              headers={[{ label: "Metric" }, { label: "What it tells you" }, { label: "When it matters" }]}
              rows={METRICS.rows}
              minWidth="min-w-[640px]"
            />
          </div>
          <Diagram image={IMAGES.matrix} className="mt-8" caption="Precision and recall, explained with a fraud detection model." />
          <p className={`mt-8 max-w-4xl ${P}`}><Rich text={METRICS.outro} /></p>
        </div>
      </section>

      {/* ───────────── Technologies ───────────── */}
      <section aria-labelledby="tech-heading" className="bg-white py-16 lg:py-24">
        <div className={WRAP}>
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16">
            <div>
              <SectionHeading id="tech-heading" eyebrow="Chosen for the problem">Technologies and Machine Learning Frameworks</SectionHeading>
              <p className={`mt-5 ${P}`}>{TECH.intro}</p>
              <TermList items={TECH.items.map(([t, d]) => [`${t}:`, d])} />
              <p className="mt-5 text-sm text-gray-500">{TECH.outro}</p>
            </div>
            <Photo image={IMAGES.code} sizes={HALF} className="aspect-[4/5] lg:aspect-[4/5]" />
          </div>
        </div>
      </section>

      {/* ───────────── Custom vs off-the-shelf ───────────── */}
      <section aria-labelledby="custom-heading" className="border-y border-[#9b1fe0]/10 bg-[#faf9f7] py-16 lg:py-24">
        <div className={WRAP}>
          <div className="max-w-3xl">
            <SectionHeading id="custom-heading" eyebrow="Build or buy?">Custom vs Off-the-Shelf Machine Learning Solutions</SectionHeading>
          </div>
          <div className="mt-10">
            <ComparisonTable
              labelledBy="custom-heading"
              headers={[{ label: CUSTOM_VS.headers[0] }, { label: CUSTOM_VS.headers[1], dot: "#E3A600" }, { label: CUSTOM_VS.headers[2], dot: "#AF00E8" }]}
              rows={CUSTOM_VS.rows}
            />
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl bg-[#fffaeb] p-6 ring-1 ring-[#E3A600]/25 sm:p-8">
              <h3 className="text-lg font-bold text-[#1a1a1a]">An existing platform is likely to be enough when…</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-gray-700">{CUSTOM_VS.platform}</p>
            </div>
            <div className="rounded-2xl bg-[#faf5fd] p-6 ring-1 ring-[#AF00E8]/15 sm:p-8">
              <h3 className="text-lg font-bold text-[#1a1a1a]">Custom development makes sense when…</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-gray-700"><Linked value={CUSTOM_VS.custom} /></p>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── Security ───────────── */}
      <section aria-labelledby="security-heading" className="relative overflow-hidden bg-[#0d0a12] py-16 text-white lg:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-[#AF00E8]/20 blur-3xl" />
        <div className={`${WRAP} relative`}>
          <div className="max-w-3xl">
            <SectionHeading id="security-heading" eyebrow="Governed and traceable" dark>Security, Responsible AI and Data Governance</SectionHeading>
            <p className="mt-5 text-[15px] leading-relaxed text-gray-300 lg:text-base">{SECURITY_INTRO}</p>
          </div>
          <div className="mt-12">
            <IconCardGrid items={withIcons(SECURITY)} dark columns="sm:grid-cols-2" compact />
          </div>
          <p className="mt-8 max-w-4xl text-sm leading-relaxed text-gray-400">{SECURITY_NOTE}</p>
        </div>
      </section>

      {/* ───────────── Why ClickMasters ───────────── */}
      <section aria-labelledby="why-heading" className="bg-white py-16 lg:py-24">
        <div className={WRAP}>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div>
              <SectionHeading id="why-heading" eyebrow="How we work">Why Choose ClickMasters for Machine Learning Development?</SectionHeading>
              <Photo image={IMAGES.team} sizes="(min-width: 1280px) 520px, (min-width: 1024px) 40vw, 100vw" className="mt-8 aspect-[4/3]" />
            </div>
            <div className="lg:pt-4">
              <IconCardGrid items={withIcons(WHY)} columns="sm:grid-cols-1" compact />
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── Example scenarios ───────────── */}
      <section aria-labelledby="scenarios-heading" className="border-y border-[#9b1fe0]/10 bg-[#faf9f7] py-16 lg:py-24">
        <div className={WRAP}>
          <div className="max-w-3xl">
            <SectionHeading id="scenarios-heading" eyebrow="Illustrative, not case studies">Example Machine Learning Project Scenarios</SectionHeading>
            <p className={`mt-5 ${P}`}><em>{SCENARIOS_NOTE}</em></p>
          </div>
          <ul className="mt-12 grid gap-5 lg:grid-cols-3">
            {SCENARIOS.map((sc) => (
              <li key={sc.title} className="flex flex-col rounded-3xl border border-gray-100 bg-white p-6 sm:p-7">
                <h3 className="text-xl font-bold leading-snug text-[#1a1a1a]" style={SERIF}>{sc.title}</h3>
                <dl className="mt-4 space-y-4 text-sm leading-relaxed text-gray-700">
                  <div><dt className={FIELD}>Situation</dt><dd className="mt-1.5">{sc.situation}</dd></div>
                  <div><dt className={FIELD}>Approach</dt><dd className="mt-1.5">{sc.approach}</dd></div>
                  <div><dt className={FIELD}>Delivery</dt><dd className="mt-1.5"><Linked value={sc.delivery} /></dd></div>
                </dl>
              </li>
            ))}
          </ul>
          <p className={`mt-8 max-w-4xl ${P}`}>{SCENARIOS_OUTRO}</p>
        </div>
      </section>

      <FaqSection
        title="Machine Learning Development: Frequently Asked Questions"
        intro="Cost, timelines, data, deployment, AI vs ML and how performance is measured, answered plainly."
        faqs={FAQS}
      />

      {/* Related services (outside the main content; pack section B). */}
      <nav aria-label="Related services" className="border-t border-gray-100 bg-white">
        <div className={`${WRAP} flex flex-wrap items-center gap-3 py-8`}>
          <span className="text-xs font-bold uppercase tracking-[0.14em] text-gray-500">Related services</span>
          {RELATED.map((r) => (
            <Link key={r.href} href={r.href} className="group inline-flex min-h-11 items-center gap-1.5 rounded-full border border-[#AF00E8]/20 bg-white px-4 text-sm text-gray-700 hover:border-[#AF00E8] hover:text-[#AF00E8]">
              {r.label}
              <RiArrowRightLine aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          ))}
        </div>
      </nav>

      <FinalCta
        title={FINAL_CTA.title}
        titleAccent={FINAL_CTA.titleAccent}
        body={FINAL_CTA.body}
        bring={FINAL_CTA.bring}
        primaryCta={{ label: "Discuss Your Machine Learning Project", href: CONTACT_HREF }}
        secondaryCta={{ label: "Explore Our AI Services", href: "/services#ai-services" }}
      />
    </>
  );
}
