import Link from "next/link";
import SmartLink from "./SmartLink";
import { SOLUTION_LINKS } from "../lib/home-links";

const SOLUTIONS = [
  {
    title: "Custom ERP Software Development",
    href: SOLUTION_LINKS.erp,
    desc: "A configurable ERP foundation that unifies finance, inventory, HR and operations, tailored to your processes instead of forcing new ones.",
  },
  {
    title: "Custom CRM Software",
    href: SOLUTION_LINKS.crm,
    desc: "Pipeline, contact and customer-service management with built-in automation and AI insights, ready to extend for your sales team.",
  },
  {
    title: "MVP and SaaS Development Services",
    href: SOLUTION_LINKS.saas,
    desc: "Multi-tenant SaaS foundations with subscriptions, billing, permissions and analytics, so you launch your product sooner.",
  },
  {
    title: "LMS Development Services",
    href: SOLUTION_LINKS.lms,
    desc: "Course delivery, assessments, learner dashboards and reporting for schools, training providers and corporate academies.",
  },
  {
    title: "Inventory Management Software",
    href: SOLUTION_LINKS.inventory,
    desc: "Real-time stock tracking, barcode workflows, purchasing and multi-location warehouse control in one system.",
  },
  {
    title: "Fleet Management Software",
    href: SOLUTION_LINKS.fleet,
    desc: "Vehicle tracking, dispatch, routing, maintenance records and driver apps for carriers and field-service teams.",
  },
];

/** Section E: Ready-to-deploy solutions. */
export default function SolutionsSection() {
  return (
    <section
      id="solutions"
      aria-labelledby="solutions-heading"
      className="w-full max-w-[1728px] mx-auto bg-[#faf9f7] py-16 lg:py-24 px-6 lg:px-[130px] border-t border-[#9b1fe0]/20"
    >
      <div className="grid lg:grid-cols-2 gap-6 lg:gap-16 mb-12">
        <h2
          id="solutions-heading"
          className="font-serif font-bold text-2xl sm:text-3xl md:text-4xl text-[#1a1a1a] leading-snug"
        >
          Ready-to-Deploy AI and Software Solutions{" "}
          <span className="italic font-medium text-[#A000DF]">for Growing Businesses</span>
        </h2>
        <p className="text-sm sm:text-[15px] text-gray-600 leading-relaxed lg:pt-2">
          Beyond bespoke projects, our{" "}
          <Link href="/solutions" className="underline hover:text-[#A000DF]">
            software solutions
          </Link>{" "}
          shorten your time to market with proven, customisable foundations.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {SOLUTIONS.map((s, i) => (
          <article key={s.title} className="bg-white border border-black/5 p-6 shadow-sm">
            <span aria-hidden="true" className="block font-serif italic text-3xl text-[#A000DF]/40 mb-3">
              0{i + 1}
            </span>
            <h3 className="font-serif font-bold text-lg text-[#1a1a1a] leading-snug mb-2">
              <SmartLink href={s.href} className="hover:text-[#A000DF]">
                {s.title}
              </SmartLink>
            </h3>
            <p className="text-[13px] text-gray-600 leading-relaxed">{s.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
