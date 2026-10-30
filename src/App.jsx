// ... existing code ...
import React, { useState, useRef } from "react";

// --- Vector Brand & UI Icons matching Figma ---
function CampusPeLogo() {
  return (
    <div className="flex flex-col items-start select-none cursor-pointer">
      <div className="relative flex items-center leading-none">
        {/* Exact Mortarboard icon perched on top of C */}
        <svg
          className="w-7 h-7 text-[#0066FF] -mr-1"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2L1 8l11 6 9-4.91V16h2V8L12 2z M5 12.18v4L12 20l7-3.82v-4L12 16l-7-3.82z" />
        </svg>
        <span className="text-[26px] font-extrabold tracking-tight text-[#0066FF] font-sans">
          Campus<span className="text-[#0052CC]">Pe</span>
        </span>
      </div>
      <span className="text-[7.5px] font-medium text-gray-400 tracking-wider -mt-0.5">
        Connecting Students, Institutions &amp; Companies
      </span>
    </div>
  );
}

const opportunities = [
  {
    type: "Colleges",
    title: "IIM Bangalore",
    tag: "Top College",
    tagStyle: { background: "#F5F3FF", color: "#7C3AED", borderColor: "#DDD6FE" },
    place: "Bengaluru",
    details: "MBA",
    amount: "₹ 3L+",
    mark: "iim",
    copy: "India's premier management institute with global exposure...",
    ctaText: "View Details",
  },
  {
    type: "Internships",
    title: "Product Intern",
    tag: "Internship",
    tagStyle: { background: "#EFF6FF", color: "#0066FF", borderColor: "#BFDBFE" },
    place: "Bengaluru",
    details: "Hybrid",
    amount: "₹ 35K/mo",
    mark: "google",
    copy: "Work on real products, learn from top engineers and build...",
    ctaText: "Apply Now",
  },
  {
    type: "Freelance",
    title: "Marketing Gig",
    tag: "Freelance",
    tagStyle: { background: "#ECFDF5", color: "#059669", borderColor: "#A7F3D0" },
    place: "Remote",
    details: "Freelance",
    amount: "₹ 10K – ₹ 25K",
    mark: "notion",
    copy: "Create content and help with social media campaigns for...",
    ctaText: "View Details",
  },
];

const roleCards = [
  {
    title: "College",
    status: "Coming Soon",
    statusType: "coming",
    description: "Explore colleges, courses, fees, placements & more",
    features: ["Search by course, location, fees", "Connect directly with colleges", "Improve student placements"],
    cta: "Join Waitlist",
    artworkType: "college",
  },
  {
    title: "I'm Looking for a Job",
    status: "Available Now",
    statusType: "available",
    description: "Upload your resume. We'll find jobs that fit you.",
    features: ["Jobs from 1000+ sources", "AI powered matching", "WhatsApp & email alerts"],
    cta: "Explore Jobs",
    artworkType: "job",
  },
  {
    title: "I'm Hiring",
    status: "Coming Soon",
    statusType: "coming",
    description: "Connect with colleges and find candidates — from students to graduates.",
    features: ["Connect directly with colleges", "Find the right candidates", "Simplify your hiring"],
    cta: "Join Waitlist",
    artworkType: "hiring",
  },
];

const steps = [
  {
    title: "Set your preferences",
    text: "Tell us what you're looking for, from colleges and courses to jobs, internships and gigs.",
    tag: "Smart Profile",
  },
  {
    title: "Discover relevant opportunities",
    text: "Explore colleges and career opportunities matched to your profile, interests and goals.",
    tag: "AI Ranked",
  },
  {
    title: "Get notified when something fits",
    text: "Get notified when a relevant college or new opportunity is found, so you can act early.",
    tag: "Instant Alerts",
  },
];

const colleges = [
  {
    step: "01",
    label: "VERIFIED PROFILE",
    title: "Build your college profile",
    desc: "Showcase your college, courses, fees, campus, placements and achievements in one structured profile that students and recruiters can discover.",
    pillTop: (
      <span className="badge-pill green">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>
        NAAC A++ Ready
      </span>
    ),
    pillBottom: (
      <span className="badge-pill blue-outline">98% Match</span>
    ),
  },
  {
    step: "02",
    label: "DIRECT ENROLL",
    title: "Students discover and connect",
    desc: "Students searching for colleges can discover your profile, explore your courses and fees, and connect directly with your admission team.",
    pillTop: (
      <span className="badge-pill blue-soft">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
        Direct Enquiries
      </span>
    ),
    pillBottom: (
      <span className="badge-pill chat-chip">
        <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#10B981" }} />
        WHATSAPP / CHAT
      </span>
    ),
    timeNote: "Avg. response: <15 min",
  },
  {
    step: "03",
    label: "CAMPUS RECRUITING",
    title: "Recruiters discover your College",
    desc: "Companies hiring fresh talent can discover your college, explore your talent and connect with your placement team.",
    pillTop: (
      <span className="badge-pill purple-soft">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
        500+ Hiring Partners
      </span>
    ),
    pillBottom: (
      <span className="badge-pill blue-soft">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
        Connect Directly
      </span>
    ),
  },
  {
    step: "04",
    label: "LIVE HUD",
    title: "Track placements in real time",
    desc: "Track students, interviews, offers and placements from one centralized dashboard.",
    pillTop: (
      <span className="badge-pill red-soft">
        <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#E02424" }} />
        LIVE PLACEMENTS
      </span>
    ),
    pillBottom: (
      <span className="badge-pill blue-solid">Students · Interviews · Offers</span>
    ),
  },
];

const employers = [
  {
    step: "01",
    title: "Post a role in minutes",
    desc: "Define your skills, location and hiring requirements. Reach relevant candidates across the CampusPe network.",
    pillTop: (
      <span className="badge-pill" style={{ background: "#E8F8F0", color: "#059669", border: "1px solid #A7F3D0" }}>
        ✦ 5 Min Deployment
      </span>
    ),
    pillBottom: (
      <span style={{ fontSize: 10, color: "#94A3B8", fontWeight: 600 }}>500+ Campus Network</span>
    ),
  },
  {
    step: "02",
    title: "Receive a matched shortlist",
    desc: "Get candidates matched to your role by skills, experience, location and hiring requirements.",
    pillTop: (
      <span className="badge-pill" style={{ background: "#F5EDFD", color: "#7C3AED" }}>
        Zero CV Clutter
      </span>
    ),
    pillBottom: (
      <span style={{ fontSize: 10, color: "#94A3B8", fontWeight: 600 }}>Tier 1–Tier 3 Parity</span>
    ),
  },
  {
    step: "03",
    title: "Connect with candidates directly",
    desc: "Message, schedule interviews, and move candidates through your pipeline — all in one place.",
    pillTop: (
      <span className="badge-pill blue-soft">
        In-App Scheduling
      </span>
    ),
    pillBottom: (
      <span style={{ fontSize: 10, color: "#94A3B8", fontWeight: 600 }}>1-Click Video / Chat</span>
    ),
  },
  {
    step: "04",
    title: "Reduce your time-to-hire",
    desc: "Find matched candidates, connect with them and move from shortlist to offer in one streamlined workflow.",
    pillTop: (
      <span className="badge-pill blue-solid" style={{ borderRadius: 9999, padding: "2px 10px", fontSize: 10 }}>
        &lt;2 DAYS
      </span>
    ),
    pillBottom: (
      <span className="badge-pill" style={{ background: "#E8F8F0", color: "#059669", border: "1px solid #A7F3D0", fontSize: 10 }}>
        57% Faster Hiring
      </span>
    ),
  },
];

const footerGroups = [
  {
    heading: "For Students",
    links: ["Explore Colleges", "Find Opportunities", "Internships", "Full-time Jobs", "Part-time & Gig", "Application Tracker"],
  },
  {
    heading: "For Colleges",
    links: ["List Your College", "Admissions", "Fee Collection", "Placements"],
  },
  {
    heading: "For Employers",
    links: ["Post a Job", "Find Talent", "Campus Hiring"],
  },
  {
    heading: "Company",
    links: ["About Us", "Contact Us", "Blogs", "Careers"],
  },
  {
    heading: "Legal & Policies",
    links: [
      "Privacy Policy",
      "Terms & Conditions",
      "Refund & Cancellation Policy",
      "Cookie Policy",
      "Grievance Redressal",
      "Job & Internship Disclaimer",
    ],
  },
];

export default function App() {
  const [filter, setFilter] = useState("All");
  const [fileName, setFileName] = useState("");
  const [activeStep, setActiveStep] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState({ title: "", subtitle: "" });
  const [toast, setToast] = useState(null);
  const fileInputRef = useRef(null);

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3500);
  };

  const openModal = (title, subtitle) => {
    setModalData({ title, subtitle });
    setModalOpen(true);
  };

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      showToast(`Resume "${file.name}" uploaded! Matching 14 jobs.`);
    }
  };

  const filters = ["All", "Colleges", "Jobs", "Internships", "Freelance", "Part-time"];
  const filteredOpportunities = opportunities.filter(
    (item) => filter === "All" || item.type === filter || (filter === "Jobs" && item.type === "Freelance")
  );

  return (
    <div className="campus-page" id="top">
      {/* Toast notification */}
      {toast && (
        <div style={{
          position: "fixed",
          bottom: 24,
          right: 24,
          zIndex: 100,
          background: "#0F172A",
          color: "#FFFFFF",
          padding: "12px 20px",
          borderRadius: 16,
          boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
          display: "flex",
          alignItems: "center",
          gap: 10,
          fontSize: 13,
          fontWeight: 600
        }}>
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#10B981" }} />
          {toast}
        </div>
      )}

      {/* Background radial glows */}
      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />

      {/* Top Header */}
      <header className="site-header">
        <a href="#top" style={{ textDecoration: "none" }}>
          <CampusPeLogo />
        </a>

        <nav className="main-nav">
          <a href="#colleges">Colleges</a>
          <a href="#employers">Employers</a>
          <a href="#jobs">Jobs</a>
          <a href="#footer">Blogs</a>
        </nav>

        <div className="header-actions">
          <button className="sign-in" onClick={() => openModal("Sign In", "Access your matched opportunities and status")}>
            Sign In
          </button>
          <button className="button button-small" onClick={() => openModal("Get Started", "Join 800+ students and 130+ partner colleges")}>
            Sign Up
          </button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="top-feature-bar">
            <div className="feature-pill-card">
              <div className="pill-card-icon whatsapp">💬</div>
              <div className="pill-card-text">
                <strong>WhatsApp Alert</strong>
                <p>You'll get all important updates on your whatsapp</p>
              </div>
            </div>

            <div style={{ textAlign: "center" }}>
              <div className="hero-badge">
                <span className="dot-live" />
                <span>🤖 AI-Powered Campus Assistant</span>
              </div>
            </div>

            <div className="feature-pill-card right">
              <div className="pill-card-icon resume">⚡</div>
              <div className="pill-card-text">
                <strong>Resume Builder</strong>
                <p>Our resume builder gives you dynamic options</p>
              </div>
            </div>
          </div>

          <div className="hero-heading">
            <h1>Connect <span>10X Faster.</span></h1>
            <p>One platform connecting students, colleges &amp; employers — faster.</p>
            <div className="looking-for" onClick={() => openModal("Discovery Filter", "Select what you are looking for")}>
              <span>✦✦</span> What are you looking for? <span>✦✦</span>
            </div>
          </div>

          <div className="floating-notes-row">
            <div className="floating-note">
              <span className="avatar-stack"><i>AK</i><i>PR</i><i>SN</i></span>
              <div>
                <strong>🔥 142 students matched today</strong>
                <small>Just now · IIT, BITS, VIT</small>
              </div>
            </div>

            <div className="floating-note">
              <span style={{ fontSize: 16 }}>💼</span>
              <div>
                <strong>Radiant Info <small style={{ display: "inline" }}>shortlisted 8 interns</small></strong>
                <small className="verified">● Verified recruiter · 2 days ago</small>
              </div>
            </div>
          </div>

          {/* 3 Core Role Cards - Uniform Styling */}
          <div className="role-grid">
            {roleCards.map((card, idx) => (
              <article key={idx} className="role-card">
                <div>
                  <div className="role-top">
                    <div className="role-icon blue-bg">
                      {card.artworkType === "college" && "🏛️"}
                      {card.artworkType === "job" && "🎓"}
                      {card.artworkType === "hiring" && "💼"}
                    </div>
                    <span className={`status-pill ${card.statusType === "available" ? "available" : ""}`}>
                      {card.statusType === "available" && <span className="ping-dot" />}
                      {card.status}
                    </span>
                  </div>

                  <h2>{card.title}</h2>
                  <p>{card.description}</p>

                  <ul>
                    {card.features.map((feat, fIdx) => (
                      <li key={fIdx}>
                        <span className="check-circle">✓</span>
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="card-artwork">
                    {card.artworkType === "college" && (
                      <div className="artwork-college" style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        🏛️
                      </div>
                    )}
                    {card.artworkType === "job" && (
                      <div className="artwork-job" style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 24px" }}>
                        <div className="doc-lines">
                          <span className="doc-line-1" />
                          <span className="doc-line-2" />
                          <span className="doc-line-3" />
                        </div>
                        <div className="loupe-circle">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                        </div>
                      </div>
                    )}
                    {card.artworkType === "hiring" && (
                      <div className="artwork-hiring" style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <div className="code-bracket-pill">&lt;/&gt;</div>
                      </div>
                    )}
                  </div>

                  <button
                    className="button role-button"
                    onClick={() => {
                      if (card.cta === "Explore Jobs") {
                        document.getElementById("resume")?.scrollIntoView({ behavior: "smooth" });
                      } else {
                        openModal(card.title, `Join waitlist for ${card.title}`);
                      }
                    }}
                  >
                    {card.cta}
                    {card.cta === "Explore Jobs" ? " →" : " 🔔"}
                  </button>
                </div>
              </article>
            ))}
          </div>

          <div className="stats-row">
            <div className="stat-item">
              <div className="stat-icon stat-students">👥</div>
              <div className="stat-text">
                <strong>800+</strong>
                <span>Students</span>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon stat-colleges">🏛️</div>
              <div className="stat-text">
                <strong>130+</strong>
                <span>colleges</span>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon stat-jobs">💼</div>
              <div className="stat-text">
                <strong>100+</strong>
                <span>jobs &amp; internships</span>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon stat-safe">🛡️</div>
              <div className="stat-text">
                <strong>100%</strong>
                <span>Safe &amp; Trusted</span>
              </div>
            </div>
          </div>
        </section>

        {/* Partners Strip with Increased Scale */}
        <section className="partners">
          <p>Trusted by partners across India</p>
          <div className="partner-logos" style={{ transform: "scale(1.22)", transformOrigin: "center", margin: "16px 0 24px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ position: "relative", width: 38, height: 38 }}>
                <span style={{ position: "absolute", width: 24, height: 24, borderRadius: "50%", background: "#00A3E0", opacity: 0.9, left: 0, top: 0 }} />
                <span style={{ position: "absolute", width: 20, height: 20, borderRadius: "50%", background: "#0082c8", opacity: 0.9, right: 0, bottom: 0 }} />
              </div>
              <div style={{ textAlign: "left", lineHeight: 1 }}>
                <span style={{ fontWeight: 900, fontSize: 24, color: "#00A3E0" }}>GINSERV</span>
                <span style={{ display: "block", fontSize: 10, color: "#6B7280" }}>Nurturing Ventures</span>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <svg width="46" height="34" viewBox="0 0 48 36" fill="#F05A28">
                <polygon points="0,22 18,10 40,2 26,16 48,16 12,34 18,22" />
              </svg>
              <div style={{ textAlign: "left", lineHeight: 1.1, color: "#1A264F" }}>
                <span style={{ fontWeight: 900, fontSize: 18, display: "block" }}>STARTUP</span>
                <span style={{ fontWeight: 800, fontSize: 13, letterSpacing: 1 }}>KARNATAKA</span>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ width: 38, height: 38, borderRadius: "50%", border: "1px solid #D97706", display: "flex", alignItems: "center", justifyContent: "center", background: "#FEF3C7" }}>
                🏛️
              </div>
              <div style={{ textAlign: "left", lineHeight: 1 }}>
                <span style={{ fontWeight: 800, fontSize: 15, color: "#1E293B", display: "block" }}>IIM</span>
                <span style={{ fontSize: 11, color: "#64748B" }}>BANGALORE</span>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ color: "#2E6B56", fontSize: 22 }}>✦</span>
              <span style={{ fontWeight: 800, fontSize: 14, color: "#1F4337", letterSpacing: 1 }}>TALENTSPOTIFY</span>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <span style={{ fontSize: 10, fontWeight: 800, color: "#E52320", transform: "rotate(-90deg)" }}>RADIANT</span>
              <svg width="28" height="32" viewBox="0 0 24 28" fill="#E52320">
                <path d="M12 0C12 7 20 10 20 17a8 8 0 1 1-16 0c0-6 6-9 7-14l1-3z" />
                <path d="M12 12c-2.5 0-4 1.8-4 4a4 4 0 0 0 8 0c0-2.2-1.5-4-4-4z" fill="#FFF" />
              </svg>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ fontSize: 20 }}>🏛️</span>
              <div style={{ textAlign: "left", lineHeight: 1 }}>
                <span style={{ fontWeight: 900, fontSize: 17, color: "#111827", display: "block" }}>Digital India</span>
                <span style={{ fontSize: 11, color: "#EA580C", fontWeight: 700 }}>#PowerToEmpower</span>
              </div>
            </div>
          </div>
        </section>

        {/* Opportunity Discovery Section */}
        <section className="section-wrap" id="jobs">
          <div className="section-copy">
            <span className="eyebrow">01 • OPPORTUNITY DISCOVERY</span>
            <h2>Stop searching.<br /><span>Start getting matched.</span></h2>
            <p className="section-lead">
              Tell CampusPe your skills, preferences and goals. We continuously monitor company career pages and job sources, find opportunities that match you, and notify you when they appear.
            </p>

            <div className="steps-list">
              {steps.map((st, sIdx) => (
                <article
                  key={sIdx}
                  className={`step-card ${activeStep === sIdx ? "active" : ""}`}
                  onClick={() => setActiveStep(sIdx)}
                >
                  <span className="step-number">0{sIdx + 1}</span>
                  <div className="step-body">
                    <div className="step-title">
                      <h3>{st.title}</h3>
                      <span>{st.tag}</span>
                    </div>
                    <p>{st.text}</p>
                  </div>
                </article>
              ))}
            </div>

            <button
              className="button rounded-button"
              onClick={() => document.getElementById("feed")?.scrollIntoView({ behavior: "smooth" })}
            >
              Explore opportunities →
            </button>
          </div>

          <div className="feed-card" id="feed">
            <div className="feed-heading">
              <div className="feed-header-left">
                <div className="feed-icon">⚡</div>
                <div>
                  <h3>CampusPe Opportunity Feed</h3>
                  <p>Colleges &amp; opportunities matched to you</p>
                </div>
              </div>
              <span className="match-count">● 12 new matches today</span>
            </div>

            <div className="filter-row" role="tablist">
              {filters.map((fItem) => (
                <button
                  key={fItem}
                  type="button"
                  className={filter === fItem ? "selected" : ""}
                  onClick={() => setFilter(fItem)}
                >
                  {fItem}
                </button>
              ))}
            </div>

            <div className="opportunity-list">
              {filteredOpportunities.map((op, oIdx) => (
                <article key={oIdx} className="opportunity-item">
                  <div className="item-top">
                    <div className="item-left">
                      <div className={`item-avatar ${op.mark}`}>
                        {op.mark === "iim" && "🏛️"}
                        {op.mark === "google" && (
                          <svg width="20" height="20" viewBox="0 0 24 24">
                            <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z" />
                            <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.34 24 12 24z" />
                            <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.98 0 12s.45 3.82 1.25 5.42l4.03-3.15z" />
                            <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z" />
                          </svg>
                        )}
                        {op.mark === "notion" && "N"}
                      </div>
                      <div>
                        <div className="item-header-meta">
                          <h4>{op.title}</h4>
                          <span className="tag-badge" style={op.tagStyle}>{op.tag}</span>
                        </div>
                        <div className="item-submeta">
                          <span>{op.place}</span>
                          <span>{op.details}</span>
                          <strong>{op.amount}</strong>
                        </div>
                      </div>
                    </div>

                    <button
                      className="mini-button"
                      onClick={() => openModal(`Apply for ${op.title}`, `Application details for ${op.title}`)}
                    >
                      {op.ctaText}
                    </button>
                  </div>

                  <p className="opportunity-copy">{op.copy}</p>
                </article>
              ))}
            </div>

            <div className="feed-footer">
              <a href="#resume">
                View all matched opportunities →
              </a>
              <span>Curated for you · Updated daily</span>
            </div>

            <p className="handwritten-note">
              A mix of colleges, jobs,<br />internships and gigs — all in one place.
            </p>
          </div>
        </section>

        {/* Resume Section */}
        <section className="resume-section" id="resume">
          <div className="resume-glow" />
          <div className="resume-content">
            <div className="resume-heading">
              <span className="eyebrow">● &nbsp; TRY IT LIVE &nbsp; | &nbsp; v2.4 AI Engine</span>
              <h2>Upload your resume.<br /><span>Find jobs that fit.</span></h2>
              <p>Upload once. CampusPe reads your skills, experience, and preferences — then finds relevant jobs across 1,000+ sources.</p>
            </div>

            <div className="upload-card-wrapper">
              <div className="float-badge left">
                <div className="float-badge-icon lightning">⚡</div>
                <div>
                  <strong>98% Match Rate</strong>
                  <small>AI semantic rank</small>
                </div>
              </div>

              <div className="float-badge right">
                <div className="float-badge-icon lock">🔒</div>
                <div>
                  <strong>ATS Compliant</strong>
                  <small>Standardized parser</small>
                </div>
              </div>

              <div
                className="upload-card"
                onClick={() => fileInputRef.current?.click()}
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => {
                  e.preventDefault();
                  if (e.dataTransfer.files?.[0]) {
                    setFileName(e.dataTransfer.files[0].name);
                    showToast(`Resume "${e.dataTransfer.files[0].name}" uploaded!`);
                  }
                }}
              >
                <div className="dashed-inner-box">
                  <span className="dashed-corner dashed-tl" />
                  <span className="dashed-corner dashed-tr" />
                  <span className="dashed-corner dashed-bl" />
                  <span className="dashed-corner dashed-br" />
                </div>

                <div className="upload-inner">
                  <h3>{fileName || "Upload your resume"}</h3>
                  <p>PDF, DOC, or DOCX · Up to 10MB · We'll use it to understand your skills and experience.</p>
                  
                  <button type="button" className="button rounded-button" style={{ marginBottom: 10 }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
                    {fileName ? "Choose another file" : "Upload resume"}
                  </button>

                  <span style={{ fontSize: 12, color: "#94A3B8" }}>or drag and drop your file here</span>

                  <div className="file-types">
                    <span>PDF</span>
                    <span>DOC</span>
                    <span>DOCX</span>
                  </div>

                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileUpload}
                  />
                </div>
              </div>
            </div>

            <div className="pipeline">
              <div className="pipeline-item">
                <div className="pipeline-check green">✓</div>
                <div>
                  <strong>Resume analyzed</strong>
                  <small>● Ready in 4s</small>
                </div>
              </div>
              <div className="pipeline-item">
                <div className="pipeline-check indigo">✓</div>
                <div>
                  <strong>Skills matched</strong>
                  <small>Deep taxonomy</small>
                </div>
              </div>
              <div className="pipeline-item">
                <div className="pipeline-check purple">✓</div>
                <div>
                  <strong>Experience matched</strong>
                  <small>Contextual seniority</small>
                </div>
              </div>
              <div className="pipeline-item">
                <div className="pipeline-check blue">✓</div>
                <div>
                  <strong>1,000+ sources searched</strong>
                  <small>Real-time aggregators</small>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Colleges Section */}
        <section className="section-wrap" id="colleges">
          <div className="section-copy">
            <span className="eyebrow">02 • FOR COLLEGES</span>
            <h2>
              Get Discovered<br />
              by <span style={{ color: "var(--blue)" }}>Students and<br />Recruiters.</span>
            </h2>
            <p className="section-lead">
              Put your college in front of students searching for the right course and recruiters looking for the right talent. CampusPe helps you build your presence, attract enquiries and connect with opportunities.
            </p>
            <button className="button rounded-button" onClick={() => openModal("List Your College", "Get featured for verified admissions and recruiter discovery")}>
              List Your College →
            </button>
          </div>

          <div className="benefit-stack">
            {colleges.map((col, idx) => (
              <article key={idx} className="benefit-card">
                <div className="card-left">
                  <div className="benefit-eyebrow">
                    <b>{col.step}</b>
                    <span>{col.label}</span>
                  </div>
                  <h3>{col.title}</h3>
                  <p>{col.desc}</p>
                </div>

                <div className="card-right-badges">
                  {col.pillTop}
                  {col.pillBottom}
                  {col.timeNote && <span className="time-note">{col.timeNote}</span>}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Employers Section */}
        <section className="section-wrap" id="employers">
          <div className="section-copy">
            <span className="eyebrow">03 • FOR EMPLOYERS</span>
            <h2>
              Stop running<br />
              campus drives.<br />
              <span>Start hiring the right<br />people.</span>
            </h2>
            <p className="section-lead">
              Post a role in minutes and reach relevant candidates without the time, travel and coordination of traditional hiring. CampusPe helps you discover, match and connect with talent from colleges and beyond.
            </p>
            <button className="button rounded-button" onClick={() => openModal("Post a Job", "Reach top candidates across 500+ campus networks")}>
              Post a Job →
            </button>
          </div>

          <div className="employer-stack">
            {employers.map((emp, idx) => (
              <article key={idx} className="employer-card">
                <div className="card-left">
                  <div className="employer-title-row">
                    <span className="step-number">{emp.step}</span>
                    <h3>{emp.title}</h3>
                    <span className="instant-tag">INSTANT SETUP</span>
                  </div>
                  <p>{emp.desc}</p>
                </div>

                <div className="card-right-badges">
                  {emp.pillTop}
                  {emp.pillBottom}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Mobile Showcase Section - Using Figma Screenshots */}
        <section className="app-showcase">
          <div className="showcase-heading">
            <h2>Checkout Our App Interface Look</h2>
            <p>
              Experience the power of a unified campus ecosystem right in your pocket. <strong>CampusPe</strong> offers a tailored interface for every user: students can explore trending courses, colleges can showcase their campus life, and companies can post job vacancies directly to a pool of qualified candidates.
            </p>
          </div>

          <div className="phone-gallery" style={{ alignItems: "center", minHeight: 520 }}>
            {/* Phone 1: Left */}
            <div className="side-phone left" style={{ overflow: "hidden", padding: 0, width: 210, height: 420 }}>
              <img
                src="/campuspe/phone-left.png"
                alt="App Interface Preview"
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  e.currentTarget.nextElementSibling.style.display = "block";
                }}
              />
              <div className="side-phone-inner light-theme" style={{ display: "none" }}>
                <div style={{ fontSize: 9, color: "#94A3B8" }}>9:41 · Hi, Amit Kumar</div>
                <div style={{ padding: "10px", background: "#EFF6FF", borderRadius: 12, fontSize: 10, color: "#1D4ED8" }}>
                  Find jobs &amp; internships quickly
                </div>
              </div>
            </div>

            {/* Phone 2: Left-Center */}
            <div className="side-phone left" style={{ overflow: "hidden", padding: 0, width: 230, height: 460, transform: "rotate(-2deg) scale(0.98)" }}>
              <img
                src="/campuspe/phone-left-center.png"
                alt="App Interface Preview"
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>

            {/* Phone 3: Main Center Phone with Gold/Bronze Frame */}
            <div className="phone-main" style={{ width: 300, height: 530, borderColor: "#FFAE33", boxShadow: "0 0 0 4px #E68A00, 0 24px 60px rgba(0,0,0,0.15)" }}>
              <div className="phone-island" />
              <div className="phone-screen" style={{ overflow: "hidden" }}>
                <div>
                  <div className="phone-user-top">
                    <div>
                      <small>Hi, Amit Kumar</small>
                      <strong>Discover</strong>
                    </div>
                    <div style={{ display: "flex", gap: 6, fontSize: 12 }}>
                      <span>🔔</span>
                      <span>👤</span>
                    </div>
                  </div>

                  <div className="phone-tabs">
                    <span className="active">Colleges</span>
                    <span className="inactive">Jobs/Internship</span>
                  </div>

                  <div className="phone-banner-card">
                    <small>XYZ University</small>
                    <p>The best education you can get is investing in yourself.</p>
                  </div>

                  <div className="phone-courses-row">
                    <div className="phone-courses-head">
                      <span>Top Courses</span>
                      <span style={{ color: "var(--blue)" }}>View all</span>
                    </div>
                    <div className="phone-courses-icons">
                      <div><div className="phone-c-icon">🎓</div>B.Tech</div>
                      <div><div className="phone-c-icon">🎨</div>Arts</div>
                      <div><div className="phone-c-icon">⚕️</div>MBBS</div>
                      <div><div className="phone-c-icon">📊</div>B.Com</div>
                      <div><div className="phone-c-icon">📚</div>M.Com</div>
                    </div>
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: 10, fontWeight: 700, marginBottom: 6 }}>Trending Colleges</div>
                  <div className="phone-college-item">
                    <div>
                      <strong>Victory College</strong>
                      <small>B.Tech Mech · 4 years</small>
                    </div>
                    <button className="phone-apply-btn" onClick={() => openModal("Victory College Admit", "Direct seat admission")}>
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Phone 4: Right-Center */}
            <div className="side-phone right" style={{ overflow: "hidden", padding: 0, width: 230, height: 460, transform: "rotate(2deg) scale(0.98)" }}>
              <img
                src="/campuspe/phone-right-center.png"
                alt="App Interface Preview"
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>

            {/* Phone 5: Right */}
            <div className="side-phone right" style={{ overflow: "hidden", padding: 0, width: 210, height: 420 }}>
              <img
                src="/campuspe/phone-right.png"
                alt="App Interface Preview"
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  e.currentTarget.nextElementSibling.style.display = "block";
                }}
              />
              <div className="side-phone-inner blue-theme" style={{ display: "none" }}>
                <div style={{ fontSize: 9, opacity: 0.8 }}>9:41 · My Applications</div>
                <div style={{ background: "#FFFFFF", color: "#0F172A", padding: "10px", borderRadius: 12, fontSize: 10 }}>
                  <strong>Product Intern</strong>
                </div>
              </div>
            </div>
          </div>

          <div className="showcase-dots">
            <i />
            <i />
            <i className="active" />
            <i />
            <i />
          </div>

          {/* Download App Row with Tilted Dual-Phone Mockup */}
          <div className="download-row">
            <div>
              <h3>Download App Now</h3>
              <p>
                Elevate your academic journey with CampusPe, the all-in-one digital ecosystem designed to bridge the gap between education and industry. Whether you’re a student seeking your next big internship, a college looking to empower your cohort, or a company scouting for top-tier talent, CampusPe streamlines the connection. Your career doesn't start at graduation—it starts here.
              </p>
              <div className="store-buttons">
                <a href="#footer" className="store-btn" onClick={() => showToast("Opening Google Play...")}>
                  <span>▶</span>
                  <div className="store-btn-text">
                    <small>GET IT ON</small>
                    <strong>Google Play</strong>
                  </div>
                </a>
                <a href="#footer" className="store-btn" onClick={() => showToast("Opening App Store...")}>
                  <span>🍎</span>
                  <div className="store-btn-text">
                    <small>Download on the</small>
                    <strong>App Store</strong>
                  </div>
                </a>
              </div>
            </div>

            {/* Tilted Dual Phone Artwork from Design */}
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", position: "relative", height: 260 }}>
              <div style={{
                position: "absolute",
                width: 170,
                height: 230,
                background: "#0F172A",
                borderRadius: 28,
                padding: 8,
                transform: "rotate(-12deg) translateX(-45px)",
                boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                border: "1px solid #334155"
              }}>
                <div style={{ background: "#FFFFFF", width: "100%", height: "100%", borderRadius: 20, padding: 10, textAlign: "left" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: 8, color: "#94A3B8" }}>
                    <span>9:41</span>
                    <span>🔋</span>
                  </div>
                  <strong style={{ display: "block", fontSize: 10, marginTop: 8 }}>Victory College</strong>
                  <span style={{ fontSize: 8, color: "#64748B" }}>B.Tech · Placements</span>
                </div>
              </div>

              <div style={{
                position: "absolute",
                width: 180,
                height: 240,
                background: "#020617",
                borderRadius: 30,
                padding: 8,
                transform: "rotate(6deg) translateX(40px)",
                boxShadow: "0 24px 50px rgba(0,0,0,0.25)",
                zIndex: 2,
                border: "2px solid #1E293B"
              }}>
                <div style={{ background: "#FAFCFF", width: "100%", height: "100%", borderRadius: 22, padding: 12, textAlign: "left" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: 8, color: "#94A3B8" }}>
                    <span>9:41</span>
                    <span>📶 🔋</span>
                  </div>
                  <small style={{ fontSize: 8, color: "#94A3B8", display: "block", marginTop: 4 }}>Hi, Amit Kumar</small>
                  <strong style={{ fontSize: 11, color: "#0F172A" }}>Discover</strong>
                  <div style={{ marginTop: 8, padding: 6, background: "#0066FF", color: "#FFFFFF", borderRadius: 8, fontSize: 8, fontWeight: 700 }}>
                    Top Internships
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Support Section */}
        <section className="contact-cta">
          <h2>Still have questions?</h2>
          <p>Our support team is here to help you succeed. Get in touch anytime.</p>
          <div className="contact-buttons">
            <button className="button rounded-button" onClick={() => openModal("Contact CampusPe Support", "Our advisors are available 24/7")}>
              Contact Support →
            </button>
            <button className="outline-button" onClick={() => openModal("Schedule a Strategy Call", "Talk with campus or recruiter onboarding")}>
              Schedule a Call 📞
            </button>
          </div>
        </section>

        {/* Ready Banner */}
        <section className="ready-banner">
          <div>
            <h2>Ready for what’s next?</h2>
            <p>Discover colleges, find opportunities, list your institution, or start hiring with CampusPe.</p>
          </div>
          <div className="ready-actions">
            <a href="#colleges" className="blue-action">Explore Colleges →</a>
            <a href="#jobs" className="blue-action">Find Opportunities →</a>
            <button className="light-action" onClick={() => openModal("List Your College", "Onboard your college")}>List Your College →</button>
            <button className="light-action" onClick={() => openModal("Post a Job", "Find top candidates")}>Post a Job →</button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="site-footer" id="footer">
        <div className="footer-main">
          <div className="footer-brand">
            <a href="#top" style={{ textDecoration: "none", display: "inline-block", marginBottom: 12 }}>
              <CampusPeLogo />
            </a>
            <p>From choosing a college to finding your next opportunity.</p>
            <p style={{ marginTop: 8, color: "#94A3B8" }}>CampusPe connects students, colleges and employers in one place.</p>
          </div>

          {footerGroups.map((grp, gIdx) => (
            <div key={gIdx} className="footer-group">
              <h3>{grp.heading}</h3>
              {grp.links.map((lnk, lIdx) => (
                <a
                  key={lIdx}
                  href="#top"
                  onClick={(e) => {
                    e.preventDefault();
                    openModal(lnk, `More information about ${lnk}`);
                  }}
                >
                  {lnk}
                </a>
              ))}
              {grp.heading === "Legal & Policies" && (
                <>
                  <a href="#footer" style={{ color: "#0066FF", fontWeight: 700, marginTop: 4 }}>View all policies →</a>
                  <div style={{
                    marginTop: 14,
                    background: "#EBF3FF",
                    border: "1px solid #D6E7FF",
                    borderRadius: 16,
                    padding: 12,
                    fontSize: 11,
                    color: "#1E3A8A",
                    lineHeight: 1.5,
                    textAlign: "left"
                  }}>
                    Separate user, institution and employer terms can live inside the full Policies page.
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        <div className="footer-contact">
          <a href="mailto:contactus@campuspe.com">✉️ contactus@campuspe.com</a>
          <a href="tel:+916362606464">📞 +91 6362606464</a>
          <span>● &nbsp; Students · Colleges · Employers</span>
        </div>

        <div className="footer-legal">
          <span>2026 CampusPe Technologies Pvt. Ltd. &nbsp; Privacy &nbsp; Terms &nbsp; Grievance</span>
          <div className="social-links">
            <a href="#footer" aria-label="LinkedIn">in</a>
            <a href="#footer" aria-label="Instagram">◎</a>
            <a href="#footer" aria-label="Facebook">f</a>
            <a href="#footer" aria-label="YouTube">▶</a>
          </div>
        </div>
      </footer>

      {/* Action Dialog Modal */}
      {modalOpen && (
        <div style={{
          position: "fixed",
          inset: 0,
          zIndex: 1000,
          background: "rgba(15, 23, 42, 0.45)",
          backdropFilter: "blur(6px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 16
        }}>
          <div style={{
            background: "#FFFFFF",
            borderRadius: 24,
            maxWidth: 440,
            width: "100%",
            padding: 32,
            boxShadow: "0 20px 50px rgba(0,0,0,0.15)",
            position: "relative"
          }}>
            <button
              onClick={() => setModalOpen(false)}
              style={{
                position: "absolute",
                top: 20,
                right: 20,
                background: "none",
                border: "none",
                fontSize: 18,
                cursor: "pointer",
                color: "#94A3B8"
              }}
            >
              ✕
            </button>

            <div style={{ width: 44, height: 44, borderRadius: 14, background: "#EFF6FF", color: "var(--blue)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, marginBottom: 16 }}>
              ⚡
            </div>

            <h3 style={{ fontSize: 20, fontWeight: 800, color: "#0F172A", marginBottom: 6 }}>{modalData.title}</h3>
            <p style={{ fontSize: 13, color: "#64748B", marginBottom: 20 }}>{modalData.subtitle}</p>

            <form onSubmit={(e) => {
              e.preventDefault();
              setModalOpen(false);
              showToast(`Submitted: ${modalData.title}`);
            }}>
              <div style={{ marginBottom: 14 }}>
                <label style={{ display: "block", fontSize: 11, fontWeight: 700, color: "#374151", marginBottom: 6 }}>Full Name</label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Amit Kumar"
                  style={{ width: "100%", padding: "10px 14px", borderRadius: 12, border: "1px solid #E2E8F0", fontSize: 13, outline: "none" }}
                />
              </div>

              <div style={{ marginBottom: 20 }}>
                <label style={{ display: "block", fontSize: 11, fontWeight: 700, color: "#374151", marginBottom: 6 }}>Email or Phone Number</label>
                <input
                  required
                  type="text"
                  placeholder="amit@example.com or +91 9876543210"
                  style={{ width: "100%", padding: "10px 14px", borderRadius: 12, border: "1px solid #E2E8F0", fontSize: 13, outline: "none" }}
                />
              </div>

              <button type="submit" className="button" style={{ width: "100%", padding: 12 }}>
                Submit Now
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}