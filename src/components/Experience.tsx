"use client";

const experiences = [
  {
    period: "2024 - Present",
    title: "Senior Full Stack Engineer",
    company: "HCL Technologies",
    description: "Architecting scalable cloud solutions and mentoring junior developers in modern MERN practices.",
    color: "primary" as const,
  },
  {
    period: "2023 - 2024",
    title: "Full Stack Developer",
    company: "Oktopus Tech",
    description: "Built and delivered client projects including corporate websites, SaaS platforms, and multi-gateway invoicing applications.",
    color: "secondary" as const,
  },
  {
    period: "2022 - 2023",
    title: "Web Developer Intern",
    company: "Mobisoft Technologies",
    description: "Focused on responsive UI development and optimizing database queries for high-traffic sites.",
    color: "primary" as const,
  },
];

export default function Experience() {
  return (
    <section className="py-20 md:py-32 relative" id="experience">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-[48px] font-bold leading-tight tracking-tight text-text-primary mb-10 md:mb-20 text-center">
          Professional <span className="text-secondary">Journey</span>
        </h2>

        {/* Desktop Timeline */}
        <div className="relative space-y-12 hidden md:block">
          <div className="absolute inset-y-0 left-1/2 -ml-px w-0.5 bg-white/10" />

          {/* Item 1 - Left */}
          <div className="relative flex items-center justify-between">
            <div className="w-5/12">
              <div className="glass-card p-8 rounded-2xl border-r-4 border-primary">
                <span className="text-[12px] font-semibold tracking-[0.1em] text-primary">
                  2024 - Present
                </span>
                <h3 className="text-[32px] font-semibold text-text-primary mt-2">
                  Senior Full Stack Engineer
                </h3>
                <p className="text-secondary text-[16px]">HCL Technologies</p>
                <p className="mt-4 text-text-secondary text-[16px]">
                  Architecting scalable cloud solutions and mentoring junior developers in modern MERN practices.
                </p>
              </div>
            </div>
            <div className="z-20 bg-primary w-4 h-4 rounded-full neon-glow-teal border-4 border-surface" />
            <div className="w-5/12" />
          </div>

          {/* Item 2 - Right */}
          <div className="relative flex items-center justify-between">
            <div className="w-5/12" />
            <div className="z-20 bg-secondary w-4 h-4 rounded-full border-4 border-surface" />
            <div className="w-5/12 text-right">
              <div className="glass-card p-8 rounded-2xl border-l-4 border-secondary inline-block w-full">
                <span className="text-[12px] font-semibold tracking-[0.1em] text-secondary">
                  2023 - 2024
                </span>
                <h3 className="text-[32px] font-semibold text-text-primary mt-2">
                  Full Stack Developer
                </h3>
                <p className="text-secondary text-[16px]">Oktopus Tech</p>
                <p className="mt-4 text-text-secondary text-[16px]">
                  Built and delivered client projects including corporate websites, SaaS platforms, and multi-gateway invoicing applications.
                </p>
              </div>
            </div>
          </div>

          {/* Item 3 - Left */}
          <div className="relative flex items-center justify-between">
            <div className="w-5/12">
              <div className="glass-card p-8 rounded-2xl border-r-4 border-primary">
                <span className="text-[12px] font-semibold tracking-[0.1em] text-primary">
                  2022 - 2023
                </span>
                <h3 className="text-[32px] font-semibold text-text-primary mt-2">
                  Web Developer Intern
                </h3>
                <p className="text-secondary text-[16px]">Mobisoft Technologies</p>
                <p className="mt-4 text-text-secondary text-[16px]">
                  Focused on responsive UI development and optimizing database queries for high-traffic sites.
                </p>
              </div>
            </div>
            <div className="z-20 bg-primary w-4 h-4 rounded-full neon-glow-teal border-4 border-surface" />
            <div className="w-5/12" />
          </div>
        </div>

        {/* Mobile Experience */}
        <div className="md:hidden space-y-8">
          {experiences.map((exp) => (
            <div key={exp.title} className={`glass-card p-6 md:p-8 rounded-2xl border-l-4 ${exp.color === "primary" ? "border-primary" : "border-secondary"}`}>
              <span className={`text-[12px] font-semibold tracking-[0.1em] ${exp.color === "primary" ? "text-primary" : "text-secondary"}`}>
                {exp.period}
              </span>
              <h3 className="text-2xl md:text-[32px] font-semibold text-text-primary mt-2">
                {exp.title}
              </h3>
              <p className="text-secondary text-sm md:text-[16px]">{exp.company}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
