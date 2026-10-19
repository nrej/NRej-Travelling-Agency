import React, { useState } from 'react';
import { Mail, Phone, CheckCircle2, MapPin, Building2 } from 'lucide-react';
import { NrejLogo } from './NrejLogo';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setSubscribed(true);
  };

  return (
    <footer id="contact" className="bg-black border-t border-neutral-900 text-neutral-400">
      {/* Top Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Brand & Editorial Mission */}
          <div className="lg:col-span-5 space-y-4">
            <NrejLogo size="md" showText={true} />
            <p className="text-sm text-neutral-400 leading-relaxed max-w-sm pt-2">
              NREJ Travels is South India's dedicated tour specialist conducting major trips in Karnataka, accredited college Industrial Visits (IVs), school educational study tours, and bespoke family expeditions.
            </p>
            <div className="pt-2 space-y-2 text-xs text-neutral-300">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan-400" />
                <a href="mailto:nrejtravels@gmail.com" className="hover:text-cyan-300 transition-colors">
                  nrejtravels@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400" />
                <span>+91 98200 48721 / Direct WhatsApp Tour Desk</span>
              </div>
              <div className="flex items-center gap-2 text-neutral-400">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>Bengaluru & Mysuru Hub, Karnataka, South India</span>
              </div>
            </div>
          </div>

          {/* Quick Nav Mirrors for Karnataka & IV Circuits */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-white">
              Karnataka & South Circuits
            </div>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#trending" className="hover:text-amber-400 transition-colors">
                  Mysuru Royal Palace & KSIC Silk Tour
                </a>
              </li>
              <li>
                <a href="#trending" className="hover:text-amber-400 transition-colors">
                  Hampi & Badami UNESCO Architectural Study
                </a>
              </li>
              <li>
                <a href="#trending" className="hover:text-amber-400 transition-colors">
                  Bengaluru Aerospace & ISRO Tech Visit
                </a>
              </li>
              <li>
                <a href="#trending" className="hover:text-amber-400 transition-colors">
                  Coorg Coffee Agro-Industry & Western Ghats
                </a>
              </li>
              <li>
                <a href="#trending" className="hover:text-amber-400 transition-colors">
                  Dandeli Hydropower & Gokarna Coast
                </a>
              </li>
              <li>
                <a href="#trending" className="hover:text-amber-400 transition-colors">
                  Kabini River Wildlife & Nagarhole Safari
                </a>
              </li>
            </ul>
          </div>

          {/* College & School Tour Circular Dispatch */}
          <div className="lg:col-span-4 space-y-4">
            <div className="text-xs font-semibold uppercase tracking-wider text-white flex items-center gap-1.5">
              <Building2 className="w-4 h-4 text-cyan-400" />
              <span>Academic & Tour Bulletin</span>
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Join 1,200+ college principals, HODs, and student placement coordinators receiving our semester circular on Karnataka factory visit slots, exam-break tour discounts, and transport rates.
            </p>
            {subscribed ? (
              <div className="p-3.5 rounded-xl bg-cyan-950/40 border border-cyan-800 flex items-center gap-2.5 text-xs text-cyan-300">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>You are on the NREJ Karnataka tour circular list. Thank you.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="flex items-center gap-2">
                  <input
                    type="email"
                    required
                    placeholder="Enter college or personal email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-3.5 py-2.5 text-xs bg-neutral-950 border border-neutral-800 rounded-lg text-white placeholder:text-neutral-600 focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-black bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors cursor-pointer shrink-0 font-sans"
                  >
                    Subscribe
                  </button>
                </div>
                <div className="text-[11px] text-neutral-500">
                  Strictly academic updates. No spam, ever.
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Quiet Legal & Copyright Bar */}
      <div className="border-t border-neutral-900 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            © {new Date().getFullYear()} NREJ Travels. Karnataka State Tourism & Transport Approved Operator.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-neutral-400 transition-colors cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-neutral-400 transition-colors cursor-pointer">
              Institutional Terms of Service
            </span>
            <span className="hover:text-neutral-400 transition-colors cursor-pointer">
              Student Safety Charter
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
