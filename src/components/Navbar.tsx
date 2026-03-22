'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      >
        <div
          className={`mx-4 md:mx-8 mt-4 rounded-2xl transition-all duration-300 ${
            scrolled
              ? 'bg-ivory/90 backdrop-blur-md shadow-sm border border-indigo/10'
              : 'bg-transparent'
          }`}
        >
          <div className="flex items-center justify-between px-6 py-4">
            {/* Logo */}
            <a
              href="#"
              aria-label="Shivprasad Roul — back to top"
              className="flex items-center gap-2 group"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <div className="flex items-center gap-0">
                <span
                  className="font-display font-bold text-2xl text-ink tracking-tight"
                  style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.02em' }}
                >
                  S
                </span>
                <span className="text-saffron font-mono text-xl font-bold">·</span>
                <span
                  className="font-display font-bold text-2xl text-ink tracking-tight"
                  style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.02em' }}
                >
                  R
                </span>
              </div>
            </a>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="label-text text-ink/60 hover:text-saffron transition-colors duration-200 font-body font-medium"
                  style={{ fontSize: '0.75rem', letterSpacing: '0.1em' }}
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="https://drive.google.com/file/d/1AZ3dKBeEmJDBtaYbhnXGN4RmkBjCyLi-/view?usp=sharing"
                download
                aria-label="Download Shivprasad Roul's CV"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-indigo/30 text-ink font-body font-medium text-sm hover:border-saffron hover:text-saffron transition-all duration-200"
                style={{ fontSize: '0.8rem', letterSpacing: '0.05em' }}
              >
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
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download CV
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2 rounded-lg text-ink hover:text-saffron transition-colors"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileOpen}
            >
              <motion.div
                animate={mobileOpen ? 'open' : 'closed'}
                className="flex flex-col gap-1.5 w-6"
              >
                <motion.span
                  variants={{
                    open: { rotate: 45, y: 8 },
                    closed: { rotate: 0, y: 0 },
                  }}
                  transition={{ duration: 0.2 }}
                  className="block h-0.5 w-6 bg-current rounded-full"
                />
                <motion.span
                  variants={{
                    open: { opacity: 0, x: -8 },
                    closed: { opacity: 1, x: 0 },
                  }}
                  transition={{ duration: 0.2 }}
                  className="block h-0.5 w-6 bg-current rounded-full"
                />
                <motion.span
                  variants={{
                    open: { rotate: -45, y: -8 },
                    closed: { rotate: 0, y: 0 },
                  }}
                  transition={{ duration: 0.2 }}
                  className="block h-0.5 w-6 bg-current rounded-full"
                />
              </motion.div>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="fixed inset-0 z-40 bg-ivory flex flex-col"
          >
            <div className="flex-1 flex flex-col items-center justify-center gap-8 p-8">
              {NAV_LINKS.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.3 }}
                  onClick={() => handleNavClick(link.href)}
                  className="font-display font-semibold text-4xl text-ink hover:text-saffron transition-colors"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.07, duration: 0.3 }}
                href="https://drive.google.com/file/d/1AZ3dKBeEmJDBtaYbhnXGN4RmkBjCyLi-/view?usp=sharing"
                download
                aria-label="Download Shivprasad Roul's CV"
                className="mt-4 px-8 py-4 rounded-full border-2 border-saffron text-saffron font-body font-semibold text-lg hover:bg-saffron hover:text-ivory transition-all duration-200"
                onClick={() => setMobileOpen(false)}
              >
                Download CV
              </motion.a>
            </div>
            {/* Close button */}
            <button
              className="absolute top-6 right-6 p-2 text-ink hover:text-saffron"
              onClick={() => setMobileOpen(false)}
              aria-label="Close navigation menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}