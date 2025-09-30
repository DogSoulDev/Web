// EducationView - Renderiza la sección Educación
export const EducationView = {
  render(education, containerId = 'app') {
    const container = document.getElementById(containerId);
    container.innerHTML = `
      <section>
        <h2 class="section-title">Education</h2>
        <div class="education-list">
          ${education.map(edu => `
            <div class="education">
              <div><strong>${edu.institution}</strong></div>
              <div>${edu.degree} (${edu.years})</div>
              <div>${edu.description}</div>
            </div>
          `).join('')}
        </div>
      </section>
    `;
  }
};
