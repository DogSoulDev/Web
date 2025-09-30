// glitchView.js
// View rendering for glitch/distortion effects

export function applyGlitch(element) {
  if (!element) return;
  element.classList.add('glitch');
  setTimeout(() => {
    element.classList.remove('glitch');
  }, 1200);
}
