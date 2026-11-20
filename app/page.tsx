import Hero from "./Components/hero";
import ServicesStrip from "./Components/ServicesStrip";
import ProvenTrackRecord from "./Components/ProvenTrackRecord";
import WhyClickmasters from "./Components/WhyClickmasters";
import ClientsMarquee from "./Components/ClientsMarquee";
import TechStack from "./Components/TechStack";
import Explore from "./Components/Explore";
import TechStackGrid from "./Components/TechStackGrid";
import CTASection from "./Components/CTASection";
import SectorsWeServe from "./Components/SectorsWeServe";
import Answer from "./Components/Answer";
import JsonLd from "./Components/JsonLd";
import { jsonLdFor, metadataFor } from "./lib/seo-pages";
import { homeFaqJsonLd } from "./lib/home-faqs";

export const metadata = metadataFor("home");

function Home() {
  return (
    <div>
      <JsonLd data={jsonLdFor("home")} />
      <JsonLd data={homeFaqJsonLd()} />
      <Hero />
      <ServicesStrip />
      <ProvenTrackRecord />
      <WhyClickmasters />
      <ClientsMarquee />
      <TechStack />
      <TechStackGrid />
      <CTASection />
      <Explore />
      <SectorsWeServe />
      <Answer />
    </div>
  );
}

export default Home;
