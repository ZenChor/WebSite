"use client";

import React, { useState, useEffect } from 'react';
import Navbar from './Navigation/Navbar';
import HomeSection from './Home/HomeSection';
import AboutSection from './About/AboutSection';
import TechnologySection from './Technology/TechnologySection';
import ContactSection from './Contact/ContactSection';
import VideoSection from './Video/VideoSection';
import { theme } from './styles/theme';

// LandingPage.tsx
const LandingPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Check sections in reverse order (bottom to top)
      const sections = ['contact', 'technology', 'about', 'home'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.getBoundingClientRect().top <= 100) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ backgroundColor: theme.background, color: theme.text }}>
      <Navbar isScrolled={isScrolled} activeSection={activeSection} />
      <HomeSection />
      <AboutSection />
      <VideoSection />
      <TechnologySection />
      <ContactSection />
    </div>
  );
};

export default LandingPage;
