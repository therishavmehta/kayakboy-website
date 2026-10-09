import React from 'react';
import { ArrowRight, MapPin } from 'lucide-react';
import { PRESS_ITEMS, BOOKINGSUTRA_CLUB_URL } from '../data/courses';

export default function Hero({ onScrollTo }) {
  return (
    <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 border-b border-[#EAE6DF] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Direct, human copy */}
          <div className="lg:col-span-7">
            
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#A0522D] bg-[#F4ECE4] px-3 py-1 rounded-full mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D9532F]"></span>
              Mulki, Karnataka
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.08] mb-5 tracking-tight font-heading">
              Surf warm waves. <br />
              Paddle calm rivers. <br />
              Stay by the water.
            </h1>

            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed mb-8 max-w-xl">
              Mulki’s shallow sandbar creates the gentlest, safest waves in India. 
              Join our daily morning surf lessons, paddle the backwaters of River Shambhavi, 
              or stay at our riverside surf club.
            </p>

            <div className="flex flex-wrap items-center gap-3 mb-10">
              <a
                href={BOOKINGSUTRA_CLUB_URL}
                target="_blank"
                rel="noreferrer"
                className="bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm px-6 py-3.5 rounded-full shadow-sm transition-all cursor-pointer flex items-center gap-2"
              >
                <span>Book on BookingSutra</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={() => onScrollTo('surfing')}
                className="bg-white hover:bg-slate-50 text-slate-700 font-medium text-sm px-5 py-3.5 rounded-full border border-slate-300 transition-colors cursor-pointer"
              >
                View Surf Courses
              </button>
            </div>

            {/* Crisp trust markers */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-500 font-medium pt-6 border-t border-[#EAE6DF]">
              <span>✓ 2,000+ surfers coached</span>
              <span>✓ No swimming required for beginners</span>
              <span>✓ Riverfront A/C stay + ice bath</span>
            </div>

          </div>

          {/* Right Column: Authentic Photography */}
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-slate-200 shadow-md border border-[#EAE6DF] relative">
              <img
                src="/assets/five_days_surfing.jpg"
                alt="Surfing in Mulki at KayakBoy"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-xl border border-slate-200/80 text-xs">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900">River Shambhavi Sandbar</span>
                  <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">Open Daily</span>
                </div>
                <div className="text-slate-500 text-[11px] mt-0.5">Waist-deep water • Sandy bottom • Safe for first-timers</div>
              </div>
            </div>
          </div>

        </div>

        {/* Minimal Press Strip */}
        <div className="mt-16 pt-8 border-t border-[#EAE6DF] flex flex-wrap items-center justify-between gap-6">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Featured In
          </span>
          <div className="flex flex-wrap items-center gap-8 sm:gap-12 opacity-70 grayscale hover:grayscale-0 transition-all">
            {PRESS_ITEMS.map((item, idx) => (
              <a key={idx} href={item.link} target="_blank" rel="noreferrer">
                <img src={item.logo} alt={item.name} className="h-6 w-auto object-contain" />
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
