import React from 'react';

const technicalSkills = [
  { id: 'cpp', name: 'C / C++' },
  { id: 'rust', name: 'Rust' },
  { id: 'python', name: 'Python' },
  { id: 'nix', name: 'Nix' },
  { id: 'javascript', name: 'JavaScript' },
];

const About: React.FC = () => {
  const sectionTitleClass = "text-3xl lg:text-4xl font-bold mb-6 text-gray-100";
  const subHeadingClass = "text-2xl lg:text-3xl font-semibold mb-5 text-gray-100";
  const paragraphClass = "text-lg text-gray-300 leading-relaxed";
  const skillTagClass = "bg-gray-700/60 backdrop-blur-sm text-yellow-300 px-4 py-2 rounded-lg text-sm font-medium shadow-md transition-all duration-200 hover:bg-gray-600/70 hover:scale-105 cursor-default";

  return (
    <section id="about" className="py-16 md:py-20 text-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto md:mx-0 text-center md:text-left">
          <h2 className={sectionTitleClass}>
            About Me
          </h2>
          <p className={`${paragraphClass} mb-10`}>
            I am passionate about crafting high-quality, user-friendly software applications.
            With a strong foundation in core programming languages, I am a dedicated and
            continuous learner, always eager to explore and master emerging technologies
            and adopt best practices in this ever-evolving field.
          </p>

          <div>
            <h3 className={subHeadingClass}>
              Technical Skills
            </h3>
            {technicalSkills.length > 0 ? (
              <ul className="flex flex-wrap gap-3 justify-center md:justify-start">
                {technicalSkills.map((skill) => (
                  <li key={skill.id} className={skillTagClass}>
                    {skill.name}
                  </li>
                ))}
              </ul>
            ) : (
              <p className={paragraphClass}>Skills section coming soon!</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;