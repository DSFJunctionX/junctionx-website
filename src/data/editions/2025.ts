// Content of the JunctionX Lisbon 2025 archive (the founding edition).
//
// Source of truth: the original 2025 website, preserved in the `website-2025`
// branch of this repository (index.html, challenges.html, agenda.html, faq.html
// and become_partner.html). Wording is kept; only tense, typos and formatting
// were adjusted. Results come from the external coverage listed in `sources`,
// because the original website was last updated before the event.
//
// Strings rendered with set:html contain only trusted inline markup (<em>, <a>).

import type { Challenge, FaqItem, Partner, ProgrammeDay, Resource, TeamMember, WinnerSource } from './types';

export const highlights2025 = [
  { value: '#1', label: 'Europe hackathon series' },
  { value: '36h', label: 'time to build' },
  { value: '€50,000+', label: 'in prizes at Junction Finland, 14–16 November 2025' },
];

export const themes2025 = ['Artificial Intelligence and Machine Learning', 'Technology Serving Society'];

export const challenges2025: Challenge[] = [
  {
    title: 'Save the Forest, chase invaders!',
    partner: 'Albatroz Engenharia',
    logo: { src: '/assets/albatroz.png', tone: 'light' },
    summary:
      'Use multiple remote-sensing resources to chase the spread of forest invaders, specifically of the genus <em>Acacia</em>, in Mediterranean forests.',
    brief: [
      'Climate change and world commerce have exposed Mediterranean forests to alien tree and shrub species that find good soil and weather conditions to thrive, with little to no natural counterbalance in the ecosystem. The spread of such invaders threatens local species, reduces local biodiversity and usually unbalances the pre-existing ecosystem, humans included, with unforeseen consequences and a new balance that is still unknown and likely of lesser ecological value.',
      'Species of the <em>Acacia</em> genus originate in the warmer climates of the Southern Hemisphere. They have been imported as timber, decorative trees and seeds, but they also arrive unwittingly in spores carried by ships. Moreover, there is an increased risk in Mediterranean forests because <em>Acacias</em> are pyrophytes.',
    ],
    briefList: [
      'World commerce → import of alien <em>Acacia</em> genetic material → new land for <em>Acacias</em> to prosper',
      'Climate change → global warming → heat-tolerant <em>Acacias</em> prosper',
      'Climate change → drier summers → forest fires → pyrophyte <em>Acacias</em> prosper',
    ],
    briefOutro: 'So, it’s up to us, humans, to fix this mess.',
    pdf: '/docs/acacia.pdf',
  },
  {
    title: 'ContextBridge – The Missing Link Between AI and Enterprise Systems',
    partner: 'Glintt Global',
    logo: { src: '/assets/2025/glintt-logo.png', tone: 'light' },
    summary:
      'Build an open-source semantic middleware that allows Large Language Models (LLMs) to connect seamlessly and privately to enterprise data systems, enabling contextual, traceable and privacy-preserving AI interactions.',
    brief: [
      'Enterprises increasingly want to deploy internal AI assistants to support daily operations, from generating client reports and analysing internal tickets to preparing financial summaries and extracting insights from documents. While tools like LangChain, LlamaIndex or Flowise help build context-aware applications, none provides a fully integrated, traceable and on-premises solution that allows real enterprise systems (like SAP, SharePoint or CRMs) to interact safely with AI models.',
      'The lack of a secure, dynamic context orchestrator prevents organisations from using LLMs effectively, as they cannot easily control what data is exposed, how it is combined, or whether the model’s responses can be traced back to verified sources.',
      'This challenge invited participants to design ContextBridge: an open-source middleware layer that connects enterprise systems to LLMs in a controllable, extensible and privacy-focused way.',
    ],
    pdf: '/docs/contextbridge.pdf',
  },
  {
    title: 'Multi-Source AI for IP & Market Intelligence: From patents to product!',
    partner: 'Gulbenkian Institute for Molecular Medicine (GIMM)',
    logo: { src: '/assets/gimm.png', tone: 'dark' },
    summary:
      'Build an AI pipeline that aggregates heterogeneous IP, scientific and market sources to generate actionable intelligence reports, identifying exploitable assets and mapping them to realistic market opportunities.',
    brief: [
      'The “Multi-Source AI for IP & Market Intelligence” challenge invited teams to create an AI system that unifies diverse innovation data (patents, scientific publications and market indicators) into clear, evidence-based intelligence reports. The goal was to automate how organisations detect exploitable innovations and align them with commercial opportunities. By combining data fusion, natural language processing and structured reasoning, participants would prototype next-generation tools for technology transfer and strategic decision-making in R&amp;D and investment.',
    ],
  },
];

export const partners2025: { label: string; note?: string; partners: Partner[] }[] = [
  {
    label: 'Challenge partners',
    partners: [
      {
        name: 'Glintt Global',
        logo: { src: '/assets/2025/glintt-logo.png', tone: 'light' },
        description:
          'A leading tech consultancy driving digital transformation in healthcare, financial services and public sectors across Europe and beyond.',
      },
      {
        name: 'Albatroz Engenharia SA',
        logo: { src: '/assets/albatroz.png', tone: 'light' },
        description:
          'A Portuguese innovator in AI-powered inspection systems and UAV technologies for the electric power industry.',
      },
      {
        name: 'Gulbenkian Institute for Molecular Medicine',
        logo: { src: '/assets/gimm.png', tone: 'dark' },
        description:
          'GIMM is dedicated to fostering a dynamic, collaborative and sustainable research environment that spans disciplines from basic to clinical research.',
      },
    ],
  },
  {
    label: 'Community partners',
    partners: [
      { name: 'Comudel', logo: { src: '/assets/comudel.png', tone: 'light' } },
      { name: 'Jane Street', logo: { src: '/assets/jane-street.png', tone: 'light' } },
      { name: 'Pointer5', logo: { src: '/assets/pointer5.png', tone: 'dark' } },
      { name: "Domino's Pizza", logo: { src: '/assets/dominos.png', tone: 'light' } },
    ],
  },
  {
    label: 'In collaboration with',
    note: 'According to Técnico, the event was also supported by Técnico’s Oeiras Campus and Oeiras City Council.',
    partners: [{ name: 'Técnico Lisboa', logo: { src: '/assets/2025/tecnico-lisboa.png', tone: 'light' } }],
  },
];

export const organiser2025 = {
  name: 'Gradient Descending – Associação',
  logo: { src: '/assets/2025/gradient.png', tone: 'light' as const },
  description:
    'The event was organised in partnership with Técnico and run by a non-profit association, Gradient Descending – Associação.',
};

export const programme2025: ProgrammeDay[] = [
  {
    weekday: 'Saturday',
    date: '2025-10-18',
    label: '18 October',
    slots: [
      { time: '08:00', title: 'Registration' },
      { time: '09:00', title: 'Opening Ceremony' },
      { time: '10:30', title: 'Coding Starts' },
      { time: '12:30', title: 'Lunch' },
      { time: '19:00', title: 'Workshop by 641', href: 'https://641.pt/' },
      { time: '20:00', title: 'Dinner' },
    ],
  },
  {
    weekday: 'Sunday',
    date: '2025-10-19',
    label: '19 October',
    slots: [
      { time: '07:00', title: 'Breakfast' },
      { time: '13:00', title: 'Pitch Sessions' },
      { time: '15:00', title: 'Roundtable' },
      { time: '16:00', title: 'Winners Announcement' },
      { time: '17:00', title: 'Closing Ceremony' },
      { time: '20:00', title: 'Venue Closing' },
    ],
  },
];

export const team2025: TeamMember[] = [
  { name: 'Diogo Franquinho', role: 'Event lead', linkedin: 'https://www.linkedin.com/in/diogofranquinho/' },
  { name: 'Diogo Andrade', role: 'Event lead', linkedin: 'https://www.linkedin.com/in/diogofreiredeandrade/' },
  { name: 'Aleksey Pyrko', role: 'Tech lead', linkedin: 'https://www.linkedin.com/in/aleksei-pyrko/' },
  { name: 'João Pinto', role: 'Partnerships' },
  { name: 'Anastasiya Yelkhovenka', role: 'Front-end developer', linkedin: 'https://www.linkedin.com/in/anastasiyayelkhovenka/' },
];

export const faq2025: FaqItem[] = [
  {
    question: 'What are the benefits of the hackathon?',
    answer:
      'Build fast, learn from mentors, network with partners, get feedback and win prizes. The winner will get tickets and a chance to participate in Junction Finland, taking place from the 14th to 16th of November, where there are more than €50,000 in prizes!',
  },
  { question: 'Do I need to bring a team?', answer: 'Come solo or form a team on-site. Both are welcome.' },
  { question: 'Will there be a remote option?', answer: 'The event is in-person in Lisbon for this edition.' },
  {
    question: 'Do I need coding experience?',
    answer: 'Technical and non-technical roles are welcome. Projects need at least one technical member.',
  },
  {
    question: 'Where is the event?',
    answer:
      'The event will be at Técnico’s campus in Oeiras. The address is Av. Prof. Dr. Cavaco Silva, 2744-016 Porto Salvo.',
  },
  { question: 'What should I bring?', answer: 'Laptop, charger, and anything else you need to hack!' },
  { question: 'Is food provided?', answer: 'Yes, all meals and snacks will be provided during the event.' },
  {
    question: 'How to get to the venue?',
    answer:
      'Address: Av. Prof. Dr. Cavaco Silva, 2744-016 Porto Salvo, Oeiras, Portugal. <a href="https://maps.app.goo.gl/sNsM9M986PcLX1M3A" target="_blank" rel="noopener noreferrer">Open in Google Maps</a>',
  },
];

export const winnerSources2025: WinnerSource[] = [
  {
    publisher: 'Técnico',
    title: 'Artificial Intelligence, finance and society: Técnico hosted the debut of the JunctionX hackathon in Portugal',
    url: 'https://tecnico.ulisboa.pt/en/news/campus-community/artificial-intelligence-finance-and-society-tecnico-hosted-the-debut-of-the-junctionx-hackathon-in-portugal/',
    date: '31 October 2025',
  },
  {
    publisher: 'Técnico',
    title: 'Técnico students represented Portugal in international competition',
    url: 'https://tecnico.ulisboa.pt/en/news/campus-community/tecnico-students-represented-portugal-in-international-competition/',
    date: '11 December 2025',
  },
  {
    publisher: 'Técnico DEI',
    title: 'DEI Students Participated in Junction 2025',
    url: 'https://dei.tecnico.ulisboa.pt/en/news/campus-community/dei-students-participated-in-junction-2025',
    date: '27 November 2025',
  },
  {
    publisher: 'RTP Antena 1 (in Portuguese)',
    title: 'Duas de Prosa, Ep. 47: Estudantes portugueses brilham em competição na Finlândia',
    url: 'https://www.rtp.pt/play/p15569/e890222/duas-de-prosa',
    date: '18 November 2025',
  },
];

export const resources2025: Resource[] = [
  { label: 'Challenge brief: Save the Forest, chase invaders! (Albatroz Engenharia)', href: '/docs/acacia.pdf', type: 'PDF' },
  { label: 'Challenge brief: ContextBridge (Glintt Global)', href: '/docs/contextbridge.pdf', type: 'PDF' },
  { label: 'Photo gallery of the event, published by Técnico', href: 'https://gallery.tecnico.ulisboa.pt/s/n988yy8yai/junctionx-lisbon-2025', type: 'External' },
  { label: 'Event listing on Técnico’s website', href: 'https://tecnico.ulisboa.pt/en/events/junctionx-lisbon-2025/', type: 'External' },
  { label: 'Venue: Técnico – Oeiras Campus on Google Maps', href: 'https://maps.app.goo.gl/sNsM9M986PcLX1M3A', type: 'External' },
  { label: 'News: Registrations open for the first JunctionX Lisbon', href: '/news/junctionx-lisbon-2025-registration-open/', type: 'News' },
  { label: 'News: JunctionX makes its debut in Portugal', href: '/news/junctionx-debut-in-portugal/', type: 'News' },
  { label: 'News: JunctionX Lisbon’s first winners at Junction 2025', href: '/news/first-winners-at-junction-2025/', type: 'News' },
];
