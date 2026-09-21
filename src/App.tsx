import { SocialBar } from './components/layout/SocialBar';
import { NightScene } from './components/scene/NightScene';
import { About } from './components/sections/about/About';
import { Contact } from './components/sections/Contact';
import { Experience } from './components/sections/Experience';
import { Hero } from './components/sections/Hero';
import { Projects } from './components/sections/Projects';
import { Skills } from './components/sections/Skills';
import { FireflyCursor } from './components/ui/FireflyCursor';

export default function App() {
  return (
    // `isolate` gives the section backdrops (negative z-index) a stacking context to sit in,
    // above the page background and below the fixed scene.
    <div className="relative isolate w-full overflow-x-clip bg-night font-pixel">
      <NightScene />
      <SocialBar />

      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />

      <FireflyCursor />
    </div>
  );
}
