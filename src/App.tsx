/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { IndustrialEducationalSection } from './components/IndustrialEducationalSection';
import { TrendingSection } from './components/TrendingSection';
import { CustomTripBuilder } from './components/CustomTripBuilder';
import { WhyNREJ } from './components/WhyNREJ';
import { ReviewsSection } from './components/ReviewsSection';
import { Footer } from './components/Footer';
import { ItineraryModal } from './components/ItineraryModal';
import { BookingModal } from './components/BookingModal';
import { DESTINATIONS } from './data/destinations';
import { Destination, DestinationCategory, CustomTripState } from './types/travel';

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
    setBookingTripType(tripType || 'Industrial Visit (IV)');
    setBookingNote(undefined);
    setIsBookingOpen(true);
  };

  const handleCustomQuoteRequest = (config: CustomTripState, calculatedPriceInr: number) => {
    const dest = DESTINATIONS.find((d) => d.id === config.destinationId);
    const destTitle = dest ? dest.title : 'Custom Karnataka Expedition';
    const totalInr = calculatedPriceInr * config.guestsCount;
    const note = `Custom Group / College Itinerary Request:\n- Purpose: ${config.tripType}\n- Destination: ${destTitle}\n- Duration: ${config.durationDays} Days\n- Batch Size: ${config.guestsCount} Travelers\n- Tier: ${config.tier}\n- Inclusions: Factory Passes, Certificates, Luxury Coach\n- Estimated Rate: ₹${calculatedPriceInr.toLocaleString('en-IN')} per student/passenger (₹${totalInr.toLocaleString('en-IN')} total batch)`;

    setBookingDestinationTitle(destTitle);
    setBookingTripType(config.tripType);
    setBookingNote(note);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-black text-neutral-100 flex flex-col font-sans selection:bg-amber-400 selection:text-black">
      {/* 3-Zone Top Bar Navigation with Official Logo */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Experience Flow */}
      <main className="flex-grow">
        {/* Hero Section in Pure Black Theme */}
        <Hero
          onSearch={handleHeroSearch}
          onOpenBooking={handleOpenBooking}
        />

        {/* Dedicated Industrial Visits & Educational Tours Division */}
        <IndustrialEducationalSection onOpenBooking={handleOpenBooking} />

        {/* 2026/2027 Karnataka & South India Expeditions */}
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

        {/* Interactive Trip Customizer & Live Estimator */}
        <CustomTripBuilder onRequestQuote={handleCustomQuoteRequest} />

        {/* Asymmetric Bento: Why NREJ & Institutional Standards */}
        <WhyNREJ />

        {/* Verified College & Traveler Reviews */}
        <ReviewsSection />
      </main>

      {/* Pure Black Footer */}
      <Footer onOpenBooking={() => handleOpenBooking()} />

      {/* Itinerary Detail Modal */}
      <ItineraryModal
        destination={selectedDestinationForModal}
        onClose={() => setSelectedDestinationForModal(null)}
        onBook={(title, tripType) => handleOpenBooking(title, tripType)}
      />

      {/* Bespoke Booking & Quotation Modal */}
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
