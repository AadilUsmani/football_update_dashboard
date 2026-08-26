import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SPORTS SCOUT | Live Football & Cricket Hub (PKT Timings & Broadcasts)',
  description: 'Track upcoming Premier League, MLS, La Liga, Bundesliga, Champions League, PSL, and International Cricket fixtures in Pakistan Standard Time (PKT) with official Where-to-Watch guides and LangGraph AI Assistant.',
  authors: [{ name: 'Adil Usmani', url: 'https://github.com/AadilUsmani' }],
  keywords: ['Football fixtures', 'Cricket fixtures', 'Pakistan Standard Time', 'Where to watch in Pakistan', 'Premier League', 'PSL', 'IPL', 'Champions League', 'Tapmad', 'A Sports', 'LangGraph'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark h-full antialiased">
      <body className="min-h-full flex flex-col bg-[#090d16] text-slate-100 selection:bg-emerald-500 selection:text-slate-950">
        {children}
      </body>
    </html>
  );
}
