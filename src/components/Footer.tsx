"use client";

export default function Footer() {
  return (
    <footer className="bg-surface-deep border-t border-white/5 w-full">
      <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-6 py-8 md:py-12 max-w-[1280px] mx-auto space-y-6 md:space-y-0">
        <div className="text-center md:text-left">
          <span className="text-3xl md:text-[48px] font-bold text-primary block mb-2" style={{ fontFamily: "Inter" }}>
            Muhammad Rizwan
          </span>
          <p className="text-[12px] font-semibold tracking-[0.1em] text-text-secondary opacity-80" style={{ fontFamily: "Inter" }}>
            &copy; 2024 Muhammad Rizwan. Built with Cyber-Nexus precision.
          </p>
        </div>
        <div className="flex items-center gap-6">
          <a
            href="https://www.linkedin.com/in/muhammad-rizwan-268909338/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-neon-teal transition-colors flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-xl">alternate_email</span>
            <span className="text-[12px] font-semibold tracking-[0.1em]" style={{ fontFamily: "Inter" }}>LinkedIn</span>
          </a>
          <a
            href="https://github.com/Rizwan-web-developer"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-neon-teal transition-colors flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-xl">code</span>
            <span className="text-[12px] font-semibold tracking-[0.1em]" style={{ fontFamily: "Inter" }}>GitHub</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
