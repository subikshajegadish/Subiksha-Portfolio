import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '../../lib/cn';

/** A full-width, 900px (SECTION_HEIGHT) screen that scroll-snaps into place. */
export function Section({ className, ...props }: ComponentPropsWithoutRef<'section'>) {
  return (
    <section
      className={cn('relative z-1 h-[900px] w-full min-w-[1440px] snap-start', className)}
      {...props}
    />
  );
}
