'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface SkillGroupData {
  label: string;
  category: string;
  skills: string[];
  style: {
    bg: string;
    text: string;
    border: string;
    labelColor: string;
  };
  gridArea?: string;
}

const SKILL_GROUPS: SkillGroupData[] = [
  {
    label: 'GenAI & LLM',
    category: 'genai',
    skills: ['LLMs', 'RAG', 'Agentic Workflows', 'LangChain', 'Prompt Engineering', 'Embeddings', 'Vector Search', 'QdrantDB', 'pgvector'],
    style: {
      bg: 'rgba(232, 98, 42, 0.9)',
      text: '#FAF7F2',
      border: 'rgba(232, 98, 42, 0.3)',
      labelColor: 'rgba(250, 247, 242, 0.7)',
    },
  },
  {
    label: 'Backend & APIs',
    category: 'backend',
    skills: ['FastAPI', 'Express.js', 'REST APIs', 'GraphQL', 'WebSockets', 'Async Processing', 'Celery', 'Microservices'],
    style: {
      bg: 'rgba(45, 58, 140, 0.9)',
      text: '#FAF7F2',
      border: 'rgba(45, 58, 140, 0.3)',
      labelColor: 'rgba(250, 247, 242, 0.7)',
    },
  },
  {
    label: 'Cloud & DevOps',
    category: 'cloud',
    skills: ['AWS EC2', 'S3', 'DynamoDB', 'RDS', 'CloudFront', 'ECS', 'Docker', 'nginx', 'CI/CD'],
    style: {
      bg: 'rgba(61, 107, 79, 0.9)',
      text: '#FAF7F2',
      border: 'rgba(61, 107, 79, 0.3)',
      labelColor: 'rgba(250, 247, 242, 0.7)',
    },
  },
  {
    label: 'Databases',
    category: 'databases',
    skills: ['PostgreSQL', 'MongoDB', 'DynamoDB', 'Redis', 'pgvector', 'QdrantDB'],
    style: {
      bg: 'rgba(26, 26, 46, 0.92)',
      text: '#E8E4DC',
      border: 'rgba(232, 228, 220, 0.15)',
      labelColor: 'rgba(232, 228, 220, 0.5)',
    },
  },
  {
    label: 'Languages',
    category: 'languages',
    skills: ['Python', 'JavaScript', 'Node.js', 'SQL'],
    style: {
      bg: 'rgba(196, 168, 130, 0.35)',
      text: '#2A2118',
      border: 'rgba(196, 168, 130, 0.5)',
      labelColor: 'rgba(42, 33, 24, 0.5)',
    },
  },
];

// Corner ornament SVG
function CornerOrnament({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-8 h-8 ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path d="M2,2 L2,16 M2,2 L16,2" strokeLinecap="round" />
      <path d="M2,8 L8,2" strokeWidth="0.8" opacity="0.5" />
      <circle cx="2" cy="2" r="2" fill="currentColor" />
    </svg>
  );
}

function SkillBadge({ skill, style, delay }: { skill: string; style: SkillGroupData['style']; delay: number }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay, ease: [0.4, 0, 0.2, 1] }}
      className="inline-block px-3 py-1.5 rounded-lg font-mono font-medium"
      style={{
        fontSize: '0.72rem',
        letterSpacing: '0.04em',
        color: style.text,
        backgroundColor: 'rgba(255,255,255,0.12)',
        border: `1px solid ${style.border}`,
        fontFamily: 'var(--font-mono)',
      }}
    >
      {skill}
    </motion.span>
  );
}

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative py-28 grain-overlay overflow-hidden"
      style={{ backgroundColor: 'var(--ivory)' }}
      aria-label="Technical skills"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <motion.div
          className="relative flex items-start gap-4 mb-20"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Decorative CSS corner bracket — top-right */}
          <div className="absolute top-4 right-4 w-8 h-8 opacity-30 pointer-events-none" aria-hidden="true">
            <div className="absolute top-0 right-0 w-4 h-px" style={{ backgroundColor: 'var(--saffron)' }} />
            <div className="absolute top-0 right-0 h-4 w-px" style={{ backgroundColor: 'var(--saffron)' }} />
          </div>
          <div className="flex flex-col gap-2">
            <p
              className="font-mono text-saffron tracking-widest"
              style={{ fontSize: '0.72rem', letterSpacing: '0.18em', fontFamily: 'var(--font-mono)' }}
            >
              TECHNICAL PROFICIENCY
            </p>
            <div className="flex items-center gap-4">
              <CornerOrnament className="text-saffron" />
              <h2
                className="section-heading text-ink"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                The Stack.
              </h2>
              <CornerOrnament className="text-saffron rotate-90" />
            </div>
          </div>
        </motion.div>

        {/* Asymmetric skill clusters */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 items-start">
          {/* GenAI — large, top left, span 5 */}
          <motion.div
            className="lg:col-span-5 rounded-3xl p-8 space-y-5"
            style={{ backgroundColor: SKILL_GROUPS[0].style.bg }}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0 }}
          >
            <p
              className="font-mono font-bold tracking-widest"
              style={{ fontSize: '0.68rem', letterSpacing: '0.2em', color: SKILL_GROUPS[0].style.labelColor, fontFamily: 'var(--font-mono)' }}
            >
              {SKILL_GROUPS[0].label.toUpperCase()}
            </p>
            <div className="flex flex-wrap gap-2">
              {SKILL_GROUPS[0].skills.map((skill, i) => (
                <SkillBadge key={skill} skill={skill} style={SKILL_GROUPS[0].style} delay={i * 0.05} />
              ))}
            </div>
          </motion.div>

          {/* Backend — top right, span 7 */}
          <motion.div
            className="lg:col-span-7 rounded-3xl p-8 space-y-5"
            style={{ backgroundColor: SKILL_GROUPS[1].style.bg }}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <p
              className="font-mono font-bold tracking-widest"
              style={{ fontSize: '0.68rem', letterSpacing: '0.2em', color: SKILL_GROUPS[1].style.labelColor, fontFamily: 'var(--font-mono)' }}
            >
              {SKILL_GROUPS[1].label.toUpperCase()}
            </p>
            <div className="flex flex-wrap gap-2">
              {SKILL_GROUPS[1].skills.map((skill, i) => (
                <SkillBadge key={skill} skill={skill} style={SKILL_GROUPS[1].style} delay={i * 0.05} />
              ))}
            </div>
          </motion.div>

          {/* Cloud — bottom left, span 7 */}
          <motion.div
            className="lg:col-span-7 rounded-3xl p-8 space-y-5"
            style={{ backgroundColor: SKILL_GROUPS[2].style.bg }}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.15 }}
          >
            <p
              className="font-mono font-bold tracking-widest"
              style={{ fontSize: '0.68rem', letterSpacing: '0.2em', color: SKILL_GROUPS[2].style.labelColor, fontFamily: 'var(--font-mono)' }}
            >
              {SKILL_GROUPS[2].label.toUpperCase()}
            </p>
            <div className="flex flex-wrap gap-2">
              {SKILL_GROUPS[2].skills.map((skill, i) => (
                <SkillBadge key={skill} skill={skill} style={SKILL_GROUPS[2].style} delay={i * 0.05} />
              ))}
            </div>
          </motion.div>

          {/* Right column: Databases + Languages stacked, span 5 */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <motion.div
              className="rounded-3xl p-8 space-y-5"
              style={{ backgroundColor: SKILL_GROUPS[3].style.bg }}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.2 }}
            >
              <p
                className="font-mono font-bold tracking-widest"
                style={{ fontSize: '0.68rem', letterSpacing: '0.2em', color: SKILL_GROUPS[3].style.labelColor, fontFamily: 'var(--font-mono)' }}
              >
                {SKILL_GROUPS[3].label.toUpperCase()}
              </p>
              <div className="flex flex-wrap gap-2">
                {SKILL_GROUPS[3].skills.map((skill, i) => (
                  <SkillBadge key={skill} skill={skill} style={SKILL_GROUPS[3].style} delay={i * 0.05} />
                ))}
              </div>
            </motion.div>

            <motion.div
              className="rounded-3xl p-8 space-y-5"
              style={{ backgroundColor: SKILL_GROUPS[4].style.bg, border: `1px solid ${SKILL_GROUPS[4].style.border}` }}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.25 }}
            >
              <p
                className="font-mono font-bold tracking-widest"
                style={{ fontSize: '0.68rem', letterSpacing: '0.2em', color: SKILL_GROUPS[4].style.labelColor, fontFamily: 'var(--font-mono)' }}
              >
                {SKILL_GROUPS[4].label.toUpperCase()}
              </p>
              <div className="flex flex-wrap gap-2">
                {SKILL_GROUPS[4].skills.map((skill, i) => (
                  <SkillBadge key={skill} skill={skill} style={SKILL_GROUPS[4].style} delay={i * 0.05} />
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* ML Fundamentals row */}
        <motion.div
          className="mt-6 rounded-3xl p-6"
          style={{
            backgroundColor: 'rgba(240, 165, 0, 0.12)',
            border: '1px solid rgba(240, 165, 0, 0.25)',
          }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex flex-wrap items-center gap-3">
            <span
              className="font-mono font-bold tracking-widest text-turmeric mr-2"
              style={{ fontSize: '0.68rem', letterSpacing: '0.18em', fontFamily: 'var(--font-mono)' }}
            >
              ML FUNDAMENTALS ·
            </span>
            {['Scikit-learn', 'NumPy', 'Pandas', 'TensorFlow', 'Transformer Architectures', 'ETL Pipelines', 'RBAC', 'JWT', 'OAuth2', 'pytest', 'Jest'].map((skill) => (
              <span
                key={skill}
                className="inline-block px-3 py-1 rounded-lg font-mono text-turmeric"
                style={{
                  fontSize: '0.7rem',
                  backgroundColor: 'rgba(240, 165, 0, 0.1)',
                  border: '1px solid rgba(240, 165, 0, 0.2)',
                  fontFamily: 'var(--font-mono)',
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}