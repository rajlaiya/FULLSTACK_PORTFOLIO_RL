import '../about-animations.css';
import './About.css'; // Import the new CSS file
import { FaHistory } from 'react-icons/fa';
import { useEffect, useRef } from 'react';
import newImg from '../assets/new img.png';

const About = () => {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
        rootMargin: '0px 0px -100px 0px' // Trigger slightly before element enters viewport
      }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  return (
    <section className="py-4 md:py-6 about-animated-bg w-full font-['Montserrat','Fira_Code','JetBrains_Mono','monospace'] overflow-hidden flex items-center about-section-container" id="about">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center">
          {/* Text content - shows first on mobile */}
          <div className="flex-1 flex flex-col items-center md:items-start w-full px-0 md:px-0 about-slide-in-left about-delay-100">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-white drop-shadow-lg tracking-tight about-title-font">About Me</h2>
            <p className="text-gray-100 text-lg md:text-xl leading-relaxed mb-6 md:mb-8 w-full max-w-3xl about-paragraph-font">
              <span className="text-blue-200 font-bold">MERN Stack Developer</span> with 1+ years of experience building web applications using modern frameworks.<br/>
              I love creating seamless user experiences and robust backend systems.<br/>
              My goal is to deliver <span className="text-blue-300 font-semibold">high-quality, maintainable code</span> and collaborate with teams to bring ideas to life.
            </p>
            
            {/* View Skills redirect button */}
            <div className="mt-4 md:mt-6 w-full flex justify-center md:justify-start">
              <a
                href="#skills"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold px-8 py-3.5 rounded-full shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/35 hover:-translate-y-0.5 transition-all duration-300 group"
              >
                <span>View My Skills</span>
                <svg 
                  className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2.5" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>
            
            {/* History Button - centered after redirect button */}
            <div className="flex justify-center w-full max-w-3xl mt-6">
              <a
                href="#history"
                className="group relative flex items-center justify-center w-20 h-20 bg-blue-600/70 dark:bg-blue-500/70 hover:bg-blue-700/80 dark:hover:bg-blue-400/80 backdrop-blur-sm rounded-full shadow-lg transition-all duration-500 hover:scale-125 hover:shadow-2xl hover:shadow-blue-500/50 animate-pulse hover:animate-none border-2 border-blue-300/30 dark:border-blue-400/30 hover:border-blue-500/60 dark:hover:border-blue-300/60"
                title="View History"
              >
                <FaHistory className="text-white text-3xl transition-all duration-500 group-hover:rotate-180 group-hover:scale-110 drop-shadow-lg" />
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900/90 dark:bg-gray-700/90 text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap backdrop-blur-sm border border-gray-600/30 shadow-xl">
                  View History
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900/90 dark:border-t-gray-700/90"></div>
                </div>
                {/* Animated ring effect */}
                <div className="absolute inset-0 rounded-full border-2 border-blue-400/50 animate-ping"></div>
              </a>
            </div>
          </div>
          
          {/* Profile image - shows after scrolling on mobile, on right side on desktop */}
          <div ref={imageRef} className="flex-1 flex justify-center items-start w-full about-slide-in-right about-delay-200 md:-mt-56">
            <img src={newImg} alt="Portrait of Raj Laiya, MERN Stack Developer" className="about-profile-img w-full max-w-2xl h-auto object-contain" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
