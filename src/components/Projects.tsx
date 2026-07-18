"use client";

import Link from "next/link";

const projects = [
  {
    slug: "lumina-curtains",
    title: "Lumina Curtains",
    description: "A premium website for custom curtains and window treatments. Built with modern web technologies to deliver a seamless browsing experience with elegant product showcases.",
    tags: ["Next.js", "Tailwind"],
    image: "/Lumina Curtains.png",
  },
  {
    slug: "apex-construction",
    title: "Apex Construction",
    description: "A professional construction company website featuring project portfolios, service listings, and client testimonials. Designed to showcase build quality and establish trust with potential clients.",
    tags: ["React", "Node.js", "Construction"],
    image: "/Apex construction group.png",
  },
  {
    slug: "oktopus-tech",
    title: "Oktopus Tech",
    description: "Our own agency website — built solo in 2 weeks. A full-service digital agency site covering services, portfolio, team, and lead generation. The ultimate proof of what one person can ship fast.",
    tags: ["Next.js", "Framer Motion", "Solo Build"],
    image: "/oktopus-tech-image.png",
  },
  {
    slug: "nvoice",
    title: "Nvoice",
    description: "A full B2B invoicing & payments SaaS platform — Admin, Business, and Client roles. Built solo in 1 week with Next.js, PostgreSQL, and Stripe Connect. Ship fast, get paid faster.",
    tags: ["Next.js", "PostgreSQL", "Stripe"],
    image: "/Nvoice.png",
  },
  {
    slug: "payflow",
    title: "PayFlow",
    description: "A personalized multi-merchant invoicing platform supporting Stripe, PayPal, Razorpay, Square, and bank transfer. Built solo in 1 day — zero payment-method friction.",
    tags: ["Next.js", "Multi-Gateway", "1-Day Build"],
    image: "/Payflow.png",
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
            Recent Case Studies
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
              <Link href={`/case-studies/${project.slug}`}>
                <div className="w-full aspect-video relative group cursor-pointer">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="px-6 py-3 bg-primary text-on-primary font-bold rounded-lg text-sm hover:scale-105 transition-transform">
                      View Case Study
                    </span>
                  </div>
                </div>
              </Link>
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
              <Link
                href={`/case-studies/${project.slug}`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-on-primary font-bold rounded-lg neon-glow-teal hover:scale-105 transition-all text-sm"
              >
                View Case Study
              </Link>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
