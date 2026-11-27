"use client";
// Filterable project grid + case-study dialog for /portfolio.
// Server-rendered with every project visible ("All"), so crawlers and
// no-JS visitors see the full list; filtering only hides cards client-side.
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { RiArrowRightLine, RiArrowRightUpLine, RiCheckLine, RiCloseCircleLine, RiGlobalLine, RiMapPin2Line } from "../Components/icons";

const ALL = "All projects";

function SiteLink({ project, className = "" }) {
  if (!project.live) {
    return (
      <span className={`inline-flex items-center gap-1.5 text-gray-500 ${className}`}>
        <RiGlobalLine aria-hidden="true" className="h-4 w-4" />
        {project.domain}
        <span className="text-xs">(site offline)</span>
      </span>
    );
  }
  return (
    <a href={project.url} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-1.5 font-semibold text-[#AF00E8] hover:underline ${className}`}>
      Visit {project.domain}
      <RiArrowRightUpLine aria-hidden="true" className="h-4 w-4" />
      <span className="sr-only">(opens in a new tab)</span>
    </a>
  );
}

function CaseStudyDialog({ project, onClose }) {
  const ref = useRef(null);
  useEffect(() => {
    const d = ref.current;
    if (project && d && !d.open) d.showModal();
    if (!project && d?.open) d.close();
  }, [project]);

  return (
    <dialog
      ref={ref}
      aria-labelledby="case-study-title"
      onClose={onClose}
      onClick={(e) => e.target === ref.current && ref.current.close()}
      className="m-auto max-h-[92vh] w-[min(960px,94vw)] overflow-hidden rounded-3xl bg-white p-0 text-left shadow-2xl backdrop:bg-[#0d0a12]/70 backdrop:backdrop-blur-sm"
    >
      {project && (
        <div className="max-h-[92vh] overflow-y-auto">
          <div className="relative bg-gradient-to-br from-[#f6eefb] via-[#faf7fd] to-[#eefaf7] px-6 pb-6 pt-14 sm:px-10">
            <button
              type="button"
              onClick={() => ref.current?.close()}
              className="absolute right-4 top-4 inline-flex min-h-11 items-center gap-1.5 rounded-full bg-white px-4 text-sm font-semibold text-gray-700 shadow-sm hover:text-[#AF00E8]"
            >
              <RiCloseCircleLine aria-hidden="true" className="h-5 w-5" />
              Close
            </button>
            <Image
              src={project.image.src}
              width={project.image.width}
              height={project.image.height}
              alt={project.image.alt}
              sizes="(min-width: 1024px) 880px, 94vw"
              className="mx-auto h-auto w-full max-w-[760px]"
            />
          </div>
          <div className="grid gap-8 px-6 py-8 sm:px-10 lg:grid-cols-[1.5fr_1fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#7a1fa2]">{project.category} · {project.type}</p>
              <h3 id="case-study-title" className="mt-2 text-[28px] font-bold leading-tight text-[#1a1a1a]" style={{ fontFamily: "Garamond, serif" }}>
                {project.client}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-gray-700">{project.summary}</p>
              <h4 className="mt-7 text-sm font-bold uppercase tracking-wider text-gray-900">The brief</h4>
              <p className="mt-2 text-[15px] leading-relaxed text-gray-600">{project.brief}</p>
              <h4 className="mt-6 text-sm font-bold uppercase tracking-wider text-gray-900">What we built</h4>
              <p className="mt-2 text-[15px] leading-relaxed text-gray-600">{project.solution}</p>
            </div>
            <aside className="space-y-5 rounded-2xl bg-[#faf9f7] p-6 text-sm">
              <dl className="space-y-3">
                <div><dt className="field-label">Location</dt><dd className="mt-1 text-gray-800">{project.location}</dd></div>
                <div><dt className="field-label">Website</dt><dd className="mt-1"><SiteLink project={project} /></dd></div>
              </dl>
              <div>
                <p className="field-label">Key features delivered</p>
                <ul className="mt-2 space-y-1.5">
                  {project.deliverables.map((d) => (
                    <li key={d} className="flex gap-2 text-gray-800"><RiCheckLine aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[#AF00E8]" />{d}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="field-label">Related services</p>
                <ul className="mt-2 space-y-1.5">
                  {project.related.map((r) => (
                    <li key={r.href}><Link href={r.href} className="font-medium text-[#AF00E8] underline decoration-[#AF00E8]/30 underline-offset-4 hover:decoration-[#AF00E8]">{r.label}</Link></li>
                  ))}
                </ul>
              </div>
              <Link
                href={`/contact?service=${encodeURIComponent(`a project like ${project.client}`)}#contact-form`}
                className="flex min-h-11 items-center justify-center gap-2 rounded-lg bg-[#AF00E8] px-5 text-sm font-semibold text-white hover:bg-[#9600c7]"
              >
                Discuss a similar project
                <RiArrowRightLine aria-hidden="true" className="h-4 w-4" />
              </Link>
            </aside>
          </div>
        </div>
      )}
    </dialog>
  );
}

export default function PortfolioExplorer({ projects, categories }) {
  const [active, setActive] = useState(ALL);
  const [open, setOpen] = useState(null);
  const filters = [ALL, ...categories];
  const shown = active === ALL ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      <div className="mt-8 flex flex-wrap items-center gap-2" role="group" aria-label="Filter projects by type">
        {filters.map((c) => {
          const count = c === ALL ? projects.length : projects.filter((p) => p.category === c).length;
          const on = c === active;
          return (
            <button
              key={c}
              type="button"
              aria-pressed={on}
              onClick={() => setActive(c)}
              className={`inline-flex min-h-11 items-center rounded-full border px-4 text-sm font-medium transition-colors ${
                on ? "border-[#AF00E8] bg-[#AF00E8] text-white" : "border-[#AF00E8]/20 bg-white text-gray-700 hover:border-[#AF00E8] hover:text-[#AF00E8]"
              }`}
            >
              {c}
              <span className={`ml-2 rounded-full px-2 text-xs ${on ? "bg-white/20 text-white" : "bg-[#f7effa] text-[#7a1fa2]"}`}>{count}</span>
            </button>
          );
        })}
      </div>
      <p className="sr-only" aria-live="polite">{`Showing ${shown.length} ${shown.length === 1 ? "project" : "projects"}: ${active}`}</p>

      <ul className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {shown.map((p) => (
          <li key={p.slug} className="portfolio-card group flex flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white transition-shadow hover:shadow-[0_24px_60px_-24px_rgba(60,0,90,0.35)]">
            <div className="relative bg-gradient-to-br from-[#f6eefb] via-[#faf7fd] to-[#eefaf7] px-6 pb-4 pt-7">
              <span className="absolute left-5 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#7a1fa2] shadow-sm">{p.type}</span>
              <Image
                src={p.image.src}
                width={p.image.width}
                height={p.image.height}
                alt={p.image.alt}
                sizes="(min-width: 1280px) 400px, (min-width: 768px) 45vw, 100vw"
                className="mt-4 h-auto w-full transition-transform duration-300 group-hover:-translate-y-1"
              />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-xl font-bold leading-snug text-[#1a1a1a]" style={{ fontFamily: "Garamond, serif" }}>{p.client}</h3>
              <p className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-gray-500">
                <RiMapPin2Line aria-hidden="true" className="h-3.5 w-3.5 text-[#AF00E8]" />
                {p.location} · {p.category}
              </p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-600">{p.summary}</p>
              <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="What we delivered">
                {p.deliverables.map((d) => (
                  <li key={d} className="rounded-full border border-gray-200 bg-[#faf9f7] px-3 py-1 text-xs font-medium text-gray-700">{d}</li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-gray-100 pt-4 text-sm">
                <button
                  type="button"
                  onClick={() => setOpen(p)}
                  aria-haspopup="dialog"
                  className="inline-flex min-h-11 items-center gap-1.5 font-semibold text-[#1a1a1a] hover:text-[#AF00E8]"
                >
                  View case study
                  <RiArrowRightLine aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  <span className="sr-only">: {p.client}</span>
                </button>
                {p.live && <SiteLink project={p} className="text-xs" />}
              </div>
            </div>
          </li>
        ))}
      </ul>

      <CaseStudyDialog project={open} onClose={() => setOpen(null)} />
    </>
  );
}
