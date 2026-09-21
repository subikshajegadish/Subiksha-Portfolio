import { Land } from './Land';
import { SceneDefs } from './SceneDefs';
import { SceneSvg } from './SceneSvg';
import { Sky } from './Sky';

/**
 * The live night scene, fixed behind the page. It blurs over the first screen of scrolling
 * (`.bg`) and dims over the second (`.dim2`).
 */
export function NightScene() {
  return (
    <div className="pointer-events-none fixed top-0 left-0 z-0 h-screen w-full overflow-hidden bg-night xl:max-h-225">
      <div className="bg absolute -inset-10">
        <SceneSvg>
          <SceneDefs />
          <Sky />
          <Land />
        </SceneSvg>
      </div>
      <div className="dim2 absolute inset-0 bg-shade opacity-0" />
    </div>
  );
}
