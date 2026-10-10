import React from 'react';
import { ArrowUpRight } from './Icons';
import { SectionHeading } from './Common';

export function TechnicalDirection() {
  const items = [
    'Python',
    'Full-Stack',
    'AI / ML Fundamentals',
    'LLMs',
    'Generative AI',
    'RAG',
    'LangChain',
    'LangGraph',
    'Agentic AI',
    'SAP BTP AI'
  ];

  return (
    <section className="focus-band">
      <div className="section-wrap">
        <SectionHeading eyebrow="02 / Technical direction" title="A focused path from software foundations to enterprise AI." />
        <div className="focus-track reveal">
          {items.map((item, idx) => (
            <div key={item} className="focus-item">
              <span>{String(idx + 1).padStart(2, '0')}</span>
              <strong>{item}</strong>
              {idx < items.length - 1 && <ArrowUpRight />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
