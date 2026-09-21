/**
 * SVG ids shared between the live scene and the static section backdrops,
 * which reuse the scene through `<use href>`.
 */
export const SKY_ID = 'nsA';
export const LAND_ID = 'nsB';

export const SKY_GRADIENT_ID = 'nsky';
export const AURORA_GREEN_ID = 'aur1';
export const AURORA_BLUE_ID = 'aur2';
export const SOFT_BLUR_ID = 'soft';
export const MOON_MASK_ID = 'moonmask';

export const url = (id: string) => `url(#${id})`;
