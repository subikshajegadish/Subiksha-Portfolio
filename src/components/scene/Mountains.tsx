/** Mountain ranges back to front, with snow-lit facets on the far peaks. */
const RANGES = [
  {
    fill: '#0d2452',
    points: '0,900 0,320 190,150 360,260 630,60 800,215 1010,160 1210,290 1440,190 1440,900',
  },
  { fill: '#33639b', points: '630,60 715,155 665,180 610,140 560,120' },
  { fill: '#1b3f78', points: '705,205 800,215 860,258 760,238' },
  { fill: '#183a70', points: '190,150 260,205 220,270 140,230 100,200' },
  {
    fill: '#102c5c',
    points: '0,900 0,390 250,240 500,400 760,300 1010,430 1200,330 1440,410 1440,900',
  },
  { fill: '#0c2449', points: '0,900 0,570 300,480 620,570 900,530 1200,590 1440,510 1440,900' },
] as const;

export function Mountains() {
  return RANGES.map((range) => (
    <polygon key={range.points} fill={range.fill} points={range.points} />
  ));
}
