import { SKILL_GROUPS } from '../../data/skills';
import { ContentSection } from '../layout/ContentSection';

export function Skills() {
  return (
    <ContentSection id="skills" title="Skills">
      {/* Columns size to their widest group and the grid is centred as a block. */}
      <div className="mt-8 grid grid-cols-[auto] justify-center gap-x-16 gap-y-10 sm:grid-cols-[repeat(2,auto)] md:mt-10 lg:grid-cols-[repeat(3,auto)] lg:gap-x-20 xl:mt-8 xl:gap-x-24 xl:gap-y-10">
        {SKILL_GROUPS.map((group) => (
          <div key={group.title} className="max-w-72">
            <h3 className="mx-0 mt-0 mb-3 font-pixel text-[20px] leading-[1.1] font-bold tracking-[0.06em] text-azure md:mb-4 md:text-[24px]">
              {group.title}
            </h3>
            <ul className="m-0 flex list-none flex-col gap-2.5 p-0">
              {group.skills.map(({ name, logo: Logo }) => (
                <li
                  key={name}
                  className="flex items-start gap-3 font-body text-[16px] leading-6 font-medium text-white md:text-[18px] md:leading-7"
                >
                  {Logo ? (
                    <Logo className="block size-6 shrink-0 md:size-7" />
                  ) : (
                    <span className="flex size-6 shrink-0 items-center justify-center md:size-7">
                      <span className="size-2 rounded-full bg-azure" />
                    </span>
                  )}
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
