/**
 * Official Business Configuration for NRej Travelling Agency
 * Single source of truth for contact details, business information, and services.
 * All components across the website import from this configuration.
 */

export interface BusinessConfig {
  businessName: string;
  tagline: string;
  heroSlogan: string;
  contactPerson: string;
  mobile1: string;
  mobile1Formatted: string;
  mobile2: string;
  mobile2Formatted: string;
  email: string;
  location: {
    village: string;
    talukDistrict: string;
    state: string;
    country: string;
    pinCode: string;
    fullAddress: string;
  };
  primaryMarket: string[];
  primaryServices: {
    id: string;
    name: string;
    shortDescription: string;
  }[];
  social: {
    whatsappUrl: string;
  };
}

export const BUSINESS_CONFIG: BusinessConfig = {
  businessName: 'NRej Travelling Agency',
  tagline: 'Explore. Learn. Experience.',
  heroSlogan: 'Learn Beyond Classrooms.',
  contactPerson: 'H. Ramesh',
  mobile1: '9035307947',
  mobile1Formatted: '+91 90353 07947',
  mobile2: '7676172921',
  mobile2Formatted: '+91 76761 72921',
  email: 'nrejtravel@gmail.com',
  location: {
    village: 'Kottur Ayyanhalli',
    talukDistrict: 'Kottur',
    state: 'Karnataka',
    country: 'India',
    pinCode: '583 134',
    fullAddress: 'Kottur Ayyanhalli, Karnataka, India – 583 134',
  },
  primaryMarket: [
    'Schools',
    'PU Colleges',
    'Degree Colleges',
    'Universities',
    'Educational Institutions',
    'Corporate Groups',
  ],
  primaryServices: [
    {
      id: 'educational-trips',
      name: 'Educational Trips',
      shortDescription: 'Excursions connecting textbook curriculum with living history, science, and heritage.',
    },
    {
      id: 'industry-visits',
      name: 'Industry Visits (IV)',
      shortDescription: 'Logistics and coordination for manufacturing, engineering, and tech plant visits.',
    },
    {
      id: 'karnataka-special',
      name: 'Karnataka Special Tours',
      shortDescription: 'Bespoke tours exploring Karnataka’s grand palaces, UNESCO sites, and Western Ghats.',
    },
    {
      id: 'tour-management',
      name: 'Complete Tour Management',
      shortDescription: 'End-to-end luxury buses, hygienic meals, safe accommodations, and on-ground coordination.',
    },
  ],
  social: {
    whatsappUrl: 'https://wa.me/919035307947',
  },
};

/**
 * Generates a pre-filled WhatsApp link with inquiry details
 */
export function getWhatsAppInquiryUrl(message?: string): string {
  const defaultText = `Hello NRej Travelling Agency, I would like to enquire about tour packages and educational trip arrangements.`;
  const textToSend = message ? encodeURIComponent(message) : encodeURIComponent(defaultText);
  return `https://wa.me/91${BUSINESS_CONFIG.mobile1}?text=${textToSend}`;
}
