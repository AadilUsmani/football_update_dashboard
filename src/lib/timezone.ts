import { TimezoneOption, CountryOption } from './types';

export const TIMEZONE_OPTIONS: TimezoneOption[] = [
  { code: 'PKT', label: 'Pakistan Standard Time (PKT - UTC+5)', iana: 'Asia/Karachi', offset: '+05:00' },
  { code: 'GMT', label: 'United Kingdom (GMT/BST - UTC+0/+1)', iana: 'Europe/London', offset: '+00:00' },
  { code: 'EST', label: 'US Eastern (EST/EDT - UTC-5)', iana: 'America/New_York', offset: '-05:00' },
  { code: 'PST', label: 'US Pacific (PST/PDT - UTC-8)', iana: 'America/Los_Angeles', offset: '-08:00' },
  { code: 'CET', label: 'Central Europe (CET/CEST - UTC+1)', iana: 'Europe/Madrid', offset: '+01:00' },
  { code: 'GST', label: 'Gulf / Dubai (GST - UTC+4)', iana: 'Asia/Dubai', offset: '+04:00' },
  { code: 'IST', label: 'India Standard Time (IST - UTC+5:30)', iana: 'Asia/Kolkata', offset: '+05:30' },
  { code: 'AEST', label: 'Australia / Sydney (AEST - UTC+10)', iana: 'Australia/Sydney', offset: '+10:00' },
];

export const COUNTRY_OPTIONS: CountryOption[] = [
  { code: 'PK', name: 'Pakistan', flag: '🇵🇰' },
  { code: 'GB', name: 'United Kingdom', flag: '🇬🇧' },
  { code: 'US', name: 'United States', flag: '🇺🇸' },
  { code: 'IN', name: 'India', flag: '🇮🇳' },
  { code: 'AE', name: 'UAE / Middle East', flag: '🇦🇪' },
  { code: 'AU', name: 'Australia', flag: '🇦🇺' },
  { code: 'DE', name: 'Germany', flag: '🇩🇪' },
  { code: 'ES', name: 'Spain', flag: '🇪🇸' },
];

export function getResolvedIana(tzIana: string): string {
  if (tzIana === 'local') {
    try {
      return Intl.DateTimeFormat().resolvedOptions().timeZone || 'Asia/Karachi';
    } catch {
      return 'Asia/Karachi';
    }
  }
  return tzIana;
}

export function formatKickoffTime(utcString: string, ianaTimezone: string = 'Asia/Karachi', format24h: boolean = false): string {
  try {
    const date = new Date(utcString);
    const resolvedTz = getResolvedIana(ianaTimezone);
    const options: Intl.DateTimeFormatOptions = {
      timeZone: resolvedTz,
      hour: 'numeric',
      minute: '2-digit',
      hour12: !format24h,
    };
    return new Intl.DateTimeFormat('en-US', options).format(date);
  } catch {
    return 'TBD';
  }
}

export function formatKickoffDate(utcString: string, ianaTimezone: string = 'Asia/Karachi'): string {
  try {
    const date = new Date(utcString);
    const resolvedTz = getResolvedIana(ianaTimezone);
    const options: Intl.DateTimeFormatOptions = {
      timeZone: resolvedTz,
      weekday: 'short',
      month: 'short',
      day: 'numeric',
    };
    return new Intl.DateTimeFormat('en-US', options).format(date);
  } catch {
    return 'TBD';
  }
}

export function formatFullKickoff(utcString: string, ianaTimezone: string = 'Asia/Karachi', format24h: boolean = false): string {
  const dateStr = formatKickoffDate(utcString, ianaTimezone);
  const timeStr = formatKickoffTime(utcString, ianaTimezone, format24h);
  const tzAbbr = ianaTimezone === 'Asia/Karachi' ? 'PKT' : (TIMEZONE_OPTIONS.find(t => t.iana === ianaTimezone)?.code || '');
  return `${dateStr} • ${timeStr} ${tzAbbr}`.trim();
}

export function getRelativeCountdown(utcString: string): { status: 'upcoming' | 'live' | 'finished'; text: string } {
  try {
    const matchTime = new Date(utcString).getTime();
    const now = Date.now();
    const diffMs = matchTime - now;

    if (diffMs <= 0) {
      const matchEndMs = matchTime + 120 * 60 * 1000;
      if (now < matchEndMs) {
        return { status: 'live', text: `LIVE MATCH` };
      }
      return { status: 'upcoming', text: 'Scheduled' };
    }

    const totalSeconds = Math.floor(diffMs / 1000);
    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);

    if (days > 30) {
      const months = Math.floor(days / 30);
      return { status: 'upcoming', text: `In ${months} month${months > 1 ? 's' : ''}` };
    }
    if (days > 0) {
      return { status: 'upcoming', text: `In ${days}d ${hours}h` };
    }
    if (hours > 0) {
      return { status: 'upcoming', text: `In ${hours}h ${minutes}m` };
    }
    return { status: 'upcoming', text: `In ${minutes}m` };
  } catch {
    return { status: 'upcoming', text: 'Upcoming' };
  }
}
