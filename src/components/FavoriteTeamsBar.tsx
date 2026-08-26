'use client';

import React from 'react';
import { Team, Match } from '@/lib/types';
import { formatFullKickoff, getRelativeCountdown } from '@/lib/timezone';
import { Star, Plus, Calendar, Bell, Tv, Sparkles, ChevronRight } from 'lucide-react';
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
  const favoriteCards = favoriteTeamIds.map(teamId => {
    const team = allTeams.find(t => t.id === teamId);
    if (!team) return null;

    const nextMatch = allMatches.find(m => 
      m.homeTeam.id === teamId || 
      m.awayTeam.id === teamId ||
      m.homeTeam.name.toLowerCase().includes(team.name.toLowerCase()) ||
      m.awayTeam.name.toLowerCase().includes(team.name.toLowerCase())
    );

    return { team, nextMatch };
  }).filter(Boolean);

  return (
    <section className="mb-8 p-5 sm:p-6 rounded-3xl glass-panel border border-amber-500/20 shadow-2xl relative">
      
      {/* Header */}
      <div className="flex items-center justify-between gap-4 mb-5 flex-wrap">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
            <Star className="w-5 h-5 fill-amber-400" />
          </div>
          <div>
            <h2 className="text-lg font-black text-white flex items-center gap-2">
              <span>My Priority Teams & Next Fixtures</span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-bold border border-amber-500/30">
                {favoriteTeamIds.length} Teams
              </span>
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Accurate calendar kickoffs in PKT & broadcast channels for {selectedCountry}
            </p>
          </div>
        </div>

        <button
          onClick={onOpenManageModal}
          className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-lg shadow-amber-500/20 transition-all hover:scale-105"
        >
          <Plus className="w-4 h-4 stroke-[3]" />
          <span>Manage Teams</span>
        </button>
      </div>

      {/* Empty State */}
      {favoriteCards.length === 0 ? (
        <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 text-center flex flex-col items-center justify-center">
          <Star className="w-12 h-12 text-slate-600 mb-2 stroke-1" />
          <h3 className="text-base font-bold text-slate-200">No Favorite Teams Selected</h3>
          <p className="text-xs text-slate-400 max-w-md mt-1 mb-4">
            Select your favorite teams (Real Madrid, Arsenal, Pakistan, Lahore Qalandars, CSK, Inter Miami) to track their exact kickoff times and broadcasts.
          </p>
          <button
            onClick={onOpenManageModal}
            className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs shadow-lg transition-all"
          >
            ⭐ Choose Favorite Teams
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {favoriteCards.map((item, idx) => {
            if (!item) return null;
            const { team, nextMatch } = item;

            if (!nextMatch) {
              return (
                <div key={idx} className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-950 p-1.5 flex items-center justify-center border border-slate-800">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={team.crest} alt={team.name} className="max-w-full max-h-full object-contain" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white">{team.name}</h4>
                      <p className="text-[11px] text-slate-400">{team.leagueOrCountry}</p>
                    </div>
                  </div>
                  <span className="text-[10px] text-slate-500 px-2 py-1 rounded bg-slate-950">Off Season</span>
                </div>
              );
            }

            const countdown = getRelativeCountdown(nextMatch.utcKickoff);
            const formattedTime = formatFullKickoff(nextMatch.utcKickoff, selectedTimezone, format24h);
            const isHome = nextMatch.homeTeam.id === team.id || nextMatch.homeTeam.name.toLowerCase().includes(team.name.toLowerCase());
            const opponent = isHome ? nextMatch.awayTeam : nextMatch.homeTeam;
            const channels = nextMatch.broadcastsByCountry[selectedCountry] || nextMatch.broadcastsByCountry['Pakistan'] || ['Check network'];

            return (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-900/90 border border-amber-500/25 hover:border-amber-500/50 transition-all duration-200 shadow-xl flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between gap-2 pb-2.5 mb-3 border-b border-slate-800">
                    <div className="flex items-center gap-2">
                      <span className="text-base">{nextMatch.sport === 'football' ? '⚽' : '🏏'}</span>
                      <span className="text-xs font-black text-amber-300 uppercase tracking-wide">
                        {team.name}
                      </span>
                    </div>
                    <span className="text-[11px] font-extrabold px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                      {countdown.text}
                    </span>
                  </div>

                  {/* Matchup Visual */}
                  <div className="flex items-center justify-between gap-3 my-2">
                    <div className="flex items-center gap-2.5 flex-1">
                      <div className="w-10 h-10 rounded-xl bg-slate-950 p-1 flex items-center justify-center border border-slate-800 shrink-0">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={team.crest} alt={team.name} className="max-w-full max-h-full object-contain" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs font-black text-white truncate">{team.name}</div>
                        <div className="text-[10px] text-slate-400 font-semibold">{isHome ? 'Home' : 'Away'}</div>
                      </div>
                    </div>

                    <div className="text-xs font-black text-slate-500 px-1">VS</div>

                    <div className="flex items-center gap-2.5 flex-1 justify-end text-right">
                      <div className="min-w-0">
                        <div className="text-xs font-black text-white truncate">{opponent.name}</div>
                        <div className="text-[10px] text-slate-400 font-semibold">{isHome ? 'Away' : 'Home'}</div>
                      </div>
                      <div className="w-10 h-10 rounded-xl bg-slate-950 p-1 flex items-center justify-center border border-slate-800 shrink-0">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={opponent.crest} alt={opponent.name} className="max-w-full max-h-full object-contain" />
                      </div>
                    </div>
                  </div>

                  {/* Tournament & Venue */}
                  <div className="text-[11px] text-slate-400 my-2 flex items-center justify-between">
                    <span className="font-semibold text-slate-300">{nextMatch.competitionName}</span>
                    <span className="text-[10px] text-slate-400 truncate max-w-[140px]">{nextMatch.venue}</span>
                  </div>

                  {/* Kickoff in PKT */}
                  <div className="my-2.5 p-2.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between text-xs">
                    <span className="text-slate-400 font-semibold">⏰ Kickoff:</span>
                    <span className="text-emerald-400 font-extrabold">{formattedTime}</span>
                  </div>

                  {/* Broadcast Channels */}
                  <div className="my-2 text-[11px] text-slate-300">
                    <div className="flex items-center gap-1 text-cyan-300 font-bold mb-1">
                      <Tv className="w-3 h-3" />
                      <span>Watch in {selectedCountry}:</span>
                    </div>
                    <div className="text-slate-200 font-medium line-clamp-1">
                      📡 {channels[0]} {channels[1] ? `• ${channels[1]}` : ''}
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="flex items-center justify-between gap-2 pt-3 mt-2 border-t border-slate-800 text-xs">
                  <a
                    href={generateGoogleCalendarUrl(nextMatch, selectedCountry)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold transition-colors shadow-sm"
                  >
                    <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Calendar</span>
                  </a>

                  <button
                    onClick={() => onSetReminder(nextMatch)}
                    className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-300 font-bold transition-colors shadow-sm"
                  >
                    <Bell className="w-3.5 h-3.5 text-amber-400" />
                    <span>Remind</span>
                  </button>

                  <button
                    onClick={() => onAskAi(nextMatch)}
                    className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 font-extrabold transition-colors"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Scout</span>
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
