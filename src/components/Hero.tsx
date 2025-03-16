const Hero: React.FC = () => {
    return (
        <section id="hero" className="text-center py-20">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to my portfolio World!</h1>
            <p className="text-lg md:text-xl text-gray-400 mb-8">Always trying to build new technologies for my Green Earth.</p>
            <a href="#projects" className="bg-blue-500 shadow-lg shadow-blue-500/50 hover:underline text-white font-bold py-4 px-8 rounded-full transition duration-300 mr-5 transition-all hover:scale-110">
                View My Work
            </a>
            <a href="/resume.pdf" className="bg-cyan-500 shadow-lg shadow-cyan-500/50 hover:underline text-white font-bold py-4 px-8 rounded-full transition duration-300">
                RESUME
            </a>
      </section >
    );
  };

export default Hero;