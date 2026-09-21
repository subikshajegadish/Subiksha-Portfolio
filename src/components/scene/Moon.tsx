import { MOON_MASK_ID, url } from './ids';

const MOON = { cx: 1198, cy: 126, fill: '#f4f1de' };

/** Crescent moon with two soft halos. The crescent is cut out by the moon mask. */
export function Moon() {
  return (
    <>
      <circle cx={MOON.cx} cy={MOON.cy} r="120" fill={MOON.fill} opacity="0.06" />
      <circle cx={MOON.cx} cy={MOON.cy} r="76" fill={MOON.fill} opacity="0.1" />
      <circle cx={MOON.cx} cy={MOON.cy} r="40" fill={MOON.fill} mask={url(MOON_MASK_ID)} />
    </>
  );
}
