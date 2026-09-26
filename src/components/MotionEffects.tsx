"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function MotionEffects() {
  useGSAP(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
      gsap.fromTo(element, { opacity: 0, y: 34 }, {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: { trigger: element, start: "top 86%", once: true },
      });
    });

    gsap.utils.toArray<HTMLElement>("[data-scale-fade]").forEach((element) => {
      gsap.fromTo(element, { opacity: 0.35, scale: 0.86 }, {
        opacity: 1,
        scale: 1,
        ease: "none",
        scrollTrigger: { trigger: element, start: "top 92%", end: "center 55%", scrub: 0.7 },
      });
    });

    gsap.utils.toArray<HTMLElement>("[data-scrub-text]").forEach((element) => {
      const words = element.innerText.split(/\s+/);
      element.innerHTML = words.map((word) => `<span>${word}</span>`).join(" ");
      gsap.fromTo(element.querySelectorAll("span"), { opacity: 0.18 }, {
        opacity: 1,
        stagger: 0.05,
        ease: "none",
        scrollTrigger: { trigger: element, start: "top 85%", end: "bottom 58%", scrub: true },
      });
    });
  });

  return null;
}
