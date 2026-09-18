'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaCheckCircle,
} from 'react-icons/fa';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
      setLoading(false);

      setTimeout(() => setSubmitted(false), 5000);
    }, 1000);
  };

  return (
    <section
      id="contact"
      className="relative py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden bg-[var(--bg-main)] text-[var(--text-main)] transition-colors duration-300"
    >
      {/* Ambient Teal Radial Background Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-10 right-0 w-80 h-80 rounded-full bg-[#48c9b0]/[0.05] blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-10 left-0 w-80 h-80 rounded-full bg-[#f5a67c]/[0.04] blur-[120px]"
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
            Get In Touch
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--text-main)] leading-[1.15]">
          Let&apos;s build something <span className="gradient-text">meaningful.</span>
        </h2>
        <p className="mt-3 max-w-2xl text-xs sm:text-sm md:text-base text-[var(--text-muted)] leading-relaxed">
          Open for full-stack engineering opportunities, internships, and technical collaborations. Send a message and let&apos;s start a conversation.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
        {/* Left Column: Contact Cards */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="lg:col-span-5 space-y-4"
        >
          {/* Email Card */}
          <div className="p-5 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] hover:border-[#48c9b0]/40 transition-all duration-200">
            <div className="flex items-center gap-3.5 mb-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#48c9b0]/15 text-[#48c9b0] text-sm">
                <FaEnvelope />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--text-muted)] block">
                  Email
                </span>
                <a
                  href="mailto:shahedhassan572@gmail.com"
                  className="text-sm font-semibold text-[var(--text-main)] hover:text-[#48c9b0] transition-colors"
                >
                  shahedhassan572@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Phone Card */}
          <div className="p-5 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] hover:border-[#48c9b0]/40 transition-all duration-200">
            <div className="flex items-center gap-3.5 mb-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#48c9b0]/15 text-[#48c9b0] text-sm">
                <FaPhoneAlt />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--text-muted)] block">
                  Phone
                </span>
                <a
                  href="tel:+8801738039808"
                  className="text-sm font-semibold text-[var(--text-main)] hover:text-[#48c9b0] transition-colors"
                >
                  +880 1738-039808
                </a>
              </div>
            </div>
          </div>

          {/* Location & Availability Card */}
          <div className="p-5 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] space-y-3">
            <div className="flex items-center gap-3.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#f5a67c]/15 text-[#f5a67c] text-sm">
                <FaMapMarkerAlt />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--text-muted)] block">
                  Location
                </span>
                <p className="text-sm font-semibold text-[var(--text-main)]">
                  Comilla / Dhaka, Bangladesh
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-[var(--border-color)] flex items-center justify-between text-xs">
              <span className="text-[var(--text-muted)]">Availability:</span>
              <span className="font-mono font-medium text-[#48c9b0] flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#48c9b0] animate-pulse" />
                Remote & Hybrid Roles
              </span>
            </div>
          </div>

          {/* Social Links */}
          <div className="pt-2 flex items-center gap-3">
            <a
              href="https://github.com/shahed-hassan-fz-rabbi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] text-xs font-semibold text-[var(--text-muted)] hover:text-[#48c9b0] hover:border-[#48c9b0] transition-all shadow-sm"
            >
              <FaGithub className="text-sm" /> GitHub
            </a>
            <a
              href="https://linkedin.com/in/shahed-hassan-fz"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] text-xs font-semibold text-[var(--text-muted)] hover:text-[#48c9b0] hover:border-[#48c9b0] transition-all shadow-sm"
            >
              <FaLinkedin className="text-sm" /> LinkedIn
            </a>
          </div>
        </motion.div>

        {/* Right Column: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="lg:col-span-7 rounded-3xl border border-[var(--border-color)] bg-[var(--bg-card)] p-6 sm:p-9 shadow-xl relative"
        >
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="name"
                className="block text-xs font-mono uppercase tracking-wider mb-2 text-[var(--text-muted)] font-semibold"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                required
                className="w-full bg-[var(--bg-main)] border border-[var(--border-color)] rounded-xl px-4 py-3 text-xs sm:text-sm text-[var(--text-main)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[#48c9b0] transition-colors shadow-sm"
                placeholder="Md Rabbi Miah"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-xs font-mono uppercase tracking-wider mb-2 text-[var(--text-muted)] font-semibold"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                required
                className="w-full bg-[var(--bg-main)] border border-[var(--border-color)] rounded-xl px-4 py-3 text-xs sm:text-sm text-[var(--text-main)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[#48c9b0] transition-colors shadow-sm"
                placeholder="your.email@domain.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-xs font-mono uppercase tracking-wider mb-2 text-[var(--text-muted)] font-semibold"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full bg-[var(--bg-main)] border border-[var(--border-color)] rounded-xl px-4 py-3 text-xs sm:text-sm text-[var(--text-main)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[#48c9b0] transition-colors resize-none shadow-sm"
                placeholder="Share your opportunity, proposal, or thoughts..."
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-[#48c9b0] hover:bg-[#3fb8a0] text-[#071113] rounded-xl font-bold text-xs sm:text-sm shadow-lg shadow-[#48c9b0]/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 cursor-pointer active:translate-y-0 hover:-translate-y-0.5"
            >
              <FaPaperPlane className="text-xs" />
              <span>{loading ? 'Sending Message...' : 'Send Message'}</span>
            </button>

            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-3.5 rounded-xl bg-[#48c9b0]/15 border border-[#48c9b0]/30 flex items-center justify-center gap-2 text-xs font-semibold text-[#48c9b0]"
              >
                <FaCheckCircle />
                <span>Message received! I&apos;ll get back to you shortly.</span>
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;