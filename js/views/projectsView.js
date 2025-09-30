import { ProjectsModel } from '../models/projectsModel.js';

export class ProjectsView {
  constructor() {
    this.model = new ProjectsModel();
  }

  render() {
    const projects = this.model.getProjects();
    return `
      <div class="section projects">
        <h2 class="section-title">Projects</h2>
        <ul class="projects-list">
          ${projects.map(project => `
            <li class="project-item">
              <h3>${project.title}</h3>
              <p>${project.description}</p>
              <p>Tech: ${project.tech.join(', ')}</p>
              <a href="${project.url}">View Project</a>
            </li>
          `).join('')}
        </ul>
      </div>
    `;
  }
}