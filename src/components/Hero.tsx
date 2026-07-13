"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [displayText, setDisplayText] = useState("");
  const name = "Muhammad Rizwan";

  useEffect(() => {
    let index = 0;
    const type = () => {
      if (index < name.length) {
        setDisplayText(name.substring(0, index + 1));
        index++;
        setTimeout(type, 150);
      }
    };
    type();
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden pt-20 md:pt-0" id="home">
      <div className="container max-w-[1280px] mx-auto px-4 md:px-6 grid md:grid-cols-2 items-center gap-6 md:gap-8 z-10 md:h-screen">
        <div className="space-y-4">
          <span className="text-xs font-semibold tracking-[0.1em] uppercase text-secondary block">
            Full Stack / MERN Developer
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-text-primary" style={{ fontFamily: "Inter" }}>
            Hello, I&apos;m <br />
            <span className="text-primary typing-effect whitespace-nowrap">{displayText}</span>
          </h1>
          <p className="text-base md:text-lg leading-relaxed text-text-secondary max-w-lg">
            I build scalable, high-performance web applications with clean architecture and exceptional user experiences using the MERN Stack.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2">
            <button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="px-6 py-3 bg-primary text-on-primary font-bold rounded-lg neon-glow-teal hover:scale-105 transition-all text-sm"
            >
              View My Work
            </button>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-6 py-3 border border-white/20 text-text-primary font-bold rounded-lg hover:bg-white/5 transition-all text-sm"
            >
              Get in Touch
            </button>
          </div>
        </div>
        <div className="relative flex justify-center items-center py-5">
          <div className="absolute w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] bg-primary/20 blur-[120px] rounded-full" />
          <img
            className="relative w-full max-w-[150px] md:max-w-xs lg:max-w-md object-contain drop-shadow-[0_0_50px_rgba(80,245,238,0.3)] animate-float"
            src="/heroimage.png"
            alt="Digital developer character mascot with neon teal highlights"
          />
        </div>
      </div>
    </section>
  );
}
