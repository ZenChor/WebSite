import React from 'react';
import TechnologyGrid from './TechnologyGrid';
import { theme } from '../styles/theme';

const TechnologySection = () => (
  <section id="technology" className="min-h-screen py-20">
    <div className="max-w-3xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: theme.blue }}>
        Technology
      </h2>
      <TechnologyGrid />
    </div>
  </section>
);

export default TechnologySection;
