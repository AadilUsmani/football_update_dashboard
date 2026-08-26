import { Match, FootballLeagueId, Team } from '../types';
import { FOOTBALL_TEAMS } from '../data/footballData';

const LEAGUE_MAP: Record<FootballLeagueId, { id: string; name: string; logo: string; format: string }> = {
  epl: { id: '4328', name: 'Premier League', logo: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', format: 'League Matchweek' },
  laliga: { id: '4335', name: 'La Liga', logo: '🇪🇸', format: 'Jornada' },
  ucl: { id: '4480', name: 'UEFA Champions League', logo: '🏆', format: 'Matchday' },
  bundesliga: { id: '4331', name: 'Bundesliga', logo: '🇩🇪', format: 'Spieltag' },
  mls: { id: '4346', name: 'MLS (Major League Soccer)', logo: '🇺🇸', format: 'Regular Season' },
};

export async function fetchLiveFootballFixtures(leagueId: FootballLeagueId): Promise<Match[]> {
  const meta = LEAGUE_MAP[leagueId];
  if (!meta) return [];

  try {
    const url = `https://www.thesportsdb.com/api/v1/json/3/eventsseason.php?id=${meta.id}&s=2024-2025`;
    const res = await fetch(url, { next: { revalidate: 3600 } });
    if (!res.ok) throw new Error(`Failed to fetch ${meta.name}`);

    const data = await res.json();
    if (!data || !data.events) return [];

    const rawEvents = data.events;

    return rawEvents.slice(0, 15).map((evt: any) => {
      const homeName = evt.strHomeTeam || 'Home Team';
      const awayName = evt.strAwayTeam || 'Away Team';
      
      const homeTeam: Team = FOOTBALL_TEAMS.find(t => t.name.toLowerCase() === homeName.toLowerCase()) || {
        id: homeName.toLowerCase().replace(/[^a-z0-9]/g, ''),
        name: homeName,
        shortName: homeName.substring(0, 3).toUpperCase(),
        crest: evt.strHomeTeamBadge || `https://flagcdn.com/w160/gb.png`,
        sport: 'football',
        leagueOrCountry: meta.name,
      };

      const awayTeam: Team = FOOTBALL_TEAMS.find(t => t.name.toLowerCase() === awayName.toLowerCase()) || {
        id: awayName.toLowerCase().replace(/[^a-z0-9]/g, ''),
        name: awayName,
        shortName: awayName.substring(0, 3).toUpperCase(),
        crest: evt.strAwayTeamBadge || `https://flagcdn.com/w160/gb.png`,
        sport: 'football',
        leagueOrCountry: meta.name,
      };

      const dateStr = evt.dateEvent || '2024-09-01';
      const timeStr = evt.strTime ? evt.strTime.substring(0, 5) : '15:00';
      const utcKickoff = `${dateStr}T${timeStr}:00Z`;

      return {
        id: `tsdb-${evt.idEvent || Math.random().toString(36).substring(2, 9)}`,
        sport: 'football',
        competitionId: leagueId,
        competitionName: meta.name,
        competitionLogo: meta.logo,
        seriesOrTourName: `${meta.name} 2024/25`,
        formatOrStage: `${meta.format} ${evt.intRound || '1'}`,
        scheduleContext: 'current_series',
        dateLabel: `${dateStr} • ${timeStr} UTC`,
        homeTeam,
        awayTeam,
        utcKickoff,
        venue: evt.strVenue || 'Official Stadium',
        city: evt.strCity || 'Europe',
        status: evt.strStatus === 'Match Finished' ? 'finished' : 'scheduled',
        broadcastsByCountry: {
          'Pakistan': ['Tapmad (Live HD Stream)', 'A Sports HD', 'Sony LIV'],
          'United Kingdom': ['Sky Sports', 'TNT Sports', 'discovery+'],
          'United States': ['Peacock', 'Paramount+', 'ESPN+'],
          'India': ['Disney+ Hotstar', 'Sony LIV', 'JioCinema'],
          'UAE / Middle East': ['beIN Sports 1', 'TOD App']
        },
        watchUrlsByCountry: {
          'Pakistan': 'https://www.tapmad.com/sports'
        },
        headToHeadSummary: `Official ${meta.name} fixture round ${evt.intRound || '1'}.`,
        keyPlayers: [],
        aiMatchInsight: `Official matchday clash in ${meta.name} at ${evt.strVenue || 'home stadium'}.`
      };
    });
  } catch (err) {
    console.warn(`Error fetching live fixtures for ${leagueId}:`, err);
    return [];
  }
}
