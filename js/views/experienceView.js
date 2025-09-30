import { ExperienceModel } from '../models/experienceModel.js';

export class ExperienceView {
  constructor() {
    this.model = new ExperienceModel();
  }

  render() {
    const experiences = this.model.getExperience();
    return `
      <div class="section experience">
        <h2 class="section-title">Experience</h2>
        <ul class="experience-list">
          ${experiences.map(exp => `
            <li class="experience-item">
              <h3>${exp.title}</h3>
              <p>${exp.company} - ${exp.period}</p>
              <p>${exp.description}</p>
            </li>
          `).join('')}
        </ul>
      </div>
    `;
  }
}