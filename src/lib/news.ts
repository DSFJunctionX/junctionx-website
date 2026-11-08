import { getCollection, type CollectionEntry } from 'astro:content';
import { NEWS_CATEGORIES, type NewsCategory } from '../data/news-categories';

export type NewsEntry = CollectionEntry<'news'>;
export type NewsSource = NewsEntry['data']['sources'][number];

/**
 * News articles, newest first.
 * Drafts are included only in development (`npm run dev`), never in the build.
 */
export async function getNews(): Promise<NewsEntry[]> {
  const entries = await getCollection('news', ({ data }) => import.meta.env.DEV || !data.draft);
  return entries.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

/** Categories that have at least one article, in the order defined in news-categories.ts. */
export function usedCategories(entries: NewsEntry[]) {
  const used = new Set<NewsCategory>(entries.map((entry) => entry.data.category));
  return NEWS_CATEGORIES.filter((category) => used.has(category.label));
}

/** Groups entries (already sorted newest first) by publication year. */
export function groupByYear(entries: NewsEntry[]): { year: number; entries: NewsEntry[] }[] {
  const groups: { year: number; entries: NewsEntry[] }[] = [];
  for (const entry of entries) {
    const year = entry.data.pubDate.getUTCFullYear();
    const group = groups.at(-1);
    if (group?.year === year) group.entries.push(entry);
    else groups.push({ year, entries: [entry] });
  }
  return groups;
}

/** Distinct publishers of an article's sources, e.g. ["Técnico DEI", "Técnico"]. */
export function publishers(entry: NewsEntry): string[] {
  return [...new Set(entry.data.sources.map((source) => source.publisher))];
}

/** Joins names as readable English, e.g. "RTP Antena 1, Técnico DEI and Técnico". */
export function listFormat(items: string[]): string {
  return new Intl.ListFormat('en-GB', { style: 'long', type: 'conjunction' }).format(items);
}

/** Formats a date as e.g. "15 January 2027". Dates are treated as UTC to avoid off-by-one days. */
export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });
}

/** ISO date (YYYY-MM-DD) for <time datetime>. */
export function isoDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}
