// AboutView - Renderiza la sección About
export const AboutView = {
  render(about, containerId = 'app') {
    const container = document.getElementById(containerId);
    container.innerHTML = `
      <section>
        <h2 class="section-title">${about.title}</h2>
        <p>${about.description}</p>
      </section>
    `;
  }
};
