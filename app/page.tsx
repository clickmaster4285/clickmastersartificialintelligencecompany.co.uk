import Hero from "./Components/hero";
import ServicesStrip from "./Components/ServicesStrip";
import ProvenTrackRecord from "./Components/ProvenTrackRecord";
import WhyClickmasters from "./Components/WhyClickmasters";
import ClientsMarquee from "./Components/ClientsMarquee";
import TechStack from "./Components/TechStack";
import Proven from "./Components/Proven";
import Explore from "./Components/Explore";
import TechStackGrid from "./Components/TechStackGrid";
import CTASection from "./Components/CTASection";
import Article from "./Components/Article";
import Testimonials from "./Components/Testimonials";
import SectorsWeServe from "./Components/SectorsWeServe";
import Answer from "./Components/Answer";
import JsonLd from "./Components/JsonLd";
import { jsonLdFor, metadataFor } from "./lib/seo-pages";

export const metadata = metadataFor("home");

function Home() {
  return (
    <div>
      <JsonLd data={jsonLdFor("home")} />
      <Hero />
      <ServicesStrip />
      <ProvenTrackRecord />
      <WhyClickmasters />
      <ClientsMarquee />
      <TechStack />
      <TechStackGrid />
      <CTASection />
      <Proven />
      <Explore />
      <Testimonials />
      <SectorsWeServe />
      <Answer />
      <Article />
    </div>
  );
}

export default Home;
