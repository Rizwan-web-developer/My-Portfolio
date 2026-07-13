"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothAnimations() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate all sections on scroll
      const sections = document.querySelectorAll("section");

      sections.forEach((section) => {
        const children = section.querySelectorAll(
          "h1, h2, h3, h4, p, span, button, .glass-card, img, .tech-card, form, .scroll-reveal"
        );

        children.forEach((child, index) => {
          gsap.fromTo(
            child,
            {
              opacity: 0,
              y: 40,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.4,
              delay: index * 0.03,
              ease: "power3.out",
              scrollTrigger: {
                trigger: child,
                start: "top 90%",
                end: "top 60%",
                toggleActions: "play none none reverse",
              },
            }
          );
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return null;
}
