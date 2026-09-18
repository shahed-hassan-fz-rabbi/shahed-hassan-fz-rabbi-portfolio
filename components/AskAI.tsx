"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaRobot,
  FaTimes,
  FaPaperPlane,
  FaMagic,
  FaRedo,
  FaExternalLinkAlt,
  FaDownload,
  FaEnvelope,
} from "react-icons/fa";

interface ActionButton {
  label: string;
  href?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
}

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  actions?: ActionButton[];
}

const initialPrompts = [
  "What are Rabbi's main skills?",
  "Tell me about LOOP AI & Secure Auth",
  "Why should we hire Rabbi?",
  "What is his problem-solving background?",
  "How can I contact Rabbi?",
];

// Rich Offline Knowledge Base with Direct Actions
const getSmartFallbackReply = (query: string): { reply: string; actions?: ActionButton[] } => {
  const q = query.toLowerCase();

  // 1. LOOP AI or Feedback Platform
  if (q.includes("loop") || q.includes("feedback") || q.includes("rag")) {
    return {
      reply:
        "**LOOP AI** is an enterprise-grade Voice-of-Customer (VoC) analytics platform built by Rabbi.\n\n• **Core Tech:** Next.js 14, TypeScript, PostgreSQL (Neon), Prisma ORM, and Claude 3.5 / Gemini APIs.\n• **Key Features:** Grounded RAG ('Ask LOOP') over vector embeddings with cited evidence cards, 3NF multi-tenant schema isolation, and real-time sentiment scoring.\n• **Impact:** Transforms unstructured qualitative customer reviews into prioritized product roadmaps.",
      actions: [
        { label: "View Live Demo", href: "https://project-loop-eta.vercel.app/", icon: <FaExternalLinkAlt className="text-[10px]" /> },
        { label: "GitHub Repo", href: "https://github.com/shahed-hassan-fz-rabbi/Loop-Feedback-Analysis", icon: <FaExternalLinkAlt className="text-[10px]" /> },
      ],
    };
  }

  // 2. Authentication / Security
  if (q.includes("auth") || q.includes("security") || q.includes("2fa") || q.includes("login")) {
    return {
      reply:
        "Rabbi engineered a **Multi-Layer Secure Authentication System** incorporating defense-in-depth principles:\n\n• **Security Layers:** TOTP-based 2FA (Google Authenticator), HTTP-Only SameSite JWT cookies, and salted Bcrypt hashing.\n• **Protection:** IP rate-limiting, Google reCAPTCHA v2 bot challenge, and strict concurrent session caps (max 2 devices per account).\n• **Stack:** Next.js 14, TypeScript, MongoDB Atlas, and Nodemailer for expiring verification tokens.",
      actions: [
        { label: "Test Auth Demo", href: "https://secure-login-system-gold-six.vercel.app", icon: <FaExternalLinkAlt className="text-[10px]" /> },
        { label: "GitHub Repo", href: "https://github.com/shahed-hassan-fz-rabbi/Secure-Login-system", icon: <FaExternalLinkAlt className="text-[10px]" /> },
      ],
    };
  }

  // 3. Projects Overview
  if (q.includes("project") || q.includes("work") || q.includes("portfolio") || q.includes("built")) {
    return {
      reply:
        "Here are Rabbi's flagship production applications:\n\n1. **LOOP AI Platform:** Enterprise VoC intelligence with grounded RAG & multi-tenant Prisma architecture.\n2. **Multi-Layer Secure Auth:** Hardened auth system with 2FA/TOTP, device tracking, and bot defense.\n3. **W2A Intelligence:** Municipal waste-to-assets allocation engine with Gemini Vision API (1st Runner-Up at PROTICHAMP AI Championship).\n4. **SkillSphere:** Full-stack course platform with Better Auth and protected routes.\n5. **KeenKeeper:** Relationship CRM & interaction tracker with Recharts.",
      actions: [
        { label: "Explore Projects Section", href: "#projects" },
        { label: "View All Activities Archive", href: "/activities" },
      ],
    };
  }

  // 4. Skills & Tech Stack
  if (q.includes("skill") || q.includes("tech") || q.includes("stack") || q.includes("language")) {
    return {
      reply:
        "Rabbi's core engineering arsenal includes:\n\n• **Frontend:** Next.js (App Router), React.js, TypeScript, Tailwind CSS, Framer Motion, Recharts.\n• **Backend & APIs:** Node.js, Express.js, RESTful APIs, NextAuth / Better Auth, Stripe API.\n• **Databases:** PostgreSQL (Neon / Supabase), MongoDB Atlas, MySQL (3NF Relational Schemas), Prisma ORM.\n• **AI & Cloud:** Grounded RAG, Gemini Vision API, Vector Embeddings, Git/GitHub, Vercel.",
      actions: [{ label: "View Skills Section", href: "#skills" }],
    };
  }

  // 5. Problem Solving / Competitive Programming
  if (q.includes("cp") || q.includes("problem") || q.includes("codeforces") || q.includes("algorithm") || q.includes("dsa")) {
    return {
      reply:
        "Rabbi has solved **500+ algorithmic problems** across competitive programming platforms:\n\n• **Codeforces:** 450+ solved with regular contest participation.\n• **Platforms:** LeetCode, Beecrowd, and HackerRank.\n• **Strengths:** Data Structures & Algorithms, dynamic programming, graph traversal, and time/space complexity optimization.",
      actions: [{ label: "View Achievements", href: "#awards" }],
    };
  }

  // 6. Why Hire Rabbi?
  if (q.includes("hire") || q.includes("why") || q.includes("role") || q.includes("engineer")) {
    return {
      reply:
        "**Why hire Md Rabbi Miah?**\n\n1. **Engineering Discipline:** Writes strictly typed, modular, and maintainable TypeScript/Next.js code with clean 3NF database designs.\n2. **Deep Problem Solving:** 500+ CP problems solved ensures optimal complexity and bug-resilient logic.\n3. **Production Security:** Experienced with multi-layer defense, HTTP-only JWTs, 2FA, and multi-tenant data isolation.\n4. **Communication & Ownership:** Proven leadership in campus seminars, project pitch presentations, and technical documentation.",
      actions: [
        { label: "Download Resume", href: "/resume.pdf", icon: <FaDownload className="text-[10px]" /> },
        { label: "Get In Touch", href: "#contact", icon: <FaEnvelope className="text-[10px]" /> },
      ],
    };
  }

  // 7. Contact Info
  if (q.includes("contact") || q.includes("email") || q.includes("reach") || q.includes("phone") || q.includes("hire me")) {
    return {
      reply:
        "You can reach Rabbi directly through:\n\n• **Email:** shahedhassan572@gmail.com\n• **Phone:** +880 1738-039808\n• **Location:** Comilla / Dhaka, Bangladesh\n• **Status:** Open for Software Engineering roles, full-stack contracts, and internships.",
      actions: [
        { label: "Send Email", href: "mailto:shahedhassan572@gmail.com", icon: <FaEnvelope className="text-[10px]" /> },
        { label: "LinkedIn Profile", href: "https://linkedin.com/in/shahed-hassan-fz", icon: <FaExternalLinkAlt className="text-[10px]" /> },
      ],
    };
  }

  // Default Fallback
  return {
    reply:
      "Md Rabbi Miah is a Software Engineer & Full-Stack Developer specializing in Next.js, React, Node.js, TypeScript, and modern database architectures with 500+ CP problems solved. How can I help you learn more about his background?",
    actions: [
      { label: "Explore Projects", href: "#projects" },
      { label: "Contact Rabbi", href: "#contact" },
    ],
  };
};

export default function AskAI() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "init",
      role: "assistant",
      content:
        "Hi there! I am Rabbi's AI Assistant. Ask me anything about his technical stack, competitive programming background, or full-stack projects.",
      actions: [
        { label: "Top Projects", onClick: () => handleSend("Tell me about his top projects") },
        { label: "Core Skills", onClick: () => handleSend("What are Rabbi's main skills?") },
        { label: "Why Hire Him?", onClick: () => handleSend("Why should we hire Rabbi?") },
      ],
    },
  ]);
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleSend = async (queryText?: string) => {
    const textToSend = queryText || input;
    if (!textToSend.trim() || loading) return;

    const userMessageId = Date.now().toString();
    const userMessage: Message = { id: userMessageId, role: "user", content: textToSend };
    const updatedMessages = [...messages, userMessage];

    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updatedMessages }),
      });

      const data = await res.json();

      if (res.ok && data.reply) {
        // Parse possible action suggestions from backend or local knowledge matching
        const localInsights = getSmartFallbackReply(textToSend);
        setMessages((prev) => [
          ...prev,
          {
            id: (Date.now() + 1).toString(),
            role: "assistant",
            content: data.reply,
            actions: localInsights.actions,
          },
        ]);
      } else {
        throw new Error("Fallback Trigger");
      }
    } catch {
      // Smart Fallback Handling
      const { reply, actions } = getSmartFallbackReply(textToSend);
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: reply,
          actions,
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: Date.now().toString(),
        role: "assistant",
        content:
          "Chat reset! Ask me anything about Rabbi's engineering projects, skills, or experience.",
        actions: [
          { label: "Top Projects", onClick: () => handleSend("Tell me about his top projects") },
          { label: "Why Hire Him?", onClick: () => handleSend("Why should we hire Rabbi?") },
        ],
      },
    ]);
  };

  return (
    <>
      {/* Floating Launcher Button */}
      <div className="fixed bottom-5 right-5 z-40">
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="button"
          aria-label="Open Rabbi's AI Assistant"
          className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#0d191c] border border-[#48c9b0]/40 text-[#ffffff] shadow-xl shadow-[#48c9b0]/15 hover:border-[#48c9b0] transition-all font-semibold text-xs sm:text-sm cursor-pointer backdrop-blur-md"
        >
          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#48c9b0] text-[#071113] text-xs">
            <FaMagic />
          </div>
          <span>Ask Rabbi&apos;s AI</span>
          <span className="h-2 w-2 rounded-full bg-[#48c9b0] animate-pulse" />
        </motion.button>
      </div>

      {/* Smart Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="fixed bottom-16 right-4 sm:right-5 z-50 w-[calc(100vw-32px)] sm:w-[410px] h-[490px] max-h-[78vh] rounded-3xl border border-[#48c9b0]/30 bg-[var(--bg-card)] shadow-2xl flex flex-col overflow-hidden backdrop-blur-xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--border-color)] bg-[var(--bg-main)]/90 backdrop-blur-md">
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#48c9b0]/15 text-[#48c9b0] text-sm border border-[#48c9b0]/30 shadow-xs">
                  <FaRobot />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-[var(--text-main)] leading-tight flex items-center gap-1.5">
                    Rabbi&apos;s AI Assistant
                    <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-[#48c9b0]/15 text-[#48c9b0]">
                      v2.0
                    </span>
                  </h3>
                  <span className="text-[10px] text-[#48c9b0] font-mono flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#48c9b0] animate-pulse" />
                    Online · Grounded Intelligence
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={handleResetChat}
                  title="Reset Conversation"
                  aria-label="Reset Conversation"
                  className="p-1.5 text-[var(--text-muted)] hover:text-[#48c9b0] rounded-lg hover:bg-[var(--bg-main)] transition-colors cursor-pointer text-xs"
                >
                  <FaRedo />
                </button>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close Chat"
                  className="p-1.5 text-[var(--text-muted)] hover:text-[var(--text-main)] rounded-lg hover:bg-[var(--bg-main)] transition-colors cursor-pointer text-xs"
                >
                  <FaTimes />
                </button>
              </div>
            </div>

            {/* Chat Messages Body */}
            <div className="flex-1 overflow-y-auto p-3.5 sm:p-4 space-y-3.5 text-xs sm:text-[13px] scrollbar-thin">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex flex-col ${
                    m.role === "user" ? "items-end" : "items-start"
                  }`}
                >
                  <div
                    className={`max-w-[88%] rounded-2xl px-3.5 py-2.5 leading-relaxed whitespace-pre-line shadow-xs ${
                      m.role === "user"
                        ? "bg-[#48c9b0] text-[#071113] font-medium rounded-br-none"
                        : "bg-[var(--bg-main)] border border-[var(--border-color)] text-[var(--text-main)] rounded-bl-none"
                    }`}
                  >
                    {m.content}
                  </div>

                  {/* Contextual Action Buttons under AI responses */}
                  {m.actions && m.actions.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-2 pl-1">
                      {m.actions.map((act, idx) =>
                        act.href ? (
                          <a
                            key={idx}
                            href={act.href}
                            target={act.href.startsWith("http") ? "_blank" : "_self"}
                            rel={act.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            onClick={() => {
                              if (act.href?.startsWith("#")) setIsOpen(false);
                            }}
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[var(--bg-main)] border border-[#48c9b0]/30 hover:border-[#48c9b0] text-[#48c9b0] text-[11px] font-semibold transition-all hover:-translate-y-0.5 shadow-xs cursor-pointer"
                          >
                            <span>{act.label}</span>
                            {act.icon}
                          </a>
                        ) : (
                          <button
                            key={idx}
                            type="button"
                            onClick={act.onClick}
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[var(--bg-main)] border border-[#48c9b0]/30 hover:border-[#48c9b0] text-[#48c9b0] text-[11px] font-semibold transition-all hover:-translate-y-0.5 shadow-xs cursor-pointer"
                          >
                            <span>{act.label}</span>
                            {act.icon}
                          </button>
                        )
                      )}
                    </div>
                  )}
                </div>
              ))}

              {/* Typing indicator */}
              {loading && (
                <div className="flex justify-start">
                  <div className="bg-[var(--bg-main)] border border-[var(--border-color)] rounded-2xl rounded-bl-none px-3.5 py-2.5 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#48c9b0] animate-pulse" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#48c9b0] animate-pulse delay-100" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#48c9b0] animate-pulse delay-200" />
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Quick Suggested Prompts Horizontal Rail */}
            <div className="px-3 py-2 border-t border-[var(--border-color)]/70 bg-[var(--bg-main)]/50 overflow-x-auto scrollbar-none">
              <div className="flex gap-1.5 whitespace-nowrap">
                {initialPrompts.map((prompt, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSend(prompt)}
                    className="text-[10px] sm:text-[11px] font-medium px-2.5 py-1 rounded-lg border border-[var(--border-color)] bg-[var(--bg-card)] text-[var(--text-muted)] hover:border-[#48c9b0] hover:text-[#48c9b0] transition-colors cursor-pointer"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>

            {/* Input Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="p-2.5 border-t border-[var(--border-color)] bg-[var(--bg-main)] flex items-center gap-2"
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about Rabbi's stack, projects, security..."
                className="flex-1 bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-main)] text-xs sm:text-sm rounded-xl px-3.5 py-2 outline-none focus:border-[#48c9b0] transition-colors placeholder:text-[var(--text-muted)]"
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                aria-label="Send Message"
                className="p-2.5 rounded-xl bg-[#48c9b0] hover:bg-[#3fb8a0] text-[#071113] disabled:opacity-40 disabled:hover:bg-[#48c9b0] transition-all cursor-pointer shadow-md shadow-[#48c9b0]/20 flex items-center justify-center"
              >
                <FaPaperPlane className="text-xs" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}