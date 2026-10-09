import React from 'react';
import { KAYAK_TRIPS, BOOKINGSUTRA_CLUB_URL } from '../data/courses';
import { Clock, MapPin, ArrowRight, ExternalLink } from 'lucide-react';

export default function KayakingSection() {
  return (
    <section id="kayaking" className="py-16 sm:py-24 border-b border-[#EAE6DF] bg-[#FAF8F5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-1">
              River Shambhavi & Backwaters
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
              Kayaking & River Activities
            </h2>
          </div>
          <div className="mt-3 sm:mt-0 text-left sm:text-right">
            <p className="text-sm text-slate-600 max-w-md">
              Clean mangrove waterways, motorboat wake surfing & night bioluminescence.
            </p>
            <a
              href={BOOKINGSUTRA_CLUB_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-xs font-semibold text-slate-900 hover:underline mt-1"
            >
              <span>Explore live slots on BookingSutra</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* 3 Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {KAYAK_TRIPS.map((trip) => (
            <div
              key={trip.id}
              className="bg-white border border-[#EAE6DF] rounded-2xl overflow-hidden flex flex-col justify-between hover:border-slate-300 transition-colors shadow-xs"
            >
              <div>
                {/* Photo (Aspect 16/10 matching BookingSutra) */}
                <div className="relative aspect-[16/10] w-full bg-slate-100 overflow-hidden">
                  <img
                    src={trip.image}
                    alt={trip.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>

                <div className="p-5 flex flex-col gap-2">
                  <h3 className="text-base font-bold font-heading text-slate-900 leading-snug">
                    {trip.title}
                  </h3>

                  <div className="flex items-center gap-3 text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>{trip.duration}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>{trip.location}</span>
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed mt-1">
                    {trip.description}
                  </p>

                  <div className="mt-3 pt-3 border-t border-[#EAE6DF]">
                    <span className="text-lg font-extrabold text-slate-900 font-heading block">
                      ₹{trip.price.toLocaleString()}
                    </span>
                    <span className="text-[11px] text-slate-500 block mt-0.5">
                      {trip.advanceNote}
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Action - Direct BookingSutra */}
              <div className="p-5 pt-0">
                <a
                  href={trip.bookingUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs py-2.5 px-3 rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-xs"
                >
                  <span>Book on BookingSutra</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Short Authentic Note */}
        <div className="mt-12 bg-white rounded-2xl p-6 border border-[#EAE6DF] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <div>
            <strong className="text-slate-900 block text-sm mb-0.5">Founded by Sushant, National Whitewater Medalist</strong>
            Pioneered backwater and coastal expeditions in Mulki. Certified life vests and safety guides on all sessions.
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={BOOKINGSUTRA_CLUB_URL}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-slate-900 hover:underline inline-flex items-center gap-1"
            >
              <span>BookingSutra Club Page</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <span className="text-slate-300">•</span>
            <a
              href="https://wa.me/918722846295"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-slate-900 hover:underline"
            >
              WhatsApp Support →
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
