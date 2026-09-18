'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp, FaArrowRight } from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[var(--bg-card)] border-t border-[var(--border-color)] pt-16 pb-8 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Top Footer CTA */}
        

        {/* Main Footer Grid */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-[var(--border-color)]"
        >
          {/* Column 1: Brand & Status */}
          <div className="md:col-span-5 space-y-4">
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-main)] tracking-tight mb-1">
                Md Rabbi <span className="gradient-text">Miah</span>
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-[#48c9b0]">
                Software Engineer · Full-Stack Developer
              </p>
            </div>
            <p className="text-[var(--text-muted)] text-xs sm:text-sm leading-relaxed max-w-sm">
              Architecting production-ready web platforms with Next.js, Node.js, and modern relational database systems.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#48c9b0]/20 bg-[var(--bg-main)] text-[11px] font-mono text-[var(--text-muted)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#48c9b0]" />
              <span>Comilla, Bangladesh</span>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="md:col-span-3">
            <h4 className="font-mono text-xs uppercase tracking-[0.18em] text-[#48c9b0] font-bold mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {[
                { name: 'About', href: '#about' },
                { name: 'Projects', href: '#projects' },
                { name: 'Skills', href: '#skills' },
                { name: 'Activities & Archive', href: '/activities' },
                { name: 'Education', href: '#education' },
                { name: 'Contact', href: '#contact' },
              ].map((link, idx) => (
                <li key={idx}>
                  {link.href.startsWith('/') ? (
                    <Link
                      href={link.href}
                      className="text-[var(--text-muted)] hover:text-[#48c9b0] hover:translate-x-1 inline-block transition-all duration-200 font-medium"
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-[var(--text-muted)] hover:text-[#48c9b0] hover:translate-x-1 inline-block transition-all duration-200 font-medium"
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Let's Connect */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-mono text-xs uppercase tracking-[0.18em] text-[#48c9b0] font-bold mb-4">
              Let&apos;s Connect
            </h4>
            <p className="text-[var(--text-muted)] text-xs sm:text-sm leading-relaxed">
              Open for full-time Software Engineer positions, impactful full-stack contracts, and strategic tech collaborations.
            </p>

            {/* Social Buttons */}
            <div className="flex flex-wrap gap-2.5 pt-1">
              <a
                href="https://github.com/shahed-hassan-fz-rabbi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[var(--bg-main)] border border-[var(--border-color)] text-[var(--text-muted)] hover:text-[#48c9b0] hover:border-[#48c9b0] text-xs font-semibold hover:-translate-y-0.5 transition-all duration-200 shadow-sm"
              >
                <FaGithub className="text-sm" /> GitHub
              </a>
              <a
                href="https://linkedin.com/in/shahed-hassan-fz"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[var(--bg-main)] border border-[var(--border-color)] text-[var(--text-muted)] hover:text-[#48c9b0] hover:border-[#48c9b0] text-xs font-semibold hover:-translate-y-0.5 transition-all duration-200 shadow-sm"
              >
                <FaLinkedin className="text-sm" /> LinkedIn
              </a>
              <a
                href="mailto:shahedhassan572@gmail.com"
                aria-label="Email"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[var(--bg-main)] border border-[var(--border-color)] text-[var(--text-muted)] hover:text-[#48c9b0] hover:border-[#48c9b0] text-xs font-semibold hover:-translate-y-0.5 transition-all duration-200 shadow-sm"
              >
                <FaEnvelope className="text-sm" /> Email
              </a>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--text-muted)]">
          <p className="text-center sm:text-left font-mono">
            © {currentYear} <span className="font-bold text-[var(--text-main)]">Md Rabbi Miah</span>. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            type="button"
            aria-label="Back to top"
            className="inline-flex items-center gap-2 font-semibold py-2 px-4 rounded-xl bg-[var(--bg-main)] border border-[var(--border-color)] text-[var(--text-muted)] hover:border-[#48c9b0] hover:text-[#48c9b0] transition-all duration-200 cursor-pointer shadow-sm text-xs"
          >
            <span>Back to Top</span>
            <FaArrowUp className="text-[10px]" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;