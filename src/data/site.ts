// Site-wide constants for the evergreen JunctionX Lisbon website.
// Contact details and social links are the verified ones used on the 2026 site.

export const SITE = {
  name: 'JunctionX Lisbon',
  tagline: "Building what's next.",
  description:
    'JunctionX Lisbon is a community bringing together students, developers, researchers and companies to build innovative solutions through hackathons and collaborative projects.',
  email: 'lisbon@hackjunction.com',
  /** Default social sharing image (the JunctionX emblem). */
  defaultImage: {
    src: '/assets/junctionx-logo.png',
    alt: 'JunctionX emblem',
    width: 124,
    height: 124,
  },
} as const;

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/news/', label: 'News' },
  { href: '/past-events/', label: 'Past Events' },
] as const;

export const SOCIAL_LINKS = [
  { href: 'https://www.linkedin.com/company/junctionx-lisbon', label: 'LinkedIn' },
  { href: 'https://www.instagram.com/junctionxlisbon/', label: 'Instagram' },
  { href: 'https://discord.gg/wBaUtGQwfn', label: 'Discord' },
] as const;
