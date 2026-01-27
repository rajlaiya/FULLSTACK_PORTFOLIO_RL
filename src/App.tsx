import { useEffect, useState } from 'react';
import Header from './Components/Header';
import Hero3D from './Components/Hero3D';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Loader from './Pages/loder';
import History from './Components/History';
import Resume from './Components/Resume';
import Services from './Components/Services';
import './App.css'
import Poppop from './Pages/poppop';
import './mobile.css'; // Adjust the path if needed
import Freelancer from './Components/freelancer';
import Socialmedia from './Components/Socialmedia';

const sectionComponents = {
  hero: Hero3D,
  about: About,
  skills: Skills,
  projects: Projects,
  contact: Contact,
  history: History,
  resume: Resume,
  services: Services,
  freelancer: Freelancer,
  socialmedia: Socialmedia,
};

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'light'
  );
  const [section, setSection] = useState('hero');
  const [loading, setLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      setSection(hash || 'hero');
    };
    window.addEventListener('hashchange', onHashChange);
    onHashChange();
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      // Show cookie popup only if not previously accepted
      const consent = localStorage.getItem('cookieConsent');
      setShowPopup(!consent);
    }, 1500); // 1.5s loader
    return () => clearTimeout(timer);
  }, []);

  const handleAcceptCookies = () => {
    try { localStorage.setItem('cookieConsent', 'accepted'); } catch {}
    setShowPopup(false);
  };

  const SectionComponent = (sectionComponents as any)[section] || Hero3D;
  const showFooter = section !== 'hero' && section !== 'about';

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 dark:bg-gray-900">
        <Loader />
      </div>
    );
  }

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <Header theme={theme} setTheme={setTheme} />
        <main className="pt-[var(--nav-h)]">
  <SectionComponent />
  <Poppop show={showPopup} onClose={handleAcceptCookies} />
      </main>
      {showFooter && (
        <footer className="text-center py-6 text-gray-500 text-sm bg-white dark:bg-gray-800 border-t mt-10 dark:text-gray-400">
          &copy; {new Date().getFullYear()} Raj laiya. All rights reserved.
        </footer>
      )}
    </div>
  );
}

export default App
