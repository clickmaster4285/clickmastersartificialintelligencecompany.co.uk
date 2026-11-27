import { OG_SIZE, serviceOgImage } from "../../lib/service-og";
import { OG } from "./content";

// Social sharing image for /about/mission-vision (built at build time).
export const alt = "Mission and Vision – ClickMasters Artificial Intelligence Company";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return serviceOgImage(OG);
}
