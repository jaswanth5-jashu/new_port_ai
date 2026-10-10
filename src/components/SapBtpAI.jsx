import React from 'react';
import { BookOpen, CloudCog } from './Icons';

export function SapBtpAI() {
  const cloudItems = [
    'SAP BTP',
    'AI Services',
    'SAP HANA Cloud',
    'Vector / Embedding Data',
    'AI Application',
    'Joule / AI Experience'
  ];

  return (
    <section id="sap-btp" className="ai-feature sap-band">
      <div className="section-wrap feature-grid">
        <div className="feature-copy reveal">
          <p className="eyebrow">
            <span></span>06 / Enterprise AI
          </p>
          <div className="feature-icon">
            <CloudCog />
          </div>
          <h2>SAP BTP AI Development</h2>
          <p>
            Learning and exploring AI development on SAP Business Technology Platform, including AI services, HANA Cloud, embeddings, Joule, and AI application development.
          </p>
          <div className="learning-note">
            <BookOpen /> An active learning track focused on cloud-based AI solutions.
          </div>
        </div>
        <div className="cloud-architecture reveal">
          <CloudCog className="cloud-main" />
          <div className="cloud-grid">
            {cloudItems.map((item, idx) => (
              <div key={item}>
                <span>{idx + 1}</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
