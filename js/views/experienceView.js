import { ExperienceModel } from '../models/experienceModel.js';

export class ExperienceView {
  constructor() {
    this.model = new ExperienceModel();
  }

  render() {
    const experiences = this.model.getExperience();
    return `
      <div class="section experience speed-lines">
        <h2 class="section-title">Experience</h2>
        ${experiences.map(exp => `
          <div class="comic-panel">
            <h3>${exp.title}</h3>
            <p><strong>${exp.company}</strong> - ${exp.period}</p>
            <p>${exp.description}</p>
          </div>
        `).join('')}
      </div>
    `;
  }
}