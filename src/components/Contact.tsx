"use client";

import { useState, type FormEvent } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Full Stack Development",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", service: "Full Stack Development", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="py-20 md:py-32 relative overflow-hidden" id="contact">
      <div className="absolute -right-64 top-0 w-[600px] h-[600px] bg-secondary/10 blur-[150px] rounded-full" />
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-10 md:gap-20 items-center">
        <div className="space-y-6 md:space-y-8">
          <h2 className="text-3xl md:text-[48px] font-bold leading-tight tracking-tight text-text-primary">
            Let&apos;s Work <span className="text-primary">Together</span>
          </h2>
          <p className="text-[18px] leading-relaxed text-text-secondary">
            Have a project in mind? Let&apos;s build something extraordinary. I&apos;m always open to new opportunities and technical challenges.
          </p>
          <div className="relative w-full aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 bg-primary/10 blur-[120px] rounded-full" />
            <img
              className="relative w-full h-full object-contain drop-shadow-[0_0_30px_rgba(80,245,238,0.2)] animate-float"
              src="/Astronotes.png"
              alt="Astronaut drifting through a nebula with deep indigo and neon teal lighting"
            />
          </div>
        </div>

        <div className="glass-card p-6 md:p-10 rounded-3xl space-y-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-[12px] font-semibold tracking-[0.1em] text-text-secondary mb-2 block">Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-surface-container-lowest border border-white/10 rounded-lg p-4 text-text-primary focus:border-primary outline-none transition-all"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="text-[12px] font-semibold tracking-[0.1em] text-text-secondary mb-2 block">Email</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-surface-container-lowest border border-white/10 rounded-lg p-4 text-text-primary focus:border-primary outline-none transition-all"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label className="text-[12px] font-semibold tracking-[0.1em] text-text-secondary mb-2 block">Service Needed</label>
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full bg-surface-container-lowest border border-white/10 rounded-lg p-4 text-text-primary focus:border-primary outline-none transition-all"
              >
                <option>Full Stack Development</option>
                <option>Frontend React UI</option>
                <option>Node.js Backend Architecture</option>
                <option>Consultancy</option>
              </select>
            </div>
            <div>
              <label className="text-[12px] font-semibold tracking-[0.1em] text-text-secondary mb-2 block">Message</label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-surface-container-lowest border border-white/10 rounded-lg p-4 text-text-primary focus:border-primary outline-none transition-all resize-none"
                placeholder="Something in mind?"
              />
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full py-4 bg-primary text-on-primary font-bold rounded-lg neon-glow-teal hover:scale-[1.02] active:scale-[0.98] transition-all uppercase tracking-widest disabled:opacity-50"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>
          </form>
          {status === "success" && (
            <p className="text-center text-green-400 text-sm">Message sent successfully!</p>
          )}
          {status === "error" && (
            <p className="text-center text-error text-sm">Failed to send message. Try again.</p>
          )}
        </div>
      </div>
    </section>
  );
}
