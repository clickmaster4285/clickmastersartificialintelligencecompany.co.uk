/*
 * Diagrams for /services/mobile-app-development, redrawn from the Mobile App
 * SEO pack in the site palette. The hero phone is inline SVG with a neutral
 * device shape (no Apple/Google frames, logos or store badges, per the pack).
 * The rest are responsive HTML diagrams built from shared parts.
 */
import { RiArrowDownLine, RiLoopLeftLine } from "react-icons/ri";
import { CAPS, Connector, Flow, Node, NodeList, type FlowStep } from "../../Components/DiagramParts";
import { LINE, PURPLE, PURPLE_SOFT, TEAL, TEAL_SOFT, caps, label } from "../ServiceDiagrams";

const SUN = "#E3A600";
const SUN_SOFT = "#FDF4D7";

// ───────────────────────── Hero: order-tracking phone ─────────────────────────

export const PHONE_ALT =
  "Illustration of a business mobile app on a smartphone showing an order tracking screen with a progress timeline, a push notification and an offline sync indicator";

export function PhoneIllustration({ className = "" }: { className?: string }) {
  const steps: [string, string, boolean][] = [
    ["Confirmed", PURPLE, true],
    ["Packed", PURPLE, true],
    ["Out for delivery", TEAL, true],
    ["DELIVERED", "#DCD0E6", false],
  ];
  return (
    <svg viewBox="0 0 540 400" role="img" aria-label={PHONE_ALT} className={className}>
      <title>{PHONE_ALT}</title>
      {/* Device */}
      <rect x="176" y="6" width="188" height="388" rx="34" fill="#fff" stroke={LINE} strokeWidth="2" />
      <rect x="188" y="18" width="164" height="364" rx="26" fill="#F6F1FA" stroke="#6B6275" strokeOpacity="0.6" strokeWidth="1.4" />
      <rect x="240" y="28" width="60" height="8" rx="4" fill="#DCD0E6" />
      <text x="202" y="60" style={{ ...caps, fontSize: 11 }}>9:41</text>
      <text x="300" y="60" style={{ ...caps, fontSize: 11 }}>5G</text>
      {[0, 1, 2].map((i) => <rect key={i} x={322 + i * 7} y={51} width="5" height="10" rx="1" fill="#6B6275" />)}

      <text x="202" y="92" style={{ ...label, fontSize: 16, fill: "#7a00a8" }}>Your order</text>
      <text x="202" y="110" style={{ ...caps, fontSize: 9.5 }}>#A1042 · EXAMPLE DATA</text>

      {steps.slice(0, -1).map((_, i) => (
        <line key={i} x1="210" x2="210" y1={148 + i * 44} y2={176 + i * 44} stroke={i === 2 ? "#6B6275" : PURPLE} strokeWidth="2" strokeDasharray={i === 2 ? "2 4" : "4 4"} />
      ))}
      {steps.map(([text, color, done], i) => (
        <g key={text}>
          <circle cx="210" cy={140 + i * 44} r="8" fill={color} />
          <text x="228" y={145 + i * 44} style={done ? { ...label, fontSize: 14 } : { ...caps, fontSize: 11 }}>{text}</text>
        </g>
      ))}

      <rect x="202" y="306" width="136" height="36" rx="12" fill={PURPLE_SOFT} stroke={PURPLE} strokeWidth="1.6" />
      <text x="270" y="329" textAnchor="middle" style={{ ...label, fontSize: 14, fill: "#7a00a8" }}>Track driver</text>
      <rect x="240" y="364" width="60" height="5" rx="2.5" fill="#DCD0E6" />

      {/* Callouts */}
      <path d="M156 89 H188" stroke={PURPLE} strokeWidth="1.6" strokeDasharray="4 4" />
      <rect x="6" y="60" width="150" height="58" rx="14" fill="#fff" stroke={LINE} strokeWidth="1.5" />
      <rect x="18" y="72" width="18" height="18" rx="5" fill={PURPLE_SOFT} stroke={PURPLE} strokeWidth="1.5" />
      <text x="44" y="86" style={{ ...label, fontSize: 14 }}>Driver nearby</text>
      <text x="44" y="105" style={{ ...caps, fontSize: 9.5 }}>PUSH ALERT</text>

      <path d="M352 149 H384" stroke="#6B6275" strokeWidth="1.4" />
      <rect x="384" y="120" width="150" height="58" rx="14" fill={SUN_SOFT} stroke={SUN} strokeWidth="1.5" />
      <text x="396" y="145" style={{ ...label, fontSize: 13.5 }}>Face ID / Biometric</text>
      <text x="396" y="164" style={{ ...caps, fontSize: 9.5 }}>SECURE SIGN-IN</text>

      <path d="M352 275 H384" stroke={SUN} strokeWidth="1.6" strokeDasharray="4 4" />
      <rect x="384" y="246" width="150" height="58" rx="14" fill={TEAL_SOFT} stroke={TEAL} strokeWidth="1.5" />
      <text x="396" y="271" style={{ ...label, fontSize: 14 }}>Offline-ready</text>
      <text x="396" y="290" style={{ ...caps, fontSize: 9.5 }}>SYNCS WHEN ONLINE</text>
    </svg>
  );
}

// ───────────────────────── App architecture ─────────────────────────

export const ARCH_ALT =
  "Mobile app architecture diagram: the app on the device with interface, local database and secure keystore connects over HTTPS to an API with authentication and business logic, which links to a database, business systems, payment providers and push notification services";

export function MobileArchitecture() {
  return (
    <div>
      <div className="grid items-stretch gap-3 lg:grid-cols-[1fr_auto_1fr_auto_0.85fr]">
        <div className="flex flex-col gap-3">
          <p className={CAPS}>On the device</p>
          <Node tone="teal" title="iOS / Android app" className="flex-1">
            <NodeList items={["Screens & navigation", "Local database (offline)", "Keychain / Keystore", "Camera · GPS · biometrics", "Crash & performance SDK"]} />
          </Node>
        </div>
        <div className="flex flex-col items-center justify-center gap-1 py-1 lg:pt-8">
          <span className={`${CAPS} text-[10px]`}>HTTPS</span>
          <Connector />
        </div>
        <div className="flex flex-col gap-3">
          <p className={CAPS}>Your back end</p>
          <Node tone="purple" title="API & services" className="flex-1">
            <NodeList items={["Token auth (OAuth 2.0)", "Authorisation", "Business rules", "Sync & conflict handling", "API versioning"]} />
          </Node>
        </div>
        <div className="flex items-center justify-center py-1 lg:pt-8">
          <Connector />
        </div>
        <div className="flex flex-col gap-3">
          <p className={CAPS}>Data & integrations</p>
          <Node tone="plain" title="Database" className="lg:flex lg:flex-1 lg:items-center" />
          <Node tone="plain" title="CRM · ERP · stock" className="lg:flex lg:flex-1 lg:items-center" />
          <Node tone="plain" title="Payment provider" className="lg:flex lg:flex-1 lg:items-center" />
          <Node tone="sun" title="APNs / FCM push" className="lg:flex lg:flex-1 lg:items-center" />
        </div>
      </div>
      <p className={`mt-5 flex items-center gap-2 ${CAPS}`}>
        <RiLoopLeftLine aria-hidden="true" className="h-4 w-4 text-[#AF00E8]" />
        Push notifications are delivered back to the device through APNs / FCM
      </p>
    </div>
  );
}

// ───────────────────────── Native vs cross-platform ─────────────────────────

export const NATIVE_ALT =
  "Comparison diagram: native development uses separate Swift and Kotlin codebases on the iOS and Android SDKs, while cross-platform development uses one Flutter or React Native codebase with small platform-specific modules to produce both apps";

function Down() {
  return (
    <span aria-hidden="true" className="flex justify-center py-1 text-[#8E8496]">
      <RiArrowDownLine className="h-4 w-4" />
    </span>
  );
}

export function NativeVsCrossDiagram() {
  return (
    <div className="grid gap-8 lg:grid-cols-2 lg:gap-0">
      <div className="lg:border-r lg:border-dashed lg:border-[#D9CDE3] lg:pr-8">
        <p className={CAPS}>Native · two codebases</p>
        <div className="mt-4 grid grid-cols-2 gap-3">
          <div>
            <Node tone="purple" title="Swift code"><p className={`mt-1 ${CAPS}`}>SwiftUI · UIKit</p></Node>
            <Down />
            <Node tone="plain" title="iOS SDK" />
            <Down />
            <Node tone="sun" title="iPhone app" />
          </div>
          <div>
            <Node tone="teal" title="Kotlin code"><p className={`mt-1 ${CAPS}`}>Jetpack · Compose</p></Node>
            <Down />
            <Node tone="plain" title="Android SDK" />
            <Down />
            <Node tone="sun" title="Android app" />
          </div>
        </div>
      </div>
      <div className="lg:pl-8">
        <p className={CAPS}>Cross-platform · one shared codebase</p>
        <div className="mt-4">
          <Node tone="purple" title="Shared code: Flutter (Dart) or React Native (TypeScript)">
            <p className={`mt-1 ${CAPS}`}>Screens · logic · API client · tests</p>
          </Node>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <Down />
              <Node tone="dashed" title="iOS-specific modules" />
              <Down />
              <Node tone="sun" title="iPhone app" />
            </div>
            <div>
              <Down />
              <Node tone="dashed" title="Android-specific modules" />
              <Down />
              <Node tone="sun" title="Android app" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ───────────────────────── Release pipeline ─────────────────────────

export const RELEASE_ALT =
  "Mobile app release pipeline: code is built and tested automatically, shared with testers through TestFlight and Google Play internal testing, submitted for store review, released with a staged rollout and monitored with crash reporting";

export function ReleasePipeline({ steps }: { steps: readonly FlowStep[] }) {
  return (
    <div>
      <Flow steps={steps} />
      <p className={`mt-4 flex items-center gap-2 ${CAPS}`}>
        <RiLoopLeftLine aria-hidden="true" className="h-4 w-4 text-[#AF00E8]" />
        Feedback into the next sprint
      </p>
    </div>
  );
}

// ───────────────────────── Offline-first sync ─────────────────────────

export const OFFLINE_ALT =
  "Offline-first sync diagram: user actions are saved to a local database and an outbox queue on the phone, then synced to the API when the connection returns, with conflicts resolved by agreed rules";

export function OfflineSync({ phone, online }: { phone: readonly FlowStep[]; online: readonly FlowStep[] }) {
  return (
    <div>
      <div className="grid items-end gap-3 lg:grid-cols-[3fr_auto_2fr]">
        <div>
          <p className={`mb-3 ${CAPS}`}>On the phone (works without signal)</p>
          <Flow steps={phone} />
        </div>
        <Connector className="py-1 lg:pb-6" />
        <div>
          <p className={`mb-3 ${CAPS}`}>When the connection returns</p>
          <Flow steps={online} />
        </div>
      </div>
      <p className={`mt-4 flex items-center gap-2 ${CAPS}`}>
        <RiLoopLeftLine aria-hidden="true" className="h-4 w-4 text-[#AF00E8]" />
        Server changes pulled back to the device
      </p>
    </div>
  );
}
