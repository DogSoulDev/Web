// ContactView - Muestra solo el correo de contacto
export const ContactView = {
  render() {
    const app = document.getElementById('app');
    app.innerHTML += `
      <section class="section">
        <h2 class="section-title">Contact</h2>
        <div class="contact" style="text-align:center; font-size:1.1rem;">
          <span>Email: <a href="mailto:dogsouldev@protonmail.com" style="color:var(--neon-blue);text-decoration:underline;">dogsouldev@protonmail.com</a></span>
        </div>
      </section>
    `;
  }
};
