import type { ReactNode } from 'react';
import { PROFILE } from '../../data/profile';
import { CopyrightIcon, LinkedInIcon, MailIcon } from '../icons';
import { ContentSection } from '../layout/ContentSection';

function ContactButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      className="box-border flex h-20 items-center justify-center gap-3.5 rounded-[26px] border-3 border-white bg-white/6 px-8 font-pixel text-[20px] font-semibold tracking-[0.06em] text-white md:h-27 md:px-11 md:text-[26px]"
    >
      {children}
    </a>
  );
}

export function Contact() {
  return (
    <ContentSection id="contact" title="Contact Me" contained={false}>
      <div className="flex flex-1 flex-col items-center justify-center gap-6 py-10 text-center md:gap-8.5 xl:pt-0">
        <div className="font-pixel text-[14px] font-semibold tracking-[0.25em] text-white/70 uppercase md:text-[20px] md:tracking-[0.4em]">
          Have a project in mind?
        </div>
        <h3 className="m-0 font-pixel text-[56px] leading-none font-bold tracking-[0.02em] text-white uppercase sm:text-[80px] md:text-[104px] xl:text-[130px]">
          Let's talk
        </h3>
        <div className="mt-4 flex w-full flex-col gap-4 sm:w-auto sm:flex-row sm:gap-8 md:mt-7.5">
          <ContactButton href={`mailto:${PROFILE.email}`}>
            <MailIcon />
            <span>Email Me</span>
          </ContactButton>
          <ContactButton href={PROFILE.links.linkedin}>
            <LinkedInIcon />
            <span>LinkedIn</span>
          </ContactButton>
        </div>
      </div>
      <div className="text-center font-pixel text-[16px] tracking-[0.24em] text-white/50 uppercase">
        <CopyrightIcon className="mr-2.5 align-[-3px]" />
        {PROFILE.name}
      </div>
    </ContentSection>
  );
}
