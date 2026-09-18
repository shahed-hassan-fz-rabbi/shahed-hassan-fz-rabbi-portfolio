'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  FaCode,
  FaLaptopCode,
  FaServer,
  FaDatabase,
  FaBrain,
  FaPalette,
} from 'react-icons/fa';

interface SkillCategory {
  category: string;
  icon: React.ReactNode;
  skills: string[];
}

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      category: 'Languages',
      icon: <FaCode className="text-[#48c9b0]" />,
      skills: ['TypeScript', 'JavaScript (ES6+)', 'Python', 'C++', 'Java', 'PHP', 'SQL'],
    },
    {
      category: 'Frontend Development',
      icon: <FaLaptopCode className="text-[#48c9b0]" />,
      skills: ['Next.js (App Router)', 'React.js', 'Tailwind CSS', 'DaisyUI', 'Framer Motion', 'Recharts'],
    },
    {
      category: 'Backend Development',
      icon: <FaServer className="text-[#48c9b0]" />,
      skills: ['Node.js', 'Express.js', 'RESTful APIs', 'Stripe API', 'Prisma ORM', 'Better Auth', 'JWT'],
    },
    {
      category: 'Databases & Cloud Tools',
      icon: <FaDatabase className="text-[#f5a67c]" />,
      skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Git', 'GitHub', 'VS Code', 'Vercel', 'Render'],
    },
    {
      category: 'Core CS & Problem Solving',
      icon: <FaBrain className="text-[#f5a67c]" />,
      skills: ['Data Structures & Algorithms (500+ Solved)', 'OOP', 'Problem Solving', 'System Design Basics'],
    },
    {
      category: 'Design & Visual Tools',
      icon: <FaPalette className="text-[#48c9b0]" />,
      skills: ['Adobe Photoshop CC', 'Adobe Illustrator CC', 'UI/UX Design', 'Figma'],
    },
  ];

  return (
    <section
      id="skills"
      className="relative py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden bg-[var(--bg-main)] text-[var(--text-main)] transition-colors duration-300"
    >
      {/* Ambient Teal Radial Background Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 -right-24 w-80 h-80 rounded-full bg-[#48c9b0]/[0.05] blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-10 -left-20 w-80 h-80 rounded-full bg-[#f5a67c]/[0.04] blur-[130px]"
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
            Technical Arsenal
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--text-main)] leading-[1.15]">
          Skills & <span className="gradient-text">Technologies.</span>
        </h2>
        <p className="mt-3 max-w-2xl text-xs sm:text-sm md:text-base text-[var(--text-muted)] leading-relaxed">
          Languages, frameworks, databases, and engineering fundamentals I leverage to architect scalable, high-performance web applications.
        </p>
      </motion.div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((cat, idx) => (
          <motion.div
            key={cat.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: idx * 0.07 }}
            viewport={{ once: true }}
            className="group rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] p-6 shadow-sm hover:border-[#48c9b0]/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Category Header with Icon */}
              <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-[var(--border-color)]/70">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#48c9b0]/15 text-sm group-hover:scale-105 transition-transform">
                    {cat.icon}
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-[var(--text-main)] group-hover:text-[#48c9b0] transition-colors">
                    {cat.category}
                  </h3>
                </div>
                <span className="text-[10px] font-mono text-[var(--text-muted)]">
                  {cat.skills.length}
                </span>
              </div>

              {/* Skill Badges */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center px-3 py-1.5 text-xs font-medium rounded-xl bg-[var(--bg-main)] text-[var(--text-muted)] border border-[var(--border-color)] hover:border-[#48c9b0]/50 hover:text-[#48c9b0] transition-all duration-200 cursor-default shadow-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;