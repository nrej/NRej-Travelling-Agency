import React, { useState } from 'react';

export interface GalleryItem {
  id: string;
  title: string;
  category: 'all' | 'industrial' | 'educational' | 'camping';
  categoryLabel: string;
  institution: string;
  batchSize: string;
  location: string;
  date: string;
  imageUrl: string;
  description: string;
  takeaways: string[];
}

interface PhotoGalleryProps {
  onOpenBooking?: (destinationTitle?: string, tripType?: string) => void;
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
    imageUrl: '/images/gallery_iv_factory_tour_1792402557123.jpg',
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
    imageUrl: '/images/gallery_student_hampi_1792402557076.jpg',
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
    imageUrl: '/images/gallery_coorg_bonfire_1792402557907.jpg',
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
    imageUrl: '/images/dest_industrial_bangalore_1792395164842.jpg',
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
    imageUrl: '/images/hero_mysore_karnataka_1792395162647.jpg',
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
    imageUrl: '/images/dest_kabini_safari_1792395163837.jpg',
    description: 'Students conducted riverboat wildlife census counts on the Kabini River, documenting wild Asian elephant herds, marsh crocodiles, and Western Ghats avian diversity.',
    takeaways: [
      'Forest department river boat and 4x4 open safari fieldwork',
      'Western Ghats endangered flora and fauna documentation',
      'Interactive workshop with resident tribal forest trackers',
    ],
  },
];

export function PhotoGallery({ onOpenBooking }: PhotoGalleryProps) {
  const [activeFilter, setActiveFilter] = useState<'all' | 'industrial' | 'educational' | 'camping'>('all');

  const filteredItems = activeFilter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <section id="gallery" className="py-16 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3">
            On-Ground Experience
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
            Recent Tour & Industrial Visit Gallery
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Real field snapshots from university industrial visits, archaeological field studies, and adventure youth camps organized by NReJ Travelling Agency.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {[
              { key: 'all', label: 'All Photos' },
              { key: 'industrial', label: 'Industrial Visits (IV)' },
              { key: 'educational', label: 'Educational Tours' },
              { key: 'camping', label: 'Nature Camps' },
            ].map((tab) => (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveFilter(tab.key as any)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeFilter === tab.key
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 group"
            >
              {/* Image Frame */}
              <div className="relative w-full h-60 bg-slate-200 overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    // Safe fallback if network blocks image
                    (e.currentTarget as HTMLImageElement).src =
                      '/images/hero_india_travel_1792393897902.jpg';
                  }}
                />
                <span className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                  {item.categoryLabel}
                </span>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs font-semibold text-blue-600 tracking-wide uppercase">
                    {item.location}
                  </p>
                  <h3 className="mt-1 text-lg font-bold text-slate-900 leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs font-medium text-slate-500">
                    {item.institution} • <span className="text-slate-700">{item.batchSize}</span>
                  </p>
                  <p className="mt-3 text-sm text-slate-600 line-clamp-3">
                    {item.description}
                  </p>
                </div>

                {/* Takeaways & Action Button */}
                <div className="mt-5 pt-4 border-t border-slate-100">
                  <p className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                    Key Highlights
                  </p>
                  <ul className="space-y-1.5 mb-5">
                    {item.takeaways.map((takeaway, i) => (
                      <li key={i} className="text-xs text-slate-600 flex items-start gap-2">
                        <span className="text-emerald-600 font-bold">✓</span>
                        <span>{takeaway}</span>
                      </li>
                    ))}
                  </ul>

                  {onOpenBooking && (
                    <button
                      type="button"
                      onClick={() => onOpenBooking(item.title, item.categoryLabel)}
                      className="w-full py-2.5 px-4 bg-slate-900 hover:bg-blue-600 text-white text-xs font-semibold rounded-xl transition-colors duration-200 text-center"
                    >
                      Plan Similar Tour →
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default PhotoGallery;
