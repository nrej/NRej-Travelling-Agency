import React, { useState } from 'react';
import { Camera, Building2, GraduationCap, Flame, MapPin, Users, Calendar, ArrowRight, X, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';

export interface GalleryItem {
  id: string;
  title: string;
  category: 'industrial' | 'educational' | 'camping';
  categoryLabel: string;
  institution: string;
  batchSize: string;
  location: string;
  date: string;
  imageUrl: string;
  description: string;
  takeaways: string[];
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-1',
    title: 'Precision Machining & Silk Unit Industrial Visit',
    category: 'industrial',
    categoryLabel: 'Industrial Visit (IV)',
    institution: 'Mechanical Engineering Department Batch',
    batchSize: '115 Students · 4 Faculty Escorts',
    location: 'Mysuru & Ramanagara Industrial Corridor, Karnataka',
    date: 'Recent Batch',
    imageUrl: '/src/assets/images/gallery_iv_factory_tour_1792402557123.jpg',
    description: 'Students from Mechanical and Production Engineering underwent an immersive technical plant walkthrough examining CNC multi-axis machining, automated textile reeling, and quality inspection systems.',
    takeaways: [
      'Hands-on observation of industrial automation & production lines',
      'Technical briefing with senior plant maintenance engineers',
      'Official attendance certificates and NAAC verification files issued',
    ],
  },
  {
    id: 'g-2',
    title: 'Hampi Archaeological & Hydraulic Engineering Field Study',
    category: 'educational',
    categoryLabel: 'Educational Tour',
    institution: 'History & Architecture Student Delegation',
    batchSize: '85 Students · 3 Faculty Guides',
    location: 'Hampi UNESCO World Heritage Site, Karnataka',
    date: 'Recent Batch',
    imageUrl: '/src/assets/images/gallery_student_hampi_1792402557076.jpg',
    description: 'A 3-day experiential field survey analyzing Vijayanagara monolithic architecture, stepwell hydraulics, and temple acoustics at Vittala Temple, guided by certified ASI historians.',
    takeaways: [
      'Comprehensive on-site architectural drawings & acoustic analysis',
      'Monolithic stone chariot & Pushkarini stepwell field study',
      'Special student interaction with regional archaeological curators',
    ],
  },
  {
    id: 'g-3',
    title: 'Western Ghats Eco-Camp & Fireside Cultural Evening',
    category: 'camping',
    categoryLabel: 'Student Nature Camp',
    institution: 'College Excursion & Adventure Group',
    batchSize: '65 Students · 2 Faculty Escorts',
    location: 'Madikeri, Coorg, Karnataka',
    date: 'Recent Batch',
    imageUrl: '/src/assets/images/gallery_coorg_bonfire_1792402557907.jpg',
    description: 'After completing coffee agro-processing workshops, students and faculty gathered for an acoustic campfire night in the pine valleys of Coorg with traditional Kodava dinner.',
    takeaways: [
      'Team-building obstacle trails and plantation orienteering',
      'Evening acoustic music, campfire, and stargazing session',
      'Eco-resort accommodation with dedicated safety security protocols',
    ],
  },
  {
    id: 'g-4',
    title: 'Aerospace Engineering & Satellite Technology Tour',
    category: 'industrial',
    categoryLabel: 'Industrial Visit (IV)',
    institution: 'Aeronautical & Computer Science Students',
    batchSize: '140 Students · 5 Faculty Escorts',
    location: 'HAL & Aerospace Innovation Corridor, Bengaluru',
    date: 'Recent Batch',
    imageUrl: '/src/assets/images/dest_industrial_bangalore_1792395164842.jpg',
    description: 'In-depth aerospace industrial tour covering indigenous Tejas fighter jet avionics, jet propulsion turbines, flight simulators, and ISRO satellite payload integration systems.',
    takeaways: [
      'Direct interaction with aeronautical test engineers',
      'Live flight simulator cockpit demonstration',
      'Authorized industrial certificates for all participating students',
    ],
  },
  {
    id: 'g-5',
    title: 'Mysuru Royal Palace Heritage & Srirangapatna Study',
    category: 'educational',
    categoryLabel: 'Educational Tour',
    institution: 'High School & PU College Excursion',
    batchSize: '95 Students · 4 Teachers',
    location: 'Mysuru Palace & Srirangapatna, Karnataka',
    date: 'Recent Batch',
    imageUrl: '/src/assets/images/hero_mysore_karnataka_1792395162647.jpg',
    description: 'Curated heritage exploration of the illuminated Amba Vilas Palace, Tippu Sultan’s summer palace, and ancient military defense walls, combined with KSIC silk mill exposure.',
    takeaways: [
      'Private royal durbar hall guided walkthrough',
      'Military ramparts & 18th-century battlefield history',
      'Pure vegetarian catering & luxury 2x2 AC pushback coach transit',
    ],
  },
  {
    id: 'g-6',
    title: 'Kabini River Ecology & Wildlife Conservation Fieldwork',
    category: 'educational',
    categoryLabel: 'Educational Tour',
    institution: 'Environmental Studies Field Survey Batch',
    batchSize: '50 Students · 2 Wildlife Naturalists',
    location: 'Nagarhole & Kabini River, Karnataka',
    date: 'Recent Batch',
    imageUrl: '/src/assets/images/dest_kabini_safari_1792395163837.jpg',
    description: 'Students conducted riverboat wildlife census counts on the Kabini River, documenting wild Asian elephant herds, marsh crocodiles, and Western Ghats avian diversity.',
    takeaways: [
      'Forest department river boat and 4x4 open safari fieldwork',
      'Western Ghats endangered flora and fauna documentation',
      'Interactive workshop with resident tribal forest trackers',
    ],
  },
];

interface PhotoGalleryProps {
  onOpenBooking: (destinationTitle?: string, tripType?: string) => void;
}

export const PhotoGallery: React.FC<PhotoGalleryProps> = ({ onOpenBooking }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'industrial' | 'educational' | 'camping'>('all');
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  const selectedItem = selectedItemIndex !== null ? GALLERY_ITEMS[selectedItemIndex] : null;

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedItemIndex !== null) {
      setSelectedItemIndex((selectedItemIndex + 1) % GALLERY_ITEMS.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedItemIndex !== null) {
      setSelectedItemIndex((selectedItemIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
    }
  };

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-black border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header with Editorial Hierarchy */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-cyan-400">
              <Camera className="w-4 h-4 text-amber-400" />
              <span>Real Expeditions in Action</span>
              <span aria-hidden="true" className="text-neutral-700">·</span>
              <span className="text-neutral-400 font-normal">Karnataka & South India</span>
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight text-balance">
              Recent Industrial Visits & Educational Tours.
            </h2>
            <p className="text-neutral-400 text-base sm:text-lg font-light leading-relaxed">
              Explore photo highlights from recent batches managed by NREJ Travels. From technical factory floors to historic monolithic sanctuaries and student eco-camps.
            </p>
          </div>

          {/* Interactive Filter Control */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-neutral-950 border border-neutral-800 rounded-xl">
            {[
              { key: 'all' as const, label: 'All Recent Tours' },
              { key: 'industrial' as const, label: 'Industrial Visits (IV)' },
              { key: 'educational' as const, label: 'Educational & Heritage' },
              { key: 'camping' as const, label: 'Nature Camps & Bonfires' },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveCategory(tab.key)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  activeCategory === tab.key
                    ? 'bg-amber-400 text-black shadow-sm font-semibold'
                    : 'text-neutral-300 hover:text-white hover:bg-neutral-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, idx) => {
            const actualIndex = GALLERY_ITEMS.findIndex((gi) => gi.id === item.id);
            return (
              <div
                key={item.id}
                onClick={() => setSelectedItemIndex(actualIndex)}
                className="group relative rounded-xl overflow-hidden bg-neutral-950 border border-neutral-900 hover:border-neutral-700 transition-all duration-300 cursor-pointer flex flex-col"
              >
                {/* Media frame */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-black">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-85" />

                  {/* Category tag */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded bg-black/85 backdrop-blur-sm border border-neutral-800 text-[11px] font-semibold">
                    {item.category === 'industrial' ? (
                      <span className="flex items-center gap-1 text-cyan-400">
                        <Building2 className="w-3 h-3" />
                        {item.categoryLabel}
                      </span>
                    ) : item.category === 'educational' ? (
                      <span className="flex items-center gap-1 text-amber-400">
                        <GraduationCap className="w-3 h-3" />
                        {item.categoryLabel}
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-orange-400">
                        <Flame className="w-3 h-3" />
                        {item.categoryLabel}
                      </span>
                    )}
                  </div>

                  {/* Batch size tag over image */}
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-neutral-200">
                    <span className="flex items-center gap-1.5 font-medium drop-shadow-sm truncate">
                      <Users className="w-3.5 h-3.5 text-cyan-400" />
                      {item.batchSize}
                    </span>
                    <span className="font-mono text-neutral-400 text-[11px] drop-shadow-sm shrink-0 ml-2">
                      {item.date}
                    </span>
                  </div>
                </div>

                {/* Content details */}
                <div className="p-5 flex flex-col flex-grow space-y-3">
                  <div className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider flex items-center gap-1.5">
                    <MapPin className="w-3 h-3 text-amber-400" />
                    <span className="truncate">{item.location}</span>
                  </div>

                  <h3 className="font-serif-luxury text-lg font-bold text-white group-hover:text-amber-300 transition-colors leading-snug line-clamp-1">
                    {item.title}
                  </h3>

                  <div className="text-xs text-cyan-300 font-medium">
                    {item.institution}
                  </div>

                  <p className="text-xs text-neutral-400 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="pt-3 mt-auto border-t border-neutral-900 flex items-center justify-between text-xs text-neutral-400">
                    <span className="text-[11px] text-neutral-500">Click to view details</span>
                    <span className="text-amber-400 group-hover:translate-x-1 transition-transform flex items-center gap-1 font-semibold">
                      <span>Full Case</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Gallery Interactive Banner */}
        <div className="p-6 sm:p-8 rounded-2xl bg-neutral-950 border border-neutral-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="text-xs font-mono uppercase tracking-wider text-sky-400 font-semibold">
              Planned for Schools, Colleges & Group Delegations
            </div>
            <div className="font-serif-luxury text-xl font-bold text-white">
              Want photos and custom itinerary blueprints for your department?
            </div>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-2xl leading-relaxed">
              We provide college principals, department HODs, and school coordinators with detailed route logs, day-by-day plans, and itemized quotation proposals.
            </p>
          </div>
          <button
            onClick={() => onOpenBooking(undefined, 'Industrial Visit (IV)')}
            className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer font-sans"
          >
            Plan Your Institution's Tour
          </button>
        </div>
      </div>

      {/* Lightbox / High-Resolution Case Study Modal */}
      {selectedItem && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/95 backdrop-blur-md overflow-y-auto"
          onClick={() => setSelectedItemIndex(null)}
        >
          <div 
            className="relative w-full max-w-4xl bg-neutral-950 border border-neutral-800 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top Bar */}
            <div className="p-5 border-b border-neutral-900 flex items-center justify-between gap-4 bg-black sticky top-0 z-10">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">
                  {selectedItem.categoryLabel}
                </span>
                <span className="text-neutral-700">·</span>
                <span className="text-xs text-neutral-400 font-medium">
                  {selectedItem.location}
                </span>
              </div>
              <button
                onClick={() => setSelectedItemIndex(null)}
                className="p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-900 transition-colors cursor-pointer"
                aria-label="Close photo view"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-6 overflow-y-auto space-y-6">
              {/* High-res image display with navigation buttons */}
              <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-black border border-neutral-900 group">
                <img
                  src={selectedItem.imageUrl}
                  alt={selectedItem.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />

                {/* Left/Right Carousel Controls */}
                <button
                  onClick={handlePrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/80 text-white hover:bg-black border border-neutral-800 transition-colors cursor-pointer"
                  aria-label="Previous photo"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/80 text-white hover:bg-black border border-neutral-800 transition-colors cursor-pointer"
                  aria-label="Next photo"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Information & Case Dossier */}
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-neutral-900 pb-3">
                  <div>
                    <h3 className="font-serif-luxury text-2xl font-bold text-white">
                      {selectedItem.title}
                    </h3>
                    <div className="text-sm font-semibold text-cyan-300 mt-0.5">
                      {selectedItem.institution}
                    </div>
                  </div>
                  <div className="text-right text-xs text-neutral-400">
                    <div className="font-semibold text-white">{selectedItem.batchSize}</div>
                    <div className="font-mono text-neutral-500">{selectedItem.date}</div>
                  </div>
                </div>

                <p className="text-sm text-neutral-300 leading-relaxed">
                  {selectedItem.description}
                </p>

                <div className="space-y-2 pt-2">
                  <div className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                    Key Outcomes & Inclusions Handled by NREJ:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-300">
                    {selectedItem.takeaways.map((point, i) => (
                      <div key={i} className="flex items-start gap-2 p-2.5 rounded-lg bg-black border border-neutral-900">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Bottom CTA */}
            <div className="p-5 border-t border-neutral-900 bg-black flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-neutral-400">
                Want this exact circuit for your department or class?
              </div>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={() => setSelectedItemIndex(null)}
                  className="flex-1 sm:flex-none px-4 py-2.5 text-xs font-medium text-neutral-300 hover:text-white rounded-lg border border-neutral-800 transition-colors"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const destination = selectedItem.title;
                    const type = selectedItem.category === 'industrial' ? 'Industrial Visit (IV)' : 'Educational';
                    setSelectedItemIndex(null);
                    onOpenBooking(destination, type);
                  }}
                  className="flex-1 sm:flex-none px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-black bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer font-sans"
                >
                  <span>Book Similar Tour</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
