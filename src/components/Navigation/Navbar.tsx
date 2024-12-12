import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { theme } from '../styles/theme';
import NavLink from './NavLink';
import MobileMenu from './MobileMenu';
import { scrollToSection } from '../utils/scroll';
import Logo from './Logo';

interface NavbarProps {
  isScrolled: boolean;
  activeSection: string;
}

const Navbar = ({ isScrolled, activeSection }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'border-b backdrop-blur-sm bg-opacity-80' : 'bg-transparent border-transparent'
      }`}
      style={{
        backgroundColor: isScrolled ? theme.background : 'transparent',
        borderColor: isScrolled ? theme.purple : 'transparent',
        borderBottomWidth: '1px'
      }}
    >
      <div className="max-w-3xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Mobile menu button */}
          <div className="sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md hover:bg-opacity-20 hover:bg-white"
              style={{ color: theme.green }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Logo and text */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-2 transition-colors duration-200 hover:opacity-80"
          >
            <Logo size={32} />
            <span className="text-xl font-bold" style={{ color: theme.green }}>
              ZENCHOR
            </span>
          </button>

          {/* Navigation links */}
          <div className="hidden sm:flex items-center space-x-4">
            <NavLink sectionId="about" activeSection={activeSection} onClick={handleNavClick}>
              About
            </NavLink>
            <NavLink sectionId="technology" activeSection={activeSection} onClick={handleNavClick}>
              Technology
            </NavLink>
            <NavLink sectionId="contact" activeSection={activeSection} onClick={handleNavClick}>
              Contact
            </NavLink>
          </div>

          {/* Empty div for mobile layout balance */}
          <div className="w-10 sm:hidden" />
        </div>
      </div>

      <MobileMenu
        isOpen={isMenuOpen}
        activeSection={activeSection}
        onClose={() => setIsMenuOpen(false)}
      />
    </nav>
  );
};

export default Navbar;
