// Shared content types for edition archive pages (src/components/edition/).

/** "light" logos sit on a light tile; "dark" (white or pale) logos sit on a dark tile. */
export interface Logo {
  src: string;
  tone: 'light' | 'dark';
}

export interface Challenge {
  title: string;
  partner: string;
  logo?: Logo;
  /** May contain inline <em>. */
  summary: string;
  /** Paragraphs of the full brief; may contain inline <em>. */
  brief?: string[];
  briefList?: string[];
  briefOutro?: string;
  pdf?: string;
}

export interface Partner {
  name: string;
  logo?: Logo;
  description?: string;
  url?: string;
}

export interface ProgrammeDay {
  weekday: string;
  /** ISO date, e.g. 2025-10-18. */
  date: string;
  label: string;
  slots: { time: string; title: string; href?: string }[];
}

export interface TeamMember {
  name: string;
  /** Leave out when the role is not documented; never guess one. */
  role?: string;
  linkedin?: string;
  image?: string;
}

export interface FaqItem {
  question: string;
  /** May contain inline <a>. */
  answer: string;
}

export interface Resource {
  label: string;
  href: string;
  type: 'PDF' | 'External' | 'News' | 'Page';
}

export interface WinnerSource {
  publisher: string;
  title: string;
  url: string;
  date?: string;
}
