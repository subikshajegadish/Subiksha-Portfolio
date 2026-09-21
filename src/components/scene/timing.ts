import type { CSSProperties } from 'react';
import type { Timing } from '../../data/scene/types';

/** Inline animation timing for a scene element. */
export const timingStyle = ({ duration, delay }: Timing): CSSProperties => ({
  animationDuration: `${duration}s`,
  animationDelay: `${delay}s`,
});
