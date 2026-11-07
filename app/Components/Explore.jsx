import Link from "next/link";
import {
  img15,
  img15_2,
  img15_3,
  img15_4,
  img15_5,
  img16,
} from "../assets";
import { RiGeminiFill } from "react-icons/ri";
const SERVICES = [
  {
    title: "Custom Software Development",
    desc: "End-to-end product delivery.",
    img: img16,
    rotate: -3.63,
  },
  {
    title: "Web Application Development",
    desc: "Healthcare",
    img: img15_3,
    rotate: 4,
  },
  {
    title: "Client testimonials",
    desc: "What businesses say after launch.",
    img: img15_5,
    rotate: -2,
  },
  {
    title: "Mobile App Development",
    desc: "Native + cross-platform builds.",
    img: img15,
    rotate: 5,
  },
  {
    title: "Cloud Solutions & DevOps",
    desc: "CI/CD, containers, observability.",
    img: img15_2,
    rotate: -5,
  },
  {
    title: "Database Design & Management",
    desc: "Modeling, migrations, tuning.",
    img: img15_4,
    rotate: 3,
  },
];

// Previously animated counters (5+ years, 1860+ projects, 75+ awards,
// 3500+ clients) that rendered "0+" server-side and were not verified.
const STATS = [
  { value: "AI", label: "Automation & Machine Learning" },
  { value: "Web", label: "& Mobile Applications" },
  { value: "Cloud", label: "Native Deployments" },
  { value: "8", label: "Sectors Served" },
];

function StatItem({ stat }) {
  return (
    <div>
      <p className="flex items-start font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#1a1a1a] leading-none">
        {stat.value}
      </p>
      <p className="text-xs sm:text-sm text-gray-500 mt-2">{stat.label}</p>
    </div>
  );
}

const Explore = () => {
  return (
    <>
      <section id="explore" className="relative bg-[#faf9f7] pt-16 sm:pt-20 md:pt-24 pb-16 sm:pb-20 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 overflow-hidden border-t border-b border-[#9b1fe0]/30">
        <div className="hidden sm:block absolute top-0 left-0 w-40 sm:w-44 md:w-50 h-40 sm:h-44 md:h-50 overflow-hidden pointer-events-none z-20">
          <div className="absolute top-[14px] left-[-40px] w-52 rotate-[-45deg] bg-[#A000DF] py-1.5 flex items-center justify-center gap-1.5">
            <RiGeminiFill className="text-white text-xs shrink-0" />
            <span className="text-center text-white text-[10px] font-medium tracking-wide whitespace-nowrap">
              Our Services
            </span>
            <RiGeminiFill className="text-white text-xs shrink-0" />
            <span className="text-center text-white text-[10px] font-medium tracking-wide whitespace-nowrap">
              Our Services
            </span>
            <RiGeminiFill className="text-white text-xs shrink-0" />
            <span className="text-center text-white text-[10px] font-medium tracking-wide whitespace-nowrap">
              Our Services
            </span>
          </div>
          <div className="absolute top-[30px] left-[-100px] w-78 rotate-[-45deg] flex items-center justify-center gap-1.5 bg-[#A000DF] py-1.5 ml-11">
            <RiGeminiFill className="text-white text-xs shrink-0" />
            <span className="text-center text-white text-[10px] font-medium tracking-wide whitespace-nowrap">
              Our Services
            </span>
            <RiGeminiFill className="text-white text-xs shrink-0" />
            <span className="text-center text-white text-[10px] font-medium tracking-wide whitespace-nowrap">
              Our Services
            </span>
            <RiGeminiFill className="text-white text-xs shrink-0" />
            <span className="text-center text-white text-[10px] font-medium tracking-wide whitespace-nowrap">
              Our Services
            </span>
          </div>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-12 sm:mb-16 md:mb-20 relative z-10 pt-4 sm:pt-0">
            <h2 className="font-serif font-bold text-2xl sm:text-3xl md:text-4xl text-[#1a1a1a]">
              Explore{" "}
              <span className="italic font-serif font-medium text-[#A000DF]">
                ClickMasters
              </span>
            </h2>

            <p className="text-sm text-gray-500 max-w-xs sm:text-right leading-relaxed w-full sm:w-70">
              Start with our service offerings, review proof, and read insights
              — everything you need to choose the right solution.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 sm:gap-x-10 gap-y-12 sm:gap-y-14 md:gap-y-20 relative z-10">
            {SERVICES.map((item) => (
              <div key={item.title} className="relative min-w-0 pb-14">
                <div className="absolute right-2 bottom-0 w-20 sm:w-24 h-16 sm:h-19 bg-[#9b1fe0]/10 rounded-tl-full pointer-events-none" />

                <div className="relative z-10">
                  <div className="w-9 h-9 rounded-md overflow-hidden mb-4">
                    <img loading="lazy" decoding="async"
                      src={item.img.src ?? item.img}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div
                    className="origin-left"
                    style={{ transform: `rotate(${item.rotate}deg)` }}
                  >
                    <h3 className="font-serif font-semibold text-base sm:text-lg md:text-xl text-[#A000DF] mb-2 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-[13px] sm:text-sm text-[#3a3a3a]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-6 relative z-10">
            <Link href="/services" className="inline-block bg-[#A000DF] text-white text-sm font-medium px-8 py-3 rounded-sm hover:bg-[#8600bb] transition-colors">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <section className="relative bg-[#faf9f7] py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 sm:gap-10 mb-16 sm:mb-20 md:mb-24">
            <div className="w-full lg:max-w-md">
              <h2 className="font-serif font-bold text-xl sm:text-2xl md:text-3xl text-[#1a1a1a] leading-snug lg:w-141">
                Ready To Transform Your Industry?
              </h2>
              <p className="font-serif italic text-lg sm:text-xl md:text-2xl text-[#1a1a1a] mt-1">
                Let&rsquo;s Build Something Extra-Ordinary
              </p>

              <p className="text-sm text-gray-500 leading-relaxed mt-4">
                Whether you&rsquo;re in manufacturing, healthcare, or retail, we
                have the expertise to build software that drives your business
                forward.
              </p>

              <Link href="/contact" className="inline-block mt-6 bg-[#A000DF] text-white text-sm font-medium px-7 py-3 rounded-sm hover:bg-[#8600bb] transition-colors">
                Discuss Your Project
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-x-10 sm:gap-x-20 gap-y-8 sm:gap-y-10 shrink-0 w-full lg:w-auto">
              {STATS.map((s) => (
                <StatItem key={s.label} stat={s} />
              ))}
            </div>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10 sm:gap-12">
            <div className="grid grid-cols-2 gap-x-10 sm:gap-x-20 gap-y-8 sm:gap-y-10 w-full lg:w-auto">
              <div>
                <p className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#1a1a1a]">
                  Agile
                </p>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">
                  Development
                </p>
              </div>
              <div>
                <p className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#1a1a1a]">
                  Ongoing
                </p>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">Support</p>
              </div>
              <div>
                <p className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#1a1a1a]">
                  On-time
                </p>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">
                  Delivery
                </p>
              </div>
            </div>

            <div className="w-full lg:max-w-md">
              <h3 className="font-serif font-bold text-xl sm:text-2xl md:text-3xl text-[#1a1a1a] leading-snug">
                Ready To Start Your Project?
              </h3>
              <p className="font-serif italic text-lg sm:text-xl md:text-2xl text-[#1a1a1a] mt-1">
                Let&rsquo;s Build Something Amazing Together
              </p>

              <p className="text-sm text-gray-500 leading-relaxed mt-4">
                Whether you need a custom web app, mobile solution, or
                enterprise software, our team is ready to bring your vision to
                life.
              </p>

              <Link href="/contact" className="inline-block mt-6 bg-[#A000DF] text-white text-sm font-medium px-7 py-3 rounded-sm hover:bg-[#8600bb] transition-colors">
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Explore;