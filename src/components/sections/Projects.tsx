import { PROJECTS } from '../../data/projects';
import { useCycle } from '../../hooks/useCycle';
import { cn } from '../../lib/cn';
import { ContentSection } from '../layout/ContentSection';
import { GitHubIcon } from '../icons';
import { ArrowButton } from '../ui/ArrowButton';
import { Chip } from '../ui/Chip';
import { CircleIconLink } from '../ui/CircleIconLink';

const pad = (n: number) => String(n).padStart(2, '0');

export function Projects() {
  const { index, prev, next } = useCycle(PROJECTS.length);
  const project = PROJECTS[index];
  if (!project) return null;

  return (
    <ContentSection id="projects" title="Projects">
      {/* Details above the preview on smaller screens, beside it from xl up. */}
      <div className="mt-8 flex flex-col gap-8 md:mt-10 xl:mt-12 xl:flex-row xl:items-center xl:gap-12">
        <div className="flex flex-col gap-4 xl:w-120 xl:shrink-0">
          <div className="font-pixel text-[16px] font-medium tracking-[0.3em] text-white/70 md:text-[20px]">
            [ {pad(index + 1)} / {pad(PROJECTS.length)} ]
          </div>
          <div className="flex items-start justify-between gap-4">
            <div className="flex flex-col gap-1.5">
              <h3 className="m-0 font-pixel text-[24px] leading-[1.15] font-bold text-white uppercase md:text-[30px] xl:text-[32px]">
                {project.title}
              </h3>
              {project.dates && (
                <div className="font-body text-[15px] font-medium text-white/70 md:text-[17px]">
                  {project.dates}
                </div>
              )}
            </div>
            {project.repo && (
              <CircleIconLink
                href={project.repo}
                label={`${project.title} on GitHub`}
                external
                className="size-11 shrink-0 border-azure [&>svg]:size-6"
              >
                <GitHubIcon />
              </CircleIconLink>
            )}
          </div>
          <p className="m-0 font-body text-[16px] leading-[1.55] font-medium text-white/86 md:text-[18px]">
            {project.description}
          </p>
          <div className="mt-1 flex flex-wrap gap-3">
            {project.tech.map((tech, i) => (
              <Chip key={`${tech}-${i}`}>{tech}</Chip>
            ))}
          </div>
        </div>

        <div className="flex min-w-0 flex-1 items-center justify-center gap-3 md:gap-4.5 xl:justify-start">
          <ArrowButton direction="left" label="Previous project" onClick={prev} />
          {/* Keeps the 580x380 proportions and shrinks to fit narrower screens. */}
          <div className="relative box-border flex aspect-29/19 max-w-145 min-w-0 flex-1 flex-col items-center justify-center gap-3.5 overflow-hidden rounded-[26px] border-3 border-white bg-white/6 p-4 text-center md:p-7.5">
            {project.image ? (
              <img
                key={project.image.src}
                src={project.image.src}
                alt={project.image.alt}
                decoding="async"
                className={cn(
                  'absolute inset-0 size-full',
                  project.image.fit === 'cover' ? 'object-cover' : 'bg-navy object-contain',
                )}
              />
            ) : (
              <div className="font-pixel text-[18px] font-bold text-white md:text-[24px]">
                {project.title}
              </div>
            )}
          </div>
          <ArrowButton direction="right" label="Next project" onClick={next} />
        </div>
      </div>
    </ContentSection>
  );
}
