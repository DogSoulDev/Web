import { ProjectsModel } from '../models/projectsModel.js';

export class ProjectsView {
  constructor() {
    this.model = new ProjectsModel();
  }

  async render() {
    const projects = await this.model.getProjects();
    const cardVariations = [
      { theme: 'fire', sound: 'BOOM!', color: 'red', shape: 'wide' },
      { theme: 'electric', sound: 'ZAP!', color: 'blue', shape: 'tall' },
      { theme: 'wind', sound: 'SWISH!', color: 'green', shape: 'square' },
      { theme: 'earth', sound: 'CRASH!', color: 'brown', shape: 'wide' },
      { theme: 'water', sound: 'SPLASH!', color: 'cyan', shape: 'tall' },
      { theme: 'light', sound: 'FLASH!', color: 'yellow', shape: 'square' }
    ];

    return `
      <div class="section projects">
        <h2 class="section-title">Projects</h2>
        <div class="projects-comic-layout">
          ${projects.map((project, index) => {
            const variation = cardVariations[index % cardVariations.length];
            return `
              <div class="comic-panel project-panel ${variation.shape} ${variation.theme}">
                <div class="panel-header">
                  <span class="panel-number">${index + 1}</span>
                  <span class="sound-effect ${variation.color}">${variation.sound}</span>
                </div>
                <div class="project-content">
                  <h3 class="project-title">${project.title}</h3>
                  <div class="speech-bubble project-desc ${variation.theme}-bubble">
                    <p>${project.description}</p>
                  </div>
                  <div class="tech-stack">
                    ${project.tech.map(tech => `<span class="tech-badge ${variation.color}">${tech}</span>`).join('')}
                  </div>
                  <div class="project-actions">
                    <a href="${project.url}" target="_blank" class="project-link ${variation.color}">
                      <span class="link-text">VIEW</span>
                      <span class="action-lines">▶▶▶</span>
                    </a>
                  </div>
                </div>
                <div class="panel-footer">
                  <div class="speed-lines ${variation.theme}"></div>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  }
}