// /about/who-we-are
// Content: ./content.ts (from the "Who We Are" content pack). Server-rendered.
import Image from "next/image";
import Link from "next/link";
import {
  RiArrowRightLine, RiArrowRightUpLine, RiBuilding2Line, RiChat3Line, RiChatSmile3Line, RiCheckLine, RiCloudLine,
  RiCodeSSlashLine, RiFileChartLine, RiFileCopyLine, RiFlowChart, RiLineChartLine, RiMagicLine, RiMailLine,
  RiNodeTree, RiPhoneLine, RiRobot2Line, RiRocket2Line,
} from "../../Components/icons";

import JsonLd from "../../Components/JsonLd";
import { IconTile, SectionHeading, WRAP } from "../../Components/ServicePageUI";
import { Linked, ServiceHero } from "../../Components/ServicePageSections";
import { CONTACT, detailPageJsonLd, detailPageMetadata } from "../../lib/site";
import {
  APPROACH, CLIENTS, COMMITMENT, CTA, EXPERTISE, HERO, IMAGES, MORE_ABOUT, PATH, PHILOSOPHY, PROBLEM, SEO,
} from "./content";

export const metadata = detailPageMetadata({ path: PATH, ...SEO });

const CRUMBS = [
  { name: "About Us", path: "/about" },
  { name: "Who We Are", path: PATH },
];

const CONTACT_HREF = "/contact#contact-form";
const SERIF = { fontFamily: "Garamond, serif" };
const P = "text-[15px] leading-relaxed text-gray-600 lg:text-base";
const ON_DARK_LINK = "font-medium text-white underline decoration-[#AF00E8] underline-offset-4 hover:text-[#e9c2ff]";

// All icons are decorative (headings carry the meaning).
const ICONS = {
  chat: RiChat3Line, copy: RiFileCopyLine, report: RiFileChartLine, flow: RiFlowChart, robot: RiRobot2Line,
  magic: RiMagicLine, chatbot: RiChatSmile3Line, node: RiNodeTree, code: RiCodeSSlashLine, cloud: RiCloudLine,
  rocket: RiRocket2Line, growth: RiLineChartLine, building: RiBuilding2Line,
};

function Photo({ image, sizes, className = "", preload = false }) {
  return (
    <div className={`relative overflow-hidden rounded-3xl ring-1 ring-black/5 ${className}`}>
      <Image src={image.src} width={image.width} height={image.height} alt={image.alt} sizes={sizes} preload={preload} className="h-full w-full object-cover" />
    </div>
  );
}

const HALF = "(min-width: 1280px) 600px, (min-width: 1024px) 48vw, 100vw";
const uk = CONTACT.phones[0];

export default function WhoWeAre() {
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
        primaryCta={{ label: "Discuss Your Project", href: CONTACT_HREF }}
        secondaryCta={{ label: "Explore Our Services", href: "/services" }}
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
        figureLabel="AI · Software engineering · Operations"
      />

      {/* ───────────── The problem we hear most ───────────── */}
      <section aria-label="What businesses tell us" className="bg-white py-16 lg:py-20">
        <div className={WRAP}>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
            <p className="text-[17px] leading-[1.8] text-gray-700 lg:text-lg">{PROBLEM.text}</p>
            <ul className="space-y-3">
              {PROBLEM.examples.map((ex) => (
                <li key={ex.title} className="flex items-start gap-4 rounded-2xl border border-gray-100 bg-[#faf9f7] p-5">
                  <IconTile icon={ICONS[ex.icon]} />
                  <span>
                    <span className="block font-semibold text-[#1a1a1a]">{ex.title}</span>
                    <span className="mt-0.5 block text-sm text-gray-600">{ex.text}</span>
                  </span>
                </li>
              ))}
              <li className="flex items-center gap-3 rounded-2xl bg-[#120a1a] p-5 text-sm font-medium text-white">
                <RiCheckLine aria-hidden="true" className="h-5 w-5 shrink-0 text-[#5EEAD4]" />
                AI built into reliable software, connected to the right data, designed around people.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ───────────── Philosophy ───────────── */}
      <section aria-labelledby="philosophy-heading" className="border-y border-[#9b1fe0]/10 bg-[#faf9f7] py-16 lg:py-24">
        <div className={WRAP}>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div className="flex flex-col gap-6">
              <Photo image={IMAGES.philosophy} sizes={HALF} className="aspect-[4/3]" />
              <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
                {PHILOSOPHY.pillars.map((p) => (
                  <li key={p} className="rounded-2xl bg-white px-4 py-3 text-center text-sm font-semibold text-[#4b1d63] ring-1 ring-[#AF00E8]/15">{p}</li>
                ))}
              </ul>
            </div>
            <div>
              <SectionHeading id="philosophy-heading" eyebrow="Our philosophy">{PHILOSOPHY.title}</SectionHeading>
              <blockquote className="mt-6 border-l-4 border-[#AF00E8] pl-5 text-xl leading-snug text-[#1a1a1a] lg:text-2xl" style={SERIF}>
                {PHILOSOPHY.lead}
              </blockquote>
              {PHILOSOPHY.paragraphs.map((p) => (
                <p key={p.slice(0, 20)} className={`mt-5 ${P}`}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── Expertise ───────────── */}
      <section aria-labelledby="expertise-heading" className="relative overflow-hidden bg-[#0d0a12] py-16 text-white lg:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-[#AF00E8]/25 blur-3xl" />
        <div className={`${WRAP} relative`}>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-16">
            <div>
              <SectionHeading id="expertise-heading" eyebrow="Our expertise" dark>{EXPERTISE.title}</SectionHeading>
              <p className="mt-5 text-[15px] leading-relaxed text-gray-300 lg:text-base">{EXPERTISE.intro}</p>
            </div>
            <Photo image={IMAGES.expertise} sizes={HALF} className="aspect-[16/10] ring-white/10" />
          </div>
          <ul className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {EXPERTISE.items.map((it, i) => (
              <li key={it.title} className={`flex flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-6 ${i === EXPERTISE.items.length - 1 ? "md:col-span-2 lg:col-span-1" : ""}`}>
                <IconTile icon={ICONS[it.icon]} dark />
                <h3 className="mt-4 text-lg font-bold">{it.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-300"><Linked value={it.text} className={ON_DARK_LINK} /></p>
              </li>
            ))}
          </ul>
          <p className="mt-10 max-w-3xl text-[15px] leading-relaxed text-gray-200 lg:text-base">{EXPERTISE.outro}</p>
        </div>
      </section>

      {/* ───────────── Business-first approach ───────────── */}
      <section aria-labelledby="approach-heading" className="bg-white py-16 lg:py-24">
        <div className={WRAP}>
          <div className="max-w-3xl">
            <SectionHeading id="approach-heading" eyebrow="How every project runs">{APPROACH.title}</SectionHeading>
            <p className={`mt-5 ${P}`}>{APPROACH.intro}</p>
          </div>
          <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {APPROACH.steps.map((s, i) => (
              <li key={s.title} className="flex flex-col rounded-2xl border border-gray-100 bg-[#faf9f7] p-6">
                <div className="flex items-center">
                  <span aria-hidden="true" className="step-num">{String(i + 1).padStart(2, "0")}</span>
                  <span aria-hidden="true" className="step-line" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-[#1a1a1a]"><span className="sr-only">{i + 1}. </span>{s.title.replace(/\.$/, "")}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ───────────── Who we work with ───────────── */}
      <section aria-labelledby="clients-heading" className="border-y border-[#9b1fe0]/10 bg-[#faf9f7] py-16 lg:py-24">
        <div className={WRAP}>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <SectionHeading id="clients-heading" eyebrow="Every stage of growth">{CLIENTS.title}</SectionHeading>
              <p className={`mt-5 ${P}`}>{CLIENTS.intro}</p>
              <ul className="mt-8 space-y-3">
                {CLIENTS.stages.map((s) => (
                  <li key={s.title} className="flex gap-4 rounded-2xl bg-white p-5 ring-1 ring-gray-100">
                    <IconTile icon={ICONS[s.icon]} />
                    <div>
                      <h3 className="font-bold text-[#1a1a1a]">{s.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-gray-600">{s.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <Photo image={IMAGES.clients} sizes={HALF} className="aspect-[4/3]" />
          </div>
          <p className="mt-10 max-w-4xl text-[15px] font-medium leading-relaxed text-[#4b1d63] lg:text-base">{CLIENTS.outro}</p>
        </div>
      </section>

      {/* ───────────── Commitment ───────────── */}
      <section aria-labelledby="commitment-heading" className="bg-white py-16 lg:py-24">
        <div className={WRAP}>
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <div>
              <SectionHeading id="commitment-heading" eyebrow="What you can expect">{COMMITMENT.title}</SectionHeading>
              <p className={`mt-5 ${P}`}>{COMMITMENT.text}</p>
            </div>
            <ul className="space-y-3 self-center">
              {COMMITMENT.pairs.map(([a, b]) => (
                <li key={a} className="flex flex-wrap items-baseline gap-x-3 rounded-2xl border border-gray-100 px-6 py-5">
                  <span className="text-xl font-bold text-[#1a1a1a]" style={SERIF}>{a}</span>
                  <span className="text-sm text-gray-500">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ───────────── CTA (pack transition line) ───────────── */}
      <section aria-labelledby="cta-heading" className="bg-white px-5 pb-16 sm:px-8 lg:pb-24">
        <div className="relative mx-auto max-w-[1280px] overflow-hidden rounded-[32px] bg-gradient-to-br from-[#2a0b3a] via-[#1a0d24] to-[#0d0a12] px-6 py-14 text-white sm:px-12 lg:px-16 lg:py-20">
          <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#AF00E8]/40 blur-3xl" />
          <div aria-hidden="true" className="pointer-events-none absolute -bottom-24 left-10 h-64 w-64 rounded-full bg-[#5EEAD4]/15 blur-3xl" />
          <div className="relative grid gap-10 lg:grid-cols-[1.3fr_1fr]">
            <div>
              <h2 id="cta-heading" className="text-[30px] font-bold leading-[38px] lg:text-[42px] lg:leading-[50px]" style={SERIF}>
                {CTA.title} <span className="font-normal italic text-[#e9c2ff]">{CTA.titleAccent}</span>
              </h2>
              <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-gray-300 lg:text-base">
                Explore how we can help turn your next technology idea into a practical solution:{" "}
                <Link href="/services" className={ON_DARK_LINK}>see our software and AI development services</Link> or{" "}
                <Link href="/contact" className={ON_DARK_LINK}>discuss your project with our team</Link>.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href={CONTACT_HREF} className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-[#AF00E8] hover:bg-[#f7effa]">
                  Discuss Your Project <RiArrowRightUpLine aria-hidden="true" className="h-4 w-4" />
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
