'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import AnimatedText from '@/components/AnimatedText';

const STATS = [
  { value: '2×', label: 'Hackathon Winner' },
  { value: '10K+', label: 'Docs Processed' },
  { value: '250+', label: 'Team Led' },
];

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden grain-overlay"
      style={{ backgroundColor: 'var(--ivory)' }}
      aria-label="Hero section"
    >
      {/* Block-print texture background */}
      <div
        className="absolute inset-0 block-print-bg opacity-[0.04]"
        aria-hidden="true"
      />
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-28 pb-20 w-full">
        <div className="grid lg:grid-cols-12 gap-8 items-center min-h-[80vh]">
          {/* Left: text content — 5 columns */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {/* Label */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-mono text-saffron tracking-widest"
              style={{ fontSize: '0.72rem', letterSpacing: '0.18em', fontFamily: 'var(--font-mono)' }}
              aria-label="AI Engineer based in Chennai, India"
            >
              AI ENGINEER · CHENNAI, INDIA
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
              className="hero-name text-ink"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Shivprasad
              <br />
              Roul
            </motion.h1>

            {/* Animated role */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex items-center gap-3"
            >
              <div
                className="w-8 h-px"
                style={{ backgroundColor: 'var(--saffron)' }}
                aria-hidden="true"
              />
              <span
                className="font-display text-2xl md:text-3xl text-ink/60"
                style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.4rem, 3vw, 2.2rem)' }}
              >
                <AnimatedText />
              </span>
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="text-ink/60 leading-relaxed max-w-lg"
              style={{ fontSize: '1.05rem', fontFamily: 'var(--font-body)' }}
            >
              Building the intelligent backend layer — from RAG pipelines to agentic systems.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="flex flex-wrap items-center gap-4"
            >
              <a
                href="#projects"
                aria-label="See Shivprasad's work and projects"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-body font-semibold text-ivory transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  backgroundColor: 'var(--saffron)',
                  fontSize: '0.9rem',
                }}
                onClick={(e) => {
                  e?.preventDefault();
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                See My Work
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
              <a
                href="https://shivprasadroul.hashnode.dev/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Read Shivprasad's blog on Hashnode"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border font-body font-semibold text-ink transition-all duration-200 hover:border-saffron hover:text-saffron"
                style={{
                  borderColor: 'rgba(45, 58, 140, 0.3)',
                  fontSize: '0.9rem',
                }}
              >
                Read My Blog
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.65 }}
              className="flex flex-wrap gap-8 pt-4 border-t"
              style={{ borderColor: 'rgba(45, 58, 140, 0.12)' }}
            >
              {[
                { value: '2×', label: 'Hackathon Winner' },
                { value: '10K+', label: 'Docs Processed' },
                { value: '250+', label: 'Team Led' },
              ]?.map((stat) => (
                <div key={stat?.label} className="flex flex-col gap-1">
                  <span
                    className="font-display font-bold text-saffron"
                    style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', lineHeight: 1 }}
                  >
                    {stat?.value}
                  </span>
                  <span
                    className="font-mono text-ink/50"
                    style={{ fontSize: '0.68rem', letterSpacing: '0.1em' }}
                  >
                    {stat?.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: monoline story illustration — 7 columns */}
          <motion.div
            className="lg:col-span-7 flex items-center justify-end"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
            aria-hidden="true"
          >
            <div className="relative w-full max-w-2xl">
              <Image
                src="/assets/images/OpenAI_Playground_2026-03-21_at_16.31.49-1774091020414.png"
                alt="Continuous monoline line art illustration for hero section"
                width={900}
                height={300}
                priority
                className="w-full h-auto select-none pointer-events-none opacity-80"
                style={{ filter: 'none' }}
              />
            </div>
          </motion.div>
        </div>
      </div>
      {/* Scroll arrow */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        aria-hidden="true"
      >
        <span
          className="font-mono text-ink/30"
          style={{ fontSize: '0.6rem', letterSpacing: '0.2em' }}
        >
          SCROLL
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="text-saffron/50"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}