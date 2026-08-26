'use client';

import React, { useState } from 'react';
import { Match } from '@/lib/types';
import { formatFullKickoff, getRelativeCountdown } from '@/lib/timezone';
import { generateGoogleCalendarUrl, downloadIcsFile } from '@/lib/calendar';
import { TeamLogo } from './TeamLogo';
import { Calendar, Bell, Tv, ExternalLink, Bot, MapPin, ChevronDown, Sparkles } from 'lucide-react';

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

  const countdown = getRelativeCountdown(match.utcKickoff);
  const formattedKickoff = formatFullKickoff(match.utcKickoff, selectedTimezone, format24h);
  
  const broadcasts = match.broadcastsByCountry[selectedCountry] || 
                     match.broadcastsByCountry['Pakistan'] || 
                     ['Check local sports channel'];

  const watchUrl = match.watchUrlsByCountry?.[selectedCountry] || 
                   match.watchUrlsByCountry?.['Pakistan'];

  const isLive = countdown.status === 'live';

  return (
    <div className={`glass-card rounded-2xl p-4 sm:p-5 border transition-all duration-300 relative flex flex-col justify-between ${
      isLive 
        ? 'border-red-500/60 shadow-lg shadow-red-500/10' 
        : match.sport === 'football' 
          ? 'border-emerald-500/25 hover:border-emerald-400/50' 
          : 'border-cyan-500/25 hover:border-cyan-400/50'
    }`}>
      
      <div>
        {/* Top Header: Tournament Badge + Countdown */}
        <div className="flex items-center justify-between gap-2 pb-2.5 mb-3 border-b border-slate-800">
          <div className="flex items-center gap-1.5 min-w-0">
            <span className="text-base shrink-0">{match.competitionLogo}</span>
            <span className="text-xs font-black uppercase tracking-wider text-slate-200 truncate">
              {match.competitionName}
            </span>
          </div>

          <div className={`text-[11px] font-bold px-2 py-0.5 rounded-full shrink-0 flex items-center gap-1 ${
            isLive 
              ? 'bg-red-500/20 text-red-300 border border-red-500/50 animate-pulse' 
              : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
          }`}>
            {isLive && <span className="w-1.5 h-1.5 rounded-full bg-red-500 inline-block animate-ping" />}
            <span>{countdown.text}</span>
          </div>
        </div>

        {/* Stage Sub-label */}
        <div className="text-[11px] text-slate-400 font-medium mb-3">
          {match.formatOrStage}
        </div>

        {/* Teams Matchup Row */}
        <div className="flex items-center justify-between gap-2 my-2">
          
          {/* Home Team */}
          <div className="flex-1 flex flex-col items-center text-center min-w-0">
            <TeamLogo team={match.homeTeam} size="md" className="mb-2" />
            <span className="text-xs sm:text-sm font-black text-white leading-tight min-h-[2.5rem] flex items-center justify-center w-full px-1">
              {match.homeTeam.name}
            </span>
            {match.homeTeam.recentForm && (
              <div className="flex items-center gap-1 mt-1">
                {match.homeTeam.recentForm.map((f, i) => (
                  <span
                    key={i}
                    className={`w-3.5 h-3.5 rounded text-[9px] font-black flex items-center justify-center ${
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
          <div className="flex flex-col items-center justify-center px-1 shrink-0">
            <div className="px-2 py-1 rounded-xl bg-slate-900 border border-slate-700 text-[10px] font-black text-slate-400">
              VS
            </div>
          </div>

          {/* Away Team */}
          <div className="flex-1 flex flex-col items-center text-center min-w-0">
            <TeamLogo team={match.awayTeam} size="md" className="mb-2" />
            <span className="text-xs sm:text-sm font-black text-white leading-tight min-h-[2.5rem] flex items-center justify-center w-full px-1">
              {match.awayTeam.name}
            </span>
            {match.awayTeam.recentForm && (
              <div className="flex items-center gap-1 mt-1">
                {match.awayTeam.recentForm.map((f, i) => (
                  <span
                    key={i}
                    className={`w-3.5 h-3.5 rounded text-[9px] font-black flex items-center justify-center ${
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
        <div className="my-3 p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 text-xs">
          <div className="flex items-center gap-1.5">
            <span className="text-emerald-400 font-extrabold">⏰</span>
            <span className="text-white font-bold tracking-tight">{formattedKickoff}</span>
          </div>
          <div className="flex items-center gap-1 text-slate-400 text-[11px] truncate">
            <MapPin className="w-3 h-3 text-slate-500 shrink-0" />
            <span className="truncate">{match.venue}</span>
          </div>
        </div>

        {/* Where to Watch Box */}
        <div className="my-2.5 p-2.5 rounded-xl bg-slate-950/80 border border-slate-800">
          <div className="flex items-center justify-between gap-2 mb-1.5">
            <div className="flex items-center gap-1 text-xs font-bold text-cyan-300">
              <Tv className="w-3.5 h-3.5 shrink-0" />
              <span className="truncate">Where to Watch in {selectedCountry}:</span>
            </div>
            {watchUrl && (
              <a
                href={watchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-[10px] font-extrabold text-emerald-400 hover:text-emerald-300 shrink-0"
              >
                <span>Live</span>
                <ExternalLink className="w-2.5 h-2.5" />
              </a>
            )}
          </div>
          <div className="flex flex-wrap gap-1">
            {broadcasts.map((channel, idx) => (
              <span
                key={idx}
                className="text-[10px] px-2 py-0.5 rounded-lg bg-slate-900 text-slate-200 border border-slate-700/80 font-medium"
              >
                📡 {channel}
              </span>
            ))}
          </div>
        </div>

        {/* Match Intel Insight */}
        {match.aiMatchInsight && (
          <div className="my-2 p-2 rounded-lg bg-indigo-950/30 border border-indigo-500/20 text-xs text-slate-300 flex items-start gap-1.5">
            <Sparkles className="w-3 h-3 text-indigo-400 shrink-0 mt-0.5" />
            <p className="text-[10px] leading-relaxed text-slate-300">
              <strong className="text-indigo-300">Intel: </strong>
              {match.aiMatchInsight}
            </p>
          </div>
        )}
      </div>

      {/* Action Buttons Bar - Uniform 3-Column Grid */}
      <div className="grid grid-cols-3 gap-1.5 pt-2.5 mt-2 border-t border-slate-800 relative">
        
        {/* 1. Add to Calendar */}
        <div className="relative">
          <button
            onClick={() => setCalendarMenuOpen(!calendarMenuOpen)}
            className="w-full flex items-center justify-center gap-1 py-2 px-1 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-[11px] font-bold text-slate-200 transition-colors shadow-sm"
          >
            <Calendar className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>Calendar</span>
            <ChevronDown className="w-3 h-3 text-slate-400 shrink-0" />
          </button>

          {calendarMenuOpen && (
            <div className="absolute left-0 bottom-full mb-1.5 z-50 w-52 rounded-2xl bg-slate-900 border border-slate-700 shadow-2xl p-1.5 text-xs space-y-1">
              <a
                href={generateGoogleCalendarUrl(match, selectedCountry)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setCalendarMenuOpen(false)}
                className="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-slate-800 text-slate-200 font-semibold transition-colors"
              >
                <span>📅 Google Calendar</span>
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

        {/* 2. Remind Me */}
        <button
          onClick={() => onSetReminder(match)}
          className="flex items-center justify-center gap-1 py-2 px-1 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-[11px] font-bold text-amber-300 transition-colors shadow-sm"
        >
          <Bell className="w-3.5 h-3.5 text-amber-400 shrink-0" />
          <span>Remind</span>
        </button>

        {/* 3. AI Scout */}
        <button
          onClick={() => onAskAi(match)}
          className="flex items-center justify-center gap-1 py-2 px-1 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-[11px] font-black text-emerald-400 transition-colors shadow-sm"
        >
          <Bot className="w-3.5 h-3.5 shrink-0" />
          <span>AI Scout</span>
        </button>

      </div>

    </div>
  );
};
