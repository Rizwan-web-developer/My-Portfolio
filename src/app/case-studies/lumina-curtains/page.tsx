import Link from "next/link";

export const metadata = {
  title: "Lumina Curtains Case Study | Muhammad Rizwan",
  description: "Built an AI-Powered B2B Curtains Portfolio Website from Scratch",
};

export default function LuminaCurtainsCaseStudy() {
  return (
    <div className="min-h-screen bg-[#0b0e14]">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 glass-card border-b border-white/10">
        <nav className="flex justify-between items-center px-4 md:px-6 py-4 max-w-[1280px] mx-auto">
          <Link href="/" className="flex items-center gap-2">
            <img src="/logo.jpeg" alt="Muhammad Rizwan" className="w-10 h-10 rounded-full border border-primary/30 object-cover" />
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
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <Link href="/#projects" className="hover:text-primary transition-colors">Our Work</Link>
            <span>/</span>
            <span className="text-text-primary">Lumina Curtains</span>
          </nav>
        </div>
      </div>

      {/* Hero Block */}
      <section className="px-4 md:px-6 pb-12 md:pb-20">
        <div className="max-w-[1280px] mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 mb-6">
            E-Commerce · Home Décor · B2B
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-text-primary mb-4 leading-tight">
            Lumina Curtains
            <br />
            <span className="text-primary">Case Study</span>
          </h1>
          <p className="text-lg md:text-2xl text-text-secondary max-w-3xl mb-10">
            Built an AI-Powered B2B Curtains Portfolio Website — Solo, in 3 Days
          </p>
          <div className="rounded-2xl overflow-hidden border border-white/10">
            <img src="/Lumina Curtains.png" alt="Lumina Curtains Website Mockup" className="w-full aspect-video object-cover" />
          </div>
        </div>
      </section>

      {/* Summary Card */}
      <section className="px-4 md:px-6 pb-16 md:pb-24">
        <div className="max-w-[1280px] mx-auto">
          <div className="glass-card rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-10">
              {/* Left - Summary */}
              <div>
                <h2 className="text-2xl font-bold mb-4">Project Summary</h2>
                <p className="text-text-secondary leading-relaxed mb-6">
                  Lumina Curtains, a B2B curtain manufacturer and supplier, needed a professional digital presence to showcase their extensive product range to distributors, interior designers, and retailers. I designed and developed the complete portfolio website solo entirely using AI-assisted workflows — delivering a polished, conversion-ready platform in just 3 days.
                </p>
                <div className="glass-card p-5 rounded-xl border-l-4 border-primary">
                  <p className="text-sm text-text-secondary italic leading-relaxed">
                    &quot;Muhammad delivered our website in just 3 days — something we thought would take weeks. The AI-driven approach was impressive; the quality didn&apos;t suffer at all. Our distributors now have a beautiful catalog to browse, and inquiries have increased significantly.&quot;
                  </p>
                  <div className="mt-3">
                    <p className="text-sm font-bold text-text-primary">Ahmed Khan</p>
                    <p className="text-xs text-text-secondary">Director, Lumina Curtains</p>
                  </div>
                </div>
              </div>

              {/* Right - Stats */}
              <div className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div className="glass-card p-5 rounded-xl text-center">
                    <p className="text-3xl font-extrabold text-primary">1</p>
                    <p className="text-xs text-text-secondary mt-1">Developer</p>
                  </div>
                  <div className="glass-card p-5 rounded-xl text-center">
                    <p className="text-3xl font-extrabold text-primary">3</p>
                    <p className="text-xs text-text-secondary mt-1">Days Delivery</p>
                  </div>
                  <div className="glass-card p-5 rounded-xl text-center">
                    <p className="text-3xl font-extrabold text-primary">12+</p>
                    <p className="text-xs text-text-secondary mt-1">Curtain Categories</p>
                  </div>
                  <div className="glass-card p-5 rounded-xl text-center">
                    <p className="text-3xl font-extrabold text-primary">100%</p>
                    <p className="text-xs text-text-secondary mt-1">AI-Assisted Build</p>
                  </div>
                </div>
                <div className="glass-card p-5 rounded-xl">
                  <p className="text-xs text-text-secondary uppercase tracking-wider mb-2">Technologies Used</p>
                  <div className="flex flex-wrap gap-2">
                    {["Next.js", "Tailwind CSS", "AI Tools", "Figma", "Vercel"].map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-primary/10 text-primary rounded-lg text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="glass-card p-5 rounded-xl">
                  <p className="text-xs text-text-secondary uppercase tracking-wider mb-1">Engagement Model</p>
                  <p className="text-sm font-medium text-text-primary">AI-Assisted Development</p>
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
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">01</span>
              <h2 className="text-2xl md:text-3xl font-bold mt-2 mb-4">About the Client</h2>
            </div>
            <div className="md:col-span-2">
              <p className="text-text-secondary leading-relaxed text-lg">
                Lumina Curtains is a B2B curtain manufacturer and supplier based in Pakistan, specializing in high-quality window treatments for distributors, interior designers, and retailers. With a product range spanning sheer curtains, blackout drapes, velvet collections, linen fabrics, motorized smart curtains, and custom printed patterns, Lumina has been serving the home décor industry for over a decade. They needed a digital platform that matched the quality and breadth of their physical catalog.
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
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">02</span>
              <h2 className="text-2xl md:text-3xl font-bold mt-2 mb-4">The Challenge</h2>
            </div>
            <div className="md:col-span-2 space-y-6">
              <p className="text-text-secondary leading-relaxed text-lg">
                Lumina Curtains had virtually no digital presence. Their product information was scattered across PDF catalogs and WhatsApp messages, making it difficult for potential B2B buyers to explore their range independently. Distributors and designers had to request physical catalogs or schedule calls just to see what was available.
              </p>
              <p className="text-text-secondary leading-relaxed text-lg">
                The existing approach was unsustainable for growth. Competitors with modern websites were capturing digital-first buyers, and Lumina&apos;s absence online was translating into missed opportunities. They needed a comprehensive, visually rich portfolio site that could serve as their 24/7 digital showroom — but traditional development timelines and costs were prohibitive for a fast go-to-market.
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
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">03</span>
              <h2 className="text-2xl md:text-3xl font-bold mt-2 mb-4">The Solution</h2>
            </div>
            <div className="md:col-span-2 space-y-6">
              <p className="text-text-secondary leading-relaxed text-lg">
                I adopted an AI-first development approach, leveraging AI tools across design, content generation, and code development. This allowed me to rapidly prototype layouts, generate product descriptions, and build responsive components — compressing what would typically be a 12-16 week project into just 3 days without compromising quality.
              </p>

              {/* Team/Tools Strip */}
              <div className="glass-card p-6 rounded-2xl">
                <p className="text-xs text-text-secondary uppercase tracking-wider mb-3">Team & Tools Used</p>
                <div className="flex flex-wrap gap-3">
                  {[
                    { name: "AI Design Assistant", icon: "🎨" },
                    { name: "AI Code Generator", icon: "⚡" },
                    { name: "Next.js Framework", icon: "⚛️" },
                    { name: "Tailwind CSS", icon: "🎯" },
                    { name: "Figma", icon: "🖌️" },
                    { name: "Vercel Hosting", icon: "🚀" },
                  ].map((tool) => (
                    <div key={tool.name} className="flex items-center gap-2 px-4 py-2 bg-surface-container-high rounded-xl">
                      <span>{tool.icon}</span>
                      <span className="text-sm font-medium">{tool.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs text-text-secondary uppercase tracking-wider mb-3">All Technologies Used</p>
                <div className="flex flex-wrap gap-2">
                  {["Next.js", "React", "Tailwind CSS", "TypeScript", "AI Tools", "Figma", "Vercel", "Git"].map((tech) => (
                    <span key={tech} className="px-4 py-2 bg-primary/10 text-primary rounded-xl text-sm font-medium">
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
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">04</span>
              <h2 className="text-2xl md:text-3xl font-bold mt-2 mb-4">The Outcome</h2>
            </div>
            <div className="md:col-span-2 space-y-8">
              {/* Full Width Image */}
              <div className="rounded-2xl overflow-hidden border border-white/10">
                <img src="/Lumina Curtains.png" alt="Lumina Curtains Final Result" className="w-full aspect-video object-cover" />
              </div>

              <p className="text-text-secondary leading-relaxed text-lg">
                The final delivery was a complete, multi-category curtain portfolio website that effectively showcases every product line with visuals, specifications, and clear inquiry paths for B2B buyers. The AI-driven workflow not only accelerated delivery but also ensured consistency across all 12+ curtain categories — from sheer voiles to motorized smart curtains.
              </p>

              <div>
                <h3 className="text-lg font-bold mb-4">Key Deliverables</h3>
                <ul className="space-y-3">
                  {[
                    "12+ dedicated curtain category pages with rich visuals and specs",
                    "Responsive design optimized for desktop, tablet, and mobile",
                    "B2B inquiry form with direct email integration",
                    "Product catalog with filtering by type, material, and application",
                    "SEO-optimized structure for organic discoverability",
                    "Fast-loading pages with optimized image delivery",
                    "Professional brand identity consistent across all pages",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-text-secondary">
                      <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          <div className="glass-card rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-2">View the Live Website</h3>
              <p className="text-text-secondary">See the final result — a complete B2B curtain portfolio built entirely with AI-assisted development.</p>
            </div>
            <div className="flex gap-4 shrink-0">
              <a
                href="https://lumina-curtains.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-primary text-on-primary font-bold rounded-xl neon-glow-teal hover:scale-105 transition-all inline-flex items-center gap-2"
              >
                Visit Website
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <a
                href="mailto:rk3113798@gmail.com"
                className="px-6 py-3 border border-white/20 text-text-primary font-bold rounded-xl hover:bg-white/5 transition-all"
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
              href="/#projects"
              className="glass-card p-6 rounded-lg hover:border-primary/30 transition-all group flex items-center gap-4"
            >
              <svg className="w-8 h-8 text-text-secondary group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <div>
                <p className="text-xs text-text-secondary uppercase tracking-wider">Previous</p>
                <p className="text-lg font-bold group-hover:text-primary transition-colors">All Projects</p>
              </div>
            </Link>
            <Link
              href="/case-studies/apex-construction"
              className="glass-card p-6 rounded-lg hover:border-primary/30 transition-all group flex items-center gap-4 justify-end text-right"
            >
              <div>
                <p className="text-xs text-text-secondary uppercase tracking-wider">Next</p>
                <p className="text-lg font-bold group-hover:text-primary transition-colors">Apex Construction</p>
              </div>
              <svg className="w-8 h-8 text-text-secondary group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-4 md:px-6 pb-16 md:pb-24">
        <div className="max-w-[1280px] mx-auto">
          <div className="glass-card rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-primary/10 blur-[100px] rounded-full" />
            <h2 className="text-2xl md:text-4xl font-bold mb-4 relative z-10">
              Facing a similar challenge?
            </h2>
            <p className="text-text-secondary text-lg mb-8 relative z-10">
              See how we can help bring your vision to life with AI-powered development.
            </p>
            <a
              href="mailto:rk3113798@gmail.com"
              className="inline-block px-8 py-4 bg-primary text-on-primary font-bold rounded-xl neon-glow-teal hover:scale-105 transition-all relative z-10"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
