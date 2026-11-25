import { OG_SIZE, serviceOgImage } from "../../lib/service-og";

// Social sharing image for /solutions/erp-software (built at build time).
export const alt = "Custom ERP Software Development UK – ClickMasters";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return serviceOgImage({
    title: "Custom ERP Software",
    accent: "Finance, stock, purchasing and operations",
    rows: [
      [["One shared ERP database", "purple"]],
      [["Finance", "plain"], ["Inventory", "plain"], ["HR", "plain"]],
      [["Purchasing", "teal"], ["Sales", "teal"], ["Warehouse", "teal"]],
      [["CRM · E-commerce · Payments", "sun"]],
    ],
  });
}
