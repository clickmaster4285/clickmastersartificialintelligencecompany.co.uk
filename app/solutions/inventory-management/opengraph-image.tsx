import { OG_SIZE, serviceOgImage } from "../../lib/service-og";

// Social sharing image for /solutions/inventory-management (built at build time).
export const alt = "Custom Inventory Management Software UK – ClickMasters";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return serviceOgImage({
    title: "Inventory Management Solutions",
    accent: "Stock figures you can trust",
    rows: [
      [["One live stock record", "purple"]],
      [["Receive", "plain"], ["Pick", "plain"], ["Despatch", "plain"]],
      [["Barcodes", "teal"], ["Multi-location", "teal"]],
      [["E-commerce · Accounting", "sun"]],
    ],
  });
}
