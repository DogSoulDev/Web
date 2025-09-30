import { ProjectsModel } from '../models/projectsModel.js';

export class ProjectsView {
  constructor() {
    this.model = new ProjectsModel();
  }

  async render() {
    const projects = await this.model.getProjects();
    return `
      <div class="section projects">
        <h2 class="section-title">Projects</h2>
        <div class="projects-comic-layout">
          ${projects.map((project, index) => {
            const panelTypes = ['wide', 'tall', 'square'];
            const panelType = panelTypes[index % panelTypes.length];
            const soundEffects = ['BOOM!', 'ZAP!', 'SWISH!', 'BAM!'];
            const soundEffect = soundEffects[index % soundEffects.length];
            return `
              <div class="comic-panel project-panel ${panelType}">
                <div class="panel-header">
                  <span class="panel-number">${index + 1}</span>
                  <span class="sound-effect">${soundEffect}</span>
                </div>
                <div class="project-content">
                  <h3 class="project-title">${project.title}</h3>
                  <div class="speech-bubble project-desc">
                    <p>${project.description}</p>
                  </div>
                  <div class="tech-stack">
                    ${project.tech.map(tech => `<span class="tech-badge">${tech}</span>`).join('')}
                  </div>
                  <div class="project-actions">
                    <a href="${project.url}" target="_blank" class="project-link">
                      <span class="link-text">VIEW</span>
                      <span class="action-lines">▶▶▶</span>
                    </a>
                  </div>
                </div>
                <div class="panel-footer">
                  <div class="speed-lines"></div>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  }
}