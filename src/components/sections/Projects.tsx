import { PROJECTS } from '../../data/projects';
import { useCycle } from '../../hooks/useCycle';
import { ContentSection } from '../layout/ContentSection';
import { ArrowButton } from '../ui/ArrowButton';
import { Chip } from '../ui/Chip';

const pad = (n: number) => String(n).padStart(2, '0');

export function Projects() {
  const { index, prev, next } = useCycle(PROJECTS.length);
  const project = PROJECTS[index];
  if (!project) return null;

  return (
    <ContentSection id="projects" title="Projects">
      {/* Details above the preview on smaller screens, beside it from xl up. */}
      <div className="mt-8 flex flex-col gap-8 md:mt-10 xl:mt-17.5 xl:flex-row xl:items-center xl:gap-15">
        <div className="flex flex-col gap-4 md:gap-5.5 xl:w-115 xl:shrink-0">
          <div className="font-pixel text-[16px] font-medium tracking-[0.3em] text-white/70 md:text-[22px]">
            [ {pad(index + 1)} / {pad(PROJECTS.length)} ]
          </div>
          <h3 className="m-0 font-pixel text-[32px] leading-[1.1] font-bold text-white uppercase md:text-[44px] xl:text-[52px]">
            {project.title}
          </h3>
          <p className="m-0 font-body text-[17px] leading-[1.6] font-medium text-white/86 md:text-[19px] xl:text-[21px]">
            {project.description}
          </p>
          <div className="mt-2 flex flex-wrap gap-3">
            {project.tech.map((tech, i) => (
              <Chip key={`${tech}-${i}`}>{tech}</Chip>
            ))}
          </div>
        </div>

        <div className="flex min-w-0 flex-1 items-center justify-center gap-3 md:gap-4.5 xl:justify-start">
          <ArrowButton direction="left" label="Previous project" onClick={prev} />
          {/* Keeps the 580x380 proportions and shrinks to fit narrower screens. */}
          <div className="box-border flex aspect-29/19 max-w-145 min-w-0 flex-1 flex-col items-center justify-center gap-3.5 rounded-[26px] border-3 border-white bg-white/6 p-4 text-center md:p-7.5">
            <div className="font-pixel text-[20px] font-bold text-white md:text-[30px]">
              {project.title}
            </div>
            <div className="font-pixel text-[12px] font-medium tracking-[0.2em] text-white/60 uppercase md:text-[16px]">
              [Add a screenshot]
            </div>
          </div>
          <ArrowButton direction="right" label="Next project" onClick={next} />
        </div>
      </div>
    </ContentSection>
  );
}
