import './Resume.css'; // Add this at the top

// const resumeData = {
//   name: 'John Doe',
//   title: 'Fullstack Developer',
//   summary: 'Experienced Fullstack Developer with a passion for building scalable web applications and leading teams to deliver high-quality solutions.',
//   contact: {
//     email: 'john.doe@email.com',
//     phone: '+1 234 567 8901',
//     linkedin: 'linkedin.com/in/johndoe',
//     github: 'github.com/johndoe',
//   },
//   skills: [
//     'React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Tailwind CSS', 'Redux', 'REST APIs', 'Docker', 'Jest',
//   ],
//   experience: [
//     {
//       role: 'Lead Fullstack Developer',
//       company: 'Tech Solutions Inc.',
//       period: '2023 - Present',
//       details: 'Leading a team of developers to build SaaS products and deliver client solutions.'
//     },
//     {
//       role: 'Frontend Developer',
//       company: 'Web Creators',
//       period: '2020 - 2023',
//       details: 'Developed modern UIs and collaborated with backend teams.'
//     },
//   ],
//   education: [
//     {
//       degree: 'B.Tech in Computer Science',
//       place: 'ABC University',
//       year: '2016 - 2020',
//     },
//     {
//       degree: 'Fullstack Developer Certification',
//       place: 'Coursera',
//       year: '2021',
//     },
//   ],
// };

const Resume = () => (
  <section className="py-20 bg-white dark:bg-gray-900 w-full min-h-screen flex flex-col items-center" id="resume">
    <h2 className="text-5xl font-bold mb-8 text-blue-600 dark:text-blue-400">Resume</h2>
    <div className="w-full max-w-4xl flex-1 flex justify-center items-center">
      <div className="w-full h-[80vh] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden border-2 border-blue-200 dark:border-blue-800 relative">
        <iframe
          src="/RAJ_LAIYA_RESUME_2025.pdf"
          title="Resume PDF"
          className="w-full h-full overflow-auto scroll-smooth resume-iframe"
        />
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none bg-gradient-to-b from-transparent via-transparent to-blue-50 dark:to-gray-900 animate-fade-in" />
      </div>
    </div>
  </section>
);

export default Resume;
