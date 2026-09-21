import {
  AURORA_BLUE_ID,
  AURORA_GREEN_ID,
  MOON_MASK_ID,
  SKY_GRADIENT_ID,
  SOFT_BLUR_ID,
} from './ids';

/** Gradients, blur filter and moon mask used by the scene. */
export function SceneDefs() {
  return (
    <defs>
      <linearGradient id={SKY_GRADIENT_ID} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#040b20" />
        <stop offset="0.55" stopColor="#0b2451" />
        <stop offset="1" stopColor="#1c5482" />
      </linearGradient>
      <linearGradient id={AURORA_GREEN_ID} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#5dffc9" stopOpacity="0" />
        <stop offset="0.5" stopColor="#5dffc9" stopOpacity="0.38" />
        <stop offset="1" stopColor="#5dffc9" stopOpacity="0" />
      </linearGradient>
      <linearGradient id={AURORA_BLUE_ID} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#8fa2ff" stopOpacity="0" />
        <stop offset="0.5" stopColor="#8fa2ff" stopOpacity="0.3" />
        <stop offset="1" stopColor="#8fa2ff" stopOpacity="0" />
      </linearGradient>
      <filter id={SOFT_BLUR_ID} x="-20%" y="-40%" width="140%" height="180%">
        <feGaussianBlur stdDeviation="18" />
      </filter>
      <mask id={MOON_MASK_ID}>
        <rect x="1100" y="60" width="200" height="200" fill="#fff" />
        <circle cx="1217" cy="115" r="35" fill="#000" />
      </mask>
    </defs>
  );
}
