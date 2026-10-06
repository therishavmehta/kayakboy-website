import React from 'react';
import { CAMPUS_FACILITIES } from '../data/courses';

export default function CampusSection() {
  return (
    <section id="campus" className="py-16 sm:py-24 border-b border-[#EAE6DF] bg-[#FAF8F5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-1">
            Life at the Club
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading mb-3">
            Campus, Stay & Recovery
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Our riverside campus is designed for recovery after morning surf sessions—ice baths, gym workouts, 
            skate training, and quiet spaces to work remotely.
          </p>
        </div>

        {/* 3 Stay Options with real photos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          <div className="bg-white rounded-2xl overflow-hidden border border-[#EAE6DF]">
            <img src="/assets/surf_3day.jpg" alt="A/C Dorms" className="h-44 w-full object-cover" />
            <div className="p-5">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Stay Option</span>
              <h3 className="font-bold text-base text-slate-900 mt-1 mb-1">A/C Dorms (Mixed & Female)</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                8–14 bed air-conditioned dorms with personal lockers, attached western bathrooms, and quiet hours after 10:30 PM.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden border border-[#EAE6DF]">
            <img src="/assets/surf_5day.jpg" alt="Private Rooms" className="h-44 w-full object-cover" />
            <div className="p-5">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Stay Option</span>
              <h3 className="font-bold text-base text-slate-900 mt-1 mb-1">Private Riverside Rooms</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Ensuite A/C rooms for 2 people with private river-facing balconies. Quiet seclusion after surf training.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden border border-[#EAE6DF]">
            <img src="/assets/explore_kayak.jpg" alt="Riverside Camping" className="h-44 w-full object-cover" />
            <div className="p-5">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Stay Option</span>
              <h3 className="font-bold text-base text-slate-900 mt-1 mb-1">Riverside Tent Camping</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Tents and mats on our 2-acre private riverfront. Access to 6 outdoor western washrooms and clubhouse facilities.
              </p>
            </div>
          </div>

        </div>

        {/* Quick Amenities Pill List */}
        <div className="bg-white rounded-2xl p-6 border border-[#EAE6DF]">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
            Included Clubhouse Amenities:
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-xs">
            {CAMPUS_FACILITIES.map((fac, idx) => (
              <div key={idx} className="bg-[#FAF8F5] p-3 rounded-xl border border-[#EAE6DF]">
                <strong className="block text-slate-900 font-semibold">{fac.title}</strong>
                <span className="text-[11px] text-slate-500">{fac.note}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
