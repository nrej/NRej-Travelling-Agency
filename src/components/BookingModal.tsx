import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Send, ShieldCheck, Mail, Phone, Calendar, Users, IndianRupee, Building2, GraduationCap } from 'lucide-react';
import { DESTINATIONS } from '../data/destinations';
import { BookingSubmission, TripType } from '../types/travel';

interface BookingModalProps {
  isOpen: boolean;
  prefilledDestination?: string;
  prefilledTripType?: string;
  prefilledNote?: string;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  prefilledDestination,
  prefilledTripType,
  prefilledNote,
  onClose,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    institutionName: '',
    email: '',
    phone: '',
    destination: prefilledDestination || DESTINATIONS[0].title,
    tripType: prefilledTripType || 'Industrial Visit (IV)',
    dates: '',
    travelers: 50,
    budgetPerPerson: '₹6,000 – ₹10,000',
    specialRequests: prefilledNote || '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submissionId, setSubmissionId] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (prefilledDestination) {
      setFormData((prev) => ({ ...prev, destination: prefilledDestination }));
    }
    if (prefilledTripType) {
      setFormData((prev) => ({ ...prev, tripType: prefilledTripType }));
    }
    if (prefilledNote) {
      setFormData((prev) => ({
        ...prev,
        specialRequests: prefilledNote,
      }));
    }
  }, [prefilledDestination, prefilledTripType, prefilledNote]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim()) {
      setErrorMsg('Please enter your contact name.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }
    if (!formData.phone.trim()) {
      setErrorMsg('Please enter your mobile or WhatsApp contact number.');
      return;
    }

    setErrorMsg('');
    const randomCode = 'NREJ-KA-' + Math.floor(100000 + Math.random() * 900000);
    setSubmissionId(randomCode);

    // Save to local storage for persistence
    const savedInquiries = JSON.parse(localStorage.getItem('nrej_inquiries') || '[]');
    const newInquiry: BookingSubmission = {
      id: randomCode,
      fullName: formData.fullName,
      institutionName: formData.institutionName,
      email: formData.email,
      phone: formData.phone,
      destination: formData.destination,
      tripType: formData.tripType,
      dates: formData.dates || 'Upcoming 2026/2027 Academic Term',
      travelers: formData.travelers,
      budgetPerPerson: formData.budgetPerPerson,
      specialRequests: formData.specialRequests,
      createdAt: new Date().toISOString(),
    };
    savedInquiries.push(newInquiry);
    localStorage.setItem('nrej_inquiries', JSON.stringify(savedInquiries));

    setSubmitted(true);
  };

  const resetForm = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      institutionName: '',
      email: '',
      phone: '',
      destination: DESTINATIONS[0].title,
      tripType: 'Industrial Visit (IV)',
      dates: '',
      travelers: 50,
      budgetPerPerson: '₹6,000 – ₹10,000',
      specialRequests: '',
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/90 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-2xl bg-neutral-950 border border-neutral-800 rounded-2xl shadow-2xl overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 border-b border-neutral-900 flex items-center justify-between gap-4 bg-black sticky top-0 z-10">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5" />
              <span>NREJ Travels · South India & Karnataka Concierge</span>
            </div>
            <h2 className="font-serif-luxury text-2xl font-bold text-white mt-1">
              {submitted ? 'Inquiry Dispatched' : 'Request Tour Proposal / College IV Quotation'}
            </h2>
          </div>
          <button
            onClick={resetForm}
            className="p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-900 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-6 space-y-6">
              <div className="w-16 h-16 rounded-full bg-cyan-950/60 border border-cyan-800 flex items-center justify-center text-cyan-400 mx-auto">
                <CheckCircle className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <h3 className="font-serif-luxury text-2xl font-bold text-white">
                  Namaskara, {formData.fullName.split(' ')[0]}!
                </h3>
                <p className="text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">
                  Your request for <strong className="text-white">{formData.destination}</strong> ({formData.tripType}) has been logged with our senior Karnataka tour desk.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-black border border-neutral-900 text-left max-w-md mx-auto space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-neutral-500 uppercase font-mono">Reference Code:</span>
                  <span className="text-amber-400 font-mono font-bold">{submissionId}</span>
                </div>
                {formData.institutionName && (
                  <div className="flex justify-between text-xs">
                    <span className="text-neutral-500 uppercase font-mono">Institution:</span>
                    <span className="text-neutral-300">{formData.institutionName}</span>
                  </div>
                )}
                <div className="flex justify-between text-xs">
                  <span className="text-neutral-500 uppercase font-mono">Trip Category:</span>
                  <span className="text-cyan-400 font-semibold">{formData.tripType}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-neutral-500 uppercase font-mono">Confirmed Batch:</span>
                  <span className="text-neutral-300">{formData.travelers} Travelers</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-neutral-500 uppercase font-mono">Agency Email:</span>
                  <span className="text-neutral-400">nrejtravels@gmail.com</span>
                </div>
              </div>

              <div className="flex items-center justify-center gap-2 text-xs text-neutral-400">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                <span>Formal institution quotation with bus options & factory permissions delivered within 24 hours.</span>
              </div>

              <div className="pt-2">
                <button
                  onClick={resetForm}
                  className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-black bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors cursor-pointer font-sans"
                >
                  Return to Exploration
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {errorMsg && (
                <div className="p-3 rounded-lg bg-red-950/60 border border-red-800 text-xs text-red-200">
                  {errorMsg}
                </div>
              )}

              {/* Trip Purpose Selector */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                  Trip Classification
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    'Industrial Visit (IV)',
                    'Educational',
                    'Leisure & Heritage',
                    'Corporate Expedition',
                  ].map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setFormData({ ...formData, tripType: t })}
                      className={`py-2 px-2.5 text-xs font-medium rounded-lg border transition-colors cursor-pointer text-center ${
                        formData.tripType === t
                          ? 'border-cyan-400 bg-cyan-950/60 text-cyan-300 font-semibold'
                          : 'border-neutral-900 bg-black text-neutral-400 hover:text-white'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Destination selector */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                  Karnataka / South India Destination
                </label>
                <select
                  value={formData.destination}
                  onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                  className="w-full px-4 py-2.5 bg-black border border-neutral-800 rounded-xl text-neutral-100 text-sm focus:border-amber-400 focus:outline-none transition-colors cursor-pointer"
                >
                  {DESTINATIONS.map((d) => (
                    <option key={d.id} value={d.title}>
                      {d.title} ({d.location}, {d.state})
                    </option>
                  ))}
                  <option value="Custom Multi-City Karnataka Tour">
                    Custom Multi-City Karnataka Tour (Tailored)
                  </option>
                </select>
              </div>

              {/* Institution / College Name & Contact Person */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-neutral-400 flex items-center gap-1.5">
                    <span>Contact Person / Faculty Name</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Prof. R. Sharma / Vinay Kumar"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-4 py-2.5 bg-black border border-neutral-800 rounded-xl text-neutral-100 text-sm placeholder:text-neutral-600 focus:border-amber-400 focus:outline-none transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-neutral-400 flex items-center gap-1.5">
                    <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
                    <span>College / School / Company Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. RV College of Engineering, Bengaluru"
                    value={formData.institutionName}
                    onChange={(e) => setFormData({ ...formData, institutionName: e.target.value })}
                    className="w-full px-4 py-2.5 bg-black border border-neutral-800 rounded-xl text-neutral-100 text-sm placeholder:text-neutral-600 focus:border-amber-400 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-neutral-400 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-amber-400" />
                    <span>WhatsApp / Mobile</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 bg-black border border-neutral-800 rounded-xl text-neutral-100 text-sm placeholder:text-neutral-600 focus:border-amber-400 focus:outline-none transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-neutral-400 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-amber-400" />
                    <span>Official Email</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="dept@college.edu or gmail"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 bg-black border border-neutral-800 rounded-xl text-neutral-100 text-sm placeholder:text-neutral-600 focus:border-amber-400 focus:outline-none transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-neutral-400 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-amber-400" />
                    <span>Proposed Dates / Month</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. October 2026"
                    value={formData.dates}
                    onChange={(e) => setFormData({ ...formData, dates: e.target.value })}
                    className="w-full px-4 py-2.5 bg-black border border-neutral-800 rounded-xl text-neutral-100 text-sm placeholder:text-neutral-600 focus:border-amber-400 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Group Size and Target Investment */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-neutral-400 flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-amber-400" />
                    <span>Estimated Students / Travelers</span>
                  </label>
                  <select
                    value={formData.travelers}
                    onChange={(e) => setFormData({ ...formData, travelers: Number(e.target.value) })}
                    className="w-full px-4 py-2.5 bg-black border border-neutral-800 rounded-xl text-neutral-100 text-sm focus:border-amber-400 focus:outline-none transition-colors cursor-pointer"
                  >
                    {[10, 20, 30, 50, 75, 100, 150, 200].map((n) => (
                      <option key={n} value={n}>
                        {n} Travelers {n === 50 ? '(1 Full 2x2 Coach)' : n === 100 ? '(2 Full Coaches)' : ''}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-neutral-400 flex items-center gap-1.5">
                    <IndianRupee className="w-3.5 h-3.5 text-amber-400" />
                    <span>Target Investment Per Student</span>
                  </label>
                  <select
                    value={formData.budgetPerPerson}
                    onChange={(e) => setFormData({ ...formData, budgetPerPerson: e.target.value })}
                    className="w-full px-4 py-2.5 bg-black border border-neutral-800 rounded-xl text-neutral-100 text-sm focus:border-amber-400 focus:outline-none transition-colors cursor-pointer"
                  >
                    <option value="₹3,000 – ₹6,000">₹3,000 – ₹6,000 / student (Budget IV)</option>
                    <option value="₹6,000 – ₹10,000">₹6,000 – ₹10,000 / student (Standard 3-Star)</option>
                    <option value="₹10,000 – ₹18,000">₹10,000 – ₹18,000 / student (Premium Tour)</option>
                    <option value="₹18,000+">₹18,000+ (Executive / Flight / Resort)</option>
                  </select>
                </div>
              </div>

              {/* Special Requests */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                  Specific Factory Requests, Food Preferences (Jain/Pure Veg), or Faculty Accommodations
                </label>
                <textarea
                  rows={3}
                  placeholder="Mention if you require KSIC silk, HAL aerospace, Supa dam permissions, or specific food requirements..."
                  value={formData.specialRequests}
                  onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                  className="w-full px-4 py-2.5 bg-black border border-neutral-800 rounded-xl text-neutral-100 text-sm placeholder:text-neutral-600 focus:border-amber-400 focus:outline-none transition-colors resize-none"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 text-xs font-semibold uppercase tracking-wider text-black bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-amber-400/10 font-sans"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Tour Consultation Request</span>
                </button>
                <div className="flex items-center justify-between text-[11px] text-neutral-500 mt-2 px-1">
                  <span>Direct agency inbox: nrejtravels@gmail.com</span>
                  <span>Karnataka Tourism Registered Operator</span>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
