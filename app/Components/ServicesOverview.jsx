import Link from "next/link";
import { img15, img15_2, img15_3, img15_4, img15_5, img16 } from "../assets";
import { RiGeminiFill, RiRobot2Line, RiStackLine } from "react-icons/ri";
import SmartLink from "./SmartLink";
import { SERVICE_LINKS } from "../lib/home-links";

// Icons are decorative (the H3 already names the service), so alt="".
const SERVICES = [
  {
    title: "Custom Software Development",
    href: SERVICE_LINKS.custom,
    desc: "Tailor-made software built around your workflows and goals, from MVP to enterprise scale. We replace spreadsheets, disconnected tools and manual processes with one reliable system.",
    img: img16,
  },
  {
    title: "AI Automation and Machine Learning",
    href: SERVICE_LINKS.aiAutomation,
    desc: "Intelligent automation, predictive models and data pipelines that cut operating costs and give your team hours back every week.",
    Icon: RiRobot2Line,
  },
  {
    title: "AI Chatbots and Virtual Assistants",
    href: SERVICE_LINKS.chatbots,
    desc: "Conversational AI for customer support, lead qualification and sales, available around the clock and integrated with your CRM.",
    img: img15_5,
  },
  {
    title: "Web Application Development",
    href: SERVICE_LINKS.web,
    desc: "Fast, secure and scalable web platforms built with React, Next.js and Node.js, optimised for performance and search visibility.",
    img: img15_3,
  },
  {
    title: "Mobile App Development",
    href: SERVICE_LINKS.mobile,
    desc: "Native iOS and Android apps and cross-platform builds using Flutter and React Native, designed for engagement and retention.",
    img: img15,
  },
  {
    title: "ERP and CRM Development",
    href: SERVICE_LINKS.erpCrm,
    desc: "Enterprise systems that connect sales, operations, finance and reporting in one source of truth.",
    Icon: RiStackLine,
  },
  {
    title: "Cloud Solutions and DevOps",
    href: SERVICE_LINKS.cloud,
    desc: "CI/CD pipelines, containers and observability on AWS, Azure and Google Cloud for reliable, scalable releases.",
    img: img15_2,
  },
  {
    title: "Database Design and Management",
    href: SERVICE_LINKS.database,
    desc: "Data modelling, migrations and performance tuning for PostgreSQL, MongoDB, MySQL and Redis.",
    img: img15_4,
  },
];

function Ribbon({ label }) {
  const items = Array.from({ length: 3 });
  return (
    <div aria-hidden="true" className="hidden sm:block absolute top-0 left-0 w-50 h-50 overflow-hidden pointer-events-none z-20">
      {[
        "top-[14px] left-[-40px] w-52",
        "top-[30px] left-[-100px] w-78 ml-11",
      ].map((pos) => (
        <div key={pos} className={`absolute ${pos} rotate-[-45deg] bg-[#A000DF] py-1.5 flex items-center justify-center gap-1.5`}>
          {items.map((_, i) => (
            <span key={i} className="flex items-center gap-1.5">
              <RiGeminiFill className="text-white text-xs shrink-0" />
              <span className="text-white text-[10px] font-medium tracking-wide whitespace-nowrap">{label}</span>
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}

export { Ribbon };

export default function ServicesOverview() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative bg-[#faf9f7] pt-16 sm:pt-20 md:pt-24 pb-16 sm:pb-20 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 overflow-hidden border-t border-b border-[#9b1fe0]/30"
    >
      <Ribbon label="Our Services" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-16 mb-12 sm:mb-16 relative z-10 pt-4 sm:pt-0">
          <h2
            id="services-heading"
            className="font-serif font-bold text-2xl sm:text-3xl md:text-4xl text-[#1a1a1a] leading-snug"
          >
            AI and Software Development Services{" "}
            <span className="italic font-medium text-[#A000DF]">Covering the Full Product Lifecycle</span>
          </h2>

          <p className="text-sm sm:text-[15px] text-gray-600 leading-relaxed">
            From the first discovery workshop to cloud deployment and long-term
            maintenance, our{" "}
            <Link href="/services" className="underline hover:text-[#A000DF]">
              software development services
            </Link>{" "}
            cover every stage of your product under one roof. Our UK-focused team
            combines artificial intelligence, modern engineering and product
            thinking, so you get software that performs under real-world
            conditions and delivers measurable return on investment. Whether you
            need a prototype, a full SaaS platform or an intelligent automation
            system, we scope, design, build, test and support it end to end.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 relative z-10">
          {SERVICES.map(({ title, href, desc, img, Icon }) => (
            <article key={title} className="relative min-w-0 pb-6">
              <div aria-hidden="true" className="absolute right-2 bottom-0 w-20 h-16 bg-[#9b1fe0]/10 rounded-tl-full pointer-events-none" />
              <div className="relative z-10">
                <div aria-hidden="true" className="w-9 h-9 rounded-md overflow-hidden mb-4 flex items-center justify-center bg-white">
                  {img ? (
                    <img loading="lazy" decoding="async" src={img} alt="" width={70} height={70} className="w-full h-full object-cover" />
                  ) : (
                    <Icon className="w-6 h-6 text-[#A000DF]" />
                  )}
                </div>
                <h3 className="font-serif font-semibold text-lg md:text-xl text-[#A000DF] mb-2 leading-snug">
                  <SmartLink href={href} className="hover:underline">
                    {title}
                  </SmartLink>
                </h3>
                <p className="text-[13px] sm:text-sm text-[#3a3a3a] leading-relaxed">{desc}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="flex justify-center mt-12 relative z-10">
          <Link
            href="/services"
            className="inline-block bg-[#A000DF] text-white text-sm font-medium px-8 py-3 rounded-sm hover:bg-[#8600bb] transition-colors"
          >
            Explore all ClickMasters services
          </Link>
        </div>
      </div>
    </section>
  );
}
