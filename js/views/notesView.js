import { NotesModel } from '../models/notesModel.js';
import { BaseView } from './BaseView.js';

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
        
        <div class="network-container">
          <canvas id="networkCanvas"></canvas>
          <div id="nodeInfo" class="node-info-panel hidden">
            <h3 id="nodeTitle"></h3>
            <p id="nodeDescription"></p>
          </div>
        </div>
        
        <div class="network-legend">
          <p>💡 <strong>Hover over nodes</strong> to see detailed information</p>
          <p>🔗 <strong>Lines represent</strong> connections and dependencies</p>
        </div>
      </div>
    `;
  }

  afterRender() {
    // Importar dinámicamente el módulo de visualización
    import('../notesCanvas.js').then(module => {
      const notes = this.model.getNotes();
      const NetworkVisualization = module.default || module.NetworkVisualization;
      new NetworkVisualization('networkCanvas', notes);
    }).catch(error => {
      console.error('Error loading NetworkVisualization:', error);
    });
  }
}
