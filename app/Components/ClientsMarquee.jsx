import React from "react";

// Capability ticker. Previously listed placeholder "client" names
// (TechCorp, RetailHub, ...) that are not verified clients.
const row1 = ["AI Automation", "Machine Learning", "Custom Software", "Web Apps", "Mobile Apps", "ERP & CRM", "Cloud & DevOps"];
const row2 = ["Healthcare", "Finance", "E-Commerce", "EdTech", "Real Estate", "Logistics", "Manufacturing"];

function MarqueeRow({ items, direction = "left", speed = 30 }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden w-full -rotate-[2.03deg]" aria-hidden="true">
      <div
        className="flex items-center gap-8 sm:gap-10 lg:gap-12 w-max"
        style={{
          animation: `${direction === "left" ? "scroll-left" : "scroll-right"} ${speed}s linear infinite`,
        }}
      >
        {doubled.map((item, i) => (
          <React.Fragment key={i}>
            <span className="font-['Garamond'] font-light text-[30px] leading-[42px] sm:text-[40px] sm:leading-[56px] lg:text-[50px] lg:leading-[68px] tracking-[-1.2px] text-white whitespace-nowrap">
              {item}
            </span>
            <span className="text-white/50 text-2xl sm:text-3xl lg:text-4xl shrink-0">✦</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default function ClientsMarquee() {
  return (
    <section id="capabilities" aria-label="Capabilities and sectors" className="relative w-full max-w-[1728px] mx-auto bg-[#0a0a0a] overflow-hidden py-14 sm:py-20 lg:py-24 flex flex-col gap-8 sm:gap-9 lg:gap-10">
      <style>{`
        @keyframes scroll-left {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
      `}</style>
      <MarqueeRow items={row1} direction="left" speed={35} />
      <MarqueeRow items={row2} direction="right" speed={35} />
    </section>
  );
}