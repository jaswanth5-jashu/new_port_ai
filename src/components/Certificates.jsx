import React from 'react';
import { ArrowUpRight } from './Icons';
import { SectionHeading } from './Common';

export function Certificates({ certificates, setActiveModal }) {
  return (
    <section id="certificates" className="section-wrap certificates-section">
      <SectionHeading
        eyebrow="09 / Certificates"
        title="Verified technical certifications."
        text="Verified certificates and official technical credentials from industry programs."
      />
      <div className="certificate-gallery">
        {certificates.map((item, idx) => (
          <article key={item.title} className="certificate-card reveal">
            <button
              type="button"
              className="certificate-preview"
              onClick={() =>
                setActiveModal({
                  src: item.image,
                  title: item.title,
                  description: `Official verified certification from ${item.issuer}.`
                })
              }
              aria-label={`View ${item.title} full size`}
            >
              <img src={item.image} alt={`${item.title} certificate`} loading="lazy" />
              <span>{String(idx + 1).padStart(2, '0')}</span>
            </button>
            <div>
              <p>{item.issuer}</p>
              <h4>{item.title}</h4>
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs"
              >
                Verify certificate <ArrowUpRight />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
