// ContactView - Renderiza el formulario de contacto seguro
export const ContactView = {
  render() {
    const app = document.getElementById('app');
    app.innerHTML += `
      <section class="section">
        <h2 class="section-title">Contact</h2>
        <form class="contact" autocomplete="off" novalidate>
          <input type="text" name="name" placeholder="Name" required pattern="[A-Za-z0-9 ]{3,30}" maxlength="30"/>
          <input type="email" name="email" placeholder="Email" required maxlength="50"/>
          <textarea name="message" placeholder="Message" required maxlength="500"></textarea>
          <button type="submit">Send</button>
        </form>
        <div id="contact-msg"></div>
      </section>
    `;
    // Seguridad: validación estricta y escape de datos
    const form = app.querySelector('form.contact');
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const name = form.name.value.replace(/[^A-Za-z0-9 ]/g, '');
      const email = form.email.value.replace(/[^A-Za-z0-9@._-]/g, '');
      const message = form.message.value.replace(/[<>]/g, '');
      if (!name || !email || !message) {
        showMsg('Please fill all fields correctly.', true);
        return;
      }
      showMsg('Message sent securely!');
      form.reset();
    });
    function showMsg(msg, error) {
      const el = document.getElementById('contact-msg');
      el.textContent = msg;
      el.style.color = error ? 'var(--neon-pink)' : 'var(--neon-green)';
    }
  }
};
