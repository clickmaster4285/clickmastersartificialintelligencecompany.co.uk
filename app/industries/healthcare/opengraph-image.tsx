import { OG_SIZE, serviceOgImage } from "../../lib/service-og";

// Social sharing image for /industries/healthcare (built at build time).
export const alt = "Healthcare AI Solutions & Software UK – ClickMasters";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return serviceOgImage({
    title: "Healthcare AI & Software",
    accent: "Less admin, with people in control",
    rows: [
      [["Referrals", "plain"], ["Forms", "plain"], ["Letters", "plain"], ["Requests", "plain"]],
      [["Classify", "purple"], ["Extract", "purple"], ["Route", "purple"]],
      [["Staff review", "sun"]],
      [["Work queue · Scheduling · Reporting", "teal"]],
    ],
  });
}
