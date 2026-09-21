import { PROFILE } from '../../data/profile';
import { ScrollDownIcon } from '../icons';
import { Section } from '../layout/Section';

const NAV_ITEMS = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Work Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
] as const;

export function Hero() {
  return (
    <Section id="home">
      <nav
        aria-label="Sections"
        className="absolute top-7.5 left-10 z-5 flex flex-col items-start gap-2.5"
      >
        {NAV_ITEMS.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="text-[28px] leading-[1.2] font-bold text-white"
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div className="herotxt absolute top-89 left-0 flex w-full justify-center">
        <div className="flex flex-col items-start gap-1.5">
          <p className="m-0 text-[30px] leading-none font-bold text-white">Hi, I'm</p>
          <h1 className="m-0 text-[84px] leading-none font-bold tracking-[1px] text-white">
            {PROFILE.name}
          </h1>
          <p className="m-0 self-center text-[40px] leading-none font-medium text-white/92">
            {PROFILE.role}
          </p>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll down"
        className="absolute bottom-6.5 left-11 block leading-[0]"
      >
        <ScrollDownIcon />
      </a>
      <a
        href="#about"
        aria-label="Scroll down"
        className="absolute right-11 bottom-6.5 block leading-[0]"
      >
        <ScrollDownIcon />
      </a>
    </Section>
  );
}
