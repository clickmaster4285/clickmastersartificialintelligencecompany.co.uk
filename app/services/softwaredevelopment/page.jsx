// /services/softwaredevelopment: Software Development pillar page.
// Content: ./content.ts (from the Software Development Pillar SEO pack). Fully server-rendered.
// Linked from the "Software Development" heading in the Services mega menu.
// This real folder takes precedence over the app/services/[slug] placeholder route.
import Image from "next/image";
import Link from "next/link";
import {
  RiArrowDownLine, RiArrowLeftRightLine, RiArrowRightLine, RiBugLine, RiBuilding2Line, RiBuilding3Line,
  RiCheckboxCircleLine, RiCloudLine, RiCodeSSlashLine, RiDatabase2Line, RiExpandUpDownLine, RiFlowChart,
  RiGlobalLine, RiGraduationCapLine, RiHeartPulseLine, RiHome4Line, RiInformationLine, RiKeyLine, RiLayoutGridLine,
  RiLineChartLine, RiLockLine, RiLockUnlockLine, RiMoneyPoundCircleLine, RiNodeTree, RiPaletteLine, RiPlugLine,
  RiPuzzle2Line, RiRadarLine, RiRocket2Line, RiSave3Line, RiSearchEyeLine, RiSettings3Line, RiShieldCheckLine,
  RiShoppingCart2Line, RiSmartphoneLine, RiSparkling2Line, RiStackLine, RiToolsLine, RiTruckLine, RiUploadCloud2Line,
  RiUserLine, RiUserSettingsLine,
} from "../../Components/icons";

import JsonLd from "../../Components/JsonLd";
import ScopingCallBlock from "../../Components/ScopingCallBlock";
import TechLogoGroups from "../../Components/TechLogoGroups";
import { IconTile, SectionHeading, WRAP } from "../../Components/ServicePageUI";
import {
  CheckCard, ComparisonTable, FaqSection, FinalCta, IconCardGrid, ProcessGrid, RichText, ServiceHero, faqPageJsonLd,
} from "../../Components/ServicePageSections";
import { detailPageJsonLd, detailPageMetadata } from "../../lib/site";
import {
  BUILD_VS_BUY, FAQS, FINAL_CTA, HERO, HERO_FLOW, IMAGES, INDUSTRIES, INVOLVES, OFFER, PATH, PROCESS, SCHEMA_SERVICE,
  SECURITY, SEO, TECH, WHY_BESPOKE,
} from "./content";

export const metadata = detailPageMetadata({ path: PATH, ...SEO });

const CRUMBS = [
  { name: "Services", path: "/services" },
  { name: "Software Development", path: PATH },
];

// All icons are decorative (headings carry the meaning).
const ICONS = {
  discover: RiSearchEyeLine, architecture: RiNodeTree, design: RiPaletteLine, code: RiCodeSSlashLine, test: RiBugLine,
  deploy: RiUploadCloud2Line, maintain: RiToolsLine, bespoke: RiPuzzle2Line, web: RiGlobalLine, mobile: RiSmartphoneLine,
  rocket: RiRocket2Line, enterprise: RiBuilding2Line, automation: RiFlowChart, api: RiPlugLine, database: RiDatabase2Line,
  health: RiHeartPulseLine, finance: RiMoneyPoundCircleLine, cart: RiShoppingCart2Line, education: RiGraduationCapLine,
  home: RiHome4Line, truck: RiTruckLine, factory: RiBuilding3Line, saas: RiLayoutGridLine, key: RiKeyLine,
  roles: RiUserSettingsLine, lock: RiLockLine, backup: RiSave3Line, monitor: RiRadarLine, scale: RiExpandUpDownLine,
  fit: RiCheckboxCircleLine, control: RiSettings3Line, flex: RiArrowLeftRightLine, growth: RiLineChartLine,
  unlock: RiLockUnlockLine,
};
const withIcons = (items) => items.map((it) => ({ ...it, icon: ICONS[it.icon] }));

const P = "text-[15px] leading-relaxed text-gray-600 lg:text-base";
const SERIF = { fontFamily: "Garamond, serif" };
const HALF = "(min-width: 1280px) 600px, (min-width: 1024px) 48vw, 100vw";

/** **bold** markers, with [anchor](/path) links in the plain parts. */
function Rich({ text }) {
  return text.split(/(\*\*[^*]+\*\*)/).map((part, i) =>
    part.startsWith("**")
      ? <strong key={i} className="font-semibold text-[#1a1a1a]">{part.slice(2, -2)}</strong>
      : <RichText key={i} text={part} />,
  );
}

/** A photo (below the fold, lazy-loaded) with rounded corners. */
function Photo({ image, sizes, className = "" }) {
  return (
    <div className={`relative overflow-hidden rounded-3xl ring-1 ring-black/5 ${className}`}>
      <Image src={image.src} width={image.width} height={image.height} alt={image.alt} sizes={sizes} className="h-full w-full object-cover" />
    </div>
  );
}

function FlowArrow() {
  return (
    <div aria-hidden="true" className="flex justify-center py-1.5 text-[#AF00E8]/60">
      <RiArrowDownLine className="h-5 w-5" />
    </div>
  );
}

/** Hero diagram: web, mobile and staff front ends → API and business logic → central database, with third-party services. */
function SystemDiagram() {
  return (
    <div role="img" aria-label={HERO.figureAlt} className="text-sm">
      <ul className="grid grid-cols-3 gap-2">
        {HERO_FLOW.clients.map((c, i) => {
          const Icon = [RiGlobalLine, RiSmartphoneLine, RiUserLine][i];
          return (
            <li key={c} className="flex flex-col items-center gap-1.5 rounded-xl border border-gray-100 bg-[#faf9f7] px-2 py-3 text-center text-[12px] font-semibold text-gray-700">
              <Icon aria-hidden="true" className="h-5 w-5 text-gray-400" />{c}
            </li>
          );
        })}
      </ul>
      <FlowArrow />
      <div className="grid grid-cols-[1fr_auto] gap-2">
        <div className="rounded-2xl bg-gradient-to-br from-[#2a0b3a] to-[#0d0a12] p-4 text-white">
          <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[#e9c2ff]">
            <RiCodeSSlashLine aria-hidden="true" className="h-3.5 w-3.5" />{HERO_FLOW.core}
          </p>
          <ul className="mt-3 flex flex-wrap gap-1.5">
            {HERO_FLOW.coreItems.map((it) => (
              <li key={it} className="rounded-md bg-white/10 px-2 py-1 text-[11.5px] font-semibold">{it}</li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-1 rounded-xl bg-[#fffaeb] p-2 ring-1 ring-[#E3A600]/30">
          <span className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-[#8a6400]">
            <RiPlugLine aria-hidden="true" className="h-3 w-3" />Integrations
          </span>
          {HERO_FLOW.services.map((s) => (
            <span key={s} className="rounded-md bg-white px-2 py-0.5 text-center text-[11px] font-semibold text-[#8a6400]">{s}</span>
          ))}
        </div>
      </div>
      <FlowArrow />
      <p className="flex items-center justify-center gap-2 rounded-xl bg-[#f1fbf9] px-3 py-3 text-[13px] font-semibold text-[#0b6f68] ring-1 ring-[#0F9F94]/20">
        <RiDatabase2Line aria-hidden="true" className="h-5 w-5" />{HERO_FLOW.data}
      </p>
    </div>
  );
}

export default function SoftwareDevelopmentPillar() {
  return (
    <>
      <JsonLd
        data={detailPageJsonLd({
          path: PATH,
          name: SEO.ogTitle,
          description: SEO.description,
          crumbs: CRUMBS,
          service: SCHEMA_SERVICE,
        })}
      />
      <JsonLd data={faqPageJsonLd(FAQS)} />

      <ServiceHero
        crumbs={CRUMBS.map((c) => ({ name: c.name, href: c.path }))}
        eyebrow={HERO.eyebrow}
        title={HERO.title}
        titleAccent={HERO.titleAccent}
        lead={HERO.lead}
        audience={HERO.audience}
        primaryCta={{ label: "Discuss Your Software Project", href: "/contact" }}
        secondaryCta={{ label: "Explore Our Services", href: "#services" }}
        stats={HERO.stats}
        figureLabel="One system, connected end to end"
        figure={<SystemDiagram />}
        figcaption="Illustrative architecture, not a client project."
      />

      <ScopingCallBlock path={PATH} service="software development" />

      {/* ───────────── What it involves ───────────── */}
      <section aria-labelledby="involves-heading" className="bg-white py-16 lg:py-24">
        <div className={WRAP}>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <SectionHeading id="involves-heading" eyebrow="The basics">{INVOLVES.title}</SectionHeading>
              <p className={`mt-6 ${P}`}>{INVOLVES.intro}</p>
            </div>
            <Photo image={IMAGES.workspace} sizes={HALF} className="aspect-[3/2]" />
          </div>
          <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {INVOLVES.items.map((it, i) => (
              <li key={it.title} className="rounded-2xl border border-gray-100 bg-[#faf9f7] p-5">
                <div className="flex items-center justify-between">
                  <IconTile icon={ICONS[it.icon]} size="sm" />
                  <span aria-hidden="true" className="text-[26px] font-bold leading-none text-transparent [-webkit-text-stroke:1.2px_#AF00E8]" style={SERIF}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-3 font-bold leading-snug text-[#1a1a1a]">{it.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-gray-600">{it.text}</p>
              </li>
            ))}
            <li className="rounded-2xl bg-[#faf5fd] p-5 ring-1 ring-[#AF00E8]/15">
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#AF00E8]">Why the order matters</p>
              <p className="mt-2 text-sm leading-relaxed text-gray-700">{INVOLVES.outro}</p>
            </li>
          </ol>
        </div>
      </section>

      {/* ───────────── Services we offer ───────────── */}
      <section id="services" aria-labelledby="offer-heading" className="scroll-mt-28 border-y border-[#9b1fe0]/10 bg-[#faf9f7] py-16 lg:py-24">
        <div className={WRAP}>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <SectionHeading id="offer-heading" eyebrow="What we build">{OFFER.title}</SectionHeading>
              <p className={`mt-5 ${P}`}>{OFFER.intro}</p>
            </div>
            <Photo image={IMAGES.mobile} sizes={HALF} className="aspect-[16/10]" />
          </div>

          <ul className="mt-12 grid gap-5 md:grid-cols-2">
            {OFFER.core.map((s) => (
              <li key={s.title} className="flex flex-col rounded-3xl border border-gray-100 bg-white p-6 sm:p-8">
                <div className="flex items-center gap-3">
                  <IconTile icon={ICONS[s.icon]} />
                  <h3 className="text-[22px] font-bold leading-snug text-[#1a1a1a]" style={SERIF}>{s.title}</h3>
                </div>
                <p className={`mt-4 flex-1 ${P}`}><RichText text={s.text} /></p>
                <Link
                  href={s.href}
                  className="group mt-5 inline-flex w-fit items-center gap-2 rounded-lg border border-[#AF00E8]/30 px-4 py-2.5 text-sm font-semibold text-[#AF00E8] hover:border-[#AF00E8] hover:bg-[#faf5fd]"
                >
                  Explore {s.cta}
                  <RiArrowRightLine aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </li>
            ))}
          </ul>

          <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {OFFER.more.map((s) => (
              <li key={s.title} className="rounded-2xl border border-gray-100 bg-white p-5">
                <IconTile icon={ICONS[s.icon]} size="sm" />
                <h3 className="mt-3 font-bold leading-snug text-[#1a1a1a]">{s.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-gray-600"><RichText text={s.text} /></p>
              </li>
            ))}
          </ul>

          {/* Hand AI and enterprise intent to their own pages. */}
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <Link href="/services/ai-development" className="group flex gap-4 rounded-2xl bg-[#0d0a12] p-6 text-white transition-colors hover:bg-[#1a1022]">
              <RiSparkling2Line aria-hidden="true" className="mt-0.5 h-6 w-6 shrink-0 text-[#e9c2ff]" />
              <span>
                <span className="block text-lg font-bold">AI development services</span>
                <span className="mt-1 block text-sm leading-relaxed text-gray-300">Where software needs to read, predict or automate, our AI development services add intelligence to the systems you build.</span>
                <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-[#e9c2ff]">See AI development services<RiArrowRightLine aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" /></span>
              </span>
            </Link>
            <div className="flex gap-4 rounded-2xl border border-gray-100 bg-white p-6">
              <RiCloudLine aria-hidden="true" className="mt-0.5 h-6 w-6 shrink-0 text-[#AF00E8]" />
              <div>
                <p className="text-lg font-bold text-[#1a1a1a]">Enterprise and cloud foundations</p>
                <p className="mt-1 text-sm leading-relaxed text-gray-600">The foundations that keep software reliable as it grows: ERP and CRM, cloud infrastructure and DevOps, and database design.</p>
                <p className="mt-3 flex flex-wrap gap-2 text-sm font-semibold">
                  <Link href="/services/erp-crm-development" className="text-[#AF00E8] hover:underline">ERP &amp; CRM</Link>
                  <span aria-hidden="true" className="text-gray-300">·</span>
                  <Link href="/services/cloud-devops" className="text-[#AF00E8] hover:underline">Cloud &amp; DevOps</Link>
                  <span aria-hidden="true" className="text-gray-300">·</span>
                  <Link href="/services/database-design" className="text-[#AF00E8] hover:underline">Database design</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── Build vs buy ───────────── */}
      <section aria-labelledby="buy-heading" className="bg-white py-16 lg:py-24">
        <div className={WRAP}>
          <div className="max-w-3xl">
            <SectionHeading id="buy-heading" eyebrow="An honest comparison">{BUILD_VS_BUY.title}</SectionHeading>
            <p className={`mt-5 ${P}`}>{BUILD_VS_BUY.intro}</p>
          </div>
          <div className="mt-10">
            <ComparisonTable
              labelledBy="buy-heading"
              headers={[{ label: BUILD_VS_BUY.headers[0] }, { label: BUILD_VS_BUY.headers[1], dot: "#E3A600" }, { label: BUILD_VS_BUY.headers[2], dot: "#AF00E8" }]}
              rows={BUILD_VS_BUY.rows}
              minWidth="min-w-[760px]"
            />
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <CheckCard title="Custom development usually makes commercial sense when…" items={BUILD_VS_BUY.custom} tone="purple" />
            <CheckCard title="Off-the-shelf is usually better when…" items={BUILD_VS_BUY.offTheShelf} tone="sun" />
          </div>
          <p className={`mt-8 max-w-4xl ${P}`}>{BUILD_VS_BUY.outro}</p>
        </div>
      </section>

      {/* ───────────── Industries ───────────── */}
      <section aria-labelledby="industries-heading" className="border-y border-[#9b1fe0]/10 bg-[#faf9f7] py-16 lg:py-24">
        <div className={WRAP}>
          <div className="max-w-3xl">
            <SectionHeading id="industries-heading" eyebrow="Sector context">{INDUSTRIES.title}</SectionHeading>
            <p className={`mt-5 ${P}`}>{INDUSTRIES.intro}</p>
          </div>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {INDUSTRIES.items.map((ind) => {
              const Icon = ICONS[ind.icon];
              return (
                <li key={ind.title}>
                  <Link href={ind.href} className="group flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-5 transition-colors hover:border-[#AF00E8]/40">
                    <span aria-hidden="true" className="icon-tile icon-tile--sm"><Icon className="h-4 w-4" /></span>
                    <span className="mt-3 flex items-center gap-1.5 font-bold text-[#1a1a1a] group-hover:text-[#AF00E8]">
                      {ind.title}
                      <RiArrowRightLine aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                    <span className="mt-1.5 text-sm leading-relaxed text-gray-600">{ind.text}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
          <p className="mt-6 text-sm italic text-gray-500">{INDUSTRIES.note}</p>
        </div>
      </section>

      {/* ───────────── Process ───────────── */}
      <ProcessGrid
        headingId="process-heading"
        eyebrow="Seven stages"
        title={PROCESS.title}
        intro={PROCESS.intro}
        columns="md:grid-cols-2 lg:grid-cols-4"
        checkLabel="Why it matters"
        steps={PROCESS.steps.map((s) => ({ title: s.title, rows: [{ label: "What happens", text: s.text }], risk: s.why }))}
        after={
          <div className="mt-10 grid gap-6 lg:grid-cols-2 lg:items-center">
            <Photo image={IMAGES.planning} sizes={HALF} className="aspect-[16/10]" />
            <div className="space-y-5">
              <Photo image={IMAGES.wireframe} sizes="(min-width: 1024px) 40vw, 100vw" className="aspect-[16/9]" />
              <p className={P}><RichText text={PROCESS.outro} /></p>
            </div>
          </div>
        }
      />

      {/* ───────────── Technologies ───────────── */}
      <section aria-labelledby="tech-heading" className="border-y border-[#9b1fe0]/10 bg-[#faf9f7] py-16 lg:py-24">
        <div className={WRAP}>
          <div className="max-w-3xl">
            <SectionHeading id="tech-heading" eyebrow="Chosen to fit, not to follow trends">{TECH.title}</SectionHeading>
            <p className={`mt-5 ${P}`}>{TECH.intro}</p>
          </div>
          <div className="mt-12">
            <TechLogoGroups groups={TECH.groups} />
          </div>
          <ul className="mt-10 grid gap-3 md:grid-cols-2">
            {TECH.details.map(([term, text]) => (
              <li key={term} className="flex gap-2.5 rounded-xl bg-white px-4 py-3 text-sm leading-relaxed text-gray-700 ring-1 ring-gray-100">
                <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#AF00E8]" />
                <span><strong className="font-semibold text-[#1a1a1a]">{term}</strong> <RichText text={text} /></span>
              </li>
            ))}
          </ul>
          <p className="mt-8 flex max-w-4xl gap-3 rounded-2xl bg-[#faf5fd] px-5 py-4 text-sm leading-relaxed text-gray-700 ring-1 ring-[#AF00E8]/15">
            <RiStackLine aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-[#AF00E8]" /><span><Rich text={TECH.architecture} /></span>
          </p>
        </div>
      </section>

      {/* ───────────── Security ───────────── */}
      <section aria-labelledby="security-heading" className="relative overflow-hidden bg-[#0d0a12] py-16 text-white lg:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-[#AF00E8]/20 blur-3xl" />
        <div className={`${WRAP} relative`}>
          <div className="max-w-3xl">
            <SectionHeading id="security-heading" eyebrow="Designed in, not bolted on" dark>{SECURITY.title}</SectionHeading>
            <p className="mt-5 text-[15px] leading-relaxed text-gray-300 lg:text-base">{SECURITY.intro}</p>
          </div>
          <div className="mt-12">
            <IconCardGrid items={withIcons(SECURITY.items)} dark columns="sm:grid-cols-2 lg:grid-cols-3" compact />
          </div>
          <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-8">
            <h3 className="text-xl font-bold text-white lg:text-2xl" style={SERIF}>UK data protection</h3>
            <p className="mt-3 text-sm leading-relaxed text-gray-300">{SECURITY.dataProtection}</p>
          </div>
          <p className="mt-6 flex max-w-4xl gap-3 rounded-2xl bg-white/[0.08] px-5 py-4 text-sm font-medium leading-relaxed text-gray-200 ring-1 ring-white/15">
            <RiShieldCheckLine aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-[#e9c2ff]" />{SECURITY.statement}
          </p>
        </div>
      </section>

      {/* ───────────── Why bespoke ───────────── */}
      <section aria-labelledby="why-heading" className="border-b border-[#9b1fe0]/10 bg-[#faf9f7] py-16 lg:py-24">
        <div className={WRAP}>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <SectionHeading id="why-heading" eyebrow="When custom is the right fit">{WHY_BESPOKE.title}</SectionHeading>
              <p className={`mt-5 ${P}`}>{WHY_BESPOKE.intro}</p>
            </div>
            <Photo image={IMAGES.journey} sizes={HALF} className="aspect-[16/10]" />
          </div>
          <div className="mt-12">
            <IconCardGrid items={withIcons(WHY_BESPOKE.items)} columns="sm:grid-cols-2 lg:grid-cols-3" />
          </div>
          <p className="mt-8 flex max-w-4xl gap-3 rounded-2xl bg-white px-5 py-4 text-sm leading-relaxed text-gray-700 ring-1 ring-gray-100">
            <RiInformationLine aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-[#AF00E8]" />{WHY_BESPOKE.responsibilities}
          </p>
        </div>
      </section>

      <FaqSection
        title="Software Development Services: Frequently Asked Questions"
        intro="Cost, timelines, build vs buy, integration, technologies, security and how to get started, answered plainly."
        faqs={FAQS}
      />

      <FinalCta
        title={FINAL_CTA.title}
        titleAccent={FINAL_CTA.titleAccent}
        body={FINAL_CTA.body}
        bring={FINAL_CTA.bring}
        primaryCta={{ label: "Discuss Your Software Project", href: "/contact" }}
        secondaryCta={{ label: "View All Services", href: "/services" }}
      />
    </>
  );
}
