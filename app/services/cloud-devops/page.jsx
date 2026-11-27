// /services/cloud-devops
// Content: ./content.ts (from the Cloud & DevOps SEO pack). Fully server-rendered.
// Same building blocks as /services/machine-learning and /services/erp-crm-development.
// This real folder takes precedence over the app/services/[slug] placeholder route.
import Image from "next/image";
import {
  RiArchiveStackLine, RiBankLine, RiBriefcase4Line, RiBugLine, RiBuilding2Line, RiChat3Line, RiCheckLine,
  RiCloudLine, RiCodeSSlashLine, RiCompass3Line, RiCustomerService2Line, RiDatabase2Line, RiExchangeLine, RiFlowChart,
  RiFocus3Line, RiGitMergeLine, RiGraduationCapLine, RiHeartPulseLine, RiHistoryLine, RiInformationLine, RiInstanceLine,
  RiKey2Line, RiLayoutMasonryLine, RiLockLine, RiNodeTree, RiPlugLine, RiPulseLine, RiRocket2Line, RiScales3Line,
  RiSettings3Line, RiShieldCheckLine, RiShoppingCart2Line, RiSpeedUpLine, RiStackLine, RiTestTubeLine, RiTruckLine,
  RiGlobalLine, RiLockPasswordLine, RiPriceTag3Line, RiDashboard3Line, RiServerLine,
} from "../../Components/icons";

import JsonLd from "../../Components/JsonLd";
import ScopingCallBlock from "../../Components/ScopingCallBlock";
import { IconTile, SectionHeading, WRAP } from "../../Components/ServicePageUI";
import {
  ComparisonTable, FaqSection, FinalCta, IconCardGrid, Linked, ServiceHero, faqPageJsonLd,
} from "../../Components/ServicePageSections";
import { detailPageJsonLd, detailPageMetadata } from "../../lib/site";
import {
  BOTTLENECK, CLOUD_SERVICES, CONTAINERS, COST, DEVOPS_SERVICES, FAQS, FINAL_CTA, HERO, IAC, IMAGES, INDUSTRIES,
  INDUSTRIES_NOTE, NATIVE_VS, PATH, PIPELINE, PLATFORMS, PROCESS, SCENARIOS, SCENARIOS_NOTE, SCHEMA_SERVICE, SECURITY,
  SECURITY_INTRO, SECURITY_NOTE, SEO, WHY,
} from "./content";

export const metadata = detailPageMetadata({ path: PATH, ...SEO });

const CRUMBS = [
  { name: "Services", path: "/services" },
  { name: "Cloud Solutions & DevOps", path: PATH },
];

const CONTACT_HREF = "/contact?service=cloud%20and%20DevOps#contact-form";

// All icons are decorative (headings carry the meaning).
const ICONS = {
  cloud: RiCloudLine, architecture: RiLayoutMasonryLine, native: RiNodeTree, migrate: RiExchangeLine,
  database: RiDatabase2Line, plug: RiPlugLine, scale: RiStackLine, optimise: RiSpeedUpLine, backup: RiArchiveStackLine,
  support: RiCustomerService2Line, compass: RiCompass3Line, pipeline: RiGitMergeLine, rocket: RiRocket2Line,
  code: RiCodeSSlashLine, box: RiServerLine, cluster: RiNodeTree, test: RiTestTubeLine, release: RiPriceTag3Line,
  monitor: RiDashboard3Line, flow: RiFlowChart, key: RiKey2Line, lock: RiLockLine, network: RiGlobalLine,
  shield: RiShieldCheckLine, settings: RiSettings3Line, secret: RiLockPasswordLine, bug: RiBugLine,
  history: RiHistoryLine, pulse: RiPulseLine, scales: RiScales3Line, saas: RiInstanceLine, finance: RiBankLine,
  cart: RiShoppingCart2Line, health: RiHeartPulseLine, education: RiGraduationCapLine, truck: RiTruckLine,
  factory: RiSettings3Line, building: RiBuilding2Line, briefcase: RiBriefcase4Line, target: RiFocus3Line,
  chat: RiChat3Line,
};
const withIcons = (items) => items.map((it) => ({ ...it, icon: ICONS[it.icon] }));

/** Renders **bold** markers from the content file. */
function Rich({ text, dark = false }) {
  return text.split(/(\*\*[^*]+\*\*)/).map((part, i) =>
    part.startsWith("**") ? <strong key={i} className={`font-semibold ${dark ? "text-white" : "text-[#1a1a1a]"}`}>{part.slice(2, -2)}</strong> : part
  );
}

function Diagram({ image, caption, className = "" }) {
  return (
    <figure className={`rounded-3xl border border-gray-100 bg-white p-4 shadow-[0_20px_60px_-30px_rgba(60,0,90,0.35)] sm:p-8 ${className}`}>
      <Image src={image.src} width={image.width} height={image.height} alt={image.alt} sizes="(min-width: 1280px) 1216px, 100vw" className="h-auto w-full" />
      {caption && <figcaption className="mt-4 text-center text-xs text-gray-500">{caption}</figcaption>}
    </figure>
  );
}

function Photo({ image, sizes, className = "" }) {
  return (
    <div className={`relative overflow-hidden rounded-3xl ring-1 ring-black/5 ${className}`}>
      <Image src={image.src} width={image.width} height={image.height} alt={image.alt} sizes={sizes} className="h-full w-full object-cover" />
    </div>
  );
}

function TermList({ items, dark = false, ordered = false }) {
  const Tag = ordered ? "ol" : "ul";
  return (
    <Tag className="mt-4 space-y-2.5">
      {items.map(([term, text], i) => (
        <li key={term} className={`flex gap-2.5 text-[15px] leading-relaxed ${dark ? "text-gray-300" : "text-gray-700"}`}>
          {ordered ? (
            <span aria-hidden="true" className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#AF00E8] text-xs font-bold text-white">{i + 1}</span>
          ) : (
            <RiCheckLine aria-hidden="true" className={`mt-1 h-4 w-4 shrink-0 ${dark ? "text-[#5EEAD4]" : "text-[#AF00E8]"}`} />
          )}
          <span><strong className={`font-semibold ${dark ? "text-white" : "text-[#1a1a1a]"}`}>{term}</strong> {text}</span>
        </li>
      ))}
    </Tag>
  );
}

const P = "text-[15px] leading-relaxed text-gray-600 lg:text-base";
const SERIF = { fontFamily: "Garamond, serif" };
const HALF = "(min-width: 1280px) 600px, (min-width: 1024px) 48vw, 100vw";
const FIELD = "text-xs font-bold uppercase tracking-[0.14em] text-gray-500";

export default function CloudDevOps() {
  return (
    <>
      <JsonLd
        data={detailPageJsonLd({
          path: PATH,
          name: `${SEO.title} | ClickMasters`,
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
        primaryCta={{ label: "Discuss Your Cloud Project", href: CONTACT_HREF }}
        secondaryCta={{ label: "Explore Our Services", href: "/services" }}
        stats={HERO.stats}
        figureLabel="Releases you can repeat, infrastructure you can rebuild"
        figure={
          <Image
            src={IMAGES.workflow.src}
            width={IMAGES.workflow.width}
            height={IMAGES.workflow.height}
            alt={IMAGES.workflow.alt}
            sizes="(min-width: 1024px) 560px, 100vw"
            preload
            className="h-auto w-full"
          />
        }
        figcaption="Every change takes the same tested path, on infrastructure defined in code."
      />

      <ScopingCallBlock path={PATH} service="cloud and DevOps" />

      {/* ───────────── Bottleneck ───────────── */}
      <section aria-labelledby="bottleneck-heading" className="bg-white py-16 lg:py-24">
        <div className={WRAP}>
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div>
              <SectionHeading id="bottleneck-heading" eyebrow="Sound familiar?">Why Infrastructure and Releases Become a Bottleneck</SectionHeading>
              <p className={`mt-6 ${P}`}>{BOTTLENECK.intro}</p>
              <h3 className="mt-10 text-xl font-bold text-[#1a1a1a]" style={SERIF}>{BOTTLENECK.problemsTitle}</h3>
              <TermList items={BOTTLENECK.problems} />
              <p className="mt-6 text-[15px] font-medium leading-relaxed text-[#4b1d63]">{BOTTLENECK.outro}</p>
            </div>
            <Photo image={IMAGES.network} sizes="(min-width: 1280px) 540px, (min-width: 1024px) 42vw, 100vw" className="aspect-[4/5] self-center" />
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl bg-[#f1fbf9] p-6 ring-1 ring-[#0F9F94]/20 sm:p-8 md:col-span-2">
              <h3 className="text-2xl font-bold text-[#1a1a1a]" style={SERIF}>{BOTTLENECK.relatedTitle}</h3>
              <div className="mt-4 grid gap-5 md:grid-cols-2">
                <p className="text-[15px] leading-relaxed text-gray-700"><Rich text={BOTTLENECK.cloud} /></p>
                <p className="text-[15px] leading-relaxed text-gray-700"><Rich text={BOTTLENECK.devops} /></p>
              </div>
              <p className="mt-5 text-[15px] leading-relaxed text-gray-700">{BOTTLENECK.together}</p>
            </div>
          </div>

          <h3 id="need-heading" className="mt-16 text-2xl font-bold text-[#1a1a1a] lg:text-3xl" style={SERIF}>{BOTTLENECK.needTitle}</h3>
          <p className={`mt-4 max-w-3xl ${P}`}>{BOTTLENECK.needIntro}</p>
          <Diagram image={IMAGES.tiers} className="mt-8" />
          <div className="mt-8">
            <ComparisonTable labelledBy="need-heading" headers={[{ label: "Your situation" }, { label: "Usually enough" }, { label: "Consider more when…" }]} rows={BOTTLENECK.needRows} minWidth="min-w-[760px]" />
          </div>
          <p className={`mt-6 max-w-3xl ${P}`}>{BOTTLENECK.needOutro}</p>
        </div>
      </section>

      {/* ───────────── Cloud services ───────────── */}
      <section aria-labelledby="cloud-heading" className="border-y border-[#9b1fe0]/10 bg-[#faf9f7] py-16 lg:py-24">
        <div className={WRAP}>
          <div className="max-w-3xl">
            <SectionHeading id="cloud-heading" eyebrow="10 cloud services">Cloud Development Services</SectionHeading>
          </div>
          <ul className="mt-12 grid gap-5 lg:grid-cols-2">
            {CLOUD_SERVICES.map((s) => (
              <li key={s.title} className="overflow-hidden rounded-3xl border border-gray-100 bg-white">
                <div className="flex items-start gap-4 p-6 sm:p-7">
                  <IconTile icon={ICONS[s.icon]} />
                  <div>
                    <h3 className="text-[21px] font-bold leading-snug text-[#1a1a1a]" style={SERIF}>{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-700">{s.involves}</p>
                  </div>
                </div>
                <dl className="grid gap-px bg-gray-100 sm:grid-cols-2">
                  <div className="bg-[#faf9f7] px-6 py-5"><dt className={FIELD}>Problem solved</dt><dd className="mt-2 text-sm leading-relaxed text-gray-700">{s.problem}</dd></div>
                  <div className="bg-[#faf9f7] px-6 py-5"><dt className={FIELD}>How it works</dt><dd className="mt-2 text-sm leading-relaxed text-gray-700"><Linked value={s.how} /></dd></div>
                  <div className="bg-[#faf9f7] px-6 py-5"><dt className={FIELD}>Applications</dt><dd className="mt-2 text-sm leading-relaxed text-gray-700">{s.applications}</dd></div>
                  <div className="bg-[#faf9f7] px-6 py-5"><dt className={FIELD}>Value</dt><dd className="mt-2 text-sm leading-relaxed text-gray-700">{s.value}</dd></div>
                </dl>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ───────────── DevOps services ───────────── */}
      <section aria-labelledby="devops-heading" className="bg-white py-16 lg:py-24">
        <div className={WRAP}>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <SectionHeading id="devops-heading" eyebrow="10 DevOps services">DevOps Engineering Services</SectionHeading>
            </div>
            <Photo image={IMAGES.team} sizes={HALF} className="aspect-[16/10]" />
          </div>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {DEVOPS_SERVICES.map((s) => (
              <li key={s.title} className="flex flex-col rounded-2xl border border-gray-100 bg-[#faf9f7] p-6">
                <IconTile icon={ICONS[s.icon]} />
                <h3 className="mt-4 text-lg font-bold text-[#1a1a1a]">{s.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600"><Linked value={s.text} /></p>
                <p className="mt-4 rounded-xl bg-white px-4 py-3 text-xs leading-relaxed text-gray-700 ring-1 ring-[#AF00E8]/15">
                  <span className="font-bold uppercase tracking-wider text-[#7a1fa2]">Practical value: </span>{s.value}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ───────────── Platforms ───────────── */}
      <section aria-labelledby="platforms-heading" className="relative overflow-hidden bg-[#0d0a12] py-16 text-white lg:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-[#AF00E8]/25 blur-3xl" />
        <div className={`${WRAP} relative`}>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <SectionHeading id="platforms-heading" eyebrow="Chosen for your situation" dark>Cloud Platforms We Work With</SectionHeading>
              <p className="mt-5 text-[15px] leading-relaxed text-gray-300 lg:text-base">{PLATFORMS.intro}</p>
            </div>
            <Photo image={IMAGES.earth} sizes={HALF} className="aspect-[16/10] ring-white/10" />
          </div>
          <ul className="mt-12 grid gap-4 lg:grid-cols-3">
            {PLATFORMS.items.map((p) => (
              <li key={p.title} className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                <h3 className="text-xl font-bold" style={SERIF}>{p.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-300">{p.text}</p>
                <p className="mt-4 rounded-xl bg-white/[0.06] px-4 py-3 text-sm leading-relaxed text-gray-200 ring-1 ring-white/10">
                  <span className="font-semibold text-[#5EEAD4]">Often a good fit for: </span>{p.fit}
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-4xl text-[15px] leading-relaxed text-gray-300">{PLATFORMS.outro}</p>
        </div>
      </section>

      {/* ───────────── CI/CD ───────────── */}
      <section aria-labelledby="cicd-heading" className="bg-white py-16 lg:py-24">
        <div className={WRAP}>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeading id="cicd-heading" eyebrow="Commit to production">CI/CD Pipelines and Automated Deployment</SectionHeading>
              <p className={`mt-5 ${P}`}>{PIPELINE.intro}</p>
              <h3 className="mt-8 text-xl font-bold text-[#1a1a1a]" style={SERIF}>{PIPELINE.stepsTitle}</h3>
              <TermList items={PIPELINE.steps} ordered />
            </div>
            <div className="flex flex-col gap-6">
              <Photo image={IMAGES.terminal} sizes={HALF} className="aspect-[4/3]" />
              <p className="rounded-2xl bg-[#faf5fd] p-5 text-[15px] leading-relaxed text-gray-700 ring-1 ring-[#AF00E8]/15"><Rich text={PIPELINE.example} /></p>
            </div>
          </div>
          <Diagram image={IMAGES.pipeline} className="mt-12" />
        </div>
      </section>

      {/* ───────────── Containers ───────────── */}
      <section aria-labelledby="containers-heading" className="border-y border-[#9b1fe0]/10 bg-[#faf9f7] py-16 lg:py-24">
        <div className={WRAP}>
          <div className="max-w-3xl">
            <SectionHeading id="containers-heading" eyebrow="Consistent and scalable">Docker, Containers and Kubernetes</SectionHeading>
          </div>
          <Diagram image={IMAGES.containers} className="mt-10" />
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            <div className="rounded-2xl bg-white p-6 ring-1 ring-[#0F6B5C]/20 sm:p-8">
              <h3 className="text-xl font-bold text-[#1a1a1a]" style={SERIF}>{CONTAINERS.dockerTitle}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-gray-700"><Rich text={CONTAINERS.docker} /></p>
            </div>
            <div className="rounded-2xl bg-white p-6 ring-1 ring-[#AF00E8]/20 sm:p-8">
              <h3 className="text-xl font-bold text-[#1a1a1a]" style={SERIF}>{CONTAINERS.k8sTitle}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-gray-700"><Rich text={CONTAINERS.k8s} /></p>
              <p className="mt-3 text-[15px] leading-relaxed text-gray-700"><Rich text={CONTAINERS.monitoring} /></p>
            </div>
          </div>
          <div className="mt-5 rounded-2xl bg-[#fffaeb] p-6 ring-1 ring-[#E3A600]/25 sm:p-8">
            <h3 className="text-xl font-bold text-[#1a1a1a]" style={SERIF}>{CONTAINERS.notTitle}</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-gray-700">{CONTAINERS.not}</p>
          </div>
        </div>
      </section>

      {/* ───────────── Infrastructure as code ───────────── */}
      <section aria-labelledby="iac-heading" className="bg-white py-16 lg:py-24">
        <div className={WRAP}>
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div>
              <SectionHeading id="iac-heading" eyebrow="Rebuildable by design">Infrastructure as Code and Automation</SectionHeading>
              <p className={`mt-5 ${P}`}><Rich text={IAC.intro} /></p>
              <p className={`mt-4 ${P}`}><Rich text={IAC.lead} /></p>
              <TermList items={IAC.items} />
            </div>
            <Photo image={IMAGES.code} sizes="(min-width: 1280px) 540px, (min-width: 1024px) 42vw, 100vw" className="aspect-[4/5] self-center" />
          </div>
          <Diagram image={IMAGES.terraform} className="mt-12" />
          <p className={`mt-6 max-w-4xl ${P}`}>{IAC.outro}</p>
        </div>
      </section>

      {/* ───────────── Security ───────────── */}
      <section aria-labelledby="security-heading" className="relative overflow-hidden bg-[#0d0a12] py-16 text-white lg:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-[#AF00E8]/20 blur-3xl" />
        <div className={`${WRAP} relative`}>
          <div className="max-w-3xl">
            <SectionHeading id="security-heading" eyebrow="Designed in from day one" dark>Cloud Security and Reliability</SectionHeading>
            <p className="mt-5 text-[15px] leading-relaxed text-gray-300 lg:text-base">{SECURITY_INTRO}</p>
          </div>
          <figure className="mt-10 rounded-3xl bg-white p-4 sm:p-8">
            <Image src={IMAGES.security.src} width={IMAGES.security.width} height={IMAGES.security.height} alt={IMAGES.security.alt} sizes="(min-width: 1280px) 1216px, 100vw" className="h-auto w-full" />
          </figure>
          <div className="mt-10">
            <IconCardGrid items={withIcons(SECURITY)} dark columns="sm:grid-cols-2 lg:grid-cols-3" compact />
          </div>
          <p className="mt-8 max-w-4xl text-sm leading-relaxed text-gray-400">{SECURITY_NOTE}</p>
        </div>
      </section>

      {/* ───────────── Cost ───────────── */}
      <section aria-labelledby="cost-heading" className="bg-white py-16 lg:py-24">
        <div className={WRAP}>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div>
              <SectionHeading id="cost-heading" eyebrow="Every line has an owner">Cloud Cost Optimisation</SectionHeading>
              <p className={`mt-5 ${P}`}>{COST.intro}</p>
              <p className="mt-6 flex gap-3 rounded-2xl bg-[#faf5fd] p-5 text-[15px] leading-relaxed text-[#4b1d63] ring-1 ring-[#AF00E8]/10">
                <RiInformationLine aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-[#AF00E8]" />
                {COST.outro}
              </p>
            </div>
            <TermList items={COST.items} />
          </div>
        </div>
      </section>

      {/* ───────────── Industries ───────────── */}
      <section aria-labelledby="industries-heading" className="border-y border-[#9b1fe0]/10 bg-[#faf9f7] py-16 lg:py-24">
        <div className={WRAP}>
          <div className="max-w-3xl">
            <SectionHeading id="industries-heading" eyebrow="Common challenges by sector">Cloud and DevOps Use Cases by Industry</SectionHeading>
            <p className={`mt-5 ${P}`}><em>{INDUSTRIES_NOTE}</em></p>
          </div>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {INDUSTRIES.map((ind) => (
              <li key={ind.title} className="flex flex-col rounded-2xl border border-gray-100 bg-white p-6">
                <IconTile icon={ICONS[ind.icon]} />
                <h3 className="mt-4 text-lg font-bold text-[#1a1a1a]">{ind.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600"><span className="font-semibold text-[#1a1a1a]">Challenge: </span>{ind.challenge}</p>
                <p className="mt-2 text-sm leading-relaxed text-gray-600"><span className="font-semibold text-[#0F9F94]">How cloud and DevOps help: </span><Linked value={ind.help} /></p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ───────────── Cloud-native vs traditional ───────────── */}
      <section aria-labelledby="native-heading" className="bg-white py-16 lg:py-24">
        <div className={WRAP}>
          <div className="max-w-3xl">
            <SectionHeading id="native-heading" eyebrow="Decide on evidence">Cloud-Native vs Traditional Infrastructure</SectionHeading>
          </div>
          <div className="mt-10">
            <ComparisonTable
              labelledBy="native-heading"
              headers={[{ label: NATIVE_VS.headers[0] }, { label: NATIVE_VS.headers[1], dot: "#E3A600" }, { label: NATIVE_VS.headers[2], dot: "#AF00E8" }]}
              rows={NATIVE_VS.rows}
            />
          </div>
          <p className={`mt-8 max-w-4xl ${P}`}><Rich text={NATIVE_VS.outro} /></p>
        </div>
      </section>

      {/* ───────────── Process ───────────── */}
      <section id="process" aria-labelledby="process-heading" className="scroll-mt-28 border-y border-[#9b1fe0]/10 bg-[#faf9f7] py-16 lg:py-24">
        <div className={WRAP}>
          <div className="max-w-3xl">
            <SectionHeading id="process-heading" eyebrow="10 stages">Our Cloud and DevOps Development Process</SectionHeading>
          </div>
          <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {PROCESS.map((step, i) => (
              <li key={step.title} className="flex flex-col rounded-2xl border border-gray-100 bg-white p-5">
                <div className="flex items-center">
                  <span aria-hidden="true" className="step-num">{String(i + 1).padStart(2, "0")}</span>
                  <span aria-hidden="true" className="step-line" />
                </div>
                <h3 className="mt-4 font-bold text-[#1a1a1a]">{i + 1}. {step.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">{step.what}</p>
                <p className="mt-4 rounded-xl bg-[#f1fbf9] px-3 py-2.5 text-xs leading-relaxed text-gray-700 ring-1 ring-[#5EEAD4]/60">
                  <span className="font-bold uppercase tracking-wider text-[#0F9F94]">Purpose: </span>{step.purpose}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ───────────── Why ───────────── */}
      <section aria-labelledby="why-heading" className="bg-white py-16 lg:py-24">
        <div className={WRAP}>
          <div className="max-w-3xl">
            <SectionHeading id="why-heading" eyebrow="How we work">Why Choose ClickMasters for Cloud and DevOps?</SectionHeading>
          </div>
          <div className="mt-12">
            <IconCardGrid items={withIcons(WHY)} columns="sm:grid-cols-2 lg:grid-cols-4" />
          </div>
        </div>
      </section>

      {/* ───────────── Example scenarios ───────────── */}
      <section aria-labelledby="scenarios-heading" className="border-y border-[#9b1fe0]/10 bg-[#faf9f7] py-16 lg:py-24">
        <div className={WRAP}>
          <div className="max-w-3xl">
            <SectionHeading id="scenarios-heading" eyebrow="Illustrative, not case studies">Example Scenarios</SectionHeading>
            <p className={`mt-5 ${P}`}><em>{SCENARIOS_NOTE}</em></p>
          </div>
          <ul className="mt-12 grid gap-5 lg:grid-cols-3">
            {SCENARIOS.map((sc) => (
              <li key={sc.title} className="flex flex-col rounded-3xl border border-gray-100 bg-white p-6 sm:p-7">
                <h3 className="text-xl font-bold leading-snug text-[#1a1a1a]" style={SERIF}>{sc.title}</h3>
                <dl className="mt-4 space-y-4 text-sm leading-relaxed text-gray-700">
                  <div><dt className={FIELD}>Situation</dt><dd className="mt-1.5">{sc.situation}</dd></div>
                  <div><dt className={FIELD}>Approach</dt><dd className="mt-1.5">{sc.approach}</dd></div>
                  <div><dt className={FIELD}>Outcome sought</dt><dd className="mt-1.5">{sc.outcome}</dd></div>
                </dl>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FaqSection
        title="Cloud and DevOps Services: Frequently Asked Questions"
        intro="Cloud vs DevOps, CI/CD, Docker vs Kubernetes, migration, platforms and cost, answered plainly."
        faqs={FAQS}
      />

      <FinalCta
        title={FINAL_CTA.title}
        titleAccent={FINAL_CTA.titleAccent}
        body={FINAL_CTA.body}
        bring={FINAL_CTA.bring}
        primaryCta={{ label: "Discuss Your Cloud Project", href: CONTACT_HREF }}
        secondaryCta={{ label: "Explore Our Services", href: "/services" }}
      />
    </>
  );
}
