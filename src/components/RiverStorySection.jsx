import React from 'react';

export default function RiverStorySection() {
  return (
    <section id="river-story" className="py-16 sm:py-24 border-b border-[#EAE6DF] bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          
          <div className="md:col-span-6 space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block">
              The Location
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
              River Shambhavi & The Hidden Beach
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              River Shambhavi flows 50 km from the Western Ghats down to the Arabian Sea at Mulki. 
              Because it touches no large cities, the water remains clean, calm, and flanked by thick mangrove canopies.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              Our surf beach sits on a sandbar across the river with <strong>no public motor roads</strong>. 
              While walking there requires a 4 km trek through sand, our club paddles across in just 1 km. 
              Every evening, we paddle out to the sandbar to watch sunset over the Arabian Sea.
            </p>
            <div className="pt-2 text-xs text-slate-500">
              *Note: Peak surf & kayak season runs September through May. The monsoon break takes place mid-May through August.
            </div>
          </div>

          <div className="md:col-span-6">
            <div className="rounded-2xl overflow-hidden border border-[#EAE6DF] bg-slate-100">
              <img
                src="/assets/explore_kayak.jpg"
                alt="River Shambhavi meeting the Arabian Sea"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
