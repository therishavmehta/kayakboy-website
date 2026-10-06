'use client';

import React, { useState } from 'react';
import { SURF_COURSES, KAYAK_TRIPS, PRO_ACADEMY } from '../data/courses';
import { X, ArrowRight, MessageCircle, ExternalLink } from 'lucide-react';

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
      ticketShifuUrl: c.ticketShifuUrl
    })),
    ...KAYAK_TRIPS.map(k => ({
      id: k.id,
      category: 'River Kayaking',
      title: `${k.title} (${k.duration})`,
      price: k.price,
      advance: k.advance,
      tiers: null,
      ticketShifuUrl: 'https://ticketshifu.com/events/kayakboy'
    })),
    ...PRO_ACADEMY.map(a => ({
      id: `academy-${a.level}`,
      category: 'Pro Academy',
      title: `${a.level}: ${a.title}`,
      price: a.price,
      advance: 3000,
      tiers: null,
      ticketShifuUrl: 'https://ticketshifu.com/events/kayakboy'
    }))
  ];

  const defaultId = initialItem?.id || (initialItem?.level ? `academy-${initialItem.level}` : 'surf-5-day');
  const [selectedId, setSelectedId] = useState(defaultId);
  const [selectedTierIdx, setSelectedTierIdx] = useState(0);
  const [date, setDate] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split('T')[0];
  });
  const [slot, setSlot] = useState('06:30 AM (Morning Swell)');
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
    const text = `Hi KayakBoy Mulki! I would like to book:\n\n` +
      `• Course: ${currentActivity.title}${tierText}\n` +
      `• Date: ${date} (${slot})\n` +
      `• Guests: ${guests}\n` +
      `• Name: ${name || 'Guest'}\n` +
      `• Phone: ${phone || 'Not provided'}\n` +
      (notes ? `• Notes: ${notes}\n` : '') +
      `\nEstimated Total: ₹${grandTotal.toLocaleString()} (Deposit: ₹${advancePayable.toLocaleString()} | Check-in balance: ₹${balanceAtVenue.toLocaleString()})\n\n` +
      `Please let me know if this slot is available.`;

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
              Reserve Session / Stay
            </h3>
            <p className="text-xs text-slate-500">
              Mulki, Karnataka • Pay deposit online, balance via UPI at check-in
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-md text-slate-400 hover:text-slate-700 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleWhatsAppBooking} className="p-5 space-y-4 text-xs sm:text-sm">
          
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
              <optgroup label="Surfing">
                {activities.filter(a => a.category === 'Surfing').map(a => (
                  <option key={a.id} value={a.id}>{a.title}</option>
                ))}
              </optgroup>
              <optgroup label="River Kayaking">
                {activities.filter(a => a.category === 'River Kayaking').map(a => (
                  <option key={a.id} value={a.id}>{a.title}</option>
                ))}
              </optgroup>
              <optgroup label="Pro Academy">
                {activities.filter(a => a.category === 'Pro Academy').map(a => (
                  <option key={a.id} value={a.id}>{a.title}</option>
                ))}
              </optgroup>
            </select>
          </div>

          {/* Tier picker if available */}
          {currentActivity.tiers && (
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Accommodation Option
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

          {/* Date, Slot & Guests in a clean row */}
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
                <option value="06:30 AM (Morning Swell)">6:30 AM (Morning)</option>
                <option value="07:00 AM (Early Batch)">7:00 AM</option>
                <option value="09:00 AM (River Batch)">9:00 AM</option>
                <option value="03:30 PM (Sunset Batch)">3:30 PM (Sunset)</option>
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

          {/* Guest Contact */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Your Name
              </label>
              <input
                type="text"
                required
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
                required
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
              <span>Total for {guests} {guests > 1 ? 'guests' : 'guest'} (GST included):</span>
              <span className="font-bold text-slate-900">₹{grandTotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-slate-800 font-semibold border-t border-[#EAE6DF] pt-1.5">
              <span>Online advance deposit:</span>
              <span className="text-slate-900 font-bold">₹{advancePayable.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-[11px] text-slate-500">
              <span>Balance due at check-in (UPI):</span>
              <span>₹{balanceAtVenue.toLocaleString()}</span>
            </div>
          </div>

          {/* Actions */}
          <div className="space-y-2 pt-1">
            <button
              type="submit"
              className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs py-3 px-4 rounded-xl transition-colors cursor-pointer flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Confirm & Inquire on WhatsApp</span>
            </button>

            {currentActivity.ticketShifuUrl && (
              <a
                href={currentActivity.ticketShifuUrl}
                target="_blank"
                rel="noreferrer"
                className="block text-center text-[11px] text-slate-500 hover:text-slate-800 py-1"
              >
                Prefer to book on existing TicketShifu portal? Open TicketShifu ↗
              </a>
            )}
          </div>

        </form>

      </div>
    </div>
  );
}
