import type { BlogPost } from '@/types';

const HASHNODE_ENDPOINT = 'https://gql.hashnode.com';

const HASHNODE_QUERY = `
  query GetPosts {
    publication(host: "shivprasadroul.hashnode.dev") {
      posts(first: 6) {
        edges {
          node {
            title
            brief
            slug
            publishedAt
            coverImage { url }
            tags { name }
            url
            readTimeInMinutes
          }
        }
      }
    }
  }
`;

const FALLBACK_POSTS: BlogPost[] = [
  {
    title: 'My RAG Pipeline Keeps Failing: Here\'s How I\'m Fixing It',
    brief: 'A deep dive into the most common failure modes in production RAG pipelines — chunking strategies, embedding drift, retrieval quality — and the systematic fixes that actually work.',
    slug: 'my-rag-pipeline-keeps-failing',
    publishedAt: '2025-08-15T00:00:00.000Z',
    coverImage: {
      url: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80&auto=format&fit=crop',
    },
    tags: [{ name: 'RAG' }, { name: 'LLM' }, { name: 'Python' }],
    url: 'https://shivprasadroul.hashnode.dev/my-rag-pipeline-keeps-failing',
    readTimeInMinutes: 14,
  },
  {
    title: 'Building a Production-Grade Async OpenAI Status Tracker',
    brief: 'How I built a resilient async system to track OpenAI API health, handle rate limits gracefully, and keep agentic workflows running without interruption.',
    slug: 'async-openai-status-tracker',
    publishedAt: '2026-02-10T00:00:00.000Z',
    coverImage: {
      url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80&auto=format&fit=crop',
    },
    tags: [{ name: 'FastAPI' }, { name: 'OpenAI' }, { name: 'Async' }],
    url: 'https://shivprasadroul.hashnode.dev/async-openai-status-tracker',
    readTimeInMinutes: 11,
  },
  {
    title: 'Understanding HTTP from First Principles',
    brief: 'Strip away the frameworks and go back to basics. What actually happens when a client sends a request? How does the server parse it? A first-principles breakdown for backend engineers.',
    slug: 'understanding-http-from-first-principles',
    publishedAt: '2026-01-20T00:00:00.000Z',
    coverImage: {
      url: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80&auto=format&fit=crop',
    },
    tags: [{ name: 'HTTP' }, { name: 'Backend' }, { name: 'Networking' }],
    url: 'https://shivprasadroul.hashnode.dev/understanding-http-from-first-principles',
    readTimeInMinutes: 19,
  },
];

export async function fetchBlogPosts(): Promise<BlogPost[]> {
  try {
    const res = await fetch(HASHNODE_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query: HASHNODE_QUERY }),
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      console.warn('Hashnode API returned non-OK status, using fallback posts.');
      return FALLBACK_POSTS;
    }

    const json = await res.json();

    if (json.errors || !json.data?.publication?.posts?.edges) {
      console.warn('Hashnode API returned errors or empty data, using fallback posts.');
      return FALLBACK_POSTS;
    }

    const posts: BlogPost[] = json.data.publication.posts.edges.map(
      (edge: { node: BlogPost }) => edge.node
    );

    return posts.length > 0 ? posts : FALLBACK_POSTS;
  } catch (error) {
    console.warn('Failed to fetch from Hashnode, using fallback posts.', error);
    return FALLBACK_POSTS;
  }
}