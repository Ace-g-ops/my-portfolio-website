export type Project = {
  id: string;
  name: string;
  description: string;
  stack: string[];
  href: string;
  image: string;
  imageAlt: string;
};

// Add or edit an entry here to update the portfolio's projects section.
export const projects: Project[] = [
  {
    id: 'brandframe-ai',
    name: 'BrandFrame AI',
    description: 'An AI model that generates visually appealing, aesthetic images for social media content and business creators.',
    stack: ['Blade', 'PHP', 'Python'],
    href: 'https://brandframe-ai.vercel.app/',
    image: 'projects/project-04.png',
    imageAlt: 'BrandFrame AI sign-in screen with a dark interface and cyan controls.',
  },
  {
    id: 'scriptsculpt',
    name: 'Scriptsculpt',
    description: 'An AI-powered application that compares scripts and recommends revisions for a better screenplay experience.',
    stack: ['TypeScript', 'Python'],
    href: 'https://scriptsculpt.replit.app/',
    image: 'projects/scriptsculpt.png',
    imageAlt: 'Scriptsculpt homepage with the headline Before the next call sheet and a signal-monitor illustration.',
  },
  {
    id: 'geoheat',
    name: 'GeoHeat',
    description: 'An AI-powered app that provides density information for a specific geographical region.',
    stack: ['Python', 'React.js'],
    href: 'https://geo-heat.vercel.app/',
    image: 'projects/project-03.png',
    imageAlt: 'GeoHeat homepage showing store-density maps on desktop and mobile.',
  },
  {
    id: 'ayo-olopon',
    name: 'Ayo Olopon',
    description: 'A mini Ludo game with single-player and multiplayer modes.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    href: 'https://ayo-game-seven.vercel.app/',
    image: 'projects/project-01.png',
    imageAlt: 'Ayo Olopon start screen with avatar choices and single-player and two-player options.',
  },
];