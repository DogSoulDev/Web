import TerminalController from './controllers/terminalController.js';
import TerminalView from './views/terminalView.js';
import ChallengeController from './controllers/challengeController.js';
import ChallengeView from './views/challengeView.js';
import { showSubtitle } from './views/subtitleView.js';
import { applyGlitch } from './views/glitchView.js';
import { renderParticles } from './views/particleView.js';

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

function setupNeonBg() {
  // Already handled by CSS, but can animate or add more effects here if needed
}

function startCreativeExperience() {
  const terminalView = new TerminalView();
  const bootMessages = [
    'Initializing DogSoulDev Web...',
    'Loading cyber modules...',
    'Authenticating user...',
    'Access granted. Welcome!',
    'Deploying creative interface...'
  ];
  let i = 0;
  function typeBoot() {
    if (i < bootMessages.length) {
      terminalView.print(bootMessages[i]);
      i++;
      setTimeout(typeBoot, 700);
    } else {
      setTimeout(() => {
        renderParticles();
        const title = document.querySelector('.glitch');
        applyGlitch(title);
        showSubtitle('Welcome to the most creative hacker portfolio!');
        setupTerminalInput();
        setupChallengeButton();
        if (window.initApp) {
          window.initApp();
        }
      }, 1000);
    }
  }
  typeBoot();
}

function setupChallengeButton() {
  let btn = document.getElementById('challenge-btn');
  if (!btn) {
    btn = document.createElement('button');
    btn.id = 'challenge-btn';
    btn.textContent = 'Start Hacker CTF Challenge';
    btn.style.position = 'fixed';
    btn.style.bottom = '80px';
    btn.style.left = '50%';
    btn.style.transform = 'translateX(-50%)';
    btn.style.padding = '12px 28px';
    btn.style.background = '#39ff14';
    btn.style.color = '#222';
    btn.style.fontFamily = 'Fira Mono, Consolas, monospace';
    btn.style.border = 'none';
    btn.style.borderRadius = '10px';
    btn.style.fontWeight = 'bold';
    btn.style.zIndex = '9999';
    document.body.appendChild(btn);
  }
  btn.onclick = () => {
    if (!window.challengeController) {
      window.challengeController = new ChallengeController();
    }
    window.challengeController.startChallenge();
  };
}

function setupTerminalInput() {
  let input = document.getElementById('terminal-input');
  if (!input) {
    input = document.createElement('input');
    input.id = 'terminal-input';
    input.type = 'text';
    input.placeholder = 'Type a command (help, about, skills, experience, contact, clear, easteregg)';
    input.style.position = 'fixed';
    input.style.bottom = '30px';
    input.style.left = '50%';
    input.style.transform = 'translateX(-50%)';
    input.style.width = '400px';
    input.style.padding = '10px';
    input.style.background = '#111';
    input.style.color = '#39ff14';
    input.style.fontFamily = 'Fira Mono, Consolas, monospace';
    input.style.border = '1px solid #39ff14';
    input.style.borderRadius = '8px';
    input.style.zIndex = '9999';
    document.body.appendChild(input);
  }
  const controller = new TerminalController();
  input.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
      controller.handleCommand(input.value);
      input.value = '';
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
import TerminalController from './controllers/terminalController.js';

import TerminalView from './views/terminalView.js';import TerminalController from './controllers/terminalController.js';

import ChallengeController from './controllers/challengeController.js';import TerminalView from './views/terminalView.js';

import ChallengeView from './views/challengeView.js';import ChallengeController from './controllers/challengeController.js';

import { showSubtitle } from './views/subtitleView.js';import ChallengeView from './views/challengeView.js';

import { applyGlitch } from './views/glitchView.js';import { showSubtitle } from './views/subtitleView.js';

import { renderParticles } from './views/particleView.js';import { applyGlitch } from './views/glitchView.js';

import { renderParticles } from './views/particleView.js';

function setupThemeToggle() {

  const btn = document.getElementById('theme-toggle');function setupThemeToggle() {

  if (!btn) return;  const btn = document.getElementById('theme-toggle');

  btn.addEventListener('click', () => {  if (!btn) return;

    document.body.classList.toggle('light');  btn.addEventListener('click', () => {

    btn.classList.toggle('light');    document.body.classList.toggle('light');

    btn.textContent = document.body.classList.contains('light') ? '🌞' : '🌙';    btn.classList.toggle('light');

  });    btn.textContent = document.body.classList.contains('light') ? '🌞' : '🌙';

}  });



function setupCursorCyberpunk() {

  // El cursor ya está definido en CSS, pero aquí puedes personalizarlo dinámicamente si lo deseasfunction setupCursorCyberpunk() {

}  // El cursor ya está definido en CSS, pero aquí puedes personalizarlo dinámicamente si lo deseas

}

function setupEasterEggs() {

  let code = '';function setupEasterEggs() {

  window.addEventListener('keydown', (e) => {  // Ejemplo: mostrar un mensaje secreto al pulsar una combinación de teclas

    code += e.key.toLowerCase();  let code = '';

    if (code.includes('hacker')) {  window.addEventListener('keydown', (e) => {

      showSubtitle('You found the secret hacker easter egg!');    code += e.key.toLowerCase();

      code = '';    if (code.includes('hacker')) {

    }      showSubtitle('You found the secret hacker easter egg!');

    if (code.length > 10) code = code.slice(-10);      code = '';

  });    }

}    if (code.length > 10) code = code.slice(-10);

  });

function setupNeonBg() {}

  // Already handled by CSS, but can animate or add more effects here if needed

}function setupNeonBg() {

  // Already handled by CSS, but can animate or add more effects here if needed

function startCreativeExperience() {}

  const terminalView = new TerminalView();

  const bootMessages = [function startCreativeExperience() {

    'Initializing DogSoulDev Web...',  // 1. Terminal hacker animation (boot)

    'Loading cyber modules...',  const terminalView = new TerminalView();

    'Authenticating user...',  const bootMessages = [

    'Access granted. Welcome!',    'Initializing DogSoulDev Web...',

    'Deploying creative interface...'    'Loading cyber modules...',

  ];    'Authenticating user...',

  let i = 0;    'Access granted. Welcome!',

  function typeBoot() {    'Deploying creative interface...'

    if (i < bootMessages.length) {  ];

      terminalView.print(bootMessages[i]);  let i = 0;

      i++;  function typeBoot() {

      setTimeout(typeBoot, 700);    if (i < bootMessages.length) {

    } else {      terminalView.print(bootMessages[i]);

      setTimeout(() => {      i++;

        renderParticles();      setTimeout(typeBoot, 700);

        const title = document.querySelector('.glitch');    } else {

        applyGlitch(title);      setTimeout(() => {

        showSubtitle('Welcome to the most creative hacker portfolio!');        // 2. Particle/circuit background

        setupTerminalInput();        renderParticles();

        setupChallengeButton();        // 3. Glitch effect on title

        if (window.initApp) {        const title = document.querySelector('.glitch');

          window.initApp();        applyGlitch(title);

        }        // 4. Anime subtitle

      }, 1000);        showSubtitle('Welcome to the most creative hacker portfolio!');

    }        // 5. Show terminal input for recruiter

  }        setupTerminalInput();

  typeBoot();        // 6. Add CTF challenge button for recruiters

}        setupChallengeButton();

        if (window.initApp) {

function setupChallengeButton() {          window.initApp();

  let btn = document.getElementById('challenge-btn');        }

  if (!btn) {      }, 1000);

    btn = document.createElement('button');    }

    btn.id = 'challenge-btn';  }

    btn.textContent = 'Start Hacker CTF Challenge';  typeBoot();

    btn.style.position = 'fixed';}

    btn.style.bottom = '80px';

    btn.style.left = '50%';function setupChallengeButton() {

    btn.style.transform = 'translateX(-50%)';  let btn = document.getElementById('challenge-btn');

    btn.style.padding = '12px 28px';  if (!btn) {

    btn.style.background = '#39ff14';    btn = document.createElement('button');

    btn.style.color = '#222';    btn.id = 'challenge-btn';

    btn.style.fontFamily = 'Fira Mono, Consolas, monospace';    btn.textContent = 'Start Hacker CTF Challenge';

    btn.style.border = 'none';    btn.style.position = 'fixed';

    btn.style.borderRadius = '10px';    btn.style.bottom = '80px';

    btn.style.fontWeight = 'bold';    btn.style.left = '50%';

    btn.style.zIndex = '9999';    btn.style.transform = 'translateX(-50%)';

    document.body.appendChild(btn);    btn.style.padding = '12px 28px';

  }    btn.style.background = '#39ff14';

  btn.onclick = () => {    btn.style.color = '#222';

    if (!window.challengeController) {    btn.style.fontFamily = 'Fira Mono, Consolas, monospace';

      window.challengeController = new ChallengeController();    btn.style.border = 'none';

    }    btn.style.borderRadius = '10px';

    window.challengeController.startChallenge();    btn.style.fontWeight = 'bold';

  };    btn.style.zIndex = '9999';

}    document.body.appendChild(btn);

  }

function setupTerminalInput() {  btn.onclick = () => {

  let input = document.getElementById('terminal-input');    if (!window.challengeController) {

  if (!input) {      window.challengeController = new ChallengeController();

    input = document.createElement('input');    }

    input.id = 'terminal-input';    window.challengeController.startChallenge();

    input.type = 'text';  };

    input.placeholder = 'Type a command (help, about, skills, experience, contact, clear, easteregg)';}

    input.style.position = 'fixed';}

    input.style.bottom = '30px';

    input.style.left = '50%';function setupTerminalInput() {

    input.style.transform = 'translateX(-50%)';  let input = document.getElementById('terminal-input');

    input.style.width = '400px';  if (!input) {

    input.style.padding = '10px';    input = document.createElement('input');

    input.style.background = '#111';    input.id = 'terminal-input';

    input.style.color = '#39ff14';    input.type = 'text';

    input.style.fontFamily = 'Fira Mono, Consolas, monospace';    input.placeholder = 'Type a command (help, about, skills, experience, contact, clear, easteregg)';

    input.style.border = '1px solid #39ff14';    input.style.position = 'fixed';

    input.style.borderRadius = '8px';    input.style.bottom = '30px';

    input.style.zIndex = '9999';    input.style.left = '50%';

    document.body.appendChild(input);    input.style.transform = 'translateX(-50%)';

  }    input.style.width = '400px';

  const controller = new TerminalController();    input.style.padding = '10px';

  input.addEventListener('keydown', function(e) {    input.style.background = '#111';

    if (e.key === 'Enter') {    input.style.color = '#39ff14';

      controller.handleCommand(input.value);    input.style.fontFamily = 'Fira Mono, Consolas, monospace';

      input.value = '';    input.style.border = '1px solid #39ff14';

    }    input.style.borderRadius = '8px';

  });    input.style.zIndex = '9999';

}    document.body.appendChild(input);

  }

document.addEventListener('DOMContentLoaded', function() {  const controller = new TerminalController();

  setupNeonBg();  input.addEventListener('keydown', function(e) {

  setupThemeToggle();    if (e.key === 'Enter') {

  setupCursorCyberpunk();      controller.handleCommand(input.value);

  setupEasterEggs();      input.value = '';

  startCreativeExperience();    }

});  });

}
document.addEventListener('DOMContentLoaded', function() {
  setupNeonBg();
  setupThemeToggle();
  setupCursorCyberpunk();
  setupEasterEggs();
  startCreativeExperience();
});
