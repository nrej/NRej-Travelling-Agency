import React, { useState } from 'react';
import { Phone, MessageSquare, ChevronUp, X } from 'lucide-react';
import { BUSINESS_CONFIG, getWhatsAppInquiryUrl } from '../data/businessConfig';

export const FloatingContactButtons: React.FC = () => {
  const [showCallMenu, setShowCallMenu] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="w-10 h-10 rounded-full bg-neutral-50/90 border border-neutral-300 text-neutral-700 hover:text-neutral-900 hover:bg-neutral-200 transition-all flex items-center justify-center shadow-lg cursor-pointer"
        aria-label="Scroll to top"
        title="Scroll to top"
      >
        <ChevronUp className="w-5 h-5" />
      </button>

      {/* Call Menu Popup if active */}
      {showCallMenu && (
        <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-3.5 shadow-2xl flex flex-col gap-2 min-w-[240px] text-xs">
          <div className="flex items-center justify-between pb-1.5 border-b border-neutral-200">
            <span className="font-semibold text-neutral-900">Call {BUSINESS_CONFIG.contactPerson}</span>
            <button
              onClick={() => setShowCallMenu(false)}
              className="text-neutral-600 hover:text-neutral-900"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <a
            href={`tel:${BUSINESS_CONFIG.mobile1}`}
            className="flex items-center gap-2 p-2 rounded-lg bg-white hover:bg-neutral-200 text-neutral-900 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-sky-600" />
            <span>Line 1: {BUSINESS_CONFIG.mobile1Formatted}</span>
          </a>
          <a
            href={`tel:${BUSINESS_CONFIG.mobile2}`}
            className="flex items-center gap-2 p-2 rounded-lg bg-white hover:bg-neutral-200 text-neutral-900 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-sky-600" />
            <span>Line 2: {BUSINESS_CONFIG.mobile2Formatted}</span>
          </a>
        </div>
      )}

      {/* Floating Buttons Bar */}
      <div className="flex items-center gap-2">
        {/* Call H. Ramesh Toggle */}
        <button
          onClick={() => setShowCallMenu(!showCallMenu)}
          className="h-11 px-3.5 rounded-full bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-lg shadow-sky-500/20 transition-all cursor-pointer"
          title={`Call ${BUSINESS_CONFIG.contactPerson}`}
        >
          <Phone className="w-4 h-4" />
          <span className="hidden sm:inline">Call Coordinator</span>
        </button>

        {/* WhatsApp Button */}
        <a
          href={getWhatsAppInquiryUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="h-11 px-4 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-lg shadow-emerald-500/25 transition-all cursor-pointer"
          title="Direct WhatsApp Enquiry"
        >
          <MessageSquare className="w-4 h-4" />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
};
