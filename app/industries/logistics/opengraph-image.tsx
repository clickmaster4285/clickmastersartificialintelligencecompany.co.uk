import { OG_SIZE, serviceOgImage } from "../../lib/service-og";

// Social sharing image for /industries/logistics (built at build time).
export const alt = "AI Logistics Solutions & Supply Chain Software UK – ClickMasters";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return serviceOgImage({
    title: "AI for Logistics",
    accent: "Plan, see and move with less manual work",
    rows: [
      [["Orders", "plain"], ["Bookings", "plain"], ["Freight docs", "plain"]],
      [["Route planning", "purple"], ["Warehouse", "purple"], ["Fleet data", "purple"]],
      [["Exceptions to people", "sun"]],
      [["Tracking · Notifications · Reporting", "teal"]],
    ],
  });
}
