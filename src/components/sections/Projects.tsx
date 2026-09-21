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
      <div className="mt-17.5 flex items-center gap-15">
        <div className="flex w-115 shrink-0 flex-col gap-5.5">
          <div className="font-pixel text-[22px] font-medium tracking-[0.3em] text-white/70">
            [ {pad(index + 1)} / {pad(PROJECTS.length)} ]
          </div>
          <h3 className="m-0 font-pixel text-[52px] leading-[1.1] font-bold text-white uppercase">
            {project.title}
          </h3>
          <p className="m-0 font-body text-[21px] leading-[1.6] font-medium text-white/86">
            {project.description}
          </p>
          <div className="mt-2 flex flex-wrap gap-3">
            {project.tech.map((tech, i) => (
              <Chip key={`${tech}-${i}`}>{tech}</Chip>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4.5">
          <ArrowButton direction="left" label="Previous project" onClick={prev} />
          <div className="box-border flex h-95 w-145 flex-col items-center justify-center gap-3.5 rounded-[26px] border-3 border-white bg-white/6 p-7.5 text-center">
            <div className="font-pixel text-[30px] font-bold text-white">{project.title}</div>
            <div className="font-pixel text-[16px] font-medium tracking-[0.2em] text-white/60 uppercase">
              [Add a screenshot]
            </div>
          </div>
          <ArrowButton direction="right" label="Next project" onClick={next} />
        </div>
      </div>
    </ContentSection>
  );
}
