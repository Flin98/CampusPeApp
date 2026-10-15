import React, { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import StatsAndPartners from "./components/StatsAndPartners";
import DiscoverySection from "./components/DiscoverySection";
import ResumeSection from "./components/ResumeSection";
import CollegesSection from "./components/CollegesSection";
import EmployersSection from "./components/EmployersSection";
import AppShowcaseSection from "./components/AppShowcaseSection";
import SupportBanner from "./components/SupportBanner";
import ReadyBanner from "./components/ReadyBanner";
import Footer from "./components/Footer";
import ActionModal from "./components/ActionModal";
import { IconX } from "./components/icons/Icons";

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalSubtitle, setModalSubtitle] = useState("");
  const [toastMessage, setToastMessage] = useState(null);

  const triggerToast = (text) => {
    setToastMessage(text);
    setTimeout(() => setToastMessage(null), 3600);
  };

  const openActionModal = (title, subtitle) => {
    setModalTitle(title);
    setModalSubtitle(subtitle);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAFCFF] text-[#1E293B] font-sans antialiased selection:bg-blue-100 selection:text-blue-900 relative overflow-x-hidden">
      
      {/* Toast Alert */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-slate-900 text-white px-5 py-3.5 rounded-2xl shadow-2xl border border-slate-700 animate-bounce">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-sm font-medium">{toastMessage}</span>
          <button onClick={() => setToastMessage(null)} className="ml-2 hover:opacity-75">
            <IconX size={16} />
          </button>
        </div>
      )}

      {/* Background Soft Glows */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-gradient-to-b from-blue-100/60 via-sky-50/40 to-transparent blur-3xl -z-10 rounded-full" />
      <div className="pointer-events-none absolute top-[1100px] -left-36 w-[550px] h-[550px] bg-blue-100/30 blur-3xl -z-10 rounded-full" />
      <div className="pointer-events-none absolute top-[2300px] -right-36 w-[650px] h-[650px] bg-sky-100/30 blur-3xl -z-10 rounded-full" />

      {/* Modular Page Sections */}
      <Navbar onOpenModal={openActionModal} />
      
      <main>
        <HeroSection onOpenModal={openActionModal} />
        <StatsAndPartners />
        <DiscoverySection onOpenModal={openActionModal} />
        <ResumeSection onNotify={triggerToast} />
        <CollegesSection onOpenModal={openActionModal} />
        <EmployersSection onOpenModal={openActionModal} />
        <AppShowcaseSection onNotify={triggerToast} onOpenModal={openActionModal} />
        <SupportBanner onOpenModal={openActionModal} />
        <ReadyBanner onOpenModal={openActionModal} />
      </main>

      <Footer onNotify={triggerToast} />

      {/* Global Interactive Modal */}
      <ActionModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={modalTitle}
        subtitle={modalSubtitle}
        onSubmitSuccess={triggerToast}
      />

    </div>
  );
}