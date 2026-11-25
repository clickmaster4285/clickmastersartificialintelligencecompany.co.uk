import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "./Breadcrumbs";
import { childrenOf, findNavPage, type NavItem, type NavLink } from "../config/navigation";
import { CONTACT } from "../lib/site";

/*
 * Reusable placeholder landing page for nav items with status "placeholder".
 *
 * TODO (per page): replace with a real page at app/<section>/<slug>/page.tsx
 * containing 800 to 1,200 words of unique content targeting `keyword`, then
 * set the item's status to "live" in app/config/navigation.ts. Until then the
 * page is noindex,follow so it never competes in search with thin content,
 * while crawlers can still follow its links.
 */

function resolve(href: string) {
  const found = findNavPage(href);
  if (!found || found.link.status !== "placeholder") notFound();
  return found;
}

export function placeholderMetadata(href: string): Metadata {
  const found = findNavPage(href);
  if (!found || found.link.status !== "placeholder") return {};
  const { link } = found;
  const title = link.label;
  const description =
    link.description ??
    `${link.label} from ClickMasters, a UK AI software development company.`;
  return {
    title,
    description,
    robots: { index: false, follow: true },
    alternates: { canonical: href },
    openGraph: { title, description, url: href },
  };
}

export default function PlaceholderPage({ href }: { href: string }) {
  const { link, parent } = resolve(href);
  // A hub (e.g. /technologies) lists its own children; a child page lists siblings.
  const hub = !parent ? (link as NavItem) : undefined;
  const listed: NavLink[] = hub ? childrenOf(hub) : childrenOf(parent!).filter((l) => l.href !== href);
  const intro = hub?.intro ?? link.description;

  const crumbs = parent
    ? [
        { name: parent.label, href: parent.href },
        { name: link.label, href },
      ]
    : [{ name: link.label, href }];

  return (
    <div className="w-full max-w-[1728px] mx-auto">
      <section className="relative overflow-hidden bg-[#faf9f7] px-6 py-14 lg:px-[130px] lg:py-20 border-b border-[#9b1fe0]/20">
        <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#AF00E8]/10 blur-3xl" />

        {process.env.NODE_ENV !== "production" && (
          <p className="relative mb-6 inline-block rounded-md border border-dashed border-amber-400 bg-amber-50 px-3 py-1.5 text-xs text-amber-800">
            TODO: placeholder page (noindex). Add real content and set status to &quot;live&quot; in app/config/navigation.ts.
          </p>
        )}

        <div className="relative max-w-3xl">
          <Breadcrumbs items={crumbs} />
          <h1
            className="mt-6 font-bold text-[34px] leading-[42px] lg:text-[52px] lg:leading-[60px] text-[#1a1a1a]"
            style={{ fontFamily: "Garamond, serif" }}
          >
            {link.label}
          </h1>
          {intro && <p className="mt-4 text-lg text-gray-700">{intro}</p>}
          <p className="mt-4 text-[15px] leading-relaxed text-gray-600">
            ClickMasters is a UK-focused AI software development company. We scope, design, build and support
            software end to end, with agile delivery, weekly progress updates and ongoing support after launch.
            Tell us what you need and we&apos;ll come back with a clear plan and estimate, usually{" "}
            {CONTACT.responseTime}.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-md bg-[#AF00E8] px-6 py-3 text-sm font-medium text-white hover:bg-[#9600c7]"
            >
              Get a Free Quote
            </Link>
            <Link
              href={parent ? parent.href : "/services"}
              className="inline-flex items-center rounded-md border border-[#AF00E8] px-6 py-3 text-sm font-medium text-[#AF00E8] hover:bg-[#AF00E8] hover:text-white"
            >
              {parent
                ? parent.footerLinks?.find((l) => l.href === parent.href)?.label ?? `Explore ${parent.label}`
                : "Explore Our Services"}
            </Link>
          </div>
        </div>
      </section>

      {listed.length > 0 && (
        <section className="px-6 py-14 lg:px-[130px] lg:py-16 bg-white">
          <h2 className="mb-8 font-bold text-2xl lg:text-3xl text-[#1a1a1a]" style={{ fontFamily: "Garamond, serif" }}>
            {hub ? `Explore ${link.label}` : `More in ${parent!.label}`}
          </h2>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {listed.map((l) => (
              <li key={l.href} className="relative rounded-xl border border-gray-100 p-5 hover:border-[#AF00E8]/30 hover:bg-[#faf5fd]">
                <Link href={l.href} className="font-semibold text-gray-900 after:absolute after:inset-0 hover:text-[#AF00E8]">
                  {l.label}
                </Link>
                {l.description && <p className="mt-1 text-sm text-gray-500">{l.description}</p>}
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
