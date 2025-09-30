// terminalView.js
// View rendering for hacker terminal animation

// terminalView.js
// View rendering for hacker terminal animation and interactive commands

class TerminalView {
  constructor() {
    this.terminal = document.getElementById('terminal-overlay');
    if (!this.terminal) {
      this.terminal = document.createElement('div');
      this.terminal.id = 'terminal-overlay';
      document.body.appendChild(this.terminal);
    }
    this.terminal.className = 'terminal-window';
    this.terminal.style.display = 'block';
    this.terminal.innerHTML = '';
  }

  print(text) {
    this.terminal.innerHTML += `<div><span class="prompt">$</span> <span class="typed">${text}</span></div>`;
    this.terminal.scrollTop = this.terminal.scrollHeight;
  }

  printHelp(commands) {
    this.print('Available commands:');
    commands.forEach(cmd => this.print(`- ${cmd}`));
  }

  printAbout(profile) {
    this.print(`Name: ${profile.name}`);
    this.print(`Role: ${profile.role}`);
    this.print(`Bio: ${profile.bio}`);
  }

  printSkills(skills) {
    this.print('Cybersecurity Skills:');
    skills.forEach(skill => this.print(`- ${skill}`));
  }

  printExperience(experience) {
    this.print('Professional Experience:');
    experience.forEach(exp => this.print(`- ${exp}`));
  }

  printContact(contact) {
    this.print('Contact Information:');
    Object.entries(contact).forEach(([key, value]) => this.print(`${key}: ${value}`));
  }

  printError(msg) {
    this.print(`Error: ${msg}`);
  }

  printEasterEgg() {
    this.print('You found the hidden flag! 🏴‍☠️');
  }

  clear() {
    this.terminal.innerHTML = '';
  }
}

export default TerminalView;
