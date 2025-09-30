// portfolioView.js
// View rendering for portfolio projects

function renderPortfolio(projects) {
  const portfolioSection = document.getElementById('portfolio');
  if (!portfolioSection) return;
  portfolioSection.innerHTML = `
    <h3>Portfolio</h3>
    <div class="projects">
      ${projects.map(project => `
        <div class="project">
          <h4>${project.title}</h4>
          <p>${project.description}</p>
          <a href="${project.link}" target="_blank">View Project</a>
        </div>
      `).join('')}
    </div>
  `;
}
