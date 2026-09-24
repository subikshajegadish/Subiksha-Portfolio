import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

/** Only devices with a real mouse or trackpad get the custom cursor. */
const FINE_POINTER = '(hover: hover) and (pointer: fine)';
const INTERACTIVE = 'a, button, [role="button"], input, textarea, select, label';
/** Class on <html> that hides the native cursor while the firefly is active. */
const ACTIVE_CLASS = 'firefly-cursor';

/**
 * Replaces the mouse cursor with a glowing firefly. Position is written straight to the
 * element's transform on every pointer move, so it tracks the mouse without re-rendering.
 */
export function FireflyCursor() {
  const ref = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(FINE_POINTER).matches,
  );

  useEffect(() => {
    const query = window.matchMedia(FINE_POINTER);
    const onChange = () => setEnabled(query.matches);
    query.addEventListener('change', onChange);
    return () => query.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!enabled || !el) return;
    const root = document.documentElement;
    root.classList.add(ACTIVE_CLASS);

    const onMove = (e: PointerEvent) => {
      el.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      el.dataset.visible = 'true';
      const target = e.target instanceof Element ? e.target : null;
      el.dataset.active = String(Boolean(target?.closest(INTERACTIVE)));
    };
    const onLeave = () => {
      el.dataset.visible = 'false';
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    document.addEventListener('pointerleave', onLeave);
    return () => {
      root.classList.remove(ACTIVE_CLASS);
      window.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerleave', onLeave);
    };
  }, [enabled]);

  if (!enabled) return null;

  // Rendered into <body> so it sits above everything, including the loading screen.
  return createPortal(
    <div
      ref={ref}
      aria-hidden="true"
      data-visible="false"
      className="group pointer-events-none fixed top-0 left-0 z-50 opacity-0 transition-opacity duration-200 data-[visible=true]:opacity-100"
    >
      {/* Centred on the pointer: the bright core is the hotspot. */}
      <div className="relative -translate-x-1/2 -translate-y-1/2">
        <div className="firefly-glow absolute top-1/2 left-1/2 size-7 -translate-1/2 rounded-full bg-firefly/40 blur-[3px] transition-[width,height] duration-200 group-data-[active=true]:size-10" />
        <div className="relative size-2 rounded-full bg-firefly-core shadow-[0_0_6px_2px_rgba(233,255,138,0.8)]" />
      </div>
    </div>,
    document.body,
  );
}
