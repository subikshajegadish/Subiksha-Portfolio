import { STARS } from '../../data/scene/stars';
import { timingStyle } from './timing';

export function Stars() {
  return STARS.map((star, i) => (
    <circle
      key={i}
      className="star"
      cx={star.cx}
      cy={star.cy}
      r={star.r}
      fill="#f2f6ff"
      style={timingStyle(star)}
    />
  ));
}
