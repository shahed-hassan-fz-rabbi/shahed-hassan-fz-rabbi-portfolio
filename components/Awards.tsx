'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import {
  FaCertificate,
  FaTimes,
  FaExternalLinkAlt,
  FaShieldAlt,
  FaCalendarAlt,
  FaAward,
  FaCheckCircle,
} from 'react-icons/fa';

interface AwardItem {
  id: string;
  title: string;
  achievement: string;
  description: string;
  year: string;
  icon: string;
  isVerified: boolean;
  credentialId?: string;
  certificateUrl?: string; // Google Drive share link
}

const awards: AwardItem[] = [
  {
    id: 'protichamp-2026',
    title: 'PROTICHAMP AI Championship 1.0',
    achievement: '1st Runner-Up',
    description: 'Secured 1st Runner-Up in the national-level AI championship in August 2026 with W2A Intelligence.',
    year: '2026',
    icon: '🥈',
    isVerified: true,
    credentialId: 'PROTI-AI-2026-042',
    certificateUrl: 'https://drive.google.com/file/d/1exampleFileIdProtichamp/view?usp=sharing',
  },
  {
    id: 'nextgen-2025',
    title: 'NEXT-Gen Hackathon-2025',
    achievement: 'Top 20 Finalist',
    description: 'Competed nationwide among top student developer teams and secured a Top 20 position.',
    year: '2025',
    icon: '🏆',
    isVerified: true,
    credentialId: 'NEXTGEN-HACK-2025',
    certificateUrl: 'https://drive.google.com/file/d/1exampleFileIdNextGen/view?usp=sharing',
  },
  {
    id: 'ict-olympiad-2026',
    title: 'National ICT Olympiad 2026',
    achievement: 'Semifinalist',
    description: 'Qualified to the semifinal stage of the prestigious nationwide ICT Olympiad.',
    year: '2026',
    icon: '🥇',
    isVerified: true,
    credentialId: 'ICT-OLY-2026-SEM',
    certificateUrl: 'https://drive.google.com/file/d/1exampleFileIdICT/view?usp=sharing',
  },
  {
    id: 'cp-problem-solving',
    title: 'Competitive Programming',
    achievement: '500+ Solved',
    description: 'Solved over 500 algorithmic problems across Codeforces (450+), LeetCode, and Beecrowd.',
    year: 'Active',
    icon: '⚡',
    isVerified: true,
    credentialId: 'CP-BADGE-500',
    certificateUrl: 'https://drive.google.com/file/d/1exampleFileIdCP/view?usp=sharing',
  },
];

export default function Awards() {
  const [selectedAward, setSelectedAward] = useState<AwardItem | null>(null);

  // Close modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedAward(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedAward) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedAward]);

  // Transform standard Google Drive view link into embed preview link
  const getDriveEmbedUrl = (url?: string) => {
    if (!url) return '';
    if (url.includes('drive.google.com/file/d/')) {
      return url.replace(/\/view(\?.*)?$/, '/preview');
    }
    return url;
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
  };

  return (
    <section
      id="awards"
      className="relative py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden bg-[var(--bg-main)] text-[var(--text-main)] transition-colors duration-300"
    >
      {/* Background Soft Glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-10 -left-20 w-80 h-80 rounded-full bg-[#48c9b0]/[0.05] blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-10 -right-20 w-80 h-80 rounded-full bg-[#f5a67c]/[0.04] blur-[130px]"
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
            Recognition & Honors
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--text-main)] leading-[1.15]">
          Key <span className="gradient-text">Achievements.</span>
        </h2>
        <p className="mt-3 max-w-2xl text-xs sm:text-sm md:text-base text-[var(--text-muted)] leading-relaxed">
          National championship podiums, hackathon finalist badges, and competitive problem-solving recognitions.
        </p>
      </motion.div>

      {/* Awards Cards Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch"
      >
        {awards.map((award) => (
          <motion.div
            key={award.id}
            variants={itemVariants}
            className="group rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] p-6 shadow-sm hover:border-[#48c9b0]/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Header: Icon, Year and Verified Status */}
              <div className="flex items-center justify-between mb-4">
                <div className="text-3xl p-2 rounded-xl bg-[var(--bg-main)] border border-[var(--border-color)] shadow-xs group-hover:scale-105 transition-transform">
                  {award.icon}
                </div>

                <div className="flex items-center gap-1.5">
                  {award.isVerified && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-[#48c9b0]/15 border border-[#48c9b0]/30 text-[#48c9b0] text-[10px] font-mono font-semibold">
                      <FaCheckCircle className="text-[9px]" /> Verified
                    </span>
                  )}
                  <span className="inline-flex items-center gap-1 text-xs font-mono text-[var(--text-muted)] px-2 py-0.5 rounded-md bg-[var(--bg-main)] border border-[var(--border-color)]">
                    <FaCalendarAlt className="text-[9px]" /> {award.year}
                  </span>
                </div>
              </div>

              {/* Title & Achievement Pill */}
              <h3 className="text-base sm:text-lg font-bold text-[var(--text-main)] group-hover:text-[#48c9b0] transition-colors leading-snug mb-2">
                {award.title}
              </h3>

              <div className="mb-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#48c9b0]/15 text-[#48c9b0] text-xs font-mono font-bold rounded-lg border border-[#48c9b0]/30">
                  <FaAward className="text-xs text-[#f5a67c]" />
                  <span>{award.achievement}</span>
                </span>
              </div>

              {/* Description */}
              <p className="text-[var(--text-muted)] text-xs leading-relaxed line-clamp-3 mb-5">
                {award.description}
              </p>
            </div>

            {/* Bottom: View Certificate Action */}
            <div className="pt-4 border-t border-[var(--border-color)]/70 flex items-center justify-between">
              {award.certificateUrl ? (
                <button
                  type="button"
                  onClick={() => setSelectedAward(award)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#48c9b0] hover:text-[#3fb8a0] transition-colors cursor-pointer group-hover:underline"
                >
                  <FaCertificate className="text-xs" />
                  <span>View Certificate</span>
                </button>
              ) : (
                <span className="text-[11px] font-mono text-[var(--text-muted)]">
                  Honor Credential
                </span>
              )}

              <span className="text-[10px] font-mono text-[var(--text-muted)]">
                Recognized
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* ================= CERTIFICATE MODAL ================= */}
      <AnimatePresence>
        {selectedAward && (
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
                onClick={() => setSelectedAward(null)}
                className="absolute top-5 right-5 p-2 text-[var(--text-muted)] hover:text-[var(--text-main)] rounded-xl hover:bg-[var(--bg-main)] transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <FaTimes className="text-base" />
              </button>

              {/* Verified Ribbon */}
              <div className="flex items-center gap-2 mb-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#48c9b0]/15 border border-[#48c9b0]/30 text-[#48c9b0] text-xs font-mono font-bold">
                  <FaShieldAlt className="text-xs" /> Verified Award Credential
                </span>
                {selectedAward.credentialId && (
                  <span className="text-[11px] font-mono text-[var(--text-muted)]">
                    ID: {selectedAward.credentialId}
                  </span>
                )}
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-[var(--text-main)] pr-6">
                {selectedAward.title}
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-[#48c9b0] mt-1 flex items-center gap-2">
                <FaAward className="text-xs text-[#f5a67c]" />
                <span>Achievement: {selectedAward.achievement} ({selectedAward.year})</span>
              </p>

              {/* Google Drive Preview Iframe */}
              <div className="mt-5 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-main)] overflow-hidden">
                {selectedAward.certificateUrl?.includes('drive.google.com') ? (
                  <iframe
                    src={getDriveEmbedUrl(selectedAward.certificateUrl)}
                    title={`${selectedAward.title} Certificate Preview`}
                    className="w-full h-80 sm:h-96 border-none bg-black/20"
                    allow="autoplay"
                  />
                ) : (
                  <div className="text-center py-12 px-4">
                    <FaCertificate className="text-4xl text-[#48c9b0]/60 mx-auto mb-3" />
                    <p className="text-sm font-bold text-[var(--text-main)]">
                      Official Certificate Document
                    </p>
                    <p className="text-xs text-[var(--text-muted)] mt-1 max-w-sm mx-auto">
                      Verified certificate of honor issued for {selectedAward.title}.
                    </p>
                  </div>
                )}
              </div>

              {/* Modal Footer Controls */}
              <div className="mt-6 pt-4 border-t border-[var(--border-color)] flex flex-wrap items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedAward(null)}
                  className="px-5 py-2.5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-main)] hover:border-[#48c9b0] text-[var(--text-main)] text-xs font-semibold transition-all cursor-pointer"
                >
                  Close
                </button>

                {selectedAward.certificateUrl && (
                  <a
                    href={selectedAward.certificateUrl}
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