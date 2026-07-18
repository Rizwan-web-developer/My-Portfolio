import Link from "next/link";

export const metadata = {
  title: "Oktopus Tech Case Study | Muhammad Rizwan",
  description: "Designed and Built Our Own Agency Website — Solo, in 2 Weeks",
};

export default function OktopusTechCaseStudy() {
  return (
    <div className="min-h-screen bg-[#0b0e14]">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 glass-card border-b border-white/10">
        <nav className="flex justify-between items-center px-4 md:px-6 py-4 max-w-[1280px] mx-auto">
          <Link href="/" className="flex items-center gap-2">
            <img src="/logo.jpeg" alt="Muhammad Rizwan" className="w-10 h-10 rounded-full border border-[#00cec9]/30 object-cover" />
          </Link>
          <Link
            href="/#projects"
            className="px-5 py-2 text-sm font-medium text-text-secondary hover:text-text-primary border border-white/20 rounded-lg hover:bg-white/5 transition-all"
          >
            ← Back to Projects
          </Link>
        </nav>
      </header>

      {/* Breadcrumb */}
      <div className="pt-20 px-4 md:px-6">
        <div className="max-w-[1280px] mx-auto">
          <nav className="flex items-center gap-2 text-xs text-text-secondary py-4">
            <Link href="/" className="hover:text-[#00cec9] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/#projects" className="hover:text-[#00cec9] transition-colors">Our Work</Link>
            <span>/</span>
            <span className="text-text-primary">Oktopus Tech</span>
          </nav>
        </div>
      </div>

      {/* Hero Block */}
      <section className="px-4 md:px-6 pb-12 md:pb-20">
        <div className="max-w-[1280px] mx-auto">
          <span className="inline-block px-4 py-1.5 rounded text-xs font-bold uppercase tracking-wider bg-[#00cec9]/10 text-[#00cec9] border border-[#00cec9]/20 mb-6">
            Agency Website · Branding · Solo Project
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-text-primary mb-4 leading-[1.1] uppercase tracking-tight">
            Oktopus Tech
          </h1>
          <p className="text-lg md:text-2xl text-text-secondary max-w-3xl mb-10 font-medium">
            Designing and Building Our Own Agency&apos;s Website — Solo, in 2 Weeks
          </p>
          <div className="rounded-lg overflow-hidden border border-white/10">
            <img src="/oktopus-tech-image.png" alt="Oktopus Tech Website Mockup" className="w-full aspect-video object-cover" />
          </div>
        </div>
      </section>

      {/* Summary Card */}
      <section className="px-4 md:px-6 pb-16 md:pb-24">
        <div className="max-w-[1280px] mx-auto">
          <div className="glass-card rounded-lg p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-10">
              {/* Left - Summary */}
              <div>
                <h2 className="text-2xl font-bold mb-4 uppercase tracking-wide">Project Summary</h2>
                <p className="text-text-secondary leading-relaxed mb-6">
                  Oktopus Tech needed a modern, service-rich website that properly represents the full breadth of what the agency offers — from web development and mobile apps to AI-powered solutions and digital marketing. I owned the entire process solo — design, content, and development — and shipped a complete, polished agency website in just 2 weeks.
                </p>
                <div className="glass-card p-5 rounded border-l-4 border-[#00cec9]">
                  <p className="text-sm text-text-secondary italic leading-relaxed">
                    &quot;Building our own site was the ultimate proof of concept. Two weeks, one person, zero compromises. Every service page, every portfolio piece, every animation — handcrafted with full ownership. This is the kind of speed and quality we bring to every client project.&quot;
                  </p>
                  <div className="mt-3">
                    <p className="text-sm font-bold text-text-primary">Muhammad Rizwan</p>
                    <p className="text-xs text-text-secondary">Founder & Developer, Oktopus Tech</p>
                  </div>
                </div>
              </div>

              {/* Right - Stats */}
              <div className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div className="glass-card p-5 rounded text-center border border-white/5">
                    <p className="text-3xl font-extrabold text-[#00cec9]">1</p>
                    <p className="text-xs text-text-secondary mt-1 uppercase tracking-wider">Developer</p>
                  </div>
                  <div className="glass-card p-5 rounded text-center border border-white/5">
                    <p className="text-3xl font-extrabold text-[#00cec9]">2</p>
                    <p className="text-xs text-text-secondary mt-1 uppercase tracking-wider">Weeks Delivery</p>
                  </div>
                  <div className="glass-card p-5 rounded text-center border border-white/5">
                    <p className="text-3xl font-extrabold text-[#00cec9]">6+</p>
                    <p className="text-xs text-text-secondary mt-1 uppercase tracking-wider">Service Pages</p>
                  </div>
                  <div className="glass-card p-5 rounded text-center border border-white/5">
                    <p className="text-3xl font-extrabold text-[#00cec9]">100%</p>
                    <p className="text-xs text-text-secondary mt-1 uppercase tracking-wider">Solo Build</p>
                  </div>
                </div>
                <div className="glass-card p-5 rounded border border-white/5">
                  <p className="text-xs text-text-secondary uppercase tracking-wider mb-2">Technologies Used</p>
                  <div className="flex flex-wrap gap-2">
                    {["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript", "Vercel"].map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-[#00cec9]/10 text-[#00cec9] rounded text-xs font-bold uppercase tracking-wider">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="glass-card p-5 rounded border border-white/5">
                  <p className="text-xs text-text-secondary uppercase tracking-wider mb-1">Engagement Model</p>
                  <p className="text-sm font-bold text-text-primary uppercase tracking-wide">Internal Project</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Oktopus Tech */}
      <section className="px-4 md:px-6 pb-16 md:pb-24">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid md:grid-cols-3 gap-8 md:gap-16">
            <div>
              <span className="text-xs font-bold text-[#00cec9] uppercase tracking-widest">01</span>
              <h2 className="text-2xl md:text-3xl font-bold mt-2 mb-4 uppercase tracking-wide">About Oktopus Tech</h2>
            </div>
            <div className="md:col-span-2">
              <p className="text-text-secondary leading-relaxed text-lg">
                Oktopus Tech is a full-service digital agency offering end-to-end solutions — web development, mobile app development, UI/UX design, branding, digital marketing, and AI-powered tools. We work with startups, SMEs, and established brands to build digital products that perform. From concept to launch, we handle everything under one roof — strategy, design, code, and growth. Our approach combines technical precision with creative thinking, delivering solutions that are both visually striking and functionally robust.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="px-4 md:px-6 pb-16 md:pb-24">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid md:grid-cols-3 gap-8 md:gap-16">
            <div>
              <span className="text-xs font-bold text-[#00cec9] uppercase tracking-widest">02</span>
              <h2 className="text-2xl md:text-3xl font-bold mt-2 mb-4 uppercase tracking-wide">The Challenge</h2>
            </div>
            <div className="md:col-span-2 space-y-6">
              <p className="text-text-secondary leading-relaxed text-lg">
                Our own website was outdated and barely scratched the surface of what we actually do. It listed a couple of services and had a basic contact form — nothing that reflected the full range of capabilities we bring to client projects. Prospective clients landing on the site had no way to understand the depth of our expertise in web development, mobile apps, AI solutions, or digital marketing.
              </p>
              <p className="text-text-secondary leading-relaxed text-lg">
                We needed a complete overhaul — a modern, polished website that showcases every service, highlights past work, and generates qualified leads. The internal deadline was tight: 2 weeks, start to finish. No external team, no extended design sprints — just one person owning the entire build from first wireframe to final deployment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="px-4 md:px-6 pb-16 md:pb-24">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid md:grid-cols-3 gap-8 md:gap-16">
            <div>
              <span className="text-xs font-bold text-[#00cec9] uppercase tracking-widest">03</span>
              <h2 className="text-2xl md:text-3xl font-bold mt-2 mb-4 uppercase tracking-wide">The Solution</h2>
            </div>
            <div className="md:col-span-2 space-y-6">
              <p className="text-text-secondary leading-relaxed text-lg">
                I took full ownership of the project — design, content strategy, and development — working in focused 2-week sprints. Using an AI-assisted workflow, I rapidly prototyped layouts, generated service page copy, and built responsive components. Every decision was self-directed, from the color palette and typography to the animation timing and page structure. The goal was to ship fast without cutting corners.
              </p>

              {/* Team/Tools Strip */}
              <div className="glass-card p-6 rounded-lg border border-white/5">
                <p className="text-xs text-text-secondary uppercase tracking-wider mb-3">Tools Used</p>
                <div className="flex flex-wrap gap-3">
                  {[
                    { name: "AI Design Assistant", icon: "🎨" },
                    { name: "AI Code Generator", icon: "⚡" },
                    { name: "Next.js Framework", icon: "⚛️" },
                    { name: "Tailwind CSS", icon: "🎯" },
                    { name: "Framer Motion", icon: "✨" },
                    { name: "Vercel Hosting", icon: "🚀" },
                  ].map((tool) => (
                    <div key={tool.name} className="flex items-center gap-2 px-4 py-2 bg-surface-container-high rounded">
                      <span>{tool.icon}</span>
                      <span className="text-sm font-medium">{tool.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs text-text-secondary uppercase tracking-wider mb-3">All Technologies Used</p>
                <div className="flex flex-wrap gap-2">
                  {["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "AI Tools", "Figma", "Vercel", "Git"].map((tech) => (
                    <span key={tech} className="px-4 py-2 bg-[#00cec9]/10 text-[#00cec9] rounded text-sm font-bold uppercase tracking-wider">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Outcome */}
      <section className="px-4 md:px-6 pb-16 md:pb-24">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid md:grid-cols-3 gap-8 md:gap-16">
            <div>
              <span className="text-xs font-bold text-[#00cec9] uppercase tracking-widest">04</span>
              <h2 className="text-2xl md:text-3xl font-bold mt-2 mb-4 uppercase tracking-wide">The Outcome</h2>
            </div>
            <div className="md:col-span-2 space-y-8">
              {/* Full Width Image */}
              <div className="rounded-lg overflow-hidden border border-white/10">
                <img src="/oktopus-tech-image.png" alt="Oktopus Tech Final Result" className="w-full aspect-video object-cover" />
              </div>

              <p className="text-text-secondary leading-relaxed text-lg">
                The final delivery is a complete, modern agency website that properly represents Oktopus Tech&apos;s full service offering. Every page — from individual service descriptions to the portfolio showcase and lead-generation contact form — is polished, responsive, and fast-loading. The site now serves as a credible, professional storefront that converts visitors into qualified leads.
              </p>

              <div>
                <h3 className="text-lg font-bold mb-4 uppercase tracking-wide">Key Deliverables</h3>
                <ul className="space-y-3">
                  {[
                    "Homepage showcasing full service range with animated sections",
                    "Individual service pages for web, mobile, design, branding, marketing, and AI",
                    "Portfolio/work section with project showcases",
                    "About/team page with agency story and capabilities",
                    "Contact & lead-generation form with validation",
                    "SEO-optimized structure across all pages",
                    "Mobile-first responsive design with smooth animations",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-text-secondary">
                      <svg className="w-5 h-5 text-[#00cec9] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* View Live Website CTA */}
      <section className="px-4 md:px-6 pb-16 md:pb-24">
        <div className="max-w-[1280px] mx-auto">
          <div className="glass-card rounded-lg p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 border border-white/5">
            <div>
              <h3 className="text-xl md:text-2xl font-bold uppercase tracking-wide mb-2">View the Live Website</h3>
              <p className="text-text-secondary">See the final result — a full agency website built solo in just 2 weeks.</p>
            </div>
            <div className="flex gap-4 shrink-0">
              <a
                href="https://oktopus-tech-j5gg.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#00cec9] text-[#0b0e14] font-bold rounded hover:scale-105 transition-all uppercase tracking-wider text-sm inline-flex items-center gap-2"
              >
                Visit Website
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <a
                href="mailto:rk3113798@gmail.com"
                className="px-6 py-3 border border-white/20 text-text-primary font-bold rounded hover:bg-white/5 transition-all uppercase tracking-wider text-sm"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Next/Previous Navigation */}
      <section className="px-4 md:px-6 pb-16">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid md:grid-cols-2 gap-4">
            <Link
              href="/case-studies/apex-construction"
              className="glass-card p-6 rounded-lg hover:border-[#00cec9]/30 transition-all group flex items-center gap-4"
            >
              <svg className="w-8 h-8 text-text-secondary group-hover:text-[#00cec9] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <div>
                <p className="text-xs text-text-secondary uppercase tracking-wider">Previous</p>
                <p className="text-lg font-bold group-hover:text-[#00cec9] transition-colors">Apex Construction</p>
              </div>
            </Link>
            <Link
              href="/case-studies/nvoice"
              className="glass-card p-6 rounded-lg hover:border-[#00cec9]/30 transition-all group flex items-center gap-4 justify-end text-right"
            >
              <div>
                <p className="text-xs text-text-secondary uppercase tracking-wider">Next</p>
                <p className="text-lg font-bold group-hover:text-[#00cec9] transition-colors">Nvoice</p>
              </div>
              <svg className="w-8 h-8 text-text-secondary group-hover:text-[#00cec9] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-4 md:px-6 pb-16 md:pb-24">
        <div className="max-w-[1280px] mx-auto">
          <div className="glass-card rounded-lg p-10 md:p-16 text-center relative overflow-hidden border border-white/5">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-[#00cec9]/10 blur-[100px] rounded-full" />
            <h2 className="text-2xl md:text-4xl font-bold mb-4 relative z-10 uppercase tracking-wide">
              Want a website like this for your business?
            </h2>
            <p className="text-text-secondary text-lg mb-8 relative z-10">
              Let&apos;s build something exceptional — fast, modern, and built to convert.
            </p>
            <a
              href="mailto:rk3113798@gmail.com"
              className="inline-block px-8 py-4 bg-[#00cec9] text-[#0b0e14] font-bold rounded hover:scale-105 transition-all relative z-10 uppercase tracking-wider text-sm"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
