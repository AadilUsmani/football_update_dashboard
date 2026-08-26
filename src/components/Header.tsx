'use client';

import React, { useState, useEffect } from 'react';
import { TIMEZONE_OPTIONS, COUNTRY_OPTIONS, formatKickoffTime } from '@/lib/timezone';
import { Globe, Clock, Tv, Bot, Sparkles, Star } from 'lucide-react';

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
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-2">
          
          {/* Logo & Brand */}
          <div className="flex items-center gap-2 shrink-0">
            <div className="relative flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-tr from-emerald-500 to-cyan-500 text-slate-950 font-black shadow-md">
              <span className="text-base sm:text-lg">⚡</span>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h1 className="text-base sm:text-lg font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300">
                  SPORTSSCOUT
                </h1>
                <span className="text-[9px] px-1.5 py-0.2 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-bold hidden xs:inline">
                  PKT HUB
                </span>
              </div>
            </div>
          </div>

          {/* Controls: Timezone, Country, Guide, Favorites, AI */}
          <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap justify-end">
            
            {/* Live Clock (Desktop) */}
            <div className="hidden lg:flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300">
              <Clock className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-300">{currentTimeStr}</span>
            </div>

            {/* Timezone Selector */}
            <div className="relative flex items-center">
              <select
                value={selectedTimezone}
                onChange={(e) => onTimezoneChange(e.target.value)}
                className="appearance-none bg-slate-900 hover:bg-slate-800 border border-slate-700 text-[11px] sm:text-xs text-slate-200 rounded-xl pl-6 sm:pl-7 pr-5 py-1.5 font-bold cursor-pointer focus:outline-none"
                title="Select Kickoff Timezone"
              >
                {TIMEZONE_OPTIONS.map((tz) => (
                  <option key={tz.iana} value={tz.iana} className="bg-slate-900 text-white">
                    {tz.code === 'PKT' ? '🇵🇰 ' : ''}{tz.code} ({tz.offset})
                  </option>
                ))}
              </select>
              <Globe className="w-3 h-3 text-slate-400 absolute left-2 pointer-events-none" />
              <span className="absolute right-1.5 text-slate-400 text-[10px] pointer-events-none">▾</span>
            </div>

            {/* Country Selector */}
            <div className="relative flex items-center">
              <select
                value={selectedCountry}
                onChange={(e) => onCountryChange(e.target.value)}
                className="appearance-none bg-slate-900 hover:bg-slate-800 border border-slate-700 text-[11px] sm:text-xs text-slate-200 rounded-xl pl-6 pr-5 py-1.5 font-bold cursor-pointer focus:outline-none"
                title="Select Country for TV/OTT Rights"
              >
                {COUNTRY_OPTIONS.map((c) => (
                  <option key={c.code} value={c.name} className="bg-slate-900 text-white">
                    {c.flag} {c.code}
                  </option>
                ))}
              </select>
              <span className="absolute left-1.5 text-xs pointer-events-none">{currentCountryObj.flag}</span>
              <span className="absolute right-1.5 text-slate-400 text-[10px] pointer-events-none">▾</span>
            </div>

            {/* Where to Watch Guide */}
            <button
              onClick={onOpenBroadcastGuide}
              className="p-1.5 sm:px-2.5 sm:py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-bold text-cyan-300 transition-colors"
              title="Where to Watch Guide"
            >
              <Tv className="w-4 h-4 sm:mr-1 inline" />
              <span className="hidden sm:inline">Guide</span>
            </button>

            {/* Favorites Button */}
            <button
              onClick={onOpenFavoritesModal}
              className="p-1.5 sm:px-2.5 sm:py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-bold text-amber-300 transition-colors"
              title="My Favorite Teams"
            >
              <Star className="w-4 h-4 fill-amber-400 inline sm:mr-1" />
              <span className="hidden sm:inline">Teams</span>
              {favoritesCount > 0 && (
                <span className="ml-1 px-1.5 py-0.2 rounded-full bg-amber-500/20 text-amber-300 text-[10px]">
                  {favoritesCount}
                </span>
              )}
            </button>

            {/* AI Scout Button */}
            <button
              onClick={onOpenAgentDrawer}
              className="flex items-center gap-1 px-2.5 sm:px-3 py-1.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black text-xs shadow-md transition-all shrink-0"
              title="Open AI Sports Scout"
            >
              <Bot className="w-3.5 h-3.5 text-slate-950" />
              <span className="hidden xs:inline">AI Scout</span>
            </button>

          </div>

        </div>
      </div>
    </header>
  );
};
