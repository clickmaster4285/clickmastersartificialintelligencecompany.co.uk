import React from "react";
import Link from "next/link";

const LINK = "underline hover:text-[#AF00E8]";

const reasons = [
  {
    bg: "#5EEAD4",
    text: "text-[#0a0a0a]",
    title: "Agile Software Development With Full Transparency",
    desc: "Sprint-based delivery with weekly progress updates. You see working software early and stay in control at every milestone.",
    link: { href: "/about", label: "Read more about how we work" },
    rotate: "lg:rotate-[-3deg]",
  },
  {
    bg: "#AF00E8",
    text: "text-white",
    title: "24/7 Dedicated Support After Launch",
    desc: "We monitor performance, deploy updates and resolve issues around the clock.",
    link: { href: "/contact", label: "Speak to our support team" },
    rotate: "lg:rotate-[3deg]",
  },
  {
    bg: "#FDE68A",
    text: "text-[#0a0a0a]",
    title: "Scalable and Future-Proof Architecture",
    desc: "Built on proven stacks such as React, Node.js and cloud-native infrastructure, so your product grows without costly rewrites.",
    link: { href: "#tech-stack", label: "See our technology stack" },
    rotate: "lg:rotate-[-2deg]",
  },
  {
    bg: "#151515",
    text: "text-white",
    title: "Enterprise Security and GDPR Compliance",
    desc: "Every product follows OWASP standards, GDPR best practice and rigorous QA, so your business and your users stay protected.",
    rotate: "lg:rotate-[2deg]",
  },
];

/** Section C: About / Revenue Systems. */
export function RevenueSystems() {
  return (
    <section
      id="about-clickmasters"
      aria-labelledby="revenue-heading"
      className="relative w-full max-w-[1728px] mx-auto bg-[#0a0a0a] overflow-hidden py-12 sm:py-16 lg:py-20 px-5 sm:px-6 lg:px-[130px]"
    >
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start text-white">
        <h2
          id="revenue-heading"
          className="max-w-[578px] font-bold text-white text-[32px] leading-[44px] sm:text-[38px] sm:leading-[54px] lg:text-[44px] lg:leading-[60px]"
          style={{ fontFamily: "Garamond, serif" }}
        >
          {"We Don't Just Build Software,"}{" "}
          <span className="italic font-normal">We Build Revenue Systems</span>
        </h2>

        <div className="space-y-4 font-['Arial'] font-thin text-[15px] leading-[24px] text-white">
          <p>
            ClickMasters is a professional software development company with a
            proven record of delivering custom software across manufacturing,
            healthcare, retail, real estate and education. Our experienced
            developers work as an extension of your team, turning complex
            requirements into reliable and scalable digital products.
          </p>
          <p>
            As a full-service software house we handle discovery, UI/UX design,
            backend and frontend development, QA testing, cloud deployment and
            maintenance. That means one accountable partner instead of several
            vendors.
          </p>
          <p>
            Learn more about{" "}
            <Link href="/about" className={LINK}>our company and team</Link>, see{" "}
            <Link href="/case-studies" className={LINK}>our work</Link>, or{" "}
            <Link href="/contact" className={LINK}>start your project today</Link>.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto text-center bg-[#AF00E8] text-white px-6 py-3 text-sm font-semibold hover:opacity-90 transition-opacity"
              style={{ fontFamily: "Urbanist, sans-serif" }}
            >
              Start Your Project
            </Link>
            <Link
              href="/case-studies"
              className="w-full sm:w-auto text-center text-white px-6 py-3 text-sm font-semibold underline"
              style={{ fontFamily: "Urbanist, sans-serif" }}
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Section D: Why Choose Us. */
export default function WhyClickmasters() {
  return (
    <section
      id="why-clickmasters"
      aria-labelledby="why-heading"
      className="relative w-full max-w-[1728px] mx-auto bg-white overflow-hidden py-16 lg:py-24 px-5 sm:px-6 lg:px-[130px]"
    >
      <h2
        id="why-heading"
        className="max-w-3xl mb-12 lg:mb-16 font-bold text-[#333333] text-[30px] leading-[40px] lg:text-[42px] lg:leading-[52px]"
        style={{ fontFamily: "Garamond, serif" }}
      >
        Why Businesses Choose ClickMasters as Their{" "}
        <span className="italic font-normal text-[#AF00E8]">Software Development Partner</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {reasons.map((card) => (
          <div
            key={card.title}
            className={`relative ${card.rotate} p-6 shadow-xl transition-transform duration-300 hover:-translate-y-2`}
            style={{ backgroundColor: card.bg }}
          >
            <div aria-hidden="true" className="w-10 h-10 rounded-full bg-white/60 absolute -top-3.5 -left-3.5" />
            <h3
              className={`mb-3 ${card.text} text-[22px] leading-[28px] lg:text-[24px] lg:leading-[30px]`}
              style={{ fontFamily: "'Times New Roman', serif", fontWeight: 700, letterSpacing: "-0.4px" }}
            >
              {card.title}
            </h3>
            <p className={`${card.text} text-sm leading-5`} style={{ fontFamily: "Inter, sans-serif" }}>
              {card.desc}
              {card.link && (
                <>
                  {" "}
                  <Link href={card.link.href} className="underline font-medium">
                    {card.link.label}
                  </Link>
                  .
                </>
              )}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
