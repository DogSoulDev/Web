// subtitleView.js
// View rendering for anime-style subtitles

export function showSubtitle(text, duration = 2500) {
  const subDiv = document.getElementById('anime-subtitles');
  if (!subDiv) return;
  subDiv.innerHTML = `<div class="subtitle-anime">${text}</div>`;
  subDiv.style.display = 'block';
  setTimeout(() => {
    subDiv.style.display = 'none';
    subDiv.innerHTML = '';
  }, duration);
}
