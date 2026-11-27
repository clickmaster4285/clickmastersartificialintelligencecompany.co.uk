import { OG_SIZE, serviceOgImage } from "../../lib/service-og";

// Social sharing image for /industries/ecommerce (built at build time).
export const alt = "AI Solutions for E-commerce & Software UK – ClickMasters";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return serviceOgImage({
    title: "AI for E-commerce",
    accent: "Search, support and stock, connected",
    rows: [
      [["Storefront", "plain"], ["Marketplaces", "plain"], ["Support", "plain"]],
      [["AI search", "purple"], ["Recommendations", "purple"], ["Forecasting", "purple"]],
      [["Integration layer", "sun"]],
      [["Inventory · Orders · CRM · ERP", "teal"]],
    ],
  });
}
