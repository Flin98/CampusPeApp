import React from 'react';

export function IconGraduationCap({ className = "w-7 h-7 text-[#0066FF]" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3z M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" />
    </svg>
  );
}

export function IconSparkles({ size = 16, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
    </svg>
  );
}

export function IconCheck({ size = 14, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export function IconArrowRight({ size = 16, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

export function IconArrowUp({ size = 16, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 19V5M5 12l7-7 7 7" />
    </svg>
  );
}

export function IconBell({ size = 16, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  );
}

export function IconSearch({ size = 16, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

export function IconX({ size = 18, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}

// Brand SVG logos
export function LogoGinserv() {
  return (
    <div className="flex items-center gap-2.5">
      <div className="relative w-8 h-8 flex items-center justify-center">
        <span className="w-5 h-5 rounded-full bg-[#00A3E0] absolute -left-0.5 top-0 opacity-90" />
        <span className="w-4 h-4 rounded-full bg-[#0082c8] absolute right-0.5 bottom-0 opacity-90" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#38c4f7] absolute left-1 bottom-1" />
      </div>
      <div className="text-left leading-none">
        <span className="font-black tracking-tight text-xl text-[#00A3E0] block font-sans">GINSERV</span>
        <span className="text-[9px] tracking-wide text-gray-500 font-medium">Nurturing Ventures</span>
      </div>
    </div>
  );
}

export function LogoStartupKarnataka() {
  return (
    <div className="flex items-center gap-3">
      <svg className="w-9 h-7 text-[#F05A28]" viewBox="0 0 48 36" fill="currentColor">
        <polygon points="0,22 18,10 40,2 26,16 48,16 12,34 18,22" />
      </svg>
      <div className="text-left font-black tracking-tight leading-none text-[#1A264F]">
        <div className="text-base tracking-wide">STARTUP</div>
        <div className="text-xs tracking-wider font-extrabold text-[#1A264F]">KARNATAKA</div>
      </div>
    </div>
  );
}

export function LogoIimBangalore() {
  return (
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 rounded-full border border-amber-600 bg-amber-50 flex items-center justify-center p-1 text-[8px] font-bold text-amber-900 shadow-xs">
        <svg viewBox="0 0 24 24" className="w-5 h-5 text-amber-800" fill="currentColor">
          <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <path d="M12 6v6l4 2" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="12" cy="7" r="1.5" />
        </svg>
      </div>
      <div className="text-left font-serif leading-none">
        <span className="font-bold text-xs tracking-tight text-gray-900 block">IIM</span>
        <span className="text-[9px] text-gray-500 tracking-wider">BANGALORE</span>
      </div>
    </div>
  );
}

export function LogoTalentspotify() {
  return (
    <div className="flex items-center gap-2">
      <div className="w-7 h-7 relative flex items-center justify-center">
        <span className="w-2.5 h-2.5 rounded-full bg-[#2E6B56]" />
        <span className="w-1.5 h-1.5 rounded-full bg-[#2E6B56] absolute -top-0.5" />
        <span className="w-1.5 h-1.5 rounded-full bg-[#2E6B56] absolute -bottom-0.5" />
        <span className="w-1.5 h-1.5 rounded-full bg-[#2E6B56] absolute -left-0.5" />
        <span className="w-1.5 h-1.5 rounded-full bg-[#2E6B56] absolute -right-0.5" />
      </div>
      <span className="font-bold tracking-wider text-xs text-[#1F4337] uppercase">TALENTSPOTIFY</span>
    </div>
  );
}

export function LogoRadiant() {
  return (
    <div className="flex items-center gap-1.5">
      <div className="text-[8px] font-bold text-[#E52320] -rotate-90 origin-center leading-none tracking-tighter">
        RADIANT
      </div>
      <svg className="w-6 h-7 text-[#E52320]" viewBox="0 0 24 28" fill="currentColor">
        <path d="M12 0C12 7 20 10 20 17a8 8 0 1 1-16 0c0-6 6-9 7-14l1-3z" />
        <path d="M12 12c-2.5 0-4 1.8-4 4a4 4 0 0 0 8 0c0-2.2-1.5-4-4-4z" fill="#FFF" />
      </svg>
    </div>
  );
}

export function LogoDigitalIndia() {
  return (
    <div className="flex items-center gap-2">
      <div className="w-7 h-8 flex flex-col items-center justify-center text-[10px] leading-tight text-gray-800 font-serif">
        <span className="text-xs">🏛️</span>
        <span className="text-[7px] text-gray-500">सत्यमेव जयते</span>
      </div>
      <div className="text-left leading-none">
        <span className="font-black text-base text-gray-900 tracking-tight font-sans">Digital India</span>
        <span className="text-[9px] text-orange-600 font-bold block">#PowerToEmpower</span>
      </div>
    </div>
  );
}