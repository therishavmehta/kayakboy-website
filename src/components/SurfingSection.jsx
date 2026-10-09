import React from 'react';
import { SURF_COURSES, BOOKINGSUTRA_CLUB_URL } from '../data/courses';
import { ArrowRight, Check, ExternalLink } from 'lucide-react';

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
              Surf Lessons & Immersion Camps
            </h2>
          </div>
          <div className="mt-3 sm:mt-0 text-left sm:text-right">
            <p className="text-sm text-slate-600 max-w-md">
              Morning ocean waves at Mulki's shallow sandbar. All bookings managed exclusively via BookingSutra.
            </p>
            <a
              href={BOOKINGSUTRA_CLUB_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-xs font-semibold text-slate-900 hover:underline mt-1"
            >
              <span>View all dates on BookingSutra</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* 4 Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SURF_COURSES.map((course) => {
            const isFeatured = course.tag === 'Flagship Course';

            return (
              <div
                key={course.id}
                className={`bg-white rounded-2xl overflow-hidden flex flex-col justify-between transition-shadow ${
                  isFeatured
                    ? 'border-2 border-slate-900 shadow-md ring-1 ring-slate-900/10'
                    : 'border border-[#EAE6DF] hover:shadow-sm'
                }`}
              >
                <div>
                  {/* Photo & Tag */}
                  <div className="relative h-48 bg-slate-100 overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md text-slate-800 text-[11px] font-bold px-2.5 py-1 rounded-md">
                      {course.duration}
                    </div>
                    {course.tag && (
                      <div className={`absolute top-3 right-3 text-[10px] font-bold px-2 py-0.5 rounded-md ${
                        isFeatured 
                          ? 'bg-slate-900 text-white' 
                          : 'bg-white/90 backdrop-blur-md text-slate-700'
                      }`}>
                        {course.tag}
                      </div>
                    )}
                  </div>

                  {/* Body */}
                  <div className="p-5">
                    <h3 className="text-lg font-bold font-heading text-slate-900 mb-1.5 leading-snug">
                      {course.title}
                    </h3>
                    <p className="text-xs text-slate-500 mb-4 leading-relaxed line-clamp-3">
                      {course.subtitle}
                    </p>

                    {/* Price Block */}
                    <div className="bg-[#FAF8F5] rounded-xl p-3 border border-[#EAE6DF] mb-4">
                      <div className="flex items-baseline justify-between">
                        <span className="text-xl font-extrabold text-slate-900 font-heading">
                          ₹{course.price.toLocaleString()}
                        </span>
                        <span className="text-[11px] text-slate-500">
                          {course.tiers ? 'starts from' : 'per person'}
                        </span>
                      </div>
                      <div className="text-[11px] text-slate-600 mt-1 pt-1 border-t border-[#EAE6DF]">
                        <strong>₹{course.advance.toLocaleString()}</strong> deposit online • balance on spot (UPI)
                      </div>
                    </div>

                    {/* What's included */}
                    <ul className="space-y-1.5 text-xs text-slate-600 mb-5">
                      {course.perks.slice(0, 4).map((p, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <Check className="w-3.5 h-3.5 text-slate-900 shrink-0 mt-0.5" />
                          <span className="leading-tight">{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Action - Direct BookingSutra */}
                <div className="p-5 pt-0">
                  <a
                    href={course.bookingUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs py-3 px-3 rounded-xl transition-colors flex items-center justify-center gap-1.5 shadow-xs"
                  >
                    <span>Book on BookingSutra</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
