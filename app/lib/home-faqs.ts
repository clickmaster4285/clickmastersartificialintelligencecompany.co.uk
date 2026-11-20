/**
 * Homepage FAQs. Shared by the FAQ accordion (Answer.jsx) and the FAQPage
 * JSON-LD on the homepage so the visible text and structured data match.
 */
export const HOME_FAQS = [
  {
    q: "How long does a typical project take?",
    a: "Most MVP projects are delivered within 6–8 weeks. Full-scale enterprise solutions typically take 3–6 months, depending on complexity. We follow agile sprints with weekly progress updates.",
  },
  {
    q: "Do you provide ongoing support after launch?",
    a: "Yes. Every project includes a post-launch support window, and we offer flexible ongoing maintenance plans after that period ends.",
  },
  {
    q: "Can you integrate with our existing systems?",
    a: "Absolutely. We regularly integrate with existing CRMs, ERPs, payment gateways and third-party APIs to fit seamlessly into your current stack.",
  },
  {
    q: "What technologies do you use?",
    a: "We work with modern, battle-tested tools — React, Node.js, cloud-native infrastructure and more — chosen based on what best fits your project.",
  },
  {
    q: "Is my data secure with your solutions?",
    a: "Security is built in from day one. We follow OWASP standards, encrypt data at rest and in transit, and maintain strict compliance guardrails.",
  },
  {
    q: "How do you handle project pricing?",
    a: "We offer fixed-scope pricing for well-defined projects, or a flexible monthly retainer model for ongoing product development.",
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
