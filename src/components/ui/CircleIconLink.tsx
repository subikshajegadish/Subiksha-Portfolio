import type { ReactNode } from 'react';
import { cn } from '../../lib/cn';

interface CircleIconLinkProps {
  href: string;
  label: string;
  className?: string;
  /** Open in a new tab (for links that leave the site). */
  external?: boolean;
  children: ReactNode;
}

/** Round navy link holding a single icon. Size and border colour come from `className`. */
export function CircleIconLink({
  href,
  label,
  className,
  external = false,
  children,
}: CircleIconLinkProps) {
  return (
    <a
      href={href}
      aria-label={label}
      {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
      className={cn(
        'box-border flex items-center justify-center rounded-full border-3 bg-navy',
        className,
      )}
    >
      {children}
    </a>
  );
}
