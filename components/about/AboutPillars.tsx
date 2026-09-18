"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaCode, FaPalette, FaLightbulb } from "react-icons/fa";

const highlights = [
  {
    icon: <FaLaptopCode />,
    title: "Full-Stack Engineering",
    description: "Architecting end-to-end web platforms using Next.js (App Router), Node.js, and TypeScript.",
  },
  {
    icon: <FaCode />,
    title: "Algorithmic Thinking",
    description: "500+ CP problems solved, focusing on optimal time complexity and robust data structures.",
  },
  {
    icon: <FaPalette />,
    title: "Design System & UI/UX",
    description: "Translating complex workflows into accessible, refined, and responsive interfaces.",
  },
  {
    icon: <FaLightbulb />,
    title: "System Design & AI",
    description: "Exploring scalable relational architectures, caching patterns, and generative AI APIs.",
  },
];

export default function AboutPillars() {
  return (
    <div className="p-6 sm:p-9 md:p-11 bg-[var(--bg-main)]/40 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-6">
          <p className="text-xs uppercase tracking-[0.18em] font-mono text-[#48c9b0]">
            What Drives My Work
          </p>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#48c9b0]/10 text-[#48c9b0] border border-[#48c9b0]/20">
            Core Pillars
          </span>
        </div>

        <div className="space-y-3.5">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: 12 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.35, delay: index * 0.07 }}
              viewport={{ once: true }}
              className="group flex gap-3.5 p-3.5 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)]/80 hover:border-[#48c9b0]/40 transition-all duration-200"
            >
              <div className="flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-xl bg-[#48c9b0]/15 text-[#48c9b0] text-sm group-hover:bg-[#48c9b0] group-hover:text-[#071113] transition-all duration-200">
                {item.icon}
              </div>

              <div className="text-left">
                <h4 className="font-bold text-xs sm:text-sm text-[var(--text-main)] group-hover:text-[#48c9b0] transition-colors">
                  {item.title}
                </h4>
                <p className="mt-0.5 text-[11px] sm:text-xs leading-relaxed text-[var(--text-muted)]">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-6 pt-5 border-t border-[var(--border-color)]">
        <span className="text-[10px] uppercase tracking-widest text-[var(--text-muted)] font-mono block mb-1">
          Guiding Philosophy
        </span>
        <p className="text-xs sm:text-sm font-medium leading-relaxed text-[var(--text-main)]">
          Learn deeply. Structure cleanly.{" "}
          <span className="text-[#48c9b0] font-bold">
            Deliver measurable impact.
          </span>
        </p>
      </div>
    </div>
  );
}