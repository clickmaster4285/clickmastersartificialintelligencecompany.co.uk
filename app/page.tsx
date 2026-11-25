import Hero from "./Components/hero";
import ServicesStrip from "./Components/ServicesStrip";
import ServicesOverview from "./Components/ServicesOverview";
import WhyClickmasters, { RevenueSystems } from "./Components/WhyClickmasters";
import ClientsMarquee from "./Components/ClientsMarquee";
import SolutionsSection from "./Components/SolutionsSection";
import SectorsWeServe from "./Components/SectorsWeServe";
import TechStack from "./Components/TechStack";
import TechStackGrid from "./Components/TechStackGrid";
import ProcessSection from "./Components/ProcessSection";
import CaseStudiesPreview from "./Components/CaseStudiesPreview";
import LocationsSection from "./Components/LocationsSection";
import Answer from "./Components/Answer";
import BlogPreview from "./Components/BlogPreview";
import CTASection from "./Components/CTASection";
import JsonLd from "./Components/JsonLd";
import { jsonLdFor, metadataFor } from "./lib/seo-pages";
import { homeFaqJsonLd } from "./lib/home-faqs";

export const metadata = metadataFor("home");

/*
 * Heading outline (one H1, no skipped levels):
 *   H1 Hero (A)
 *   H2 Services (B) > H3 x8
 *   H2 Revenue Systems (C)
 *   H2 Why Choose Us (D) > H3 x4
 *   H2 Solutions (E) > H3 x5
 *   H2 Industries (F) > H3 x8
 *   H2 Tech Stack (G) > H3 x6
 *   H2 Process (H) > H3 x5
 *   H2 Case Studies (I) > H3 x3
 *   H2 Locations (J)
 *   H2 FAQ (K) > H3 x6
 *   H2 Blog (L) > H3 x3
 *   H2 Final CTA (M)
 * Marquees (ServicesStrip, ClientsMarquee) are decorative and aria-hidden.
 */
function Home() {
  return (
    <div>
      <JsonLd data={jsonLdFor("home")} />
      <JsonLd data={homeFaqJsonLd()} />
      <Hero />
      <ServicesStrip />
      <ServicesOverview />
      <RevenueSystems />
      <WhyClickmasters />
      <ClientsMarquee />
      <SolutionsSection />
      <SectorsWeServe />
      <TechStack />
      <TechStackGrid />
      <ProcessSection />
      <CaseStudiesPreview />
      <LocationsSection />
      <Answer />
      <BlogPreview />
      <CTASection />
    </div>
  );
}

export default Home;
