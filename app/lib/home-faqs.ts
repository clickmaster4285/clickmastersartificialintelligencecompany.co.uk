/**
 * Homepage FAQs. Shared by the FAQ accordion (Answer.jsx) and the FAQPage
 * JSON-LD on the homepage so the visible text and structured data match.
 */
export const HOME_FAQS = [
  {
    q: "How long does a typical software project take?",
    a: "Most MVP projects are delivered within 6 to 8 weeks. Full-scale enterprise solutions typically take 3 to 6 months depending on complexity. We work in agile sprints and share weekly progress updates, so you always know where your project stands.",
  },
  {
    q: "Do you provide ongoing support after launch?",
    a: "Yes. We offer monitoring, bug fixes, security updates and feature development after launch, with flexible support plans and 24/7 assistance for critical systems.",
  },
  {
    q: "Can you integrate with our existing systems?",
    a: "Yes. We build secure API integrations with CRMs, ERPs, payment gateways, accounting tools and legacy software, and we can modernise existing systems without disrupting your operations.",
  },
  {
    q: "What technologies do you use?",
    a: "We use React, Next.js, Node.js, Python, Laravel, Flutter and cloud platforms including AWS, Azure and Google Cloud. We choose the stack that best fits your performance, security and budget needs.",
  },
  {
    q: "Is my data secure with your solutions?",
    a: "Security is built into every project. We follow OWASP standards and GDPR best practice, use encryption, role-based access and regular security testing, and sign NDAs on request.",
  },
  {
    q: "How do you handle project pricing?",
    a: "We offer fixed-price and time-and-materials models depending on scope. After a free consultation we provide a clear estimate with milestones.",
    /** Rendered after the answer on the page; not part of the schema text. */
    link: { href: "/contact", label: "Request your free quote" },
  },
] as const;

export function homeFaqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: HOME_FAQS.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
}
