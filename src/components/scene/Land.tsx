import { Fireflies } from './Fireflies';
import { Forest } from './Forest';
import { LAND_ID } from './ids';
import { Mist } from './Mist';
import { Mountains } from './Mountains';

/** Lower half of the scene. Referenced by id from the section backdrops. */
export function Land() {
  return (
    <g id={LAND_ID}>
      <Mountains />
      <Mist />
      <Forest />
      <Fireflies />
    </g>
  );
}
