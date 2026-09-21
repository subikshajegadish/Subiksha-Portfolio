import { useState } from 'react';
import { JOBS } from '../../data/jobs';
import { cn } from '../../lib/cn';
import { ContentSection } from '../layout/ContentSection';

export function Experience() {
  const [selected, setSelected] = useState(0);
  const job = JOBS[selected];

  return (
    <ContentSection id="experience" title="Work Experience">
      {/* Company picker above the details on smaller screens, beside them from xl up. */}
      <div className="mt-8 flex flex-col gap-8 md:mt-10 xl:mt-14 xl:flex-row xl:items-start xl:gap-16">
        <div className="grid grid-cols-2 gap-3 xl:flex xl:w-95 xl:shrink-0 xl:flex-col xl:gap-3.5">
          {JOBS.map((j, i) => {
            const active = i === selected;
            return (
              <button
                key={j.org}
                type="button"
                aria-pressed={active}
                onClick={() => setSelected(i)}
                className={cn(
                  'box-border h-16 w-full cursor-pointer rounded-[18px] border-3 border-azure px-4 py-0 text-left font-pixel text-[16px] md:h-20 md:px-6 md:text-[20px] xl:h-22 xl:px-7 xl:text-[22px]',
                  active ? 'bg-ice font-bold text-navy' : 'bg-white/5 font-medium text-white',
                )}
              >
                {j.org}
              </button>
            );
          })}
        </div>

        {job && (
          <div className="flex grow flex-col gap-3.5">
            <h3 className="m-0 font-pixel text-[28px] leading-[1.1] font-bold text-white md:text-[36px] xl:text-[44px]">
              {job.title}
            </h3>
            <div className="font-body text-[16px] font-medium text-white/78 md:text-[19px]">
              {job.place}
              {'  |  '}
              {job.dates}
            </div>
            <ul className="mx-0 mt-3 mb-0 flex list-none flex-col gap-4 p-0 md:mt-5.5 md:gap-5.5">
              {job.bullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-3 md:gap-4.5">
                  {/* Dot is centred on the first line of text at each size. */}
                  <span className="mt-2 size-2.25 shrink-0 rounded-full bg-azure md:mt-2.5 xl:mt-3" />
                  <span className="font-body text-[17px] leading-[1.55] font-medium text-white md:text-[20px] xl:text-[22px]">
                    {bullet}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </ContentSection>
  );
}
