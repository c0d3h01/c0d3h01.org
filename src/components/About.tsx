const About: React.FC = () => {
    return (
      <section id="about" className="py-20 w-full max-w-3xl">
        <h2 className="text-3xl font-bold mb-6 text-left">About Me</h2>
        <p className="text-gray-400 leading-relaxed">
          I am a passionate software developer with a strong focus on creating high-quality, user-friendly applications.
          My core skills include <code>C/CPP | Python</code>. I am a continuous learner and always strive to stay
          up-to-date with the latest technologies and best practices.
        </p>
  
        <div className="mt-6 text-left">
          <h3 className="text-3xl font-bold mb-3">Skills</h3>
          <ul className="flex flex-wrap gap-2">
            <li className="bg-gray-800 text-gray-300 px-3 py-1 rounded-lg">C/CPP</li>
            <li className="bg-gray-800 text-gray-300 px-3 py-1 rounded-lg">Python</li>
            <li className="bg-gray-800 text-gray-300 px-3 py-1 rounded-lg">nix</li>
            <li className="bg-gray-800 text-gray-300 px-3 py-1 rounded-lg">git</li>
            <li className="bg-gray-800 text-gray-300 px-3 py-1 rounded-lg">shell</li>
            <li className="bg-gray-800 text-gray-300 px-3 py-1 rounded-lg">Node.js</li>
            <li className="bg-gray-800 text-gray-300 px-3 py-1 rounded-lg">Tailwind CSS</li>
            <li className="bg-gray-800 text-gray-300 px-3 py-1 rounded-lg">SQL</li>
            <li className="bg-gray-800 text-gray-300 px-3 py-1 rounded-lg">MongoDB</li>
          </ul>
        </div>
      </section>
    );
  };
  
  export default About;