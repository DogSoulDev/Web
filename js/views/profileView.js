import { ProfileModel } from '../models/profileModel.js';

export class ProfileView {
  constructor() {
    this.model = new ProfileModel();
  }

  render() {
    const profile = this.model.getProfile();
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
        <ul class="social-list">
          ${profile.social.map(s => `<li><a href="${s.url}" target="_blank"><img src="${s.icon}" alt="${s.name}"></a></li>`).join('')}
        </ul>
      </div>
    `;
  }
}