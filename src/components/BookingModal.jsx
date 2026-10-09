'use client';

import React, { useState } from 'react';
import { SURF_COURSES, KAYAK_TRIPS, PRO_ACADEMY, BOOKINGSUTRA_CLUB_URL } from '../data/courses';
import { X, ArrowRight, MessageCircle, ExternalLink, Calendar, Users, ShieldCheck } from 'lucide-react';

export default function BookingModal({ isOpen, onClose, initialItem }) {
  if (!isOpen) return null;

  const activities = [
    ...SURF_COURSES.map(c => ({
      id: c.id,
      category: 'Surfing',
      title: `${c.title} (${c.duration})`,
      price: c.price,
      advance: c.advance,
      tiers: c.tiers || null,
      bookingUrl: c.bookingUrl
    })),
    ...KAYAK_TRIPS.map(k => ({
      id: k.id,
      category: 'River & Water Activities',
      title: `${k.title} (${k.duration})`,
      price: k.price,
      advance: k.advance,
      tiers: null,
      bookingUrl: k.bookingUrl
    })),
    ...PRO_ACADEMY.map(a => ({
      id: `academy-${a.level}`,
      category: 'Pro Kayak Academy',
      title: `${a.level}: ${a.title}`,
      price: a.price,
      advance: 3000,
      tiers: null,
      bookingUrl: BOOKINGSUTRA_CLUB_URL
    }))
  ];

  const defaultId = initialItem?.id || (initialItem?.level ? `academy-${initialItem.level}` : 'cmuy8ryqp00awqfjv3hkls8k7');
  const [selectedId, setSelectedId] = useState(defaultId);
  const [selectedTierIdx, setSelectedTierIdx] = useState(0);
  const [date, setDate] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split('T')[0];
  });
  const [slot, setSlot] = useState('06:30 AM (Morning Batch)');
  const [guests, setGuests] = useState(1);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');

  const currentActivity = activities.find(a => a.id === selectedId) || activities[0];

  let unitPrice = currentActivity.price;
  let unitAdvance = currentActivity.advance;

  if (currentActivity.tiers && currentActivity.tiers[selectedTierIdx]) {
    unitPrice = currentActivity.tiers[selectedTierIdx].total;
    unitAdvance = currentActivity.tiers[selectedTierIdx].advance;
  }

  const grandTotal = unitPrice * guests;
  const advancePayable = unitAdvance * guests;
  const balanceAtVenue = grandTotal - advancePayable;

  const handleWhatsAppBooking = (e) => {
    e.preventDefault();
    const tierText = currentActivity.tiers ? ` (${currentActivity.tiers[selectedTierIdx].name})` : '';
    const text = `Hi KayakBoy Surf Club Mulki! I would like to book:\n\n` +
      `• Experience: ${currentActivity.title}${tierText}\n` +
      `• Date: ${date} (${slot})\n` +
      `• Guests: ${guests}\n` +
      `• Name: ${name || 'Guest'}\n` +
      `• Phone: ${phone || 'Not provided'}\n` +
      (notes ? `• Notes: ${notes}\n` : '') +
      `\nEstimated Total: ₹${grandTotal.toLocaleString()} (Online Deposit: ₹${advancePayable.toLocaleString()} | Check-in Balance: ₹${balanceAtVenue.toLocaleString()})\n\n` +
      `Booking Link: ${currentActivity.bookingUrl}\n\n` +
      `Please let me know slot availability!`;

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/918722846295?text=${encoded}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs">
      <div className="bg-white rounded-2xl max-w-lg w-full max-h-[92vh] overflow-y-auto border border-[#EAE6DF] shadow-2xl relative">
        
        {/* Modal Header */}
        <div className="p-5 border-b border-[#EAE6DF] flex items-center justify-between">
          <div>
            <h3 className="font-heading font-bold text-lg text-slate-900">
              Reserve Session or Stay
            </h3>
            <p className="text-xs text-slate-500">
              KayakBoy Mulki • BookingSutra deposit online, balance via UPI at camp
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-1 rounded-md text-slate-400 hover:text-slate-700 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-5 space-y-4 text-xs sm:text-sm">
          
          {/* Direct BookingSutra Quick Link Banner */}
          <div className="bg-amber-50/70 border border-amber-200/80 rounded-xl p-3 flex items-center justify-between gap-3 text-xs">
            <div className="text-amber-900">
              <span className="font-bold block">Instant Slot Confirmation</span>
              <span className="text-[11px] text-amber-800">
                Official calendar and real-time slot checkout is live on BookingSutra.
              </span>
            </div>
            <a
              href={currentActivity.bookingUrl}
              target="_blank"
              rel="noreferrer"
              className="shrink-0 bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs px-3 py-2 rounded-lg transition-colors flex items-center gap-1"
            >
              <span>Book Online</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Activity select */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Select Experience
            </label>
            <select
              value={selectedId}
              onChange={(e) => {
                setSelectedId(e.target.value);
                setSelectedTierIdx(0);
              }}
              className="w-full bg-[#FAF8F5] border border-[#EAE6DF] rounded-xl px-3 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900"
            >
              <optgroup label="Surfing Courses">
                {activities.filter(a => a.category === 'Surfing').map(a => (
                  <option key={a.id} value={a.id}>{a.title}</option>
                ))}
              </optgroup>
              <optgroup label="River & Water Activities">
                {activities.filter(a => a.category === 'River & Water Activities').map(a => (
                  <option key={a.id} value={a.id}>{a.title}</option>
                ))}
              </optgroup>
              <optgroup label="Pro Kayak Academy">
                {activities.filter(a => a.category === 'Pro Kayak Academy').map(a => (
                  <option key={a.id} value={a.id}>{a.title}</option>
                ))}
              </optgroup>
            </select>
          </div>

          {/* Tier picker if available */}
          {currentActivity.tiers && (
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Accommodation / Course Option
              </label>
              <div className="grid grid-cols-1 gap-1.5">
                {currentActivity.tiers.map((t, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedTierIdx(idx)}
                    className={`flex items-center justify-between p-2.5 rounded-lg border text-xs text-left cursor-pointer transition-colors ${
                      selectedTierIdx === idx
                        ? 'border-slate-900 bg-[#FAF8F5] font-semibold text-slate-900'
                        : 'border-[#EAE6DF] text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <span>{t.name}</span>
                    <span className="font-bold">₹{t.total.toLocaleString()}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Date, Slot & Guests */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Date
              </label>
              <input
                type="date"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full bg-[#FAF8F5] border border-[#EAE6DF] rounded-xl px-2.5 py-2 text-xs text-slate-900"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Batch
              </label>
              <select
                value={slot}
                onChange={(e) => setSlot(e.target.value)}
                className="w-full bg-[#FAF8F5] border border-[#EAE6DF] rounded-xl px-2.5 py-2 text-xs text-slate-900"
              >
                <option value="06:30 AM (Sunrise / Morning)">6:30 AM (Sunrise)</option>
                <option value="07:30 AM (Morning Swell)">7:30 AM</option>
                <option value="09:00 AM (River Batch)">9:00 AM</option>
                <option value="03:30 PM (Sunset Batch)">3:30 PM (Sunset)</option>
                <option value="04:00 PM (Sunset Paddle)">4:00 PM</option>
                <option value="07:00 PM (Night Bioluminescence)">7:00 PM (Night)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Guests
              </label>
              <div className="flex border border-[#EAE6DF] rounded-xl overflow-hidden bg-[#FAF8F5]">
                {[1, 2, 3, 4].map(num => (
                  <button
                    key={num}
                    type="button"
                    onClick={() => setGuests(num)}
                    className={`flex-1 py-2 text-xs font-bold transition-colors cursor-pointer ${
                      guests === num ? 'bg-slate-900 text-white' : 'text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {num}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <form onSubmit={handleWhatsAppBooking} className="space-y-4 pt-1">
            {/* Guest Contact */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-[#FAF8F5] border border-[#EAE6DF] rounded-xl px-3 py-2 text-xs text-slate-900"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  WhatsApp Phone
                </label>
                <input
                  type="tel"
                  placeholder="+91..."
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-[#FAF8F5] border border-[#EAE6DF] rounded-xl px-3 py-2 text-xs text-slate-900"
                />
              </div>
            </div>

            {/* Price Breakdown */}
            <div className="bg-[#FAF8F5] p-3.5 rounded-xl border border-[#EAE6DF] text-xs space-y-1.5">
              <div className="flex justify-between text-slate-500">
                <span>Total for {guests} {guests > 1 ? 'guests' : 'guest'} (GST inc):</span>
                <span className="font-bold text-slate-900">₹{grandTotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-slate-800 font-semibold border-t border-[#EAE6DF] pt-1.5">
                <span>Online booking advance deposit:</span>
                <span className="text-slate-900 font-bold">₹{advancePayable.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-[11px] text-slate-500">
                <span>Balance due at check-in (UPI only, no cash):</span>
                <span>₹{balanceAtVenue.toLocaleString()}</span>
              </div>
            </div>

            {/* Dual CTAs: BookingSutra Direct + WhatsApp Inquire */}
            <div className="space-y-2 pt-1">
              <a
                href={currentActivity.bookingUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs py-3 px-4 rounded-xl transition-colors cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Book This Slot on BookingSutra</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button
                type="submit"
                className="w-full bg-white hover:bg-slate-50 border border-[#EAE6DF] text-slate-700 font-medium text-xs py-2.5 px-4 rounded-xl transition-colors cursor-pointer flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>Inquire or Custom Request on WhatsApp</span>
              </button>
            </div>
          </form>

        </div>

      </div>
    </div>
  );
}
