import { OG_SIZE, serviceOgImage } from "../lib/service-og";

// Social sharing image for /portfolio (built at build time).
export const alt = "ClickMasters Portfolio – web, e-commerce and digital projects";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return serviceOgImage({
    title: "Our Portfolio",
    accent: "Built around real business needs",
    rows: [
      [["Property portal", "purple"]],
      [["Online stores", "plain"], ["Company sites", "plain"]],
      [["Learning platform", "teal"], ["SEO results", "teal"]],
      [["Brief · Solution · Live sites", "sun"]],
    ],
  });
}
