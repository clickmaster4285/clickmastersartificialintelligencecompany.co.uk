"use client";
// Section navigation for /about: a sticky sidebar on desktop and a sticky,
// horizontally scrolling bar on smaller screens. Plain anchor links, so it
// works without JavaScript; the script only highlights the current section.
import { useEffect, useState } from "react";

export default function AboutNav({ sections, variant = "sidebar" }) {
  const [active, setActive] = useState(sections[0]?.id);

  useEffect(() => {
    const els = sections.map((s) => document.getElementById(s.id)).filter(Boolean);
    if (!els.length || typeof IntersectionObserver === "undefined") return;
    const visible = new Map();
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) visible.set(e.target.id, e.isIntersecting ? e.boundingClientRect.top : null);
        const first = sections.find((s) => visible.get(s.id) != null);
        if (first) setActive(first.id);
      },
      { rootMargin: "-130px 0px -55% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [sections]);

  if (variant === "bar") {
    return (
      <nav aria-label="On this page" className="sticky top-[72px] z-30 -mx-5 border-b border-gray-200 bg-white/95 backdrop-blur sm:-mx-8 lg:hidden">
        <ol className="flex gap-2 overflow-x-auto px-5 py-3 sm:px-8 [scrollbar-width:none]">
          {sections.map((s) => (
            <li key={s.id} className="shrink-0">
              <a
                href={`#${s.id}`}
                aria-current={active === s.id ? "true" : undefined}
                className={`block rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                  active === s.id ? "bg-[#AF00E8] text-white" : "bg-[#f4eefa] text-[#4b1d63] hover:bg-[#ead9f7]"
                }`}
              >
                {s.label}
              </a>
            </li>
          ))}
        </ol>
      </nav>
    );
  }

  return (
    <nav aria-label="On this page" className="sticky top-[112px]">
      <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.18em] text-gray-500">On this page</p>
      <ol className="relative space-y-0.5 border-l border-gray-200">
        {sections.map((s, i) => {
          const on = active === s.id;
          return (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                aria-current={on ? "true" : undefined}
                className={`-ml-px flex items-baseline gap-3 border-l-2 py-2 pl-4 pr-2 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#AF00E8] ${
                  on ? "border-[#AF00E8] font-semibold text-[#1a1a1a]" : "border-transparent text-gray-500 hover:border-gray-300 hover:text-[#1a1a1a]"
                }`}
              >
                <span className={`font-mono text-[11px] ${on ? "text-[#AF00E8]" : "text-gray-400"}`}>{String(i + 1).padStart(2, "0")}</span>
                {s.label}
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
