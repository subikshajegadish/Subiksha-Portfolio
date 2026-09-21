import { SOFT_BLUR_ID, url } from './ids';

const MIST_COLOR = '#9cc7ee';

/** Two bands of low mist drifting in opposite directions. */
export function Mist() {
  return (
    <>
      <g className="mist" filter={url(SOFT_BLUR_ID)}>
        <ellipse cx="380" cy="600" rx="330" ry="34" fill={MIST_COLOR} opacity="0.1" />
        <ellipse cx="1000" cy="640" rx="380" ry="40" fill={MIST_COLOR} opacity="0.09" />
      </g>
      <g className="mist m2" filter={url(SOFT_BLUR_ID)}>
        <ellipse cx="700" cy="700" rx="420" ry="36" fill={MIST_COLOR} opacity="0.08" />
      </g>
    </>
  );
}
