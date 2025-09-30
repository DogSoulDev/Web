import { ProfileModel } from '../models/profileModel.js';

export class ContactView {
  constructor() {
    this.profileModel = new ProfileModel();
  }

  render() {
    const profile = this.profileModel.getProfile();
    return `
      <div class="section contact">
        <h2 class="section-title">Contact</h2>
        <p>Email: <a href="mailto:dogsouldev@protonmail.com">dogsouldev@protonmail.com</a></p>
        <p>Phone: (+34) 637029755</p>
        <p>Website: <a href="https://dogsouldev.github.io/Web/" target="_blank">https://dogsouldev.github.io/Web/</a></p>
        <ul class="social-list">
          ${profile.social.map(s => `<li><a href="${s.url}" target="_blank"><img src="${s.icon}" alt="${s.name}"></a></li>`).join('')}
        </ul>
      </div>
    `;
  }
}