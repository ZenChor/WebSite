import React from 'react';
import { ChevronDown } from 'lucide-react';
import { theme } from './styles/theme';
import { scrollToSection } from './utils/scroll';

interface ScrollIndicatorProps {
  targetSection: string;
}

const ScrollIndicator = ({ targetSection }: ScrollIndicatorProps) => (
  <div className="absolute bottom-16 w-full left-0 flex justify-center">
    <button
      onClick={() => scrollToSection(targetSection)}
      className="p-3 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70 transition-all duration-300 hover:scale-110"
      aria-label="Scroll to next section"
    >
      <ChevronDown size={32} style={{ color: theme.green }} />
    </button>
  </div>
);

export default ScrollIndicator;
