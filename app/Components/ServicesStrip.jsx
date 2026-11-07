import React from "react";
import { stripStarIcon as starIcon } from "../assets";

const items = ["Branding", "Product Design", "Web Experiences", "Motion", "Strategy"];
const doubled = [...items, ...items];

export default function ServicesStrip() {
  return (
    <section id="services-strip" className="w-full max-w-[1728px] mx-auto bg-white flex flex-col justify-center items-center py-10 sm:py-14 lg:py-[60px] gap-[10px] overflow-hidden">
      <style>{`
        @keyframes scroll-left-strip {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
      <div className="overflow-hidden w-full">
        <div
          className="flex items-center gap-8 sm:gap-10 lg:gap-12 w-max"
          style={{ animation: "scroll-left-strip 25s linear infinite" }}
        >
          {doubled.map((item, i) => (
            <React.Fragment key={i}>
              <span
                className="whitespace-nowrap text-[34px] sm:text-[44px] lg:text-[60px] text-[#333333]"
                style={{
                  fontFamily: "Garamond, serif",
                  fontWeight: 400,
                  fontStyle: "normal",
                  lineHeight: "130%",
                  letterSpacing: "-1.2px",
                  verticalAlign: "middle",
                }}
              >
                {item}
              </span>
              <img loading="lazy" decoding="async" src={starIcon} alt="" className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 object-contain shrink-0" />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}