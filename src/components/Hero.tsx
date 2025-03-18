import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center pt-20 pb-16">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto md:mx-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            <span className="block text-white">Welcome to my</span>
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Portfolio World!
            </span>
          </h1>
          
          <p className="text-lg text-gray-300 mb-8">
            I'm a passionate developer, always exploring and building new technologies 
            for our <span className="text-green-400">Green Earth</span>.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <a 
              href="#projects" 
              className="bg-blue-600 text-white font-medium py-3 px-6 rounded-md hover:bg-blue-700 transition duration-200 flex items-center gap-2"
            >
              View My Work
              <ArrowDown size={16} className="animate-bounce" />
            </a>           
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown size={20} className="text-gray-400" />
      </div>
    </section>
  );
};

export default Hero;