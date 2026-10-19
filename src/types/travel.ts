export interface DayPlan {
  day: number;
  title: string;
  summary: string;
  highlights: string[];
}

export type DestinationCategory = 
  | 'all'
  | 'karnataka-spotlight'
  | 'educational'
  | 'industrial'
  | 'nature-wildlife'
  | 'heritage-palace';

export type TripType = 'Educational' | 'Industrial Visit (IV)' | 'Leisure & Heritage' | 'Corporate Expedition';

export interface Destination {
  id: string;
  title: string;
  location: string;
  state: 'Karnataka' | 'Kerala' | 'Tamil Nadu';
  tripType: TripType;
  category: 'karnataka-spotlight' | 'educational' | 'industrial' | 'nature-wildlife' | 'heritage-palace';
  tagline: string;
  trendReason: string;
  durationDays: number;
  startingPriceInr: number;
  bestSeason: string;
  imageUrl: string;
  vibe: string;
  highlights: string[];
  itinerary: DayPlan[];
  included: string[];
  idealFor: string;
  featured?: boolean;
}

export interface CustomTripState {
  destinationId: string;
  tripType: TripType;
  durationDays: number;
  guestsCount: number;
  institutionType?: 'School' | 'Engineering / Degree College' | 'Corporate Company' | 'Family / Private Group';
  transportType: 'AC Luxury Coach (50-seater)' | 'Tempo Traveller (14-20 seater)' | 'Private Innova Crysta / SUV' | 'Train / Flight Hybrid';
  tier: 'Student / Educational Budget' | 'Executive Deluxe' | 'Royal Heritage Luxury';
  travelMonth: string;
  addOns: {
    factoryVisitPermissions: boolean;
    certifiedTourGuide: boolean;
    campFireAndDJ: boolean;
    complimentaryFacultyPass: boolean;
    industrialCertificate: boolean;
  };
}

export interface BookingSubmission {
  id: string;
  fullName: string;
  institutionName?: string;
  email: string;
  phone: string;
  destination: string;
  tripType: string;
  dates: string;
  travelers: number;
  budgetPerPerson: string;
  specialRequests: string;
  createdAt: string;
}
