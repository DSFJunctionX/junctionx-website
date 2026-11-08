// News categories. The `category` field of every article must be one of these
// labels. Each category used by at least one article gets a filter page at
// /news/category/<slug>/.

export const NEWS_CATEGORIES = [
  { label: 'Announcements', slug: 'announcements' },
  { label: 'Event Recaps', slug: 'event-recaps' },
  { label: 'Projects', slug: 'projects' },
  { label: 'Community', slug: 'community' },
  { label: 'International', slug: 'international' },
] as const;

export type NewsCategory = (typeof NEWS_CATEGORIES)[number]['label'];

export const CATEGORY_LABELS = NEWS_CATEGORIES.map((c) => c.label) as [NewsCategory, ...NewsCategory[]];

export const categorySlug = (label: NewsCategory): string =>
  NEWS_CATEGORIES.find((c) => c.label === label)?.slug ?? label.toLowerCase().replace(/\s+/g, '-');
