"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaDownload,
  FaArrowRight,
  FaLayerGroup,
  FaChartBar,
} from "react-icons/fa";

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 14 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] },
    },
  };

  return (
    <section
      id="hero"
      className="relative isolate min-h-[calc(100vh-64px)] overflow-hidden bg-[var(--bg-main)] text-[var(--text-main)] px-4 pt-28 pb-16 sm:px-8 lg:px-16 flex items-center justify-center select-none transition-colors duration-300"
    >
      {/* ================= BACKGROUND ELEMENTS ================= */}
      {/* Soft Teal Radial Glow behind portrait */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[5%] lg:right-[10%] top-[15%] lg:top-[20%] -z-10 h-[320px] w-[320px] sm:h-[450px] sm:w-[450px] lg:h-[500px] lg:w-[500px] rounded-full bg-[#48c9b0]/[0.09] blur-[100px] sm:blur-[130px]"
      />

      {/* ================= MAIN TWO-COLUMN CONTENT ================= */}
      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.12fr_0.88fr] lg:gap-10 xl:gap-14">
          
          {/* ================= LEFT COLUMN ================= */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col space-y-5 sm:space-y-6 text-center lg:text-left items-center lg:items-start"
          >
            {/* 1. Status Indicator Pill */}
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#48c9b0]/25 bg-[var(--bg-card)]/80 px-3.5 py-1.5 backdrop-blur-md shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#48c9b0] opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#48c9b0]" />
                </span>
                <span className="text-[11px] sm:text-xs font-medium text-[var(--text-muted)]">
                  Open to Software Engineering Opportunities
                </span>
              </div>
            </motion.div>

            {/* 2. Main Large Name & Subtitle */}
            <motion.div variants={itemVariants} className="space-y-1.5 sm:space-y-2">
              <h1 className="text-3xl sm:text-5xl lg:text-[60px] xl:text-[66px] font-extrabold tracking-tight text-[var(--text-main)] leading-[1.1]">
                Md Rabbi Miah
              </h1>
              <p className="text-base sm:text-xl lg:text-2xl font-bold tracking-tight text-[#48c9b0]">
                Software Engineer <span className="text-[var(--text-muted)] font-normal">·</span> Full-Stack Developer
              </p>
            </motion.div>

            {/* 3. Description */}
            <motion.div variants={itemVariants}>
              <p className="max-w-xl text-xs sm:text-sm leading-relaxed text-[var(--text-muted)] font-normal">
                I build scalable and user-focused web applications with modern full-stack
                technologies. I enjoy solving complex problems, writing maintainable code,
                and turning ideas into reliable software.
              </p>
            </motion.div>

            {/* 5. CTAs: View Projects + Resume */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 w-full sm:w-auto pt-1 sm:pt-2"
            >
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#48c9b0] hover:bg-[#3fb8a0] px-6 py-3.5 text-xs sm:text-sm font-bold text-[#071113] shadow-lg shadow-[#48c9b0]/20 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>View Projects</span>
                <FaArrowRight className="text-xs" />
              </a>

              <a
                href="/resume.pdf"
                download="Md_Rabbi_Miah_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[#48c9b0]/25 bg-[var(--bg-card)] px-6 py-3.5 text-xs sm:text-sm font-semibold text-[var(--text-main)] shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[#48c9b0] active:translate-y-0 cursor-pointer"
              >
                <FaDownload className="text-xs text-[var(--text-muted)]" />
                <span>Download Resume</span>
                <span className="ml-1 text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#48c9b0]/15 text-[#48c9b0] border border-[#48c9b0]/30">
                  PDF
                </span>
              </a>
            </motion.div>

            {/* 6. Social Links Row */}
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center lg:justify-start gap-3 pt-2"
            >
              <span className="text-xs font-medium text-[var(--text-muted)] mr-1">
                Find me on
              </span>

              <a
                href="https://github.com/shahed-hassan-fz-rabbi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#48c9b0]/20 bg-[var(--bg-card)] text-[var(--text-muted)] hover:border-[#48c9b0] hover:text-[#48c9b0] transition-all shadow-sm"
              >
                <FaGithub className="text-sm" />
              </a>

              <a
                href="https://linkedin.com/in/shahed-hassan-fz"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#48c9b0]/20 bg-[var(--bg-card)] text-[var(--text-muted)] hover:border-[#48c9b0] hover:text-[#48c9b0] transition-all shadow-sm"
              >
                <FaLinkedin className="text-sm" />
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter Profile"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#48c9b0]/20 bg-[var(--bg-card)] text-[var(--text-muted)] hover:border-[#48c9b0] hover:text-[#48c9b0] transition-all shadow-sm"
              >
                <FaTwitter className="text-sm" />
              </a>

              <a
                href="mailto:shahedhassan572@gmail.com"
                aria-label="Send Email"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#48c9b0]/20 bg-[var(--bg-card)] text-[var(--text-muted)] hover:border-[#48c9b0] hover:text-[#48c9b0] transition-all shadow-sm"
              >
                <FaEnvelope className="text-sm" />
              </a>
            </motion.div>
          </motion.div>

          {/* ================= RIGHT COLUMN: VISUAL COMPOSITION ================= */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            className="relative mx-auto flex w-full max-w-[420px] lg:max-w-none items-center justify-center"
          >
            <div className="relative h-[420px] w-full sm:h-[500px] lg:h-[580px] flex items-end justify-center">

              {/* Concentric Ring 1 (Outer) */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-[46%] -translate-x-1/2 -translate-y-1/2 h-[280px] w-[280px] sm:h-[390px] sm:w-[390px] lg:h-[480px] lg:w-[480px] rounded-full border border-[#48c9b0]/20"
              >
                {/* Accent Orbit Dot */}
                <div className="absolute top-[12%] left-[12%] h-2.5 w-2.5 rounded-full bg-[#6ac4a7] shadow-[0_0_10px_#48c9b0]" />
              </div>

              {/* Concentric Ring 2 (Inner) */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-[46%] -translate-x-1/2 -translate-y-1/2 h-[220px] w-[220px] sm:h-[300px] sm:w-[300px] lg:h-[380px] lg:w-[380px] rounded-full border border-[#48c9b0]/15"
              />

              {/* Dot Grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute right-[2%] top-[20%] hidden sm:block h-28 w-24 opacity-30"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, #48c9b0 1.2px, transparent 1.2px)",
                  backgroundSize: "10px 10px",
                }}
              />

              {/* FLOATING CARD 1: Clean Code (Left) */}
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-[-2%] sm:-left-[5%] top-[34%] z-20 hidden sm:flex items-center gap-3 rounded-2xl border border-[#48c9b0]/20 bg-[var(--bg-card)]/90 backdrop-blur-md p-3 sm:px-4 sm:py-3 shadow-xl"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#48c9b0] text-[#071113] text-sm font-bold shadow-md shadow-[#48c9b0]/25">
                  &lt;/&gt;
                </div>
                <div className="text-left">
                  <div className="text-xs sm:text-sm font-bold text-[var(--text-main)]">
                    Clean Code
                  </div>
                  <div className="text-[10px] text-[var(--text-muted)] font-medium">
                    Better Tomorrow
                  </div>
                </div>
              </motion.div>

              {/* FLOATING CARD 2: Turning Ideas into Impact */}
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: [4, -4, 4] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-[2%] sm:left-[0%] bottom-[16%] z-20 hidden sm:flex items-center gap-3 rounded-2xl border border-[#48c9b0]/20 bg-[var(--bg-card)]/90 backdrop-blur-md px-3.5 py-2.5 shadow-xl"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#48c9b0]/15 text-[#48c9b0] text-xs">
                  <FaChartBar />
                </div>
                <div className="text-left text-xs font-semibold text-[var(--text-main)] leading-tight">
                  Turning <br />
                  <span className="text-[11px] font-normal text-[var(--text-muted)]">
                    Ideas into <span className="text-[#48c9b0]">↑</span> Real Impact
                  </span>
                </div>
              </motion.div>

              {/* FLOATING CARD 3: Tech Stack (Right) */}
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: [4, -4, 4] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute right-[-2%] sm:-right-[4%] top-[42%] z-20 hidden sm:flex items-start gap-3 rounded-2xl border border-[#48c9b0]/20 bg-[var(--bg-card)]/90 backdrop-blur-md p-3.5 shadow-xl"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#48c9b0] text-[#071113] text-xs shadow-md shadow-[#48c9b0]/25 mt-0.5">
                  <FaLayerGroup />
                </div>
                <div className="text-left space-y-0.5">
                  {["React", "Next.js", "Node.js", "MongoDB"].map((tech) => (
                    <div
                      key={tech}
                      className="text-[11px] font-semibold text-[var(--text-muted)] hover:text-[#48c9b0] transition-colors"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* ================= SMARTLY BLENDED PORTRAIT ================= */}
              <div className="relative z-10 w-64 h-[380px] sm:w-80 sm:h-[460px] lg:w-[420px] lg:h-[530px] flex items-end justify-center overflow-hidden [mask-image:linear-gradient(to_bottom,black_75%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_75%,transparent_100%)]">
                <Image
                  src="/md rabbi miah.png"
                  alt="Md Rabbi Miah"
                  width={520}
                  height={650}
                  priority
                  className="h-full w-auto max-w-full object-contain object-bottom select-none filter contrast-[1.02] drop-shadow-[0_20px_35px_rgba(0,0,0,0.45)]"
                />
                
                {/* Vignette using theme background variable to work on both dark and light mode */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[var(--bg-main)] via-[var(--bg-main)]/60 to-transparent z-20" />
              </div>

            </div>
          </motion.div>

        </div>
      </div>

      {/* ================= BOTTOM CENTER SCROLL DOWN ================= */}
      <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-1 opacity-70 hover:opacity-100 transition-opacity">
        <div className="h-6 w-3.5 rounded-full border border-[#48c9b0]/50 flex justify-center p-0.5">
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="h-1 w-1 rounded-full bg-[#48c9b0]"
          />
        </div>
        <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-[var(--text-muted)]">
          SCROLL DOWN
        </span>
      </div>

      {/* Hero-to-Next-Section Seamless Theme Blending Bar */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[var(--bg-main)] to-transparent z-10"
      />
    </section>
  );
}