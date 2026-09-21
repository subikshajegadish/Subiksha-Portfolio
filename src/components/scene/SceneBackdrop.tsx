import { LAND_ID, SKY_ID } from './ids';
import { SceneSvg } from './SceneSvg';

interface SceneBackdropProps {
  /** Vertical offset in px, a multiple of the section height. */
  top: number;
  /** Darken the backdrop to match the live scene once it has dimmed. */
  dimmed?: boolean;
}

/**
 * Static, blurred copy of the scene placed behind a section, so the page looks right
 * even where the fixed scene layer does not reach.
 */
export function SceneBackdrop({ top, dimmed = false }: SceneBackdropProps) {
  return (
    <div
      className="pointer-events-none absolute left-0 z-0 h-225 w-full overflow-hidden bg-night"
      style={{ top }}
    >
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
