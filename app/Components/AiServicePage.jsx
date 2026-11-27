// Shared template for the AI service "spoke" pages (/services/<slug>).
// Built from the same sections as the other service pages; content comes from
// each page's content.ts (shape: app/lib/ai-service-page.ts). Server-rendered.
import Link from "next/link";
import { RiArrowRightLine, RiCheckLine, RiScales3Line } from "./icons";

import JsonLd from "./JsonLd";
import { SectionHeading, WRAP } from "./ServicePageUI";
import { FaqSection, FinalCta, ProcessGrid, RichText, ServiceHero, faqPageJsonLd } from "./ServicePageSections";
import { RagDiagram, RagDiagramVertical } from "../services/ServiceDiagrams";
import { AI_PARENT, aiServiceJsonLd, crumbsFor } from "../lib/ai-service-page";
import { TECH_LINKS } from "../lib/internal-links";

const P = "text-[15px] leading-relaxed text-gray-600 lg:text-base";

function FlowFigure({ flow }) {
  return (
    <ol className="space-y-3">
      {flow.map((f, i) => (
        <li key={f.title} className="flex gap-3 rounded-xl border border-gray-100 bg-white p-3.5">
          <span aria-hidden="true" className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#AF00E8] to-[#7c00c9] text-xs font-bold text-white">
            {i + 1}
          </span>
          <span>
            <span className="block text-sm font-semibold text-[#1a1a1a]">{f.title}</span>
            <span className="mt-0.5 block text-xs leading-relaxed text-gray-500">{f.text}</span>
          </span>
        </li>
      ))}
    </ol>
  );
}

function CardGrid({ items, columns = "sm:grid-cols-2 lg:grid-cols-3", tone = "faint" }) {
  return (
    <ul className={`grid gap-4 ${columns}`}>
      {items.map((it) => (
        <li key={it.title} className={`rounded-2xl border border-gray-100 p-6 ${tone === "faint" ? "bg-[#faf9f7]" : "bg-white"}`}>
          <h3 className="flex items-start gap-2.5 text-lg font-bold text-[#1a1a1a]">
            <span aria-hidden="true" className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#f7effa] text-[#AF00E8]">
              <RiCheckLine className="h-3.5 w-3.5" />
            </span>
            {it.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-gray-600">{it.text}</p>
        </li>
      ))}
    </ul>
  );
}

function LinkCards({ items }) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((it) => (
        <li key={it.href} className="group relative flex flex-col rounded-2xl border border-gray-100 bg-white p-6 transition-colors hover:border-[#AF00E8]/30 hover:bg-[#faf5fd]">
          <h3 className="text-lg font-bold text-[#1a1a1a]">
            <Link href={it.href} className="after:absolute after:inset-0 after:rounded-2xl group-hover:text-[#AF00E8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#AF00E8]">
              {it.title}
            </Link>
          </h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">{it.text}</p>
          <RiArrowRightLine aria-hidden="true" className="mt-4 h-4 w-4 text-[#AF00E8] transition-transform group-hover:translate-x-1" />
        </li>
      ))}
    </ul>
  );
}

/** @param {{ content: import("../lib/ai-service-page").AiServicePageContent }} props */
export default function AiServicePage({ content: c }) {
  const crumbs = crumbsFor(c).map((x) => ({ name: x.name, href: x.path }));
  // Each technology page is linked at most once on the page.
  const linkedTech = new Set();

  return (
    <>
      <JsonLd data={aiServiceJsonLd(c)} />
      <JsonLd data={faqPageJsonLd(c.faqs)} />

      <ServiceHero
        crumbs={crumbs}
        eyebrow={c.hero.eyebrow}
        title={c.hero.title}
        titleAccent={c.hero.titleAccent}
        lead={c.hero.lead}
        audience={c.hero.audience}
        primaryCta={{ label: "Discuss your project", href: "/contact" }}
        secondaryCta={{ label: "All AI development services", href: AI_PARENT.path }}
        stats={c.hero.stats}
        figureLabel={c.hero.figureLabel}
        figure={
          c.figure === "rag" ? (
            <>
              <RagDiagram className="hidden h-auto w-full sm:block" />
              <RagDiagramVertical className="mx-auto h-auto w-full max-w-[340px] sm:hidden" />
            </>
          ) : (
            <FlowFigure flow={c.hero.flow} />
          )
        }
        figcaption={c.hero.figcaption}
      />

      {/* ───────────── Overview ───────────── */}
      <section aria-labelledby="overview-heading" className="bg-white py-16 lg:py-24">
        <div className={`${WRAP} grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16`}>
          <SectionHeading id="overview-heading" eyebrow="The basics">{c.overview.heading}</SectionHeading>
          <div className="space-y-5">
            {c.overview.paragraphs.map((p) => (
              <p key={p.slice(0, 24)} className={P}><RichText text={p} /></p>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── Problems ───────────── */}
      <section aria-labelledby="problems-heading" className="border-y border-[#9b1fe0]/10 bg-[#faf9f7] py-16 lg:py-24">
        <div className={WRAP}>
          <div className="max-w-3xl">
            <SectionHeading id="problems-heading" eyebrow="Why teams come to us">{c.problems.heading}</SectionHeading>
            <p className={`mt-5 ${P}`}>{c.problems.intro}</p>
          </div>
          <div className="mt-12">
            <CardGrid items={c.problems.items} tone="white" columns="sm:grid-cols-2" />
          </div>
        </div>
      </section>

      {/* ───────────── Applications ───────────── */}
      <section aria-labelledby="applications-heading" className="bg-white py-16 lg:py-24">
        <div className={WRAP}>
          <div className="max-w-3xl">
            <SectionHeading id="applications-heading" eyebrow="Practical applications">{c.applications.heading}</SectionHeading>
            <p className={`mt-5 ${P}`}>{c.applications.intro}</p>
          </div>
          <div className="mt-12">
            <CardGrid items={c.applications.items} />
          </div>
        </div>
      </section>

      {/* ───────────── Process ───────────── */}
      <ProcessGrid
        faint
        headingId="process-heading"
        eyebrow="How we build it"
        title={c.process.heading}
        intro={c.process.intro}
        columns="md:grid-cols-2 lg:grid-cols-3"
        checkLabel="Output"
        steps={c.process.steps.map((s) => ({ title: s.title, rows: [{ label: "What we do", text: s.text }], risk: s.output }))}
      />

      {/* ───────────── Technologies ───────────── */}
      <section aria-labelledby="tech-heading" className="bg-[#0d0a12] py-16 text-white lg:py-24">
        <div className={WRAP}>
          <div className="max-w-3xl">
            <SectionHeading id="tech-heading" eyebrow="Model-agnostic" dark>{c.tech.heading}</SectionHeading>
            <p className="mt-5 text-[15px] leading-relaxed text-gray-300">{c.tech.intro}</p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {c.tech.groups.map((g) => (
              <div key={g.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#e9c2ff]">{g.title}</h3>
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {g.items.map((t) => {
                    const href = TECH_LINKS[t];
                    if (href && !linkedTech.has(href)) {
                      linkedTech.add(href);
                      return (
                        <li key={t}>
                          <Link href={href} className="block rounded-md bg-white/10 px-2.5 py-1 text-xs text-white underline decoration-[#AF00E8] underline-offset-2 hover:bg-white/20">
                            {t}
                          </Link>
                        </li>
                      );
                    }
                    return <li key={t} className="rounded-md bg-white/10 px-2.5 py-1 text-xs text-gray-100">{t}</li>;
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── Industries + UK compliance ───────────── */}
      <section aria-labelledby="industries-heading" className="bg-white py-16 lg:py-24">
        <div className={`${WRAP} grid gap-12 ${c.compliance ? "lg:grid-cols-2 lg:gap-16" : ""}`}>
          <div>
            <SectionHeading id="industries-heading" eyebrow="Sector fit">{c.industries.heading}</SectionHeading>
            <p className={`mt-5 ${P}`}>{c.industries.intro}</p>
            <div className="mt-8">
              <ul className="grid gap-4">
                {c.industries.items.map((it) => (
                  <li key={it.href} className="group relative rounded-2xl border border-gray-100 bg-[#faf9f7] p-6 transition-colors hover:border-[#AF00E8]/30 hover:bg-[#faf5fd]">
                    <h3 className="text-lg font-bold text-[#1a1a1a]">
                      <Link href={it.href} className="after:absolute after:inset-0 after:rounded-2xl group-hover:text-[#AF00E8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#AF00E8]">
                        {it.title}
                      </Link>
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600">{it.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {c.compliance && (
            <div className="self-start rounded-3xl bg-gradient-to-br from-[#faf5fd] to-[#f1fbf9] p-6 ring-1 ring-[#AF00E8]/10 sm:p-8">
              <span aria-hidden="true" className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#AF00E8] ring-1 ring-[#AF00E8]/10">
                <RiScales3Line className="h-5 w-5" />
              </span>
              <h2 className="mt-4 text-2xl font-bold text-[#1a1a1a] lg:text-3xl" style={{ fontFamily: "Garamond, serif" }}>{c.compliance.heading}</h2>
              <div className="mt-4 space-y-4">
                {c.compliance.paragraphs.map((p) => (
                  <p key={p.slice(0, 24)} className="text-sm leading-relaxed text-gray-700"><RichText text={p} /></p>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ───────────── Related services ───────────── */}
      <section aria-labelledby="related-heading" className="border-t border-[#9b1fe0]/10 bg-white py-16 lg:py-24">
        <div className={WRAP}>
          <div className="max-w-3xl">
            <SectionHeading id="related-heading" eyebrow="Keep exploring">{c.related.heading}</SectionHeading>
            <p className={`mt-5 ${P}`}>{c.related.intro}</p>
          </div>
          <div className="mt-12">
            <LinkCards items={c.related.items} />
          </div>
        </div>
      </section>

      <FaqSection title={`${c.name}: Frequently Asked Questions`} faqs={c.faqs} />

      <FinalCta
        title={c.cta.title}
        titleAccent={c.cta.titleAccent}
        body={c.cta.body}
        bring={c.cta.bring}
        primaryCta={{ label: "Book a free consultation", href: "/contact" }}
      />
    </>
  );
}
