import React from 'react';
import { IconSparkles, IconCheck, IconArrowRight, IconBell, IconSearch } from './icons/Icons';

export default function HeroSection({ onOpenModal }) {
  return (
    <section id="top" className="relative pt-8 pb-10 lg:pt-12 lg:pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Top 3 Interactive Feature Indicators */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center mb-8">
        
        {/* WhatsApp Alert */}
        <div className="flex justify-start">
          <div className="inline-flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-xs text-gray-600">
            <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-base">
              💬
            </div>
            <div>
              <div className="font-bold text-gray-800 text-xs">WhatsApp Alert</div>
              <p className="text-[11px] text-gray-400">You'll get all important updates on your whatsapp</p>
            </div>
          </div>
        </div>

        {/* Center Pill: AI-Powered Campus Assistant */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50/80 border border-blue-200 text-[#0066FF] text-xs font-semibold shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#0066FF] animate-pulse" />
            <span className="text-sm">🤖</span>
            AI-Powered Campus Assistant
          </div>
        </div>

        {/* Resume Builder */}
        <div className="flex justify-end">
          <div className="inline-flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-xs text-gray-600">
            <div className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-base">
              ⚡
            </div>
            <div>
              <div className="font-bold text-gray-800 text-xs">Resume Builder</div>
              <p className="text-[11px] text-gray-400">Our resume builder gives you dynamic options</p>
            </div>
          </div>
        </div>

      </div>

      {/* Main Title */}
      <div className="text-center max-w-3xl mx-auto mt-2 mb-10">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-gray-900 leading-[1.15]">
          Connect <span className="text-[#0066FF]">10X Faster.</span>
        </h1>
        <p className="mt-3 text-base sm:text-lg text-gray-500 max-w-2xl mx-auto font-medium">
          One platform connecting students, colleges &amp; employers — faster.
        </p>

        <div className="mt-6 inline-flex items-center gap-2 text-[#0066FF] font-semibold text-lg hover:opacity-90 transition-opacity cursor-pointer">
          <IconSparkles size={16} className="text-[#0066FF]" />
          <span className="text-[#0066FF] font-bold">What are you looking for?</span>
          <IconSparkles size={16} className="text-[#0066FF]" />
        </div>
      </div>

      {/* Social Proof Tags */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 px-2">
        <div className="inline-flex items-center gap-3 bg-white px-4 py-2 rounded-2xl shadow-sm border border-gray-100 text-xs">
          <div className="flex -space-x-1.5 overflow-hidden">
            <span className="h-6 w-6 rounded-full ring-2 ring-white bg-[#0066FF] text-white font-bold text-[10px] flex items-center justify-center">AK</span>
            <span className="h-6 w-6 rounded-full ring-2 ring-white bg-amber-500 text-white font-bold text-[10px] flex items-center justify-center">PR</span>
            <span className="h-6 w-6 rounded-full ring-2 ring-white bg-purple-500 text-white font-bold text-[10px] flex items-center justify-center">SN</span>
          </div>
          <div>
            <p className="font-bold text-gray-800">🔥 142 students matched today</p>
            <p className="text-[10px] text-gray-400">Just now · IIT, BITS, VIT</p>
          </div>
        </div>

        <div className="inline-flex items-center gap-3 bg-white px-4 py-2 rounded-2xl shadow-sm border border-gray-100 text-xs">
          <div className="w-7 h-7 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center font-bold text-xs border border-orange-100">
            💼
          </div>
          <div>
            <p className="font-bold text-gray-800">Radiant Info <span className="font-normal text-gray-500">shortlisted 8 interns</span></p>
            <p className="text-[10px] text-emerald-600 font-medium flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Verified recruiter · 2 days ago
            </p>
          </div>
        </div>
      </div>

      {/* 3 Core Selection Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-2">
        
        {/* CARD 1: COLLEGE */}
        <div className="relative bg-white rounded-3xl p-7 border border-blue-50/80 shadow-xl shadow-blue-500/5 hover:shadow-2xl hover:shadow-blue-500/10 transition-all flex flex-col justify-between group">
          <div>
            <div className="flex items-center justify-between mb-5">
              <div className="w-11 h-11 rounded-2xl bg-sky-50 text-[#0066FF] flex items-center justify-center text-xl group-hover:scale-105 transition-transform">
                🏛️
              </div>
              <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-sky-50 text-[#0066FF] border border-sky-100">
                Coming Soon
              </span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">College</h2>
            <p className="text-xs sm:text-sm text-gray-500 mb-6 leading-relaxed">
              Explore colleges, courses,fees, placements &amp; more
            </p>
            <ul className="space-y-3 mb-6">
              {["Search by course, location, fees", "Connect directly with colleges", "Improve student placements"].map((item, idx) => (
                <li key={idx} className="flex items-center gap-2.5 text-xs text-gray-600">
                  <span className="w-4 h-4 rounded-full bg-blue-50 text-[#0066FF] flex items-center justify-center flex-shrink-0">
                    <IconCheck size={10} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="h-24 bg-gradient-to-t from-sky-50/90 to-transparent rounded-2xl mb-5 flex items-center justify-center text-sky-300">
              <span className="text-5xl opacity-40">🏛️</span>
            </div>
            <button
              onClick={() => onOpenModal("Join College Waitlist", "Be the first institution to onboard onto CampusPe")}
              className="w-full py-3 px-4 rounded-full bg-[#0066FF] hover:bg-blue-700 active:scale-95 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-md shadow-blue-500/20 transition-all"
            >
              Join Waitlist <IconBell size={15} />
            </button>
          </div>
        </div>

        {/* CARD 2: I'M LOOKING FOR A JOB */}
        <div className="relative bg-white rounded-3xl p-7 border-2 border-blue-400 shadow-2xl shadow-blue-500/15 hover:shadow-blue-500/25 transition-all flex flex-col justify-between group">
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#0066FF] text-white text-[10px] font-bold uppercase tracking-wider py-1 px-4 rounded-full shadow-sm">
            Available Now
          </div>

          <div>
            <div className="flex items-center justify-between mb-5">
              <div className="w-11 h-11 rounded-2xl bg-blue-50 text-[#0066FF] flex items-center justify-center text-xl group-hover:scale-105 transition-transform">
                🎓
              </div>
              <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" /> Available Now
              </span>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-2">I'm Looking for a Job</h2>
            <p className="text-xs sm:text-sm text-gray-500 mb-6 leading-relaxed">
              Upload your resume. We'll find jobs that fit you.
            </p>

            <ul className="space-y-3 mb-6">
              {["Jobs from 1000+ sources", "AI powered matching", "WhatsApp & email alerts"].map((item, idx) => (
                <li key={idx} className="flex items-center gap-2.5 text-xs text-gray-600">
                  <span className="w-4 h-4 rounded-full bg-blue-50 text-[#0066FF] flex items-center justify-center flex-shrink-0">
                    <IconCheck size={10} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="h-24 bg-blue-50/60 rounded-2xl mb-5 border border-blue-100 flex items-center justify-between px-6">
              <div className="space-y-2">
                <div className="w-16 h-2 bg-blue-400 rounded-full" />
                <div className="w-24 h-1.5 bg-blue-200 rounded-full" />
                <div className="w-20 h-1.5 bg-blue-200 rounded-full" />
              </div>
              <div className="w-11 h-11 rounded-full bg-white shadow-xs border border-blue-200 flex items-center justify-center text-[#0066FF]">
                <IconSearch size={18} />
              </div>
            </div>
            <a
              href="#resume"
              className="w-full py-3 px-4 rounded-full bg-[#0066FF] hover:bg-blue-700 active:scale-95 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25 transition-all"
            >
              Explore Jobs <IconArrowRight size={16} />
            </a>
          </div>
        </div>

        {/* CARD 3: I'M HIRING */}
        <div className="relative bg-white rounded-3xl p-7 border border-blue-50/80 shadow-xl shadow-blue-500/5 hover:shadow-2xl hover:shadow-blue-500/10 transition-all flex flex-col justify-between group">
          <div>
            <div className="flex items-center justify-between mb-5">
              <div className="w-11 h-11 rounded-2xl bg-cyan-50 text-cyan-600 flex items-center justify-center text-xl group-hover:scale-105 transition-transform">
                💼
              </div>
              <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-sky-50 text-[#0066FF] border border-sky-100">
                Coming Soon
              </span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">I'm Hiring</h2>
            <p className="text-xs sm:text-sm text-gray-500 mb-6 leading-relaxed">
              Connect with colleges and find candidates — from students to graduates.
            </p>

            <ul className="space-y-3 mb-6">
              {["Connect directly with colleges", "Find the right candidates", "Simplify your hiring"].map((item, idx) => (
                <li key={idx} className="flex items-center gap-2.5 text-xs text-gray-600">
                  <span className="w-4 h-4 rounded-full bg-blue-50 text-[#0066FF] flex items-center justify-center flex-shrink-0">
                    <IconCheck size={10} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="h-24 bg-gradient-to-t from-cyan-50/60 to-transparent rounded-2xl mb-5 border border-cyan-100/50 flex items-center justify-center">
              <div className="font-mono text-cyan-600 font-bold text-lg tracking-wider bg-white px-5 py-1.5 rounded-xl border border-cyan-200 shadow-xs">
                {"</>"}
              </div>
            </div>
            <button
              onClick={() => onOpenModal("Join Hiring Waitlist", "Recruit verified talent directly from campus cohorts")}
              className="w-full py-3 px-4 rounded-full bg-[#0066FF] hover:bg-blue-700 active:scale-95 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-md shadow-blue-500/20 transition-all"
            >
              Join Waitlist <IconBell size={15} />
            </button>
          </div>
        </div>

      </div>

    </section>
  );
}