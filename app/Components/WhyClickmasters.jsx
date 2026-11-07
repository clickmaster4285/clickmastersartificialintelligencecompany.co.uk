import React from "react";

const cards = [
  {
    bg: "#5EEAD4",
    text: "text-[#0a0a0a]",
    title: "Agile Software Development",
    desc: "Sprint-based delivery with full transparency. Our software developers ship faster, iterate smarter, and keep you in control at every milestone.",
    rotate: "rotate-[-5deg] lg:rotate-[-10deg]",
    position: "lg:top-10 lg:left-10",
    width: "w-full max-w-[320px] mx-auto sm:max-w-none sm:mx-0 lg:w-75",
  },
  {
    bg: "#AF00E8",
    text: "text-white",
    title: "24/7 Dedicated Support",
    desc: "Our software development company stays with you post-launch monitoring performance, eploying updates, and resolving issues around the clock.",
    rotate: "rotate-[6deg] lg:rotate-[20deg]",
    position: "lg:top-0 lg:right-3",
    width: "w-full max-w-[320px] mx-auto sm:max-w-none sm:mx-0 lg:w-75",
  },
  {
    bg: "#FDE68A",
    text: "text-[#0a0a0a]",
    title: "Scalable & Future-Proof Architecture",
    desc: "We engineer software solutions on proven stacks React, Node.js, and cloud-native infrastructure built to scale without costly rewrites.",
    rotate: "rotate-[4deg] lg:rotate-[15deg]",
    position: "lg:bottom-10 lg:left-0",
    width: "w-full max-w-[320px] mx-auto sm:max-w-none sm:mx-0 lg:w-75",
  },
  {
    bg: "#151515",
    text: "text-white",
    title: "Enterprise Security & Compliance",
    desc: "Every product from our software house follows OWASP standards, GDPR best practices, and rigorous QA so your business and users stay.",
    rotate: "rotate-[-4deg] lg:rotate-[-8deg]",
    position: "lg:bottom-25 lg:right-6",
    width: "w-full max-w-[320px] mx-auto sm:max-w-none sm:mx-0 lg:w-75",
  },
];

export default function WhyClickmasters() {
  return (
    <section className="relative w-full max-w-[1728px] mx-auto bg-[#0a0a0a] overflow-hidden py-12 sm:py-16 lg:py-20 px-5 sm:px-6 lg:px-[130px]">
      <div className="grid lg:grid-cols-2 gap-10 sm:gap-14 lg:gap-16 items-center">

        {/* Left text content */}
        <div className="text-white">
          <div
            className="mb-6 max-w-[578px] font-bold capitalize text-white text-[32px] leading-[44px] sm:text-[38px] sm:leading-[54px] lg:text-[44px] lg:leading-[70px]"
            style={{
              fontFamily: "Garamond, serif",
              color: "#FFFFFF",
            }}
          >
            {"We Don't Just Build Software"}{" "}
            <span className="italic font-normal text-white text-[24px] sm:text-[28px] lg:text-[32px]">
              We Build Revenue Systems
            </span>
          </div>

          <div className="space-y-4 text-gray-400 text-sm leading-relaxed mb-8">
            <div className="space-y-4 mb-8">
              <p className="max-w-[578px] font-['Arial'] font-thin text-[15px] leading-[22px] text-white">
                A results-driven software building custom web apps, mobile apps,
                and enterprise software that powers real business growth.
              </p>
              <p className="max-w-[578px] font-['Arial'] font-thin text-[15px] leading-[22px] text-white">
                ClickMasters is a professional software development company with
                a proven track record delivering custom software solutions
                across manufacturing, healthcare, retail, real estate, and
                education sectors.
              </p>
              <p className="max-w-[578px] font-['Arial'] font-thin text-[15px] leading-[22px] text-white">
                Our team of experienced software developers works as a seamless
                extension of your business — translating complex requirements
                into reliable, scalable digital products that perform under
                real-world conditions.
              </p>
              <p className="max-w-[578px] font-['Arial'] font-thin text-[15px] leading-[22px] text-white">
                As a full-service house, we handle everything from discovery
                and UI/UX design to backend development, QA, testing, cloud
                deployment, and long-term maintenance — end to end under one
                roof.
              </p>
              <p className="max-w-[578px] font-['Arial'] font-thin text-[15px] leading-[22px] text-white">
                Explore our web application development, mobile app
                development, and custom software development services, or
                browse the software solutions portfolio by industry.
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="/contact"
              className="w-full sm:w-auto text-center bg-[#AF00E8] text-white px-6 py-3 text-sm font-semibold hover:opacity-90 transition-opacity"
              style={{ fontFamily: "Urbanist, sans-serif" }}
            >
              Start Your Project
            </a>

            <a
              href="/case-studies"
              className="w-full sm:w-auto text-center text-white px-6 py-3 text-sm font-semibold underline"
              style={{ fontFamily: "Urbanist, sans-serif" }}
            >
              View Our Work
            </a>
          </div>
        </div>

        {/* Right scattered cards — stacked grid on mobile/tablet, scattered on desktop */}
        <div className="relative grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:block lg:h-[480px] lg:w-full lg:max-w-[460px] lg:mx-auto">
          {cards.map((card) => (
            <div
              key={card.title}
              className={`relative z-10 lg:absolute ${card.position} ${card.width} ${card.rotate} p-6 shadow-2xl overflow-visible transition-all duration-300 hover:-translate-y-4 hover:z-50 hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)]`}
              style={{ backgroundColor: card.bg }}
            >
              <div className="w-10 h-10 rounded-full bg-white/60 mb-4 absolute -top-3.5 -left-3.5" />
              <h4
                className={`mb-2 ${card.text} text-[22px] leading-[28px] sm:text-[26px] sm:leading-[32px] lg:text-[30px] lg:leading-[36px]`}
                style={{
                  fontFamily: "'Times New Roman', serif",
                  fontWeight: 700,
                  letterSpacing: "-0.6px",
                }}
              >
                {card.title}
              </h4>

              <p
                className={card.text}
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "20px",
                }}
              >
                {card.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}