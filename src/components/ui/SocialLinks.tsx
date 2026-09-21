import { PROFILE } from '../../data/profile';
import { cn } from '../../lib/cn';
import { GitHubIcon, LinkedInIcon, MailIcon } from '../icons';
import { CircleIconLink } from './CircleIconLink';

const VARIANTS = {
  /** Fixed icon row at the top of the page. */
  bar: { gap: 'gap-10', link: 'size-12 border-azure' },
  /** Row inside the About card. */
  card: { gap: 'gap-7', link: 'size-13 border-navy-deep' },
} as const;

interface SocialLinksProps {
  variant: keyof typeof VARIANTS;
  className?: string;
}

export function SocialLinks({ variant, className }: SocialLinksProps) {
  const { gap, link } = VARIANTS[variant];
  return (
    <div className={cn('flex', gap, className)}>
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
