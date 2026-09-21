import type { ReactNode } from 'react';
import { cn } from '../../lib/cn';

interface CircleIconLinkProps {
  href: string;
  label: string;
  className?: string;
  children: ReactNode;
}

/** Round navy link holding a single icon. Size and border colour come from `className`. */
export function CircleIconLink({ href, label, className, children }: CircleIconLinkProps) {
  return (
    <a
      href={href}
      aria-label={label}
      className={cn(
        'box-border flex items-center justify-center rounded-full border-3 bg-navy',
        className,
      )}
    >
      {children}
    </a>
  );
}
