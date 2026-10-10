import React from 'react';
import { Award, ImageIcon } from './Icons';
import { SectionHeading } from './Common';

export function Achievements({ achievements, setActiveModal }) {
  return (
    <section id="achievements" className="achievements-band">
      <div className="section-wrap">
        <SectionHeading
          eyebrow="10 / Achievements"
          title="Discipline, leadership & continuous learning."
          text="Original achievement photographs and verified credentials from the Air Force Wing."
        />

        <article className="ncc-story reveal">
          <div className="ncc-copy">
            <img src="/assets/achievements/ncc-logo.png" alt="National Cadet Corps emblem" width={348} height={313} />
            <p className="eyebrow">
              <span></span>NCC · Air Force Wing
            </p>
            <h3>‘B’ & ‘C’ Certificates with Merit Grade</h3>
            <p>
              Participated in the Indian Air Force Attachment Camp 2023 in Bidar, representing AP & Telangana under NCC. The experience developed discipline, parade skills, leadership, teamwork, and exposure to an Air Force environment.
            </p>
          </div>

          <div className="achievement-photos-strip">
            {achievements.map((item, idx) => (
              <button
                key={item.title + idx}
                type="button"
                className={item.type === 'certificate' ? 'achievement-image certificate-photo' : 'achievement-image'}
                onClick={() =>
                  setActiveModal({
                    src: item.image,
                    title: item.title,
                    description: item.description
                  })
                }
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                />
                <span>
                  {item.type === 'certificate' ? <Award /> : <ImageIcon />} {item.badge}
                </span>
              </button>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
