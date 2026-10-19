import React, { useState, useMemo } from 'react';
import { Sliders, Check, ArrowRight, Shield, Building2, GraduationCap, Bus } from 'lucide-react';
import { DESTINATIONS } from '../data/destinations';
import { CustomTripState, TripType } from '../types/travel';

interface CustomTripBuilderProps {
  onRequestQuote: (config: CustomTripState, calculatedPriceInr: number) => void;
}

export const CustomTripBuilder: React.FC<CustomTripBuilderProps> = ({ onRequestQuote }) => {
  const [config, setConfig] = useState<CustomTripState>({
    destinationId: DESTINATIONS[0].id,
    tripType: 'Industrial Visit (IV)',
    durationDays: 3,
    guestsCount: 50, // Standard 1 full bus
    institutionType: 'Engineering / Degree College',
    transportType: 'AC Luxury Coach (50-seater)',
    tier: 'Student / Educational Budget',
    travelMonth: 'September 2026',
    addOns: {
      factoryVisitPermissions: true,
      certifiedTourGuide: true,
      campFireAndDJ: true,
      complimentaryFacultyPass: true,
      industrialCertificate: true,
    },
  });

  const selectedDestination = useMemo(() => {
    return DESTINATIONS.find((d) => d.id === config.destinationId) || DESTINATIONS[0];
  }, [config.destinationId]);

  // Dynamic pricing calculation in INR
  const calculatedEstimateInr = useMemo(() => {
    let basePerDay = 1599; // Student / Educational Budget per student per day

    if (config.tier === 'Executive Deluxe') {
      basePerDay = 2999;
    } else if (config.tier === 'Royal Heritage Luxury') {
      basePerDay = 5999;
    }

    let perHeadTotal = basePerDay * config.durationDays;

    // Small nominal cost allocation for add-ons across the group
    if (config.addOns.campFireAndDJ) perHeadTotal += 180;
    if (config.addOns.industrialCertificate) perHeadTotal += 120;
    if (config.addOns.certifiedTourGuide) perHeadTotal += 150;
    if (config.addOns.factoryVisitPermissions) perHeadTotal += 100;

    return Math.round(perHeadTotal);
  }, [config]);

  const totalTripCostInr = calculatedEstimateInr * config.guestsCount;

  const toggleAddOn = (key: keyof CustomTripState['addOns']) => {
    setConfig((prev) => ({
      ...prev,
      addOns: {
        ...prev.addOns,
        [key]: !prev.addOns[key],
      },
    }));
  };

  return (
    <section id="builder" className="py-20 lg:py-28 bg-neutral-950 border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-400">
            <Sliders className="w-4 h-4 text-cyan-400" />
            <span>Karnataka & South India Trip Studio</span>
            <span aria-hidden="true" className="text-neutral-700">·</span>
            <span className="text-neutral-400 font-normal">Real-Time Estimator</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight text-balance">
            Customize college IVs, educational study tours, or family circuits.
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg font-light leading-relaxed">
            Configure group size, luxury coach requirements, official industrial plant clearances, and accommodation tiers with real-time transparent costing in Indian Rupees (₹).
          </p>
        </div>

        {/* Studio Interactive Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-7 bg-black border border-neutral-900 rounded-2xl p-6 sm:p-8 space-y-8">
            {/* Step 1: Trip Type & Format */}
            <div className="space-y-3">
              <label className="text-xs font-semibold uppercase tracking-wider text-neutral-400 flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>01. Select Travel Purpose</span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {(
                  [
                    'Industrial Visit (IV)',
                    'Educational',
                    'Leisure & Heritage',
                    'Corporate Expedition',
                  ] as const
                ).map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setConfig({ ...config, tripType: type as TripType })}
                    className={`px-3 py-2.5 text-xs font-medium rounded-lg border text-left transition-colors cursor-pointer ${
                      config.tripType === type
                        ? 'border-cyan-400 bg-cyan-950/40 text-cyan-300 font-semibold'
                        : 'border-neutral-900 bg-neutral-950 text-neutral-400 hover:text-white hover:border-neutral-800'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Destination Selection */}
            <div className="space-y-3">
              <label className="text-xs font-semibold uppercase tracking-wider text-neutral-400 flex items-center gap-1.5">
                <span>02. Select Karnataka / South India Circuit</span>
              </label>
              <select
                value={config.destinationId}
                onChange={(e) => setConfig({ ...config, destinationId: e.target.value })}
                className="w-full px-4 py-3 bg-neutral-950 border border-neutral-800 rounded-xl text-neutral-100 font-medium focus:border-amber-400 focus:outline-none transition-colors cursor-pointer"
              >
                {DESTINATIONS.map((d) => (
                  <option key={d.id} value={d.id}>
                    {d.title} ({d.location}, {d.state}) — {d.tripType}
                  </option>
                ))}
              </select>
            </div>

            {/* Step 3: Duration & Batch Size */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-semibold uppercase tracking-wider text-neutral-400">03. Duration</span>
                  <span className="font-bold text-amber-400 tabular-nums">{config.durationDays} Days / {config.durationDays - 1} Nights</span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="7"
                  step="1"
                  value={config.durationDays}
                  onChange={(e) => setConfig({ ...config, durationDays: Number(e.target.value) })}
                  className="w-full accent-amber-400 bg-neutral-900 rounded-lg h-2 cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-neutral-500 font-mono">
                  <span>2 Days (IV)</span>
                  <span>4 Days</span>
                  <span>7 Days (Grand)</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-semibold uppercase tracking-wider text-neutral-400">04. Group / Batch Size</span>
                  <span className="font-bold text-cyan-400 tabular-nums">{config.guestsCount} Travelers</span>
                </div>
                <div className="flex items-center gap-1.5 p-1 bg-neutral-950 border border-neutral-900 rounded-lg">
                  {[15, 30, 50, 100, 150].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setConfig({ ...config, guestsCount: num })}
                      className={`flex-1 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                        config.guestsCount === num
                          ? 'bg-cyan-400 text-black shadow-sm font-bold'
                          : 'text-neutral-400 hover:text-white'
                      }`}
                    >
                      {num === 50 ? '50 (1 Bus)' : num === 100 ? '100 (2 Bus)' : num === 150 ? '150+' : num}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Step 4: Transport & Accommodation Tier */}
            <div className="space-y-3">
              <label className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                05. Accommodation & Transport Standard
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  {
                    name: 'Student / Educational Budget' as const,
                    desc: 'Clean 3-star student hotel (Triple/Quad sharing) + 2x2 AC Pushback Coach',
                  },
                  {
                    name: 'Executive Deluxe' as const,
                    desc: '4-star hotel (Twin sharing) + Luxury Volvo / Scania AC Coach + Private Guide',
                  },
                  {
                    name: 'Royal Heritage Luxury' as const,
                    desc: 'Heritage palaces, luxury estate villas + Private Innova Crysta / Toyota Fortuner',
                  },
                ].map((tierItem) => (
                  <button
                    key={tierItem.name}
                    type="button"
                    onClick={() => setConfig({ ...config, tier: tierItem.name })}
                    className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                      config.tier === tierItem.name
                        ? 'border-amber-400 bg-amber-400/10'
                        : 'border-neutral-900 bg-neutral-950/80 hover:border-neutral-800'
                    }`}
                  >
                    <div className="text-xs font-bold text-white">{tierItem.name}</div>
                    <div className="text-[11px] text-neutral-400 mt-1 leading-relaxed">
                      {tierItem.desc}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 5: Institutional & Group Add-Ons */}
            <div className="space-y-3">
              <label className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                06. Industrial Visit & Educational Add-Ons
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  { key: 'factoryVisitPermissions' as const, label: 'Official Factory Entry Clearances (KSIC/HAL)', fee: 'Included' },
                  { key: 'industrialCertificate' as const, label: 'Authorized Industrial Certificates for Students', fee: 'Included' },
                  { key: 'complimentaryFacultyPass' as const, label: 'Complimentary Faculty Pass (1 per 25 Students)', fee: 'Free (₹0)' },
                  { key: 'certifiedTourGuide' as const, label: 'Certified ASI Historical Guide on-site', fee: 'Included' },
                  { key: 'campFireAndDJ' as const, label: 'Evening DJ Night & Bonfire Party', fee: 'Optional Add-on' },
                ].map((item) => {
                  const checked = config.addOns[item.key];
                  return (
                    <div
                      key={item.key}
                      onClick={() => toggleAddOn(item.key)}
                      className={`flex items-center justify-between p-3 rounded-lg border cursor-pointer transition-colors ${
                        checked
                          ? 'border-cyan-500/80 bg-neutral-950 text-white'
                          : 'border-neutral-900 bg-neutral-950/40 text-neutral-500 hover:text-neutral-300'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div
                          className={`w-4 h-4 rounded flex items-center justify-center text-xs ${
                            checked ? 'bg-cyan-400 text-black' : 'border border-neutral-800'
                          }`}
                        >
                          {checked && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <span className="text-xs font-medium">{item.label}</span>
                      </div>
                      <span className="text-xs font-mono text-cyan-400/90">{item.fee}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Real-time Summary Card Column */}
          <div className="lg:col-span-5 bg-black border border-neutral-900 rounded-2xl p-6 sm:p-8 space-y-6 sticky top-24">
            <div className="space-y-1 pb-4 border-b border-neutral-900">
              <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold flex items-center gap-1.5">
                <Bus className="w-3.5 h-3.5" />
                South India Custom Tour Proposal
              </span>
              <h3 className="font-serif-luxury text-2xl font-bold text-white">
                {selectedDestination.title}
              </h3>
              <p className="text-xs text-neutral-400">
                {config.durationDays} Days · {config.tripType} · {config.tier}
              </p>
            </div>

            {/* Inclusions Breakdown */}
            <div className="space-y-3 text-xs">
              <div className="font-semibold text-neutral-300 uppercase tracking-wider text-[11px]">
                Standard Package Inclusions:
              </div>
              <ul className="space-y-2 text-neutral-400">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>{config.durationDays} nights verified hotel/resort stay with separate security</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>All buffet meals: hygienic breakfast, lunch, and dinner (Pure Veg/Jain/Non-veg)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Pushback AC Tourist Coach with experienced hill/highway drivers</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Dedicated NREJ tour manager traveling with the group 24/7</span>
                </li>
                {config.addOns.factoryVisitPermissions && (
                  <li className="flex items-center gap-2 text-cyan-300">
                    <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>Included: Official factory entry clearances & permission liaison</span>
                  </li>
                )}
                {config.addOns.industrialCertificate && (
                  <li className="flex items-center gap-2 text-cyan-300">
                    <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>Included: Authorized IV attendance certificates for all students</span>
                  </li>
                )}
              </ul>
            </div>

            {/* Price Calculations in INR */}
            <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-900 space-y-3">
              <div className="flex justify-between text-xs text-neutral-400">
                <span>Estimated per student/passenger:</span>
                <span className="font-semibold text-white font-mono tabular-nums">
                  ₹{calculatedEstimateInr.toLocaleString('en-IN')} INR
                </span>
              </div>
              <div className="flex justify-between text-xs text-neutral-400">
                <span>Batch capacity:</span>
                <span className="font-medium text-white tabular-nums">
                  × {config.guestsCount} Students / Guests
                </span>
              </div>
              <div className="pt-2 border-t border-neutral-900 flex justify-between items-baseline">
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-neutral-400 font-medium">Total Batch Quotation</div>
                  <div className="text-xs text-neutral-500">Tolls, parking, GST & permits included</div>
                </div>
                <div className="text-2xl font-bold text-amber-400 font-mono tabular-nums">
                  ₹{totalTripCostInr.toLocaleString('en-IN')}
                </div>
              </div>
            </div>

            {/* Submission CTA */}
            <div className="space-y-3">
              <button
                type="button"
                onClick={() => onRequestQuote(config, calculatedEstimateInr)}
                className="w-full py-4 text-xs font-semibold uppercase tracking-wider text-black bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg shadow-amber-400/10 cursor-pointer font-sans"
              >
                <span>Request College / School Formal Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <div className="flex items-center justify-center gap-2 text-xs text-neutral-500">
                <Shield className="w-3.5 h-3.5 text-cyan-400" />
                <span>GST Tax Invoice provided for college accounts clearance</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
