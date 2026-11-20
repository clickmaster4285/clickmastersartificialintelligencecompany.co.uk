import React from "react";
import Link from "next/link";
import { ctaBgImage } from "../assets";

export default function CTASection() {
  return (
    <section className="relative w-full max-w-[1728px] mx-auto bg-white overflow-hidden py-20 lg:py-28 px-6">

      {/* Background decorative image (CSS background, hidden from assistive tech) */}
      <div
        aria-hidden="true"
        className="hidden lg:block absolute pointer-events-none select-none bg-contain bg-center bg-no-repeat"
        style={{
          width: "300px",
          aspectRatio: "383 / 386",
          backgroundImage: `url("${ctaBgImage}")`,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%) rotate(1deg)",
          opacity: 0.9,
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center gap-6">

        {/* One complete heading (previously the H2 was only "Let's Build Your Next") */}
        <h2
          className="flex flex-col items-center gap-6 text-[#333333]"
          style={{ fontFamily: "Garamond, serif" }}
        >
          <span className="font-bold text-3xl lg:text-5xl">{"Let's Build Your Next"}</span>
          <span className="italic font-normal text-2xl lg:text-4xl">Software Product Together</span>
        </h2>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-4">

          <Link
            href="/about"
            className="border border-[#A000DF] text-[#A000DF] px-6 py-3 text-sm font-medium hover:bg-[#A000DF] hover:text-white transition-colors"
          >
            About Our Company & Team
          </Link>

          <Link
            href="/contact"
            className="bg-[#A000DF] text-white px-6 py-3 text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Get a Free Consultation
          </Link>

        </div>
      </div>
    </section>
  );
}