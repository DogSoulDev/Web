import { ProjectsModel } from '../models/projectsModel.js';
import { BaseView } from './BaseView.js';
import { IconMapper } from '../utils/iconMapper.js';
import { ProjectsController } from '../controllers/projectsController.js';

/**
 * Projects View
 * Follows MVC pattern - only responsible for rendering HTML
 * No business logic or DOM manipulation
 */
export class ProjectsView extends BaseView {
  constructor() {
    super(new ProjectsModel());
    this.controller = new ProjectsController();
  }

  async render() {
    const projects = await this.model.getProjects();

    return `
      <div class="section projects">
        <h2 class="section-title">Projects</h2>
        <main class="projects-main" style="display: none;">
          ${projects.map((project, index) => {
            const primaryTech = project.tech[0];
            const icon = IconMapper.getTechIcon(primaryTech);
            const extraSpans = index === 2 ? '<span></span><span></span>' : '';
            const buttonClass = IconMapper.getButtonStyle(index);
            return `
              <button class="project-panel" data-index="${index}">
                <div class="project-video">
                  <div class="project-icon-container">
                    <img class="project-icon" src="icons/${icon}" alt="${this.escapeHtml(primaryTech)}" />
                  </div>
                  <h3 class="project-title">${this.escapeHtml(project.title)}</h3>
                  <p class="project-description">${this.escapeHtml(project.description)}</p>
                  <div class="tech-stack">
                    ${project.tech.map(tech => `<span class="tech-badge">${this.escapeHtml(tech)}</span>`).join('')}
                  </div>
                  <div class="project-actions">
                    <a href="${this.escapeHtml(project.url)}" target="_blank" class="view-project-btn">
                      View Project
                      <svg class="icon" viewBox="0 0 24 24" fill="currentColor">
                        <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" clip-rule="evenodd"></path>
                      </svg>
                    </a>
                  </div>
                </div>
                <span></span>
                ${extraSpans}
              </button>
            `;
          }).join('')}
        </main>
      </div>
    `;
  }

  /**
   * Called after render - initializes the controller
   */
  afterRender() {
    this.controller.init();
  }
}