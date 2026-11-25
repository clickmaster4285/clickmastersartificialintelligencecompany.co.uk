/*
 * Inline SVG diagrams for /services/custom-software-development, redrawn from
 * the Custom Software SEO pack in the site palette (purple, mint, sun).
 * Inline SVG keeps labels crawlable and adds no image requests or layout shift.
 */
import { FLOW_CSS, INK, LINE, MUTED, PURPLE, PURPLE_SOFT, TEAL, TEAL_SOFT, caps, label } from "../ServiceDiagrams";

const SUN = "#E3A600";
const SUN_SOFT = "#FDF4D7";
const GREY_SOFT = "#F4F1F6";
const GREY_LINE = "#8E8496";

type Tone = "plain" | "purple" | "teal" | "sun" | "legacy";
const TONES: Record<Tone, { fill: string; stroke: string; dash?: string; text: string }> = {
  plain: { fill: "#fff", stroke: LINE, text: INK },
  purple: { fill: PURPLE_SOFT, stroke: PURPLE, text: "#7a00a8" },
  teal: { fill: TEAL_SOFT, stroke: TEAL, text: INK },
  sun: { fill: SUN_SOFT, stroke: SUN, text: INK },
  legacy: { fill: GREY_SOFT, stroke: GREY_LINE, dash: "6 5", text: INK },
};

function Box({
  x, y, w, h, text, tone = "plain", size = 15, sub,
}: { x: number; y: number; w: number; h: number; text: string | string[]; tone?: Tone; size?: number; sub?: string[] }) {
  const t = TONES[tone];
  const lines = Array.isArray(text) ? text : [text];
  const top = sub ? y + 28 : y + h / 2 - ((lines.length - 1) * (size + 4)) / 2 + size / 3;
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx="12" fill={t.fill} stroke={t.stroke} strokeWidth="1.6" strokeDasharray={t.dash} />
      {lines.map((ln, i) => (
        <text key={ln} x={x + 16} y={top + i * (size + 4)} style={{ ...label, fontSize: size, fill: t.text }}>{ln}</text>
      ))}
      {sub?.map((ln, i) => (
        <text key={ln} x={x + 16} y={y + 54 + i * 22} style={caps}>{ln}</text>
      ))}
    </g>
  );
}

// ───────────────────────── Architecture (hero) ─────────────────────────

export const ARCH_ALT =
  "Diagram of a custom software system: web app, mobile app and staff portal connect through one API layer to business modules and a central database, with integrations to payments, accounting and legacy systems";

export function CustomArchitectureDiagram({ className = "" }: { className?: string }) {
  const cols = [10, 200, 390];
  const w = 160;
  return (
    <svg viewBox="0 0 580 410" role="img" aria-label={ARCH_ALT} className={className}>
      <title>{ARCH_ALT}</title>
      <style>{FLOW_CSS}</style>
      <text x="10" y="16" style={caps}>PEOPLE &amp; CHANNELS</text>
      {cols.map((x) => (
        <path key={`c${x}`} className="flow" d={`M${x + w / 2} 70 V108`} stroke={PURPLE} strokeWidth="1.6" fill="none" />
      ))}
      {cols.map((x) => (
        <path key={`m${x}`} className="flow" d={`M${x + w / 2} 156 V194`} stroke={PURPLE} strokeWidth="1.6" fill="none" />
      ))}
      <path className="flow" d="M90 238 C 90 262, 240 260, 260 282 M280 238 V282 M470 238 C 470 262, 320 260, 300 282" stroke={TEAL} strokeWidth="1.6" fill="none" />
      <path d="M550 132 C 578 132, 578 378, 550 378" stroke={GREY_LINE} strokeWidth="1.5" fill="none" />

      <Box x={10} y={26} w={w} h={44} text="Customer web app" />
      <Box x={200} y={26} w={w} h={44} text="Mobile app" />
      <Box x={390} y={26} w={w} h={44} text="Staff portal" />

      <Box x={10} y={108} w={540} h={48} text="API layer · authentication · roles · audit log" tone="purple" />

      <Box x={10} y={194} w={w} h={44} text="Orders & billing" tone="teal" />
      <Box x={200} y={194} w={w} h={44} text="CRM & customers" tone="teal" />
      <Box x={390} y={194} w={w} h={44} text="Workflows" tone="teal" />

      <Box x={200} y={282} w={w} h={44} text="Central database" />

      <text x="10" y="350" style={caps}>INTEGRATIONS</text>
      <Box x={10} y={358} w={w} h={40} text="Payments" tone="sun" size={14} />
      <Box x={200} y={358} w={w} h={40} text="Accounting" tone="sun" size={14} />
      <Box x={390} y={358} w={w} h={40} text="Legacy systems" tone="legacy" size={14} />
    </svg>
  );
}

// ───────────────────────── Legacy modernisation ─────────────────────────

export const LEGACY_ALT =
  "Incremental legacy modernisation diagram: a routing layer sends traffic to the legacy system while new modules replace its functions one by one over three phases";

function Arrow({ x1, y1, x2, y2 }: { x1: number; y1: number; x2: number; y2: number }) {
  const horizontal = y1 === y2;
  const head = horizontal ? `M${x2 - 8} ${y2 - 6} L${x2} ${y2} L${x2 - 8} ${y2 + 6}` : `M${x2 - 6} ${y2 - 8} L${x2} ${y2} L${x2 + 6} ${y2 - 8}`;
  return <path d={`M${x1} ${y1} L${x2} ${y2} ${head}`} stroke={GREY_LINE} strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />;
}

export function LegacyPhasesDiagram({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 920 250" role="img" aria-label={LEGACY_ALT} className={className}>
      <title>{LEGACY_ALT}</title>
      <style>{FLOW_CSS}</style>
      {/* Phase 1 */}
      <text x="10" y="16" style={caps}>PHASE 1 · WRAP</text>
      <path className="flow" d="M140 68 V96" stroke={PURPLE} strokeWidth="1.6" fill="none" />
      <Box x={10} y={26} w={260} h={42} text="Routing layer / API" tone="purple" />
      <Box x={10} y={96} w={260} h={140} text="Legacy system" tone="legacy" sub={["ORDERS · BILLING", "REPORTING · USERS"]} />
      <Arrow x1={282} y1={166} x2={312} y2={166} />
      {/* Phase 2 */}
      <text x="326" y="16" style={caps}>PHASE 2 · REPLACE ONE AT A TIME</text>
      <path className="flow" d="M386 68 V96" stroke={PURPLE} strokeWidth="1.6" fill="none" />
      <path className="flow" d="M526 68 V96" stroke={TEAL} strokeWidth="1.6" fill="none" />
      <Box x={326} y={26} w={260} h={42} text="Routing layer / API" tone="purple" />
      <Box x={326} y={96} w={120} h={140} text="Legacy" tone="legacy" sub={["BILLING", "USERS"]} />
      <Box x={458} y={96} w={128} h={62} text="New orders" tone="teal" />
      <Box x={458} y={174} w={128} h={62} text="New reports" tone="teal" />
      <Arrow x1={598} y1={166} x2={628} y2={166} />
      {/* Phase 3 */}
      <text x="642" y="16" style={caps}>PHASE 3 · RETIRE</text>
      <path className="flow" d="M772 68 V96" stroke={TEAL} strokeWidth="1.6" fill="none" />
      <Box x={642} y={26} w={268} h={42} text="Routing layer / API" tone="purple" />
      <Box x={642} y={96} w={128} h={62} text="Orders" tone="teal" />
      <Box x={782} y={96} w={128} h={62} text="Billing" tone="teal" />
      <Box x={642} y={174} w={128} h={62} text="Reports" tone="teal" />
      <Box x={782} y={174} w={128} h={62} text="Users" tone="teal" />
    </svg>
  );
}

export function LegacyPhasesDiagramVertical({ className = "" }: { className?: string }) {
  const X = 16;
  const W = 288;
  return (
    <svg viewBox="0 0 320 580" role="img" aria-label={LEGACY_ALT} className={className}>
      <title>{LEGACY_ALT}</title>
      <style>{FLOW_CSS}</style>
      <text x={X} y="14" style={caps}>PHASE 1 · WRAP</text>
      <path className="flow" d="M160 60 V80" stroke={PURPLE} strokeWidth="1.6" fill="none" />
      <Box x={X} y={22} w={W} h={38} text="Routing layer / API" tone="purple" size={14} />
      <Box x={X} y={80} w={W} h={96} text="Legacy system" tone="legacy" size={14} sub={["ORDERS · BILLING", "REPORTING · USERS"]} />
      <Arrow x1={160} y1={184} x2={160} y2={204} />

      <text x={X} y="222" style={caps}>PHASE 2 · REPLACE ONE AT A TIME</text>
      <path className="flow" d="M80 268 V288" stroke={PURPLE} strokeWidth="1.6" fill="none" />
      <path className="flow" d="M230 268 V288" stroke={TEAL} strokeWidth="1.6" fill="none" />
      <Box x={X} y={230} w={W} h={38} text="Routing layer / API" tone="purple" size={14} />
      <Box x={X} y={288} w={130} h={92} text="Legacy" tone="legacy" size={14} sub={["BILLING", "USERS"]} />
      <Box x={156} y={288} w={148} h={42} text="New orders" tone="teal" size={14} />
      <Box x={156} y={338} w={148} h={42} text="New reports" tone="teal" size={14} />
      <Arrow x1={160} y1={390} x2={160} y2={410} />

      <text x={X} y="428" style={caps}>PHASE 3 · RETIRE</text>
      <path className="flow" d="M160 474 V488" stroke={TEAL} strokeWidth="1.6" fill="none" />
      <Box x={X} y={436} w={W} h={38} text="Routing layer / API" tone="purple" size={14} />
      <Box x={X} y={488} w={140} h={38} text="Orders" tone="teal" size={14} />
      <Box x={164} y={488} w={140} h={38} text="Billing" tone="teal" size={14} />
      <Box x={X} y={534} w={140} h={38} text="Reports" tone="teal" size={14} />
      <Box x={164} y={534} w={140} h={38} text="Users" tone="teal" size={14} />
    </svg>
  );
}

// ───────────────────────── Build or buy decision ─────────────────────────

export const DECISION_ALT =
  "Build or buy decision flow: if a product covers most needs, buy and configure it; if the gap is a distinctive process, build a custom layer integrated with the product; otherwise build custom software";

const OPTIONS: { branch: string; text: string; caption: string; tone: Tone }[] = [
  { branch: "YES, ALL", text: "Buy and configure", caption: "FASTEST · LEAST CONTROL", tone: "sun" },
  { branch: "CORE ONLY", text: "Hybrid: product + custom layer", caption: "KEEP THE CORE · OWN THE DIFFERENCE", tone: "teal" },
  { branch: "NO", text: "Build custom software", caption: "MOST CONTROL · HIGHEST UPFRONT COST", tone: "purple" },
];

export function DecisionDiagram({ className = "" }: { className?: string }) {
  const ys = [20, 96, 172];
  return (
    <svg viewBox="0 0 900 240" role="img" aria-label={DECISION_ALT} className={className}>
      <title>{DECISION_ALT}</title>
      <style>{FLOW_CSS}</style>
      <path className="flow" d={`M220 121 H250 M250 ${ys[0] + 26} V${ys[2] + 26}`} stroke={PURPLE} strokeWidth="1.6" fill="none" />
      {ys.map((y) => (
        <path key={y} className="flow" d={`M250 ${y + 26} H330`} stroke={PURPLE} strokeWidth="1.6" fill="none" />
      ))}
      <Box x={10} y={88} w={210} h={66} text={["Does a product cover", "most requirements?"]} />
      {OPTIONS.map((o, i) => (
        <g key={o.text}>
          <text x="262" y={ys[i] + 18} style={{ ...caps, fontSize: 10 }}>{o.branch}</text>
          <Box x={330} y={ys[i]} w={270} h={52} text={o.text} tone={o.tone} />
          <text x="618" y={ys[i] + 31} style={caps}>{o.caption}</text>
        </g>
      ))}
    </svg>
  );
}

export function DecisionDiagramVertical({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 320 470" role="img" aria-label={DECISION_ALT} className={className}>
      <title>{DECISION_ALT}</title>
      <style>{FLOW_CSS}</style>
      <Box x={16} y={8} w={288} h={60} text={["Does a product cover", "most requirements?"]} size={14} />
      <path className="flow" d="M32 68 V420" stroke={PURPLE} strokeWidth="1.6" fill="none" />
      {OPTIONS.map((o, i) => {
        const y = 100 + i * 128;
        return (
          <g key={o.text}>
            <path className="flow" d={`M32 ${y + 44} H52`} stroke={PURPLE} strokeWidth="1.6" fill="none" />
            <text x="52" y={y + 10} style={{ ...caps, fontSize: 10 }}>{o.branch}</text>
            <Box x={52} y={y + 20} w={252} h={48} text={o.text} tone={o.tone} size={o.text.length > 22 ? 13 : 14} />
            <text x="52" y={y + 88} style={{ ...caps, fontSize: 10 }}>{o.caption}</text>
          </g>
        );
      })}
    </svg>
  );
}

// ───────────────────────── Total cost of ownership ─────────────────────────

export const TCO_ALT =
  "Illustrative total cost of ownership chart comparing custom software, with a higher build cost then lower yearly running costs, against off-the-shelf software with low setup cost and rising yearly subscription and workaround costs";

export const TCO_COLORS = { custom: PURPLE, shelf: SUN };

/** Illustrative only: bar heights show shape, not figures. Legend is HTML (see page). */
export function TcoChart({ className = "" }: { className?: string }) {
  const custom = [180, 50, 54, 57, 60];
  const shelf = [24, 42, 60, 82, 104];
  const base = 214;
  return (
    <svg viewBox="0 0 520 250" role="img" aria-label={TCO_ALT} className={className}>
      <title>{TCO_ALT}</title>
      {[0.25, 0.5, 0.75].map((f) => (
        <line key={f} x1="20" x2="510" y1={base - 190 * f} y2={base - 190 * f} stroke={LINE} strokeDasharray="3 6" />
      ))}
      {custom.map((h, i) => {
        const x = 40 + i * 96;
        return (
          <g key={i}>
            <rect x={x} y={base - h} width="32" height={h} rx="6" fill={PURPLE} />
            <rect x={x + 38} y={base - shelf[i]} width="32" height={shelf[i]} rx="6" fill={SUN} />
            <text x={x + 35} y={base + 26} textAnchor="middle" style={{ ...caps, fontSize: 13, fill: MUTED }}>YEAR {i + 1}</text>
          </g>
        );
      })}
      <line x1="20" x2="510" y1={base} y2={base} stroke={GREY_LINE} strokeWidth="1.5" />
    </svg>
  );
}
