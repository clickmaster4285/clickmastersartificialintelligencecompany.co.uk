"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { logo } from "../assets";

// Har link ka label + uska dedicated page route
const navLinks = [
  { label: "Solutions", href: "/solutions" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Locations", href: "/locations" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
  { label: "Blog", href: "/blog" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Click hone pe mobile menu band kar do
  const handleClick = () => {
    setOpen(false);
  };

  return (
    <nav className="relative w-full max-w-[1728px] mx-auto min-h-[100px] lg:h-[100px] bg-white overflow-x-hidden">
      <div className="flex items-center justify-between px-6 py-6 lg:hidden">
        <Link href="/" aria-label="ClickMasters home">
          <img src={logo} alt="ClickMasters" width={177} height={24} className="h-6 w-auto" />
        </Link>
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="p-2"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />
            ) : (
              <path d="M3 6h18M3 18h18" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="lg:hidden flex flex-col items-center gap-4 pb-6 px-6">
          {navLinks.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              onClick={handleClick}
              className={`text-sm transition-colors ${
                pathname === href
                  ? "text-purple-600 font-semibold"
                  : "text-gray-800 hover:text-purple-600"
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="flex items-center justify-center w-[145px] h-[48px] px-5 py-3 rounded-md text-white text-sm font-medium bg-[#AF00E8] hover:opacity-90 transition-opacity"
          >
            Get a Quote
          </Link>
        </div>
      )}

      <div className="hidden lg:flex items-center justify-between h-full px-[130px] gap-6">
        <Link href="/" aria-label="ClickMasters home" className="shrink-0 w-[177px] h-[24px]">
          <img src={logo} alt="ClickMasters" width={177} height={24} className="h-full w-full object-contain" />
        </Link>

        <ul className="flex flex-row justify-center items-center gap-6 flex-1">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <Link
                href={href}
                onClick={handleClick}
                className={`text-sm transition-colors whitespace-nowrap ${
                  pathname === href
                    ? "text-purple-600 font-semibold"
                    : "text-gray-800 hover:text-purple-600"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className="shrink-0 flex flex-row justify-center items-center gap-[10px] px-5 py-[13px] w-[145px] h-[48px] text-white text-sm font-medium bg-[#AF00E8] hover:opacity-90 transition-opacity"
        >
          Get a Quote
        </Link>
      </div>
    </nav>
  );
}
