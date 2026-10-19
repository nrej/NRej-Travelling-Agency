import React from 'react';
import { Building2, GraduationCap, ShieldCheck, FileCheck, Bus, Award, ArrowRight, CheckCircle2 } from 'lucide-react';

interface IndustrialEducationalSectionProps {
  onOpenBooking: (destinationTitle?: string, tripType?: string) => void;
}

export const IndustrialEducationalSection: React.FC<IndustrialEducationalSectionProps> = ({
  onOpenBooking,
}) => {
  return (
    <section id="industrial-educational" className="py-20 lg:py-28 bg-white border-b border-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-cyan-600">
            <Building2 className="w-4 h-4" />
            <span>Academic & Corporate Divisions</span>
            <span aria-hidden="true" className="text-neutral-300">·</span>
            <span className="text-amber-600 font-normal">Karnataka & South India</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 tracking-tight text-balance">
            Accredited Industrial Visits & Enriching Educational Tours.
          </h2>
          <p className="text-neutral-700 text-base sm:text-lg font-light leading-relaxed">
            NREJ Travels is the trusted logistics partner for over 450+ colleges and schools across India. We manage government permissions, factory entry clearances, safety protocols, and student catering with complete accountability.
          </p>
        </div>

        {/* 2-Column Feature Split (Industrial vs Educational) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card 1: Industrial Visits (IV) */}
          <div className="p-8 sm:p-10 rounded-2xl bg-white border border-neutral-200 flex flex-col justify-between space-y-8 relative overflow-hidden group hover:border-cyan-500/50 transition-colors">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="w-12 h-12 rounded-xl bg-cyan-50 border border-cyan-200 flex items-center justify-center text-cyan-600">
                  <Building2 className="w-6 h-6" />
                </span>
                <span className="text-xs font-mono text-cyan-600 font-semibold tracking-wider uppercase">
                  Engineering · Polytechnic · MBA · BCA
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-neutral-900">
                  Collegiate Industrial Visits (IVs)
                </h3>
                <p className="text-sm text-neutral-700 leading-relaxed">
                  Bridge the classroom-to-industry gap. We arrange official technical plant visits, plant engineer interactions, and factory walkthroughs tailored for your syllabus.
                </p>
              </div>

              {/* Core IV Sectors in Karnataka */}
              <div className="space-y-2.5 pt-2 border-t border-neutral-50 text-xs">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-neutral-600">
                  Key Karnataka Industry Sectors Available:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-neutral-700">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 mt-0.5 shrink-0" />
                    <span>KSIC Pure Silk Weaving Unit (Mysuru)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 mt-0.5 shrink-0" />
                    <span>HAL Aerospace & Flight Labs (Bengaluru)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 mt-0.5 shrink-0" />
                    <span>Supa Dam Hydroelectric Station (Dandeli)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 mt-0.5 shrink-0" />
                    <span>Coffee Curing & Agro-Processing (Chikmagalur)</span>
                  </div>
                </div>
              </div>

              {/* Institution Perks */}
              <div className="p-4 rounded-xl bg-white border border-neutral-50 space-y-2 text-xs">
                <div className="flex items-center gap-2 text-neutral-900 font-semibold">
                  <FileCheck className="w-4 h-4 text-cyan-600" />
                  <span>College NAAC / NBA Documentation Support:</span>
                </div>
                <p className="text-neutral-600 text-[11px] leading-relaxed">
                  Official confirmation letters on company letterheads, stamped attendance certificates for all enrolled students, and faculty verification dossiers.
                </p>
              </div>
            </div>

            <div>
              <button
                onClick={() => onOpenBooking(undefined, 'Industrial Visit (IV)')}
                className="w-full py-3.5 text-xs font-semibold uppercase tracking-wider text-black bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md font-sans"
              >
                <span>Request Custom Industrial Visit Itinerary</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Card 2: Educational Tours */}
          <div className="p-8 sm:p-10 rounded-2xl bg-white border border-neutral-200 flex flex-col justify-between space-y-8 relative overflow-hidden group hover:border-amber-500/50 transition-colors">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600">
                  <GraduationCap className="w-6 h-6" />
                </span>
                <span className="text-xs font-mono text-amber-600 font-semibold tracking-wider uppercase">
                  CBSE · ICSE · State Board · Universities
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-neutral-900">
                  School & College Educational Tours
                </h3>
                <p className="text-sm text-neutral-700 leading-relaxed">
                  Transformative experiential learning designed with child and student safety as the first priority. Historical archaeological sites, science centres, and wildlife habitats.
                </p>
              </div>

              {/* Core Educational Circuits */}
              <div className="space-y-2.5 pt-2 border-t border-neutral-50 text-xs">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-neutral-600">
                  Premier Karnataka Educational Circuits:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-neutral-700">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 mt-0.5 shrink-0" />
                    <span>Hampi & Badami UNESCO Architectural Study</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 mt-0.5 shrink-0" />
                    <span>Mysuru Palace & Srirangapatna Heritage</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 mt-0.5 shrink-0" />
                    <span>Kabini Wildlife Sanctuary & Forest Ecology</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 mt-0.5 shrink-0" />
                    <span>Visvesvaraya Science & Planetarium Discovery</span>
                  </div>
                </div>
              </div>

              {/* Safety & Teacher Care */}
              <div className="p-4 rounded-xl bg-white border border-neutral-50 space-y-2 text-xs">
                <div className="flex items-center gap-2 text-neutral-900 font-semibold">
                  <ShieldCheck className="w-4 h-4 text-amber-600" />
                  <span>Student Safety & Faculty Benefits:</span>
                </div>
                <p className="text-neutral-600 text-[11px] leading-relaxed">
                  100% verified hotels with separate boys/girls floors, 2 complimentary faculty passes per 30 students, 24/7 dedicated medical kit, and GPS-tracked luxury coaches.
                </p>
              </div>
            </div>

            <div>
              <button
                onClick={() => onOpenBooking(undefined, 'Educational')}
                className="w-full py-3.5 text-xs font-semibold uppercase tracking-wider text-black bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md font-sans"
              >
                <span>Request School / College Tour Proposal</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Institutional Assurance Bar */}
        <div className="p-6 rounded-xl bg-white border border-neutral-50 grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-neutral-700">
          <div className="flex items-center gap-3">
            <Bus className="w-5 h-5 text-cyan-600 shrink-0" />
            <div>
              <div className="font-semibold text-neutral-900">Own & Managed Luxury Fleet</div>
              <div className="text-[11px] text-neutral-500">Pushback 2x2 AC coaches with verified commercial drivers</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Award className="w-5 h-5 text-amber-600 shrink-0" />
            <div>
              <div className="font-semibold text-neutral-900">Hygienic Catering & Pure Veg Options</div>
              <div className="text-[11px] text-neutral-500">Fresh buffet meals meeting school health standards</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <FileCheck className="w-5 h-5 text-cyan-600 shrink-0" />
            <div>
              <div className="font-semibold text-neutral-900">Full GST Invoicing & Institutional Approvals</div>
              <div className="text-[11px] text-neutral-500">Official tax invoices for college finance clearance</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
