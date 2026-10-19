import React from 'react';
import { Destination, DestinationCategory } from '../types/travel';
import { DestinationCard } from './DestinationCard';
import { Compass, Building2, MapPin } from 'lucide-react';

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
    { key: 'all', label: 'All Karnataka & South Tours' },
    { key: 'industrial', label: 'Industrial Visits (IV)' },
    { key: 'educational', label: 'Educational Study Tours' },
    { key: 'karnataka-spotlight', label: 'Karnataka Heritage' },
    { key: 'nature-wildlife', label: 'Western Ghats & Nature' },
  ];

  return (
    <section id="trending" className="py-20 lg:py-28 bg-black border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header with Editorial Hierarchy */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-400">
              <MapPin className="w-4 h-4 text-cyan-400" />
              <span>South India & Major Trips in Karnataka</span>
              <span aria-hidden="true" className="text-neutral-700">·</span>
              <span className="text-neutral-400 font-normal">2026 / 2027 Roster</span>
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight text-balance">
              Curated Karnataka circuits, academic study tours, and industrial plants.
            </h2>
            <p className="text-neutral-400 text-base sm:text-lg font-light leading-relaxed">
              Explore our handpicked collection of Karnataka itineraries: architectural wonders in Hampi and Mysuru, engineering visits to state-of-the-art manufacturing plants, and Western Ghats wildlife expeditions.
            </p>
          </div>

          {/* Interactive Filter Segmented Control */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-neutral-950 border border-neutral-800 rounded-xl">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => onSelectCategory(cat.key)}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-amber-400 text-black shadow-sm font-semibold'
                      : 'text-neutral-300 hover:text-white hover:bg-neutral-900'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Destination Cards Grid */}
        {destinations.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination) => (
              <DestinationCard
                key={destination.id}
                destination={destination}
                onViewDetails={onViewDetails}
                onBook={onBook}
              />
            ))}
          </div>
        ) : (
          <div className="py-16 text-center rounded-2xl bg-neutral-950 border border-neutral-900 p-8">
            <Compass className="w-10 h-10 text-neutral-600 mx-auto mb-3" />
            <h3 className="text-lg font-medium text-white">No departures match this filter</h3>
            <p className="text-sm text-neutral-400 mt-1 max-w-md mx-auto">
              Our directors custom-design itineraries for any institution or family in Karnataka upon request.
            </p>
            <button
              onClick={() => onSelectCategory('all')}
              className="mt-4 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-black bg-amber-400 rounded-lg hover:bg-amber-300 transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Advisory Strip for Industrial & College Trips */}
        <div className="p-6 sm:p-8 rounded-2xl bg-neutral-950 border border-neutral-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5" />
              Academic Department & College Notice · 2026/2027 Bookings
            </div>
            <div className="font-serif-luxury text-xl font-bold text-white">
              Planning an Industrial Visit (IV) or School Study Tour in Karnataka?
            </div>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-2xl leading-relaxed">
              We coordinate official factory permission letters, police and transport authorizations, GST bills for college accounts, verified student lodges with separate wings, and round-the-clock emergency assistance.
            </p>
          </div>
          <button
            onClick={() => onBook('Mysuru Royal Palace & KSIC Silk Industrial Tour', 'Industrial Visit (IV)')}
            className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-black bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer font-sans"
          >
            Inquire for College / School Batch
          </button>
        </div>
      </div>
    </section>
  );
};
