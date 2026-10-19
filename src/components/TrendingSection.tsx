import React from 'react';
import { Destination, DestinationCategory } from '../types/travel';
import { DestinationCard } from './DestinationCard';
import { Compass, Building2, MapPin, Sparkles } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/businessConfig';

interface TrendingSectionProps {
  destinations: Destination[];
  activeCategory: DestinationCategory;
  onSelectCategory: (cat: DestinationCategory) => void;
  onViewDetails: (dest: Destination) => void;
  onBook: (title: string, tripType?: string) => void;
}

export const TrendingSection: React.FC<TrendingSectionProps> = ({
  destinations,
  activeCategory,
  onSelectCategory,
  onViewDetails,
  onBook,
}) => {
  const categories: { key: DestinationCategory; label: string }[] = [
    { key: 'all', label: 'All Karnataka Circuits' },
    { key: 'educational', label: 'Educational Study Tours' },
    { key: 'industrial', label: 'Industrial Visits (IV)' },
    { key: 'karnataka-spotlight', label: 'Karnataka Heritage & Special' },
    { key: 'nature-wildlife', label: 'Western Ghats & Nature' },
  ];

  return (
    <section id="packages" className="py-20 lg:py-28 bg-neutral-50 border-b border-neutral-200">
      {/* Invisible anchor for #karnataka as requested by navbar */}
      <div id="karnataka" className="relative -top-24" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header with Editorial Hierarchy */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-sky-600">
              <MapPin className="w-4 h-4 text-amber-600" />
              <span>Karnataka Special Circuits & Tour Packages</span>
              <span aria-hidden="true" className="text-neutral-300">·</span>
              <span className="text-neutral-600 font-normal">All Prices in INR (₹)</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight leading-tight">
              Featured Karnataka Tour Packages
            </h2>
            <p className="text-neutral-700 text-base sm:text-lg leading-relaxed">
              Carefully crafted packages across Karnataka’s grand palaces, UNESCO World Heritage monuments, lush coffee estates, and coastal waterways. Complete with day-by-day itineraries and inclusions.
            </p>
          </div>

          {/* Interactive Filter Segmented Control */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-white border border-neutral-200 rounded-xl">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => onSelectCategory(cat.key)}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-amber-400 text-slate-950 shadow-sm font-bold'
                      : 'text-neutral-700 hover:text-neutral-900 hover:bg-neutral-50'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Destination Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest) => (
            <DestinationCard
              key={dest.id}
              destination={dest}
              onViewDetails={onViewDetails}
              onBook={onBook}
            />
          ))}
        </div>

        {destinations.length === 0 && (
          <div className="py-16 text-center space-y-3 bg-white rounded-2xl border border-neutral-200">
            <Compass className="w-10 h-10 text-amber-600 mx-auto opacity-70" />
            <div className="text-base font-bold text-neutral-900">No tour packages found for this filter</div>
            <p className="text-xs text-neutral-600">
              We customize any route across Karnataka upon request.
            </p>
            <button
              onClick={() => onSelectCategory('all')}
              className="mt-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
