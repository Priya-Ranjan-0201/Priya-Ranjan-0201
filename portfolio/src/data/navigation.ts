import { NavRoute } from '@/types';

export const navigation: NavRoute[] = [
  {
    path: '/',
    label: 'Home',
    concept: 'The Entry',
    description: 'Where the journey begins',
    coreState: 'neural',
  },
  {
    path: '/about',
    label: 'About',
    concept: 'The Mind',
    description: 'Who I am and how I think',
    coreState: 'orbit',
  },
  {
    path: '/work',
    label: 'Work',
    concept: 'The Archive',
    description: 'Projects and verified architectures',
    coreState: 'nodes',
  },
  {
    path: '/skills',
    label: 'Skills',
    concept: 'The System',
    description: 'Relational knowledge graph',
    coreState: 'network',
  },
  {
    path: '/experience',
    label: 'Experience',
    concept: 'The Journey',
    description: 'Milestones and engineering growth',
    coreState: 'journey',
  },
  {
    path: '/lab',
    label: 'Lab',
    concept: 'The Playground',
    description: 'Interactive experiments and procedural shaders',
    coreState: 'chaos',
  },
  {
    path: '/journal',
    label: 'Journal',
    concept: 'The Notes',
    description: 'Technical retrospectives and engineering essays',
    coreState: 'network',
  },
  {
    path: '/resume',
    label: 'Resume',
    concept: 'The Record',
    description: 'Curriculum vitae and credentials',
    coreState: 'resume',
  },
  {
    path: '/contact',
    label: 'Contact',
    concept: 'The Connection',
    description: 'Convergence of thought and collaboration',
    coreState: 'convergence',
  },
];

export const secondaryNavigation: NavRoute[] = [
  {
    path: '/resume',
    label: 'Resume',
    concept: 'The Record',
    description: 'Formal qualifications and print view',
    coreState: 'resume',
  },
  {
    path: '/journal',
    label: 'Journal',
    concept: 'The Notes',
    description: 'Technical retrospectives',
    coreState: 'network',
  },
];
