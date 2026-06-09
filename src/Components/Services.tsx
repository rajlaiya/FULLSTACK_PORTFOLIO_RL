import React, { useState } from 'react';
import './services.css';
import 'animate.css';

interface ServiceItem {
  title: string;
  description: string;
  icon: (className: string) => React.ReactNode;
}

const services: ServiceItem[] = [
  {
    title: 'Frontend designing and development',
    description: 'Crafting responsive, interactive, and pixel-perfect user interfaces using modern web standards, modern React/TypeScript, and sleek animations.',
    icon: (className: string) => (
      <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v17.792M14.25 3.104v17.792M3.75 9.75h16.5M3.75 14.25h16.5M2.25 6a2.25 2.25 0 0 1 2.25-2.25h15a2.25 2.25 0 0 1 2.25 2.25v12a2.25 2.25 0 0 1-2.25 2.25h-15A2.25 2.25 0 0 1 2.25 18V6Z" />
      </svg>
    )
  },
  {
    title: 'Backend Development',
    description: 'Designing robust API architectures, databases, authentication flows, and server-side logics that scale efficiently.',
    icon: (className: string) => (
      <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a3 3 0 0 1 3-3m0 0a3 3 0 0 1 3-3h7.5a3 3 0 0 1 3 3m-13.5 0h13.5m-13.5 0a3 3 0 0 1-3 3" />
      </svg>
    )
  },
  {
    title: 'mern-stack web development',
    description: 'End-to-end full-stack web applications built on MongoDB, Express.js, React, and Node.js for high performance and seamless deployment.',
    icon: (className: string) => (
      <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m-11.142 4.5L12 16.5l9.75-5.25-4.179-2.25m-11.142 4.5L2.25 16.5 12 21.75l9.75-5.25-4.179-2.25" />
      </svg>
    )
  },
  {
    title: 'IT-customer services',
    description: 'Providing comprehensive IT support, customer success engineering, technical troubleshooting, and client relationship management.',
    icon: (className: string) => (
      <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.08.382.12.782.12 1.193 0 2.455-1.442 4.567-3.5 5.525M17.25 8.511a7.5 7.5 0 1 0-10.5 0M17.25 8.511a7.486 7.486 0 0 1 3 6.012M6.75 8.511a7.486 7.486 0 0 0-3 6.012m0 0a8.97 8.97 0 0 0 6.75 3.197h1.5a8.97 8.97 0 0 0 6.75-3.197m-15 0c-.08.382-.12.782-.12 1.193 0 2.455 1.442 4.567 3.5 5.525" />
      </svg>
    )
  },
  {
    title: 'bug solving',
    description: 'Debugging complex errors, optimizing performance bottlenecks, resolving security vulnerabilities, and ensuring smooth deployment cycles.',
    icon: (className: string) => (
      <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 15.752ZM12 15.75h.007v.008H12v-.008Z" />
      </svg>
    )
  },
  {
    title: 'Backlog project handling',
    description: 'Reviving legacy projects, resolving outstanding tasks, updating dependencies, refactoring stale code bases, and driving delivery.',
    icon: (className: string) => (
      <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 0 1 2.008 1.24l.885 1.77a2.25 2.25 0 0 0 2.007 1.24h1.98a2.25 2.25 0 0 0 2.007-1.24l.885-1.77a2.25 2.25 0 0 1 2.007-1.24h3.86m-18 0h18a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v4.5A2.25 2.25 0 0 0 2.25 13.5Z" />
      </svg>
    )
  },
  {
    title: 'redevelopment and redesign websites',
    description: 'Modernizing out-of-date websites with modern UI designs, responsive mobile layouts, SEO optimizations, and faster loading performance.',
    icon: (className: string) => (
      <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1-1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.726 6.726 0 0 1-3.42-3.42" />
      </svg>
    )
  },
  {
    title: 'AI Vibe coding Projects',
    description: 'Building AI-first software, LLM prompt engineering integrations, autonomous agent tools, and fast prototype iterations using cutting-edge AI environments.',
    icon: (className: string) => (
      <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 21l-.813-5.096L3 15l5.096-.813L9 9l.813 5.096L15 15l-5.187.904zm7.078-9.078L16 10.5l-.89-2.672L12.5 7l2.61-1.172L16 3.5l.89 2.672L19.5 7l-2.61 1.172z" />
      </svg>
    )
  }
];

const Services = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  return (
    <div 
      className="services-profile animated-bg"
      onMouseMove={handleMouseMove}
    >
      <div className="services-content max-w-4xl mx-auto px-4 py-16 animate__animated animate__fadeInDown w-full">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-blue-600 dark:text-blue-400 text-center tracking-tight">
          My Services
        </h2>
        <p className="text-center text-gray-500 dark:text-gray-400 mb-16 max-w-xl mx-auto">
          Here are the specialized services I offer to help bring your ideas to life, solve technical bottlenecks, and optimize your digital products.
        </p>
        
        <div className="skills-column-list border-t border-gray-200 dark:border-gray-800">
          {services.map((service, index) => {
            const displayIndex = String(index + 1).padStart(2, '0');
            return (
              <div
                key={index}
                className="skill-row-item py-6 md:py-8 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between cursor-pointer group transition-all duration-300"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="flex items-start gap-6 md:gap-10 w-full pr-4">
                  <span className="skill-row-index text-sm font-mono text-blue-500/70 dark:text-blue-400/50 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors duration-300 pt-1">
                    {displayIndex}
                  </span>
                  
                  <div className="flex flex-col gap-2 flex-1">
                    <span className="skill-row-name text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:translate-x-2 transition-all duration-300 ease-out">
                      {service.title}
                    </span>
                    <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 max-w-2xl group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
                      {service.description}
                    </p>
                  </div>
                </div>
                
                {/* Mobile view inline icon */}
                <div className="block md:hidden flex-shrink-0">
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/40 dark:bg-gray-800/40 border border-gray-200 dark:border-gray-700">
                    {service.icon("w-6 h-6")}
                  </div>
                </div>

                {/* Arrow indicator for desktop hover */}
                <div className="hidden md:block skill-row-arrow opacity-0 group-hover:opacity-100 group-hover:-translate-x-3 transition-all duration-300 ease-out flex-shrink-0">
                  <svg 
                    className="w-8 h-8 text-blue-500 dark:text-blue-400" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2.5" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Interactive cursor-following hover image */}
      <div
        className={`hidden md:flex floating-hover-image-container pointer-events-none fixed left-0 top-0 z-50 rounded-2xl border border-white/40 dark:border-gray-700/50 p-6 bg-white/90 dark:bg-gray-900/90 shadow-2xl backdrop-blur-md items-center justify-center transition-all duration-200 ease-out ${
          isVisible && hoveredIndex !== null ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
        }`}
        style={{
          width: '140px',
          height: '140px',
          transform: `translate3d(${mousePos.x + 25}px, ${mousePos.y + 25}px, 0)`,
        }}
      >
        {hoveredIndex !== null && services[hoveredIndex] && (
          <div 
            className="animate__animated animate__zoomIn animate__faster"
            key={hoveredIndex}
          >
            {services[hoveredIndex].icon("w-20 h-20")}
          </div>
        )}
      </div>

      <div className="services-bg-anim"></div>
      
      <footer className="services-footer">
        © 2025 Raj laiya. All rights reserved.
      </footer>
    </div>
  );
};

export default Services;

