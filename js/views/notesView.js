import { NotesModel } from '../models/notesModel.js';
import { BaseView } from './BaseView.js';
import { CSS_CLASSES, MESSAGES } from '../config/appConfig.js';
import { NotesController } from '../controllers/notesController.js';

/**
 * Notes View
 * Follows MVC pattern and extends BaseView for DRY
 * Only responsible for rendering HTML - no business logic
 */
export class NotesView extends BaseView {
  constructor() {
    super(new NotesModel());
    this.controller = null;
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
      </div>
    `;
  }

  afterRender() {
    console.log('[NotesView] afterRender called');
    
    // Pequeño delay para asegurar que el DOM esté completamente listo
    setTimeout(() => {
      console.log('[NotesView] Starting visualization initialization');
      
      // Verificar que el canvas existe
      const canvas = document.getElementById('networkCanvas');
      if (!canvas) {
        console.error('[NotesView] Canvas element not found!');
        this.showVisualizationError();
        return;
      }
      console.log('[NotesView] Canvas element found:', canvas);
      
      // Importar dinámicamente el módulo de visualización
      import('../notesCanvas.js').then(module => {
        console.log('[NotesView] notesCanvas.js loaded successfully', module);
        
        const notes = this.model.getNotes();
        console.log('[NotesView] Notes data:', notes);
        console.log('[NotesView] Number of nodes:', notes.nodes?.length);
        
        const NetworkVisualization = module.default || module.NetworkVisualization;
        console.log('[NotesView] NetworkVisualization class:', NetworkVisualization);
        
        if (!NetworkVisualization) {
          throw new Error('NetworkVisualization class not found in module');
        }
        
        const network = new NetworkVisualization('networkCanvas', notes);
        console.log('[NotesView] NetworkVisualization instance created:', network);
        
        // Initialize controller with network instance
        this.controller = new NotesController(network);
        this.controller.init();
        console.log('[NotesView] Controller initialized');
      }).catch(error => {
        console.error('[NotesView] Error loading NetworkVisualization:', error);
        console.error('[NotesView] Error stack:', error.stack);
        this.showVisualizationError();
      });
    }, 100);
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
