import { useRef, useState, useEffect } from 'react';
import React from 'react';
import serviceLogo from '../assets/service_logo.png';
import './header-overlay.css';

interface HeaderProps {
  theme: string;
  setTheme: (theme: string) => void;
  activeSection?: string;
}

const NAV_ITEMS = [
  { href: '#hero', label: 'Home', key: 'hero' },
  { href: '#about', label: 'About', key: 'about' },
  { href: '#skills', label: 'Skills', key: 'skills' },
  { href: '#projects', label: 'Projects', key: 'projects' },
  { href: '#services', label: 'Services', key: 'services' },
  { href: '#socialmedia', label: 'Social', key: 'socialmedia' },
  { href: '#contact', label: 'Contact', key: 'contact' },
];

const Header: React.FC<HeaderProps> = ({ theme, setTheme, activeSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLElement | null>(null);

  // Close the overlay when navigating to a new section
  useEffect(() => {
    if (!menuOpen) return;
    const close = () => setMenuOpen(false);
    window.addEventListener('hashchange', close);
    return () => window.removeEventListener('hashchange', close);
  }, [menuOpen]);

  // Close on Escape, and lock body scroll while the overlay is open
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [menuOpen]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  // Expose header height as CSS variable so sections can size to viewport minus header
  useEffect(() => {
    const setNavHeight = () => {
      const h = headerRef.current?.offsetHeight || 64;
      document.documentElement.style.setProperty('--nav-h', `${h}px`);
    };
    setNavHeight();
    const onResize = () => setNavHeight();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <>
      <svg width="0" height="0" style={{ position: 'absolute', pointerEvents: 'none', width: 0, height: 0 }}>
        <defs>
          <filter id="remove-black-mask">
            <feColorMatrix
              type="matrix"
              values="
                1 0 0 0 0
                0 1 0 0 0
                0 0 1 0 0
                3 3 3 0 -0.5
              "
            />
          </filter>
        </defs>
      </svg>
      <header
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-50 border-b shadow-sm transition-colors duration-300 ${
          menuOpen
            ? 'bg-transparent border-transparent shadow-none'
            : 'backdrop-blur-md bg-white/55 dark:bg-gray-900/45 border-black/5 dark:border-white/10'
        }`}
      >
        <div className="relative w-full px-4 md:px-8 py-2 md:py-3">
          <div className="flex h-14 md:h-20 items-center justify-start select-none overflow-visible">
            <a href="#hero" className="flex items-center">
              <img
                src={serviceLogo}
                alt="Coding With RL"
                className="h-24 md:h-36 -my-4 md:-my-8 w-auto object-contain transition-all duration-300"
                style={
                  theme === 'dark'
                    ? { filter: 'url(#remove-black-mask)' }
                    : { filter: 'url(#remove-black-mask) invert(1)' }
                }
              />
            </a>
          </div>

          <div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 flex items-center gap-3 md:gap-4">
            <a
              href="#contact"
              className="hidden sm:inline text-xs font-bold uppercase tracking-widest text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Contact
            </a>

            <button
              type="button"
              onClick={toggleTheme}
              aria-pressed={theme === 'dark'}
              className="group relative flex items-center gap-2 rounded-full border border-blue-200/70 dark:border-gray-700/80 bg-gradient-to-r from-blue-100/80 via-white/60 to-blue-50/80 dark:from-gray-800/80 dark:via-gray-800/60 dark:to-gray-900/80 px-2 py-1 text-sm font-medium text-black dark:text-white shadow-sm transition-colors duration-300 hover:border-blue-400/70 dark:hover:border-blue-500/60 hover:from-blue-100 hover:to-blue-50 dark:hover:from-gray-800 dark:hover:to-gray-900"
            >
              <span className="sr-only">Toggle theme</span>
              <span className="relative inline-flex h-7 w-14 items-center rounded-full bg-gradient-to-r from-blue-200/80 via-blue-100/70 to-blue-200/80 dark:from-gray-700/80 dark:via-gray-800/80 dark:to-gray-900/80 transition-colors duration-300">
                <span
                  className={`absolute left-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-white shadow-md ring-1 ring-black/5 transition-transform duration-300 ease-out ${theme === 'dark' ? 'translate-x-7 bg-gray-100' : 'translate-x-0 bg-white'}`}
                >
                  {theme === 'light' ? (
                    <svg className="h-3.5 w-3.5 text-amber-500" viewBox="0 0 24 24" fill="currentColor"><path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm0-16a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1Zm0 17a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1ZM4.22 5.64a1 1 0 0 1 1.42 0l.71.7a1 1 0 1 1-1.41 1.42l-.72-.71a1 1 0 0 1 0-1.41Zm12.73 12.72a1 1 0 0 1 1.42 0l.71.71a1 1 0 1 1-1.41 1.42l-.72-.71a1 1 0 0 1 0-1.42ZM2 12a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1Zm17 0a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2h-1a1 1 0 0 1-1-1ZM4.22 18.36a1 1 0 0 1 1.42 0l.71.71a1 1 0 1 1-1.41 1.42l-.72-.71a1 1 0 0 1 0-1.42Zm12.73-12.72a1 1 0 0 1 1.42 0l.71.7a1 1 0 1 1-1.41 1.42l-.72-.71a1 1 0 0 1 0-1.41Z"/></svg>
                  ) : (
                    <svg className="h-3.5 w-3.5 text-blue-300" viewBox="0 0 24 24" fill="currentColor"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 1 0 21 12.79Z"/></svg>
                  )}
                </span>
              </span>
              <span className="hidden sm:inline text-xs font-semibold text-blue-700 dark:text-blue-200 tracking-tight transition-colors duration-300">
                {theme === 'light' ? 'Light' : 'Dark'}
              </span>
            </button>

            <button
              type="button"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((m) => !m)}
              className={`nav-toggle-btn ${menuOpen ? 'is-open' : ''}`}
            >
              <span className="nav-toggle-bar bar-top" />
              <span className="nav-toggle-bar bar-mid" />
              <span className="nav-toggle-bar bar-bottom" />
            </button>
          </div>
        </div>
      </header>

      <nav
        ref={menuRef}
        className={`nav-overlay ${menuOpen ? 'is-open' : ''}`}
        aria-hidden={!menuOpen}
        onClick={() => setMenuOpen(false)}
      >
        <ul className="nav-overlay-list" onClick={(e) => e.stopPropagation()}>
          {NAV_ITEMS.map((item) => (
            <li key={item.key}>
              <a
                href={item.href}
                className={`nav-overlay-link ${activeSection === item.key ? 'is-active' : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-overlay-footer" onClick={(e) => e.stopPropagation()}>
          <span>Website developed by Raj Laiya</span>
          <span>&copy;&nbsp;{new Date().getFullYear()} All rights reserved</span>
        </div>
      </nav>
    </>
  );
};

export default Header;
