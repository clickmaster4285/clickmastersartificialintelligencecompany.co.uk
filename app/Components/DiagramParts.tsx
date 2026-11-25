/*
 * Building blocks for responsive HTML diagrams on service pages: labelled
 * nodes, arrows that point down on mobile and right on desktop, and a generic
 * left-to-right flow. Text stays crawlable and reflows on small screens.
 */
import type { ReactNode } from "react";
import { RiArrowDownLine, RiArrowRightLine } from "react-icons/ri";

export type Tone = "plain" | "purple" | "teal" | "sun" | "dashed";

const TONE: Record<Tone, string> = {
  plain: "bg-white ring-1 ring-[#D9CDE3]",
  purple: "bg-[#F7EFFA] ring-[1.5px] ring-[#AF00E8]",
  teal: "bg-[#E3F7F5] ring-[1.5px] ring-[#0F9F94]",
  sun: "bg-[#FDF4D7] ring-[1.5px] ring-[#E3A600]",
  dashed: "bg-[#F4F1F6] border-[1.5px] border-dashed border-[#8E8496]",
};
const TITLE: Record<Tone, string> = {
  plain: "text-[#1a1a1a]",
  purple: "text-[#7a00a8]",
  teal: "text-[#1a1a1a]",
  sun: "text-[#1a1a1a]",
  dashed: "text-[#1a1a1a]",
};

export const CAPS = "font-mono text-[11px] uppercase tracking-[0.08em] text-[#6B6275]";

export function Node({ tone, title, children, className = "" }: { tone: Tone; title: string; children?: ReactNode; className?: string }) {
  return (
    <div className={`rounded-xl px-4 py-3.5 ${TONE[tone]} ${className}`}>
      <p className={`text-[15px] font-semibold leading-snug ${TITLE[tone]}`}>{title}</p>
      {children}
    </div>
  );
}

/** Arrow pointing down on mobile and right from the lg breakpoint. */
export function Connector({ className = "" }: { className?: string }) {
  return (
    <span aria-hidden="true" className={`flex shrink-0 items-center justify-center text-[#AF00E8] ${className}`}>
      <RiArrowDownLine className="h-5 w-5 lg:hidden" />
      <RiArrowRightLine className="hidden h-5 w-5 lg:block" />
    </span>
  );
}

/** A caps list inside a node. */
export function NodeList({ items }: { items: readonly string[] }) {
  return (
    <ul className="mt-3 space-y-1.5">
      {items.map((x) => <li key={x} className={CAPS}>{x}</li>)}
    </ul>
  );
}

export type FlowStep = { title: string; sub?: string; tone: Tone };

/** Steps in a row on desktop, stacked on mobile, with arrows between. */
export function Flow({ steps, minHeight = "" }: { steps: readonly FlowStep[]; minHeight?: string }) {
  return (
    <ol className="flex flex-col items-stretch gap-1 lg:flex-row lg:items-center">
      {steps.map((s, i) => (
        <li key={s.title} className="flex flex-col items-stretch gap-1 lg:flex-1 lg:flex-row lg:items-center">
          <Node tone={s.tone} title={s.title} className={`lg:flex-1 ${minHeight}`}>
            {s.sub && <p className={`mt-1 ${CAPS}`}>{s.sub}</p>}
          </Node>
          {i < steps.length - 1 && <Connector className="py-0.5 lg:px-0.5 lg:py-0" />}
        </li>
      ))}
    </ol>
  );
}
