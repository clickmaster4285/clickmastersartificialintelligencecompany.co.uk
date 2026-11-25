import { OG_SIZE, serviceOgImage } from "../../lib/service-og";
import { OG } from "./content";

// Social sharing image for /services/rag-development (built at build time).
export const alt = "RAG Development Services UK – ClickMasters";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return serviceOgImage(OG);
}
