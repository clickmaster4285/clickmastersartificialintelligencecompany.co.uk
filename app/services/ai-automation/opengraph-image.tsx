import { OG_SIZE, serviceOgImage } from "../../lib/service-og";
import { OG } from "./content";

// Social sharing image for /services/ai-automation (built at build time).
export const alt = "AI Automation Services UK – ClickMasters";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return serviceOgImage(OG);
}
