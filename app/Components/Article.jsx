import React from 'react'
import { articleEngineering, articleMethodology, articleCompliance } from '../assets'

const CASES = [
  {
    tag: 'Engineering',
    metric: 'October 14, 2026',
    title: 'System Architecture Scaling from MVP to Million-User Baselines',
    desc: 'Building backend pipelines requires foresight. Discover key architectural choices that safeguard performance during rapid enterprise scaling.',
    img: articleEngineering,
    time: '8 min read',
  },
  {
    tag: 'Methodology',
    metric: 'October 08, 2026',
    title: 'Why Sprint-Based Agile Delivery Is Essential for On-Time Shipments',
    desc: 'How our software house organizes tasks, prioritizes key functional blocks, and operates as a seamless extension of your growing startup.',
    img: articleMethodology,
    time: '5 min read',
  },
  {
    tag: 'Compliance',
    metric: 'September 29, 2026',
    title: 'The Comprehensive Guide to Enterprise Cyber Security and GDPR',
    desc: 'How we implement OWASP standards, encrypt records at rest, and construct robust compliance guardrails for sensitive manufacturing and health tech.',
    img: articleCompliance,
    time: '11 min read',
  },
]

const Article = () => {
  return (
    <section id="article" className="bg-white text-black py-14 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24">
      {/* HEADER */}
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-10 sm:mb-14">
        <h2 className="font-serif font-bold text-2xl sm:text-3xl md:text-4xl leading-snug max-w-3xl">
          Latest Articles, Guides And{' '}
          <span className="italic font-medium text-[#b026e0]">
            Developer Resources
          </span>
        </h2>

        <div className="text-sm text-gray-400 max-w-sm lg:text-right pt-2">
          Stay up to date with core technical methodologies, scaling
          practices, and architectural insights.
        </div>
      </div>

      {/* CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {CASES.map((item) => (
          <div
            key={item.title}
            className="group flex flex-col min-w-0 border border-solid border-gray-200"
          >
            {/* Image */}
            <div className="w-full aspect-[4/2] overflow-hidden bg-[#141414]">
              <img loading="lazy" decoding="async"
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-3 sm:p-4 flex flex-col flex-1">
              {/* Tag + metric badge */}
              <div className="flex flex-wrap items-center justify-between gap-2 mt-2">
                <span className="text-[#b026e0] bg-fuchsia-200 text-xs font-bold tracking-wide capitalize px-3 h-5 flex items-center justify-center whitespace-nowrap">
                  {item.tag}
                </span>
                <span className="text-[#0d0d0d] text-[10px] font-bold px-2.5 py-1 rounded-sm capitalize tracking-wide whitespace-nowrap">
                  {item.metric}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-serif font-sm text-base sm:text-lg md:text-xl leading-snug mt-4 sm:mt-5">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-xs text-gray-400 leading-relaxed mt-3">
                {item.desc}
              </p>

              <a href="/blog" className="flex items-center justify-between mt-4 gap-1.5 pt-3 border-t border-gray-200 cursor-pointer text-[#333333]">
                Read Article
                <span className="font-thin whitespace-nowrap">{item.time}</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Article;