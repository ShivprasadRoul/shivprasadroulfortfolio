'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ROLES = [
  'GenAI Backend',
  'RAG Systems',
  'Agentic Workflows',
  'Technical Writer',
];

export default function AnimatedText() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % ROLES?.length);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  return (
    <span
      className="inline-block relative"
      style={{ minWidth: '220px', height: '1.4em' }}
      aria-live="polite"
      aria-atomic="true"
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={ROLES?.[index]}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.38, ease: [0.4, 0, 0.2, 1] }}
          className="absolute inset-0 text-saffron font-display font-semibold"
          style={{ fontFamily: 'var(--font-display)', fontSize: 'inherit', color: 'var(--saffron)' }}
        >
          {ROLES?.[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}