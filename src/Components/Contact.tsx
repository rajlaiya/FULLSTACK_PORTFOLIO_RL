import '../contact-animations.css';

const icons = {
  name: 'https://img.icons8.com/ios-filled/50/3b82f6/user.png',
  email: 'https://img.icons8.com/ios-filled/50/3b82f6/new-post.png',
  message: 'https://img.icons8.com/ios-filled/50/3b82f6/speech-bubble.png',
  phone: 'https://img.icons8.com/ios-filled/50/3b82f6/phone.png',
  linkedin: 'https://img.icons8.com/ios-filled/50/3b82f6/linkedin.png',
  github: 'https://img.icons8.com/ios-filled/50/3b82f6/github.png',
  linktree: 'https://img.icons8.com/ios-filled/50/3b82f6/linktree.png',
};

const contactLinks = [
  {
    label: 'Email',
    icon: icons.email,
    value: 'rajlaiya2017@gmail.com',
    href: 'https://mail.google.com/mail/u/0/#inbox?compose=VpCqJTCpnzrCCbMzbXlXhkqlqDltJXDBVKZcmsXDMFTtCjnFzLKqRKPcsRtxsFNtscqXlPQ',
    color: 'hover:bg-blue-100 dark:hover:bg-blue-900',
  },
  {
    label: 'Phone',
    icon: icons.phone,
    value: '+91 6355705208',
    href: 'tel:+916355705208',
    color: 'hover:bg-green-100 dark:hover:bg-green-900',
  },
  {
    label: 'LinkedIn',
    icon: icons.linkedin,
    value: 'linkedin.com/in/rajlaiya',
    href: 'https://www.linkedin.com/in/laiya-raj-y21e502d01',
    color: 'hover:bg-blue-200 dark:hover:bg-blue-800',
  },
  {
    label: 'GitHub',
    icon: icons.github,
    value: 'github.com/rajlaiya',
    href: 'https://github.com/rajlaiya',
    color: 'hover:bg-gray-200 dark:hover:bg-gray-800',
  },
  // {
  //   label: 'Linktree',
  //   icon: icons.linktree,
  //   value: 'linktr.ee/rajlaiya',
  //   href: 'https://linktr.ee/raj_laiya?utm_source=linktree_admin_share',
  //   color: 'hover:bg-purple-100 dark:hover:bg-purple-900',
  // },
];

const Contact = () => {
  const handleGoogleFormClick = () => {
    window.open('https://forms.gle/GMEXY757pXCYnX4n7', '_blank');
  };

  return (
    <section className="py-20 contact-animated-bg font-['Fira_Code','JetBrains_Mono','monospace']" id="contact">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6 text-white drop-shadow-lg contact-fade-in">Contact</h2>
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="bg-white/90 dark:bg-gray-900/90 p-8 flex flex-col items-center gap-6 contact-fade-in animate__animated animate__fadeInLeft rounded-lg shadow-lg">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">Get In Touch</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Ready to discuss your project? Fill out my Google Form and I'll get back to you soon!
              </p>
            </div>
            <button
              onClick={handleGoogleFormClick}
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 hover:from-blue-700 hover:via-purple-700 hover:to-pink-600 text-white font-bold text-lg rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transform"
            >
              <div className="flex items-center gap-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Open Contact Form
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-lg blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300 -z-10"></div>
            </button>
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
              Opens in a new tab • Quick & secure
            </p>
          </div>
          <div className="flex flex-col gap-6 contact-fade-in animate__animated animate__fadeInRight">
            <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2 animate__animated animate__pulse animate__infinite">
              <svg className="w-7 h-7 text-blue-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 10.5V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2h7.5" /></svg>
              Reach Me Directly
            </h3>
            <ul className="space-y-4">
              {contactLinks.map((link, i) => (
                <li key={i} className={`flex items-center gap-4 bg-white/80 dark:bg-gray-800/80 rounded-lg px-5 py-3 shadow hover:scale-105 transition-transform duration-300 ${link.color} animate__animated animate__pulse animate__infinite`}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 w-full">
                    <img src={link.icon} alt={link.label} className="w-7 h-7" />
                    <span className="font-semibold text-blue-700 dark:text-blue-200 text-base">{link.label}:</span>
                    <span className="text-gray-700 dark:text-gray-200 text-sm font-mono">{link.value}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
