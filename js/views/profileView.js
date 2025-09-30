import { ProfileModel } from '../models/profileModel.js';
import { AboutModel } from '../models/aboutModel.js';

export class ProfileView {
  constructor() {
    this.profileModel = new ProfileModel();
    this.aboutModel = new AboutModel();
  }

  render() {
    const profile = this.profileModel.getProfile();
    const about = this.aboutModel.getAbout();
    return `
      <div class="section profile active">
        <div class="header">
          <img src="${profile.img}" alt="Avatar" class="profile-img">
          <div>
            <h1 class="title">${profile.name}</h1>
            <p class="subtitle">${profile.title}</p>
            <p class="subtitle">${profile.subtitle}</p>
          </div>
        </div>
        <p>${profile.description}</p>
        <h2 class="section-title">${about.title}</h2>
        <p>${about.content}</p>
        <ul class="social-list">
          ${profile.social.map(s => `<li><a href="${s.url}" target="_blank"><img src="${s.icon}" alt="${s.name}"></a></li>`).join('')}
        </ul>
      </div>
    `;
  }
}