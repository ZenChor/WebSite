import React from 'react';

const AnimatedBanner = () => {
  return (
    <div className="w-full h-full flex items-center justify-center bg-[#272822]" style={{
      position: 'relative',
      overflow: 'hidden',
    }}>
      <style>
        {`
          .title {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, monospace;
            font-size: 72px;
            fill: none;
            stroke: #F92672;
            stroke-width: 2;
            stroke-dasharray: 500;
            stroke-dashoffset: 500;
            animation: strokeCycle 6s linear infinite;
          }

          .title-letter {
            opacity: 0;
            transform-origin: center;
            fill: transparent;
            animation: letterCycle 6s linear infinite;
          }

          .letter-z { animation: letterCycle 6s linear infinite, waveZ 3s ease-in-out infinite; }
          .letter-e { animation: letterCycle 6s linear infinite, bounceE 3s ease-in-out infinite; }
          .letter-n { animation: letterCycle 6s linear infinite, rotateN 3s ease-in-out infinite; }
          .letter-c { animation: letterCycle 6s linear infinite, pulseC 3s ease-in-out infinite; }
          .letter-h { animation: letterCycle 6s linear infinite, shakeH 3s ease-in-out infinite; }
          .letter-o { animation: letterCycle 6s linear infinite, spinO 3s ease-in-out infinite; }
          .letter-r { animation: letterCycle 6s linear infinite, jumpR 3s ease-in-out infinite; }

          .tagline {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            font-size: 24px;
            fill: none;
            stroke: #A6E22E;
            stroke-width: 1;
            stroke-dasharray: 1000;
            stroke-dashoffset: 1000;
            animation: taglineStrokeCycle 6s linear infinite;
          }

          .math-line {
            stroke: rgba(102, 217, 239, 0.5);
            stroke-width: 2;
            stroke-dasharray: 1000;
            stroke-dashoffset: 1000;
            animation: drawLine 3s ease-in-out infinite;
          }

          .flow-path {
            stroke: rgba(253, 151, 31, 0.6);
            stroke-width: 3;
            fill: none;
            stroke-dasharray: 1000;
            stroke-dashoffset: 1000;
            animation: drawFlowLine 5s ease-in-out infinite;
          }

          .purple-line {
            stroke: rgba(174, 129, 255, 0.4);
            stroke-width: 2;
            fill: none;
            stroke-dasharray: 1000;
            stroke-dashoffset: 1000;
            animation: drawFlowLine 4s ease-in-out infinite;
          }

          @keyframes strokeCycle {
            0% { stroke-dashoffset: 500; }
            40% { stroke-dashoffset: 0; }
            60% { stroke-dashoffset: 0; }
            100% { stroke-dashoffset: -500; }
          }

          @keyframes taglineStrokeCycle {
            0% {
              stroke-dashoffset: 1000;
              fill: transparent;
            }
            40% {
              stroke-dashoffset: 0;
              fill: transparent;
            }
            45% {
              stroke-dashoffset: 0;
              fill: #A6E22E;
            }
            55% {
              stroke-dashoffset: 0;
              fill: #A6E22E;
            }
            60% {
              stroke-dashoffset: 0;
              fill: transparent;
            }
            100% {
              stroke-dashoffset: -1000;
              fill: transparent;
            }
          }

          @keyframes letterCycle {
            0% {
              opacity: 0;
              fill: transparent;
            }
            40% {
              opacity: 1;
              fill: transparent;
            }
            45% {
              opacity: 1;
              fill: #F92672;
            }
            55% {
              opacity: 1;
              fill: #F92672;
            }
            60% {
              opacity: 1;
              fill: transparent;
            }
            100% {
              opacity: 0;
              fill: transparent;
            }
          }

          @keyframes waveZ {
            0%, 100% { transform: skewX(0deg); }
            50% { transform: skewX(-10deg); }
          }

          @keyframes bounceE {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }

          @keyframes rotateN {
            0%, 100% { transform: rotate(0deg); }
            50% { transform: rotate(5deg); }
          }

          @keyframes pulseC {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
          }

          @keyframes shakeH {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-3px); }
            75% { transform: translateX(3px); }
          }

          @keyframes spinO {
            0%, 100% { transform: rotateY(0deg); }
            50% { transform: rotateY(180deg); }
          }

          @keyframes jumpR {
            0%, 100% { transform: translateY(0) scale(1); }
            50% { transform: translateY(-5px) scale(1.05); }
          }

          @keyframes drawLine {
            0% { stroke-dashoffset: 1000; }
            50% { stroke-dashoffset: 0; }
            100% { stroke-dashoffset: -1000; }
          }

          @keyframes drawFlowLine {
            0% { stroke-dashoffset: 1000; }
            50% { stroke-dashoffset: 0; }
            100% { stroke-dashoffset: -1000; }
          }
        `}
      </style>
      <svg viewBox="0 0 800 400" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
        {/* Background patterns */}
        <path className="math-line" d="M0,200 Q200,100 400,200 T800,200" />
        <path className="math-line" d="M0,100 Q200,300 400,100 T800,100" />
        <path className="math-line" d="M0,300 Q200,200 400,300 T800,300" />

        {/* Flowing orange lines */}
        <path className="flow-path" d="M-100,150 C100,50 300,350 500,150 S700,50 900,150" />
        <path className="flow-path" d="M-100,250 C100,150 300,450 500,250 S700,150 900,250" />
        <path className="flow-path" d="M-100,50 C100,-50 300,250 500,50 S700,-50 900,50" />

        {/* Purple lines */}
        <path className="purple-line" d="M-50,180 C150,80 350,280 550,180 S750,80 950,180" />
        <path className="purple-line" d="M-50,220 C150,120 350,320 550,220 S750,120 950,220" />
        <path className="purple-line" d="M-50,140 C150,40 350,240 550,140 S750,40 950,140" />

        {/* Animated text */}
        <text className="title" x="50%" y="45%" textAnchor="middle">
          <tspan className="title-letter letter-z">Z</tspan>
          <tspan className="title-letter letter-e">E</tspan>
          <tspan className="title-letter letter-n">N</tspan>
          <tspan className="title-letter letter-c">C</tspan>
          <tspan className="title-letter letter-h">H</tspan>
          <tspan className="title-letter letter-o">O</tspan>
          <tspan className="title-letter letter-r">R</tspan>
        </text>
        <text className="tagline" x="50%" y="60%" textAnchor="middle">
          A social, dynamic playlist generator
        </text>
      </svg>
    </div>
  );
};

export default AnimatedBanner;
