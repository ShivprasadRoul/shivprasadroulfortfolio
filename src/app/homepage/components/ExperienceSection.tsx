'use client';

import React from 'react';
import { motion } from 'framer-motion';
import MadhubaniDivider from '@/components/MadhubaniDivider';

// Corner ornament for section heading
function CornerBracket({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-5 h-5 ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M2,2 L2,12 M2,2 L12,2" />
    </svg>
  );
}

const EXPERIENCES = [
  {
    company: 'Entropik Technologies Pvt. Ltd.',
    role: 'Backend Engineer — GenAI & Agentic Systems',
    location: 'Chennai, India',
    period: 'Nov 2024 – Present',
    isCurrent: true,
    bullets: [
      'Led end-to-end backend development of a real-time agentic AI moderation platform using Python and FastAPI — API design, async processing, prompt orchestration, AWS deployment.',
      'Integrated LangChain for LLM orchestration and ElevenLabs for voice-based AI interactions.',
      'Designed and implemented an AI Moderator feature: prompt design, backend integration, structured LLM response handling for enterprise clients.',
      'Built cloud data pipelines using AWS S3, DynamoDB, and CloudFront.',
      'Implemented async background workflows with retries, idempotency, and graceful failure handling.',
    ],
  },
  {
    company: 'Infoware India',
    role: 'Backend Engineer — RAG Platform',
    location: 'Remote',
    period: 'Aug 2024 – Nov 2024',
    isCurrent: false,
    bullets: [
      'Designed and delivered a full RAG platform for Kool.ai — 10,000+ enterprise documents ingested.',
      'Built scalable ETL and document ingestion pipelines using LangChain and QdrantDB.',
      'Integrated RAG pipeline with WhatsApp and a voice-based LLM call agent.',
      'Implemented short-term and long-term memory layers for conversational continuity.',
    ],
  },
];

const PROJECTS = [
  {
    title: 'AI Meeting Assistant Backend',
    year: '2024',
    description: 'REST API for meeting summarization — 500MB+ uploads via AWS S3 presigned URLs, Celery + Redis async processing, Whisper transcription + GPT-4 summarization, Docker + nginx + ECS auto-scaling.',
    techStack: ['Python', 'FastAPI', 'PostgreSQL', 'pgvector', 'Celery', 'AWS', 'Docker'],
    isWinner: true,
    winnerLabel: '🏆 Hack NITR · MongoDB Track',
    githubUrl: 'https://github.com/ShivprasadRoul',
  },
  {
    title: 'Farm Credit Scoring API',
    year: '2024',
    description: 'Secure REST API with RBAC, JWT auth, Swagger/OpenAPI docs. Integrated SoilGrid and OpenWeatherMap APIs — reduced external API calls by 80%. Optimised MongoDB aggregations and geospatial queries.',
    techStack: ['Node.js', 'Express.js', 'MongoDB', 'REST', 'JWT'],
    isWinner: false,
    githubUrl: 'https://github.com/ShivprasadRoul',
  },
  {
    title: 'Healthcare Chatbot Backend',
    year: '2024',
    description: 'Real-time chat API with WebSocket + GPT for AI-powered diagnosis suggestions. Appointment booking with calendar sync, SendGrid mailer, and schedule conflict resolution.',
    techStack: ['Node.js', 'WebSocket', 'GPT API', 'PostgreSQL'],
    isWinner: false,
    githubUrl: 'https://github.com/ShivprasadRoul',
  },
  {
    title: 'Railway Track Health Monitoring API',
    year: '2024',
    description: 'Flask REST API for track health prediction via vibration sensor data — 1M+ entries/day. Secured with JWT, Flask-Limiter; IoT ingestion with Pydantic validation and retry logic.',
    techStack: ['Flask', 'JWT', 'IoT', 'Pydantic', 'Python'],
    isWinner: true,
    winnerLabel: '🏆 Hack4Bengal · Callchimp SDK',
    githubUrl: 'https://github.com/ShivprasadRoul',
  },
];

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative py-28 overflow-hidden"
      style={{ backgroundColor: 'var(--ink)' }}
      aria-label="Work experience and projects"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Experience Timeline */}
        <div className="mb-24">
          <motion.div
            className="mb-16 space-y-3"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p
              className="font-mono text-saffron tracking-widest"
              style={{ fontSize: '0.72rem', letterSpacing: '0.18em', fontFamily: 'var(--font-mono)' }}
            >
              WORK HISTORY
            </p>
            <h2
              className="section-heading text-ink-text"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Experience.
            </h2>
          </motion.div>

          {/* Timeline */}
          <div className="relative timeline-line pl-10 space-y-16">
            {EXPERIENCES.map((exp, idx) => (
              <motion.article
                key={exp.company}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: idx * 0.12, ease: [0.4, 0, 0.2, 1] }}
                className="relative"
                aria-label={`${exp.role} at ${exp.company}`}
              >
                {/* Timeline dot */}
                <div
                  className="absolute -left-[2.65rem] top-1.5 w-3 h-3 rounded-full border-2"
                  style={{
                    backgroundColor: 'var(--turmeric)',
                    borderColor: 'var(--turmeric)',
                    boxShadow: '0 0 0 4px rgba(240, 165, 0, 0.15)',
                  }}
                  aria-hidden="true"
                />

                <div className="space-y-4">
                  <div className="flex flex-wrap items-start gap-x-4 gap-y-1">
                    <h3
                      className="font-display font-semibold text-ink-text"
                      style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', letterSpacing: '-0.01em' }}
                    >
                      {exp.company}
                    </h3>
                    {exp.isCurrent && (
                      <span
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-mono"
                        style={{
                          fontSize: '0.65rem',
                          letterSpacing: '0.1em',
                          backgroundColor: 'rgba(61, 107, 79, 0.2)',
                          color: '#6bbf8a',
                          border: '1px solid rgba(61, 107, 79, 0.3)',
                          fontFamily: 'var(--font-mono)',
                        }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-leaf animate-pulse" />
                        CURRENT
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <span
                      className="font-body text-ink-text/70 font-medium"
                      style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem' }}
                    >
                      {exp.role}
                    </span>
                    <span className="text-saffron/40">·</span>
                    <span
                      className="font-mono text-ink-text/40"
                      style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem' }}
                    >
                      {exp.location}
                    </span>
                    <span className="text-saffron/40">·</span>
                    <span
                      className="font-mono text-turmeric/70"
                      style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem' }}
                    >
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-2.5 mt-2">
                    {exp.bullets.map((bullet, bi) => (
                      <li
                        key={bi}
                        className="flex items-start gap-3 text-ink-text/60 leading-relaxed"
                        style={{ fontFamily: 'var(--font-body)', fontSize: '0.92rem' }}
                      >
                        <span className="text-saffron mt-1.5 shrink-0 text-xs">▸</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Peacock divider
        <MadhubaniDivider variant="peacock" color="var(--saffron)" className="opacity-15 mb-24" /> */}

        {/* Projects Grid */}
        <div id="projects">
          <motion.div
            className="mb-16 space-y-3"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p
              className="font-mono text-saffron tracking-widest"
              style={{ fontSize: '0.72rem', letterSpacing: '0.18em', fontFamily: 'var(--font-mono)' }}
            >
              SELECTED WORK
            </p>
            <div className="flex items-center gap-4">
              <CornerBracket className="text-saffron" />
              <h2
                className="section-heading text-ink-text"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Projects.
              </h2>
              <CornerBracket className="text-saffron rotate-90" />
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {PROJECTS.map((project, idx) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: idx * 0.1, ease: [0.4, 0, 0.2, 1] }}
                className="group rounded-3xl p-8 flex flex-col gap-5 card-hover"
                style={{
                  backgroundColor: 'var(--ivory)',
                  border: '2px solid transparent',
                  transition: 'border-color 250ms ease, transform 250ms ease',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'var(--saffron)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'transparent';
                }}
                aria-label={`Project: ${project.title}`}
              >
                {/* Header */}
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    {project.isWinner && project.winnerLabel && (
                      <span
                        className="inline-block px-3 py-1 rounded-full font-mono mb-2"
                        style={{
                          fontSize: '0.65rem',
                          letterSpacing: '0.08em',
                          backgroundColor: 'rgba(240, 165, 0, 0.12)',
                          color: 'var(--turmeric)',
                          border: '1px solid rgba(240, 165, 0, 0.25)',
                          fontFamily: 'var(--font-mono)',
                        }}
                      >
                        {project.winnerLabel}
                      </span>
                    )}
                    <h3
                      className="font-display font-semibold text-ink"
                      style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', lineHeight: 1.2 }}
                    >
                      {project.title}
                    </h3>
                    <span
                      className="font-mono text-ink/40"
                      style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem' }}
                    >
                      {project.year}
                    </span>
                  </div>
                  {/* GitHub link */}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} on GitHub`}
                      className="shrink-0 w-9 h-9 rounded-full border border-indigo/20 flex items-center justify-center text-ink/50 hover:text-saffron hover:border-saffron transition-all"
                    >
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
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                      </svg>
                    </a>
                  )}
                </div>

                {/* Description */}
                <p
                  className="text-ink/60 leading-relaxed"
                  style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem' }}
                >
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="inline-block px-2.5 py-1 rounded-md font-mono text-indigo"
                      style={{
                        fontSize: '0.68rem',
                        letterSpacing: '0.04em',
                        backgroundColor: 'rgba(45, 58, 140, 0.07)',
                        border: '1px solid rgba(45, 58, 140, 0.15)',
                        fontFamily: 'var(--font-mono)',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}