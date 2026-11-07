import React from 'react'
import { ArrowRight } from 'lucide-react'
import { logiflowImg, fintrustImg, healthplusImg } from '../assets'

const CASES = [
  {
    tag: 'LOGIFLOW SOLUTIONS',
    metric: '40% EFFICIENCY',
    title: 'Optimizing Depot Logistics with AI Custom Backends',
    desc: 'How we designed and integrated a real-time dispatch routing framework that boosted overall operational planning efficiency by 40%.',
    img: logiflowImg,
  },
  {
    tag: 'FINTRUST GLOBAL',
    metric: '99.99% UPTIME',
    title: 'Legacy Infrastructure Migrations to Cloud-Native microservices',
    desc: 'Transitioning a global ledger platform servicing millions of active users into a decoupled, fully compliant AWS secure environment.',
    img: fintrustImg,
  },
  {
    tag: 'HEALTHPLUS NETWORKS',
    metric: '60% LESS FAILS',
    title: 'Building HIPAA-Secure Medical Portals for Faster Triage',
    desc: 'An intuitive web and mobile experience enabling patients and doctors to securely coordinate, store charts, and issue automated reminders.',
    img: healthplusImg,
  },
]

const Proven = () => {
  return (
    <section id="proven" className="bg-[#242424] text-white py-20 px-6 md:px-16 lg:px-24">
      {/* HEADER */}
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-14">
        <h2 className="font-serif font-bold text-3xl md:text-4xl leading-snug max-w-3xl">
          Proven Performance &amp;{' '}
          <span className="italic font-thin text-[#A000DF]">
            Measurable Real-World ROI
          </span>
        </h2>

        <p className="text-sm text-gray-400 max-w-sm lg:text-right lg:pt-2">
          Discover how our engineering excellence has empowered fast-growing
          companies and global brands.
        </p>
      </div>

      {/* CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-[#1D1D1D]">
        {CASES.map((item) => (
          <div key={item.title} className="group flex flex-col bg-[#18181B] pb-4">
            {/* Image */}
            <div className="w-full aspect-[4/2] overflow-hidden ">
              <img loading="lazy" decoding="async"
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Tag + metric badge */}
            <div className="flex items-center justify-between px-4 mt-5">
              <span className="text-[#A000DF] text-xs font-bold tracking-wide uppercase">
                {item.tag}
              </span>
              <span className="bg-[#FFE27A] text-[#0d0d0d] text-[10px] font-bold px-2.5 py-1 uppercase tracking-wide">
                {item.metric}
              </span>
            </div>

            {/* Title */}
            <h3 className="font-serif font-bold text-lg md:text-xl leading-snug mt-5 px-3">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-400 leading-relaxed  mt-3 px-3">
              {item.desc}
            </p>
            <a href="/case-studies" className="flex items-center mt-3 gap-1.5 px-3">
              Read Full Study
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Proven