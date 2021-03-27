
// aspect ratio
export const getAspectRatio = () => screen.availWidth / screen.availHeight;
export const isVertical = (ratio = 3 / 4) => { return ASPECT_RATIO < ratio; };

window.addEventListener('resize', () => ASPECT_RATIO = getAspectRatio());
export let ASPECT_RATIO = getAspectRatio();

export function autoFlexClass(thresholdRatio = 3/4): string {
    return isVertical(thresholdRatio) ? 'flex-vertical' : 'flex-horizontal';
}
