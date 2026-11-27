// /industries/ecommerce
// Content: ./content.ts (from the E-commerce Industry SEO pack). Fully server-rendered.
// Every industry now has a real page, so the old app/industries/[slug] placeholder route was removed.
import Image from "next/image";
import {
  RiArchiveLine, RiArrowLeftRightLine, RiBankCardLine, RiBarChartBoxLine, RiBriefcase4Line, RiCheckLine,
  RiCloudLine, RiCodeSSlashLine, RiContactsBook2Line, RiCookieLine, RiCustomerService2Line, RiDashboardLine,
  RiDatabase2Line, RiFileEditLine, RiFileShield2Line, RiFilter3Line, RiFlowChart, RiInformationLine, RiKeyLine,
  RiLayoutLine, RiLineChartLine, RiMegaphoneLine, RiPaletteLine, RiPieChart2Line, RiPlugLine, RiPriceTag3Line,
  RiQuestionAnswerLine, RiScales3Line, RiSearchEyeLine, RiShieldCheckLine, RiShoppingBag3Line, RiSparkling2Line,
  RiStackLine, RiStore2Line, RiThumbUpLine, RiTimerLine, RiTruckLine, RiUserHeartLine, RiUserSettingsLine,
} from "../../Components/icons";

import JsonLd from "../../Components/JsonLd";
import ScopingCallBlock from "../../Components/ScopingCallBlock";
import { IconTile, SectionHeading, WRAP } from "../../Components/ServicePageUI";
import {
  FaqSection, FinalCta, IconCardGrid, ProcessGrid, RichText, ServiceHero, faqPageJsonLd,
} from "../../Components/ServicePageSections";
import { detailPageJsonLd, detailPageMetadata } from "../../lib/site";
import {
  AI_CAPABILITIES, AI_INTRO, CHALLENGES, CHALLENGES_INTRO, FAQS, FINAL_CTA, HERO, HERO_FLOW, IMAGES, INTEGRATION,
  OVERVIEW, PATH, PROCESS, SCHEMA_SERVICE, SECURITY, SECURITY_DISCLAIMER, SECURITY_INTRO, SECURITY_STATEMENT, SEO,
  SOFTWARE, USE_CASES, USE_CASES_NOTE, USE_CASE_FIELDS, WHY, WHY_INTRO, WHY_OUTRO,
} from "./content";

export const metadata = detailPageMetadata({ path: PATH, ...SEO });

const CRUMBS = [
  { name: "Industries", path: "/industries" },
  { name: "E-Commerce", path: PATH },
];

// All icons are decorative (headings carry the meaning).
const ICONS = {
  search: RiSearchEyeLine, user: RiUserHeartLine, stock: RiArchiveLine, support: RiCustomerService2Line,
  truck: RiTruckLine, plug: RiPlugLine, recommend: RiThumbUpLine, assistant: RiQuestionAnswerLine,
  forecast: RiLineChartLine, marketing: RiMegaphoneLine, content: RiFileEditLine, store: RiStore2Line,
  web: RiLayoutLine, catalogue: RiPriceTag3Line, orders: RiShoppingBag3Line, contacts: RiContactsBook2Line,
  dashboard: RiDashboardLine, code: RiCodeSSlashLine, database: RiDatabase2Line, cloud: RiCloudLine, erp: RiStackLine,
  payment: RiBankCardLine, analytics: RiBarChartBoxLine, segment: RiPieChart2Line, privacy: RiFileShield2Line,
  cookie: RiCookieLine, shield: RiShieldCheckLine, key: RiKeyLine, roles: RiUserSettingsLine, minimise: RiFilter3Line,
  retention: RiTimerLine, scales: RiScales3Line, briefcase: RiBriefcase4Line, automation: RiFlowChart,
  design: RiPaletteLine,
};
const withIcons = (items) => items.map((it) => ({ ...it, icon: ICONS[it.icon] }));

const P = "text-[15px] leading-relaxed text-gray-600 lg:text-base";
const SERIF = { fontFamily: "Garamond, serif" };
const LABEL = "text-[11px] font-bold uppercase tracking-[0.14em] text-gray-500";
const HALF = "(min-width: 1280px) 600px, (min-width: 1024px) 48vw, 100vw";

/** A photo (below the fold, lazy-loaded) with rounded corners. */
function Photo({ image, sizes, className = "" }) {
  return (
    <div className={`relative overflow-hidden rounded-3xl ring-1 ring-black/5 ${className}`}>
      <Image src={image.src} width={image.width} height={image.height} alt={image.alt} sizes={sizes} className="h-full w-full object-cover" />
    </div>
  );
}

/** Two-way arrow between hero diagram rows. */
function SyncArrow() {
  return (
    <div aria-hidden="true" className="flex justify-center py-1.5 text-[#AF00E8]/60">
      <RiArrowLeftRightLine className="h-5 w-5 rotate-90" />
    </div>
  );
}

/** Hero diagram: sales channels ↔ integration layer with AI services ↔ back-office systems. */
function IntegrationDiagram() {
  return (
    <div role="img" aria-label={HERO.figureAlt} className="text-sm">
      <ul className="grid grid-cols-3 gap-2">
        {HERO_FLOW.channels.map((c, i) => {
          const Icon = [RiStore2Line, RiShoppingBag3Line, RiCustomerService2Line][i];
          return (
            <li key={c} className="flex flex-col items-center gap-1.5 rounded-xl border border-gray-100 bg-[#faf9f7] px-2 py-3 text-center text-[12px] font-semibold text-gray-700">
              <Icon aria-hidden="true" className="h-5 w-5 text-gray-400" />{c}
            </li>
          );
        })}
      </ul>
      <SyncArrow />
      <div className="rounded-2xl bg-gradient-to-br from-[#2a0b3a] to-[#0d0a12] p-4 text-white">
        <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[#e9c2ff]">
          <RiPlugLine aria-hidden="true" className="h-3.5 w-3.5" />Integration layer
        </p>
        <ul className="mt-3 grid grid-cols-3 gap-2">
          {HERO_FLOW.ai.map((a) => (
            <li key={a} className="flex items-center justify-center gap-1.5 rounded-lg bg-white/10 px-2 py-2 text-center text-[12px] font-semibold">
              <RiSparkling2Line aria-hidden="true" className="h-3.5 w-3.5 shrink-0 text-[#5EEAD4]" />{a}
            </li>
          ))}
        </ul>
        <p className="mt-3 text-center text-[11px] text-gray-400">Validation · retries · error alerts · logging</p>
      </div>
      <SyncArrow />
      <ul className="grid grid-cols-4 gap-2">
        {HERO_FLOW.systems.map((s, i) => {
          const Icon = [RiArchiveLine, RiShoppingBag3Line, RiContactsBook2Line, RiStackLine][i];
          return (
            <li key={s} className="flex flex-col items-center gap-1.5 rounded-xl bg-[#f1fbf9] px-1.5 py-3 text-center text-[11px] font-semibold leading-tight text-[#0b6f68] ring-1 ring-[#0F9F94]/20">
              <Icon aria-hidden="true" className="h-5 w-5" />{s}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default function EcommerceIndustry() {
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
        primaryCta={{ label: "Discuss Your E-commerce Project", href: "/contact" }}
        secondaryCta={{ label: "Explore Our AI Services", href: "/services" }}
        stats={HERO.trust}
        figureLabel="Every channel, one source of truth"
        figure={<IntegrationDiagram />}
        figcaption="Illustrative architecture, not a client project."
      />

      <ScopingCallBlock path={PATH} service="e-commerce AI and software" />

      {/* ───────────── Overview ───────────── */}
      <section aria-labelledby="overview-heading" className="bg-white py-16 lg:py-24">
        <div className={`${WRAP} grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16`}>
          <div>
            <SectionHeading id="overview-heading" eyebrow="AI in e-commerce">{OVERVIEW.title}</SectionHeading>
            <div className="mt-6 space-y-5">
              {OVERVIEW.paragraphs.map((p) => <p key={p.slice(0, 32)} className={P}>{p}</p>)}
            </div>
          </div>
          <div>
            <Photo image={IMAGES.phone} sizes={HALF} className="aspect-[3/2]" />
            <p className="mt-5 flex items-baseline gap-4 rounded-2xl bg-[#faf5fd] px-5 py-4 ring-1 ring-[#AF00E8]/15">
              <span className="text-[34px] font-bold leading-none text-[#AF00E8]" style={SERIF}>{OVERVIEW.stat.value}</span>
              <span className="text-sm leading-snug text-gray-700">
                {OVERVIEW.stat.label}. <span className="text-gray-500">Source: {OVERVIEW.stat.source}.</span>
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* ───────────── Challenges ───────────── */}
      <section aria-labelledby="challenges-heading" className="border-y border-[#9b1fe0]/10 bg-[#faf9f7] py-16 lg:py-24">
        <div className={WRAP}>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <SectionHeading id="challenges-heading" eyebrow="Sound familiar?">E-commerce Challenges We Help Solve</SectionHeading>
              <p className={`mt-5 ${P}`}>{CHALLENGES_INTRO}</p>
            </div>
            <Photo image={IMAGES.warehouse} sizes={HALF} className="aspect-[16/9]" />
          </div>
          <ul className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {CHALLENGES.map((c) => (
              <li key={c.title} className="rounded-2xl border border-gray-100 bg-white p-6 transition-colors hover:border-[#AF00E8]/25">
                <IconTile icon={ICONS[c.icon]} />
                <h3 className="mt-4 text-lg font-bold text-[#1a1a1a]">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{c.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ───────────── AI solutions ───────────── */}
      <section id="ai-solutions" aria-labelledby="ai-heading" className="scroll-mt-28 bg-white py-16 lg:py-24">
        <div className={WRAP}>
          <div className="max-w-3xl">
            <SectionHeading id="ai-heading" eyebrow="7 capabilities">AI Solutions for E-commerce Businesses</SectionHeading>
            <p className={`mt-5 ${P}`}>{AI_INTRO}</p>
          </div>

          <nav aria-label="AI solutions on this page" className="mt-10">
            <ul className="flex flex-wrap gap-2">
              {AI_CAPABILITIES.map((c) => (
                <li key={c.id}>
                  <a href={`#${c.id}`} className="inline-flex rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:border-[#AF00E8]/40 hover:text-[#AF00E8]">
                    {c.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-10 space-y-6">
            {AI_CAPABILITIES.map((c) => (
              <article
                key={c.id}
                id={c.id}
                aria-labelledby={`${c.id}-heading`}
                className={`scroll-mt-28 rounded-3xl border border-gray-100 bg-[#faf9f7] p-6 sm:p-8 ${c.image ? "grid gap-8 lg:grid-cols-[1.25fr_1fr] lg:items-start" : ""}`}
              >
                <div>
                  <div className="flex items-center gap-3">
                    <IconTile icon={ICONS[c.icon]} />
                    <h3 id={`${c.id}-heading`} className="text-[22px] font-bold leading-snug text-[#1a1a1a] lg:text-[26px]" style={SERIF}>{c.title}</h3>
                  </div>
                  <p className={`mt-4 ${P}`}><RichText text={c.intro} /></p>
                  {c.items && (
                    <ul className={`mt-4 grid gap-2.5 ${c.image ? "" : "md:grid-cols-2"}`}>
                      {c.items.map((it) => (
                        <li key={it.text} className="flex gap-2.5 rounded-xl bg-white px-4 py-3 text-sm leading-relaxed text-gray-700 ring-1 ring-gray-100">
                          <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#AF00E8]" />
                          <span>{it.term && <strong className="font-semibold text-[#1a1a1a]">{it.term} </strong>}{it.text}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  <div className="mt-5 space-y-4">
                    {c.outro.map((p) => <p key={p.slice(0, 32)} className={P}><RichText text={p} /></p>)}
                  </div>
                </div>
                {c.image && <Photo image={IMAGES[c.image]} sizes="(min-width: 1280px) 500px, (min-width: 1024px) 40vw, 100vw" className="aspect-[3/2] lg:sticky lg:top-28" />}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── Custom software ───────────── */}
      <section aria-labelledby="software-heading" className="border-y border-[#9b1fe0]/10 bg-[#faf9f7] py-16 lg:py-24">
        <div className={WRAP}>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeading id="software-heading" eyebrow="Platform plus custom">Custom E-commerce Software Development</SectionHeading>
              <p className={`mt-5 ${P}`}>{SOFTWARE.combination}</p>
            </div>
            <div className="rounded-2xl bg-white p-6 ring-1 ring-[#AF00E8]/15 sm:p-8">
              <p className="text-[15px] font-semibold leading-relaxed text-[#1a1a1a]">{SOFTWARE.intro}</p>
              <ul className="mt-4 space-y-2.5">
                {SOFTWARE.when.map((w) => (
                  <li key={w} className="flex gap-2.5 text-sm leading-relaxed text-gray-700">
                    <RiCheckLine aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[#AF00E8]" />{w}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className={`mt-12 ${P}`}><RichText text={SOFTWARE.listIntro} /></p>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {SOFTWARE.items.map((it) => (
              <li key={it.title} className="rounded-2xl border border-gray-100 bg-white p-5">
                <IconTile icon={ICONS[it.icon]} size="sm" />
                <h3 className="mt-3 font-bold leading-snug text-[#1a1a1a]">{it.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-gray-600"><RichText text={it.text} /></p>
              </li>
            ))}
          </ul>
          <p className="mt-8 flex max-w-4xl gap-3 rounded-2xl bg-white px-5 py-4 text-sm leading-relaxed text-gray-700 ring-1 ring-[#AF00E8]/15">
            <RiCodeSSlashLine aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-[#AF00E8]" />
            <span><span className="font-semibold text-[#1a1a1a]">Technology: </span>{SOFTWARE.stack}</span>
          </p>
        </div>
      </section>

      {/* ───────────── Integration ───────────── */}
      <section aria-labelledby="integration-heading" className="bg-white py-16 lg:py-24">
        <div className={WRAP}>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <SectionHeading id="integration-heading" eyebrow="Connected, not copied">E-commerce Automation and System Integration</SectionHeading>
              <p className={`mt-5 ${P}`}>{INTEGRATION.intro}</p>
            </div>
            <Photo image={IMAGES.parcels} sizes={HALF} className="aspect-[16/9]" />
          </div>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {INTEGRATION.systems.map((s) => (
              <li key={s.title} className="rounded-2xl border border-gray-100 bg-[#faf9f7] p-5">
                <IconTile icon={ICONS[s.icon]} size="sm" />
                <h3 className="mt-3 font-bold leading-snug text-[#1a1a1a]">{s.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-gray-600"><RichText text={s.text} /></p>
              </li>
            ))}
          </ul>
          <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_1fr]">
            <div className="rounded-2xl bg-[#f1fbf9] p-6 ring-1 ring-[#0F9F94]/20 sm:p-8">
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#0F9F94]">Practical benefits</p>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {INTEGRATION.benefits.map(([term, text]) => (
                  <li key={term} className="flex gap-2.5 text-sm leading-relaxed text-gray-700">
                    <RiCheckLine aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[#0F9F94]" />
                    <span><strong className="font-semibold text-[#1a1a1a]">{term}</strong> {text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="flex gap-3 rounded-2xl bg-[#faf9f7] p-6 text-sm leading-relaxed text-gray-700 ring-1 ring-gray-100 sm:p-8">
              <RiInformationLine aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-[#AF00E8]" />{INTEGRATION.note}
            </p>
          </div>
        </div>
      </section>

      {/* ───────────── Use cases ───────────── */}
      <section aria-labelledby="usecases-heading" className="border-y border-[#9b1fe0]/10 bg-[#faf9f7] py-16 lg:py-24">
        <div className={WRAP}>
          <div className="max-w-3xl">
            <SectionHeading id="usecases-heading" eyebrow="10 illustrative scenarios">Practical E-commerce AI Use Cases</SectionHeading>
            <p className="mt-5 text-[15px] italic leading-relaxed text-gray-500">{USE_CASES_NOTE}</p>
          </div>
          <ol className="mt-12 grid gap-5 lg:grid-cols-2">
            {USE_CASES.map((u, i) => (
              <li key={u.title} className="overflow-hidden rounded-3xl border border-gray-100 bg-white">
                <div className="flex items-center gap-3 border-b border-gray-100 p-5 sm:px-6">
                  <IconTile icon={ICONS[u.icon]} />
                  <h3 className="text-lg font-bold leading-snug text-[#1a1a1a]">
                    <span aria-hidden="true" className="mr-1.5 text-[#AF00E8]">{i + 1}.</span>{u.title}
                  </h3>
                </div>
                <dl className="space-y-3 p-5 sm:px-6">
                  {USE_CASE_FIELDS.map(([key, label]) => (
                    <div key={key} className={key === "limits" ? "rounded-xl bg-[#fffaeb] px-4 py-3 ring-1 ring-[#E3A600]/25" : ""}>
                      <dt className={key === "limits" ? "text-[11px] font-bold uppercase tracking-[0.14em] text-[#8a6400]" : LABEL}>{label}</dt>
                      <dd className="mt-1 text-sm leading-relaxed text-gray-700">{u[key]}</dd>
                    </div>
                  ))}
                </dl>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ───────────── Security and data protection ───────────── */}
      <section aria-labelledby="security-heading" className="relative overflow-hidden bg-[#0d0a12] py-16 text-white lg:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-[#AF00E8]/20 blur-3xl" />
        <div className={`${WRAP} relative`}>
          <div className="max-w-3xl">
            <SectionHeading id="security-heading" eyebrow="UK GDPR · PECR · PCI DSS · DMCC Act" dark>E-commerce Security and Data Protection</SectionHeading>
            <p className="mt-5 text-[15px] leading-relaxed text-gray-300 lg:text-base">{SECURITY_INTRO}</p>
            <p className="mt-4 flex gap-3 rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-4 text-sm italic leading-relaxed text-gray-300">
              <RiInformationLine aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-[#5EEAD4]" />{SECURITY_DISCLAIMER}
            </p>
          </div>
          <div className="mt-12">
            <IconCardGrid items={withIcons(SECURITY)} dark columns="sm:grid-cols-2 lg:grid-cols-3" compact />
          </div>
          <p className="mt-8 flex max-w-4xl gap-3 rounded-2xl bg-white/[0.08] px-5 py-4 text-sm font-medium leading-relaxed text-gray-200 ring-1 ring-white/15">
            <RiShieldCheckLine aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-[#e9c2ff]" />{SECURITY_STATEMENT}
          </p>
        </div>
      </section>

      {/* ───────────── Why ClickMasters ───────────── */}
      <section aria-labelledby="why-heading" className="border-b border-[#9b1fe0]/10 bg-[#faf9f7] py-16 lg:py-24">
        <div className={WRAP}>
          <div className="max-w-3xl">
            <SectionHeading id="why-heading" eyebrow="Why ClickMasters">Why E-commerce Businesses Consider ClickMasters</SectionHeading>
            <p className={`mt-5 ${P}`}>{WHY_INTRO}</p>
          </div>
          <div className="mt-12">
            <IconCardGrid items={withIcons(WHY)} columns="sm:grid-cols-2 lg:grid-cols-4" />
          </div>
          <p className={`mt-10 max-w-4xl ${P}`}><RichText text={WHY_OUTRO} /></p>
        </div>
      </section>

      {/* ───────────── Process ───────────── */}
      <ProcessGrid
        eyebrow="Six steps"
        title="Our E-commerce Technology Development Approach"
        steps={PROCESS.map((s) => ({ title: s.title, rows: [{ label: "What happens", text: s.text }] }))}
      />

      <FaqSection
        title="AI Solutions for E-commerce: Frequently Asked Questions"
        intro="Search, personalisation, recommendations, support automation, forecasting, integration and customer data, answered plainly."
        faqs={FAQS}
      />

      <FinalCta
        title={FINAL_CTA.title}
        titleAccent={FINAL_CTA.titleAccent}
        body={FINAL_CTA.body}
        bring={FINAL_CTA.bring}
        primaryCta={{ label: "Discuss Your E-commerce Project", href: "/contact" }}
        secondaryCta={{ label: "Explore Our AI and Software Services", href: "/services" }}
      />
    </>
  );
}
