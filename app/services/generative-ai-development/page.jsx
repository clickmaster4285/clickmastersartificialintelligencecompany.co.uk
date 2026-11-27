// /services/generative-ai-development
// Content: ./content.ts (from the Generative AI Development SEO pack). Fully server-rendered.
// A dedicated page (not the shared AiServicePage template): the pack needs
// solution-type blocks, two comparison tables, a review-workflow section and
// exactly four contextual links. Takes precedence over app/services/[slug].
import Image from "next/image";
import {
  RiBookOpenLine, RiCalendarCheckLine, RiCheckboxCircleLine, RiCheckLine, RiCodeBoxLine, RiEqualizerLine,
  RiErrorWarningLine, RiFileList3Line, RiFileShield2Line, RiFileTextLine, RiFlowChart, RiFocus3Line,
  RiKey2Line, RiLineChartLine, RiPlugLine, RiScales3Line, RiSearchEyeLine, RiShieldCheckLine,
  RiStackLine, RiTeamLine, RiTestTubeLine, RiUserLine,
} from "../../Components/icons";

import JsonLd from "../../Components/JsonLd";
import ScopingCallBlock from "../../Components/ScopingCallBlock";
import { IconTile, SectionHeading, WRAP } from "../../Components/ServicePageUI";
import {
  ComparisonTable, FaqSection, FinalCta, IconCardGrid, ProcessGrid, RichText, ServiceHero, faqPageJsonLd,
} from "../../Components/ServicePageSections";
import { detailPageJsonLd, detailPageMetadata } from "../../lib/site";
import {
  COMPARE, FAQS, FINAL_CTA, HERO, IMAGES, INDUSTRIES, PATH, PROCESS, PROCESS_OUTRO, READY_MADE, SCHEMA_SERVICE,
  SECURITY, SEO, SERVICES, SOLUTIONS, TECH, USE_CASES, WHAT_IS, WHY,
} from "./content";

export const metadata = detailPageMetadata({ path: PATH, ...SEO });

const CRUMBS = [
  { name: "Services", path: "/services" },
  { name: "Generative AI Development", path: PATH },
];

// All icons are decorative (headings carry the meaning).
const ICONS = {
  assess: RiSearchEyeLine, build: RiCodeBoxLine, plug: RiPlugLine, flow: RiFlowChart, doc: RiFileTextLine,
  ground: RiBookOpenLine, tune: RiEqualizerLine, chart: RiLineChartLine, alert: RiErrorWarningLine,
  privacy: RiFileShield2Line, key: RiKey2Line, shield: RiShieldCheckLine, check: RiCheckboxCircleLine,
  user: RiUserLine, log: RiFileList3Line, scales: RiScales3Line, target: RiFocus3Line, test: RiTestTubeLine,
  layers: RiStackLine, team: RiTeamLine, calendar: RiCalendarCheckLine,
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
const LABEL = "font-semibold text-[#1a1a1a]";

export default function GenerativeAiDevelopment() {
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
        primaryCta={{ label: "Discuss Your Generative AI Project", href: "/contact" }}
        secondaryCta={{ label: "See What We Build", href: "#solutions" }}
        stats={HERO.stats}
        figureLabel="A controlled generation pipeline"
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
        figcaption="Automated checks catch most issues; a person approves what is published."
      />

      <ScopingCallBlock path={PATH} service="generative AI development" />

      {/* ───────────── What generative AI development is ───────────── */}
      <section aria-labelledby="what-heading" className="bg-white py-16 lg:py-24">
        <div className={WRAP}>
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
            <div>
              <SectionHeading id="what-heading" eyebrow="The basics">What Generative AI Development Is</SectionHeading>
              <p className={`mt-6 ${P}`}><Rich text={WHAT_IS.p1} /></p>
              <p className={`mt-5 ${P}`}>At a high level:</p>
              <TermList items={WHAT_IS.how} />
            </div>
            <Photo image={IMAGES.drafting} sizes="(min-width: 1280px) 540px, (min-width: 1024px) 42vw, 100vw" className="aspect-[4/3]" />
          </div>
          <p className={`mt-10 max-w-4xl ${P}`}><Rich text={WHAT_IS.p2} /></p>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {WHAT_IS.sub.map((s, i) => (
              <div key={s.title} className={`rounded-2xl p-6 ring-1 sm:p-8 ${i === 1 ? "bg-[#fffaeb] ring-[#E3A600]/30" : "bg-[#faf9f7] ring-gray-100"}`}>
                <h3 className="text-xl font-bold text-[#1a1a1a]" style={SERIF}>{s.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-gray-700">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── Solutions ───────────── */}
      <section id="solutions" aria-labelledby="solutions-heading" className="scroll-mt-28 border-y border-[#9b1fe0]/10 bg-[#faf9f7] py-16 lg:py-24">
        <div className={WRAP}>
          <div className="max-w-3xl">
            <SectionHeading id="solutions-heading" eyebrow="What we build">Generative AI Solutions We Develop</SectionHeading>
          </div>
          <Diagram image={IMAGES.solutions} className="mt-10" />
          <ul className="mt-10 grid gap-4 md:grid-cols-2">
            {SOLUTIONS.map((s) => (
              <li key={s.title} className="rounded-2xl border border-gray-100 bg-white p-6">
                <h3 className="text-lg font-bold text-[#1a1a1a]">{s.title}</h3>
                <dl className="mt-3 space-y-2 text-sm leading-relaxed text-gray-600">
                  <div><dt className={`inline ${LABEL}`}>Problem: </dt><dd className="inline">{s.problem}</dd></div>
                  <div><dt className={`inline ${LABEL}`}>How it helps: </dt><dd className="inline">{s.how}</dd></div>
                  <div><dt className={`inline ${LABEL}`}>Example workflow: </dt><dd className="inline">{s.example}</dd></div>
                  <div><dt className={`inline ${LABEL}`}>Limitations: </dt><dd className="inline">{s.limits}</dd></div>
                  <div className="rounded-lg bg-[#faf5fd] px-3 py-2 ring-1 ring-[#AF00E8]/10"><dt className="inline font-semibold text-[#AF00E8]">Human review: </dt><dd className="inline">{s.review}</dd></div>
                </dl>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ───────────── Services ───────────── */}
      <section aria-labelledby="services-heading" className="bg-white py-16 lg:py-24">
        <div className={WRAP}>
          <div className="max-w-3xl">
            <SectionHeading id="services-heading" eyebrow="Generative AI application development">Our Generative AI Services</SectionHeading>
          </div>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((s) => (
              <li key={s.title} className="rounded-2xl border border-gray-100 bg-[#faf9f7] p-6">
                <IconTile icon={ICONS[s.icon]} />
                <h3 className="mt-4 text-lg font-bold text-[#1a1a1a]">{s.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-gray-600"><RichText text={s.text} /></p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ───────────── GenAI vs agents vs RAG vs fine-tuning ───────────── */}
      <section aria-labelledby="compare-heading" className="border-y border-[#9b1fe0]/10 bg-[#faf9f7] py-16 lg:py-24">
        <div className={WRAP}>
          <div className="max-w-3xl">
            <SectionHeading id="compare-heading" eyebrow="Choosing the approach">Generative AI, AI Agents, RAG and Fine-Tuning: How They Differ</SectionHeading>
            <p className={`mt-5 ${P}`}>{COMPARE.intro}</p>
          </div>
          <Diagram image={IMAGES.compare} className="mt-10" />
          <div className="mt-10">
            <ComparisonTable
              labelledBy="compare-heading"
              headers={COMPARE.headers.map((label) => ({ label }))}
              rows={COMPARE.rows}
              minWidth="min-w-[720px]"
            />
          </div>
          <p className={`mt-8 max-w-4xl ${P}`}><RichText text={COMPARE.outro} /></p>
        </div>
      </section>

      {/* ───────────── Technologies ───────────── */}
      <section aria-labelledby="tech-heading" className="relative overflow-hidden bg-[#0d0a12] py-16 text-white lg:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-[#AF00E8]/25 blur-3xl" />
        <div className={`${WRAP} relative`}>
          <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:gap-16">
            <div>
              <SectionHeading id="tech-heading" eyebrow="The system around the model" dark>Generative AI Technologies and Architecture</SectionHeading>
              <p className="mt-5 text-[15px] leading-relaxed text-gray-300 lg:text-base">{TECH.intro}</p>
              <ul className="mt-10 grid gap-4 md:grid-cols-2">
                {TECH.items.map((t) => (
                  <li key={t.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                    <h3 className="text-lg font-bold">{t.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-300">{t.text}</p>
                  </li>
                ))}
              </ul>
            </div>
            <Photo image={IMAGES.microphone} sizes="(min-width: 1280px) 400px, (min-width: 1024px) 30vw, 100vw" className="hidden aspect-[2/3] self-center ring-white/10 lg:block" />
          </div>
          <figure className="mt-12 rounded-3xl bg-white p-4 sm:p-8">
            <Image src={IMAGES.architecture.src} width={IMAGES.architecture.width} height={IMAGES.architecture.height} alt={IMAGES.architecture.alt} sizes="(min-width: 1280px) 1216px, 100vw" className="h-auto w-full" />
          </figure>
          <h3 id="stack-heading" className="mt-14 text-2xl font-bold lg:text-3xl" style={SERIF}>{TECH.stackTitle}</h3>
          <div className="mt-6 max-w-4xl rounded-2xl bg-white">
            <ComparisonTable labelledBy="stack-heading" headers={[{ label: "Layer" }, { label: "Technologies" }]} rows={TECH.stack} minWidth="min-w-[560px]" />
          </div>
        </div>
      </section>

      {/* ───────────── Business use cases ───────────── */}
      <section aria-labelledby="usecases-heading" className="bg-white py-16 lg:py-24">
        <div className={WRAP}>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeading id="usecases-heading" eyebrow="Illustrative, not case studies">Generative AI Business Use Cases</SectionHeading>
              <p className={`mt-5 ${P}`}><em>{USE_CASES.note}</em></p>
              <Photo image={IMAGES.documents} sizes={HALF} className="mt-8 aspect-[16/10]" />
            </div>
            <TermList items={USE_CASES.items} />
          </div>
        </div>
      </section>

      {/* ───────────── Industries ───────────── */}
      <section aria-labelledby="industries-heading" className="border-y border-[#9b1fe0]/10 bg-[#faf9f7] py-16 lg:py-24">
        <div className={`${WRAP} grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16`}>
          <div>
            <SectionHeading id="industries-heading" eyebrow="Sector fit">Generative AI Solutions Across Industries</SectionHeading>
            <p className={`mt-5 ${P}`}><em>{INDUSTRIES.note}</em></p>
          </div>
          <div className="grid gap-x-8 sm:grid-cols-2">
            <TermList items={INDUSTRIES.items.slice(0, 5)} />
            <TermList items={INDUSTRIES.items.slice(5)} />
          </div>
        </div>
      </section>

      {/* ───────────── Custom vs ready-made ───────────── */}
      <section aria-labelledby="readymade-heading" className="bg-white py-16 lg:py-24">
        <div className={WRAP}>
          <div className="max-w-3xl">
            <SectionHeading id="readymade-heading" eyebrow="An honest comparison">Custom Generative AI vs Ready-Made AI Tools</SectionHeading>
          </div>
          <Diagram image={IMAGES.readyMade} className="mt-10" />
          <div className="mt-10">
            <ComparisonTable
              labelledBy="readymade-heading"
              headers={READY_MADE.headers.map((label) => ({ label }))}
              rows={READY_MADE.rows}
              minWidth="min-w-[720px]"
            />
          </div>
          <p className={`mt-8 max-w-4xl ${P}`}>{READY_MADE.outro}</p>
        </div>
      </section>

      {/* ───────────── Process ───────────── */}
      <ProcessGrid
        eyebrow="10 stages, standards first"
        title="Our Generative AI Development Process"
        columns="md:grid-cols-2 lg:grid-cols-5"
        steps={PROCESS.map((s) => ({ title: s.title, rows: [{ label: "What happens", text: s.text }] }))}
        after={<p className={`mt-10 max-w-4xl ${P}`}>{PROCESS_OUTRO}</p>}
      />

      {/* ───────────── Security ───────────── */}
      <section aria-labelledby="security-heading" className="relative overflow-hidden bg-[#0d0a12] py-16 text-white lg:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-[#AF00E8]/20 blur-3xl" />
        <div className={`${WRAP} relative`}>
          <div className="max-w-3xl">
            <SectionHeading id="security-heading" eyebrow="Checks, review and records" dark>Security, Privacy and Responsible AI</SectionHeading>
          </div>
          <figure className="mt-10 rounded-3xl bg-white p-4 sm:p-8">
            <Image src={IMAGES.review.src} width={IMAGES.review.width} height={IMAGES.review.height} alt={IMAGES.review.alt} sizes="(min-width: 1280px) 1216px, 100vw" className="h-auto w-full" />
          </figure>
          <ul className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {SECURITY.map((it) => (
              <li key={it.title} className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                <IconTile icon={ICONS[it.icon]} dark />
                <div>
                  <h3 className="text-lg font-bold">{it.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-300">{it.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ───────────── Why custom ───────────── */}
      <section aria-labelledby="why-heading" className="bg-white py-16 lg:py-24">
        <div className={WRAP}>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <SectionHeading id="why-heading" eyebrow="Generative AI development company">Why Consider Custom Generative AI Development?</SectionHeading>
            <TermList items={WHY.reasons} />
          </div>
          <h3 className="mt-16 text-2xl font-bold text-[#1a1a1a] lg:text-3xl" style={SERIF}>What to Look For in Generative AI Development Companies</h3>
          <p className={`mt-4 max-w-3xl ${P}`}>The points below describe how ClickMasters works as a generative AI services company, and they are worth checking with any supplier you consider.</p>
          <div className="mt-8">
            <IconCardGrid items={withIcons(WHY.approach)} columns="sm:grid-cols-2 lg:grid-cols-3" compact />
          </div>
        </div>
      </section>

      <FaqSection
        title="Generative AI Development: Frequently Asked Questions"
        intro="Generative vs traditional AI, agents, RAG and fine-tuning, integration, enterprise use, cost and timelines, answered plainly."
        faqs={FAQS}
      />

      <FinalCta
        title={FINAL_CTA.title}
        titleAccent={FINAL_CTA.titleAccent}
        body={FINAL_CTA.body}
        bring={FINAL_CTA.bring}
        primaryCta={{ label: "Discuss Your Generative AI Project", href: "/contact" }}
        secondaryCta={{ label: "Talk to a Generative AI Engineer", href: "/contact" }}
      />
    </>
  );
}
