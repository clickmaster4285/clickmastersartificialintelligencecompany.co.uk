import { OG_SIZE, serviceOgImage } from "../../lib/service-og";

// Social sharing image for /services/mobile-app-development (built at build time).
export const alt = "Mobile App Development Services UK – ClickMasters";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return serviceOgImage({
    title: "Mobile App Development Services",
    accent: "iOS, Android and cross-platform apps",
    rows: [
      [["Swift", "purple"], ["Kotlin", "teal"]],
      [["Flutter · React Native", "purple"]],
      [["Secure API & sync", "plain"]],
      [["App Store · Google Play", "sun"]],
    ],
  });
}
