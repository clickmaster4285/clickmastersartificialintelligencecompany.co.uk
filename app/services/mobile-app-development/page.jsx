// /services/mobile-app-development
// Content: ./content.ts (from the Mobile App SEO pack). Fully server-rendered.
// This real folder takes precedence over the app/services/[slug] placeholder route.
import {
  RiApps2Line, RiBankCardLine, RiBattery2ChargeLine, RiBox3Line, RiBriefcase4Line, RiBugLine, RiBuilding2Line,
  RiBuilding4Line, RiCalendarCheckLine, RiClipboardLine, RiCodeBoxLine, RiDeviceLine, RiDragMoveLine,
  RiEyeOffLine, RiFingerprintLine, RiFlutterFill, RiGraduationCapLine, RiHeartPulseLine, RiKeyLine,
  RiLayoutColumnLine, RiListCheck, RiLockLine, RiNodeTree, RiNotification3Line, RiPaletteLine, RiPlugLine,
  RiPulseLine, RiReactjsLine, RiRefreshLine, RiRocket2Line, RiSafe2Line, RiSecurePaymentLine, RiServerLine,
  RiSettings3Line, RiShieldCheckLine, RiShoppingBag3Line, RiSignalWifi3Line, RiSmartphoneLine, RiSpeedLine,
  RiTabletLine, RiTeamLine, RiTimerLine, RiToolsLine, RiTruckLine, RiUser3Line, RiUserSettingsLine,
  RiWheelchairLine, RiWifiOffLine,
} from "../../Components/icons";

import JsonLd from "../../Components/JsonLd";
import ScopingCallBlock from "../../Components/ScopingCallBlock";
import { TechLogo } from "../../Components/TechLogoGroups";
import { IconTile, SectionHeading, WRAP } from "../../Components/ServicePageUI";
import {
  CheckCard, ComparisonTable, FaqSection, FinalCta, IconCardGrid, IndustryGrid, Linked, ProcessGrid, ServiceCards,
  ServiceHero, faqPageJsonLd,
} from "../../Components/ServicePageSections";
import { detailPageJsonLd, detailPageMetadata } from "../../lib/site";
import {
  ARCH_ALT, MobileArchitecture, NATIVE_ALT, NativeVsCrossDiagram, OFFLINE_ALT, OfflineSync, PhoneIllustration,
  RELEASE_ALT, ReleasePipeline,
} from "./Diagrams";
import {
  COST, FAQS, FINAL_CTA, HERO, INDUSTRIES, INVOLVES, NATIVE, OFFLINE_STEPS, PATH, PERFORMANCE, PERFORMANCE_INTRO,
  PROCESS, PROCESS_INTRO, RELEASE_STEPS, SCHEMA_SERVICE, SECURITY, SECURITY_INTRO, SEO, SERVICES, SERVICES_INTRO,
  STACK, STACK_INTRO, TYPES, TYPES_INTRO, TYPES_OUTRO, WHY,
} from "./content";

export const metadata = detailPageMetadata({ path: PATH, ...SEO });

const CRUMBS = [
  { name: "Services", path: "/services" },
  { name: "Mobile App Development", path: PATH },
];

// All icons are decorative (headings carry the meaning). Neutral device icons
// are used for iOS/Android rather than Apple or Google marks.
const ICONS = {
  custom: RiCodeBoxLine, android: RiTabletLine, ios: RiSmartphoneLine, cross: RiLayoutColumnLine,
  react: RiReactjsLine, flutter: RiFlutterFill, enterprise: RiBuilding4Line, ecommerce: RiShoppingBag3Line,
  backend: RiServerLine, maintenance: RiToolsLine, business: RiBriefcase4Line, customer: RiUser3Line,
  employee: RiTeamLine, booking: RiCalendarCheckLine, health: RiHeartPulseLine, education: RiGraduationCapLine,
  logistics: RiTruckLine, finance: RiBankCardLine, workflow: RiClipboardLine, auth: RiFingerprintLine,
  rbac: RiUserSettingsLine, api: RiPlugLine, lock: RiLockLine, keystore: RiSafe2Line, session: RiTimerLine,
  permission: RiKeyLine, deps: RiBox3Line, payment: RiSecurePaymentLine, privacy: RiEyeOffLine, test: RiBugLine,
  updates: RiRefreshLine, speed: RiSpeedLine, smooth: RiDragMoveLine, battery: RiBattery2ChargeLine,
  network: RiSignalWifi3Line, offline: RiWifiOffLine, push: RiNotification3Line, a11y: RiWheelchairLine,
  devices: RiDeviceLine, monitor: RiPulseLine, realestate: RiBuilding2Line, manufacturing: RiSettings3Line,
  saas: RiApps2Line, shield: RiShieldCheckLine, complexity: RiNodeTree, features: RiListCheck,
  design: RiPaletteLine, deploy: RiRocket2Line,
};
const withIcons = (items) => items.map((it) => ({ ...it, icon: ICONS[it.icon] }));

/** Renders **bold** markers from the content file. */
function Rich({ text }) {
  return text.split(/(\*\*[^*]+\*\*)/).map((part, i) =>
    part.startsWith("**") ? <strong key={i} className="font-semibold text-[#1a1a1a]">{part.slice(2, -2)}</strong> : part
  );
}

const P = "text-[15px] leading-relaxed text-gray-600 lg:text-base";
const CHOOSE_TONE = {
  purple: "bg-[#faf5fd] ring-[#AF00E8]/20",
  teal: "bg-[#f1fbf9] ring-[#0F9F94]/25",
  sun: "bg-[#fffaeb] ring-[#E3A600]/30",
};

export default function MobileAppDevelopment() {
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
        primaryCta={{ label: "Discuss Your Mobile App Project", href: "/contact" }}
        secondaryCta={{ label: "Explore Our Development Services", href: "/services" }}
        stats={HERO.stats}
        figureLabel="A business app, in your customer's hand"
        figure={<PhoneIllustration className="h-auto w-full" />}
        figcaption="Illustrative example with sample data, not a client project."
      />

      <ScopingCallBlock path={PATH} service="mobile app development" />

      {/* ───────────── What mobile app development involves ───────────── */}
      <section aria-labelledby="involves-heading" className="bg-white py-16 lg:py-24">
        <div className={WRAP}>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <SectionHeading id="involves-heading" eyebrow="The basics">What Mobile App Development Involves</SectionHeading>
            <div className="space-y-5">
              <p className={P}><Rich text={INVOLVES.p1} /></p>
              <p className={P}><Linked value={INVOLVES.p2} /></p>
            </div>
          </div>

          <figure aria-label={ARCH_ALT} className="mt-12 rounded-3xl border border-gray-100 bg-[#fcfaff] p-6 sm:p-8">
            <MobileArchitecture />
          </figure>

          <h3 className="mt-14 text-2xl font-bold text-[#1a1a1a] lg:text-3xl" style={{ fontFamily: "Garamond, serif" }}>{INVOLVES.whenTitle}</h3>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <CheckCard title={INVOLVES.appWhenTitle} items={INVOLVES.appWhen} tone="purple" />
            <CheckCard title={INVOLVES.webWhenTitle} items={INVOLVES.webWhen} tone="teal" />
          </div>
          <p className={`mt-8 max-w-4xl ${P}`}><Linked value={INVOLVES.webOutro} /></p>
        </div>
      </section>

      <ServiceCards eyebrow="10 capabilities" title="Our Mobile App Development Services" intro={SERVICES_INTRO} services={withIcons(SERVICES)} />

      {/* ───────────── Types of mobile apps ───────────── */}
      <section aria-labelledby="types-heading" className="bg-white py-16 lg:py-24">
        <div className={WRAP}>
          <div className="max-w-3xl">
            <SectionHeading id="types-heading" eyebrow="Illustrative examples">Types of Mobile Applications We Develop</SectionHeading>
            <p className={`mt-5 ${P}`}>{TYPES_INTRO}</p>
          </div>
          <ul className="mt-12 grid gap-4 md:grid-cols-2">
            {TYPES.map((t) => (
              <li key={t.title} className="flex gap-4 rounded-2xl border border-gray-100 bg-[#faf9f7] p-5 transition-colors hover:border-[#AF00E8]/25 hover:bg-[#faf5fd] sm:p-6">
                <IconTile icon={ICONS[t.icon]} />
                <div>
                  <h3 className="text-lg font-bold text-[#1a1a1a]">{t.title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{t.text}</p>
                  <p className="mt-3 rounded-lg bg-white px-3.5 py-2.5 text-sm leading-relaxed text-gray-700 ring-1 ring-gray-100">
                    <span className="font-semibold text-[#AF00E8]">Requirement: </span>{t.requirement}
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <p className={`mt-10 max-w-4xl ${P}`}><Linked value={TYPES_OUTRO} /></p>
        </div>
      </section>

      {/* ───────────── Native vs cross-platform ───────────── */}
      <section aria-labelledby="native-heading" className="border-y border-[#9b1fe0]/10 bg-[#faf9f7] py-16 lg:py-24">
        <div className={WRAP}>
          <div className="max-w-3xl">
            <SectionHeading id="native-heading" eyebrow="Platform choice">Native vs Cross-Platform App Development</SectionHeading>
            <p className={`mt-5 ${P}`}>{NATIVE.intro}</p>
          </div>
          <figure aria-label={NATIVE_ALT} className="mt-10 rounded-3xl bg-white p-6 shadow-[0_20px_60px_-30px_rgba(60,0,90,0.35)] sm:p-8">
            <NativeVsCrossDiagram />
          </figure>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {NATIVE.columns.map((c) => (
              <div key={c.title} className="rounded-2xl border border-gray-100 bg-white p-6">
                <div className="flex items-center gap-3">
                  <IconTile icon={ICONS[c.icon]} size="sm" />
                  <h3 className="text-xl font-bold text-[#1a1a1a]" style={{ fontFamily: "Garamond, serif" }}>{c.title}</h3>
                </div>
                <ul className="mt-4 space-y-3">
                  {c.points.map((pt) => (
                    <li key={pt} className="flex gap-2.5 text-sm leading-relaxed text-gray-600">
                      <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#AF00E8]" />
                      <span><Rich text={pt} /></span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <ComparisonTable
              labelledBy="native-heading"
              headers={[{ label: NATIVE.table.headers[0] }, { label: NATIVE.table.headers[1], dot: "#AF00E8" }, { label: NATIVE.table.headers[2], dot: "#0F9F94" }]}
              rows={NATIVE.table.rows}
            />
          </div>

          <dl className="mt-8 grid gap-4 md:grid-cols-3">
            {NATIVE.choose.map((c) => (
              <div key={c.title} className={`rounded-2xl p-6 ring-1 ${CHOOSE_TONE[c.tone]}`}>
                <dt className="font-bold text-[#1a1a1a]">{c.title}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-gray-700">{c.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ───────────── Technology stack ───────────── */}
      <section aria-labelledby="stack-heading" className="bg-white py-16 lg:py-24">
        <div className={WRAP}>
          <div className="max-w-3xl">
            <SectionHeading id="stack-heading" eyebrow="The right tool for each job">Mobile App Technology Stack</SectionHeading>
            <p className={`mt-5 ${P}`}>{STACK_INTRO}</p>
          </div>
          <div className="mt-10 overflow-hidden rounded-2xl border border-gray-100 shadow-sm">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr className="bg-[#1a1022] text-white">
                  <th scope="col" className="px-5 py-4 text-xs font-semibold uppercase tracking-wider">Technology</th>
                  <th scope="col" className="px-5 py-4 text-xs font-semibold uppercase tracking-wider">Purpose</th>
                </tr>
              </thead>
              <tbody>
                {STACK.map((row, i) => (
                  <tr key={row.tech} className={i % 2 ? "bg-[#faf9f7]" : "bg-white"}>
                    <th scope="row" className="px-5 py-4 align-top font-semibold text-[#1a1a1a] sm:w-[42%]">
                      <span className="block">{row.tech}</span>
                      {row.logos.length > 0 && (
                        <span className="mt-2 flex flex-wrap items-center gap-3">
                          {row.logos.map((l) => <TechLogo key={l} name={l} className="h-[20px] w-auto object-contain" />)}
                        </span>
                      )}
                    </th>
                    <td className="px-5 py-4 align-top leading-relaxed text-gray-600">{row.purpose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <ProcessGrid
        faint
        eyebrow="10 stages, tested on real devices"
        title="Our Mobile App Development Process"
        intro={PROCESS_INTRO}
        columns="md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
        checkLabel="Quality check"
        steps={PROCESS.map((s) => ({
          title: s.title,
          rows: [{ label: "Activities", text: s.activities }, { label: "Deliverables", text: s.deliverables }],
          risk: s.check,
        }))}
        after={
          <figure aria-label={RELEASE_ALT} className="mt-10 rounded-3xl bg-white p-6 shadow-[0_20px_60px_-30px_rgba(60,0,90,0.35)] sm:p-8">
            <ReleasePipeline steps={RELEASE_STEPS} />
          </figure>
        }
      />

      {/* ───────────── Security ───────────── */}
      <section aria-labelledby="security-heading" className="relative overflow-hidden bg-[#0d0a12] py-16 text-white lg:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-[#AF00E8]/20 blur-3xl" />
        <div className={`${WRAP} relative`}>
          <div className="max-w-3xl">
            <SectionHeading id="security-heading" eyebrow="OWASP MASVS" dark>Mobile Application Security</SectionHeading>
            <p className="mt-5 text-[15px] leading-relaxed text-gray-300 lg:text-base">{SECURITY_INTRO}</p>
          </div>
          <div className="mt-12">
            <IconCardGrid items={withIcons(SECURITY)} dark compact />
          </div>
        </div>
      </section>

      {/* ───────────── Performance & UX ───────────── */}
      <section aria-labelledby="performance-heading" className="bg-white py-16 lg:py-24">
        <div className={WRAP}>
          <div className="max-w-3xl">
            <SectionHeading id="performance-heading" eyebrow="Fast, smooth, offline-ready">Mobile App Performance and User Experience</SectionHeading>
            <p className={`mt-5 ${P}`}>{PERFORMANCE_INTRO}</p>
          </div>
          <figure aria-label={OFFLINE_ALT} className="mt-10 rounded-3xl border border-gray-100 bg-[#fcfaff] p-6 sm:p-8">
            <OfflineSync phone={OFFLINE_STEPS.phone} online={OFFLINE_STEPS.online} />
          </figure>
          <div className="mt-10">
            <IconCardGrid items={withIcons(PERFORMANCE)} />
          </div>
        </div>
      </section>

      <IndustryGrid eyebrow="Sector-aware apps" title="Mobile Apps for the Industries We Support" items={withIcons(INDUSTRIES)} />

      {/* ───────────── Why choose ───────────── */}
      <section aria-labelledby="why-heading" className="border-b border-[#9b1fe0]/10 bg-[#faf9f7] py-16 lg:py-24">
        <div className={WRAP}>
          <div className="max-w-3xl">
            <SectionHeading id="why-heading" eyebrow="Why ClickMasters">Choosing an App Development Company UK Businesses Can Rely On</SectionHeading>
          </div>
          <div className="mt-12">
            <IconCardGrid items={withIcons(WHY)} />
          </div>
        </div>
      </section>

      {/* ───────────── Cost ───────────── */}
      <section aria-labelledby="cost-heading" className="bg-white py-16 lg:py-24">
        <div className={WRAP}>
          <div className="max-w-3xl">
            <SectionHeading id="cost-heading" eyebrow="Pricing, explained">Mobile App Development Cost in the UK</SectionHeading>
            <p className={`mt-5 ${P}`}>{COST.intro}</p>
          </div>
          <div className="mt-12">
            <IconCardGrid items={withIcons(COST.factors)} compact />
          </div>
          <p className="mt-10 max-w-4xl rounded-2xl bg-gradient-to-br from-[#faf5fd] to-[#f1fbf9] p-6 text-[15px] leading-relaxed text-gray-700 ring-1 ring-[#AF00E8]/10">
            {COST.outro}
          </p>
        </div>
      </section>

      <FaqSection
        title="Mobile App Development: Frequently Asked Questions"
        intro="Cost, timelines, platforms, security and store release, answered plainly."
        faqs={FAQS}
      />

      <FinalCta
        title={FINAL_CTA.title}
        titleAccent={FINAL_CTA.titleAccent}
        body={FINAL_CTA.body}
        bring={FINAL_CTA.bring}
        primaryCta={{ label: "Discuss Your Mobile App Project", href: "/contact" }}
        secondaryCta={{ label: "Explore Our Development Services", href: "/services" }}
      />
    </>
  );
}
