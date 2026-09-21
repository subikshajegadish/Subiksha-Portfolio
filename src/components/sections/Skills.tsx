import { SKILL_GROUPS } from '../../data/skills';
import { ContentSection } from '../layout/ContentSection';

export function Skills() {
  return (
    <ContentSection id="skills" title="Skills">
      <div className="mt-8 grid grid-cols-1 gap-10 sm:grid-cols-2 md:mt-10 lg:grid-cols-3 lg:grid-rows-[repeat(2,auto)] lg:gap-14 xl:mt-22.5 xl:gap-20">
        {SKILL_GROUPS.map((group) => (
          <div key={group.title}>
            <h3 className="mx-0 mt-0 mb-4 font-pixel text-[22px] leading-[1.1] font-bold tracking-[0.06em] text-azure md:mb-6.5 md:text-[28px]">
              {group.title}
            </h3>
            <ul className="m-0 flex list-none flex-col gap-3.5 p-0 md:gap-4.5">
              {group.skills.map(({ name, logo: Logo }) => (
                <li
                  key={name}
                  className="flex items-center gap-4 font-body text-[18px] font-medium text-white md:text-[22px]"
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
