import { PROFILE } from '../../data/profile';
import { cn } from '../../lib/cn';
import { GitHubIcon, LinkedInIcon, MailIcon } from '../icons';
import { CircleIconLink } from './CircleIconLink';

const VARIANTS = {
  /** Fixed vertical rail on the right edge of the page. */
  rail: {
    layout: 'flex-col gap-3 md:gap-4 xl:gap-5',
    link: 'size-9 border-azure md:size-11 xl:size-12 [&>svg]:size-5 md:[&>svg]:size-6.5',
  },
  /** Row inside the About card. */
  card: { layout: 'gap-7', link: 'size-13 border-navy-deep' },
} as const;

interface SocialLinksProps {
  variant: keyof typeof VARIANTS;
  className?: string;
}

export function SocialLinks({ variant, className }: SocialLinksProps) {
  const { layout, link } = VARIANTS[variant];
  return (
    <div className={cn('flex', layout, className)}>
      <CircleIconLink href={PROFILE.links.github} label="GitHub" className={link}>
        <GitHubIcon />
      </CircleIconLink>
      <CircleIconLink href={PROFILE.links.linkedin} label="LinkedIn" className={link}>
        <LinkedInIcon />
      </CircleIconLink>
      <CircleIconLink href="#contact" label="Contact" className={link}>
        <MailIcon />
      </CircleIconLink>
    </div>
  );
}
