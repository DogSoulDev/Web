import { EducationModel } from '../models/educationModel.js';

export class EducationView {
  constructor() {
    this.model = new EducationModel();
  }

  render() {
    const education = this.model.getEducation();
    return `
      <div class="section education speed-lines">
        <h2 class="section-title">Education</h2>
        ${education.map(edu => `
          <div class="comic-panel">
            <h3>${edu.degree}</h3>
            <p><strong>${edu.institution}</strong></p>
            <p>${edu.location}</p>
            <p>${edu.period}</p>
            ${edu.url ? `<a href="${edu.url}" target="_blank">More info</a>` : ''}
          </div>
        `).join('')}
      </div>
    `;
  }
}