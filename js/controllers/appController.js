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
    // Renderizar cada sección usando MVC
    window.ProjectsModel = ProjectsModel; // Para acceso global en ProjectsView
    ProfileView.render(ProfileModel.getProfile());
    SkillsView.render(SkillsModel.getSkills());
    await ProjectsView.render();
    ExperienceView.render(ExperienceModel.getExperience());
    ContactView.render();
  }
};
