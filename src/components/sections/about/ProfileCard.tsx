import { PROFILE } from '../../../data/profile';
import { SocialLinks } from '../../ui/SocialLinks';

export function ProfileCard() {
  return (
    <div className="box-border flex w-full max-w-125 flex-col items-center justify-between gap-6 rounded-3xl border-3 border-navy bg-paper/84 px-6 py-8 text-center md:px-10 md:py-9 xl:h-140 xl:gap-0">
      <div className="flex size-28 items-center justify-center rounded-full border-5 border-azure bg-navy font-pixel text-[42px] font-bold text-ice shadow-[0_0_28px_rgba(123,201,251,0.7)] md:size-32 md:text-[48px]">
        {PROFILE.initials}
      </div>
      <p className="m-0 text-[17px] leading-normal font-medium text-ink md:text-[18px]">
        Hi, I'm a software developer finishing my MEng in Software Engineering at the University of
        Maryland. I enjoy building distributed systems, REST APIs and full-stack products, and I
        have a research background in computer vision.
      </p>
      <a
        href={PROFILE.links.cv}
        className="rounded-xl border-3 border-navy px-7 py-3 text-[18px] font-semibold text-navy"
      >
        Click to view my CV
      </a>
      <SocialLinks variant="card" />
    </div>
  );
}
