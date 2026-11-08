// Archive of JunctionX Lisbon editions.
//
// Every edition gets an entry here and its own archive page under
// src/pages/past-events/<year>/. The Past Events page, the homepage and the
// edition pages (hero, chapter navigation) are generated from this list.
//
// Only add editions that actually took place, with verified details.

export interface EventImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface EventLink {
  href: string;
  label: string;
}

export interface PastEvent {
  /** Edition year, used for sorting and the archive URL. */
  year: number;
  /** e.g. "Founding Edition", "Second Edition". */
  editionLabel: string;
  title: string;
  /** Archive page for the edition. */
  href: string;
  /** ISO dates (YYYY-MM-DD), used for <time datetime> and sorting. */
  startDate: string;
  endDate: string;
  /** Human-readable dates, e.g. "10–11 October 2026". */
  dateLabel: string;
  location: string;
  venue: string;
  summary: string;
  /** Short facts shown on the event card. */
  facts: { label: string; value: string }[];
  /** Photo for the event card. Editions without their own photos get a typographic cover. */
  image?: EventImage;
  /** Logo shown on the typographic cover when there is no photo. */
  coverMark?: string;
  /** Extra links shown on the card, e.g. the winners page. */
  links?: EventLink[];
  /**
   * The edition's own visual identity, taken from its original website.
   * `accent` is used for small details (badges, rules); `background` tints the hero.
   */
  theme: { accent: string; background: string };
}

export const PAST_EVENTS: PastEvent[] = [
  {
    year: 2026,
    editionLabel: 'Second Edition',
    title: 'JunctionX Lisbon 2026',
    href: '/past-events/2026/',
    startDate: '2026-10-10',
    endDate: '2026-10-11',
    dateLabel: '10–11 October 2026',
    location: 'Lisbon, Portugal',
    venue: 'IST – Campus Taguspark',
    summary:
      'A student hackathon bringing together participants to develop innovative solutions across technology, business and research.',
    facts: [
      { label: 'Prizes', value: 'More than €25,000' },
      { label: 'Venue', value: 'IST – Campus Taguspark' },
      { label: 'Winners', value: 'No Other Choice' },
    ],
    image: {
      src: '/assets/winners/junctionx-lisbon-2026-winners.jpg',
      alt: "No Other Choice, the winning team of JunctionX Lisbon 2026, on stage holding the winner's cheque.",
      width: 1253,
      height: 946,
    },
    links: [{ href: '/past-events/2026/winners/', label: 'Meet the winners' }],
    theme: { accent: '#bdbdff', background: '#0a0f1d' },
  },
  {
    year: 2025,
    editionLabel: 'Founding Edition',
    title: 'JunctionX Lisbon 2025',
    href: '/past-events/2025/',
    startDate: '2025-10-18',
    endDate: '2025-10-19',
    dateLabel: '18–19 October 2025',
    location: 'Lisbon, Portugal',
    venue: 'Técnico – Oeiras Campus (Taguspark)',
    summary:
      'The first JunctionX Lisbon event in Portugal, establishing the initiative and connecting students, universities and industry through collaborative innovation.',
    facts: [
      { label: 'Format', value: '36-hour hackathon' },
      { label: 'Venue', value: 'Técnico – Oeiras Campus' },
      { label: 'Winners', value: 'Três Mosqueteiros' },
    ],
    coverMark: '/assets/junctionx-wordmark.png',
    links: [{ href: '/past-events/2025/#winners', label: 'Meet the winners' }],
    theme: { accent: '#6c77ff', background: '#0b0a28' },
  },
];

/** Editions sorted newest first. */
export const getPastEvents = (): PastEvent[] =>
  [...PAST_EVENTS].sort((a, b) => b.startDate.localeCompare(a.startDate));

export const getEvent = (year: number): PastEvent => {
  const event = PAST_EVENTS.find((e) => e.year === year);
  if (!event) throw new Error(`No edition ${year} in src/data/events.ts`);
  return event;
};

/** The editions before and after a given one, for chapter navigation. */
export const getAdjacentEvents = (year: number) => {
  const chronological = [...PAST_EVENTS].sort((a, b) => a.startDate.localeCompare(b.startDate));
  const index = chronological.findIndex((e) => e.year === year);
  return { previous: chronological[index - 1], next: chronological[index + 1] };
};
