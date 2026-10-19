import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Send, ShieldCheck, Mail, Phone, Calendar, Users, IndianRupee, Building2, GraduationCap, MessageSquare } from 'lucide-react';
import { DESTINATIONS } from '../data/destinations';
import { BookingSubmission } from '../types/travel';
import { BUSINESS_CONFIG, getWhatsAppInquiryUrl } from '../data/businessConfig';

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
    tripType: prefilledTripType || 'Educational Trips',
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
    const cleanPhone = formData.phone.replace(/[^0-9]/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      setErrorMsg('Please enter a valid 10-digit mobile or WhatsApp contact number.');
      return;
    }

    setErrorMsg('');
    const randomCode = 'NREJ-ENQ-' + Math.floor(100000 + Math.random() * 900000);
    setSubmissionId(randomCode);

    // Save to local storage for persistence
    try {
      const savedInquiries = JSON.parse(localStorage.getItem('nrej_inquiries') || '[]');
      const newInquiry: BookingSubmission = {
        id: randomCode,
        fullName: formData.fullName,
        institutionName: formData.institutionName,
        email: formData.email,
        phone: formData.phone,
        destination: formData.destination,
        tripType: formData.tripType,
        dates: formData.dates || 'Upcoming Academic Term',
        travelers: formData.travelers,
        budgetPerPerson: formData.budgetPerPerson,
        specialRequests: formData.specialRequests,
        createdAt: new Date().toISOString(),
      };
      savedInquiries.push(newInquiry);
      localStorage.setItem('nrej_inquiries', JSON.stringify(savedInquiries));
    } catch {
      // LocalStorage fallback
    }

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
      tripType: 'Educational Trips',
      dates: '',
      travelers: 50,
      budgetPerPerson: '₹6,000 – ₹10,000',
      specialRequests: '',
    });
    onClose();
  };

  const getWhatsAppMessage = () => {
    return `Hello NRej Travelling Agency (H. Ramesh),
I submitted a tour enquiry.
Ref Code: ${submissionId}
Name: ${formData.fullName}
Institution: ${formData.institutionName || 'Private Group'}
Phone: ${formData.phone}
Destination: ${formData.destination}
Category: ${formData.tripType}
Group Size: ${formData.travelers} Persons
Notes: ${formData.specialRequests || 'Please provide quotation and day-wise schedule.'}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/90 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-2xl bg-neutral-950 border border-neutral-800 rounded-2xl shadow-2xl overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 border-b border-neutral-900 flex items-center justify-between gap-4 bg-neutral-900 sticky top-0 z-10">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-sky-400 font-semibold flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5" />
              <span>{BUSINESS_CONFIG.businessName} · {BUSINESS_CONFIG.location.village}, Karnataka</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
              {submitted ? 'Enquiry Logged' : 'Plan Your Tour / Request Quotation'}
            </h2>
          </div>
          <button
            onClick={resetForm}
            className="p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
          {submitted ? (
            <div className="text-center py-6 space-y-6">
              <div className="w-16 h-16 rounded-full bg-emerald-950/60 border border-emerald-800 flex items-center justify-center text-emerald-400 mx-auto">
                <CheckCircle className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-white">
                  Namaskara, {formData.fullName.split(' ')[0]}!
                </h3>
                <p className="text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">
                  Your enquiry for <strong className="text-white">{formData.destination}</strong> ({formData.tripType}) has been sent to <strong className="text-amber-400">{BUSINESS_CONFIG.contactPerson}</strong> at {BUSINESS_CONFIG.businessName}.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 text-left max-w-md mx-auto space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-neutral-400 uppercase font-mono">Reference Code:</span>
                  <span className="text-amber-400 font-mono font-bold">{submissionId}</span>
                </div>
                {formData.institutionName && (
                  <div className="flex justify-between">
                    <span className="text-neutral-400 uppercase font-mono">Institution:</span>
                    <span className="text-neutral-200">{formData.institutionName}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-neutral-400 uppercase font-mono">Service:</span>
                  <span className="text-sky-400 font-semibold">{formData.tripType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400 uppercase font-mono">Group Size:</span>
                  <span className="text-neutral-200">{formData.travelers} Travelers</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400 uppercase font-mono">Official Email:</span>
                  <span className="text-neutral-300">{BUSINESS_CONFIG.email}</span>
                </div>
              </div>

              {/* Instant WhatsApp Redirection */}
              <div className="max-w-md mx-auto space-y-2">
                <a
                  href={getWhatsAppInquiryUrl(getWhatsAppMessage())}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 text-xs font-bold uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Summary on WhatsApp ({BUSINESS_CONFIG.mobile1})</span>
                </a>
              </div>

              <div className="pt-2 flex justify-center gap-3">
                <button
                  type="button"
                  onClick={resetForm}
                  className="px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors cursor-pointer font-sans"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {errorMsg && (
                <div className="p-3.5 rounded-xl bg-red-950/40 border border-red-800 text-xs text-red-300">
                  {errorMsg}
                </div>
              )}

              {/* Name & College */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                    Contact Person Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Prof. Ramesh / Dr. S. Kumar"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-4 py-2.5 bg-neutral-900 border border-neutral-800 rounded-xl text-neutral-100 text-sm placeholder:text-neutral-600 focus:border-amber-400 focus:outline-none transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                    School / College / Organization *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Government Degree College / Public School"
                    value={formData.institutionName}
                    onChange={(e) => setFormData({ ...formData, institutionName: e.target.value })}
                    className="w-full px-4 py-2.5 bg-neutral-900 border border-neutral-800 rounded-xl text-neutral-100 text-sm placeholder:text-neutral-600 focus:border-amber-400 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-neutral-400 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-sky-400" />
                    <span>Email Address *</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. principal@college.edu.in"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 bg-neutral-900 border border-neutral-800 rounded-xl text-neutral-100 text-sm placeholder:text-neutral-600 focus:border-amber-400 focus:outline-none transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-neutral-400 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-amber-400" />
                    <span>Mobile / WhatsApp Number *</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 9876543210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 bg-neutral-900 border border-neutral-800 rounded-xl text-neutral-100 text-sm placeholder:text-neutral-600 focus:border-amber-400 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Destination & Service Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                    Destination / Circuit
                  </label>
                  <select
                    value={formData.destination}
                    onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                    className="w-full px-4 py-2.5 bg-neutral-900 border border-neutral-800 rounded-xl text-neutral-100 text-sm focus:border-amber-400 focus:outline-none transition-colors cursor-pointer"
                  >
                    {DESTINATIONS.map((d) => (
                      <option key={d.id} value={d.title}>
                        {d.title}
                      </option>
                    ))}
                    <option value="Custom Karnataka Circuit">Custom Route Across Karnataka</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                    Service Format
                  </label>
                  <select
                    value={formData.tripType}
                    onChange={(e) => setFormData({ ...formData, tripType: e.target.value })}
                    className="w-full px-4 py-2.5 bg-neutral-900 border border-neutral-800 rounded-xl text-neutral-100 text-sm focus:border-amber-400 focus:outline-none transition-colors cursor-pointer"
                  >
                    <option value="Educational Trips">Educational Trips (School / PU Excursion)</option>
                    <option value="Industry Visits (IV)">Industry Visits (IV - Engineering / Degree)</option>
                    <option value="Karnataka Special Tours">Karnataka Special Tours</option>
                    <option value="Complete Tour Management">Complete Tour Management & Bus Logistics</option>
                  </select>
                </div>
              </div>

              {/* Group Size & Dates */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-neutral-400 flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-sky-400" />
                    <span>Traveler / Student Count</span>
                  </label>
                  <select
                    value={formData.travelers}
                    onChange={(e) => setFormData({ ...formData, travelers: Number(e.target.value) })}
                    className="w-full px-4 py-2.5 bg-neutral-900 border border-neutral-800 rounded-xl text-neutral-100 text-sm focus:border-amber-400 focus:outline-none transition-colors cursor-pointer"
                  >
                    {[15, 25, 35, 50, 75, 100, 150, 200].map((n) => (
                      <option key={n} value={n}>
                        {n} Travelers {n === 50 ? '(1 Full 2x2 Pushback Coach)' : n === 100 ? '(2 Full Coaches)' : ''}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-neutral-400 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-amber-400" />
                    <span>Expected Month / Dates</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. October 2026 / Mid-November"
                    value={formData.dates}
                    onChange={(e) => setFormData({ ...formData, dates: e.target.value })}
                    className="w-full px-4 py-2.5 bg-neutral-900 border border-neutral-800 rounded-xl text-neutral-100 text-sm placeholder:text-neutral-600 focus:border-amber-400 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Special Requests */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                  Specific Requirements or Factory Preferences
                </label>
                <textarea
                  rows={3}
                  placeholder="Mention if you require KSIC silk or HAL factory permissions, Pure Veg / Jain catering, or faculty room requirements..."
                  value={formData.specialRequests}
                  onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                  className="w-full px-4 py-2.5 bg-neutral-900 border border-neutral-800 rounded-xl text-neutral-100 text-sm placeholder:text-neutral-600 focus:border-amber-400 focus:outline-none transition-colors resize-none"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 text-xs font-bold uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-amber-400/10 font-sans"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Tour Enquiry</span>
                </button>
                <div className="flex items-center justify-between text-[11px] text-neutral-400 mt-2 px-1">
                  <span>Contact: {BUSINESS_CONFIG.contactPerson} ({BUSINESS_CONFIG.mobile1Formatted})</span>
                  <span>{BUSINESS_CONFIG.email}</span>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
