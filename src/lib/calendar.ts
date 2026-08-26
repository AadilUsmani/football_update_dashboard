import { Match } from './types';

export function formatUtcToCalendar(isoString: string): string {
  const date = new Date(isoString);
  return date.toISOString().replace(/-|:|\.\d+/g, '');
}

export function generateGoogleCalendarUrl(match: Match, country: string = 'Pakistan'): string {
  const broadcasts = match.broadcastsByCountry[country] || match.broadcastsByCountry['Pakistan'] || ['Check local listings'];
  const startTime = new Date(match.utcKickoff);
  // Match duration default: 2 hours for football, 3.5h for T20, 8h for ODI, 7h for Test session
  const durationHours = match.sport === 'cricket' ? (match.competitionId === 'test' ? 7 : 4) : 2;
  const endTime = new Date(startTime.getTime() + durationHours * 60 * 60 * 1000);

  const startFormatted = formatUtcToCalendar(startTime.toISOString());
  const endFormatted = formatUtcToCalendar(endTime.toISOString());

  const title = encodeURIComponent(`⚽ ${match.homeTeam.name} vs ${match.awayTeam.name} (${match.competitionName})`);
  const details = encodeURIComponent(
    `🏆 ${match.competitionName} - ${match.formatOrStage}\n` +
    `🏟️ Venue: ${match.venue}, ${match.city}\n\n` +
    `📺 Where to Watch in ${country}:\n` +
    broadcasts.map(b => `• ${b}`).join('\n') +
    `\n\n⚡ Live Dashboard & Reminders: https://football-cricket-update.vercel.app`
  );
  const location = encodeURIComponent(`${match.venue}, ${match.city}`);

  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startFormatted}/${endFormatted}&details=${details}&location=${location}`;
}

export function generateIcsContent(match: Match, country: string = 'Pakistan'): string {
  const broadcasts = match.broadcastsByCountry[country] || match.broadcastsByCountry['Pakistan'] || ['Check local listings'];
  const startTime = new Date(match.utcKickoff);
  const durationHours = match.sport === 'cricket' ? (match.competitionId === 'test' ? 7 : 4) : 2;
  const endTime = new Date(startTime.getTime() + durationHours * 60 * 60 * 1000);

  const startFormatted = formatUtcToCalendar(startTime.toISOString());
  const endFormatted = formatUtcToCalendar(endTime.toISOString());
  const nowFormatted = formatUtcToCalendar(new Date().toISOString());

  const summary = `${match.sport === 'football' ? '⚽' : '🏏'} ${match.homeTeam.name} vs ${match.awayTeam.name} (${match.competitionName})`;
  const description = `🏆 ${match.competitionName} - ${match.formatOrStage}\\n🏟️ Venue: ${match.venue}, ${match.city}\\n📺 Where to Watch in ${country}: ${broadcasts.join(', ')}`;
  const location = `${match.venue}, ${match.city}`;

  return [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//SportsHub//Match Reminders//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:match-${match.id}-${startTime.getTime()}@sportshub.com`,
    `DTSTAMP:${nowFormatted}`,
    `DTSTART:${startFormatted}`,
    `DTEND:${endFormatted}`,
    `SUMMARY:${summary}`,
    `DESCRIPTION:${description}`,
    `LOCATION:${location}`,
    'STATUS:CONFIRMED',
    'BEGIN:VALARM',
    'TRIGGER:-PT30M',
    'DESCRIPTION:Match Kickoff in 30 Minutes',
    'ACTION:DISPLAY',
    'END:VALARM',
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\r\n');
}

export function downloadIcsFile(match: Match, country: string = 'Pakistan'): void {
  if (typeof window === 'undefined') return;
  const icsData = generateIcsContent(match, country);
  const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${match.homeTeam.shortName}-vs-${match.awayTeam.shortName}-match.ics`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  window.URL.revokeObjectURL(url);
}
