import React from 'react';
import { SURF_COURSES, BOOKINGSUTRA_CLUB_URL } from '../data/courses';
import { Clock, MapPin, ArrowRight, ExternalLink } from 'lucide-react';

export default function SurfingSection() {
  return (
    <section id="surfing" className="py-16 sm:py-24 border-b border-[#EAE6DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-1">
              Mulki Surf School & Stays
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
              Surf Lessons & Stays
            </h2>
          </div>
          <div className="mt-3 sm:mt-0 text-left sm:text-right">
            <p className="text-sm text-slate-600 max-w-md">
              Morning ocean waves at Mulki's shallow sandbar. All bookings managed via BookingSutra.
            </p>
            <a
              href={BOOKINGSUTRA_CLUB_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-xs font-semibold text-slate-900 hover:underline mt-1"
            >
              <span>View all events on BookingSutra</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* 4 Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SURF_COURSES.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl overflow-hidden border border-[#EAE6DF] hover:border-slate-300 transition-all flex flex-col justify-between shadow-xs"
            >
              <div>
                {/* Photo (Aspect 16/10 matching BookingSutra) */}
                <div className="relative aspect-[16/10] w-full bg-slate-100 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>

                {/* Body */}
                <div className="p-5 flex flex-col gap-2">
                  <h3 className="text-base font-bold font-heading text-slate-900 leading-snug">
                    {course.title}
                  </h3>

                  <div className="flex items-center gap-3 text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>{course.duration}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>{course.location}</span>
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed mt-1">
                    {course.description}
                  </p>

                  <div className="mt-3 pt-3 border-t border-[#EAE6DF]">
                    <span className="text-lg font-extrabold text-slate-900 font-heading block">
                      ₹{course.price.toLocaleString()}
                    </span>
                    <span className="text-[11px] text-slate-500 block mt-0.5">
                      {course.advanceNote}
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Action */}
              <div className="p-5 pt-0">
                <a
                  href={course.bookingUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs py-2.5 px-3 rounded-xl transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Book on BookingSutra</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
