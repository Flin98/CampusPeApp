import React from 'react';
import { IconGraduationCap } from './icons/Icons';

export default function Navbar({ onOpenModal }) {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-100/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand logo */}
        <a href="#top" className="flex items-center gap-2 group select-none">
          <div className="relative flex items-center">
            <IconGraduationCap className="w-8 h-8 text-[#0066FF] mr-1 -mt-1 group-hover:-rotate-6 transition-transform" />
            <span className="text-2xl font-black tracking-tight text-[#0066FF]">
              Campus<span className="text-gray-900">Pe</span>
            </span>
          </div>
        </a>

        {/* Navigation links */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-semibold text-gray-600">
          <a href="#colleges" className="hover:text-[#0066FF] transition-colors py-1">Colleges</a>
          <a href="#employers" className="hover:text-[#0066FF] transition-colors py-1">Employers</a>
          <a href="#jobs" className="hover:text-[#0066FF] transition-colors py-1">Jobs</a>
          <a href="#footer" className="hover:text-[#0066FF] transition-colors py-1">Blogs</a>
        </nav>

        {/* Action buttons */}
        <div className="flex items-center space-x-3">
          <button
            onClick={() => onOpenModal("Welcome back", "Sign in to access your matches and tracker")}
            className="px-4 py-2 text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors"
          >
            Sign In
          </button>
          <button
            onClick={() => onOpenModal("Get started with CampusPe", "Join 800+ students & 130+ partner colleges")}
            className="px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-[#0066FF] hover:bg-blue-700 active:scale-95 shadow-md shadow-blue-500/20 transition-all"
          >
            Sign Up
          </button>
        </div>

      </div>
    </header>
  );
}