import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="bg-gray-50 py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-[#A000DF] text-sm font-semibold tracking-wide">404</p>
        <h1 className="mt-4 font-serif text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
          Page <span className="italic text-[#A000DF]">Not Found</span>
        </h1>
        <p className="mt-6 text-gray-500 text-sm md:text-base leading-relaxed">
          The page you are looking for doesn&apos;t exist or has moved.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-block bg-[#A000DF] hover:bg-[#a000dfdf] text-white text-sm font-medium px-6 py-3 transition-colors"
          >
            Back to Home
          </Link>
          <Link href="/contact" className="text-[#A000DF] text-sm font-medium hover:underline">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
