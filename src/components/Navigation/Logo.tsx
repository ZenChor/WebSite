import React from 'react';

interface LogoProps {
  size?: number;
  className?: string;
}

const Logo = ({ size = 32, className = '' }: LogoProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 200 200"
    width={size}
    height={size}
    className={className}
  >
    {/* Base circle - slightly thicker */}
    <circle cx="100" cy="100" r="96" fill="transparent" stroke="#F92672" strokeWidth="8"/>

    {/* Blue curves */}
    <path d="M40,70 Q100,20 160,70" fill="none" stroke="#66D9EF" strokeWidth="4" opacity="0.5"/>
    <path d="M40,130 Q100,80 160,130" fill="none" stroke="#66D9EF" strokeWidth="4" opacity="0.5"/>

    {/* Orange curves */}
    <path d="M50,100 Q100,40 150,100" fill="none" stroke="#FD971F" strokeWidth="5" opacity="0.4"/>
    <path d="M50,100 Q100,160 150,100" fill="none" stroke="#FD971F" strokeWidth="5" opacity="0.4"/>

    {/* Purple curves */}
    <path d="M30,100 Q100,60 170,100" fill="none" stroke="#AE81FF" strokeWidth="4" opacity="0.3"/>
    <path d="M30,100 Q100,140 170,100" fill="none" stroke="#AE81FF" strokeWidth="4" opacity="0.3"/>

    {/* Main letters 'ZC' - doubled thickness */}
    <g fill="none" stroke="#F92672" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round">
      {/* Z */}
      <path d="M50,60 L90,60 L50,140 L90,140"/>
      {/* C */}
      <path d="M150,60 C130,60 110,75 110,100 C110,125 130,140 150,140"/>
    </g>

    {/* Green accents */}
    <g fill="none" stroke="#A6E22E" strokeWidth="4" opacity="0.8" strokeLinecap="round">
      <path d="M52,62 L88,62"/>
      <path d="M148,138 C130,138 112,125 112,100"/>
    </g>

    {/* Outer glow effect - adjusted */}
    <circle cx="100" cy="100" r="96" fill="none" stroke="#F92672" strokeWidth="2" opacity="0.3"/>
    <circle cx="100" cy="100" r="94" fill="none" stroke="#A6E22E" strokeWidth="2" opacity="0.2"/>
  </svg>
);

export default Logo;
