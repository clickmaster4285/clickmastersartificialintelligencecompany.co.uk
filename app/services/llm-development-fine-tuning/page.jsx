// /services/llm-development-fine-tuning
// Content: ./content.ts (from the LLM Fine-Tuning SEO pack). Fully server-rendered.
// A dedicated page (not the shared AiServicePage template): the pack needs
// comparison, techniques, data, evaluation and deployment sections, and
// exactly four contextual links. Takes precedence over app/services/[slug].
import Image from "next/image";
import {
  RiAwardLine, RiChat3Line, RiCheckLine, RiCloseCircleLine, RiContractLeftRightLine, RiCustomerService2Line,
  RiEdit2Line, RiFileShield2Line, RiFileTextLine, RiFlowChart, RiFocus3Line, RiHistoryLine, RiInformationLine,
  RiLineChartLine, RiLockLine, RiPlugLine, RiQuestionAnswerLine, RiRouteLine, RiScales3Line, RiServerLine,
  RiShieldCheckLine, RiSpeedUpLine,
} from "../../Components/icons";

import JsonLd from "../../Components/JsonLd";
import ScopingCallBlock from "../../Components/ScopingCallBlock";
import { IconTile, SectionHeading, WRAP } from "../../Components/ServicePageUI";
import {
  ComparisonTable, FaqSection, FinalCta, IconCardGrid, Linked, ServiceHero, faqPageJsonLd,
} from "../../Components/ServicePageSections";
import { detailPageJsonLd, detailPageMetadata } from "../../lib/site";
import {
  COMPARE, DATA, DEPLOYMENT, EVALUATION, FAQS, FINAL_CTA, HERO, IMAGES, PARTNER, PATH, SCHEMA_SERVICE, SECURITY,
  SEO, SERVICES, TECHNIQUES, USE_CASES, WHAT_IS, WHEN,
} from "./content";

export const metadata = detailPageMetadata({ path: PATH, ...SEO });

const CRUMBS = [
  { name: "Services", path: "/services" },
  { name: "LLM Development & Fine-Tuning", path: PATH },
];

// All icons are decorative (headings carry the meaning).
const ICONS = {
  benchmark: RiSpeedUpLine, target: RiFocus3Line, compress: RiContractLeftRightLine, lock: RiLockLine,
  chart: RiLineChartLine, plug: RiPlugLine, route: RiRouteLine, extract: RiFileTextLine, scales: RiScales3Line,
  edit: RiEdit2Line, chat: RiChat3Line, support: RiCustomerService2Line, flow: RiFlowChart,
  privacy: RiFileShield2Line, file: RiFileTextLine, server: RiServerLine, licence: RiAwardLine,
  shield: RiShieldCheckLine, history: RiHistoryLine,
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

export default function LlmDevelopmentFineTuning() {
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
        primaryCta={{ label: "Discuss Your LLM Requirements", href: "/contact" }}
        secondaryCta={{ label: "Compare Prompting, RAG and Fine-Tuning", href: "#compare" }}
        stats={HERO.stats}
        figureLabel="From baseline to tuned model"
        figure={
          <Image
            src={IMAGES.hero.src}
            width={IMAGES.hero.width}
            height={IMAGES.hero.height}
            alt={IMAGES.hero.alt}
            sizes="(min-width: 1024px) 560px, 100vw"
            preload
            className="h-auto w-full"
          />
        }
        figcaption="A tuned model ships only if it beats the baseline on your evaluation set."
      />

      <ScopingCallBlock path={PATH} service="LLM fine-tuning" />

      {/* ───────────── What LLM development involves ───────────── */}
      <section aria-labelledby="what-heading" className="bg-white py-16 lg:py-24">
        <div className={WRAP}>
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
            <div>
              <SectionHeading id="what-heading" eyebrow="The basics">What Large Language Model Development Involves</SectionHeading>
              <p className={`mt-6 ${P}`}><Rich text={WHAT_IS.p1} /></p>
              <p className={`mt-5 ${P}`}><Linked value={WHAT_IS.p2} /></p>
            </div>
            <Photo image={IMAGES.board} sizes="(min-width: 1280px) 540px, (min-width: 1024px) 42vw, 100vw" className="aspect-[4/3]" />
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {WHAT_IS.sub.map((s) => (
              <div key={s.title} className="rounded-2xl bg-[#faf9f7] p-6 ring-1 ring-gray-100 sm:p-8">
                <h3 className="text-xl font-bold text-[#1a1a1a]" style={SERIF}>{s.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-gray-700">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── When fine-tuning is right ───────────── */}
      <section aria-labelledby="when-heading" className="border-y border-[#9b1fe0]/10 bg-[#faf9f7] py-16 lg:py-24">
        <div className={`${WRAP} grid gap-10 lg:grid-cols-2 lg:gap-16`}>
          <div>
            <SectionHeading id="when-heading" eyebrow="An honest test">When Fine-Tuning Is, and Is Not, the Right Answer</SectionHeading>
            <p className={`mt-5 ${P}`}>{WHEN.intro}</p>
            <TermList items={WHEN.signs} />
          </div>
          <div className="self-center rounded-3xl bg-white p-6 ring-1 ring-[#C0392B]/20 sm:p-8">
            <span aria-hidden="true" className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FDECEC] text-[#C0392B]">
              <RiCloseCircleLine className="h-5 w-5" />
            </span>
            <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.14em] text-[#C0392B]">Usually the wrong first step</p>
            <p className="mt-2 text-[15px] leading-relaxed text-gray-700">{WHEN.not}</p>
          </div>
        </div>
      </section>

      {/* ───────────── Comparison ───────────── */}
      <section id="compare" aria-labelledby="compare-heading" className="scroll-mt-28 bg-white py-16 lg:py-24">
        <div className={WRAP}>
          <div className="max-w-3xl">
            <SectionHeading id="compare-heading" eyebrow="What each one changes">Prompt Engineering vs RAG vs Fine-Tuning</SectionHeading>
          </div>
          <Diagram image={IMAGES.compare} className="mt-10" />
          <div className="mt-10">
            <ComparisonTable
              labelledBy="compare-heading"
              headers={[
                { label: "" },
                { label: COMPARE.headers[1], dot: "#D9CDE3" },
                { label: COMPARE.headers[2], dot: "#E3A600" },
                { label: COMPARE.headers[3], dot: "#AF00E8" },
              ]}
              rows={COMPARE.rows}
              minWidth="min-w-[860px]"
            />
          </div>
          <p className={`mt-8 max-w-4xl ${P}`}><Linked value={COMPARE.outro} /></p>
        </div>
      </section>

      {/* ───────────── Services ───────────── */}
      <section aria-labelledby="services-heading" className="border-y border-[#9b1fe0]/10 bg-[#faf9f7] py-16 lg:py-24">
        <div className={WRAP}>
          <div className="max-w-3xl">
            <SectionHeading id="services-heading" eyebrow="Enterprise LLM development">Our LLM Development and Fine-Tuning Services</SectionHeading>
          </div>
          <div className="mt-12">
            <IconCardGrid items={withIcons(SERVICES)} columns="sm:grid-cols-2 lg:grid-cols-3" />
          </div>
        </div>
      </section>

      {/* ───────────── Techniques ───────────── */}
      <section aria-labelledby="techniques-heading" className="relative overflow-hidden bg-[#0d0a12] py-16 text-white lg:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-[#AF00E8]/25 blur-3xl" />
        <div className={`${WRAP} relative`}>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <SectionHeading id="techniques-heading" eyebrow="Chosen per task" dark>Fine-Tuning Techniques and When We Use Them</SectionHeading>
              <p className="mt-5 text-[15px] leading-relaxed text-gray-300 lg:text-base">{TECHNIQUES.intro}</p>
            </div>
            <Photo image={IMAGES.fans} sizes={HALF} className="aspect-[16/10] ring-white/10" />
          </div>
          <figure className="mt-10 rounded-3xl bg-white p-4 sm:p-8">
            <Image src={IMAGES.lora.src} width={IMAGES.lora.width} height={IMAGES.lora.height} alt={IMAGES.lora.alt} sizes="(min-width: 1280px) 1216px, 100vw" className="h-auto w-full" />
          </figure>
          <ul className="mt-10 grid gap-4 md:grid-cols-2">
            {TECHNIQUES.items.map((t) => (
              <li key={t.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                <h3 className="text-lg font-bold">{t.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-300">{t.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ───────────── Training data ───────────── */}
      <section aria-labelledby="data-heading" className="bg-white py-16 lg:py-24">
        <div className={WRAP}>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div>
              <SectionHeading id="data-heading" eyebrow="The data is the specification">Training Data Preparation</SectionHeading>
              <p className={`mt-5 ${P}`}>{DATA.intro}</p>
              <p className={`mt-5 ${P}`}>{DATA.note}</p>
            </div>
            <TermList items={DATA.steps} />
          </div>
          <Diagram image={IMAGES.data} className="mt-12" />
        </div>
      </section>

      {/* ───────────── Evaluation ───────────── */}
      <section aria-labelledby="evaluation-heading" className="border-y border-[#9b1fe0]/10 bg-[#faf9f7] py-16 lg:py-24">
        <div className={WRAP}>
          <div className="max-w-3xl">
            <SectionHeading id="evaluation-heading" eyebrow="Measured, not assumed">Model Evaluation and Benchmarking</SectionHeading>
            <p className={`mt-5 ${P}`}>{EVALUATION.intro}</p>
          </div>
          <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <h3 className="text-2xl font-bold text-[#1a1a1a]" style={SERIF}>{EVALUATION.measureTitle}</h3>
              <TermList items={EVALUATION.measure} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#1a1a1a]" style={SERIF}>{EVALUATION.howTitle}</h3>
              <p className={`mt-3 ${P}`}>{EVALUATION.how}</p>
              <h3 className="mt-10 text-2xl font-bold text-[#1a1a1a]" style={SERIF}>{EVALUATION.afterTitle}</h3>
              <p className={`mt-3 ${P}`}>{EVALUATION.after}</p>
            </div>
          </div>
          <Diagram image={IMAGES.scorecard} className="mt-12" caption="Illustrative layout with sample values." />
          <p className="mt-8 flex max-w-4xl gap-3 rounded-2xl bg-white p-5 text-[15px] leading-relaxed text-[#4b1d63] ring-1 ring-[#AF00E8]/10">
            <RiInformationLine aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-[#AF00E8]" />
            {EVALUATION.honest}
          </p>
        </div>
      </section>

      {/* ───────────── Use cases ───────────── */}
      <section aria-labelledby="usecases-heading" className="bg-white py-16 lg:py-24">
        <div className={WRAP}>
          <div className="max-w-3xl">
            <SectionHeading id="usecases-heading" eyebrow="Illustrative, not case studies">Enterprise and Industry Use Cases</SectionHeading>
            <p className={`mt-5 ${P}`}><em>{USE_CASES.note}</em></p>
          </div>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {USE_CASES.items.map((it) => (
              <li key={it.title} className="rounded-2xl border border-gray-100 bg-[#faf9f7] p-6">
                <IconTile icon={ICONS[it.icon]} />
                <h3 className="mt-4 text-lg font-bold text-[#1a1a1a]">{it.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-gray-600"><Linked value={it.text} /></p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ───────────── Deployment ───────────── */}
      <section aria-labelledby="deployment-heading" className="border-y border-[#9b1fe0]/10 bg-[#faf9f7] py-16 lg:py-24">
        <div className={WRAP}>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <SectionHeading id="deployment-heading" eyebrow="Where the model runs">Deployment, Integration and Optimisation</SectionHeading>
              <h3 className="mt-8 text-xl font-bold text-[#1a1a1a]" style={SERIF}>Deployment options</h3>
              <TermList items={DEPLOYMENT.options} />
            </div>
            <Photo image={IMAGES.datacentre} sizes={HALF} className="aspect-[16/9]" />
          </div>
          <Diagram image={IMAGES.deployment} className="mt-12" />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {DEPLOYMENT.blocks.map((blk) => (
              <div key={blk.title} className="rounded-2xl bg-white p-6 ring-1 ring-gray-100">
                <h3 className="text-xl font-bold text-[#1a1a1a]" style={SERIF}>{blk.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-700"><Linked value={blk.text} /></p>
              </div>
            ))}
          </div>
          <h3 id="stack-heading" className="mt-14 text-2xl font-bold text-[#1a1a1a] lg:text-3xl" style={SERIF}>{DEPLOYMENT.stackTitle}</h3>
          <div className="mt-6 max-w-4xl">
            <ComparisonTable labelledBy="stack-heading" headers={[{ label: "Layer" }, { label: "Technologies" }]} rows={DEPLOYMENT.stack} minWidth="min-w-[560px]" />
          </div>
          <p className="mt-4 text-sm text-gray-500">{DEPLOYMENT.stackNote}</p>
        </div>
      </section>

      {/* ───────────── Security ───────────── */}
      <section aria-labelledby="security-heading" className="relative overflow-hidden bg-[#0d0a12] py-16 text-white lg:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-[#AF00E8]/20 blur-3xl" />
        <div className={`${WRAP} relative`}>
          <div className="max-w-3xl">
            <SectionHeading id="security-heading" eyebrow="Governed and traceable" dark>Security, Privacy and Model Governance</SectionHeading>
          </div>
          <div className="mt-12">
            <IconCardGrid items={withIcons(SECURITY)} dark columns="sm:grid-cols-2 lg:grid-cols-3" compact />
          </div>
        </div>
      </section>

      {/* ───────────── Choosing a partner ───────────── */}
      <section aria-labelledby="partner-heading" className="bg-white py-16 lg:py-24">
        <div className={WRAP}>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
            <div>
              <SectionHeading id="partner-heading" eyebrow="Questions worth asking">Choosing an LLM Development Company</SectionHeading>
              <p className={`mt-5 ${P}`}>{PARTNER.intro}</p>
            </div>
            <ol className="space-y-3">
              {PARTNER.questions.map((q) => (
                <li key={q} className="flex gap-3 rounded-xl border border-gray-100 bg-[#faf9f7] px-4 py-3 text-[15px] leading-relaxed text-gray-700">
                  <RiQuestionAnswerLine aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-[#AF00E8]" />
                  {q}
                </li>
              ))}
            </ol>
          </div>
          <h3 className="mt-16 text-2xl font-bold text-[#1a1a1a] lg:text-3xl" style={SERIF}>How ClickMasters approaches it</h3>
          <div className="mt-8">
            <IconCardGrid items={withIcons(PARTNER.answers)} columns="sm:grid-cols-2 lg:grid-cols-3" compact />
          </div>
        </div>
      </section>

      <FaqSection
        title="LLM Fine-Tuning: Frequently Asked Questions"
        intro="Prompting vs fine-tuning, RAG, LoRA and QLoRA, data, private hosting, accuracy and cost, answered plainly."
        faqs={FAQS}
      />

      <FinalCta
        title={FINAL_CTA.title}
        titleAccent={FINAL_CTA.titleAccent}
        body={FINAL_CTA.body}
        bring={FINAL_CTA.bring}
        primaryCta={{ label: "Discuss Your LLM Requirements", href: "/contact" }}
        secondaryCta={{ label: "Talk to an LLM Engineer", href: "/contact" }}
      />
    </>
  );
}
