import { useSceneSnapshot } from './sceneSnapshot';

/**
 * Blurred still of the scene that fills its section. It sits below the fixed live scene
 * (negative z-index within the page), so it only shows where that layer ends.
 *
 * The live scene fills the whole viewport except on wide screens taller than 900px, where
 * it stops at 900px. Everywhere else the backdrop would be fully covered, so it is not
 * drawn at all.
 */
export function SceneBackdrop({ dimmed = false }: { dimmed?: boolean }) {
  const snapshot = useSceneSnapshot();

  return (
    <div className="pointer-events-none absolute inset-0 -z-1 hidden overflow-hidden bg-night [@media(width>=80rem)_and_(height>900px)]:block">
      {snapshot && (
        <img
          src={snapshot}
          alt=""
          decoding="async"
          className="absolute -inset-10 size-[calc(100%+80px)] max-w-none object-cover blur-[7px]"
        />
      )}
      {dimmed && <div className="absolute inset-0 bg-shade opacity-50" />}
    </div>
  );
}
