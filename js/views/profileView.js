// ProfileView - Renderiza el perfil
export const ProfileView = {
  render(profile) {
    const app = document.getElementById('app');
    app.innerHTML += `
      <section class="header section">
        <img src="${profile.img}" alt="Profile" class="profile-img" loading="lazy"/>
        <div>
          <h1 class="title glitch">${profile.name}</h1>
          <div class="subtitle">${profile.title}</div>
          <div class="subtitle">${profile.subtitle}</div>
          <p>${profile.description}</p>
          <div class="social-links">
            ${profile.social.map(s => `<a href="${s.url}" target="_blank" rel="noopener noreferrer"><img src="${s.icon}" alt="${s.name}" class="skill-icon"/></a>`).join(' ')}
          </div>
        </div>
      </section>
    `;
  }
};
