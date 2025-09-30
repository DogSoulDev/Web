import ExperienceView from '../views/experienceView.js';

const experiences = [
  { role: 'Ethical Hacker', company: 'Freelance', period: '2022-2025', description: 'Penetration testing, bug bounty, and security audits.' },
  { role: 'Cybersecurity Analyst', company: 'TechCorp', period: '2021-2022', description: 'Threat analysis and incident response.' },
  { role: 'Student', company: 'Cyber Academy', period: '2019-2021', description: 'Diploma in Cybersecurity.' }
];

export default class ExperienceController {
  constructor() {
    this.view = new ExperienceView();
  }
  render() {
    document.getElementById('reviews').innerHTML = this.view.render(experiences);
  }
}
