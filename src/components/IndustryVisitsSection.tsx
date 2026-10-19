import React from 'react';
import { Factory, Building2, CheckCircle2, ArrowRight, ShieldCheck, FileText, Clock, Users } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/businessConfig';

interface IndustryVisitsProps {
  onOpenBooking: (destinationTitle?: string, tripType?: string) => void;
}

export const INDUSTRIAL_CIRCUITS = [
  {
    id: 'iv-ksic-textile',
    title: 'Textile Manufacturing & Silk Industry Visit',
    targetDepts: 'Mechanical, Production, Textile & Commerce / MBA Students',
    location: 'Mysuru & Ramanagara Corridor, Karnataka',
    industry: 'Karnataka Silk Industries Corporation (KSIC) & Sandalwood Units',
    duration: '2 to 3 Days',
    imageUrl: '/src/assets/images/gallery_iv_factory_tour_1792402557123.jpg',
    description:
      'Observation of automated jacquard looms, raw cocoon reeling, quality inspection, and supply-chain operations in Karnataka’s iconic heritage manufacturing plants.',
    technicalKeypoints: [
      'Industrial machinery, continuous yarn winding & tensioning',
      'Quality control, pure gold zari certification & testing',
      'Plant safety protocols and production floor organization',
      'Interaction with on-duty technical supervisors and engineers',
    ],
  },
  {
    id: 'iv-supa-hydropower',
    title: 'Hydropower Engineering & Dam Infrastructure',
    targetDepts: 'Civil, Electrical (EEE), Environmental & Mechanical Engineering',
    location: 'Supa Dam, Kali River, Dandeli (Uttara Kannada)',
    industry: 'Karnataka Power Transmission & Hydroelectric Generation Unit',
    duration: '3 to 4 Days (Combined with Dandeli Eco Tour)',
    imageUrl: '/src/assets/images/dest_jog_falls_shivamogga_1792403116097.jpg',
    description:
      'Field study of massive concrete gravity dam structures, penstocks, hydroelectric turbines, transmission switchyards, and reservoir management.',
    technicalKeypoints: [
      'Hydro-turbine operation, penstock hydraulics & head calculations',
      'Substation switchgear, high-voltage transformers & grid safety',
      'Civil dam catchment hydrology and flood gate mechanisms',
      'Environmental impact monitoring in Western Ghats river basins',
    ],
  },
  {
    id: 'iv-aerospace-tech',
    title: 'Aerospace Engineering & High-Tech Manufacturing',
    targetDepts: 'Aeronautical, Mechanical, ECE, CSE & Polytechnic Colleges',
    location: 'Bengaluru Aerospace & Technology Corridor',
    industry: 'HAL Heritage Complex & Advanced Electronics Corridor',
    duration: '2 to 3 Days',
    imageUrl: '/src/assets/images/dest_industrial_bangalore_1792395164842.jpg',
    description:
      'Comprehensive technological tour studying indigenous fighter aircraft avionics, gas turbine jet engines, flight simulation, and satellite electronics.',
    technicalKeypoints: [
      'Aircraft structure, aerodynamics, and composite materials',
      'Jet engine turbine propulsion cycles and cutaway models',
      'Avionics, flight navigation radar, and satellite systems',
      'Technical briefing on aeronautical engineering standards',
    ],
  },
  {
    id: 'iv-agro-food',
    title: 'Agro-Processing, Coffee Curing & Food Technology',
    targetDepts: 'Biotechnology, Food Tech, Agriculture, MBA & Commerce',
    location: 'Chikmagalur & Madikeri (Coorg)',
    industry: 'Modern Coffee Curing Works & Plantation Processing Units',
    duration: '3 Days / 2 Nights',
    imageUrl: '/src/assets/images/dest_coorg_coffee_1792395163120.jpg',
    description:
      'Detailed look at commercial agro-processing from cherry harvesting, wet pulping, fermentation, sun drying, mechanical hulling, grading, and roasting.',
    technicalKeypoints: [
      'Industrial grading machines, color sorters & moisture testers',
      'Export packaging, quality compliance & warehousing',
      'Supply chain management from farmer cooperative to retail',
      'Interaction with processing plant logistics managers',
    ],
  },
];

export const IndustryVisitsSection: React.FC<IndustryVisitsProps> = ({ onOpenBooking }) => {
  return (
    <section id="industrial" className="py-20 lg:py-28 bg-white border-b border-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-widest text-sky-600 flex items-center gap-2">
              <Factory className="w-4 h-4 text-amber-600" />
              <span>Collegiate Industrial Visits (IV)</span>
              <span className="text-neutral-300">·</span>
              <span className="text-neutral-600 font-normal">Karnataka Industry Sectors</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight leading-tight">
              Bridging Classroom Theory & Industrial Practice
            </h2>
            <p className="text-neutral-700 text-base sm:text-lg leading-relaxed">
              We assist colleges and institutions with logistical coordination and travel arrangements for factory, manufacturing plant, and technology site visits across Karnataka.
            </p>
          </div>

          <div className="shrink-0">
            <button
              onClick={() => onOpenBooking(undefined, 'Industrial Visit (IV)')}
              className="px-5 py-3 text-xs font-bold uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors flex items-center gap-2 cursor-pointer font-sans"
            >
              <span>Request IV Logistics Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 4 Core IV Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {INDUSTRIAL_CIRCUITS.map((circuit) => (
            <div
              key={circuit.id}
              className="group rounded-2xl overflow-hidden bg-neutral-50 border border-neutral-200 hover:border-neutral-300 transition-all flex flex-col"
            >
              {/* Media Frame */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-white">
                <img
                  src={circuit.imageUrl}
                  alt={circuit.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-50 via-neutral-50/40 to-transparent" />

                <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-white/90 backdrop-blur-sm border border-neutral-200 text-[11px] font-semibold text-sky-600">
                  {circuit.duration}
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-xs text-neutral-700 flex items-center gap-1.5 font-medium truncate">
                  <Factory className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <span>{circuit.industry}</span>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex flex-col flex-grow space-y-4">
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-amber-600">
                    Target: {circuit.targetDepts}
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 group-hover:text-sky-600 transition-colors mt-1">
                    {circuit.title}
                  </h3>
                  <div className="text-xs text-neutral-600 mt-0.5">
                    {circuit.location}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                  {circuit.description}
                </p>

                {/* Technical Highlights */}
                <div className="space-y-2 pt-2 border-t border-neutral-200">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-neutral-600">
                    Industrial Learning Outcomes:
                  </div>
                  <ul className="space-y-1.5 text-xs text-neutral-700">
                    {circuit.technicalKeypoints.map((pt, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action */}
                <div className="pt-4 mt-auto border-t border-neutral-200 flex items-center justify-between">
                  <span className="text-[11px] text-neutral-600">
                    Permission documentation support
                  </span>
                  <button
                    onClick={() => onOpenBooking(circuit.title, 'Industrial Visit (IV)')}
                    className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-950 bg-sky-400 hover:bg-sky-300 rounded-lg transition-colors flex items-center gap-1 cursor-pointer font-sans"
                  >
                    <span>Enquire for Department</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* What NRej Provides for College IVs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
          {[
            {
              icon: <FileText className="w-5 h-5 text-amber-600" />,
              title: 'Permission Protocol Support',
              desc: 'Guidance with institutional requisition letters and factory entry protocols.',
            },
            {
              icon: <Clock className="w-5 h-5 text-sky-600" />,
              title: 'Shift-Aligned Schedules',
              desc: 'Punctual transit times coordinated strictly with industrial shift timings.',
            },
            {
              icon: <ShieldCheck className="w-5 h-5 text-emerald-600" />,
              title: 'Verified Commercial Buses',
              desc: 'Experienced commercial drivers, clean 2x2 pushback coaches with first-aid kits.',
            },
            {
              icon: <Users className="w-5 h-5 text-amber-600" />,
              title: 'Faculty & Student Care',
              desc: 'Separate faculty rooms, clean student accommodation, and hygienic food.',
            },
          ].map((item, idx) => (
            <div key={idx} className="p-5 rounded-xl bg-neutral-50 border border-neutral-200 space-y-2">
              <div className="w-10 h-10 rounded-lg bg-white border border-neutral-200 flex items-center justify-center">
                {item.icon}
              </div>
              <h4 className="text-sm font-bold text-neutral-900">{item.title}</h4>
              <p className="text-xs text-neutral-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
