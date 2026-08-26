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
  { id: 'liverpool', name: 'Liverpool', shortName: 'LIV', crest: 'https://crests.football-data.org/64.png', sport: 'football', leagueOrCountry: 'Premier League', recentForm: ['W', 'W', 'W', 'W', 'D'] },
  { id: 'manunited', name: 'Manchester United', shortName: 'MUN', crest: 'https://crests.football-data.org/66.png', sport: 'football', leagueOrCountry: 'Premier League', recentForm: ['W', 'L', 'W', 'D', 'L'] },
  { id: 'chelsea', name: 'Chelsea', shortName: 'CHE', crest: 'https://crests.football-data.org/61.png', sport: 'football', leagueOrCountry: 'Premier League', recentForm: ['L', 'W', 'D', 'W', 'W'] },
  { id: 'brighton', name: 'Brighton & Hove Albion', shortName: 'BHA', crest: 'https://crests.football-data.org/397.png', sport: 'football', leagueOrCountry: 'Premier League', recentForm: ['W', 'W', 'W', 'D', 'L'] },
  { id: 'tottenham', name: 'Tottenham Hotspur', shortName: 'TOT', crest: 'https://crests.football-data.org/73.png', sport: 'football', leagueOrCountry: 'Premier League', recentForm: ['D', 'W', 'L', 'W', 'W'] },

  // La Liga
  { id: 'realmadrid', name: 'Real Madrid', shortName: 'RMA', crest: 'https://crests.football-data.org/86.png', sport: 'football', leagueOrCountry: 'La Liga', recentForm: ['W', 'D', 'W', 'W', 'W'] },
  { id: 'barcelona', name: 'FC Barcelona', shortName: 'FCB', crest: 'https://crests.football-data.org/81.png', sport: 'football', leagueOrCountry: 'La Liga', recentForm: ['W', 'W', 'W', 'W', 'W'] },
  { id: 'realbetis', name: 'Real Betis', shortName: 'BET', crest: 'https://crests.football-data.org/90.png', sport: 'football', leagueOrCountry: 'La Liga', recentForm: ['D', 'D', 'W', 'L', 'D'] },

  // UCL & Bundesliga
  { id: 'bayern', name: 'Bayern München', shortName: 'BAY', crest: 'https://crests.football-data.org/5.png', sport: 'football', leagueOrCountry: 'Bundesliga', recentForm: ['W', 'W', 'W', 'W', 'D'] },
  { id: 'leverkusen', name: 'Bayer 04 Leverkusen', shortName: 'B04', crest: 'https://crests.football-data.org/3.png', sport: 'football', leagueOrCountry: 'Bundesliga', recentForm: ['W', 'W', 'W', 'D', 'W'] },
  { id: 'intermilan', name: 'Inter Milan', shortName: 'INT', crest: 'https://crests.football-data.org/108.png', sport: 'football', leagueOrCountry: 'Champions League', recentForm: ['D', 'W', 'W', 'W', 'W'] },

  // MLS
  { id: 'intermiami', name: 'Inter Miami CF', shortName: 'MIA', crest: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/5c/Inter_Miami_CF_logo.svg/300px-Inter_Miami_CF_logo.svg.png', sport: 'football', leagueOrCountry: 'MLS', recentForm: ['W', 'W', 'W', 'D', 'W'] },
  { id: 'chicagofire', name: 'Chicago Fire', shortName: 'CHI', crest: '', sport: 'football', leagueOrCountry: 'MLS', recentForm: ['D', 'L', 'W', 'L', 'D'] },
];

export const FOOTBALL_FIXTURES: Match[] = [
  // 1. EPL Matchweek 3: Manchester United vs Liverpool (Super Sunday)
  {
    id: 'fb-epl-mun-liv',
    sport: 'football',
    competitionId: 'epl',
    competitionName: 'Premier League',
    seriesOrTourName: 'Premier League 2024/25 Season',
    formatOrStage: 'Matchweek 3 (Super Sunday)',
    scheduleContext: 'current_series',
    dateLabel: 'Sunday • 8:00 PM PKT',
    homeTeam: FOOTBALL_TEAMS.find(t => t.id === 'manunited')!,
    awayTeam: FOOTBALL_TEAMS.find(t => t.id === 'liverpool')!,
    utcKickoff: '2024-09-01T15:00:00Z', // 3:00 PM UTC = 8:00 PM PKT (4:00 PM BST)
    venue: 'Old Trafford',
    city: 'Manchester, England',
    status: 'scheduled',
    broadcastsByCountry: {
      'Pakistan': ['Tapmad (Exclusive Live HD Stream)', 'A Sports HD (Satellite/Cable)', 'Sony LIV (Select)'],
      'United Kingdom': ['Sky Sports Main Event', 'Sky Sports Premier League', 'NOW TV'],
      'United States': ['Peacock Premium', 'USA Network'],
      'India': ['Star Sports Select HD 1', 'Disney+ Hotstar Live'],
      'UAE / Middle East': ['beIN Sports 1 Premium', 'TOD App Stream']
    },
    watchUrlsByCountry: {
      'Pakistan': 'https://www.tapmad.com/sports',
      'United Kingdom': 'https://www.sky.com/sports/football',
      'United States': 'https://www.peacocktv.com/sports'
    },
    headToHeadSummary: 'The grandest rivalry in English football. Arne Slot’s first competitive visit to Old Trafford.',
    keyPlayers: ['Bruno Fernandes (C)', 'Marcus Rashford', 'Mohamed Salah', 'Virgil van Dijk (C)'],
    aiMatchInsight: '8:00 PM PKT kickoff. Liverpool visits Old Trafford in the headline clash of Matchweek 3.'
  },

  // 2. EPL Matchweek 3: Arsenal vs Brighton (Saturday Lunchtime)
  {
    id: 'fb-epl-ars-bha',
    sport: 'football',
    competitionId: 'epl',
    competitionName: 'Premier League',
    seriesOrTourName: 'Premier League 2024/25 Season',
    formatOrStage: 'Matchweek 3 (Saturday Lunchtime)',
    scheduleContext: 'current_series',
    dateLabel: 'Saturday • 4:30 PM PKT',
    homeTeam: FOOTBALL_TEAMS.find(t => t.id === 'arsenal')!,
    awayTeam: FOOTBALL_TEAMS.find(t => t.id === 'brighton')!,
    utcKickoff: '2024-08-31T11:30:00Z', // 11:30 AM UTC = 4:30 PM PKT (12:30 PM London)
    venue: 'Emirates Stadium',
    city: 'London, England',
    status: 'scheduled',
    broadcastsByCountry: {
      'Pakistan': ['Tapmad (Live HD Stream)', 'A Sports HD'],
      'United Kingdom': ['TNT Sports 1', 'discovery+ App'],
      'United States': ['USA Network', 'Peacock'],
      'India': ['Star Sports Select 1 HD', 'Disney+ Hotstar']
    },
    watchUrlsByCountry: {
      'Pakistan': 'https://www.tapmad.com/sports',
      'United Kingdom': 'https://www.tntsports.co.uk'
    },
    headToHeadSummary: 'Both sides looking to maintain their 100% win records.',
    keyPlayers: ['Bukayo Saka', 'Martin Ødegaard (C)', 'Kai Havertz', 'Kaoru Mitoma'],
    aiMatchInsight: '4:30 PM PKT kickoff at Emirates Stadium.'
  },

  // 3. La Liga Jornada 4: Real Madrid vs Real Betis (Bernabéu Night Game)
  {
    id: 'fb-laliga-rma-bet',
    sport: 'football',
    competitionId: 'laliga',
    competitionName: 'La Liga',
    seriesOrTourName: 'La Liga EA SPORTS 2024/25',
    formatOrStage: 'Jornada 4 (Night Game)',
    scheduleContext: 'current_series',
    dateLabel: 'Sunday • 12:30 AM Midnight PKT',
    homeTeam: FOOTBALL_TEAMS.find(t => t.id === 'realmadrid')!,
    awayTeam: FOOTBALL_TEAMS.find(t => t.id === 'realbetis')!,
    utcKickoff: '2024-09-01T19:30:00Z', // 7:30 PM UTC = 12:30 AM Midnight PKT (9:30 PM Madrid)
    venue: 'Santiago Bernabéu',
    city: 'Madrid, Spain',
    status: 'scheduled',
    broadcastsByCountry: {
      'Pakistan': ['Galaxy Sports HD', 'Tapmad Sports', 'beIN Sports MENA (Satellite)'],
      'United Kingdom': ['Premier Sports 1', 'LaLigaTV', 'ITV 4'],
      'United States': ['ESPN+', 'ESPN Deportes'],
      'India': ['Sports18 1 HD', 'JioCinema (Free Stream)', 'GXR World'],
      'UAE / Middle East': ['beIN Sports HD 1', 'TOD Streaming']
    },
    watchUrlsByCountry: {
      'Pakistan': 'https://www.tapmad.com/sports',
      'United States': 'https://plus.espn.com'
    },
    headToHeadSummary: 'Kylian Mbappé and Vinícius lead the European champions at the Bernabéu.',
    keyPlayers: ['Kylian Mbappé', 'Vinícius Júnior', 'Rodrygo', 'Isco'],
    aiMatchInsight: '12:30 AM PKT start under the Bernabéu roof.'
  },

  // 4. UEFA Champions League: Manchester City vs Inter Milan (Matchday 1)
  {
    id: 'fb-ucl-mci-int',
    sport: 'football',
    competitionId: 'ucl',
    competitionName: 'UEFA Champions League',
    seriesOrTourName: 'UCL League Phase 2024/25',
    formatOrStage: 'Matchday 1 (2023 Final Rematch)',
    scheduleContext: 'upcoming_tour',
    dateLabel: 'Sep 18, 2024 • 12:00 AM Midnight PKT',
    homeTeam: FOOTBALL_TEAMS.find(t => t.id === 'mancity')!,
    awayTeam: FOOTBALL_TEAMS.find(t => t.id === 'intermilan')!,
    utcKickoff: '2024-09-18T19:00:00Z', // 7:00 PM UTC = 12:00 AM Midnight PKT
    venue: 'Etihad Stadium',
    city: 'Manchester, England',
    status: 'scheduled',
    broadcastsByCountry: {
      'Pakistan': ['Tapmad (Exclusive Live Stream)', 'A Sports HD (Select UCL)', 'Sony LIV HD'],
      'United Kingdom': ['TNT Sports 1', 'discovery+ App'],
      'United States': ['Paramount+ (All Matches Live)', 'CBS Sports Network'],
      'India': ['Sony Sports Ten 2 HD', 'Sony LIV Stream'],
      'UAE / Middle East': ['beIN Sports 1 Premium', 'TOD App']
    },
    watchUrlsByCountry: {
      'Pakistan': 'https://www.tapmad.com',
      'United States': 'https://www.paramountplus.com'
    },
    headToHeadSummary: 'Rematch of the 2023 Istanbul Champions League Final.',
    keyPlayers: ['Erling Haaland', 'Kevin De Bruyne', 'Rodri', 'Lautaro Martínez (C)'],
    aiMatchInsight: '12:00 AM PKT marquee European night.'
  },

  // 5. MLS: Inter Miami vs Chicago Fire
  {
    id: 'fb-mls-mia-chi',
    sport: 'football',
    competitionId: 'mls',
    competitionName: 'MLS (Major League Soccer)',
    seriesOrTourName: 'MLS Regular Season 2024',
    formatOrStage: 'Eastern Conference Clash',
    scheduleContext: 'current_series',
    dateLabel: 'Sunday • 4:30 AM PKT',
    homeTeam: FOOTBALL_TEAMS.find(t => t.id === 'intermiami')!,
    awayTeam: FOOTBALL_TEAMS.find(t => t.id === 'chicagofire')!,
    utcKickoff: '2024-09-01T23:30:00Z', // 11:30 PM UTC = 4:30 AM PKT (7:30 PM ET)
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
    headToHeadSummary: 'Inter Miami defending their top spot in the Supporters’ Shield race.',
    keyPlayers: ['Lionel Messi', 'Luis Suárez', 'Sergio Busquets', 'Jordi Alba'],
    aiMatchInsight: '4:30 AM PKT morning kickoff in Pakistan.'
  }
];
