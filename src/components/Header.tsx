'use client';

import React, { useState, useEffect } from 'react';
import { TIMEZONE_OPTIONS, COUNTRY_OPTIONS, formatKickoffTime } from '@/lib/timezone';
import { Globe, Clock, Tv, Bot, Sparkles, Star, Bell } from 'lucide-react';

interface HeaderProps {
  selectedTimezone: string;
  onTimezoneChange: (tz: string) => void;
  selectedCountry: string;
  onCountryChange: (country: string) => void;
  format24h: boolean;
  onFormat24hToggle: () => void;
  onOpenBroadcastGuide: () => void;
  onOpenAgentDrawer: () => void;
  onOpenFavoritesModal: () => void;
  favoritesCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  selectedTimezone,
  onTimezoneChange,
  selectedCountry,
  onCountryChange,
  format24h,
  onFormat24hToggle,
  onOpenBroadcastGuide,
  onOpenAgentDrawer,
  onOpenFavoritesModal,
  favoritesCount,
}) => {
  const [currentTimeStr, setCurrentTimeStr] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date().toISOString();
      const time = formatKickoffTime(now, selectedTimezone, format24h);
      const tzCode = selectedTimezone === 'Asia/Karachi' ? 'PKT' : (TIMEZONE_OPTIONS.find(t => t.iana === selectedTimezone)?.code || '');
      setCurrentTimeStr(`${time} ${tzCode}`);
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, [selectedTimezone, format24h]);

  const currentCountryObj = COUNTRY_OPTIONS.find(c => c.name === selectedCountry) || COUNTRY_OPTIONS[0];

  return (
    <header className="sticky top-0 z-40 w-full glass-panel border-b border-slate-800/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 gap-4">
          
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-cyan-500 text-slate-950 font-black shadow-lg shadow-emerald-500/20">
              <span className="text-xl">⚡</span>
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg sm:text-xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-slate-400">
                  SPORTSSCOUT
                </h1>
                <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-medium">
                  LIVE HUB
                </span>
              </div>
              <p className="text-xs text-slate-400 hidden sm:block">
                Football & Cricket Intelligence • Built for Adil Usmani
              </p>
            </div>
          </div>

          {/* Center / Right Controls: Timezone, Country, Reminders, LangGraph Agent */}
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap justify-end">
            
            {/* Live Clock Pill */}
            <div className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs font-medium text-slate-300">
              <Clock className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-300 font-semibold">{currentTimeStr || 'Loading...'}</span>
            </div>

            {/* Timezone Selector (PKT Default) */}
            <div className="relative flex items-center">
              <select
                value={selectedTimezone}
                onChange={(e) => onTimezoneChange(e.target.value)}
                className="appearance-none bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 text-xs text-slate-200 rounded-lg pl-8 pr-7 py-2 font-medium cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-500/40 transition-colors"
                title="Select Match Kickoff Timezone"
              >
                {TIMEZONE_OPTIONS.map((tz) => (
                  <option key={tz.iana} value={tz.iana} className="bg-slate-900 text-white">
                    {tz.code === 'PKT' ? '🇵🇰 ' : ''}{tz.label}
                  </option>
                ))}
              </select>
              <Globe className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 pointer-events-none" />
              <span className="absolute right-2 text-slate-400 text-xs pointer-events-none">▾</span>
            </div>

            {/* Country Selector (Pakistan Default for Broadcasts) */}
            <div className="relative flex items-center">
              <select
                value={selectedCountry}
                onChange={(e) => onCountryChange(e.target.value)}
                className="appearance-none bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 text-xs text-slate-200 rounded-lg pl-7 pr-7 py-2 font-medium cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyan-500/40 transition-colors"
                title="Select Country for TV & Streaming Rights"
              >
                {COUNTRY_OPTIONS.map((c) => (
                  <option key={c.code} value={c.name} className="bg-slate-900 text-white">
                    {c.flag} {c.name}
                  </option>
                ))}
              </select>
              <span className="absolute left-2 text-xs pointer-events-none">{currentCountryObj.flag}</span>
              <span className="absolute right-2 text-slate-400 text-xs pointer-events-none">▾</span>
            </div>

            {/* Where to Watch Guide Button */}
            <button
              onClick={onOpenBroadcastGuide}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 border border-slate-700 text-xs font-semibold text-slate-200 transition-colors shadow-sm"
              title="View TV Channels & OTT Providers by Country"
            >
              <Tv className="w-3.5 h-3.5 text-cyan-400" />
              <span className="hidden sm:inline">Where to Watch</span>
            </button>

            {/* Favorites Manager Button */}
            <button
              onClick={onOpenFavoritesModal}
              className="relative flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 border border-slate-700 text-xs font-semibold text-amber-300 transition-colors shadow-sm"
              title="Manage Favorite Teams"
            >
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span className="hidden sm:inline">My Teams</span>
              {favoritesCount > 0 && (
                <span className="ml-0.5 px-1.5 py-0.2 rounded-full bg-amber-500/20 text-amber-300 text-[10px] font-bold">
                  {favoritesCount}
                </span>
              )}
            </button>

            {/* LangGraph AI Agent Button */}
            <button
              onClick={onOpenAgentDrawer}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-bold text-xs shadow-lg shadow-emerald-500/20 transition-all hover:scale-[1.02]"
              title="Open AI Match Scout (LangGraph Agent)"
            >
              <Bot className="w-4 h-4 text-slate-950" />
              <span>AI Scout</span>
              <Sparkles className="w-3 h-3 text-slate-900" />
            </button>

          </div>

        </div>
      </div>
    </header>
  );
};
