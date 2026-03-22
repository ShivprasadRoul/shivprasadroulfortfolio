export interface BlogPost {
  title: string;
  brief: string;
  slug: string;
  publishedAt: string;
  coverImage: {
    url: string;
  } | null;
  tags: Array<{ name: string }>;
  url: string;
  readTimeInMinutes: number;
}

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  isWinner?: boolean;
  winnerLabel?: string;
  year: string;
}

export interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  isCurrent?: boolean;
  bullets: string[];
}

export interface Skill {
  name: string;
  category: 'genai' | 'backend' | 'cloud' | 'databases' | 'languages';
}

export interface SkillGroup {
  label: string;
  category: Skill['category'];
  skills: string[];
}

export interface Stat {
  value: string;
  label: string;
}