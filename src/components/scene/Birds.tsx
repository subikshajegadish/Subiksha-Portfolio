import { FLOCKS } from '../../data/scene/birds';

const WING_PATH = 'M0,0 Q-7,-7 -17,-3 Q-8,-1 0,4 Q8,-1 17,-3 Q7,-7 0,0 Z';
/** Each bird in a flock flaps a quarter second behind the one before it. */
const FLAP_STAGGER = 0.25;

export function Birds() {
  return (
    <g fill="#cfe4ff" opacity="0.8">
      {FLOCKS.map((flock) => (
        <g key={flock.variant} className={`fly ${flock.variant}`}>
          {flock.birds.map((bird, i) => (
            <g key={i} transform={`translate(${bird.x} ${bird.y}) scale(${bird.scale})`}>
              <path
                className="wing"
                style={{ animationDelay: `${-i * FLAP_STAGGER}s` }}
                d={WING_PATH}
              />
            </g>
          ))}
        </g>
      ))}
    </g>
  );
}
