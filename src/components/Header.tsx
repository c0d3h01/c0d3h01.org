import React, { useState, useEffect, useCallback } from 'react';
import { Menu, X } from 'lucide-react';

// Define navigation items in an array for better maintainability and to reduce repetition
const navItems = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
  {
    href: '/resume.pdf',
    label: 'Resume',
    isButton: true,
    external: true,
  },
];

// Define a type for individual navigation items for better type safety
interface NavItem {
  href: string;
  label: string;
  isButton?: boolean;
  external?: boolean;
}

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const SCROLL_THRESHOLD = 20; // Use a constant for the scroll threshold

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    };

    window.addEventListener('scroll', handleScroll);
    // Cleanup function to remove the event listener
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount

  // useCallback to memoize the function, preventing unnecessary re-renders if passed to child components
  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prevOpen) => !prevOpen);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  // Dynamic classes for the header
  const headerClasses = `
    fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-12
    flex justify-between items-center
    transition-all duration-300
    ${isScrolled
      ? 'bg-gray-900/95 backdrop-blur-sm shadow-md'
      : 'bg-transparent'
    }
  `;

  // Common link classes for DRYness
  const commonLinkClasses = "text-gray-300 hover:text-white transition-colors duration-200";
  const commonMobileLinkClasses = "block py-2 text-gray-300 hover:text-white transition-colors duration-200";

  const renderNavLinks = (isMobile: boolean = false) =>
    navItems.map((item) => (
      <li key={item.label} className={isMobile && item.isButton ? 'mt-2' : ''}>
        <a
          href={item.href}
          target={item.external ? '_blank' : undefined}
          rel={item.external ? 'noopener noreferrer' : undefined}
          className={
            item.isButton
              ? `bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors duration-200 ${isMobile ? 'block text-center' : 'ml-2 flex items-center'}`
              : (isMobile ? commonMobileLinkClasses : commonLinkClasses)
          }
          onClick={isMobile ? closeMobileMenu : undefined} // Close menu on click for mobile links
        >
          {item.label}
        </a>
      </li>
    ));

  return (
    <header className={headerClasses.trim()}>
      <a
        href="/"
        className="text-xl font-bold text-blue-400 hover:text-blue-300 transition-colors duration-200"
        aria-label="Navigate to homepage" // Added for accessibility
      >
        Harshal Sawant ( c0d3h01 )
      </a>

      {/* Desktop Navigation */}
      <nav className="hidden md:block" aria-label="Main navigation">
        <ul className="flex items-center space-x-6">
          {renderNavLinks(false)}
        </ul>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500" // Added focus states
        onClick={toggleMobileMenu}
        aria-expanded={isMobileMenuOpen} // Accessibility: indicates if the menu is open
        aria-controls="mobile-menu"     // Accessibility: links button to the menu it controls
        aria-label={isMobileMenuOpen ? "Close main menu" : "Open main menu"} // Accessibility
      >
        {isMobileMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
      </button>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div
          id="mobile-menu" // ID for aria-controls
          className="absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-sm shadow-lg py-4 px-6 md:hidden"
          role="navigation" // Accessibility: defines this div as a navigation landmark
          aria-label="Mobile navigation"
        >
          <ul className="flex flex-col space-y-3">
            {renderNavLinks(true)}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;