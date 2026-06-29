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
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-blue-200/50 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 text-black dark:text-white shadow-sm transition-all duration-300 hover:scale-110 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-md hover:shadow-blue-500/10 dark:hover:shadow-blue-900/30"
            >
              {theme === 'light' ? (
                <svg className="h-5 w-5 text-amber-500 transition-transform duration-500 hover:rotate-45" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm0-16a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1Zm0 17a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1ZM4.22 5.64a1 1 0 0 1 1.42 0l.71.7a1 1 0 1 1-1.41 1.42l-.72-.71a1 1 0 0 1 0-1.41Zm12.73 12.72a1 1 0 0 1 1.42 0l.71.71a1 1 0 1 1-1.41 1.42l-.72-.71a1 1 0 0 1 0-1.42ZM2 12a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1Zm17 0a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2h-1a1 1 0 0 1-1-1ZM4.22 18.36a1 1 0 0 1 1.42 0l.71.71a1 1 0 1 1-1.41 1.42l-.72-.71a1 1 0 0 1 0-1.42Zm12.73-12.72a1 1 0 0 1 1.42 0l.71.7a1 1 0 1 1-1.41 1.42l-.72-.71a1 1 0 0 1 0-1.41Z"/>
                </svg>
              ) : (
                <svg className="h-5 w-5 text-blue-300 transition-transform duration-500 hover:-rotate-12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 1 0 21 12.79Z"/>
                </svg>
              )}
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
        </div>
      </nav>
    </>
  );
};

export default Header;
