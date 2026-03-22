'use client';

import { useState } from 'react';

interface GenerationResult {
  filename: string;
  status: string;
  error?: string;
}

interface GenerationResponse {
  message: string;
  results: GenerationResult[];
}

export default function GenerateArtPage() {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<GenerationResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    setLoading(true);
    setError(null);
    setResponse(null);

    try {
      const res = await fetch('/api/generate-art', { method: 'POST' });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || 'Generation failed');
      } else {
        setResponse(data);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Network error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center gap-8 p-8"
      style={{ backgroundColor: 'var(--ivory)', fontFamily: 'var(--font-body)' }}
    >
      <div className="max-w-xl w-full space-y-6">
        <div className="space-y-2">
          <p
            className="font-mono tracking-widest"
            style={{ fontSize: '0.72rem', letterSpacing: '0.18em', color: 'var(--saffron)' }}
          >
            ART GENERATOR
          </p>
          <h1
            className="text-4xl font-bold"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--ink)' }}
          >
            Generate Madhubani Art
          </h1>
          <p className="text-ink/60" style={{ fontSize: '0.95rem' }}>
            Generates 5 AI-created Madhubani-style PNG images using{' '}
            <code className="font-mono text-saffron">gpt-image-1</code> and saves them to{' '}
            <code className="font-mono text-indigo-600">/public/art/</code>.
          </p>
        </div>

        <div className="rounded-2xl border p-5 space-y-2" style={{ borderColor: 'rgba(45,58,140,0.12)', backgroundColor: 'rgba(45,58,140,0.03)' }}>
          <p className="font-mono text-xs text-ink/50 tracking-wider">IMAGES TO GENERATE</p>
          {['hero-lotus.png', 'about-fish.png', 'divider-peacock.png', 'divider-lotus-row.png', 'skills-border.png'].map((f) => (
            <div key={f} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--saffron)' }} />
              <span className="font-mono text-sm text-ink/70">{f}</span>
            </div>
          ))}
        </div>

        <button
          onClick={handleGenerate}
          disabled={loading}
          className="w-full py-4 rounded-2xl font-semibold transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed"
          style={{
            backgroundColor: 'var(--saffron)',
            color: 'var(--ivory)',
            fontSize: '0.95rem',
          }}
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Generating… this takes ~2–3 minutes
            </span>
          ) : (
            '🎨 Generate All 5 Images'
          )}
        </button>

        {error && (
          <div className="rounded-2xl p-4 border" style={{ borderColor: 'rgba(220,38,38,0.3)', backgroundColor: 'rgba(220,38,38,0.05)' }}>
            <p className="font-mono text-sm text-red-600">❌ {error}</p>
          </div>
        )}

        {response && (
          <div className="rounded-2xl p-5 border space-y-3" style={{ borderColor: 'rgba(61,107,79,0.3)', backgroundColor: 'rgba(61,107,79,0.05)' }}>
            <p className="font-semibold text-ink">{response.message}</p>
            <div className="space-y-1.5">
              {response.results?.map((r) => (
                <div key={r.filename} className="flex items-center gap-2 font-mono text-sm">
                  <span>{r.status === 'saved' ? '✅' : '❌'}</span>
                  <span className="text-ink/70">{r.filename}</span>
                  {r.error && <span className="text-ink/40 text-xs">({r.error})</span>}
                </div>
              ))}
            </div>
            {response.results?.every((r) => r.status === 'saved') && (
              <p className="text-sm text-green-700 font-medium pt-1">
                🎉 All images saved! Navigate back to the homepage to see them rendered.
              </p>
            )}
          </div>
        )}
      </div>
    </main>
  );
}
