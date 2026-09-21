import { Section } from '../../layout/Section';
import { ProfileCard } from './ProfileCard';
import { Timeline } from './Timeline';

/** Card and timeline stack on smaller screens and sit side by side from xl up. */
export function About() {
  return (
    <Section
      id="about"
      backdrop="plain"
      className="box-border flex flex-col items-center gap-10 pt-16 pr-12 pb-12 pl-6 md:pt-20 md:pr-18 md:pl-12 xl:flex-row xl:items-center xl:justify-center xl:px-0 xl:pt-0 xl:pb-0"
    >
      <ProfileCard />
      <Timeline />
    </Section>
  );
}
