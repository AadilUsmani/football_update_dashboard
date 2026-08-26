'use client';

import React from 'react';
import { Team, Match } from '@/lib/types';
import { formatFullKickoff, getRelativeCountdown } from '@/lib/timezone';
import { Star, Plus, Calendar, Bell, Tv, Sparkles } from 'lucide-react';
import { generateGoogleCalendarUrl, downloadIcsFile } from '@/lib/calendar';

interface FavoriteTeamsBarProps {
  favoriteTeamIds: string[];
  allTeams: Team[];
  allMatches: Match[];
  selectedTimezone: string;
  selectedCountry: string;
  format24h: boolean;
  onOpenManageModal: () => void;
  onSetReminder: (match: Match) => void;
  onAskAi: (match: Match) => void;
}

export const FavoriteTeamsBar: React.FC<FavoriteTeamsBarProps> = ({
  favoriteTeamIds,
  allTeams,
  allMatches,
  selectedTimezone,
  selectedCountry,
  format24h,
  onOpenManageModal,
  onSetReminder,
  onAskAi,
}) => {
  // Find next match for each favorite team
  const favoriteCards = favoriteTeamIds.map(teamId => {
    const team = allTeams.find(t => t.id === teamId);
    if (!team) return null;

    // Find next match for this team
    const nextMatch = allMatches.find(m => 
      m.homeTeam.id === teamId || 
      m.awayTeam.id === teamId ||
      m.homeTeam.name.toLowerCase().includes(team.name.toLowerCase()) ||
      m.awayTeam.name.toLowerCase().includes(team.name.toLowerCase())
    );

    return {
      team,
      nextMatch,
    };
  }).filter(Boolean);

  return (
    <section className="mb-8 p-5 sm:p-6 rounded-3xl glass-panel border border-amber-500/20 shadow-2xl relative overflow-hidden">
      
      {/* Background ambient glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex items-center justify-between gap-4 mb-5 flex-wrap">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
            <Star className="w-5 h-5 fill-amber-400" />
          </div>
          <div>
            <h2 className="text-lg font-black text-white flex items-center gap-2">
              <span>My Priority Teams & Next Fixtures</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-bold">
                {favoriteTeamIds.length} Saved
              </span>
            </h2>
            <p className="text-xs text-slate-400">
              Personalized schedule with kickoff in PKT & broadcast channels for {selectedCountry}
            </p>
          </div>
        </div>

        <button
          onClick={onOpenManageModal}
          className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-xs font-bold text-amber-300 transition-colors shadow-sm"
        >
          <Plus className="w-4 h-4" />
          <span>Manage Teams</span>
        </button>
      </div>

      {/* Empty State */}
      {favoriteCards.length === 0 ? (
        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 text-center flex flex-col items-center justify-center">
          <Star className="w-10 h-10 text-slate-600 mb-2 stroke-1" />
          <h3 className="text-sm font-bold text-slate-200">No Favorite Teams Selected</h3>
          <p className="text-xs text-slate-400 max-w-md mt-1 mb-4">
            Select your favorite football clubs (Real Madrid, Arsenal, Inter Miami) and cricket teams (Pakistan, Lahore Qalandars, CSK) to track their upcoming matches automatically!
          </p>
          <button
            onClick={onOpenManageModal}
            className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-lg shadow-amber-500/20 transition-all"
          >
            ⭐ Choose Favorite Teams
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {favoriteCards.map((item, idx) => {
            if (!item) return null;
            const { team, nextMatch } = item;

            if (!nextMatch) {
              return (
                <div key={idx} className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800">
                  <div className="flex items-center gap-3">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={team.crest} alt={team.name} className="w-8 h-8 object-contain" />
                    <div>
                      <h4 className="text-sm font-bold text-white">{team.name}</h4>
                      <p className="text-xs text-slate-400">No scheduled match in database</p>
                    </div>
                  </div>
                </div>
              );
            }

            const countdown = getRelativeCountdown(nextMatch.utcKickoff);
            const formattedTime = formatFullKickoff(nextMatch.utcKickoff, selectedTimezone, format24h);
            const isHome = nextMatch.homeTeam.id === team.id || nextMatch.homeTeam.name.toLowerCase().includes(team.name.toLowerCase());
            const opponent = isHome ? nextMatch.awayTeam : nextMatch.homeTeam;
            const channels = nextMatch.broadcastsByCountry[selectedCountry] || nextMatch.broadcastsByCountry['Pakistan'] || ['Check local network'];

            return (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-slate-900/80 hover:bg-slate-900 border border-amber-500/20 hover:border-amber-500/40 transition-all duration-200 shadow-lg relative flex flex-col justify-between"
              >
                <div>
                  {/* Top bar: Sport badge + Countdown */}
                  <div className="flex items-center justify-between gap-2 pb-2 mb-3 border-b border-slate-800">
                    <div className="flex items-center gap-1.5">
                      <span>{nextMatch.sport === 'football' ? '⚽' : '🏏'}</span>
                      <span className="text-[11px] font-bold text-amber-300 uppercase tracking-wide">
                        {team.name}
                      </span>
                    </div>
                    <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                      {countdown.text}
                    </span>
                  </div>

                  {/* Matchup Banner */}
                  <div className="flex items-center justify-between gap-3 my-2">
                    <div className="flex items-center gap-2.5">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={team.crest} alt={team.name} className="w-10 h-10 object-contain drop-shadow" />
                      <div>
                        <div className="text-xs font-bold text-white leading-tight">{team.name}</div>
                        <div className="text-[10px] text-slate-400">{isHome ? 'Home' : 'Away'}</div>
                      </div>
                    </div>

                    <div className="text-xs font-black text-slate-500">VS</div>

                    <div className="flex items-center gap-2.5 text-right">
                      <div>
                        <div className="text-xs font-bold text-white leading-tight">{opponent.name}</div>
                        <div className="text-[10px] text-slate-400">{isHome ? 'Away' : 'Home'}</div>
                      </div>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={opponent.crest} alt={opponent.name} className="w-10 h-10 object-contain drop-shadow" />
                    </div>
                  </div>

                  {/* Kickoff in PKT */}
                  <div className="my-2.5 p-2 rounded-lg bg-slate-950/80 border border-slate-800 flex items-center justify-between text-xs">
                    <span className="text-slate-400 font-medium">⏰ Kickoff:</span>
                    <span className="text-emerald-400 font-bold">{formattedTime}</span>
                  </div>

                  {/* Broadcast Channel */}
                  <div className="my-2 text-[11px] text-slate-300">
                    <div className="flex items-center gap-1 text-cyan-300 font-semibold mb-1">
                      <Tv className="w-3 h-3" />
                      <span>Watch in {selectedCountry}:</span>
                    </div>
                    <div className="line-clamp-1 text-slate-300 font-medium">
                      📡 {channels[0]} {channels[1] ? `• ${channels[1]}` : ''}
                    </div>
                  </div>
                </div>

                {/* Quick actions */}
                <div className="flex items-center justify-between gap-1.5 pt-2.5 mt-2 border-t border-slate-800 text-[11px]">
                  <a
                    href={generateGoogleCalendarUrl(nextMatch, selectedCountry)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 px-2 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium transition-colors"
                  >
                    <Calendar className="w-3 h-3 text-emerald-400" />
                    <span>Calendar</span>
                  </a>

                  <button
                    onClick={() => onSetReminder(nextMatch)}
                    className="flex items-center gap-1 px-2 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-amber-300 font-medium transition-colors"
                  >
                    <Bell className="w-3 h-3 text-amber-400" />
                    <span>Remind</span>
                  </button>

                  <button
                    onClick={() => onAskAi(nextMatch)}
                    className="flex items-center gap-1 px-2 py-1 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 font-bold transition-colors"
                  >
                    <Sparkles className="w-3 h-3" />
                    <span>AI Scout</span>
                  </button>
                </div>

              </div>
            );
          })}
        </div>
      )}

    </section>
  );
};
