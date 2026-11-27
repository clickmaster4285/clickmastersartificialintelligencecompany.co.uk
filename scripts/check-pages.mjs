#!/usr/bin/env node
/*
 * Post-deploy smoke check (url audit D-02).
 *
 *   node scripts/check-pages.mjs https://clickmastersartificialintelligencecompany.co.uk
 *   npm run check:pages -- http://localhost:3000
 *
 * Fetches the homepage, hubs and every service / solution page and fails
 * (exit code 1) if any page:
 *   - does not return 200,
 *   - has fewer than 200 words inside <main> (the "empty shell" the audit saw
 *     at 20:12 on 25 Nov: a 96 KB 200 response with no content),
 *   - has no <h1>,
 *   - takes longer than MAX_SECONDS to respond.
 * Run it after every deploy, and from uptime monitoring if possible.
 */

const BASE = (process.argv[2] || "http://localhost:3000").replace(/\/$/, "");
const MAX_SECONDS = Number(process.env.MAX_SECONDS || 1);
const MIN_WORDS = 200;

const PAGES = [
  "/", "/services", "/solutions", "/about", "/contact",
  "/services/custom-software-development", "/services/web-application-development",
  "/services/mobile-app-development", "/services/mvp-saas-development", "/services/ai-development",
  "/services/rag-development", "/services/llm-development-fine-tuning", "/services/ai-agent-development",
  "/services/generative-ai-development", "/services/ai-automation", "/services/machine-learning", "/services/erp-crm-development", "/services/cloud-devops", "/services/database-design", "/about/who-we-are", "/about/mission-vision",
  "/solutions/erp-software", "/solutions/crm-software", "/solutions/lms-development",
  "/solutions/inventory-management", "/solutions/fleet-management",
];

const words = (html) => {
  const main = /<main[^>]*>([\s\S]*)<\/main>/.exec(html);
  if (!main) return 0;
  const text = main[1]
    .replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&[a-z#0-9]+;/gi, " ");
  return text.split(/\s+/).filter(Boolean).length;
};

let failed = 0;
for (const path of PAGES) {
  const started = performance.now();
  let line;
  try {
    const res = await fetch(BASE + path, { redirect: "manual", headers: { "User-Agent": "clickmasters-smoke-check" } });
    const html = await res.text();
    const secs = (performance.now() - started) / 1000;
    const n = words(html);
    const problems = [];
    if (res.status !== 200) problems.push(`status ${res.status}`);
    if (n < MIN_WORDS) problems.push(`only ${n} words in <main>`);
    if (!/<h1[\s>]/.test(html)) problems.push("no <h1>");
    if (secs > MAX_SECONDS) problems.push(`${secs.toFixed(2)} s`);
    if (problems.length) failed++;
    line = `${problems.length ? "FAIL" : "ok  "} ${path}  ${res.status}  ${secs.toFixed(2)} s  ${n} words  ${(html.length / 1024).toFixed(0)} KB${problems.length ? "  <- " + problems.join(", ") : ""}`;
  } catch (err) {
    failed++;
    line = `FAIL ${path}  ${err.message}`;
  }
  console.log(line);
}
console.log(failed ? `\n${failed} page(s) failed.` : "\nAll pages passed.");
process.exit(failed ? 1 : 0);
