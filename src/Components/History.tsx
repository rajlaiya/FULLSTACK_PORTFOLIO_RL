import React from 'react';
import { FaGraduationCap, FaBriefcase, FaUniversity, FaCertificate } from 'react-icons/fa';

interface EducationItem {
  degree: string;
  institution: string;
  year: string;
  icon: React.ReactNode;
  details: string;
}

interface ExperienceItem {
  title: string;
  company: string;
  year: string;
  icon: React.ReactNode;
  details: string;
}

const education: EducationItem[] = [
  {
    degree: 'Diploma in Electronics & Communication',
    institution: 'GTU University',
    year: '2018-2021',
    icon: <FaUniversity className="text-blue-500 text-xl" />,
    details: 'Graduated with 1st class distinction, specialized in Digital electronics, computer networks and VLSI design.',
  },
  {
    degree: 'Bachelor of Engineering in Electronics & Communication',
    institution: 'GTU University',
    year: '2021-2024',
    icon: <FaCertificate className="text-yellow-500 text-xl" />,
    details: 'Graduated with 1st class distinction, specialized in Digital electronics, computer networks, AI and modern web development.',
  },
];

const experience: ExperienceItem[] = [
  {
    title: 'Mern stack developer',
    company: 'Evron technology',
    year: '2026-Present',
    icon: <FaBriefcase className="text-blue-500 text-xl animate-pulse" />,
    details: 'Live project handling, building robust full-stack web solutions, and managing production application deployments.',
  },
  {
    title: 'Junior Vuejs Frontend Developer Trainee',
    company: 'Kombee',
    year: 'Feb 2024-May 2024',
    icon: <FaBriefcase className="text-purple-500 text-xl" />,
    details: 'Built and maintained client-facing web applications using Vue.js.',
  },
];

const bgAnim = (
  <div className="absolute inset-0 -z-10 overflow-hidden">
    <div className="absolute top-0 left-1/2 w-[120vw] h-[120vw] -translate-x-1/2 bg-gradient-to-br from-blue-100/40 via-purple-100/30 to-pink-100/20 dark:from-blue-900/30 dark:via-purple-900/20 dark:to-pink-900/10 rounded-full blur-3xl animate-spin-slow" />
    <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tr from-green-200/30 to-blue-200/10 dark:from-green-900/20 dark:to-blue-900/10 rounded-full blur-2xl animate-pulse" />
  </div>
);

const History = () => {
  return (
    <section
      className="py-20 bg-white dark:bg-gray-900 w-full relative overflow-hidden min-h-screen animate-fade-in-up"
      id="history"
    >
      {bgAnim}
      <div className="w-full max-w-6xl mx-auto px-4 relative z-10 flex flex-col gap-12">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 drop-shadow-sm tracking-tight">
            My Professional Journey
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            A timeline of my educational credentials and professional career milestones.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
          {/* Education column */}
          <div className="flex flex-col gap-6">
            <h3 className="text-2xl font-extrabold text-blue-700 dark:text-blue-300 pb-4 border-b border-gray-100 dark:border-gray-800 flex items-center gap-3">
              <FaGraduationCap className="text-3xl" /> Educational Details
            </h3>
            <div className="flex flex-col mt-4 pl-2">
              {education.map((edu, i) => (
                <div
                  key={i}
                  className="group relative pl-8 pb-10 last:pb-0 border-l-2 border-blue-200 dark:border-gray-800 transition-all duration-300 hover:border-blue-500"
                >
                  {/* Timeline Dot */}
                  <div className="absolute -left-[11px] top-1.5 w-5 h-5 rounded-full bg-white dark:bg-gray-900 border-2 border-blue-400 dark:border-gray-700 flex items-center justify-center group-hover:border-blue-500 group-hover:scale-110 transition-all duration-300">
                    <div className="w-2.5 h-2.5 rounded-full bg-blue-400 dark:bg-blue-600 group-hover:bg-blue-500 transition-colors" />
                  </div>

                  {/* Content Area */}
                  <div className="flex flex-col gap-1.5 translate-x-0 group-hover:translate-x-3 transition-transform duration-300 ease-out bg-white/50 dark:bg-gray-900/50 p-5 rounded-xl border border-transparent hover:border-blue-100 dark:hover:border-gray-800 hover:bg-white dark:hover:bg-gray-800 shadow-sm hover:shadow-md">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/40 px-2.5 py-1 rounded-full">
                        {edu.year}
                      </span>
                      <span className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400">
                        {edu.icon} {edu.institution}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold text-gray-800 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {edu.degree}
                    </h4>

                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {edu.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience column */}
          <div className="flex flex-col gap-6">
            <h3 className="text-2xl font-extrabold text-purple-700 dark:text-purple-300 pb-4 border-b border-gray-100 dark:border-gray-800 flex items-center gap-3">
              <FaBriefcase className="text-3xl" /> Professional Experience
            </h3>
            <div className="flex flex-col mt-4 pl-2">
              {experience.map((exp, i) => (
                <div
                  key={i}
                  className="group relative pl-8 pb-10 last:pb-0 border-l-2 border-purple-200 dark:border-gray-800 transition-all duration-300 hover:border-purple-500"
                >
                  {/* Timeline Dot */}
                  <div className="absolute -left-[11px] top-1.5 w-5 h-5 rounded-full bg-white dark:bg-gray-900 border-2 border-purple-400 dark:border-gray-700 group-hover:border-purple-500 group-hover:scale-110 transition-all duration-300 flex items-center justify-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-purple-400 dark:bg-purple-600 group-hover:bg-purple-500 transition-colors" />
                  </div>

                  {/* Content Area */}
                  <div className="flex flex-col gap-1.5 translate-x-0 group-hover:translate-x-3 transition-transform duration-300 ease-out bg-white/50 dark:bg-gray-900/50 p-5 rounded-xl border border-transparent hover:border-purple-100 dark:hover:border-gray-800 hover:bg-white dark:hover:bg-gray-800 shadow-sm hover:shadow-md">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs font-mono font-bold text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/40 px-2.5 py-1 rounded-full">
                        {exp.year}
                      </span>
                      <span className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400">
                        {exp.icon} {exp.company}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold text-gray-800 dark:text-gray-100 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      {exp.title}
                    </h4>

                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {exp.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
