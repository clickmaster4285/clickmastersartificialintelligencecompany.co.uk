// /about: three-column About Us page (section nav | content | brand panel).
// Copy lives in ./content.ts. Server-rendered; only AboutNav is a client
// component (it highlights the current section).
import Image from "next/image";
import Link from "next/link";
import {
  RiArrowRightLine, RiBankLine, RiBrainLine, RiBriefcase4Line, RiChat3Line, RiCheckLine, RiCloudLine,
  RiCodeSSlashLine, RiDatabase2Line, RiDownload2Line, RiFlowChart, RiFocus3Line, RiGraduationCapLine, RiHeartPulseLine,
  RiHome4Line, RiLightbulbLine, RiMagicLine, RiNodeTree, RiPhoneLine, RiRobot2Line, RiRocket2Line,
  RiSearchLine, RiSettings3Line, RiShieldCheckLine, RiShoppingCart2Line, RiSmartphoneLine, RiSparkling2Line,
  RiStackLine, RiTeamLine, RiTruckLine, RiWindow2Line,
} from "../Components/icons";

import JsonLd from "../Components/JsonLd";
import { IconTile, WRAP } from "../Components/ServicePageUI";
import { jsonLdFor, metadataFor } from "../lib/seo-pages";
import { CONTACT, ORG_FACTS, SOCIAL_PROFILES, addressLine } from "../lib/site";
import { REVIEWER } from "../config/editorial";
import AboutNav from "./AboutNav";
import { MISSION as MV_MISSION, MISSION_SUMMARY, VISION as MV_VISION, VISION_SUMMARY } from "./mission-vision/content";
import {
  APPROACH, CTA, EXPERTISE, HERO, INDUSTRIES, INDUSTRIES_NOTE, PROFILE_PDF, SECTIONS, SEO, SERVICE_GROUPS, WHO, WHY,
} from "./content";

const base = metadataFor("about");
export const metadata = {
  ...base,
  title: { absolute: SEO.title },
  description: SEO.description,
  openGraph: { ...base.openGraph, title: SEO.title, description: SEO.description },
  twitter: { ...base.twitter, title: SEO.title, description: SEO.description },
};

const ICONS = {
  sparkle: RiSparkling2Line, flow: RiFlowChart, robot: RiRobot2Line, magic: RiMagicLine, node: RiNodeTree,
  search: RiSearchLine, brain: RiBrainLine, bulb: RiLightbulbLine, code: RiCodeSSlashLine, web: RiWindow2Line,
  mobile: RiSmartphoneLine, rocket: RiRocket2Line, stack: RiStackLine, cloud: RiCloudLine, database: RiDatabase2Line,
  target: RiFocus3Line, health: RiHeartPulseLine, bank: RiBankLine, cart: RiShoppingCart2Line,
  education: RiGraduationCapLine, factory: RiSettings3Line, truck: RiTruckLine, briefcase: RiBriefcase4Line,
  home: RiHome4Line, chat: RiChat3Line, users: RiTeamLine, shield: RiShieldCheckLine,
};

const CONTACT_HREF = "/contact#contact-form";
const SERIF = { fontFamily: "Garamond, serif" };
const H2 = "text-[30px] font-bold leading-[1.15] text-[#1a1a1a] sm:text-[36px]";
const P = "text-[15px] leading-[1.75] text-gray-600 sm:text-base";
const SECTION = "scroll-mt-32 border-b border-gray-100 py-14 first:pt-2 last:border-0 lg:py-16";
const LINK = "font-medium text-[#AF00E8] underline decoration-[#AF00E8]/30 underline-offset-4 hover:decoration-[#AF00E8]";

function Kicker({ n, children }) {
  return (
    <p className="mb-4 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-[#AF00E8]">
      <span className="font-mono">{n}</span>
      <span aria-hidden="true" className="h-px w-8 bg-[#AF00E8]/40" />
      {children}
    </p>
  );
}

/** Right-column brand panel (CSS/SVG only, no external logos). */
function BrandPanel({ gid }) {
  return (
    <aside aria-label="ClickMasters at a glance" className={`relative overflow-hidden rounded-[28px] bg-[#120a1a] p-7 text-white shadow-[0_30px_80px_-40px_rgba(60,0,90,0.7)] xl:p-8`}>
      <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#AF00E8]/40 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-[#0F9F94]/30 blur-3xl" />
      <div className="relative">
        <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#e9c2ff]">ClickMasters</p>
        <p className="mt-1 text-xs text-gray-400">Artificial Intelligence Company</p>

        {/* Neural / circuit composition */}
        <svg viewBox="0 0 240 170" role="presentation" aria-hidden="true" className="my-7 w-full">
          <defs>
            <linearGradient id={gid} x1="0" x2="1" y1="0" y2="1">
              <stop offset="0" stopColor="#AF00E8" />
              <stop offset="1" stopColor="#5EEAD4" />
            </linearGradient>
          </defs>
          <rect x="1" y="1" width="238" height="168" rx="18" fill="none" stroke="rgba(255,255,255,0.08)" />
          {[[40, 40], [40, 85], [40, 130]].flatMap(([x1, y1]) =>
            [[120, 55], [120, 115]].map(([x2, y2]) => (
              <line key={`a${y1}${y2}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke={`url(#${gid})`} strokeOpacity="0.55" strokeWidth="1.2" />
            ))
          )}
          {[[120, 55], [120, 115]].map(([x1, y1]) => (
            <line key={`b${y1}`} x1={x1} y1={y1} x2="200" y2="85" stroke={`url(#${gid})`} strokeOpacity="0.7" strokeWidth="1.4" />
          ))}
          {[[40, 40], [40, 85], [40, 130]].map(([x, y]) => <circle key={`i${y}`} cx={x} cy={y} r="7" fill="#1e1229" stroke="#AF00E8" strokeWidth="2" />)}
          {[[120, 55], [120, 115]].map(([x, y]) => <circle key={`h${y}`} cx={x} cy={y} r="9" fill="#1e1229" stroke="#e9c2ff" strokeWidth="2" />)}
          <circle cx="200" cy="85" r="15" fill={`url(#${gid})`} />
          <path d="M193 85 l5 5 l9 -10" fill="none" stroke="#120a1a" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
          <text x="40" y="160" textAnchor="middle" fontSize="8" fill="#9ca3af" letterSpacing="1">DATA</text>
          <text x="120" y="160" textAnchor="middle" fontSize="8" fill="#9ca3af" letterSpacing="1">INTELLIGENCE</text>
          <text x="200" y="160" textAnchor="middle" fontSize="8" fill="#9ca3af" letterSpacing="1">OUTCOME</text>
        </svg>

        <p className="text-[26px] leading-[1.15] text-white" style={SERIF}>
          Turning intelligent ideas into <em className="text-[#e9c2ff]">practical digital solutions.</em>
        </p>
        <ul className="mt-6 space-y-2.5 text-sm text-gray-300">
          {["AI, automation and custom software", "Built around your data and processes", "Honest advice from the first call"].map((t) => (
            <li key={t} className="flex gap-2.5"><RiCheckLine aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[#5EEAD4]" />{t}</li>
          ))}
        </ul>
        <Link href={CONTACT_HREF} className="mt-7 flex items-center justify-center gap-2 rounded-xl bg-[#AF00E8] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#9600c7] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
          Discuss Your Project <RiArrowRightLine aria-hidden="true" className="h-4 w-4" />
        </Link>
        <a
          href={PROFILE_PDF.href}
          download={PROFILE_PDF.fileName}
          type="application/pdf"
          className="mt-3 flex items-center justify-center gap-2 rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-white/50 hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          <RiDownload2Line aria-hidden="true" className="h-4 w-4" /> Company Profile (PDF)
        </a>
        <a href={`tel:${CONTACT.phones[0].e164}`} className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-300 hover:text-white">
          <RiPhoneLine aria-hidden="true" className="h-4 w-4" /> {CONTACT.phones[0].display}
        </a>
      </div>
    </aside>
  );
}

export default function About() {
  const hasFacts = ORG_FACTS.legalName || addressLine() || ORG_FACTS.foundingDate || SOCIAL_PROFILES.length > 0;
  return (
    <>
      <JsonLd data={jsonLdFor("about")} />

      {/* ───────────── Hero ───────────── */}
      <section className="relative overflow-hidden border-b border-gray-100 bg-[#faf9f7]">
        <div aria-hidden="true" className="pointer-events-none absolute -right-40 -top-40 h-[480px] w-[480px] rounded-full bg-[#AF00E8]/10 blur-3xl" />
        <div className={`${WRAP} relative grid gap-10 py-14 lg:grid-cols-[1.25fr_0.75fr] lg:items-center lg:py-20`}>
          <div>
            <nav aria-label="Breadcrumb" className="text-xs text-gray-500">
              <ol className="flex gap-2">
                <li><Link href="/" className="hover:text-[#AF00E8]">Home</Link></li>
                <li aria-hidden="true">/</li>
                <li aria-current="page" className="text-gray-700">About Us</li>
              </ol>
            </nav>
            <p className="mt-6 inline-flex rounded-full border border-[#AF00E8]/20 bg-white px-3 py-1 text-[11px] font-semibold text-[#7a00b0]">{HERO.eyebrow}</p>
            <h1 className="mt-5 text-[38px] font-bold leading-[1.08] text-[#1a1a1a] sm:text-[52px]" style={SERIF}>
              {HERO.title} <em className="font-normal text-[#AF00E8]">{HERO.titleAccent}</em>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">{HERO.lead}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={CONTACT_HREF} className="inline-flex items-center gap-2 rounded-xl bg-[#AF00E8] px-6 py-3 text-sm font-semibold text-white hover:bg-[#9600c7]">
                Discuss Your Project <RiArrowRightLine aria-hidden="true" className="h-4 w-4" />
              </Link>
              <Link href="/services" className="inline-flex items-center rounded-xl border border-[#AF00E8]/30 bg-white px-6 py-3 text-sm font-semibold text-[#7a00b0] hover:border-[#AF00E8]">
                Explore Our Services
              </Link>
            </div>
            <a href={PROFILE_PDF.href} download={PROFILE_PDF.fileName} type="application/pdf" className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-gray-700 hover:text-[#AF00E8]">
              <RiDownload2Line aria-hidden="true" className="h-4 w-4 text-[#AF00E8]" />
              {PROFILE_PDF.label}
            </a>
          </div>
          <div className="relative mx-auto w-full max-w-md rounded-[28px] bg-white p-6 shadow-[0_30px_80px_-40px_rgba(60,0,90,0.45)] ring-1 ring-[#AF00E8]/10">
            <Image
              src="/assets/About/image0.webp"
              alt="Purple wireframe illustration of interlocking geometric cubes"
              width={600}
              height={400}
              preload
              sizes="(min-width: 1024px) 448px, 100vw"
              className="h-auto w-full"
            />
          </div>
        </div>
      </section>

      {/* ───────────── Three columns ───────────── */}
      <div className="bg-white">
        <div className={`${WRAP} grid gap-10 pb-16 lg:grid-cols-[200px_minmax(0,1fr)] lg:gap-12 lg:pt-14 xl:grid-cols-[210px_minmax(0,1fr)_300px]`}>
          <div className="hidden lg:block">
            <AboutNav sections={SECTIONS} />
          </div>

          <div className="min-w-0">
            <AboutNav sections={SECTIONS} variant="bar" />

            <article className="pt-8 lg:pt-0">
              {/* A. Who we are */}
              <section id="who-we-are" aria-labelledby="who-heading" className={SECTION}>
                <Kicker n="01">Who we are</Kicker>
                <h2 id="who-heading" className={H2} style={SERIF}>An AI and software company built around real business problems</h2>
                <div className="mt-6 space-y-5">
                  {WHO.paragraphs.map((p, i) => (
                    <p key={i} className={i === 0 ? "text-[17px] leading-[1.75] text-gray-700" : P}>{p}</p>
                  ))}
                </div>
                <p className={`mt-5 ${P}`}>
                  If you are deciding where AI fits, our <Link href="/services/ai-development" className={LINK}>AI development services</Link> start
                  with exactly that question; if the need is a system built around your workflows, see our{" "}
                  <Link href="/services/custom-software-development" className={LINK}>custom software development</Link>.
                </p>
                <ul className="mt-8 grid gap-3 sm:grid-cols-3">
                  {WHO.points.map((t) => (
                    <li key={t} className="flex gap-2.5 rounded-2xl bg-[#faf5fd] p-4 text-sm font-medium text-[#1a1a1a] ring-1 ring-[#AF00E8]/10">
                      <RiCheckLine aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[#AF00E8]" />{t}
                    </li>
                  ))}
                </ul>
                <Link href="/about/who-we-are" className="group mt-6 inline-flex items-center gap-2 rounded-xl border border-[#AF00E8]/30 px-5 py-3 text-sm font-semibold text-[#7a00b0] hover:border-[#AF00E8] hover:bg-[#faf5fd]">
                  Read more about who we are
                  <RiArrowRightLine aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </section>

              {/* B. Mission & vision */}
              <section id="mission-vision" aria-labelledby="mission-heading" className={SECTION}>
                <Kicker n="02">Mission & vision</Kicker>
                <h2 id="mission-heading" className={H2} style={SERIF}>Why we exist, and where we are heading</h2>
                {/* Card copy: first sentence + highlight of each statement (full text on /about/mission-vision). */}
                <div className="mt-8 grid gap-5 md:grid-cols-2">
                  <div className="relative flex flex-col overflow-hidden rounded-3xl bg-[#AF00E8] p-7 text-white">
                    <div aria-hidden="true" className="absolute -right-10 -top-10 h-40 w-40 rounded-full border-[18px] border-white/10" />
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/80">Our mission</p>
                    <h3 className="relative mt-3 text-[22px] font-bold leading-snug" style={SERIF}>{MV_MISSION.title}</h3>
                    <p className="relative mt-3 flex-1 text-[15px] leading-relaxed text-white/90">{MISSION_SUMMARY}</p>
                    <p className="relative mt-5 border-t border-white/20 pt-4 text-lg italic leading-snug" style={SERIF}>&ldquo;{MV_MISSION.highlight}&rdquo;</p>
                  </div>
                  <div className="relative flex flex-col overflow-hidden rounded-3xl bg-[#f1fbf9] p-7 ring-1 ring-[#0F9F94]/20">
                    <div aria-hidden="true" className="absolute -bottom-12 -right-12 h-40 w-40 rounded-full border-[18px] border-[#0F9F94]/10" />
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0F6B5C]">Our vision</p>
                    <h3 className="relative mt-3 text-[22px] font-bold leading-snug text-[#1a1a1a]" style={SERIF}>{MV_VISION.title}</h3>
                    <p className="relative mt-3 flex-1 text-[15px] leading-relaxed text-gray-700">{VISION_SUMMARY}</p>
                    <p className="relative mt-5 border-t border-[#0F9F94]/20 pt-4 text-lg italic leading-snug text-[#0F6B5C]" style={SERIF}>&ldquo;{MV_VISION.highlight}&rdquo;</p>
                  </div>
                </div>
                <Link href="/about/mission-vision" className="group mt-6 inline-flex items-center gap-2 rounded-xl border border-[#AF00E8]/30 px-5 py-3 text-sm font-semibold text-[#7a00b0] hover:border-[#AF00E8] hover:bg-[#faf5fd]">
                  Read our full mission and vision
                  <RiArrowRightLine aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </section>

              <div className="pb-2 xl:hidden">
                <BrandPanel gid="bp-g-sm" />
              </div>

              {/* C. What we do */}
              <section id="what-we-do" aria-labelledby="do-heading" className={SECTION}>
                <Kicker n="03">What we do</Kicker>
                <h2 id="do-heading" className={H2} style={SERIF}>AI solutions and the software that makes them work</h2>
                <p className={`mt-5 ${P}`}>Each service below can be delivered on its own or combined into a single project. Follow any card for the detail.</p>
                {SERVICE_GROUPS.map((g) => (
                  <div key={g.title} className="mt-10">
                    <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-gray-100 pb-3">
                      <h3 className="text-xl font-bold text-[#1a1a1a]" style={SERIF}>{g.title}</h3>
                      <p className="text-sm text-gray-500">{g.intro}</p>
                    </div>
                    <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                      {g.items.map((s) => (
                        <li key={s.href}>
                          <Link href={s.href} className="group flex h-full gap-4 rounded-2xl border border-gray-100 bg-white p-5 transition hover:-translate-y-0.5 hover:border-[#AF00E8]/30 hover:shadow-[0_16px_40px_-24px_rgba(60,0,90,0.45)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#AF00E8]">
                            <IconTile icon={ICONS[s.icon]} />
                            <span className="min-w-0">
                              <span className="flex items-center gap-1.5 font-semibold text-[#1a1a1a] group-hover:text-[#7a00b0]">
                                {s.title}
                                <RiArrowRightLine aria-hidden="true" className="h-4 w-4 -translate-x-1 opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100" />
                              </span>
                              <span className="mt-1 block text-sm leading-relaxed text-gray-600">{s.text}</span>
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </section>

              {/* D. Expertise */}
              <section id="expertise" aria-labelledby="expertise-heading" className={SECTION}>
                <Kicker n="04">Our expertise</Kicker>
                <h2 id="expertise-heading" className={H2} style={SERIF}>Where artificial intelligence meets software engineering</h2>
                <p className={`mt-5 ${P}`}>{EXPERTISE.intro}</p>
                <ul className="mt-8 grid gap-px overflow-hidden rounded-3xl bg-gray-100 ring-1 ring-gray-100 sm:grid-cols-2">
                  {EXPERTISE.items.map((it) => (
                    <li key={it.title} className="bg-white p-6">
                      <IconTile icon={ICONS[it.icon]} size="sm" />
                      <h3 className="mt-3 font-semibold text-[#1a1a1a]">{it.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-gray-600">{it.text}</p>
                    </li>
                  ))}
                </ul>
              </section>

              {/* E. Industries */}
              <section id="industries" aria-labelledby="industries-heading" className={SECTION}>
                <Kicker n="05">Industries we serve</Kicker>
                <h2 id="industries-heading" className={H2} style={SERIF}>Technology shaped around how each sector works</h2>
                <p className={`mt-5 text-sm italic leading-relaxed text-gray-500`}>{INDUSTRIES_NOTE}</p>
                <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                  {INDUSTRIES.map((ind) => (
                    <li key={ind.title} className="flex gap-4 rounded-2xl bg-[#faf9f7] p-5 ring-1 ring-gray-100">
                      <IconTile icon={ICONS[ind.icon]} size="sm" />
                      <div>
                        <h3 className="font-semibold text-[#1a1a1a]">{ind.title}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-gray-600">{ind.text}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </section>

              {/* F. Approach */}
              <section id="approach" aria-labelledby="approach-heading" className={SECTION}>
                <Kicker n="06">Our approach</Kicker>
                <h2 id="approach-heading" className={H2} style={SERIF}>Six steps from first conversation to lasting value</h2>
                <ol className="relative mt-10 space-y-0">
                  {APPROACH.map((s, i) => (
                    <li key={s.title} className="relative grid grid-cols-[56px_1fr] gap-5 pb-8 last:pb-0">
                      {i < APPROACH.length - 1 && <span aria-hidden="true" className="absolute left-[27px] top-14 bottom-0 w-px bg-gradient-to-b from-[#AF00E8]/40 to-[#5EEAD4]/40" />}
                      <span aria-hidden="true" className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#120a1a] font-mono text-sm font-bold text-[#e9c2ff]">{String(i + 1).padStart(2, "0")}</span>
                      <div className="pt-2">
                        <h3 className="text-lg font-bold text-[#1a1a1a]">{s.title}</h3>
                        <p className="mt-1.5 text-[15px] leading-relaxed text-gray-600">{s.text}</p>
                      </div>
                    </li>
                  ))}
                </ol>
                <p className={`mt-8 ${P}`}>
                  Much of this work removes manual effort; our <Link href="/services/ai-automation" className={LINK}>AI automation services</Link> show
                  how we decide what to automate and what to leave with people.
                </p>
              </section>

              {/* G. Why */}
              <section id="why-clickmasters" aria-labelledby="why-heading" className={SECTION}>
                <Kicker n="07">Why choose ClickMasters</Kicker>
                <h2 id="why-heading" className={H2} style={SERIF}>What working with us is like</h2>
                <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                  {WHY.map((w, i) => (
                    <li key={w.title} className={`rounded-2xl border border-gray-100 p-6 ${i === WHY.length - 1 ? "sm:col-span-2" : ""}`}>
                      <div className="flex items-center gap-3">
                        <IconTile icon={ICONS[w.icon]} size="sm" />
                        <h3 className="font-semibold text-[#1a1a1a]">{w.title}</h3>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-gray-600">{w.text}</p>
                    </li>
                  ))}
                </ul>

                {/* Editorial note + company facts (audit D-09). Facts render only once supplied in lib/site.ts. */}
                <div id="editorial" className="mt-10 grid gap-6 rounded-3xl bg-[#faf9f7] p-6 ring-1 ring-gray-100 sm:p-8 md:grid-cols-2">
                  <div>
                    <h3 className="text-lg font-bold text-[#1a1a1a]" style={SERIF}>How we write and review our pages</h3>
                    <p className="mt-3 text-sm leading-relaxed text-gray-600">
                      Our service and solution pages are written and checked by the engineers who deliver the work. Each page shows the
                      date it was last reviewed, and we update pages when our approach, tools or advice change.
                    </p>
                    {REVIEWER && (
                      <p id={REVIEWER.url.split("#")[1]} className="mt-3 text-sm text-gray-700">
                        Pages are reviewed by <strong>{REVIEWER.name}</strong>, {REVIEWER.jobTitle}.
                      </p>
                    )}
                  </div>
                  {hasFacts && (
                    <dl className="grid gap-4 text-sm">
                      {ORG_FACTS.legalName && (<div><dt className="text-xs font-semibold tracking-wide text-[#7a00b0]">REGISTERED NAME</dt><dd className="mt-1 text-gray-900">{ORG_FACTS.legalName}</dd></div>)}
                      {ORG_FACTS.companyNumber && (<div><dt className="text-xs font-semibold tracking-wide text-[#7a00b0]">COMPANY NUMBER</dt><dd className="mt-1 text-gray-900">{ORG_FACTS.companyNumber}</dd></div>)}
                      {ORG_FACTS.foundingDate && (<div><dt className="text-xs font-semibold tracking-wide text-[#7a00b0]">FOUNDED</dt><dd className="mt-1 text-gray-900">{ORG_FACTS.foundingDate}</dd></div>)}
                      {addressLine() && (<div><dt className="text-xs font-semibold tracking-wide text-[#7a00b0]">ADDRESS</dt><dd className="mt-1 text-gray-900">{addressLine()}</dd></div>)}
                      {SOCIAL_PROFILES.length > 0 && (
                        <div>
                          <dt className="text-xs font-semibold tracking-wide text-[#7a00b0]">FIND US ON</dt>
                          <dd className="mt-1 flex flex-wrap gap-x-4 gap-y-1">
                            {SOCIAL_PROFILES.map((url) => (
                              <a key={url} href={url} rel="me noopener" className="text-gray-900 underline hover:text-[#AF00E8]">{new URL(url).hostname.replace(/^www\./, "")}</a>
                            ))}
                          </dd>
                        </div>
                      )}
                    </dl>
                  )}
                </div>
              </section>

              {/* H. CTA */}
              <section id="work-together" aria-labelledby="cta-heading" className={SECTION}>
                <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[#1c0b29] via-[#2a0b3a] to-[#120a1a] p-8 text-white sm:p-12">
                  <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#AF00E8]/35 blur-3xl" />
                  <p className="relative mb-4 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-[#e9c2ff]">
                    <span className="font-mono">08</span><span aria-hidden="true" className="h-px w-8 bg-[#e9c2ff]/50" />Let&apos;s work together
                  </p>
                  <h2 id="cta-heading" className="relative text-[32px] font-bold leading-[1.12] sm:text-[42px]" style={SERIF}>
                    {CTA.title} <em className="font-normal text-[#e9c2ff]">{CTA.titleAccent}</em>
                  </h2>
                  <p className="relative mt-5 max-w-2xl text-[15px] leading-relaxed text-gray-300 sm:text-base">{CTA.text}</p>
                  <div className="relative mt-8 flex flex-wrap gap-3">
                    <Link href={CONTACT_HREF} className="inline-flex items-center gap-2 rounded-xl bg-[#AF00E8] px-6 py-3 text-sm font-semibold text-white hover:bg-[#9600c7]">
                      Discuss Your Project <RiArrowRightLine aria-hidden="true" className="h-4 w-4" />
                    </Link>
                    <Link href="/services" className="inline-flex items-center rounded-xl border border-white/25 px-6 py-3 text-sm font-semibold text-white hover:border-white/60">
                      Explore Our Services
                    </Link>
                    <a href={PROFILE_PDF.href} download={PROFILE_PDF.fileName} type="application/pdf" className="inline-flex items-center gap-2 rounded-xl border border-white/25 px-6 py-3 text-sm font-semibold text-white hover:border-white/60">
                      <RiDownload2Line aria-hidden="true" className="h-4 w-4" />
                      {PROFILE_PDF.label}
                    </a>
                  </div>
                  <p className="relative mt-6 text-sm text-gray-400">
                    Prefer to talk? Call <a href={`tel:${CONTACT.phones[0].e164}`} className="text-white underline decoration-[#AF00E8] underline-offset-4">{CONTACT.phones[0].display}</a>{" "}
                    or email <a href={`mailto:${CONTACT.email}`} className="break-all text-white underline decoration-[#AF00E8] underline-offset-4">{CONTACT.email}</a>.
                  </p>
                </div>
              </section>
            </article>

          </div>

          {/* Third column on wide screens (below xl the panel sits after Mission & vision). */}
          <div className="hidden xl:block">
            <div className="sticky top-[112px]">
              <BrandPanel gid="bp-g-xl" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
