import { SKILL_GROUPS } from '../../data/skills';
import { ContentSection } from '../layout/ContentSection';

export function Skills() {
  return (
    <ContentSection id="skills" title="Skills">
      <div className="mt-[90px] grid grid-cols-3 grid-rows-[repeat(2,auto)] gap-20">
        {SKILL_GROUPS.map((group) => (
          <div key={group.title}>
            <h3 className="mx-0 mt-0 mb-[26px] font-pixel text-[28px] leading-[1.1] font-bold tracking-[0.06em] text-azure">
              {group.title}
            </h3>
            <ul className="m-0 flex list-none flex-col gap-[18px] p-0">
              {group.skills.map(({ name, logo: Logo }) => (
                <li
                  key={name}
                  className="flex items-center gap-4 font-body text-[22px] font-medium text-white"
                >
                  <Logo className="block shrink-0" />
                  <span>{name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </ContentSection>
  );
}
