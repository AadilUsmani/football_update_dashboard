import { Match, Team } from '../types';

export const CRICKET_CATEGORIES = [
  { id: 'all', name: 'All Cricket', icon: '🏏', badge: 'All' },
  { id: 'test', name: 'Test Matches (WTC)', icon: '🔴', badge: 'TEST', color: '#dc2626' },
  { id: 't20i', name: 'T20 Internationals', icon: '🟢', badge: 'T20I', color: '#16a34a' },
  { id: 'odi', name: 'One Day Internationals', icon: '🔵', badge: 'ODI', color: '#2563eb' },
  { id: 'psl', name: 'PSL 10 (Pakistan Super League)', icon: '🇵🇰', badge: 'PSL', color: '#059669' },
  { id: 'ipl', name: 'IPL 2025 (Indian Premier League)', icon: '🇮🇳', badge: 'IPL', color: '#0284c7' },
];

export const CRICKET_TEAMS: Team[] = [
  // International National Teams
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
    id: 'india', 
    name: 'India', 
    shortName: 'IND', 
    crest: 'https://flagcdn.com/w160/in.png', 
    sport: 'cricket', 
    leagueOrCountry: 'International (BCCI)', 
    recentForm: ['W', 'W', 'W', 'W', 'L'] 
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
    id: 'bangladesh', 
    name: 'Bangladesh', 
    shortName: 'BAN', 
    crest: 'https://flagcdn.com/w160/bd.png', 
    sport: 'cricket', 
    leagueOrCountry: 'International (BCB)', 
    recentForm: ['W', 'L', 'L', 'W', 'L'] 
  },
  { 
    id: 'srilanka', 
    name: 'Sri Lanka', 
    shortName: 'SL', 
    crest: 'https://flagcdn.com/w160/lk.png', 
    sport: 'cricket', 
    leagueOrCountry: 'International (SLC)', 
    recentForm: ['L', 'L', 'W', 'L', 'L'] 
  },

  // PSL Teams
  { id: 'lahore_qalandars', name: 'Lahore Qalandars', shortName: 'LQ', crest: '', sport: 'cricket', leagueOrCountry: 'Pakistan Super League', recentForm: ['W', 'W', 'L', 'W', 'W'] },
  { id: 'karachi_kings', name: 'Karachi Kings', shortName: 'KK', crest: '', sport: 'cricket', leagueOrCountry: 'Pakistan Super League', recentForm: ['L', 'W', 'W', 'L', 'W'] },
  { id: 'islamabad_united', name: 'Islamabad United', shortName: 'IU', crest: '', sport: 'cricket', leagueOrCountry: 'Pakistan Super League', recentForm: ['W', 'W', 'W', 'L', 'W'] },
  { id: 'multan_sultans', name: 'Multan Sultans', shortName: 'MS', crest: '', sport: 'cricket', leagueOrCountry: 'Pakistan Super League', recentForm: ['W', 'L', 'W', 'W', 'W'] },

  // IPL Teams
  { id: 'csk', name: 'Chennai Super Kings', shortName: 'CSK', crest: '', sport: 'cricket', leagueOrCountry: 'Indian Premier League', recentForm: ['W', 'W', 'L', 'W', 'W'] },
  { id: 'mi', name: 'Mumbai Indians', shortName: 'MI', crest: '', sport: 'cricket', leagueOrCountry: 'Indian Premier League', recentForm: ['W', 'L', 'W', 'W', 'L'] },
];

export const CRICKET_FIXTURES: Match[] = [
  // 1. ACTIVE CURRENT SERIES: Pakistan vs Bangladesh (2nd Test at Rawalpindi)
  {
    id: 'ck-ftp-pak-ban-2nd-test',
    sport: 'cricket',
    competitionId: 'test',
    competitionName: 'ICC World Test Championship',
    seriesOrTourName: 'Bangladesh Tour of Pakistan 2024',
    formatOrStage: '2nd Test Match (Days 1–5)',
    scheduleContext: 'current_series',
    dateLabel: 'Aug 30 – Sep 3, 2024',
    homeTeam: CRICKET_TEAMS.find(t => t.id === 'pakistan')!,
    awayTeam: CRICKET_TEAMS.find(t => t.id === 'bangladesh')!,
    utcKickoff: '2024-08-30T05:00:00Z', // 5:00 AM UTC = 10:00 AM PKT
    venue: 'Rawalpindi Cricket Stadium',
    city: 'Rawalpindi, Pakistan',
    status: 'scheduled',
    broadcastsByCountry: {
      'Pakistan': ['A Sports HD (Live Broadcast)', 'Ten Sports Pakistan HD', 'PTV Sports HD', 'Tapmad (Live HD Stream)', 'Tamasha App (Free/HD)'],
      'United Kingdom': ['Sky Sports Cricket', 'Sky Sports Main Event'],
      'United States': ['Willow TV HD', 'Sling TV'],
      'India': ['FanCode Live Stream'],
      'UAE / Middle East': ['eLife CricLife 2 HD', 'STARZPLAY Sports']
    },
    watchUrlsByCountry: {
      'Pakistan': 'https://tamashaweb.com',
      'United Kingdom': 'https://www.skysports.com/cricket',
      'United States': 'https://www.willow.tv'
    },
    headToHeadSummary: '2nd Test of the 2-match series. Pakistan aiming to level the series on a pace-friendly Rawalpindi pitch.',
    keyPlayers: ['Shan Masood (C)', 'Babar Azam', 'Khurram Shahzad', 'Najmul Hossain Shanto (C)', 'Mushfiqur Rahim'],
    aiMatchInsight: '10:00 AM PKT start daily in Rawalpindi. Crucial WTC points on the line.'
  },

  // 2. ACTIVE CURRENT SERIES: England vs Sri Lanka (2nd Test at Lord's)
  {
    id: 'ck-ftp-eng-sl-2nd-test',
    sport: 'cricket',
    competitionId: 'test',
    competitionName: 'Sri Lanka Tour of England',
    seriesOrTourName: 'Sri Lanka in England 2024',
    formatOrStage: "2nd Test Match (Lord's)",
    scheduleContext: 'current_series',
    dateLabel: 'Aug 29 – Sep 2, 2024',
    homeTeam: CRICKET_TEAMS.find(t => t.id === 'england')!,
    awayTeam: CRICKET_TEAMS.find(t => t.id === 'srilanka')!,
    utcKickoff: '2024-08-29T10:00:00Z', // 10:00 AM UTC = 3:00 PM PKT (11:00 AM London)
    venue: "Lord's Cricket Ground",
    city: 'London, England',
    status: 'scheduled',
    broadcastsByCountry: {
      'Pakistan': ['A Sports HD', 'Ten Sports Pakistan HD', 'Tapmad Live Stream'],
      'United Kingdom': ['Sky Sports Cricket', 'Sky Sports Main Event', 'BBC Radio 5 Live'],
      'United States': ['Willow TV HD'],
      'India': ['Sony Sports Ten 1 HD', 'Sony LIV App']
    },
    watchUrlsByCountry: {
      'Pakistan': 'https://www.tapmad.com/sports',
      'United Kingdom': 'https://www.skysports.com/cricket'
    },
    headToHeadSummary: 'England leading 1-0 after Old Trafford victory.',
    keyPlayers: ['Ollie Pope (C)', 'Joe Root', 'Gus Atkinson', 'Dhananjaya de Silva (C)', 'Kamindu Mendis'],
    aiMatchInsight: '3:00 PM PKT afternoon start in Pakistan. Joe Root eyes his 33rd Test century at Lord’s.'
  },

  // 3. UPCOMING SEPTEMBER TOUR: Australia Tour of England (1st T20I at Southampton)
  {
    id: 'ck-ftp-eng-aus-1st-t20i',
    sport: 'cricket',
    competitionId: 't20i',
    competitionName: 'Australia Tour of England 2024',
    seriesOrTourName: 'The Ashes T20 & ODI Tour in England',
    formatOrStage: '1st T20 International (Night)',
    scheduleContext: 'upcoming_tour',
    dateLabel: 'Sep 11, 2024 • 10:30 PM PKT',
    homeTeam: CRICKET_TEAMS.find(t => t.id === 'england')!,
    awayTeam: CRICKET_TEAMS.find(t => t.id === 'australia')!,
    utcKickoff: '2024-09-11T17:30:00Z', // 5:30 PM UTC = 10:30 PM PKT (6:30 PM UK)
    venue: 'Utilita Bowl',
    city: 'Southampton, England',
    status: 'scheduled',
    broadcastsByCountry: {
      'Pakistan': ['A Sports HD', 'Ten Sports HD', 'Tapmad (Live HD)', 'Tamasha App'],
      'United Kingdom': ['Sky Sports Cricket', 'Sky Sports Main Event'],
      'Australia': ['Fox Cricket 501', 'Kayo Sports Live Stream'],
      'United States': ['Willow TV HD']
    },
    watchUrlsByCountry: {
      'Pakistan': 'https://tamashaweb.com',
      'United Kingdom': 'https://www.skysports.com/cricket',
      'Australia': 'https://kayosports.com.au'
    },
    headToHeadSummary: 'Australia travels to England for 3 T20Is and 5 ODIs across English venues.',
    keyPlayers: ['Jos Buttler (C)', 'Phil Salt', 'Jofra Archer', 'Mitchell Marsh (C)', 'Travis Head', 'Adam Zampa'],
    aiMatchInsight: '10:30 PM PKT prime-time night match in Pakistan.'
  },

  // 4. UPCOMING OCTOBER TOUR: England Tour of Pakistan (1st Test at Multan)
  {
    id: 'ck-ftp-pak-eng-1st-test',
    sport: 'cricket',
    competitionId: 'test',
    competitionName: 'England Tour of Pakistan 2024',
    seriesOrTourName: '3-Match Test Series in Pakistan (Multan & Rawalpindi)',
    formatOrStage: '1st Test Match (Day 1)',
    scheduleContext: 'upcoming_tour',
    dateLabel: 'Oct 7 – 11, 2024 • 10:00 AM PKT',
    homeTeam: CRICKET_TEAMS.find(t => t.id === 'pakistan')!,
    awayTeam: CRICKET_TEAMS.find(t => t.id === 'england')!,
    utcKickoff: '2024-10-07T05:00:00Z', // 5:00 AM UTC = 10:00 AM PKT
    venue: 'Multan Cricket Stadium',
    city: 'Multan, Pakistan',
    status: 'scheduled',
    broadcastsByCountry: {
      'Pakistan': ['A Sports HD (Official Host)', 'Ten Sports Pakistan HD', 'PTV Sports HD', 'Tapmad (Official Stream)', 'Tamasha App (Free/HD)'],
      'United Kingdom': ['Sky Sports Cricket', 'Sky Sports Main Event'],
      'United States': ['Willow TV HD'],
      'India': ['FanCode Stream', 'Sony Sports']
    },
    watchUrlsByCountry: {
      'Pakistan': 'https://tamashaweb.com',
      'United Kingdom': 'https://www.skysports.com/cricket'
    },
    headToHeadSummary: 'Ben Stokes leads England to Pakistan for a 3-match Test series in Multan and Rawalpindi.',
    keyPlayers: ['Shan Masood (C)', 'Babar Azam', 'Shaheen Shah Afridi', 'Ben Stokes (C)', 'Joe Root', 'Harry Brook'],
    aiMatchInsight: '10:00 AM PKT start in Multan. England’s Bazball returns to Pakistani pitches.'
  },

  // 5. UPCOMING NOVEMBER TOUR: Pakistan Tour of Australia (1st ODI at MCG)
  {
    id: 'ck-ftp-aus-pak-1st-odi',
    sport: 'cricket',
    competitionId: 'odi',
    competitionName: 'Pakistan Tour of Australia 2024',
    seriesOrTourName: '3 ODIs & 3 T20Is in Australia (MCG, SCG, Perth, Gabba)',
    formatOrStage: '1st One Day International (D/N)',
    scheduleContext: 'upcoming_tour',
    dateLabel: 'Nov 4, 2024 • 8:30 AM PKT',
    homeTeam: CRICKET_TEAMS.find(t => t.id === 'australia')!,
    awayTeam: CRICKET_TEAMS.find(t => t.id === 'pakistan')!,
    utcKickoff: '2024-11-04T03:30:00Z', // 3:30 AM UTC = 8:30 AM PKT
    venue: 'Melbourne Cricket Ground (MCG)',
    city: 'Melbourne, Australia',
    status: 'scheduled',
    broadcastsByCountry: {
      'Pakistan': ['A Sports HD', 'Ten Sports HD', 'PTV Sports HD', 'Tapmad (Live HD)', 'Tamasha App'],
      'Australia': ['Channel 7 (Free-to-Air)', 'Fox Cricket 501', 'Kayo Sports Live'],
      'United Kingdom': ['TNT Sports 1'],
      'United States': ['Willow TV HD']
    },
    watchUrlsByCountry: {
      'Pakistan': 'https://tamashaweb.com',
      'Australia': 'https://kayosports.com.au'
    },
    headToHeadSummary: 'Pakistan travels to Australia in November for white-ball preparation ahead of Champions Trophy 2025.',
    keyPlayers: ['Mohammad Rizwan (C)', 'Babar Azam', 'Shaheen Shah Afridi', 'Pat Cummins (C)', 'Mitchell Starc'],
    aiMatchInsight: '8:30 AM PKT morning match in Pakistan. Shaheen Afridi at the MCG.'
  },

  // 6. BORDER-GAVASKAR TROPHY: Australia vs India (1st Test at Perth)
  {
    id: 'ck-ftp-ind-aus-1st-test',
    sport: 'cricket',
    competitionId: 'test',
    competitionName: 'Border-Gavaskar Trophy 2024-25',
    seriesOrTourName: '5-Test Marquee Series in Australia',
    formatOrStage: '1st Test Match (Day 1)',
    scheduleContext: 'upcoming_tour',
    dateLabel: 'Nov 22 – 26, 2024 • 7:20 AM PKT',
    homeTeam: CRICKET_TEAMS.find(t => t.id === 'australia')!,
    awayTeam: CRICKET_TEAMS.find(t => t.id === 'india')!,
    utcKickoff: '2024-11-22T02:20:00Z', // 2:20 AM UTC = 7:20 AM PKT (10:20 AM Perth)
    venue: 'Optus Stadium',
    city: 'Perth, Australia',
    status: 'scheduled',
    broadcastsByCountry: {
      'Pakistan': ['Ten Sports Pakistan HD', 'Tapmad Sports', 'A Sports HD'],
      'India': ['Star Sports 1 HD (English)', 'Star Sports 1 Hindi HD', 'Disney+ Hotstar (4K Stream)'],
      'Australia': ['Channel 7', 'Fox Cricket 501', 'Kayo Sports Live'],
      'United Kingdom': ['TNT Sports 1', 'discovery+ Cricket Pass'],
      'United States': ['Willow TV', 'ESPN+']
    },
    watchUrlsByCountry: {
      'Pakistan': 'https://www.tapmad.com/sports',
      'India': 'https://www.hotstar.com/sports/cricket'
    },
    headToHeadSummary: '5-Test blockbuster series in Australia starting in Perth.',
    keyPlayers: ['Rohit Sharma (C)', 'Virat Kohli', 'Jasprit Bumrah', 'Pat Cummins (C)', 'Steve Smith'],
    aiMatchInsight: '7:20 AM PKT early morning kickoff in Pakistan.'
  },

  // 7. PSL 10 FRANCHISE CALENDAR (April - May 2025 Window)
  {
    id: 'ck-psl-10-lq-kk-preview',
    sport: 'cricket',
    competitionId: 'psl',
    competitionName: 'Pakistan Super League (PSL 10)',
    seriesOrTourName: 'PSL 10 Season Window (April - May 2025)',
    formatOrStage: 'Marquee Derby Clash',
    scheduleContext: 'future_window',
    dateLabel: 'April 2025 Window • 7:30 PM PKT',
    homeTeam: CRICKET_TEAMS.find(t => t.id === 'lahore_qalandars')!,
    awayTeam: CRICKET_TEAMS.find(t => t.id === 'karachi_kings')!,
    utcKickoff: '2025-04-12T14:30:00Z', // 2:30 PM UTC = 7:30 PM PKT
    venue: 'Gaddafi Stadium',
    city: 'Lahore, Pakistan',
    status: 'scheduled',
    broadcastsByCountry: {
      'Pakistan': ['A Sports HD (Host)', 'Ten Sports HD', 'PTV Sports HD', 'Tapmad (Official OTT)', 'Tamasha App (Free/HD)'],
      'United Kingdom': ['Sky Sports Cricket'],
      'United States': ['Willow TV HD']
    },
    watchUrlsByCountry: {
      'Pakistan': 'https://tamashaweb.com'
    },
    headToHeadSummary: 'PSL 10 scheduled in the April–May 2025 window following the ICC Champions Trophy in Pakistan.',
    keyPlayers: ['Shaheen Shah Afridi (C)', 'Fakhar Zaman', 'Haris Rauf', 'Shan Masood (C)', 'Shoaib Malik'],
    aiMatchInsight: '7:30 PM PKT official PSL night slot at Gaddafi Stadium.'
  }
];
