import React from 'react';
import { ArrowUpRight, Check, Download, Github, Instagram, Linkedin, Mail, Send } from './Icons';

export function Contact({
  socialLinks,
  contactFormRef,
  contactStatus,
  contactCountdown,
  handleContactSubmit,
  handleResetContact
}) {
  return (
    <section id="contact" className="contact-section">
      <div className="section-wrap contact-grid">
        <div className="contact-copy reveal">
          <p className="eyebrow">
            <span></span>11 / Contact
          </p>
          <h2>Let’s build something intelligent.</h2>
          <p>I’m open to opportunities involving Python development, Generative AI, Agentic AI, and SAP BTP AI.</p>
          <div className="contact-links">
            <a href={socialLinks.email}>
              <Mail /> Email <ArrowUpRight />
            </a>
            <a href={socialLinks.github} target="_blank" rel="noreferrer">
              <Github /> GitHub <ArrowUpRight />
            </a>
            <a href={socialLinks.linkedin} target="_blank" rel="noreferrer">
              <Linkedin /> LinkedIn <ArrowUpRight />
            </a>
            <a href={socialLinks.instagram} target="_blank" rel="noreferrer">
              <Instagram /> Instagram <ArrowUpRight />
            </a>
            <a href={socialLinks.resume} target="_blank" rel="noreferrer">
              <Download /> Resume <ArrowUpRight />
            </a>
          </div>
        </div>

        <form
          ref={contactFormRef}
          className="contact-form reveal"
          onSubmit={handleContactSubmit}
        >
          {contactStatus === 'success' ? (
            <div className="contact-success-box">
              <div className="contact-success-icon">
                <Check />
              </div>
              <h3>Message sended to admin!</h3>
              <p className="contact-success-sub">
                Your message has been delivered to <strong>jaswanthsimha2004@gmail.com</strong>.
              </p>
              <div className="contact-countdown-pill">
                Resetting in <span>{contactCountdown}s</span> to send another message...
              </div>
              <button
                type="button"
                onClick={handleResetContact}
                className="contact-reset-btn"
              >
                Send another message now
              </button>
            </div>
          ) : (
            <>
              <label>
                Name
                <input
                  name="name"
                  required
                  maxLength={100}
                  placeholder="Your name"
                  className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                />
              </label>
              <label>
                Email
                <input
                  name="email"
                  type="email"
                  required
                  maxLength={255}
                  placeholder="you@example.com"
                  className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                />
              </label>
              <label>
                Message
                <textarea
                  name="message"
                  required
                  maxLength={2000}
                  rows={6}
                  placeholder="Tell me about the opportunity or project..."
                  className="flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                ></textarea>
              </label>
              <button
                type="submit"
                disabled={contactStatus === 'sending'}
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring bg-primary text-primary-foreground shadow hover:bg-primary/90 h-10 rounded-md px-8 disabled:opacity-60"
              >
                {contactStatus === 'sending' ? (
                  'Sending message...'
                ) : (
                  <>
                    Send message <Send />
                  </>
                )}
              </button>
              <p className="contact-helper-text">Sends directly to Jaswanth</p>
            </>
          )}
        </form>
      </div>
    </section>
  );
}
