import Link from "next/link";
import { isLive } from "../lib/home-links";

/**
 * Renders a Next.js <Link> when the target page exists, otherwise the same
 * anchor text as plain text. Prevents broken internal links for pages that
 * are planned but not yet published (see lib/home-links.ts).
 */
export default function SmartLink({ href, className = "", children, ...rest }) {
  if (isLive(href)) {
    return (
      <Link href={href} className={className} {...rest}>
        {children}
      </Link>
    );
  }
  // Drop link-only styling (underline, hover states) from the plain-text form.
  const textClass = className
    .split(/\s+/)
    .filter((c) => c && c !== "underline" && !c.startsWith("hover:"))
    .join(" ");
  return <span className={textClass || undefined}>{children}</span>;
}
