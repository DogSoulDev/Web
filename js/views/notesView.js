import { NotesModel } from '../models/notesModel.js';

export class NotesView {
  constructor() {
    this.model = new NotesModel();
  }

  render() {
    const notes = this.model.getNotes();
    return `
      <div class="section notes-whiteboard">
        <h2 class="section-title manga-title">${notes.title}</h2>
        <p class="notes-description">${notes.description}</p>
        
        <div class="whiteboard-container">
          <canvas id="notesCanvas"></canvas>
          <div class="whiteboard-controls">
            <button class="control-btn" id="addNode">➕ Add Note</button>
            <button class="control-btn" id="clearCanvas">🗑️ Clear All</button>
            <button class="control-btn" id="resetCanvas">🔄 Reset</button>
          </div>
        </div>
        
        <div class="notes-instructions">
          <div class="instruction-bubble">
            <p><strong>💡 Instructions (Desktop):</strong></p>
            <ul>
              <li>🖱️ <strong>Drag:</strong> Click and drag notes to reposition</li>
              <li>🔗 <strong>Connect:</strong> Hold Shift + Click on two notes to connect</li>
              <li>➕ <strong>Add:</strong> Double-click empty space to add new note</li>
              <li>❌ <strong>Delete:</strong> Select note and press Delete key</li>
            </ul>
            <p><strong>📱 Instructions (Mobile):</strong></p>
            <ul>
              <li>👆 <strong>Move:</strong> Tap and drag notes</li>
              <li>🔗 <strong>Connect:</strong> Long press (1s) on a note, drag to another</li>
              <li>➕ <strong>Add:</strong> Double tap empty space</li>
              <li>🗑️ <strong>Delete:</strong> Use "Clear All" button</li>
            </ul>
            <p class="notes-persistence">✨ <strong>All changes are saved automatically and visible to everyone!</strong></p>
          </div>
        </div>
      </div>
    `;
  }

  afterRender() {
    // Inicializar el canvas después de renderizar
    if (typeof NotesCanvas !== 'undefined') {
      const notes = this.model.getNotes();
      new NotesCanvas('notesCanvas', notes.initialNodes);
    }
  }
}
