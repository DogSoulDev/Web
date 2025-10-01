import { ANIMATION, CSS_CLASSES } from '../config/appConfig.js';

/**
 * Projects Controller
 * Handles all DOM interactions and events for Projects section
 * Follows MVC pattern - separates business logic from view
 * Follows SOLID principles - Single Responsibility
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
    
    if (!video) {
      console.error('Video element not found in panel');
      this.isVideoPlaying = false;
      return;
    }
    
    video.classList.add(CSS_CLASSES.IS_PLAYING);
    panel.setAttribute('disabled', 'true');
    
    // Simulate video duration
    setTimeout(() => this.enableVideo(panel), ANIMATION.PROJECT_VIDEO_DURATION);
  }

  /**
   * Enable video after animation completes
   * @param {HTMLElement} panel - Panel to enable
   */
  enableVideo(panel) {
    this.isVideoPlaying = false;
    panel.removeAttribute('disabled');
    panel.classList.remove(CSS_CLASSES.IS_PLAYING);
    panel.classList.add(CSS_CLASSES.IS_ENDED);
    
    const video = panel.querySelector('.project-video');
    if (video) {
      video.classList.remove(CSS_CLASSES.IS_PLAYING);
    }
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
    }, ANIMATION.MAIN_CONTENT_DELAY);
  }
}
