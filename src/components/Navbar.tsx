import React, { useState } from 'react';
import { Menu, X, ArrowRight, Phone, MessageSquare } from 'lucide-react';
import { NrejLogo } from './NrejLogo';
import { BUSINESS_CONFIG, getWhatsAppInquiryUrl } from '../data/businessConfig';

interface NavbarProps {
  onOpenBooking: (destinationTitle?: string, tripType?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Our Services', href: '#services' },
    { label: 'Educational Trips', href: '#educational' },
    { label: 'Industry Visits', href: '#industrial' },
    { label: 'Karnataka Special', href: '#karnataka' },
    { label: 'Tour Packages', href: '#packages' },
    { label: 'Contact Us', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    } else if (href === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-neutral-950/95 border-b border-neutral-900 transition-colors shadow-sm">
      {/* Top contact utility bar */}
      <div className="hidden md:block bg-neutral-900/80 border-b border-neutral-800/60 py-1.5 px-4 sm:px-6 lg:px-8 text-xs text-neutral-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="text-amber-400 font-medium">
              📍 {BUSINESS_CONFIG.location.fullAddress}
            </span>
            <span className="text-neutral-600">|</span>
            <span className="text-neutral-300">
              Contact: <strong className="text-white">{BUSINESS_CONFIG.contactPerson}</strong>
            </span>
          </div>
          <div className="flex items-center gap-5">
            <a
              href={`tel:${BUSINESS_CONFIG.mobile1}`}
              className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3 h-3 text-sky-400" />
              <span>{BUSINESS_CONFIG.mobile1Formatted}</span>
            </a>
            <a
              href={`tel:${BUSINESS_CONFIG.mobile2}`}
              className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3 h-3 text-sky-400" />
              <span>{BUSINESS_CONFIG.mobile2Formatted}</span>
            </a>
            <a
              href={getWhatsAppInquiryUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1 transition-colors"
            >
              <MessageSquare className="w-3 h-3" />
              <span>WhatsApp Desk</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Logo returning to homepage */}
        <a
          href="#home"
          onClick={(e) => handleLinkClick(e, '#home')}
          className="group flex items-center whitespace-nowrap shrink-0"
          aria-label={`${BUSINESS_CONFIG.businessName} Home`}
        >
          <NrejLogo size="md" showText={true} />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-5 text-xs font-semibold uppercase tracking-wider text-neutral-300">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Medium screens condensed nav */}
        <nav className="hidden lg:flex xl:hidden items-center gap-4 text-xs font-semibold uppercase tracking-wider text-neutral-300">
          <a href="#about" onClick={(e) => handleLinkClick(e, '#about')} className="hover:text-amber-400 transition-colors">About</a>
          <a href="#services" onClick={(e) => handleLinkClick(e, '#services')} className="hover:text-amber-400 transition-colors">Services</a>
          <a href="#educational" onClick={(e) => handleLinkClick(e, '#educational')} className="hover:text-amber-400 transition-colors">Educational</a>
          <a href="#industrial" onClick={(e) => handleLinkClick(e, '#industrial')} className="hover:text-amber-400 transition-colors">Industry Visits</a>
          <a href="#packages" onClick={(e) => handleLinkClick(e, '#packages')} className="hover:text-amber-400 transition-colors">Packages</a>
          <a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')} className="hover:text-amber-400 transition-colors">Contact</a>
        </nav>

        {/* Primary Action Button */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <button
            onClick={() => onOpenBooking()}
            className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors flex items-center gap-2 shadow-sm font-sans cursor-pointer hover:shadow-amber-400/20"
          >
            <span>Plan Your Trip</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Hamburger Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-900 transition-colors cursor-pointer"
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Accordion Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-neutral-950 border-b border-neutral-900 px-4 pt-2 pb-6 space-y-4">
          <div className="flex flex-col space-y-2 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="px-3 py-2 text-sm font-medium text-neutral-300 hover:text-amber-400 hover:bg-neutral-900 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-neutral-900 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 text-xs font-semibold uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer font-sans"
            >
              <span>Plan Your Trip</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href={getWhatsAppInquiryUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 text-xs font-semibold text-center text-emerald-400 bg-emerald-950/40 border border-emerald-800/50 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Direct WhatsApp Desk ({BUSINESS_CONFIG.mobile1})</span>
            </a>
            <div className="text-[11px] text-neutral-400 text-center pt-1">
              Call H. Ramesh: {BUSINESS_CONFIG.mobile1Formatted} / {BUSINESS_CONFIG.mobile2Formatted}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
