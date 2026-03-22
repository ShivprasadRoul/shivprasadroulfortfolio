import React from 'react';
import Image from 'next/image';
import type { BlogPost } from '@/types';

interface BlogCardProps {
  post: BlogPost;
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <a
      href={post.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Read blog post: ${post.title}`}
      className="group block bg-ivory rounded-2xl border border-indigo/10 overflow-hidden card-hover hover:border-saffron/60 focus-visible:outline-saffron"
    >
      {/* Cover image 16:9 */}
      {post.coverImage?.url ? (
        <div className="relative w-full overflow-hidden" style={{ paddingBottom: '56.25%' }}>
          <Image
            src={post.coverImage.url}
            alt={`Cover image for blog post: ${post.title}`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="lazy"
          />
        </div>
      ) : (
        <div
          className="w-full rounded-lg mb-0 flex items-center justify-center"
          style={{ paddingBottom: '56.25%', position: 'relative', background: 'linear-gradient(135deg, var(--indigo), var(--ink))' }}
        >
          <span
            className="absolute inset-0 flex items-center justify-center font-mono text-xs opacity-60 tracking-widest uppercase"
            style={{ color: 'var(--clay)' }}
          >
            {post.tags?.[0]?.name ?? 'Writing'}
          </span>
        </div>
      )}

      {/* Content */}
      <div className="p-6 flex flex-col gap-4">
        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag.name}
                className="inline-block px-2 py-0.5 rounded text-leaf border border-leaf/30 bg-leaf/8 font-mono text-[0.7rem] tracking-wide"
                style={{ backgroundColor: 'rgba(61, 107, 79, 0.08)' }}
              >
                {tag.name}
              </span>
            ))}
          </div>
        )}

        {/* Title */}
        <h3
          className="font-display font-semibold leading-snug text-ivory-text group-hover:text-saffron transition-colors duration-200"
          style={{ fontSize: '1.2rem', fontFamily: 'var(--font-display)' }}
        >
          {post.title}
        </h3>

        {/* Brief */}
        {post.brief && (
          <p
            className="text-sm leading-relaxed text-ivory-text/60 font-body line-clamp-2"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            {post.brief}
          </p>
        )}

        {/* Footer meta */}
        <div className="flex items-center gap-4 mt-auto pt-2 border-t border-indigo/8">
          <span
            className="flex items-center gap-1.5 text-xs text-ivory-text/50 font-mono"
            aria-label={`${post.readTimeInMinutes} minute read`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            {post.readTimeInMinutes} min
          </span>
          <span
            className="flex items-center gap-1.5 text-xs text-ivory-text/50 font-mono"
            aria-label={`Published on ${formatDate(post.publishedAt)}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            {formatDate(post.publishedAt)}
          </span>
        </div>
      </div>
    </a>
  );
}