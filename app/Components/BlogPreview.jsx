import Link from "next/link";
import SmartLink from "./SmartLink";

/*
 * Section L: Latest insights.
 *
 * No article pages exist yet (see app/blog/page.jsx), so these show the next
 * three planned topics without links. When an article is published at
 * /blog/<slug>, set `href`, add the path to EXTRA_LIVE_PATHS in
 * lib/home-links.ts and the card becomes a link automatically.
 */
const POSTS = [
  {
    title: "Scaling System Architecture From MVP to Large User Bases",
    excerpt: "How to design a product that handles growth without a costly rewrite.",
    href: "/blog/scaling-system-architecture",
  },
  {
    title: "Sprint-Based Agile Delivery for On-Time Software Releases",
    excerpt: "The sprint rhythm, demos and reporting that keep software projects on schedule.",
    href: "/blog/sprint-based-agile-delivery",
  },
  {
    title: "Enterprise Cyber Security and GDPR Compliance for Software Projects",
    excerpt: "A practical checklist for building secure, GDPR-ready applications in the UK.",
    href: "/blog/enterprise-security-gdpr",
  },
];

export default function BlogPreview() {
  return (
    <section
      id="insights"
      aria-labelledby="insights-heading"
      className="w-full max-w-[1728px] mx-auto bg-white py-16 lg:py-24 px-6 lg:px-[130px]"
    >
      <h2
        id="insights-heading"
        className="mb-12 font-bold text-[30px] leading-[40px] lg:text-[42px] lg:leading-[52px] text-[#333333]"
        style={{ fontFamily: "Garamond, serif" }}
      >
        Latest AI and Software Development{" "}
        <span className="italic font-normal text-[#A000DF]">Insights</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {POSTS.map((p) => (
          <article key={p.title} className="border-t-2 border-[#A000DF] pt-6">
            <h3 className="font-serif font-bold text-xl text-[#1a1a1a] leading-snug mb-3">
              <SmartLink href={p.href} className="hover:text-[#A000DF]">
                {p.title}
              </SmartLink>
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">{p.excerpt}</p>
          </article>
        ))}
      </div>

      <div className="mt-12">
        <Link href="/blog" className="text-sm font-medium text-[#A000DF] underline hover:opacity-80">
          Read more on our blog
        </Link>
      </div>
    </section>
  );
}
