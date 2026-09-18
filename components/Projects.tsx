'use client';

import React, { useState, useMemo, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import {
  FaExternalLinkAlt,
  FaGithub,
  FaTimes,
  FaSearch,
  FaArrowRight,
  FaArrowLeft,
  FaCheckCircle,
  FaLayerGroup,
  FaVideo,
} from 'react-icons/fa';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Full-Stack' | 'AI & ML' | 'E-Commerce';
  image: string;
  description: string;
  technologies: string[];
  github: string;
  live?: string;
  video?: string;
  features: string[];
  challenges: string;
  contribution: string;
  futurePlans: string;
}

const allProjectsData: Project[] = [
  {
    id: 'loop-ai',
    title: 'LOOP AI Customer-Feedback Intelligence',
    subtitle: 'Enterprise VoC Analytics & Grounded RAG Platform',
    category: 'AI & ML',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
    description: 'Enterprise-grade Voice-of-Customer analytics platform turning unstructured omnichannel reviews into prioritized product insights using strict multi-tenant isolation and grounded RAG.',
    technologies: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'PostgreSQL (Neon)', 'Prisma ORM', 'NextAuth.js', 'Claude 3.5 / Gemini API', 'Vector Embeddings', 'Recharts', 'Zod'],
    github: 'https://github.com/shahed-hassan-fz-rabbi/Loop-Feedback-Analysis',
    live: 'https://project-loop-eta.vercel.app/',
    video: 'https://youtu.be/R7FXWmkKLqM',
    features: [
      'Grounded RAG ("Ask LOOP") conversational Q&A over feedback embeddings with exact verbatim citations',
      'Real-time sentiment polarity scoring (-1.0 to +1.0) and automated theme clustering',
      'Strict multi-tenant architecture scoping all queries by workspaceId with 3NF Prisma relational models',
      'Three-tier Role-Based Access Control (ADMIN, ANALYST, VIEWER) with server-side authorization',
    ],
    contribution: 'Architected the 3NF PostgreSQL database schema with Prisma ORM, engineered server-side Zod validation pipelines, built the grounded RAG retrieval engine, and developed interactive Recharts analytics.',
    challenges: 'Enforcing deterministic multi-tenant data isolation across all database mutations and eliminating LLM hallucinations by grounding responses directly in stored cosine similarity vector embeddings.',
    futurePlans: 'Add automated webhook connectors for real-time Slack/Discord ticket ingestion and automated PDF VoC executive report generation.',
  },
  {
    id: 'secure-auth',
    title: 'Multi-Layer Secure Authentication System',
    subtitle: 'Production Defense-in-Depth Auth Architecture',
    category: 'Full-Stack',
    image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=800&auto=format&fit=crop',
    description: 'Hardened full-stack authentication system designed to withstand brute-force attacks, bot submissions, credential theft, and concurrent account sharing.',
    technologies: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'MongoDB Atlas', 'Mongoose', 'JWT', 'Bcrypt.js', 'TOTP / 2FA', 'Google reCAPTCHA v2', 'Nodemailer'],
    github: 'https://github.com/shahed-hassan-fz-rabbi/Secure-Login-system',
    live: 'https://secure-login-system-gold-six.vercel.app',
    features: [
      'TOTP-based Two-Factor Authentication (2FA) compatible with Google Authenticator and Authy with QR generation',
      'Stateless HTTP-only, secure, sameSite JWT cookies preventing client-side JavaScript script access (XSS defense)',
      'Multi-device session collection tracking IP and User-Agents with strict concurrent session limits (max 2 active devices)',
      'IP-based rate limiting on authentication routes paired with Google reCAPTCHA v2 bot challenge verification',
    ],
    contribution: 'Developed the end-to-end security architecture including Next.js route middleware guards, salted bcrypt password hashing, remote session invalidation, and email token recovery flows.',
    challenges: 'Preventing race conditions during concurrent device limit enforcement and synchronizing TOTP time-step challenges with expiring recovery tokens.',
    futurePlans: 'Implement WebAuthn / Passkeys biometric authentication and automated anomaly detection for impossible-travel logins.',
  },
  {
    id: 'w2a-intelligence',
    title: 'W2A Intelligence',
    subtitle: 'Smart Waste-to-Assets Allocation System',
    category: 'AI & ML',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=800&auto=format&fit=crop',
    description: 'Municipal waste-to-assets allocation platform connecting local collection hubs with recycling facilities using computer vision classification and relational capacity scoring.',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'MySQL', 'Gemini Vision API'],
    github: 'https://github.com/shahed-hassan-fz-rabbi/W2A-Intelligence',
    live: 'https://w2-a-intelligence-phi.vercel.app',
    features: [
      'Gemini Vision API integration for real-time recyclable category detection and categorization',
      'Relational capacity allocation matching batch quotas with registered industrial recyclers',
      'Role-based administrative dashboards for municipal audit trails and collection tracking',
    ],
    contribution: 'Architected the 3NF relational database schema in MySQL, implemented server-side capacity scoring, and engineered Gemini Vision classification routes.',
    challenges: 'Designing a 3NF-normalized relational schema in MySQL and creating an automated allocation engine balancing factory capacity in real time.',
    futurePlans: 'Integrate IoT smart-bin weight telemetry sensors and generate downloadable carbon credit certificates.',
  },
  {
    id: 'skillsphere',
    title: 'SkillSphere',
    subtitle: 'Dynamic Online Learning & Course Platform',
    category: 'Full-Stack',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop',
    description: 'Comprehensive course platform where users can explore technical courses, inspect curricula, and unlock member-only lesson modules through authenticated sessions.',
    technologies: ['Next.js (App Router)', 'React.js', 'Tailwind CSS', 'DaisyUI', 'Better Auth', 'MongoDB', 'React Icons'],
    github: 'https://github.com/shahed-hassan-fz-rabbi/SkillSphere',
    live: 'https://skill-sphere-xi-gules.vercel.app/',
    features: [
      'Dynamic course catalog and nested routing backed by structured schema data',
      'Protected routes ensuring only registered users can inspect lesson materials and video players',
      'Full authentication lifecycle (registration, login, session retention) utilizing Better Auth with MongoDB',
      'Interactive level-based tagging (Beginner, Intermediate, Advanced) and curated instructor highlights',
    ],
    contribution: 'Structured the Next.js App Router dynamic paths, integrated Better Auth session validation across protected endpoints, and crafted the responsive course catalog UI.',
    challenges: 'Handling route protection seamlessly using client-side session state without incurring hydration mismatch warnings or content flicker.',
    futurePlans: 'Add student quiz evaluations, progress bar persistence across lessons, and certificate generation on course completion.',
  },
  {
    id: 'keenkeeper',
    title: 'KeenKeeper',
    subtitle: 'Personal Relationship & Interaction Tracker',
    category: 'Full-Stack',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=800&auto=format&fit=crop',
    description: 'Personal relationship management application helping users keep track of friends, record communication touchpoints, and maintain regular connections.',
    technologies: ['React', 'React Router', 'Tailwind CSS', 'DaisyUI', 'Recharts', 'React Icons', 'LocalStorage'],
    github: 'https://github.com/shahed-hassan-fz-rabbi/KeenKeeper',
    live: 'https://stunning-profiterole-8353d0.netlify.app/',
    features: [
      'Friend status monitoring categorized into on-track, overdue, and almost-due touchpoints',
      'Chronological interaction timeline logging calls, text messages, and video chats with type filters',
      'Visual analytics dashboard with dynamic Recharts pie charts displaying communication breakdown',
      'Zero-latency client state synchronization using persistent LocalStorage schemas',
    ],
    contribution: 'Designed the complete frontend application architecture, configured reliable React Router pathways, and implemented real-time analytics chart bindings.',
    challenges: 'Structuring client-side persistence and timeline sorting algorithms that reliably update charts immediately upon logging a new interaction.',
    futurePlans: 'Migrate client storage to a cloud backend with automated browser notification reminders when contact with a friend becomes overdue.',
  },
  {
    id: 'drivefleet',
    title: 'DriveFleet',
    subtitle: 'Full-Stack Car Rental Platform',
    category: 'Full-Stack',
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=800&auto=format&fit=crop',
    description: 'End-to-end vehicle booking and inventory management platform featuring Google OAuth + JWT authentication, role-based route guards, and scheduling workflows.',
    technologies: ['Next.js 15', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'BetterAuth', 'Tailwind CSS'],
    github: 'https://github.com/shahed-hassan-fz-rabbi/DriveFleet',
    live: 'https://drivefleet-nine.vercel.app',
    features: [
      'Google OAuth and JWT session management using HTTP-only cookies',
      'Role-protected customer and fleet manager dashboards',
      'Atomic vehicle reservation workflows preventing double bookings',
    ],
    contribution: 'Engineered the authentication lifecycle, built backend inventory REST APIs, and structured dynamic vehicle filter interfaces with Next.js 15.',
    challenges: 'Managing secure cross-origin HTTP-only cookie sessions and preventing overlapping vehicle reservations using atomic database operations.',
    futurePlans: 'Implement automated payment processing (Stripe / SSLCommerz) and GPS driver tracking.',
  },
  {
    id: 'fable',
    title: 'Fable',
    subtitle: 'Digital Ebook Marketplace & Reader',
    category: 'E-Commerce',
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800&auto=format&fit=crop',
    description: 'Multi-role digital book marketplace featuring Stripe checkouts, asynchronous webhook order fulfillment, author sales analytics, and personalized digital libraries.',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'Stripe API'],
    github: 'https://github.com/shahed-hassan-fz-rabbi/Ebook-Store',
    live: 'https://ebook-store-steel.vercel.app/',
    features: [
      'Stripe Payment Gateway checkout with secure webhook order verification',
      'Author portal for catalog management, sales insights, and revenue tracking',
      'Protected digital reading shelf with synchronized reading states',
    ],
    contribution: 'Constructed asynchronous Stripe webhook pipelines for instant fulfillment, designed the MongoDB digital library schemas, and built reader interfaces.',
    challenges: 'Handling asynchronous Stripe webhook lifecycles securely to unlock digital books immediately while maintaining transactional integrity.',
    futurePlans: 'Add interactive audio-book narration player support and vector-based personalized reading recommendations.',
  },
];

const Projects: React.FC = () => {
  const [isArchiveOpen, setIsArchiveOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [archiveCategory, setArchiveCategory] = useState<string>('All');
  const [archiveSearch, setArchiveSearch] = useState<string>('');

  // Lock body scroll when archive or modal is open
  useEffect(() => {
    if (isArchiveOpen || selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isArchiveOpen, selectedProject]);

  // Close archive on hash change
  useEffect(() => {
    const handleHashChange = () => setIsArchiveOpen(false);
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (selectedProject) setSelectedProject(null);
        else if (isArchiveOpen) setIsArchiveOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isArchiveOpen, selectedProject]);

  // Dynamic category counts
  const categoryCounts = useMemo(() => {
    return {
      All: allProjectsData.length,
      'Full-Stack': allProjectsData.filter((p) => p.category === 'Full-Stack').length,
      'AI & ML': allProjectsData.filter((p) => p.category === 'AI & ML').length,
      'E-Commerce': allProjectsData.filter((p) => p.category === 'E-Commerce').length,
    };
  }, []);

  // Filtered archive records
  const filteredArchiveProjects = useMemo(() => {
    return allProjectsData.filter((project) => {
      const matchesCat =
        archiveCategory === 'All' || project.category === archiveCategory;
      const q = archiveSearch.toLowerCase().trim();
      const matchesSearch =
        q === '' ||
        project.title.toLowerCase().includes(q) ||
        project.subtitle.toLowerCase().includes(q) ||
        project.description.toLowerCase().includes(q) ||
        project.technologies.some((t) => t.toLowerCase().includes(q));

      return matchesCat && matchesSearch;
    });
  }, [archiveCategory, archiveSearch]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
  };

  return (
    <section
      id="projects"
      className="relative py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden bg-[var(--bg-main)] text-[var(--text-main)] transition-colors duration-300"
    >
      {/* Soft Ambient Background Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-20 -left-20 w-80 h-80 rounded-full bg-[#48c9b0]/[0.05] blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-10 -right-20 w-80 h-80 rounded-full bg-[#f5a67c]/[0.04] blur-[130px]"
      />

      {/* Main Section Header */}
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
            Selected Works
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--text-main)] leading-[1.15]">
          Featured <span className="gradient-text">Projects.</span>
        </h2>
        <p className="mt-3 text-[var(--text-muted)] text-xs sm:text-sm md:text-base max-w-2xl leading-relaxed">
          A showcase of full-stack platforms, deterministic AI systems, and secure database architectures built with high engineering standards.
        </p>
      </motion.div>

      {/* Primary 4 Featured Projects Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-7"
      >
        {allProjectsData.slice(0, 4).map((project) => (
          <motion.div
            key={project.id}
            variants={itemVariants}
            className="group bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-[#48c9b0]/40 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="relative w-full h-52 overflow-hidden bg-slate-900/40">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                <span className="absolute top-3 left-3 px-3 py-1 text-[11px] font-mono font-semibold bg-black/70 backdrop-blur-md text-[#48c9b0] rounded-full border border-[#48c9b0]/30">
                  {project.category}
                </span>
              </div>

              <div className="p-6">
                <div className="mb-2">
                  <h3 className="text-xl font-bold text-[var(--text-main)] group-hover:text-[#48c9b0] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#48c9b0] mt-0.5">
                    {project.subtitle}
                  </p>
                </div>

                <p className="text-[var(--text-muted)] text-xs sm:text-sm mb-5 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap items-center gap-1.5 mb-2">
                  {project.technologies.slice(0, 4).map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 text-[11px] font-medium bg-[var(--bg-main)] text-[var(--text-muted)] rounded-md border border-[var(--border-color)]"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-1 text-[11px] font-mono text-[var(--text-muted)]">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="px-6 pb-6 pt-2 border-t border-[var(--border-color)]/60 flex items-center justify-between gap-3">
              <button
                onClick={() => setSelectedProject(project)}
                type="button"
                className="text-xs sm:text-sm font-semibold text-[#48c9b0] hover:underline cursor-pointer flex items-center gap-1.5"
              >
                <span>View Case Study</span>
                <FaArrowRight className="text-[10px]" />
              </button>

              <div className="flex items-center gap-2">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} GitHub repository`}
                  className="p-2.5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-main)] text-[var(--text-muted)] hover:text-[#48c9b0] hover:border-[#48c9b0] transition-all text-sm cursor-pointer shadow-xs"
                  title="Source Code"
                >
                  <FaGithub />
                </a>

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} live demo`}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#48c9b0] hover:bg-[#3fb8a0] text-[#071113] rounded-xl font-bold text-xs transition-all shadow-sm cursor-pointer"
                  >
                    <FaExternalLinkAlt className="text-[10px]" />
                    <span>Demo</span>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom: "View all projects" Button */}
      <div className="mt-10 flex justify-end">
        <button
          type="button"
          onClick={() => setIsArchiveOpen(true)}
          className="group inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#48c9b0] hover:text-[#3fb8a0] transition-all cursor-pointer py-2 px-4 rounded-xl border border-[#48c9b0]/30 hover:bg-[#48c9b0]/10 shadow-sm"
        >
          <span>View All Projects Archive ({allProjectsData.length})</span>
          <FaArrowRight className="text-xs transition-transform duration-200 group-hover:translate-x-1" />
        </button>
      </div>

      {/* ================= ARCHIVE INDEX WINDOW ================= */}
      <AnimatePresence>
        {isArchiveOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed inset-0 z-40 overflow-y-auto bg-[var(--bg-main)] px-4 pt-24 pb-16 sm:px-8 lg:px-16"
          >
            <div className="max-w-7xl mx-auto">
              {/* Return Bar */}
              <div className="mb-8 flex items-center justify-between border-b border-[var(--border-color)] pb-4">
                <button
                  type="button"
                  onClick={() => setIsArchiveOpen(false)}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[var(--text-muted)] hover:text-[#48c9b0] transition-colors cursor-pointer"
                >
                  <FaArrowLeft className="text-xs" />
                  <span>Return to Portfolio</span>
                </button>

                <button
                  type="button"
                  onClick={() => setIsArchiveOpen(false)}
                  aria-label="Close Archive"
                  className="p-2 text-[var(--text-muted)] hover:text-[var(--text-main)] rounded-xl hover:bg-[var(--bg-card)] transition-colors cursor-pointer"
                >
                  <FaTimes className="text-base" />
                </button>
              </div>

              {/* Archive Index Header Title */}
              <div className="mb-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-[#48c9b0]/25 bg-[var(--bg-card)] text-[11px] font-mono uppercase tracking-widest text-[#48c9b0] mb-3">
                  <FaLayerGroup className="text-xs" />
                  <span>Project Archive</span>
                </div>
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--text-main)]">
                  All <span className="gradient-text">Projects.</span>
                </h1>
                <p className="mt-3 text-[var(--text-muted)] text-xs sm:text-sm md:text-base max-w-2xl leading-relaxed">
                  A comprehensive directory of production applications, AI pipelines, and open-source software built by Md Rabbi Miah.
                </p>
              </div>

              {/* Archive Layout: Sidebar + Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-10 items-start">
                {/* Left Sidebar Categories */}
                <aside className="space-y-4">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#48c9b0]">
                    Categories
                  </h4>

                  <div className="flex flex-row lg:flex-col gap-1.5 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
                    {(['All', 'Full-Stack', 'AI & ML', 'E-Commerce'] as const).map((cat) => {
                      const count = categoryCounts[cat];
                      const isActive = archiveCategory === cat;
                      const label = cat === 'All' ? 'All Projects' : cat;

                      return (
                        <button
                          key={cat}
                          type="button"
                          onClick={() => setArchiveCategory(cat)}
                          className={`flex items-center justify-between gap-3 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-150 cursor-pointer whitespace-nowrap ${
                            isActive
                              ? 'bg-[#48c9b0] text-[#071113] shadow-md shadow-[#48c9b0]/20 font-bold'
                              : 'text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--bg-card)]'
                          }`}
                        >
                          <span>{label}</span>
                          <span
                            className={`px-2 py-0.5 rounded-md text-[10px] font-bold ${
                              isActive
                                ? 'bg-[#071113]/20 text-[#071113]'
                                : 'bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-muted)]'
                            }`}
                          >
                            {count}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </aside>

                {/* Right Area: Search + Cards Grid */}
                <main className="space-y-6">
                  {/* Search Bar */}
                  <div className="relative w-full">
                    <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-xs text-[var(--text-muted)]" />
                    <input
                      type="text"
                      value={archiveSearch}
                      onChange={(e) => setArchiveSearch(e.target.value)}
                      placeholder="Search archive by keyword, technology, or title..."
                      className="w-full bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-main)] text-xs sm:text-sm rounded-2xl pl-10 pr-10 py-3 outline-none focus:border-[#48c9b0] transition-colors placeholder:text-[var(--text-muted)] shadow-sm"
                    />
                    {archiveSearch && (
                      <button
                        type="button"
                        onClick={() => setArchiveSearch('')}
                        className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-[var(--text-muted)] hover:text-[var(--text-main)] cursor-pointer"
                      >
                        <FaTimes />
                      </button>
                    )}
                  </div>

                  {/* Empty Search Result */}
                  {filteredArchiveProjects.length === 0 ? (
                    <div className="text-center py-16 px-4 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)]">
                      <h3 className="text-base font-bold text-[var(--text-main)]">
                        No archive records found
                      </h3>
                      <p className="text-xs text-[var(--text-muted)] mt-1 max-w-sm mx-auto">
                        No projects matched &quot;{archiveSearch}&quot; under &quot;{archiveCategory}&quot;.
                      </p>
                      <button
                        type="button"
                        onClick={() => {
                          setArchiveSearch('');
                          setArchiveCategory('All');
                        }}
                        className="mt-4 px-4 py-2 bg-[#48c9b0] text-[#071113] rounded-xl text-xs font-bold hover:bg-[#3fb8a0] transition-colors cursor-pointer"
                      >
                        Reset Filter
                      </button>
                    </div>
                  ) : (
                    /* Archive Cards Grid */
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {filteredArchiveProjects.map((project) => (
                        <div
                          key={project.id}
                          className="group bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl overflow-hidden shadow-sm hover:border-[#48c9b0]/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                        >
                          <div>
                            <div className="relative w-full h-44 overflow-hidden bg-slate-900/40">
                              <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                              <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 text-[10px] font-mono font-semibold bg-black/70 backdrop-blur-md text-[#48c9b0] rounded-full border border-[#48c9b0]/30">
                                {project.category}
                              </span>
                            </div>

                            <div className="p-5">
                              <div className="mb-2">
                                <h3 className="text-lg font-bold text-[var(--text-main)] group-hover:text-[#48c9b0] transition-colors">
                                  {project.title}
                                </h3>
                                <p className="text-xs font-semibold text-[#48c9b0]">
                                  {project.subtitle}
                                </p>
                              </div>

                              <p className="text-[var(--text-muted)] text-xs mb-4 leading-relaxed line-clamp-2">
                                {project.description}
                              </p>

                              <div className="flex flex-wrap items-center gap-1.5 mb-1">
                                {project.technologies.slice(0, 4).map((tech, i) => (
                                  <span
                                    key={i}
                                    className="px-2 py-0.5 text-[10px] font-medium bg-[var(--bg-main)] text-[var(--text-muted)] rounded-md border border-[var(--border-color)]"
                                  >
                                    {tech}
                                  </span>
                                ))}
                                {project.technologies.length > 4 && (
                                  <span className="px-1.5 py-0.5 text-[10px] font-mono text-[var(--text-muted)]">
                                    +{project.technologies.length - 4}
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>

                          <div className="px-5 pb-5 pt-2 border-t border-[var(--border-color)]/60 flex items-center justify-between gap-3">
                            <button
                              onClick={() => setSelectedProject(project)}
                              type="button"
                              className="text-xs font-semibold text-[#48c9b0] hover:underline cursor-pointer flex items-center gap-1"
                            >
                              <span>Case Study</span>
                              <FaArrowRight className="text-[9px]" />
                            </button>

                            <div className="flex items-center gap-2">
                              <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`${project.title} GitHub repository`}
                                className="p-2 rounded-xl border border-[var(--border-color)] bg-[var(--bg-main)] text-[var(--text-muted)] hover:text-[#48c9b0] hover:border-[#48c9b0] transition-all text-xs cursor-pointer shadow-xs"
                                title="Source Code"
                              >
                                <FaGithub />
                              </a>

                              {project.live && (
                                <a
                                  href={project.live}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  aria-label={`${project.title} live demo`}
                                  className="inline-flex items-center gap-1 px-3 py-1.5 bg-[#48c9b0] hover:bg-[#3fb8a0] text-[#071113] rounded-xl font-bold text-[11px] transition-all shadow-sm cursor-pointer"
                                >
                                  <FaExternalLinkAlt className="text-[9px]" />
                                  <span>Demo</span>
                                </a>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </main>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= DEEP CASE STUDY MODAL ================= */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 12 }}
              transition={{ duration: 0.22 }}
              className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-3xl max-w-2xl w-full max-h-[88vh] overflow-y-auto p-6 sm:p-8 relative shadow-2xl"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors cursor-pointer rounded-xl hover:bg-[var(--bg-main)]"
                aria-label="Close modal"
                type="button"
              >
                <FaTimes className="text-base" />
              </button>

              <span className="text-[10px] font-mono px-2.5 py-1 rounded-md border border-[#48c9b0]/30 bg-[#48c9b0]/10 text-[#48c9b0] uppercase tracking-wider font-semibold">
                {selectedProject.category}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-main)] mt-2 pr-8">
                {selectedProject.title}
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-[#48c9b0] mt-0.5 mb-5">
                {selectedProject.subtitle}
              </p>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="text-xs font-mono uppercase tracking-[0.16em] text-[var(--text-muted)] mb-2.5 font-bold">
                  Built With
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 text-xs font-medium bg-[var(--bg-main)] text-[var(--text-main)] rounded-lg border border-[var(--border-color)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h4 className="text-xs font-mono uppercase tracking-[0.16em] text-[var(--text-muted)] mb-2 font-bold">
                  Project Overview
                </h4>
                <p className="text-[var(--text-main)] text-xs sm:text-sm leading-relaxed bg-[var(--bg-main)] p-4 rounded-xl border border-[var(--border-color)]">
                  {selectedProject.description}
                </p>
              </div>

              {/* Key Features */}
              <div className="mb-6">
                <h4 className="text-xs font-mono uppercase tracking-[0.16em] text-[var(--text-muted)] mb-2.5 font-bold">
                  Key Features & Engineering Highlights
                </h4>
                <ul className="space-y-2.5">
                  {selectedProject.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                      <FaCheckCircle className="text-[#48c9b0] mt-0.5 text-xs flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contribution */}
              <div className="mb-6">
                <h4 className="text-xs font-mono uppercase tracking-[0.16em] text-[var(--text-muted)] mb-2 font-bold">
                  My Role & Architectural Contribution
                </h4>
                <p className="text-[var(--text-main)] text-xs sm:text-sm leading-relaxed bg-[var(--bg-main)] p-4 rounded-xl border border-[var(--border-color)]">
                  {selectedProject.contribution}
                </p>
              </div>

              {/* Challenges */}
              <div className="mb-6">
                <h4 className="text-xs font-mono uppercase tracking-[0.16em] text-[var(--text-muted)] mb-2 font-bold">
                  Key Challenges & Problem Solving
                </h4>
                <p className="text-[var(--text-muted)] text-xs sm:text-sm leading-relaxed bg-[var(--bg-main)] p-4 rounded-xl border border-[var(--border-color)]">
                  {selectedProject.challenges}
                </p>
              </div>

              {/* Roadmap */}
              <div className="mb-8">
                <h4 className="text-xs font-mono uppercase tracking-[0.16em] text-[var(--text-muted)] mb-2 font-bold">
                  Roadmap & Next Steps
                </h4>
                <p className="text-[var(--text-muted)] text-xs sm:text-sm leading-relaxed bg-[var(--bg-main)] p-4 rounded-xl border border-[var(--border-color)]">
                  {selectedProject.futurePlans}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-[var(--border-color)]">
                <div className="flex flex-wrap gap-2.5">
                  {selectedProject.live && (
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#48c9b0] hover:bg-[#3fb8a0] text-[#071113] rounded-xl font-bold text-xs shadow-md shadow-[#48c9b0]/20 transition-all cursor-pointer"
                    >
                      <FaExternalLinkAlt className="text-[10px]" />
                      <span>Live Preview</span>
                    </a>
                  )}

                  {selectedProject.video && (
                    <a
                      href={selectedProject.video}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#f5a67c] hover:bg-[#e6986e] text-[#071113] rounded-xl font-bold text-xs shadow-md shadow-[#f5a67c]/20 transition-all cursor-pointer"
                    >
                      <FaVideo className="text-xs" />
                      <span>Watch Video Demo</span>
                    </a>
                  )}
                </div>

                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-[var(--bg-main)] border border-[var(--border-color)] text-[var(--text-main)] hover:border-[#48c9b0] hover:text-[#48c9b0] rounded-xl font-semibold text-xs transition-all cursor-pointer"
                >
                  <FaGithub className="text-sm" />
                  <span>GitHub Repository</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;