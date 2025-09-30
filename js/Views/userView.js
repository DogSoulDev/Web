// userView.js
// View rendering for user information

function renderUser(user) {
  const userInfo = document.getElementById('user-info');
  if (!userInfo) return;
  userInfo.innerHTML = `
    <h3>About Me</h3>
    <p>${user.bio}</p>
    <h4>Technologies</h4>
    <ul>${user.technologies.map(tech => `<li>${tech}</li>`).join('')}</ul>
    <h4>Sports</h4>
    <ul>${user.sports.map(sport => `<li>${sport}</li>`).join('')}</ul>
  `;
}
