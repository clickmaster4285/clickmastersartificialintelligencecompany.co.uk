import React from "react";

export default function TechStack() {
  return (
    <section id="tech-stack" className="relative w-full max-w-[1728px] mx-auto bg-white overflow-hidden py-16 lg:py-20" style={{ borderBottomWidth: "0.5px", borderImage: "repeating-linear-gradient(to right, #AF00E8 0 12px, transparent 12px 20px) 1" }}>
      <div
        aria-hidden="true"
        className="hidden lg:block absolute inset-x-0 text-center font-bold whitespace-nowrap select-none pointer-events-none z-0 text-gray-50"
        style={{
          fontFamily: "Garamond, serif",
          top: "50%",
          transform: "translateY(-50%)",
          fontSize: "13vw",
          lineHeight: "1",
          letterSpacing: "0.1em",
        }}
      >
        TECH STACK
      </div>

      {/* Horizontal dashed line */}
      <div
        className="hidden lg:block absolute w-full border-t border-dashed"
        style={{ left: "50%", transform: "translateX(-50%)", top: "250px", borderColor: "#AF00E8" }}
      />

      {/* Vertical dashed line */}
      <div
        className="hidden lg:block absolute"
        style={{
          left: "calc(50% + 321px)",
          top: "0px",
          height: "250px",
          borderLeftWidth: "0.5px",
          borderImage: "repeating-linear-gradient(to bottom, #AF00E8 0 12px, transparent 12px 20px) 1",
        }}
      />

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-6 lg:px-[130px] gap-8">
        <div className="text-center lg:text-left">
          <h2
            className="text-2xl lg:text-3xl font-bold text-[#333333] leading-snug"
            style={{ fontFamily: "Garamond, serif" }}
          >
            Modern Tech Stack
            <br />
            For <span className="italic font-thin text-[#A000DF]">Future Ready Solutions</span>
          </h2>
        </div>

        <div className="max-w-3xs text-center lg:text-right text-sm text-gray-600 leading-relaxed">
          We leverage cutting-edge technologies to build scalable, secure,
          and high-performance applications
        </div>
      </div>
    </section>
  );
}