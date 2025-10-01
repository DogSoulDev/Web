/**
 * Projects Controller
 * Handles all DOM interactions and events for Projects section
 * Follows MVC pattern - separates business logic from view
 */
export class ProjectsController {
  constructor() {
    this.isVideoPlaying = false;
  }

  /**
   * Initialize event listeners after view is rendered
   */
  init() {
    this.bindEvents();
    this.showMainContent();
  }

  /**
   * Bind click events to project panels
   */
  bindEvents() {
    const panels = document.querySelectorAll('.project-panel');
    panels.forEach(panel => {
      panel.addEventListener('click', () => this.handlePanelClick(panel));
    });
  }

  /**
   * Handle project panel click
   * @param {HTMLElement} panel - The clicked panel element
   */
  handlePanelClick(panel) {
    if (!this.isVideoPlaying) {
      this.startVideo(panel);
    }
  }

  /**
   * Start video animation for project panel
   * @param {HTMLElement} panel - Panel to animate
   */
  startVideo(panel) {
    this.isVideoPlaying = true;
    const video = panel.querySelector('.project-video');
    video.classList.add('is-playing');
    panel.setAttribute('disabled', '');
    
    // Simulate video duration (4 seconds)
    setTimeout(() => this.enableVideo(panel), 4000);
  }

  /**
   * Enable video after animation completes
   * @param {HTMLElement} panel - Panel to enable
   */
  enableVideo(panel) {
    this.isVideoPlaying = false;
    panel.removeAttribute('disabled');
    panel.classList.remove('is-playing');
    panel.classList.add('is-ended');
    
    const video = panel.querySelector('.project-video');
    video.classList.remove('is-playing');
  }

  /**
   * Show main content after loading delay
   */
  showMainContent() {
    setTimeout(() => {
      const main = document.querySelector('.projects-main');
      if (main) {
        main.style.display = 'grid';
      }
    }, 500);
  }
}
