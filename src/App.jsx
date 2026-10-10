import React, { useState, useEffect, useRef } from 'react';
import './index.css';
import {
  Bot,
  BrainCircuit,
  CloudCog,
  CodeXml,
  Sparkles,
  SquareTerminal,
  Workflow
} from './components/Icons';

import {
  personal,
  socials,
  navLinks,
  skillCategories,
  projects,
  certificates,
  achievements,
  learningPaths,
  roadmap
} from './data/portfolioData';

import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { TechnicalDirection } from './components/TechnicalDirection';
import { Skills } from './components/Skills';
import { GenerativeAI } from './components/GenerativeAI';
import { AgenticAI } from './components/AgenticAI';
import { SapBtpAI } from './components/SapBtpAI';
import { Projects } from './components/Projects';
import { Learning } from './components/Learning';
import { Certificates } from './components/Certificates';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Modals } from './components/Modals';

const SOCIAL_LINKS = {
  github: socials.github,
  instagram: socials.instagram,
  linkedin: socials.linkedin,
  resume: personal.resumeUrl,
  email: socials.email
};

const NAV_ITEMS = navLinks.map(n => [n.label, n.href.replace('#', '')]);

const ICON_MAP = {
  '01': CodeXml,
  '02': BrainCircuit,
  '03': Sparkles,
  '04': Workflow,
  '05': CloudCog,
  '06': SquareTerminal
};

const SKILL_CATEGORIES = skillCategories.map(cat => ({
  number: cat.number,
  icon: ICON_MAP[cat.number] || CodeXml,
  title: cat.category,
  note: cat.note,
  description: cat.description,
  skills: cat.items ? cat.items.map(i => i.name) : []
}));

const ICON_BY_NAME = {
  CodeXml,
  Bot,
  CloudCog,
  Sparkles,
  BrainCircuit
};

const LEARNING_ITEMS = learningPaths.map(item => [
  item.title,
  item.desc,
  ICON_BY_NAME[item.icon] || Sparkles,
  item.level
]);

const ROADMAP_STEPS = roadmap.map(r => [r.stage, r.skills]);

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [roadmapIndex, setRoadmapIndex] = useState(0);
  const [activeModal, setActiveModal] = useState(null);
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveModal(null);
        setActiveProject(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.12 }
    );
    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const [contactStatus, setContactStatus] = useState('idle');
  const [contactCountdown, setContactCountdown] = useState(6);
  const contactFormRef = useRef(null);

  useEffect(() => {
    if (contactStatus !== 'success') return;

    const timer = setInterval(() => {
      setContactCountdown((prev) => {
        if (prev <= 1) {
          setContactStatus('idle');
          return 6;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [contactStatus]);

  function handleResetContact() {
    setContactStatus('idle');
    setContactCountdown(6);
  }

  async function handleContactSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = String(formData.get('name') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const message = String(formData.get('message') || '').trim();

    setContactStatus('sending');

    try {
      await fetch('https://formsubmit.co/ajax/jaswanthsimha2004@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          name,
          email,
          message,
          _subject: `Portfolio Message from ${name} (${email})`
        })
      });
    } catch (err) {
      console.warn('Form submission note:', err);
    }

    if (contactFormRef.current) {
      contactFormRef.current.reset();
    }
    setContactStatus('success');
    setContactCountdown(6);
  }

  return (
    <div className="site-shell">
      <Header
        navItems={NAV_ITEMS}
        resumeUrl={SOCIAL_LINKS.resume}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

      <main>
        <Hero socialLinks={SOCIAL_LINKS} setActiveModal={setActiveModal} />
        <About />
        <TechnicalDirection />
        <Skills skillCategories={SKILL_CATEGORIES} />
        <GenerativeAI />
        <AgenticAI />
        <SapBtpAI />
        <Projects projects={projects} setActiveProject={setActiveProject} />
        <Learning
          learningItems={LEARNING_ITEMS}
          roadmapSteps={ROADMAP_STEPS}
          roadmapIndex={roadmapIndex}
          setRoadmapIndex={setRoadmapIndex}
        />
        <Certificates certificates={certificates} setActiveModal={setActiveModal} />
        <Achievements achievements={achievements} setActiveModal={setActiveModal} />
        <Contact
          socialLinks={SOCIAL_LINKS}
          contactFormRef={contactFormRef}
          contactStatus={contactStatus}
          contactCountdown={contactCountdown}
          handleContactSubmit={handleContactSubmit}
          handleResetContact={handleResetContact}
        />
      </main>

      <Footer socialLinks={SOCIAL_LINKS} />

      <Modals
        activeModal={activeModal}
        setActiveModal={setActiveModal}
        activeProject={activeProject}
        setActiveProject={setActiveProject}
      />
    </div>
  );
}
