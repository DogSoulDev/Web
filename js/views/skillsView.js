import { SkillsModel } from '../models/skillsModel.js';
import { BaseView } from './BaseView.js';

/**
 * Skills View
 * Follows MVC pattern and extends BaseView for DRY
 */
export class SkillsView extends BaseView {
  constructor() {
    super(new SkillsModel());
  }

  render() {
    const skills = this.model.getSkills();
    return `
      <div class="section skills">
        <h2 class="section-title">Skills</h2>
        <ul class="skills-list">
          ${skills.map(skill => `
            <li class="skill-item">
              <h3>${this.escapeHtml(skill.name)}</h3>
              <p>${this.escapeHtml(skill.level)}</p>
            </li>
          `).join('')}
        </ul>
      </div>
    `;
  }
}