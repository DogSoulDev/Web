// ProjectsView - Renderiza los proyectos
export const ProjectsView = {
  render(projects) {
    const app = document.getElementById('app');
    app.innerHTML += `
      <section class="section">
        <h2 class="section-title">Projects</h2>
        <div class="projects-list">
          ${projects.map(project => `
            <div class="project">
              <img src="${project.icon}" alt="${project.name}" class="skill-icon"/>
              <div><strong>${project.name}</strong></div>
              <div>${project.description}</div>
              <a href="${project.url}" target="_blank" rel="noopener noreferrer">View</a>
            </div>
          `).join('')}
        </div>
      </section>
    `;
  }
};
