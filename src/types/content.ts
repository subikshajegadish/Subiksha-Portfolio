import type { ComponentType, SVGProps } from 'react';

export interface Job {
  org: string;
  title: string;
  place: string;
  dates: string;
  bullets: readonly string[];
}

export interface Project {
  title: string;
  description: string;
  tech: readonly string[];
}

/** A milestone on the About timeline. */
export interface Milestone {
  title: string;
  detail: string;
  /** When it happened, shown on the opposite side of the line. */
  when: string;
}

export interface Skill {
  name: string;
  logo: ComponentType<SVGProps<SVGSVGElement>>;
}

export interface SkillGroup {
  title: string;
  skills: readonly Skill[];
}
