import Link from "next/link";
import { logo } from "../assets";
import { CONTACT } from "../lib/site";

const links = [
  { label: "Solutions", href: "/solutions" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Use Cases", href: "/case-studies" },
  { label: "Locations", href: "/locations" },
  { label: "About Us", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const linkStyle = {
  fontFamily: "Urbanist, sans-serif",
  fontSize: "16px",
  lineHeight: "19px",
  color: "#252525",
};

export default function Footer() {
  return (
    <footer className="relative w-full max-w-[1728px] mx-auto bg-white overflow-hidden lg:min-h-[687px] py-16 lg:pb-[110px] lg:py-0 px-6">

      {/* Background giant watermark text (decorative) */}
      <div
        aria-hidden="true"
        className="hidden text-transparent [-webkit-text-stroke:2px_#AF00E8] lg:block absolute font-bold uppercase whitespace-nowrap select-none pointer-events-none z-0"
        style={{
          fontFamily: "Outfit, sans-serif",
          bottom: "-39.01px",
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: "12.6vw",
          lineHeight: "16.55vw",
          opacity: 0.1,
          WebkitMaskImage: "linear-gradient(to bottom, black 40%, transparent 90%)",
          maskImage: "linear-gradient(to bottom, black 40%, transparent 90%)",
        }}
      >Clickmasters</div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center gap-[60px] w-full lg:max-w-[1528px] lg:mx-auto lg:pt-[100.71px]">
        <img
          src={logo}
          alt="ClickMasters"
          width={271}
          height={37}
          loading="lazy"
          style={{
            width: "271px",
            height: "37.03px",
          }}
          className="object-contain"
        />

        <div className="flex flex-col items-center gap-3 w-full lg:w-[600px]">

          <p
            className="text-center capitalize text-3xl lg:text-[94px] lg:leading-[106px]"
            style={{
              fontFamily: "Garamond, serif",
              fontWeight: 700,
              color: "#333333",
            }}
          >
            Got A Vision?
            <br />
            <span className="italic font-thin">{"Let's Build It."}</span>
          </p>

          <p
            className="text-center text-sm"
            style={{
              fontFamily: "Urbanist, sans-serif",
              fontSize: "16px",
              lineHeight: "19px",
              color: "#333333",
            }}
          >
            ClickMasters is a software development company. We build custom
            software, web applications, mobile apps, and ERP solutions for
            businesses worldwide.
          </p>

        </div>

        {/* Contact details (shared with the contact page via lib/site) */}
        <address className="not-italic flex flex-col items-center gap-3 text-center" style={linkStyle}>
          <ul className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            {CONTACT.phones.map((phone) => (
              <li key={phone.e164}>
                <span className="font-semibold">{phone.country}:</span>{" "}
                <a href={`tel:${phone.e164}`} className="hover:text-[#AF00E8] transition-colors">
                  {phone.display}
                </a>
              </li>
            ))}
            <li>
              <span className="font-semibold">Email:</span>{" "}
              <a href={`mailto:${CONTACT.email}`} className="hover:text-[#AF00E8] transition-colors">
                {CONTACT.email}
              </a>
            </li>
          </ul>
          <p className="text-sm text-[#4A4A4A]">We usually respond {CONTACT.responseTime}.</p>
        </address>

        {/* Bottom row */}
        <div className="flex flex-col items-start gap-[50px] w-full">

          <div
            className="w-full border-t"
            style={{ borderColor: "#4A4A4A" }}
          />

          <div className="flex flex-col sm:flex-row items-center gap-[50px] w-full">

            <span
              className="flex-1 text-center sm:text-left"
              style={linkStyle}
            >
              © {new Date().getFullYear()} ClickMasters. All rights reserved.
            </span>

            <nav aria-label="Footer" className="flex flex-wrap justify-center sm:justify-end items-center gap-x-8 gap-y-4">
              {links.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  style={linkStyle}
                  className="hover:text-[#AF00E8] transition-colors"
                >
                  {label}
                </Link>
              ))}
            </nav>

          </div>
        </div>

      </div>
    </footer>
  );
}
