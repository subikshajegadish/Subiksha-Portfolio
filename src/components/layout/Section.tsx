import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '../../lib/cn';
import { SceneBackdrop } from '../scene/SceneBackdrop';

interface SectionProps extends ComponentPropsWithoutRef<'div'> {
  id: string;
  /**
   * Static blurred copy of the scene behind this section, so it looks right wherever the
   * fixed scene layer does not reach. `dimmed` matches the scene after it has darkened.
   */
  backdrop?: 'none' | 'plain' | 'dimmed';
}

/**
 * One screen of the page. On wide screens every section is exactly 900px tall; on smaller
 * screens it fills the viewport and grows with its content.
 * Layout classes passed in `className` apply to the content box.
 */
export function Section({ id, backdrop = 'none', className, children, ...props }: SectionProps) {
  return (
    <section id={id} className="relative">
      {backdrop !== 'none' && <SceneBackdrop dimmed={backdrop === 'dimmed'} />}
      <div
        className={cn('relative z-1 min-h-svh w-full xl:h-225 xl:min-h-0', className)}
        {...props}
      >
        {children}
      </div>
    </section>
  );
}
