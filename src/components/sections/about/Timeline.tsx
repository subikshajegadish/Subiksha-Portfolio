import { TIMELINE } from '../../../data/timeline';
import type { Milestone } from '../../../types/content';
import { cn } from '../../../lib/cn';
import { CheckIcon } from '../../icons';

/** Vertical line that fades out at both ends. */
const LINE_GRADIENT =
  'linear-gradient(to bottom, rgba(255, 255, 255, 0), #ffffff 8%, #ffffff 92%, rgba(255, 255, 255, 0))';

type Side = 'left' | 'right';

function Entry({ milestone, side }: { milestone: Milestone; side: Side }) {
  return (
    <div className={cn('flex flex-col gap-1.5', side === 'left' ? 'text-right' : 'text-left')}>
      <div className="font-pixel text-[21px] leading-[1.15] font-bold text-white">
        {milestone.title}
      </div>
      <div className="text-[15px] leading-[1.35] font-medium text-white/90">{milestone.detail}</div>
    </div>
  );
}

function When({ children, side }: { children: string; side: Side }) {
  return (
    <div
      className={cn(
        'text-[15px] font-semibold text-white/92',
        side === 'left' ? 'text-right' : 'text-left',
      )}
    >
      {children}
    </div>
  );
}

function Marker() {
  return (
    <div className="relative z-1 flex size-[30px] items-center justify-center rounded-full bg-white shadow-[0_0_0_4px_rgba(4,18,31,0.6)]">
      <CheckIcon />
    </div>
  );
}

export function Timeline() {
  return (
    <div className="box-border flex h-[650px] w-[640px] flex-col justify-center px-9 py-10">
      <div className="relative">
        <div
          className="absolute top-0 bottom-0 left-1/2 -ml-0.5 w-1 rounded-[2px]"
          style={{ background: LINE_GRADIENT }}
        />
        <ol className="relative m-0 list-none p-0">
          {TIMELINE.map((milestone, i) => {
            const entryOnLeft = i % 2 === 0;
            return (
              <li
                key={milestone.title}
                className="grid h-[118px] grid-cols-[minmax(0,1fr)_30px_minmax(0,1fr)] items-center gap-x-[18px]"
              >
                {entryOnLeft ? (
                  <Entry milestone={milestone} side="left" />
                ) : (
                  <When side="left">{milestone.when}</When>
                )}
                <Marker />
                {entryOnLeft ? (
                  <When side="right">{milestone.when}</When>
                ) : (
                  <Entry milestone={milestone} side="right" />
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
