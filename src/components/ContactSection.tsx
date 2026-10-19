import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, MessageSquare, AlertCircle, Building2, User, Calendar, Users, FileText } from 'lucide-react';
import { BUSINESS_CONFIG, getWhatsAppInquiryUrl } from '../data/businessConfig';
import { submitNetlifyForm } from '../lib/submitForm';

interface FormState {
  fullName: string;
  institutionName: string;
  designation: string;
  phone: string;
  email: string;
  serviceType: string;
  destination: string;
  tentativeDate: string;
  travelerCount: string;
  message: string;
}

const INITIAL_FORM: FormState = {
  fullName: '',
  institutionName: '',
  designation: 'Principal / Head of Institution',
  phone: '',
  email: '',
  serviceType: 'Educational Trips',
  destination: 'Hampi & Badami UNESCO Heritage',
  tentativeDate: '',
  travelerCount: '50 Students / Travelers',
  message: '',
};

export const ContactSection: React.FC = () => {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [sendError, setSendError] = useState('');

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormState, string>> = {};

    if (!form.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    }

    if (!form.institutionName.trim()) {
      newErrors.institutionName = 'Please enter school, college, or organization name.';
    }

    const cleanPhone = form.phone.replace(/[^0-9]/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      newErrors.phone = 'Please enter a valid 10-digit mobile number.';
    }

    if (!form.email.trim() || !form.email.includes('@') || !form.email.includes('.')) {
      newErrors.email = 'Please enter a valid email address.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSending || !validate()) return;

    const ref = `NREJ-${new Date().getFullYear()}-${Math.floor(10000 + Math.random() * 90000)}`;

    setSendError('');
    setIsSending(true);
    try {
      await submitNetlifyForm('contact-enquiry', {
        subject: `New tour enquiry ${ref} from ${form.fullName}`,
        referenceId: ref,
        ...form,
      });
    } catch {
      setSendError(
        `We couldn't send your enquiry. Please try again, or contact us on WhatsApp or at ${BUSINESS_CONFIG.email}.`,
      );
      return;
    } finally {
      setIsSending(false);
    }

    setReferenceId(ref);
    setIsSubmitted(true);

    // Save inquiry to local storage for persistence
    try {
      const existing = JSON.parse(localStorage.getItem('nrej_inquiries') || '[]');
      existing.push({
        ref,
        date: new Date().toISOString(),
        ...form,
      });
      localStorage.setItem('nrej_inquiries', JSON.stringify(existing));
    } catch {
      // Ignore local storage errors
    }
  };

  const resetForm = () => {
    setForm(INITIAL_FORM);
    setIsSubmitted(false);
    setErrors({});
  };

  const generateWhatsAppMessage = () => {
    return `Hello NRej Travelling Agency (H. Ramesh),
I submitted an enquiry for ${form.serviceType}.
Ref: ${referenceId}
Name: ${form.fullName}
Institution: ${form.institutionName} (${form.designation})
Phone: ${form.phone}
Destination: ${form.destination}
Travelers: ${form.travelerCount}
Notes: ${form.message || 'Please send complete quotation & itinerary.'}`;
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white border-b border-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-sky-600">
            <Mail className="w-4 h-4 text-amber-600" />
            <span>Contact & Tour Enquiries</span>
            <span aria-hidden="true" className="text-neutral-300">·</span>
            <span className="text-neutral-600 font-normal">NRej Travelling Agency</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight leading-tight">
            Connect with Us to Plan Your Journey
          </h2>
          <p className="text-neutral-700 text-base sm:text-lg leading-relaxed">
            Reach out to discuss your institution's educational tour, college industrial visit, or Karnataka special holiday. We provide itemized quotations and tailored itineraries.
          </p>
        </div>

        {/* 2-Column Layout: Direct Details on Left, Validated Form on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Official Business Cards & Direct Actions */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-7 rounded-2xl bg-neutral-50 border border-neutral-200 space-y-6">
              <div className="space-y-1">
                <div className="text-xs font-semibold uppercase tracking-wider text-amber-600">
                  Official Contact Information
                </div>
                <h3 className="text-2xl font-bold text-neutral-900">
                  {BUSINESS_CONFIG.businessName}
                </h3>
                <div className="text-xs text-sky-600 font-medium">
                  {BUSINESS_CONFIG.tagline}
                </div>
              </div>

              <div className="space-y-4 pt-2 border-t border-neutral-200 text-sm text-neutral-700">
                {/* Contact Person */}
                <div className="flex items-start gap-3">
                  <User className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[11px] text-neutral-600 uppercase font-mono">Contact Person</div>
                    <div className="font-semibold text-neutral-900">{BUSINESS_CONFIG.contactPerson}</div>
                  </div>
                </div>

                {/* Primary Phone */}
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[11px] text-neutral-600 uppercase font-mono">Mobile Number 1</div>
                    <a
                      href={`tel:${BUSINESS_CONFIG.mobile1}`}
                      className="font-semibold text-neutral-900 hover:text-sky-700 transition-colors"
                    >
                      {BUSINESS_CONFIG.mobile1Formatted}
                    </a>
                  </div>
                </div>

                {/* Secondary Phone */}
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[11px] text-neutral-600 uppercase font-mono">Mobile Number 2</div>
                    <a
                      href={`tel:${BUSINESS_CONFIG.mobile2}`}
                      className="font-semibold text-neutral-900 hover:text-sky-700 transition-colors"
                    >
                      {BUSINESS_CONFIG.mobile2Formatted}
                    </a>
                  </div>
                </div>

                {/* Official Email */}
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[11px] text-neutral-600 uppercase font-mono">Email Address</div>
                    <a
                      href={`mailto:${BUSINESS_CONFIG.email}`}
                      className="font-semibold text-neutral-900 hover:text-amber-700 transition-colors"
                    >
                      {BUSINESS_CONFIG.email}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[11px] text-neutral-600 uppercase font-mono">Office Location</div>
                    <div className="font-medium text-neutral-900">{BUSINESS_CONFIG.location.fullAddress}</div>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Callout */}
              <div className="pt-4 border-t border-neutral-200 space-y-2">
                <a
                  href={getWhatsAppInquiryUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 text-xs font-bold uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-lg"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp Directly</span>
                </a>
                <div className="text-[11px] text-neutral-500 text-center">
                  Instant response for tour dates & vehicle availability
                </div>
              </div>
            </div>

            {/* Educational Institution Notice Card */}
            <div className="p-5 rounded-xl bg-neutral-50/60 border border-neutral-200 text-xs text-neutral-700 space-y-2">
              <div className="font-semibold text-sky-600 flex items-center gap-1.5">
                <Building2 className="w-4 h-4" />
                <span>Notice for College Principals & HODs</span>
              </div>
              <p className="text-neutral-600 leading-relaxed">
                If your institution requires official quotations on agency letterhead, custom route plans for governing council approval, or driver credential copies in advance, please specify in the enquiry form or call H. Ramesh directly.
              </p>
            </div>
          </div>

          {/* Right Column: Validated Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-neutral-50 border border-neutral-200 shadow-2xl relative">
              {isSubmitted ? (
                /* Success State */
                <div className="space-y-6 py-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div className="space-y-2">
                    <div className="text-xs font-mono uppercase tracking-wider text-sky-600">
                      Reference #{referenceId}
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900">
                      Enquiry Submitted Successfully
                    </h3>
                    <p className="text-sm text-neutral-700 max-w-md mx-auto leading-relaxed">
                      Thank you, <strong className="text-neutral-900">{form.fullName}</strong>. Your enquiry for <strong className="text-amber-600">{form.institutionName}</strong> has been logged. Contact person <strong className="text-neutral-900">{BUSINESS_CONFIG.contactPerson}</strong> will get in touch with you shortly.
                    </p>
                  </div>

                  {/* Immediate WhatsApp Forwarding Option */}
                  <div className="p-4 rounded-xl bg-white border border-neutral-200 max-w-md mx-auto space-y-3">
                    <div className="text-xs text-neutral-700">
                      Want an instant reply? Send your reference directly via WhatsApp:
                    </div>
                    <a
                      href={getWhatsAppInquiryUrl(generateWhatsAppMessage())}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-4 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-colors flex items-center justify-center gap-2"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Send Summary to H. Ramesh on WhatsApp</span>
                    </a>
                  </div>

                  <div className="pt-4 flex justify-center gap-4">
                    <button
                      type="button"
                      onClick={resetForm}
                      className="px-5 py-2.5 text-xs font-medium text-neutral-700 hover:text-neutral-900 rounded-lg border border-neutral-200 transition-colors"
                    >
                      Submit Another Enquiry
                    </button>
                    <a
                      href={`tel:${BUSINESS_CONFIG.mobile1}`}
                      className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors flex items-center gap-1.5"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Call {BUSINESS_CONFIG.contactPerson}</span>
                    </a>
                  </div>
                </div>
              ) : (
                /* Active Form */
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-neutral-900">
                      Request Tour Quotation & Itinerary
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-600 mt-1">
                      Fill out this form to receive a detailed schedule and customized pricing for your school, college, or group.
                    </p>
                  </div>

                  {/* Form fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-neutral-700 flex items-center justify-between">
                        <span>Your Full Name *</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Prof. Ramesh Kumar"
                        value={form.fullName}
                        onChange={(e) => {
                          setForm({ ...form, fullName: e.target.value });
                          if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                        }}
                        className={`w-full px-3.5 py-2.5 text-xs bg-white border rounded-lg text-neutral-900 placeholder:text-neutral-400 focus:outline-none transition-colors ${
                          errors.fullName ? 'border-red-500 focus:border-red-500' : 'border-neutral-200 focus:border-sky-400'
                        }`}
                      />
                      {errors.fullName && (
                        <div className="text-[11px] text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.fullName}</span>
                        </div>
                      )}
                    </div>

                    {/* Institution Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-neutral-700 flex items-center justify-between">
                        <span>Institution / College / School *</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Government First Grade College"
                        value={form.institutionName}
                        onChange={(e) => {
                          setForm({ ...form, institutionName: e.target.value });
                          if (errors.institutionName) setErrors({ ...errors, institutionName: undefined });
                        }}
                        className={`w-full px-3.5 py-2.5 text-xs bg-white border rounded-lg text-neutral-900 placeholder:text-neutral-400 focus:outline-none transition-colors ${
                          errors.institutionName ? 'border-red-500 focus:border-red-500' : 'border-neutral-200 focus:border-sky-400'
                        }`}
                      />
                      {errors.institutionName && (
                        <div className="text-[11px] text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.institutionName}</span>
                        </div>
                      )}
                    </div>

                    {/* Designation / Role */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-neutral-700">
                        Designation / Role
                      </label>
                      <select
                        value={form.designation}
                        onChange={(e) => setForm({ ...form, designation: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-white border border-neutral-200 rounded-lg text-neutral-900 focus:outline-none focus:border-sky-400 cursor-pointer"
                      >
                        <option value="Principal / Head of Institution">Principal / Head of Institution</option>
                        <option value="Department Head (HOD)">Department Head (HOD)</option>
                        <option value="Lecturer / Assistant Professor">Lecturer / Assistant Professor</option>
                        <option value="School Teacher / Excursion Coordinator">School Teacher / Excursion Coordinator</option>
                        <option value="Student Tour Representative">Student Tour Representative</option>
                        <option value="Corporate / Company Manager">Corporate / Company Manager</option>
                        <option value="Family / Private Group Lead">Family / Private Group Lead</option>
                      </select>
                    </div>

                    {/* Mobile Number */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-neutral-700">
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        placeholder="e.g. 9876543210"
                        value={form.phone}
                        onChange={(e) => {
                          setForm({ ...form, phone: e.target.value });
                          if (errors.phone) setErrors({ ...errors, phone: undefined });
                        }}
                        className={`w-full px-3.5 py-2.5 text-xs bg-white border rounded-lg text-neutral-900 placeholder:text-neutral-400 focus:outline-none transition-colors ${
                          errors.phone ? 'border-red-500 focus:border-red-500' : 'border-neutral-200 focus:border-sky-400'
                        }`}
                      />
                      {errors.phone && (
                        <div className="text-[11px] text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.phone}</span>
                        </div>
                      )}
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-neutral-700">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        placeholder="e.g. college@example.edu.in"
                        value={form.email}
                        onChange={(e) => {
                          setForm({ ...form, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: undefined });
                        }}
                        className={`w-full px-3.5 py-2.5 text-xs bg-white border rounded-lg text-neutral-900 placeholder:text-neutral-400 focus:outline-none transition-colors ${
                          errors.email ? 'border-red-500 focus:border-red-500' : 'border-neutral-200 focus:border-sky-400'
                        }`}
                      />
                      {errors.email && (
                        <div className="text-[11px] text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.email}</span>
                        </div>
                      )}
                    </div>

                    {/* Service Type */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-neutral-700">
                        Primary Service Required
                      </label>
                      <select
                        value={form.serviceType}
                        onChange={(e) => setForm({ ...form, serviceType: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-white border border-neutral-200 rounded-lg text-neutral-900 focus:outline-none focus:border-sky-400 cursor-pointer"
                      >
                        <option value="Educational Trips">Educational Trips (School / PU Excursion)</option>
                        <option value="Industry Visits (IV)">Industry Visits (IV - Engineering / Degree)</option>
                        <option value="Karnataka Special Tours">Karnataka Special Tours (Heritage / Tourism)</option>
                        <option value="Complete Tour Management">Complete Tour Management & Bus Logistics</option>
                      </select>
                    </div>

                    {/* Destination / Circuit */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-neutral-700">
                        Destination / Circuit
                      </label>
                      <select
                        value={form.destination}
                        onChange={(e) => setForm({ ...form, destination: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-white border border-neutral-200 rounded-lg text-neutral-900 focus:outline-none focus:border-sky-400 cursor-pointer"
                      >
                        <option value="Mysuru Royal Palace & KSIC Silk Tour">Mysuru Royal Palace & KSIC Silk Tour</option>
                        <option value="Hampi & Badami UNESCO Heritage">Hampi & Badami UNESCO Heritage</option>
                        <option value="Bengaluru Aerospace & Technology Corridor">Bengaluru Aerospace & Technology Corridor</option>
                        <option value="Coorg & Chikmagalur Coffee Plantation">Coorg & Chikmagalur Coffee Plantation</option>
                        <option value="Dandeli Adventure & Supa Hydropower Dam">Dandeli Adventure & Supa Hydropower Dam</option>
                        <option value="Belur, Halebidu & Shravanabelagola">Belur, Halebidu & Shravanabelagola</option>
                        <option value="Custom Route Across South India">Custom Route Across South India</option>
                      </select>
                    </div>

                    {/* Tentative Travel Date / Month */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-neutral-700">
                        Tentative Travel Month / Dates
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. October 2026 / Mid-November"
                        value={form.tentativeDate}
                        onChange={(e) => setForm({ ...form, tentativeDate: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-white border border-neutral-200 rounded-lg text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-sky-400"
                      />
                    </div>

                    {/* Number of Students / Travelers */}
                    <div className="space-y-1.5 sm:col-span-2">
                      <label className="text-xs font-medium text-neutral-700">
                        Approximate Group Size
                      </label>
                      <select
                        value={form.travelerCount}
                        onChange={(e) => setForm({ ...form, travelerCount: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-white border border-neutral-200 rounded-lg text-neutral-900 focus:outline-none focus:border-sky-400 cursor-pointer"
                      >
                        <option value="20-35 Students (1 Mini-Coach / Tempo)">20–35 Students (1 Mini-Coach / Tempo)</option>
                        <option value="45-55 Students (1 Full Deluxe 2x2 Coach)">45–55 Students (1 Full Deluxe 2x2 Coach)</option>
                        <option value="90-110 Students (2 Deluxe Coaches)">90–110 Students (2 Deluxe Coaches)</option>
                        <option value="150+ Students (Multi-Bus Institutional Delegation)">150+ Students (Multi-Bus Institutional Delegation)</option>
                        <option value="Family / Small Corporate Group (6-15 pax)">Family / Small Corporate Group (6–15 pax)</option>
                      </select>
                    </div>
                  </div>

                  {/* Special Notes / Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-neutral-700">
                      Specific Requirements / Syllabus / Factory Preferences
                    </label>
                    <textarea
                      rows={3}
                      placeholder="e.g. We require official factory visit certificates for 55 mechanical students, pure vegetarian meals, and 2 separate rooms for faculty guides."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-white border border-neutral-200 rounded-lg text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-sky-400 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  {sendError && (
                    <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{sendError}</span>
                    </div>
                  )}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-[11px] text-neutral-600">
                      * All enquiries receive an official response and transparent rate breakdown.
                    </div>
                    <button
                      type="submit"
                      disabled={isSending}
                      className="w-full sm:w-auto px-7 py-3 text-xs font-bold uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 disabled:opacity-60 disabled:cursor-wait rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg shadow-amber-400/10 cursor-pointer font-sans"
                    >
                      <Send className="w-4 h-4" />
                      <span>{isSending ? 'Sending…' : 'Submit Official Tour Enquiry'}</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
