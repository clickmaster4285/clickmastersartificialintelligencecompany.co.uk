import Link from "next/link";

const STEPS = [
  {
    title: "Discovery and Requirements",
    desc: "We workshop goals, users and constraints, then define scope, timeline and budget.",
  },
  {
    title: "UI/UX Design and Prototyping",
    desc: "Clickable prototypes validate the experience before a line of production code is written.",
  },
  {
    title: "Agile Development and Testing",
    desc: "Two-week sprints, automated testing and weekly demos keep quality high and surprises low.",
  },
  {
    title: "Cloud Deployment and Launch",
    desc: "Secure CI/CD pipelines and cloud infrastructure take your product live smoothly.",
  },
  {
    title: "Ongoing Support and Scaling",
    desc: "Monitoring, updates and new features as your business grows.",
    link: { href: "/case-studies", label: "See results in our case studies" },
  },
];

/** Section H: Development process. */
export default function ProcessSection() {
  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="w-full max-w-[1728px] mx-auto bg-white py-16 lg:py-24 px-6 lg:px-[130px]"
    >
      <div className="grid lg:grid-cols-2 gap-6 lg:gap-16 mb-12 lg:mb-16">
        <h2
          id="process-heading"
          className="font-bold text-[30px] leading-[40px] lg:text-[42px] lg:leading-[52px] text-[#333333]"
          style={{ fontFamily: "Garamond, serif" }}
        >
          Our Software Development Process:{" "}
          <span className="italic font-normal text-[#A000DF]">From Idea to Launch</span>
        </h2>
        <p className="text-sm sm:text-[15px] text-gray-600 leading-relaxed lg:pt-2">
          A clear, agile process keeps your project on time and on budget. Most
          MVPs are delivered in 6 to 8 weeks, and larger enterprise builds
          typically take 3 to 6 months.
        </p>
      </div>

      <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 border-t border-dashed border-[#AF00E8]/50 pt-10">
        {STEPS.map((step, i) => (
          <li key={step.title} className="relative">
            <span
              aria-hidden="true"
              className="absolute -top-[52px] left-0 w-5 h-5 rounded-full bg-[#A000DF] border-4 border-white shadow"
            />
            <h3 className="font-serif font-bold text-lg text-[#1a1a1a] leading-snug mb-2">
              {i + 1}. {step.title}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {step.desc}
              {step.link && (
                <>
                  {" "}
                  <Link href={step.link.href} className="underline text-[#A000DF] hover:opacity-80">
                    {step.link.label}
                  </Link>
                  .
                </>
              )}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
