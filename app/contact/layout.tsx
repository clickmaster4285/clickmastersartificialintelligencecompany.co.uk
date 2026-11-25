import type { ReactNode } from "react";
import JsonLd from "../Components/JsonLd";
import { jsonLdFor, metadataFor } from "../lib/seo-pages";

// The contact page is a client component, so its metadata lives here.
export const metadata = metadataFor("contact");

export default function ContactLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <JsonLd data={jsonLdFor("contact")} />
      {children}
    </>
  );
}
