// portfolioView.js// portfolioView.js// portfolioView.js// portfolioView.js

// View rendering for portfolio projects

// View rendering for portfolio projects

function renderPortfolio(projects) {

  const portfolioSection = document.getElementById('portfolio');// View rendering for portfolio projects// View rendering for portfolio projects

  if (!portfolioSection) return;

  portfolioSection.innerHTML = `function renderPortfolio(projects) {

    <h3>Portfolio</h3>

    <div class=\"projects\">  const portfolioSection = document.getElementById('portfolio');

      ${projects.map(project => `

        <div class=\"project\">  if (!portfolioSection) return;

          <h4>${project.title}</h4>

          <p>${project.description}</p>  portfolioSection.innerHTML = `function renderPortfolio(projects) {function renderPortfolio(projects) {

          <a href=\"${project.link}\" target=\"_blank\">View Project</a>

        </div>    <h3>Portfolio</h3>

      `).join('')}

    </div>    <div class=\"projects\">  const portfolioSection = document.getElementById('portfolio');  const portfolioSection = document.getElementById('portfolio');

  `;

}      ${projects.map(project => `


        <div class=\"project\">  if (!portfolioSection) return;  if (!portfolioSection) return;

          <h4>${project.title}</h4>

          <p>${project.description}</p>  portfolioSection.innerHTML = `  portfolioSection.innerHTML = `

          <a href=\"${project.link}\" target=\"_blank\">View Project</a>

        </div>    <h3>Portfolio</h3>    <h3>Portfolio</h3>

      `).join('')}

    </div>    <div class=\"projects\">    <div class="projects">

  `;

}      ${projects.map(project => `      ${projects.map(project => `


        <div class=\"project\">        <div class="project">

          <h4>${project.title}</h4>          <h4>${project.title}</h4>

          <p>${project.description}</p>          <p>${project.description}</p>

          <a href=\"${project.link}\" target=\"_blank\">View Project</a>          <a href="${project.link}" target="_blank">View Project</a>

        </div>        </div>

      `).join('')}      `).join('')}

    </div>    </div>

  `;  `;

}}

