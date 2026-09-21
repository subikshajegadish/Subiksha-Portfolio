import { PROFILE } from '../../../data/profile';
import { SocialLinks } from '../../ui/SocialLinks';

export function ProfileCard() {
  return (
    <div className="box-border flex h-[650px] w-[580px] flex-col items-center justify-between rounded-[24px] border-3 border-navy bg-paper/84 px-12 py-11 text-center">
      <div className="flex size-40 items-center justify-center rounded-full border-5 border-azure bg-navy font-pixel text-[58px] font-bold text-ice shadow-[0_0_28px_rgba(123,201,251,0.7)]">
        {PROFILE.initials}
      </div>
      <p className="m-0 text-[19px] leading-[1.5] font-medium text-ink">
        Hi, I'm a software developer finishing my MEng in Software Engineering at the University of
        Maryland. I enjoy building distributed systems, REST APIs and full-stack products, and I
        have a research background in computer vision.
      </p>
      <a
        href={PROFILE.links.cv}
        className="rounded-[12px] border-3 border-navy px-[34px] py-3.5 text-[20px] font-semibold text-navy"
      >
        Click to view my CV
      </a>
      <SocialLinks variant="card" />
    </div>
  );
}
