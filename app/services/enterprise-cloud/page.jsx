// /services/enterprise-cloud: Enterprise Cloud pillar page.
// Content: ./content.ts (from the Enterprise Cloud Pillar SEO pack). Fully server-rendered.
// Linked from the "Enterprise & Cloud" heading in the Services mega menu.
// /services/EnterpriseCloud and /services/enterprisecloud redirect here (next.config.ts).
import Image from "next/image";
import Link from "next/link";
import {
  RiAlarmWarningLine, RiArchiveLine, RiArrowDownLine, RiArrowLeftRightLine, RiArrowRightLine, RiAspectRatioLine,
  RiBuilding3Line, RiBuilding4Line, RiCalendarCheckLine, RiCheckLine, RiCloudLine, RiCloudy2Line, RiCodeSSlashLine,
  RiDatabase2Line, RiExpandUpDownLine, RiFingerprintLine, RiGitBranchLine, RiGraduationCapLine, RiHeartPulseLine,
  RiHome4Line, RiInformationLine, RiKey2Line, RiKeyLine, RiLayoutGridLine, RiLayoutLine, RiLinksLine, RiLockLine,
  RiMoneyPoundCircleLine, RiNodeTree, RiPlugLine, RiPriceTag3Line, RiRadarLine, RiRefreshLine, RiSave3Line,
  RiSearchEyeLine, RiServerLine, RiShieldCheckLine, RiShieldKeyholeLine, RiShoppingCart2Line, RiStackLine,
  RiToolsLine, RiTruckLine, RiUploadCloud2Line, RiUserSettingsLine, RiZzzLine,
} from "../../Components/icons";

import JsonLd from "../../Components/JsonLd";
import ScopingCallBlock from "../../Components/ScopingCallBlock";
import { IconTile, SectionHeading, WRAP } from "../../Components/ServicePageUI";
import {
  ComparisonTable, FaqSection, FinalCta, IconCardGrid, ProcessGrid, RichText, ServiceHero, faqPageJsonLd,
} from "../../Components/ServicePageSections";
import { detailPageJsonLd, detailPageMetadata } from "../../lib/site";
import {
  CAPABILITIES, CLOUD_NATIVE, COST, DEPLOYMENT, FAQS, FINAL_CTA, HERO, HERO_FLOW, IMAGES, INDUSTRIES, MIGRATION, PATH,
  PROCESS, SCHEMA_SERVICE, SECURITY, SEO, WHAT_ARE, WHY,
} from "./content";

export const metadata = detailPageMetadata({ path: PATH, ...SEO });

const CRUMBS = [
  { name: "Services", path: "/services" },
  { name: "Enterprise Cloud", path: PATH },
];

// All icons are decorative (headings carry the meaning).
const ICONS = {
  server: RiServerLine, app: RiLayoutLine, database: RiDatabase2Line, hosting: RiCloudLine, network: RiNodeTree,
  shield: RiShieldCheckLine, plug: RiPlugLine, monitor: RiRadarLine, architecture: RiBuilding4Line,
  migrate: RiUploadCloud2Line, pipeline: RiGitBranchLine, public: RiCloudLine, private: RiShieldKeyholeLine,
  hybrid: RiLinksLine, multi: RiCloudy2Line, identity: RiFingerprintLine, key: RiKeyLine, roles: RiUserSettingsLine,
  lock: RiLockLine, secret: RiKey2Line, backup: RiSave3Line, alert: RiAlarmWarningLine, patch: RiToolsLine,
  layers: RiStackLine, size: RiAspectRatioLine, storage: RiArchiveLine, scale: RiExpandUpDownLine, idle: RiZzzLine,
  transfer: RiArrowLeftRightLine, commit: RiCalendarCheckLine, tag: RiPriceTag3Line, review: RiSearchEyeLine,
  code: RiCodeSSlashLine, flex: RiRefreshLine, health: RiHeartPulseLine, finance: RiMoneyPoundCircleLine,
  cart: RiShoppingCart2Line, education: RiGraduationCapLine, home: RiHome4Line, truck: RiTruckLine,
  factory: RiBuilding3Line, saas: RiLayoutGridLine,
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

/** "Term: text" bullet list; text is optional. */
function TermList({ items, dark = false, dot = "bg-[#AF00E8]" }) {
  return (
    <ul className="space-y-2.5">
      {items.map(([term, text]) => (
        <li key={term} className={`flex gap-2.5 text-sm leading-relaxed ${dark ? "text-gray-300" : "text-gray-700"}`}>
          <span aria-hidden="true" className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${dot}`} />
          <span><strong className={`font-semibold ${dark ? "text-white" : "text-[#1a1a1a]"}`}>{term}</strong>{text && <> <RichText text={text} /></>}</span>
        </li>
      ))}
    </ul>
  );
}

/** Hero diagram: identity layer → environments with workloads → integrations to existing systems, plus controls. */
function EstateDiagram() {
  return (
    <div role="img" aria-label={HERO.figureAlt} className="text-sm">
      <p className="flex items-center justify-center gap-2 rounded-xl bg-[#fffaeb] px-3 py-2.5 text-[12.5px] font-semibold text-[#8a6400] ring-1 ring-[#E3A600]/40">
        <RiFingerprintLine aria-hidden="true" className="h-4 w-4" />{HERO_FLOW.identity}
      </p>
      <div aria-hidden="true" className="flex justify-center py-1.5 text-[#AF00E8]/60"><RiArrowDownLine className="h-5 w-5" /></div>
      <div className="rounded-2xl bg-gradient-to-br from-[#2a0b3a] to-[#0d0a12] p-4 text-white">
        <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[#e9c2ff]">
          <RiCloudLine aria-hidden="true" className="h-3.5 w-3.5" />Cloud estate
        </p>
        <ul className="mt-3 grid grid-cols-3 gap-1.5">
          {HERO_FLOW.environments.map((e) => (
            <li key={e} className="rounded-lg border border-white/15 px-1 py-1.5 text-center text-[11px] font-semibold text-gray-300">{e}</li>
          ))}
        </ul>
        <ul className="mt-2 grid grid-cols-3 gap-1.5">
          {HERO_FLOW.workloads.map((w, i) => {
            const Icon = [RiLayoutLine, RiDatabase2Line, RiArchiveLine][i];
            return (
              <li key={w} className="flex flex-col items-center gap-1 rounded-lg bg-white/10 px-1 py-2 text-center text-[11.5px] font-semibold">
                <Icon aria-hidden="true" className="h-4 w-4 text-[#5EEAD4]" />{w}
              </li>
            );
          })}
        </ul>
        <p className="mt-2.5 text-center text-[10.5px] text-gray-400">{HERO_FLOW.controls.join(" · ")}</p>
      </div>
      <div aria-hidden="true" className="flex justify-center py-1.5 text-[#AF00E8]/60"><RiArrowLeftRightLine className="h-5 w-5 rotate-90" /></div>
      <ul className="grid grid-cols-4 gap-1.5">
        {HERO_FLOW.onPrem.map((s) => (
          <li key={s} className="flex items-center justify-center gap-1 rounded-xl bg-[#f1fbf9] px-1 py-2.5 text-center text-[11.5px] font-semibold text-[#0b6f68] ring-1 ring-[#0F9F94]/20">
            <RiPlugLine aria-hidden="true" className="h-3.5 w-3.5 shrink-0" />{s}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function EnterpriseCloudPillar() {
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
        primaryCta={{ label: "Discuss Your Cloud Project", href: "/contact" }}
        secondaryCta={{ label: "Explore Our Cloud Services", href: "#capabilities" }}
        stats={HERO.stats}
        figureLabel="One estate, designed on purpose"
        figure={<EstateDiagram />}
        figcaption="Illustrative architecture, not a client project."
      />

      <ScopingCallBlock path={PATH} service="enterprise cloud services" />

      {/* ───────────── What are enterprise cloud services ───────────── */}
      <section aria-labelledby="what-heading" className="bg-white py-16 lg:py-24">
        <div className={WRAP}>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <SectionHeading id="what-heading" eyebrow="The basics">{WHAT_ARE.title}</SectionHeading>
              <p className={`mt-6 ${P}`}>{WHAT_ARE.intro}</p>
            </div>
            <Photo image={IMAGES.fibre} sizes={HALF} className="aspect-[3/2]" />
          </div>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {WHAT_ARE.items.map((it) => (
              <li key={it.title} className="rounded-2xl border border-gray-100 bg-[#faf9f7] p-5">
                <IconTile icon={ICONS[it.icon]} size="sm" />
                <h3 className="mt-3 font-bold leading-snug text-[#1a1a1a]">{it.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-gray-600">{it.text}</p>
              </li>
            ))}
          </ul>
          <p className="mt-8 rounded-2xl bg-[#faf5fd] px-6 py-5 text-[15px] leading-relaxed text-gray-700 ring-1 ring-[#AF00E8]/15"><Rich text={WHAT_ARE.notHosting} /></p>
        </div>
      </section>

      {/* ───────────── Capabilities ───────────── */}
      <section id="capabilities" aria-labelledby="capabilities-heading" className="scroll-mt-28 border-y border-[#9b1fe0]/10 bg-[#faf9f7] py-16 lg:py-24">
        <div className={WRAP}>
          <div className="max-w-3xl">
            <SectionHeading id="capabilities-heading" eyebrow="Five capabilities">{CAPABILITIES.title}</SectionHeading>
          </div>
          <ul className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {CAPABILITIES.items.map((c, i) => (
              <li key={c.id} id={c.id} className={`scroll-mt-28 rounded-3xl border border-gray-100 bg-white p-6 ${i === 0 ? "lg:col-span-2" : ""}`}>
                <div className="flex items-center gap-3">
                  <IconTile icon={ICONS[c.icon]} />
                  <h3 className="text-[21px] font-bold leading-snug text-[#1a1a1a]" style={SERIF}>{c.title}</h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-gray-600 lg:text-[15px]"><RichText text={c.text} /></p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ───────────── Deployment models ───────────── */}
      <section aria-labelledby="deployment-heading" className="bg-white py-16 lg:py-24">
        <div className={WRAP}>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <SectionHeading id="deployment-heading" eyebrow="Needs first, label second">{DEPLOYMENT.title}</SectionHeading>
              <p className={`mt-5 ${P}`}>{DEPLOYMENT.intro}</p>
            </div>
            <Photo image={IMAGES.skyline} sizes={HALF} className="aspect-[16/10]" />
          </div>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {DEPLOYMENT.models.map((m) => (
              <li key={m.title} className="rounded-2xl border border-gray-100 bg-[#faf9f7] p-5">
                <IconTile icon={ICONS[m.icon]} size="sm" />
                <h3 className="mt-3 font-bold text-[#1a1a1a]">{m.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-gray-600">{m.text}</p>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <ComparisonTable
              labelledBy="deployment-heading"
              headers={DEPLOYMENT.headers.map((label, i) => ({ label: label || "Model", dot: ["", "#AF00E8", "#0F9F94", "#E3A600", "#5EEAD4"][i] || undefined }))}
              rows={DEPLOYMENT.rows}
              minWidth="min-w-[960px]"
            />
          </div>
          <p className={`mt-8 max-w-4xl ${P}`}>{DEPLOYMENT.outro}</p>
        </div>
      </section>

      {/* ───────────── Migration and modernisation ───────────── */}
      <section aria-labelledby="migration-heading" className="border-y border-[#9b1fe0]/10 bg-[#faf9f7] py-16 lg:py-24">
        <div className={WRAP}>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <SectionHeading id="migration-heading" eyebrow="Portfolio-level planning">{MIGRATION.title}</SectionHeading>
              <p className={`mt-5 ${P}`}>{MIGRATION.intro}</p>
            </div>
            <Photo image={IMAGES.cabling} sizes={HALF} className="aspect-[16/10]" />
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.3fr]">
            <div className="rounded-2xl bg-white p-6 ring-1 ring-gray-100 sm:p-8">
              <h3 className="text-xl font-bold text-[#1a1a1a]" style={SERIF}>{MIGRATION.assessmentTitle}</h3>
              <div className="mt-4"><TermList items={MIGRATION.assessment} /></div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#1a1a1a]" style={SERIF} id="routes-heading">{MIGRATION.routesTitle}</h3>
              <div className="mt-4">
                <ComparisonTable
                  labelledBy="routes-heading"
                  headers={MIGRATION.routesHeaders.map((label) => ({ label }))}
                  rows={MIGRATION.routes}
                  minWidth="min-w-[560px]"
                />
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            <p className="rounded-2xl bg-[#faf5fd] px-6 py-5 text-[15px] leading-relaxed text-gray-700 ring-1 ring-[#AF00E8]/15"><Rich text={MIGRATION.modernising} /></p>
            <p className="rounded-2xl bg-[#f1fbf9] px-6 py-5 text-[15px] leading-relaxed text-gray-700 ring-1 ring-[#0F9F94]/20"><Rich text={MIGRATION.testing} /></p>
          </div>

          <div className="mt-8 rounded-2xl bg-[#fffaeb] p-6 ring-1 ring-[#E3A600]/30 sm:p-8">
            <h3 className="text-lg font-bold text-[#1a1a1a]">{MIGRATION.challengesTitle}</h3>
            <ul className="mt-4 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
              {MIGRATION.challenges.map((c) => (
                <li key={c} className="flex gap-2 text-sm leading-relaxed text-gray-700">
                  <RiAlarmWarningLine aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[#B58300]" />{c}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm italic text-gray-600">{MIGRATION.note}</p>
          </div>
        </div>
      </section>

      {/* ───────────── Cloud-native ───────────── */}
      <section aria-labelledby="native-heading" className="bg-white py-16 lg:py-24">
        <div className={WRAP}>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-16">
            <div>
              <SectionHeading id="native-heading" eyebrow="Built for the platform">{CLOUD_NATIVE.title}</SectionHeading>
              <p className={`mt-5 ${P}`}>{CLOUD_NATIVE.intro}</p>
              <div className="mt-6"><TermList items={CLOUD_NATIVE.items} /></div>
            </div>
            <div className="space-y-5 lg:sticky lg:top-28">
              <Photo image={IMAGES.terminal} sizes={HALF} className="aspect-[3/2]" />
              <p className="rounded-2xl bg-[#faf5fd] px-6 py-5 text-[15px] leading-relaxed text-gray-700 ring-1 ring-[#AF00E8]/15"><Rich text={CLOUD_NATIVE.note} /></p>
            </div>
          </div>
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
                      {ind.title}<RiArrowRightLine aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                    <span className="mt-1.5 text-sm leading-relaxed text-gray-600">{ind.text}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* ───────────── Security ───────────── */}
      <section aria-labelledby="security-heading" className="relative overflow-hidden bg-[#0d0a12] py-16 text-white lg:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-[#AF00E8]/20 blur-3xl" />
        <div className={`${WRAP} relative`}>
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-14">
            <div>
              <SectionHeading id="security-heading" eyebrow="Shared responsibility · UK GDPR · Resilience" dark>{SECURITY.title}</SectionHeading>
              <p className="mt-5 text-[15px] leading-relaxed text-gray-300 lg:text-base">Cloud security is a <strong className="text-white">shared responsibility</strong>:</p>
              <ol className="mt-4 space-y-3">
                {SECURITY.shared.map((s, i) => (
                  <li key={s.title} className="flex gap-3 text-sm leading-relaxed text-gray-300">
                    <span aria-hidden="true" className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#AF00E8] text-[11px] font-bold text-white">{i + 1}</span>
                    <span><strong className="font-semibold text-white">{s.title}</strong> {s.text}</span>
                  </li>
                ))}
              </ol>
              <p className="mt-4 text-sm leading-relaxed text-gray-300">{SECURITY.sharedNote}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-8">
              <h3 className="text-xl font-bold text-white lg:text-2xl" style={SERIF}>{SECURITY.ukTitle}</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-300">{SECURITY.ukIntro}</p>
              <div className="mt-4"><TermList items={SECURITY.uk} dark dot="bg-[#5EEAD4]" /></div>
              <p className="mt-4 text-sm leading-relaxed text-gray-300">{SECURITY.multiRegion}</p>
            </div>
          </div>
          <h3 className="mt-12 text-xl font-bold text-white lg:text-2xl" style={SERIF}>Controls we design in</h3>
          <div className="mt-6">
            <IconCardGrid items={withIcons(SECURITY.controls)} dark columns="sm:grid-cols-2 lg:grid-cols-4" compact />
          </div>
          <p className="mt-8 flex max-w-4xl gap-3 rounded-2xl bg-white/[0.08] px-5 py-4 text-sm font-medium leading-relaxed text-gray-200 ring-1 ring-white/15">
            <RiShieldCheckLine aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-[#e9c2ff]" />{SECURITY.statement}
          </p>
        </div>
      </section>

      {/* ───────────── Cost ───────────── */}
      <section aria-labelledby="cost-heading" className="bg-white py-16 lg:py-24">
        <div className={WRAP}>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <SectionHeading id="cost-heading" eyebrow="FinOps without the jargon">{COST.title}</SectionHeading>
              <p className={`mt-5 ${P}`}>{COST.intro}</p>
            </div>
            <Photo image={IMAGES.cooling} sizes={HALF} className="aspect-[16/10]" />
          </div>
          <div className="mt-12">
            <IconCardGrid items={withIcons(COST.items)} columns="sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5" />
          </div>
          <p className="mt-8 flex max-w-4xl gap-3 rounded-2xl bg-[#faf9f7] px-5 py-4 text-sm leading-relaxed text-gray-700 ring-1 ring-gray-100">
            <RiInformationLine aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-[#AF00E8]" />{COST.note}
          </p>
        </div>
      </section>

      {/* ───────────── Process ───────────── */}
      <ProcessGrid
        eyebrow="Eight stages"
        title={PROCESS.title}
        faint
        columns="md:grid-cols-2 lg:grid-cols-4"
        checkLabel="You can expect"
        steps={PROCESS.steps.map((s) => ({ title: s.title, rows: [{ label: "What happens", text: s.text }], risk: s.expect }))}
        after={
          <p className="mt-8 flex max-w-4xl gap-3 rounded-2xl bg-white px-5 py-4 text-sm leading-relaxed text-gray-700 ring-1 ring-gray-100">
            <RiInformationLine aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-[#AF00E8]" />{PROCESS.outro}
          </p>
        }
      />

      {/* ───────────── Why ───────────── */}
      <section aria-labelledby="why-heading" className="bg-white py-16 lg:py-24">
        <div className={WRAP}>
          <div className="max-w-3xl">
            <SectionHeading id="why-heading" eyebrow="Why ClickMasters">{WHY.title}</SectionHeading>
          </div>
          <div className="mt-12">
            <IconCardGrid items={withIcons(WHY.items)} columns="sm:grid-cols-2 lg:grid-cols-4" />
          </div>
          <p className="mt-8 flex items-center gap-2 text-sm text-gray-600">
            <RiCheckLine aria-hidden="true" className="h-4 w-4 text-[#AF00E8]" />
            Hands-on pipelines, infrastructure as code and containers are covered on our{" "}
            <Link href="/services/cloud-devops" className="font-semibold text-[#AF00E8] hover:underline">Cloud and DevOps</Link> page.
          </p>
        </div>
      </section>

      <FaqSection
        title="Enterprise Cloud Services: Frequently Asked Questions"
        intro="Architecture, deployment models, migration, legacy applications, cloud-native development, security, cost and integration, answered plainly."
        faqs={FAQS}
      />

      <FinalCta
        title={FINAL_CTA.title}
        titleAccent={FINAL_CTA.titleAccent}
        body={FINAL_CTA.body}
        bring={FINAL_CTA.bring}
        primaryCta={{ label: "Discuss Your Enterprise Cloud Requirements", href: "/contact" }}
        secondaryCta={{ label: "View All Services", href: "/services" }}
      />
    </>
  );
}
