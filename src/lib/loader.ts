/**
 * Controls the loading screen defined in index.html. It stays up until the fonts are in,
 * the page has loaded and the first full frame of the app has painted, then fades out.
 */

const LOADER_ID = 'loader';
const LOADING_CLASS = 'is-loading';
/** Never keep the loader up longer than this, whatever happens. */
const MAX_WAIT_MS = 10_000;
/** Matches the fade-out transition in index.html. */
const FADE_MS = 500;

let started = false;

const windowLoaded = () =>
  document.readyState === 'complete'
    ? Promise.resolve()
    : new Promise<void>((resolve) =>
        window.addEventListener('load', () => resolve(), { once: true }),
      );

/** Resolves once the frame after the current one has painted. */
const nextPaint = () =>
  new Promise<void>((resolve) =>
    requestAnimationFrame(() => requestAnimationFrame(() => resolve())),
  );

const timeout = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms));

/** Call once the app has mounted. Safe to call more than once. */
export function hideLoaderWhenReady() {
  if (started) return;
  started = true;

  const ready = Promise.all([document.fonts.ready, windowLoaded()]).then(nextPaint);

  void Promise.race([ready, timeout(MAX_WAIT_MS)]).then(() => {
    const loader = document.getElementById(LOADER_ID);
    document.documentElement.classList.remove(LOADING_CLASS);
    if (!loader) return;
    loader.classList.add('is-done');
    setTimeout(() => loader.remove(), FADE_MS);
  });
}
