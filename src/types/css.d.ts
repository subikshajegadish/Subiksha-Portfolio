import 'react';

declare module 'react' {
  interface CSSProperties {
    /** Sway angle for pine trees, read by the `.t` animation. */
    '--sway'?: string;
  }
}
