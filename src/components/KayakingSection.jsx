import React from 'react';
import { KAYAK_TRIPS } from '../data/courses';
import { ArrowRight, Clock } from 'lucide-react';

export default function KayakingSection({ onSelectKayakTrip }) {
  return (
    <section id="kayaking" className="py-16 sm:py-24 border-b border-[#EAE6DF] bg-[#FAF8F5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-1">
              Flatwater Backwaters
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
              River Shambhavi Trips
            </h2>
          </div>
          <p className="text-sm text-slate-600 mt-2 sm:mt-0 max-w-md">
            Calm, unpolluted waters originating in the Western Ghats.
          </p>
        </div>

        {/* 3 Trips Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {KAYAK_TRIPS.map((trip) => (
            <div
              key={trip.id}
              className="bg-white border border-[#EAE6DF] rounded-2xl overflow-hidden flex flex-col justify-between hover:border-slate-300 transition-colors"
            >
              <div>
                <div className="relative h-48 bg-slate-100 overflow-hidden">
                  <img
                    src={trip.image}
                    alt={trip.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-slate-800 text-[11px] font-bold px-2.5 py-1 rounded-md flex items-center gap-1">
                    <Clock className="w-3 h-3 text-slate-500" />
                    {trip.duration}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-baseline justify-between mb-2">
                    <h3 className="text-lg font-bold font-heading text-slate-900">
                      {trip.title}
                    </h3>
                    <span className="text-lg font-bold text-slate-900 font-heading">
                      ₹{trip.price}
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {trip.summary}
                  </p>

                  <div className="text-[11px] text-slate-500 bg-[#FAF8F5] p-2.5 rounded-lg border border-[#EAE6DF] space-y-1">
                    <div><strong>Slots:</strong> {trip.schedule}</div>
                    <div><strong>Includes:</strong> {trip.includes}</div>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => onSelectKayakTrip(trip)}
                  className="w-full bg-slate-100 hover:bg-slate-900 hover:text-white text-slate-800 font-medium text-xs py-2.5 px-4 rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <span>Book Trip (₹{trip.price})</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Short Authentic Note */}
        <div className="mt-12 bg-white rounded-2xl p-6 border border-[#EAE6DF] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <div>
            <strong className="text-slate-900 block text-sm mb-0.5">Founded by Sushant, Whitewater Silver Medalist</strong>
            Pioneered flatwater kayaking in Karnataka. All trips include certified life jackets and local guides.
          </div>
          <a
            href="https://wa.me/918722846295"
            target="_blank"
            rel="noreferrer"
            className="shrink-0 font-semibold text-slate-900 hover:underline"
          >
            Custom group inquiries →
          </a>
        </div>

      </div>
    </section>
  );
}
