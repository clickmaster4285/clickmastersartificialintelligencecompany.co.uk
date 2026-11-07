// app/contact/page.jsx (metadata + JSON-LD live in ./layout.tsx)
"use client";

import React, { useState } from "react";

const CONTACT_EMAIL = "hello@clickmasters.com";

const consultationOptions = [
  {
    title: "Schedule a Demo",
    description:
      "Experience live pipelines showing optimized LLM training parameters and predictive dashboards.",
    linkText: "Book 15 Min Call",
  },
  {
    title: "AI Consultation",
    description:
      "Share your structural datasets with our principal model engineers to map strategic solutions.",
    linkText: "Request Session",
  },
  {
    title: "Partnership Inquiry",
    description:
      "Join our network of cloud providers, compliance boards, and native hardware specialists.",
    linkText: "Contact Partners",
  },
];

const faqs = [
  {
    question: "What industries do you specialize in?",
    answer:
      "Most custom projects are deployed across high-precision manufacturing, healthcare EHR systems, logistics tracking, and enterprise fintech networks with strict data-protection requirements.",
  },
  {
    question: "How long is a typical project roadmap?",
    answer:
      "Most functional MVP pilots are launched within 6-8 weeks. Comprehensive global enterprise platforms and private ML pipelines typically scope over 3-6 months based on integration parameters.",
  },
  {
    question: "Can we build a proof-of-concept first?",
    answer:
      "Yes. Our agile software developers prioritize sandbox model deployments so you can audit classification accuracy and verify performance outcomes before scaling parameters.",
  },
  {
    question: "How does your pricing model work?",
    answer:
      "We operate on flat-fee sprint blueprints matching Starter, Professional, or custom Enterprise specifications. No hidden transaction or runtime margin overrides.",
  },
  {
    question: "Is our proprietary data secure with ClickMasters?",
    answer:
      "Every pipeline from our software house follows rigorous OWASP guidelines. We train custom models inside isolated virtual clouds, completely disconnected from public model parameters.",
  },
  {
    question: "Do you integrate with legacy enterprise architectures?",
    answer:
      "Yes. We engineer secure, decoupled translation layers and private API connectors to safely ingest databases from mainframes or legacy ERP solutions.",
  },
];

// FAQ accordion item: sparkle icon toggles to cross, answer slides down/up
function FaqItem({ faq, isOpen, onToggle }) {
  return (
    <div className="group py-6 px-4 -mx-4 rounded-md transition-colors duration-200 hover:bg-white hover:shadow-md">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between gap-4 text-left cursor-pointer"
      >
        <h3
          className={`font-serif text-lg font-semibold transition-colors ${
            isOpen
              ? "text-[#A000DF]"
              : "text-gray-900 group-hover:text-[#A000DF]"
          }`}
        >
          {faq.question}
        </h3>

        <span
          className={`flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full border transition-all duration-300 bg-pink-50 ${
            isOpen
              ? "bg-[#A000DF] border-[#A000DF] text-white rotate-180"
              : "border-gray-300 text-gray-500 group-hover:border-[#A000DF] group-hover:text-[#A000DF]"
          }`}
        >
          {isOpen ? (
            /* Cross (X) icon */
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 6l12 12M18 6L6 18"
              />
            </svg>
          ) : (
            /* Sparkle/star icon */
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2c0.5 4.5 2 7 6.5 8.5C14 12 12.5 14.5 12 19c-0.5-4.5-2-7-6.5-8.5C10 9 11.5 6.5 12 2z" />
            </svg>
          )}
        </span>
      </button>

      {/* Answer: smooth slide down when open, slide up when closed */}
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p
            className={`text-gray-500 text-sm leading-relaxed ${
              isOpen ? "mt-2" : ""
            }`}
          >
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Contact() {
  const [openIndex, setOpenIndex] = useState(null);

  // No form backend exists yet, so the enquiry opens in the visitor's email
  // client, pre-filled and addressed to CONTACT_EMAIL.
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const get = (key) => String(data.get(key) || "").trim();
    const subject = `Website enquiry: ${get("subject")}`;
    const body = [
      `Name: ${get("name")}`,
      `Email: ${get("email")}`,
      `Company: ${get("company")}`,
      `Phone: ${get("phone")}`,
      "",
      get("message"),
    ].join("\n");
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <>
      {/* Hero + Contact Form Section */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="font-serif text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
              Let&apos;s Build The{" "}
              <span className="text-[#A000DF]">Future Together</span>
            </h1>

            <p className="mt-6 text-gray-500 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              Have a question about architectures, custom compliance setups,
              or model latencies? Consult directly with our technical
              deployment team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-8">
                Send Us A Message
              </h2>

              <form id="contact-form" className="space-y-6 scroll-mt-24" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="cf-name" className="block text-sm font-semibold text-gray-900 mb-2">
                      Full Name
                    </label>
                    <input
                      id="cf-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      placeholder="Your name"
                      className="w-full border-b border-gray-300 focus:border-[#A000DF] outline-none py-2 text-sm text-gray-700 bg-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="cf-email" className="block text-sm font-semibold text-gray-900 mb-2">
                      Email
                    </label>
                    <input
                      id="cf-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      placeholder="you@company.com"
                      className="w-full border-b border-gray-300 focus:border-[#A000DF] outline-none py-2 text-sm text-gray-700 bg-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="cf-company" className="block text-sm font-semibold text-gray-900 mb-2">
                      Company
                    </label>
                    <input
                      id="cf-company"
                      name="company"
                      type="text"
                      autoComplete="organization"
                      placeholder="Your company"
                      className="w-full border-b border-gray-300 focus:border-[#A000DF] outline-none py-2 text-sm text-gray-700 bg-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="cf-phone" className="block text-sm font-semibold text-gray-900 mb-2">
                      Phone Number
                    </label>
                    <input
                      id="cf-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="+44 7700 900000"
                      className="w-full border-b border-gray-300 focus:border-[#A000DF] outline-none py-2 text-sm text-gray-700 bg-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="cf-subject" className="block text-sm font-semibold text-gray-900 mb-2">
                    Subject
                  </label>
                  <select id="cf-subject" name="subject" className="w-full border-b border-gray-300 focus:border-[#A000DF] outline-none py-2 text-sm text-gray-700 bg-transparent">
                    <option>Custom Model Engineering & Fine-Tuning</option>
                    <option>AI Consulting & Strategy</option>
                    <option>Enterprise Automation</option>
                    <option>Partnership Inquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="cf-message" className="block text-sm font-semibold text-gray-900 mb-2">
                    Message
                  </label>
                  <textarea
                    id="cf-message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Tell us about your project, goals and timeline."
                    className="w-full border-b border-gray-300 focus:border-[#A000DF] outline-none py-2 text-sm text-gray-700 bg-transparent resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#A000DF] hover:bg-[#a000dfdf] text-white text-sm font-medium px-6 py-4  transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Direct Information */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                Direct Information
              </h2>
              <p className="text-gray-500 text-sm mb-8 leading-relaxed">
                Prefer email? Write to us directly and our team will get back to
                you to discuss your project.
              </p>

              <div className="space-y-6">
                <div>
                  <p className="text-[#A000DF] text-xs font-semibold tracking-wide">
                    GENERAL EMAIL
                  </p>
                  <a href={`mailto:${CONTACT_EMAIL}`} className="block text-gray-900 text-sm mt-1 hover:text-[#A000DF]">
                    {CONTACT_EMAIL}
                  </a>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Structured Consultation Section */}
      <section className="bg-gray-50 py-16 px-6 border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mb-12 leading-tight">
            Structured Consultation{" "}
            <span className="italic text-[#A000DF]">Bypassing Project 
              <br></br>Limits</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-10">
            {consultationOptions.map((option, index) => (
              <div key={index}>
                <h3 className="font-serif text-lg font-semibold text-gray-900 mb-3">
                  {option.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {option.description}
                </p>

                
                <a href="#contact-form"
                  className="text-[#A000DF] text-sm font-medium hover:underline"
                >
                  {option.linkText}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section with hover effect on each row */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-2xl md:text-4xl font-bold text-gray-900 mb-14">
            Answers Before We{" "}
            <span className="italic text-[#A000DF]">Initialize Code</span>
          </h2>

          <div className="divide-y divide-gray-200">
            {faqs.map((faq, index) => (
              <FaqItem
                key={index}
                faq={faq}
                isOpen={openIndex === index}
                onToggle={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              />
            ))}
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900">
            Ready To Transform Your{" "}
            <span className="italic text-[#A000DF]">Business?</span>
          </h2>

          <p className="mt-6 text-gray-500 text-sm md:text-base leading-relaxed">
            Deploy ClickMasters models securely on your systems to eliminate
            bottlenecks, automate decision paths, and increase conversions.
          </p>

          <div className="mt-8">
            <a href="#contact-form" className="inline-block bg-[#A000DF] hover:bg-[#a000dfdf] text-white text-sm font-medium px-6 py-3  transition-colors">
              Get Free Consultation
            </a>
          </div>
        </div>
      </section>

    </>
  );
}