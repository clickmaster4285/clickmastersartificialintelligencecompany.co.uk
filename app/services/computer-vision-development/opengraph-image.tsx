import { OG_SIZE, serviceOgImage } from "../../lib/service-og";
import { CONTENT } from "./content";

// Social sharing image for /services/computer-vision-development (built at build time).
export const alt = "Computer Vision Development Services UK – ClickMasters";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return serviceOgImage(CONTENT.og);
}
