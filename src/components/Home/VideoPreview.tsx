
import React from 'react';
import { Play } from 'lucide-react';
import { theme } from '../styles/theme';

const VideoPreview = () => (
  <div
    className="relative w-full max-w-2xl mx-auto aspect-video rounded-lg overflow-hidden mb-8 group"
    style={{
      backgroundColor: 'rgba(166, 226, 46, 0.1)',
      border: `2px solid ${theme.green}`,
      boxShadow: `0 0 20px rgba(166, 226, 46, 0.1)`
    }}
  >
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="p-4 rounded-full bg-white bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300">
        <Play size={48} style={{ color: theme.blue }} />
      </div>
    </div>
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-sm opacity-70">
      Click to watch on Kickstarter
    </div>
  </div>
);

export default VideoPreview;
