import { EducationModel } from '../models/educationModel.js';
import { BaseView } from './BaseView.js';

/**
 * Education View
 * Follows MVC pattern and extends BaseView for DRY
 */
export class EducationView extends BaseView {
  constructor() {
    super(new EducationModel());
  }

  render() {
    const education = this.model.getEducation();
    return `
      <div class="section education speed-lines">
        <h2 class="section-title">Education</h2>
        <div class="education-grid">
          ${education.map((edu, index) => `
            <div class="comic-panel education-panel">
              <div class="education-content">
                <h3 class="education-title">${edu.degree}</h3>
                <div class="education-meta">
                  <p class="institution"><strong>${edu.institution}</strong></p>
                  <p class="location">${edu.location}</p>
                  <p class="period">${edu.period}</p>
                </div>
                ${edu.url ? `
                  <div class="education-actions">
                    <a href="${edu.url}" target="_blank" class="education-link">
                      <span class="link-text">LEARN MORE</span>
                      <span class="action-lines">▶▶▶</span>
                    </a>
                  </div>
                ` : ''}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }
}