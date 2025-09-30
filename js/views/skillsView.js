// SkillsView - Renderiza las habilidades
export const SkillsView = {
  render(skills) {
    const app = document.getElementById('app');
    app.innerHTML += `
      <section class="section">
        <h2 class="section-title">Skills</h2>
        <div class="skills-list">
          ${skills.map(skill => `
            <div class="skill">
              <img src="${skill.icon}" alt="${skill.name}" class="skill-icon"/>
              <div>${skill.name}</div>
            </div>
          `).join('')}
        </div>
      </section>
    `;
  }
};
