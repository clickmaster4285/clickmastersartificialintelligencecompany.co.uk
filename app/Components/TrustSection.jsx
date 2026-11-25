// Trust signals (client logos, testimonials, case-study metrics).
// TODO: data lives in app/config/trust.ts and is empty until real, verified
// content is supplied. While every list is empty this renders NOTHING, so no
// placeholder or invented proof ever reaches the page.
import Image from "next/image";
import Link from "next/link";
import { SectionHeading, WRAP } from "./ServicePageUI";
import { TRUST } from "../config/trust";

export default function TrustSection({ headingId = "trust-heading", title = "Trusted by Teams Across the UK" }) {
  const { logos, testimonials, metrics } = TRUST;
  if (logos.length === 0 && testimonials.length === 0 && metrics.length === 0) return null;

  return (
    <section aria-labelledby={headingId} className="bg-white py-16 lg:py-24">
      <div className={WRAP}>
        <SectionHeading id={headingId} eyebrow="Proof">{title}</SectionHeading>

        {logos.length > 0 && (
          <ul className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-6">
            {logos.map((l) => (
              <li key={l.name}>
                <Image src={l.src} alt={l.name} width={l.width} height={l.height} sizes={`${l.width}px`} className="h-10 w-auto opacity-80" />
              </li>
            ))}
          </ul>
        )}

        {metrics.length > 0 && (
          <dl className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((m) => (
              <div key={m.label} className="flex flex-col-reverse rounded-2xl border border-gray-100 bg-[#faf9f7] p-6">
                <dt className="mt-1 text-sm text-gray-600">
                  {m.caseStudyHref ? <Link href={m.caseStudyHref} className="hover:text-[#AF00E8]">{m.label}</Link> : m.label}
                </dt>
                <dd className="text-3xl font-bold text-[#1a1a1a]" style={{ fontFamily: "Garamond, serif" }}>{m.value}</dd>
              </div>
            ))}
          </dl>
        )}

        {testimonials.length > 0 && (
          <ul className="mt-10 grid gap-5 md:grid-cols-2">
            {testimonials.map((t) => (
              <li key={t.name}>
                <figure className="h-full rounded-2xl border border-gray-100 bg-[#faf9f7] p-6">
                  <blockquote className="text-[15px] leading-relaxed text-gray-700">&ldquo;{t.quote}&rdquo;</blockquote>
                  <figcaption className="mt-4 text-sm text-gray-500">
                    <span className="font-semibold text-[#1a1a1a]">{t.name}</span>, {t.role}, {t.company}
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
