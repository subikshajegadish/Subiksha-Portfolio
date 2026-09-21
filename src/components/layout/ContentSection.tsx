import type { ReactNode } from 'react';
import { Section } from './Section';

interface ContentSectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

/** A section with the standard padding, a dimmed backdrop and a letter-spaced heading. */
export function ContentSection({ id, title, children }: ContentSectionProps) {
  return (
    <Section
      id={id}
      backdrop="dimmed"
      className="box-border flex flex-col px-6 pt-28 pb-12 md:px-12 xl:px-25 xl:pt-32.5 xl:pb-12.5"
    >
      <h2 className="m-0 font-pixel text-[22px] leading-none font-bold tracking-[0.2em] text-white/82 uppercase md:text-[28px] xl:text-[34px] xl:tracking-[0.28em]">
        {title}
      </h2>
      {children}
    </Section>
  );
}
