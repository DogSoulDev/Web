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
      <div class="section education">
        <h2 class="section-title">Education</h2>
        <div class="education-cards-container">
          ${education.map((edu, index) => `
            <div class="education-flip-card">
              <div class="education-card-inner">
                <!-- Front Face -->
                <div class="education-card-front">
                  <div class="card-corner-accent"></div>
                  <div class="card-number">${(index + 1).toString().padStart(2, '0')}</div>
                  <div class="card-icon">🎓</div>
                  <h3 class="card-degree">${this.escapeHtml(edu.degree)}</h3>
                  <div class="card-divider"></div>
                  <p class="card-institution">${this.escapeHtml(edu.institution)}</p>
                  <p class="card-period">📅 ${this.escapeHtml(edu.period)}</p>
                  <div class="flip-hint">
                    <span>Click to flip</span>
                    <span class="flip-arrow">↻</span>
                  </div>
                </div>
                
                <!-- Back Face -->
                <div class="education-card-back">
                  <div class="card-corner-accent-back"></div>
                  <div class="back-content">
                    <h4>Institution Details</h4>
                    <p class="back-institution">${this.escapeHtml(edu.institution)}</p>
                    <p class="back-location">📍 ${this.escapeHtml(edu.location)}</p>
                    <p class="back-period">🗓️ ${this.escapeHtml(edu.period)}</p>
                    ${edu.url ? `
                      <a href="${edu.url}" target="_blank" rel="noopener noreferrer" class="visit-website-btn">
                        <span>🌐</span>
                        <span>Visit Website</span>
                        <span class="btn-arrow">→</span>
                      </a>
                    ` : ''}
                  </div>
                  <div class="flip-hint-back">
                    <span>Click to flip back</span>
                    <span class="flip-arrow">↻</span>
                  </div>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }
}