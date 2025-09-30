import { EducationModel } from '../models/educationModel.js';

export class EducationView {
  constructor() {
    this.model = new EducationModel();
  }

  render() {
    const educations = this.model.getEducation();
    return `
      <div class="section education">
        <h2 class="section-title">Education</h2>
        <ul>
          ${educations.map(edu => `
            <li>
              <h3>${edu.degree}</h3>
              <p>${edu.school} - ${edu.period}</p>
              <p>${edu.description}</p>
            </li>
          `).join('')}
        </ul>
      </div>
    `;
  }
}