'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  FaGraduationCap,
  FaCalendarAlt,
  FaUniversity,
  FaAward,
  FaBookOpen,
} from 'react-icons/fa';

interface EducationItem {
  degree: string;
  institution: string;
  duration: string;
  grade: string;
  isOngoing?: boolean;
  courses?: string[];
  description?: string;
}

const educationData: EducationItem[] = [
  {
    degree: 'B.Sc. (Hons) in Computer Science & Engineering',
    institution: 'Comilla University, Bangladesh',
    duration: '2023 — Present (4th Year)',
    grade: 'CGPA: 3.18 / 4.00',
    isOngoing: true,
    courses: [
      'Data Structures & Algorithms',
      'DBMS',
      'OOP',
      'Operating Systems',
      'Computer Networks',
      'Distributed Systems',
      'Software Engineering',
      'Artificial Intelligence & Neural Networks',
      'Cryptography & Security',
    ],
    description:
      'Rigorous curriculum focused on theoretical computer science, algorithmic foundations, and scalable system engineering.',
  },
  {
    degree: 'Higher Secondary Certificate (HSC)',
    institution: 'Narsingdi, Dhaka, Bangladesh',
    duration: 'Passing Year: 2021',
    grade: 'GPA: 5.00 / 5.00',
    isOngoing: false,
    courses: ['Higher Mathematics', 'Physics', 'Chemistry', 'ICT'],
    description:
      'Science stream with distinction, developing strong analytical ability, calculus fundamentals, and basic programming logic.',
  },
  {
    degree: 'Secondary School Certificate (SSC)',
    institution: 'Narsingdi, Dhaka, Bangladesh',
    duration: 'Passing Year: 2019',
    grade: 'GPA: 4.89 / 5.00',
    isOngoing: false,
    courses: ['General Science', 'Higher Mathematics', 'Physics', 'Chemistry'],
    description:
      'Core scientific background with strong foundations in algebra, geometry, and foundational sciences.',
  },
];

const Education: React.FC = () => {
  return (
    <section
      id="education"
      className="relative py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden bg-[var(--bg-main)] text-[var(--text-main)] transition-colors duration-300"
    >
      {/* Background Soft Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-[#48c9b0]/[0.05] blur-[130px]"
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
            Academic Foundation
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--text-main)] leading-[1.15]">
          Educational <span className="gradient-text">Qualification.</span>
        </h2>
        <p className="mt-3 max-w-2xl text-xs sm:text-sm md:text-base text-[var(--text-muted)] leading-relaxed">
          My academic training, core computer science coursework, and fundamental engineering education.
        </p>
      </motion.div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {educationData.map((edu, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: idx * 0.08 }}
            viewport={{ once: true }}
            className={`group rounded-2xl border bg-[var(--bg-card)] p-6 sm:p-7 shadow-sm transition-all duration-300 flex flex-col justify-between hover:shadow-xl ${
              edu.isOngoing
                ? 'border-[#48c9b0]/40 ring-1 ring-[#48c9b0]/20'
                : 'border-[var(--border-color)] hover:border-[#48c9b0]/30'
            }`}
          >
            <div>
              {/* Header Icon & Duration Pill */}
              <div className="flex items-center justify-between gap-3 mb-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#48c9b0]/15 text-[#48c9b0] text-lg group-hover:scale-105 transition-transform">
                  <FaGraduationCap />
                </div>

                <div className="flex items-center gap-2">
                  {edu.isOngoing && (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-[#48c9b0]/15 border border-[#48c9b0]/30 text-[#48c9b0] text-[11px] font-mono font-semibold">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#48c9b0] animate-pulse" />
                      In Progress
                    </span>
                  )}
                  <span className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-mono px-2.5 py-1 rounded-xl bg-[var(--bg-main)] border border-[var(--border-color)] text-[var(--text-muted)] font-medium">
                    <FaCalendarAlt className="text-[10px]" />
                    {edu.duration}
                  </span>
                </div>
              </div>

              {/* Degree Title & Institution */}
              <h3 className="text-base sm:text-lg font-bold text-[var(--text-main)] group-hover:text-[#48c9b0] transition-colors leading-snug mb-1.5">
                {edu.degree}
              </h3>

              <p className="text-xs sm:text-sm font-medium text-[var(--text-muted)] flex items-center gap-1.5 mb-3.5">
                <FaUniversity className="text-[11px] text-[#f5a67c]" />
                <span>{edu.institution}</span>
              </p>

              {/* Grade Badge */}
              <div className="mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[var(--bg-main)] border border-[var(--border-color)] text-xs font-mono font-semibold text-[#48c9b0]">
                  <FaAward className="text-[#f5a67c]" />
                  <span>{edu.grade}</span>
                </span>
              </div>

              {/* Description */}
              {edu.description && (
                <p className="text-xs text-[var(--text-muted)] leading-relaxed mb-4">
                  {edu.description}
                </p>
              )}
            </div>

            {/* Coursework Tags */}
            {edu.courses && edu.courses.length > 0 && (
              <div className="pt-4 border-t border-[var(--border-color)]/70">
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-[var(--text-muted)] uppercase tracking-wider font-semibold mb-2.5">
                  <FaBookOpen className="text-[10px] text-[#48c9b0]" />
                  <span>Key Coursework</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {edu.courses.map((course, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 text-[10px] font-medium rounded-md bg-[var(--bg-main)] text-[var(--text-muted)] border border-[var(--border-color)]"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;