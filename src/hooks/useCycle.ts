import { useCallback, useState } from 'react';

/** Index into a list of `length` items that wraps around in both directions. */
export function useCycle(length: number) {
  const [index, setIndex] = useState(0);
  const prev = useCallback(() => setIndex((i) => (i + length - 1) % length), [length]);
  const next = useCallback(() => setIndex((i) => (i + 1) % length), [length]);
  return { index, prev, next };
}
