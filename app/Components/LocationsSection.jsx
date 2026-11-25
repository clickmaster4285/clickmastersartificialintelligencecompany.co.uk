import Link from "next/link";
import SmartLink from "./SmartLink";
import { LOCATION_LINKS } from "../lib/home-links";

const LINK = "underline text-white hover:text-[#AF00E8]";

const CITIES = [
  ["London", LOCATION_LINKS.london],
  ["Manchester", LOCATION_LINKS.manchester],
  ["Birmingham", LOCATION_LINKS.birmingham],
  ["Leeds", LOCATION_LINKS.leeds],
  ["Glasgow", LOCATION_LINKS.glasgow],
  ["Bristol", LOCATION_LINKS.bristol],
];

/** Section J: UK locations. */
export default function LocationsSection() {
  return (
    <section
      id="locations"
      aria-labelledby="locations-heading"
      className="w-full max-w-[1728px] mx-auto bg-[#0a0a0a] py-16 lg:py-20 px-6 lg:px-[130px]"
    >
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
        <h2
          id="locations-heading"
          className="text-white font-bold text-[30px] leading-[40px] lg:text-[42px] lg:leading-[52px]"
          style={{ fontFamily: "Garamond, serif" }}
        >
          AI Software Development{" "}
          <span className="italic font-normal">Across the United Kingdom</span>
        </h2>
        <div className="space-y-6">
          <p className="text-[15px] leading-[24px] text-gray-200" style={{ fontFamily: "Urbanist, sans-serif" }}>
            We support businesses in{" "}
            {CITIES.map(([name, href], i) => (
              <span key={name}>
                <SmartLink href={href} className={LINK}>{name}</SmartLink>
                {i < CITIES.length - 2 ? ", " : i === CITIES.length - 2 ? " and " : ""}
              </span>
            ))}
            , as well as clients across the US and Pakistan. Wherever you are,
            you get the same agile delivery, transparent communication and
            dedicated support. See{" "}
            <Link href="/locations" className={LINK}>all our locations</Link>.
          </p>
          <ul aria-hidden="true" className="flex flex-wrap gap-3">
            {CITIES.map(([name]) => (
              <li key={name} className="px-4 py-1.5 border border-white/20 text-white/80 text-sm">
                {name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
