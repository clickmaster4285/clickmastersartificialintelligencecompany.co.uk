/*
 * Editorial provenance for the long-form service and solution pages
 * (audit D-09): the "Last reviewed" line under each page intro and the
 * matching WebPage `dateModified` / `reviewedBy` JSON-LD fields.
 *
 * When you materially revise a page, update its date here (ISO yyyy-mm-dd).
 *
 * TODO (owner): add a named reviewer — a real person at ClickMasters who
 * checks these pages — with a short bio page or LinkedIn profile, e.g.
 *   { name: "Jane Smith", jobTitle: "Head of Engineering", url: "/about#jane-smith" }
 * Until then the pages say they were reviewed by the ClickMasters engineering
 * team and the schema names the Organization, which is accurate. Never add an
 * invented person.
 */

export type Reviewer = { name: string; jobTitle: string; url: string };

export const REVIEWER: Reviewer | null = null;

/** Date the 25 Nov 2026 audit fixes (titles, H1s, keyword coverage) went live. */
const AUDIT_REVISION = "2026-11-26";

export const LAST_REVIEWED: Record<string, string> = {
  "/services/custom-software-development": AUDIT_REVISION,
  "/services/web-application-development": AUDIT_REVISION,
  "/services/mobile-app-development": AUDIT_REVISION,
  "/services/mvp-saas-development": AUDIT_REVISION,
  "/services/ai-development": AUDIT_REVISION,
  "/services/rag-development": AUDIT_REVISION,
  "/services/llm-development-fine-tuning": AUDIT_REVISION,
  "/services/ai-agent-development": AUDIT_REVISION,
  "/services/generative-ai-development": AUDIT_REVISION,
  "/services/ai-automation": AUDIT_REVISION,
  "/services/machine-learning": AUDIT_REVISION,
  "/services/erp-crm-development": AUDIT_REVISION,
  "/services/cloud-devops": AUDIT_REVISION,
  "/services/database-design": AUDIT_REVISION,
  "/about/who-we-are": AUDIT_REVISION,
  "/about/mission-vision": AUDIT_REVISION,
  "/solutions/erp-software": AUDIT_REVISION,
  "/solutions/crm-software": AUDIT_REVISION,
  "/industries/healthcare": "2026-11-27",
  "/industries/finance": "2026-11-27",
  "/industries/ecommerce": "2026-11-27",
  "/industries/edtech": "2026-11-27",
  "/industries/real-estate": "2026-11-27",
  "/industries/logistics": "2026-11-27",
  "/industries/enterprise-saas": "2026-11-27",
  "/industries/manufacturing": "2026-11-27",
  "/solutions/lms-development": AUDIT_REVISION,
  "/solutions/inventory-management": AUDIT_REVISION,
  "/solutions/fleet-management": AUDIT_REVISION,
};

/** "2026-11-26" -> "26 November 2026" (en-GB, timezone-independent). */
export function formatReviewDate(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return `${d} ${months[m - 1]} ${y}`;
}

/**
 * Proof strip shown in the scoping-call block on every service and solution
 * page: working commitments already stated in the pages' FAQs.
 * TODO (owner): confirm each line is true for every engagement, or replace
 * with verifiable proof (client logos, Clutch rating, case-study figures)
 * once you have written permission. Never add invented clients or numbers.
 */
export const PROOF_POINTS: { title: string; text: string }[] = [
  { title: "NDA before you share details", text: "Ask for an NDA and it is signed before you share commercial or technical details." },
  { title: "Ownership agreed up front", text: "Who owns the code and IP is written into the contract before work starts." },
  { title: "Weekly demos", text: "Two-week sprints with a working demo every week, so progress is never a guess." },
];
