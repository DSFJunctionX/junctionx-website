import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { CATEGORY_LABELS } from './data/news-categories';

// News articles live in src/content/news/ as Markdown (.md) or MDX (.mdx).
// The file name becomes the URL: src/content/news/my-article.md -> /news/my-article/
// Files starting with an underscore (such as _template.md) are ignored.

/** An external publication an article is based on or refers to. */
const source = z.object({
  /** Institution or outlet, e.g. "Técnico – Universidade de Lisboa". */
  publisher: z.string(),
  /** The original headline, in its original language. */
  title: z.string(),
  url: z.url(),
  /** Original publication date, when the source shows one. */
  date: z.coerce.date().optional(),
  language: z.enum(['en', 'pt']).default('en'),
  format: z.enum(['article', 'event', 'audio', 'video', 'gallery']).default('article'),
});

const news = defineCollection({
  loader: glob({ base: './src/content/news', pattern: '**/[^_]*.{md,mdx}' }),
  schema: z
    .object({
      title: z.string(),
      /** One or two sentences, shown in the news feed and used as the meta description. */
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      category: z.enum(CATEGORY_LABELS),
      /**
       * "announcement": original news from the JunctionX Lisbon team (default).
       * "press": a JunctionX summary of external press coverage; must list its sources.
       */
      kind: z.enum(['announcement', 'press']).default('announcement'),
      /** Edition the article relates to, e.g. 2026. Links the article to that edition's archive. */
      edition: z.number().int().optional(),
      /** External publications, always shown with a link to the original. */
      sources: z.array(source).default([]),
      /** Path to an image in public/, e.g. "/assets/news/my-article.jpg". */
      heroImage: z.string().optional(),
      /** Describes the image for screen readers. Recommended whenever heroImage is set. */
      heroImageAlt: z.string().optional(),
      /** Drafts are visible in `npm run dev` only and are never published. */
      draft: z.boolean().default(false),
    })
    .refine((data) => data.kind !== 'press' || data.sources.length > 0, {
      message: 'Press coverage articles (kind: press) must list at least one source.',
      path: ['sources'],
    }),
});

export const collections = { news };
