// terminalView.js// terminalView.js// terminalView.js// terminalView.js

// View rendering for hacker terminal animation and interactive commands

// View rendering for hacker terminal animation and interactive commands

class TerminalView {

  constructor() {// View rendering for hacker terminal animation and interactive commands// View rendering for hacker terminal animation

    this.terminal = document.getElementById('terminal-overlay');

    if (!this.terminal) {class TerminalView {

      this.terminal = document.createElement('div');

      this.terminal.id = 'terminal-overlay';  constructor() {

      document.body.appendChild(this.terminal);

    }    this.terminal = document.getElementById('terminal-overlay');

    this.terminal.className = 'terminal-window';

    this.terminal.style.display = 'block';    if (!this.terminal) {class TerminalView {// terminalView.js

    this.terminal.innerHTML = '';

  }      this.terminal = document.createElement('div');



  print(text) {      this.terminal.id = 'terminal-overlay';  constructor() {// View rendering for hacker terminal animation and interactive commands

    this.terminal.innerHTML += `<div><span class=\"prompt\">$</span> <span class=\"typed\">${text}</span></div>`;

    this.terminal.scrollTop = this.terminal.scrollHeight;      document.body.appendChild(this.terminal);

  }

    }    this.terminal = document.getElementById('terminal-overlay');

  printHelp(commands) {

    this.print('Available commands:');    this.terminal.className = 'terminal-window';

    commands.forEach(cmd => this.print(`- ${cmd}`));

  }    this.terminal.style.display = 'block';    if (!this.terminal) {class TerminalView {



  printAbout(profile) {    this.terminal.innerHTML = '';

    this.print(`Name: ${profile.name}`);

    this.print(`Role: ${profile.role}`);  }      this.terminal = document.createElement('div');  constructor() {

    this.print(`Bio: ${profile.bio}`);

  }



  printSkills(skills) {  print(text) {      this.terminal.id = 'terminal-overlay';    this.terminal = document.getElementById('terminal-overlay');

    this.print('Cybersecurity Skills:');

    skills.forEach(skill => this.print(`- ${skill}`));    this.terminal.innerHTML += `<div><span class=\"prompt\">$</span> <span class=\"typed\">${text}</span></div>`;

  }

    this.terminal.scrollTop = this.terminal.scrollHeight;      document.body.appendChild(this.terminal);    if (!this.terminal) {

  printExperience(experience) {

    this.print('Professional Experience:');  }

    experience.forEach(exp => this.print(`- ${exp}`));

  }    }      this.terminal = document.createElement('div');



  printContact(contact) {  printHelp(commands) {

    this.print('Contact Information:');

    Object.entries(contact).forEach(([key, value]) => this.print(`${key}: ${value}`));    this.print('Available commands:');    this.terminal.className = 'terminal-window';      this.terminal.id = 'terminal-overlay';

  }

    commands.forEach(cmd => this.print(`- ${cmd}`));

  printError(msg) {

    this.print(`Error: ${msg}`);  }    this.terminal.style.display = 'block';      document.body.appendChild(this.terminal);

  }



  printEasterEgg() {

    this.print('You found the hidden flag! \ud83c\udff4\u200d\u2620\ufe0f');  printAbout(profile) {    this.terminal.innerHTML = '';    }

  }

    this.print(`Name: ${profile.name}`);

  clear() {

    this.terminal.innerHTML = '';    this.print(`Role: ${profile.role}`);  }    this.terminal.className = 'terminal-window';

  }

}    this.print(`Bio: ${profile.bio}`);



export default TerminalView;  }    this.terminal.style.display = 'block';




  printSkills(skills) {  print(text) {    this.terminal.innerHTML = '';

    this.print('Cybersecurity Skills:');

    skills.forEach(skill => this.print(`- ${skill}`));    this.terminal.innerHTML += `<div><span class=\"prompt\">$</span> <span class=\"typed\">${text}</span></div>`;  }

  }

    this.terminal.scrollTop = this.terminal.scrollHeight;

  printExperience(experience) {

    this.print('Professional Experience:');  }  print(text) {

    experience.forEach(exp => this.print(`- ${exp}`));

  }    this.terminal.innerHTML += `<div><span class="prompt">$</span> <span class="typed">${text}</span></div>`;



  printContact(contact) {  printHelp(commands) {    this.terminal.scrollTop = this.terminal.scrollHeight;

    this.print('Contact Information:');

    Object.entries(contact).forEach(([key, value]) => this.print(`${key}: ${value}`));    this.print('Available commands:');  }

  }

    commands.forEach(cmd => this.print(`- ${cmd}`));

  printError(msg) {

    this.print(`Error: ${msg}`);  }  printHelp(commands) {

  }

    this.print('Available commands:');

  printEasterEgg() {

    this.print('You found the hidden flag! \ud83c\udff4\u200d\u2620\ufe0f');  printAbout(profile) {    commands.forEach(cmd => this.print(`- ${cmd}`));

  }

    this.print(`Name: ${profile.name}`);  }

  clear() {

    this.terminal.innerHTML = '';    this.print(`Role: ${profile.role}`);

  }

}    this.print(`Bio: ${profile.bio}`);  printAbout(profile) {



export default TerminalView;  }    this.print(`Name: ${profile.name}`);


    this.print(`Role: ${profile.role}`);

  printSkills(skills) {    this.print(`Bio: ${profile.bio}`);

    this.print('Cybersecurity Skills:');  }

    skills.forEach(skill => this.print(`- ${skill}`));

  }  printSkills(skills) {

    this.print('Cybersecurity Skills:');

  printExperience(experience) {    skills.forEach(skill => this.print(`- ${skill}`));

    this.print('Professional Experience:');  }

    experience.forEach(exp => this.print(`- ${exp}`));

  }  printExperience(experience) {

    this.print('Professional Experience:');

  printContact(contact) {    experience.forEach(exp => this.print(`- ${exp}`));

    this.print('Contact Information:');  }

    Object.entries(contact).forEach(([key, value]) => this.print(`${key}: ${value}`));

  }  printContact(contact) {

    this.print('Contact Information:');

  printError(msg) {    Object.entries(contact).forEach(([key, value]) => this.print(`${key}: ${value}`));

    this.print(`Error: ${msg}`);  }

  }

  printError(msg) {

  printEasterEgg() {    this.print(`Error: ${msg}`);

    this.print('You found the hidden flag! \ud83c\udff4\u200d\u2620\ufe0f');  }

  }

  printEasterEgg() {

  clear() {    this.print('You found the hidden flag! 🏴‍☠️');

    this.terminal.innerHTML = '';  }

  }

}  clear() {

    this.terminal.innerHTML = '';

export default TerminalView;  }

}

export default TerminalView;
