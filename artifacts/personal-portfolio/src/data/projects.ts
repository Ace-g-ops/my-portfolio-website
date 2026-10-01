import brandFrameImage from '@assets/pt(1)_1790898543759.png';
import scriptSculptImage from '@assets/pt(2)_1790898543796.png';
import geoHeatImage from '@assets/pt(6)_1790898543798.png';
import ayoImage from '@assets/pt(4)_1790898543797.png';

export type Project = {
  id: string;
  name: string;
  description: string;
  context: string;
  tags: string[];
  href: string;
  image: string;
  imageAlt: string;
};

// Add or edit an entry here to update the portfolio's projects section.
// Tags describe the products, not unverified implementation technologies.
export const projects: Project[] = [
  {
    id: 'brandframe-ai',
    name: 'BrandFrame AI',
    description: 'An AI image creation app for turning ideas into visuals, with account sign-in and registration.',
    context: 'AI image creation',
    tags: ['AI', 'Image generation'],
    href: 'https://brandframe-ai.vercel.app/',
    image: brandFrameImage,
    imageAlt: 'BrandFrame AI sign-in screen with a dark interface and cyan controls.',
  },
  {
    id: 'scriptsculpt',
    name: 'Scriptsculpt',
    description: 'A script revision tool that turns changes between drafts into department-ready insights a film crew can act on.',
    context: 'Film production tools',
    tags: ['Script revisions', 'Production workflow'],
    href: 'https://scriptsculpt.replit.app/',
    image: scriptSculptImage,
    imageAlt: 'Scriptsculpt homepage with the headline Before the next call sheet and a signal-monitor illustration.',
  },
  {
    id: 'geoheat',
    name: 'GeoHeat',
    description: 'An interactive map for exploring store density, discovering high-density clusters, and viewing categories, ratings, and location insights.',
    context: 'Location insights',
    tags: ['Interactive maps', 'Store density'],
    href: 'https://geo-heat.vercel.app/',
    image: geoHeatImage,
    imageAlt: 'GeoHeat homepage showing store-density maps on desktop and mobile.',
  },
  {
    id: 'ayo-olopon',
    name: 'Ayo Olopon',
    description: 'A digital take on the traditional African strategy game, with avatar selection and single-player or two-player modes.',
    context: 'Browser strategy game',
    tags: ['Strategy game', 'Single & two-player'],
    href: 'https://ayo-game-seven.vercel.app/',
    image: ayoImage,
    imageAlt: 'Ayo Olopon start screen with avatar choices and single-player and two-player options.',
  },
];