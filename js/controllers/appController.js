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
  init() {
    // Renderizar cada sección usando MVC
    ProfileView.render(ProfileModel.getProfile());
    SkillsView.render(SkillsModel.getSkills());
    ProjectsView.render(ProjectsModel.getProjects());
    ExperienceView.render(ExperienceModel.getExperience());
    ContactView.render();
  }
};
