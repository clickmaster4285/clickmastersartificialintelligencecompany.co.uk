import { OG_SIZE, serviceOgImage } from "../../lib/service-og";
import { OG } from "./content";

// Social sharing image for /services/cloud-devops (built at build time).
export const alt = "Cloud and DevOps Development Services UK – ClickMasters";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return serviceOgImage(OG);
}
