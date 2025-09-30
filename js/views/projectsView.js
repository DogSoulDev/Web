import { ProjectsModel } from '../models/projectsModel.js';

export class ProjectsView {
  constructor() {
    this.model = new ProjectsModel();
  }

  async render() {
    const projects = await this.model.getProjects();
    const cardVariations = [
      { theme: 'fire', sound: 'BOOM!', color: 'red', size: 'large' },
      { theme: 'electric', sound: 'ZAP!', color: 'blue', size: 'medium' },
      { theme: 'wind', sound: 'SWISH!', color: 'green', size: 'small' },
      { theme: 'earth', sound: 'CRASH!', color: 'brown', size: 'large' },
      { theme: 'water', sound: 'SPLASH!', color: 'cyan', size: 'medium' },
      { theme: 'light', sound: 'FLASH!', color: 'yellow', size: 'small' }
    ];

    const getIcon = (tech) => {
      const iconMap = {
        'JavaScript': 'js.svg',
        'HTML': 'html.svg',
        'CSS': 'ui.svg',
        'React': 'design.svg',
        'Node.js': 'js.svg',
        'Python': 'art.svg',
        'Git': 'github.svg',
        'MongoDB': 'portfolio.svg',
        'Express': 'js.svg',
        'TypeScript': 'js.svg'
      };
      return iconMap[tech] || 'manga.svg';
    };

    return `
      <div class="section projects manga-background">
        <div class="manga-page-border">
          <h2 class="section-title manga-title">Projects</h2>
          <div class="projects-manga-flow">
            ${projects.map((project, index) => {
              const variation = cardVariations[index % cardVariations.length];
              const primaryTech = project.tech[0];
              const icon = getIcon(primaryTech);
              return `
                <div class="comic-panel project-panel ${variation.theme} ${variation.size}">
                  <div class="panel-header">
                    <span class="panel-number">${index + 1}</span>
                    <span class="sound-effect ${variation.color}">${variation.sound}</span>
                  </div>
                  <div class="project-content">
                    <div class="project-icon-container">
                      <img class="project-icon" src="icons/${icon}" alt="${primaryTech}" />
                    </div>
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
          <div class="manga-page-footer">
            <div class="page-number">PAGE 1</div>
            <div class="manga-decoration">✦ ✦ ✦</div>
          </div>
        </div>
      </div>
    `;
  }
}