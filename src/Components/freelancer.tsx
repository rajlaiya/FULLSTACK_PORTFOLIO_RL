import React, { useState } from "react";
import "./freelancer.css";
import 'animate.css';
import { 
    FaUserTie, 
    FaGithub, 
    FaLinkedin, 
    FaEnvelope, 
    FaArrowRight, 
    FaChevronDown, 
    FaChevronUp, 
    FaLaptop, 
    FaClock, 
    FaCommentDots, 
    FaCheckCircle,
    FaGlobe
} from 'react-icons/fa';

interface FAQItem {
    question: string;
    answer: string;
}

const faqData: FAQItem[] = [
    {
        question: "Are you available for remote contracts?",
        answer: "Yes, I am currently focusing heavily on remote freelance projects. I have a dedicated home office setup with high-speed fiber internet, dual monitors, and standard dev environments. I am accustomed to working across global time zones (such as EST, CET, and IST) and can adjust my work hours to ensure team alignment."
    },
    {
        question: "What is your typical project workflow?",
        answer: "My workflow is structured to ensure transparency and quality: 1) Requirements gathering & scoping, 2) Interactive design mockups, 3) Milestone-based development with regular updates, 4) Rigorous QA & user testing, and 5) Final deployment and handoff with documentation support."
    },
    {
        question: "Which technologies do you specialize in?",
        answer: "I specialize in the MERN Stack (MongoDB, Express, React, Node.js), TypeScript, Vue.js, and Tailwind CSS. I also build immersive 3D web experiences using Three.js and React Three Fiber."
    },
    {
        question: "How do we stay in touch during the project?",
        answer: "I prioritize clean and active communication. We can use Slack, Discord, Microsoft Teams, or Email. I provide structured weekly progress reports, and we can set up Zoom/Google Meet video check-ins to review milestones."
    },
    {
        question: "What are your payment terms?",
        answer: "I work with a milestone-based payment structure. For most projects, we define clear deliverables (e.g., prototype, beta, launch), and payments are released upon successful completion of each milestone. A small retainer deposit is standard before work starts."
    },
    {
        question: "Do you provide post-project support and maintenance?",
        answer: "Yes, absolutely! I offer 30 days of free post-launch support to resolve any unexpected bugs. For long-term updates, hosting management, or content edits, I also offer monthly support/maintenance packages."
    }
];

const Freelancer: React.FC = () => {
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index);
    };

    return (
        <div className="freelancer-profile animated-bg px-4 py-8 sm:px-6 relative overflow-hidden">
            {/* Animated Background Gradients */}
            <div className="freelancer-bg-anim" />

            <div className="freelancer-container max-w-5xl mx-auto z-10 relative">
                {/* Hero Section */}
                <div className="flex flex-col items-center justify-center text-center gap-4 animate__animated animate__fadeInDown pt-8 pb-12 border-b border-gray-200 dark:border-gray-800">
                    {/* Status Indicator */}
                    <div className="inline-flex items-center gap-2 bg-green-500/10 text-green-600 dark:text-green-400 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider animate-pulse mb-2 border border-green-500/20">
                        <span className="h-2 w-2 rounded-full bg-green-500"></span>
                        Available for Remote Projects
                    </div>

                    <FaUserTie className="text-6xl text-blue-600 dark:text-blue-500 animate__animated animate__bounceIn" />
                    
                    <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl tracking-tight">
                        Freelance Software Engineer
                    </h1>
                    
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl font-medium font-sans">
                        Let's translate your business requirements into clean, production-grade applications. Specialized in responsive interfaces, secure APIs, and interactive visual designs.
                    </p>

                    {/* Socials & Profiles */}
                    <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
                        <a
                            href="https://www.freelancer.com/u/rajlaiya"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2.5 rounded-lg shadow-md transition-all duration-300 transform hover:-translate-y-0.5"
                            title="Freelancer Profile"
                        >
                            Hire Me on Freelancer <FaArrowRight className="text-xs" />
                        </a>
                        <a
                            href="mailto:rajlaiya2017@gmail.com"
                            className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-100 font-semibold px-5 py-2.5 rounded-lg shadow-md transition-all duration-300 border border-gray-200 dark:border-gray-700 transform hover:-translate-y-0.5"
                            title="Email Me"
                        >
                            <FaEnvelope /> Email Me
                        </a>
                    </div>

                    <div className="flex items-center gap-6 mt-6">
                        <a
                            href="https://github.com/rajlaiya"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 dark:text-gray-400 text-3xl hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
                            title="GitHub"
                        >
                            <FaGithub />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/rajlaiya"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 dark:text-blue-400 text-3xl hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-300"
                            title="LinkedIn"
                        >
                            <FaLinkedin />
                        </a>
                    </div>
                </div>

                {/* About Freelancing Section */}
                <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-7 flex flex-col gap-6 animate__animated animate__fadeInLeft">
                        <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">About My Freelance Operations</span>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                            Dedicated Remote Freelancer Tailored for Global Collaboration
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                            I operate primarily as a <strong>remote freelance engineer</strong>, working from a fully equipped modern workstation that ensures constant connectivity. Leveraging tools like Slack, Git, and Docker, I collaborate smoothly with product owners, designers, and development teams globally.
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                            My focus is to build performant and responsive solutions under tight deadlines while adhering to industry-standard coding conventions. Whether it's crafting high-conversion SaaS landing pages, configuring state management in Vue or React, or implementing secure backend routers in Node.js, I treat each project with extreme technical rigor.
                        </p>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                            <div className="flex items-start gap-3">
                                <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h4 className="font-semibold text-gray-800 dark:text-gray-200">100% Remote-Ready</h4>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Stable workspace, high-speed fiber internet</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h4 className="font-semibold text-gray-800 dark:text-gray-200">Flexible Timezones</h4>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Overlap hours with US/European schedules</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h4 className="font-semibold text-gray-800 dark:text-gray-200">Milestone Driven</h4>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Clear targets, demo links, and code handovers</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h4 className="font-semibold text-gray-800 dark:text-gray-200">Transparent Updates</h4>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Regular progress demos and Loom video reports</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-5 grid grid-cols-1 gap-6 animate__animated animate__fadeInRight">
                        <div className="bg-white dark:bg-gray-800/80 p-6 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700/50 flex gap-4 hover:shadow-2xl transition-all duration-300">
                            <div className="p-3 bg-blue-500/10 rounded-xl text-blue-600 dark:text-blue-400 h-fit">
                                <FaLaptop className="text-2xl" />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-800 dark:text-gray-200 text-lg mb-1">Async Work Expert</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                    Highly communicative using writing, checklists, and videos to save meeting time and fast-track features.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-gray-800/80 p-6 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700/50 flex gap-4 hover:shadow-2xl transition-all duration-300">
                            <div className="p-3 bg-indigo-500/10 rounded-xl text-indigo-600 dark:text-indigo-400 h-fit">
                                <FaClock className="text-2xl" />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-800 dark:text-gray-200 text-lg mb-1">On-Time Delivery</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                    Disciplined scheduler who meets client deadlines and provides proactive alerts for potential blockers.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-gray-800/80 p-6 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700/50 flex gap-4 hover:shadow-2xl transition-all duration-300">
                            <div className="p-3 bg-purple-500/10 rounded-xl text-purple-600 dark:text-purple-400 h-fit">
                                <FaGlobe className="text-2xl" />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-800 dark:text-gray-200 text-lg mb-1">Global Coverage</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                    Supporting businesses across continents with zero latency in collaboration and output delivery.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="mt-24 w-full max-w-3xl mx-auto pb-16 animate__animated animate__fadeInUp">
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 block text-center mb-2">Have Questions?</span>
                    <h2 className="text-3xl font-extrabold text-center mb-10 text-gray-900 dark:text-white">
                        Freelance Projects FAQ
                    </h2>
                    
                    <div className="space-y-4">
                        {faqData.map((faq, idx) => {
                            const isOpen = openFaqIndex === idx;
                            return (
                                <div 
                                    key={idx} 
                                    className="bg-white dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm transition-all duration-300"
                                >
                                    <button
                                        onClick={() => toggleFaq(idx)}
                                        className="w-full flex items-center justify-between p-5 text-left font-semibold text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-300"
                                    >
                                        <span className="pr-4">{faq.question}</span>
                                        {isOpen ? (
                                            <FaChevronUp className="text-blue-600 dark:text-blue-400 flex-shrink-0" />
                                        ) : (
                                            <FaChevronDown className="text-gray-400 dark:text-gray-500 flex-shrink-0" />
                                        )}
                                    </button>
                                    
                                    <div 
                                        className={`faq-answer-container transition-all duration-300 ease-in-out ${
                                            isOpen ? "faq-answer-open" : "faq-answer-closed"
                                        }`}
                                    >
                                        <div className="p-5 pt-0 text-gray-600 dark:text-gray-300 border-t border-gray-100 dark:border-gray-800 leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Freelancer;