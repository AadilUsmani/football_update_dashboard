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
  const [homeImgError, setHomeImgError] = useState(false);
  const [awayImgError, setAwayImgError] = useState(false);

  const countdown = getRelativeCountdown(match.utcKickoff);
  const formattedKickoff = formatFullKickoff(match.utcKickoff, selectedTimezone, format24h);
  
  const broadcasts = match.broadcastsByCountry[selectedCountry] || 
                     match.broadcastsByCountry['Pakistan'] || 
                     ['Check local sports network'];

  const watchUrl = match.watchUrlsByCountry?.[selectedCountry] || 
                   match.watchUrlsByCountry?.['Pakistan'];

  const isLive = countdown.status === 'live';

  return (
    <div className={`glass-card rounded-2xl p-5 border transition-all duration-300 relative flex flex-col justify-between ${
      isLive 
        ? 'border-red-500/60 shadow-lg shadow-red-500/10' 
        : match.sport === 'football' 
          ? 'border-emerald-500/25 hover:border-emerald-400/50' 
          : 'border-cyan-500/25 hover:border-cyan-400/50'
    }`}>
      
      <div>
        {/* Top Header: Tournament Badge + Countdown Pill */}
        <div className="flex items-center justify-between gap-2 pb-3 mb-4 border-b border-slate-800">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-lg">{match.competitionLogo}</span>
            <span className="text-xs font-extrabold uppercase tracking-wider text-slate-200">
              {match.competitionName}
            </span>
            <span className="text-[11px] px-2 py-0.5 rounded-full bg-slate-800/90 text-slate-300 font-semibold border border-slate-700">
              {match.formatOrStage}
            </span>
          </div>

          <div className={`text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1.5 shrink-0 ${
            isLive 
              ? 'bg-red-500/20 text-red-300 border border-red-500/50 animate-pulse' 
              : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
          }`}>
            {isLive && <span className="w-2 h-2 rounded-full bg-red-500 inline-block animate-ping" />}
            <span>{countdown.text}</span>
          </div>
        </div>

        {/* Teams Matchup Section */}
        <div className="flex items-center justify-between gap-3 my-3">
          
          {/* Home Team */}
          <div className="flex-1 flex flex-col items-center text-center">
            <div className="w-14 h-14 sm:w-16 sm:h-16 relative mb-2 flex items-center justify-center p-2 rounded-2xl bg-slate-900 border border-slate-700 shadow-md">
              {!homeImgError ? (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src={match.homeTeam.crest}
                  alt={match.homeTeam.name}
                  className="max-w-full max-h-full object-contain filter drop-shadow"
                  onError={() => setHomeImgError(true)}
                />
              ) : (
                <span className="text-base font-black text-slate-300">
                  {match.homeTeam.shortName || match.homeTeam.name.substring(0, 3)}
                </span>
              )}
            </div>
            <span className="text-xs sm:text-sm font-black text-white leading-tight min-h-[2.25rem] flex items-center justify-center">
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

          {/* VS Divider */}
          <div className="flex flex-col items-center justify-center px-1">
            <div className="px-2.5 py-1 rounded-xl bg-slate-900 border border-slate-700 text-xs font-black text-slate-400 shadow-inner">
              VS
            </div>
          </div>

          {/* Away Team */}
          <div className="flex-1 flex flex-col items-center text-center">
            <div className="w-14 h-14 sm:w-16 sm:h-16 relative mb-2 flex items-center justify-center p-2 rounded-2xl bg-slate-900 border border-slate-700 shadow-md">
              {!awayImgError ? (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src={match.awayTeam.crest}
                  alt={match.awayTeam.name}
                  className="max-w-full max-h-full object-contain filter drop-shadow"
                  onError={() => setAwayImgError(true)}
                />
              ) : (
                <span className="text-base font-black text-slate-300">
                  {match.awayTeam.shortName || match.awayTeam.name.substring(0, 3)}
                </span>
              )}
            </div>
            <span className="text-xs sm:text-sm font-black text-white leading-tight min-h-[2.25rem] flex items-center justify-center">
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

        {/* Kickoff Box */}
        <div className="my-3 p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-2">
            <span className="text-emerald-400 font-extrabold">⏰ Kickoff:</span>
            <span className="text-white font-bold tracking-tight">{formattedKickoff}</span>
          </div>
          <div className="flex items-center gap-1 text-slate-400 text-[11px] truncate">
            <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0" />
            <span className="truncate">{match.venue}, {match.city}</span>
          </div>
        </div>

        {/* Where to Watch Box */}
        <div className="my-3 p-3 rounded-xl bg-slate-950/80 border border-slate-800">
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
                className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-900 text-slate-200 border border-slate-700/90 font-medium"
              >
                📡 {channel}
              </span>
            ))}
          </div>
        </div>

        {/* AI Tactical Insight */}
        {match.aiMatchInsight && (
          <div className="my-3 p-2.5 rounded-lg bg-indigo-950/40 border border-indigo-500/25 text-xs text-slate-300 flex items-start gap-2">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
            <p className="text-[11px] leading-relaxed">
              <span className="font-bold text-indigo-300">Match Intel: </span>
              {match.aiMatchInsight}
            </p>
          </div>
        )}
      </div>

      {/* Action Buttons Bar */}
      <div className="flex items-center justify-between gap-2 pt-3 mt-2 border-t border-slate-800 relative">
        
        {/* Calendar Dropdown */}
        <div className="relative">
          <button
            onClick={() => setCalendarMenuOpen(!calendarMenuOpen)}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-bold text-slate-200 transition-colors shadow-sm"
          >
            <Calendar className="w-3.5 h-3.5 text-emerald-400" />
            <span>Calendar</span>
            <ChevronDown className="w-3 h-3 text-slate-400" />
          </button>

          {calendarMenuOpen && (
            <div className="absolute left-0 bottom-full mb-2 z-50 w-56 rounded-2xl bg-slate-900 border border-slate-700 shadow-2xl p-2 text-xs space-y-1">
              <a
                href={generateGoogleCalendarUrl(match, selectedCountry)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setCalendarMenuOpen(false)}
                className="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-slate-800 text-slate-200 font-semibold transition-colors"
              >
                <span>📅 Google Calendar (1-Click)</span>
              </a>
              <button
                onClick={() => {
                  downloadIcsFile(match, selectedCountry);
                  setCalendarMenuOpen(false);
                }}
                className="w-full text-left flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-slate-800 text-slate-200 font-semibold transition-colors"
              >
                <span>📥 Apple / Outlook (.ics)</span>
              </button>
            </div>
          )}
        </div>

        {/* Set Reminder Button */}
        <button
          onClick={() => onSetReminder(match)}
          className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-bold text-amber-300 transition-colors shadow-sm"
        >
          <Bell className="w-3.5 h-3.5 text-amber-400" />
          <span>Remind</span>
        </button>

        {/* Ask AI Agent */}
        <button
          onClick={() => onAskAi(match)}
          className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-xs font-extrabold text-emerald-400 transition-colors shadow-sm"
        >
          <Bot className="w-3.5 h-3.5" />
          <span>AI Scout</span>
        </button>

      </div>

    </div>
  );
};
