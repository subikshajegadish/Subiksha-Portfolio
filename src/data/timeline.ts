import type { Milestone } from '../types/content';

/**
 * About timeline, top to bottom. Entries alternate sides: the first sits left of the line
 * with its date on the right, the next flips, and so on.
 */
export const TIMELINE: readonly Milestone[] = [
  { title: 'VIT', detail: 'BTech, Computer Science and Engineering', when: '2020 to 2024' },
  { title: 'ISRO', detail: 'Software Development Intern, computer vision', when: 'Summer 2023' },
  { title: 'ION Group', detail: 'Software Analyst, Bengaluru', when: '2024 to 2025' },
  {
    title: 'University of Maryland',
    detail: 'MEng, Software Engineering',
    when: 'Expected May 2027',
  },
  { title: 'AWS', detail: 'Software Development Intern, Arlington VA', when: 'Summer 2026' },
];
