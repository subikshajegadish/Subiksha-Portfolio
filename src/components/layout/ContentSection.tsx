import type { ReactNode } from 'react';
import { Section } from './Section';

interface ContentSectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

/** A section with the standard padding and a letter-spaced heading. */
export function ContentSection({ id, title, children }: ContentSectionProps) {
  return (
    <Section id={id} className="box-border flex flex-col px-[100px] pt-[130px] pb-[50px]">
      <h2 className="m-0 font-pixel text-[34px] leading-none font-bold tracking-[0.28em] text-white/82 uppercase">
        {title}
      </h2>
      {children}
    </Section>
  );
}
