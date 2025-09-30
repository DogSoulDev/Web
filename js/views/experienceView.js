export default class ExperienceView {
  render(experiences) {
    return `
      <section id="experience">
        <h2>Experience & Education</h2>
        <ul class="experience-list">
          ${experiences.map(e => `
            <li>
              <strong>${e.role}</strong> at ${e.company} (${e.period})<br>
              <span>${e.description}</span>
            </li>
          `).join('')}
        </ul>
      </section>
    `;
  }
}
