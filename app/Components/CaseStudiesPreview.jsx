import Image from "next/image";
import Link from "next/link";
import SmartLink from "./SmartLink";

/*
 * Section I: Case studies preview.
 *
 * These cards reuse the example project types from /case-studies. No client
 * names or performance figures are shown because none have been verified
 * (see CONTENT-CLAIMS-REPORT.md). When a real, client-approved case study is
 * published at /case-studies/<slug>, set `href` to that URL, add it to
 * EXTRA_LIVE_PATHS in lib/home-links.ts and replace `result` with the
 * verified outcome (for example "Reduced manual processing by 60%").
 */
const CASES = [
  {
    tag: "Healthcare",
    title: "Radiology Diagnostics Support with Computer Vision",
    result:
      "Vision models that help clinicians review medical imagery and prioritise cases for triage, built with privacy and compliance in mind.",
    image: "/assets/Studies/Case6.webp",
    href: "/case-studies",
  },
  {
    tag: "Finance",
    title: "Automated Financial Fraud Detection and Compliance",
    result:
      "Anomaly detection that flags unusual transactions in real time, deployable on private, isolated infrastructure.",
    image: "/assets/Studies/Case1.webp",
    href: "/case-studies",
  },
  {
    tag: "Logistics",
    title: "Real-Time Fleet Routing Automation",
    result:
      "Fleet monitoring, routing engines and automated dispatch driven by historical and live traffic data.",
    image: "/assets/Studies/Case3.webp",
    href: "/case-studies",
  },
];

export default function CaseStudiesPreview() {
  return (
    <section
      id="case-studies"
      aria-labelledby="case-studies-heading"
      className="w-full max-w-[1728px] mx-auto bg-[#faf9f7] py-16 lg:py-24 px-6 lg:px-[130px] border-t border-[#9b1fe0]/20"
    >
      <div className="grid lg:grid-cols-2 gap-6 lg:gap-16 mb-12">
        <h2
          id="case-studies-heading"
          className="font-serif font-bold text-2xl sm:text-3xl md:text-4xl text-[#1a1a1a] leading-snug"
        >
          Case Studies:{" "}
          <span className="italic font-medium text-[#A000DF]">Software That Delivers Measurable Results</span>
        </h2>
        <p className="text-sm sm:text-[15px] text-gray-600 leading-relaxed lg:pt-2">
          Explore how our custom software, AI automation and enterprise
          platforms are designed to help businesses cut costs, save time and
          grow revenue.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {CASES.map((c) => (
          <article key={c.title} className="bg-white shadow-sm border border-black/5 flex flex-col">
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={c.image}
                alt={`${c.title} illustration`}
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="p-6 flex flex-col gap-3 flex-1">
              <span className="text-[11px] font-semibold tracking-widest uppercase text-[#A000DF]">{c.tag}</span>
              <h3 className="font-serif font-bold text-xl text-[#1a1a1a] leading-snug">{c.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed flex-1">{c.result}</p>
              <SmartLink href={c.href} className="text-sm font-medium text-[#A000DF] underline hover:opacity-80">
                Read the {c.tag.toLowerCase()} case study
              </SmartLink>
            </div>
          </article>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <Link
          href="/case-studies"
          className="inline-block bg-[#A000DF] text-white text-sm font-medium px-8 py-3 rounded-sm hover:bg-[#8600bb] transition-colors"
        >
          View all case studies
        </Link>
      </div>
    </section>
  );
}
