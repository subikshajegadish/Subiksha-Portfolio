import { SECTION_HEIGHT } from './components/layout/constants';
import { SocialBar } from './components/layout/SocialBar';
import { NightScene } from './components/scene/NightScene';
import { SceneBackdrop } from './components/scene/SceneBackdrop';
import { About } from './components/sections/about/About';
import { Contact } from './components/sections/Contact';
import { Experience } from './components/sections/Experience';
import { Hero } from './components/sections/Hero';
import { Projects } from './components/sections/Projects';
import { Skills } from './components/sections/Skills';

/** Page sections, top to bottom. Each one is SECTION_HEIGHT tall. */
const SECTIONS = [Hero, About, Experience, Projects, Skills, Contact];

/** From the third screen on, backdrops match the live scene after it has dimmed. */
const FIRST_DIMMED_SECTION = 2;

export default function App() {
  return (
    <div
      className="relative w-full min-w-360 bg-night font-pixel"
      style={{ height: SECTIONS.length * SECTION_HEIGHT }}
    >
      {/* The hero sits over the live scene; every later section gets a static backdrop. */}
      {SECTIONS.slice(1).map((_, i) => {
        const index = i + 1;
        return (
          <SceneBackdrop
            key={index}
            top={index * SECTION_HEIGHT}
            dimmed={index >= FIRST_DIMMED_SECTION}
          />
        );
      })}

      <NightScene />
      <SocialBar />

      {SECTIONS.map((SectionComponent, i) => (
        <SectionComponent key={i} />
      ))}
    </div>
  );
}
