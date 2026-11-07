import React from "react";
import { ctaBgImage } from "../assets";

export default function CTASection() {
  return (
    <section className="relative w-full max-w-[1728px] mx-auto bg-white overflow-hidden py-20 lg:py-28 px-6">

      {/* Background decorative image */}
      <img loading="lazy" decoding="async"
        src={ctaBgImage}
        alt=""
        className="hidden lg:block absolute pointer-events-none select-none"
        style={{
          width: "300px",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%) rotate(1deg)",
          opacity: 0.9,
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center gap-6">

        <h2
          className="font-bold text-3xl lg:text-5xl text-[#333333]"
          style={{ fontFamily: "Garamond, serif" }}
        >
          {"Let's Build Your Next"}
        </h2>

        <p
          className="italic text-2xl lg:text-4xl text-[#333333]"
          style={{ fontFamily: "Garamond, serif" }}
        >
          Software Product Together
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-4">

          <a
            href="/about"
            className="border border-[#A000DF] text-[#A000DF] px-6 py-3 text-sm font-medium hover:bg-[#A000DF] hover:text-white transition-colors"
          >
            About Our Company & Team
          </a>

          <a
            href="/contact"
            className="bg-[#A000DF] text-white px-6 py-3 text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Get Free Consultation
          </a>

        </div>
      </div>
    </section>
  );
}