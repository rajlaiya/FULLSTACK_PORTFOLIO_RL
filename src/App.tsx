import { useEffect, useState } from 'react';
import Header from './Components/Header';
import Hero3D from './Components/Hero3D';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects, { projects as projectList } from './Components/Projects';
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
import { FaArrowUp } from 'react-icons/fa';

const META_TITLE = 'Raj Laiya | MERN Stack Developer Portfolio (React, Vue, Node.js, TypeScript)';
const META_DESCRIPTION = 'Portfolio of Raj Laiya, a MERN Stack developer specializing in React, Vue, Node.js, and TypeScript. Explore SaaS, e-commerce, and 3D web projects and hire me for high-performance, secure builds.';
const BASE_URL = 'https://rajlaiya.github.io/portfolio/';

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
    localStorage.getItem('theme') || 'dark'
  );
  const [section, setSection] = useState(() => {
    // Restore last visited section from localStorage
    const savedSection = localStorage.getItem('lastSection');
    const hash = window.location.hash.replace('#', '');
    return hash || savedSection || 'hero';
  });
  const [loading, setLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Save current section to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('lastSection', section);
  }, [section]);

  // Keep head metadata and structured data in sync for SEO crawlers
  useEffect(() => {
    document.title = META_TITLE;

    const setMetaContent = (selector: string, content: string) => {
      const el = document.querySelector<HTMLMetaElement>(selector);
      if (el) el.setAttribute('content', content);
    };

    setMetaContent('meta[name="description"]', META_DESCRIPTION);
    setMetaContent('meta[name="title"]', META_TITLE);
    setMetaContent('meta[property="og:title"]', META_TITLE);
    setMetaContent('meta[property="og:description"]', META_DESCRIPTION);
    setMetaContent('meta[property="twitter:title"]', META_TITLE);
    setMetaContent('meta[property="twitter:description"]', META_DESCRIPTION);
  }, []);

  useEffect(() => {
    const toAbsoluteUrl = (url: string) => {
      if (!url) return BASE_URL;
      if (url.startsWith('http')) return url;
      return `${BASE_URL}${encodeURI(url.replace(/^\//, ''))}`;
    };

    const projectItems = projectList
      .filter((p) => !p.mini)
      .slice(0, 8)
      .map((project, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: project.live && project.live !== '#' ? project.live : `${BASE_URL}#projects`,
        item: {
          '@type': 'CreativeWork',
          name: project.title,
          description: project.description,
          url: project.live && project.live !== '#' ? project.live : `${BASE_URL}#projects`,
          image: toAbsoluteUrl(project.image),
          inLanguage: 'en',
        },
      }));

    const schemas = [
      {
        id: 'ld-json-person',
        data: {
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Raj Laiya',
          jobTitle: 'MERN Stack Developer',
          url: BASE_URL,
          image: 'https://rajlaiya.github.io/portfolio/assets/IMG_Raj.jpg',
          email: 'mailto:rajlaiya2017@gmail.com',
          telephone: '+916355705208',
          sameAs: [
            'https://www.linkedin.com/in/laiya-raj-y21e502d01',
            'https://github.com/rajlaiya',
            'https://rajlaiya.github.io/portfolio/',
            'https://www.youtube.com/@rajlaiya',
          ],
          knowsAbout: [
            'React',
            'Vue.js',
            'Node.js',
            'TypeScript',
            'Tailwind CSS',
            'REST APIs',
            'MERN Stack Development',
            'Frontend Development',
            'Backend Development',
            'SEO',
          ],
          worksFor: {
            '@type': 'Organization',
            name: 'Freelance',
          },
        },
      },
      {
        id: 'ld-json-website',
        data: {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'Raj Laiya Portfolio',
          url: BASE_URL,
          description: META_DESCRIPTION,
          inLanguage: 'en',
          publisher: {
            '@type': 'Person',
            name: 'Raj Laiya',
            url: BASE_URL,
          },
          potentialAction: {
            '@type': 'ContactAction',
            target: [
              'mailto:rajlaiya2017@gmail.com',
              'tel:+916355705208',
              `${BASE_URL}#contact`,
            ],
            name: 'Contact Raj Laiya',
          },
        },
      },
      {
        id: 'ld-json-projects',
        data: {
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          name: 'Highlighted Projects',
          itemListOrder: 'Ascending',
          itemListElement: projectItems,
        },
      },
    ];

    schemas.forEach(({ id, data }) => {
      const existing = document.getElementById(id);
      if (existing) existing.remove();
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = id;
      script.text = JSON.stringify(data);
      document.head.appendChild(script);
    });

    return () => {
      schemas.forEach(({ id }) => {
        const node = document.getElementById(id);
        if (node?.parentNode) node.parentNode.removeChild(node);
      });
    };
  }, []);

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
      
      // Restore last section after loading
      const savedSection = localStorage.getItem('lastSection');
      if (savedSection && !window.location.hash) {
        window.location.hash = savedSection;
      }
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
        <Header theme={theme} setTheme={setTheme} activeSection={section} />
        <main className="pt-[var(--nav-h)]">
  <SectionComponent />
  <Poppop show={showPopup} onClose={handleAcceptCookies} />
      </main>
      {showBackToTop && ['skills', 'projects', 'services'].includes(section) && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 z-50 p-4 rounded-full bg-blue-600/90 hover:bg-blue-600 dark:bg-blue-500/90 dark:hover:bg-blue-500 text-white shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:scale-110 active:scale-95 flex items-center justify-center cursor-pointer border border-white/10 dark:border-black/10 animate-fade-in"
          aria-label="Back to top"
        >
          <FaArrowUp className="w-5 h-5 animate-pulse" />
        </button>
      )}
      {showFooter && (
        <footer className="text-center py-6 text-gray-500 text-sm bg-white dark:bg-gray-800 border-t mt-10 dark:text-gray-400">
          &copy; {new Date().getFullYear()} Raj laiya. All rights reserved.
        </footer>
      )}
    </div>
  );
}

export default App
