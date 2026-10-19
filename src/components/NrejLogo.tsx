import React from 'react';

interface NrejLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export const NrejLogo: React.FC<NrejLogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
  }[size];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Precision Vector SVG representation of the official NREJ logo */}
      <svg
        viewBox="0 0 500 500"
        className={`${sizeClasses} shrink-0`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="nrejTealGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0891b2" />
            <stop offset="60%" stopColor="#0e7490" />
            <stop offset="100%" stopColor="#155e75" />
          </linearGradient>
          <linearGradient id="nrejGoldGradient" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f59e0b" />
            <stop offset="50%" stopColor="#fbbf24" />
            <stop offset="100%" stopColor="#ea580c" />
          </linearGradient>
        </defs>

        {/* Outer Compass Circle */}
        <circle
          cx="250"
          cy="235"
          r="86"
          stroke="url(#nrejTealGradient)"
          strokeWidth="16"
          strokeDasharray="46 12 18 12"
          fill="none"
        />

        {/* Compass Cardinal Points */}
        <path
          d="M250 135 L257 155 L250 148 L243 155 Z"
          fill="url(#nrejTealGradient)"
        />
        <path
          d="M272 205 L285 220 L270 215 Z"
          fill="#f59e0b"
        />

        {/* Inner Mountain Peaks Silhouette */}
        <path
          d="M190 280 L230 220 L260 255 L285 230 L320 280 Z"
          fill="url(#nrejTealGradient)"
        />

        {/* Mountain Peak / Compass Arrow Apex (forming letter A / N) */}
        <path
          d="M250 65 L320 210 L300 222 L250 120 L200 222 L180 210 Z"
          fill="url(#nrejTealGradient)"
        />

        {/* Left 'N' Leg Mountain Outline */}
        <path
          d="M175 220 L125 385 C120 405 135 430 160 430 C180 430 195 410 205 385 L250 280 L290 380 C295 395 305 405 315 405"
          stroke="url(#nrejTealGradient)"
          strokeWidth="24"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Golden Airplane Trail and 'R' Swoop */}
        <path
          d="M275 330 C270 380 300 425 350 425 C390 425 410 390 385 330 C360 270 310 275 270 310 C240 335 225 355 275 320 C340 270 380 260 415 225"
          stroke="url(#nrejGoldGradient)"
          strokeWidth="20"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Ascending Jet / Airplane */}
        <g transform="translate(415, 215) rotate(42)">
          {/* Fuselage */}
          <path
            d="M0 -30 C3 -25 4 15 0 25 C-4 15 -3 -25 0 -30 Z"
            fill="url(#nrejGoldGradient)"
          />
          {/* Main Wings */}
          <path
            d="M-28 0 L0 -8 L28 0 L22 8 L0 2 L-22 8 Z"
            fill="url(#nrejGoldGradient)"
          />
          {/* Tail Wings */}
          <path
            d="M-12 20 L0 16 L12 20 L10 24 L0 22 L-10 24 Z"
            fill="url(#nrejGoldGradient)"
          />
        </g>
      </svg>

      {showText && (
        <div className="flex flex-col text-left">
          <span className="font-serif-luxury tracking-wider text-xl font-bold uppercase text-white leading-none">
            NREJ Travels
          </span>
          <span className="text-[10px] uppercase font-mono tracking-widest text-amber-400 font-medium mt-1">
            South India & Karnataka Expeditions
          </span>
        </div>
      )}
    </div>
  );
};
