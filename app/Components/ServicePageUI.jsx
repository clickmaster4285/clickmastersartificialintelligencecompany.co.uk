// Shared building blocks for long-form service pages (/services and its
// child service pages), so every service page has the same look.

export const WRAP = "mx-auto w-full max-w-[1280px] px-5 sm:px-8";
export const BODY_LINK =
  "font-medium text-[#AF00E8] underline decoration-[#AF00E8]/30 underline-offset-4 hover:decoration-[#AF00E8]";

export function Eyebrow({ children, dark = false }) {
  return (
    <p className={`mb-3 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] ${dark ? "text-[#e9c2ff]" : "text-[#7a1fa2]"}`}>
      <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-[#AF00E8] to-[#5EEAD4]" />
      {children}
    </p>
  );
}

export function SectionHeading({ id, eyebrow, children, dark = false, className = "" }) {
  return (
    <div className={className}>
      {eyebrow && <Eyebrow dark={dark}>{eyebrow}</Eyebrow>}
      <h2
        id={id}
        className={`font-bold text-[30px] leading-[38px] lg:text-[42px] lg:leading-[50px] ${dark ? "text-white" : "text-[#1a1a1a]"}`}
        style={{ fontFamily: "Garamond, serif" }}
      >
        {children}
      </h2>
    </div>
  );
}

/** Decorative icon in a rounded tile. `icon` is a react-icons component. */
export function IconTile({ icon: Icon, dark = false, size = "md" }) {
  if (!Icon) return null;
  const box = size === "sm" ? "h-9 w-9 rounded-lg" : "h-11 w-11 rounded-xl";
  return (
    <span
      aria-hidden="true"
      className={`flex shrink-0 items-center justify-center ring-1 ${box} ${
        dark
          ? "bg-white/10 text-[#e9c2ff] ring-white/15"
          : "bg-gradient-to-br from-[#f7effa] to-[#efe0f7] text-[#AF00E8] ring-[#AF00E8]/10"
      }`}
    >
      <Icon className={size === "sm" ? "h-4 w-4" : "h-5 w-5"} />
    </span>
  );
}
