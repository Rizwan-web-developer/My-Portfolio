"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About Me", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
];

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.pageYOffset;
      if (current > lastScroll && current > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      setLastScroll(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  const scrollTo = (href: string) => {
    const el = document.getElementById(href.substring(1));
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <header
      className="fixed top-0 w-full z-50 transition-all duration-300 ease-in-out"
      style={{
        background: "rgba(255,255,255,0.03)",
        backdropFilter: "blur(24px)",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
        boxShadow: "0 0 20px rgba(28,216,210,0.1)",
        transform: hidden ? "translateY(-100%)" : "translateY(0)",
      }}
    >
      <nav className="flex justify-between items-center px-4 md:px-6 py-4 max-w-[1280px] mx-auto">
        {/* Logo only */}
        <a href="#home" onClick={(e) => { e.preventDefault(); scrollTo("#home"); }}>
          <img
            src="/logo.jpeg"
            alt="Muhammad Rizwan Profile"
            className="w-20 h-20 rounded-full border border-primary/30 object-cover"
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-[16px]" style={{ fontFamily: "Inter" }}>
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollTo(link.href)}
              className="text-text-secondary hover:text-text-primary transition-colors"
            >
              {link.name}
            </button>
          ))}
        </div>
        <button
          onClick={() => scrollTo("#contact")}
          className="hidden md:block px-6 py-2 bg-primary-container text-on-primary-container font-bold rounded-lg neon-glow-teal hover:scale-105 transition-all text-sm"
        >
          Get in Touch
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-text-primary p-2"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden glass-card mx-4 mb-4 rounded-xl p-6 space-y-4">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollTo(link.href)}
              className="block w-full text-left text-text-secondary hover:text-text-primary transition-colors py-2 text-lg"
              style={{ fontFamily: "Inter" }}
            >
              {link.name}
            </button>
          ))}
          <button
            onClick={() => scrollTo("#contact")}
            className="w-full px-6 py-3 bg-primary-container text-on-primary-container font-bold rounded-lg neon-glow-teal transition-all text-sm mt-4"
          >
            Get in Touch
          </button>
        </div>
      )}
    </header>
  );
}
