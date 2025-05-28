import React from 'react';
import { ArrowDown } from 'lucide-react';

const HERO_CONTENT = {
  greeting: "Welcome to my",
  title: "Portfolio World!",
  descriptionIntro: "I'm a Computer Science student pursuing a Bachelor's in Computer Applications, ",
  descriptionFocus: "always exploring and building new technologies for our ",
  descriptionHighlight: "Green Earth.",
  ctaText: "View My Work",
  ctaLink: "#projects",
};

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center md:text-left pt-24 pb-16 text-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto md:mx-0">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="block text-gray-100">
              {HERO_CONTENT.greeting}
            </span>
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              {HERO_CONTENT.title}
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-10 leading-relaxed">
            {HERO_CONTENT.descriptionIntro}
            {HERO_CONTENT.descriptionFocus}
            <span className="text-green-400 font-medium">{HERO_CONTENT.descriptionHighlight}</span>.
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start items-center gap-4">
            <a
              href={HERO_CONTENT.ctaLink}
              className="
                bg-blue-600 text-white font-semibold
                py-3 px-8 rounded-lg
                hover:bg-blue-700
                transition-all duration-300 ease-in-out
                transform hover:scale-105
                flex items-center gap-2
                shadow-lg hover:shadow-blue-500/50
              "
            >
              {HERO_CONTENT.ctaText}
              <ArrowDown size={18} className="motion-safe:animate-bounce" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;