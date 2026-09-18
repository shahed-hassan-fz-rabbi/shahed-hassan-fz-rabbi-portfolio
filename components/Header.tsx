'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('about');

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Awards', href: '#awards' },
    { name: 'Contact', href: '#contact' },
  ];

  // ScrollSpy: active section track kora
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;

      for (const item of navItems) {
        const sectionId = item.href.replace('#', '');
        const section = document.getElementById(sectionId);

        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--bg-main)]/85 backdrop-blur-md border-b border-[var(--border-color)] transition-colors duration-300">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Profile Avatar Image + Name */}
        <motion.a
          href="#"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-3 group cursor-pointer"
        >
          <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden border border-[#48c9b0]/50 shadow-sm group-hover:scale-105 transition-transform duration-200 bg-[var(--bg-card)]">
            <Image
              src="/md rabbi miah.png"
              alt="Md Rabbi Miah"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
          <span className="text-base sm:text-lg font-bold text-[var(--text-main)] tracking-tight group-hover:text-[#48c9b0] transition-colors">
            Md Rabbi Miah
          </span>
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-2 lg:gap-4">
          {navItems.map((item, index) => {
            const sectionId = item.href.replace('#', '');
            const isActive = activeSection === sectionId;

            return (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={() => setActiveSection(sectionId)}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.04 * (index + 1) }}
                className={`relative px-2.5 py-1.5 text-xs lg:text-sm font-medium transition-colors duration-200 cursor-pointer ${
                  isActive
                    ? 'text-[#48c9b0] font-bold'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-main)]'
                }`}
              >
                {item.name}

                {/* Animated Active Indicator */}
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute -bottom-1 left-2 right-2 h-0.5 bg-[#48c9b0] rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.a>
            );
          })}

          {/* Theme Toggle Button */}
          <div className="ml-1 lg:ml-2">
            <ThemeToggle />
          </div>

          {/* Peach 'View GitHub →' Button */}
          <motion.a
            href="https://github.com/shahed-hassan-fz-rabbi"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 bg-[#5de0cf] hover:bg-[#e6986e] text-[#071113] rounded-xl font-bold shadow-md shadow-[#f5a67c]/20 transition-all text-xs lg:text-sm cursor-pointer"
          >
            <FaGithub className="text-sm" />
            <span>View GitHub</span>
          </motion.a>
        </div>

        {/* Mobile Right Controls: Theme Toggle + Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />

          <button
            className="text-[#48c9b0] p-2 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            type="button"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-[var(--bg-card)]/95 backdrop-blur-md border-b border-[var(--border-color)] transition-colors duration-300"
        >
          <div className="px-5 py-5 space-y-2">
            {navItems.map((item) => {
              const sectionId = item.href.replace('#', '');
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => {
                    setActiveSection(sectionId);
                    setIsOpen(false);
                  }}
                  className={`block px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                    isActive
                      ? 'bg-[#48c9b0]/10 text-[#48c9b0] font-bold border-l-4 border-[#48c9b0]'
                      : 'text-[var(--text-main)] hover:text-[#48c9b0]'
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
            <div className="pt-2">
              <a
                href="https://github.com/shahed-hassan-fz-rabbi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-[#f5a67c] hover:bg-[#e6986e] text-[#071113] rounded-xl font-bold text-center text-sm shadow-md transition-colors"
              >
                <FaGithub className="text-sm" />
                <span>View GitHub</span>
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;