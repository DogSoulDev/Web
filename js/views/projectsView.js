// ProjectsView - Renderiza los proyectos
export const ProjectsView = {
  async render(containerId = 'app') {
    const container = document.getElementById(containerId);
    container.innerHTML = `
      <section>
        <h2 class="section-title">Projects</h2>
        <div class="projects-list" id="projects-list"></div>
      </section>
    `;
    const projects = await window.ProjectsModel.getProjects();
    const list = container.querySelector('#projects-list');
    list.innerHTML = projects.map(project => `
      <div class="project">
        <img src="${project.icon}" alt="${project.name}" class="skill-icon"/>
        <div><strong>${project.name}</strong></div>
        <div>${project.description}</div>
        <div>⭐ ${project.stars}</div>
        <a href="${project.url}" target="_blank" rel="noopener noreferrer">View</a>
      </div>
    `).join('');
  }
};
