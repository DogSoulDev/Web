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
        <div class="experience-grid">
          ${experiences.map((exp, index) => `
            <div class="comic-panel experience-panel">
              <div class="panel-header">
                <span class="panel-number">${index + 1}</span>
              </div>
              <div class="experience-content">
                <h3 class="experience-title">${exp.title}</h3>
                <div class="experience-meta">
                  <p class="company"><strong>${exp.company}</strong></p>
                  <p class="period">${exp.period}</p>
                </div>
                <div class="speech-bubble experience-desc">
                  <p>${exp.description}</p>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }
}