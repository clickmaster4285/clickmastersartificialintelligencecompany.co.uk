// /services/ai-agent-development
// Content: ./content.ts (from the AI Agent Development SEO pack). Fully server-rendered.
// A dedicated page (not the shared AiServicePage template): the pack needs an
// agent-loop walkthrough, autonomy and comparison tables, use cases with
// oversight, evaluation and ready-made guidance, and exactly four contextual
// links. Takes precedence over app/services/[slug].
import Image from "next/image";
import {
  RiBookOpenLine, RiCheckboxCircleLine, RiCheckLine, RiCodeBoxLine, RiCompass3Line, RiComputerLine,
  RiCustomerService2Line, RiErrorWarningLine, RiFileList3Line, RiFileShield2Line, RiFocus3Line, RiInformationLine,
  RiKey2Line, RiNodeTree, RiPlugLine, RiQuestionAnswerLine, RiRouteLine, RiShieldCheckLine, RiTestTubeLine,
  RiThumbUpLine, RiUserLine,
} from "react-icons/ri";

import JsonLd from "../../Components/JsonLd";
import { IconTile, SectionHeading, WRAP } from "../../Components/ServicePageUI";
import {
  CheckCard, ComparisonTable, FaqSection, FinalCta, IconCardGrid, ON_DARK_LINK, ProcessGrid, RichText, ServiceHero,
  faqPageJsonLd,
} from "../../Components/ServicePageSections";
import { detailPageJsonLd, detailPageMetadata } from "../../lib/site";
import {
  AUTONOMY, COMPARE, EVALUATION, FAQS, FINAL_CTA, HERO, HOW, IMAGES, INDUSTRIES, PARTNER, PATH, PROCESS,
  PROCESS_OUTRO, READY_MADE, SCHEMA_SERVICE, SECURITY, SEO, SERVICES, TECH, USE_CASES, WHAT_IS,
} from "./content";

export const metadata = detailPageMetadata({ path: PATH, ...SEO });

const CRUMBS = [
  { name: "Services", path: "/services" },
  { name: "AI Agent Development", path: PATH },
];

// All icons are decorative (headings carry the meaning).
const ICONS = {
  custom: RiCodeBoxLine, support: RiCustomerService2Line, route: RiRouteLine, compass: RiCompass3Line,
  desk: RiComputerLine, book: RiBookOpenLine, plug: RiPlugLine, test: RiTestTubeLine, nodes: RiNodeTree,
  key: RiKey2Line, user: RiUserLine, shield: RiShieldCheckLine, approve: RiThumbUpLine, check: RiCheckboxCircleLine,
  error: RiErrorWarningLine, log: RiFileList3Line, privacy: RiFileShield2Line, target: RiFocus3Line,
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
const LABEL = "font-semibold text-[#1a1a1a]";

export default function AiAgentDevelopment() {
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
        primaryCta={{ label: "Discuss an AI Agent for Your Team", href: "/contact" }}
        secondaryCta={{ label: "See How Agents Work", href: "#how-agents-work" }}
        stats={HERO.stats}
        figureLabel="How an agent completes a task"
        figure={
          <Image
            src={IMAGES.flow.src}
            width={IMAGES.flow.width}
            height={IMAGES.flow.height}
            alt={IMAGES.flow.alt}
            sizes="(min-width: 1024px) 560px, 100vw"
            preload
            className="h-auto w-full"
          />
        }
        figcaption="Agents start with a narrow task and a small, defined set of tools."
      />

      {/* ───────────── What an AI agent is ───────────── */}
      <section aria-labelledby="what-heading" className="bg-white py-16 lg:py-24">
        <div className={WRAP}>
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
            <div>
              <SectionHeading id="what-heading" eyebrow="The basics">What an AI Agent Is</SectionHeading>
              <p className={`mt-6 ${P}`}><Rich text={WHAT_IS.p1} /></p>
              <p className={`mt-5 ${P}`}>{WHAT_IS.p2}</p>
            </div>
            <Photo image={IMAGES.team} sizes="(min-width: 1280px) 540px, (min-width: 1024px) 42vw, 100vw" className="aspect-[4/3]" />
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {WHAT_IS.sub.map((s, i) => (
              <div key={s.title} className={`rounded-2xl p-6 ring-1 sm:p-8 ${i === 2 ? "bg-[#fffaeb] ring-[#E3A600]/30" : "bg-[#faf9f7] ring-gray-100"}`}>
                <h3 className="text-xl font-bold text-[#1a1a1a]" style={SERIF}>{s.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-gray-700">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── How agents work ───────────── */}
      <section id="how-agents-work" aria-labelledby="how-heading" className="scroll-mt-28 border-y border-[#9b1fe0]/10 bg-[#faf9f7] py-16 lg:py-24">
        <div className={WRAP}>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div>
              <SectionHeading id="how-heading" eyebrow="A loop with guardrails">How AI Agents Work</SectionHeading>
              <p className={`mt-5 ${P}`}>{HOW.intro}</p>
              <p className="mt-6 rounded-2xl bg-white p-5 text-[15px] leading-relaxed text-gray-700 ring-1 ring-[#AF00E8]/15"><Rich text={HOW.principle} /></p>
            </div>
            <TermList items={HOW.steps} ordered />
          </div>
          <Diagram image={IMAGES.architecture} className="mt-12" />
        </div>
      </section>

      {/* ───────────── Autonomy ───────────── */}
      <section aria-labelledby="autonomy-heading" className="bg-white py-16 lg:py-24">
        <div className={WRAP}>
          <div className="max-w-3xl">
            <SectionHeading id="autonomy-heading" eyebrow="Set per action, not per agent">Matching Autonomy to Risk</SectionHeading>
            <p className={`mt-5 ${P}`}>{AUTONOMY.intro}</p>
          </div>
          <Diagram image={IMAGES.autonomy} className="mt-10" />
          <div className="mt-10">
            <ComparisonTable
              labelledBy="autonomy-heading"
              headers={AUTONOMY.headers.map((label) => ({ label }))}
              rows={AUTONOMY.rows}
              minWidth="min-w-[720px]"
            />
          </div>
          <p className={`mt-8 max-w-4xl ${P}`}>{AUTONOMY.outro}</p>
        </div>
      </section>

      {/* ───────────── Services ───────────── */}
      <section aria-labelledby="services-heading" className="border-y border-[#9b1fe0]/10 bg-[#faf9f7] py-16 lg:py-24">
        <div className={WRAP}>
          <div className="max-w-3xl">
            <SectionHeading id="services-heading" eyebrow="AI agent development solutions">Our AI Agent Development Services</SectionHeading>
          </div>
          <div className="mt-12">
            <IconCardGrid items={withIcons(SERVICES)} columns="sm:grid-cols-2 lg:grid-cols-3" />
          </div>
        </div>
      </section>

      {/* ───────────── Agents vs RAG vs fine-tuning vs automation ───────────── */}
      <section aria-labelledby="compare-heading" className="bg-white py-16 lg:py-24">
        <div className={WRAP}>
          <div className="max-w-3xl">
            <SectionHeading id="compare-heading" eyebrow="Choosing the approach">Agents, RAG, Fine-Tuning and Automation: How They Differ</SectionHeading>
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
          <div className="max-w-3xl">
            <SectionHeading id="tech-heading" eyebrow="Integration-first engineering" dark>AI Agent Technologies and Architecture</SectionHeading>
            <p className="mt-5 text-[15px] leading-relaxed text-gray-300 lg:text-base">{TECH.intro}</p>
          </div>
          <ul className="mt-12 grid gap-4 md:grid-cols-2">
            {TECH.items.map((t, i) => (
              <li key={t.title} className={`rounded-2xl border border-white/10 bg-white/[0.04] p-6 ${i === TECH.items.length - 1 ? "md:col-span-2" : ""}`}>
                <h3 className="text-lg font-bold">{t.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-300"><RichText text={t.text} className={ON_DARK_LINK} /></p>
              </li>
            ))}
          </ul>
          <h3 id="stack-heading" className="mt-14 text-2xl font-bold lg:text-3xl" style={SERIF}>{TECH.stackTitle}</h3>
          <div className="mt-6 max-w-4xl rounded-2xl bg-white">
            <ComparisonTable labelledBy="stack-heading" headers={[{ label: "Layer" }, { label: "Technologies" }]} rows={TECH.stack} minWidth="min-w-[560px]" />
          </div>
        </div>
      </section>

      {/* ───────────── Business use cases ───────────── */}
      <section aria-labelledby="usecases-heading" className="bg-white py-16 lg:py-24">
        <div className={WRAP}>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <SectionHeading id="usecases-heading" eyebrow="Illustrative, not case studies">Business Use Cases</SectionHeading>
              <p className={`mt-5 ${P}`}><em>{USE_CASES.note}</em></p>
            </div>
            <Photo image={IMAGES.support} sizes={HALF} className="aspect-[16/10]" />
          </div>
          <ul className="mt-12 grid gap-4 md:grid-cols-2">
            {USE_CASES.items.map((u) => (
              <li key={u.title} className="rounded-2xl border border-gray-100 bg-[#faf9f7] p-6">
                <h3 className="text-lg font-bold text-[#1a1a1a]">{u.title}</h3>
                <dl className="mt-3 space-y-2 text-sm leading-relaxed text-gray-600">
                  <div><dt className={`inline ${LABEL}`}>Problem: </dt><dd className="inline">{u.problem}</dd></div>
                  <div><dt className={`inline ${LABEL}`}>How an agent helps: </dt><dd className="inline"><RichText text={u.how} /></dd></div>
                  <div className="rounded-lg bg-white px-3 py-2 ring-1 ring-[#AF00E8]/10"><dt className="inline font-semibold text-[#AF00E8]">Human oversight: </dt><dd className="inline">{u.oversight}</dd></div>
                </dl>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ───────────── Industry applications ───────────── */}
      <section aria-labelledby="industries-heading" className="border-y border-[#9b1fe0]/10 bg-[#faf9f7] py-16 lg:py-24">
        <div className={`${WRAP} grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16`}>
          <div>
            <SectionHeading id="industries-heading" eyebrow="Sector fit">Industry Applications</SectionHeading>
            <p className={`mt-5 ${P}`}><em>{INDUSTRIES.note}</em></p>
          </div>
          <div className="grid gap-x-8 sm:grid-cols-2">
            <TermList items={INDUSTRIES.items.slice(0, 4)} />
            <TermList items={INDUSTRIES.items.slice(4)} />
          </div>
        </div>
      </section>

      {/* ───────────── Security ───────────── */}
      <section aria-labelledby="security-heading" className="relative overflow-hidden bg-[#0d0a12] py-16 text-white lg:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-[#AF00E8]/20 blur-3xl" />
        <div className={`${WRAP} relative`}>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <SectionHeading id="security-heading" eyebrow="Safety in the architecture" dark>Security, Governance and Reliability</SectionHeading>
              <p className="mt-5 text-[15px] leading-relaxed text-gray-300 lg:text-base">{SECURITY.intro}</p>
            </div>
            <Photo image={IMAGES.headset} sizes={HALF} className="aspect-[16/10] ring-white/10" />
          </div>
          <figure className="mt-10 rounded-3xl bg-white p-4 sm:p-8">
            <Image src={IMAGES.guardrails.src} width={IMAGES.guardrails.width} height={IMAGES.guardrails.height} alt={IMAGES.guardrails.alt} sizes="(min-width: 1280px) 1216px, 100vw" className="h-auto w-full" />
          </figure>
          <ul className="mt-10 grid gap-4 md:grid-cols-2">
            {SECURITY.items.map((it) => (
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

      {/* ───────────── Process ───────────── */}
      <ProcessGrid
        eyebrow="9 stages, narrow first"
        title="How We Develop AI Agents"
        columns="md:grid-cols-2 lg:grid-cols-3"
        steps={PROCESS.map((s) => ({ title: s.title, rows: [{ label: "What happens", text: s.text }] }))}
        after={<p className={`mt-10 max-w-4xl ${P}`}>{PROCESS_OUTRO}</p>}
      />

      {/* ───────────── Evaluation ───────────── */}
      <section aria-labelledby="evaluation-heading" className="border-y border-[#9b1fe0]/10 bg-[#faf9f7] py-16 lg:py-24">
        <div className={WRAP}>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <SectionHeading id="evaluation-heading" eyebrow="Measured, not assumed">How We Evaluate an AI Agent</SectionHeading>
            <TermList items={EVALUATION.metrics} />
          </div>
          <Diagram image={IMAGES.evaluation} className="mt-12" />
          <p className="mt-8 flex max-w-4xl gap-3 rounded-2xl bg-white p-5 text-[15px] leading-relaxed text-[#4b1d63] ring-1 ring-[#AF00E8]/10">
            <RiInformationLine aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-[#AF00E8]" />
            {EVALUATION.outro}
          </p>
        </div>
      </section>

      {/* ───────────── Custom vs ready-made ───────────── */}
      <section aria-labelledby="readymade-heading" className="bg-white py-16 lg:py-24">
        <div className={WRAP}>
          <div className="max-w-3xl">
            <SectionHeading id="readymade-heading" eyebrow="An honest comparison">Custom AI Agents vs Ready-Made AI Tools</SectionHeading>
            <p className={`mt-5 ${P}`}>{READY_MADE.intro}</p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <CheckCard title="A ready-made tool may be enough when…" items={READY_MADE.enough} tone="sun" />
            <CheckCard title="Custom development makes sense when…" items={READY_MADE.custom} tone="purple" />
          </div>
        </div>
      </section>

      {/* ───────────── Choosing a partner ───────────── */}
      <section aria-labelledby="partner-heading" className="border-t border-[#9b1fe0]/10 bg-[#faf9f7] py-16 lg:py-24">
        <div className={WRAP}>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
            <div>
              <SectionHeading id="partner-heading" eyebrow="Questions worth asking">Choosing an AI Agent Development Partner</SectionHeading>
              <p className={`mt-5 ${P}`}>{PARTNER.intro}</p>
            </div>
            <ol className="space-y-3">
              {PARTNER.questions.map((q) => (
                <li key={q} className="flex gap-3 rounded-xl border border-gray-100 bg-white px-4 py-3 text-[15px] leading-relaxed text-gray-700">
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
        title="AI Agent Development: Frequently Asked Questions"
        intro="Agents vs chatbots and automation, integration, private data, safety, technology, cost and timelines, answered plainly."
        faqs={FAQS}
      />

      <FinalCta
        title={FINAL_CTA.title}
        titleAccent={FINAL_CTA.titleAccent}
        body={FINAL_CTA.body}
        bring={FINAL_CTA.bring}
        primaryCta={{ label: "Discuss an AI Agent for Your Team", href: "/contact" }}
        secondaryCta={{ label: "Talk to an AI Engineer", href: "/contact" }}
      />
    </>
  );
}
