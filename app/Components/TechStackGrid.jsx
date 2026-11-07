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

// Har category ke "rows" array mein har row apni icons ki list hai
const categories = [
  {
    title: "Frontend Development",
    rows: [
      [{ icon: reactIcon, label: "React.js" }, { icon: nextjsIcon, label: "Next.js" }, { icon: angularIcon, label: "Angular" }],
      [{ icon: typescriptIcon, label: "TypeScript" }, { icon: tailwindIcon, label: "Tailwind CSS" }],
      [{ icon: vuejsIcon, label: "Vue.js" }],
    ],
  },
  {
    title: "Backend Development",
    rows: [
      [{ icon: nodejsIcon, label: "Node.js" }, { icon: pythonIcon, label: "Python/Django" }],
      [{ icon: laravelIcon, label: "Laravel" }, { icon: goIcon, label: "Go" }, { icon: javaIcon, label: "Java/Spring" }],
      [{ icon: rubyIcon, label: "Ruby on Rails" }],
    ],
  },
  {
    title: "Mobile Development",
    rows: [
      [{ icon: reactNativeIcon, label: "React Native" }, { icon: flutterIcon, label: "Flutter" }],
      [{ icon: swiftIcon, label: "Swift/iOS" }, { icon: ionicIcon, label: "Ionic" }],
      [{ icon: kotlinIcon, label: "Kotlin/Android" }],
    ],
  },
  {
    title: "Database & Storage",
    rows: [
      [{ icon: postgresIcon, label: "PostgreSQL" }, { icon: mongodbIcon, label: "MongoDB" }],
      [{ icon: mysqlIcon, label: "MySQL" }, { icon: firebaseIcon, label: "Firebase" }],
      [{ icon: elasticsearchIcon, label: "Elasticsearch" }, { icon: redisIcon, label: "Redis" }],
    ],
  },
  {
    title: "Cloud & Infrastructure",
    rows: [
      [{ icon: awsIcon, label: "AWS" }, { icon: gcpIcon, label: "Google Cloud" }],
      [{ icon: azureIcon, label: "Azure" }, { icon: kubernetesIcon, label: "Kubernetes" }],
      [{ icon: terraformIcon, label: "Terraform" }, { icon: dockerIcon, label: "Docker" }],
    ],
  },
  {
    title: "DevOps & Monitoring",
    rows: [
      [{ icon: githubActionsIcon, label: "GitHub Actions" }, { icon: jenkinsIcon, label: "Jenkins", size: "h-[36px]" }], [{ icon: prometheusIcon, label: "Prometheus" }, { icon: newRelicIcon, label: "New Relic" }],
      [{ icon: grafanaIcon, label: "Grafana" }],
    ],
  },
];

export default function TechStackGrid() {
  return (
    <section className="w-full max-w-[1728px] mx-auto bg-white py-16 px-6 lg:px-[130px]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((cat) => (
          <div key={cat.title} className="p-8">
            <h3
              className="text-center underline font-bold text-[#333333] mb-6"
              style={{
                fontFamily: "Garamond, serif",
                fontSize: "20px",
                lineHeight: "22px",
              }}
            >
              {cat.title}
            </h3>

            <div className="flex flex-col items-center gap-5">
              {cat.rows.map((row, i) => (
                <div key={i} className="flex justify-center gap-6">
                  {row.map((item) => (
                    <img loading="lazy" decoding="async"
                      key={item.label}
                      src={item.icon}
                      alt={item.label}
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