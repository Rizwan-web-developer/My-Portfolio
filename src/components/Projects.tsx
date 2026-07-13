"use client";

const projects = [
  {
    title: "Lumina Curtains",
    description: "A premium website for custom curtains and window treatments. Built with modern web technologies to deliver a seamless browsing experience with elegant product showcases.",
    tags: ["Next.js", "Tailwind"],
    link: "https://lumina-curtains.vercel.app/",
    image: "/Lumina Curtains.png",
  },
  {
    title: "Apex Construction",
    description: "A professional construction company website featuring project portfolios, service listings, and client testimonials. Designed to showcase build quality and establish trust with potential clients.",
    tags: ["React", "Node.js", "Construction"],
    link: "https://apex-construction-group-one.vercel.app/",
    image: "/Apex construction group.png",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-surface-container-lowest">
      {/* Header */}
      <div className="py-16 md:py-32 max-w-[1280px] mx-auto px-4 md:px-6">
        <div className="text-center">
          <span className="text-[12px] font-semibold tracking-[0.1em] text-primary uppercase">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-[48px] font-bold leading-tight tracking-tight text-text-primary">
            Recent Deployments
          </h2>
        </div>
      </div>

      {/* Full Screen Project Slides */}
      {projects.map((project, index) => (
        <div
          key={project.title}
          className="flex items-center justify-center px-4 md:px-6 py-10 md:py-16 border-b border-white/5"
        >
          <div className="max-w-[1280px] mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
            {/* Image Side */}
            <div className={`rounded-2xl overflow-hidden ${index % 2 === 0 ? "order-1" : "order-1 md:order-2"}`}>
              <div className="w-full aspect-video relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <span className="px-6 py-3 bg-primary text-on-primary font-bold rounded-lg text-sm hover:scale-105 transition-transform">
                      View Project ↗
                    </span>
                  </a>
                )}
                {!project.link && (
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="px-6 py-3 bg-surface-container-high text-text-secondary font-bold rounded-lg text-sm border border-white/10">
                      Coming Soon
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Content Side */}
            <div className={`space-y-6 ${index % 2 === 0 ? "order-2" : "order-2 md:order-1"}`}>
              <div className="flex gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-[10px] font-semibold uppercase tracking-[0.1em]" style={{ fontFamily: "JetBrains Mono" }}>
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-2xl md:text-[40px] font-bold text-text-primary leading-tight">
                {project.title}
              </h3>
              <p className="text-sm md:text-[18px] leading-relaxed text-text-secondary">
                {project.description}
              </p>
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-on-primary font-bold rounded-lg neon-glow-teal hover:scale-105 transition-all text-sm"
                >
                  View Project ↗
                </a>
              ) : (
                <span className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-text-secondary font-bold rounded-lg text-sm cursor-not-allowed">
                  Coming Soon
                </span>
              )}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
