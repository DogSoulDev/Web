// terminalView.js
// View rendering for hacker terminal animation

export function renderTerminal(messages, onComplete) {
  const terminal = document.getElementById('terminal-overlay');
  if (!terminal) return;
  terminal.style.display = 'block';
  terminal.innerHTML = '<div class="terminal-window"></div>';
  const win = terminal.querySelector('.terminal-window');
  win.style.background = '#111';
  win.style.color = '#39ff14';
  win.style.fontFamily = 'Fira Mono, Consolas, monospace';
  win.style.padding = '2rem';
  win.style.borderRadius = '10px';
  win.style.boxShadow = '0 0 30px #39ff1444';
  win.style.maxWidth = '600px';
  win.style.margin = '10vh auto';
  win.style.fontSize = '1.1rem';
  win.style.minHeight = '200px';
  let i = 0;
  function typeLine() {
    if (i < messages.length) {
      win.innerHTML += `<div><span class="prompt">$</span> <span class="typed">${messages[i]}</span></div>`;
      i++;
      setTimeout(typeLine, 700);
    } else {
      setTimeout(() => {
        terminal.style.display = 'none';
        if (onComplete) onComplete();
      }, 1000);
    }
  }
  typeLine();
}
