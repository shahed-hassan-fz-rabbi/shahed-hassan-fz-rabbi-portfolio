"use client";

import React from "react";
import { FaLaptopCode, FaArrowRight } from "react-icons/fa";

export default function AboutStory() {
  return (
    <div className="p-6 sm:p-9 md:p-11 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[var(--border-color)]">
      <div>
        <div className="flex items-center gap-3 mb-6">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#48c9b0]/15 text-[#48c9b0] text-base shadow-sm">
            <FaLaptopCode />
          </div>
          <div>
            <span className="text-[11px] uppercase tracking-widest text-[#48c9b0] font-mono">
              Background & Foundation
            </span>
            <h3 className="text-base sm:text-lg font-bold text-[var(--text-main)]">
              Software Engineering & CSE Undergraduate
            </h3>
          </div>
        </div>

        <div className="space-y-4 text-[var(--text-muted)] text-xs sm:text-sm md:text-[15px] leading-relaxed font-normal">
          <p>
            My passion for computer science stems from an innate curiosity about how large-scale digital platforms manage high concurrency and deliver seamless user experiences. That curiosity evolved into hands-on full-stack engineering—crafting reliable architectures, normalizing relational database models, and building clean web applications.
          </p>

          <p>
            With <strong className="text-[var(--text-main)]">500+ competitive programming problems solved</strong>, I approach codebases with algorithmic rigor, focusing on optimal time complexity and maintainable abstractions. My production stack centers on <strong className="text-[var(--text-main)]">Next.js (App Router), TypeScript, React, Node.js, Express, and PostgreSQL / MySQL / MongoDB</strong>.
          </p>

          <p>
            I place immense value on writing readable, typed, and well-documented software that bridges the gap between intricate technical specifications and intuitive user interfaces.
          </p>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-[var(--border-color)] flex items-center justify-between">
        <a
          href="#projects"
          className="group inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#48c9b0] hover:text-[#3fb8a0] transition-colors cursor-pointer"
        >
          <span>Explore featured engineering work</span>
          <FaArrowRight className="text-[11px] transition-transform duration-200 group-hover:translate-x-1" />
        </a>

        <span className="hidden sm:inline font-handwriting text-base text-[#f5a67c]">
          Always curious, always building ♡
        </span>
      </div>
    </div>
  );
}