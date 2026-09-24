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
  dates?: string;
  /** One or two short sentences. */
  description: string;
  tech: readonly string[];
  /** Source repository, opened from the GitHub button. */
  repo?: string;
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
  /** Brand mark; skills without one (concepts) get a plain bullet. */
  logo?: ComponentType<SVGProps<SVGSVGElement>>;
}

export interface SkillGroup {
  title: string;
  skills: readonly Skill[];
}
