export class ContactView {
  render() {
    return `
      <div class="section contact">
        <h2 class="section-title">Contact</h2>
        <div class="contact-grid">
          <div class="contact-speech-bubble email">
            <h4>📧 Email</h4>
            <p><a href="mailto:dogsouldev@protonmail.com">dogsouldev@protonmail.com</a></p>
          </div>
          <div class="contact-speech-bubble phone">
            <h4>📱 Phone</h4>
            <p>(+34) 637029755</p>
          </div>
          <div class="contact-speech-bubble website">
            <h4>🌐 Website</h4>
            <p><a href="https://dogsouldev.github.io/Web/" target="_blank">dogsouldev.github.io/Web</a></p>
          </div>
        </div>
      </div>
    `;
  }
}