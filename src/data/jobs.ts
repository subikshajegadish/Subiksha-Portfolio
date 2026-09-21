import type { Job } from '../types/content';

/** Work Experience entries, in the order they appear. The first one is selected on load. */
export const JOBS: readonly Job[] = [
  {
    org: 'University of Maryland',
    title: 'Graduate Course Aide',
    place: 'INFO College, College Park',
    dates: 'From Aug 31',
    bullets: [
      'Graduate Course Aide for INST314 and INST464 at the INFO College, about 10 hours a week for each course.',
      '[Add what you do day to day, e.g. grading, office hours, supporting students and instructors]',
      '[Add a bullet on a concrete outcome or a tool you used]',
    ],
  },
  {
    org: 'Amazon Web Services',
    title: 'Software Development Engineer Intern',
    place: 'Arlington, VA, Molecule team',
    dates: '[DATES]',
    bullets: [
      'Software Development Engineer intern on the Molecule team in Arlington, VA.',
      'Contributed to the dropzone validator.',
      'Finished the internship with an inclined evaluation for a return offer.',
      '[Add a bullet on impact: what you built, at what scale, with which tech]',
    ],
  },
  {
    org: 'ION Group',
    title: 'Technical Analyst',
    place: 'Bengaluru, India',
    dates: '~1.5 years',
    bullets: [
      'Technical Analyst at ION Group in Bengaluru, working in fintech for about a year and a half.',
      '[Add a bullet on distributed systems or REST API work]',
      '[Add a bullet on CI/CD or full-stack work]',
      '[Add a bullet with a metric or outcome]',
    ],
  },
  {
    org: 'ISRO',
    title: 'Research Intern, Computer Vision',
    place: 'Indian Space Research Organisation',
    dates: '[DATES]',
    bullets: [
      'Computer vision research internship at ISRO during undergrad.',
      'The research led to an IEEE publication.',
      '[Add a bullet on the problem, model or dataset]',
    ],
  },
];
