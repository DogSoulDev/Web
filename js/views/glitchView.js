// glitchView.js// glitchView.js// glitchView.js// glitchView.js

// View rendering for glitch/distortion effects

// View rendering for glitch/distortion effects

export function applyGlitch(element) {

  if (!element) return;// View rendering for glitch/distortion effects// View rendering for glitch/distortion effects

  element.classList.add('glitch');

  setTimeout(() => {export function applyGlitch(element) {

    element.classList.remove('glitch');

  }, 1200);  if (!element) return;

}

  element.classList.add('glitch');

  setTimeout(() => {export function applyGlitch(element) {export function applyGlitch(element) {

    element.classList.remove('glitch');

  }, 1200);  if (!element) return;  if (!element) return;

}

  element.classList.add('glitch');  element.classList.add('glitch');

  setTimeout(() => {  setTimeout(() => {

    element.classList.remove('glitch');    element.classList.remove('glitch');

  }, 1200);  }, 1200);

}}

