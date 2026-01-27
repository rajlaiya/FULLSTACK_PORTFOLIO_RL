import './services.css';
import 'animate.css';

const services = [
	{
		title: 'Web App Development',
		description:
			'Custom, scalable, and high-performance web applications using modern frameworks and best practices.',
		icon: 'https://img.icons8.com/ios-filled/50/3b82f6/web.png',
	},
	{
		title: 'Photo/Video Editing',
		description:
			'Professional editing services for photos and videos, enhancing quality and visual appeal.',
		icon: 'https://img.icons8.com/ios-filled/50/3b82f6/video-editing.png', // fixed icon
	},
	{
		title: 'Frontend UI Design',
		description:
			'Crafting intuitive and visually appealing user interfaces with a focus on user experience and accessibility.',
		icon: 'https://img.icons8.com/ios-filled/50/3b82f6/design.png', // fixed icon
	},
	{
		title: 'Basic API Integration',
		description:
			'Seamless integration of third-party APIs and services for enhanced functionality.',
		icon: 'https://img.icons8.com/ios-filled/50/3b82f6/api.png',
	},
	{
		title: 'Consulting about Tech',
		description:
			'Expert advice on technology solutions, software architecture, and best practices to optimize your projects.',
		icon: 'https://img.icons8.com/ios-filled/50/3b82f6/consultation.png',
	},
];

const Services = () => (
	<div className="services-profile animated-bg">
		<div className="services-content max-w-7xl mx-auto px-3 sm:px-4 animate__animated animate__fadeInDown">
			<h2 className="text-3xl font-bold mb-8 text-blue-600 dark:text-blue-400">
				Services
			</h2>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6 xl:gap-8 items-stretch">
				{services.map((service, i) => (
					<div
						key={i}
						className="flex flex-col items-center h-full
    bg-white/30 dark:bg-gray-800/40 
    rounded-xl shadow 
    p-6 xl:p-8 border border-white/30 dark:border-gray-700
    backdrop-blur-md
    hover:scale-105 hover:-translate-y-2 hover:shadow-2xl
    transition-all duration-500 animate__animated animate__zoomIn"
					>
						<img
							src={service.icon}
							alt={service.title}
							className="w-14 h-14 mb-4 animate__animated animate__bounceIn"
						/>
						<div className="text-lg font-semibold text-gray-900 dark:text-white mb-2 text-center w-full">
							{service.title}
						</div>
						<div className="text-gray-700 dark:text-gray-300 text-sm text-center">
							{service.description}
						</div>
					</div>
				))}
			</div>
		</div>
		<div className="services-bg-anim"></div>
		<footer className="services-footer">
			© 2025 Raj laiya. All rights reserved.
		</footer>
	</div>
);

export default Services;
