import React from 'react';
import { theme } from '../styles/theme';
import NavLink from './NavLink';
import { scrollToSection } from '../utils/scroll';

interface MobileMenuProps {
  isOpen: boolean;
  activeSection: string;
  onClose?: () => void;
}

// MobileMenu.tsx
const MobileMenu = ({ isOpen, activeSection, onClose }: MobileMenuProps) => {
  const handleClick = (sectionId: string) => {
    scrollToSection(sectionId);
    if (onClose) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed top-16 left-1/2 transform -translate-x-1/2 h-full w-64 sm:hidden transition-transform duration-300"
      style={{ backgroundColor: theme.background }}
    >
      <div className="flex flex-col w-full px-2 pt-2 pb-3 space-y-1">
        <NavLink sectionId="about" activeSection={activeSection} onClick={handleClick}>
          About
        </NavLink>
        <NavLink sectionId="technology" activeSection={activeSection} onClick={handleClick}>
          Technology
        </NavLink>
        <NavLink sectionId="contact" activeSection={activeSection} onClick={handleClick}>
          Contact
        </NavLink>
      </div>
    </div>
  );
};

export default MobileMenu;
