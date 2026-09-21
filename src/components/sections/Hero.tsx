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
        className="absolute top-7.5 left-6 z-5 flex flex-col items-start gap-2 md:left-10 lg:gap-2.5"
      >
        {NAV_ITEMS.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="text-[20px] leading-[1.2] font-bold text-white lg:text-[28px]"
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div className="herotxt absolute top-[45%] left-0 box-border flex w-full justify-center pr-12 pl-6 md:px-18 xl:top-89 xl:px-0">
        <div className="flex flex-col items-start gap-1.5">
          <p className="m-0 text-[20px] leading-none font-bold text-white md:text-[26px] xl:text-[30px]">
            Hi, I'm
          </p>
          <h1 className="m-0 text-[44px] leading-none font-bold tracking-[1px] text-white sm:text-[56px] md:text-[68px] xl:text-[84px]">
            {PROFILE.name}
          </h1>
          <p className="m-0 self-center text-[24px] leading-none font-medium text-white/92 md:text-[32px] xl:text-[40px]">
            {PROFILE.role}
          </p>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll down"
        className="absolute bottom-6.5 left-6 block leading-[0] md:left-11"
      >
        <ScrollDownIcon />
      </a>
      <a
        href="#about"
        aria-label="Scroll down"
        className="absolute right-6 bottom-6.5 block leading-[0] md:right-11"
      >
        <ScrollDownIcon />
      </a>
    </Section>
  );
}
