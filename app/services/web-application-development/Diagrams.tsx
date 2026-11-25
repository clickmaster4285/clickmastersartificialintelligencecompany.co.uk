/*
 * Diagrams for /services/web-application-development, redrawn from the Web
 * Application SEO pack in the site palette. The hero illustration is inline
 * SVG; the others are responsive HTML so they reflow on mobile and their text
 * stays crawlable. No stock photography.
 */
import { RiArrowRightLine } from "react-icons/ri";
import { CAPS, Connector, Flow, Node, NodeList, type Tone } from "../../Components/DiagramParts";
import { INK, LINE, MUTED, PURPLE, PURPLE_SOFT, TEAL, TEAL_SOFT, caps, label } from "../ServiceDiagrams";

const SUN = "#E3A600";
const SUN_SOFT = "#FDF4D7";

// ───────────────────────── Hero: dashboard illustration ─────────────────────────

export const DASHBOARD_ALT =
  "Illustration of a business web application in a browser: navigation sidebar, key metric cards, a bar chart and an orders table, with role-based access and API sync indicators";

export function DashboardIllustration({ className = "" }: { className?: string }) {
  const bars = [34, 52, 46, 68, 60, 76, 44];
  const menu = ["ORDERS", "CUSTOMERS", "SCHEDULING", "REPORTS", "SETTINGS"];
  const metrics = [
    ["OPEN ORDERS", "Live count"],
    ["DUE TODAY", "Bookings"],
    ["INVOICES", "Synced"],
  ];
  const status = [[TEAL_SOFT, TEAL], [SUN_SOFT, SUN], [TEAL_SOFT, TEAL]];
  return (
    <svg viewBox="0 0 560 390" role="img" aria-label={DASHBOARD_ALT} className={className}>
      <title>{DASHBOARD_ALT}</title>
      {/* Browser frame */}
      <rect x="6" y="6" width="548" height="378" rx="18" fill="#fff" stroke={LINE} strokeWidth="1.6" />
      <path d="M6 24 a18 18 0 0 1 18 -18 H536 a18 18 0 0 1 18 18 V44 H6 Z" fill="#F6F1FA" />
      {[26, 44, 62].map((x) => <circle key={x} cx={x} cy="25" r="5" fill="#DCD0E6" />)}
      <rect x="86" y="13" width="300" height="24" rx="12" fill="#fff" stroke={LINE} />
      <text x="102" y="29" style={{ ...caps, fontSize: 11, fill: MUTED, letterSpacing: "0.02em" }}>app.yourcompany.co.uk/dashboard</text>
      <rect x="430" y="12" width="110" height="26" rx="13" fill={PURPLE_SOFT} stroke={PURPLE} strokeWidth="1.5" />
      <circle cx="447" cy="25" r="4" fill={TEAL} />
      <text x="457" y="30" style={{ ...label, fontSize: 13, fill: "#7a00a8" }}>API synced</text>

      {/* Sidebar */}
      <rect x="6" y="44" width="122" height="340" fill={PURPLE_SOFT} />
      <rect x="6" y="44" width="122" height="340" fill="none" stroke={PURPLE} strokeWidth="1.5" />
      <text x="22" y="76" style={{ ...label, fontSize: 15, fill: "#7a00a8" }}>Dashboard</text>
      {menu.map((m, i) => <text key={m} x="22" y={104 + i * 24} style={{ ...caps, fontSize: 10.5 }}>{m}</text>)}
      <rect x="18" y="340" width="98" height="28" rx="9" fill={TEAL_SOFT} stroke={TEAL} strokeWidth="1.4" />
      <text x="28" y="358" style={{ ...caps, fontSize: 10, fill: INK }}>ROLE: ADMIN</text>

      {/* Metric cards */}
      {metrics.map(([k, v], i) => (
        <g key={k}>
          <rect x={146 + i * 134} y="60" width="122" height="62" rx="12" fill="#fff" stroke={LINE} strokeWidth="1.4" />
          <text x={158 + i * 134} y="82" style={{ ...caps, fontSize: 10 }}>{k}</text>
          <text x={158 + i * 134} y="106" style={{ ...label, fontSize: 15 }}>{v}</text>
        </g>
      ))}

      {/* Chart */}
      <rect x="146" y="136" width="390" height="118" rx="12" fill="#fff" stroke={LINE} strokeWidth="1.4" />
      <text x="160" y="158" style={{ ...caps, fontSize: 10 }}>WEEKLY THROUGHPUT · EXAMPLE DATA</text>
      {bars.map((h, i) => (
        <rect key={i} x={172 + i * 50} y={240 - h} width="26" height={h} rx="5" fill={i === 5 ? TEAL : i === 6 ? "#DCD0E6" : PURPLE} />
      ))}

      {/* Table */}
      <rect x="146" y="268" width="390" height="104" rx="12" fill="#fff" stroke={LINE} strokeWidth="1.4" />
      {["ORDER", "CUSTOMER", "STATUS"].map((h, i) => (
        <text key={h} x={[160, 262, 410][i]} y="290" style={{ ...caps, fontSize: 10 }}>{h}</text>
      ))}
      <line x1="160" x2="522" y1="298" y2="298" stroke={MUTED} strokeOpacity="0.5" />
      {status.map(([fill, stroke], i) => (
        <g key={i}>
          <rect x="160" y={308 + i * 20} width="64" height="9" rx="4.5" fill="#E6DDEE" />
          <rect x="262" y={308 + i * 20} width={[100, 82, 112][i]} height="9" rx="4.5" fill="#E6DDEE" />
          <rect x="410" y={305 + i * 20} width="66" height="15" rx="7.5" fill={fill} stroke={stroke} strokeWidth="1.3" />
        </g>
      ))}
    </svg>
  );
}

// ───────────────────────── Website → web app → SaaS spectrum ─────────────────────────

export const SPECTRUM_ALT =
  "Spectrum from informational website to interactive web application to SaaS platform, showing increasing interactivity, user accounts, business logic and multi-customer architecture";

export function SpectrumDiagram({ items }: { items: readonly { title: string; tone: string; points: readonly string[] }[] }) {
  return (
    <div>
      <div className="flex items-center gap-3">
        <span className={CAPS}>More interaction, data and business logic</span>
        <span aria-hidden="true" className="h-0.5 flex-1 bg-[repeating-linear-gradient(90deg,#AF00E8_0_10px,transparent_10px_16px)]" />
        <RiArrowRightLine aria-hidden="true" className="h-4 w-4 text-[#AF00E8]" />
      </div>
      <ol className="mt-5 grid gap-4 md:grid-cols-3">
        {items.map((it) => (
          <li key={it.title}>
            <Node tone={it.tone as Tone} title={it.title} className="h-full !py-5">
              <ul className="mt-3 space-y-1.5">
                {it.points.map((p) => <li key={p} className={CAPS}>{p}</li>)}
              </ul>
            </Node>
          </li>
        ))}
      </ol>
    </div>
  );
}

// ───────────────────────── Architecture layers ─────────────────────────

export const ARCH_ALT =
  "Web application architecture diagram: browser front end sends HTTPS requests through a CDN to an API layer handling authentication, authorisation and business logic, which reads and writes a database, a cache and file storage and connects to third-party services";

export function ArchitectureDiagram() {
  const fe = ["Components", "State & data fetching", "Form validation (UX)", "Accessibility", "Responsive layout"];
  const be = ["Authentication (who)", "Authorisation (what)", "Validation & business rules", "Background jobs", "Logging & audit"];
  return (
    <div className="grid items-stretch gap-3 lg:grid-cols-[1fr_auto_1fr_auto_0.85fr]">
      <div className="flex flex-col gap-3">
        <p className={CAPS}>Front end (browser)</p>
        <Node tone="purple" title="React / Next.js UI" className="flex-1">
          <NodeList items={fe} />
        </Node>
        <Node tone="sun" title="CDN: static assets, edge cache" />
      </div>
      <div className="flex flex-col items-center justify-center gap-1 py-1 lg:pt-8">
        <span className={`${CAPS} text-[10px]`}>HTTPS</span>
        <Connector />
      </div>
      <div className="flex flex-col gap-3">
        <p className={CAPS}>Back end (server)</p>
        <Node tone="plain" title="API & application services" className="flex-1">
          <NodeList items={be} />
        </Node>
        <Node tone="dashed" title="Third-party APIs: payments, CRM, ERP" />
      </div>
      <div className="flex items-center justify-center py-1 lg:pt-8">
        <Connector />
      </div>
      <div className="flex flex-col gap-3">
        <p className={CAPS}>Data</p>
        <Node tone="teal" title="Database (PostgreSQL…)" className="lg:flex-1 lg:flex lg:items-center" />
        <Node tone="teal" title="Cache (Redis)" className="lg:flex-1 lg:flex lg:items-center" />
        <Node tone="teal" title="File storage" className="lg:flex-1 lg:flex lg:items-center" />
      </div>
    </div>
  );
}

// ───────────────────────── Security defence in depth ─────────────────────────

export const SECURITY_ALT =
  "Defence-in-depth diagram for a web application request: HTTPS encryption, authentication, authorisation, input validation and secure data access, with logging and monitoring across every step";

export function SecurityFlow({ steps }: { steps: readonly { title: string; sub: string; tone: string }[] }) {
  return (
    <div>
      <Flow steps={steps.map((s) => ({ ...s, tone: s.tone as Tone }))} minHeight="lg:min-h-[78px]" />
      <div className="mt-4 rounded-xl bg-[#FDF4D7] px-5 py-3.5 text-[15px] font-semibold text-[#1a1a1a] ring-[1.5px] ring-[#E3A600]">
        Logging, monitoring and alerting across every step
      </div>
    </div>
  );
}

// ───────────────────────── Caching layers ─────────────────────────

export const CACHE_ALT =
  "Caching layers diagram: requests are answered from the browser cache, then the CDN edge, then an application cache, and only reach the database when needed, with faster responses closer to the user";

export function CacheLayers({ layers }: { layers: readonly { title: string; sub: string; tone: string }[] }) {
  return (
    <div>
      <div className="flex items-center gap-3">
        <span className={CAPS}>Closer to the user = faster response</span>
        <span aria-hidden="true" className="h-1.5 flex-1 rounded-full bg-gradient-to-r from-[#AF00E8] via-[#0F9F94] to-[#E3A600] opacity-60" />
      </div>
      <div className="mt-5">
        <Flow steps={layers.map((l) => ({ ...l, tone: l.tone as Tone }))} />
      </div>
      <p className={`mt-4 ${CAPS}`}>Cache miss → next layer · invalidate when data changes</p>
    </div>
  );
}

