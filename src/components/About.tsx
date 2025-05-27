const About: React.FC = () => {
    return (
      <section id="about" className="py-20 w-full max-w-3xl">
        <h2 className="text-3xl font-bold mb-6 text-left">About Me</h2>
        <p className="text-gray-400 leading-relaxed">
          I am a like to work on softwares with a strong focus on creating high-quality, user-friendly applications, stuffs.
          My core languages includes <code>C++, Python</code>. I am a continuous learner and always strive to stay
          up-to-date with the latest technologies and best practices.
        </p>
  
        <div className="mt-6 text-left">
          <h3 className="text-3xl font-bold mb-3">My Knowing languages</h3>
          <ul className="flex flex-wrap gap-2">
            <li className="bg-gray-800 text-yellow-300 px-3 py-1 rounded-lg">C / C++</li>
            <li className="bg-gray-800 text-yellow-300 px-3 py-1 rounded-lg">Rust</li>
            <li className="bg-gray-800 text-yellow-300 px-3 py-1 rounded-lg">Python</li>
            <li className="bg-gray-800 text-yellow-300 px-3 py-1 rounded-lg">nix</li>
          </ul>
        </div>
      </section>
    );
  };
  
  export default About;