// /services/rag-development
// Content: ./content.ts (from the RAG Development SEO pack). Fully server-rendered.
// A dedicated page (not the shared AiServicePage template): the pack needs a
// pipeline walkthrough, techniques, comparison and evaluation sections, and
// exactly four contextual links. Takes precedence over app/services/[slug].
import Image from "next/image";
import {
  RiBookOpenLine, RiBrainLine, RiChat3Line, RiCheckLine, RiCustomerService2Line, RiDatabase2Line,
  RiFileList3Line, RiFileSearchLine, RiFileShield2Line, RiFileTextLine, RiFolder3Line, RiInformationLine,
  RiLineChartLine, RiLockLine, RiPlugLine, RiQuestionAnswerLine, RiRefreshLine, RiScales3Line, RiServerLine,
  RiShieldCheckLine, RiToolsLine,
} from "../../Components/icons";

import JsonLd from "../../Components/JsonLd";
import ScopingCallBlock from "../../Components/ScopingCallBlock";
import { IconTile, SectionHeading, WRAP } from "../../Components/ServicePageUI";
import {
  ComparisonTable, FaqSection, FinalCta, IconCardGrid, Linked, ON_DARK_LINK, ProcessGrid, ServiceHero, faqPageJsonLd,
} from "../../Components/ServicePageSections";
import { RagDiagram, RagDiagramVertical } from "../ServiceDiagrams";
import { detailPageJsonLd, detailPageMetadata } from "../../lib/site";
import {
  COMPARE, CONNECT, COVER, EVALUATION, FAQS, FINAL_CTA, HERO, HOW, IMAGES, PARTNER, PATH, PROCESS, PROCESS_OUTRO,
  SCHEMA_SERVICE, SECURITY, SEO, TECHNIQUES, USE_CASES, WHAT_IS,
} from "./content";

export const metadata = detailPageMetadata({ path: PATH, ...SEO });

const CRUMBS = [
  { name: "Services", path: "/services" },
  { name: "RAG Development", path: PATH },
];

// All icons are decorative (headings carry the meaning).
const ICONS = {
  chat: RiChat3Line, search: RiFileSearchLine, plug: RiPlugLine, book: RiBookOpenLine, tools: RiToolsLine,
  folder: RiFolder3Line, database: RiDatabase2Line, refresh: RiRefreshLine, brain: RiBrainLine, lock: RiLockLine,
  privacy: RiFileShield2Line, shield: RiShieldCheckLine, server: RiServerLine, policy: RiFileList3Line,
  support: RiCustomerService2Line, scales: RiScales3Line, chart: RiLineChartLine, file: RiFileTextLine,
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

function TermList({ items, ordered = false, dark = false }) {
  const Tag = ordered ? "ol" : "ul";
  return (
    <Tag className="mt-4 space-y-2.5">
      {items.map(([term, text], i) => (
        <li key={term} className={`flex gap-3 text-[15px] leading-relaxed ${dark ? "text-gray-300" : "text-gray-700"}`}>
          {ordered ? (
            <span aria-hidden="true" className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#AF00E8] text-xs font-bold text-white">{i + 1}</span>
          ) : (
            <RiCheckLine aria-hidden="true" className={`mt-1 h-4 w-4 shrink-0 ${dark ? "text-[#5EEAD4]" : "text-[#AF00E8]"}`} />
          )}
          <span><strong className={`font-semibold ${dark ? "text-white" : "text-[#1a1a1a]"}`}>{term}</strong> {text}</span>
        </li>
      ))}
    </Tag>
  );
}

const P = "text-[15px] leading-relaxed text-gray-600 lg:text-base";
const SERIF = { fontFamily: "Garamond, serif" };
const HALF = "(min-width: 1280px) 600px, (min-width: 1024px) 48vw, 100vw";

export default function RagDevelopment() {
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
        primaryCta={{ label: "Discuss Your RAG Project", href: "/contact" }}
        secondaryCta={{ label: "See How RAG Works", href: "#how-rag-works" }}
        stats={HERO.stats}
        figureLabel="How a RAG system answers"
        figure={
          <div role="img" aria-label={IMAGES.heroAlt}>
            <RagDiagram className="hidden h-auto w-full sm:block" />
            <RagDiagramVertical className="mx-auto h-auto w-full max-w-[340px] sm:hidden" />
          </div>
        }
        figcaption="Ingestion runs when content changes; retrieval runs on every question."
      />

      <ScopingCallBlock path={PATH} service="RAG development" />

      {/* ───────────── What RAG is ───────────── */}
      <section aria-labelledby="what-heading" className="bg-white py-16 lg:py-24">
        <div className={WRAP}>
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
            <div>
              <SectionHeading id="what-heading" eyebrow="The basics">What Retrieval-Augmented Generation Is</SectionHeading>
              <p className={`mt-6 ${P}`}><Rich text={WHAT_IS.p1} /></p>
              <p className={`mt-5 ${P}`}>{WHAT_IS.p2}</p>
              <TermList items={WHAT_IS.halves} />
              <p className={`mt-5 ${P}`}>{WHAT_IS.p3}</p>
            </div>
            <Photo image={IMAGES.papers} sizes="(min-width: 1280px) 540px, (min-width: 1024px) 42vw, 100vw" className="aspect-[4/3]" />
          </div>
          <div className="mt-12 rounded-3xl bg-gradient-to-br from-[#faf5fd] to-[#f1fbf9] p-6 ring-1 ring-[#AF00E8]/10 sm:p-10">
            <h3 className="text-2xl font-bold text-[#1a1a1a] lg:text-3xl" style={SERIF}>{WHAT_IS.diffTitle}</h3>
            <div className="mt-5 grid gap-6 md:grid-cols-2">
              {WHAT_IS.diff.map((p) => (
                <p key={p.slice(0, 24)} className="text-[15px] leading-relaxed text-gray-700">{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── How it works ───────────── */}
      <section id="how-rag-works" aria-labelledby="how-heading" className="scroll-mt-28 border-y border-[#9b1fe0]/10 bg-[#faf9f7] py-16 lg:py-24">
        <div className={WRAP}>
          <div className="max-w-3xl">
            <SectionHeading id="how-heading" eyebrow="Two pipelines, one index">How a RAG System Works</SectionHeading>
            <p className={`mt-5 ${P}`}>{HOW.intro}</p>
          </div>
          <Diagram image={IMAGES.pipelines} className="mt-10" />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl bg-white p-6 ring-1 ring-[#0F9F94]/20 sm:p-8">
              <h3 className="text-xl font-bold text-[#1a1a1a] lg:text-2xl" style={SERIF}>{HOW.ingestionTitle}</h3>
              <TermList items={HOW.ingestion} ordered />
            </div>
            <div className="rounded-3xl bg-white p-6 ring-1 ring-[#E3A600]/30 sm:p-8">
              <h3 className="text-xl font-bold text-[#1a1a1a] lg:text-2xl" style={SERIF}>{HOW.queryTitle}</h3>
              <TermList items={HOW.query} ordered />
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── What our services cover ───────────── */}
      <section aria-labelledby="cover-heading" className="bg-white py-16 lg:py-24">
        <div className={WRAP}>
          <div className="max-w-3xl">
            <SectionHeading id="cover-heading" eyebrow="Enterprise RAG solutions">What Our RAG Development Services Cover</SectionHeading>
            <p className={`mt-5 ${P}`}><Linked value={COVER.intro} /></p>
          </div>
          <div className="mt-12">
            <IconCardGrid items={withIcons(COVER.items)} columns="sm:grid-cols-2 lg:grid-cols-3" />
          </div>
        </div>
      </section>

      {/* ───────────── Techniques ───────────── */}
      <section aria-labelledby="techniques-heading" className="relative overflow-hidden bg-[#0d0a12] py-16 text-white lg:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-[#AF00E8]/25 blur-3xl" />
        <div className={`${WRAP} relative`}>
          <div className="max-w-3xl">
            <SectionHeading id="techniques-heading" eyebrow="Added only when measured" dark>Retrieval Techniques We Use, and When</SectionHeading>
            <p className="mt-5 text-[15px] leading-relaxed text-gray-300 lg:text-base">{TECHNIQUES.intro}</p>
          </div>
          <figure className="mt-10 rounded-3xl bg-white p-4 sm:p-8">
            <Image src={IMAGES.hybrid.src} width={IMAGES.hybrid.width} height={IMAGES.hybrid.height} alt={IMAGES.hybrid.alt} sizes="(min-width: 1280px) 1216px, 100vw" className="h-auto w-full" />
          </figure>
          <ul className="mt-10 grid gap-4 md:grid-cols-2">
            {TECHNIQUES.items.map((t, i) => (
              <li key={t.title} className={`rounded-2xl border border-white/10 bg-white/[0.04] p-6 ${i === TECHNIQUES.items.length - 1 ? "md:col-span-2" : ""}`}>
                <h3 className="text-lg font-bold">{t.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-300"><Linked value={t.text} className={ON_DARK_LINK} /></p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ───────────── Connecting to knowledge ───────────── */}
      <section aria-labelledby="connect-heading" className="bg-white py-16 lg:py-24">
        <div className={WRAP}>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <SectionHeading id="connect-heading" eyebrow="Sources, systems and models">Connecting RAG to Your Business Knowledge and Systems</SectionHeading>
            <Photo image={IMAGES.archive} sizes={HALF} className="aspect-[16/9]" />
          </div>
          <div className="mt-12">
            <IconCardGrid items={withIcons(CONNECT.items)} columns="md:grid-cols-2" />
          </div>
          <h3 className="mt-14 text-2xl font-bold text-[#1a1a1a] lg:text-3xl" style={SERIF} id="stack-heading">{CONNECT.stackTitle}</h3>
          <div className="mt-6 max-w-4xl">
            <ComparisonTable labelledBy="stack-heading" headers={[{ label: "Layer" }, { label: "Technologies" }]} rows={CONNECT.stack} minWidth="min-w-[560px]" />
          </div>
        </div>
      </section>

      {/* ───────────── RAG vs fine-tuning ───────────── */}
      <section aria-labelledby="compare-heading" className="border-y border-[#9b1fe0]/10 bg-[#faf9f7] py-16 lg:py-24">
        <div className={WRAP}>
          <div className="max-w-3xl">
            <SectionHeading id="compare-heading" eyebrow="Choosing the approach">RAG vs Fine-Tuning vs a Standard LLM Integration</SectionHeading>
          </div>
          <Diagram image={IMAGES.compare} className="mt-10" />
          <div className="mt-10">
            <ComparisonTable
              labelledBy="compare-heading"
              headers={[
                { label: "" },
                { label: COMPARE.headers[1], dot: "#D9CDE3" },
                { label: COMPARE.headers[2], dot: "#AF00E8" },
                { label: COMPARE.headers[3], dot: "#E3A600" },
              ]}
              rows={COMPARE.rows}
              minWidth="min-w-[860px]"
            />
          </div>
          <p className={`mt-8 max-w-4xl ${P}`}><Linked value={COMPARE.outro} /></p>
        </div>
      </section>

      {/* ───────────── Security ───────────── */}
      <section aria-labelledby="security-heading" className="relative overflow-hidden bg-[#0d0a12] py-16 text-white lg:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-[#AF00E8]/20 blur-3xl" />
        <div className={`${WRAP} relative`}>
          <div className="max-w-3xl">
            <SectionHeading id="security-heading" eyebrow="As important as accuracy" dark>RAG AI Architectures: Security Risks, Privacy and Access Control</SectionHeading>
            <p className="mt-5 text-[15px] leading-relaxed text-gray-300 lg:text-base">{SECURITY.intro}</p>
          </div>
          <figure className="mt-10 rounded-3xl bg-white p-4 sm:p-8">
            <Image src={IMAGES.permissions.src} width={IMAGES.permissions.width} height={IMAGES.permissions.height} alt={IMAGES.permissions.alt} sizes="(min-width: 1280px) 1216px, 100vw" className="h-auto w-full" />
          </figure>
          <ul className="mt-10 grid gap-4 md:grid-cols-2">
            {SECURITY.items.map((it) => (
              <li key={it.title} className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                <IconTile icon={ICONS[it.icon]} dark />
                <div>
                  <h3 className="text-lg font-bold">{it.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-300"><Linked value={it.text} className={ON_DARK_LINK} /></p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ───────────── Evaluation ───────────── */}
      <section aria-labelledby="evaluation-heading" className="bg-white py-16 lg:py-24">
        <div className={WRAP}>
          <div className="max-w-3xl">
            <SectionHeading id="evaluation-heading" eyebrow="Measured, not assumed">Evaluation, Accuracy and Performance</SectionHeading>
            <p className={`mt-5 ${P}`}>{EVALUATION.intro}</p>
          </div>
          <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <h3 className="text-2xl font-bold text-[#1a1a1a]" style={SERIF}>{EVALUATION.setTitle}</h3>
              <p className={`mt-3 ${P}`}>{EVALUATION.set}</p>
              <h3 className="mt-10 text-2xl font-bold text-[#1a1a1a]" style={SERIF}>{EVALUATION.afterTitle}</h3>
              <p className={`mt-3 ${P}`}>{EVALUATION.after}</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#1a1a1a]" style={SERIF}>{EVALUATION.metricsTitle}</h3>
              <TermList items={EVALUATION.metrics} />
              <p className={`mt-5 ${P}`}>{EVALUATION.method}</p>
            </div>
          </div>
          <Diagram image={IMAGES.evaluation} className="mt-12" />
          <p className="mt-8 flex max-w-4xl gap-3 rounded-2xl bg-[#faf5fd] p-5 text-[15px] leading-relaxed text-[#4b1d63] ring-1 ring-[#AF00E8]/10">
            <RiInformationLine aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-[#AF00E8]" />
            {EVALUATION.honest}
          </p>
        </div>
      </section>

      {/* ───────────── Use cases ───────────── */}
      <section aria-labelledby="usecases-heading" className="border-y border-[#9b1fe0]/10 bg-[#faf9f7] py-16 lg:py-24">
        <div className={WRAP}>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <SectionHeading id="usecases-heading" eyebrow="Illustrative, not case studies">Where RAG Helps: Practical Use Cases</SectionHeading>
              <p className={`mt-5 ${P}`}><em>{USE_CASES.note}</em></p>
            </div>
            <Photo image={IMAGES.catalogue} sizes={HALF} className="aspect-[16/10]" />
          </div>
          <div className="mt-12">
            <IconCardGrid items={withIcons(USE_CASES.items)} columns="sm:grid-cols-2 lg:grid-cols-3" />
          </div>
        </div>
      </section>

      {/* ───────────── Process ───────────── */}
      <ProcessGrid
        eyebrow="6 steps, two-week sprints"
        title="How We Build Your RAG System"
        columns="md:grid-cols-2 lg:grid-cols-3"
        steps={PROCESS.map((s) => ({ title: s.title, rows: [{ label: "What happens", text: s.text }] }))}
        after={<p className={`mt-10 max-w-4xl ${P}`}>{PROCESS_OUTRO}</p>}
      />

      {/* ───────────── Choosing a partner ───────────── */}
      <section aria-labelledby="partner-heading" className="border-t border-[#9b1fe0]/10 bg-white py-16 lg:py-24">
        <div className={WRAP}>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
            <div>
              <SectionHeading id="partner-heading" eyebrow="Questions worth asking">Choosing a RAG Development Partner</SectionHeading>
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
        title="RAG Development: Frequently Asked Questions"
        intro="Hallucinations, RAG vs fine-tuning, vector databases, hybrid search, permissions, residency, accuracy and cost, answered plainly."
        faqs={FAQS}
      />

      <FinalCta
        title={FINAL_CTA.title}
        titleAccent={FINAL_CTA.titleAccent}
        body={FINAL_CTA.body}
        bring={FINAL_CTA.bring}
        primaryCta={{ label: "Discuss Your RAG Project", href: "/contact" }}
        secondaryCta={{ label: "Talk to an AI Engineer", href: "/contact" }}
      />
    </>
  );
}
