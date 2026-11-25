"use client";

import React, { useState } from 'react'
import Link from 'next/link'
import { glassCapsule } from '../assets'
import { RiAddLine, RiGeminiFill } from "react-icons/ri";
import { HOME_FAQS as FAQS } from '../lib/home-faqs'

const Answer = () => {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" aria-labelledby="faq-heading" className="relative bg-[#faf9f7] py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 overflow-hidden">

      {/* Corner-wrap diagonal ribbon, top-left — hidden on mobile to avoid overflow */}
      <div aria-hidden="true" className="hidden sm:block absolute top-0 left-0 w-40 sm:w-44 md:w-50 h-40 sm:h-44 md:h-50 overflow-hidden pointer-events-none z-20">
        <div className="absolute top-[14px] left-[-40px] w-52 rotate-[-45deg] bg-[#A000DF] py-1.5 flex items-center justify-center gap-1.5">
          <RiGeminiFill className="text-white text-xs shrink-0" />
          <span className="text-center text-white text-[10px] font-medium tracking-wide whitespace-nowrap">FAQ</span>
          <RiGeminiFill className="text-white text-xs shrink-0" />
          <span className="text-center text-white text-[10px] font-medium tracking-wide whitespace-nowrap">FAQ</span>
          <RiGeminiFill className="text-white text-xs shrink-0" />
          <span className="text-center text-white text-[10px] font-medium tracking-wide whitespace-nowrap">FAQ</span>
          <RiGeminiFill className="text-white text-xs shrink-0" />
          <span className="text-center text-white text-[10px] font-medium tracking-wide whitespace-nowrap">FAQ</span>
          <RiGeminiFill className="text-white text-xs shrink-0" />
          <span className="text-center text-white text-[10px] font-medium tracking-wide whitespace-nowrap">FAQ</span>
        </div>
        <div className="absolute top-[30px] left-[-100px] w-78 rotate-[-45deg] flex items-center justify-center gap-1.5 bg-[#A000DF] py-1.5 ml-11">
          <RiGeminiFill className="text-white text-xs shrink-0" />
          <span className="text-center text-white text-[10px] font-medium tracking-wide whitespace-nowrap">FAQ</span>
          <RiGeminiFill className="text-white text-xs shrink-0" />
          <span className="text-center text-white text-[10px] font-medium tracking-wide whitespace-nowrap">FAQ</span>
          <RiGeminiFill className="text-white text-xs shrink-0" />
          <span className="text-center text-white text-[10px] font-medium tracking-wide whitespace-nowrap">FAQ</span>
          <RiGeminiFill className="text-white text-xs shrink-0" />
          <span className="text-center text-white text-[10px] font-medium tracking-wide whitespace-nowrap">FAQ</span>
          <RiGeminiFill className="text-white text-xs shrink-0" />
          <span className="text-center text-white text-[10px] font-medium tracking-wide whitespace-nowrap">FAQ</span>
          <RiGeminiFill className="text-white text-xs shrink-0" />
          <span className="text-center text-white text-[10px] font-medium tracking-wide whitespace-nowrap">FAQ</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[minmax(0,380px)_1fr] gap-10 lg:gap-16 pt-6 sm:pt-0">

        {/* LEFT SIDE */}
        <div className="w-full">
          <h2 id="faq-heading" className="font-serif font-bold text-2xl sm:text-3xl md:text-4xl text-[#1a1a1a] leading-snug">
            Frequently Asked Questions{" "}
            <span className="italic font-thin">About Our AI and Software Development Services</span>
          </h2>

          <p className="text-sm text-gray-500 leading-relaxed mt-4 max-w-md">
            Everything you need to know about our process, timelines,
            technology stack, and post-launch support.
          </p>

          <div className="mt-8 sm:mt-12 flex justify-center lg:justify-start items-center w-full">
            <img loading="lazy" decoding="async"
              src={glassCapsule}
              alt=""
              width={383}
              height={386}
              className="w-48 sm:w-64 md:w-72 object-contain rotate-[-5deg] opacity-60"
            />
          </div>
        </div>

        {/* RIGHT SIDE — ACCORDION */}
        <div className="divide-y divide-black/10 border-t border-black/10 min-w-0">
          {FAQS.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <div key={item.q} className="py-5 sm:py-6 hover:bg-[#f5ecf9] transition duration-700 hover:translate-x-1.5 transition-transform duration-300">
                <h3 className="m-0">
                <button
                  type="button"
                  id={`faq-q-${i}`}
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  className="flex w-full items-start justify-between gap-4 text-left"
                  aria-expanded={isOpen}
                  aria-controls={`faq-a-${i}`}
                >
                  <span className="font-serif text-base sm:text-lg md:text-xl text-[#1a1a1a] translate-x-1.5">
                    {item.q}
                  </span>
                  <span
                    aria-hidden="true"
                    className={`shrink-0 mt-1 flex items-center justify-center w-6 h-6 rounded-full  text-[#A000DF] hover:bg-fuchsia-200 bg-[#f7effa] text-sm transition-transform ${
                      isOpen ? 'rotate-45' : ''
                    }`}
                  >
                    <RiAddLine />
                  </span>
                </button>
                </h3>

                {/* Always rendered so every answer is in the server HTML (SEO);
                    collapsed items are hidden with the `hidden` attribute. */}
                <div
                  id={`faq-a-${i}`}
                  role="region"
                  aria-labelledby={`faq-q-${i}`}
                  hidden={!isOpen}
                  className="text-[0.85rem] text-gray-600 leading-relaxed mt-3 max-w-2xl translate-x-1.5"
                >
                  <p>
                    {item.a}
                    {'link' in item && item.link && (
                      <>
                        {' '}
                        <Link href={item.link.href} className="underline text-[#A000DF] hover:opacity-80">
                          {item.link.label}
                        </Link>
                        .
                      </>
                    )}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Answer;