import React, { useState } from 'react';
import { Destination } from '../types/travel';
import { MapPin, ArrowUpRight, Compass, Building2, GraduationCap } from 'lucide-react';

interface DestinationCardProps {
  destination: Destination;
  onViewDetails: (destination: Destination) => void;
  onBook: (destinationTitle: string, tripType?: string) => void;
}

export const DestinationCard: React.FC<DestinationCardProps> = ({
  destination,
  onViewDetails,
  onBook,
}) => {
  const [imageError, setImageError] = useState(false);

  const isIV = destination.tripType === 'Industrial Visit (IV)';
  const isEdu = destination.tripType === 'Educational';

  return (
    <article className="group flex flex-col rounded-xl overflow-hidden bg-neutral-950 border border-neutral-900 hover:border-neutral-800 transition-all duration-300">
      {/* Visual Media Slot */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-black">
        {!imageError ? (
          <img
            src={destination.imageUrl}
            alt={destination.title}
            referrerPolicy="no-referrer"
            onError={() => setImageError(true)}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-neutral-950 to-neutral-900 p-6 text-center">
            <Compass className="w-10 h-10 text-amber-400 mb-2 opacity-60" />
            <span className="text-sm font-serif-luxury font-medium text-neutral-300">{destination.title}</span>
            <span className="text-xs text-neutral-500 mt-1">{destination.location}</span>
          </div>
        )}

        {/* Ambient Gradient Scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-85" />

        {/* Clean unboxed top badge: trip type */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded bg-black/85 backdrop-blur-sm border border-neutral-800 text-[11px] font-semibold">
          {isIV ? (
            <span className="flex items-center gap-1 text-cyan-400">
              <Building2 className="w-3 h-3" />
              Industrial Visit (IV)
            </span>
          ) : isEdu ? (
            <span className="flex items-center gap-1 text-amber-400">
              <GraduationCap className="w-3 h-3" />
              Educational Study Tour
            </span>
          ) : (
            <span className="flex items-center gap-1 text-neutral-300">
              <Compass className="w-3 h-3 text-amber-400" />
              Karnataka Holiday
            </span>
          )}
        </div>

        {/* Clean unboxed bottom location kicker over media */}
        <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-neutral-200">
          <div className="flex items-center gap-1.5 font-medium drop-shadow-sm">
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            <span>{destination.location}</span>
          </div>
          <span className="font-mono text-neutral-400 text-[11px] drop-shadow-sm">
            {destination.bestSeason}
          </span>
        </div>
      </div>

      {/* Content Details */}
      <div className="flex flex-col flex-grow p-5 space-y-4">
        {/* Unboxed Metadata Line */}
        <div className="flex items-center gap-2 text-xs text-neutral-400 font-medium">
          <span>{destination.durationDays} Days Tour</span>
          <span aria-hidden="true">·</span>
          <span className="text-amber-400/90">{destination.state}</span>
          <span aria-hidden="true">·</span>
          <span>{destination.tripType}</span>
        </div>

        {/* Title */}
        <h3 className="font-serif-luxury text-xl font-semibold text-white group-hover:text-amber-300 transition-colors leading-snug">
          {destination.title}
        </h3>

        {/* Tagline / Trend Reason */}
        <p className="text-sm text-neutral-400 line-clamp-2 leading-relaxed">
          {destination.tagline}
        </p>

        {/* Highlight Bullets */}
        <div className="space-y-1.5 pt-1 border-t border-neutral-900">
          {destination.highlights.slice(0, 2).map((h, i) => (
            <div key={i} className="text-xs text-neutral-400 flex items-start gap-2">
              <span className="text-amber-400 mt-0.5">•</span>
              <span className="line-clamp-1">{h}</span>
            </div>
          ))}
        </div>

        {/* Ideal for note */}
        <div className="text-[11px] text-cyan-400/80 font-mono line-clamp-1 bg-black/40 px-2 py-1 rounded border border-neutral-900">
          Ideal for: {destination.idealFor}
        </div>

        {/* Footer: Price in INR & Actions */}
        <div className="pt-3 mt-auto border-t border-neutral-900 flex items-center justify-between gap-3">
          <div>
            <div className="text-[10px] uppercase tracking-wider text-neutral-500 font-medium">Group Rate From</div>
            <div className="text-lg font-bold text-white tabular-nums">
              ₹{destination.startingPriceInr.toLocaleString('en-IN')}
              <span className="text-xs text-neutral-400 font-normal ml-1">/ person</span>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => onViewDetails(destination)}
              className="px-3 py-2 text-xs font-medium text-neutral-200 hover:text-white bg-neutral-900 hover:bg-neutral-800 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer border border-neutral-800"
            >
              <span>Itinerary</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => onBook(destination.title, destination.tripType)}
              className="px-3.5 py-2 text-xs font-semibold uppercase tracking-wider text-black bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors cursor-pointer font-sans"
            >
              Inquire
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};
