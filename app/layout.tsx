import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

import "./globals.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import JsonLd from "./Components/JsonLd";
import ScrollToTop from "./component/ScrolltoTop";
import { SITE, siteJsonLd } from "./lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.defaultTitle,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.defaultDescription,
  applicationName: SITE.name,
  // Indexing directives are set per page (see lib/site.ts pageMetadata) so the
  // 404 page only carries Next.js's automatic noindex, with no conflict.
  openGraph: {
    type: "website",
    siteName: SITE.name,
    locale: SITE.locale,
    title: SITE.defaultTitle,
    description: SITE.defaultDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.defaultTitle,
    description: SITE.defaultDescription,
  },
  formatDetection: { telephone: false, email: false, address: false },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en-GB" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <JsonLd data={siteJsonLd()} />
        <header>
          <Navbar />
        </header>

        <main>{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
