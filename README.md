# JunctionX Lisbon website

The permanent website of JunctionX Lisbon: <https://lisbon.hackjunction.com>

It is a static [Astro](https://astro.build) site. Pages are built into `docs/` and deployed to
GitHub Pages by `.github/workflows/deploy.yml` on every push to `main`.

## Commands

| Command           | Action                                              |
| :---------------- | :-------------------------------------------------- |
| `npm install`     | Install dependencies                                |
| `npm run dev`     | Start the dev server at `localhost:4321` (drafts visible) |
| `npm run build`   | Build the production site into `./docs/`            |
| `npm run preview` | Preview the production build locally                |

Node 22.12 or newer is required. The build downloads the site's fonts (Inter and JetBrains Mono)
so they can be self-hosted, so it needs an internet connection.

## Structure

```text
src/
├── pages/
│   ├── index.astro                 Homepage (/)
│   ├── news/index.astro            News feed (/news/)
│   ├── news/[slug].astro           One page per article (/news/<file-name>/)
│   ├── news/category/[category].astro  Category filters (/news/category/<slug>/)
│   ├── past-events/index.astro     Past events overview (/past-events/)
│   ├── past-events/2025/           JunctionX Lisbon 2025, the founding edition
│   ├── past-events/2026/           JunctionX Lisbon 2026, the second edition, and its winners page
│   ├── privacy/index.astro         Privacy policy (/privacy/)
│   └── 404.astro
├── layouts/
│   ├── SiteLayout.astro            Site header, footer and metadata for every page
│   └── EditionLayout.astro         Shared frame for edition archives (hero, section menu, chapter links)
├── components/
│   ├── SiteHead / SiteHeader / SiteFooter / PageHeader
│   ├── EventCard.astro, NewsCard.astro, NewsFeed.astro
│   ├── edition/                    Archive design system: hero, sections, challenges, partners,
│   │                               programme, team, FAQ, winners, video, resources, chapter links
│   └── archive-2026/               The original 2026 website sections (preserved unchanged)
├── content/news/                   News articles (Markdown)
├── content.config.ts               News schema
├── data/
│   ├── site.ts                     Name, contact email, navigation, social links
│   ├── events.ts                   List of editions (dates, labels, colours, summaries)
│   ├── editions/2025.ts            Content of the 2025 archive, recovered from the 2025 website
│   ├── editions/2026.ts            Winners and resources added around the original 2026 website
│   └── news-categories.ts          News categories
└── styles/
    ├── global.css                  Styles for the site (in the "site" cascade layer)
    └── archive-2026.css            Original 2026 styles, scoped to the 2026 archive
public/
├── assets/                         Images, PDFs and video, served from /assets/...
│   └── 2025/                       2025 files whose original URL is now used by a 2026 file, plus display copies
├── docs/                           2025 challenge briefs, kept at their original URLs (/docs/*.pdf)
└── *.html                          Redirects from the original 2025 pages (see below)
```

### Edition archives

Both editions use `EditionLayout` and the components in `src/components/edition/`, so they share
the site navigation, footer, typography and layout. Each edition keeps its own identity through
`theme` (accent and background colours from its original website) in `src/data/events.ts`, and
its own logos, photographs and materials.

- **2025** was rebuilt from the original 2025 website (the `website-2025` branch). Its content
  lives in `src/data/editions/2025.ts`. Results come from external coverage, cited on the page,
  because the original site was last updated before the event.
- **2026** wraps the original 2026 website, whose sections (`src/components/archive-2026/`) and
  stylesheet are preserved. `archive-2026.css` is scoped to the `.archive-2026` wrapper with
  `:where()`, and `global.css` sits in a lower cascade layer, so neither design can affect the
  other.

### Old URLs

GitHub Pages is static, so old addresses are kept working with small redirect pages:

| Old URL | Now |
| :-- | :-- |
| `/winners-2026/` | `/past-events/2026/winners/` (`redirects` in `astro.config.mjs`) |
| `/privacy/privacy/` | `/privacy/` (`redirects` in `astro.config.mjs`) |
| `/challenges.html`, `/agenda.html`, `/faq.html`, `/become_partner.html` (2025 website) | the matching section of `/past-events/2025/` (static files in `public/`) |
| `/#challenges`, `/#faq`, ... (2026 homepage) and `/#partners` (2025 homepage) | forwarded to the right archive by a script on the homepage |

2025 images (`/assets/albatroz.png`, `/assets/glintt.png`, ...), the challenge briefs
(`/docs/acacia.pdf`, `/docs/contextbridge.pdf`) and `/assets/video.mp4` are served at their original
URLs.

## Publishing a news article

1. Copy `src/content/news/_template.md` to a new file in `src/content/news/`. The file name becomes
   the URL: `call-for-organisers-2027.md` is published at `/news/call-for-organisers-2027/`.
2. Fill in the frontmatter (title, description, publication date, category) and write the article
   in Markdown below it.
3. Run `npm run dev` to preview it. Remove `draft: true` (or set it to `false`) to publish.
4. Commit and push to `main`.

No component needs editing: the article appears automatically on the News page, in its category
and, if it is among the three most recent, on the homepage.

**Categories:** Announcements, Event Recaps, Projects, Community, International
(defined in `src/data/news-categories.ts`).

**Press coverage:** to summarise an article published elsewhere, set `kind: "press"`, use the
original publication date as `pubDate`, write the summary in your own words, and list the
original under `sources` (publisher, headline, URL, date, language). The article is labelled as
press coverage and always links to its sources. Link one language version of each publication,
not both.

**Images:** put them in `public/assets/news/` and reference them as `/assets/news/<file>`. Only use
photos that JunctionX Lisbon owns or has permission to reuse.

## Archiving a new edition

1. Add the edition to `src/data/events.ts` (dates, edition label, summary, facts, colours and,
   ideally, a photo). It then appears on the Past Events page, on the homepage and in the
   previous edition's "Next chapter" link.
2. Create `src/pages/past-events/<year>/index.astro` using `EditionLayout` and the components in
   `src/components/edition/` (see the 2025 page for a complete example), with the edition's content
   in `src/data/editions/<year>.ts`.
3. Put the edition's images and documents in `public/assets/<year>/`.
