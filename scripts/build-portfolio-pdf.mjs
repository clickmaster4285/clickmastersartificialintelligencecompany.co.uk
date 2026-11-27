#!/usr/bin/env node
/*
 * Builds the downloadable portfolio PDF from app/portfolio/content.ts.
 *
 *   npm run portfolio:pdf
 *
 * Writes public/assets/portfolio/clickmasters-portfolio.pdf, linked from
 * /portfolio. Re-run after editing the portfolio content.
 *
 * Needs Node 22.18+ (imports the .ts content file directly) and a local
 * Chrome or Edge, used headless to print the HTML. Set CHROME_PATH to
 * override the browser location.
 */
import { existsSync, mkdtempSync, readFileSync, rmSync, statSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { pathToFileURL } from "node:url";
import { execFileSync } from "node:child_process";

const ROOT = process.cwd();
const content = await import(pathToFileURL(join(ROOT, "app", "portfolio", "content.ts")).href);
const { PROJECTS, RESULTS, PROCESS, CAPABILITIES, PDF } = content;

// app/lib/site.ts imports Next-only modules, so read the contact details as text.
const siteTs = readFileSync(join(ROOT, "app", "lib", "site.ts"), "utf8");
const BASE = "https://clickmastersartificialintelligencecompany.co.uk";
const EMAIL = siteTs.match(/email:\s*"([^"]+)"/)?.[1] ?? "";
const PHONE = siteTs.match(/countryCode:\s*"GB",\s*display:\s*"([^"]+)"/)?.[1] ?? "";
const OUT = join(ROOT, "public", PDF.href);

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
// Chrome stores images losslessly in PDFs, so embed small JPEG copies
// (via sharp, installed with Next) to keep the download light.
const { default: sharp } = await import("sharp");
const imgCache = new Map();
for (const p of PROJECTS) {
  const buf = await sharp(join(ROOT, "public", p.image.src))
    .resize({ width: p.featured ? 1400 : 900 })
    .flatten({ background: "#ffffff" })
    .jpeg({ quality: 78, mozjpeg: true })
    .toBuffer();
  imgCache.set(p.image.src, `data:image/jpeg;base64,${buf.toString("base64")}`);
}
const img = (src) => imgCache.get(src) ?? pathToFileURL(join(ROOT, "public", src)).href;
const today = new Date().toLocaleDateString("en-GB", { month: "long", year: "numeric" });

const project = (p) => `
<section class="project">
  <div class="shot"><img src="${img(p.image.src)}" alt="${esc(p.image.alt)}"></div>
  <div class="body">
    <p class="kicker">${esc(p.category)} · ${esc(p.type)} · ${esc(p.location)}</p>
    <h3>${esc(p.client)}</h3>
    <p class="summary">${esc(p.summary)}</p>
    <div class="cols">
      <div><h4>The challenge</h4><p>${esc(p.brief)}</p></div>
      <div><h4>The solution</h4><p>${esc(p.solution)}</p></div>
    </div>
    <p class="chips">${p.deliverables.map((d) => `<span>${esc(d)}</span>`).join("")}</p>
    <p class="site">${p.live ? `Live site: <a href="${esc(p.url)}">${esc(p.domain)}</a>` : `${esc(p.domain)} (currently offline)`}</p>
  </div>
</section>`;

const html = `<!doctype html><html lang="en-GB"><head><meta charset="utf-8"><title>ClickMasters Portfolio</title>
<style>
@page { size: A4; margin: 16mm 15mm 18mm; }
* { box-sizing: border-box; }
body { margin: 0; color: #1a1a1a; font: 10.5pt/1.55 "Segoe UI", system-ui, sans-serif; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
h1, h2, h3 { font-family: Garamond, Georgia, serif; margin: 0; }
a { color: #AF00E8; }
.cover { height: 262mm; display: flex; flex-direction: column; justify-content: space-between; padding: 14mm; border-radius: 6mm; color: #fff;
  background: linear-gradient(135deg, #2a0b3a, #1a0d24 55%, #0d0a12); page-break-after: always; }
.cover .brand { font-weight: 700; letter-spacing: .18em; text-transform: uppercase; font-size: 9pt; color: #e9c2ff; }
.cover h1 { font-size: 40pt; line-height: 1.05; margin-top: 8mm; }
.cover h1 em { color: #e9c2ff; font-weight: 400; }
.cover p { font-size: 12pt; color: #d9d2e0; max-width: 140mm; }
.cover img { width: 100%; border-radius: 4mm; background: #fff; padding: 4mm; }
.cover .foot { font-size: 9pt; color: #b9adc4; }
h2 { font-size: 22pt; margin: 0 0 3mm; }
.eyebrow { font-size: 8pt; font-weight: 700; letter-spacing: .16em; text-transform: uppercase; color: #7a1fa2; margin: 0 0 1.5mm; }
.intro { color: #555; margin: 0 0 6mm; }
.project { display: grid; grid-template-columns: 70mm 1fr; gap: 7mm; padding: 6mm 0; border-top: 0.3mm solid #eee; break-inside: avoid; }
.shot { background: linear-gradient(135deg, #f6eefb, #eefaf7); border-radius: 3mm; padding: 3mm; align-self: start; }
.shot img { width: 100%; display: block; }
.kicker { margin: 0; font-size: 7.5pt; font-weight: 700; letter-spacing: .1em; text-transform: uppercase; color: #7a1fa2; }
h3 { font-size: 15pt; margin: 1mm 0 1.5mm; }
.summary { margin: 0 0 3mm; color: #333; }
.cols { display: grid; grid-template-columns: 1fr 1fr; gap: 4mm; }
.cols h4 { margin: 0 0 1mm; font-size: 7.5pt; letter-spacing: .12em; text-transform: uppercase; color: #666; }
.cols p { margin: 0; font-size: 9pt; color: #444; }
.chips { margin: 3mm 0 0; } .chips span { display: inline-block; margin: 0 1.5mm 1.5mm 0; padding: .6mm 2.5mm; border-radius: 9mm; background: #f7effa; color: #7a1fa2; font-size: 8pt; font-weight: 600; }
.site { margin: 1mm 0 0; font-size: 8.5pt; color: #777; }
.page { page-break-before: always; }
.results { display: grid; grid-template-columns: 1fr 1fr; gap: 4mm; }
.card { border: 0.3mm solid #eee; border-radius: 3mm; padding: 4mm; break-inside: avoid; }
.card.wide { grid-column: span 2; }
.card h3 { font-family: inherit; font-size: 10.5pt; } .card .period { font-size: 8pt; color: #777; margin: 0 0 2mm; }
.metrics { display: grid; grid-template-columns: repeat(2, 1fr); gap: 2mm; } .card.wide .metrics { grid-template-columns: repeat(4, 1fr); }
.m { border-radius: 2mm; padding: 2.5mm 3mm; color: #fff; } .m b { display: block; font-size: 14pt; } .m span { font-size: 7.5pt; opacity: .9; }
.clicks { background: #1a73e8; } .impressions { background: #5e35b1; } .ctr { background: #00897b; } .position { background: #e8710a; } .growth { background: #188038; }
.steps { display: grid; grid-template-columns: repeat(3, 1fr); gap: 4mm; margin-bottom: 8mm; }
.step { background: #faf9f7; border-radius: 3mm; padding: 4mm; } .step b { color: #AF00E8; font-family: Garamond, serif; font-size: 16pt; }
.step h3 { font-family: inherit; font-size: 10.5pt; margin: 1mm 0; } .step p { margin: 0; font-size: 9pt; color: #555; }
.caps { display: grid; grid-template-columns: repeat(2, 1fr); gap: 3mm 6mm; margin-bottom: 8mm; }
.caps h3 { font-family: inherit; font-size: 10.5pt; } .caps p { margin: .5mm 0 0; font-size: 9pt; color: #555; }
.contact { border-radius: 5mm; padding: 9mm; color: #fff; background: linear-gradient(135deg, #2a0b3a, #0d0a12); break-inside: avoid; }
.contact h2 { color: #fff; } .contact p { color: #d9d2e0; margin: 1.5mm 0; } .contact a { color: #e9c2ff; }
</style></head><body>

<div class="cover">
  <div>
    <p class="brand">ClickMasters · Portfolio</p>
    <h1>Digital products built around <em>real business needs</em></h1>
    <p>Websites, online stores and web platforms delivered by the ClickMasters team, with the brief, what we built and Search Console results from client campaigns.</p>
  </div>
  <img src="${img(PROJECTS.find((p) => p.featured).image.src)}" alt="">
  <p class="foot">${esc(BASE.replace(/^https?:\/\//, ""))}/portfolio · ${today}</p>
</div>

<p class="eyebrow">Selected work</p>
<h2>${PROJECTS.length} projects</h2>
<p class="intro">Each entry describes the delivered work as built. Where a client's site is still live, the address is included.</p>
${PROJECTS.map(project).join("")}

<div class="page">
  <p class="eyebrow">Search results</p>
  <h2>Google Search Console results</h2>
  <p class="intro">${esc(RESULTS.intro)}</p>
  <div class="results">
  ${RESULTS.items.map((r) => `<div class="card${r.wide ? " wide" : ""}"><h3>${esc(r.title)}</h3><p class="period">${esc(r.period)}</p>
    <div class="metrics">${r.metrics.map((m) => `<div class="m ${m.tone}"><b>${esc(m.value)}</b><span>${esc(m.label)}</span></div>`).join("")}</div>
    ${r.note ? `<p class="period" style="margin-top:2mm">${esc(r.note)}</p>` : ""}</div>`).join("")}
  </div>
</div>

<div class="page">
  <p class="eyebrow">Our development approach</p>
  <h2>How we deliver</h2>
  <div class="steps">${PROCESS.map((s, i) => `<div class="step"><b>${String(i + 1).padStart(2, "0")}</b><h3>${esc(s.title)}</h3><p>${esc(s.text)}</p></div>`).join("")}</div>
  <p class="eyebrow">Capabilities</p>
  <h2>Beyond websites</h2>
  <div class="caps">${CAPABILITIES.map((c) => `<div><h3><a href="${esc(BASE + c.href)}">${esc(c.title)}</a></h3><p>${esc(c.text)}</p></div>`).join("")}</div>
  <div class="contact">
    <h2>Have a project in mind?</h2>
    <p>Tell us what you need and we will suggest the right approach, timeline and cost, with no obligation.</p>
    <p><a href="${esc(BASE)}/contact">${esc(BASE.replace(/^https?:\/\//, ""))}/contact</a> · <a href="mailto:${esc(EMAIL)}">${esc(EMAIL)}</a>${PHONE ? ` · UK ${esc(PHONE)}` : ""}</p>
  </div>
</div>
</body></html>`;

const CANDIDATES = [
  process.env.CHROME_PATH,
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
].filter(Boolean);
const browser = CANDIDATES.find((p) => existsSync(p));
if (!browser) {
  console.error("No Chrome or Edge found. Set CHROME_PATH.");
  process.exit(1);
}

// `--html <file>` writes the HTML only (for previewing the layout).
const htmlOnly = process.argv.indexOf("--html");
if (htmlOnly > -1) {
  writeFileSync(process.argv[htmlOnly + 1], html);
  process.exit(0);
}

const dir = mkdtempSync(join(tmpdir(), "cm-portfolio-"));
const htmlPath = join(dir, "portfolio.html");
writeFileSync(htmlPath, html);
try {
  execFileSync(browser, [
    "--headless=new", "--disable-gpu", "--no-pdf-header-footer", "--allow-file-access-from-files",
    `--user-data-dir=${join(dir, "profile")}`, `--print-to-pdf=${OUT}`, pathToFileURL(htmlPath).href,
  ], { stdio: "ignore", timeout: 120000 });
} finally {
  rmSync(dir, { recursive: true, force: true });
}
console.log(`portfolio PDF: ${(statSync(OUT).size / 1024).toFixed(0)} KB -> ${OUT}`);
