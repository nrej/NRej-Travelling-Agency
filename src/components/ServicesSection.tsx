import React from 'react';
import { GraduationCap, Factory, MapPin, Bus, ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/businessConfig';

interface ServicesSectionProps {
  onOpenBooking: (serviceName?: string, tripType?: string) => void;
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  tripType: string;
  icon: React.ReactNode;
  imageUrl: string;
  description: string;
  highlights: string[];
  idealFor: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'educational-trips',
    title: 'Educational Trips',
    subtitle: 'Connecting Classrooms with Real-World Wonder',
    tripType: 'Educational Tour',
    icon: <GraduationCap className="w-5 h-5 text-amber-600" />,
    imageUrl: '/src/assets/images/gallery_student_hampi_1792402557076.jpg',
    description:
      'Make learning memorable through educational excursions designed for schools and colleges. Explore historical sites, museums, science centres, cultural destinations, geographical landmarks, and other places that complement classroom education.',
    highlights: [
      'School educational tours and annual excursions',
      'PU and degree college subject study tours',
      'Heritage, historical, and cultural monument visits',
      'Science centres, planetariums, and botanical gardens',
      'Carefully scheduled itineraries with student safety in mind',
    ],
    idealFor: 'Schools, PU Colleges, Degree Colleges & Universities',
  },
  {
    id: 'industry-visits',
    title: 'Industry Visits (IV)',
    subtitle: 'Practical Industrial & Technical Exposure',
    tripType: 'Industrial Visit (IV)',
    icon: <Factory className="w-5 h-5 text-sky-600" />,
    imageUrl: '/src/assets/images/gallery_iv_factory_tour_1792402557123.jpg',
    description:
      'Bridge the gap between theoretical knowledge and real-world industrial practice. We assist educational institutions with travel arrangements and logistical coordination for factory, manufacturing plant, and technology site visits.',
    highlights: [
      'Coordination with manufacturing plants, textile mills, technology parks, and production facilities',
      'Assistance with entry permission protocols and documentation',
      'Suitable for engineering, commerce, management, and polytechnic students',
      'Punctual travel schedules aligned with factory shift timings',
      'Official certificates of participation and faculty coordination assistance',
    ],
    idealFor: 'Engineering, Polytechnic, MBA, M.Com & Degree Colleges',
  },
  {
    id: 'karnataka-special',
    title: 'Karnataka Special Tours',
    subtitle: 'Grand Heritage, Wildlife & Western Ghats',
    tripType: 'Karnataka Special',
    icon: <MapPin className="w-5 h-5 text-amber-600" />,
    imageUrl: '/src/assets/images/hero_mysore_karnataka_1792395162647.jpg',
    description:
      'Experience the rich heritage, scenic natural beauty, and vibrant culture of Karnataka. From the grand palaces of Mysuru to the UNESCO World Heritage monuments of Hampi, we design customized itineraries showcasing the finest destinations across the state.',
    highlights: [
      'Mysuru, Srirangapatna, and Chamundi Hills royal circuit',
      'Hampi, Badami, Aihole, and Pattadakal UNESCO heritage circuits',
      'Coorg, Chikmagalur, and Western Ghats nature & plantation tours',
      'Coastal Karnataka, Udupi, Gokarna, and Dandeli adventure tours',
      'Bengaluru science, technology, and aerospace circuits',
    ],
    idealFor: 'Institutions, Department Groups & Karnataka Tourism Enthusiasts',
  },
  {
    id: 'tour-management',
    title: 'Complete Tour Management & Group Travel',
    subtitle: 'Hassle-Free End-to-End Travel Logistics',
    tripType: 'Custom Group Tour',
    icon: <Bus className="w-5 h-5 text-sky-600" />,
    imageUrl: '/src/assets/images/gallery_coorg_bonfire_1792402557907.jpg',
    description:
      'Comprehensive travel solutions for schools, colleges, institutions, and family or corporate groups. We handle end-to-end arrangements so organizers can focus on learning and enjoying the journey.',
    highlights: [
      'Clean, well-maintained pushback tourist buses, mini-coaches, and tempo travellers',
      'Verified, experienced, and courteous commercial drivers',
      'Hygienic, student-friendly accommodation and quality regional food arrangements',
      'Dedicated tour coordinator to manage itineraries and on-ground logistics',
      'Complete emergency readiness and student supervision assistance',
    ],
    idealFor: 'Educational Institutions, Faculty Teams & Corporate Groups',
  },
];

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="services" className="py-20 lg:py-28 bg-white border-b border-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="text-xs font-semibold uppercase tracking-widest text-sky-600 flex items-center gap-2">
            <span>Specialized Services</span>
            <span className="text-neutral-300">·</span>
            <span className="text-amber-600">NRej Travelling Agency</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight leading-tight">
            Our Main Travel Services
          </h2>
          <p className="text-neutral-700 text-base sm:text-lg leading-relaxed">
            Tailored travel planning for schools, colleges, and group tours across Karnataka. We handle route planning, comfortable coaches, entry approvals, and safe stays.
          </p>
        </div>

        {/* Services Grid (4 Cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="group rounded-2xl overflow-hidden bg-neutral-50 border border-neutral-200 hover:border-neutral-300 transition-all duration-300 flex flex-col shadow-lg"
            >
              {/* Image Frame */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-white">
                <img
                  src={service.imageUrl}
                  alt={service.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-50 via-neutral-50/40 to-transparent" />

                {/* Service Tag */}
                <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/90 backdrop-blur-md border border-neutral-200 text-xs font-semibold text-neutral-900">
                  {service.icon}
                  <span>{service.title}</span>
                </div>

                {/* Target Audience badge */}
                <div className="absolute bottom-3 left-4 right-4 text-xs font-medium text-neutral-700 truncate">
                  Target: <span className="text-amber-600 font-semibold">{service.idealFor}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex flex-col flex-grow space-y-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 group-hover:text-amber-600 transition-colors">
                    {service.title}
                  </h3>
                  <div className="text-xs text-sky-600 font-medium mt-1">
                    {service.subtitle}
                  </div>
                </div>

                <p className="text-sm text-neutral-700 leading-relaxed">
                  {service.description}
                </p>

                {/* Highlights list */}
                <div className="space-y-2 pt-2 border-t border-neutral-200/80">
                  <div className="text-xs font-semibold uppercase tracking-wider text-neutral-600">
                    Service Highlights:
                  </div>
                  <ul className="space-y-1.5 text-xs text-neutral-700">
                    {service.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action button */}
                <div className="pt-4 mt-auto border-t border-neutral-200 flex items-center justify-between">
                  <span className="text-xs text-neutral-600">
                    Customized itinerary available
                  </span>
                  <button
                    onClick={() => onOpenBooking(service.title, service.tripType)}
                    className="px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer font-sans"
                  >
                    <span>Enquire for {service.title}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
