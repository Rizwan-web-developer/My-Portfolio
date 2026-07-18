import Link from "next/link";

export const metadata = {
  title: "PayFlow Case Study | Muhammad Rizwan",
  description: "A Personalized, Multi-Merchant Invoicing Platform — Built Solo in 1 Day",
};

export default function PayFlowCaseStudy() {
  return (
    <div className="min-h-screen bg-[#0b0e14]">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 glass-card border-b border-white/10">
        <nav className="flex justify-between items-center px-4 md:px-6 py-4 max-w-[1280px] mx-auto">
          <Link href="/" className="flex items-center gap-2">
            <img src="/logo.jpeg" alt="Muhammad Rizwan" className="w-10 h-10 rounded-full border border-[#a3e635]/30 object-cover" />
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
            <Link href="/" className="hover:text-[#a3e635] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/#projects" className="hover:text-[#a3e635] transition-colors">Our Work</Link>
            <span>/</span>
            <span className="text-text-primary">PayFlow</span>
          </nav>
        </div>
      </div>

      {/* Hero Block */}
      <section className="px-4 md:px-6 pb-12 md:pb-20">
        <div className="max-w-[1280px] mx-auto">
          <span className="inline-block px-4 py-1.5 rounded text-xs font-bold uppercase tracking-wider bg-[#a3e635]/10 text-[#a3e635] border border-[#a3e635]/20 mb-6">
            SaaS · Fintech · Multi-Merchant · Solo Project
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-text-primary mb-4 leading-[1.1] uppercase tracking-tight">
            PayFlow
          </h1>
          <p className="text-lg md:text-2xl text-text-secondary max-w-3xl mb-10 font-medium">
            A Personalized, Multi-Merchant Invoicing Platform — Built Solo in 1 Day
          </p>
          <div className="rounded-lg overflow-hidden border border-white/10">
            <img src="/Payflow.png" alt="PayFlow Dashboard Mockup" className="w-full aspect-video object-cover" />
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
                  PayFlow is a personalized multi-merchant invoicing platform that lets businesses accept payments through whichever providers their clients prefer — Stripe, PayPal, Razorpay, Square, or direct bank transfer. I designed, developed, and shipped the entire application solo in just 1 day, building a flexible multi-gateway architecture from scratch.
                </p>
                <div className="glass-card p-5 rounded border-l-4 border-[#a3e635]">
                  <p className="text-sm text-text-secondary italic leading-relaxed">
                    &quot;One day. Five payment gateways. One unified invoicing flow. The intensity of shipping a multi-gateway fintech app in a single day was unreal — every decision had to be fast and precise. But seeing a client choose between Stripe and PayPal on a live invoice and have it route perfectly — that was the payoff.&quot;
                  </p>
                  <div className="mt-3">
                    <p className="text-sm font-bold text-text-primary">Muhammad Rizwan</p>
                    <p className="text-xs text-text-secondary">Sole Developer, PayFlow</p>
                  </div>
                </div>
              </div>

              {/* Right - Stats */}
              <div className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div className="glass-card p-5 rounded text-center border border-white/5">
                    <p className="text-3xl font-extrabold text-[#a3e635]" style={{ fontFamily: "JetBrains Mono" }}>1</p>
                    <p className="text-xs text-text-secondary mt-1 uppercase tracking-wider">Developer</p>
                  </div>
                  <div className="glass-card p-5 rounded text-center border border-white/5">
                    <p className="text-3xl font-extrabold text-[#a3e635]" style={{ fontFamily: "JetBrains Mono" }}>1</p>
                    <p className="text-xs text-text-secondary mt-1 uppercase tracking-wider">Day Build</p>
                  </div>
                  <div className="glass-card p-5 rounded text-center border border-white/5">
                    <p className="text-3xl font-extrabold text-[#a3e635]" style={{ fontFamily: "JetBrains Mono" }}>5</p>
                    <p className="text-xs text-text-secondary mt-1 uppercase tracking-wider">Payment Gateways</p>
                  </div>
                  <div className="glass-card p-5 rounded text-center border border-white/5">
                    <p className="text-3xl font-extrabold text-[#a3e635]" style={{ fontFamily: "JetBrains Mono" }}>100%</p>
                    <p className="text-xs text-text-secondary mt-1 uppercase tracking-wider">Solo Build</p>
                  </div>
                </div>
                <div className="glass-card p-5 rounded border border-white/5">
                  <p className="text-xs text-text-secondary uppercase tracking-wider mb-2">Integrations Used</p>
                  <div className="flex flex-wrap gap-2">
                    {["Stripe", "PayPal", "Razorpay", "Square", "Bank Transfer"].map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-[#a3e635]/10 text-[#a3e635] rounded text-xs font-bold uppercase tracking-wider" style={{ fontFamily: "JetBrains Mono" }}>
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
              <span className="text-xs font-bold text-[#a3e635] uppercase tracking-widest">01</span>
              <h2 className="text-2xl md:text-3xl font-bold mt-2 mb-4 uppercase tracking-wide">About the Product</h2>
            </div>
            <div className="md:col-span-2">
              <p className="text-text-secondary leading-relaxed text-lg">
                PayFlow is a personalized invoicing platform built for individual businesses that need flexibility in how they get paid. Unlike traditional invoicing tools locked to a single payment gateway, PayFlow lets each business connect whichever providers they actually use — Stripe, PayPal, Razorpay, Square, or direct bank transfer — and gives their clients the freedom to choose their preferred payment method at checkout. It&apos;s invoicing designed around how real businesses actually work: multiple providers, multiple preferences, one unified flow.
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
              <span className="text-xs font-bold text-[#a3e635] uppercase tracking-widest">02</span>
              <h2 className="text-2xl md:text-3xl font-bold mt-2 mb-4 uppercase tracking-wide">The Challenge</h2>
            </div>
            <div className="md:col-span-2 space-y-6">
              <p className="text-text-secondary leading-relaxed text-lg">
                Most invoicing tools lock businesses into a single payment gateway. If a business uses Stripe but their client prefers PayPal, the client has to create a PayPal account, convert currency, or simply abandon the payment. This friction leads to delayed payments, abandoned invoices, and lost revenue — especially in cross-border B2B transactions where regional payment preferences vary wildly.
              </p>
              <p className="text-text-secondary leading-relaxed text-lg">
                Businesses needed a personalized system flexible enough to support multiple payment methods simultaneously — one where the business connects the providers they use, and the client sees only the options available to them at checkout. No workarounds, no separate tools for each gateway, no payment-method friction. Just a single invoicing flow that adapts to both parties.
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
              <span className="text-xs font-bold text-[#a3e635] uppercase tracking-widest">03</span>
              <h2 className="text-2xl md:text-3xl font-bold mt-2 mb-4 uppercase tracking-wide">The Solution</h2>
            </div>
            <div className="md:col-span-2 space-y-6">
              <p className="text-text-secondary leading-relaxed text-lg">
                I built the entire multi-merchant invoicing system solo in just 1 day — designing a flexible gateway architecture that supports Stripe, PayPal, Razorpay, Square, and bank transfer out of the box. Each business connects only the providers they use, and the invoice payment page dynamically renders the available options. The backend routes payments to the correct merchant account based on the client&apos;s selection, with automatic status updates via webhooks.
              </p>

              {/* Integrations Strip */}
              <div className="glass-card p-6 rounded-lg border border-white/5">
                <p className="text-xs text-text-secondary uppercase tracking-wider mb-3">Integrations Used</p>
                <div className="flex flex-wrap gap-3">
                  {[
                    { name: "Stripe", icon: "💳" },
                    { name: "PayPal", icon: "🅿️" },
                    { name: "Razorpay", icon: "🔷" },
                    { name: "Square", icon: "◼️" },
                    { name: "Bank Transfer", icon: "🏦" },
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
                  {["Next.js", "React", "TypeScript", "Stripe API", "PayPal API", "Razorpay API", "Square API", "Tailwind CSS", "PostgreSQL", "Git"].map((tech) => (
                    <span key={tech} className="px-4 py-2 bg-[#a3e635]/10 text-[#a3e635] rounded text-sm font-bold uppercase tracking-wider" style={{ fontFamily: "JetBrains Mono" }}>
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
              <span className="text-xs font-bold text-[#a3e635] uppercase tracking-widest">04</span>
              <h2 className="text-2xl md:text-3xl font-bold mt-2 mb-4 uppercase tracking-wide">The Outcome</h2>
            </div>
            <div className="md:col-span-2 space-y-8">
              {/* Full Width Image */}
              <div className="rounded-lg overflow-hidden border border-white/10">
                <img src="/Payflow.png" alt="PayFlow Dashboard Final Result" className="w-full aspect-video object-cover" />
              </div>

              <p className="text-text-secondary leading-relaxed text-lg">
                The final delivery is a fast, flexible invoicing platform where each business can accept payments through whichever providers their clients prefer — with zero payment-method friction. Businesses sign up, connect their preferred gateways, create invoices, and let clients choose how to pay. Invoice statuses update automatically from &quot;Pending&quot; to &quot;Paid&quot; once payment is confirmed, and the entire flow is designed to feel seamless for both parties.
              </p>

              <div>
                <h3 className="text-lg font-bold mb-4 uppercase tracking-wide">Key Features</h3>
                <ul className="space-y-3">
                  {[
                    "Multi-merchant support — Stripe, PayPal, Razorpay, Square, Bank Transfer",
                    "Personalized setup — each business connects only the providers they use",
                    "Client-side payment method selection at checkout",
                    "Unified invoice creation and one-click send flow",
                    "Automatic invoice status updates (Pending → Paid) via webhooks",
                    "Built and shipped end-to-end in a single day",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-text-secondary">
                      <svg className="w-5 h-5 text-[#a3e635] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              <p className="text-text-secondary">See the final result — a multi-merchant invoicing app built solo in 1 day.</p>
            </div>
            <div className="flex gap-4 shrink-0">
              <a
                href="https://invoice-with-multiple-checkout.vercel.app/login"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#a3e635] text-[#0b0e14] font-bold rounded hover:scale-105 transition-all uppercase tracking-wider text-sm inline-flex items-center gap-2"
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
              href="/case-studies/nvoice"
              className="glass-card p-6 rounded-lg hover:border-[#a3e635]/30 transition-all group flex items-center gap-4"
            >
              <svg className="w-8 h-8 text-text-secondary group-hover:text-[#a3e635] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <div>
                <p className="text-xs text-text-secondary uppercase tracking-wider">Previous</p>
                <p className="text-lg font-bold group-hover:text-[#a3e635] transition-colors">Nvoice</p>
              </div>
            </Link>
            <Link
              href="/#projects"
              className="glass-card p-6 rounded-lg hover:border-[#a3e635]/30 transition-all group flex items-center gap-4 justify-end text-right"
            >
              <div>
                <p className="text-xs text-text-secondary uppercase tracking-wider">Next</p>
                <p className="text-lg font-bold group-hover:text-[#a3e635] transition-colors">All Projects</p>
              </div>
              <svg className="w-8 h-8 text-text-secondary group-hover:text-[#a3e635] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-[#a3e635]/10 blur-[100px] rounded-full" />
            <h2 className="text-2xl md:text-4xl font-bold mb-4 relative z-10 uppercase tracking-wide">
              Need a payment-flexible invoicing system?
            </h2>
            <p className="text-text-secondary text-lg mb-8 relative z-10">
              Let&apos;s build your multi-gateway invoicing platform — from concept to deployment.
            </p>
            <a
              href="mailto:rk3113798@gmail.com"
              className="inline-block px-8 py-4 bg-[#a3e635] text-[#0b0e14] font-bold rounded hover:scale-105 transition-all relative z-10 uppercase tracking-wider text-sm"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
