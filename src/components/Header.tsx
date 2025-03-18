import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-12 flex justify-between items-center transition-all duration-300 ${
        isScrolled 
          ? 'bg-gray-900/95 backdrop-blur-sm shadow-md' 
          : 'bg-transparent'
      }`}
    >
      <a 
        href="/" 
        className="text-xl font-bold text-blue-400 hover:text-blue-300 transition-colors duration-200"
      >
        Harshal Sawant
      </a>
      
      {/* Desktop Navigation */}
      <nav className="hidden md:block">
        <ul className="flex items-center space-x-6">
          <li>
            <a 
              href="#about" 
              className="text-gray-300 hover:text-white transition duration-200"
            >
              About
            </a>
          </li>
          <li>
            <a 
              href="#projects" 
              className="text-gray-300 hover:text-white transition duration-200"
            >
              Projects
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              className="text-gray-300 hover:text-white transition duration-200"
            >
              Contact
            </a>
          </li>
          <li>
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md ml-2 transition duration-200 flex items-center"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
      
      {/* Mobile Menu Button */}
      <button 
        className="md:hidden text-gray-300 hover:text-white"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      
      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-sm shadow-lg py-4 px-6 md:hidden">
          <ul className="flex flex-col space-y-3">
            <li>
              <a 
                href="#about" 
                className="block py-2 text-gray-300 hover:text-white transition duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="#projects" 
                className="block py-2 text-gray-300 hover:text-white transition duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Projects
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                className="block py-2 text-gray-300 hover:text-white transition duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
            </li>
            <li>
              <a 
                href="/resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md mt-2 text-center transition duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;