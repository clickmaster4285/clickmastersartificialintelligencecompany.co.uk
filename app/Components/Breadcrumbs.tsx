import Link from "next/link";
import JsonLd from "./JsonLd";
import { absoluteUrl } from "../lib/site";

export type Crumb = { name: string; href: string };

/**
 * Visible breadcrumb trail + BreadcrumbList JSON-LD.
 * Used by inner pages that don't already emit a BreadcrumbList via
 * pageJsonLd() in lib/site.ts (so the two never conflict).
 */
export default function Breadcrumbs({
  items,
  schema = true,
  className = "text-sm text-gray-500",
}: {
  items: Crumb[];
  /** Set false on pages whose BreadcrumbList already comes from pageJsonLd(). */
  schema?: boolean;
  className?: string;
}) {
  const trail: Crumb[] = [{ name: "Home", href: "/" }, ...items];
  return (
    <>
      {schema && <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: trail.map((c, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: c.name,
            item: absoluteUrl(c.href),
          })),
        }}
      />}
      <nav aria-label="Breadcrumb" className={className}>
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
          {trail.map((c, i) => {
            const last = i === trail.length - 1;
            return (
              <li key={c.href} className="flex items-center gap-2">
                {last ? (
                  <span aria-current="page" className="font-medium text-gray-800">
                    {c.name}
                  </span>
                ) : (
                  <>
                    <Link href={c.href} className="hover:text-[#AF00E8] hover:underline">
                      {c.name}
                    </Link>
                    <span aria-hidden="true">/</span>
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
