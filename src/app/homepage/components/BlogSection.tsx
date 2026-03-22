import React from 'react';
import { fetchBlogPosts } from '@/lib/hashnode';
import BlogCard from '@/components/BlogCard';

// Corner ornament
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

export default async function BlogSection() {
  const posts = await fetchBlogPosts();

  return (
    <section
      id="blog"
      className="relative py-28 grain-overlay overflow-hidden"
      style={{ backgroundColor: 'var(--ivory)' }}
      aria-label="Blog posts by Shivprasad Roul"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-6 space-y-3">
          <p
            className="font-mono text-saffron tracking-widest"
            style={{ fontSize: '0.72rem', letterSpacing: '0.18em', fontFamily: 'var(--font-mono)' }}
          >
            WRITING
          </p>
          <div className="flex items-center gap-4">
            <CornerBracket className="text-saffron" />
            <h2
              className="section-heading text-ink"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              From My Desk.
            </h2>
            <CornerBracket className="text-saffron rotate-90" />
          </div>
        </div>
        <p
          className="text-ink/55 mb-16 max-w-xl"
          style={{ fontFamily: 'var(--font-body)', fontSize: '1.02rem', lineHeight: 1.7 }}
        >
          Writing about GenAI, backend systems, and the craft of building.
        </p>

        {/* Blog grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.slice(0, 6).map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>

        {/* View all CTA */}
        <div className="mt-14 flex justify-center">
          <a
            href="https://shivprasadroul.hashnode.dev/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View all blog posts on Hashnode"
            className="group inline-flex items-center gap-3 font-body font-semibold text-saffron hover:text-ink transition-colors duration-200"
            style={{ fontFamily: 'var(--font-body)', fontSize: '1rem' }}
          >
            View All Posts on Hashnode
            <span className="inline-block transition-transform duration-200 group-hover:translate-x-1.5">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}