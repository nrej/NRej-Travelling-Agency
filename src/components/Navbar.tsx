import React, { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { NrejLogo } from './NrejLogo';

interface NavbarProps {
  onOpenBooking: (destinationTitle?: string, tripType?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-black/90 border-b border-neutral-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-6">
        {/* Zone 1: Single element Brand wordmark with official NREJ logo */}
        <a 
          href="#" 
          className="group flex items-center whitespace-nowrap shrink-0"
          aria-label="NREJ Travels Home"
        >
          <NrejLogo size="md" showText={true} />
        </a>

        {/* Zone 2: 4–5 concise single-line text navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-xs font-semibold uppercase tracking-wider text-neutral-300">
          <a 
            href="#trending" 
            className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0"
          >
            Karnataka Expeditions
          </a>
          <a 
            href="#industrial-educational" 
            className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5"
          >
            <span className="text-cyan-400">IV &</span> Educational Tours
          </a>
          <a 
            href="#builder" 
            className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0"
          >
            Custom Trip Studio
          </a>
          <a 
            href="#why-nrej" 
            className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0"
          >
            Why NREJ
          </a>
          <a 
            href="#reviews" 
            className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0"
          >
            Client Reviews
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <button
            onClick={() => onOpenBooking(undefined, 'Industrial Visit (IV)')}
            className="px-3.5 py-2 text-[11px] font-semibold uppercase tracking-wider text-cyan-400 hover:text-white border border-cyan-800/80 hover:border-cyan-600 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Book College IV
          </button>
          <button
            onClick={() => onOpenBooking()}
            className="group px-4 py-2 text-[11px] font-semibold uppercase tracking-wider text-black bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-2 cursor-pointer shadow-sm font-sans"
          >
            <span>Plan A Trip</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-neutral-400 hover:text-white rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-neutral-900 bg-black px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3 text-sm font-medium text-neutral-300">
            <a
              href="#trending"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-amber-400 py-1"
            >
              Karnataka Expeditions
            </a>
            <a
              href="#industrial-educational"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-amber-400 py-1 text-cyan-400 font-semibold"
            >
              Industrial Visits (IV) & Educational Tours
            </a>
            <a
              href="#builder"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-amber-400 py-1"
            >
              Custom Trip Studio
            </a>
            <a
              href="#why-nrej"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-amber-400 py-1"
            >
              Why NREJ South India
            </a>
            <a
              href="#reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-amber-400 py-1"
            >
              Client & College Reviews
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-amber-400 py-1"
            >
              Concierge Contact
            </a>
          </nav>
          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking(undefined, 'Industrial Visit (IV)');
              }}
              className="w-full py-2.5 text-xs font-semibold uppercase tracking-wider text-cyan-400 border border-cyan-800 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <span>Book College Industrial Visit (IV)</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-2.5 text-xs font-semibold uppercase tracking-wider text-black bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <span>Plan Karnataka / South India Journey</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
