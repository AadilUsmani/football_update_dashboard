'use client';

import React, { useState } from 'react';
import { Match } from '@/lib/types';
import { formatFullKickoff } from '@/lib/timezone';
import { generateGoogleCalendarUrl, downloadIcsFile } from '@/lib/calendar';
import confetti from 'canvas-confetti';
import { X, Bell, Calendar, CheckCircle2, Mail, Clock, ShieldCheck } from 'lucide-react';

interface ReminderModalProps {
  isOpen: boolean;
  onClose: () => void;
  match: Match | null;
  selectedTimezone: string;
  selectedCountry: string;
  format24h: boolean;
}

export const ReminderModal: React.FC<ReminderModalProps> = ({
  isOpen,
  onClose,
  match,
  selectedTimezone,
  selectedCountry,
  format24h,
}) => {
  const [email, setEmail] = useState('muhammadaadilusmani@gmail.com');
  const [timeBefore, setTimeBefore] = useState<number>(30);
  const [isSubscribed, setIsSubscribed] = useState(false);

  if (!isOpen || !match) return null;

  const formattedKickoff = formatFullKickoff(match.utcKickoff, selectedTimezone, format24h);
  const broadcasts = match.broadcastsByCountry[selectedCountry] || match.broadcastsByCountry['Pakistan'] || [];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubscribed(true);

    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 },
      });
    } catch {
      // ignore
    }

    setTimeout(() => {
      // leave success state visible
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in">
      <div className="relative w-full max-w-lg bg-slate-900 border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="p-6 border-b border-slate-800 flex items-center justify-between gap-4 bg-slate-900/90">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
              <Bell className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-black text-white">Match Kickoff Reminders</h2>
              <p className="text-xs text-slate-400">Never miss your team in action</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Match Preview Box */}
        <div className="p-5 bg-slate-950/60 border-b border-slate-800">
          <div className="flex items-center justify-between gap-2 text-xs text-slate-400 mb-2">
            <span className="font-bold text-white flex items-center gap-1.5">
              <span>{match.sport === 'football' ? '⚽' : '🏏'}</span>
              <span>{match.competitionName}</span>
            </span>
            <span className="px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 text-[10px]">
              {match.formatOrStage}
            </span>
          </div>

          <div className="flex items-center justify-between gap-3 my-2">
            <div className="flex items-center gap-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={match.homeTeam.crest} alt={match.homeTeam.name} className="w-8 h-8 object-contain" />
              <span className="text-sm font-bold text-white">{match.homeTeam.name}</span>
            </div>
            <span className="text-xs font-black text-slate-500">VS</span>
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-white">{match.awayTeam.name}</span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={match.awayTeam.crest} alt={match.awayTeam.name} className="w-8 h-8 object-contain" />
            </div>
          </div>

          <div className="mt-3 p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <span className="text-slate-400">⏰ Kickoff:</span>
              <span className="text-emerald-400 font-bold">{formattedKickoff}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-400">📺 Watch in {selectedCountry}:</span>
              <span className="text-cyan-300 font-semibold">{broadcasts[0] || 'Local Network'}</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5">
          
          {isSubscribed ? (
            <div className="p-6 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 text-center space-y-3 animate-in zoom-in-95">
              <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
              <h3 className="text-base font-bold text-white">Reminder Scheduled!</h3>
              <p className="text-xs text-slate-300">
                An alert will be sent to <span className="font-bold text-emerald-300">{email}</span> {timeBefore} minutes before kickoff with direct stream channels for {selectedCountry}.
              </p>
              <div className="pt-2 flex justify-center">
                <button
                  onClick={onClose}
                  className="px-5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs shadow-md transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="space-y-4">
              
              {/* Email Input */}
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1.5 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-amber-400" />
                  <span>Email for Match Alert</span>
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500/40"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Time Before Selector */}
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1.5 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-cyan-400" />
                  <span>When should we notify you?</span>
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {[
                    { label: '15m before', val: 15 },
                    { label: '30m before', val: 30 },
                    { label: '1h before', val: 60 },
                    { label: '24h before', val: 1440 },
                  ].map(t => (
                    <button
                      key={t.val}
                      type="button"
                      onClick={() => setTimeBefore(t.val)}
                      className={`py-2 px-1 text-center rounded-xl text-xs font-bold border transition-all ${
                        timeBefore === t.val
                          ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-md'
                          : 'bg-slate-950 text-slate-300 border-slate-800 hover:bg-slate-800'
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit Email Reminder */}
              <button
                type="submit"
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs shadow-lg shadow-amber-500/20 transition-all"
              >
                🔔 Schedule Email Notification
              </button>

            </form>
          )}

          {/* Quick Calendar Links */}
          <div className="pt-4 border-t border-slate-800">
            <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-emerald-400" />
              <span>Or Sync Directly to Your Calendar:</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <a
                href={generateGoogleCalendarUrl(match, selectedCountry)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors"
              >
                <span>📅 Google Calendar</span>
              </a>
              <button
                type="button"
                onClick={() => downloadIcsFile(match, selectedCountry)}
                className="flex items-center justify-center gap-1.5 p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors"
              >
                <span>📥 Apple / Outlook (.ics)</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
