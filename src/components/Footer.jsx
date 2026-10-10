import React from 'react';

export function Footer({ socialLinks }) {
  return (
    <footer>
      <div>
        <a href="#home" className="brand">
          <span>JS</span>
          <strong>Jaswanth Simha</strong>
        </a>
        <p>Python Full-Stack Developer building AI-powered applications.</p>
      </div>
      <div>
        <a href={socialLinks.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href={socialLinks.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href={socialLinks.instagram} target="_blank" rel="noreferrer">
          Instagram
        </a>
      </div>
      <span>© 2026 Jaswanth Simha</span>
    </footer>
  );
}
