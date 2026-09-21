import type { Milestone } from '../types/content';

/**
 * About timeline, top to bottom. Entries alternate sides: the first sits left of the line
 * with its date on the right, the next flips, and so on.
 */
export const TIMELINE: readonly Milestone[] = [
  {
    title: 'VIT',
    detail: 'Bachelor of Technology in Computer Science and Engineering',
    when: 'Aug 2020 – May 2024',
  },
  { title: 'ISRO', detail: 'Software Development Intern', when: 'May 2023 – Jul 2023' },
  { title: 'ION Group', detail: 'Software Analyst', when: 'Jan 2024 – Jul 2025' },
  {
    title: 'University of Maryland',
    detail: 'Master of Engineering in Software Engineering',
    when: 'Aug 2025 – May 2027 (Expected)',
  },
  { title: 'AWS', detail: 'Software Development Engineer Intern', when: 'Jun 2026 – Aug 2026' },
];
