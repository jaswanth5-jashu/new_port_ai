import React from 'react';
import { ArrowDown, ArrowUpRight, ChevronDown, Download, Github, ImageIcon, Instagram, Linkedin, Mail } from './Icons';

export function Hero({ socialLinks, setActiveModal }) {
  return (
    <section id="home" className="hero section-wrap">
      <div className="network-bg" aria-hidden="true">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <i></i>
        <i></i>
        <i></i>
      </div>

      <div className="hero-layout">
        <div className="hero-content reveal">
          <div className="status">
            <i></i> Open to opportunities
          </div>
          <p className="hero-kicker">Hello, I’m</p>
          <h1>
            Bobbillapati
            <br />
            <span>Jaswanth Simha.</span>
          </h1>
          <h2>
            Python Full-Stack Developer <b>/</b> Generative AI & Agentic AI Developer <b>/</b> SAP BTP AI Developer
          </h2>
          <p className="hero-lead">
            Building intelligent applications with Python, Generative AI, Agentic AI, and SAP BTP.
          </p>
          <p className="hero-description">
            Computer Science graduate focused on Python development, LLM applications, RAG systems, AI agents, and cloud-based AI solutions.
          </p>

          <div className="hero-actions">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring bg-primary text-primary-foreground shadow hover:bg-primary/90 h-10 px-8"
            >
              View projects <ArrowDown />
            </a>
            <a
              href={socialLinks.resume}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-10 px-8"
            >
              Download resume <Download />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring hover:bg-accent hover:text-accent-foreground h-10 px-8"
            >
              Contact me <ArrowUpRight />
            </a>
          </div>

          <div className="social-row">
            <span>Find me online</span>
            <a href={socialLinks.github} target="_blank" rel="noreferrer" aria-label="GitHub" title="GitHub">
              <Github />
            </a>
            <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn">
              <Linkedin />
            </a>
            <a href={socialLinks.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" title="Instagram">
              <Instagram />
            </a>
            <a href={socialLinks.email} aria-label="Email" title="Email">
              <Mail />
            </a>
          </div>
        </div>

        <button
          className="profile-portrait reveal"
          type="button"
          onClick={() =>
            setActiveModal({
              src: '/assets/jaswanth-profile.jpg',
              title: 'Jaswanth Simha',
              description: 'Full-size image from Jaswanth Simha’s portfolio.'
            })
          }
          aria-label="View Jaswanth Simha’s profile photo full size"
        >
          <img src="/assets/jaswanth-profile.jpg" alt="Jaswanth Simha" width={5184} height={2912} />
          <span>
            <ImageIcon /> View portrait
          </span>
        </button>
      </div>

      <a className="scroll-cue" href="#about">
        <span>Scroll to explore</span>
        <ChevronDown />
      </a>
    </section>
  );
}
