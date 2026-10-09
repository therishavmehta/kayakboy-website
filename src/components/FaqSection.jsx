'use client';

import React, { useState } from 'react';
import { FAQS } from '../data/courses';
import { Plus, Minus, MapPin, MessageCircle, ArrowUpRight } from 'lucide-react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 border-b border-[#EAE6DF] bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block">
              Good to Know
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 font-heading">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Essential details on gear, safety, payment, and reaching the club.
            </p>

            <div className="pt-4 border-t border-[#EAE6DF] space-y-3">
              <a
                href="https://maps.app.goo.gl/meHJH5jFaAwCADLz5"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-800 hover:text-slate-900"
              >
                <MapPin className="w-4 h-4 text-slate-500" />
                <span>Mulki, Karnataka (Google Maps)</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              </a>

              <div>
                <a
                  href="https://wa.me/918722846295"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-800 hover:text-emerald-950"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>WhatsApp: +91 8722846295</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Accordion */}
          <div className="lg:col-span-8 space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openIndex === idx;

              return (
                <div
                  key={idx}
                  className="border border-[#EAE6DF] rounded-xl overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggle(idx)}
                    className="w-full text-left p-4.5 flex items-center justify-between gap-4 font-bold text-slate-900 text-sm cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <span className="text-slate-400">
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-4.5 pb-4.5 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
