'use client';

import React, { useState } from 'react';
import { COUNTRY_BROADCAST_GUIDE } from '@/lib/data/broadcasters';
import { COUNTRY_OPTIONS } from '@/lib/timezone';
import { X, Tv, ExternalLink, ShieldCheck } from 'lucide-react';

interface BroadcastGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCountry: string;
}

export const BroadcastGuideModal: React.FC<BroadcastGuideModalProps> = ({
  isOpen,
  onClose,
  initialCountry,
}) => {
  const [selectedCountry, setSelectedCountry] = useState<string>(initialCountry || 'Pakistan');
  const [activeTab, setActiveTab] = useState<'all' | 'football' | 'cricket'>('all');

  if (!isOpen) return null;

  const countryData = COUNTRY_BROADCAST_GUIDE[selectedCountry] || COUNTRY_BROADCAST_GUIDE['Pakistan'];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-slate-900 border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden flex flex-col">
        
        {/* Modal Header */}
        <div className="p-6 border-b border-slate-800 flex items-center justify-between gap-4 bg-slate-900/90">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
              <Tv className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-black text-white flex items-center gap-2">
                <span>Official Broadcast & TV Guide</span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30">
                  {countryData.flag} {countryData.countryName}
                </span>
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">
                Verified rights holders, linear TV channels, and OTT streaming platforms
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Country Selector Tabs & Sport Filter */}
        <div className="p-4 bg-slate-950/60 border-b border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          
          {/* Country Flag Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 scrollbar-none">
            {COUNTRY_OPTIONS.map(c => (
              <button
                key={c.code}
                onClick={() => setSelectedCountry(c.name)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  selectedCountry === c.name
                    ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                    : 'bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800'
                }`}
              >
                <span>{c.flag}</span>
                <span>{c.name}</span>
              </button>
            ))}
          </div>

          {/* Sport Tabs */}
          <div className="flex items-center gap-1 p-1 rounded-xl bg-slate-900 border border-slate-800 text-xs font-bold">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3 py-1 rounded-lg transition-colors ${
                activeTab === 'all' ? 'bg-slate-800 text-white' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              All Sports
            </button>
            <button
              onClick={() => setActiveTab('football')}
              className={`px-3 py-1 rounded-lg transition-colors ${
                activeTab === 'football' ? 'bg-emerald-600 text-white' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              ⚽ Football
            </button>
            <button
              onClick={() => setActiveTab('cricket')}
              className={`px-3 py-1 rounded-lg transition-colors ${
                activeTab === 'cricket' ? 'bg-cyan-600 text-white' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              🏏 Cricket
            </button>
          </div>

        </div>

        {/* Modal Body: Broadcast Grid */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          
          {/* Football Broadcast Section */}
          {(activeTab === 'all' || activeTab === 'football') && countryData.footballChannels && (
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-lg">⚽</span>
                <h3 className="text-base font-extrabold text-white">
                  Football Broadcasters in {countryData.countryName}
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {countryData.footballChannels.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-emerald-500/30 transition-colors">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <h4 className="text-sm font-bold text-emerald-400">{item.competition}</h4>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-800 text-slate-300">
                        {item.priceModel}
                      </span>
                    </div>

                    <div className="space-y-1.5 text-xs">
                      <div>
                        <span className="text-slate-400 font-semibold">📺 TV Channels: </span>
                        <span className="text-slate-200">{item.tvChannels.join(', ')}</span>
                      </div>
                      <div>
                        <span className="text-cyan-400 font-semibold">📱 OTT Live Stream: </span>
                        <span className="text-slate-200">{item.digitalOtt.join(', ')}</span>
                      </div>
                    </div>

                    {item.url && (
                      <div className="mt-3 pt-2 border-t border-slate-800/80 flex justify-end">
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-xs font-bold text-emerald-400 hover:underline"
                        >
                          <span>Official Platform</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Cricket Broadcast Section */}
          {(activeTab === 'all' || activeTab === 'cricket') && countryData.cricketChannels && (
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-lg">🏏</span>
                <h3 className="text-base font-extrabold text-white">
                  Cricket Broadcasters in {countryData.countryName}
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {countryData.cricketChannels.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-cyan-500/30 transition-colors">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <h4 className="text-sm font-bold text-cyan-400">{item.competition}</h4>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-800 text-slate-300">
                        {item.priceModel}
                      </span>
                    </div>

                    <div className="space-y-1.5 text-xs">
                      <div>
                        <span className="text-slate-400 font-semibold">📺 TV Channels: </span>
                        <span className="text-slate-200">{item.tvChannels.join(', ')}</span>
                      </div>
                      <div>
                        <span className="text-emerald-400 font-semibold">📱 OTT Live Stream: </span>
                        <span className="text-slate-200">{item.digitalOtt.join(', ')}</span>
                      </div>
                    </div>

                    {item.url && (
                      <div className="mt-3 pt-2 border-t border-slate-800/80 flex justify-end">
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-xs font-bold text-cyan-400 hover:underline"
                        >
                          <span>Official Platform</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Footer Note */}
        <div className="p-4 bg-slate-950/90 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Updated with latest 2025/2026 official broadcast distribution contracts</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold transition-colors"
          >
            Close Guide
          </button>
        </div>

      </div>
    </div>
  );
};
