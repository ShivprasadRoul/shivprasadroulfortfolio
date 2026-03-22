'use client';

import React from 'react';
import { motion } from 'framer-motion';
import MadhubaniDivider from '@/components/MadhubaniDivider';

const SOCIAL_LINKS = [
  {
    label: 'GitHub',
    href: 'https://github.com/ShivprasadRoul',
    ariaLabel: "Visit Shivprasad Roul\'s GitHub profile",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/shivprasad-roul-a52a18201/',
    ariaLabel: "Visit Shivprasad Roul\'s LinkedIn profile",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: 'Hashnode',
    href: 'https://shivprasadroul.hashnode.dev/',
    ariaLabel: "Visit Shivprasad Roul\'s blog on Hashnode",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative py-28 overflow-hidden"
      style={{ backgroundColor: 'var(--ink)' }}
      aria-label="Contact Shivprasad Roul"
    >
      {/* Lotus divider at top */}
      <MadhubaniDivider variant="lotus" color="var(--saffron)" className="opacity-10 mb-12" />
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-3xl">
          {/* Label */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="font-mono text-saffron tracking-widest mb-6"
            style={{ fontSize: '0.72rem', letterSpacing: '0.18em', fontFamily: 'var(--font-mono)' }}
          >
            GET IN TOUCH
          </motion.p>

          {/* Display heading */}
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="section-heading text-ink-text mb-8"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Let's Build
            <br />
            <span className="text-saffron">Something.</span>
          </motion.h2>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-ink-text/60 leading-relaxed mb-12 max-w-lg"
            style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem' }}
          >
            I'm open to full-time roles, freelance projects, and interesting conversations about AI. If you're building something ambitious in the GenAI space, I'd love to hear about it.
          </motion.p>

          {/* Email link */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-14"
          >
            <a
              href="mailto:roulshivprasad@gmail.com"
              aria-label="Send email to Shivprasad Roul at roulshivprasad@gmail.com"
              className="inline-block font-display font-semibold text-saffron saffron-underline"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.5rem, 4vw, 2.8rem)',
                letterSpacing: '-0.01em',
                lineHeight: 1.2,
              }}
            >
              roulshivprasad@gmail.com
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center gap-6"
          >
            {SOCIAL_LINKS?.map((link) => (
              <a
                key={link?.label}
                href={link?.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link?.ariaLabel}
                className="text-ink-text/50 hover:text-saffron transition-colors duration-200 p-1"
              >
                {link?.icon}
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}