import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '../../lib/cn';

/** A full-width, 900px (SECTION_HEIGHT) screen that scroll-snaps into place. */
export function Section({ className, ...props }: ComponentPropsWithoutRef<'section'>) {
  return (
    <section
      className={cn('relative z-1 h-225 w-full min-w-360 snap-start', className)}
      {...props}
    />
  );
}
