import { ProjectsModel } from '../models/projectsModel.js';

export class ProjectsView {
  constructor() {
    this.model = new ProjectsModel();
  }

  async render() {
    const projects = await this.model.getProjects();

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

    // Estilos de botones únicos para cada proyecto
    const buttonStyles = [
      'btn-style-1', // Azul eléctrico con glow
      'btn-style-2', // Verde neón con pulso
      'btn-style-3', // Rojo manga con border animado
      'btn-style-4', // Púrpura cyber con particles
      'btn-style-5', // Naranja fire con waves
      'btn-style-6'  // Cyan tech con scan effect
    ];

    return `
      <div class="section projects">
        <h2 class="section-title">Projects</h2>
        <main class="projects-main" style="display: none;">
          ${projects.map((project, index) => {
            const primaryTech = project.tech[0];
            const icon = getIcon(primaryTech);
            const extraSpans = index === 2 ? '<span></span><span></span>' : '';
            const buttonClass = buttonStyles[index % buttonStyles.length];
            return `
              <button class="project-panel" data-index="${index}">
                <div class="project-video">
                  <div class="project-icon-container">
                    <img class="project-icon" src="icons/${icon}" alt="${primaryTech}" />
                  </div>
                  <h3 class="project-title">${project.title}</h3>
                  <p class="project-description">${project.description}</p>
                  <div class="tech-stack">
                    ${project.tech.map(tech => `<span class="tech-badge">${tech}</span>`).join('')}
                  </div>
                  <div class="project-actions">
                    <div class="light-button">
                      <a href="${project.url}" target="_blank" class="bt ${buttonClass}">
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
        <script>
          let isVideoPlaying = false;

          function startVideo(panel) {
            isVideoPlaying = true;
            let video = panel.querySelector(".project-video");
            video.classList.add("is-playing");
            panel.setAttribute("disabled", "");
            // Simulate video duration
            setTimeout(() => {
              enableVideo(panel);
            }, 4000); // 4 seconds to show content
          }

          function enableVideo(panel) {
            isVideoPlaying = false;
            panel.removeAttribute("disabled");
            panel.classList.remove("is-playing");
            panel.classList.add("is-ended");
            let video = panel.querySelector(".project-video");
            video.classList.remove("is-playing");
          }

          document.addEventListener("DOMContentLoaded", () => {
            document.querySelectorAll(".project-panel").forEach((panel) => {
              panel.addEventListener("click", () => {
                if (!isVideoPlaying) startVideo(panel);
              });
            });

            // Show the main after "loading"
            setTimeout(() => {
              document.querySelector(".projects-main").removeAttribute("style");
            }, 500);
          });
        </script>
      </div>
    `;
  }
}