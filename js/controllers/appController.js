// AppController - Orquesta la inicialización y renderizado principal
import { ProfileModel } from '../models/profileModel.js';
import { SkillsModel } from '../models/skillsModel.js';
import { ProjectsModel } from '../models/projectsModel.js';
import { ExperienceModel } from '../models/experienceModel.js';
import { ProfileView } from '../views/profileView.js';
import { SkillsView } from '../views/skillsView.js';
import { ProjectsView } from '../views/projectsView.js';
import { ExperienceView } from '../views/experienceView.js';
import { ContactView } from '../views/contactView.js';

export const AppController = {
  async init() {
    window.ProjectsModel = ProjectsModel;
    // Renderizar contenedores vacíos para cada sección
    const app = document.getElementById('app');
    app.innerHTML = `
      <div id="profile-section" class="section"></div>
      <div id="about-section" class="section"></div>
      <div id="skills-section" class="section"></div>
      <div id="projects-section" class="section"></div>
      <div id="experience-section" class="section"></div>
      <div id="education-section" class="section"></div>
      <div id="blog-section" class="section"></div>
      <div id="contact-section" class="section"></div>
    `;
    // Renderizar contenido en cada sección
    ProfileView.render(ProfileModel.getProfile(), 'profile-section');
    // About
    import('../models/aboutModel.js').then(({ AboutModel }) => {
      import('../views/aboutView.js').then(({ AboutView }) => {
        AboutView.render(AboutModel.getAbout(), 'about-section');
      });
    });
    SkillsView.render(SkillsModel.getSkills(), 'skills-section');
    await ProjectsView.render('projects-section');
    ExperienceView.render(ExperienceModel.getExperience(), 'experience-section');
    // Education
    import('../models/educationModel.js').then(({ EducationModel }) => {
      import('../views/educationView.js').then(({ EducationView }) => {
        EducationView.render(EducationModel.getEducation(), 'education-section');
      });
    });
    // Blog
    import('../models/blogModel.js').then(({ BlogModel }) => {
      window.BlogModel = BlogModel;
      import('../views/blogView.js').then(({ BlogView }) => {
        BlogView.render('blog-section');
      });
    });
    ContactView.render('contact-section');
    // Mostrar solo la sección activa
    AppController.setupNavigation();
  },
  setupNavigation() {
    const buttons = document.querySelectorAll('.nav-btn');
    const sections = {
      profile: document.getElementById('profile-section'),
      about: document.getElementById('about-section'),
      skills: document.getElementById('skills-section'),
      projects: document.getElementById('projects-section'),
      experience: document.getElementById('experience-section'),
      education: document.getElementById('education-section'),
      blog: document.getElementById('blog-section'),
      contact: document.getElementById('contact-section')
    };
    function showSection(key) {
      Object.entries(sections).forEach(([k, sec]) => {
        if (k === key) {
          sec.classList.add('active');
        } else {
          sec.classList.remove('active');
        }
      });
      buttons.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.section === key);
      });
    }
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        showSection(btn.dataset.section);
      });
    });
    // Mostrar perfil por defecto
    showSection('profile');
  }
};
