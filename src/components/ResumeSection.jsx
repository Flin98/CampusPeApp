import React, { useState, useRef } from 'react';
import { IconArrowUp, IconCheck } from './icons/Icons';

export default function ResumeSection({ onNotify }) {
  const [uploadedFileName, setUploadedFileName] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isParsing, setIsParsing] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileUpload = (file) => {
    if (!file) return;
    setUploadedFileName(file.name);
    setIsParsing(true);
    setUploadProgress(15);
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsParsing(false);
          onNotify(`Resume "${file.name}" analyzed! 14 high-match roles identified.`);
          return 100;
        }
        return prev + 25;
      });
    }, 200);
  };

  return (
    <section id="resume" className="py-20 bg-gradient-to-b from-blue-50/40 via-white to-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Top Pill: TRY IT LIVE */}
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white text-gray-700 text-xs font-semibold mb-4 border border-gray-200 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-[#0066FF]" />
          <span className="font-bold text-[#0066FF]">TRY IT LIVE</span>
          <span className="text-gray-300">|</span>
          <span className="text-gray-500">v2.4 AI Engine</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
          Upload your resume.<br />
          <span className="text-[#0066FF]">Find jobs that fit.</span>
        </h2>
        
        <p className="mt-4 text-gray-500 text-sm sm:text-base max-w-xl mx-auto">
          Upload once. CampusPe reads your skills, experience, and preferences — then finds relevant jobs across 1,000+ sources.
        </p>

        {/* Dotted Upload Zone with Corner Anchors */}
        <div className="relative mt-12 max-w-2xl mx-auto">
          
          {/* Top-left Floating Badge */}
          <div className="absolute -top-4 -left-4 z-10 bg-white shadow-xl shadow-gray-200/80 border border-gray-100 px-3.5 py-2 rounded-2xl flex items-center gap-2.5 text-left hidden sm:flex">
            <div className="w-7 h-7 rounded-full bg-[#EBFBEE] text-emerald-600 flex items-center justify-center font-bold text-xs">
              ⚡
            </div>
            <div>
              <span className="text-xs font-extrabold text-gray-900 block leading-tight">98% Match Rate</span>
              <span className="text-[10px] text-gray-400">AI semantic rank</span>
            </div>
          </div>

          {/* Bottom-right Floating Badge */}
          <div className="absolute -bottom-4 -right-4 z-10 bg-white shadow-xl shadow-gray-200/80 border border-gray-100 px-3.5 py-2 rounded-2xl flex items-center gap-2.5 text-left hidden sm:flex">
            <div className="w-7 h-7 rounded-full bg-[#FFF4E5] text-amber-600 flex items-center justify-center font-bold text-xs">
              🔒
            </div>
            <div>
              <span className="text-xs font-extrabold text-gray-900 block leading-tight">ATS Compliant</span>
              <span className="text-[10px] text-gray-400">Standardized parser</span>
            </div>
          </div>

          {/* Main Drop Box */}
          <div
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => {
              e.preventDefault();
              if (e.dataTransfer.files && e.dataTransfer.files[0]) {
                handleFileUpload(e.dataTransfer.files[0]);
              }
            }}
            onClick={() => fileInputRef.current && fileInputRef.current.click()}
            className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl shadow-blue-500/5 cursor-pointer transition-all hover:shadow-2xl border border-gray-100 relative group"
          >
            {/* Inner Dotted Box with Corner Brackets */}
            <div className="absolute inset-5 sm:inset-7 border-2 border-dashed border-blue-200 rounded-2xl pointer-events-none group-hover:border-blue-400 transition-colors">
              <span className="absolute -top-1.5 -left-1.5 w-3 h-3 border-t-2 border-l-2 border-blue-500" />
              <span className="absolute -top-1.5 -right-1.5 w-3 h-3 border-t-2 border-r-2 border-blue-500" />
              <span className="absolute -bottom-1.5 -left-1.5 w-3 h-3 border-b-2 border-l-2 border-blue-500" />
              <span className="absolute -bottom-1.5 -right-1.5 w-3 h-3 border-b-2 border-r-2 border-blue-500" />
            </div>

            <input
              ref={fileInputRef}
              type="file"
              accept=".pdf,.doc,.docx"
              className="hidden"
              onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                  handleFileUpload(e.target.files[0]);
                }
              }}
            />

            <div className="relative z-10 flex flex-col items-center py-2">
              <h3 className="text-2xl font-black text-gray-900 mb-2">
                {uploadedFileName ? uploadedFileName : "Upload your resume"}
              </h3>

              <p className="text-xs text-gray-500 max-w-sm mb-6 leading-relaxed">
                PDF, DOC, or DOCX • Up to 10MB • We'll use it to understand your skills and experience.
              </p>

              {isParsing && (
                <div className="w-full max-w-xs mb-5">
                  <div className="flex justify-between text-xs font-semibold text-[#0066FF] mb-1">
                    <span>Analyzing credentials...</span>
                    <span>{uploadProgress}%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-[#0066FF] h-2 transition-all duration-300"
                      style={{ width: `${uploadProgress}%` }}
                    />
                  </div>
                </div>
              )}

              <button
                type="button"
                className="px-7 py-3 rounded-full bg-[#0066FF] hover:bg-blue-700 text-white font-semibold text-sm shadow-md shadow-blue-500/20 flex items-center gap-2 active:scale-95 transition-all mb-3"
              >
                Upload resume <IconArrowUp size={16} />
              </button>

              <span className="text-xs text-gray-400 mb-4">
                or drag and drop your file here
              </span>

              <div className="flex items-center gap-2">
                {["PDF", "DOC", "DOCX"].map((fmt) => (
                  <span
                    key={fmt}
                    className="px-3 py-0.5 rounded-lg border border-sky-300 text-sky-700 bg-sky-50 text-[10px] font-mono font-bold"
                  >
                    {fmt}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* 4 Steps Verification Pipeline */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
          {[
            { title: "Resume analyzed", sub: "● Ready in 4s", checkColor: "text-emerald-600 bg-emerald-50 border-emerald-200" },
            { title: "Skills matched", sub: "Deep taxonomy", checkColor: "text-indigo-600 bg-indigo-50 border-indigo-200" },
            { title: "Experience matched", sub: "Contextual seniority", checkColor: "text-purple-600 bg-purple-50 border-purple-200" },
            { title: "1,000+ sources searched", sub: "Real-time aggregators", checkColor: "text-blue-600 bg-blue-50 border-blue-200" }
          ].map((p, idx) => (
            <div key={idx} className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-3">
              <div className={`w-8 h-8 rounded-xl border flex items-center justify-center flex-shrink-0 ${p.checkColor}`}>
                <IconCheck size={14} />
              </div>
              <div>
                <h4 className="text-xs font-bold text-gray-900 leading-tight">{p.title}</h4>
                <span className="text-[10px] text-gray-400">{p.sub}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}