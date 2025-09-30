export default class SkillsView {
  render(skills) {
    return `
      <section id="skills">
        <h2>Skills</h2>
        <div class="skills-list">
          ${skills.map(s => `
            <div class="skill">
              <img src="assets/icons/${s.icon}" alt="${s.name}" class="skill-icon" />
              <span>${s.name}</span>
            </div>
          `).join('')}
        </div>
      </section>
    `;
  }
}
