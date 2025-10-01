import { NotesModel } from '../models/notesModel.js';

export class NotesView {
  constructor() {
    this.model = new NotesModel();
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
    if (typeof NetworkVisualization !== 'undefined') {
      const notes = this.model.getNotes();
      new NetworkVisualization('networkCanvas', notes);
    }
  }
}
