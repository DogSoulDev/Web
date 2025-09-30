import SkillsView from '../views/skillsView.js';

const skills = [
  { name: 'JavaScript', icon: 'js.svg' },
  { name: 'Python', icon: 'python.svg' },
  { name: 'Linux', icon: 'linux.svg' },
  { name: 'Networking', icon: 'network.svg' },
  { name: 'CTF', icon: 'ctf.svg' }
];

export default class SkillsController {
  constructor() {
    this.view = new SkillsView();
  }
  render() {
    document.getElementById('skills').innerHTML = this.view.render(skills);
  }
}
