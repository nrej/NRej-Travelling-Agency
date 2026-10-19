import React, { useEffect, useState } from 'react';
import { Destination } from '../types/travel';
import { X, MapPin, Check, ArrowRight, ShieldCheck, Compass, Building2, GraduationCap } from 'lucide-react';

interface ItineraryModalProps {
  destination: Destination | null;
  onClose: () => void;
  onBook: (title: string, tripType?: string) => void;
}

export const ItineraryModal: React.FC<ItineraryModalProps> = ({
  destination,
  onClose,
  onBook,
}) => {
  const [activeDay, setActiveDay] = useState<number>(1);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (destination) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [destination, onClose]);

  if (!destination) return null;

  const isIV = destination.tripType === 'Industrial Visit (IV)';
  const isEdu = destination.tripType === 'Educational';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/90 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-4xl bg-neutral-950 border border-neutral-800 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="p-6 border-b border-neutral-900 flex items-center justify-between gap-4 bg-black sticky top-0 z-10 backdrop-blur-sm">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider">
              {isIV ? (
                <span className="flex items-center gap-1.5 text-cyan-400">
                  <Building2 className="w-3.5 h-3.5" />
                  Industrial Visit (IV) · {destination.state}
                </span>
              ) : isEdu ? (
                <span className="flex items-center gap-1.5 text-amber-400">
                  <GraduationCap className="w-3.5 h-3.5" />
                  Educational Study Tour · {destination.state}
                </span>
              ) : (
                <span className="flex items-center gap-1.5 text-neutral-300">
                  <Compass className="w-3.5 h-3.5 text-amber-400" />
                  Karnataka Heritage Circuit
                </span>
              )}
              <span aria-hidden="true" className="text-neutral-700">·</span>
              <span className="text-neutral-400 font-normal">{destination.vibe}</span>
            </div>
            <h2 className="font-serif-luxury text-2xl font-bold text-white mt-1">
              {destination.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-900 transition-colors cursor-pointer"
            aria-label="Close Itinerary Modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
          {/* Header Media Banner */}
          <div className="relative aspect-[16/7] rounded-xl overflow-hidden bg-black">
            <img
              src={destination.imageUrl}
              alt={destination.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            <div className="absolute bottom-4 left-6 right-6 flex flex-wrap items-center justify-between gap-4 text-white">
              <div className="flex items-center gap-2 text-sm font-medium">
                <MapPin className="w-4 h-4 text-amber-400" />
                <span>{destination.location}, {destination.state}</span>
                <span className="text-neutral-500">·</span>
                <span>Best Season: {destination.bestSeason}</span>
              </div>
              <div className="text-right">
                <div className="text-xs uppercase text-neutral-400">Group Package From</div>
                <div className="text-xl font-bold text-amber-400 tabular-nums">
                  ₹{destination.startingPriceInr.toLocaleString('en-IN')}{' '}
                  <span className="text-xs text-neutral-300 font-normal">/ student / person</span>
                </div>
              </div>
            </div>
          </div>

          {/* Key Highlights */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
              Key Itinerary Highlights & Industry Encounters
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {destination.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2.5 p-3 rounded-lg bg-black border border-neutral-900 text-xs text-neutral-300">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Day-by-Day Flow */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                Day-by-Day Route ({destination.itinerary.length} Days)
              </h3>
              <div className="text-xs text-neutral-500 font-mono">
                Click day to preview route schedule
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* Days List Selector */}
              <div className="md:col-span-4 flex md:flex-col gap-2 overflow-x-auto pb-2 md:pb-0">
                {destination.itinerary.map((plan) => (
                  <button
                    key={plan.day}
                    onClick={() => setActiveDay(plan.day)}
                    className={`p-3 rounded-xl text-left border transition-all cursor-pointer whitespace-nowrap md:whitespace-normal shrink-0 ${
                      activeDay === plan.day
                        ? 'border-cyan-400 bg-cyan-950/40 text-white'
                        : 'border-neutral-900 bg-black text-neutral-400 hover:text-white hover:border-neutral-800'
                    }`}
                  >
                    <div className="text-[11px] font-mono uppercase text-cyan-400 font-semibold">
                      Day {plan.day}
                    </div>
                    <div className="text-xs font-medium truncate mt-0.5">
                      {plan.title}
                    </div>
                  </button>
                ))}
              </div>

              {/* Active Day Detail Display */}
              <div className="md:col-span-8 p-6 rounded-xl bg-black border border-neutral-900 space-y-4">
                {(() => {
                  const currentPlan =
                    destination.itinerary.find((p) => p.day === activeDay) ||
                    destination.itinerary[0];
                  return (
                    <>
                      <div className="flex items-center justify-between pb-3 border-b border-neutral-900">
                        <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold">
                          Day {currentPlan.day} of {destination.durationDays}
                        </span>
                        <span className="text-xs text-neutral-400">Escorted by NREJ Tour Manager</span>
                      </div>
                      <h4 className="text-lg font-bold text-white font-serif-luxury">
                        {currentPlan.title}
                      </h4>
                      <p className="text-sm text-neutral-300 leading-relaxed">
                        {currentPlan.summary}
                      </p>
                      <div className="space-y-2 pt-2">
                        <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                          Key Day Inclusions:
                        </div>
                        <ul className="space-y-1.5 text-xs text-neutral-300">
                          {currentPlan.highlights.map((hl, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                              <span>{hl}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  );
                })()}
              </div>
            </div>
          </div>

          {/* Inclusions & Guarantees */}
          <div className="p-6 rounded-xl bg-black border border-neutral-900 space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
              The NREJ Institutional Guarantee: Everything Handled
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-300">
              {destination.included.map((inc, i) => (
                <div key={i} className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{inc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Bottom Actions */}
        <div className="p-6 border-t border-neutral-900 bg-black flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-neutral-400 text-center sm:text-left">
            Have custom dates, syllabus topics, or multi-coach requirements? We customize every aspect.
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2.5 text-xs font-medium text-neutral-300 hover:text-white rounded-lg border border-neutral-800 hover:border-neutral-700 transition-colors cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onBook(destination.title, destination.tripType);
              }}
              className="flex-1 sm:flex-none px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-black bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md font-sans"
            >
              <span>Inquire for This Tour</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
