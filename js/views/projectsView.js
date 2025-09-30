export default class ProjectsView {
  render(projects) {
    return `
      <section id="projects">
        <h2>Projects</h2>
        <div class="projects-list">
          ${projects.map(p => `
            <div class="project-card">
              <h3>${p.title}</h3>
              <p>${p.description}</p>
              <a href="${p.link}" target="_blank">View Project</a>
            </div>
          `).join('')}
        </div>
      </section>
    `;
  }
}
