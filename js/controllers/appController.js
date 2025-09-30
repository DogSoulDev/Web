import { ProfileView } from '../views/profileView.js';
import { AboutView } from '../views/aboutView.js';
import { SkillsView } from '../views/skillsView.js';
import { ProjectsView } from '../views/projectsView.js';
import { ExperienceView } from '../views/experienceView.js';
import { EducationView } from '../views/educationView.js';
import { BlogView } from '../views/blogView.js';
import { ContactView } from '../views/contactView.js';

export class AppController {
  constructor() {
    this.appElement = document.getElementById('app');
    this.currentSection = 'profile';
    this.views = {
      profile: new ProfileView(),
      about: new AboutView(),
      skills: new SkillsView(),
      projects: new ProjectsView(),
      experience: new ExperienceView(),
      education: new EducationView(),
      blog: new BlogView(),
      contact: new ContactView()
    };
  }

  async init() {
    this.bindEvents();
    await this.renderSection(this.currentSection);
  }

  bindEvents() {
    document.querySelectorAll('.nav-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const section = e.target.dataset.section;
        this.switchSection(section);
      });
    });
  }

  switchSection(section) {
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector(`[data-section="${section}"]`).classList.add('active');
    this.renderSection(section);
  }

  async renderSection(section) {
    const view = this.views[section];
    const html = await view.render();
    this.appElement.innerHTML = html;
  }
}