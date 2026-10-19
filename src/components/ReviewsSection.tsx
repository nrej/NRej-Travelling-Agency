import React from 'react';
import { TESTIMONIALS } from '../data/destinations';
import { Quote, CheckCircle, GraduationCap } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-20 lg:py-28 bg-white border-b border-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-cyan-600">
            <GraduationCap className="w-4 h-4" />
            <span>Verified Institutional & Client Feedback</span>
            <span aria-hidden="true" className="text-neutral-300">·</span>
            <span className="text-neutral-600 font-normal">Karnataka & South India</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 tracking-tight text-balance">
            Trusted by top colleges, schools, and families across Karnataka.
          </h2>
          <p className="text-neutral-600 text-base sm:text-lg font-light leading-relaxed">
            Read direct feedback from college professors, department heads, school administrators, and discerning travelers who traveled with NREJ.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="p-8 rounded-2xl bg-white border border-neutral-50 flex flex-col justify-between space-y-6 hover:border-neutral-200 transition-colors"
            >
              <div className="space-y-4">
                <Quote className="w-8 h-8 text-cyan-600/30" />
                <p className="text-sm text-neutral-700 leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-50 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-neutral-900">{t.author}</span>
                  <span className="flex items-center gap-1 text-[11px] text-cyan-600 font-medium">
                    <CheckCircle className="w-3 h-3" />
                    Verified Tour
                  </span>
                </div>
                <div className="text-xs text-neutral-600">{t.role}</div>
                <div className="text-xs text-neutral-500 font-mono pt-1">
                  {t.trip} · {t.date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
