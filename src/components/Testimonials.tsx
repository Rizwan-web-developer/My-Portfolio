"use client";

const testimonials = [
  {
    quote: "Muhammad transformed our online presence completely. The website he built is stunning and incredibly fast. Customer inquiries increased by 300% within the first month.",
    name: "Sarah Mitchell",
    role: "CEO, Lumina Interiors",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    quote: "Working with Muhammad was a pleasure. He understood our construction business needs perfectly and delivered a professional website that truly represents our brand.",
    name: "David Chen",
    role: "Director, Apex Construction",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    quote: "Muhammad's technical expertise and creative vision brought our marketing agency's vision to life. His attention to detail and clean code architecture is exceptional.",
    name: "Emma Rodriguez",
    role: "Founder, Oktopus Tech",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    quote: "Exceptional problem-solving skills. He delivered a complex MERN application ahead of schedule with flawless execution. Would definitely work with him again.",
    name: "James Wilson",
    role: "CTO, Nexus Digital",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    quote: "Muhammad's ability to handle both frontend beauty and backend logic is rare. He built us a scalable solution that handles thousands of daily users effortlessly.",
    name: "Priya Sharma",
    role: "Tech Lead, CloudSync",
    image: "https://randomuser.me/api/portraits/women/90.jpg",
  },
  {
    quote: "The most versatile developer we've worked with. His deep understanding of the MERN stack and modern best practices made our project a huge success.",
    name: "Alex Thompson",
    role: "Product Manager, DevForge",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
  },
];

export default function Testimonials() {
  const doubled = [...testimonials, ...testimonials];

  return (
    <section className="py-20 md:py-32 bg-surface-deep relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-secondary/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-4 md:px-6 mb-10 md:mb-16">
        <h2 className="text-3xl md:text-[48px] font-bold leading-tight tracking-tight text-text-primary">
          Global <span className="text-primary">Recognition</span>
        </h2>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-surface-deep to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-surface-deep to-transparent z-10 pointer-events-none" />

        <div className="flex gap-6 animate-testimonial-scroll">
          {doubled.map((t, i) => (
            <div
              key={`${t.name}-${i}`}
              className="flex-shrink-0 w-[300px] md:w-[400px] glass-card p-6 md:p-8 rounded-2xl space-y-4 md:space-y-5 group hover:border-primary/30 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10">
                <div className="flex text-primary mb-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                      star
                    </span>
                  ))}
                </div>
                <p className="text-[13px] md:text-[14px] leading-relaxed text-text-secondary italic">
                  &quot;{t.quote}&quot;
                </p>
                <div className="flex items-center gap-3 mt-4 md:mt-5 pt-4 md:pt-5 border-t border-white/5">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-10 h-10 rounded-full border border-primary/20 object-cover"
                  />
                  <div>
                    <p className="text-[13px] md:text-[14px] font-bold text-text-primary">{t.name}</p>
                    <p className="text-[10px] md:text-[11px] font-semibold tracking-[0.1em] text-text-secondary">{t.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
