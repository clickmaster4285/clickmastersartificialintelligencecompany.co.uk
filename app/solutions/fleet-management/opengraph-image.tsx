import { OG_SIZE, serviceOgImage } from "../../lib/service-og";

// Social sharing image for /solutions/fleet-management (built at build time).
export const alt = "Custom Fleet Management Software UK – ClickMasters";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return serviceOgImage({
    title: "Fleet Management Solutions",
    accent: "Your whole fleet on one screen",
    rows: [
      [["Tracking · Dispatch · Routing", "purple"]],
      [["Vehicles", "plain"], ["Drivers", "plain"], ["Jobs", "plain"]],
      [["Driver app", "teal"], ["Maintenance", "teal"]],
      [["Your telematics provider", "sun"]],
    ],
  });
}
