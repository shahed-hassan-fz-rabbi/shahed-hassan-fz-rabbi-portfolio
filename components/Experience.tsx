'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaBriefcase,
  FaCheckCircle,
  FaCertificate,
  FaTimes,
  FaExternalLinkAlt,
  FaShieldAlt,
  FaCalendarAlt,
  FaBuilding,
} from 'react-icons/fa';

interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  duration: string;
  isVerified: boolean;
  credentialId?: string;
  certificateUrl?: string; // Paste your Google Drive share link here
  responsibilities: string[];
}

const experiences: ExperienceItem[] = [
  {
    id: 'bysdo-intern',
    role: 'Intern',
    organization: 'Bangladesh Youth Skill Development Organization',
    duration: 'June 2026 — Present',
    isVerified: true,
    credentialId: 'BYSDO-2026-INT-089',
    certificateUrl: 'https://drive.google.com/file/d/1exampleFileIdBYSDO/view?usp=sharing',
    responsibilities: [
      'Supporting youth skill-development programs and technical communication.',
      'Streamlining digital workflows, program execution, and project tracking.',
    ],
  },
  {
    id: 'cse-club-exec',
    role: 'Executive Member',
    organization: 'CSE Department Development Club, Comilla University',
    duration: 'Present',
    isVerified: true,
    credentialId: 'CU-CSE-DEV-2026',
    certificateUrl: 'https://drive.google.com/file/d/1exampleFileIdCSEClub/view?usp=sharing',
    responsibilities: [
      'Organizing departmental hackathons, workshops, and coding initiatives.',
      'Mentoring juniors in algorithmic problem-solving and software engineering basics.',
    ],
  },
  {
    id: 'fmp-president',
    role: 'President — Media & Publication Wing',
    organization: 'Finding Mental Peace Club',
    duration: '01/2024 — 01/2025',
    isVerified: true,
    credentialId: 'FMP-PUB-2401',
    certificateUrl: 'https://drive.google.com/file/d/1exampleFileIdFMP/view?usp=sharing',
    responsibilities: [
      'Directed campus-wide media outreach and creative publication campaigns.',
      'Managed digital content strategy and student mental health initiatives.',
    ],
  },
];

export default function Experience() {
  const [selectedCert, setSelectedCert] = useState<ExperienceItem | null>(null);

  // Close modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedCert(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedCert) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedCert]);

  // Converts standard Google Drive view links to embeddable preview links
  const getDriveEmbedUrl = (url?: string) => {
    if (!url) return '';
    if (url.includes('drive.google.com/file/d/')) {
      return url.replace(/\/view(\?.*)?$/, '/preview');
    }
    return url;
  };

  return (
    <section
      id="experience"
      className="relative py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden bg-[var(--bg-main)] text-[var(--text-main)] transition-colors duration-300"
    >
      {/* Background Soft Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-10 -right-20 w-80 h-80 rounded-full bg-[#48c9b0]/[0.05] blur-[120px]"
      />

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        viewport={{ once: true }}
        className="mb-14 text-center md:text-left"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-[#48c9b0]/25 bg-[var(--bg-card)]/80 px-3.5 py-1.5 backdrop-blur-md mb-4 shadow-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-[#48c9b0]" />
          <span className="text-xs font-mono uppercase tracking-[0.18em] text-[#48c9b0]">
            Experience & Credentials
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--text-main)] leading-[1.15]">
          Work & <span className="gradient-text">Leadership.</span>
        </h2>
        <p className="mt-3 max-w-2xl text-xs sm:text-sm md:text-base text-[var(--text-muted)] leading-relaxed">
          Internship history, campus club leadership roles, and verified institutional certifications.
        </p>
      </motion.div>

      {/* Experience Cards */}
      <div className="space-y-6">
        {experiences.map((exp, idx) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: idx * 0.08 }}
            viewport={{ once: true }}
            className="group rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] p-6 sm:p-8 shadow-sm hover:border-[#48c9b0]/40 hover:shadow-xl transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between pb-4 mb-4 border-b border-[var(--border-color)]/70 gap-3">
              <div className="flex items-start sm:items-center gap-3.5">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-[#48c9b0]/15 text-[#48c9b0] text-base group-hover:scale-105 transition-transform">
                  <FaBriefcase />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-lg sm:text-xl font-bold text-[var(--text-main)]">
                      {exp.role}
                    </h3>
                    {exp.isVerified && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#48c9b0]/15 border border-[#48c9b0]/30 text-[#48c9b0] text-[10px] font-mono font-semibold">
                        <FaCheckCircle className="text-[9px]" /> Verified
                      </span>
                    )}
                  </div>
                  <p className="text-xs sm:text-sm font-semibold text-[#48c9b0] mt-0.5">
                    {exp.organization}
                  </p>
                </div>
              </div>

              {/* Right Side: Duration & View Certificate Button */}
              <div className="flex flex-wrap items-center gap-2.5 self-start md:self-auto">
                <span className="inline-flex items-center gap-1.5 text-xs font-mono font-medium px-3 py-1.5 rounded-xl bg-[var(--bg-main)] border border-[var(--border-color)] text-[var(--text-muted)]">
                  <FaCalendarAlt className="text-[10px]" />
                  {exp.duration}
                </span>

                {exp.certificateUrl && (
                  <button
                    type="button"
                    onClick={() => setSelectedCert(exp)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#48c9b0] hover:bg-[#3fb8a0] text-[#071113] text-xs font-bold shadow-md shadow-[#48c9b0]/20 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
                  >
                    <FaCertificate className="text-xs" />
                    <span>View Certificate</span>
                  </button>
                )}
              </div>
            </div>

            {/* Responsibilities List */}
            <ul className="space-y-2 text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
              {exp.responsibilities.map((res, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#48c9b0] mt-2 flex-shrink-0" />
                  <span>{res}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* ================= CERTIFICATE VERIFICATION MODAL ================= */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 12 }}
              transition={{ duration: 0.22 }}
              className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative shadow-2xl"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedCert(null)}
                className="absolute top-5 right-5 p-2 text-[var(--text-muted)] hover:text-[var(--text-main)] rounded-xl hover:bg-[var(--bg-main)] transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <FaTimes className="text-base" />
              </button>

              {/* Verified Ribbon */}
              <div className="flex items-center gap-2 mb-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#48c9b0]/15 border border-[#48c9b0]/30 text-[#48c9b0] text-xs font-mono font-bold">
                  <FaShieldAlt className="text-xs" /> Authenticated Credential
                </span>
                {selectedCert.credentialId && (
                  <span className="text-[11px] font-mono text-[var(--text-muted)]">
                    ID: {selectedCert.credentialId}
                  </span>
                )}
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-[var(--text-main)] pr-6">
                {selectedCert.role}
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-[#48c9b0] mt-0.5 flex items-center gap-1.5">
                <FaBuilding className="text-xs text-[var(--text-muted)]" />
                <span>{selectedCert.organization}</span>
              </p>

              {/* Google Drive Document Preview Area */}
              <div className="mt-5 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-main)] overflow-hidden">
                {selectedCert.certificateUrl?.includes('drive.google.com') ? (
                  <iframe
                    src={getDriveEmbedUrl(selectedCert.certificateUrl)}
                    title={`${selectedCert.role} Certificate Preview`}
                    className="w-full h-80 sm:h-96 border-none bg-black/20"
                    allow="autoplay"
                  />
                ) : (
                  <div className="text-center py-12 px-4">
                    <FaCertificate className="text-4xl text-[#48c9b0]/60 mx-auto mb-3" />
                    <p className="text-sm font-bold text-[var(--text-main)]">
                      Official Institutional Document
                    </p>
                    <p className="text-xs text-[var(--text-muted)] mt-1 max-w-sm mx-auto">
                      Verified tenure record and completion document issued by {selectedCert.organization}.
                    </p>
                  </div>
                )}
              </div>

              {/* Modal Actions */}
              <div className="mt-6 pt-4 border-t border-[var(--border-color)] flex flex-wrap items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedCert(null)}
                  className="px-5 py-2.5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-main)] hover:border-[#48c9b0] text-[var(--text-main)] text-xs font-semibold transition-all cursor-pointer"
                >
                  Close
                </button>

                {selectedCert.certificateUrl && (
                  <a
                    href={selectedCert.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#48c9b0] hover:bg-[#3fb8a0] text-[#071113] text-xs font-bold shadow-md shadow-[#48c9b0]/20 transition-all cursor-pointer"
                  >
                    <span>Open in Google Drive</span>
                    <FaExternalLinkAlt className="text-[10px]" />
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}