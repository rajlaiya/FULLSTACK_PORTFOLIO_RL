import React, { useState, useEffect } from "react";
import "./freelancer.css";
import 'animate.css';
import { FaUserTie, FaGithub, FaLinkedin, FaEnvelope, FaArrowRight, FaCode, FaPaintBrush, FaMobileAlt } from 'react-icons/fa';

const PROJECTS_COUNT = 24; // Example project count

// Add your services here
const services = [
    {
        title: "Web Development",
        icon: <FaCode className="text-4xl text-blue-500 mb-2" />,
        desc: "Building responsive and dynamic websites using modern technologies like React, Node.js, and more.",
    },
    {
        title: "Photo/Video Editing",
        icon: <FaPaintBrush className="text-4xl text-pink-500 mb-2" />,
        desc: "Editing photos and videos to create stunning visual content for various platforms.",
    },
    {
        title: "Frontend UI design",
        icon: <FaPaintBrush className="text-4xl text-purple-500 mb-2" />,
        desc: "Creating visually appealing and user-friendly interfaces for web applications.",
    },
    {
        title: "Solving Computer Science Problems",
        icon: <FaMobileAlt className="text-4xl text-green-500 mb-2" />,
        desc: "Providing solutions to complex computer science problems and algorithms.",
    },
];

const Freelancer: React.FC = () => {
    const [, setCount] = useState(0);

    // Animated counter
    useEffect(() => {
        let start = 0;
        const end = PROJECTS_COUNT;
        if (start === end) return;
        let incrementTime = 30;
        let timer = setInterval(() => {
            start += 1;
            setCount(start);
            if (start === end) clearInterval(timer);
        }, incrementTime);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="freelancer-profile animated-bg px-3 sm:px-6 relative overflow-hidden">
            {/* Animated Background */}
            <div className="freelancer-bg-anim" />

            <div className="freelancer-content flex flex-col items-center justify-center gap-4 animate__animated animate__fadeInDown pt-12">
                <FaUserTie className="text-6xl text-blue-500 animate__animated animate__bounceIn" title="Freelancer" />
                <h1 className="text-3xl font-bold mb-2 text-blue-700">Freelancer Profile</h1>
                <p className="text-lg text-gray-700 dark:text-gray-200 text-center max-w-xl animate__animated animate__fadeInUp font-serif italic">
                    Welcome to my Freelancer page! I am a passionate fullstack developer with a proven track record of delivering high-quality projects for clients worldwide. Let's build something amazing together!
                </p>
                <div className="flex items-center gap-4 mt-4 animate__animated animate__pulse animate__infinite">
                    <a
                        href="https://www.freelancer.com/u/rajlaiya"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="freelancer-link flex items-center gap-2 bg-blue-100 hover:bg-blue-200 text-blue-700 px-4 py-2 rounded shadow transition-all duration-300"
                        title="Freelancer Profile"
                    >
                        <FaUserTie /> Freelancer Profile <FaArrowRight />
                    </a>
                    <a
                        href="mailto:rajlaiya2017@gmail.com"
                        className="freelancer-link flex items-center gap-2 bg-green-100 hover:bg-green-200 text-green-700 px-4 py-2 rounded shadow transition-all duration-300"
                        title="Email Me"
                    >
                        <FaEnvelope /> Email Me
                    </a>
                </div>
                <div className="flex items-center gap-6 mt-6 animate__animated animate__fadeInUp">
                    <a
                        href="https://github.com/rajlaiya"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-800 dark:text-gray-200 text-3xl hover:text-blue-600 transition"
                        title="GitHub"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/rajlaiya"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-700 text-3xl hover:text-blue-900 transition"
                        title="LinkedIn"
                    >
                        <FaLinkedin />
                    </a>
                </div>
                
            </div>

            {/* Services Section */}
            <div className="mt-12 w-full max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold text-center mb-8 text-blue-700">My Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, idx) => (
                        <div
                            key={idx}
                            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
                        >
                            {service.icon}
                            <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-300">{service.title}</h3>
                            <p className="text-gray-600 dark:text-gray-200">{service.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            <footer className="freelancer-footer">
                © 2025 Raj laiya. All rights reserved.
            </footer>
        </div>
    );
};

export default Freelancer;