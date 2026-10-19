import React from 'react';
import { BUSINESS_CONFIG } from '../data/businessConfig';

interface NrejLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  lightMode?: boolean;
}

export const NrejLogo: React.FC<NrejLogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
  lightMode = false,
}) => {
  const sizeClasses = {
    sm: 'w-9 h-9',
    md: 'w-11 h-11',
    lg: 'w-16 h-16',
  }[size];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Precision Vector Emblem: NRej with Globe & Travel Route */}
      <svg
        viewBox="0 0 500 500"
        className={`${sizeClasses} shrink-0`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="NRej Travelling Agency Logo"
      >
        <defs>
          <linearGradient id="nrejSkyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="50%" stopColor="#0284c7" />
            <stop offset="100%" stopColor="#0369a1" />
          </linearGradient>
          <linearGradient id="nrejOrangeGradient" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f97316" />
            <stop offset="60%" stopColor="#fb923c" />
            <stop offset="100%" stopColor="#f59e0b" />
          </linearGradient>
          <linearGradient id="nrejNavyRing" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e3a8a" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>
        </defs>

        {/* Outer Circular Globe Ring with Navigation Latitudes */}
        <circle
          cx="250"
          cy="250"
          r="215"
          stroke="url(#nrejSkyGradient)"
          strokeWidth="18"
          strokeDasharray="95 18 30 18"
          strokeLinecap="round"
        />

        {/* Globe Meridian Latitude Arcs */}
        <ellipse
          cx="250"
          cy="250"
          rx="125"
          ry="210"
          stroke="url(#nrejSkyGradient)"
          strokeWidth="7"
          strokeOpacity="0.45"
          strokeDasharray="16 10"
        />
        <line
          x1="38"
          y1="250"
          x2="462"
          y2="250"
          stroke="url(#nrejSkyGradient)"
          strokeWidth="7"
          strokeOpacity="0.45"
        />

        {/* Mountain Peaks / Heritage Monument Silhouette (Hampi / Western Ghats motif) */}
        <path
          d="M140 330 L205 240 L245 285 L285 220 L350 330 Z"
          fill="url(#nrejNavyRing)"
          fillOpacity="0.85"
        />

        {/* Prominent Architectural 'N' Stylized Pillar / Monolith */}
        <path
          d="M135 340 L135 175 C135 160 148 150 162 150 L175 150 L275 315 L275 175 C275 160 288 150 302 150 L315 150 L315 340 C315 355 302 365 288 365 L275 365 L175 200 L175 340 C175 355 162 365 148 365 Z"
          fill="url(#nrejSkyGradient)"
        />

        {/* Dynamic Curved Travel Route / Highway Swoop in Bright Warm Orange */}
        <path
          d="M70 380 C160 440 330 450 430 330 C465 285 450 200 375 180 C310 160 260 215 305 265 C345 310 405 270 425 240"
          stroke="url(#nrejOrangeGradient)"
          strokeWidth="20"
          strokeLinecap="round"
        />

        {/* Modern Tourist Coach / Journey Compass Vehicle Indicator */}
        <g transform="translate(425, 240) rotate(-45)">
          {/* Coach Body */}
          <rect
            x="-26"
            y="-14"
            width="52"
            height="28"
            rx="8"
            fill="url(#nrejOrangeGradient)"
          />
          {/* Windows */}
          <rect x="-20" y="-10" width="8" height="9" rx="2" fill="#ffffff" />
          <rect x="-8" y="-10" width="10" height="9" rx="2" fill="#ffffff" />
          <rect x="6" y="-10" width="14" height="9" rx="2" fill="#ffffff" />
          {/* Headlight beam */}
          <circle cx="25" cy="5" r="3" fill="#fef08a" />
        </g>

        {/* Compass Star at Apex */}
        <polygon
          points="250,75 258,98 280,105 258,112 250,135 242,112 220,105 242,98"
          fill="url(#nrejOrangeGradient)"
        />
      </svg>

      {showText && (
        <div className="flex flex-col text-left">
          <div className="flex items-baseline gap-1.5">
            <span className={`text-xl sm:text-2xl font-bold tracking-tight ${lightMode ? 'text-slate-900' : 'text-white'}`}>
              <span className="text-sky-400">N</span>Rej
            </span>
            <span className={`text-xs sm:text-sm font-semibold tracking-wide uppercase ${lightMode ? 'text-slate-700' : 'text-neutral-200'}`}>
              Travelling Agency
            </span>
          </div>
          <span className="text-[10px] uppercase font-mono tracking-widest text-amber-400 font-semibold mt-0.5">
            {BUSINESS_CONFIG.tagline}
          </span>
        </div>
      )}
    </div>
  );
};
