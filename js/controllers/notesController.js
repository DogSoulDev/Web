import { CSS_CLASSES } from '../config/appConfig.js';

/**
 * Notes Controller
 * Handles all DOM interactions and events for Notes section
 * Follows MVC pattern - separates business logic from view
 * Follows SOLID principles - Single Responsibility
 */
export class NotesController {
  constructor(network) {
    this.network = network;
  }

  /**
   * Initialize event listeners after view is rendered
   */
  init() {
    this.bindKnowledgeListEvents();
  }

  /**
   * Bind knowledge list control events
   * Follows Single Responsibility Principle
   */
  bindKnowledgeListEvents() {
    const toggleListBtn = document.getElementById('toggleListBtn');
    const closeListBtn = document.getElementById('closeListBtn');
    const resetZoomBtn = document.getElementById('resetZoomBtn');
    const knowledgeList = document.getElementById('knowledgeList');
    
    if (!toggleListBtn || !knowledgeList) return;
    
    toggleListBtn.addEventListener('click', () => {
      this.toggleKnowledgeList(knowledgeList, toggleListBtn);
    });
    
    closeListBtn?.addEventListener('click', () => {
      this.closeKnowledgeList(knowledgeList, toggleListBtn);
    });
    
    resetZoomBtn?.addEventListener('click', () => {
      this.resetNetworkView();
    });
  }

  /**
   * Toggle knowledge list visibility
   * @param {HTMLElement} list - Knowledge list element
   * @param {HTMLElement} button - Toggle button element
   */
  toggleKnowledgeList(list, button) {
    list.classList.toggle(CSS_CLASSES.HIDDEN);
    const isHidden = list.classList.contains(CSS_CLASSES.HIDDEN);
    button.innerHTML = isHidden 
      ? '<span>📋</span> Show Full Knowledge List'
      : '<span>📋</span> Hide Knowledge List';
  }

  /**
   * Close knowledge list
   * @param {HTMLElement} list - Knowledge list element
   * @param {HTMLElement} button - Toggle button element
   */
  closeKnowledgeList(list, button) {
    list.classList.add(CSS_CLASSES.HIDDEN);
    button.innerHTML = '<span>📋</span> Show Full Knowledge List';
  }

  /**
   * Reset network zoom and pan
   */
  resetNetworkView() {
    if (this.network && typeof this.network.resetView === 'function') {
      this.network.resetView();
    }
  }
}
