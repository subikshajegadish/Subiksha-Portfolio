import { useState } from 'react';
import { JOBS } from '../../data/jobs';
import { cn } from '../../lib/cn';
import { ContentSection } from '../layout/ContentSection';

export function Experience() {
  const [selected, setSelected] = useState(0);
  const job = JOBS[selected];

  return (
    <ContentSection id="experience" title="Work Experience">
      <div className="mt-14 flex items-start gap-[90px]">
        <div className="flex w-[460px] shrink-0 flex-col gap-3.5">
          {JOBS.map((j, i) => {
            const active = i === selected;
            return (
              <button
                key={j.org}
                type="button"
                aria-pressed={active}
                onClick={() => setSelected(i)}
                className={cn(
                  'box-border h-[88px] w-full cursor-pointer rounded-[18px] border-3 border-azure px-[30px] py-0 text-left font-pixel text-[24px]',
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
            <h3 className="m-0 font-pixel text-[44px] leading-[1.1] font-bold text-white">
              {job.title}
            </h3>
            <div className="font-body text-[19px] font-medium text-white/78">
              {job.place}
              {'  |  '}
              {job.dates}
            </div>
            <ul className="mx-0 mt-[22px] mb-0 flex list-none flex-col gap-[22px] p-0">
              {job.bullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-[18px]">
                  <span className="mt-3 size-[9px] shrink-0 rounded-full bg-azure" />
                  <span className="font-body text-[22px] leading-[1.55] font-medium text-white">
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
