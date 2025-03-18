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
            
            <a 
              href="#contact" 
              className="bg-gray-800 border border-gray-700 text-white font-medium py-3 px-6 rounded-md hover:bg-gray-700 transition duration-200"
            >
              Contact Me
            </a>
          </div>
          
          {/* Social icons */}
          <div className="flex gap-4 mt-8">
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
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