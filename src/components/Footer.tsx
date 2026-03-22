import React from 'react';

export default function Footer() {
  return (
    <footer
      className="relative py-8 overflow-hidden"
      style={{ backgroundColor: 'var(--ink)' }}
      aria-label="Site footer"
    >
      {/* Madhubani dot-pattern top border */}
      <div
        className="absolute top-0 left-0 right-0 h-px overflow-hidden"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 1200 4"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          {Array.from({ length: 60 })?.map((_, i) => (
            <circle
              key={i}
              cx={i * 20 + 10}
              cy="2"
              r="1.5"
              fill="#E8622A"
              opacity="0.08"
            />
          ))}
        </svg>
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left: copyright */}
          <p
            className="font-mono text-ink-text/30"
            style={{ fontSize: '0.72rem', letterSpacing: '0.08em', fontFamily: 'var(--font-mono)' }}
          >
            © 2026 Shivprasad Roul
          </p>

          {/* Centre: SR logo */}
          <div className="flex items-center gap-0" aria-label="Shivprasad Roul">
            <span
              className="font-display font-bold text-ink-text/40"
              style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem' }}
            >
              S
            </span>
            <span className="text-saffron/40 font-mono text-sm font-bold">·</span>
            <span
              className="font-display font-bold text-ink-text/40"
              style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem' }}
            >
              R
            </span>
          </div>

          {/* Right: built with */}
          <p
            className="font-mono text-ink-text/25"
            style={{ fontSize: '0.68rem', letterSpacing: '0.08em', fontFamily: 'var(--font-mono)' }}
          >
            Built with Next.js · Designed with ♥ in India
          </p>
        </div>
      </div>
    </footer>
  );
}