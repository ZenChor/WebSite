import React from 'react';
import VideoPreview from './VideoPreview';
import { theme } from '../styles/theme';

const HomeContent = () => (
  <div className="text-center">
    <VideoPreview />
    <h1 className="text-4xl sm:text-6xl font-bold mb-6">
      <span style={{ color: theme.red }}>Social</span>{' '}
      <span style={{ color: theme.purple }}>Smart</span>{' '}
      <span style={{ color: theme.blue }}>Music</span>{' '}
      <span style={{ color: theme.green }}>Generator</span>
    </h1>
    <p className="text-xl mb-8">
      Transform the way you discover and share music with friends
    </p>
    <button
      className="px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-200 hover:scale-105"
      style={{
        background: theme.gradients.redToPurple,
        color: theme.text,
        border: `1px solid ${theme.purple}`,
        boxShadow: `0 0 20px rgba(174, 129, 255, 0.1)`
      }}
    >
      Back us on Kickstarter
    </button>
  </div>
);

export default HomeContent;
