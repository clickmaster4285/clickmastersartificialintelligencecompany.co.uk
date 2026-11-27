// Reusable, server-rendered sections for long-form service pages
// (/services/<service>). Content comes from each page's content file.
import Link from "next/link";
import { RiAddLine, RiArrowRightLine, RiArrowRightUpLine, RiCheckLine, RiInformationLine, RiMailLine, RiPhoneLine, RiShieldCheckLine, RiSparklingFill } from "./icons";
import Breadcrumbs from "./Breadcrumbs";
import { BODY_LINK, IconTile, SectionHeading, WRAP } from "./ServicePageUI";
import { CONTACT } from "../lib/site";

const LABEL = "field-label";
const ukPhone = CONTACT.phones[0];

/** Text with one inline link: the link anchor replaces "[[link]]" in `value.text`. */
export function Linked({ value, className = BODY_LINK }) {
  if (!value.link) return value.text;
  const [before, after] = value.text.split("[[link]]");
  return (
    <>
      {before}
      <Link href={value.link.href} className={className}>{value.link.anchor}</Link>
      {after}
    </>
  );
}

const MD_LINK = /\[([^\]]+)\]\(([^)\s]+)\)/g;

/**
 * Text with any number of inline links written as [anchor](/path).
 * Internal paths render as <Link>; everything else is plain text.
 */
export function RichText({ text, className = BODY_LINK }) {
  const out = [];
  let last = 0;
  for (const m of text.matchAll(MD_LINK)) {
    if (m.index > last) out.push(text.slice(last, m.index));
    out.push(<Link key={m.index} href={m[2]} className={className}>{m[1]}</Link>);
    last = m.index + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

/** The same text with link syntax removed (for JSON-LD, which must match the visible copy). */
export function plainText(text) {
  return text.replace(MD_LINK, "$1");
}

// ─────────────────────────────── Hero ───────────────────────────────

export function ServiceHero({ crumbs, eyebrow, title, titleAccent, lead, audience, primaryCta, secondaryCta, stats, figureLabel, figure, figcaption }) {
  return (
    <section aria-labelledby="hero-heading" className="relative overflow-hidden border-b border-[#9b1fe0]/15 bg-[#faf9f7]">
      <div aria-hidden="true" className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-[#AF00E8]/10 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-40 -left-32 h-[420px] w-[420px] rounded-full bg-[#5EEAD4]/15 blur-3xl" />

      <div className={`${WRAP} relative grid items-center gap-12 py-14 lg:grid-cols-[1.05fr_1fr] lg:gap-14 lg:py-20`}>
        <div>
          <Breadcrumbs items={crumbs} schema={false} />
          <p className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-xs font-semibold text-[#7a1fa2] shadow-sm ring-1 ring-[#AF00E8]/15">
            <RiSparklingFill aria-hidden="true" className="h-3.5 w-3.5 text-[#AF00E8]" />
            {eyebrow}
          </p>
          <h1
            id="hero-heading"
            className="mt-5 text-[36px] font-bold leading-[42px] text-[#1a1a1a] sm:text-[44px] sm:leading-[50px] xl:text-[54px] xl:leading-[60px]"
            style={{ fontFamily: "Garamond, serif" }}
          >
            {title}{" "}
            <span className="font-normal italic text-[#AF00E8]">{titleAccent}</span>
          </h1>
          <p className="mt-6 text-base leading-relaxed text-gray-700 lg:text-[17px]">{lead}</p>
          {audience && <p className="mt-4 text-[15px] leading-relaxed text-gray-500">{audience}</p>}

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={primaryCta.href}
              className="group inline-flex items-center gap-2 rounded-lg bg-[#AF00E8] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_10px_30px_-8px_rgba(175,0,232,0.6)] hover:bg-[#9600c7] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#AF00E8]"
            >
              {primaryCta.label}
              <RiArrowRightLine aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className="inline-flex items-center gap-2 rounded-lg border border-[#AF00E8]/40 bg-white px-6 py-3.5 text-sm font-semibold text-[#AF00E8] hover:border-[#AF00E8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#AF00E8]"
              >
                {secondaryCta.label}
              </Link>
            )}
          </div>

          {stats?.length > 0 && (
            <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-[#AF00E8]/10 ring-1 ring-[#AF00E8]/10 sm:grid-cols-4">
              {stats.map((s) => (
                // Value shown above its label; DOM order stays dt -> dd.
                <div key={s.label} className="flex flex-col-reverse justify-end bg-white/90 px-4 py-4">
                  <dt className="mt-1 text-xs text-gray-500">{s.label}</dt>
                  <dd className="text-[15px] font-bold leading-snug text-[#1a1a1a]">{s.value}</dd>
                </div>
              ))}
            </dl>
          )}
        </div>

        <figure className="relative">
          <div aria-hidden="true" className="absolute -inset-3 rounded-[28px] bg-gradient-to-br from-[#AF00E8]/20 via-transparent to-[#5EEAD4]/25 blur-xl" />
          <div className="relative rounded-3xl border border-white bg-white/90 p-5 shadow-[0_30px_80px_-24px_rgba(60,0,90,0.35)] sm:p-7">
            {figureLabel && (
              <div className="mb-4 flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-gray-500">{figureLabel}</span>
                <span aria-hidden="true" className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#AF00E8]/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#5EEAD4]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FDE68A]" />
                </span>
              </div>
            )}
            {figure}
          </div>
          {figcaption && <figcaption className="mt-4 text-center text-xs text-gray-500">{figcaption}</figcaption>}
        </figure>
      </div>
    </section>
  );
}

// ─────────────────────── Service cards with jump nav ───────────────────────

/**
 * services: [{ id, icon (component), title, intro, fields: [{label, text, link?}], note?, figure? (node) }]
 */
export function ServiceCards({ headingId = "services-heading", eyebrow, title, intro, services }) {
  return (
    <section aria-labelledby={headingId} className="border-y border-[#9b1fe0]/10 bg-[#faf9f7] py-16 lg:py-24">
      <div className={WRAP}>
        <div className="max-w-3xl">
          <SectionHeading id={headingId} eyebrow={eyebrow}>{title}</SectionHeading>
          {intro && <p className="mt-5 text-[15px] leading-relaxed text-gray-600 lg:text-base">{intro}</p>}
        </div>

        <nav aria-label="Jump to a service" className="-mx-5 mt-8 overflow-x-auto px-5 lg:hidden">
          <ul className="flex w-max gap-2 pb-2">
            {services.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="inline-flex min-h-11 items-center rounded-full border border-[#AF00E8]/20 bg-white px-4 text-sm text-gray-700 hover:border-[#AF00E8] hover:text-[#AF00E8]">
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-10 grid gap-10 lg:grid-cols-[260px_1fr] lg:gap-12">
          <nav aria-label="Services on this page" className="hidden lg:block">
            <ol className="sticky top-[112px] space-y-1 rounded-2xl border border-gray-100 bg-white p-3 shadow-sm">
              {services.map((s, i) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="group flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-[#faf5fd] hover:text-[#AF00E8]">
                    <span className="w-5 text-xs font-semibold text-gray-400 group-hover:text-[#AF00E8]">{String(i + 1).padStart(2, "0")}</span>
                    {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="space-y-6">
            {services.map((s, i) => (
              <article key={s.id} id={s.id} aria-labelledby={`${s.id}-h`} className="scroll-mt-28 overflow-hidden rounded-3xl border border-gray-100 bg-white">
                <div className="border-b border-gray-100 p-6 sm:p-8">
                  <div className="flex items-start gap-4">
                    <IconTile icon={s.icon} />
                    <div>
                      <span className="text-xs font-semibold text-[#AF00E8]">{String(i + 1).padStart(2, "0")}</span>
                      <h3 id={`${s.id}-h`} className="text-[22px] font-bold leading-snug text-[#1a1a1a] lg:text-[26px]" style={{ fontFamily: "Garamond, serif" }}>
                        {s.title}
                      </h3>
                    </div>
                  </div>
                  <p className="mt-4 text-[15px] leading-relaxed text-gray-600 lg:text-base">{s.intro}</p>
                </div>
                <dl className="grid gap-px bg-gray-100 md:grid-cols-2">
                  {s.fields.map((f, fi) => (
                    <div key={f.label} className={`bg-white p-6 sm:px-8 ${s.fields.length % 2 === 1 && fi === s.fields.length - 1 ? "md:col-span-2" : ""}`}>
                      <dt className={LABEL}>{f.label}</dt>
                      <dd className="mt-2.5 text-sm leading-relaxed text-gray-700"><Linked value={f} /></dd>
                    </div>
                  ))}
                </dl>
                {s.figure}
                {s.note && (
                  <p className="flex gap-3 border-t border-[#AF00E8]/10 bg-[#faf5fd] px-6 py-4 text-sm leading-relaxed text-[#4b1d63] sm:px-8">
                    <RiInformationLine aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-[#AF00E8]" />
                    <span>{typeof s.note === "string" ? s.note : <Linked value={s.note} />}</span>
                  </p>
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────── Process ───────────────────────────────

/** steps: [{ title, rows: [{label, text}], risk }] — `risk` is shown in a badge labelled `checkLabel`. */
export function ProcessGrid({ headingId = "process-heading", eyebrow, title, intro, steps, columns = "md:grid-cols-2 lg:grid-cols-3", faint = false, checkLabel = "Risk reduced", after }) {
  return (
    <section aria-labelledby={headingId} className={`py-16 lg:py-24 ${faint ? "border-y border-[#9b1fe0]/10 bg-[#faf9f7]" : "bg-white"}`}>
      <div className={WRAP}>
        <div className="max-w-3xl">
          <SectionHeading id={headingId} eyebrow={eyebrow}>{title}</SectionHeading>
          {intro && <p className="mt-5 text-[15px] leading-relaxed text-gray-600 lg:text-base">{intro}</p>}
        </div>
        <ol className={`mt-12 grid gap-5 ${columns}`}>
          {steps.map((step, i) => (
            <li key={step.title} className={`flex flex-col rounded-2xl border border-gray-100 p-6 ${faint ? "bg-white" : "bg-[#faf9f7]"}`}>
              <div className="flex items-center">
                <span aria-hidden="true" className="step-num">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span aria-hidden="true" className="step-line" />
              </div>
              {/* The <ol> already numbers steps for assistive tech; "01" is the only visible number. */}
              <h3 className="mt-4 text-lg font-bold text-[#1a1a1a]">{step.title}</h3>
              <div className="flex-1">
                {step.rows.map((r) => (
                  <p key={r.label} className="mt-2 text-sm leading-relaxed text-gray-600">
                    <span className="font-semibold text-gray-800">{r.label}: </span>{r.text}
                  </p>
                ))}
              </div>
              {step.risk && (
                <p className="mt-5 flex items-start gap-2 rounded-xl bg-white px-4 py-3 text-xs leading-relaxed text-gray-700 ring-1 ring-[#5EEAD4]/60">
                  <RiShieldCheckLine aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[#0F9F94]" />
                  <span><span className="font-bold uppercase tracking-wider text-[#0F9F94]">{checkLabel}: </span>{step.risk}</span>
                </p>
              )}
            </li>
          ))}
        </ol>
        {after}
      </div>
    </section>
  );
}

// ─────────────────────────────── Industries ───────────────────────────────

/** Dark section of industry cards: items [{ icon (component), title, text, considerations[] }]. */
export function IndustryGrid({ headingId = "industries-heading", eyebrow, title, intro, items }) {
  return (
    <section aria-labelledby={headingId} className="bg-[#0d0a12] py-16 text-white lg:py-24">
      <div className={WRAP}>
        <div className={intro ? "grid gap-6 lg:grid-cols-2 lg:items-end" : "max-w-3xl"}>
          <SectionHeading id={headingId} eyebrow={eyebrow} dark>{title}</SectionHeading>
          {intro && <p className="text-[15px] leading-relaxed text-gray-300">{intro}</p>}
        </div>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((ind) => (
            <li key={ind.title} className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-colors hover:border-[#AF00E8]/50 hover:bg-white/[0.07]">
              <IconTile icon={ind.icon} dark />
              <h3 className="mt-4 text-lg font-bold">{ind.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-300">{ind.text}</p>
              <p className="mt-4 text-[11px] font-semibold uppercase tracking-wider text-gray-400">Key considerations</p>
              <ul className="mt-2 flex flex-wrap gap-1.5">
                {ind.considerations.map((c) => (
                  <li key={c} className="ind-chip">{c}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// ─────────────────────────── Comparison table ───────────────────────────

/** headers: [{label, dot?}], rows: string[][] (first cell is the row header) */
export function ComparisonTable({ labelledBy, headers, rows, minWidth = "min-w-[720px]" }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm" tabIndex={0} role="region" aria-labelledby={labelledBy}>
      <table className={`w-full ${minWidth} border-collapse text-left text-sm`}>
        <thead>
          <tr className="bg-[#1a1022] text-white">
            {headers.map((h, i) => (
              <th key={h.label} scope="col" className={`px-5 py-4 text-xs font-semibold uppercase tracking-wider ${i === 0 ? "sticky left-0 bg-[#1a1022]" : ""}`}>
                {h.dot ? (
                  <span className="inline-flex items-center gap-2"><span aria-hidden="true" className="h-2.5 w-2.5 rounded-full" style={{ background: h.dot }} />{h.label}</span>
                ) : h.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={row[0]} className={ri % 2 ? "bg-[#faf9f7]" : "bg-white"}>
              {row.map((cell, ci) =>
                ci === 0 ? (
                  <th key={ci} scope="row" className={`sticky left-0 px-5 py-4 font-semibold text-[#1a1a1a] ${ri % 2 ? "bg-[#faf9f7]" : "bg-white"}`}>{cell}</th>
                ) : (
                  <td key={ci} className="cmp-td">{cell}</td>
                )
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/** A tinted card with a heading and a tick list. tone: "purple" | "sun" | "teal" */
export function CheckCard({ title, items, tone = "purple" }) {
  const t = {
    purple: ["bg-[#faf5fd] ring-[#AF00E8]/15", "text-[#AF00E8]"],
    sun: ["bg-[#fffaeb] ring-[#E3A600]/25", "text-[#B58300]"],
    teal: ["bg-[#f1fbf9] ring-[#0F9F94]/20", "text-[#0F9F94]"],
  }[tone];
  return (
    <div className={`rounded-2xl p-6 ring-1 sm:p-8 ${t[0]}`}>
      <h3 className="text-lg font-bold text-[#1a1a1a]">{title}</h3>
      <ul className="mt-4 space-y-2.5">
        {items.map((it) => (
          <li key={it} className="flex gap-2.5 text-sm leading-relaxed text-gray-700">
            <RiCheckLine aria-hidden="true" className={`mt-0.5 h-4 w-4 shrink-0 ${t[1]}`} />{it}
          </li>
        ))}
      </ul>
    </div>
  );
}

// ─────────────────────────────── FAQ ───────────────────────────────

export function FaqSection({ headingId = "faq-heading", title, intro, faqs }) {
  return (
    <section aria-labelledby={headingId} className="border-t border-[#9b1fe0]/10 bg-[#faf9f7] py-16 lg:py-24">
      <div className={`${WRAP} grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16`}>
        <div>
          <SectionHeading id={headingId} eyebrow="FAQ">{title}</SectionHeading>
          {intro && <p className="mt-5 text-[15px] leading-relaxed text-gray-600">{intro}</p>}
        </div>
        {/* Native <details>: every answer is in the server HTML, no JavaScript needed. */}
        <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 bg-white">
          {faqs.map((f, i) => (
            <details key={f.q} className="group p-5 sm:p-6" open={i === 0}>
              <summary className="faq-summary">
                <h3 className="faq-q">{f.q}</h3>
                <span aria-hidden="true" className="faq-toggle">
                  <RiAddLine className="h-4 w-4" />
                </span>
              </summary>
              <div className="mt-3 space-y-3 pr-10 text-sm leading-relaxed text-gray-600">
                {f.a.map((p) => <p key={p.slice(0, 24)}><RichText text={p} /></p>)}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/** FAQPage JSON-LD built from the same array the page renders. */
export function faqPageJsonLd(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: plainText(a.join(" ")) },
    })),
  };
}

// ─────────────────────────────── Final CTA ───────────────────────────────

export const ON_DARK_LINK = "font-medium text-white underline decoration-[#AF00E8] underline-offset-4 hover:text-[#e9c2ff]";

export function FinalCta({ title, titleAccent, body, bring, primaryCta, secondaryCta }) {
  return (
    <section aria-labelledby="cta-heading" className="bg-white px-5 py-16 sm:px-8 lg:py-24">
      <div className="relative mx-auto max-w-[1280px] overflow-hidden rounded-[32px] bg-gradient-to-br from-[#2a0b3a] via-[#1a0d24] to-[#0d0a12] px-6 py-14 text-white sm:px-12 lg:px-16 lg:py-20">
        <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#AF00E8]/40 blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-24 left-10 h-64 w-64 rounded-full bg-[#5EEAD4]/15 blur-3xl" />
        <div className="relative grid gap-10 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <h2 id="cta-heading" className="text-[30px] font-bold leading-[38px] lg:text-[42px] lg:leading-[50px]" style={{ fontFamily: "Garamond, serif" }}>
              {title}
              {titleAccent && <>{" "}<span className="font-normal italic text-[#e9c2ff]">{titleAccent}</span></>}
            </h2>
            <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-gray-300 lg:text-base">
              <Linked value={body} className={ON_DARK_LINK} />
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={primaryCta.href} className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-[#AF00E8] hover:bg-[#f7effa]">
                {primaryCta.label}
                <RiArrowRightUpLine aria-hidden="true" className="h-4 w-4" />
              </Link>
              {secondaryCta && (
                <Link href={secondaryCta.href} className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/10">
                  {secondaryCta.label}
                </Link>
              )}
            </div>
          </div>
          <div className="space-y-5">
            {bring?.length > 0 && (
              <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">Bring us</p>
                <ul className="mt-3 space-y-2">
                  {bring.map((b) => (
                    <li key={b} className="flex gap-2.5 text-sm text-gray-200">
                      <RiCheckLine aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[#5EEAD4]" />{b}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <address className="space-y-3 rounded-2xl border border-white/10 bg-white/[0.06] p-6 text-sm not-italic">
              <a href={`tel:${ukPhone.e164}`} className="flex items-center gap-3 hover:text-[#e9c2ff]">
                <RiPhoneLine aria-hidden="true" className="h-5 w-5 text-[#5EEAD4]" />UK {ukPhone.display}
              </a>
              <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-3 break-all hover:text-[#e9c2ff]">
                <RiMailLine aria-hidden="true" className="h-5 w-5 shrink-0 text-[#5EEAD4]" />{CONTACT.email}
              </a>
              <p className="text-xs text-gray-400">We usually respond {CONTACT.responseTime}.</p>
            </address>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Grid of icon cards: items [{ icon (component), title, text }]. */
export function IconCardGrid({ items, dark = false, columns = "sm:grid-cols-2 lg:grid-cols-3", compact = false }) {
  return (
    <ul className={`grid gap-4 ${columns}`}>
      {items.map((it) => (
        <li
          key={it.title}
          className={`${compact ? "flex gap-4 p-5" : "p-6"} rounded-2xl border ${dark ? "border-white/10 bg-white/[0.04]" : "border-gray-100 bg-[#faf9f7]"}`}
        >
          <IconTile icon={it.icon} dark={dark} size={compact ? "sm" : "md"} />
          <div>
            <h3 className={`${compact ? "" : "mt-4 text-lg"} font-bold ${dark ? "text-white" : "text-[#1a1a1a]"}`}>{it.title}</h3>
            <p className={`mt-1.5 text-sm leading-relaxed ${dark ? "text-gray-300" : "text-gray-600"}`}>{it.text}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
