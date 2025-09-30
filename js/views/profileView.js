import { ProfileModel } from '../models/profileModel.js';
import { AboutModel } from '../models/aboutModel.js';
import { SkillsModel } from '../models/skillsModel.js';

export class ProfileView {
  constructor() {
    this.profileModel = new ProfileModel();
    this.aboutModel = new AboutModel();
    this.skillsModel = new SkillsModel();
  }

  render() {
    const profile = this.profileModel.getProfile();
    const about = this.aboutModel.getAbout();
    const skills = this.skillsModel.getSkills();
    return `
      <div class="section profile">
        <div class="header">
          <img src="${profile.img}" alt="Avatar" class="profile-img">
          <div>
            <h1 class="title">${profile.name}</h1>
            <p class="subtitle">${profile.title}</p>
            <p class="subtitle">${profile.subtitle}</p>
          </div>
        </div>
        <p>${profile.description}</p>
        <div class="speech-bubble">
          <p>${about.content.replace(/\n/g, '<br>')}</p>
        </div>
        <h3>Skills</h3>
        <div class="skills-grid">
          ${skills.map(skill => `
            <div class="comic-panel skill-panel">
              <h4>${skill.name}</h4>
              <p>${skill.level}</p>
            </div>
          `).join('')}
        </div>
        <ul class="social-list">
          ${profile.social.map(s => `<li><a href="${s.url}" target="_blank"><img src="${s.icon}" alt="${s.name}"></a></li>`).join('')}
        </ul>
      </div>
    `;
  }
}