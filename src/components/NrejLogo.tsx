import React from 'react';
import { BUSINESS_CONFIG } from '../data/businessConfig';
import logoUrl from '../../NRej Colour Logo.jpg';

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
      <img
        src={logoUrl}
        alt={`${BUSINESS_CONFIG.businessName} Logo`}
        className={`${sizeClasses} shrink-0 rounded-full object-cover`}
      />

      {showText && (
        <div className="flex flex-col text-left">
          <div className="flex items-baseline gap-1.5">
            <span className={`text-xl sm:text-2xl font-bold tracking-tight ${lightMode ? 'text-slate-900' : 'text-neutral-900'}`}>
              <span className="text-sky-600">N</span>Rej
            </span>
            <span className={`text-xs sm:text-sm font-semibold tracking-wide uppercase ${lightMode ? 'text-slate-700' : 'text-neutral-800'}`}>
              Travelling Agency
            </span>
          </div>
          <span className="text-[10px] uppercase font-mono tracking-widest text-amber-600 font-semibold mt-0.5">
            {BUSINESS_CONFIG.tagline}
          </span>
        </div>
      )}
    </div>
  );
};

export default NrejLogo;
