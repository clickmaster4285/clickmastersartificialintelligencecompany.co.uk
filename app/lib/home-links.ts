import { livePaths } from "../config/navigation";

/**
 * Internal link map for the homepage (SEO brief, section 2).
 *
 * A target is rendered as a real <a> link only when its page is "live":
 * a core route, a nav item with status "live" in app/config/navigation.ts, or
 * a path listed in EXTRA_LIVE_PATHS below (for pages not in the navigation,
 * e.g. city landing pages). Everything else renders as plain text, so the
 * homepage never links to a missing or noindex placeholder page.
 */
const EXTRA_LIVE_PATHS: string[] = [
  // e.g. "/locations/london",
];

const LIVE_PATHS: ReadonlySet<string> = new Set([...livePaths(), ...EXTRA_LIVE_PATHS]);

export function isLive(href: string): boolean {
  return LIVE_PATHS.has(href.split("#")[0] || "/");
}

/** Service landing pages (NEW). */
export const SERVICE_LINKS = {
  custom: "/services/custom-software-development",
  aiAutomation: "/services/ai-automation",
  chatbots: "/services/ai-chatbots",
  web: "/services/web-application-development",
  mobile: "/services/mobile-app-development",
  erpCrm: "/services/erp-crm-development",
  cloud: "/services/cloud-devops",
  database: "/services/database-design",
} as const;

/** Industry landing pages (NEW). */
export const INDUSTRY_LINKS = {
  healthcare: "/industries/healthcare",
  finance: "/industries/finance",
  ecommerce: "/industries/ecommerce",
  edtech: "/industries/edtech",
  realEstate: "/industries/real-estate",
  logistics: "/industries/logistics",
  enterpriseSaas: "/industries/enterprise-saas",
  manufacturing: "/industries/manufacturing",
} as const;

/** Location landing pages (NEW). */
export const LOCATION_LINKS = {
  london: "/locations/london",
  manchester: "/locations/manchester",
  birmingham: "/locations/birmingham",
  leeds: "/locations/leeds",
  glasgow: "/locations/glasgow",
  bristol: "/locations/bristol",
} as const;

/** Solution landing pages (NEW). */
export const SOLUTION_LINKS = {
  erp: "/solutions/erp-software",
  crm: "/solutions/crm-software",
  saas: "/solutions/saas-platform",
  lms: "/solutions/lms-development",
  inventory: "/solutions/inventory-management",
} as const;
