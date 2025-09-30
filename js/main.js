function setupThemeToggle() {
  const btn = document.getElementById('theme-toggle');
  if (!btn) return;
  btn.addEventListener('click', () => {
    document.body.classList.toggle('light');
    btn.classList.toggle('light');
    btn.textContent = document.body.classList.contains('light') ? '🌞' : '🌙';
  });
}
function setupCursorCyberpunk() {
  // El cursor ya está definido en CSS, pero aquí puedes personalizarlo dinámicamente si lo deseas
}
function setupEasterEggs() {
  // Ejemplo: mostrar un mensaje secreto al pulsar una combinación de teclas
  let code = '';
  window.addEventListener('keydown', (e) => {
    code += e.key.toLowerCase();
    if (code.includes('hacker')) {
      showSubtitle('You found the secret hacker easter egg!');
      code = '';
    }
    if (code.length > 10) code = code.slice(-10);
  });
}
// main.js
// Entry point for DogSoulDev Portfolio web app
// Loads mainController and creative effects after DOM is ready

import { renderTerminal } from './Views/terminalView.js';
import { showSubtitle } from './Views/subtitleView.js';
import { applyGlitch } from './Views/glitchView.js';
import { renderParticles } from './Views/particleView.js';

function setupNeonBg() {
  // Already handled by CSS, but can animate or add more effects here if needed
}

function startCreativeExperience() {
  // 1. Terminal hacker animation
  const bootMessages = [
    'Initializing DogSoulDev Web...',
    'Loading cyber modules...',
    'Authenticating user...',
    'Access granted. Welcome!',
    'Deploying creative interface...'
  ];
  renderTerminal(bootMessages, () => {
    // 2. Particle/circuit background
    renderParticles();
    // 3. Glitch effect on title
    const title = document.querySelector('.glitch');
    applyGlitch(title);
    // 4. Anime subtitle
    showSubtitle('Welcome to the most creative hacker portfolio!');
    // 5. Dark/Light mode toggle (customizable, can be added later)
    // 6. Cursor custom (can be added later)
    // 7. Easter eggs (can be added later)
    // 8. All other creative effects
    if (window.initApp) {
      window.initApp();
    }
  });
}

document.addEventListener('DOMContentLoaded', function() {
  setupNeonBg();
  setupThemeToggle();
  setupCursorCyberpunk();
  setupEasterEggs();
  startCreativeExperience();
});
