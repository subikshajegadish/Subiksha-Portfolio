import type { ReactNode } from 'react';
import { PROFILE } from '../../data/profile';
import { CopyrightIcon, LinkedInIcon, MailIcon } from '../icons';
import { ContentSection } from '../layout/ContentSection';

function ContactButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      className="box-border flex h-[108px] items-center gap-3.5 rounded-[26px] border-3 border-white bg-white/6 px-11 font-pixel text-[26px] font-semibold tracking-[0.06em] text-white"
    >
      {children}
    </a>
  );
}

export function Contact() {
  return (
    <ContentSection id="contact" title="Contact Me">
      <div className="flex flex-1 flex-col items-center justify-center gap-[34px] pb-10 text-center">
        <div className="font-pixel text-[20px] font-semibold tracking-[0.4em] text-white/70 uppercase">
          Have a project in mind?
        </div>
        <h3 className="m-0 font-pixel text-[130px] leading-none font-bold tracking-[0.02em] text-white uppercase">
          Let's talk
        </h3>
        <div className="mt-[30px] flex gap-8">
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
