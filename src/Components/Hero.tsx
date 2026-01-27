const Hero = () => (
  <section className="bg-gradient-to-br from-blue-50 to-white py-20 px-8" id="hero">
    <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-center gap-10 min-h-screen">
      <div className="flex-1 text-center px-4 py-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Hi, I'm Raj laiya</h2>
        <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-blue-600">Fullstack Developer</h3>
        <p className="mb-8 text-gray-700 max-w-xl mx-auto">I build scalable websites with modern technologies. Passionate about clean code, and solving real-world problems.</p>
        <div className="flex justify-center">
          <a href="#contact" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-blue-700 transition">Contact Me</a>
        </div>
      </div>
      <div className="flex-1 flex justify-center px-4 py-8">
        <img src="/vite.svg" alt="Profile" className="w-56 h-56 rounded-full shadow-lg border-4 border-blue-100 object-cover" />
      </div>
    </div>
  </section>
);

export default Hero;
