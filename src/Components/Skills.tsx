import React, { useState } from 'react';
import './services.css'; 
import '../skills-animations.css';

const skills = [
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
  { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
  { name: 'REST APIs', icon: 'https://img.icons8.com/ios-filled/50/3b82f6/api-settings.png' },
];

const Skills = () => {
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
    <section className="py-20 services-profile animated-bg" id="skills" onMouseMove={handleMouseMove}>
      <div className="services-content max-w-4xl mx-auto px-4 py-10 w-full animate__animated animate__fadeIn">
        <h2 className="text-4xl font-extrabold mb-12 text-blue-600 dark:text-blue-400 text-center tracking-tight">
          Skills & Technologies
        </h2>
        
        <div className="skills-column-list border-t border-gray-200 dark:border-gray-800">
          {skills.map((skill, index) => {
            const displayIndex = String(index + 1).padStart(2, '0');
            return (
              <div
                key={index}
                className="skill-row-item py-6 md:py-8 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between cursor-pointer group transition-all duration-300"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="flex items-center gap-6 md:gap-10">
                  <span className="skill-row-index text-sm font-mono text-blue-500/70 dark:text-blue-400/50 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors duration-300">
                    {displayIndex}
                  </span>
                  
                  <span className="skill-row-name text-2xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:translate-x-3 transition-all duration-300 ease-out">
                    {skill.name}
                  </span>
                </div>
                
                {/* Mobile view inline icon */}
                <div className="block md:hidden">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-10 h-10 object-contain p-1.5 rounded-lg bg-white/40 dark:bg-gray-800/40 border border-gray-200 dark:border-gray-700"
                  />
                </div>

                {/* Arrow indicator for desktop hover */}
                <div className="hidden md:block skill-row-arrow opacity-0 group-hover:opacity-100 group-hover:-translate-x-3 transition-all duration-300 ease-out">
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
        {hoveredIndex !== null && (
          <img
            src={skills[hoveredIndex].icon}
            alt={skills[hoveredIndex].name}
            className="w-20 h-20 object-contain animate__animated animate__zoomIn animate__faster"
            key={hoveredIndex} // Reset animation key when index changes
          />
        )}
      </div>
    </section>
  );
};

export default Skills;
