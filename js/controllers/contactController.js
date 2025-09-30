import ContactView from '../views/contactView.js';

export default class ContactController {
  constructor() {
    this.view = new ContactView();
  }
  render() {
    document.getElementById('contact-section').innerHTML = this.view.render();
    const form = document.getElementById('contact-form');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Message sent!');
        form.reset();
      });
    }
  }
}
