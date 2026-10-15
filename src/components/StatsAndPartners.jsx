import React from 'react';
import {
  LogoGinserv,
  LogoStartupKarnataka,
  LogoIimBangalore,
  LogoTalentspotify,
  LogoRadiant,
  LogoDigitalIndia,
} from './icons/Icons';

export default function StatsAndPartners() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
      
      {/* 4 Stats Highlights Bar */}
      <div className="p-6 sm:p-7 bg-white rounded-3xl border border-gray-100 shadow-lg shadow-gray-200/40 grid grid-cols-2 md:grid-cols-4 gap-4 text-center items-center">
        
        {/* Stat 1: Students */}
        <div className="flex items-center justify-center gap-4 py-2">
          <div className="w-12 h-12 rounded-full bg-[#F3E8FF] border border-purple-200 text-purple-600 flex items-center justify-center text-xl flex-shrink-0">
            👥
          </div>
          <div className="text-left">
            <div className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight leading-none">800+</div>
            <span className="text-xs font-medium text-gray-500 mt-0.5 block">Students</span>
          </div>
        </div>

        {/* Stat 2: Colleges */}
        <div className="flex items-center justify-center gap-4 py-2 md:border-l border-gray-200">
          <div className="w-12 h-12 rounded-full bg-[#E0F2FE] border border-sky-200 text-[#0066FF] flex items-center justify-center text-xl flex-shrink-0">
            🏛️
          </div>
          <div className="text-left">
            <div className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight leading-none">130+</div>
            <span className="text-xs font-medium text-gray-500 mt-0.5 block">colleges</span>
          </div>
        </div>

        {/* Stat 3: Jobs & Internships */}
        <div className="flex items-center justify-center gap-4 py-2 md:border-l border-gray-200">
          <div className="w-12 h-12 rounded-full bg-[#E8F8F0] border border-emerald-200 text-emerald-600 flex items-center justify-center text-xl flex-shrink-0">
            💼
          </div>
          <div className="text-left">
            <div className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight leading-none">100+</div>
            <span className="text-xs font-medium text-gray-500 mt-0.5 block">jobs &amp; internships</span>
          </div>
        </div>

        {/* Stat 4: 100% Safe */}
        <div className="flex items-center justify-center gap-4 py-2 md:border-l border-gray-200">
          <div className="w-12 h-12 rounded-full bg-[#FFF1E8] border border-orange-200 text-orange-600 flex items-center justify-center text-xl flex-shrink-0">
            🛡️
          </div>
          <div className="text-left">
            <div className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight leading-none">100%</div>
            <span className="text-xs font-medium text-gray-500 mt-0.5 block">Safe &amp; Trusted</span>
          </div>
        </div>

      </div>

      {/* Partners Logos Row */}
      <div className="mt-14 text-center">
        <p className="text-xs font-medium text-gray-500 mb-8 tracking-wide">
          Trusted by partners across India
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14 lg:gap-16 opacity-95">
          <LogoGinserv />
          <LogoStartupKarnataka />
          <LogoIimBangalore />
          <LogoTalentspotify />
          <LogoRadiant />
          <LogoDigitalIndia />
        </div>
      </div>

    </div>
  );
}