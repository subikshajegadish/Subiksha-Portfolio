import { Aurora } from './Aurora';
import { Birds } from './Birds';
import { SKY_GRADIENT_ID, SKY_ID, url } from './ids';
import { Moon } from './Moon';
import { ShootingStar } from './ShootingStar';
import { Stars } from './Stars';

/** Upper half of the scene. Referenced by id from the section backdrops. */
export function Sky() {
  return (
    <g id={SKY_ID}>
      <rect width="1440" height="900" fill={url(SKY_GRADIENT_ID)} />
      <Stars />
      <Aurora />
      <Moon />
      <ShootingStar />
      <Birds />
    </g>
  );
}
