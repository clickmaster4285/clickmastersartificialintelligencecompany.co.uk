// Enquiry block placed straight after the intro of every service and
// solution page (audit D-09): a "book a 30-minute scoping call" offer, a
// three-item proof strip and the page's "Last reviewed" line.
// Server-rendered; no JavaScript.
import Link from "next/link";
import { RiArrowRightLine, RiCalendarCheckLine, RiPhoneLine, RiShieldCheckLine } from "./icons";
import { WRAP } from "./ServicePageUI";
import { CONTACT } from "../lib/site";
import { LAST_REVIEWED, PROOF_POINTS, REVIEWER, formatReviewDate } from "../config/editorial";

const ukPhone = CONTACT.phones[0];

/** "Last reviewed 26 November 2026 by …" — matches the WebPage JSON-LD. */
export function ReviewedLine({ path, className = "" }) {
  const iso = LAST_REVIEWED[path];
  if (!iso) return null;
  return (
    <p className={`text-xs text-gray-500 ${className}`}>
      Last reviewed <time dateTime={iso}>{formatReviewDate(iso)}</time> by{" "}
      {REVIEWER ? (
        <Link href={REVIEWER.url} className="underline decoration-gray-300 underline-offset-2 hover:text-[#AF00E8]">
          {REVIEWER.name}, {REVIEWER.jobTitle}
        </Link>
      ) : (
        <Link href="/about" className="underline decoration-gray-300 underline-offset-2 hover:text-[#AF00E8]">
          the ClickMasters engineering team
        </Link>
      )}
    </p>
  );
}

/**
 * path:    the page path (for the review date)
 * service: the service name, passed to /contact so the enquiry is pre-filled
 */
export default function ScopingCallBlock({ path, service }) {
  const href = `/contact?service=${encodeURIComponent(service)}#contact-form`;
  return (
    <section aria-labelledby="scoping-heading" className="border-b border-[#9b1fe0]/10 bg-white py-10 lg:py-12">
      <div className={WRAP}>
        <div className="grid gap-8 rounded-3xl bg-gradient-to-br from-[#faf5fd] to-[#f2fbf9] p-6 ring-1 ring-[#AF00E8]/10 sm:p-8 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-12">
          <div>
            <p className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#7a1fa2]">
              <RiCalendarCheckLine className="h-4 w-4 text-[#AF00E8]" />
              Free, no obligation
            </p>
            <h2 id="scoping-heading" className="mt-2 text-2xl font-bold leading-snug text-[#1a1a1a] lg:text-[28px]" style={{ fontFamily: "Garamond, serif" }}>
              Book a 30-minute scoping call about {service}
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-gray-600">
              Tell us what you need to build or fix. In 30 minutes we will talk through the problem, the options worth
              considering and what would affect cost and timeline.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <Link
                href={href}
                className="group inline-flex items-center gap-2 rounded-lg bg-[#AF00E8] px-5 py-3 text-sm font-semibold text-white hover:bg-[#9600c7] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#AF00E8]"
              >
                Book a scoping call
                <RiArrowRightLine className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <a href={`tel:${ukPhone.e164}`} className="inline-flex items-center gap-2 text-sm font-medium text-[#4b1d63] hover:text-[#AF00E8]">
                <RiPhoneLine className="h-4 w-4 text-[#AF00E8]" />
                Or call {ukPhone.display}
              </a>
            </div>
            <ReviewedLine path={path} className="mt-5" />
          </div>
          <ul className="grid gap-3">
            {PROOF_POINTS.map((p) => (
              <li key={p.title} className="flex gap-3 rounded-2xl bg-white/80 p-4 ring-1 ring-[#AF00E8]/10">
                <RiShieldCheckLine className="mt-0.5 h-5 w-5 shrink-0 text-[#0F9F94]" />
                <span>
                  <span className="block text-sm font-semibold text-[#1a1a1a]">{p.title}</span>
                  <span className="mt-0.5 block text-sm leading-relaxed text-gray-600">{p.text}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
