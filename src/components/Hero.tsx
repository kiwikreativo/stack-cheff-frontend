"use client";

import React from "react";

export function HeroScroll() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__atmosphere" aria-hidden="true"><i /><i /><i /></div>
      <div className="site-container hero__inner">
        <div className="hero__copy" data-reveal>
          <p className="hero__eyebrow">Generate Production-Ready</p>
          <h1 id="hero-title" className="hero__title">
            Boilerplates
            <span>in 60 Seconds</span>
          </h1>
        </div>

        <div className="terminal-shell" data-scale-fade>
          <div className="terminal-shell__edge">
            <img
              src="/src/assets/hero-terminal.webp"
              alt="Stack Cheff terminal generating a Next.js stack with Docker, GitHub workflows, and automated tests"
              width="1672"
              height="941"
              className="terminal-shell__image"
            />
          </div>
        </div>
      </div>
      <div className="integration-marquee" aria-label="Stack Cheff integrations">
        <div className="integration-marquee__track">
          {[0, 1].map((group) => (
            <div className="integration-marquee__group" aria-hidden={group === 1} key={group}>
              <span>AI-Powered Configs</span><i />
              <span>Docker Ready</span><i />
              <span>GitHub Integration</span><i />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
