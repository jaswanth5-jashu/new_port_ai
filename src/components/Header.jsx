import React from 'react';
import { Download, Menu, X } from './Icons';

export function Header({ navItems, resumeUrl, menuOpen, setMenuOpen }) {
  return (
    <header className="site-header">
      <a href="#home" className="brand" aria-label="Jaswanth Simha home">
        <span>JS</span>
        <strong>Jaswanth Simha</strong>
      </a>

      <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Primary navigation">
        {navItems.map(([label, href]) => (
          <a key={href} href={`#${href}`} onClick={() => setMenuOpen(false)}>
            {label}
          </a>
        ))}
      </nav>

      <div className="header-actions">
        <a
          href={resumeUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs resume-button"
        >
          <Download /> Resume
        </a>
        <button
          type="button"
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 w-9 menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
