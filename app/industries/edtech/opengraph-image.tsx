import { OG_SIZE, serviceOgImage } from "../../lib/service-og";

// Social sharing image for /industries/edtech (built at build time).
export const alt = "AI EdTech Solutions & Education Software UK – ClickMasters";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return serviceOgImage({
    title: "AI-Powered EdTech",
    accent: "Learning platforms that support educators",
    rows: [
      [["Student records", "plain"], ["Sign-on", "plain"], ["Content", "plain"]],
      [["Learning platform", "purple"], ["AI assistant", "purple"]],
      [["Teacher review", "sun"]],
      [["Progress and reporting", "teal"]],
    ],
  });
}
