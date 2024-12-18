// VideoSection.tsx
import React from 'react';
import { theme } from '../styles/theme';
import { Play } from 'lucide-react';

const VideoSection = () => (
  <section id="video" className="min-h-screen py-20 pt-24">
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: theme.blue }}>
        Watch Our Story - coming soon...
      </h2>

      {/* Video Preview */}
      <div
        className="relative w-full aspect-video rounded-lg overflow-hidden mb-8 group cursor-pointer"
        style={{
          backgroundColor: 'rgba(166, 226, 46, 0.1)',
          border: `2px solid ${theme.green}`,
          boxShadow: `0 0 20px rgba(166, 226, 46, 0.1)`
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="p-6 rounded-full bg-white bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300">
            <Play size={64} style={{ color: theme.blue }} />
          </div>
        </div>
      </div>

      {/* Kickstarter Call to Action */}
      <div className="text-center">
        <p className="text-lg mb-6" style={{ color: theme.orange }}>
          Support our vision on Kickstarter and be part of the music revolution!
        </p>
        <button
          className="px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-200 hover:scale-105"
          style={{
            background: theme.gradients.orangeToYellow,
            color: theme.background,
            border: `1px solid ${theme.yellow}`,
            boxShadow: `0 0 20px rgba(230, 219, 116, 0.1)`
          }}
        >
          Back us on Kickstarter
        </button>
      </div>
    </div>
  </section>
);

export default VideoSection;
