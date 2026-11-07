import Image from "next/image";
import Link from "next/link";
import {
  aiModelImg,
  avatar1,
  avatar2,
  avatar3,
  avatar4,
  instagramIcon,
  facebookIcon,
  linkedinIcon,
} from "../assets";
import { RiGeminiFill } from "react-icons/ri";
import { GrPlayFill } from "react-icons/gr";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full max-w-[1728px] mx-auto overflow-hidden bg-white px-6 py-16 lg:px-0 lg:py-0 lg:h-[820px]"
    >
      {/* Background giant watermark text (desktop only, decorative) */}
      <div
        aria-hidden="true"
        className="hidden lg:block absolute font-bold whitespace-nowrap select-none pointer-events-none z-0"
        style={{
          fontFamily: "Garamond, serif",
          left: "50%",
          transform: "translateX(-50%)",
          top: "4vw",
          width: "97.11vw",
          fontSize: "10.50vw",
          lineHeight: "10.64vw",
          textAlign: "center",
          color: "rgba(175, 0, 232, 0.08)",
        }}
      >
        Artificial Intelligence
      </div>

      {/* Decorative rotated badges (desktop only) */}
      <div aria-hidden="true" className="hidden lg:block absolute inset-0 z-10 pointer-events-none">
        <div
          className="absolute flex items-center justify-center bg-[#18181B] border border-black/5"
          style={{ left: "8%", top: "7%", width: "3.24%", height: "6.83%", transform: "rotate(-60deg)" }}
        >
          <GrPlayFill className="w-4 h-5 object-contain text-white" />
        </div>

        <div
          className="absolute flex items-center justify-center bg-[#AF00E8]"
          style={{ left: "40.30%", top: "20%", width: "3.24%", height: "6.83%", transform: "rotate(-17.73deg)" }}
        >
          <RiGeminiFill className="w-4 h-5 object-contain text-white" />
        </div>

        <div
          className="absolute flex items-center justify-center bg-[#FFE167]"
          style={{ left: "82%", top: "9%", width: "3.24%", height: "6.83%", transform: "rotate(-15deg)" }}
        >
          <span
            className="text-[#333333] text-[20px] leading-[28px]"
            style={{ fontFamily: "'Times New Roman', serif", transform: "rotate(-15deg)" }}
          >
            TS
          </span>
        </div>
      </div>

      {/* Mobile: stacked (image, heading, copy). Desktop: proportional 3-column flex. */}
      <div className="relative z-20 flex flex-col items-center gap-8 lg:flex-row lg:justify-between h-full w-full lg:px-[4vw]">
        {/* Left content block */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left gap-6 w-full lg:w-[30%] max-w-[520px] shrink-0 lg:ml-[3%]">
          <h1
            className="font-bold text-3xl leading-tight xl:text-[52px] 2xl:text-[58px] xl:leading-[60px] 2xl:leading-[66px]"
            style={{ fontFamily: "Garamond, serif", color: "#333333" }}
          >
            <span className="sr-only">Artificial Intelligence Software </span>
            That Scales Your Business Revenue
          </h1>

          <div className="flex items-center gap-3">
            <div className="w-[44px] h-[44px] rounded-full bg-[#26262B] flex items-center justify-center shrink-0 2xl:w-[48px] 2xl:h-[48px]">
              <RiGeminiFill className="w-6 h-8 object-contain text-white" />
            </div>
            <span
              className="italic text-3xl xl:text-[52px] xl:leading-[60px] 2xl:text-[58px] 2xl:leading-[66px]"
              style={{ fontFamily: "Garamond, serif", color: "#A000DF" }}
            >
              Not Just Code
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            {/* Get a free quote */}
            <Link
              href="/contact"
              className="flex items-center justify-center px-5 py-3.5 gap-2.5 w-[170px] h-[47px] bg-[#A000DF] hover:opacity-90 transition-opacity"
            >
              <span
                className="text-white text-base font-thin"
                style={{ fontFamily: "Urbanist, sans-serif" }}
              >
                Get a free quote
              </span>
            </Link>

            {/* Team avatars */}
            <div className="flex items-center gap-3">
              <div className="flex items-center">
                {[avatar1, avatar2, avatar3, avatar4].map((av, i) => (
                  <img
                    key={av}
                    src={av}
                    alt=""
                    loading="lazy"
                    width={28}
                    height={28}
                    className="w-7 h-7 rounded-full border-2 border-white object-cover"
                    style={{ marginLeft: i === 0 ? 0 : "-8px" }}
                  />
                ))}
              </div>
              <span className="text-xs text-gray-500 whitespace-nowrap">
                Free project consultation
              </span>
            </div>
          </div>
        </div>

        {/* AI model image: first on mobile, centre column on desktop (LCP element) */}
        <div className="order-first lg:order-none w-full lg:w-auto flex-1 flex items-start justify-center lg:self-start lg:pt-[82px] min-w-0 relative lg:top-[5%]">
          <Image
            src={aiModelImg}
            alt="AI-powered humanoid model representing ClickMasters AI software development"
            width={654}
            height={739}
            preload
            sizes="(min-width: 1024px) 570px, 320px"
            className="w-auto max-w-xs lg:max-w-full h-auto object-contain object-top"
            style={{
              maxHeight: "min(72vh, 640px)",
              maskImage:
                "linear-gradient(180deg, rgba(0,0,0,1) 78%, rgba(0,0,0,0) 98%)",
              WebkitMaskImage:
                "linear-gradient(180deg, rgba(0,0,0,1) 78%, rgba(0,0,0,0) 98%)",
            }}
          />
        </div>

        {/* Right content block */}
        <div className="flex flex-col items-center lg:items-end gap-6 w-full lg:w-[30%] max-w-[420px] shrink-0 lg:mr-[4%]">
          <p
            className="text-center lg:text-right text-[15px] leading-[20px] 2xl:text-base 2xl:leading-[22px]"
            style={{ fontFamily: "Urbanist, sans-serif", color: "#333333" }}
          >
            We build scalable ERP, CRM, and enterprise solutions focused on
            performance and ROI. From MVPs to full-scale SaaS platforms, AI
            automation systems, and native or cross-platform mobile apps, we
            create future-ready digital products for growing businesses.
          </p>

          {/* icons */}
          <div className="hidden lg:flex items-center gap-5">
            <div className="flex flex-col items-center gap-5">
              <img src={instagramIcon} alt="Instagram" loading="lazy" width={38} height={38} className="w-[38px] h-[38px]" />
              <img src={facebookIcon} alt="Facebook" loading="lazy" width={30} height={30} className="w-[30px] h-[30px]" />
              <img src={linkedinIcon} alt="LinkedIn" loading="lazy" width={30} height={30} className="w-[30px] h-[30px]" />
            </div>
            <div className="flex flex-col items-center gap-0">
              <span className="w-[6px] h-[6px] rounded-full bg-[#333333]" />
              <div className="w-0 h-[140px] border-l border-[#333333]" />
              <span className="w-[6px] h-[6px] rounded-full bg-[#333333]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
