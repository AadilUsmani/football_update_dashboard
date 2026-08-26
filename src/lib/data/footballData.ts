import { Match, Team } from '../types';

export const FOOTBALL_LEAGUES = [
  { id: 'all', name: 'All Competitions', icon: '⚽', badge: 'All' },
  { id: 'epl', name: 'Premier League', icon: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', badge: 'EPL', color: '#38003c' },
  { id: 'laliga', name: 'La Liga', icon: '🇪🇸', badge: 'LaLiga', color: '#ee122b' },
  { id: 'ucl', name: 'Champions League', icon: '🏆', badge: 'UCL', color: '#001438' },
  { id: 'bundesliga', name: 'Bundesliga', icon: '🇩🇪', badge: 'Bundesliga', color: '#d20515' },
  { id: 'mls', name: 'MLS (Major League Soccer)', icon: '🇺🇸', badge: 'MLS', color: '#002f6c' },
];

export const FOOTBALL_TEAMS: Team[] = [
  // EPL
  { id: 'arsenal', name: 'Arsenal', shortName: 'ARS', crest: 'https://crests.football-data.org/57.png', sport: 'football', leagueOrCountry: 'Premier League', recentForm: ['W', 'W', 'W', 'D', 'W'] },
  { id: 'mancity', name: 'Manchester City', shortName: 'MCI', crest: 'https://crests.football-data.org/65.png', sport: 'football', leagueOrCountry: 'Premier League', recentForm: ['W', 'W', 'W', 'W', 'W'] },
  { id: 'manunited', name: 'Manchester United', shortName: 'MUN', crest: 'https://crests.football-data.org/66.png', sport: 'football', leagueOrCountry: 'Premier League', recentForm: ['W', 'L', 'W', 'D', 'L'] },
  { id: 'crystalpalace', name: 'Crystal Palace', shortName: 'CRY', crest: 'https://crests.football-data.org/354.png', sport: 'football', leagueOrCountry: 'Premier League', recentForm: ['D', 'L', 'W', 'W', 'D'] },

  // La Liga
  { id: 'realmadrid', name: 'Real Madrid', shortName: 'RMA', crest: 'https://crests.football-data.org/86.png', sport: 'football', leagueOrCountry: 'La Liga', recentForm: ['W', 'D', 'W', 'W', 'W'] },
  { id: 'realsociedad', name: 'Real Sociedad', shortName: 'RSO', crest: 'https://crests.football-data.org/92.png', sport: 'football', leagueOrCountry: 'La Liga', recentForm: ['L', 'W', 'D', 'W', 'L'] },

  // Bundesliga & UCL
  { id: 'bayern', name: 'Bayern München', shortName: 'BAY', crest: 'https://crests.football-data.org/5.png', sport: 'football', leagueOrCountry: 'Bundesliga', recentForm: ['W', 'W', 'W', 'W', 'D'] },
  { id: 'stuttgart', name: 'VfB Stuttgart', shortName: 'VFB', crest: 'https://crests.football-data.org/10.png', sport: 'football', leagueOrCountry: 'Bundesliga', recentForm: ['W', 'D', 'W', 'L', 'W'] },

  // MLS
  { id: 'intermiami', name: 'Inter Miami CF', shortName: 'MIA', crest: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/5c/Inter_Miami_CF_logo.svg/300px-Inter_Miami_CF_logo.svg.png', sport: 'football', leagueOrCountry: 'MLS', recentForm: ['W', 'W', 'W', 'D', 'W'] },
  { id: 'chicagofire', name: 'Chicago Fire', shortName: 'CHI', crest: '', sport: 'football', leagueOrCountry: 'MLS', recentForm: ['D', 'L', 'W', 'L', 'D'] },
];

export const FOOTBALL_FIXTURES: Match[] = [
  // 1. La Liga 2026/27 Jornada 1: Real Madrid vs Real Sociedad (TONIGHT / AUG 26, 2026)
  {
    id: 'fb-2026-rma-rso-j1',
    sport: 'football',
    competitionId: 'laliga',
    competitionName: 'La Liga',
    competitionLogo: '🇪🇸',
    seriesOrTourName: 'La Liga 2026/27 (Jornada 1)',
    formatOrStage: 'Jornada 1 (Opening Night)',
    scheduleContext: 'current_series',
    dateLabel: 'Tonight, Aug 26 • 12:00 AM Midnight PKT',
    homeTeam: FOOTBALL_TEAMS.find(t => t.id === 'realmadrid')!,
    awayTeam: FOOTBALL_TEAMS.find(t => t.id === 'realsociedad')!,
    utcKickoff: '2026-08-26T19:00:00Z', // 19:00 UTC = 12:00 AM Midnight PKT (21:00 CEST Madrid)
    venue: 'Estadio Santiago Bernabéu',
    city: 'Madrid, Spain',
    status: 'scheduled',
    broadcastsByCountry: {
      'Pakistan': ['Galaxy Sports HD (Satellite/Cable)', 'Tapmad Sports (Live HD Stream)', 'beIN Sports MENA HD'],
      'United Kingdom': ['Premier Sports 1', 'LaLigaTV', 'ITV 4'],
      'United States': ['ESPN+', 'ESPN Deportes'],
      'India': ['Sports18 1 HD', 'JioCinema (Free Stream)', 'GXR World'],
      'UAE / Middle East': ['beIN Sports HD 1', 'TOD Streaming App']
    },
    watchUrlsByCountry: {
      'Pakistan': 'https://www.tapmad.com/sports',
      'United States': 'https://plus.espn.com'
    },
    headToHeadSummary: 'Real Madrid opens their 2026/27 campaign at the Bernabéu hosting Real Sociedad.',
    keyPlayers: ['Kylian Mbappé', 'Vinícius Júnior', 'Jude Bellingham', 'Mikel Oyarzabal', 'Takefusa Kubo'],
    aiMatchInsight: '12:00 AM PKT midnight kickoff. Real Madrid begins their title defence under the Santiago Bernabéu lights.'
  },

  // 2. Premier League 2026/27 Matchweek 2: Crystal Palace vs Manchester City (AUG 28, 2026)
  {
    id: 'fb-2026-cry-mci-mw2',
    sport: 'football',
    competitionId: 'epl',
    competitionName: 'Premier League',
    competitionLogo: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
    seriesOrTourName: 'Premier League 2026/27 (Matchweek 2)',
    formatOrStage: 'Matchweek 2 (Friday Night Football)',
    scheduleContext: 'current_series',
    dateLabel: 'Friday, Aug 28 • 12:00 AM Midnight PKT',
    homeTeam: FOOTBALL_TEAMS.find(t => t.id === 'crystalpalace')!,
    awayTeam: FOOTBALL_TEAMS.find(t => t.id === 'mancity')!,
    utcKickoff: '2026-08-28T19:00:00Z', // 19:00 UTC = 12:00 AM Midnight PKT (20:00 BST London)
    venue: 'Selhurst Park',
    city: 'London, England',
    status: 'scheduled',
    broadcastsByCountry: {
      'Pakistan': ['Tapmad (Live HD Stream)', 'A Sports HD (Satellite/Cable)', 'Sony LIV Select'],
      'United Kingdom': ['Sky Sports Main Event', 'Sky Sports Premier League', 'NOW TV'],
      'United States': ['USA Network', 'Peacock Premium'],
      'India': ['Star Sports Select 1 HD', 'Disney+ Hotstar Live'],
      'UAE / Middle East': ['beIN Sports 1 Premium', 'TOD App']
    },
    watchUrlsByCountry: {
      'Pakistan': 'https://www.tapmad.com/sports',
      'United Kingdom': 'https://www.sky.com/sports/football'
    },
    headToHeadSummary: 'Pep Guardiola takes Manchester City to Selhurst Park in Friday Night Football.',
    keyPlayers: ['Erling Haaland', 'Phil Foden', 'Kevin De Bruyne', 'Eberechi Eze', 'Jean-Philippe Mateta'],
    aiMatchInsight: '12:00 AM PKT Friday night London clash.'
  },

  // 3. Bundesliga 2026/27 Spieltag 1: Bayern Munich vs VfB Stuttgart (AUG 28, 2026)
  {
    id: 'fb-2026-bay-vfb-sp1',
    sport: 'football',
    competitionId: 'bundesliga',
    competitionName: 'Bundesliga',
    competitionLogo: '🇩🇪',
    seriesOrTourName: 'Bundesliga 2026/27 Season Opener',
    formatOrStage: 'Spieltag 1 (Friday Opener)',
    scheduleContext: 'current_series',
    dateLabel: 'Friday, Aug 28 • 11:30 PM PKT',
    homeTeam: FOOTBALL_TEAMS.find(t => t.id === 'bayern')!,
    awayTeam: FOOTBALL_TEAMS.find(t => t.id === 'stuttgart')!,
    utcKickoff: '2026-08-28T18:30:00Z', // 18:30 UTC = 11:30 PM PKT (20:30 CEST Munich)
    venue: 'Allianz Arena',
    city: 'Munich, Germany',
    status: 'scheduled',
    broadcastsByCountry: {
      'Pakistan': ['Tapmad Sports', 'Sony Sports Network HD', 'A Sports HD'],
      'Germany': ['Sat.1 (Free TV)', 'Sky Sport Bundesliga 1 HD', 'WOW TV'],
      'United Kingdom': ['Sky Sports Football'],
      'United States': ['ESPN+ Live Stream'],
      'India': ['Sony Sports Ten 2 HD', 'Sony LIV App']
    },
    watchUrlsByCountry: {
      'Pakistan': 'https://www.tapmad.com/sports'
    },
    headToHeadSummary: 'Bundesliga season curtain-raiser at the Allianz Arena.',
    keyPlayers: ['Harry Kane', 'Jamal Musiala', 'Michael Olise', 'Deniz Undav', 'Enzo Millot'],
    aiMatchInsight: '11:30 PM PKT Friday kickoff at the Allianz Arena.'
  },

  // 4. MLS 2026 Regular Season: Inter Miami vs Chicago Fire (AUG 30, 2026)
  {
    id: 'fb-2026-mia-chi-mls',
    sport: 'football',
    competitionId: 'mls',
    competitionName: 'MLS (Major League Soccer)',
    competitionLogo: '🇺🇸',
    seriesOrTourName: 'MLS Regular Season 2026',
    formatOrStage: 'Eastern Conference Fixture',
    scheduleContext: 'current_series',
    dateLabel: 'Sunday, Aug 30 • 4:30 AM PKT',
    homeTeam: FOOTBALL_TEAMS.find(t => t.id === 'intermiami')!,
    awayTeam: FOOTBALL_TEAMS.find(t => t.id === 'chicagofire')!,
    utcKickoff: '2026-08-30T23:30:00Z', // 23:30 UTC = 4:30 AM PKT (7:30 PM ET)
    venue: 'Chase Stadium',
    city: 'Fort Lauderdale, Florida, USA',
    status: 'scheduled',
    broadcastsByCountry: {
      'Pakistan': ['Apple TV (MLS Season Pass - Worldwide Live)', 'Apple TV App'],
      'United Kingdom': ['Apple TV (MLS Season Pass)'],
      'United States': ['Apple TV (MLS Season Pass)'],
      'India': ['Apple TV (MLS Season Pass)']
    },
    watchUrlsByCountry: {
      'Pakistan': 'https://tv.apple.com/channel/tvs.sbd.7000'
    },
    headToHeadSummary: 'Lionel Messi and Inter Miami at Chase Stadium.',
    keyPlayers: ['Lionel Messi', 'Luis Suárez', 'Sergio Busquets', 'Jordi Alba'],
    aiMatchInsight: '4:30 AM PKT early morning kickoff in Pakistan.'
  }
];
