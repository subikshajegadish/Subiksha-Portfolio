import { useState } from 'react';
import { JOBS } from '../../data/jobs';
import { cn } from '../../lib/cn';
import { ContentSection } from '../layout/ContentSection';

export function Experience() {
  const [selected, setSelected] = useState(0);
  const job = JOBS[selected];

  return (
    <ContentSection id="experience" title="Work Experience">
      <div className="mt-14 flex items-start gap-22.5">
        <div className="flex w-115 shrink-0 flex-col gap-3.5">
          {JOBS.map((j, i) => {
            const active = i === selected;
            return (
              <button
                key={j.org}
                type="button"
                aria-pressed={active}
                onClick={() => setSelected(i)}
                className={cn(
                  'box-border h-22 w-full cursor-pointer rounded-[18px] border-3 border-azure px-7.5 py-0 text-left font-pixel text-[24px]',
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
              {' \u00a0|\u00a0 '}
              {job.dates}
            </div>
            <ul className="mx-0 mt-5.5 mb-0 flex list-none flex-col gap-5.5 p-0">
              {job.bullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-4.5">
                  <span className="mt-3 size-2.25 shrink-0 rounded-full bg-azure" />
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
