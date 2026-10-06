'use client';

import React, { useState } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import SurfingSection from './SurfingSection';
import KayakingSection from './KayakingSection';
import AcademySection from './AcademySection';
import CampusSection from './CampusSection';
import RiverStorySection from './RiverStorySection';
import StoriesAndPress from './StoriesAndPress';
import FaqSection from './FaqSection';
import Footer from './Footer';
import BookingModal from './BookingModal';
import { MessageCircle } from 'lucide-react';

export default function KayakBoyApp() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedBookingItem, setSelectedBookingItem] = useState(null);

  const handleOpenBooking = (item = null) => {
    setSelectedBookingItem(item);
    setBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setBookingModalOpen(false);
    setSelectedBookingItem(null);
  };

  const handleScrollTo = (elementId) => {
    const el = document.getElementById(elementId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1A1D20] flex flex-col antialiased">
      {/* Navigation */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Main Sections */}
      <main className="flex-1">
        <Hero 
          onOpenBooking={() => handleOpenBooking()} 
          onScrollTo={handleScrollTo} 
        />
        
        <SurfingSection 
          onSelectCourse={(course) => handleOpenBooking(course)} 
        />

        <KayakingSection 
          onSelectKayakTrip={(trip) => handleOpenBooking(trip)} 
        />

        <AcademySection 
          onSelectAcademyLevel={(level) => handleOpenBooking(level)} 
        />

        <CampusSection />

        <RiverStorySection />

        <StoriesAndPress />

        <FaqSection />
      </main>

      {/* Footer */}
      <Footer onOpenBooking={() => handleOpenBooking()} />

      {/* Minimal Booking Engine Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={handleCloseBooking}
        initialItem={selectedBookingItem}
      />

      {/* Mobile Sticky Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-30 bg-[#FAF8F5]/95 backdrop-blur-md border-t border-[#EAE6DF] px-4 py-2.5 sm:hidden flex items-center justify-between gap-2 shadow-sm">
        <a
          href="https://wa.me/918722846295"
          target="_blank"
          rel="noreferrer"
          className="flex-1 bg-white border border-[#EAE6DF] text-slate-700 font-semibold py-2.5 rounded-xl text-xs flex items-center justify-center gap-1.5"
        >
          <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
          <span>WhatsApp</span>
        </a>

        <button
          onClick={() => handleOpenBooking()}
          className="flex-1 bg-slate-900 text-white font-semibold py-2.5 rounded-xl text-xs flex items-center justify-center cursor-pointer"
        >
          Book a Slot
        </button>
      </div>
    </div>
  );
}
