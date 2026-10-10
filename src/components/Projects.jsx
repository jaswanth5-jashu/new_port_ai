import React from 'react';
import { ArrowUpRight, FileText, Github } from './Icons';
import { SectionHeading, TagList } from './Common';

export function Projects({ projects, setActiveProject }) {
  return (
    <section id="projects" className="section-wrap projects-section">
      <SectionHeading
        eyebrow="07 / Selected work"
        title="Projects that turn learning into working systems."
        text="A selection of Python, AI/ML, computer vision, and web development work. Click on any project to view details."
      />
      <div className="projects-list">
        {projects.map((item, idx) => (
          <article
            key={item.title}
            className="project reveal project-card-clickable"
            onClick={() => setActiveProject(item)}
          >
            <div className="project-image">
              <img src={item.image} alt={`${item.title} project visualization`} loading="lazy" width={1200} height={760} />
              <span>{String(idx + 1).padStart(2, '0')}</span>
              <div className="img-overlay">
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </div>
            <div className="project-info">
              <p className="project-label">{item.label}</p>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <TagList items={item.tech} />
              <div className="project-links" onClick={(e) => e.stopPropagation()}>
                <button
                  type="button"
                  onClick={() => setActiveProject(item)}
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2"
                >
                  <ArrowUpRight /> More About
                </button>
                {item.github ? (
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
                  >
                    <Github /> GitHub
                  </a>
                ) : (
                  <span className="unavailable">
                    <Github /> Repository private
                  </span>
                )}
                {item.demo && (
                  <a
                    href={item.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
                  >
                    <ArrowUpRight /> Live Demo
                  </a>
                )}
                {item.docs && (
                  <a
                    href={item.docs}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
                  >
                    <FileText /> Docs / PDF
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
