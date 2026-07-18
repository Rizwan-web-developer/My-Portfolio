import Link from "next/link";

export const metadata = {
  title: "Nvoice Case Study | Muhammad Rizwan",
  description: "A Full B2B Invoicing & Payments Platform — Built Solo in 1 Week",
};

export default function NvoiceCaseStudy() {
  return (
    <div className="min-h-screen bg-[#0b0e14]">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 glass-card border-b border-white/10">
        <nav className="flex justify-between items-center px-4 md:px-6 py-4 max-w-[1280px] mx-auto">
          <Link href="/" className="flex items-center gap-2">
            <img src="/logo.jpeg" alt="Muhammad Rizwan" className="w-10 h-10 rounded-full border border-[#00b894]/30 object-cover" />
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
            <Link href="/" className="hover:text-[#00b894] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/#projects" className="hover:text-[#00b894] transition-colors">Our Work</Link>
            <span>/</span>
            <span className="text-text-primary">Nvoice</span>
          </nav>
        </div>
      </div>

      {/* Hero Block */}
      <section className="px-4 md:px-6 pb-12 md:pb-20">
        <div className="max-w-[1280px] mx-auto">
          <span className="inline-block px-4 py-1.5 rounded text-xs font-bold uppercase tracking-wider bg-[#00b894]/10 text-[#00b894] border border-[#00b894]/20 mb-6">
            SaaS · Fintech · B2B · Solo Project
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-text-primary mb-4 leading-[1.1] uppercase tracking-tight">
            Nvoice
          </h1>
          <p className="text-lg md:text-2xl text-text-secondary max-w-3xl mb-10 font-medium">
            A Full B2B Invoicing &amp; Payments Platform — Built Solo in 1 Week
          </p>
          <div className="rounded-lg overflow-hidden border border-white/10">
            <img src="/Nvoice.png" alt="Nvoice Dashboard Mockup" className="w-full aspect-video object-cover" />
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
                  Nvoice is a complete B2B invoicing and payments SaaS platform with three distinct roles — Admin, Business, and Client. I designed, developed, and deployed the entire application solo in just 1 week, handling everything from the database schema and Stripe Connect integration to the responsive dashboard UI and automated payment webhooks.
                </p>
                <div className="glass-card p-5 rounded border-l-4 border-[#00b894]">
                  <p className="text-sm text-text-secondary italic leading-relaxed">
                    &quot;Shipping a full-featured fintech app solo in one week was intense — every day was a sprint. From database design to Stripe webhooks, every piece had to work together flawlessly. Seeing an invoice go from &apos;Pending&apos; to &apos;Paid&apos; in real time after a test payment — that&apos;s the moment I knew it all came together.&quot;
                  </p>
                  <div className="mt-3">
                    <p className="text-sm font-bold text-text-primary">Muhammad Rizwan</p>
                    <p className="text-xs text-text-secondary">Sole Developer, Nvoice</p>
                  </div>
                </div>
              </div>

              {/* Right - Stats */}
              <div className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div className="glass-card p-5 rounded text-center border border-white/5">
                    <p className="text-3xl font-extrabold text-[#00b894]" style={{ fontFamily: "JetBrains Mono" }}>1</p>
                    <p className="text-xs text-text-secondary mt-1 uppercase tracking-wider">Developer</p>
                  </div>
                  <div className="glass-card p-5 rounded text-center border border-white/5">
                    <p className="text-3xl font-extrabold text-[#00b894]" style={{ fontFamily: "JetBrains Mono" }}>1</p>
                    <p className="text-xs text-text-secondary mt-1 uppercase tracking-wider">Week Delivery</p>
                  </div>
                  <div className="glass-card p-5 rounded text-center border border-white/5">
                    <p className="text-3xl font-extrabold text-[#00b894]" style={{ fontFamily: "JetBrains Mono" }}>3</p>
                    <p className="text-xs text-text-secondary mt-1 uppercase tracking-wider">User Roles</p>
                  </div>
                  <div className="glass-card p-5 rounded text-center border border-white/5">
                    <p className="text-3xl font-extrabold text-[#00b894]" style={{ fontFamily: "JetBrains Mono" }}>100%</p>
                    <p className="text-xs text-text-secondary mt-1 uppercase tracking-wider">Solo Build</p>
                  </div>
                </div>
                <div className="glass-card p-5 rounded border border-white/5">
                  <p className="text-xs text-text-secondary uppercase tracking-wider mb-2">Technologies Used</p>
                  <div className="flex flex-wrap gap-2">
                    {["Next.js", "PostgreSQL", "Stripe API", "cPanel", "TypeScript"].map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-[#00b894]/10 text-[#00b894] rounded text-xs font-bold uppercase tracking-wider" style={{ fontFamily: "JetBrains Mono" }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="glass-card p-5 rounded border border-white/5">
                  <p className="text-xs text-text-secondary uppercase tracking-wider mb-1">Engagement Model</p>
                  <p className="text-sm font-bold text-text-primary uppercase tracking-wide">Solo Product Build</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About the Product */}
      <section className="px-4 md:px-6 pb-16 md:pb-24">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid md:grid-cols-3 gap-8 md:gap-16">
            <div>
              <span className="text-xs font-bold text-[#00b894] uppercase tracking-widest">01</span>
              <h2 className="text-2xl md:text-3xl font-bold mt-2 mb-4 uppercase tracking-wide">About the Product</h2>
            </div>
            <div className="md:col-span-2">
              <p className="text-text-secondary leading-relaxed text-lg">
                Nvoice is a B2B invoicing SaaS platform built to streamline the entire billing lifecycle for businesses. It supports three distinct user roles: <strong className="text-text-primary">Admin</strong> — who has full visibility over all platform activity, businesses, and transactions; <strong className="text-text-primary">Business</strong> — the paying customer who signs up, connects their Stripe account, subscribes to a package, manages clients, and creates/sends invoices; and <strong className="text-text-primary">Client</strong> — the business&apos;s customer who receives invoices, pays directly via Stripe, and triggers automatic status updates. The entire flow is designed to be seamless, secure, and self-service.
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
              <span className="text-xs font-bold text-[#00b894] uppercase tracking-widest">02</span>
              <h2 className="text-2xl md:text-3xl font-bold mt-2 mb-4 uppercase tracking-wide">The Challenge</h2>
            </div>
            <div className="md:col-span-2 space-y-6">
              <p className="text-text-secondary leading-relaxed text-lg">
                B2B businesses needed one unified tool to manage their clients, send professional invoices, and collect payments online — without stitching together separate invoicing software, payment processors, and spreadsheets. The existing landscape forced companies to juggle multiple disconnected tools: one for creating invoices, another for tracking payments, and yet another for client management. This fragmentation created friction, delayed payments, and made record-keeping a headache.
              </p>
              <p className="text-text-secondary leading-relaxed text-lg">
                On top of that, there was no central oversight layer. Platform owners had no way to monitor which businesses were active, what packages they were on, or how transactions were flowing through the system. What was needed was a full three-role platform — Admin, Business, and Client — where every stakeholder has a clear, purpose-built interface, and payments flow directly between parties without intermediaries.
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
              <span className="text-xs font-bold text-[#00b894] uppercase tracking-widest">03</span>
              <h2 className="text-2xl md:text-3xl font-bold mt-2 mb-4 uppercase tracking-wide">The Solution</h2>
            </div>
            <div className="md:col-span-2 space-y-6">
              <p className="text-text-secondary leading-relaxed text-lg">
                I built the entire platform solo in just 1 week — owning every layer from the PostgreSQL database schema and API routes to the responsive dashboard UI and Stripe Connect integration. The architecture was designed around the three-role system from day one, with each role getting its own dedicated interface and permission scope. Stripe Connect was the key technical decision: it allows each business to connect their own Stripe account and receive payments directly, while the platform retains full transaction visibility.
              </p>

              {/* Tech Stack Strip */}
              <div className="glass-card p-6 rounded-lg border border-white/5">
                <p className="text-xs text-text-secondary uppercase tracking-wider mb-3">Tech Stack</p>
                <div className="flex flex-wrap gap-3">
                  {[
                    { name: "Next.js (Full-Stack)", icon: "⚛️" },
                    { name: "PostgreSQL Database", icon: "🗄️" },
                    { name: "Stripe Connect API", icon: "💳" },
                    { name: "cPanel Hosting", icon: "🖥️" },
                    { name: "TypeScript", icon: "📘" },
                    { name: "Tailwind CSS", icon: "🎯" },
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
                  {["Next.js", "React", "TypeScript", "PostgreSQL", "Stripe API", "Stripe Connect", "Tailwind CSS", "cPanel", "Git"].map((tech) => (
                    <span key={tech} className="px-4 py-2 bg-[#00b894]/10 text-[#00b894] rounded text-sm font-bold uppercase tracking-wider" style={{ fontFamily: "JetBrains Mono" }}>
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
              <span className="text-xs font-bold text-[#00b894] uppercase tracking-widest">04</span>
              <h2 className="text-2xl md:text-3xl font-bold mt-2 mb-4 uppercase tracking-wide">The Outcome</h2>
            </div>
            <div className="md:col-span-2 space-y-8">
              {/* Full Width Image */}
              <div className="rounded-lg overflow-hidden border border-white/10">
                <img src="/Nvoice.png" alt="Nvoice Dashboard Final Result" className="w-full aspect-video object-cover" />
              </div>

              <p className="text-text-secondary leading-relaxed text-lg">
                The final delivery is a production-ready invoicing SaaS where businesses can self-onboard, subscribe to a package, connect their Stripe account for direct payouts, manage their client base, send professional invoices, and get paid — all within a single platform. Invoice statuses update automatically from &quot;Pending&quot; to &quot;Paid&quot; via Stripe webhooks, and the Admin dashboard provides full oversight of every business and transaction on the platform.
              </p>

              <div>
                <h3 className="text-lg font-bold mb-4 uppercase tracking-wide">Key Features</h3>
                <ul className="space-y-3">
                  {[
                    "Business self-onboarding with subscription/package purchase",
                    "Stripe account connection for direct payouts to each business",
                    "Client management — create, edit, and view client records",
                    "Invoice creation and one-click send to clients via email",
                    "Secure client-side payment page powered by Stripe",
                    "Automatic invoice status updates (Pending → Paid) via webhooks",
                    "Centralized Admin dashboard with full platform oversight",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-text-secondary">
                      <svg className="w-5 h-5 text-[#00b894] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              <h3 className="text-xl md:text-2xl font-bold uppercase tracking-wide mb-2">View the Live Platform</h3>
              <p className="text-text-secondary">See the final result — a full-featured B2B invoicing SaaS built solo in 1 week.</p>
            </div>
            <div className="flex gap-4 shrink-0">
              <a
                href="https://invoice-sass-web-dnadbfzsl-rizwans-projects-a0fdd088.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#00b894] text-[#0b0e14] font-bold rounded hover:scale-105 transition-all uppercase tracking-wider text-sm inline-flex items-center gap-2"
              >
                Visit Platform
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
              href="/case-studies/oktopus-tech"
              className="glass-card p-6 rounded-lg hover:border-[#00b894]/30 transition-all group flex items-center gap-4"
            >
              <svg className="w-8 h-8 text-text-secondary group-hover:text-[#00b894] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <div>
                <p className="text-xs text-text-secondary uppercase tracking-wider">Previous</p>
                <p className="text-lg font-bold group-hover:text-[#00b894] transition-colors">Oktopus Tech</p>
              </div>
            </Link>
            <Link
              href="/case-studies/payflow"
              className="glass-card p-6 rounded-lg hover:border-[#00b894]/30 transition-all group flex items-center gap-4 justify-end text-right"
            >
              <div>
                <p className="text-xs text-text-secondary uppercase tracking-wider">Next</p>
                <p className="text-lg font-bold group-hover:text-[#00b894] transition-colors">PayFlow</p>
              </div>
              <svg className="w-8 h-8 text-text-secondary group-hover:text-[#00b894] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-[#00b894]/10 blur-[100px] rounded-full" />
            <h2 className="text-2xl md:text-4xl font-bold mb-4 relative z-10 uppercase tracking-wide">
              Need a custom SaaS platform built fast?
            </h2>
            <p className="text-text-secondary text-lg mb-8 relative z-10">
              Let&apos;s build your invoicing, payments, or management tool — from concept to deployment.
            </p>
            <a
              href="mailto:rk3113798@gmail.com"
              className="inline-block px-8 py-4 bg-[#00b894] text-[#0b0e14] font-bold rounded hover:scale-105 transition-all relative z-10 uppercase tracking-wider text-sm"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
