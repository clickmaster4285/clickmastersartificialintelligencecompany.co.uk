// /terms-and-conditions
// Content: ./content.ts. Fully server-rendered, no client JavaScript.
// Business details still to be confirmed render as visible "[To be confirmed]"
// markers (see TERMS_BUSINESS in content.ts).
import Link from "next/link";
import type { ReactNode } from "react";

import Breadcrumbs from "../Components/Breadcrumbs";
import JsonLd from "../Components/JsonLd";
import { BODY_LINK, WRAP } from "../Components/ServicePageUI";
import { detailPageJsonLd, detailPageMetadata } from "../lib/site";
import {
  TERMS_BUSINESS,
  TERMS_LAST_UPDATED,
  TERMS_LAST_UPDATED_ISO,
  TERMS_SECTIONS,
  TERMS_SUMMARY,
  type BusinessKey,
} from "./content";

const PATH = "/terms-and-conditions";
const TITLE = "Terms and Conditions: Software & AI Services";
const DESCRIPTION =
  "ClickMasters Terms and Conditions for website use and our software, AI development and digital services, including UK consumer rights, payments and IP.";

export const metadata = detailPageMetadata({ path: PATH, title: TITLE, description: DESCRIPTION, ogTitle: "ClickMasters Terms and Conditions" });

const TODO_CLASS = "rounded bg-amber-100 px-1 font-medium text-amber-900";

/** Renders [[anchor|/path]] links, {{KEY}} business details and [To be confirmed: …] notes. */
function rich(text: string): ReactNode[] {
  const parts = text.split(/(\[\[[^\]]+\]\]|\{\{[A-Z_]+\}\}|\[To be confirmed:[^\]]+\])/g);
  return parts.map((part, i) => {
    const link = part.match(/^\[\[([^|\]]+)\|([^\]]+)\]\]$/);
    if (link) {
      return (
        <Link key={i} href={link[2]} className={BODY_LINK}>
          {link[1]}
        </Link>
      );
    }
    const key = part.match(/^\{\{([A-Z_]+)\}\}$/);
    if (key) {
      const detail = TERMS_BUSINESS[key[1] as BusinessKey];
      if (detail?.value) return <span key={i}>{detail.value}</span>;
      return (
        <mark key={i} className={TODO_CLASS}>
          [To be confirmed: {detail?.label ?? key[1]}]
        </mark>
      );
    }
    if (part.startsWith("[To be confirmed:")) {
      return (
        <mark key={i} className={TODO_CLASS}>
          {part}
        </mark>
      );
    }
    return part;
  });
}

const SUB_LABELS = "abcdefghijklmnopqrstuvwxyz";

export default function TermsAndConditionsPage() {
  return (
    <>
      <JsonLd
        data={detailPageJsonLd({
          path: PATH,
          name: "ClickMasters Terms and Conditions",
          description: DESCRIPTION,
          crumbs: [{ name: "Terms and Conditions", path: PATH }],
        })}
      />

      <section id="top" className="border-b border-gray-200 bg-gray-50">
        <div className={`${WRAP} py-12 lg:py-16`}>
          <Breadcrumbs items={[{ name: "Terms and Conditions", href: PATH }]} schema={false} />
          <h1
            className="mt-6 text-[36px] font-bold leading-[42px] text-[#1a1a1a] sm:text-[44px] sm:leading-[50px]"
            style={{ fontFamily: "Garamond, serif" }}
          >
            Terms and Conditions
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-gray-700">
            These terms cover your use of this website and how ClickMasters provides software development, AI development and
            related digital services to business clients and, where agreed, to individual consumers in the UK.
          </p>
          <p className="mt-4 text-sm text-gray-600">
            Last updated: <time dateTime={TERMS_LAST_UPDATED_ISO}>{TERMS_LAST_UPDATED}</time>
          </p>

          <ul className="mt-8 grid gap-4 md:grid-cols-3">
            {TERMS_SUMMARY.map((s) => (
              <li key={s.title} className="rounded-lg border border-gray-200 bg-white p-5">
                <p className="text-base font-semibold text-[#1a1a1a]">{s.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-gray-700">{s.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className={`${WRAP} py-12 lg:grid lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-12 lg:py-16`}>
        {/* Contents: collapsible on mobile, sticky sidebar on desktop */}
        <nav aria-label="Terms and Conditions contents" className="mb-10 lg:mb-0">
          <details className="rounded-lg border border-gray-200 lg:hidden">
            <summary className="cursor-pointer px-4 py-3 text-sm font-semibold text-[#1a1a1a]">Contents</summary>
            <ol className="space-y-1 border-t border-gray-200 px-4 py-3 text-sm">
              {TERMS_SECTIONS.map((s, i) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="inline-flex min-h-10 items-center text-gray-700 hover:text-[#AF00E8]">
                    {i + 1}. {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </details>
          <div className="sticky top-24 hidden max-h-[calc(100vh-7rem)] overflow-y-auto pr-2 lg:block">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.14em] text-[#7a1fa2]">Contents</p>
            <ol className="space-y-1.5 text-sm">
              {TERMS_SECTIONS.map((s, i) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="text-gray-600 hover:text-[#AF00E8]">
                    {i + 1}. {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </nav>

        <article className="min-w-0 max-w-3xl text-[16px] leading-relaxed text-gray-800">
          {TERMS_SECTIONS.map((section, si) => {
            const n = si + 1;
            let clauseNo = 0;
            return (
              <section key={section.id} id={section.id} aria-labelledby={`${section.id}-h`} className="scroll-mt-24 border-t border-gray-200 pt-8 pb-4 first:border-t-0 first:pt-0">
                <h2
                  id={`${section.id}-h`}
                  className="text-[26px] font-bold leading-[32px] text-[#1a1a1a] lg:text-[30px] lg:leading-[38px]"
                  style={{ fontFamily: "Garamond, serif" }}
                >
                  {n}. {section.title}
                </h2>
                {section.intro && <p className="mt-3 italic text-gray-700">{rich(section.intro)}</p>}
                {section.groups.map((group, gi) => (
                  <div key={gi}>
                    {group.heading && <h3 className="mt-6 text-lg font-semibold text-[#1a1a1a]">{group.heading}</h3>}
                    <ol className="mt-4 space-y-4">
                      {group.clauses.map((clause) => {
                        clauseNo += 1;
                        const label = `${n}.${clauseNo}`;
                        return (
                          <li key={label} className="grid grid-cols-[3rem_minmax(0,1fr)] gap-2">
                            <span className="font-semibold tabular-nums text-gray-500">{label}</span>
                            <div>
                              <p>{rich(clause.text)}</p>
                              {clause.sub && (
                                <ol className="mt-2 space-y-2">
                                  {clause.sub.map((s, k) => (
                                    <li key={k} className="grid grid-cols-[2rem_minmax(0,1fr)] gap-1">
                                      <span className="text-gray-500">({SUB_LABELS[k]})</span>
                                      <span>{rich(s)}</span>
                                    </li>
                                  ))}
                                </ol>
                              )}
                            </div>
                          </li>
                        );
                      })}
                    </ol>
                  </div>
                ))}
              </section>
            );
          })}

          <p className="mt-10 border-t border-gray-200 pt-6 text-sm text-gray-600">
            <a href="#top" className="hover:text-[#AF00E8]">Back to top</a>
          </p>
        </article>
      </div>
    </>
  );
}
