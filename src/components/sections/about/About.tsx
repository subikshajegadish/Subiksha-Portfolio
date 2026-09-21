import { Section } from '../../layout/Section';
import { ProfileCard } from './ProfileCard';
import { Timeline } from './Timeline';

/** Card and timeline stack on smaller screens and sit side by side from xl up. */
export function About() {
  return (
    <Section
      id="about"
      backdrop="plain"
      className="box-border flex flex-col items-center gap-10 px-6 pt-28 pb-12 md:px-12 xl:flex-row xl:items-end xl:justify-center xl:px-0 xl:pt-0 xl:pb-12.5"
    >
      <ProfileCard />
      <Timeline />
    </Section>
  );
}
