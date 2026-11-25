/*
 * Inline SVG diagrams for /services (from the Services SEO pack, redrawn in
 * brand colours). Inline SVG keeps the text crawlable, adds no image request
 * and reserves its own space, so there is no layout shift.
 */

export const PURPLE = "#AF00E8";
export const PURPLE_SOFT = "#F7EFFA";
export const TEAL = "#0F9F94";
export const TEAL_SOFT = "#E3F7F5";
export const LINE = "#D9CDE3";
export const INK = "#1A1A1A";
export const MUTED = "#6B6275";

// Flowing dashed connectors; frozen for users who prefer reduced motion.
export const FLOW_CSS = `
.flow{stroke-dasharray:5 6;animation:cmflow 1.4s linear infinite}
@keyframes cmflow{to{stroke-dashoffset:-22}}
@media (prefers-reduced-motion:reduce){.flow{animation:none}}
`;

export const label = { fontFamily: "Arial, Helvetica, sans-serif", fontWeight: 600, fontSize: 15, fill: INK } as const;
export const caps = { fontFamily: "Consolas, 'Courier New', monospace", fontSize: 11, letterSpacing: "0.08em", fill: MUTED } as const;

export const ARCHITECTURE_ALT =
  "Diagram showing business data from CRM, ERP, documents and sensors flowing through a custom AI model layer into copilots, forecasts and automations";

export function ArchitectureDiagram({ className = "" }: { className?: string }) {
  const inputs = ["CRM records", "ERP & finance", "Documents", "Sensors & logs"];
  const outputs = ["Copilots", "Forecasts", "Automations"];
  const inY = [40, 112, 184, 256];
  const outY = [88, 160, 232];
  // Model-layer network nodes.
  const n1 = [[238, 140], [238, 190], [238, 240]];
  const n2 = [[280, 165], [280, 215]];
  const n3 = [[322, 150], [322, 230]];
  return (
    <svg viewBox="0 0 560 330" role="img" aria-label={ARCHITECTURE_ALT} className={className}>
      <title>{ARCHITECTURE_ALT}</title>
      <style>{FLOW_CSS}</style>
      <text x="12" y="24" style={caps}>YOUR SYSTEMS</text>
      <text x="398" y="72" style={caps}>BUSINESS OUTPUTS</text>

      {inY.map((y, i) => (
        <g key={inputs[i]}>
          <path className="flow" d={`M162 ${y + 24} C 185 ${y + 24}, 185 ${110 + i * 40}, 205 ${110 + i * 40}`} fill="none" stroke={PURPLE} strokeWidth="1.6" />
          <rect x="12" y={y} width="150" height="48" rx="12" fill="#fff" stroke={LINE} strokeWidth="1.5" />
          <text x="28" y={y + 30} style={label}>{inputs[i]}</text>
        </g>
      ))}

      {outY.map((y, i) => (
        <g key={outputs[i]}>
          <path className="flow" d={`M355 ${130 + i * 40} C 378 ${130 + i * 40}, 378 ${y + 24}, 398 ${y + 24}`} fill="none" stroke={TEAL} strokeWidth="1.6" />
          <rect x="398" y={y} width="150" height="48" rx="12" fill={TEAL_SOFT} stroke={TEAL} strokeWidth="1.5" />
          <text x="416" y={y + 30} style={label}>{outputs[i]}</text>
        </g>
      ))}

      <rect x="205" y="62" width="150" height="232" rx="20" fill={PURPLE_SOFT} stroke={PURPLE} strokeWidth="1.6" />
      <text x="224" y="90" style={caps}>MODEL LAYER</text>
      {n1.flatMap(([x1, y1]) => n2.map(([x2, y2]) => (
        <line key={`a${x1}${y1}${y2}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke={PURPLE} strokeOpacity="0.45" strokeWidth="1.3" />
      )))}
      {n2.flatMap(([x1, y1]) => n3.map(([x2, y2]) => (
        <line key={`b${y1}${y2}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke={PURPLE} strokeOpacity="0.45" strokeWidth="1.3" />
      )))}
      {n1.map(([x, y]) => <circle key={`n1${y}`} cx={x} cy={y} r="8" fill={PURPLE} />)}
      {n2.map(([x, y]) => <circle key={`n2${y}`} cx={x} cy={y} r="9" fill={TEAL} />)}
      {n3.map(([x, y]) => <circle key={`n3${y}`} cx={x} cy={y} r="8" fill={PURPLE} />)}
      <text x="280" y="278" textAnchor="middle" style={caps}>LLM · RAG · ML · CV</text>
    </svg>
  );
}

export const RAG_ALT =
  "RAG architecture diagram: documents are chunked, embedded and indexed; a user question triggers retrieval and re-ranking, and a language model returns an answer with citations";

type Box = { x: number; y: number; w: number; text: string; tone?: "accent" | "result" };

function Boxes({ boxes, h }: { boxes: Box[]; h: number }) {
  return (
    <>
      {boxes.map((b) => (
        <g key={b.text}>
          <rect
            x={b.x}
            y={b.y}
            width={b.w}
            height={h}
            rx="12"
            fill={b.tone === "accent" ? PURPLE_SOFT : b.tone === "result" ? TEAL_SOFT : "#fff"}
            stroke={b.tone === "accent" ? PURPLE : b.tone === "result" ? TEAL : LINE}
            strokeWidth="1.6"
          />
          <text x={b.x + 18} y={b.y + h / 2 + 5} style={label}>{b.text}</text>
        </g>
      ))}
    </>
  );
}

/** Wide layout (tablet and desktop). */
export function RagDiagram({ className = "" }: { className?: string }) {
  const h = 54;
  const top: Box[] = [
    { x: 10, y: 34, w: 180, text: "Your documents" },
    { x: 230, y: 34, w: 180, text: "Chunk & embed" },
    { x: 450, y: 34, w: 180, text: "Vector index", tone: "accent" },
  ];
  const bottom: Box[] = [
    { x: 10, y: 156, w: 180, text: "User question" },
    { x: 230, y: 156, w: 180, text: "Retrieve & re-rank", tone: "accent" },
    { x: 450, y: 156, w: 180, text: "Language model" },
    { x: 670, y: 156, w: 180, text: "Cited answer", tone: "result" },
  ];
  return (
    <svg viewBox="0 0 860 224" role="img" aria-label={RAG_ALT} className={className}>
      <title>{RAG_ALT}</title>
      <style>{FLOW_CSS}</style>
      <text x="10" y="20" style={caps}>INGESTION (RUNS WHEN CONTENT CHANGES)</text>
      <text x="10" y="142" style={caps}>QUERY (RUNS ON EVERY QUESTION)</text>
      <path className="flow" d="M190 61 H230 M410 61 H450" stroke={PURPLE} strokeWidth="1.6" fill="none" />
      <path className="flow" d="M540 88 C 540 122, 320 122, 320 156" stroke={PURPLE} strokeWidth="1.6" fill="none" />
      <path className="flow" d="M190 183 H230" stroke={PURPLE} strokeWidth="1.6" fill="none" />
      <path className="flow" d="M410 183 H450 M630 183 H670" stroke={TEAL} strokeWidth="1.6" fill="none" />
      <text x="430" y="170" textAnchor="middle" style={{ ...caps, fontSize: 10 }}>context</text>
      <Boxes boxes={top} h={h} />
      <Boxes boxes={bottom} h={h} />
    </svg>
  );
}

/** Stacked layout for narrow screens (same content, readable text). */
export function RagDiagramVertical({ className = "" }: { className?: string }) {
  const h = 46;
  const x = 16;
  const w = 250;
  const ingest: Box[] = [
    { x, y: 30, w, text: "Your documents" },
    { x, y: 96, w, text: "Chunk & embed" },
    { x, y: 162, w, text: "Vector index", tone: "accent" },
  ];
  const query: Box[] = [
    { x, y: 270, w, text: "User question" },
    { x, y: 336, w, text: "Retrieve & re-rank", tone: "accent" },
    { x, y: 402, w, text: "Language model" },
    { x, y: 468, w, text: "Cited answer", tone: "result" },
  ];
  return (
    <svg viewBox="0 0 320 530" role="img" aria-label={RAG_ALT} className={className}>
      <title>{RAG_ALT}</title>
      <style>{FLOW_CSS}</style>
      <text x={x} y="18" style={caps}>INGESTION</text>
      <text x={x} y="258" style={caps}>QUERY</text>
      <path className="flow" d="M141 76 V96 M141 142 V162 M141 316 V336" stroke={PURPLE} strokeWidth="1.6" fill="none" />
      <path className="flow" d="M141 382 V402 M141 448 V468" stroke={TEAL} strokeWidth="1.6" fill="none" />
      <path className="flow" d="M266 185 C 306 185, 306 359, 266 359" stroke={PURPLE} strokeWidth="1.6" fill="none" />
      <Boxes boxes={ingest} h={h} />
      <Boxes boxes={query} h={h} />
    </svg>
  );
}

export const SECURITY_ALT =
  "Layered security diagram: cloud infrastructure, secure integrations, access control and model guardrails surrounding business data at the centre";

export function SecurityLayersDiagram({ className = "" }: { className?: string }) {
  const rings = [
    { r: 226, text: "INFRASTRUCTURE · VPC · ENCRYPTION", fill: "#FBF8FD" },
    { r: 176, text: "SECURE INTEGRATIONS · SECRETS", fill: "#F7F0FB" },
    { r: 126, text: "IDENTITY · ROLE-BASED ACCESS", fill: "#F2E6F8" },
    { r: 80, text: "GUARDRAILS", fill: "#EBDDF4" },
  ];
  return (
    <svg viewBox="0 0 480 480" role="img" aria-label={SECURITY_ALT} className={className}>
      <title>{SECURITY_ALT}</title>
      <defs>
        <linearGradient id="cm-ring" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={PURPLE} />
          <stop offset="1" stopColor={TEAL} />
        </linearGradient>
      </defs>
      {rings.map((ring) => (
        <circle key={ring.r} cx="240" cy="240" r={ring.r} fill={ring.fill} stroke="url(#cm-ring)" strokeOpacity="0.55" strokeWidth="1.6" />
      ))}
      {/* Labels follow each band's top arc, so they never cross a ring. */}
      {rings.map((ring, i) => {
        const inner = rings[i + 1]?.r ?? 48;
        const r = (ring.r + inner) / 2 - 4;
        const id = `cm-arc-${i}`;
        return (
          <g key={ring.text}>
            <path id={id} d={`M ${240 - r} 240 A ${r} ${r} 0 0 1 ${240 + r} 240`} fill="none" />
            <text style={{ ...caps, fontSize: i === 3 ? 10 : 11.5, fill: "#5B2B73" }}>
              <textPath href={`#${id}`} startOffset="50%" textAnchor="middle">
                {ring.text}
              </textPath>
            </text>
          </g>
        );
      })}
      <circle cx="240" cy="240" r="48" fill={TEAL_SOFT} stroke={TEAL} strokeWidth="1.6" />
      <text x="240" y="246" textAnchor="middle" style={{ ...label, fontSize: 17 }}>Your data</text>
    </svg>
  );
}
