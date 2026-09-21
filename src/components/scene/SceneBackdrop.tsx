import { LAND_ID, SKY_ID } from './ids';
import { SceneSvg } from './SceneSvg';

/**
 * Static, blurred copy of the scene that fills its section. It sits below the fixed live
 * scene (negative z-index within the page), so it only shows where that layer ends.
 */
export function SceneBackdrop({ dimmed = false }: { dimmed?: boolean }) {
  return (
    <div className="pointer-events-none absolute inset-0 -z-1 overflow-hidden bg-night">
      <div className="absolute -inset-10 blur-[7px]">
        <SceneSvg>
          <use href={`#${SKY_ID}`} />
          <use href={`#${LAND_ID}`} />
        </SceneSvg>
      </div>
      {dimmed && <div className="absolute inset-0 bg-shade opacity-50" />}
    </div>
  );
}
