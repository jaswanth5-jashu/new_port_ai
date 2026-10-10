import React from 'react';
import { BriefcaseBusiness, Check, GraduationCap, UserRound } from './Icons';
import { SectionHeading } from './Common';

export function About() {
  return (
    <section id="about" className="section-wrap about-section">
      <SectionHeading eyebrow="01 / About" title="Building at the intersection of code and intelligence." />
      <div className="about-grid reveal">
        <div className="about-copy">
          <p>
            I am a 2025 Computer Science graduate from CMR Technical Campus specializing in Artificial Intelligence and Machine Learning. I have proven skills in{' '}
            <strong>Python full-stack development, Software Development, Generative AI, Agentic AI, RAG applications, LangChain, LangGraph, and SAP BTP AI.</strong>
          </p>
          <p>
            I have solid hands-on knowledge of <strong>My Skills</strong>, and I enjoy working on projects that explore frameworks, optimize systems, and build clean, maintainable code structures.
          </p>
        </div>
        <div className="profile-facts">
          <div>
            <span>Primary skill</span>
            <strong>Python Full Stack</strong>
          </div>
          <div>
            <span>Building with</span>
            <strong>GenAI · RAG · APIs</strong>
          </div>
          <div>
            <span>Exploring</span>
            <strong>Agentic AI · SAP BTP</strong>
          </div>
          <div>
            <span>Based in</span>
            <strong>Hyderabad, India</strong>
          </div>
        </div>
      </div>

      <div className="credential-grid reveal" style={{ marginTop: '48px' }}>
        <article>
          <div className="credential-icon">
            <GraduationCap />
          </div>
          <p>Education</p>
          <h3>Bachelor’s Degree — Computer Science & Engineering (AI & ML)</h3>
          <strong>CMR Technical Campus, Hyderabad</strong>
          <span>2021 — 2025</span>
        </article>
        <article>
          <div className="credential-icon">
            <BriefcaseBusiness />
          </div>
          <p>Student activity</p>
          <h3>Technical Team Head & Treasurer</h3>
          <strong>Team Akriti</strong>
          <span>2023 — 2025</span>
        </article>
        <article>
          <div className="credential-icon">
            <UserRound />
          </div>
          <p>Activity</p>
          <h3>Air Force Wing</h3>
          <strong>National Cadet Corps (NCC)</strong>
          <span>‘B’ & ‘C’ Certificates</span>
        </article>
      </div>

      <div className="cert-strip reveal">
        <span>Verified learning</span>
        <div>
          <Check/> SAP BTP AI Development – Core AI
        </div>
        <div>
          <Check/>Agentic AI Course – Learn Agent Memory and AI Skills
        </div>
        <div>
          <Check /> HackerRank Python Skill Test
        </div>
        <div>
          <Check /> Cisco Python Essentials 1
        </div>
        <div>
          <Check /> Python Course — Code With Swaroop
        </div>
        <div>
          <Check /> ML Workshop using Python
        </div>
      </div>
    </section>
  );
}
