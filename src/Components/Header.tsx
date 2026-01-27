import { useState, useRef, useEffect } from 'react';
import React from 'react';

interface HeaderProps {
  theme: string;
  setTheme: (theme: string) => void;
}

const Header: React.FC<HeaderProps> = ({ theme, setTheme }) => {
  const [dropdown, setDropdown] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdown(false);
      }
    }
    if (dropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [dropdown]);

  // Hide mobile menu on navigation
  useEffect(() => {
    if (!mobileMenu) return;
    const close = () => setMobileMenu(false);
    window.addEventListener('hashchange', close);
    return () => window.removeEventListener('hashchange', close);
  }, [mobileMenu]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const headerRef = useRef<HTMLElement | null>(null);

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
    <header ref={headerRef} className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/55 dark:bg-gray-900/45 border-b border-black/5 dark:border-white/10 shadow-sm transition-colors duration-300">
      <div className="relative mx-auto w-full max-w-6xl px-4 md:px-6 py-2 md:py-3">
        <span className="flex h-14 md:h-20 items-center justify-center md:justify-start whitespace-nowrap text-center md:text-left text-lg md:text-2xl font-semibold text-blue-600 dark:text-blue-400 tracking-tight leading-none">Raj laiya</span>
        <div className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 flex items-center gap-4 md:gap-6">
          <button
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 dark:bg-gray-800 text-blue-700 dark:text-blue-300 shadow-md transition hover:bg-blue-200 dark:hover:bg-gray-700"
            aria-label="Open menu"
            onClick={() => setMobileMenu((m) => !m)}
            type="button"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#hero" className="text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">Home</a>
            <a href="#about" className="text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">About</a>
            <a href="#skills" className="text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">Skills</a>
            <a href="#projects" className="text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">Projects</a>
            <a href="#contact" className="text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">Contact</a>
            <div className="relative inline-block" ref={dropdownRef}>
              <button
                onClick={() => setDropdown((d) => !d)}
                className="ml-4 px-4 py-2 bg-blue-100 dark:bg-gray-800 text-blue-700 dark:text-blue-300 rounded-lg font-medium hover:bg-blue-200 dark:hover:bg-gray-700 transition flex items-center gap-2"
              >
                Other <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </button>
              {dropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-900 rounded-lg shadow-lg z-50 border border-blue-100 dark:border-gray-800 animate-fade-in">
                  <a href="#services" className="block px-4 py-2 hover:bg-blue-50 dark:hover:bg-gray-800 text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors" onClick={() => setDropdown(false)}>Services</a>
                  <a href="#socialmedia" className="block px-4 py-2 hover:bg-blue-50 dark:hover:bg-gray-800 text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors" onClick={() => setDropdown(false)}>Socialmedia</a>
                </div>
              )}
            </div>
            <button
              type="button"
              onClick={toggleTheme}
              aria-pressed={theme === 'dark'}
              className="ml-4 group relative flex items-center gap-2 rounded-full border border-blue-200/70 dark:border-gray-700/80 bg-gradient-to-r from-blue-100/80 via-white/60 to-blue-50/80 dark:from-gray-800/80 dark:via-gray-800/60 dark:to-gray-900/80 px-2 py-1 text-sm font-medium text-black dark:text-white shadow-sm transition-colors duration-300 hover:border-blue-400/70 dark:hover:border-blue-500/60 hover:from-blue-100 hover:to-blue-50 dark:hover:from-gray-800 dark:hover:to-gray-900"
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
          </nav>
        </div>
      </div>
      {/* Mobile menu overlay */}
      {mobileMenu && (
        <>
          <div className="mobile-sidebar-backdrop" onClick={() => setMobileMenu(false)} />
          <nav className="mobile-sidebar-menu" onClick={e => e.stopPropagation()}>
            <button
              type="button"
              className="close-btn"
              aria-label="Close menu"
              onClick={() => setMobileMenu(false)}
            >
              ×
            </button>
            <a className="menu-item" href="#hero" onClick={() => setMobileMenu(false)}>Home</a>
            <a className="menu-item" href="#about" onClick={() => setMobileMenu(false)}>About</a>
            <a className="menu-item" href="#skills" onClick={() => setMobileMenu(false)}>Skills</a>
            <a className="menu-item" href="#projects" onClick={() => setMobileMenu(false)}>Projects</a>
            <a className="menu-item" href="#contact" onClick={() => setMobileMenu(false)}>Contact</a>
            <a className="menu-item" href="#services" onClick={() => setMobileMenu(false)}>Services</a>
            <a className="menu-item" href="#socialmedia" onClick={() => setMobileMenu(false)}>Socialmedia</a>
            <button
              type="button"
              className="menu-item"
              onClick={() => {
                toggleTheme();
                setMobileMenu(false);
              }}
            >
              {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
            </button>
          </nav>
        </>
      )}
    </header>
  );
};

export default Header;
