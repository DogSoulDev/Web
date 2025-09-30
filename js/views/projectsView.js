import { ProjectsModel } from '../models/projectsModel.js';

export class ProjectsView {
  constructor() {
    this.model = new ProjectsModel();
  }

  async render() {
    const projects = await this.model.getProjects();
    const cardVariations = [
      { theme: 'fire', sound: 'BOOM!', color: 'red', shape: 'wide', position: 'top-left' },
      { theme: 'electric', sound: 'ZAP!', color: 'blue', shape: 'tall', position: 'top-right' },
      { theme: 'wind', sound: 'SWISH!', color: 'green', shape: 'square', position: 'middle' },
      { theme: 'earth', sound: 'CRASH!', color: 'brown', shape: 'wide', position: 'bottom-left' },
      { theme: 'water', sound: 'SPLASH!', color: 'cyan', shape: 'tall', position: 'bottom-right' },
      { theme: 'light', sound: 'FLASH!', color: 'yellow', shape: 'square', position: 'middle' }
    ];

    return `
      <div class="section projects manga-background">
        <div class="manga-page-border">
          <h2 class="section-title manga-title">Projects</h2>
          <div class="projects-manga-layout">
            ${projects.map((project, index) => {
              const variation = cardVariations[index % cardVariations.length];
              return `
                <div class="comic-panel project-panel ${variation.shape} ${variation.theme} ${variation.position}">
                  <div class="panel-gutter"></div>
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
                  <div class="panel-connector"></div>
                </div>
              `;
            }).join('')}
          </div>
          <div class="manga-page-footer">
            <div class="page-number">PAGE 1</div>
            <div class="manga-decoration">✦ ✦ ✦</div>
          </div>
        </div>
      </div>
    `;
  }
}