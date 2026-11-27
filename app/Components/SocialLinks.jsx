// Brand icons linking to ClickMasters' social and directory profiles
// (config: SOCIAL_LINKS in lib/site.ts). Each opens in a new tab.
import { SOCIAL_LINKS } from "../lib/site";

/** layout: "grid" (two columns, desktop hero) or "row" (wrapping row, mobile). */
export default function SocialLinks({ layout = "row", className = "" }) {
  return (
    <ul
      aria-label="ClickMasters on social media and review sites"
      className={`${layout === "grid" ? "grid grid-cols-2 gap-x-4 gap-y-3" : "flex flex-wrap justify-center gap-3"} ${className}`}
    >
      {SOCIAL_LINKS.map((s) => (
        <li key={s.name}>
          <a
            href={s.url}
            target="_blank"
            rel="me noopener noreferrer"
            title={s.name}
            aria-label={`ClickMasters on ${s.name} (opens in a new tab)`}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-black/5 transition-transform hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A000DF]"
          >
            <img src={s.icon} alt={`${s.name} logo`} width={22} height={22} loading="lazy" decoding="async" className="h-[22px] w-[22px] object-contain" />
          </a>
        </li>
      ))}
    </ul>
  );
}
