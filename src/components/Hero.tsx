import React, { useState } from 'react';
import { Calendar, Globe, Compass, ArrowRight, GraduationCap, Building2, MapPin } from 'lucide-react';
import { HERO_IMAGE, AGENCY_STATS } from '../data/destinations';

interface HeroProps {
  onSearch: (region: string, category: string, month: string) => void;
  onOpenBooking: (destination?: string, tripType?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onSearch, onOpenBooking }) => {
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDuration, setSelectedDuration] = useState('Any');

  const handleApplyFilter = () => {
    onSearch(selectedRegion, selectedCategory, selectedDuration);
    const element = document.getElementById('trending');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden bg-black">
      {/* Hero Visual Area with Measured Scrim */}
      <div className="relative min-h-[600px] lg:min-h-[700px] flex items-center">
        {/* Background Image with Fallback */}
        <div className="absolute inset-0 z-0">
          <img
            src={HERO_IMAGE}
            alt="Magnificent illuminated Mysore Palace in Karnataka at twilight"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center scale-[1.02] transform transition-transform duration-1000 ease-out"
          />
          {/* Measured deep black scrim gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/55" />
          <div className="absolute inset-0 bg-black/30 backdrop-brightness-75" />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
          <div className="max-w-3xl space-y-6">
            {/* Unboxed Kicker with Regional & Educational Scope */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-400">
              <span className="flex items-center gap-1.5 text-cyan-400">
                <MapPin className="w-3.5 h-3.5" />
                South India Specialist
              </span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span>Major Trips Across Karnataka</span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span className="text-neutral-300 font-normal">Educational & Industrial Visits</span>
            </div>

            {/* Display Headline */}
            <h1 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12] text-balance">
              South India’s Premier Travel Agency & Karnataka Tour Specialist.
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-neutral-300 font-light leading-relaxed max-w-2xl">
              From the royal illuminated halls of Mysuru Palace and Hampi’s UNESCO monoliths to Coorg coffee agro-tours, collegiate Industrial Visits (IVs), and accredited school educational camps.
            </p>

            {/* Scope Badges */}
            <div className="flex flex-wrap items-center gap-3 pt-1 text-xs text-neutral-300">
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-neutral-900/80 border border-neutral-800 text-cyan-300">
                <Building2 className="w-3.5 h-3.5 text-cyan-400" />
                Industrial Visits (KSIC, HAL, Supa Dam)
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-neutral-900/80 border border-neutral-800 text-amber-300">
                <GraduationCap className="w-3.5 h-3.5 text-amber-400" />
                School & College Educational Tours
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-neutral-900/80 border border-neutral-800 text-neutral-300">
                <Compass className="w-3.5 h-3.5 text-amber-400" />
                Custom Karnataka Family & Group Holidays
              </span>
            </div>

            {/* CTA action & trust marker */}
            <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => onOpenBooking(undefined, 'Industrial Visit (IV)')}
                className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-black bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg shadow-cyan-400/10 cursor-pointer"
              >
                <Building2 className="w-4 h-4" />
                <span>Request Industrial Visit (IV) Quote</span>
              </button>
              <button
                onClick={() => onOpenBooking(undefined, 'Educational')}
                className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-black bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg shadow-amber-400/10 cursor-pointer"
              >
                <GraduationCap className="w-4 h-4" />
                <span>Book Educational Study Tour</span>
              </button>
              <a
                href="#trending"
                className="px-5 py-3.5 text-xs font-medium uppercase tracking-wider text-neutral-300 hover:text-white border border-neutral-800 hover:border-neutral-600 rounded-lg transition-colors flex items-center justify-center gap-2 bg-black/60"
              >
                <span>View All Karnataka Circuits</span>
              </a>
            </div>
          </div>

          {/* Quick Search Strip for South India & Karnataka */}
          <div className="mt-12 p-3 sm:p-4 rounded-xl bg-neutral-950/95 border border-neutral-800 backdrop-blur-md shadow-2xl max-w-4xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {/* Region Select */}
              <div className="flex flex-col gap-1 px-3 py-2 rounded-lg bg-black border border-neutral-800/80">
                <label className="text-[11px] font-medium uppercase tracking-wider text-neutral-400 flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Karnataka & South Zone</span>
                </label>
                <select
                  value={selectedRegion}
                  onChange={(e) => setSelectedRegion(e.target.value)}
                  className="bg-transparent text-sm text-neutral-100 font-medium focus:outline-none cursor-pointer"
                >
                  <option value="All" className="bg-neutral-950 text-white">All Karnataka & South India</option>
                  <option value="Karnataka" className="bg-neutral-950 text-white">Karnataka (Major Circuits)</option>
                  <option value="Mysuru & Mandya" className="bg-neutral-950 text-white">Mysuru, Srirangapatna & Mandya</option>
                  <option value="Hampi & North Karnataka" className="bg-neutral-950 text-white">Hampi, Badami & Pattadakal</option>
                  <option value="Western Ghats & Coorg" className="bg-neutral-950 text-white">Coorg, Chikmagalur & Kabini</option>
                  <option value="Coastal Karnataka & Dandeli" className="bg-neutral-950 text-white">Dandeli, Gokarna & Karwar</option>
                  <option value="Bengaluru Tech" className="bg-neutral-950 text-white">Bengaluru Tech & Aerospace</option>
                </select>
              </div>

              {/* Trip Category */}
              <div className="flex flex-col gap-1 px-3 py-2 rounded-lg bg-black border border-neutral-800/80">
                <label className="text-[11px] font-medium uppercase tracking-wider text-neutral-400 flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-amber-400" />
                  <span>Trip Format</span>
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="bg-transparent text-sm text-neutral-100 font-medium focus:outline-none cursor-pointer"
                >
                  <option value="all" className="bg-neutral-950 text-white">All Travel Formats</option>
                  <option value="industrial" className="bg-neutral-950 text-white">Industrial Visits (IVs) for Colleges</option>
                  <option value="educational" className="bg-neutral-950 text-white">School & College Educational Tours</option>
                  <option value="karnataka-spotlight" className="bg-neutral-950 text-white">Karnataka Spotlight Expeditions</option>
                  <option value="nature-wildlife" className="bg-neutral-950 text-white">Western Ghats Nature & Wildlife</option>
                </select>
              </div>

              {/* Duration Select */}
              <div className="flex flex-col gap-1 px-3 py-2 rounded-lg bg-black border border-neutral-800/80">
                <label className="text-[11px] font-medium uppercase tracking-wider text-neutral-400 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-amber-400" />
                  <span>Duration Window</span>
                </label>
                <select
                  value={selectedDuration}
                  onChange={(e) => setSelectedDuration(e.target.value)}
                  className="bg-transparent text-sm text-neutral-100 font-medium focus:outline-none cursor-pointer"
                >
                  <option value="Any" className="bg-neutral-950 text-white">Any Duration</option>
                  <option value="2-3 Days" className="bg-neutral-950 text-white">2–3 Days (Weekend / Quick IV)</option>
                  <option value="4-5 Days" className="bg-neutral-950 text-white">4–5 Days (Standard Study Tour)</option>
                  <option value="6+ Days" className="bg-neutral-950 text-white">6+ Days (Comprehensive Circuit)</option>
                </select>
              </div>

              {/* Filter Button */}
              <div className="flex items-center">
                <button
                  onClick={handleApplyFilter}
                  className="w-full h-full min-h-[46px] px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-black bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer font-sans"
                >
                  <span>Filter Tours</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4-column KPI strip in full-width black bar */}
      <div className="border-y border-neutral-900 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {AGENCY_STATS.map((stat, idx) => (
              <div key={idx} className="space-y-1">
                <div className="text-2xl sm:text-3xl font-bold tracking-tight text-white tabular-nums">
                  {stat.value}
                </div>
                <div className="text-xs font-medium text-neutral-300 uppercase tracking-wider">
                  {stat.label}
                </div>
                <div className="text-xs text-neutral-500">
                  {stat.subtitle}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
