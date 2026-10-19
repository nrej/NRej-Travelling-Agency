import React from 'react';
import { GraduationCap, BookOpen, MapPin, CheckCircle, ArrowRight, Compass, Shield, Users } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/businessConfig';

interface EducationalTripsProps {
  onOpenBooking: (destinationTitle?: string, tripType?: string) => void;
}

export const EDUCATIONAL_PROGRAMMES = [
  {
    id: 'edu-hampi',
    title: 'Hampi & Badami UNESCO Heritage Study Tour',
    target: 'High School, PU & Degree History / Architecture Students',
    duration: '3 Days / 2 Nights',
    location: 'Hampi, Badami, Aihole & Pattadakal',
    imageUrl: '/images/dest_hampi_heritage_1792395164558.jpg',
    description:
      'Immersive study tour exploring 14th-century Vijayanagara monolithic architecture, stepwell hydraulics, Vittala Temple stone chariot, and Chalukyan cave temples.',
    curriculumConnections: [
      'Indian Medieval History & Vijayanagara Empire',
      'Ancient Civil Engineering & Water Management Systems',
      'Dravidian and Chalukyan temple stone sculpting',
      'Archaeological Survey of India (ASI) site observation',
    ],
  },
  {
    id: 'edu-mysuru',
    title: 'Mysuru & Srirangapatna Cultural & Science Tour',
    target: 'Middle School, High School & PU Colleges',
    duration: '3 Days / 2 Nights',
    location: 'Mysuru, Srirangapatna & Chamundi Hills',
    imageUrl: '/images/hero_mysore_karnataka_1792395162647.jpg',
    description:
      'A comprehensive educational itinerary combining royal Mysuru Palace art, Tipu Sultan’s 18th-century military history, botanical study at Brindavan Gardens, and regional zoology.',
    curriculumConnections: [
      'Colonial & Anglo-Mysore Military History',
      'Flora & Horticulture study at historical gardens',
      'Royal architecture, wood carving, and traditional handicrafts',
      'Chamundi Hills geographical terrain and cultural history',
    ],
  },
  {
    id: 'edu-bangalore-science',
    title: 'Bengaluru Science, Innovation & Aerospace Excursion',
    target: 'Science & Computer Science Students (Classes 8–12 & PU)',
    duration: '2 to 3 Days',
    location: 'Bengaluru Science Corridor',
    imageUrl: '/images/dest_industrial_bangalore_1792395164842.jpg',
    description:
      'Hands-on interactive science excursions visiting Visvesvaraya Industrial & Technological Museum, Jawaharlal Nehru Planetarium, and HAL Heritage Centre.',
    curriculumConnections: [
      'Interactive Physics & Mechanics working exhibits',
      'Astronomy, Space Science, and Cosmic Sky Theatre shows',
      'Aviation principles, flight models, and aircraft technology',
      'Botanical biodiversity study at Lalbagh Glasshouse',
    ],
  },
  {
    id: 'edu-westernghats-eco',
    title: 'Western Ghats Biodiversity & Forest Ecology Study',
    target: 'Biology, Environmental Science & Geography Students',
    duration: '3 to 4 Days',
    location: 'Coorg, Chikmagalur & Western Ghats',
    imageUrl: '/images/dest_coorg_coffee_1792395163120.jpg',
    description:
      'Field survey studying tropical rainforest ecosystems, river basin geography, indigenous plant species, and agro-forestry in the UNESCO Western Ghats biodiversity hotspot.',
    curriculumConnections: [
      'Ecology, biodiversity conservation, and endemic wildlife',
      'Agro-climatic zoning, coffee & spice crop cultivation',
      'River origin and watershed preservation (Cauvery basin)',
      'Responsible eco-tourism practices and conservation ethics',
    ],
  },
];

export const EducationalTripsSection: React.FC<EducationalTripsProps> = ({ onOpenBooking }) => {
  return (
    <section id="educational" className="py-20 lg:py-28 bg-neutral-50 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-widest text-sky-600 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-amber-600" />
              <span>Learn Beyond Classrooms</span>
              <span className="text-neutral-300">·</span>
              <span className="text-neutral-600 font-normal">Schools & Colleges</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight leading-tight">
              Educational Trips & School Excursions
            </h2>
            <p className="text-neutral-700 text-base sm:text-lg leading-relaxed">
              We design safe, structured educational travel experiences aligned with school and college curricula. Every trip is planned with balanced learning, proper rest, and complete student care.
            </p>
          </div>

          <div className="shrink-0">
            <button
              onClick={() => onOpenBooking(undefined, 'Educational')}
              className="px-5 py-3 text-xs font-bold uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors flex items-center gap-2 cursor-pointer font-sans"
            >
              <span>Custom School Tour Plan</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 4 Detailed Educational Circuits */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {EDUCATIONAL_PROGRAMMES.map((prog) => (
            <div
              key={prog.id}
              className="group rounded-2xl overflow-hidden bg-white border border-neutral-200 hover:border-neutral-300 transition-all flex flex-col"
            >
              {/* Image Frame */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-50">
                <img
                  src={prog.imageUrl}
                  alt={prog.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />

                <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-white/90 backdrop-blur-sm border border-neutral-200 text-[11px] font-semibold text-amber-600">
                  {prog.duration}
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-xs text-neutral-700 flex items-center gap-1.5 font-medium truncate">
                  <MapPin className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                  <span>{prog.location}</span>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex flex-col flex-grow space-y-4">
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-sky-600">
                    {prog.target}
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 group-hover:text-amber-600 transition-colors mt-1">
                    {prog.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                  {prog.description}
                </p>

                {/* Educational Learning Points */}
                <div className="space-y-2 pt-2 border-t border-neutral-50">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-neutral-600">
                    Curriculum & Learning Focus:
                  </div>
                  <ul className="space-y-1.5 text-xs text-neutral-700">
                    {prog.curriculumConnections.map((pt, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action */}
                <div className="pt-4 mt-auto border-t border-neutral-50 flex items-center justify-between">
                  <span className="text-[11px] text-neutral-600">
                    Includes AC Coach, Food & Stay
                  </span>
                  <button
                    onClick={() => onOpenBooking(prog.title, 'Educational')}
                    className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors flex items-center gap-1 cursor-pointer font-sans"
                  >
                    <span>Request Proposal</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Institutional Safety & Coordination Guarantee Banner */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-neutral-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-600">
              Institutional Safety & Coordination Standards
            </div>
            <div className="text-xl font-bold text-neutral-900">
              Planning an annual excursion for your school or PU college?
            </div>
            <p className="text-xs sm:text-sm text-neutral-600 max-w-2xl leading-relaxed">
              We provide formal quotations for school management approvals, vetted pushback coaches, separate student/faculty rooms, and strictly hygienic pure vegetarian / regional food options.
            </p>
          </div>
          <button
            onClick={() => onOpenBooking('Custom School Educational Trip', 'Educational')}
            className="px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-950 bg-sky-400 hover:bg-sky-300 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer font-sans"
          >
            Request School Excursion Plan
          </button>
        </div>
      </div>
    </section>
  );
};
