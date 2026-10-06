import React from 'react';
import { SURF_COURSES } from '../data/courses';
import { ArrowRight, Check, ExternalLink } from 'lucide-react';

export default function SurfingSection({ onSelectCourse }) {
  return (
    <section id="surfing" className="py-16 sm:py-24 border-b border-[#EAE6DF]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-1">
              Mulki Surf School
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
              Surf Lessons & Camps
            </h2>
          </div>
          <p className="text-sm text-slate-600 mt-2 sm:mt-0 max-w-md">
            Morning ocean lessons at Mulki's sandy beach. Digital payments only.
          </p>
        </div>

        {/* 3 Course Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SURF_COURSES.map((course) => {
            const isFeatured = course.id === 'surf-5-day';

            return (
              <div
                key={course.id}
                className={`bg-white rounded-2xl overflow-hidden flex flex-col justify-between transition-shadow ${
                  isFeatured
                    ? 'border-2 border-slate-900 shadow-md'
                    : 'border border-[#EAE6DF] hover:shadow-sm'
                }`}
              >
                <div>
                  {/* Photo & Tag */}
                  <div className="relative h-52 bg-slate-100 overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-slate-800 text-[11px] font-bold px-2.5 py-1 rounded-md">
                      {course.duration}
                    </div>
                    {isFeatured && (
                      <div className="absolute top-3 right-3 bg-slate-900 text-white text-[11px] font-bold px-2.5 py-1 rounded-md">
                        Flagship
                      </div>
                    )}
                  </div>

                  {/* Body */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold font-heading text-slate-900 mb-1">
                      {course.title}
                    </h3>
                    <p className="text-xs text-slate-500 mb-5 leading-relaxed">
                      {course.subtitle}
                    </p>

                    {/* Price Block */}
                    <div className="bg-[#FAF8F5] rounded-xl p-3.5 border border-[#EAE6DF] mb-5">
                      <div className="flex items-baseline justify-between">
                        <span className="text-2xl font-extrabold text-slate-900 font-heading">
                          ₹{course.price.toLocaleString()}
                        </span>
                        <span className="text-xs text-slate-500">
                          {course.tiers ? 'starts from / person' : 'per person (GST inc)'}
                        </span>
                      </div>
                      <div className="text-[11px] text-slate-600 mt-1.5 pt-1.5 border-t border-[#EAE6DF]">
                        <strong>₹{course.advance.toLocaleString()}</strong> deposit online • balance at check-in (UPI)
                      </div>
                    </div>

                    {/* What's included */}
                    <ul className="space-y-2 text-xs text-slate-600 mb-6">
                      {course.perks.map((p, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-slate-900 shrink-0 mt-0.5" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="p-6 pt-0 space-y-2">
                  <button
                    onClick={() => onSelectCourse(course)}
                    className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs py-3 px-4 rounded-xl transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <span>Book This Course</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={course.ticketShifuUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full block text-center text-[11px] text-slate-400 hover:text-slate-700 py-1"
                  >
                    View on TicketShifu ↗
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
