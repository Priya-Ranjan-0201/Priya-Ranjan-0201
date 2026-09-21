import { NavRoute } from '@/types';

export const navigation: NavRoute[] = [
  {
    path: '/',
    label: 'Home',
    concept: 'The Entry',
    description: 'Introduction and selected works',
    coreState: 'neural',
  },
  {
    path: '/about',
    label: 'About',
    concept: 'The Story',
    description: 'My background, journey, and personal philosophy',
    coreState: 'orbit',
  },
  {
    path: '/work',
    label: 'Work',
    concept: 'Case Studies',
    description: 'Engineering projects, architectures, and results',
    coreState: 'nodes',
  },
  {
    path: '/now',
    label: 'Now',
    concept: 'Active Focus',
    description: 'What I am currently building, learning, and reading',
    coreState: 'network',
  },
  {
    path: '/uses',
    label: 'Uses',
    concept: 'Setup & Tools',
    description: 'Hardware, development environment, and daily workflow',
    coreState: 'network',
  },
  {
    path: '/experience',
    label: 'Journey',
    concept: 'Turning Points',
    description: 'Engineering milestones and hard-earned lessons',
    coreState: 'journey',
  },
  {
    path: '/skills',
    label: 'Skills',
    concept: 'Technical Taxonomy',
    description: 'Languages, systems, and engineering tools',
    coreState: 'network',
  },
  {
    path: '/journal',
    label: 'Writing',
    concept: 'Notes & Essays',
    description: 'Technical retrospectives and engineering essays',
    coreState: 'network',
  },
  {
    path: '/resume',
    label: 'Resume',
    concept: 'Curriculum Vitae',
    description: 'Clean printable resume and academic record',
    coreState: 'resume',
  },
  {
    path: '/contact',
    label: 'Contact',
    concept: 'Get in Touch',
    description: 'Send an email or message',
    coreState: 'convergence',
  },
];

export const secondaryNavigation: NavRoute[] = [
  {
    path: '/now',
    label: 'Now',
    concept: 'Active Focus',
    description: 'Current projects and reading list',
    coreState: 'network',
  },
  {
    path: '/uses',
    label: 'Uses',
    concept: 'Setup & Tools',
    description: 'Hardware and developer workflow',
    coreState: 'network',
  },
  {
    path: '/resume',
    label: 'Resume',
    concept: 'Curriculum Vitae',
    description: 'Formal qualifications and print view',
    coreState: 'resume',
  },
  {
    path: '/journal',
    label: 'Writing',
    concept: 'Technical Essays',
    description: 'In-depth engineering notes',
    coreState: 'network',
  },
];
