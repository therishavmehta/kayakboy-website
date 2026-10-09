'use client';

import React from 'react';
import { ArrowUp, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#FAF8F5] border-t border-[#EAE6DF] text-slate-600 text-xs py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 pb-10 border-b border-[#EAE6DF]">
          
          <div className="space-y-3 max-w-sm">
            <div className="flex items-center gap-2.5">
              <img src="/assets/kayakboy_logo.png" alt="KayakBoy" className="h-9 w-9 object-contain" />
              <div>
                <span className="font-heading font-bold text-base text-slate-900 tracking-tight block">
                  KAYAKBOY
                </span>
                <span className="text-[10px] uppercase font-semibold text-slate-500 tracking-widest block">
                  Surf Club • Mulki
                </span>
              </div>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              Mulki Sports & Adventure School Pvt Ltd. Flatwater river expeditions and coastal surf school on River Shambhavi.
            </p>
            <div className="text-[11px] text-slate-500">
              Payments: 100% Digital via UPI. No cash transactions.
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-xs">
            <div>
              <span className="font-bold text-slate-900 block mb-2.5">Surf & Water Programs</span>
              <ul className="space-y-1.5 text-slate-500">
                <li><a href="#surfing" className="hover:text-slate-900">1-Day Intro Surf (₹1,750)</a></li>
                <li><a href="#surfing" className="hover:text-slate-900">3-Day Surf + Stay (₹7,100)</a></li>
                <li><a href="#surfing" className="hover:text-slate-900">5-Day Immersion (₹11,000)</a></li>
                <li><a href="#surfing" className="hover:text-slate-900">7-Day Transformation (₹15,500)</a></li>
                <li><a href="#kayaking" className="hover:text-slate-900">1-Hr Mangrove Kayak (₹400)</a></li>
                <li><a href="#kayaking" className="hover:text-slate-900">Wake Surfing (₹885)</a></li>
                <li><a href="#kayaking" className="hover:text-slate-900">Bioluminescence (₹750)</a></li>
              </ul>
            </div>

            <div>
              <span className="font-bold text-slate-900 block mb-2.5">Clubhouse & Stays</span>
              <ul className="space-y-1.5 text-slate-500">
                <li><a href="#campus" className="hover:text-slate-900">A/C Dorms & Rooms</a></li>
                <li><a href="#campus" className="hover:text-slate-900">Ice Bath & Gym</a></li>
                <li><a href="#campus" className="hover:text-slate-900">Skate Ramp & Wi-Fi</a></li>
                <li><a href="#academy" className="hover:text-slate-900">Pro Kayak Academy</a></li>
                <li>
                  <a
                    href="https://bookingsutra.com/kayakboy-surf-club"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 hover:text-slate-900 font-semibold text-slate-700"
                  >
                    <span>BookingSutra Portal</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  </a>
                </li>
                <li><a href="#faq" className="hover:text-slate-900">FAQs</a></li>
              </ul>
            </div>

            <div>
              <span className="font-bold text-slate-900 block mb-2.5">Visit & Connect</span>
              <ul className="space-y-1.5 text-slate-500">
                <li>
                  <a
                    href="https://maps.app.goo.gl/meHJH5jFaAwCADLz5"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 hover:text-slate-900"
                  >
                    <span>Mulki, Karnataka</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/918722846295"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-slate-900"
                  >
                    +91 8722846295
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/mulki.in"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 hover:text-slate-900"
                  >
                    <span>@mulki.in</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/kayak.boy"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 hover:text-slate-900"
                  >
                    <span>@kayak.boy</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            © {new Date().getFullYear()} KayakBoy Surf Club. All rights reserved.
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 hover:text-slate-700 transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>

      </div>
    </footer>
  );
}
