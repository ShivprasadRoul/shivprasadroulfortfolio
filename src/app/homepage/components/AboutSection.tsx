'use client';

import React from 'react';
import { motion } from 'framer-motion';

const QUICK_STATS = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    label: 'Current Role',
    value: 'Associate Backend Engineer @ Entropik Technologies',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
    label: 'Education',
    value: 'KIIT University, B.Tech CSE · CGPA 7.5',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: 'Location',
    value: 'Chennai, India',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    label: 'Currently Learning',
    value: 'Advanced LLM Evaluation · Distributed Systems',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    label: 'Open To',
    value: 'Full-time AI / Backend roles',
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-28 overflow-hidden"
      style={{ backgroundColor: 'var(--ink)' }}
      aria-label="About Shivprasad Roul"
    >

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Left: bio text */}
          <motion.div
            className="lg:col-span-7 space-y-8"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="space-y-3">
              <p
                className="font-mono text-saffron tracking-widest"
                style={{ fontSize: '0.72rem', letterSpacing: '0.18em', fontFamily: 'var(--font-mono)' }}
              >
                ABOUT
              </p>
              <h2
                className="section-heading text-ink-text"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                The Builder
                <br />
                <span className="text-saffron">Behind the Code.</span>
              </h2>
            </div>

            <div className="space-y-6 text-ink-text/70 leading-relaxed" style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem' }}>
              <p>
                I'm an AI Engineer currently at Entropik Technologies in Chennai, where I lead the backend development of real-time agentic AI moderation platforms. My work sits at the intersection of LLM orchestration, scalable Python backends, and production-grade AWS infrastructure.
              </p>
              <p>
                Before Entropik, I built a full RAG platform at Infoware India — ingesting 10,000+ enterprise documents, integrating WhatsApp and voice-based LLM agents, and implementing memory layers for conversational continuity. I graduated from KIIT University, Bhubaneswar with a B.Tech in Computer Science.
              </p>
              <p>
                Outside of work, I write about GenAI and backend systems on Hashnode, and I led Enactus KIIT as president — a 250-member entrepreneurship team that won India's National Cup and represented India at the World Cup in Kazakhstan. I'm a builder who writes, and a writer who builds.
              </p>
            </div>

            {/* Achievements */}
            <div className="flex flex-wrap gap-3 pt-4">
              {[
                '🏆 Hack NITR 2024 — MongoDB Track Winner',
                '🏆 Hack4Bengal 2024 — Callchimp SDK Winner',
                '🌍 Enactus India National Cup Winner',
                '🌐 Enactus World Cup, Kazakhstan',
              ]?.map((achievement) => (
                <span
                  key={achievement}
                  className="inline-block px-4 py-2 rounded-full border font-mono text-ink-text/70"
                  style={{
                    borderColor: 'rgba(232, 98, 42, 0.25)',
                    fontSize: '0.72rem',
                    letterSpacing: '0.04em',
                    backgroundColor: 'rgba(232, 98, 42, 0.06)',
                  }}
                >
                  {achievement}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right: Quick stats card */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
          >
            <div
              className="rounded-3xl p-8 space-y-6"
              style={{
                backgroundColor: 'var(--ivory)',
                border: '1px solid rgba(45, 58, 140, 0.1)',
              }}
            >
              <p
                className="font-mono text-ink/50 tracking-widest"
                style={{ fontSize: '0.68rem', letterSpacing: '0.18em', fontFamily: 'var(--font-mono)' }}
              >
                QUICK STATS
              </p>
              <div className="space-y-5">
                {QUICK_STATS?.map((item) => (
                  <div
                    key={item?.label}
                    className="flex items-start gap-4 pb-5 border-b last:pb-0 last:border-b-0"
                    style={{ borderColor: 'rgba(45, 58, 140, 0.08)' }}
                  >
                    <span className="text-saffron mt-0.5 shrink-0">{item?.icon}</span>
                    <div className="flex flex-col gap-0.5">
                      <span
                        className="font-mono text-ink/40"
                        style={{ fontSize: '0.65rem', letterSpacing: '0.12em', fontFamily: 'var(--font-mono)' }}
                      >
                        {item?.label?.toUpperCase()}
                      </span>
                      <span
                        className="font-body text-ink-text text-sm font-medium"
                        style={{ fontFamily: 'var(--font-body)', color: 'var(--ivory-text)' }}
                      >
                        {item?.value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Available badge */}
              <div
                className="flex items-center gap-2 px-4 py-3 rounded-2xl"
                style={{ backgroundColor: 'rgba(61, 107, 79, 0.08)', border: '1px solid rgba(61, 107, 79, 0.2)' }}
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-leaf opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-leaf"></span>
                </span>
                <span
                  className="font-mono text-leaf"
                  style={{ fontSize: '0.7rem', letterSpacing: '0.1em', fontFamily: 'var(--font-mono)' }}
                >
                  AVAILABLE FOR OPPORTUNITIES
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
}