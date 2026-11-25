// Technology groups shown as logo tiles (reuses the homepage logo files and
// their intrinsic sizes). Names without a logo render as text chips.
import { LOGO_SIZE } from "./TechStackGrid";
import {
  angularIcon, awsIcon, azureIcon, dockerIcon, elasticsearchIcon, firebaseIcon, flutterIcon, gcpIcon,
  githubActionsIcon, goIcon, grafanaIcon, ionicIcon, javaIcon, jenkinsIcon, kotlinIcon, kubernetesIcon, laravelIcon,
  mongodbIcon, mysqlIcon, newRelicIcon, nextjsIcon, nodejsIcon, postgresIcon, prometheusIcon, pythonIcon,
  reactIcon, reactNativeIcon, redisIcon, rubyIcon, swiftIcon, tailwindIcon, terraformIcon, typescriptIcon,
  vuejsIcon,
} from "../assets";

// Display name -> [logo file, LOGO_SIZE key]
const TECH_LOGOS = {
  React: [reactIcon, "React.js"], "Next.js": [nextjsIcon, "Next.js"], TypeScript: [typescriptIcon, "TypeScript"],
  Angular: [angularIcon, "Angular"], "Vue.js": [vuejsIcon, "Vue.js"], "Tailwind CSS": [tailwindIcon, "Tailwind CSS"],
  "Node.js": [nodejsIcon, "Node.js"], "Python & Django": [pythonIcon, "Python/Django"], Laravel: [laravelIcon, "Laravel"],
  Go: [goIcon, "Go"], "Java & Spring": [javaIcon, "Java/Spring"], "Ruby on Rails": [rubyIcon, "Ruby on Rails"],
  Flutter: [flutterIcon, "Flutter"], "React Native": [reactNativeIcon, "React Native"], Swift: [swiftIcon, "Swift/iOS"],
  Kotlin: [kotlinIcon, "Kotlin/Android"], PostgreSQL: [postgresIcon, "PostgreSQL"], MySQL: [mysqlIcon, "MySQL"],
  MongoDB: [mongodbIcon, "MongoDB"], Redis: [redisIcon, "Redis"], Elasticsearch: [elasticsearchIcon, "Elasticsearch"],
  Firebase: [firebaseIcon, "Firebase"], AWS: [awsIcon, "AWS"], Azure: [azureIcon, "Azure"], "Microsoft Azure": [azureIcon, "Azure"],
  "Google Cloud": [gcpIcon, "Google Cloud"], Docker: [dockerIcon, "Docker"], Kubernetes: [kubernetesIcon, "Kubernetes"],
  Terraform: [terraformIcon, "Terraform"], "GitHub Actions": [githubActionsIcon, "GitHub Actions"],
  Jenkins: [jenkinsIcon, "Jenkins"], Prometheus: [prometheusIcon, "Prometheus"], Grafana: [grafanaIcon, "Grafana"],
  "New Relic": [newRelicIcon, "New Relic"], Ionic: [ionicIcon, "Ionic"],
};

/** A single technology logo (returns null when no logo file exists for `name`). */
export function TechLogo({ name, className = "h-[22px] w-auto max-w-full object-contain" }) {
  const logo = TECH_LOGOS[name];
  if (!logo) return null;
  const [w, h] = LOGO_SIZE[logo[1]];
  // Small static PNG logos with intrinsic sizes; next/image adds no benefit here.
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={logo[0]} alt={name} width={w} height={h} loading="lazy" decoding="async" className={className} />;
}

/** groups: [{ title, items: string[] }] */
export default function TechLogoGroups({ groups }) {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {groups.map((g) => (
        <div key={g.title} className="rounded-2xl border border-gray-100 bg-white p-6">
          <h3 className="text-sm font-bold uppercase tracking-wider text-[#7a1fa2]">{g.title}</h3>
          <ul className="mt-4 grid grid-cols-2 gap-2.5">
            {g.items.map((name) => {
              return (
                <li key={name} className="flex h-12 items-center justify-center rounded-xl bg-[#faf9f7] px-3 ring-1 ring-gray-100">
                  {TECH_LOGOS[name] ? <TechLogo name={name} /> : <span className="text-sm font-semibold text-gray-700">{name}</span>}
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
}
