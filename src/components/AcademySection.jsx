import React from 'react';
import { PRO_ACADEMY } from '../data/courses';
import { ArrowRight } from 'lucide-react';

export default function AcademySection({ onSelectAcademyLevel }) {
  return (
    <section id="academy" className="py-16 sm:py-24 border-b border-[#EAE6DF] bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-1">
            Advanced Training
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading mb-3">
            Sea Kayaking & Wave Surfing Academy
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            For paddlers looking to master eskimo rolls, sit-in spraydecks, open sea rescue, and ocean swell navigation.
          </p>
        </div>

        {/* 4 Levels Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PRO_ACADEMY.map((level, idx) => (
            <div
              key={idx}
              className="bg-[#FAF8F5] border border-[#EAE6DF] rounded-2xl p-5 flex flex-col justify-between hover:border-slate-300 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                  <span className="font-bold text-slate-900">{level.level}</span>
                  <span>{level.duration}</span>
                </div>
                
                <h3 className="font-bold text-base font-heading text-slate-900 mb-1">
                  {level.title}
                </h3>

                <div className="text-lg font-extrabold text-slate-900 font-heading mb-3">
                  ₹{level.price.toLocaleString()}
                </div>

                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  {level.summary}
                </p>
              </div>

              <button
                onClick={() => onSelectAcademyLevel(level)}
                className="w-full bg-white hover:bg-slate-900 hover:text-white text-slate-800 font-medium text-xs py-2 px-3 rounded-xl border border-slate-300 transition-all cursor-pointer flex items-center justify-center gap-1"
              >
                <span>Enroll (₹{level.price.toLocaleString()})</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
