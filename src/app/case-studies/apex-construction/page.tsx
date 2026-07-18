import Link from "next/link";

export const metadata = {
  title: "Apex Construction Case Study | Muhammad Rizwan",
  description: "Built a High-Trust Corporate Website for a Leading Construction Company",
};

export default function ApexConstructionCaseStudy() {
  return (
    <div className="min-h-screen bg-[#0b0e14]">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 glass-card border-b border-white/10">
        <nav className="flex justify-between items-center px-4 md:px-6 py-4 max-w-[1280px] mx-auto">
          <Link href="/" className="flex items-center gap-2">
            <img src="/logo.jpeg" alt="Muhammad Rizwan" className="w-10 h-10 rounded-full border border-[#e67e22]/30 object-cover" />
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
            <Link href="/" className="hover:text-[#e67e22] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/#projects" className="hover:text-[#e67e22] transition-colors">Our Work</Link>
            <span>/</span>
            <span className="text-text-primary">Apex Construction</span>
          </nav>
        </div>
      </div>

      {/* Hero Block */}
      <section className="px-4 md:px-6 pb-12 md:pb-20">
        <div className="max-w-[1280px] mx-auto">
          <span className="inline-block px-4 py-1.5 rounded text-xs font-bold uppercase tracking-wider bg-[#e67e22]/10 text-[#e67e22] border border-[#e67e22]/20 mb-6">
            Construction · B2B · Corporate Website
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-text-primary mb-4 leading-[1.1] uppercase tracking-tight">
            Apex Construction
          </h1>
          <p className="text-lg md:text-2xl text-text-secondary max-w-3xl mb-10 font-medium">
            A Modern Digital Presence for a Growing Construction Company
          </p>
          <div className="rounded-lg overflow-hidden border border-white/10">
            <img src="/Apex construction group.png" alt="Apex Construction Website Mockup" className="w-full aspect-video object-cover" />
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
                  Apex Construction, a mid-sized commercial and residential contracting firm, needed a credible digital presence to win trust from property developers, architects, and corporate clients. We designed and developed a full corporate website in just 3 days — powered entirely by AI-assisted workflows — delivering a polished, lead-generating platform that showcases their portfolio, services, and industry credentials.
                </p>
                <div className="glass-card p-5 rounded border-l-4 border-[#e67e22]">
                  <p className="text-sm text-text-secondary italic leading-relaxed">
                    &quot;Muhammad delivered our website in just 3 days — something we thought would take months. The AI-driven approach was remarkable; every project photo, service page, and credential section looks exactly how we wanted. Developers and architects now reach out with confidence after seeing our site.&quot;
                  </p>
                  <div className="mt-3">
                    <p className="text-sm font-bold text-text-primary">David Harrison</p>
                    <p className="text-xs text-text-secondary">Managing Director, Apex Construction</p>
                  </div>
                </div>
              </div>

              {/* Right - Stats */}
              <div className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div className="glass-card p-5 rounded text-center border border-white/5">
                    <p className="text-3xl font-extrabold text-[#e67e22]">1</p>
                    <p className="text-xs text-text-secondary mt-1 uppercase tracking-wider">Developer</p>
                  </div>
                  <div className="glass-card p-5 rounded text-center border border-white/5">
                    <p className="text-3xl font-extrabold text-[#e67e22]">3</p>
                    <p className="text-xs text-text-secondary mt-1 uppercase tracking-wider">Days Delivery</p>
                  </div>
                  <div className="glass-card p-5 rounded text-center border border-white/5">
                    <p className="text-3xl font-extrabold text-[#e67e22]">50+</p>
                    <p className="text-xs text-text-secondary mt-1 uppercase tracking-wider">Projects Showcased</p>
                  </div>
                  <div className="glass-card p-5 rounded text-center border border-white/5">
                    <p className="text-3xl font-extrabold text-[#e67e22]">100%</p>
                    <p className="text-xs text-text-secondary mt-1 uppercase tracking-wider">AI-Assisted Build</p>
                  </div>
                </div>
                <div className="glass-card p-5 rounded border border-white/5">
                  <p className="text-xs text-text-secondary uppercase tracking-wider mb-2">Technologies Used</p>
                  <div className="flex flex-wrap gap-2">
                    {["React", "Tailwind CSS", "AI Tools", "Figma", "Vercel"].map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-[#e67e22]/10 text-[#e67e22] rounded text-xs font-bold uppercase tracking-wider">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="glass-card p-5 rounded border border-white/5">
                  <p className="text-xs text-text-secondary uppercase tracking-wider mb-1">Engagement Model</p>
                  <p className="text-sm font-bold text-text-primary uppercase tracking-wide">AI-Assisted Development</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About the Client */}
      <section className="px-4 md:px-6 pb-16 md:pb-24">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid md:grid-cols-3 gap-8 md:gap-16">
            <div>
              <span className="text-xs font-bold text-[#e67e22] uppercase tracking-widest">01</span>
              <h2 className="text-2xl md:text-3xl font-bold mt-2 mb-4 uppercase tracking-wide">About the Client</h2>
            </div>
            <div className="md:col-span-2">
              <p className="text-text-secondary leading-relaxed text-lg">
                Apex Construction is a full-service construction and contracting company specializing in commercial and residential projects. With over 15 years of hands-on experience, they handle ground-up builds, major renovations, and everything in between. Their portfolio spans office complexes, retail spaces, luxury homes, and industrial facilities — all executed with a commitment to quality craftsmanship, safety standards, and on-time delivery. Serving property developers, architects, and corporate clients across the region, Apex has built a reputation for reliability and precision in an industry where both are non-negotiable.
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
              <span className="text-xs font-bold text-[#e67e22] uppercase tracking-widest">02</span>
              <h2 className="text-2xl md:text-3xl font-bold mt-2 mb-4 uppercase tracking-wide">The Challenge</h2>
            </div>
            <div className="md:col-span-2 space-y-6">
              <p className="text-text-secondary leading-relaxed text-lg">
                Apex Construction had no web presence whatsoever. Potential clients — property developers evaluating contractors, architects seeking build partners, and corporate facilities managers sourcing bids — had no way to view their portfolio, verify their credentials, or understand the scale of projects they&apos;d completed. The company relied entirely on word-of-mouth referrals and physical presentation decks, leaving their digital credibility entirely in competitors&apos; hands.
              </p>
              <p className="text-text-secondary leading-relaxed text-lg">
                In an industry where visual proof of capability and trust signals matter more than any sales pitch, this gap was costing them real opportunities. They needed a professional, trust-building corporate website that would present their full service range, showcase categorized project work, and capture B2B leads — but traditional development timelines and costs were prohibitive for a fast go-to-market approach.
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
              <span className="text-xs font-bold text-[#e67e22] uppercase tracking-widest">03</span>
              <h2 className="text-2xl md:text-3xl font-bold mt-2 mb-4 uppercase tracking-wide">The Solution</h2>
            </div>
            <div className="md:col-span-2 space-y-6">
              <p className="text-text-secondary leading-relaxed text-lg">
                We adopted an AI-first development approach, leveraging AI tools across design, content generation, and code development to rapidly prototype layouts, generate service descriptions, and build responsive components. What typically takes 8–12 weeks was compressed into just 3 days — without sacrificing the quality, detail, or trust-building elements the construction industry demands.
              </p>

              {/* Team/Tools Strip */}
              <div className="glass-card p-6 rounded-lg border border-white/5">
                <p className="text-xs text-text-secondary uppercase tracking-wider mb-3">Team & Tools Used</p>
                <div className="flex flex-wrap gap-3">
                  {[
                    { name: "AI Design Assistant", icon: "🎨" },
                    { name: "AI Code Generator", icon: "⚡" },
                    { name: "React Framework", icon: "⚛️" },
                    { name: "Tailwind CSS", icon: "🎯" },
                    { name: "Figma", icon: "🖌️" },
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
                  {["React", "Next.js", "Tailwind CSS", "TypeScript", "AI Tools", "Figma", "Vercel", "Git"].map((tech) => (
                    <span key={tech} className="px-4 py-2 bg-[#e67e22]/10 text-[#e67e22] rounded text-sm font-bold uppercase tracking-wider">
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
              <span className="text-xs font-bold text-[#e67e22] uppercase tracking-widest">04</span>
              <h2 className="text-2xl md:text-3xl font-bold mt-2 mb-4 uppercase tracking-wide">The Outcome</h2>
            </div>
            <div className="md:col-span-2 space-y-8">
              {/* Full Width Image */}
              <div className="rounded-lg overflow-hidden border border-white/10">
                <img src="/Apex construction group.png" alt="Apex Construction Final Result" className="w-full aspect-video object-cover" />
              </div>

              <p className="text-text-secondary leading-relaxed text-lg">
                The final delivery was a credible, lead-generating corporate website that presents Apex Construction&apos;s full portfolio and service range clearly to potential B2B clients. Property developers, architects, and corporate buyers can now independently explore past project work, review service capabilities, and submit inquiry forms — creating a 24/7 digital sales funnel that was previously nonexistent.
              </p>

              <div>
                <h3 className="text-lg font-bold mb-4 uppercase tracking-wide">Key Deliverables</h3>
                <ul className="space-y-3">
                  {[
                    "Company overview and about pages with trust signals",
                    "Services showcase — residential, commercial, renovation, project management, civil works",
                    "Categorized project portfolio gallery (completed, ongoing, before/after)",
                    "B2B quote request and project inquiry form with validation",
                    "Team, credentials, and safety certifications section",
                    "SEO-optimized structure for organic discoverability",
                    "Mobile-first responsive design with fast loading",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-text-secondary">
                      <svg className="w-5 h-5 text-[#e67e22] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              <p className="text-text-secondary">See the final result — a professional construction company website built in 3 days.</p>
            </div>
            <div className="flex gap-4 shrink-0">
              <a
                href="https://apex-construction-group-one.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#e67e22] text-white font-bold rounded hover:scale-105 transition-all uppercase tracking-wider text-sm inline-flex items-center gap-2"
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
              href="/case-studies/lumina-curtains"
              className="glass-card p-6 rounded-lg hover:border-[#e67e22]/30 transition-all group flex items-center gap-4"
            >
              <svg className="w-8 h-8 text-text-secondary group-hover:text-[#e67e22] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <div>
                <p className="text-xs text-text-secondary uppercase tracking-wider">Previous</p>
                <p className="text-lg font-bold group-hover:text-[#e67e22] transition-colors">Lumina Curtains</p>
              </div>
            </Link>
            <Link
              href="/case-studies/oktopus-tech"
              className="glass-card p-6 rounded-lg hover:border-[#e67e22]/30 transition-all group flex items-center gap-4 justify-end text-right"
            >
              <div>
                <p className="text-xs text-text-secondary uppercase tracking-wider">Next</p>
                <p className="text-lg font-bold group-hover:text-[#e67e22] transition-colors">Oktopus Tech</p>
              </div>
              <svg className="w-8 h-8 text-text-secondary group-hover:text-[#e67e22] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-[#e67e22]/10 blur-[100px] rounded-full" />
            <h2 className="text-2xl md:text-4xl font-bold mb-4 relative z-10 uppercase tracking-wide">
              Facing a similar challenge?
            </h2>
            <p className="text-text-secondary text-lg mb-8 relative z-10">
              See how we can help build your construction company&apos;s digital presence with AI-powered development.
            </p>
            <a
              href="mailto:rk3113798@gmail.com"
              className="inline-block px-8 py-4 bg-[#e67e22] text-white font-bold rounded hover:scale-105 transition-all relative z-10 uppercase tracking-wider text-sm"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
