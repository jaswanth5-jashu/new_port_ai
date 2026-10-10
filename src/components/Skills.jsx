import React from 'react';
import { SectionHeading, TagList } from './Common';

export function Skills({ skillCategories }) {
  return (
    <section id="skills" className="section-wrap">
      <SectionHeading
        eyebrow="03 / Skills"
        title="Tools I use, foundations I’m strengthening."
        text="A transparent view of the technologies I work with and the areas I am actively developing."
      />
      <div className="skills-grid">
        {skillCategories.map(({ icon: Icon, ...cat }) => (
          <article key={cat.title} className="skill-card reveal">
            <div className="card-top">
              <span>{cat.number}</span>
              <Icon />
            </div>
            <div className="skill-title">
              <h3>{cat.title}</h3>
              {cat.note && <em>{cat.note}</em>}
            </div>
            {cat.description && <p>{cat.description}</p>}
            <TagList items={cat.skills} />
          </article>
        ))}
      </div>
    </section>
  );
}
