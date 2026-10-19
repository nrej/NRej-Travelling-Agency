import React from 'react';
import { ShieldCheck, Clock, Award, Building2, Bus, FileCheck } from 'lucide-react';

export const WhyNREJ: React.FC = () => {
  return (
    <section id="why-nrej" className="py-20 lg:py-28 bg-black border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-cyan-400">
            <Award className="w-4 h-4" />
            <span>The NREJ Standard</span>
            <span aria-hidden="true" className="text-neutral-700">·</span>
            <span className="text-neutral-400 font-normal">Karnataka & South India</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight text-balance">
            Why Karnataka's leading colleges, schools, and travelers choose NREJ Travels.
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg font-light leading-relaxed">
            Planning large-scale educational tours and industrial visits requires flawless execution: guaranteed factory gates access, reliable fleet transport, separate student safety wings, and verified hygiene.
          </p>
        </div>

        {/* Asymmetric Bento Grid in Black Theme */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 (Span 2) */}
          <div className="lg:col-span-2 p-8 rounded-2xl bg-neutral-950 border border-neutral-900 flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="text-xs font-mono text-cyan-400 font-semibold tracking-wider">
                01. Official Factory Permissions & Government Liaison
              </div>
              <h3 className="font-serif-luxury text-2xl font-bold text-white">
                Direct institutional access to Karnataka's premier manufacturing plants.
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed max-w-2xl">
                We manage official permission paperwork on college letterheads with plant authorities: KSIC silk weaving in Mysuru, HAL aerospace facilities, Supa Dam hydroelectric stations, and coffee curing complexes in Chikmagalur. We ensure students get real technical exposure with plant engineers.
              </p>
            </div>
            <div className="pt-4 border-t border-neutral-900 grid grid-cols-3 gap-4">
              <div>
                <div className="text-xl sm:text-2xl font-bold text-white tabular-nums">450+</div>
                <div className="text-[11px] text-neutral-400 uppercase tracking-wider">College IVs Executed</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-white tabular-nums">100%</div>
                <div className="text-[11px] text-neutral-400 uppercase tracking-wider">Permits Guaranteed</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-white tabular-nums">0</div>
                <div className="text-[11px] text-neutral-400 uppercase tracking-wider">Permit Cancellations</div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-8 rounded-2xl bg-neutral-950 border border-neutral-900 flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="text-xs font-mono text-amber-400 font-semibold tracking-wider">
                02. Student Safety & Verified Lodging
              </div>
              <h3 className="font-serif-luxury text-2xl font-bold text-white">
                Zero-compromise security protocols for every batch.
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Separate dedicated hotel floors for boys and girls, 24/7 security desks, certified first-aid kits in every bus, and complimentary deluxe single/twin rooms for faculty coordinators.
              </p>
            </div>
            <div className="text-xs text-neutral-400 flex items-center gap-2 pt-2 border-t border-neutral-900">
              <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Full compliance with University educational tour directives</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="p-8 rounded-2xl bg-neutral-950 border border-neutral-900 flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="text-xs font-mono text-cyan-400 font-semibold tracking-wider">
                03. Dedicated On-Ground Tour Managers
              </div>
              <h3 className="font-serif-luxury text-2xl font-bold text-white">
                Full-time coordinators handling tickets, food, and timing.
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Faculty can focus on student learning while our dedicated team takes charge of hotel check-ins, toll booths, parking, buffet meals, and ASI entry passes.
              </p>
            </div>
            <div className="text-xs text-neutral-400 flex items-center gap-2 pt-2 border-t border-neutral-900">
              <Clock className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Direct WhatsApp live coordination with college HODs</span>
            </div>
          </div>

          {/* Card 4 (Span 2) */}
          <div className="lg:col-span-2 p-8 rounded-2xl bg-neutral-950 border border-neutral-900 flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="text-xs font-mono text-amber-400 font-semibold tracking-wider">
                04. Sanitized Luxury Coach Fleet & Pure Veg Catering
              </div>
              <h3 className="font-serif-luxury text-2xl font-bold text-white">
                Reliable 2x2 AC pushback coaches and hygienic buffet meals.
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed max-w-2xl">
                We operate modern 2x2 pushback air-conditioned buses with verified drivers experienced in Western Ghats hairpin bends. All tour packages include unlimited South & North Indian buffet meals with strict Jain and pure vegetarian options.
              </p>
            </div>
            <div className="pt-4 border-t border-neutral-900 flex flex-wrap items-center gap-6 text-xs text-neutral-300">
              <span className="flex items-center gap-2">
                <Bus className="w-4 h-4 text-cyan-400" />
                Air-Conditioned 50-Seater Coaches & Mini-Buses
              </span>
              <span className="flex items-center gap-2">
                <FileCheck className="w-4 h-4 text-amber-400" />
                Valid GST Invoicing for Institutional Audits
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
