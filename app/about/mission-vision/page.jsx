// /about/mission-vision
// Content: ./content.ts (from the "Mission & Vision" content pack). Server-rendered.
import Image from "next/image";
import Link from "next/link";
import {
  RiArrowRightLine, RiArrowRightUpLine, RiBrainLine, RiDoubleQuotesL, RiFocus3Line, RiLineChartLine, RiMailLine,
  RiNodeTree, RiPhoneLine, RiShieldCheckLine, RiTeamLine,
} from "../../Components/icons";

import JsonLd from "../../Components/JsonLd";
import { IconTile, SectionHeading, WRAP, BODY_LINK } from "../../Components/ServicePageUI";
import { ServiceHero } from "../../Components/ServicePageSections";
import { CONTACT, detailPageJsonLd, detailPageMetadata } from "../../lib/site";
import { CTA, HERO, IMAGES, MISSION, PATH, SEO, VISION } from "./content";

export const metadata = detailPageMetadata({ path: PATH, ...SEO });

const CRUMBS = [
  { name: "About Us", path: "/about" },
  { name: "Mission & Vision", path: PATH },
];

const CONTACT_HREF = "/contact#contact-form";
const SERIF = { fontFamily: "Garamond, serif" };
const HALF = "(min-width: 1280px) 600px, (min-width: 1024px) 48vw, 100vw";
const ON_DARK_LINK = "font-medium text-white underline decoration-[#AF00E8] underline-offset-4 hover:text-[#e9c2ff]";
const uk = CONTACT.phones[0];

const ICONS = {
  target: RiFocus3Line, users: RiTeamLine, shield: RiShieldCheckLine, brain: RiBrainLine, network: RiNodeTree,
  growth: RiLineChartLine,
};

const MORE_ABOUT = [
  { label: "Who We Are", href: "/about/who-we-are" },
  { label: "What We Do", href: "/about#what-we-do" },
  { label: "Industries We Serve", href: "/about#industries" },
  { label: "Our Approach", href: "/about#approach" },
  { label: "Why Choose ClickMasters", href: "/about#why-clickmasters" },
];

/** A paragraph that may contain several [[n]] link markers. */
function Para({ value, linkClass }) {
  if (typeof value === "string") return value;
  return value.text.split(/(\[\[\d+\]\])/).map((part, i) => {
    const m = part.match(/^\[\[(\d+)\]\]$/);
    if (!m) return part;
    const l = value.links[Number(m[1])];
    return <Link key={i} href={l.href} className={linkClass}>{l.anchor}</Link>;
  });
}

function Photo({ image, sizes, className = "" }) {
  return (
    <div className={`relative overflow-hidden rounded-3xl ring-1 ring-black/5 ${className}`}>
      <Image src={image.src} width={image.width} height={image.height} alt={image.alt} sizes={sizes} className="h-full w-full object-cover" />
    </div>
  );
}

/** One statement (mission or vision) as a full section. */
function Statement({ id, data, image, dark = false, reverse = false }) {
  const text = dark ? "text-gray-300" : "text-gray-600";
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={`relative scroll-mt-20 overflow-hidden py-16 lg:scroll-mt-24 lg:py-24 ${dark ? "bg-[#0d0a12] text-white" : "bg-white"}`}
    >
      {dark && <div aria-hidden="true" className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-[#AF00E8]/25 blur-3xl" />}
      <div className={`${WRAP} relative`}>
        <div className={`grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16 ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
          <div>
            <SectionHeading id={`${id}-heading`} eyebrow={data.label} dark={dark}>{data.title}</SectionHeading>
            <p className={`mt-3 text-xs font-semibold uppercase tracking-[0.14em] ${dark ? "text-[#5EEAD4]" : "text-[#0F9F94]"}`}>{data.tense}</p>
            <figure className={`relative mt-8 rounded-2xl p-6 sm:p-7 ${dark ? "bg-white/[0.06] ring-1 ring-white/10" : "bg-[#faf5fd] ring-1 ring-[#AF00E8]/15"}`}>
              <RiDoubleQuotesL aria-hidden="true" className={`h-8 w-8 ${dark ? "text-[#e9c2ff]" : "text-[#AF00E8]"}`} />
              <blockquote className={`mt-2 text-2xl leading-snug lg:text-[28px] ${dark ? "text-white" : "text-[#1a1a1a]"}`} style={SERIF}>
                {data.highlight}
              </blockquote>
            </figure>
            <div className="mt-8 space-y-5">
              {data.paragraphs.map((p, i) => (
                <p key={i} className={`text-[15px] leading-[1.8] lg:text-base ${i === 0 ? (dark ? "text-gray-100" : "text-gray-800") : text}`}>
                  <Para value={p} linkClass={dark ? ON_DARK_LINK : BODY_LINK} />
                </p>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-5 lg:sticky lg:top-32">
            <Photo image={image} sizes={HALF} className={`aspect-[4/3] ${dark ? "ring-white/10" : ""}`} />
            <ul className="grid gap-3">
              {data.themes.map((t) => (
                <li key={t.title} className={`flex gap-4 rounded-2xl p-5 ${dark ? "border border-white/10 bg-white/[0.04]" : "border border-gray-100 bg-[#faf9f7]"}`}>
                  <IconTile icon={ICONS[t.icon]} dark={dark} />
                  <div>
                    <h3 className={`font-bold ${dark ? "text-white" : "text-[#1a1a1a]"}`}>{t.title}</h3>
                    <p className={`mt-1 text-sm leading-relaxed ${text}`}>{t.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function MissionVision() {
  return (
    <>
      <JsonLd
        data={detailPageJsonLd({
          path: PATH,
          name: `${SEO.title} | ClickMasters`,
          description: SEO.description,
          crumbs: CRUMBS,
        })}
      />

      <ServiceHero
        crumbs={CRUMBS.map((c) => ({ name: c.name, href: c.path }))}
        eyebrow={HERO.eyebrow}
        title={HERO.title}
        titleAccent={HERO.titleAccent}
        lead={HERO.lead}
        primaryCta={{ label: "Read Our Mission", href: "#mission" }}
        secondaryCta={{ label: "Read Our Vision", href: "#vision" }}
        figureLabel="Mission today · Vision tomorrow"
        figure={
          <Image
            src={IMAGES.hero.src}
            width={IMAGES.hero.width}
            height={IMAGES.hero.height}
            alt={IMAGES.hero.alt}
            sizes="(min-width: 1024px) 560px, 100vw"
            preload
            className="h-auto w-full rounded-2xl"
          />
        }
      />

      {/* Mission vs vision at a glance */}
      <section aria-label="Mission and vision at a glance" className="border-b border-gray-100 bg-white py-10">
        <div className={`${WRAP} grid gap-4 md:grid-cols-2`}>
          {[[MISSION, "#mission", "bg-[#AF00E8] text-white", "text-white/80"], [VISION, "#vision", "bg-[#120a1a] text-white", "text-[#5EEAD4]"]].map(([d, href, cls, sub]) => (
            <a key={href} href={href} className={`group flex items-center justify-between gap-6 rounded-2xl p-6 ${cls} focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#AF00E8]`}>
              <span>
                <span className={`block text-[11px] font-bold uppercase tracking-[0.18em] ${sub}`}>{d.label}</span>
                <span className="mt-2 block text-xl leading-snug" style={SERIF}>&ldquo;{d.highlight}&rdquo;</span>
              </span>
              <RiArrowRightLine aria-hidden="true" className="h-5 w-5 shrink-0 rotate-90 transition-transform group-hover:translate-y-0.5" />
            </a>
          ))}
        </div>
      </section>

      <Statement id="mission" data={MISSION} image={IMAGES.mission} />
      <Statement id="vision" data={VISION} image={IMAGES.vision} dark reverse />

      {/* CTA */}
      <section aria-labelledby="cta-heading" className="bg-white px-5 py-16 sm:px-8 lg:py-24">
        <div className="relative mx-auto max-w-[1280px] overflow-hidden rounded-[32px] bg-gradient-to-br from-[#2a0b3a] via-[#1a0d24] to-[#0d0a12] px-6 py-14 text-white sm:px-12 lg:px-16 lg:py-20">
          <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#AF00E8]/40 blur-3xl" />
          <div className="relative grid gap-10 lg:grid-cols-[1.3fr_1fr]">
            <div>
              <h2 id="cta-heading" className="text-[30px] font-bold leading-[38px] lg:text-[42px] lg:leading-[50px]" style={SERIF}>
                {CTA.title} <span className="font-normal italic text-[#e9c2ff]">{CTA.titleAccent}</span>
              </h2>
              <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-gray-300 lg:text-base">{CTA.body}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href={CONTACT_HREF} className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-[#AF00E8] hover:bg-[#f7effa]">
                  Discuss Your Project <RiArrowRightUpLine aria-hidden="true" className="h-4 w-4" />
                </Link>
                <Link href="/services" className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/10">
                  Explore Our Service
                </Link>
              </div>
            </div>
            <div className="space-y-5">
              <nav aria-label="More about ClickMasters" className="rounded-2xl border border-white/10 bg-white/[0.06] p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">More about us</p>
                <ul className="mt-3 space-y-1">
                  {MORE_ABOUT.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="group flex items-center justify-between rounded-lg py-1.5 text-sm text-gray-200 hover:text-white">
                        {l.label}
                        <RiArrowRightLine aria-hidden="true" className="h-4 w-4 text-[#5EEAD4] transition-transform group-hover:translate-x-0.5" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <address className="space-y-3 rounded-2xl border border-white/10 bg-white/[0.06] p-6 text-sm not-italic">
                <a href={`tel:${uk.e164}`} className="flex items-center gap-3 hover:text-[#e9c2ff]">
                  <RiPhoneLine aria-hidden="true" className="h-5 w-5 text-[#5EEAD4]" />UK {uk.display}
                </a>
                <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-3 break-all hover:text-[#e9c2ff]">
                  <RiMailLine aria-hidden="true" className="h-5 w-5 shrink-0 text-[#5EEAD4]" />{CONTACT.email}
                </a>
              </address>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
