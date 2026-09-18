"use client";

import React, { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaSearch,
  FaTimes,
  FaArrowLeft,
  FaArrowRight,
  FaCheckCircle,
  FaMicrophoneAlt,
  FaPalette,
  FaPenNib,
  FaVideo,
  FaTrophy,
  FaCalendarAlt,
  FaUserTie,
  FaTools,
} from "react-icons/fa";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface ActivityItem {
  id: string;
  title: string;
  category: "Event Hosting" | "Graphic Design" | "Technical Writing" | "Video & Media" | "Competitions";
  event: string;
  role: string;
  date: string;
  icon: React.ReactNode;
  tags: string[];
  summary: string;
  overview: string;
  contributions: string[];
  tools: string[];
  impact: string;
}

const activitiesData: ActivityItem[] = [
  {
    id: "bizstar-v",
    title: "BIZSTAR Season V Strategic Case Competition",
    category: "Competitions",
    event: "Accounting Communication Club",
    role: "Case Strategist & Pitch Deck Designer",
    date: "2026",
    icon: <FaTrophy className="text-[#f5a67c]" />,
    tags: ["Strategy", "Pitch Deck", "Market Entry", "Presentation"],
    summary: "Formulated an end-to-end strategic market entry framework analyzing competitive positioning for KDS Group's fortified biscuit brand 'GrowRight'.",
    overview: "Participated in BIZSTAR Season V, a premier corporate strategy case competition. My responsibility centered on analyzing consumer pain points, structuring distribution channels, and authoring a high-impact 20-slide analytical pitch deck.",
    contributions: [
      "Engineered comprehensive 20-slide presentation deck with custom data visualizations and financial break-even projections.",
      "Conducted competitive matrix benchmarking against established FMCG nutrition brands.",
      "Delivered the final pitch defense, addressing jury inquiries regarding supply-chain scalability and margin dynamics.",
    ],
    tools: ["Figma / Keynote", "Market Sizing Analysis", "Financial Modeling", "Strategic Positioning"],
    impact: "Sharpens business architecture intuition—enabling me to align database schemas, microservice workflows, and system throughput with real commercial business objectives.",
  },
  {
    id: "protichamp-ai",
    title: "PROTICHAMP AI Championship 1.0 Pitch & Demo",
    category: "Video & Media",
    event: "National AI Championship",
    role: "Project Lead, Demo Producer & Scriptwriter",
    date: "2026",
    icon: <FaVideo className="text-[#f5a67c]" />,
    tags: ["W2A Intelligence", "Video Production", "Scripting", "AI Demo"],
    summary: "Scripted, produced, and edited the video submission showcasing 'W2A Intelligence' under the Environment & Sustainability category.",
    overview: "Submitted 'W2A Intelligence' (an AI-powered waste-to-assets allocation system) to the PROTICHAMP AI Championship. Produced a compelling 3-minute video pitch that explained complex computer vision classification algorithms to jury evaluators.",
    contributions: [
      "Authored a voiceover script translating complex Gemini Vision API classifications into understandable real-world benefits.",
      "Captured live UI interactions, terminal logs, and system flowcharts for multi-angle presentation.",
      "Edited video transitions, sound layers, and synchronized captions to maintain fast-paced viewer engagement.",
    ],
    tools: ["Adobe Premiere Pro", "CapCut", "Screen Telemetry Tools", "Audio Mastering"],
    impact: "Enables me to produce clear asynchronous feature demos, walkthroughs, and executive summaries for engineering teams and non-technical stakeholders.",
  },
  {
    id: "campus-seminar-hosting",
    title: "Departmental Tech Seminar & Project Exhibition",
    category: "Event Hosting",
    event: "Dept. of CSE, Comilla University",
    role: "Stage Host & Event Emcee",
    date: "2026",
    icon: <FaMicrophoneAlt className="text-[#f5a67c]" />,
    tags: ["Stage Emcee", "Public Speaking", "Event Coordination"],
    summary: "Hosted academic presentation rosters and departmental project showcases, coordinating scheduling and engaging 200+ attendees.",
    overview: "Served as the primary stage emcee for departmental seminar presentations and academic project showcases at Comilla University, maintaining itinerary timing and facilitating engaging dialogue between faculty judges and students.",
    contributions: [
      "Coordinated presentation rosters for over 15 undergraduate project teams and faculty evaluation panels.",
      "Introduced keynote guest speakers, supervisors, and department heads with structured introductory remarks.",
      "Facilitated audience Q&A discussions, ensuring smooth transitions between presentation modules.",
    ],
    tools: ["Stage Moderation", "Public Address", "Itinerary Coordination", "Live Crisis Handling"],
    impact: "Fosters strong cross-functional communication, active listening, and calm problem-solving during high-pressure sprint demos and client presentations.",
  },
  {
    id: "digital-smoke-screen",
    title: "The Digital Smoke Screen: Misinformation Defense",
    category: "Event Hosting",
    event: "Campus Seminar Series",
    role: "Co-Speaker & Digital Literacy Author",
    date: "2026",
    icon: <FaMicrophoneAlt className="text-[#48c9b0]" />,
    tags: ["Public Speaking", "Research", "Digital Ethics"],
    summary: "Authored and presented the closing takeaway frameworks on algorithmic confirmation biases and digital forensic verification.",
    overview: "Co-prepared and delivered an academic seminar presentation analyzing how fake news propagates online and why confirmation bias reinforces distorted realities.",
    contributions: [
      "Authored the final presentation segment outlining actionable digital self-defense techniques and source verification tools.",
      "Demonstrated real-time forensic reverse-image searching and URL metadata inspection to detect synthetic misinformation.",
      "Handled jury questions regarding generative AI media synthesis and content provenance protocols.",
    ],
    tools: ["Slide Deck Design", "Digital Forensics", "Public Speaking", "Academic Research"],
    impact: "Deepens security and data integrity mindset when architecting authentication systems, input validation sanitizers, and audit logs.",
  },
  {
    id: "w2a-latex-doc",
    title: "W2A Intelligence - Thesis & System Architecture Docs",
    category: "Technical Writing",
    event: "Undergraduate Project Documentation",
    role: "System Architect & Technical Author",
    date: "2026",
    icon: <FaPenNib className="text-[#48c9b0]" />,
    tags: ["LaTeX", "3NF Normalization", "System Blueprints", "Mermaid.js"],
    summary: "Authored formal IEEE-standard documentation, Mermaid.js sequence flows, and 3NF relational database schema proofs for W2A Intelligence.",
    overview: "Engineered comprehensive technical documentation for the W2A Intelligence municipal waste allocation platform under the academic supervision of Associate Professor Partha Chakraborty.",
    contributions: [
      "Structured Third Normal Form (3NF) relational database diagrams and Entity-Relationship specifications in MySQL.",
      "Generated detailed sequence diagrams, Model-View-Controller (MVC) flowcharts, and system block diagrams using Mermaid.js.",
      "Typeset formal academic reports in LaTeX with strict citation standards, mathematical formulations, and schema definitions.",
    ],
    tools: ["LaTeX", "Mermaid.js", "MySQL Workbench", "GitBook / Markdown"],
    impact: "Prevents technical debt by ensuring complex backend routes, ORM relationships, and API contracts are rigorously documented for seamless team scalability.",
  },
  {
    id: "campus-fest-branding",
    title: "Campus Cultural & Tech Event Visual Branding",
    category: "Graphic Design",
    event: "University Campus Events",
    role: "Lead Visual Designer",
    date: "2025 - 2026",
    icon: <FaPalette className="text-[#48c9b0]" />,
    tags: ["Brand Identity", "Poster Design", "Figma", "Typography"],
    summary: "Created cohesive visual brand identities, digital social media kits, and print banners with strict typographic hierarchy.",
    overview: "Led the visual direction for campus cultural programs and tech club activities, delivering high-resolution print banners, attendee passes, and multi-format social campaign graphics.",
    contributions: [
      "Designed print-ready vector banners, badges, and social promo assets maintaining brand color coherence.",
      "Implemented balanced typographic scales and WCAG-compliant contrast ratios across dark and light promotional media.",
      "Delivered responsive layouts formatted for square feeds, stories, and wide-format campus backdrops.",
    ],
    tools: ["Adobe Photoshop", "Adobe Illustrator", "Figma", "Canva Pro"],
    impact: "Directly enhances frontend engineering—I write Tailwind CSS and React code with pixel-perfect spatial balance, intentional contrast, and refined micro-interactions.",
  },
];

export default function ActivitiesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("" );
  const [selectedActivity, setSelectedActivity] = useState<ActivityItem | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedActivity) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedActivity]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedActivity(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const categories = [
    "All",
    "Event Hosting",
    "Graphic Design",
    "Technical Writing",
    "Video & Media",
    "Competitions",
  ] as const;

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: activitiesData.length };
    categories.forEach((cat) => {
      if (cat !== "All") {
        counts[cat] = activitiesData.filter((item) => item.category === cat).length;
      }
    });
    return counts;
  }, []);

  // Filter & Search Logic
  const filteredActivities = useMemo(() => {
    return activitiesData.filter((item) => {
      const matchesCat = selectedCategory === "All" || item.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        q === "" ||
        item.title.toLowerCase().includes(q) ||
        item.event.toLowerCase().includes(q) ||
        item.role.toLowerCase().includes(q) ||
        item.summary.toLowerCase().includes(q) ||
        item.tags.some((tag) => tag.toLowerCase().includes(q));

      return matchesCat && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-main)] text-[var(--text-main)] transition-colors duration-300">
      {/* 1. TOP FIXED NAVBAR */}
      <Header />

      {/* 2. MIDDLE MAIN CONTENT */}
      <main className="flex-1 pt-28 pb-20 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto w-full">
        {/* Navigation Breadcrumb / Back Link */}
        <div className="mb-8 flex items-center justify-between border-b border-[var(--border-color)] pb-4">
          <Link
            href="/#about"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[var(--text-muted)] hover:text-[#48c9b0] transition-colors"
          >
            <FaArrowLeft className="text-xs" />
            <span>Return to Portfolio</span>
          </Link>

          <span className="text-[11px] font-mono text-[var(--text-muted)]">
            Showing {filteredActivities.length} of {activitiesData.length} records
          </span>
        </div>

        {/* Page Header Title */}
        <div className="mb-10 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-[#48c9b0]/25 bg-[var(--bg-card)] text-[11px] font-mono uppercase tracking-widest text-[#48c9b0] mb-3">
            <span>Leadership & Creative Archive</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--text-main)]">
            Beyond <span className="gradient-text">the Terminal</span>
          </h1>
          <p className="mt-3 text-[var(--text-muted)] text-xs sm:text-sm md:text-base max-w-2xl leading-relaxed">
            A comprehensive record of event moderation, visual branding, technical documentation, media production, and competitive strategy case studies.
          </p>
        </div>

        {/* Search & Filter Bar Controls */}
        <div className="mb-8 space-y-4">
          {/* Search Box */}
          <div className="relative w-full">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-xs text-[var(--text-muted)]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by event name, role, tags, or description..."
              className="w-full bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-main)] text-xs sm:text-sm rounded-2xl pl-10 pr-10 py-3 outline-none focus:border-[#48c9b0] transition-colors placeholder:text-[var(--text-muted)] shadow-sm"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-[var(--text-muted)] hover:text-[var(--text-main)] cursor-pointer"
              >
                <FaTimes />
              </button>
            )}
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              const count = categoryCounts[cat] || 0;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-150 cursor-pointer whitespace-nowrap ${
                    isActive
                      ? "bg-[#48c9b0] text-[#071113] shadow-md shadow-[#48c9b0]/20 font-bold"
                      : "bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-muted)] hover:text-[var(--text-main)] hover:border-[#48c9b0]/40"
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`px-1.5 py-0.5 rounded-md text-[10px] ${
                      isActive
                        ? "bg-[#071113]/20 text-[#071113]"
                        : "bg-[var(--bg-main)] text-[var(--text-muted)] border border-[var(--border-color)]"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Empty State */}
        {filteredActivities.length === 0 ? (
          <div className="text-center py-16 px-4 rounded-3xl border border-[var(--border-color)] bg-[var(--bg-card)]">
            <h3 className="text-base sm:text-lg font-bold text-[var(--text-main)]">
              No matching activities found
            </h3>
            <p className="text-xs text-[var(--text-muted)] mt-1.5 max-w-sm mx-auto">
              No records matched &quot;{searchQuery}&quot; in the &quot;{selectedCategory}&quot; category.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="mt-4 px-4 py-2 bg-[#48c9b0] text-[#071113] rounded-xl text-xs font-bold hover:bg-[#3fb8a0] transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          /* Cards Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredActivities.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="group rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] p-6 shadow-sm hover:border-[#48c9b0]/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar: Icon + Category + Year */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="h-9 w-9 rounded-xl bg-[#48c9b0]/15 flex items-center justify-center text-sm">
                        {item.icon}
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-md border border-[#48c9b0]/25 bg-[var(--bg-main)] text-[#48c9b0] font-semibold">
                        {item.category}
                      </span>
                    </div>

                    <span className="inline-flex items-center gap-1 text-[11px] font-mono text-[var(--text-muted)]">
                      <FaCalendarAlt className="text-[9px]" /> {item.date}
                    </span>
                  </div>

                  {/* Title & Organization */}
                  <h3 className="text-base sm:text-lg font-bold text-[var(--text-main)] group-hover:text-[#48c9b0] transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs font-medium text-[var(--text-muted)] mt-1 flex items-center gap-1.5">
                    <FaUserTie className="text-[10px] text-[#f5a67c]" />
                    <span>{item.role}</span>
                  </p>

                  <p className="text-[11px] text-[var(--text-muted)]/80 italic mt-0.5">
                    {item.event}
                  </p>

                  {/* Summary */}
                  <p className="mt-3.5 text-xs text-[var(--text-muted)] leading-relaxed line-clamp-3">
                    {item.summary}
                  </p>

                  {/* Tags */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {item.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 text-[10px] font-semibold bg-[var(--bg-main)] text-[var(--text-muted)] border border-[var(--border-color)] rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA Button */}
                <div className="mt-6 pt-4 border-t border-[var(--border-color)]/60 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setSelectedActivity(item)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#48c9b0] hover:text-[#3fb8a0] transition-colors group-hover:underline cursor-pointer"
                  >
                    <span>See Details</span>
                    <FaArrowRight className="text-[9px] transition-transform duration-200 group-hover:translate-x-1" />
                  </button>

                  <span className="text-[10px] font-mono text-[var(--text-muted)]">
                    Case Study
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </main>

      {/* 3. DEEP CASE STUDY DETAILS MODAL */}
      <AnimatePresence>
        {selectedActivity && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 12 }}
              transition={{ duration: 0.22 }}
              className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-3xl max-w-2xl w-full max-h-[88vh] overflow-y-auto p-6 sm:p-8 relative shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedActivity(null)}
                className="absolute top-5 right-5 p-2 text-[var(--text-muted)] hover:text-[var(--text-main)] rounded-xl hover:bg-[var(--bg-main)] transition-colors cursor-pointer"
                aria-label="Close modal"
                type="button"
              >
                <FaTimes className="text-base" />
              </button>

              {/* Tag & Year */}
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-mono px-2.5 py-1 rounded-md border border-[#48c9b0]/30 bg-[#48c9b0]/10 text-[#48c9b0] uppercase tracking-wider font-semibold">
                  {selectedActivity.category}
                </span>
                <span className="text-[11px] font-mono text-[var(--text-muted)]">
                  · {selectedActivity.date}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[var(--text-main)] pr-8 mt-1">
                {selectedActivity.title}
              </h3>

              <div className="mt-1 mb-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[#f5a67c] font-medium">
                <span>Role: {selectedActivity.role}</span>
                <span className="text-[var(--text-muted)]">|</span>
                <span className="text-[var(--text-muted)]">{selectedActivity.event}</span>
              </div>

              {/* Section 1: Overview */}
              <div className="mb-6">
                <h4 className="text-xs font-mono uppercase tracking-[0.16em] text-[var(--text-muted)] mb-2 font-bold">
                  Overview & Context
                </h4>
                <p className="text-xs sm:text-sm text-[var(--text-main)] leading-relaxed bg-[var(--bg-main)] p-4 rounded-xl border border-[var(--border-color)]">
                  {selectedActivity.overview}
                </p>
              </div>

              {/* Section 2: Key Deliverables & Contributions */}
              <div className="mb-6">
                <h4 className="text-xs font-mono uppercase tracking-[0.16em] text-[var(--text-muted)] mb-2.5 font-bold">
                  Key Actions & Deliverables
                </h4>
                <ul className="space-y-2.5">
                  {selectedActivity.contributions.map((point, index) => (
                    <li key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                      <FaCheckCircle className="text-[#48c9b0] mt-0.5 text-xs flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Section 3: Tools & Competencies */}
              <div className="mb-6">
                <h4 className="text-xs font-mono uppercase tracking-[0.16em] text-[var(--text-muted)] mb-2 font-bold flex items-center gap-1.5">
                  <FaTools className="text-[#f5a67c]" /> Tools & Frameworks Applied
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedActivity.tools.map((tool, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 text-[11px] font-semibold bg-[var(--bg-main)] border border-[var(--border-color)] text-[var(--text-main)] rounded-lg"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Section 4: Engineering Impact */}
              <div className="mb-8">
                <h4 className="text-xs font-mono uppercase tracking-[0.16em] text-[var(--text-muted)] mb-2 font-bold">
                  How This Elevates My Engineering
                </h4>
                <div className="p-4 rounded-2xl bg-[var(--bg-main)] border border-[#48c9b0]/25 text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                  {selectedActivity.impact}
                </div>
              </div>

              {/* Modal Footer */}
              <div className="pt-4 border-t border-[var(--border-color)] flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setSelectedActivity(null)}
                  className="px-5 py-2.5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-main)] hover:border-[#48c9b0] text-[var(--text-main)] text-xs font-semibold transition-all cursor-pointer"
                >
                  Close Window
                </button>

                <Link
                  href="/#contact"
                  onClick={() => setSelectedActivity(null)}
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#48c9b0] hover:bg-[#3fb8a0] text-[#071113] text-xs font-bold transition-all shadow-md cursor-pointer"
                >
                  <span>Let&apos;s Connect</span>
                  <FaArrowRight className="text-[10px]" />
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 4. BOTTOM FOOTER */}
      <Footer />
    </div>
  );
}