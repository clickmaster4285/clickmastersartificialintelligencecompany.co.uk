import React from "react";
import {
  // Frontend
  reactIcon,
  nextjsIcon,
  angularIcon,
  typescriptIcon,
  tailwindIcon,
  vuejsIcon,
  // Backend
  nodejsIcon,
  pythonIcon,
  laravelIcon,
  goIcon,
  javaIcon,
  rubyIcon,
  // Mobile
  reactNativeIcon,
  flutterIcon,
  swiftIcon,
  ionicIcon,
  kotlinIcon,
  // Database
  postgresIcon,
  mongodbIcon,
  mysqlIcon,
  firebaseIcon,
  elasticsearchIcon,
  redisIcon,
  // Cloud
  awsIcon,
  gcpIcon,
  azureIcon,
  kubernetesIcon,
  terraformIcon,
  dockerIcon,
  // DevOps
  githubActionsIcon,
  jenkinsIcon,
  prometheusIcon,
  newRelicIcon,
  grafanaIcon,
} from "../assets";

// Intrinsic pixel size of each logo file (width, height), so the browser can
// reserve the right space before the image loads.
export const LOGO_SIZE = {
  "React.js": [98, 27],
  "Next.js": [90, 28],
  "Angular": [100, 28],
  "TypeScript": [124, 28],
  "Tailwind CSS": [157, 28],
  "Vue.js": [83, 27],
  "Node.js": [95, 30],
  "Python/Django": [155, 27],
  "Laravel": [95, 30],
  "Go": [61, 30],
  "Java/Spring": [133, 28],
  "Ruby on Rails": [141, 28],
  "React Native": [138, 27],
  "Flutter": [88, 28],
  "Swift/iOS": [115, 27],
  "Ionic": [74, 28],
  "Kotlin/Android": [149, 27],
  "PostgreSQL": [131, 28],
  "MongoDB": [115, 28],
  "MySQL": [96, 28],
  "Firebase": [104, 30],
  "Elasticsearch": [141, 27],
  "Redis": [79, 27],
  "AWS": [85, 27],
  "Google Cloud": [152, 27],
  "Azure": [84, 27],
  "Kubernetes": [127, 27],
  "Terraform": [119, 28],
  "Docker": [109, 27],
  "GitHub Actions": [155, 28],
  "Jenkins": [95, 38],
  "Prometheus": [131, 30],
  "New Relic": [114, 28],
  "Grafana": [104, 28],
};

// Each category: a visible text list (for readers and search engines) plus logo rows.
const categories = [
  {
    title: "Frontend Development",
    list: "React.js, Next.js, Angular, Vue.js, TypeScript, Tailwind CSS",
    rows: [
      [{ icon: reactIcon, label: "React.js" }, { icon: nextjsIcon, label: "Next.js" }, { icon: angularIcon, label: "Angular" }],
      [{ icon: typescriptIcon, label: "TypeScript" }, { icon: tailwindIcon, label: "Tailwind CSS" }],
      [{ icon: vuejsIcon, label: "Vue.js" }],
    ],
  },
  {
    title: "Backend Development",
    list: "Node.js, Python and Django, Laravel, Go, Java and Spring, Ruby on Rails",
    rows: [
      [{ icon: nodejsIcon, label: "Node.js" }, { icon: pythonIcon, label: "Python/Django" }],
      [{ icon: laravelIcon, label: "Laravel" }, { icon: goIcon, label: "Go" }, { icon: javaIcon, label: "Java/Spring" }],
      [{ icon: rubyIcon, label: "Ruby on Rails" }],
    ],
  },
  {
    title: "Mobile Development",
    list: "Flutter, React Native, Swift, Kotlin, Ionic",
    rows: [
      [{ icon: reactNativeIcon, label: "React Native" }, { icon: flutterIcon, label: "Flutter" }],
      [{ icon: swiftIcon, label: "Swift/iOS" }, { icon: ionicIcon, label: "Ionic" }],
      [{ icon: kotlinIcon, label: "Kotlin/Android" }],
    ],
  },
  {
    title: "Database and Storage",
    list: "PostgreSQL, MongoDB, MySQL, Firebase, Elasticsearch, Redis",
    rows: [
      [{ icon: postgresIcon, label: "PostgreSQL" }, { icon: mongodbIcon, label: "MongoDB" }],
      [{ icon: mysqlIcon, label: "MySQL" }, { icon: firebaseIcon, label: "Firebase" }],
      [{ icon: elasticsearchIcon, label: "Elasticsearch" }, { icon: redisIcon, label: "Redis" }],
    ],
  },
  {
    title: "Cloud and Infrastructure",
    list: "AWS, Google Cloud, Azure, Kubernetes, Terraform, Docker",
    rows: [
      [{ icon: awsIcon, label: "AWS" }, { icon: gcpIcon, label: "Google Cloud" }],
      [{ icon: azureIcon, label: "Azure" }, { icon: kubernetesIcon, label: "Kubernetes" }],
      [{ icon: terraformIcon, label: "Terraform" }, { icon: dockerIcon, label: "Docker" }],
    ],
  },
  {
    title: "DevOps and Monitoring",
    list: "GitHub Actions, Jenkins, Prometheus, New Relic, Grafana",
    rows: [
      [{ icon: githubActionsIcon, label: "GitHub Actions" }, { icon: jenkinsIcon, label: "Jenkins", size: "h-[36px]" }], [{ icon: prometheusIcon, label: "Prometheus" }, { icon: newRelicIcon, label: "New Relic" }],
      [{ icon: grafanaIcon, label: "Grafana" }],
    ],
  },
];

export default function TechStackGrid() {
  return (
    <section aria-label="Technologies we use" className="w-full max-w-[1728px] mx-auto bg-white py-16 px-6 lg:px-[130px]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((cat) => (
          <div key={cat.title} className="p-8">
            <h3
              className="text-center underline font-bold text-[#333333] mb-3"
              style={{
                fontFamily: "Garamond, serif",
                fontSize: "20px",
                lineHeight: "22px",
              }}
            >
              {cat.title}
            </h3>
            <p className="text-center text-sm text-gray-600 mb-6">{cat.list}</p>

            <div aria-hidden="true" className="flex flex-col items-center gap-5">
              {cat.rows.map((row, i) => (
                <div key={i} className="flex justify-center gap-6">
                  {row.map((item) => (
                    <img loading="lazy" decoding="async"
                      key={item.label}
                      src={item.icon}
                      alt=""
                      width={LOGO_SIZE[item.label][0]}
                      height={LOGO_SIZE[item.label][1]}
                      className={`w-auto object-contain ${item.size || "h-[24px]"}`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}