import React from 'react';
import { theme } from '../styles/theme';

interface NavLinkProps {
  sectionId: string;
  children: React.ReactNode;
  activeSection: string;
  onClick: (sectionId: string) => void;
}

const NavLink = ({ sectionId, children, activeSection, onClick }: NavLinkProps) => {
  const isActive = activeSection === sectionId;

  return (
    <button
      onClick={() => onClick(sectionId)}
      className={`px-4 py-2 rounded-md transition-all duration-200 relative group`}
      style={{
        backgroundColor: isActive ? `${theme.green}20` : 'transparent',
        color: isActive ? theme.green : theme.text
      }}
    >
      {children}
      <div
        className="absolute bottom-0 left-0 h-0.5 transition-all duration-300"
        style={{
          background: theme.gradients.blueToGreen,
          width: isActive ? '100%' : '0%'
        }}
      />
    </button>
  );
};

export default NavLink;
