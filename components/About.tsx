"use client";

import React from "react";
import { motion } from "framer-motion";
import AboutStory from "./about/AboutStory";
import AboutPillars from "./about/AboutPillars";
import BeyondTerminal from "./about/BeyondTerminal";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-20 md:py-28 px-4 sm:px-8 lg:px-16 overflow-hidden bg-[var(--bg-main)] text-[var(--text-main)] transition-colors duration-300"
    >
      {/* Soft Ambient Radial Glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-20 -left-20 w-80 h-80 rounded-full bg-[#48c9b0]/[0.05] blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-16 -right-20 w-80 h-80 rounded-full bg-[#f5a67c]/[0.04] blur-[120px]"
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16 text-center md:text-left"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#48c9b0]/25 bg-[var(--bg-card)]/80 px-3.5 py-1.5 backdrop-blur-md mb-4 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#48c9b0]" />
            <span className="text-xs font-mono uppercase tracking-[0.18em] text-[#48c9b0]">
              About Me
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--text-main)] leading-[1.15]">
            Engineering software with{" "}
            <span className="gradient-text">curiosity & discipline.</span>
          </h2>

          <p className="mt-3.5 max-w-2xl text-xs sm:text-sm md:text-base text-[var(--text-muted)] leading-relaxed">
            A comprehensive look at my software engineering philosophy, core competencies, and the multidisciplinary pursuits that shape my problem-solving approach.
          </p>
        </motion.div>

        {/* Unified 2-Column Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl border border-[var(--border-color)] bg-[var(--bg-card)] shadow-xl"
        >
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#48c9b0]/50 to-transparent" />
          <div className="grid grid-cols-1 lg:grid-cols-[1.18fr_0.82fr]">
            <AboutStory />
            <AboutPillars />
          </div>
        </motion.div>

        {/* Multidisciplinary Pursuits Component */}
        <BeyondTerminal />
      </div>
    </section>
  );
}