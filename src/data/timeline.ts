import type { Milestone } from '../types/content';

/**
 * About timeline, top to bottom. Entries alternate sides: the first sits left of the line
 * with its date on the right, the next flips, and so on.
 */
export const TIMELINE: readonly Milestone[] = [
  { title: 'VIT', detail: 'BTech, Computer Science and Engineering', when: '[YEARS]' },
  { title: 'ISRO', detail: 'Computer vision research internship', when: 'Undergrad' },
  { title: 'ION Group', detail: 'Technical Analyst, Bengaluru', when: '~1.5 years' },
  {
    title: 'University of Maryland',
    detail: 'MEng, Software Engineering',
    when: 'Expected May 2027',
  },
  { title: 'AWS', detail: 'Software Development Intern, Arlington VA', when: '[DATES]' },
];
