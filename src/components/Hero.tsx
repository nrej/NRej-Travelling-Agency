import React, { useState } from 'react';
import { Calendar, Compass, ArrowRight, GraduationCap, Building2, MapPin, MessageSquare, Phone } from 'lucide-react';
import { BUSINESS_CONFIG, getWhatsAppInquiryUrl } from '../data/businessConfig';

interface HeroProps {
  onSearch: (region: string, category: string, month: string) => void;
  onOpenBooking: (destination?: string, tripType?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onSearch, onOpenBooking }) => {
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDuration, setSelectedDuration] = useState('Any');

  const heroImage = '/images/gallery_student_hampi_1792402557076.jpg';

  const handleApplyFilter = () => {
    onSearch(selectedRegion, selectedCategory, selectedDuration);
    const element = document.getElementById('packages');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative overflow-hidden bg-white">
      {/* Hero Visual Area with High-Grade Scrim for Contrast */}
      <div className="relative min-h-[620px] lg:min-h-[720px] flex items-center">
        {/* Background Image: Authentic Indian students on heritage study tour */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Students on an educational heritage field study in Karnataka"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center scale-[1.01] transform transition-transform duration-1000 ease-out"
          />
          {/* Deep Navy/Black Scrim Overlay for maximum text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-white/20" />
          <div className="absolute inset-0 bg-sky-50 mix-blend-multiply" />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
          <div className="max-w-3xl space-y-6">
            {/* Tagline & Slogan badge */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="px-3 py-1 rounded-full bg-sky-500/20 border border-sky-400/40 text-sky-700 text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber-600" />
                <span>{BUSINESS_CONFIG.location.village}, Karnataka</span>
              </span>
              <span className="text-amber-600 text-xs font-mono font-medium tracking-wide">
                • {BUSINESS_CONFIG.heroSlogan}
              </span>
            </div>

            {/* Master Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 leading-[1.12]">
              Every Journey Is an Opportunity to Learn
            </h1>

            {/* Master Supporting Text */}
            <p className="text-lg sm:text-xl text-neutral-800 font-normal leading-relaxed max-w-2xl">
              Discover the world beyond classrooms with NRej Travelling Agency. We organize educational trips, industry visits, heritage tours, and memorable travel experiences for schools and colleges across Karnataka and beyond.
            </p>

            {/* Smaller Supporting Line */}
            <div className="pt-1 flex items-center gap-2 text-xs sm:text-sm font-semibold text-amber-600 uppercase tracking-wider">
              <span>Educational Trips</span>
              <span className="text-neutral-500">|</span>
              <span>Industry Visits</span>
              <span className="text-neutral-500">|</span>
              <span>Karnataka Special Tours</span>
            </div>

            {/* CTAs: Plan Your Educational Trip, Explore Our Services, WhatsApp */}
            <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 flex-wrap">
              <button
                onClick={() => onOpenBooking(undefined, 'Educational')}
                className="px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-400/10 cursor-pointer font-sans"
              >
                <GraduationCap className="w-4 h-4" />
                <span>Plan Your Educational Trip</span>
              </button>

              <a
                href="#services"
                className="px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-neutral-900 hover:text-sky-700 border border-neutral-300 hover:border-sky-400 rounded-lg transition-all flex items-center justify-center gap-2 bg-neutral-50/80 cursor-pointer"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Direct WhatsApp Enquiry Button */}
              <a
                href={getWhatsAppInquiryUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Enquiry</span>
              </a>
            </div>

            {/* Contact quick strip */}
            <div className="pt-2 text-xs text-neutral-600 flex flex-wrap items-center gap-4">
              <span>Direct Coordinator: <strong className="text-neutral-900">{BUSINESS_CONFIG.contactPerson}</strong></span>
              <span className="text-neutral-400">•</span>
              <a href={`tel:${BUSINESS_CONFIG.mobile1}`} className="text-sky-600 hover:underline flex items-center gap-1">
                <Phone className="w-3 h-3" />
                <span>{BUSINESS_CONFIG.mobile1Formatted}</span>
              </a>
              <span className="text-neutral-400">•</span>
              <a href={`tel:${BUSINESS_CONFIG.mobile2}`} className="text-sky-600 hover:underline flex items-center gap-1">
                <Phone className="w-3 h-3" />
                <span>{BUSINESS_CONFIG.mobile2Formatted}</span>
              </a>
            </div>
          </div>

          {/* Search / Filter Quick Finder Strip */}
          <div className="mt-10 p-3 sm:p-4 rounded-xl bg-neutral-50/95 border border-neutral-200 backdrop-blur-md shadow-2xl max-w-4xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {/* Region Select */}
              <div className="flex flex-col gap-1 px-3 py-2 rounded-lg bg-white border border-neutral-200">
                <label className="text-[11px] font-medium uppercase tracking-wider text-neutral-600 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-sky-600" />
                  <span>Karnataka Circuit</span>
                </label>
                <select
                  value={selectedRegion}
                  onChange={(e) => setSelectedRegion(e.target.value)}
                  className="bg-transparent text-sm text-neutral-900 font-medium focus:outline-none cursor-pointer"
                >
                  <option value="All" className="bg-white text-neutral-900">All Karnataka Circuits</option>
                  <option value="Mysuru & Mandya" className="bg-white text-neutral-900">Mysuru, Srirangapatna & Mandya</option>
                  <option value="Hampi & North Karnataka" className="bg-white text-neutral-900">Hampi, Badami & Pattadakal</option>
                  <option value="Western Ghats & Coorg" className="bg-white text-neutral-900">Coorg, Chikmagalur & Kabini</option>
                  <option value="Coastal Karnataka & Dandeli" className="bg-white text-neutral-900">Dandeli, Gokarna & Karwar</option>
                  <option value="Bengaluru Tech" className="bg-white text-neutral-900">Bengaluru Tech & Aerospace</option>
                </select>
              </div>

              {/* Trip Category */}
              <div className="flex flex-col gap-1 px-3 py-2 rounded-lg bg-white border border-neutral-200">
                <label className="text-[11px] font-medium uppercase tracking-wider text-neutral-600 flex items-center gap-1.5">
                  <GraduationCap className="w-3.5 h-3.5 text-amber-600" />
                  <span>Service Type</span>
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="bg-transparent text-sm text-neutral-900 font-medium focus:outline-none cursor-pointer"
                >
                  <option value="all" className="bg-white text-neutral-900">All Tour Types</option>
                  <option value="educational" className="bg-white text-neutral-900">Educational Trips (Schools & Colleges)</option>
                  <option value="industrial" className="bg-white text-neutral-900">Industry Visits (IVs)</option>
                  <option value="karnataka-spotlight" className="bg-white text-neutral-900">Karnataka Special Tours</option>
                </select>
              </div>

              {/* Duration */}
              <div className="flex flex-col gap-1 px-3 py-2 rounded-lg bg-white border border-neutral-200">
                <label className="text-[11px] font-medium uppercase tracking-wider text-neutral-600 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-sky-600" />
                  <span>Duration</span>
                </label>
                <select
                  value={selectedDuration}
                  onChange={(e) => setSelectedDuration(e.target.value)}
                  className="bg-transparent text-sm text-neutral-900 font-medium focus:outline-none cursor-pointer"
                >
                  <option value="Any" className="bg-white text-neutral-900">Any Duration</option>
                  <option value="2-3 Days" className="bg-white text-neutral-900">2 to 3 Days (Weekend / Excursion)</option>
                  <option value="4-5 Days" className="bg-white text-neutral-900">4 to 5 Days (Extended IV)</option>
                  <option value="Custom" className="bg-white text-neutral-900">Customised Schedule</option>
                </select>
              </div>

              {/* Action */}
              <div className="flex items-end">
                <button
                  onClick={handleApplyFilter}
                  className="w-full h-11 px-4 text-xs font-bold uppercase tracking-wider text-slate-950 bg-sky-400 hover:bg-sky-300 rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer font-sans"
                >
                  <Compass className="w-4 h-4" />
                  <span>Find Tour Plans</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
