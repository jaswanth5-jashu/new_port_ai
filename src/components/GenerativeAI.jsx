import React from 'react';
import { Sparkles } from './Icons';
import { Flow, TagList } from './Common';

export function GenerativeAI() {
  return (
    <section id="generative-ai" className="ai-feature generative-band">
      <div className="section-wrap feature-grid">
        <div className="feature-copy reveal">
          <p className="eyebrow">
            <span></span>04 / Current focus
          </p>
          <div className="feature-icon">
            <Sparkles />
          </div>
          <h2>Generative AI</h2>
          <p>
            I am exploring how Large Language Models can be integrated with applications to generate useful, contextual, and intelligent responses.
          </p>
          <TagList
            items={['LLMs', 'Google Gemini', 'Prompt Engineering', 'Embeddings', 'RAG', 'Vector Search', 'Document Q&A']}
          />
        </div>
        <div className="feature-visual reveal">
          <div className="visual-label">
            <span>Input</span>
            <span>Intelligent output</span>
          </div>
          <Flow
            ariaLabel="Generative AI workflow"
            items={['User', 'Prompt', 'LLM', 'Context / RAG', 'Generated Response']}
          />
        </div>
      </div>
    </section>
  );
}
