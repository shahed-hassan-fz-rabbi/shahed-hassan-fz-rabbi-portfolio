"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaMicrophoneAlt,
  FaPalette,
  FaPenNib,
  FaVideo,
  FaArrowRight,
} from "react-icons/fa";

const creativeActivities = [
  {
    id: "public-speaking",
    icon: <FaMicrophoneAlt className="text-[#f5a67c]" />,
    tag: "Leadership",
    title: "Event Hosting & Public Speaking",
    shortDesc:
      "Hosting university seminars and campus events with engaging stage coordination and articulate speaking.",
  },
  {
    id: "graphic-design",
    icon: <FaPalette className="text-[#48c9b0]" />,
    tag: "UI & Visual",
    title: "Visual & Graphic Design",
    shortDesc:
      "Designing promotional posters, event brand assets, and digital graphics with modern aesthetic balance.",
  },
  {
    id: "technical-writing",
    icon: <FaPenNib className="text-[#48c9b0]" />,
    tag: "Documentation",
    title: "Technical Writing & Research",
    shortDesc:
      "Authoring structured technical project reports, thesis documentation, and architectural blueprints.",
  },
  {
    id: "video-production",
    icon: <FaVideo className="text-[#f5a67c]" />,
    tag: "Media",
    title: "Video Editing & Production",
    shortDesc:
      "Producing competition video pitches, product demonstrations, and structured digital showcases.",
  },
];

export default function BeyondTerminal() {
  return (
    <div className="mt-14 md:mt-20">
      <div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#48c9b0] mb-2">
            <span>Multidisciplinary Pursuits</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-main)] tracking-tight">
            Beyond <span className="gradient-text">the Terminal</span>
          </h3>
        </div>
        <p className="text-xs sm:text-sm text-[var(--text-muted)] max-w-md">
          Complementary creative, communication, and leadership capabilities that enhance my engineering collaboration and product delivery.
        </p>
      </div>

      {/* 4 Cards Grid - কার্ডে ক্লিক করলেই /activities পেজে যাবে */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {creativeActivities.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            viewport={{ once: true }}
          >
            <Link
              href="/activities"
              className="group p-5 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] hover:border-[#48c9b0]/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full cursor-pointer block"
            >
              <div>
                <div className="flex items-center justify-between mb-3.5">
                  <div className="h-9 w-9 rounded-xl bg-[#48c9b0]/15 flex items-center justify-center text-sm group-hover:scale-105 transition-transform">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-md border border-[var(--border-color)] bg-[var(--bg-main)] text-[var(--text-muted)]">
                    {item.tag}
                  </span>
                </div>

                <h4 className="text-sm font-bold text-[var(--text-main)] mb-1.5 group-hover:text-[#48c9b0] transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed line-clamp-3">
                  {item.shortDesc}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-[var(--border-color)]/60 flex items-center justify-between">
                <span className="text-xs font-semibold text-[#48c9b0] group-hover:underline flex items-center gap-1.5">
                  Explore Activities{" "}
                  <FaArrowRight className="text-[9px] transition-transform duration-200 group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Main Link to /activities page */}
      <div className="mt-8 flex justify-end">
        <Link
          href="/activities"
          className="group inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#48c9b0] hover:text-[#3fb8a0] transition-all py-2 px-3 rounded-xl hover:bg-[#48c9b0]/10"
        >
          <span>View All Activities, Search & Event Archive</span>
          <FaArrowRight className="text-xs transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}