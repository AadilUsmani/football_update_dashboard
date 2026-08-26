'use client';

import React, { useState } from 'react';
import { Team } from '@/lib/types';

interface TeamLogoProps {
  team: Team;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const TeamLogo: React.FC<TeamLogoProps> = ({
  team,
  size = 'md',
  className = '',
}) => {
  const [hasError, setHasError] = useState(false);

  const sizeClasses = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-12 h-12 text-sm',
    lg: 'w-16 h-16 text-base',
  };

  const getTeamColor = (id: string) => {
    const colors: Record<string, { bg: string; text: string; border: string }> = {
      // Cricket Nations
      pakistan: { bg: 'from-emerald-900 to-green-950', text: 'text-emerald-300', border: 'border-emerald-500/40' },
      england: { bg: 'from-blue-900 to-red-950', text: 'text-red-300', border: 'border-red-500/40' },
      india: { bg: 'from-blue-900 to-sky-950', text: 'text-sky-300', border: 'border-sky-500/40' },
      australia: { bg: 'from-amber-900 to-yellow-950', text: 'text-yellow-300', border: 'border-yellow-500/40' },
      southafrica: { bg: 'from-green-900 to-emerald-950', text: 'text-emerald-300', border: 'border-green-500/40' },
      newzealand: { bg: 'from-slate-900 to-zinc-950', text: 'text-slate-200', border: 'border-slate-500/40' },
      bangladesh: { bg: 'from-emerald-900 to-red-950', text: 'text-emerald-300', border: 'border-emerald-500/40' },
      
      // PSL
      lahore_qalandars: { bg: 'from-emerald-900 to-green-950', text: 'text-emerald-300', border: 'border-emerald-500/40' },
      karachi_kings: { bg: 'from-blue-900 to-indigo-950', text: 'text-blue-300', border: 'border-blue-500/40' },
      islamabad_united: { bg: 'from-red-900 to-amber-950', text: 'text-amber-300', border: 'border-red-500/40' },
      multan_sultans: { bg: 'from-teal-900 to-emerald-950', text: 'text-teal-300', border: 'border-teal-500/40' },
      peshawar_zalmi: { bg: 'from-yellow-900 to-amber-950', text: 'text-yellow-300', border: 'border-yellow-500/40' },
      quetta_gladiators: { bg: 'from-purple-900 to-indigo-950', text: 'text-purple-300', border: 'border-purple-500/40' },

      // IPL
      csk: { bg: 'from-yellow-900 to-amber-950', text: 'text-yellow-300', border: 'border-yellow-500/40' },
      mi: { bg: 'from-blue-900 to-indigo-950', text: 'text-blue-300', border: 'border-blue-500/40' },
      rcb: { bg: 'from-red-950 to-amber-950', text: 'text-red-400', border: 'border-red-500/40' },
      kkr: { bg: 'from-purple-950 to-indigo-950', text: 'text-purple-300', border: 'border-purple-500/40' },

      // Football
      realmadrid: { bg: 'from-slate-900 to-indigo-950', text: 'text-amber-300', border: 'border-amber-500/40' },
      barcelona: { bg: 'from-blue-950 to-red-950', text: 'text-red-300', border: 'border-blue-500/40' },
      arsenal: { bg: 'from-red-950 to-rose-900', text: 'text-white', border: 'border-red-500/40' },
      mancity: { bg: 'from-sky-950 to-blue-900', text: 'text-sky-300', border: 'border-sky-500/40' },
      liverpool: { bg: 'from-red-950 to-emerald-950', text: 'text-red-300', border: 'border-red-500/40' },
      chelsea: { bg: 'from-blue-950 to-indigo-900', text: 'text-blue-300', border: 'border-blue-500/40' },
      bayern: { bg: 'from-red-950 to-slate-900', text: 'text-red-300', border: 'border-red-500/40' },
      intermiami: { bg: 'from-pink-950 to-slate-900', text: 'text-pink-300', border: 'border-pink-500/40' },
    };

    return colors[team.id] || { bg: 'from-slate-800 to-slate-950', text: 'text-white', border: 'border-slate-700' };
  };

  const styling = getTeamColor(team.id);

  if (hasError || !team.crest) {
    return (
      <div
        className={`${sizeClasses[size]} rounded-2xl bg-gradient-to-tr ${styling.bg} ${styling.border} border flex flex-col items-center justify-center font-black ${styling.text} shadow-md shrink-0 ${className}`}
      >
        <span>{team.shortName || team.name.substring(0, 3).toUpperCase()}</span>
      </div>
    );
  }

  return (
    <div
      className={`${sizeClasses[size]} rounded-2xl bg-slate-900/90 border border-slate-800 p-1.5 flex items-center justify-center shadow-md shrink-0 overflow-hidden ${className}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={team.crest}
        alt={team.name}
        className="max-w-full max-h-full object-contain filter drop-shadow"
        loading="lazy"
        onError={() => setHasError(true)}
      />
    </div>
  );
};
