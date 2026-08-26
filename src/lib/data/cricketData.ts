import { Match, Team } from '../types';

export const CRICKET_CATEGORIES = [
  { id: 'all', name: 'All Cricket', icon: '🏏', badge: 'All' },
  { id: 't20i', name: 'T20 International', icon: '🟢', badge: 'T20I', color: '#16a34a' },
  { id: 'odi', name: 'One Day International', icon: '🔵', badge: 'ODI', color: '#2563eb' },
  { id: 'test', name: 'Test Matches', icon: '🔴', badge: 'TEST', color: '#dc2626' },
  { id: 'psl', name: 'Pakistan Super League (PSL)', icon: '🇵🇰', badge: 'PSL', color: '#059669' },
  { id: 'ipl', name: 'Indian Premier League (IPL)', icon: '🇮🇳', badge: 'IPL', color: '#0284c7' },
  { id: 'bbl', name: 'Big Bash League (BBL)', icon: '🇦🇺', badge: 'BBL', color: '#ea580c' },
  { id: 'hundred', name: 'The Hundred', icon: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', badge: '100', color: '#7c3aed' },
  { id: 'blast', name: 'Vitality Blast', icon: '⚡', badge: 'Blast', color: '#e11d48' },
];

export const CRICKET_TEAMS: Team[] = [
  // International
  { id: 'pakistan', name: 'Pakistan', shortName: 'PAK', crest: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/87/Pakistan_Cricket_Board_logo.svg/300px-Pakistan_Cricket_Board_logo.svg.png', sport: 'cricket', leagueOrCountry: 'International', recentForm: ['W', 'W', 'L', 'W', 'W'] },
  { id: 'india', name: 'India', shortName: 'IND', crest: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/8d/Board_of_Control_for_Cricket_in_India_logo.svg/300px-Board_of_Control_for_Cricket_in_India_logo.svg.png', sport: 'cricket', leagueOrCountry: 'International', recentForm: ['W', 'W', 'W', 'W', 'L'] },
  { id: 'australia', name: 'Australia', shortName: 'AUS', crest: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/1b/Cricket_Australia_logo.svg/300px-Cricket_Australia_logo.svg.png', sport: 'cricket', leagueOrCountry: 'International', recentForm: ['W', 'L', 'W', 'W', 'W'] },
  { id: 'england', name: 'England', shortName: 'ENG', crest: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/ce/England_and_Wales_Cricket_Board_logo.svg/300px-England_and_Wales_Cricket_Board_logo.svg.png', sport: 'cricket', leagueOrCountry: 'International', recentForm: ['L', 'W', 'L', 'W', 'W'] },
  { id: 'southafrica', name: 'South Africa', shortName: 'SA', crest: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/59/Cricket_South_Africa_logo.svg/300px-Cricket_South_Africa_logo.svg.png', sport: 'cricket', leagueOrCountry: 'International', recentForm: ['W', 'W', 'D', 'W', 'L'] },
  { id: 'newzealand', name: 'New Zealand', shortName: 'NZ', crest: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/05/New_Zealand_Cricket_logo.svg/300px-New_Zealand_Cricket_logo.svg.png', sport: 'cricket', leagueOrCountry: 'International', recentForm: ['W', 'L', 'W', 'W', 'L'] },

  // PSL
  { id: 'lahore_qalandars', name: 'Lahore Qalandars', shortName: 'LQ', crest: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/75/Lahore_Qalandars_logo.svg/300px-Lahore_Qalandars_logo.svg.png', sport: 'cricket', leagueOrCountry: 'PSL', recentForm: ['W', 'W', 'L', 'W', 'W'] },
  { id: 'karachi_kings', name: 'Karachi Kings', shortName: 'KK', crest: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Karachi_Kings_logo.svg/300px-Karachi_Kings_logo.svg.png', sport: 'cricket', leagueOrCountry: 'PSL', recentForm: ['L', 'W', 'W', 'L', 'W'] },
  { id: 'islamabad_united', name: 'Islamabad United', shortName: 'IU', crest: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/52/Islamabad_United_logo.svg/300px-Islamabad_United_logo.svg.png', sport: 'cricket', leagueOrCountry: 'PSL', recentForm: ['W', 'W', 'W', 'L', 'W'] },
  { id: 'multan_sultans', name: 'Multan Sultans', shortName: 'MS', crest: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b8/Multan_Sultans_logo.svg/300px-Multan_Sultans_logo.svg.png', sport: 'cricket', leagueOrCountry: 'PSL', recentForm: ['W', 'L', 'W', 'W', 'W'] },
  { id: 'peshawar_zalmi', name: 'Peshawar Zalmi', shortName: 'PZ', crest: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d6/Peshawar_Zalmi_logo.svg/300px-Peshawar_Zalmi_logo.svg.png', sport: 'cricket', leagueOrCountry: 'PSL', recentForm: ['W', 'L', 'W', 'L', 'W'] },

  // IPL
  { id: 'csk', name: 'Chennai Super Kings', shortName: 'CSK', crest: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/2b/Chennai_Super_Kings_Logo.svg/300px-Chennai_Super_Kings_Logo.svg.png', sport: 'cricket', leagueOrCountry: 'IPL', recentForm: ['W', 'W', 'L', 'W', 'W'] },
  { id: 'mi', name: 'Mumbai Indians', shortName: 'MI', crest: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/cd/Mumbai_Indians_Logo.svg/300px-Mumbai_Indians_Logo.svg.png', sport: 'cricket', leagueOrCountry: 'IPL', recentForm: ['W', 'L', 'W', 'W', 'L'] },
  { id: 'rcb', name: 'Royal Challengers Bengaluru', shortName: 'RCB', crest: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/Royal_Challengers_Bangalore_2020.svg/300px-Royal_Challengers_Bangalore_2020.svg.png', sport: 'cricket', leagueOrCountry: 'IPL', recentForm: ['W', 'W', 'W', 'L', 'W'] },
  { id: 'kkr', name: 'Kolkata Knight Riders', shortName: 'KKR', crest: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Kolkata_Knight_Riders_Logo.svg/300px-Kolkata_Knight_Riders_Logo.svg.png', sport: 'cricket', leagueOrCountry: 'IPL', recentForm: ['W', 'W', 'W', 'W', 'L'] },

  // BBL
  { id: 'melbourne_stars', name: 'Melbourne Stars', shortName: 'MS', crest: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/90/Melbourne_Stars_logo.svg/300px-Melbourne_Stars_logo.svg.png', sport: 'cricket', leagueOrCountry: 'BBL', recentForm: ['W', 'L', 'W', 'L', 'W'] },
  { id: 'sydney_sixers', name: 'Sydney Sixers', shortName: 'SS', crest: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/29/Sydney_Sixers_logo.svg/300px-Sydney_Sixers_logo.svg.png', sport: 'cricket', leagueOrCountry: 'BBL', recentForm: ['W', 'W', 'W', 'L', 'W'] },
];

const now = new Date();
const addDays = (d: number, hourUtc: number = 14, minuteUtc: number = 0) => {
  const date = new Date(now.getTime() + d * 24 * 60 * 60 * 1000);
  date.setUTCHours(hourUtc, minuteUtc, 0, 0);
  return date.toISOString();
};

export const CRICKET_FIXTURES: Match[] = [
  // 1. T20I: Pakistan vs England
  {
    id: 'ck-t20i-01',
    sport: 'cricket',
    competitionId: 't20i',
    competitionName: 'T20 International Series',
    competitionLogo: '🟢',
    formatOrStage: '3rd T20I (Series Decider)',
    homeTeam: CRICKET_TEAMS.find(t => t.id === 'pakistan')!,
    awayTeam: CRICKET_TEAMS.find(t => t.id === 'england')!,
    utcKickoff: addDays(1, 14, 0), // Tomorrow 2:00 PM UTC -> 7:00 PM PKT
    venue: 'Gaddafi Stadium',
    city: 'Lahore',
    status: 'scheduled',
    broadcastsByCountry: {
      'Pakistan': ['A Sports HD (Live Broadcast)', 'Ten Sports HD', 'PTV Sports HD', 'Tapmad (Live HD OTT)', 'Tamasha App (Free/HD)'],
      'United Kingdom': ['Sky Sports Cricket', 'Sky Sports Main Event', 'BBC Radio 5 Live Sports Extra'],
      'United States': ['Willow TV HD', 'Sling TV Willow Cricket'],
      'India': ['Sony Sports Ten 1 HD', 'Sony Sports Ten 3 Hindi', 'FanCode Live Stream'],
      'UAE / Middle East': ['CricLife HD', 'STARZPLAY Arabia Sports', 'eLife Sports'],
      'Australia': ['Fox Cricket 501', 'Kayo Sports Stream'],
      'South Africa': ['SuperSport Cricket HD', 'DStv Stream']
    },
    watchUrlsByCountry: {
      'Pakistan': 'https://tamashaweb.com',
      'United Kingdom': 'https://www.skysports.com/cricket',
      'United States': 'https://www.willow.tv',
      'India': 'https://www.fancode.com'
    },
    headToHeadSummary: 'Intense rivalry tied 1-1 in the current 3-match series; Gaddafi Stadium pitch historically favours chasing teams.',
    keyPlayers: ['Babar Azam', 'Shaheen Shah Afridi', 'Jos Buttler', 'Phil Salt', 'Naseem Shah'],
    aiMatchInsight: 'High-octane T20 showdown under Lahore lights. Shaheen and Naseem with the new ball look to trouble England’s explosive top order.'
  },

  // 2. Test: Australia vs India (Border-Gavaskar Trophy)
  {
    id: 'ck-test-01',
    sport: 'cricket',
    competitionId: 'test',
    competitionName: 'Border-Gavaskar Trophy',
    competitionLogo: '🔴',
    formatOrStage: 'Day 1 - 2nd Test Match',
    homeTeam: CRICKET_TEAMS.find(t => t.id === 'australia')!,
    awayTeam: CRICKET_TEAMS.find(t => t.id === 'india')!,
    utcKickoff: addDays(2, 0, 30), // In 2 days 12:30 AM UTC -> 5:30 AM PKT
    venue: 'Melbourne Cricket Ground (MCG)',
    city: 'Melbourne',
    status: 'scheduled',
    broadcastsByCountry: {
      'Pakistan': ['Ten Sports Pakistan HD', 'A Sports HD', 'Tapmad Live Stream'],
      'India': ['Star Sports 1 HD (English)', 'Star Sports 1 Hindi HD', 'Disney+ Hotstar (4K Stream)'],
      'United Kingdom': ['TNT Sports 1', 'discovery+ Cricket Pass'],
      'United States': ['Willow TV', 'ESPN+'],
      'Australia': ['Channel 7 (Free-to-air)', 'Fox Cricket', 'Kayo Sports Live'],
      'UAE / Middle East': ['Cricbuzz App Live', 'TOD App Cricket']
    },
    watchUrlsByCountry: {
      'Pakistan': 'https://www.tapmad.com/sports',
      'India': 'https://www.hotstar.com/sports/cricket',
      'Australia': 'https://kayosports.com.au'
    },
    headToHeadSummary: 'The premier Test cricket rivalry in modern history, featuring intense battles at the iconic MCG.',
    keyPlayers: ['Virat Kohli', 'Jasprit Bumrah', 'Pat Cummins', 'Steve Smith', 'Rishabh Pant'],
    aiMatchInsight: 'Day 1 at the MCG! Cummins and Starc will look to exploit morning grass against Kohli and Rohit Sharma.'
  },

  // 3. PSL: Lahore Qalandars vs Karachi Kings (The Ultimate Derby)
  {
    id: 'ck-psl-01',
    sport: 'cricket',
    competitionId: 'psl',
    competitionName: 'Pakistan Super League (PSL 10)',
    competitionLogo: '🇵🇰',
    formatOrStage: 'Group Stage Clash',
    homeTeam: CRICKET_TEAMS.find(t => t.id === 'lahore_qalandars')!,
    awayTeam: CRICKET_TEAMS.find(t => t.id === 'karachi_kings')!,
    utcKickoff: addDays(3, 14, 30), // In 3 days 2:30 PM UTC -> 7:30 PM PKT
    venue: 'National Bank Stadium',
    city: 'Karachi',
    status: 'scheduled',
    broadcastsByCountry: {
      'Pakistan': ['A Sports HD (Official Host Broadcaster)', 'Ten Sports HD', 'PTV Sports HD', 'Tapmad (Official OTT)', 'Tamasha (Mobile Stream)', 'Myco App'],
      'United Kingdom': ['Sky Sports Cricket', 'Sky Sports Main Event'],
      'United States': ['Willow TV HD', 'Sling TV'],
      'India': ['Sony Sports Ten 5 HD', 'FanCode Live Stream'],
      'UAE / Middle East': ['eLife CricLife HD', 'STARZPLAY Sports'],
      'Australia': ['Fox Cricket', 'Kayo Sports']
    },
    watchUrlsByCountry: {
      'Pakistan': 'https://tamashaweb.com',
      'United Kingdom': 'https://www.skysports.com/cricket',
      'United States': 'https://www.willow.tv'
    },
    headToHeadSummary: 'The El Clásico of Pakistan Cricket. The stadium is always packed with electric atmosphere.',
    keyPlayers: ['Shaheen Shah Afridi', 'Haris Rauf', 'Shan Masood', 'Shoaib Malik', 'Fakhar Zaman'],
    aiMatchInsight: 'Fiercest rivalry in PSL history. Shaheen’s searing yorkers versus Shan Masood’s Karachi top order in a packed National Stadium.'
  },

  // 4. IPL: Chennai Super Kings vs Mumbai Indians (IPL El Clásico)
  {
    id: 'ck-ipl-01',
    sport: 'cricket',
    competitionId: 'ipl',
    competitionName: 'Indian Premier League',
    competitionLogo: '🇮🇳',
    formatOrStage: 'Match 18',
    homeTeam: CRICKET_TEAMS.find(t => t.id === 'csk')!,
    awayTeam: CRICKET_TEAMS.find(t => t.id === 'mi')!,
    utcKickoff: addDays(4, 14, 0), // In 4 days 2:00 PM UTC -> 7:00 PM PKT
    venue: 'MA Chidambaram Stadium (Chepauk)',
    city: 'Chennai',
    status: 'scheduled',
    broadcastsByCountry: {
      'Pakistan': ['Tapmad Sports (Live Feed)', 'A Sports HD', 'Ten Sports'],
      'India': ['Star Sports 1 HD (Linear TV)', 'JioCinema (Free 4K Stream in 12 languages)'],
      'United Kingdom': ['Sky Sports Cricket', 'Sky Sports Main Event', 'DAZN UK'],
      'United States': ['Willow TV', 'Cricbuzz Live Stream'],
      'UAE / Middle East': ['Cricbuzz App', 'TOD Streaming', 'STARZPLAY']
    },
    watchUrlsByCountry: {
      'Pakistan': 'https://www.tapmad.com/sports',
      'India': 'https://www.jiocinema.com/sports/cricket',
      'United Kingdom': 'https://www.skysports.com'
    },
    headToHeadSummary: '5-time champions CSK meet 5-time champions MI at the Chepauk fortress.',
    keyPlayers: ['MS Dhoni', 'Ruturaj Gaikwad', 'Rohit Sharma', 'Hardik Pandya', 'Jasprit Bumrah'],
    aiMatchInsight: 'Dhoni’s Chepauk fortress welcomes Bumrah and Mumbai Indians in the grandest T20 franchise fixture on the planet.'
  },

  // 5. ODI: South Africa vs New Zealand
  {
    id: 'ck-odi-01',
    sport: 'cricket',
    competitionId: 'odi',
    competitionName: 'ODI Tri-Series Trophy',
    competitionLogo: '🔵',
    formatOrStage: 'Match 4 (50 Overs D/N)',
    homeTeam: CRICKET_TEAMS.find(t => t.id === 'southafrica')!,
    awayTeam: CRICKET_TEAMS.find(t => t.id === 'newzealand')!,
    utcKickoff: addDays(5, 8, 30), // In 5 days 8:30 AM UTC -> 1:30 PM PKT
    venue: 'SuperSport Park',
    city: 'Centurion',
    status: 'scheduled',
    broadcastsByCountry: {
      'Pakistan': ['A Sports HD', 'Ten Sports Pakistan', 'Tamasha App'],
      'India': ['Star Sports Select 2', 'Disney+ Hotstar'],
      'United Kingdom': ['Sky Sports Mix'],
      'United States': ['Willow TV']
    },
    watchUrlsByCountry: {
      'Pakistan': 'https://tamashaweb.com',
      'India': 'https://www.hotstar.com'
    },
    headToHeadSummary: 'Historically tight ODI battles characterized by fast bowling and acrobatic fielding.',
    keyPlayers: ['Heinrich Klaasen', 'Kagiso Rabada', 'Kane Williamson', 'Trent Boult'],
    aiMatchInsight: 'Klaasen’s power-hitting against Boult’s swinging deliveries at high-altitude SuperSport Park.'
  },

  // 6. PSL: Islamabad United vs Multan Sultans
  {
    id: 'ck-psl-02',
    sport: 'cricket',
    competitionId: 'psl',
    competitionName: 'Pakistan Super League (PSL 10)',
    competitionLogo: '🇵🇰',
    formatOrStage: 'Match 12 (Night Game)',
    homeTeam: CRICKET_TEAMS.find(t => t.id === 'islamabad_united')!,
    awayTeam: CRICKET_TEAMS.find(t => t.id === 'multan_sultans')!,
    utcKickoff: addDays(6, 14, 30), // In 6 days 2:30 PM UTC -> 7:30 PM PKT
    venue: 'Rawalpindi Cricket Stadium',
    city: 'Rawalpindi',
    status: 'scheduled',
    broadcastsByCountry: {
      'Pakistan': ['A Sports HD', 'Ten Sports HD', 'PTV Sports HD', 'Tapmad OTT', 'Tamasha App'],
      'United Kingdom': ['Sky Sports Cricket'],
      'United States': ['Willow TV']
    },
    watchUrlsByCountry: {
      'Pakistan': 'https://tamashaweb.com'
    },
    headToHeadSummary: 'Reigning champions Islamabad United face table-toppers Multan Sultans in high-scoring Pindi.',
    keyPlayers: ['Shadab Khan', 'Mohammad Rizwan', 'Naseem Shah', 'Usman Khan'],
    aiMatchInsight: 'Fast outfield and short boundaries at Rawalpindi promise a run-fest between Shadab and Rizwan.'
  }
];
