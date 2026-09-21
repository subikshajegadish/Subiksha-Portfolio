import type { ReactNode } from 'react';
import { cn } from '../../lib/cn';
import { Section } from './Section';

interface ContentSectionProps {
  id: string;
  title: string;
  /** Keep the content in a centred column. Off for sections that centre themselves. */
  contained?: boolean;
  children: ReactNode;
}

/** A section with the standard padding, a dimmed backdrop and a letter-spaced heading. */
export function ContentSection({ id, title, contained = true, children }: ContentSectionProps) {
  return (
    <Section
      id={id}
      backdrop="dimmed"
      className="box-border flex flex-col px-6 pt-28 pb-12 md:px-12 xl:px-25 xl:pt-32.5 xl:pb-12.5"
    >
      <div
        className={cn(
          'mx-auto flex w-full flex-1 flex-col',
          contained && 'max-w-2xl lg:max-w-4xl xl:max-w-270',
        )}
      >
        <h2 className="m-0 font-pixel text-[22px] leading-none font-bold tracking-[0.2em] text-white/82 uppercase md:text-[28px] xl:text-[34px] xl:tracking-[0.28em]">
          {title}
        </h2>
        {children}
      </div>
    </Section>
  );
}
