import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CursorFollower from '@/components/CursorFollower';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import BlogSection from './components/BlogSection';
import ContactSection from './components/ContactSection';

export const metadata: Metadata = {
  title: 'Shivprasad Roul — AI Engineer',
  description:
    'AI Engineer building GenAI backend systems, RAG pipelines, and agentic workflows. Two-time national hackathon winner based in Chennai, India.',
  alternates: {
    canonical: '/homepage',
  },
};

// Structured data
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': 'https://shivprasadroul.dev/#person',
      name: 'Shivprasad Roul',
      jobTitle: 'AI Engineer',
      description:
        'AI Engineer with production experience in Generative AI backend systems, RAG pipelines, and LLM-powered agent workflows.',
      email: 'roulshivprasad@gmail.com',
      telephone: '+91 9727577448',
      url: 'https://shivprasadroul.dev',
      sameAs: [
        'https://github.com/ShivprasadRoul',
        'https://www.linkedin.com/in/shivprasad-roul-a52a18201/',
        'https://shivprasadroul.hashnode.dev/',
      ],
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Chennai',
        addressCountry: 'IN',
      },
      alumniOf: {
        '@type': 'CollegeOrUniversity',
        name: 'KIIT University',
        address: { '@type': 'PostalAddress', addressLocality: 'Bhubaneswar', addressRegion: 'Odisha', addressCountry: 'IN' },
      },
    },
    {
      '@type': 'WebPage',
      '@id': 'https://shivprasadroul.dev/homepage',
      name: 'Shivprasad Roul — AI Engineer Portfolio',
      description: 'Portfolio of Shivprasad Roul, AI Engineer specializing in GenAI backend systems.',
      url: 'https://shivprasadroul.dev/homepage',
      about: { '@id': 'https://shivprasadroul.dev/#person' },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Custom cursor (desktop only) */}
      <CursorFollower />

      {/* Fixed navigation */}
      <Navbar />

      {/* Main content */}
      <main id="main-content" aria-label="Shivprasad Roul portfolio">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <BlogSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}