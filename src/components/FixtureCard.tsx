'use client';

import React, { useState } from 'react';
import { Match } from '@/lib/types';
import { formatFullKickoff, getRelativeCountdown } from '@/lib/timezone';
import { generateGoogleCalendarUrl, downloadIcsFile } from '@/lib/calendar';
import { Calendar, Bell, Tv, ExternalLink, Bot, MapPin, ChevronDown, Check, Sparkles } from 'lucide-react';

interface FixtureCardProps {
  match: Match;
  selectedTimezone: string;
  selectedCountry: string;
  format24h: boolean;
  onSetReminder: (match: Match) => void;
  onAskAi: (match: Match) => void;
}

export const FixtureCard: React.FC<FixtureCardProps> = ({
  match,
  selectedTimezone,
  selectedCountry,
  format24h,
  onSetReminder,
  onAskAi,
}) => {
  const [calendarMenuOpen, setCalendarMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const countdown = getRelativeCountdown(match.utcKickoff);
  const formattedKickoff = formatFullKickoff(match.utcKickoff, selectedTimezone, format24h);
  
  const broadcasts = match.broadcastsByCountry[selectedCountry] || 
                     match.broadcastsByCountry['Pakistan'] || 
                     ['Check local sports listings'];

  const watchUrl = match.watchUrlsByCountry?.[selectedCountry] || 
                   match.watchUrlsByCountry?.['Pakistan'];

  const isLive = countdown.status === 'live';

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className={`glass-card rounded-2xl p-5 border transition-all duration-300 relative overflow-hidden ${
      isLive 
        ? 'border-red-500/50 shadow-red-500/10' 
        : match.sport === 'football' 
          ? 'border-emerald-500/20 hover:border-emerald-500/40' 
          : 'border-cyan-500/20 hover:border-cyan-500/40'
    }`}>
      
      {/* Top Bar: Tournament & Countdown */}
      <div className="flex items-center justify-between gap-2 pb-3 mb-4 border-b border-slate-800/80">
        <div className="flex items-center gap-2">
          <span className="text-base">{match.competitionLogo}</span>
          <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
            {match.competitionName}
          </span>
          <span className="text-[11px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 font-medium">
            {match.formatOrStage}
          </span>
        </div>

        {/* Live or Countdown Pill */}
        <div className={`text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1.5 ${
          isLive 
            ? 'bg-red-500/20 text-red-400 border border-red-500/40 animate-pulse' 
            : 'bg-slate-800/90 text-emerald-400 border border-slate-700'
        }`}>
          {isLive && <span className="w-2 h-2 rounded-full bg-red-500 inline-block animate-ping" />}
          <span>{countdown.text}</span>
        </div>
      </div>

      {/* Teams Matchup Row */}
      <div className="grid grid-cols-7 items-center gap-2 my-2">
        
        {/* Home Team */}
        <div className="col-span-3 flex flex-col items-center text-center">
          <div className="w-14 h-14 sm:w-16 sm:h-16 relative mb-2 flex items-center justify-center p-2 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-md">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={match.homeTeam.crest}
              alt={match.homeTeam.name}
              className="max-w-full max-h-full object-contain filter drop-shadow"
              onError={(e) => {
                // Fallback text if crest fails
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
          </div>
          <span className="text-sm sm:text-base font-extrabold text-white leading-tight">
            {match.homeTeam.name}
          </span>
          {match.homeTeam.recentForm && (
            <div className="flex items-center gap-1 mt-1.5">
              {match.homeTeam.recentForm.map((f, i) => (
                <span
                  key={i}
                  className={`w-3.5 h-3.5 rounded text-[9px] font-bold flex items-center justify-center ${
                    f === 'W' ? 'bg-emerald-500 text-slate-950' : f === 'D' ? 'bg-amber-500 text-slate-950' : 'bg-red-500 text-white'
                  }`}
                >
                  {f}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* VS / Score Divider */}
        <div className="col-span-1 flex flex-col items-center justify-center text-center">
          <div className="px-2.5 py-1 rounded-xl bg-slate-900 border border-slate-800 text-xs font-black text-slate-400">
            VS
          </div>
        </div>

        {/* Away Team */}
        <div className="col-span-3 flex flex-col items-center text-center">
          <div className="w-14 h-14 sm:w-16 sm:h-16 relative mb-2 flex items-center justify-center p-2 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-md">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={match.awayTeam.crest}
              alt={match.awayTeam.name}
              className="max-w-full max-h-full object-contain filter drop-shadow"
              onError={(e) => {
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
          </div>
          <span className="text-sm sm:text-base font-extrabold text-white leading-tight">
            {match.awayTeam.name}
          </span>
          {match.awayTeam.recentForm && (
            <div className="flex items-center gap-1 mt-1.5">
              {match.awayTeam.recentForm.map((f, i) => (
                <span
                  key={i}
                  className={`w-3.5 h-3.5 rounded text-[9px] font-bold flex items-center justify-center ${
                    f === 'W' ? 'bg-emerald-500 text-slate-950' : f === 'D' ? 'bg-amber-500 text-slate-950' : 'bg-red-500 text-white'
                  }`}
                >
                  {f}
                </span>
              ))}
            </div>
          )}
        </div>

      </div>

      {/* Kickoff Time & Venue */}
      <div className="my-4 p-3 rounded-xl bg-slate-900/90 border border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
        <div className="flex items-center gap-2">
          <span className="text-emerald-400 font-bold">⏰ Kickoff:</span>
          <span className="text-slate-100 font-semibold">{formattedKickoff}</span>
        </div>
        <div className="flex items-center gap-1.5 text-slate-400">
          <MapPin className="w-3.5 h-3.5 text-slate-500" />
          <span>{match.venue}, {match.city}</span>
        </div>
      </div>

      {/* Broadcast Guide for Selected Country (Pakistan Default) */}
      <div className="my-3 p-3 rounded-xl bg-slate-950/60 border border-slate-800">
        <div className="flex items-center justify-between gap-2 mb-2">
          <div className="flex items-center gap-1.5 text-xs font-bold text-cyan-300">
            <Tv className="w-3.5 h-3.5" />
            <span>Where to Watch in {selectedCountry}:</span>
          </div>
          {watchUrl && (
            <a
              href={watchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[11px] font-bold text-emerald-400 hover:text-emerald-300 hover:underline"
            >
              <span>Watch Live</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>
        <div className="flex flex-wrap gap-1.5">
          {broadcasts.map((channel, idx) => (
            <span
              key={idx}
              className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-900 text-slate-200 border border-slate-700/80 font-medium"
            >
              📡 {channel}
            </span>
          ))}
        </div>
      </div>

      {/* Key Players / AI Tactical Insight */}
      {match.aiMatchInsight && (
        <div className="my-3 p-2.5 rounded-lg bg-indigo-950/30 border border-indigo-500/20 text-xs text-slate-300 flex items-start gap-2">
          <Sparkles className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
          <p className="text-[11px] leading-relaxed">
            <span className="font-bold text-indigo-300">AI Scout: </span>
            {match.aiMatchInsight}
          </p>
        </div>
      )}

      {/* Action Buttons: Calendar, Email Reminder, Ask AI */}
      <div className="flex items-center justify-between gap-2 pt-3 mt-2 border-t border-slate-800/80 flex-wrap">
        
        {/* Calendar Options Dropdown */}
        <div className="relative">
          <button
            onClick={() => setCalendarMenuOpen(!calendarMenuOpen)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-semibold text-slate-200 transition-colors"
          >
            <Calendar className="w-3.5 h-3.5 text-emerald-400" />
            <span>Add to Calendar</span>
            <ChevronDown className="w-3 h-3 text-slate-400" />
          </button>

          {calendarMenuOpen && (
            <div className="absolute left-0 bottom-full mb-1 z-30 w-52 rounded-xl bg-slate-900 border border-slate-700 shadow-2xl p-1.5 text-xs">
              <a
                href={generateGoogleCalendarUrl(match, selectedCountry)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setCalendarMenuOpen(false)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-slate-800 text-slate-200 font-medium transition-colors"
              >
                <span>📅 Google Calendar (1-Click)</span>
              </a>
              <button
                onClick={() => {
                  downloadIcsFile(match, selectedCountry);
                  setCalendarMenuOpen(false);
                }}
                className="w-full text-left flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-slate-800 text-slate-200 font-medium transition-colors"
              >
                <span>📥 Download iCal / Outlook (.ics)</span>
              </button>
            </div>
          )}
        </div>

        {/* Set Reminder Button */}
        <button
          onClick={() => onSetReminder(match)}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-semibold text-amber-300 transition-colors"
        >
          <Bell className="w-3.5 h-3.5 text-amber-400" />
          <span>Remind Me</span>
        </button>

        {/* Ask AI Agent */}
        <button
          onClick={() => onAskAi(match)}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-xs font-bold text-emerald-400 transition-colors"
        >
          <Bot className="w-3.5 h-3.5" />
          <span>AI Insight</span>
        </button>

      </div>

    </div>
  );
};
