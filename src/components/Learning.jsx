import React from 'react';
import { Map as MapIcon } from './Icons';
import { SectionHeading, TagList } from './Common';

export function Learning({ learningItems, roadmapSteps, roadmapIndex, setRoadmapIndex }) {
  const currentRoadmap = roadmapSteps[roadmapIndex];

  return (
    <section id="learning" className="learning-band">
      <div className="section-wrap">
        <SectionHeading
          eyebrow="08 / In progress"
          title="Currently learning & exploring."
          text="Consistent progress across the technologies shaping my next generation of projects."
        />
        <div className="learning-grid">
          {learningItems.map(([title, desc, Icon, level], idx) => (
            <article key={title} className="learning-card reveal">
              <span>{String(idx + 1).padStart(2, '0')}</span>
              <Icon />
              <h3>{title}</h3>
              <p>{desc}</p>
              <div className="progress-line">
                <i style={{ width: `${level}%` }}></i>
              </div>
            </article>
          ))}
        </div>

        <div className="roadmap reveal">
          <div className="roadmap-heading">
            <div>
              <p className="eyebrow">
                <span></span>Learning roadmap
              </p>
              <h3>From foundations to enterprise AI</h3>
            </div>
            <MapIcon />
          </div>

          <div className="roadmap-steps" role="tablist" aria-label="Learning roadmap">
            {roadmapSteps.map(([title], idx) => (
              <button
                key={title}
                type="button"
                role="tab"
                aria-selected={roadmapIndex === idx}
                className={roadmapIndex === idx ? 'active' : ''}
                onClick={() => setRoadmapIndex(idx)}
              >
                <span>{idx + 1}</span>
                {title}
              </button>
            ))}
          </div>

          {currentRoadmap && (
            <div className="roadmap-detail">
              <span>Current view</span>
              <h4>{currentRoadmap[0]}</h4>
              <TagList items={currentRoadmap[1]} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
