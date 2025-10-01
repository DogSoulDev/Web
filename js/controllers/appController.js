import { ProfileView } from '../views/profileView.js';
import { ProjectsView } from '../views/projectsView.js';
import { ExperienceView } from '../views/experienceView.js';
import { EducationView } from '../views/educationView.js';
import { NotesView } from '../views/notesView.js';
import { ContactView } from '../views/contactView.js';
import { CSS_CLASSES, MESSAGES } from '../config/appConfig.js';

/**
 * App Controller
 * Main controller that orchestrates the application
 * Follows MVC pattern and SOLID principles:
 * - Single Responsibility: Only manages view switching and app state
 * - Open/Closed: Can be extended without modification
 * - Dependency Inversion: Depends on View abstractions, not concrete implementations
 */
export class AppController {
  constructor() {
    this.appElement = document.getElementById('app');
    this.currentSection = 'profile';
    this.views = this.initializeViews();
  }

  /**
   * Initialize all views
   * @returns {Object} Map of view instances
   */
  initializeViews() {
    return {
      profile: new ProfileView(),
      projects: new ProjectsView(),
      experience: new ExperienceView(),
      education: new EducationView(),
      notes: new NotesView(),
      contact: new ContactView()
    };
  }

  /**
   * Initialize the application
   */
  async init() {
    this.bindEvents();
    await this.renderSection(this.currentSection);
  }

  /**
   * Bind navigation events
   */
  bindEvents() {
    document.querySelectorAll('.nav-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const section = e.target.dataset.section;
        if (section) {
          this.switchSection(section);
        }
      });
    });
  }

  /**
   * Switch to a different section
   * @param {string} section - Section name to switch to
   */
  switchSection(section) {
    // Update navigation state
    this.updateNavigation(section);
    
    // Render the section
    this.renderSection(section);
    
    // Update current section
    this.currentSection = section;
  }

  /**
   * Update navigation button states
   * @param {string} activeSection - The active section
   */
  updateNavigation(activeSection) {
    document.querySelectorAll('.nav-btn').forEach(btn => {
      btn.classList.remove(CSS_CLASSES.ACTIVE);
    });
    
    const activeBtn = document.querySelector(`[data-section="${activeSection}"]`);
    if (activeBtn) {
      activeBtn.classList.add(CSS_CLASSES.ACTIVE);
    }
  }

  /**
   * Render a section view
   * @param {string} section - Section name to render
   */
  async renderSection(section) {
    const view = this.views[section];
    
    if (!view) {
      console.error(`${MESSAGES.ERROR.SECTION_NOT_FOUND}: "${section}"`);
      this.renderError();
      return;
    }
    
    try {
      // Render the view
      const html = await view.render();
      this.appElement.innerHTML = html;
      
      // Call afterRender lifecycle hook if exists
      if (typeof view.afterRender === 'function') {
        view.afterRender();
      }
    } catch (error) {
      console.error(`Error rendering section "${section}":`, error);
      this.renderError();
    }
  }

  /**
   * Render error message
   */
  renderError() {
    this.appElement.innerHTML = `
      <div class="${CSS_CLASSES.ERROR_CONTAINER}">
        <h2>Oops! Something went wrong</h2>
        <p>${MESSAGES.INFO.REFRESH_PAGE}</p>
      </div>
    `;
  }
}