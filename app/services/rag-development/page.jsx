// /services/rag-development
// Content: ./content.ts. Template: app/Components/AiServicePage.jsx.
// This real folder takes precedence over the app/services/[slug] placeholder route.
import AiServicePage from "../../Components/AiServicePage";
import { aiServiceMetadata } from "../../lib/ai-service-page";
import { CONTENT } from "./content";

export const metadata = aiServiceMetadata(CONTENT);

export default function Page() {
  return <AiServicePage content={CONTENT} />;
}
