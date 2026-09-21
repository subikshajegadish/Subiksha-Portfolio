import type { ReactNode } from 'react';

/** Full-bleed 1440x900 SVG canvas that crops to cover its container. */
export function SceneSvg({ children }: { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 1440 900"
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid slice"
      style={{ display: 'block' }}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}
