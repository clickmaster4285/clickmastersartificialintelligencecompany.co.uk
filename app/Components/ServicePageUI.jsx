// Shared building blocks for long-form service pages (/services and its
// child service pages), so every service page has the same look.

export const WRAP = "mx-auto w-full max-w-[1280px] px-5 sm:px-8";
export const BODY_LINK =
  "font-medium text-[#AF00E8] underline decoration-[#AF00E8]/30 underline-offset-4 hover:decoration-[#AF00E8]";

export function Eyebrow({ children, dark = false }) {
  return (
    <p className={dark ? "eyebrow eyebrow--dark" : "eyebrow"}>
      <span aria-hidden="true" className="eyebrow-dot" />
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
        className={dark ? "section-h2 section-h2--dark" : "section-h2"}
      >
        {children}
      </h2>
    </div>
  );
}

/** Decorative icon in a rounded tile. `icon` is a react-icons component. */
export function IconTile({ icon: Icon, dark = false, size = "md" }) {
  if (!Icon) return null;
  // Styles: .icon-tile in globals.css (repeated 60-140 times per page).
  return (
    <span aria-hidden="true" className={`icon-tile${size === "sm" ? " icon-tile--sm" : ""}${dark ? " icon-tile--dark" : ""}`}>
      <Icon className={size === "sm" ? "h-4 w-4" : "h-5 w-5"} />
    </span>
  );
}
