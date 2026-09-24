import { useSyncExternalStore } from 'react';
import { SKY_ID } from './ids';

/**
 * A still image of the scene, taken once from the live SVG after it mounts. The section
 * backdrops show this instead of re-rendering the animated scene, which is far cheaper to
 * paint and scroll. An SVG loaded as an image gets none of the page's CSS, so nothing in it
 * animates.
 */

let snapshotUrl: string | null = null;
const listeners = new Set<() => void>();

/** Parts of the scene that only make sense in motion (frozen, they look like stray marks). */
const MOTION_ONLY = '.shoot, .fly';

export function captureSceneSnapshot() {
  if (snapshotUrl) return;
  const svg = document.getElementById(SKY_ID)?.closest('svg');
  if (!svg) return;

  const clone = svg.cloneNode(true) as SVGSVGElement;
  clone.querySelectorAll(MOTION_ONLY).forEach((el) => el.remove());
  // Standalone SVG images need a namespace and an intrinsic size.
  clone.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
  clone.setAttribute('width', '1440');
  clone.setAttribute('height', '900');
  clone.removeAttribute('style');

  const markup = new XMLSerializer().serializeToString(clone);
  snapshotUrl = URL.createObjectURL(new Blob([markup], { type: 'image/svg+xml' }));
  listeners.forEach((notify) => notify());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

/** URL of the scene snapshot, or null until it has been captured. */
export function useSceneSnapshot() {
  return useSyncExternalStore(
    subscribe,
    () => snapshotUrl,
    () => null,
  );
}
