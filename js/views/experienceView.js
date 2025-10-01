import { ExperienceModel } from '../models/experienceModel.js';

export class ExperienceView {
  constructor() {
    this.model = new ExperienceModel();
  }

  render() {
    const experiences = this.model.getExperience();
    return `
      <div class="section experience-manga">
        <h2 class="section-title manga-title">Experience Journey</h2>
        <div class="manga-page">
          ${experiences.map((exp, index) => {
            const positions = ['left big', 'right small top', 'right small bottom'];
            const position = positions[index % positions.length];
            return `
              <div class="manga-panel ${position}" data-panel="${index + 1}">
                <div class="panel-border">
                  <div class="panel-content">
                    <div class="panel-number-tag">Chapter ${index + 1}</div>
                    <h3 class="experience-title-manga">${exp.title}</h3>
                    <div class="experience-meta-manga">
                      <p class="company-manga">📍 ${exp.company}</p>
                      <p class="period-manga">📅 ${exp.period}</p>
                    </div>
                    <div class="experience-bubble">
                      <p>${exp.description}</p>
                    </div>
                    <div class="manga-effect-lines"></div>
                  </div>
                </div>
              </div>
            `;
          }).join('')}
        </div>
        <div class="manga-page-indicator">Page 1 / 1</div>
      </div>
    `;
  }
}