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
                    <div class="light-button">
                      <a href="${this.escapeHtml(project.url)}" target="_blank" class="bt ${buttonClass}">
                        <div class="light-holder">
                          <div class="dot"></div>
                          <div class="light"></div>
                        </div>
                        <div class="button-holder">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                          </svg>
                          <p>VIEW PROJECT</p>
                        </div>
                      </a>
                    </div>
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