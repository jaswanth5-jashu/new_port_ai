import React from 'react';
import { BookOpen, Bot, Network } from './Icons';
import { Flow, TagList } from './Common';

export function AgenticAI() {
  return (
    <section id="agentic-ai" className="ai-feature agentic-band">
      <div className="section-wrap feature-grid reverse">
        <div className="feature-visual reveal">
          <div className="agent-core">
            <Network />
            <span>Context + tools</span>
          </div>
          <Flow
            ariaLabel="Agentic AI workflow"
            items={[
              'User',
              'AI Agent',
              'Reason / Decide',
              'Retrieve Context',
              'Select Tool',
              'Call API / Database',
              'Observe Result',
              'Generate Response'
            ]}
          />
        </div>
        <div className="feature-copy reveal">
          <p className="eyebrow">
            <span></span>05 / Current focus
          </p>
          <div className="feature-icon">
            <Bot />
          </div>
          <h2>Agentic AI</h2>
          <p>
            Exploring AI systems that combine LLMs with tools, APIs, retrieval, workflows, and decision-making to perform multi-step tasks.
          </p>
          <TagList
            items={[
              'LangChain',
              'LangGraph',
              'RAG',
              'LLMs',
              'Tool Calling',
              'API Integration',
              'MCP',
              'Agent Workflows'
            ]}
          />
          <div className="learning-note">
            <BookOpen /> Learning and prototyping—not claiming production-level autonomous systems.
          </div>
        </div>
      </div>
    </section>
  );
}
