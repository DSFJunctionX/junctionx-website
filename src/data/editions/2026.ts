// Shared-archive content for JunctionX Lisbon 2026 (the second edition).
//
// Most of the 2026 archive is the original 2026 website, preserved in
// src/components/archive-2026/. This file holds what the archive adds around it:
// the winners summary and the list of resources.

import type { Resource, WinnerSource } from './types';

/**
 * Section menu for the 2026 archive. `base` is '' on the archive page itself and
 * '/past-events/2026/' on its sub-pages (e.g. the winners page).
 */
export const edition2026Nav = (base: string) => [
  { href: `${base}#winners`, label: 'Winners' },
  { href: `${base}#photos`, label: 'Photos' },
  { href: `${base}#about`, label: 'About' },
  { href: `${base}#prizes`, label: 'Prizes' },
  { href: `${base}#sponsors`, label: 'Sponsors' },
  { href: `${base}#challenges`, label: 'Challenges' },
  { href: `${base}#location`, label: 'Location & schedule' },
  { href: `${base}#faq`, label: 'FAQs' },
  { href: `${base}#our-team`, label: 'Team' },
  { href: `${base}#resources`, label: 'Resources' },
];

export const winnerMembers2026 = [
  'David Santos',
  'João Teodósio',
  'Miguel Rodrigues',
  'Tomás Lopes',
  'Pedro Silva',
];

export const winnerSources2026: WinnerSource[] = [
  {
    publisher: 'Técnico DEI',
    title: 'JunctionX Lisbon 2026 winning team has a majority of DEI members',
    url: 'https://dei.tecnico.ulisboa.pt/en/news/award/junctionx-lisbon-2026-winning-team-has-a-majority-of-dei-members',
    date: '19 October 2026',
  },
  {
    publisher: 'Técnico Oeiras Campus (in Portuguese)',
    title: 'No Other Choice vence JunctionX Lisbon com projeto de segurança digital',
    url: 'https://oeiras.tecnico.ulisboa.pt/2026/10/26/no-other-choice-vence-junctionx-lisbon-com-projeto-de-seguranca-digital/',
    date: '26 October 2026',
  },
];

/** Official photo gallery of the 2026 edition (public Google Drive folder). */
export const gallery2026 = 'https://drive.google.com/drive/folders/1kQm853mbQZroi47o1slo0h1fU6T1RldF';

export const resources2026: Resource[] = [
  { label: 'Official photo gallery of JunctionX Lisbon 2026 (Google Drive)', href: gallery2026, type: 'External' },
  { label: 'JunctionX Lisbon 2026: Official Regulations', href: '/assets/JunctionX%20Lisbon%202026%20-%20Official%20Regulations.pdf', type: 'PDF' },
  { label: 'Challenge brief: Untrace (NOS)', href: '/assets/challenges/NOS%20-%20JunctionX%20Lisbon%202026.pdf', type: 'PDF' },
  { label: 'Challenge brief: Fresh eyes on fresh produce! (Sensei)', href: '/assets/challenges/Sensei%20-%20JunctionX%20Lisbon%202026.pdf', type: 'PDF' },
  { label: 'Challenge brief: QuantumTrace (Inspiring Solutions)', href: '/assets/challenges/Inspiring%20Solutions%20-%20JunctionX%20Lisbon%202026.pdf', type: 'PDF' },
  { label: 'Challenge brief: Am I at a unique place? (Albatroz Engenharia)', href: '/assets/challenges/Albatroz%20Challenge%20-%20JunctionX%20Lisbon%202026.pdf', type: 'PDF' },
  { label: 'Event page on the Junction platform (sign-in required)', href: 'https://hackjunction.app/events/junctionx-lisbon-2026', type: 'External' },
  { label: 'Winners of JunctionX Lisbon 2026', href: '/past-events/2026/winners/', type: 'Page' },
  { label: 'News: Registrations open for JunctionX Lisbon 2026', href: '/news/junctionx-lisbon-2026-registration-open/', type: 'News' },
  { label: 'News: No Other Choice wins JunctionX Lisbon 2026', href: '/news/no-other-choice-wins-junctionx-lisbon-2026/', type: 'News' },
];
