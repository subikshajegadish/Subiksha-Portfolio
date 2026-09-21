import { AURORA_BLUE_ID, AURORA_GREEN_ID, SOFT_BLUR_ID, url } from './ids';

export function Aurora() {
  return (
    <>
      <g className="aur" filter={url(SOFT_BLUR_ID)}>
        <path
          fill={url(AURORA_GREEN_ID)}
          d="M-60,250 C200,110 430,300 700,170 S1200,110 1500,230 L1500,380 C1200,300 900,430 700,330 S200,420 -60,380 Z"
        />
      </g>
      <g className="aur a2" filter={url(SOFT_BLUR_ID)}>
        <path
          fill={url(AURORA_BLUE_ID)}
          d="M-60,330 C260,220 460,380 760,270 S1180,230 1500,330 L1500,450 C1200,390 950,500 720,420 S240,470 -60,450 Z"
        />
      </g>
    </>
  );
}
