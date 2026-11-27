#!/usr/bin/env node
/*
 * Builds the downloadable company profile from app/about/content.ts.
 *
 *   npm run about:pdf
 *
 * Writes public/assets/About/clickmasters-company-profile.pdf, linked from
 * /about. Re-run after editing the About content.
 *
 * Needs Node 22.18+ (imports the .ts content file directly) and a local
 * Chrome or Edge, used headless to print the HTML. Set CHROME_PATH to
 * override the browser location. `--html <file>` writes the HTML only.
 */
import { existsSync, mkdtempSync, readFileSync, rmSync, statSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { pathToFileURL } from "node:url";
import { execFileSync } from "node:child_process";

const ROOT = process.cwd();
const c = await import(pathToFileURL(join(ROOT, "app", "about", "content.ts")).href);
// Mission and vision: the summary sentences shown on /about (full text on /about/mission-vision).
const mv = await import(pathToFileURL(join(ROOT, "app", "about", "mission-vision", "content.ts")).href);
const MISSION = mv.MISSION_SUMMARY;
const VISION = mv.VISION_SUMMARY;
const { HERO, WHO, SERVICE_GROUPS, EXPERTISE, INDUSTRIES, INDUSTRIES_NOTE, APPROACH, WHY, CTA, PROFILE_PDF } = c;

// app/lib/site.ts imports Next-only modules, so read the contact details as text.
const siteTs = readFileSync(join(ROOT, "app", "lib", "site.ts"), "utf8");
const BASE = "https://clickmastersartificialintelligencecompany.co.uk";
const HOST = BASE.replace(/^https?:\/\//, "");
const EMAIL = siteTs.match(/email:\s*"([^"]+)"/)?.[1] ?? "";
const PHONE = siteTs.match(/countryCode:\s*"GB",\s*display:\s*"([^"]+)"/)?.[1] ?? "";
const OUT = join(ROOT, "public", PROFILE_PDF.href);

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const logo = `data:image/png;base64,${readFileSync(join(ROOT, "public", "assets", "logo.png")).toString("base64")}`;
const today = new Date().toLocaleDateString("en-GB", { month: "long", year: "numeric" });

const html = `<!doctype html><html lang="en-GB"><head><meta charset="utf-8"><title>ClickMasters Company Profile</title>
<style>
@page { size: A4; margin: 16mm 15mm 18mm; }
* { box-sizing: border-box; }
body { margin: 0; color: #1a1a1a; font: 10.5pt/1.6 "Segoe UI", system-ui, sans-serif; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
h1, h2, h3 { font-family: Garamond, Georgia, serif; margin: 0; }
a { color: #AF00E8; text-decoration: none; }
.cover { height: 262mm; display: flex; flex-direction: column; justify-content: space-between; padding: 16mm 14mm; border-radius: 6mm; color: #fff;
  background: linear-gradient(140deg, #2a0b3a, #1a0d24 55%, #0d0a12); position: relative; overflow: hidden; page-break-after: always; }
.cover .glow { position: absolute; border-radius: 50%; filter: blur(30px); }
.cover .logo { background: #fff; border-radius: 3mm; padding: 4mm 5mm; display: inline-block; }
.cover .logo img { height: 9mm; display: block; }
.cover .kicker { font-size: 9pt; font-weight: 700; letter-spacing: .2em; text-transform: uppercase; color: #e9c2ff; margin: 14mm 0 4mm; }
.cover h1 { font-size: 40pt; line-height: 1.05; }
.cover h1 em { color: #e9c2ff; font-weight: 400; }
.cover p.lead { font-size: 12.5pt; color: #d9d2e0; max-width: 150mm; margin-top: 7mm; }
.cover .pillars { display: grid; grid-template-columns: repeat(3, 1fr); gap: 4mm; position: relative; }
.cover .pillars div { border: .3mm solid rgba(255,255,255,.18); border-radius: 3mm; padding: 4mm; font-size: 9.5pt; color: #eee; background: rgba(255,255,255,.04); }
.cover .foot { font-size: 9pt; color: #b9adc4; position: relative; }
.eyebrow { font-size: 8pt; font-weight: 700; letter-spacing: .18em; text-transform: uppercase; color: #7a1fa2; margin: 0 0 1.5mm; }
h2 { font-size: 21pt; margin: 0 0 4mm; line-height: 1.15; }
.sec { margin-bottom: 9mm; break-inside: avoid; }
p { margin: 0 0 3mm; color: #3a3a3a; }
.mv { display: grid; grid-template-columns: 1fr 1fr; gap: 5mm; }
.mv div { border-radius: 4mm; padding: 6mm; }
.mv .m { background: #AF00E8; color: #fff; } .mv .m p { color: #fff; }
.mv .v { background: #f1fbf9; border: .3mm solid #bfe9e2; }
.mv h3 { font-family: inherit; font-size: 8pt; letter-spacing: .18em; text-transform: uppercase; margin-bottom: 2mm; opacity: .85; }
.mv p { font-family: Garamond, Georgia, serif; font-size: 13pt; line-height: 1.35; margin: 0; }
.grid2 { display: grid; grid-template-columns: 1fr 1fr; gap: 3mm 6mm; }
.card { border: .3mm solid #eee; border-radius: 3mm; padding: 3.5mm 4mm; break-inside: avoid; }
.card b { display: block; font-size: 10pt; } .card span { font-size: 9pt; color: #555; }
.card a { font-size: 7.5pt; color: #7a1fa2; }
.group { font-family: Garamond, Georgia, serif; font-size: 13pt; font-weight: 700; margin: 5mm 0 2.5mm; border-bottom: .3mm solid #eee; padding-bottom: 1.5mm; }
.note { font-size: 8.5pt; font-style: italic; color: #777; }
.steps { display: grid; grid-template-columns: repeat(3, 1fr); gap: 4mm; }
.step { background: #faf9f7; border-radius: 3mm; padding: 4mm; break-inside: avoid; }
.step b { color: #AF00E8; font-family: Garamond, serif; font-size: 16pt; } .step h3 { font-family: inherit; font-size: 10.5pt; margin: 1mm 0; }
.step p { font-size: 9pt; margin: 0; color: #555; }
.page { page-break-before: always; }
.contact { border-radius: 5mm; padding: 9mm; color: #fff; background: linear-gradient(135deg, #2a0b3a, #0d0a12); break-inside: avoid; margin-top: 6mm; }
.contact h2 { color: #fff; } .contact h2 em { color: #e9c2ff; font-weight: 400; }
.contact p { color: #d9d2e0; } .contact a { color: #e9c2ff; }
.contact .rows { margin-top: 5mm; display: grid; gap: 1.5mm; font-size: 10.5pt; }
</style></head><body>

<div class="cover">
  <div class="glow" style="width:90mm;height:90mm;right:-25mm;top:-25mm;background:rgba(175,0,232,.45)"></div>
  <div class="glow" style="width:70mm;height:70mm;left:-20mm;bottom:20mm;background:rgba(94,234,212,.2)"></div>
  <div style="position:relative">
    <span class="logo"><img src="${logo}" alt="ClickMasters"></span>
    <p class="kicker">Company profile</p>
    <h1>${esc(HERO.title)} <em>${esc(HERO.titleAccent)}</em></h1>
    <p class="lead">${esc(HERO.lead)}</p>
  </div>
  <div class="pillars">${WHO.points.map((p) => `<div>${esc(p)}</div>`).join("")}</div>
  <p class="foot">${esc(HOST)} · ${today}</p>
</div>

<div class="sec">
  <p class="eyebrow">01 · Who we are</p>
  <h2>An AI and software company built around real business problems</h2>
  ${WHO.paragraphs.map((p) => `<p>${esc(p)}</p>`).join("")}
</div>

<div class="sec">
  <p class="eyebrow">02 · Mission &amp; vision</p>
  <h2>Why we exist, and where we are heading</h2>
  <div class="mv">
    <div class="m"><h3>Our mission</h3><p>${esc(MISSION)}</p></div>
    <div class="v"><h3>Our vision</h3><p>${esc(VISION)}</p></div>
  </div>
</div>

<div class="page sec">
  <p class="eyebrow">03 · What we do</p>
  <h2>AI solutions and the software that makes them work</h2>
  ${SERVICE_GROUPS.map((g) => `<div class="group">${esc(g.title)}</div>
  <div class="grid2">${g.items.map((s) => `<div class="card"><b>${esc(s.title)}</b><span>${esc(s.text)}</span><br><a href="${esc(BASE + s.href)}">${esc(HOST + s.href)}</a></div>`).join("")}</div>`).join("")}
</div>

<div class="page sec">
  <p class="eyebrow">04 · Our expertise</p>
  <h2>Where artificial intelligence meets software engineering</h2>
  <p>${esc(EXPERTISE.intro)}</p>
  <div class="grid2">${EXPERTISE.items.map((e) => `<div class="card"><b>${esc(e.title)}</b><span>${esc(e.text)}</span></div>`).join("")}</div>
</div>

<div class="sec">
  <p class="eyebrow">05 · Industries we serve</p>
  <h2>Technology shaped around how each sector works</h2>
  <p class="note">${esc(INDUSTRIES_NOTE)}</p>
  <div class="grid2">${INDUSTRIES.map((i) => `<div class="card"><b>${esc(i.title)}</b><span>${esc(i.text)}</span></div>`).join("")}</div>
</div>

<div class="page sec">
  <p class="eyebrow">06 · Our approach</p>
  <h2>Six steps from first conversation to lasting value</h2>
  <div class="steps">${APPROACH.map((s, i) => `<div class="step"><b>${String(i + 1).padStart(2, "0")}</b><h3>${esc(s.title)}</h3><p>${esc(s.text)}</p></div>`).join("")}</div>
</div>

<div class="sec">
  <p class="eyebrow">07 · Why choose ClickMasters</p>
  <h2>What working with us is like</h2>
  <div class="grid2">${WHY.map((w) => `<div class="card"><b>${esc(w.title)}</b><span>${esc(w.text)}</span></div>`).join("")}</div>
</div>

<div class="contact">
  <h2>${esc(CTA.title)} <em>${esc(CTA.titleAccent)}</em></h2>
  <p>${esc(CTA.text)}</p>
  <div class="rows">
    <span>Web: <a href="${esc(BASE)}/contact">${esc(HOST)}/contact</a></span>
    ${EMAIL ? `<span>Email: <a href="mailto:${esc(EMAIL)}">${esc(EMAIL)}</a></span>` : ""}
    ${PHONE ? `<span>UK phone: ${esc(PHONE)}</span>` : ""}
  </div>
</div>
</body></html>`;

const htmlOnly = process.argv.indexOf("--html");
if (htmlOnly > -1) {
  writeFileSync(process.argv[htmlOnly + 1], html);
  process.exit(0);
}

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

const dir = mkdtempSync(join(tmpdir(), "cm-about-"));
const htmlPath = join(dir, "profile.html");
writeFileSync(htmlPath, html);
try {
  execFileSync(browser, [
    "--headless=new", "--disable-gpu", "--no-pdf-header-footer",
    `--user-data-dir=${join(dir, "profile")}`, `--print-to-pdf=${OUT}`, pathToFileURL(htmlPath).href,
  ], { stdio: "ignore", timeout: 120000 });
} finally {
  rmSync(dir, { recursive: true, force: true });
}
console.log(`company profile PDF: ${(statSync(OUT).size / 1024).toFixed(0)} KB -> ${OUT}`);
