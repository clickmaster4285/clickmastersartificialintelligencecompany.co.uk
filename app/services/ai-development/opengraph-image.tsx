import { OG_SIZE, serviceOgImage } from "../../lib/service-og";

// Social sharing image for /services/ai-development (built at build time).
export const alt = "AI Development Services UK – ClickMasters";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return serviceOgImage({
    title: "AI Development Services",
    accent: "Custom AI & LLM for UK businesses",
    rows: [
      [["Copilots · Forecasts · Automation", "purple"]],
      [["LLMs", "plain"], ["RAG", "plain"], ["ML", "plain"]],
      [["Your data", "teal"], ["Your cloud", "teal"]],
      [["CRM · ERP · APIs", "sun"]],
    ],
  });
}
