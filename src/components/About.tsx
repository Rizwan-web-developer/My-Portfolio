"use client";

export default function About() {
  return (
    <section className="py-20 md:py-32" id="about">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-10 md:gap-20 items-center">
        <div>
          <img
            className="w-full rounded-xl"
            src="/Astronotes.png"
            alt="Astronaut drifting through a nebula with deep indigo and neon teal lighting"
          />
        </div>
        <div className="space-y-6 md:space-y-8">
          <h2 className="text-3xl md:text-[48px] font-bold leading-tight tracking-tight text-text-primary">
            Engineering Digital <span className="text-primary">Ecosystems</span>
          </h2>
          <p className="text-base md:text-[18px] leading-relaxed text-text-secondary">
            I am a Full Stack MERN Developer passionate about building scalable, high-performance web applications with clean code and exceptional user experiences.
          </p>
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            <div className="glass-card p-4 md:p-6 rounded-xl border-l-4 border-primary">
              <h4 className="text-2xl md:text-[32px] font-semibold text-text-primary">5+</h4>
              <p className="text-[10px] md:text-[12px] font-semibold tracking-[0.1em] text-text-secondary uppercase">Years Experience</p>
            </div>
            <div className="glass-card p-4 md:p-6 rounded-xl border-l-4 border-secondary">
              <h4 className="text-2xl md:text-[32px] font-semibold text-text-primary">Full Stack</h4>
              <p className="text-[10px] md:text-[12px] font-semibold tracking-[0.1em] text-text-secondary uppercase">Specialty</p>
            </div>
          </div>
          <p className="text-sm md:text-[16px] leading-relaxed text-text-secondary">
            I turn complex ideas into seamless, high-impact web experiences — building modern, scalable, and lightning-fast applications that make a difference.
          </p>
        </div>
      </div>
    </section>
  );
}
