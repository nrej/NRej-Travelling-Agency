import React from 'react';
import { ArrowRight, BookOpen, Compass, ShieldCheck, MapPin, Phone, Mail, Award, CheckCircle } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/businessConfig';

interface AboutSectionProps {
  onOpenBooking: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-neutral-900 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Authentic Photography & Institutional Badge */}
          <div className="lg:col-span-5 relative space-y-4">
            <div className="relative rounded-2xl overflow-hidden bg-neutral-950 border border-neutral-800 shadow-2xl aspect-[4/3]">
              <img
                src="/src/assets/images/gallery_student_hampi_1792402557076.jpg"
                alt="Students on an educational heritage study tour organized by NRej Travelling Agency"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />
              
              {/* Badge over image */}
              <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-neutral-950/90 backdrop-blur-md border border-neutral-800 text-xs text-neutral-200">
                <div className="text-amber-400 font-semibold uppercase tracking-wider text-[11px]">
                  Based in {BUSINESS_CONFIG.location.village}, Karnataka
                </div>
                <div className="text-white font-medium mt-0.5">
                  Educational Trips • Industry Visits • Karnataka Special
                </div>
              </div>
            </div>

            {/* Business Contact Pill Box */}
            <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 text-neutral-300">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0" />
                <span>{BUSINESS_CONFIG.location.fullAddress}</span>
              </div>
              <div className="text-right">
                <span className="text-neutral-500 block text-[10px] uppercase">Contact Person</span>
                <span className="text-amber-400 font-semibold">{BUSINESS_CONFIG.contactPerson}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Exact Master Prompt Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-sky-400">
              <BookOpen className="w-4 h-4 text-amber-400" />
              <span>About NRej Travelling Agency</span>
            </div>

            {/* Official Section Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Travel with Purpose. Learn Through Experience.
            </h2>

            {/* Exact Master Prompt Paragraphs */}
            <div className="space-y-4 text-neutral-300 text-base sm:text-lg leading-relaxed font-normal">
              <p>
                NRej Travelling Agency is dedicated to organizing meaningful travel experiences for educational institutions and groups. We focus on educational trips, industrial visits, heritage tours, and customized travel programmes that help students connect classroom learning with real-world experiences.
              </p>
              <p>
                Our aim is to make every journey educational, well-organized, comfortable, and memorable through thoughtful planning and coordinated travel services.
              </p>
              <p className="text-neutral-400 text-base">
                From selecting suitable destinations to arranging transportation, meals, entry tickets, and visit coordination, we help institutions plan their tours according to their educational objectives and requirements.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                'Specialized for Schools, PU & Degree Colleges',
                'Comprehensive Transportation & Pushback Buses',
                'Hygienic Student-Friendly Meals & Stays',
                'Dedicated On-Ground Coordination by H. Ramesh',
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-200">
                  <CheckCircle className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors flex items-center gap-2 cursor-pointer shadow-md font-sans"
              >
                <span>Discuss Your Tour Requirements</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <div className="text-xs text-neutral-400">
                Call H. Ramesh directly: <a href={`tel:${BUSINESS_CONFIG.mobile1}`} className="text-sky-400 hover:underline font-semibold">{BUSINESS_CONFIG.mobile1Formatted}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
