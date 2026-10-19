import React from 'react';
import { ShieldCheck, Clock, Award, Building2, Bus, FileCheck, MapPin, Users, HeartHandshake } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/businessConfig';

export const WhyNREJ: React.FC = () => {
  return (
    <section id="why-nrej" className="py-20 lg:py-28 bg-white border-b border-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-sky-600">
            <Award className="w-4 h-4 text-amber-600" />
            <span>Why Choose Us</span>
            <span aria-hidden="true" className="text-neutral-300">·</span>
            <span className="text-neutral-600 font-normal">NRej Travelling Agency</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight leading-tight">
            Thoughtful Planning. Coordinated Travel Services.
          </h2>
          <p className="text-neutral-700 text-base sm:text-lg leading-relaxed">
            From selecting suitable destinations to arranging transportation, meals, entry tickets, and visit coordination, we help institutions plan their tours according to their educational objectives.
          </p>
        </div>

        {/* 4 Core Pillars Grid without invented statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Pillar 1 (Span 2) */}
          <div className="lg:col-span-2 p-8 rounded-2xl bg-neutral-50 border border-neutral-200 flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="text-xs font-mono text-sky-600 font-semibold tracking-wider">
                01. Factory & Institutional Visit Coordination
              </div>
              <h3 className="text-2xl font-bold text-neutral-900">
                Assistance with industrial permission protocols and plant schedules.
              </h3>
              <p className="text-neutral-700 text-sm leading-relaxed max-w-2xl">
                We assist colleges and institutions with logistical coordination for factory, manufacturing plant, and technology site visits across Karnataka—including KSIC silk weaving in Mysuru, aerospace museums, Supa Dam, and agro-processing facilities. We coordinate travel timelines with plant shift hours for an orderly visit.
              </p>
            </div>
            <div className="pt-4 border-t border-neutral-200 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-neutral-700">
              <div className="flex items-center gap-2">
                <FileCheck className="w-4 h-4 text-sky-600 shrink-0" />
                <span>Requisition letter assistance</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Punctual shift coordination</span>
              </div>
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Technical interaction support</span>
              </div>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="p-8 rounded-2xl bg-neutral-50 border border-neutral-200 flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="text-xs font-mono text-amber-600 font-semibold tracking-wider">
                02. Student Safety & Comfortable Stays
              </div>
              <h3 className="text-xl font-bold text-neutral-900">
                Clean, student-friendly accommodation.
              </h3>
              <p className="text-neutral-700 text-sm leading-relaxed">
                We inspect partner hotels and lodges to ensure clean rooms, proper security, separate faculty rooms, and adequate amenities for student groups.
              </p>
            </div>
            <div className="pt-3 border-t border-neutral-200 text-xs text-neutral-600">
              Strict night supervision and secure group wings.
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="p-8 rounded-2xl bg-neutral-50 border border-neutral-200 flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="text-xs font-mono text-sky-600 font-semibold tracking-wider">
                03. Reliable Pushback Coaches & Safe Drivers
              </div>
              <h3 className="text-xl font-bold text-neutral-900">
                Well-maintained tourist buses & verified commercial drivers.
              </h3>
              <p className="text-neutral-700 text-sm leading-relaxed">
                Our tourist buses (pushback AC and non-AC 2x2 coaches, tempo travellers) are maintained for long journeys across Karnataka’s highways, ghat roads, and cities.
              </p>
            </div>
            <div className="pt-3 border-t border-neutral-200 text-xs text-neutral-600">
              Experienced highway drivers with valid commercial licenses.
            </div>
          </div>

          {/* Pillar 4 */}
          <div className="p-8 rounded-2xl bg-neutral-50 border border-neutral-200 flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="text-xs font-mono text-amber-600 font-semibold tracking-wider">
                04. Hygienic Regional Meals & Catering
              </div>
              <h3 className="text-xl font-bold text-neutral-900">
                Wholesome South Indian & regional food.
              </h3>
              <p className="text-neutral-700 text-sm leading-relaxed">
                Timely breakfast, lunch, and dinner arrangements with pure vegetarian, Jain, and non-vegetarian preferences coordinated in hygienic dining halls.
              </p>
            </div>
            <div className="pt-3 border-t border-neutral-200 text-xs text-neutral-600">
              Clean drinking water and fresh meal stops on schedule.
            </div>
          </div>

          {/* Pillar 5 */}
          <div className="p-8 rounded-2xl bg-neutral-50 border border-neutral-200 flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="text-xs font-mono text-emerald-600 font-semibold tracking-wider">
                05. Direct Coordination by H. Ramesh
              </div>
              <h3 className="text-xl font-bold text-neutral-900">
                Personalized attention from start to finish.
              </h3>
              <p className="text-neutral-700 text-sm leading-relaxed">
                Contact person H. Ramesh personally oversees planning, routes, hotel confirmations, and on-ground logistics for every group booking.
              </p>
            </div>
            <div className="pt-3 border-t border-neutral-200 text-xs text-sky-600 font-medium">
              Direct Phone: {BUSINESS_CONFIG.mobile1Formatted} / {BUSINESS_CONFIG.mobile2Formatted}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
