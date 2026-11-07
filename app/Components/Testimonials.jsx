import React from "react";
import { person1, person2, person3, person4 } from "../assets";

const cards = [
  {
    photo: person1,
    role: "Director, Dzherelo",
    quote:
      "I really enjoyed collaborating with ClickMasters. They launched a cool campaign that gave quick results and great sales for our services.",
    style: { height: "533.5px", left: "-0.29%", right: "77.73%", top: "25.78px", transform: "matrix(1, -0.09, 0.12, 0.99, 0, 0)" },
  },
  {
    photo: person2,
    role: "Founder, Folderly",
    quote:
      "The team operates like co-founders. Every detail considered, every pixel obsessed over. Truly an extension of our company.",
    style: { height: "533.5px", left: "25.07%", right: "52.36%", top: "46px", transform: "matrix(1, 0.06, -0.08, 1, 0, 0)" },
  },
  {
    photo: person3,
    role: "Corporate Photographer",
    quote: "Thank you very much for everything! We revived the account.",
    style: { height: "558.25px", left: "48.57%", right: "28.86%", top: "20px", transform: "matrix(1, -0.05, 0.06, 1, 0, 0)" },
  },
  {
    photo: person4,
    role: "CEO, Lumen Health",
    quote:
      "Six weeks from sketch to a paying customer base of thousands. The cadence is unlike anything we'd ever seen before.",
    style: { height: "533.49px", left: "72.96%", right: "4.5%", top: "64px", transform: "matrix(0.99, 0.11, -0.13, 0.99, 0, 0)" },
  },
];

function TestimonialCard({ c }) {
  return (
    <div
      className="flex flex-col items-start bg-white shadow-xl"
      style={{
        padding: "16px 16px 24px",
        gap: "12px",
        isolation: "isolate",
        position: "absolute",
        ...c.style,
      }}
    >
      {/* Photo — desaturated via background-blend-mode */}
      <div
        className="w-[299.11px] h-[335px] self-stretch"
        style={{
          backgroundImage: `linear-gradient(0deg, #FFFFFF, #FFFFFF), url("${c.photo}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "saturation",
        }}
      />

      {/* Name / role */}
      <p
        className="w-[299.11px] uppercase"
        style={{
          fontFamily: "Urbanist, sans-serif",
          style: "Regular",
          fontWeight: 400,
          fontSize: "10px",
          lineHeight: "16px",
          letterSpacing: "1.1px",
          color: "#18181B",
        }}
      >
        {c.role}
      </p>

      {/* Blockquote */}
      <div className="relative w-[299.11px]">
        <span
          className="absolute top-0 left-0"
          style={{
            fontFamily: "'Times New Roman', serif",
            fontSize: "24px",
            lineHeight: "32px",
            letterSpacing: "-0.36px",
            color: "#18181B",
            opacity: 0.4,
          }}
        >
          [
        </span>
        <p
          className="px-4"
          style={{
            fontFamily: "Urbanist, sans-serif",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "25px",
            letterSpacing: "-0.36px",
            color: "#18181B",
          }}
        >
          {c.quote}
          <span
            style={{
              fontFamily: "'Times New Roman', serif",
              fontSize: "24px",
              letterSpacing: "-0.36px",
              color: "#18181B",
              opacity: 0.4,
            }}
          >
            {" "}]
          </span>
        </p>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonial" className="relative w-full max-w-[1728px] mx-auto bg-white overflow-hidden py-16 lg:py-20 px-6 lg:px-[65px]">
      {/* Background watermark text */}
      <div
        aria-hidden="true"
        className="hidden lg:block absolute inset-x-0 text-center font-bold uppercase whitespace-nowrap select-none pointer-events-none z-0"
        style={{
          fontFamily: "Garamond, serif",
          top: "-10px",
          fontSize: "13.82vw",
          lineHeight: "15.57vw",
          color: "#FAFAFA",
        }}
      >
        Testimonial
      </div>

      {/* Heading + paragraph — pushed below the watermark text */}
      <div className="relative z-10 flex flex-col lg:flex-row items-start justify-between gap-6 mb-16 lg:mb-24 pt-32 lg:pt-40">
        <h2
          className="text-2xl lg:text-3xl text-[#333333]"
          style={{ fontFamily: "Garamond, serif" }}
        >
          <span className="font-bold">Hear What </span>
          <span className="italic">Our Clients Have To Say</span>
        </h2>

        <p className="text-xs lg:text-sm text-gray-500 text-left lg:text-right max-w-sm leading-relaxed">
          Discover why businesses trust us for their custom software, web,
          and mobile app solutions. Read real feedback from our clients who
          have transformed their ideas into seamless digital experiences
          with our expertise.
        </p>
      </div>

      {/* Mobile: simple stacked cards */}
      <div className="relative z-10 flex flex-col lg:hidden gap-8 items-center">
        {cards.map((c) => (
          <div key={c.role} className="w-[280px] bg-white shadow-xl p-4 pb-6">
            <img src={c.photo} alt={c.role} loading="lazy" className="w-full h-[280px] object-cover grayscale mb-3" />
            <p className="text-[11px] uppercase tracking-[1.1px] text-[#18181B] mb-2">{c.role}</p>
            <p className="text-sm text-[#18181B] leading-relaxed">[ {c.quote} ]</p>
          </div>
        ))}
      </div>

      {/* Desktop: exact Figma positions */}
      <div className="relative z-10 hidden lg:block" style={{ height: "620px" }}>
        {cards.map((c) => (
          <TestimonialCard key={c.role} c={c} />
        ))}
      </div>
    </section>
  );
}