import React from 'react';
import { IconGraduationCap } from './icons/Icons';

export default function Footer({ onNotify }) {
  return (
    <footer id="footer" className="mt-16 bg-gradient-to-b from-transparent via-blue-50/40 to-blue-100/30 pt-16 pb-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          
          <div className="lg:col-span-2">
            <a href="#top" className="flex items-center gap-1.5 mb-4 group">
              <IconGraduationCap className="w-7 h-7 text-[#0066FF]" />
              <span className="text-2xl font-black text-gray-900">
                <span className="text-[#0066FF]">Campus</span>Pe
              </span>
            </a>
            <p className="text-xs text-gray-600 leading-relaxed max-w-sm mb-3">
              From choosing a college to finding your next opportunity.
            </p>
            <p className="text-xs text-gray-400 max-w-sm">
              CampusPe connects students, colleges and employers in one place.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-3">For Students</h4>
            <ul className="space-y-2 text-xs text-gray-600">
              <li><a href="#colleges" className="hover:text-[#0066FF]">Explore Colleges</a></li>
              <li><a href="#jobs" className="hover:text-[#0066FF]">Find Opportunities</a></li>
              <li><a href="#jobs" className="hover:text-[#0066FF]">Internships</a></li>
              <li><a href="#jobs" className="hover:text-[#0066FF]">Full-time Jobs</a></li>
              <li><a href="#jobs" className="hover:text-[#0066FF]">Part-time &amp; Gig</a></li>
              <li><a href="#resume" className="hover:text-[#0066FF]">Application Tracker</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-3">For Colleges</h4>
            <ul className="space-y-2 text-xs text-gray-600">
              <li><a href="#colleges" className="hover:text-[#0066FF]">List Your College</a></li>
              <li><a href="#colleges" className="hover:text-[#0066FF]">Admissions</a></li>
              <li><a href="#colleges" className="hover:text-[#0066FF]">Fee Collection</a></li>
              <li><a href="#colleges" className="hover:text-[#0066FF]">Placements</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-3">For Employers</h4>
            <ul className="space-y-2 text-xs text-gray-600">
              <li><a href="#employers" className="hover:text-[#0066FF]">Post a Job</a></li>
              <li><a href="#employers" className="hover:text-[#0066FF]">Find Talent</a></li>
              <li><a href="#employers" className="hover:text-[#0066FF]">Campus Hiring</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-3">Legal &amp; Policies</h4>
            <ul className="space-y-2 text-xs text-gray-600">
              <li><button onClick={() => onNotify("Opening Privacy Policy...")} className="hover:text-[#0066FF] text-left">Privacy Policy</button></li>
              <li><button onClick={() => onNotify("Opening Terms & Conditions...")} className="hover:text-[#0066FF] text-left">Terms &amp; Conditions</button></li>
              <li><button onClick={() => onNotify("Opening Refund Policy...")} className="hover:text-[#0066FF] text-left">Refund Policy</button></li>
              <li><button onClick={() => onNotify("Opening Cookie Policy...")} className="hover:text-[#0066FF] text-left">Cookie Policy</button></li>
              <li><button onClick={() => onNotify("Opening Grievance Redressal...")} className="hover:text-[#0066FF] text-left">Grievance Redressal</button></li>
            </ul>
          </div>

        </div>

        {/* Contact and Support Bar */}
        <div className="py-4 px-6 rounded-2xl bg-white border border-gray-100 shadow-xs flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="flex flex-wrap items-center gap-6">
            <a href="mailto:contactus@campuspe.com" className="flex items-center gap-2 text-gray-600 hover:text-[#0066FF]">
              ✉️ contactus@campuspe.com
            </a>
            <a href="tel:+916362606464" className="flex items-center gap-2 text-gray-600 hover:text-[#0066FF]">
              📞 +91 6362606464
            </a>
          </div>

          <span className="text-gray-500 font-medium flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            Students • Colleges • Employers
          </span>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200/60 flex flex-wrap items-center justify-between gap-4 text-xs text-gray-500">
          <div>
            © 2026 CampusPe Technologies Pvt. Ltd. Privacy • Terms • Grievance
          </div>

          <div className="flex items-center gap-4 font-semibold">
            <a href="#footer" aria-label="LinkedIn" className="hover:text-blue-600 transition-colors">in</a>
            <a href="#footer" aria-label="Instagram" className="hover:text-pink-600 transition-colors">◎</a>
            <a href="#footer" aria-label="Facebook" className="hover:text-blue-700 transition-colors">f</a>
            <a href="#footer" aria-label="WhatsApp" className="hover:text-emerald-600 transition-colors">💬</a>
            <a href="#footer" aria-label="YouTube" className="hover:text-red-600 transition-colors">▶</a>
          </div>
        </div>

      </div>
    </footer>
  );
}