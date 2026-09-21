import { FIREFLIES } from '../../data/scene/fireflies';
import { timingStyle } from './timing';

export function Fireflies() {
  return FIREFLIES.map((fly, i) => (
    <g key={i} className="ff" style={timingStyle(fly)}>
      <circle cx={fly.cx} cy={fly.cy} r={fly.glow} fill="#e9ff8a" opacity="0.18" />
      <circle cx={fly.cx} cy={fly.cy} r={fly.core} fill="#f6ffb0" />
    </g>
  ));
}
