import type { Flock } from './types';

/** Bird flocks, each bird offset from the flock leader. */
export const FLOCKS: readonly Flock[] = [
  {
    variant: 'f1',
    birds: [
      { x: 0, y: 0, scale: 1.3 },
      { x: -30, y: 18, scale: 1 },
      { x: -62, y: -6, scale: 1.1 },
      { x: -58, y: 36, scale: 0.8 },
      { x: -96, y: 14, scale: 0.9 },
    ],
  },
  {
    variant: 'f2',
    birds: [
      { x: 0, y: 0, scale: 0.9 },
      { x: 26, y: 14, scale: 0.7 },
      { x: -24, y: 20, scale: 0.8 },
    ],
  },
  {
    variant: 'f3',
    birds: [
      { x: 0, y: 0, scale: 1 },
      { x: -28, y: 12, scale: 0.8 },
    ],
  },
  {
    variant: 'f4',
    birds: [
      { x: 0, y: 0, scale: 0.7 },
      { x: 20, y: 10, scale: 0.55 },
      { x: -18, y: 14, scale: 0.6 },
      { x: 38, y: -6, scale: 0.5 },
      { x: -40, y: 2, scale: 0.55 },
      { x: 8, y: 26, scale: 0.5 },
    ],
  },
];
