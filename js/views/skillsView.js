import { SkillsModel } from '../models/skillsModel.js';

export class SkillsView {
  constructor() {
    this.model = new SkillsModel();
  }

  render() {
    const skills = this.model.getSkills();
    return `
      <div class="section skills">
        <h2 class="section-title">Skills</h2>
        <ul class="skills-list">
          ${skills.map(skill => `
            <li class="skill-item">
              <img src="${skill.icon}" alt="${skill.name}">
              <h3>${skill.name}</h3>
              <p>${skill.level}</p>
            </li>
          `).join('')}
        </ul>
      </div>
    `;
  }
}