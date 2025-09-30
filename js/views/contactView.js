export default class ContactView {
  render() {
    return `
      <section id="contact">
        <h2>Contact</h2>
        <form id="contact-form">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required></textarea>
          <button type="submit">Send</button>
        </form>
        <div class="social-buttons">
          <a href="https://github.com/DogSoulDev" target="_blank">GitHub</a>
          <a href="https://www.linkedin.com/in/dogsouldev/" target="_blank">LinkedIn</a>
          <a href="https://twitter.com/DogSoulDev" target="_blank">Twitter</a>
        </div>
      </section>
    `;
  }
}
