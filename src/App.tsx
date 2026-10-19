/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { EducationalTripsSection } from './components/EducationalTripsSection';
import { IndustryVisitsSection } from './components/IndustryVisitsSection';
import { PhotoGallery } from './components/PhotoGallery';
import { TrendingSection } from './components/TrendingSection';
import { CustomTripBuilder } from './components/CustomTripBuilder';
import { WhyNREJ } from './components/WhyNREJ';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ItineraryModal } from './components/ItineraryModal';
import { BookingModal } from './components/BookingModal';
import { FloatingContactButtons } from './components/FloatingContactButtons';
import { DESTINATIONS } from './data/destinations';
import { Destination, DestinationCategory, CustomTripState } from './types/travel';
import { BUSINESS_CONFIG } from './data/businessConfig';

export default function App() {
  const [activeCategory, setActiveCategory] = useState<DestinationCategory>('all');
  const [regionFilter, setRegionFilter] = useState('All');
  const [selectedDestinationForModal, setSelectedDestinationForModal] = useState<Destination | null>(null);

  // Booking inquiry modal state
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingDestinationTitle, setBookingDestinationTitle] = useState<string | undefined>(undefined);
  const [bookingTripType, setBookingTripType] = useState<string | undefined>(undefined);
  const [bookingNote, setBookingNote] = useState<string | undefined>(undefined);

  // Filter destinations based on category and region
  const filteredDestinations = useMemo(() => {
    return DESTINATIONS.filter((item) => {
      const matchesCategory = 
        activeCategory === 'all' || 
        item.category === activeCategory ||
        (activeCategory === 'karnataka-spotlight' && item.state === 'Karnataka');

      let matchesRegion = true;
      if (regionFilter !== 'All') {
        if (regionFilter === 'Karnataka') {
          matchesRegion = item.state === 'Karnataka';
        } else if (regionFilter === 'Mysuru & Mandya') {
          matchesRegion = item.location.includes('Mysuru') || item.location.includes('Srirangapatna');
        } else if (regionFilter === 'Hampi & North Karnataka') {
          matchesRegion = item.location.includes('Hampi') || item.location.includes('Badami');
        } else if (regionFilter === 'Western Ghats & Coorg') {
          matchesRegion = item.location.includes('Coorg') || item.location.includes('Kabini') || item.location.includes('Chikmagalur');
        } else if (regionFilter === 'Coastal Karnataka & Dandeli') {
          matchesRegion = item.location.includes('Dandeli') || item.location.includes('Gokarna');
        } else if (regionFilter === 'Bengaluru Tech') {
          matchesRegion = item.location.includes('Bengaluru');
        }
      }

      return matchesCategory && matchesRegion;
    });
  }, [activeCategory, regionFilter]);

  const handleHeroSearch = (region: string, category: string, _duration: string) => {
    setRegionFilter(region);
    setActiveCategory(category as DestinationCategory);
  };

  const handleOpenBooking = (destinationTitle?: string, tripType?: string) => {
    setBookingDestinationTitle(destinationTitle);
    setBookingTripType(tripType || 'Educational Trips');
    setBookingNote(undefined);
    setIsBookingOpen(true);
  };

  const handleCustomQuoteRequest = (config: CustomTripState, calculatedPriceInr: number) => {
    const dest = DESTINATIONS.find((d) => d.id === config.destinationId);
    const destTitle = dest ? dest.title : 'Custom Karnataka Expedition';
    const totalInr = calculatedPriceInr * config.guestsCount;
    const note = `Custom Group / College Itinerary Request:\n- Service: ${config.tripType}\n- Destination: ${destTitle}\n- Duration: ${config.durationDays} Days\n- Batch Size: ${config.guestsCount} Travelers\n- Transport: ${config.transportType}\n- Inclusions: Factory Passes, Tour Manager, Pushback Coach\n- Estimated Rate: ₹${calculatedPriceInr.toLocaleString('en-IN')} per person (₹${totalInr.toLocaleString('en-IN')} total batch)`;

    setBookingDestinationTitle(destTitle);
    setBookingTripType(config.tripType);
    setBookingNote(note);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 flex flex-col font-sans selection:bg-amber-400 selection:text-slate-950">
      {/* 1. Sticky Navigation Bar with Official Logo, Contact Strip & Working Mobile Menu */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Experience Flow */}
      <main className="flex-grow">
        {/* 2. Homepage Hero Section: Every Journey Is an Opportunity to Learn */}
        <Hero
          onSearch={handleHeroSearch}
          onOpenBooking={handleOpenBooking}
        />

        {/* 3. About NRej Travelling Agency (Section 5) */}
        <AboutSection onOpenBooking={() => handleOpenBooking()} />

        {/* 4. Our Main Services (Section 6) */}
        <ServicesSection onOpenBooking={handleOpenBooking} />

        {/* 5. Educational Trips Section (Section 7) */}
        <EducationalTripsSection onOpenBooking={handleOpenBooking} />

        {/* 6. Industry Visits (IV) Section (Section 8) */}
        <IndustryVisitsSection onOpenBooking={handleOpenBooking} />

        {/* 7. Karnataka Special Circuits & Tour Packages (Section 9) */}
        <TrendingSection
          destinations={filteredDestinations}
          activeCategory={activeCategory}
          onSelectCategory={(cat) => {
            setActiveCategory(cat);
            setRegionFilter('All');
          }}
          onViewDetails={(dest) => setSelectedDestinationForModal(dest)}
          onBook={(title, tripType) => handleOpenBooking(title, tripType)}
        />

        {/* 8. Photo Gallery: Recent Successful Industrial Visits & Heritage Trips (Section 10) */}
        <PhotoGallery onOpenBooking={handleOpenBooking} />

        {/* 9. Interactive Trip Customizer & Live Estimator in INR (₹) */}
        <CustomTripBuilder onRequestQuote={handleCustomQuoteRequest} />

        {/* 10. Why NRej Travelling Agency: Authentic Strengths & Logistics Standards */}
        <WhyNREJ />

        {/* 11. Validated Contact & Tour Enquiry Form with Official Business Details */}
        <ContactSection />
      </main>

      {/* 12. Official Footer with Contact Details & Navigation */}
      <Footer onOpenBooking={() => handleOpenBooking()} />

      {/* Floating Quick Action Buttons: WhatsApp & Direct Call Coordinator */}
      <FloatingContactButtons />

      {/* Detailed Itinerary Modal */}
      <ItineraryModal
        destination={selectedDestinationForModal}
        onClose={() => setSelectedDestinationForModal(null)}
        onBook={(title, tripType) => handleOpenBooking(title, tripType)}
      />

      {/* Validated Consultation & Quote Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        prefilledDestination={bookingDestinationTitle}
        prefilledTripType={bookingTripType}
        prefilledNote={bookingNote}
        onClose={() => setIsBookingOpen(false)}
      />
    </div>
  );
}
