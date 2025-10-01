import { NotesModel } from '../models/notesModel.js';
import { BaseView } from './BaseView.js';
import { CSS_CLASSES, MESSAGES } from '../config/appConfig.js';

/**
 * Notes View
 * Follows MVC pattern and extends BaseView for DRY
 */
export class NotesView extends BaseView {
  constructor() {
    super(new NotesModel());
  }

  render() {
    const notes = this.model.getNotes();
    return `
      <div class="section notes-network">
        <h2 class="section-title manga-title">${notes.title}</h2>
        <p class="notes-description">${notes.description}</p>
        
        <div class="network-controls">
          <button id="toggleListBtn" class="notes-control-btn">
            <span>📋</span> Show Full Knowledge List
          </button>
          <button id="resetZoomBtn" class="notes-control-btn">
            <span>🔄</span> Reset View
          </button>
        </div>
        
        <div class="network-container">
          <canvas id="networkCanvas"></canvas>
          <div id="nodeInfo" class="node-info-panel ${CSS_CLASSES.HIDDEN}">
            <h3 id="nodeTitle"></h3>
            <div id="nodeDescription"></div>
          </div>
        </div>
        
        <div id="knowledgeList" class="knowledge-list ${CSS_CLASSES.HIDDEN}">
          <div class="knowledge-list-header">
            <h3>📚 Complete Knowledge Base</h3>
            <button id="closeListBtn" class="close-list-btn">✕</button>
          </div>
          <div class="knowledge-list-content">
            ${notes.nodes.map((node, index) => `
              <div class="knowledge-item">
                <div class="knowledge-item-header">
                  <span class="knowledge-number">${index + 1}</span>
                  <h4>${this.escapeHtml(node.label)}</h4>
                </div>
                <p class="knowledge-category">${this.escapeHtml(node.category)}</p>
                <p class="knowledge-info">${this.escapeHtml(node.info)}</p>
              </div>
            `).join('')}
          </div>
        </div>
        
        <div class="network-legend">
          <p>💡 <strong>${MESSAGES.INFO.HOVER_NODES}</strong></p>
          <p>🖱️ <strong>${MESSAGES.INFO.ZOOM_PAN}</strong></p>
        </div>
      </div>
    `;
  }

  afterRender() {
    // Importar dinámicamente el módulo de visualización
    import('../notesCanvas.js').then(module => {
      const notes = this.model.getNotes();
      const NetworkVisualization = module.default || module.NetworkVisualization;
      this.network = new NetworkVisualization('networkCanvas', notes);
      
      // Bind event listeners
      this.bindKnowledgeListEvents();
    }).catch(error => {
      console.error('Error loading NetworkVisualization:', error);
      this.showVisualizationError();
    });
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

  /**
   * Show error message when visualization fails to load
   */
  showVisualizationError() {
    const container = document.querySelector('.network-container');
    if (container) {
      container.innerHTML = `
        <div class="error-message" style="padding: 2rem; text-align: center;">
          <p style="color: var(--manga-red); font-weight: bold;">⚠️ ${MESSAGES.ERROR.LOAD_VISUALIZATION}</p>
          <p>${MESSAGES.INFO.REFRESH_PAGE}</p>
        </div>
      `;
    }
  }
}
