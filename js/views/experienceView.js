// ExperienceView - Renderiza la experiencia
export const ExperienceView = {
  render(experience, containerId = 'app') {
    const container = document.getElementById(containerId);
    container.innerHTML = `
      <section>
        <h2 class="section-title">Experience</h2>
        <div class="experience-list">
          ${experience.map(exp => `
            <div class="experience">
              <div><strong>${exp.company}</strong></div>
              <div>${exp.role} (${exp.years})</div>
              <div>${exp.description}</div>
            </div>
          `).join('')}
        </div>
      </section>
    `;
  }
};
