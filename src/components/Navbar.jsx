'use client';

import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { BOOKINGSUTRA_CLUB_URL } from '../data/courses';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { name: "Surfing", href: "#surfing" },
    { name: "River Kayak", href: "#kayaking" },
    { name: "Academy", href: "#academy" },
    { name: "Campus & Stay", href: "#campus" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#EAE6DF]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        
        {/* Brand */}
        <a href="#" className="flex items-center gap-2.5">
          <img 
            src="/assets/kayakboy_logo.png" 
            alt="KayakBoy" 
            className="h-9 w-9 object-contain"
          />
          <div className="leading-none">
            <span className="font-heading font-bold text-lg text-slate-900 tracking-tight block">
              KAYAKBOY
            </span>
            <span className="text-[10px] uppercase font-semibold text-slate-500 tracking-widest block">
              Surf Club • Mulki
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-7">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="https://wa.me/918722846295"
            target="_blank"
            rel="noreferrer"
            className="text-xs font-semibold text-slate-600 hover:text-slate-900 px-3 py-2 transition-colors"
          >
            WhatsApp +91 8722846295
          </a>

          <a
            href={BOOKINGSUTRA_CLUB_URL}
            target="_blank"
            rel="noreferrer"
            className="bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs px-4 py-2.5 rounded-full transition-colors cursor-pointer inline-flex items-center gap-1"
          >
            <span>Book on BookingSutra</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href={BOOKINGSUTRA_CLUB_URL}
            target="_blank"
            rel="noreferrer"
            className="bg-slate-900 text-white font-medium text-xs px-3.5 py-1.5 rounded-full sm:hidden cursor-pointer"
          >
            Book
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-slate-700 hover:text-slate-900 cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF8F5] border-b border-[#EAE6DF] px-6 py-4 space-y-3">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-slate-700 hover:text-slate-900 py-1"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 border-t border-[#EAE6DF] flex flex-col gap-2">
            <a
              href={BOOKINGSUTRA_CLUB_URL}
              target="_blank"
              rel="noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full bg-slate-900 text-white font-medium text-xs py-2.5 rounded-xl flex items-center justify-center gap-1 cursor-pointer"
            >
              <span>Book on BookingSutra</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://wa.me/918722846295"
              target="_blank"
              rel="noreferrer"
              className="text-center text-xs font-semibold text-emerald-800 py-2"
            >
              Chat on WhatsApp (+91 8722846295)
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
