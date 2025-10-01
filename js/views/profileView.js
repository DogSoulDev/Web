import { ProfileModel } from '../models/profileModel.js';
import { AboutModel } from '../models/aboutModel.js';
import { SkillsModel } from '../models/skillsModel.js';
import { BaseView } from './BaseView.js';
import { ParticleNetwork } from '../particleNetwork.js';
import { AnimatedText } from '../animatedText.js';

/**
 * Profile View
 * Follows MVC pattern and extends BaseView for DRY
 */
export class ProfileView extends BaseView {
  constructor() {
    super(new ProfileModel());
    this.aboutModel = new AboutModel();
    this.skillsModel = new SkillsModel();
    this.particleNetwork = null;
    this.animatedText = null;
  }

  render() {
    const profile = this.model.getProfile();
    const about = this.aboutModel.getAbout();
    const skills = this.skillsModel.getSkills();
    return `
      <div class="section profile">
        <div class="header">
          <div class="avatar-container">
            <img src="${profile.img}" alt="Avatar" class="profile-img speed-lines">
          </div>
          <div class="name-section">
            <h1 class="title">${profile.name}</h1>
            <p class="subtitle">${profile.title}</p>
            <p class="subtitle">${profile.subtitle}</p>
          </div>
        </div>
        <div class="animated-text-container">
          <div id="animatedText"></div>
        </div>
        <p class="profile-desc">${profile.description}</p>
        <div class="speech-bubble about-bubble">
          <p>${about.content.replace(/\n/g, '<br>')}</p>
        </div>
        <div class="skills-section">
          <h3 class="skills-title">Skills</h3>
          <div class="skills-grid">
            ${skills.map((skill, index) => {
              const positions = ['top', 'bottom', 'left', 'right'];
              const position = positions[index % positions.length];
              return `
                <div class="skill-speech-bubble ${position}">
                  <h4>${skill.name}</h4>
                  <p>${skill.level}</p>
                </div>
              `;
            }).join('')}
          </div>
        </div>
        <div class="copyright">
          <p>© 2025 DogSoulDev. All rights reserved.</p>
        </div>
        <div class="neural-toggle-container">
          <div class="neural-toggle-label">⚡ Neural Network ⚡</div>
          <label class="switch">
            <input class="cb" type="checkbox" id="neuralToggle" />
            <div class="toggle">
              <div class="toggle-canvas-container">
                <canvas id="particleCanvasToggle"></canvas>
              </div>
              <div class="toggle-controls">
                <span>Click to explore Neural Network</span>
              </div>
            </div>
          </label>
        </div>
      </div>
    `;
  }

  afterRender() {
    // Initialize particle network in toggle
    if (this.particleNetwork) {
      this.particleNetwork.destroy();
    }
    this.particleNetwork = new ParticleNetwork('particleCanvasToggle');
    
    // Initialize animated text
    if (this.animatedText) {
      this.animatedText.destroy();
    }
    this.animatedText = new AnimatedText('animatedText', 'Ethical Hacker', 150);
    
    // Bind neural toggle
    this.bindNeuralToggle();
  }
  
  bindNeuralToggle() {
    const toggle = document.getElementById('neuralToggle');
    if (toggle) {
      toggle.addEventListener('change', (e) => {
        if (e.target.checked) {
          // Redirect to neural network page
          window.location.href = 'neural.html';
        }
      });
    }
  }
}