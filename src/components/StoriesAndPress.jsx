'use client';

import React, { useState } from 'react';
import { ArrowUpRight, X } from 'lucide-react';

export default function StoriesAndPress() {
  const [activeStory, setActiveStory] = useState(null);

  const stories = [
    {
      title: "River Sita, Udupi",
      excerpt: "Paddling from the Arabian Sea upriver to the foothills of Agumbe through mangrove canopies.",
      image: "/assets/story_sita.png",
      full: "We launched our expedition kayaks near the Arabian Sea at Udupi and tracked upstream into River Sita. Over two days of continuous paddling against calm currents, we navigated into the lush foothills of Agumbe where the water gave way to clear rocky mountain pools."
    },
    {
      title: "Uninhabited Island in Arabian Sea",
      excerpt: "Open ocean expedition in high-buoyancy sea kayaks to an isolated rocky volcanic islet.",
      image: "/assets/story_rock.png",
      full: "Armed with marine VHF radios, compasses, and sea kayaks, our crew launched off the Karnataka coast into open sea swells. Reaching and safely landing on the uninhabited rocky island proved the value of ocean respect and focused preparation."
    },
    {
      title: "My First Solo Kayak Trip",
      excerpt: "How commuting past River Shambhavi for 8 years sparked the founding of KayakBoy.",
      image: "/assets/story_solo.png",
      full: "I watched River Shambhavi for 8 years during my college engineering commute from Nitte to Mangalore. On hot summer bus rides, looking out at the turquoise water inspired me to put a kayak in the water—which grew into our surf and paddle club today."
    }
  ];

  return (
    <section id="stories" className="py-16 sm:py-24 border-b border-[#EAE6DF] bg-[#FAF8F5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-1">
              Field Chronicles
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
              Stories from the Water
            </h2>
          </div>
          <p className="text-sm text-slate-500 mt-2 sm:mt-0">
            True expeditions along Karnataka's coastline.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stories.map((s, idx) => (
            <div
              key={idx}
              onClick={() => setActiveStory(s)}
              className="bg-white border border-[#EAE6DF] rounded-2xl overflow-hidden hover:border-slate-300 transition-colors cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <img src={s.image} alt={s.title} className="h-44 w-full object-cover" />
                <div className="p-5">
                  <h3 className="font-bold text-base text-slate-900 group-hover:text-slate-700 transition-colors mb-1.5 flex items-center justify-between">
                    <span>{s.title}</span>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-slate-900" />
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {s.excerpt}
                  </p>
                </div>
              </div>
              <div className="px-5 pb-5 text-[11px] font-semibold text-slate-500">
                Read chronicle →
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Story Reader Modal */}
      {activeStory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 relative border border-[#EAE6DF] shadow-xl">
            <button
              onClick={() => setActiveStory(null)}
              className="absolute top-4 right-4 p-1 rounded-md text-slate-400 hover:text-slate-700 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="font-bold text-xl text-slate-900 mb-3">{activeStory.title}</h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-6">{activeStory.full}</p>
            <button
              onClick={() => setActiveStory(null)}
              className="w-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-medium text-xs py-2.5 rounded-xl cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
