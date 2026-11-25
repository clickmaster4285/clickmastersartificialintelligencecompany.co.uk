import React from "react";
import Link from "next/link";
import { ctaBgImage } from "../assets";

export default function CTASection() {
  return (
    <section id="get-started" aria-labelledby="cta-heading" className="relative w-full max-w-[1728px] mx-auto bg-white overflow-hidden py-20 lg:py-28 px-6">

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

        <h2
          id="cta-heading"
          className="flex flex-col items-center gap-4 text-[#333333]"
          style={{ fontFamily: "Garamond, serif" }}
        >
          <span className="font-bold text-3xl lg:text-5xl">Ready to Build Your Next</span>{" "}
          <span className="italic font-normal text-2xl lg:text-4xl">AI Software Product?</span>
        </h2>

        <p className="max-w-2xl text-sm sm:text-base text-gray-600 leading-relaxed bg-white/80">
          Whether you need a custom web app, a mobile solution or an enterprise
          platform, our team is ready to bring your vision to life.{" "}
          <Link href="/contact" className="underline text-[#A000DF] hover:opacity-80">Get a free consultation</Link>{" "}
          or{" "}
          <Link href="/about" className="underline text-[#A000DF] hover:opacity-80">meet the team</Link>.
          We usually respond within a few hours.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-4">

          <Link
            href="/about"
            className="border border-[#A000DF] text-[#A000DF] px-6 py-3 text-sm font-medium hover:bg-[#A000DF] hover:text-white transition-colors"
          >
            Meet the Team
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