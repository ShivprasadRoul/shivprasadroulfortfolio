import React from 'react';
import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, DM_Sans, JetBrains_Mono } from 'next/font/google';
import '../styles/tailwind.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'Shivprasad Roul — AI Engineer',
  description: 'AI Engineer building GenAI backend systems, RAG pipelines, and agentic workflows. Two-time national hackathon winner.',
  openGraph: {
    title: 'Shivprasad Roul — AI Engineer',
    description: 'AI Engineer building GenAI backend systems, RAG pipelines, and agentic workflows.',
    url: 'https://shivprasadroul.dev',
    siteName: 'Shivprasad Roul',
    images: [
      {
        url: '/assets/images/app_logo.png',
        width: 1200,
        height: 630,
        alt: 'Shivprasad Roul — AI Engineer portfolio',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shivprasad Roul — AI Engineer',
    description: 'AI Engineer building GenAI backend systems, RAG pipelines, and agentic workflows.',
    images: ['/assets/images/app_logo.png'],
  },
  icons: {
    icon: [{ url: '/favicon.ico', type: 'image/x-icon' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body>
        {children}
</body>
    </html>
  );
}