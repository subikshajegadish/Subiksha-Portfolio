import { Section } from '../../layout/Section';
import { ProfileCard } from './ProfileCard';
import { Timeline } from './Timeline';

export function About() {
  return (
    <Section id="about" className="box-border flex items-end justify-center gap-10 pb-12.5">
      <ProfileCard />
      <Timeline />
    </Section>
  );
}
