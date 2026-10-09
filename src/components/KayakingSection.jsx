import React from 'react';
import { KAYAK_TRIPS, BOOKINGSUTRA_CLUB_URL } from '../data/courses';
import { ArrowRight, Clock, Sparkles, ExternalLink } from 'lucide-react';

export default function KayakingSection({ onSelectKayakTrip }) {
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
                {/* Photo & Badges */}
                <div className="relative h-52 bg-slate-100 overflow-hidden">
                  <img
                    src={trip.image}
                    alt={trip.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md text-slate-800 text-[11px] font-bold px-2.5 py-1 rounded-md flex items-center gap-1">
                    <Clock className="w-3 h-3 text-slate-500" />
                    {trip.duration}
                  </div>
                  {trip.tag && (
                    <div className="absolute top-3 right-3 bg-slate-900 text-white text-[10px] font-bold px-2.5 py-1 rounded-md flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-amber-300" />
                      {trip.tag}
                    </div>
                  )}
                </div>

                <div className="p-6">
                  {/* Title & Price */}
                  <div className="flex items-baseline justify-between mb-2 gap-2">
                    <h3 className="text-lg font-bold font-heading text-slate-900">
                      {trip.title}
                    </h3>
                    <div className="text-right shrink-0">
                      <span className="text-xl font-bold text-slate-900 font-heading block">
                        ₹{trip.price}
                      </span>
                      <span className="text-[10px] text-slate-500 block">
                        ₹{trip.advance} online deposit
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {trip.summary}
                  </p>

                  {/* Highlights and Inclusions */}
                  <div className="text-[11px] text-slate-600 bg-[#FAF8F5] p-3 rounded-xl border border-[#EAE6DF] space-y-1.5 mb-2">
                    <div><strong>Timing:</strong> {trip.schedule}</div>
                    <div><strong>Includes:</strong> {trip.includes}</div>
                    {trip.highlights && trip.highlights[0] && (
                      <div className="text-emerald-700 font-medium pt-1 border-t border-[#EAE6DF]">
                        {trip.highlights[0]}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Actions */}
              <div className="p-6 pt-0 space-y-2">
                <button
                  onClick={() => onSelectKayakTrip(trip)}
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs py-2.5 px-4 rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <span>Book Activity</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href={trip.bookingUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full block text-center text-[11px] font-medium text-slate-500 hover:text-slate-900 py-1 transition-colors"
                >
                  Direct Book on BookingSutra ↗
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
