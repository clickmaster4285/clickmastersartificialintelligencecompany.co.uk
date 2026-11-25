import { OG_SIZE, serviceOgImage } from "../../lib/service-og";
import { OG } from "./content";

// Social sharing image for /services/llm-development-fine-tuning (built at build time).
export const alt = "LLM Fine-Tuning Services UK – ClickMasters";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return serviceOgImage(OG);
}
