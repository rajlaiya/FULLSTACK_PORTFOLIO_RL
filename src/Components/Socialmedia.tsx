import { FaLinkedin, FaInstagram, FaYoutube, FaUserTie } from "react-icons/fa";
import "./Socialmedia.css";

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/laiya-raj-y21e502d01",
    icon: <FaLinkedin size={40} />,
    desc: "Connect with me on LinkedIn for professional updates and networking.",
  },

  {
    name: "Instagram",
    url: "https://instagram.com/yourhandle",
    icon: <FaInstagram size={40} />,
    desc: "Follow me on Instagram for creative and personal updates.",
  },

  {
    name: "Youtube",
    url: "https://youtube.com/rajlaiya",
    icon: <FaYoutube size={40} />,
    desc: "Subscribe to me on Youtube for Coding contents.",
  },
  
  {
    name: "Freelancer",
    url: "#freelancer",
    icon: <FaUserTie size={40} />,
    desc: "Hire me for freelance projects and professional services.",
  },
];

const Socialmedia = () => (
  <section className="relative min-h-screen flex flex-col justify-center items-center py-20 overflow-hidden bg-gradient-to-br from-gray-100 via-blue-50 to-purple-100 dark:from-gray-900 dark:via-blue-950 dark:to-purple-950">
    {/* Background Animation */}
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute top-0 left-1/2 w-[120vw] h-[120vw] -translate-x-1/2 bg-gradient-to-br from-blue-200/40 via-purple-200/30 to-pink-200/20 dark:from-blue-900/30 dark:via-purple-900/20 dark:to-pink-900/10 rounded-full blur-3xl animate-spin-slow" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tr from-green-200/30 to-blue-200/10 dark:from-green-900/20 dark:to-blue-900/10 rounded-full blur-2xl animate-pulse" />
    </div>
    <h2 className="text-4xl font-extrabold mb-12 text-blue-700 dark:text-blue-300 text-center drop-shadow-lg">Social Media</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 w-full max-w-7xl px-4">
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          {...(link.name === "Freelancer" ? {} : { target: "_blank", rel: "noopener noreferrer" })}
          className="flip-card group block w-full h-80 max-w-xs mx-auto cursor-pointer"
        >
          <div className="flip-card-inner w-full h-full">
            <div className="flip-card-front glass-effect p-8 flex flex-col items-center justify-center h-80 rounded-2xl shadow-xl transition-all duration-300 group-hover:scale-105">
              <span className="mb-4 text-blue-600 dark:text-blue-300">{link.icon}</span>
              <span className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{link.name}</span>
              <span className="text-base text-gray-500 dark:text-gray-300 text-center">{link.desc}</span>
            </div>
            <div className="flip-card-back glass-effect p-8 flex flex-col items-center justify-center h-80 rounded-2xl shadow-xl">
              <span className="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-2">Visit</span>
              <span className="text-xl font-bold text-gray-900 dark:text-white mb-4">{link.name}</span>
              <span className="text-base text-blue-500 dark:text-blue-200">Click to open</span>
            </div>
          </div>
        </a>
      ))}
    </div>
  </section>
);

export default Socialmedia;
