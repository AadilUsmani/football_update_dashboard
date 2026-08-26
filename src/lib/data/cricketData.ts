import { Match, Team } from '../types';

export const CRICKET_CATEGORIES = [
  { id: 'all', name: 'All Cricket', icon: '🏏', badge: 'All' },
  { id: 'test', name: 'Test Matches (WTC)', icon: '🔴', badge: 'TEST', color: '#dc2626' },
  { id: 't20i', name: 'T20 Internationals', icon: '🟢', badge: 'T20I', color: '#16a34a' },
  { id: 'odi', name: 'One Day Internationals', icon: '🔵', badge: 'ODI', color: '#2563eb' },
];

export const CRICKET_TEAMS: Team[] = [
  { 
    id: 'pakistan', 
    name: 'Pakistan', 
    shortName: 'PAK', 
    crest: 'https://flagcdn.com/w160/pk.png', 
    sport: 'cricket', 
    leagueOrCountry: 'International (PCB)', 
    recentForm: ['W', 'W', 'L', 'W', 'W'] 
  },
  { 
    id: 'england', 
    name: 'England', 
    shortName: 'ENG', 
    crest: 'https://flagcdn.com/w160/gb-eng.png', 
    sport: 'cricket', 
    leagueOrCountry: 'International (ECB)', 
    recentForm: ['W', 'W', 'W', 'L', 'W'] 
  },
  { 
    id: 'australia', 
    name: 'Australia', 
    shortName: 'AUS', 
    crest: 'https://flagcdn.com/w160/au.png', 
    sport: 'cricket', 
    leagueOrCountry: 'International (CA)', 
    recentForm: ['W', 'L', 'W', 'W', 'W'] 
  },
  { 
    id: 'southafrica', 
    name: 'South Africa', 
    shortName: 'SA', 
    crest: 'https://flagcdn.com/w160/za.png', 
    sport: 'cricket', 
    leagueOrCountry: 'International (CSA)', 
    recentForm: ['W', 'W', 'D', 'W', 'L'] 
  },
  { 
    id: 'india', 
    name: 'India', 
    shortName: 'IND', 
    crest: 'https://flagcdn.com/w160/in.png', 
    sport: 'cricket', 
    leagueOrCountry: 'International (BCCI)', 
    recentForm: ['W', 'W', 'W', 'W', 'L'] 
  },
];

export const CRICKET_FIXTURES: Match[] = [
  // 1. Pakistan Tour of England 2026: 2nd Test at Lord's (Tomorrow, Aug 27, 2026)
  {
    id: 'ck-2026-eng-pak-2nd-test',
    sport: 'cricket',
    competitionId: 'test',
    competitionName: 'ICC World Test Championship',
    competitionLogo: '🔴',
    seriesOrTourName: 'Pakistan Tour of England 2026 (Test Series)',
    formatOrStage: "2nd Test Match (Lord's)",
    scheduleContext: 'current_series',
    dateLabel: 'Aug 27 – 31, 2026 • 3:00 PM PKT',
    homeTeam: CRICKET_TEAMS.find(t => t.id === 'england')!,
    awayTeam: CRICKET_TEAMS.find(t => t.id === 'pakistan')!,
    utcKickoff: '2026-08-27T10:00:00Z', // 10:00 AM UTC = 3:00 PM PKT (11:00 AM BST)
    venue: "Lord's Cricket Ground",
    city: 'London, England',
    status: 'scheduled',
    broadcastsByCountry: {
      'Pakistan': ['A Sports HD (Official PCB Rights)', 'Ten Sports Pakistan HD', 'PTV Sports HD', 'Tapmad (Live HD Stream)', 'Tamasha App (Free/HD)'],
      'United Kingdom': ['Sky Sports Cricket', 'Sky Sports Main Event', 'BBC Radio 5 Live'],
      'United States': ['Willow TV HD', 'Sling TV'],
      'India': ['Sony Sports Ten 1 HD', 'Sony LIV'],
      'UAE / Middle East': ['eLife CricLife 2 HD', 'STARZPLAY Sports']
    },
    watchUrlsByCountry: {
      'Pakistan': 'https://tamashaweb.com',
      'United Kingdom': 'https://www.skysports.com/cricket',
      'United States': 'https://www.willow.tv'
    },
    headToHeadSummary: 'Historic Lord’s Test. Pakistan touring England for the 3-match ICC World Test Championship series.',
    keyPlayers: ['Shan Masood (C)', 'Babar Azam', 'Shaheen Shah Afridi', 'Ben Stokes (C)', 'Joe Root', 'Harry Brook'],
    aiMatchInsight: '3:00 PM PKT afternoon start in Pakistan (11:00 AM local London time). Lord’s slope and swing bowling under English skies.'
  },

  // 2. Pakistan Tour of England 2026: 3rd Test at Edgbaston (Sep 9, 2026)
  {
    id: 'ck-2026-eng-pak-3rd-test',
    sport: 'cricket',
    competitionId: 'test',
    competitionName: 'ICC World Test Championship',
    competitionLogo: '🔴',
    seriesOrTourName: 'Pakistan Tour of England 2026 (Test Series)',
    formatOrStage: '3rd Test Match (Edgbaston)',
    scheduleContext: 'upcoming_tour',
    dateLabel: 'Sep 9 – 13, 2026 • 3:00 PM PKT',
    homeTeam: CRICKET_TEAMS.find(t => t.id === 'england')!,
    awayTeam: CRICKET_TEAMS.find(t => t.id === 'pakistan')!,
    utcKickoff: '2026-09-09T10:00:00Z', // 10:00 AM UTC = 3:00 PM PKT
    venue: 'Edgbaston Cricket Ground',
    city: 'Birmingham, England',
    status: 'scheduled',
    broadcastsByCountry: {
      'Pakistan': ['A Sports HD', 'Ten Sports Pakistan HD', 'PTV Sports HD', 'Tapmad', 'Tamasha App'],
      'United Kingdom': ['Sky Sports Cricket', 'Sky Sports Main Event'],
      'United States': ['Willow TV HD'],
      'India': ['Sony Sports Ten 1 HD', 'Sony LIV']
    },
    watchUrlsByCountry: {
      'Pakistan': 'https://tamashaweb.com',
      'United Kingdom': 'https://www.skysports.com/cricket'
    },
    headToHeadSummary: 'Deciding 3rd Test of the England vs Pakistan bilateral series at Edgbaston.',
    keyPlayers: ['Shan Masood (C)', 'Babar Azam', 'Naseem Shah', 'Ben Stokes (C)', 'Mark Wood'],
    aiMatchInsight: '3:00 PM PKT start in Birmingham.'
  },

  // 3. Pakistan Tour of England 2026: 1st T20I (Sep 15, 2026)
  {
    id: 'ck-2026-eng-pak-1st-t20i',
    sport: 'cricket',
    competitionId: 't20i',
    competitionName: 'England vs Pakistan T20 Series',
    competitionLogo: '🟢',
    seriesOrTourName: 'Pakistan Tour of England 2026 (White Ball)',
    formatOrStage: '1st T20 International (Night)',
    scheduleContext: 'upcoming_tour',
    dateLabel: 'Sep 15, 2026 • 10:30 PM PKT',
    homeTeam: CRICKET_TEAMS.find(t => t.id === 'england')!,
    awayTeam: CRICKET_TEAMS.find(t => t.id === 'pakistan')!,
    utcKickoff: '2026-09-15T17:30:00Z', // 5:30 PM UTC = 10:30 PM PKT (6:30 PM UK)
    venue: 'Headingley Stadium',
    city: 'Leeds, England',
    status: 'scheduled',
    broadcastsByCountry: {
      'Pakistan': ['A Sports HD', 'Ten Sports HD', 'Tapmad Live HD', 'Tamasha App'],
      'United Kingdom': ['Sky Sports Cricket', 'Sky Sports Main Event'],
      'United States': ['Willow TV HD'],
      'India': ['Sony Sports Ten 5 HD', 'Sony LIV Stream']
    },
    watchUrlsByCountry: {
      'Pakistan': 'https://tamashaweb.com',
      'United Kingdom': 'https://www.skysports.com/cricket'
    },
    headToHeadSummary: 'High-scoring T20 action under Headingley floodlights.',
    keyPlayers: ['Mohammad Rizwan (C)', 'Babar Azam', 'Shaheen Shah Afridi', 'Jos Buttler (C)', 'Phil Salt', 'Jofra Archer'],
    aiMatchInsight: '10:30 PM PKT prime-time night match in Pakistan.'
  },

  // 4. South Africa vs Australia 2026 Series (Sep 24, 2026)
  {
    id: 'ck-2026-sa-aus-1st-odi',
    sport: 'cricket',
    competitionId: 'odi',
    competitionName: 'Australia Tour of South Africa 2026',
    competitionLogo: '🔵',
    seriesOrTourName: 'Australia in South Africa Bilateral Series',
    formatOrStage: '1st One Day International (D/N)',
    scheduleContext: 'upcoming_tour',
    dateLabel: 'Sep 24, 2026 • 4:30 PM PKT',
    homeTeam: CRICKET_TEAMS.find(t => t.id === 'southafrica')!,
    awayTeam: CRICKET_TEAMS.find(t => t.id === 'australia')!,
    utcKickoff: '2026-09-24T11:30:00Z', // 11:30 AM UTC = 4:30 PM PKT (1:30 PM SAST)
    venue: 'SuperSport Park',
    city: 'Centurion, South Africa',
    status: 'scheduled',
    broadcastsByCountry: {
      'Pakistan': ['A Sports HD', 'Ten Sports Pakistan', 'Tapmad'],
      'South Africa': ['SuperSport Cricket HD', 'DStv Stream'],
      'Australia': ['Fox Cricket 501', 'Kayo Sports Live'],
      'United Kingdom': ['Sky Sports Cricket'],
      'United States': ['Willow TV']
    },
    watchUrlsByCountry: {
      'Pakistan': 'https://www.tapmad.com/sports'
    },
    headToHeadSummary: 'Historic rivalry resumes at high-altitude Centurion.',
    keyPlayers: ['Temba Bavuma (C)', 'Kagiso Rabada', 'Heinrich Klaasen', 'Mitchell Marsh (C)', 'Pat Cummins', 'Travis Head'],
    aiMatchInsight: '4:30 PM PKT afternoon start in Pakistan.'
  }
];
