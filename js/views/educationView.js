import { EducationModel } from '../models/educationModel.js';

export class EducationView {
  constructor() {
    this.model = new EducationModel();
  }

  render() {
    const education = this.model.getEducation();
    return `
      <div class="section education">
        <h2 class="section-title">Education</h2>
        <ul class="education-list">
          ${education.map(edu => `
            <li class="education-item">
              <h3>${edu.degree}</h3>
              <p><strong>${edu.institution}</strong></p>
              <p>${edu.location}</p>
              <p>${edu.period}</p>
              ${edu.url ? `<a href="${edu.url}" target="_blank">More info</a>` : ''}
            </li>
          `).join('')}
        </ul>
      </div>
    `;
  }
}