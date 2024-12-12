import React from 'react';
import AnimatedBanner from './AnimatedBanner';
import ScrollIndicator from '../ScrollIndicator';

const HomeSection = () => (
  <section id="home" className="relative">
    <div className="h-screen flex flex-col justify-center items-center">
      {/* Animated Banner in full viewport */}
      <div className="w-full h-full">
        <AnimatedBanner />
      </div>

      {/* Scroll indicator at bottom */}
      <ScrollIndicator targetSection="about" />
    </div>
  </section>
);

export default HomeSection;
