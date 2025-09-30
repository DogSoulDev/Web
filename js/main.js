// ...existing code...

import HomeController from './controllers/homeController.js';
import ProjectsController from './controllers/projectsController.js';
import ExperienceController from './controllers/experienceController.js';
import SkillsController from './controllers/skillsController.js';
import ContactController from './controllers/contactController.js';

function setupThemeToggle() {
  const btn = document.getElementById('theme-toggle');
  if (!btn) return;
  btn.addEventListener('click', () => {
    document.body.classList.toggle('light');
    btn.classList.toggle('light');
    btn.textContent = document.body.classList.contains('light') ? '🌞' : '🌙';
  });

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

    function renderPortfolioSections() {
      // Renderiza cada sección usando su controlador
      new HomeController().render();
      new ProjectsController().render();
      new ExperienceController().render();
      new SkillsController().render();
      new ContactController().render();
    }

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

