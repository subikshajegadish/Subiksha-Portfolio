import type { Project } from '../types/content';

/** Projects shown in the carousel, in order. */
export const PROJECTS: readonly Project[] = [
  {
    title: 'OpenGit',
    description:
      'A tool that surfaces newcomer-friendly open-source issues across repositories, scoring them on more than just the good-first-issue label.',
    tech: ['Open Source', '[Tech]'],
  },
  {
    title: 'ASL Learning Game',
    description:
      'A gamified ASL learning game in the style of a Pokemon battle, built around a trained computer vision model that recognizes signs.',
    tech: ['Machine Learning', 'Computer Vision', 'HopHacks 2026'],
  },
  {
    title: '[Project name]',
    description: '[Add a two-line description of what it does and why you built it.]',
    tech: ['[Tech]', '[Tech]', '[Tech]'],
  },
];
