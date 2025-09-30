import ProjectsView from '../views/projectsView.js';

const projects = [
  { title: 'Cyber Terminal', description: 'Interactive hacker terminal for recruiters.', link: '#' },
  { title: 'CTF Challenge', description: 'Gamified cybersecurity challenge.', link: '#' },
  { title: 'Portfolio Web', description: 'Modern, secure, and creative portfolio.', link: '#' }
];

export default class ProjectsController {
  constructor() {
    this.view = new ProjectsView();
  }
  render() {
    document.getElementById('portfolio').innerHTML = this.view.render(projects);
  }
}
