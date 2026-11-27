// /portfolio: selected client websites, e-commerce stores, web platforms and SEO results.
// Content: ./content.ts. Server-rendered; only the project filter and the
// case-study dialog (./PortfolioExplorer.jsx) run in the browser.
// The downloadable PDF is built from the same content: npm run portfolio:pdf
import Image from "next/image";
import Link from "next/link";
import { RiArrowDownLine, RiArrowRightLine, RiArrowRightUpLine, RiCheckLine, RiDoubleQuotesL, RiDownload2Line, RiFileTextLine, RiMapPin2Line } from "../Components/icons";

import JsonLd from "../Components/JsonLd";
import Breadcrumbs from "../Components/Breadcrumbs";
import { BODY_LINK, Eyebrow, SectionHeading, WRAP } from "../Components/ServicePageUI";
import { FinalCta } from "../Components/ServicePageSections";
import { jsonLdFor, metadataFor } from "../lib/seo-pages";
import PortfolioExplorer from "./PortfolioExplorer";
import { CAPABILITIES, CATEGORIES, HERO, LEADER, PDF, PROCESS, PROJECTS, RESULTS, STATS, TEAM, TECHNOLOGIES } from "./content";

// Hidden for now: not linked anywhere and kept out of search results.
// To publish again, remove the robots override and re-add the nav link.
export const metadata = { ...metadataFor("portfolio"), robots: { index: false, follow: true } };

const P = "text-[15px] leading-relaxed text-gray-600 lg:text-base";
const SERIF = { fontFamily: "Garamond, serif" };
const CONTACT_HREF = "/contact?service=a%20new%20digital%20project#contact-form";
// Google Search Console's own metric colours, so the cards read as GSC data.
const TONE = {
  clicks: "bg-[#1a73e8]",
  impressions: "bg-[#5e35b1]",
  ctr: "bg-[#00897b]",
  position: "bg-[#e8710a]",
  growth: "bg-[#188038]",
};

function FeaturedProject({ project, index }) {
  const flip = index % 2 === 1;
  return (
    <article aria-labelledby={`featured-${project.slug}`} className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <div className={`relative ${flip ? "lg:order-2" : ""}`}>
        <div aria-hidden="true" className="absolute -inset-3 rounded-[28px] bg-gradient-to-br from-[#AF00E8]/15 via-transparent to-[#5EEAD4]/20 blur-xl" />
        <div className="relative rounded-3xl border border-white bg-gradient-to-br from-[#f6eefb] via-[#faf7fd] to-[#eefaf7] p-6 shadow-[0_30px_80px_-30px_rgba(60,0,90,0.35)] sm:p-10">
          <Image
            src={project.image.src}
            width={project.image.width}
            height={project.image.height}
            alt={project.image.alt}
            sizes="(min-width: 1024px) 560px, 100vw"
            className="h-auto w-full"
          />
        </div>
      </div>
      <div>
        <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-bold uppercase tracking-[0.16em] text-[#7a1fa2]">
          <span>{String(index + 1).padStart(2, "0")} · {project.type}</span>
          <span className="inline-flex items-center gap-1 font-medium normal-case tracking-normal text-gray-500">
            <RiMapPin2Line aria-hidden="true" className="h-3.5 w-3.5 text-[#AF00E8]" />{project.location}
          </span>
        </p>
        <h3 id={`featured-${project.slug}`} className="mt-3 text-[28px] font-bold leading-tight text-[#1a1a1a] lg:text-[34px]" style={SERIF}>
          {project.client}
        </h3>
        <p className="mt-4 text-[15px] leading-relaxed text-gray-700 lg:text-base">{project.summary}</p>
        <dl className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-gray-100 bg-[#faf9f7] p-5">
            <dt className="field-label">The challenge</dt>
            <dd className="mt-2 text-sm leading-relaxed text-gray-700">{project.brief}</dd>
          </div>
          <div className="rounded-2xl border border-gray-100 bg-[#faf9f7] p-5">
            <dt className="field-label">The solution</dt>
            <dd className="mt-2 text-sm leading-relaxed text-gray-700">{project.solution}</dd>
          </div>
        </dl>
        <ul className="mt-6 flex flex-wrap gap-2" aria-label="Key features">
          {project.deliverables.map((d) => (
            <li key={d} className="inline-flex items-center gap-1.5 rounded-full bg-[#f7effa] px-3 py-1.5 text-xs font-semibold text-[#7a1fa2]">
              <RiCheckLine aria-hidden="true" className="h-3.5 w-3.5" />{d}
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-gray-600">
          Related services:{" "}
          {project.related.map((r, i) => (
            <span key={r.href}>
              {i > 0 && " · "}
              <Link href={r.href} className={BODY_LINK}>{r.label}</Link>
            </span>
          ))}
        </p>
        {project.live && (
          <a href={project.url} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#AF00E8] hover:underline">
            Visit {project.domain}
            <RiArrowRightUpLine aria-hidden="true" className="h-4 w-4" />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        )}
      </div>
    </article>
  );
}

export default function PortfolioPage() {
  const featured = PROJECTS.filter((p) => p.featured);
  const heroShots = PROJECTS.filter((p) => ["top-sarzameen", "practice-quran"].includes(p.slug));

  return (
    <>
      <JsonLd data={jsonLdFor("portfolio")} />

      {/* ───────────── A. Hero ───────────── */}
      <section aria-labelledby="hero-heading" className="relative overflow-hidden border-b border-[#9b1fe0]/15 bg-[#faf9f7]">
        <div aria-hidden="true" className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-[#AF00E8]/10 blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-40 -left-32 h-[420px] w-[420px] rounded-full bg-[#5EEAD4]/15 blur-3xl" />
        <div className={`${WRAP} relative grid items-center gap-12 py-14 lg:grid-cols-[1.05fr_1fr] lg:gap-14 lg:py-20`}>
          <div>
            <Breadcrumbs items={[{ name: "Portfolio", href: "/portfolio" }]} schema={false} />
            <div className="mt-6"><Eyebrow>{HERO.eyebrow}</Eyebrow></div>
            <h1 id="hero-heading" className="text-[36px] font-bold leading-[42px] text-[#1a1a1a] sm:text-[44px] sm:leading-[50px] xl:text-[54px] xl:leading-[60px]" style={SERIF}>
              {HERO.title} <span className="font-normal italic text-[#AF00E8]">{HERO.titleAccent}</span>
            </h1>
            <p className="mt-6 text-base leading-relaxed text-gray-700 lg:text-[17px]">{HERO.lead}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={CONTACT_HREF}
                className="group inline-flex items-center gap-2 rounded-lg bg-[#AF00E8] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_10px_30px_-8px_rgba(175,0,232,0.6)] hover:bg-[#9600c7]"
              >
                Discuss Your Project
                <RiArrowRightLine aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <a href="#work" className="inline-flex items-center gap-2 rounded-lg border border-[#AF00E8]/40 bg-white px-6 py-3.5 text-sm font-semibold text-[#AF00E8] hover:border-[#AF00E8]">
                Explore Our Work
                <RiArrowDownLine aria-hidden="true" className="h-4 w-4" />
              </a>
            </div>
            <a href={PDF.href} download={PDF.fileName} className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-gray-700 hover:text-[#AF00E8]">
              <RiDownload2Line aria-hidden="true" className="h-4 w-4 text-[#AF00E8]" />
              {PDF.label}
            </a>
            <dl className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-[#AF00E8]/10 ring-1 ring-[#AF00E8]/10 sm:grid-cols-4">
              {STATS.map((s) => (
                <div key={s.label} className="flex flex-col-reverse justify-end bg-white/90 px-4 py-4">
                  <dt className="mt-1 text-xs text-gray-500">{s.label}</dt>
                  <dd className="text-2xl font-bold text-[#1a1a1a]" style={SERIF}>{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="relative">
            <div aria-hidden="true" className="absolute -inset-3 rounded-[28px] bg-gradient-to-br from-[#AF00E8]/20 via-transparent to-[#5EEAD4]/25 blur-xl" />
            <div className="relative grid gap-4 rounded-3xl border border-white bg-white/90 p-5 shadow-[0_30px_80px_-24px_rgba(60,0,90,0.35)] sm:p-7">
              {heroShots.map((p, i) => (
                <Image
                  key={p.slug}
                  src={p.image.src}
                  width={p.image.width}
                  height={p.image.height}
                  alt={p.image.alt}
                  preload={i === 0}
                  loading="eager"
                  sizes="(min-width: 1024px) 540px, 100vw"
                  className={`h-auto w-[85%] ${i === 1 ? "ml-auto" : ""}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── C/D. Featured case studies ───────────── */}
      <section aria-labelledby="featured-heading" className="bg-white py-16 lg:py-24">
        <div className={WRAP}>
          <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
            <SectionHeading id="featured-heading" eyebrow="Featured case studies">Three Projects in Detail</SectionHeading>
            <p className={P}>
              A property marketplace, an online learning service and an electronics shop: three different problems, each solved with a
              site built to do a specific job for the business.
            </p>
          </div>
          <div className="mt-14 space-y-20 lg:space-y-28">
            {featured.map((p, i) => <FeaturedProject key={p.slug} project={p} index={i} />)}
          </div>
        </div>
      </section>

      {/* ───────────── B. All projects + filters ───────────── */}
      <section id="work" aria-labelledby="projects-heading" className="scroll-mt-24 border-y border-[#9b1fe0]/10 bg-[#faf9f7] py-16 lg:py-24">
        <div className={WRAP}>
          <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
            <SectionHeading id="projects-heading" eyebrow="All projects">Websites, Online Stores and Web Platforms</SectionHeading>
            <p className={P}>
              Filter by project type, then open any project to see the brief, what we built and the related services. Where a
              client&apos;s site is still live, you can visit it.
            </p>
          </div>
          <PortfolioExplorer projects={PROJECTS} categories={CATEGORIES} />
        </div>
      </section>

      {/* ───────────── SEO results ───────────── */}
      <section aria-labelledby="results-heading" className="bg-white py-16 lg:py-24">
        <div className={WRAP}>
          <div className="max-w-3xl">
            <SectionHeading id="results-heading" eyebrow="Search results">Google Search Console Results From Client Campaigns</SectionHeading>
            <p className={`mt-5 ${P}`}>{RESULTS.intro}</p>
          </div>
          <ul className="mt-12 grid gap-5 md:grid-cols-2">
            {RESULTS.items.map((r) => (
              <li key={r.title} className={`flex flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm ${r.wide ? "md:col-span-2" : ""}`}>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-bold text-[#1a1a1a]">{r.title}</h3>
                  <span className="text-xs font-medium text-gray-500">{r.period}</span>
                </div>
                <dl className={`mt-5 grid gap-3 ${r.metrics.length === 1 ? "grid-cols-1" : r.wide ? "grid-cols-2 lg:grid-cols-4" : "grid-cols-2"}`}>
                  {r.metrics.map((m) => (
                    <div key={m.label} className={`flex flex-col-reverse rounded-xl px-4 py-4 text-white ${TONE[m.tone]}`}>
                      <dt className="mt-1 text-xs font-medium text-white/85">{m.label}</dt>
                      <dd className="text-[26px] font-bold leading-tight tracking-tight">{m.value}</dd>
                    </div>
                  ))}
                </dl>
                {r.note && <p className="mt-4 text-sm text-gray-600">{r.note}</p>}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ───────────── E. Development approach ───────────── */}
      <section aria-labelledby="process-heading" className="relative overflow-hidden bg-[#0d0a12] py-16 text-white lg:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-[#AF00E8]/25 blur-3xl" />
        <div className={`${WRAP} relative`}>
          <div className="max-w-3xl">
            <SectionHeading id="process-heading" eyebrow="Our development approach" dark>From First Conversation to Launch, and Beyond</SectionHeading>
            <p className="mt-5 text-[15px] leading-relaxed text-gray-300">
              The scale of a project changes; the way we run it does not. Six stages give you a clear scope, no surprises on cost and a
              product your customers can actually use.
            </p>
          </div>
          <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PROCESS.map((s, i) => (
              <li key={s.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                <div className="flex items-center">
                  <span aria-hidden="true" className="step-num">{String(i + 1).padStart(2, "0")}</span>
                  <span aria-hidden="true" className="step-line" />
                </div>
                <h3 className="mt-4 text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-300">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ───────────── F. Capabilities & technologies ───────────── */}
      <section aria-labelledby="capabilities-heading" className="bg-white py-16 lg:py-24">
        <div className={WRAP}>
          <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
            <SectionHeading id="capabilities-heading" eyebrow="Capabilities">Beyond Websites: Software, AI and Automation</SectionHeading>
            <p className={P}>
              The projects on this page are web and search work. The same team also builds custom software, AI and automation for UK
              businesses, and each service page explains how we approach that work.
            </p>
          </div>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {CAPABILITIES.map((c) => (
              <li key={c.href}>
                <Link href={c.href} className="group flex h-full flex-col rounded-2xl border border-gray-100 bg-[#faf9f7] p-6 transition-colors hover:border-[#AF00E8]/40 hover:bg-white">
                  <h3 className="text-lg font-bold text-[#1a1a1a]">{c.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">{c.text}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#AF00E8]">
                    {c.anchor}
                    <RiArrowRightLine aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-10 rounded-2xl border border-gray-100 p-6">
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900">Technologies we work with</h3>
            <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">
              {TECHNOLOGIES.map((t) => (
                <li key={t} className="rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-sm font-medium text-gray-700">{t}</li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-gray-500">We choose the stack for each project. Ask us which technologies a particular project used.</p>
          </div>
        </div>
      </section>

      {/* ───────────── Team ───────────── */}
      <section aria-labelledby="team-heading" className="border-y border-[#9b1fe0]/10 bg-[#faf9f7] py-16 lg:py-24">
        <div className={WRAP}>
          <div className="max-w-3xl">
            <SectionHeading id="team-heading" eyebrow="The people behind the work">Meet the Team</SectionHeading>
          </div>
          <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:items-start">
            <figure className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#2a0b3a] via-[#1a0d24] to-[#0d0a12] p-8 text-white">
              <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#AF00E8]/40 blur-3xl" />
              <RiDoubleQuotesL aria-hidden="true" className="relative h-10 w-10 text-[#e9c2ff]" />
              <blockquote className="relative mt-4 text-lg leading-relaxed text-gray-100" style={SERIF}>{LEADER.quote}</blockquote>
              <figcaption className="relative mt-8 flex items-center gap-4">
                <Image src={LEADER.photo} width={320} height={320} alt={`${LEADER.name}, ${LEADER.role}`} sizes="72px" className="h-[72px] w-[72px] rounded-full object-cover ring-2 ring-[#e9c2ff]/60" />
                <span>
                  <span className="block font-semibold">{LEADER.name}</span>
                  <span className="block text-sm text-gray-300">{LEADER.role}</span>
                </span>
              </figcaption>
            </figure>
            <ul className="grid gap-4 sm:grid-cols-2">
              {TEAM.map((m) => (
                <li key={m.name} className="flex gap-4 rounded-2xl border border-gray-100 bg-white p-5">
                  <Image src={m.photo} width={320} height={320} alt={`${m.name}, ${m.role}`} sizes="64px" className="h-16 w-16 shrink-0 rounded-full object-cover object-top" />
                  <div>
                    <h3 className="font-bold text-[#1a1a1a]">{m.name}</h3>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#7a1fa2]">{m.role}</p>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600">{m.bio}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ───────────── Download ───────────── */}
      <section aria-labelledby="download-heading" className="bg-white pt-16 lg:pt-24">
        <div className={WRAP}>
          <div className="flex flex-col gap-6 rounded-3xl border border-[#AF00E8]/15 bg-gradient-to-br from-[#f6eefb] via-white to-[#eefaf7] p-8 sm:flex-row sm:items-center sm:justify-between lg:p-10">
            <div className="flex items-start gap-5">
              <span aria-hidden="true" className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#AF00E8] text-white sm:flex">
                <RiFileTextLine className="h-7 w-7" />
              </span>
              <div>
                <h2 id="download-heading" className="text-2xl font-bold text-[#1a1a1a] lg:text-[28px]" style={SERIF}>Take the Portfolio With You</h2>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-gray-600">
                  Every project on this page, with its brief, what we built and the Search Console results, in one PDF to share with
                  colleagues or bring to a meeting.
                </p>
              </div>
            </div>
            <a
              href={PDF.href}
              download={PDF.fileName}
              type="application/pdf"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-[#AF00E8] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_10px_30px_-8px_rgba(175,0,232,0.6)] hover:bg-[#9600c7]"
            >
              <RiDownload2Line aria-hidden="true" className="h-4 w-4" />
              {PDF.label}
            </a>
          </div>
        </div>
      </section>

      {/* ───────────── G. Final CTA ───────────── */}
      <FinalCta
        title="Have a Project in Mind?"
        titleAccent="Let's Talk It Through."
        body={{
          text: "Whether it is a new website, a customer platform, custom software or an AI or automation idea, tell us what you need and we will suggest the right approach, timeline and cost, with no obligation. You can also browse our [[link]].",
          link: { anchor: "software and AI development services", href: "/services" },
        }}
        bring={["Your current website or system, if you have one", "Two or three examples you like", "What you want to achieve in the next 12 months"]}
        primaryCta={{ label: "Discuss Your Project", href: CONTACT_HREF }}
        secondaryCta={{ label: "Our Solutions", href: "/solutions" }}
      />
    </>
  );
}
