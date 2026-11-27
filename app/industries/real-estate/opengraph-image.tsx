import { OG_SIZE, serviceOgImage } from "../../lib/service-og";

// Social sharing image for /industries/real-estate (built at build time).
export const alt = "AI Real Estate Solutions & Property Software UK – ClickMasters";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return serviceOgImage({
    title: "AI for Real Estate",
    accent: "Listings, leads and lettings, connected",
    rows: [
      [["Search", "plain"], ["Enquiries", "plain"], ["Viewings", "plain"], ["Lettings", "plain"]],
      [["AI listings", "purple"], ["Lead routing", "purple"], ["Maintenance", "purple"]],
      [["Agent review", "sun"]],
      [["CRM · Property management · Accounts", "teal"]],
    ],
  });
}
