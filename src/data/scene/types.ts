/** Animation timing in seconds. Negative delays start the loop part-way through. */
export interface Timing {
  duration: number;
  delay: number;
}

export interface Star extends Timing {
  cx: number;
  cy: number;
  r: number;
}

export interface Tree extends Timing {
  /** Pine silhouette path. */
  d: string;
}

export interface TreeLayer {
  color: string;
  /** Sway angle in degrees. */
  sway: number;
  /** Hill silhouette behind the trees. */
  hill: string;
  /** Lower band that the trees stand on. */
  band: string;
  trees: readonly Tree[];
}

export interface Firefly extends Timing {
  cx: number;
  cy: number;
  /** Radius of the soft glow around the core. */
  glow: number;
  /** Radius of the bright core. */
  core: number;
}

export interface Bird {
  x: number;
  y: number;
  scale: number;
}

export interface Flock {
  /** Selects the flight path timing (see `.fly.f1` to `.fly.f4`). */
  variant: 'f1' | 'f2' | 'f3' | 'f4';
  birds: readonly Bird[];
}
