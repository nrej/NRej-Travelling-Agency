import React from 'react';
import { Mail, Phone, MapPin, Building2, MessageSquare, ArrowUpRight, GraduationCap, Compass } from 'lucide-react';
import { NrejLogo } from './NrejLogo';
import { BUSINESS_CONFIG, getWhatsAppInquiryUrl } from '../data/businessConfig';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  return (
    <footer className="bg-white border-t border-neutral-200 text-neutral-900">
      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Column 1: Brand & Official Details (Span 5) */}
          <div className="lg:col-span-5 space-y-4">
            <NrejLogo size="md" showText={true} />
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-sm pt-2">
              NRej Travelling Agency specializes in educational trips, college industrial visits, school excursions, and Karnataka special tour packages. Based in Kottur Ayyanhalli, Karnataka.
            </p>

            <div className="pt-2 space-y-2.5 text-xs text-neutral-300">
              <div className="flex items-center gap-2">
                <span className="text-amber-400 font-semibold">Contact Person:</span>
                <span className="text-white font-medium">{BUSINESS_CONFIG.contactPerson}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <a href={`tel:${BUSINESS_CONFIG.mobile1}`} className="hover:text-sky-300 transition-colors">
                  {BUSINESS_CONFIG.mobile1Formatted}
                </a>
                <span className="text-neutral-600">/</span>
                <a href={`tel:${BUSINESS_CONFIG.mobile2}`} className="hover:text-sky-300 transition-colors">
                  {BUSINESS_CONFIG.mobile2Formatted}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`mailto:${BUSINESS_CONFIG.email}`} className="hover:text-amber-300 transition-colors">
                  {BUSINESS_CONFIG.email}
                </a>
              </div>
              <div className="flex items-center gap-2 text-neutral-400">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{BUSINESS_CONFIG.location.fullAddress}</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={getWhatsAppInquiryUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-emerald-400 bg-emerald-950/40 border border-emerald-800/60 rounded-lg hover:bg-emerald-900/40 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Direct WhatsApp Enquiry ({BUSINESS_CONFIG.mobile1})</span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Navigation (Span 3) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-white">
              Navigation
            </div>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#home" className="hover:text-amber-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-amber-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#educational" className="hover:text-amber-400 transition-colors">
                  Educational Trips
                </a>
              </li>
              <li>
                <a href="#industrial" className="hover:text-amber-400 transition-colors">
                  Industry Visits (IV)
                </a>
              </li>
              <li>
                <a href="#karnataka" className="hover:text-amber-400 transition-colors">
                  Karnataka Special Tours
                </a>
              </li>
              <li>
                <a href="#packages" className="hover:text-amber-400 transition-colors">
                  Tour Packages
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-400 transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Primary Karnataka Circuits (Span 4) */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-white">
              Featured Karnataka Circuits
            </div>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#packages" className="hover:text-sky-400 transition-colors block">
                  Mysuru Royal Palace & KSIC Silk Tour (3D/2N)
                </a>
              </li>
              <li>
                <a href="#packages" className="hover:text-sky-400 transition-colors block">
                  Hampi & Badami UNESCO Heritage Study (3D/2N)
                </a>
              </li>
              <li>
                <a href="#packages" className="hover:text-sky-400 transition-colors block">
                  Bengaluru Science & Aerospace Tech Visit (3D/2N)
                </a>
              </li>
              <li>
                <a href="#packages" className="hover:text-sky-400 transition-colors block">
                  Coorg & Chikmagalur Coffee Plantation (4D/3N)
                </a>
              </li>
              <li>
                <a href="#packages" className="hover:text-sky-400 transition-colors block">
                  Dandeli Adventure & Supa Dam Power Plant (4D/3N)
                </a>
              </li>
              <li>
                <a href="#packages" className="hover:text-sky-400 transition-colors block">
                  Belur, Halebidu & Shravanabelagola Hoysala Tour (3D/2N)
                </a>
              </li>
            </ul>

            <div className="pt-3">
              <button
                onClick={onOpenBooking}
                className="w-full py-2.5 px-4 text-xs font-bold uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors text-center cursor-pointer font-sans"
              >
                Plan Your Group Tour
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-neutral-900 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <div>
            © {new Date().getFullYear()} {BUSINESS_CONFIG.businessName}. Kottur Ayyanhalli, Karnataka, India – 583 134.
          </div>
          <div className="flex items-center gap-4 text-neutral-400">
            <span>Contact: {BUSINESS_CONFIG.contactPerson} ({BUSINESS_CONFIG.mobile1Formatted})</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
